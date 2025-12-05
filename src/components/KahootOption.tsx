import { cn } from "@/lib/utils";
import { CheckCircle2, XCircle } from "lucide-react";

interface KahootOptionProps {
  option: string;
  index: number;
  onClick: () => void;
  disabled?: boolean;
  isSelected?: boolean;
  isCorrect?: boolean;
  showResult?: boolean;
}

const optionColors = [
  {
    bg: "bg-red-500",
    hover: "hover:bg-red-600",
    selected: "ring-4 ring-red-300",
  },
  {
    bg: "bg-blue-500",
    hover: "hover:bg-blue-600",
    selected: "ring-4 ring-blue-300",
  },
  {
    bg: "bg-yellow-500",
    hover: "hover:bg-yellow-600",
    selected: "ring-4 ring-yellow-300",
  },
  {
    bg: "bg-green-500",
    hover: "hover:bg-green-600",
    selected: "ring-4 ring-green-300",
  },
];

const optionShapes = ["triangle", "diamond", "circle", "square"];

export function KahootOption({
  option,
  index,
  onClick,
  disabled,
  isSelected,
  isCorrect,
  showResult,
}: KahootOptionProps) {
  const colorSet = optionColors[index % optionColors.length];
  const shape = optionShapes[index % optionShapes.length];

  const getResultStyle = () => {
    if (!showResult) return "";
    if (isCorrect) return "ring-4 ring-white bg-green-600";
    if (isSelected && !isCorrect) return "ring-4 ring-white bg-red-600 opacity-70";
    return "opacity-50";
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative w-full p-4 sm:p-6 rounded-xl text-white font-bold text-lg sm:text-xl transition-all duration-200",
        colorSet.bg,
        !disabled && !showResult && colorSet.hover,
        !disabled && !showResult && "active:scale-95",
        isSelected && !showResult && colorSet.selected,
        disabled && !showResult && "opacity-70 cursor-not-allowed",
        getResultStyle()
      )}
      data-testid={`kahoot-option-${index}`}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <ShapeIcon shape={shape} />
        </div>
        <span className="text-left flex-1 break-words">{option}</span>
        {showResult && isCorrect && (
          <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
        )}
        {showResult && isSelected && !isCorrect && (
          <XCircle className="h-6 w-6 flex-shrink-0" />
        )}
      </div>
    </button>
  );
}

function ShapeIcon({ shape }: { shape: string }) {
  const baseClass = "w-6 h-6 sm:w-8 sm:h-8";

  switch (shape) {
    case "triangle":
      return (
        <div
          className={cn(baseClass)}
          style={{
            width: 0,
            height: 0,
            borderLeft: "12px solid transparent",
            borderRight: "12px solid transparent",
            borderBottom: "20px solid white",
          }}
        />
      );
    case "diamond":
      return (
        <div
          className={cn(baseClass, "bg-white")}
          style={{ transform: "rotate(45deg)" }}
        />
      );
    case "circle":
      return <div className={cn(baseClass, "bg-white rounded-full")} />;
    case "square":
      return <div className={cn(baseClass, "bg-white rounded-sm")} />;
    default:
      return null;
  }
}
