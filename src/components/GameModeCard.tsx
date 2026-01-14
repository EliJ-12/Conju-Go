import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface GameModeCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  badges?: string[];
  onClick: () => void;
  testId: string;
}

export function GameModeCard({
  title,
  description,
  icon: Icon,
  color,
  badges = [],
  onClick,
  testId,
}: GameModeCardProps) {
  return (
    <Card
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-primary/40 bg-card/50 backdrop-blur-sm"
      onClick={onClick}
      data-testid={testId}
    >
      <CardHeader className="flex flex-row items-start gap-4 pb-4">
        <div
          className={cn(
            "flex items-center justify-center w-12 h-12 rounded-xl text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
            color
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-2 min-w-0">
          <CardTitle className="text-xl font-display font-bold leading-tight">{title}</CardTitle>
          <div className="flex flex-wrap gap-1.5">
            {badges.map((badge) => (
              <Badge
                key={badge}
                variant="secondary"
                className="text-xs font-medium px-2.5 py-0.5 bg-secondary/60"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed text-muted-foreground min-h-[3rem]">
          {description}
        </CardDescription>
        <Button
          className="w-full font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
          data-testid={`${testId}-play`}
        >
          Jouer
        </Button>
      </CardContent>
    </Card>
  );
}
