import { Flame, Trophy, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ScoreDisplayProps {
  score: number;
  streak: number;
  bestStreak?: number;
  correctCount?: number;
  totalCount?: number;
  showDetails?: boolean;
}

export function ScoreDisplay({
  score,
  streak,
  bestStreak = 0,
  correctCount,
  totalCount,
  showDetails = false,
}: ScoreDisplayProps) {
  return (
    <div className="flex flex-wrap items-center gap-4" data-testid="score-display">
      <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
        <Trophy className="h-5 w-5 text-primary" />
        <span className="font-display font-bold text-lg" data-testid="text-score">
          {score.toLocaleString()}
        </span>
      </div>

      {streak > 0 && (
        <div className="flex items-center gap-2 bg-orange-500/10 px-4 py-2 rounded-full animate-bounce-in">
          <Flame className="h-5 w-5 text-orange-500" />
          <span className="font-display font-bold text-lg text-orange-500" data-testid="text-streak">
            {streak}
          </span>
        </div>
      )}

      {showDetails && (
        <>
          {bestStreak > 0 && (
            <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1.5 rounded-full">
              <Zap className="h-4 w-4 text-purple-500" />
              <span className="text-sm font-semibold text-purple-500">
                Mejor: {bestStreak}
              </span>
            </div>
          )}

          {correctCount !== undefined && totalCount !== undefined && totalCount > 0 && (
            <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1.5 rounded-full">
              <Target className="h-4 w-4 text-green-500" />
              <span className="text-sm font-semibold text-green-500">
                {correctCount}/{totalCount}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

interface GameStatsCardProps {
  title: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  bestStreak: number;
  timeElapsed?: number;
}

export function GameStatsCard({
  title,
  score,
  correctAnswers,
  totalQuestions,
  bestStreak,
  timeElapsed,
}: GameStatsCardProps) {
  const accuracy = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;

  return (
    <Card className="animate-bounce-in" data-testid="game-stats-card">
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold text-center mb-6">{title}</h3>

        <div className="grid grid-cols-2 gap-4">
          <StatItem
            icon={Trophy}
            label="Puntuacion"
            value={score.toLocaleString()}
            color="text-primary"
            bgColor="bg-primary/10"
          />
          <StatItem
            icon={Target}
            label="Precision"
            value={`${accuracy}%`}
            color="text-green-500"
            bgColor="bg-green-500/10"
          />
          <StatItem
            icon={Flame}
            label="Mejor racha"
            value={bestStreak.toString()}
            color="text-orange-500"
            bgColor="bg-orange-500/10"
          />
          <StatItem
            icon={Zap}
            label="Respuestas"
            value={`${correctAnswers}/${totalQuestions}`}
            color="text-purple-500"
            bgColor="bg-purple-500/10"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface StatItemProps {
  icon: typeof Trophy;
  label: string;
  value: string;
  color: string;
  bgColor: string;
}

function StatItem({ icon: Icon, label, value, color, bgColor }: StatItemProps) {
  return (
    <div className={`${bgColor} p-4 rounded-xl text-center`}>
      <Icon className={`h-6 w-6 ${color} mx-auto mb-2`} />
      <div className={`font-display font-bold text-xl ${color}`}>{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}
