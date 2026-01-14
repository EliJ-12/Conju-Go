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
import { Timer } from "@/components/Timer";
import { checkAnswer } from "@/lib/gameUtils";
import { getRandomVerb } from "@shared/verbs";
import type { Verb, Tense, Pronoun, GameSettings } from "@shared/schema";

const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

interface SoloModeProps {
  timed?: boolean;
}

type GamePhase = "setup" | "playing" | "feedback" | "finished";

interface ConjugationInput {
  pronoun: Pronoun;
  value: string;
  isCorrect?: boolean;
}

export default function SoloMode({ timed = false }: SoloModeProps) {
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState<GamePhase>("setup");
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [currentVerb, setCurrentVerb] = useState<Verb | null>(null);
  const [currentTense, setCurrentTense] = useState<Tense>("présent");
  const [inputs, setInputs] = useState<ConjugationInput[]>([]);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const initializeQuestion = useCallback(() => {
    if (!settings) return;

    const verb = getRandomVerb();
    const tense = settings.tenses[Math.floor(Math.random() * settings.tenses.length)];

    setCurrentVerb(verb);
    setCurrentTense(tense);
    setInputs(
      pronouns.map((p) => ({
        pronoun: p,
        value: "",
        isCorrect: undefined,
      }))
    );

    if (timed && settings.timeLimit) {
      setTimeRemaining(settings.timeLimit);
    }
  }, [settings, timed]);

  const handleStart = (gameSettings: GameSettings) => {
    setSettings(gameSettings);
    setPhase("playing");
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setQuestionNumber(1);
    setCorrectAnswers(0);
  };

  useEffect(() => {
    if (phase === "playing" && settings) {
      initializeQuestion();
    }
  }, [phase, settings, initializeQuestion]);

  const handleInputChange = (pronoun: Pronoun, value: string) => {
    setInputs((prev) =>
      prev.map((input) =>
        input.pronoun === pronoun ? { ...input, value } : input
      )
    );
  };

  const handleSubmit = () => {
    if (!currentVerb) return;

    const results = inputs.map((input) => {
      const correctAnswer = currentVerb.conjugations[currentTense][input.pronoun];
      const isCorrect =
        correctAnswer !== "-" && checkAnswer(input.value, correctAnswer);
      return { ...input, isCorrect };
    });

    setInputs(results);

    const validInputs = results.filter(
      (r) => currentVerb.conjugations[currentTense][r.pronoun] !== "-"
    );
    const allCorrect = validInputs.every((r) => r.isCorrect);
    const correctCount = validInputs.filter((r) => r.isCorrect).length;

    if (allCorrect) {
      const basePoints = 100;
      const streakBonus = streak * 10;
      const timeBonus = timed && settings?.timeLimit
        ? Math.floor((timeRemaining / settings.timeLimit) * 50)
        : 0;

      setScore((prev) => prev + basePoints + streakBonus + timeBonus);
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

  const handleTimeUp = () => {
    handleSubmit();
  };

  const handleNext = () => {
    if (!settings) return;

    if (questionNumber >= settings.questionCount) {
      setPhase("finished");
    } else {
      setQuestionNumber((prev) => prev + 1);
      setPhase("playing");
    }
  };

  const handleRestart = () => {
    setPhase("setup");
    setSettings(null);
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

        <div className="container mx-auto">
          <h1 className="text-3xl font-display font-bold text-center mb-8">
            {timed ? "Modo Contrarreloj" : "Modo Solitario"}
          </h1>
          <TenseSelector
            onStart={handleStart}
            onBack={() => setLocation("/")}
            showTimer={true}
            showQuestionCount={true}
            defaultQuestionCount={10}
            forceTimer={timed}
          />
        </div>
      </div>
    );
  }

  if (phase === "finished") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-md">
          <GameStatsCard
            title="Partida terminada!"
            score={score}
            correctAnswers={correctAnswers}
            totalQuestions={settings?.questionCount || 0}
            bestStreak={bestStreak}
          />

          <div className="flex gap-3 mt-6">
            <Button
              variant="outline"
              onClick={() => setLocation("/")}
              className="flex-1"
              data-testid="button-home"
            >
              Inicio
            </Button>
            <Button onClick={handleRestart} className="flex-1" data-testid="button-restart">
              <RotateCcw className="h-4 w-4 mr-2" />
              Jugar de nuevo
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <Confetti isActive={showConfetti} />

      <header className="container mx-auto flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={handleRestart} data-testid="button-exit">
          <X className="h-4 w-4 mr-2" />
          Salir
        </Button>
        <Badge variant="secondary">
          {questionNumber} / {settings?.questionCount}
        </Badge>
        <ThemeToggle />
      </header>

      <main className="container mx-auto max-w-2xl">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <ScoreDisplay
            score={score}
            streak={streak}
            bestStreak={bestStreak}
            showDetails
          />
          {timed && settings?.timeLimit && phase === "playing" && (
            <Timer
              totalSeconds={settings.timeLimit}
              onTimeUp={handleTimeUp}
              size="sm"
            />
          )}
        </div>

        <Card className="mb-6">
          <CardHeader className="text-center pb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Badge variant="outline" className="text-xs">
                {currentTense}
              </Badge>
              {currentVerb?.type === "irregular" && (
                <Badge variant="destructive" className="text-xs">
                  Irregular
                </Badge>
              )}
            </div>
            <CardTitle className="text-4xl font-display font-bold text-primary">
              {currentVerb?.infinitive}
            </CardTitle>
            <p className="text-muted-foreground">{currentVerb?.translation}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {inputs.map((input) => {
                const correctAnswer =
                  currentVerb?.conjugations[currentTense][input.pronoun];
                const isImpersonal = correctAnswer === "-";

                if (isImpersonal) return null;

                return (
                  <div key={input.pronoun} className="space-y-1">
                    <label className="text-sm font-medium text-muted-foreground">
                      {input.pronoun}
                    </label>
                    <div className="relative">
                      <Input
                        value={input.value}
                        onChange={(e) =>
                          handleInputChange(input.pronoun, e.target.value)
                        }
                        disabled={phase === "feedback"}
                        className={
                          phase === "feedback"
                            ? input.isCorrect
                              ? "border-green-500 bg-green-500/10"
                              : "border-red-500 bg-red-500/10"
                            : ""
                        }
                        placeholder={`${input.pronoun}...`}
                        data-testid={`input-${input.pronoun.replace("/", "-")}`}
                      />
                      {phase === "feedback" && (
                        <div className="absolute right-2 top-1/2 -translate-y-1/2">
                          {input.isCorrect ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    {phase === "feedback" && !input.isCorrect && (
                      <p className="text-xs text-red-500">
                        Correcto: {correctAnswer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {phase === "playing" && (
          <Button
            onClick={handleSubmit}
            className="w-full"
            size="lg"
            data-testid="button-check"
          >
            <Check className="h-5 w-5 mr-2" />
            Verificar
          </Button>
        )}

        {phase === "feedback" && (
          <div className="space-y-4">
            <FeedbackMessage
              type={inputs.every((i) => i.isCorrect !== false) ? "success" : "error"}
              title={getRandomEncouragement(
                inputs.every((i) => i.isCorrect !== false) ? "success" : "error"
              )}
            />
            <Button
              onClick={handleNext}
              className="w-full"
              size="lg"
              data-testid="button-next"
            >
              {questionNumber >= (settings?.questionCount || 0)
                ? "Ver resultados"
                : "Siguiente"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
