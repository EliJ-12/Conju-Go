import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, RotateCcw, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TenseSelector } from "@/components/TenseSelector";
import { ScoreDisplay, GameStatsCard } from "@/components/ScoreDisplay";
import { FeedbackMessage, getRandomEncouragement } from "@/components/FeedbackMessage";
import { Confetti } from "@/components/Confetti";
import { ThemeToggle } from "@/components/ThemeToggle";
import { checkAnswer } from "@/lib/gameUtils";
import { getRandomVerb } from "@shared/verbs";
import type { Verb, Tense, Pronoun, GameSettings } from "@shared/schema";

const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

type GamePhase = "setup" | "playing" | "feedback" | "finished";

interface Question {
  verb: Verb;
  tense: Tense;
  pronoun: Pronoun;
  correctAnswer: string;
}

export default function CompleteMode() {
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState<GamePhase>("setup");
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const generateQuestion = useCallback((): Question | null => {
    if (!settings) return null;

    try {
      let attempts = 0;
      const maxAttempts = 20;
      
      while (attempts < maxAttempts) {
        const verb = getRandomVerb();
        if (!verb) {
          attempts++;
          continue;
        }

        const tense = settings.tenses[Math.floor(Math.random() * settings.tenses.length)];
        if (!verb.conjugations[tense]) {
          attempts++;
          continue;
        }

        const validPronouns = pronouns.filter(
          (p) => verb.conjugations[tense][p] && verb.conjugations[tense][p] !== "-"
        );
        
        if (validPronouns.length === 0) {
          attempts++;
          continue;
        }
        
        const pronoun = validPronouns[Math.floor(Math.random() * validPronouns.length)];
        const correctAnswer = verb.conjugations[tense][pronoun];

        if (!correctAnswer || correctAnswer === "-") {
          attempts++;
          continue;
        }

        return {
          verb,
          tense,
          pronoun,
          correctAnswer,
        };
      }
      
      return null;
    } catch (error) {
      console.error("Error generando pregunta:", error);
      return null;
    }
  }, [settings]);

  const initializeQuestion = useCallback(() => {
    if (!settings) return;
    
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
      try {
        const verb = getRandomVerb();
        if (!verb) {
          attempts++;
          continue;
        }

        const tense = settings.tenses[Math.floor(Math.random() * settings.tenses.length)];
        if (!verb.conjugations[tense]) {
          attempts++;
          continue;
        }

        const validPronouns = pronouns.filter(
          (p) => verb.conjugations[tense][p] && verb.conjugations[tense][p] !== "-"
        );
        
        if (validPronouns.length === 0) {
          attempts++;
          continue;
        }
        
        const pronoun = validPronouns[Math.floor(Math.random() * validPronouns.length)];
        const correctAnswer = verb.conjugations[tense][pronoun];

        if (!correctAnswer || correctAnswer === "-") {
          attempts++;
          continue;
        }

        setCurrentQuestion({
          verb,
          tense,
          pronoun,
          correctAnswer,
        });
        setUserAnswer("");
        setIsCorrect(null);
        return;
      } catch (error) {
        console.error("Error generando pregunta:", error);
        attempts++;
      }
    }
    
    console.error("No se pudo generar una pregunta válida");
  }, [settings]);

  const handleStart = (gameSettings: GameSettings) => {
    setSettings(gameSettings);
    setPhase("playing");
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setQuestionNumber(1);
    setCorrectAnswers(0);
    setCurrentQuestion(null);
  };

  useEffect(() => {
    if (phase === "playing" && settings && !currentQuestion) {
      initializeQuestion();
    }
  }, [phase, settings, currentQuestion, initializeQuestion]);

  const handleSubmit = () => {
    if (!currentQuestion || !userAnswer.trim()) return;

    const correct = checkAnswer(userAnswer, currentQuestion.correctAnswer);
    setIsCorrect(correct);

    if (correct) {
      const basePoints = 100;
      const streakBonus = streak * 10;
      setScore((prev) => prev + basePoints + streakBonus);
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setCorrectAnswers((prev) => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    } else {
      setStreak(0);
    }

    setPhase("feedback");
  };

  const handleNext = () => {
    if (!settings) return;

    try {
      if (questionNumber >= settings.questionCount) {
        setPhase("finished");
      } else {
        setCurrentQuestion(null); // Resetear pregunta antes de generar nueva
        setUserAnswer("");
        setIsCorrect(null);
        setQuestionNumber((prev) => prev + 1);
        setPhase("playing");
      }
    } catch (error) {
      console.error("Error en handleNext:", error);
    }
  };

  const handleRestart = () => {
    setPhase("setup");
    setSettings(null);
    setCurrentQuestion(null);
    setUserAnswer("");
    setIsCorrect(null);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setQuestionNumber(0);
    setCorrectAnswers(0);
  };

  const getPronounLabel = (pronoun: Pronoun): string => {
    const labels: Record<Pronoun, string> = {
      je: "je (yo)",
      tu: "tu (tú)",
      "il/elle": "il/elle (él/ella)",
      nous: "nous (nosotros)",
      vous: "vous (vosotros/ustedes)",
      "ils/elles": "ils/elles (ellos/ellas)",
    };
    return labels[pronoun];
  };

  const getTenseLabel = (tense: Tense): string => {
    const labels: Record<Tense, string> = {
      présent: "Présent",
      "passé composé": "Passé composé",
      imparfait: "Imparfait",
    };
    return labels[tense];
  };

  const getTypeLabel = (type: string): string => {
    return type === "regular" ? "Regular" : "Irregular";
  };

  const getGroupLabel = (group: number): string => {
    return `Grupo ${group}`;
  };

  if (phase === "setup") {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Completar Verbos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Completa la forma verbal correcta. Cada pregunta muestra el verbo,
                su traducción, tipo y grupo. Practica conjugaciones específicas de
                forma dirigida.
              </p>
              <TenseSelector
                onStart={handleStart}
                onBack={() => setLocation("/")}
                showTimer={false}
                showQuestionCount={true}
                defaultQuestionCount={10}
              />
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  if (phase === "finished") {
    const accuracy = questionNumber > 0 ? Math.round((correctAnswers / questionNumber) * 100) : 0;

    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
            <Button
              variant="ghost"
              onClick={() => setLocation("/")}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Inicio
            </Button>
            <ThemeToggle />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <GameStatsCard
            title="¡Juego Completado!"
            score={score}
            correctAnswers={correctAnswers}
            totalQuestions={questionNumber}
            bestStreak={bestStreak}
          />

          <div className="flex gap-3 mt-6">
            <Button onClick={handleRestart} className="flex-1" variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Jugar de Nuevo
            </Button>
            <Button onClick={() => setLocation("/")} className="flex-1">
              Volver al Inicio
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6 text-center">
            <p className="text-muted-foreground mb-4">
              Generando pregunta...
            </p>
            <Button onClick={() => setLocation("/")} variant="outline">
              Volver al inicio
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Confetti isActive={showConfetti} />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-between gap-4 px-4">
          <Button
            variant="ghost"
            onClick={() => setLocation("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Salir
          </Button>
          <div className="flex items-center gap-4">
            <ScoreDisplay
              score={score}
              streak={streak}
              bestStreak={bestStreak}
              correctCount={correctAnswers}
              totalCount={questionNumber}
            />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-6 text-center">
          <Badge variant="secondary" className="text-sm">
            Pregunta {questionNumber} de {settings?.questionCount}
          </Badge>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-center">
              Completa la conjugación
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Información del verbo */}
            {currentQuestion.verb && (
              <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <Badge variant="outline" className="text-lg font-semibold px-3 py-1">
                    {currentQuestion.verb.infinitive || "N/A"}
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    {currentQuestion.verb.translation || "N/A"}
                  </Badge>
                  <Badge
                    variant={currentQuestion.verb.type === "regular" ? "default" : "destructive"}
                    className="px-3 py-1"
                  >
                    {getTypeLabel(currentQuestion.verb.type || "irregular")}
                  </Badge>
                  <Badge variant="outline" className="px-3 py-1">
                    {getGroupLabel(currentQuestion.verb.group || 3)}
                  </Badge>
                </div>
              </div>
            )}

            {/* Pregunta */}
            {currentQuestion && currentQuestion.pronoun && currentQuestion.tense && (
              <div className="text-center space-y-4">
                <div className="text-lg text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {getPronounLabel(currentQuestion.pronoun)}
                  </span>{" "}
                  en{" "}
                  <span className="font-semibold text-foreground">
                    {getTenseLabel(currentQuestion.tense)}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl font-bold">
                  <span>{currentQuestion.pronoun === "je" ? "Je" : currentQuestion.pronoun === "tu" ? "Tu" : currentQuestion.pronoun === "il/elle" ? "Il/Elle" : currentQuestion.pronoun === "nous" ? "Nous" : currentQuestion.pronoun === "vous" ? "Vous" : "Ils/Elles"}</span>
                  <Input
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && phase === "playing") {
                        handleSubmit();
                      }
                    }}
                    disabled={phase === "feedback"}
                    placeholder="..."
                    className="text-2xl md:text-3xl font-bold text-center max-w-xs h-14"
                    autoFocus
                  />
                </div>
              </div>
            )}

            {/* Feedback */}
            {phase === "feedback" && currentQuestion && isCorrect !== null && (
              <div className="mt-6">
                <FeedbackMessage
                  type={isCorrect === true ? "success" : "error"}
                  title={isCorrect === true ? "¡Correcto!" : "Incorrecto"}
                  message={
                    isCorrect === true
                      ? "¡Bien hecho!"
                      : getRandomEncouragement("error")
                  }
                  correctAnswer={
                    isCorrect === false && currentQuestion.correctAnswer ? currentQuestion.correctAnswer : undefined
                  }
                />
              </div>
            )}

            {/* Botones */}
            <div className="flex gap-3 pt-4">
              {phase === "playing" ? (
                <Button
                  onClick={handleSubmit}
                  disabled={!userAnswer.trim()}
                  className="flex-1"
                  size="lg"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Verificar
                </Button>
              ) : (
                <Button onClick={handleNext} className="flex-1" size="lg">
                  Siguiente
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

