import { cn } from "@/lib/utils";
import type { MemoryCard as MemoryCardType } from "@shared/schema";

interface MemoryCardProps {
  card: MemoryCardType;
  onClick: () => void;
  disabled?: boolean;
}

export function MemoryCard({ card, onClick, disabled }: MemoryCardProps) {
  const isRevealed = card.isFlipped || card.isMatched;

  return (
    <div
      className="aspect-[3/4] perspective-1000"
      data-testid={`memory-card-${card.id}`}
    >
      <button
        onClick={onClick}
        disabled={disabled || card.isMatched}
        className={cn(
          "relative w-full h-full transition-transform duration-500 transform-style-preserve-3d cursor-pointer",
          isRevealed && "rotate-y-180",
          card.isMatched && "opacity-80"
        )}
        style={{
          transformStyle: "preserve-3d",
          transform: isRevealed ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className={cn(
            "absolute inset-0 rounded-xl flex items-center justify-center p-3 backface-hidden border-2",
            "bg-gradient-to-br from-primary to-primary/80 border-primary/50",
            "text-primary-foreground"
          )}
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="text-3xl font-bold">?</div>
        </div>

        <div
          className={cn(
            "absolute inset-0 rounded-xl flex items-center justify-center p-3 backface-hidden border-2",
            card.type === "french"
              ? "bg-blue-500/10 border-blue-500/30 dark:bg-blue-500/20"
              : "bg-orange-500/10 border-orange-500/30 dark:bg-orange-500/20",
            card.isMatched && "bg-green-500/20 border-green-500/50"
          )}
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="text-center">
            <div
              className={cn(
                "text-xs uppercase tracking-wide mb-1",
                card.type === "french"
                  ? "text-blue-500"
                  : "text-orange-500"
              )}
            >
              {card.type === "french" ? "FR" : "ES"}
            </div>
            <div className="font-bold text-sm sm:text-base leading-tight">
              {card.content}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
