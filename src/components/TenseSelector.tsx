import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import type { Tense, GameSettings } from "@shared/schema";

interface TenseSelectorProps {
  onStart: (settings: GameSettings) => void;
  onBack: () => void;
  showTimer?: boolean;
  showQuestionCount?: boolean;
  defaultQuestionCount?: number;
  forceTimer?: boolean;
}

const tenseInfo: Record<Tense, { label: string; description: string; color: string }> = {
  "présent": {
    label: "Présent",
    description: "Acciones actuales o habituales",
    color: "bg-blue-500",
  },
  "passé composé": {
    label: "Passé Composé",
    description: "Acciones completadas en el pasado",
    color: "bg-green-500",
  },
  "imparfait": {
    label: "Imparfait",
    description: "Acciones continuas o habituales en el pasado",
    color: "bg-purple-500",
  },
  "plus-que-parfait": {
    label: "Plus-que-parfait",
    description: "Acciones anteriores a otra acción pasada",
    color: "bg-amber-500",
  },
};

export function TenseSelector({
  onStart,
  onBack,
  showTimer = false,
  showQuestionCount = true,
  defaultQuestionCount = 10,
  forceTimer = false,
}: TenseSelectorProps) {
  const [selectedTenses, setSelectedTenses] = useState<Tense[]>(["présent"]);
  const [useTimer, setUseTimer] = useState(forceTimer);
  const [timeLimit, setTimeLimit] = useState(30);
  const [questionCount, setQuestionCount] = useState(defaultQuestionCount);

  const toggleTense = (tense: Tense) => {
    setSelectedTenses((prev) => {
      if (prev.includes(tense)) {
        if (prev.length === 1) return prev;
        return prev.filter((t) => t !== tense);
      }
      return [...prev, tense];
    });
  };

  const handleStart = () => {
    const settings: GameSettings = {
      tenses: selectedTenses,
      questionCount,
      timeLimit: showTimer && (useTimer || forceTimer) ? timeLimit : undefined,
    };
    onStart(settings);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-slide-up">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex items-center gap-3">
            <Clock className="h-6 w-6 text-primary" />
            Configura tu partida
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Label className="text-base font-semibold mb-3 block">
              Tiempos verbales
            </Label>
            <div className="grid gap-3">
              {(Object.keys(tenseInfo) as Tense[]).map((tense) => {
                const info = tenseInfo[tense];
                const isSelected = selectedTenses.includes(tense);
                return (
                  <div
                    key={tense}
                    onClick={() => toggleTense(tense)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    }`}
                    data-testid={`tense-${tense.replace(" ", "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${info.color} ${
                          isSelected ? "ring-4 ring-primary/30" : ""
                        }`}
                      />
                      <div className="flex-1">
                        <div className="font-semibold">{info.label}</div>
                        <div className="text-sm text-muted-foreground">
                          {info.description}
                        </div>
                      </div>
                      {isSelected && (
                        <Badge variant="default" className="ml-auto">
                          Activo
                        </Badge>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {showQuestionCount && (
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Numero de preguntas: {questionCount}
              </Label>
              <Slider
                value={[questionCount]}
                onValueChange={([value]) => setQuestionCount(value)}
                min={5}
                max={30}
                step={5}
                className="w-full"
                data-testid="slider-question-count"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>5</span>
                <span>30</span>
              </div>
            </div>
          )}

          {showTimer && (
            <div className="space-y-4">
              {!forceTimer && (
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="timer-switch"
                    className="text-base font-semibold"
                  >
                    Modo contrarreloj
                  </Label>
                  <Switch
                    id="timer-switch"
                    checked={useTimer}
                    onCheckedChange={setUseTimer}
                    data-testid="switch-timer"
                  />
                </div>
              )}

              {(useTimer || forceTimer) && (
                <div className="animate-slide-up">
                  <Label className="text-sm text-muted-foreground mb-3 block">
                    Tiempo por pregunta: {timeLimit} segundos
                  </Label>
                  <Slider
                    value={[timeLimit]}
                    onValueChange={([value]) => setTimeLimit(value)}
                    min={10}
                    max={60}
                    step={5}
                    className="w-full"
                    data-testid="slider-time-limit"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>10s</span>
                    <span>60s</span>
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button variant="outline" onClick={onBack} className="flex-1" data-testid="button-back">
              Volver
            </Button>
            <Button
              onClick={handleStart}
              className="flex-1 gap-2"
              disabled={selectedTenses.length === 0}
              data-testid="button-start-game"
            >
              Comenzar
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
