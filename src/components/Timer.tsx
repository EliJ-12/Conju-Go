import { useEffect, useState } from "react";
import { formatTime } from "@/lib/gameUtils";

interface TimerProps {
  totalSeconds: number;
  onTimeUp: () => void;
  isPaused?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Timer({ totalSeconds, onTimeUp, isPaused = false, size = "md" }: TimerProps) {
  const [timeRemaining, setTimeRemaining] = useState(totalSeconds);

  useEffect(() => {
    setTimeRemaining(totalSeconds);
  }, [totalSeconds]);

  useEffect(() => {
    if (isPaused || timeRemaining <= 0) return;

    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, timeRemaining, onTimeUp]);

  const percentage = (timeRemaining / totalSeconds) * 100;
  const isUrgent = timeRemaining <= 5;
  const isWarning = timeRemaining <= 10 && !isUrgent;

  const sizeClasses = {
    sm: { container: "w-16 h-16", text: "text-lg", stroke: 4 },
    md: { container: "w-24 h-24", text: "text-2xl", stroke: 6 },
    lg: { container: "w-32 h-32", text: "text-3xl", stroke: 8 },
  };

  const { container, text, stroke } = sizeClasses[size];
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className={`relative ${container} ${isUrgent ? "animate-countdown-pulse" : ""}`}
      data-testid="timer-display"
    >
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-muted/30"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className={`transition-all duration-1000 ease-linear ${
            isUrgent
              ? "text-red-500"
              : isWarning
              ? "text-yellow-500"
              : "text-primary"
          }`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`font-display font-bold ${text} ${
            isUrgent ? "text-red-500" : isWarning ? "text-yellow-500" : ""
          }`}
        >
          {timeRemaining}
        </span>
      </div>
    </div>
  );
}

interface LinearTimerProps {
  totalSeconds: number;
  currentSeconds: number;
}

export function LinearTimer({ totalSeconds, currentSeconds }: LinearTimerProps) {
  const percentage = (currentSeconds / totalSeconds) * 100;
  const isUrgent = currentSeconds <= 5;
  const isWarning = currentSeconds <= 10 && !isUrgent;

  return (
    <div className="w-full space-y-2" data-testid="linear-timer">
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Tiempo restante</span>
        <span
          className={`font-display font-bold ${
            isUrgent
              ? "text-red-500"
              : isWarning
              ? "text-yellow-500"
              : "text-foreground"
          }`}
        >
          {formatTime(currentSeconds)}
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-1000 ease-linear rounded-full ${
            isUrgent
              ? "bg-red-500"
              : isWarning
              ? "bg-yellow-500"
              : "bg-primary"
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
