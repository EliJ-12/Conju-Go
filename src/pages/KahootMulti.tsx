import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Copy, Users, Crown, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { TenseSelector } from "@/components/TenseSelector";
import { KahootOption } from "@/components/KahootOption";
import { Leaderboard } from "@/components/Leaderboard";
import { Timer } from "@/components/Timer";
import { Confetti } from "@/components/Confetti";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useToast } from "@/hooks/use-toast";
import { generateRoomCode, calculateScore } from "@/lib/gameUtils";
import type { Player, KahootQuestion, GameSettings, MultiplayerRoom } from "@shared/schema";

type GamePhase = "menu" | "create" | "join" | "lobby" | "playing" | "answered" | "results" | "finished";

const TIME_PER_QUESTION = 15;

export default function KahootMulti() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const wsRef = useRef<WebSocket | null>(null);

  const [phase, setPhase] = useState<GamePhase>("menu");
  const [roomCode, setRoomCode] = useState("");
  const [joinCode, setJoinCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [playerId, setPlayerId] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [players, setPlayers] = useState<Player[]>([]);
  const [settings, setSettings] = useState<GameSettings | null>(null);
  const [questions, setQuestions] = useState<KahootQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [questionStartTime, setQuestionStartTime] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const currentPlayer = players.find((p) => p.id === playerId);

  useEffect(() => {
    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, []);

  const connectWebSocket = useCallback(() => {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const wsUrl = `${protocol}//${window.location.host}/ws`;

    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnecting(false);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      handleServerMessage(data);
    };

    ws.onerror = () => {
      toast({
        title: "Error de conexion",
        description: "No se pudo conectar al servidor",
        variant: "destructive",
      });
      setIsConnecting(false);
    };

    ws.onclose = () => {
      wsRef.current = null;
    };
  }, [toast]);

  const handleServerMessage = useCallback((data: any) => {
    switch (data.type) {
      case "room_created":
        setRoomCode(data.roomCode);
        setPlayerId(data.playerId);
        setIsHost(true);
        setPlayers(data.players);
        setPhase("lobby");
        break;

      case "room_joined":
        setRoomCode(data.roomCode);
        setPlayerId(data.playerId);
        setIsHost(data.isHost);
        setPlayers(data.players);
        setPhase("lobby");
        break;

      case "player_joined":
        setPlayers(data.players);
        break;

      case "player_left":
        setPlayers(data.players);
        break;

      case "game_started":
        setQuestions(data.questions);
        setSettings(data.settings);
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setQuestionStartTime(Date.now());
        setPhase("playing");
        break;

      case "question_result":
        setPlayers(data.players);
        setPhase("results");
        break;

      case "next_question":
        setCurrentQuestionIndex(data.questionIndex);
        setSelectedAnswer(null);
        setQuestionStartTime(Date.now());
        setPhase("playing");
        break;

      case "game_finished":
        setPlayers(data.players);
        setPhase("finished");
        break;

      case "error":
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        });
        break;
    }
  }, [toast]);

  const sendMessage = useCallback((message: any) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
    }
  }, []);

  const handleCreateRoom = () => {
    if (!playerName.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Introduce tu nombre para crear la sala",
        variant: "destructive",
      });
      return;
    }
    setPhase("create");
  };

  const handleJoinRoom = () => {
    if (!playerName.trim()) {
      toast({
        title: "Nombre requerido",
        description: "Introduce tu nombre para unirte",
        variant: "destructive",
      });
      return;
    }
    setPhase("join");
  };

  const handleCreateWithSettings = (gameSettings: GameSettings) => {
    setIsConnecting(true);
    connectWebSocket();

    setTimeout(() => {
      sendMessage({
        type: "create_room",
        playerName: playerName.trim(),
        settings: gameSettings,
      });
    }, 500);
  };

  const handleJoinWithCode = () => {
    if (!joinCode.trim() || joinCode.length !== 6) {
      toast({
        title: "Codigo invalido",
        description: "Introduce un codigo de 6 caracteres",
        variant: "destructive",
      });
      return;
    }

    setIsConnecting(true);
    connectWebSocket();

    setTimeout(() => {
      sendMessage({
        type: "join_room",
        roomCode: joinCode.toUpperCase(),
        playerName: playerName.trim(),
      });
    }, 500);
  };

  const handleStartGame = () => {
    sendMessage({ type: "start_game" });
  };

  const handleAnswer = (answer: string) => {
    if (phase !== "playing" || selectedAnswer) return;

    setSelectedAnswer(answer);
    const timeTaken = (Date.now() - questionStartTime) / 1000;
    const isCorrect = answer === currentQuestion?.correctAnswer;

    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    }

    sendMessage({
      type: "submit_answer",
      answer,
      timeTaken,
      isCorrect,
    });

    setPhase("answered");
  };

  const handleTimeUp = () => {
    if (phase === "playing" && !selectedAnswer) {
      handleAnswer("__timeout__");
    }
  };

  const handleNextQuestion = () => {
    sendMessage({ type: "next_question" });
  };

  const copyRoomCode = () => {
    navigator.clipboard.writeText(roomCode);
    toast({
      title: "Codigo copiado!",
      description: "Comparte este codigo con tus amigos",
    });
  };

  if (phase === "menu") {
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

        <div className="container mx-auto max-w-md">
          <h1 className="text-3xl font-display font-bold text-center mb-8">
            Kahoot Multijugador
          </h1>

          <Card>
            <CardContent className="pt-6 space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Tu nombre
                </label>
                <Input
                  value={playerName}
                  onChange={(e) => setPlayerName(e.target.value)}
                  placeholder="Escribe tu nombre..."
                  maxLength={20}
                  data-testid="input-player-name"
                />
              </div>

              <div className="grid gap-3">
                <Button
                  onClick={handleCreateRoom}
                  className="w-full gap-2"
                  size="lg"
                  data-testid="button-create-room"
                >
                  <Crown className="h-5 w-5" />
                  Crear sala
                </Button>
                <Button
                  variant="outline"
                  onClick={handleJoinRoom}
                  className="w-full gap-2"
                  size="lg"
                  data-testid="button-join-room"
                >
                  <Users className="h-5 w-5" />
                  Unirse a sala
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (phase === "create") {
    return (
      <div className="min-h-screen bg-background p-4">
        <header className="container mx-auto flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => setPhase("menu")}
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <ThemeToggle />
        </header>

        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">
            Configurar partida
          </h2>
          <TenseSelector
            onStart={handleCreateWithSettings}
            onBack={() => setPhase("menu")}
            showTimer={true}
            showQuestionCount={true}
            defaultQuestionCount={10}
          />
        </div>
      </div>
    );
  }

  if (phase === "join") {
    return (
      <div className="min-h-screen bg-background p-4">
        <header className="container mx-auto flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => setPhase("menu")}
            data-testid="button-back"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <ThemeToggle />
        </header>

        <div className="container mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Unirse a sala</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Codigo de sala
                </label>
                <Input
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                  placeholder="ABCD12"
                  maxLength={6}
                  className="text-center text-2xl font-mono tracking-widest"
                  data-testid="input-room-code"
                />
              </div>

              <Button
                onClick={handleJoinWithCode}
                className="w-full"
                disabled={isConnecting}
                data-testid="button-join"
              >
                {isConnecting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Conectando...
                  </>
                ) : (
                  "Unirse"
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (phase === "lobby") {
    return (
      <div className="min-h-screen bg-background p-4">
        <header className="container mx-auto flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => {
              wsRef.current?.close();
              setPhase("menu");
            }}
            data-testid="button-leave"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Salir
          </Button>
          <ThemeToggle />
        </header>

        <div className="container mx-auto max-w-md space-y-6">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Codigo de sala
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-4xl font-mono font-bold tracking-widest">
                  {roomCode}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={copyRoomCode}
                  data-testid="button-copy-code"
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Jugadores ({players.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center gap-3 p-2 rounded-lg bg-muted/50"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {player.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="font-medium flex-1">{player.name}</span>
                    {player.isHost && (
                      <Badge variant="secondary">
                        <Crown className="h-3 w-3 mr-1" />
                        Host
                      </Badge>
                    )}
                    {player.id === playerId && (
                      <Badge variant="outline">Tu</Badge>
                    )}
                  </div>
                ))}
              </div>

              {players.length < 2 && (
                <p className="text-sm text-muted-foreground text-center mt-4">
                  Esperando mas jugadores...
                </p>
              )}
            </CardContent>
          </Card>

          {isHost && (
            <Button
              onClick={handleStartGame}
              className="w-full"
              size="lg"
              disabled={players.length < 2}
              data-testid="button-start-game"
            >
              Iniciar juego
            </Button>
          )}

          {!isHost && (
            <div className="text-center">
              <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
              <p className="text-muted-foreground">
                Esperando que el host inicie el juego...
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (phase === "finished") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-md space-y-6">
          <h2 className="text-2xl font-bold text-center">Resultados finales</h2>
          <Leaderboard
            players={players}
            currentPlayerId={playerId}
            showPodium={true}
          />
          <Button
            onClick={() => {
              wsRef.current?.close();
              setLocation("/");
            }}
            className="w-full"
            data-testid="button-home"
          >
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  if (phase === "results") {
    return (
      <div className="min-h-screen bg-background p-4">
        <div className="container mx-auto max-w-md space-y-6">
          <Badge variant="secondary" className="mx-auto flex w-fit">
            Pregunta {currentQuestionIndex + 1} / {questions.length}
          </Badge>

          <Leaderboard
            players={players}
            currentPlayerId={playerId}
            showPodium={false}
          />

          {isHost && (
            <Button
              onClick={handleNextQuestion}
              className="w-full"
              size="lg"
              data-testid="button-next"
            >
              {currentQuestionIndex >= questions.length - 1
                ? "Ver resultados finales"
                : "Siguiente pregunta"}
            </Button>
          )}

          {!isHost && (
            <div className="text-center">
              <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
              <p className="text-muted-foreground">
                Esperando al host...
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      <Confetti isActive={showConfetti} />

      <header className="container mx-auto flex items-center justify-between mb-4">
        <Badge variant="secondary">
          {currentQuestionIndex + 1} / {questions.length}
        </Badge>
        <ThemeToggle />
      </header>

      <main className="container mx-auto max-w-2xl">
        <div className="mb-4">
          <Progress
            value={((currentQuestionIndex + 1) / questions.length) * 100}
            className="h-2"
          />
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              Puntos: {currentPlayer?.score || 0}
            </Badge>
          </div>
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

        {phase === "answered" && !isHost && (
          <div className="mt-6 text-center">
            <Loader2 className="h-6 w-6 animate-spin mx-auto mb-2" />
            <p className="text-muted-foreground">
              Esperando a los demas jugadores...
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
