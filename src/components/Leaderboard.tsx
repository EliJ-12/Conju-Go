import { Trophy, Medal, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { Player } from "@shared/schema";

interface LeaderboardProps {
  players: Player[];
  currentPlayerId?: string;
  showPodium?: boolean;
}

export function Leaderboard({ players, currentPlayerId, showPodium = true }: LeaderboardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const topThree = sortedPlayers.slice(0, 3);
  const rest = sortedPlayers.slice(3);

  return (
    <Card className="w-full max-w-md mx-auto" data-testid="leaderboard">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-yellow-500" />
          Clasificacion
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {showPodium && topThree.length > 0 && (
          <div className="flex justify-center items-end gap-2 mb-6 h-32">
            {topThree.length > 1 && (
              <PodiumPlace
                player={topThree[1]}
                position={2}
                isCurrentPlayer={topThree[1].id === currentPlayerId}
              />
            )}
            {topThree.length > 0 && (
              <PodiumPlace
                player={topThree[0]}
                position={1}
                isCurrentPlayer={topThree[0].id === currentPlayerId}
              />
            )}
            {topThree.length > 2 && (
              <PodiumPlace
                player={topThree[2]}
                position={3}
                isCurrentPlayer={topThree[2].id === currentPlayerId}
              />
            )}
          </div>
        )}

        <div className="space-y-2">
          {(showPodium ? rest : sortedPlayers).map((player, index) => (
            <LeaderboardRow
              key={player.id}
              player={player}
              position={showPodium ? index + 4 : index + 1}
              isCurrentPlayer={player.id === currentPlayerId}
            />
          ))}
        </div>

        {players.length === 0 && (
          <div className="text-center text-muted-foreground py-8">
            Esperando jugadores...
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface PodiumPlaceProps {
  player: Player;
  position: 1 | 2 | 3;
  isCurrentPlayer: boolean;
}

function PodiumPlace({ player, position, isCurrentPlayer }: PodiumPlaceProps) {
  const heights = { 1: "h-24", 2: "h-16", 3: "h-12" };
  const colors = {
    1: "bg-yellow-500 text-yellow-950",
    2: "bg-gray-400 text-gray-950",
    3: "bg-orange-600 text-orange-950",
  };
  const icons = {
    1: Trophy,
    2: Medal,
    3: Award,
  };
  const Icon = icons[position];

  return (
    <div
      className={cn(
        "flex flex-col items-center",
        position === 1 ? "order-2" : position === 2 ? "order-1" : "order-3"
      )}
    >
      <Avatar
        className={cn(
          "mb-2 border-2",
          isCurrentPlayer ? "border-primary ring-2 ring-primary/50" : "border-transparent"
        )}
      >
        <AvatarFallback className={colors[position]}>
          {player.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="text-xs font-medium truncate max-w-16 text-center">
        {player.name}
      </div>
      <div className="text-xs text-muted-foreground font-display">
        {player.score.toLocaleString()}
      </div>
      <div
        className={cn(
          "w-16 rounded-t-lg flex items-center justify-center mt-2",
          heights[position],
          colors[position]
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
    </div>
  );
}

interface LeaderboardRowProps {
  player: Player;
  position: number;
  isCurrentPlayer: boolean;
}

function LeaderboardRow({ player, position, isCurrentPlayer }: LeaderboardRowProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 p-3 rounded-lg transition-colors",
        isCurrentPlayer
          ? "bg-primary/10 border border-primary/30"
          : "bg-muted/50"
      )}
      data-testid={`leaderboard-row-${player.id}`}
    >
      <div className="w-6 text-center font-display font-bold text-muted-foreground">
        {position}
      </div>
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">
          {player.name.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 font-medium truncate">{player.name}</div>
      <div className="font-display font-bold">{player.score.toLocaleString()}</div>
    </div>
  );
}
