import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";

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
      className="group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-2 hover:border-primary/30"
      onClick={onClick}
      data-testid={testId}
    >
      <CardHeader className="flex flex-row items-start gap-4 pb-3">
        <div
          className={`p-3 rounded-xl ${color} text-white transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 space-y-1">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge) => (
              <Badge key={badge} variant="secondary" className="text-xs">
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>
        <Button className="w-full font-semibold" data-testid={`${testId}-play`}>
          Jouer
        </Button>
      </CardContent>
    </Card>
  );
}
