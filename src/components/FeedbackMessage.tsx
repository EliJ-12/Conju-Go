import { CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface FeedbackMessageProps {
  type: "success" | "error" | "info";
  title: string;
  message?: string;
  correctAnswer?: string;
}

export function FeedbackMessage({
  type,
  title,
  message,
  correctAnswer,
}: FeedbackMessageProps) {
  const config = {
    success: {
      icon: CheckCircle2,
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500",
      titleColor: "text-green-600 dark:text-green-400",
    },
    error: {
      icon: XCircle,
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      iconColor: "text-red-500",
      titleColor: "text-red-600 dark:text-red-400",
    },
    info: {
      icon: AlertCircle,
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500",
      titleColor: "text-blue-600 dark:text-blue-400",
    },
  };

  const { icon: Icon, bgColor, borderColor, iconColor, titleColor } = config[type];

  return (
    <Card
      className={`${bgColor} border-2 ${borderColor} animate-bounce-in`}
      data-testid={`feedback-${type}`}
    >
      <CardContent className="pt-4 pb-4">
        <div className="flex items-start gap-3">
          <Icon className={`h-6 w-6 ${iconColor} flex-shrink-0 mt-0.5`} />
          <div className="flex-1">
            <h4 className={`font-bold ${titleColor}`}>{title}</h4>
            {message && (
              <p className="text-sm text-muted-foreground mt-1">{message}</p>
            )}
            {correctAnswer && type === "error" && (
              <div className="mt-2 p-2 bg-background rounded-md">
                <span className="text-xs text-muted-foreground">
                  Respuesta correcta:{" "}
                </span>
                <span className="font-semibold text-foreground">
                  {correctAnswer}
                </span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

const encouragingMessages = {
  success: [
    "Excellent!",
    "Tres bien!",
    "Parfait!",
    "Bravo!",
    "Magnifique!",
    "Super!",
    "Genial!",
    "Formidable!",
  ],
  error: [
    "No te preocupes, sigue intentando!",
    "Casi lo tienes!",
    "La proxima sera!",
    "Animo, tu puedes!",
    "Sigue practicando!",
  ],
};

export function getRandomEncouragement(type: "success" | "error"): string {
  const messages = encouragingMessages[type];
  return messages[Math.floor(Math.random() * messages.length)];
}
