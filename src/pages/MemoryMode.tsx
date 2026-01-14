import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, RotateCcw, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MemoryCard } from "@/components/MemoryCard";
import { GameStatsCard } from "@/components/ScoreDisplay";
import { Confetti } from "@/components/Confetti";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateMemoryCards } from "@/lib/gameUtils";
import { frenchVerbs } from "@shared/verbs";
import type { MemoryCard as MemoryCardType } from "@shared/schema";

type GamePhase = "setup" | "playing" | "finished";

export default function MemoryMode() {
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState<GamePhase>("setup");
  const [cards, setCards] = useState<MemoryCardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [moves, setMoves] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [pairCount, setPairCount] = useState(8);

  const totalPairs = pairCount;

  const initializeGame = useCallback(() => {
    const newCards = generateMemoryCards(pairCount);
    setCards(newCards);
    setFlippedCards([]);
    setMatchedPairs(0);
    setMoves(0);
    setStartTime(Date.now());
    setElapsedTime(0);
    setPhase("playing");
  }, [pairCount]);

  useEffect(() => {
    if (phase !== "playing" || !startTime) return;

    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, startTime]);

  const handleCardClick = (cardId: number) => {
    if (isChecking) return;

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isFlipped || card.isMatched) return;

    if (flippedCards.length >= 2) return;

    const newFlipped = [...flippedCards, cardId];
    
    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves((prev) => prev + 1);

      const [firstId, secondId] = newFlipped;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);
      const isMatch = firstCard && secondCard && firstCard.verbId === secondCard.verbId;

      setTimeout(() => {
        setCards((prev) => {
          if (isMatch) {
            // Pareja correcta: mantener giradas
            return prev.map((c) => {
              if (c.id === firstId || c.id === secondId) {
                return { ...c, isMatched: true, isFlipped: true };
              }
              return c;
            });
          } else {
            // Pareja incorrecta: voltear de nuevo
            return prev.map((c) => {
              if (c.id === firstId || c.id === secondId) {
                return { ...c, isFlipped: false };
              }
              return c;
            });
          }
        });

        if (isMatch) {
          setMatchedPairs((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount === totalPairs) {
              setShowConfetti(true);
              setTimeout(() => {
                setShowConfetti(false);
                setPhase("finished");
              }, 2000);
            }
            return newCount;
          });
        }

        setFlippedCards([]);
        setIsChecking(false);
      }, isMatch ? 500 : 1000);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  if (phase === "setup") {
    return (
      <div className="min-h-screen bg-background p-4">
        <header className="container mx-auto flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <ThemeToggle />
        </header>

        <div className="container mx-auto max-w-md text-center">
          <h1 className="text-3xl font-display font-bold mb-8">Modo Memory</h1>

          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-4">
                Selecciona la cantidad de parejas
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {[6, 8, 10, 12].map((count) => (
                  <Button
                    key={count}
                    variant={pairCount === count ? "default" : "outline"}
                    onClick={() => setPairCount(count)}
                    data-testid={`button-pairs-${count}`}
                  >
                    {count} parejas
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setLocation("/")}
                className="flex-1"
                data-testid="button-back"
              >
                Volver
              </Button>
              <Button
                onClick={initializeGame}
                className="flex-1"
                data-testid="button-start"
              >
                Comenzar
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (phase === "finished") {
    const accuracy = Math.round((totalPairs / moves) * 100);
    const score = Math.max(0, 1000 - moves * 20 - elapsedTime * 2);
    const efficiency = moves > 0 ? Math.round((totalPairs / moves) * 100) : 0;
    const combo = Math.max(0, totalPairs - (moves - totalPairs));

    // Obtener las parejas de verbos resueltas
    const matchedPairsList: Array<{ french: string; spanish: string }> = [];
    const processedVerbIds = new Set<number>();
    
    cards.forEach((card) => {
      if (card.isMatched && !processedVerbIds.has(card.verbId)) {
        const verb = frenchVerbs.find((v) => v.id === card.verbId);
        if (verb) {
          const frenchCard = cards.find((c) => c.verbId === card.verbId && c.type === "french" && c.isMatched);
          const spanishCard = cards.find((c) => c.verbId === card.verbId && c.type === "spanish" && c.isMatched);
          if (frenchCard && spanishCard) {
            matchedPairsList.push({
              french: frenchCard.content,
              spanish: spanishCard.content,
            });
            processedVerbIds.add(card.verbId);
          }
        }
      }
    });

    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="mb-4">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-display font-bold mb-2">¡Completado!</h2>
                <p className="text-muted-foreground">Excelente trabajo</p>
              </div>
              
              {combo > 0 && (
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
                  <Badge variant="outline" className="bg-green-500/20 text-green-600 dark:text-green-400 mb-2">
                    COMBO x{combo}
                  </Badge>
                  <p className="text-sm text-muted-foreground">Parejas consecutivas sin errores</p>
                </div>
              )}

              <GameStatsCard
                title=""
                score={score}
                correctAnswers={totalPairs}
                totalQuestions={moves}
                bestStreak={efficiency}
                timeElapsed={elapsedTime}
              />
            </CardContent>
          </Card>

          {/* Mostrar parejas de verbos resueltas */}
          {matchedPairsList.length > 0 && (
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="text-xl font-display font-bold mb-4 text-center">
                  Parejas resueltas
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {matchedPairsList.map((pair, index) => (
                    <div
                      key={index}
                      className="p-3 bg-muted/50 rounded-lg border border-border"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex-1 text-center">
                          <Badge variant="outline" className="mb-1 bg-blue-500/10 text-blue-600 dark:text-blue-400">
                            FR
                          </Badge>
                          <p className="font-semibold text-sm">{pair.french}</p>
                        </div>
                        <div className="text-muted-foreground">=</div>
                        <div className="flex-1 text-center">
                          <Badge variant="outline" className="mb-1 bg-orange-500/10 text-orange-600 dark:text-orange-400">
                            ES
                          </Badge>
                          <p className="font-semibold text-sm">{pair.spanish}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-4 p-4 bg-muted rounded-lg text-center">
            <p className="text-sm text-muted-foreground">Tiempo total</p>
            <p className="text-2xl font-display font-bold">
              {formatTime(elapsedTime)}
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              className="flex-1"
              data-testid="button-home"
            >
              Inicio
            </Button>
            <Button
              onClick={() => {
                setPhase("setup");
              }}
              className="flex-1"
              data-testid="button-restart"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Jugar de nuevo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const gridCols =
    cards.length <= 12
      ? "grid-cols-3 sm:grid-cols-4"
      : cards.length <= 16
      ? "grid-cols-4"
      : "grid-cols-4 sm:grid-cols-6";

  return (
    <div className="min-h-screen bg-background p-4">
      <Confetti isActive={showConfetti} />

      <header className="container mx-auto flex flex-wrap items-center justify-between gap-4 mb-4">
        <Button
          variant="ghost"
          onClick={() => setPhase("setup")}
          data-testid="button-exit"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Salir
        </Button>

        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="gap-1">
            <Clock className="h-3 w-3" />
            {formatTime(elapsedTime)}
          </Badge>
          <Badge variant="outline">
            {matchedPairs}/{totalPairs} parejas
          </Badge>
          <Badge variant="outline">{moves} movimientos</Badge>
        </div>

        <ThemeToggle />
      </header>

      <main className="container mx-auto max-w-3xl">
        <div className={`grid ${gridCols} gap-2 sm:gap-3`}>
          {cards.map((card) => (
            <MemoryCard
              key={card.id}
              card={card}
              onClick={() => handleCardClick(card.id)}
              disabled={isChecking}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
