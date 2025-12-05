import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TenseSelector } from "@/components/TenseSelector";
import { KahootOption } from "@/components/KahootOption";
import { ScoreDisplay, GameStatsCard } from "@/components/ScoreDisplay";
import { Timer } from "@/components/Timer";
import { Confetti } from "@/components/Confetti";
import { ThemeToggle } from "@/components/ThemeToggle";
import { generateKahootQuestions, calculateScore } from "@/lib/gameUtils";
import type { KahootQuestion, GameSettings } from "@shared/schema";

type GamePhase = "setup" | "playing" | "answered" | "finished";

const TIME_PER_QUESTION = 15;

export default function KahootSolo() {
  const [, setLocation] = useLocation();
  const [phase, setPhase] = useState<GamePhase>("setup");
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [questions, setQuestions] = useState<KahootQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(TIME_PER_QUESTION);
  const [questionStartTime, setQuestionStartTime] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0
    ? ((currentQuestionIndex + 1) / questions.length) * 100
    : 0;

  const handleStart = (gameSettings: GameSettings) => {
    const generatedQuestions = generateKahootQuestions(
      gameSettings.questionCount,
      gameSettings.tenses
    );
    setSettings(gameSettings);
    setQuestions(generatedQuestions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setBestStreak(0);
    setCorrectAnswers(0);
    setSelectedAnswer(null);
    setTimeRemaining(gameSettings.timeLimit || TIME_PER_QUESTION);
    setQuestionStartTime(Date.now());
    setPhase("playing");
  };

  const handleAnswer = useCallback((answer: string) => {
    if (phase !== "playing" || selectedAnswer) return;

    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion?.correctAnswer;
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const maxTime = settings?.timeLimit || TIME_PER_QUESTION;

    if (isCorrect) {
      const points = calculateScore(true, maxTime - timeTaken, maxTime);
      setScore((prev) => prev + points);
      setStreak((prev) => {
        const newStreak = prev + 1;
        if (newStreak > bestStreak) setBestStreak(newStreak);
        return newStreak;
      });
      setCorrectAnswers((prev) => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    } else {
      setStreak(0);
    }

    setPhase("answered");
  }, [phase, selectedAnswer, currentQuestion, questionStartTime, settings, bestStreak]);

  const handleTimeUp = useCallback(() => {
    if (phase === "playing" && !selectedAnswer) {
      setSelectedAnswer("__timeout__");
      setStreak(0);
      setPhase("answered");
    }
  }, [phase, selectedAnswer]);

  const handleNext = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      setPhase("finished");
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeRemaining(settings?.timeLimit || TIME_PER_QUESTION);
      setQuestionStartTime(Date.now());
      setPhase("playing");
    }
  };

  const handleRestart = () => {
    setPhase("setup");
    setSettings(null);
    setQuestions([]);
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
            Kahoot Solo
          </h1>
          <TenseSelector
            onStart={handleStart}
            onBack={() => setLocation("/")}
            showTimer={true}
            showQuestionCount={true}
            defaultQuestionCount={10}
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
            totalQuestions={questions.length}
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
          {currentQuestionIndex + 1} / {questions.length}
        </Badge>
        <ThemeToggle />
      </header>

      <main className="container mx-auto max-w-2xl">
        <div className="mb-4">
          <Progress value={progress} className="h-2" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <ScoreDisplay score={score} streak={streak} />
          {phase === "playing" && (
            <Timer
              key={currentQuestionIndex}
              totalSeconds={settings?.timeLimit || TIME_PER_QUESTION}
              onTimeUp={handleTimeUp}
              size="md"
            />
          )}
        </div>

        {currentQuestion && (
          <Card className="mb-6">
            <CardContent className="pt-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Badge variant="outline">{currentQuestion.tense}</Badge>
                {currentQuestion.verb.type === "irregular" && (
                  <Badge variant="destructive">Irregular</Badge>
                )}
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold mb-2">
                Conjugar:{" "}
                <span className="text-primary">{currentQuestion.verb.infinitive}</span>
              </h2>

              <p className="text-muted-foreground mb-4">
                ({currentQuestion.verb.translation})
              </p>

              <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg">
                <span className="text-lg font-semibold text-primary">
                  {currentQuestion.pronoun} ___________
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {currentQuestion?.options.map((option, index) => (
            <KahootOption
              key={index}
              option={option}
              index={index}
              onClick={() => handleAnswer(option)}
              disabled={phase === "answered"}
              isSelected={selectedAnswer === option}
              isCorrect={option === currentQuestion.correctAnswer}
              showResult={phase === "answered"}
            />
          ))}
        </div>

        {phase === "answered" && (
          <div className="mt-6">
            <Button
              onClick={handleNext}
              className="w-full"
              size="lg"
              data-testid="button-next"
            >
              {currentQuestionIndex >= questions.length - 1
                ? "Ver resultados"
                : "Siguiente"}
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
