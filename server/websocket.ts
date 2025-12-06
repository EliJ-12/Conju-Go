import type { Server } from "http";
import { WebSocketServer, WebSocket } from "ws";
import type { IncomingMessage } from "http";
import { storage } from "./storage";
import { frenchVerbs } from "@shared/verbs";
import type { Player, GameSettings, KahootQuestion, Pronoun, Tense } from "@shared/schema";

interface ClientConnection {
  ws: WebSocket;
  playerId: string;
  roomCode: string | null;
  playerName: string;
}

const clients = new Map<WebSocket, ClientConnection>();

function generateId(): string {
  return Math.random().toString(36).substring(2, 15);
}

function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

function generateKahootQuestions(count: number, tenses: string[]): KahootQuestion[] {
  const questions: KahootQuestion[] = [];
  const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];

  const filteredVerbs = frenchVerbs.filter((v) => v.conjugations.présent.je !== "-");

  for (let i = 0; i < count; i++) {
    const verb = filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];
    const tense = tenses[Math.floor(Math.random() * tenses.length)] as Tense;

    const validPronouns = pronouns.filter((p) => verb.conjugations[tense][p] !== "-");
    const pronoun = validPronouns[Math.floor(Math.random() * validPronouns.length)];
    const correctAnswer = verb.conjugations[tense][pronoun];

    const wrongAnswers: Set<string> = new Set();
    const shuffledVerbs = [...filteredVerbs].sort(() => Math.random() - 0.5);

    for (const otherVerb of shuffledVerbs.slice(0, 10)) {
      if (otherVerb.id !== verb.id) {
        const answer = otherVerb.conjugations[tense][pronoun];
        if (answer !== correctAnswer && answer !== "-" && !wrongAnswers.has(answer)) {
          wrongAnswers.add(answer);
          if (wrongAnswers.size >= 3) break;
        }
      }
    }

    for (const p of pronouns) {
      if (p !== pronoun && wrongAnswers.size < 3) {
        const answer = verb.conjugations[tense][p];
        if (answer !== correctAnswer && answer !== "-" && !wrongAnswers.has(answer)) {
          wrongAnswers.add(answer);
        }
      }
    }

    const options = [correctAnswer, ...Array.from(wrongAnswers).slice(0, 3)].sort(
      () => Math.random() - 0.5
    );

    questions.push({
      verb,
      tense,
      pronoun,
      correctAnswer,
      options,
    });
  }

  return questions;
}

function broadcast(roomCode: string, message: any, excludeWs?: WebSocket) {
  const messageStr = JSON.stringify(message);

  clients.forEach((client, ws) => {
    if (client.roomCode === roomCode && ws !== excludeWs && ws.readyState === WebSocket.OPEN) {
      ws.send(messageStr);
    }
  });
}

function sendToClient(ws: WebSocket, message: any) {
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message));
  }
}

function handleMessage(ws: WebSocket, data: any) {
  const client = clients.get(ws);
  if (!client) return;

  switch (data.type) {
    case "create_room": {
      const roomCode = generateRoomCode();
      const playerId = generateId();

      const settings: GameSettings = data.settings || {
        tenses: ["présent"],
        questionCount: 10,
        timeLimit: 15,
      };

      storage.createRoom(roomCode, playerId, settings);

      const player: Player = {
        id: playerId,
        name: data.playerName || "Host",
        score: 0,
        isHost: true,
        hasAnswered: false,
        streak: 0,
      };

      storage.addPlayerToRoom(roomCode, player);

      client.playerId = playerId;
      client.roomCode = roomCode;
      client.playerName = player.name;

      const room = storage.getRoom(roomCode);

      sendToClient(ws, {
        type: "room_created",
        roomCode,
        playerId,
        players: room?.players || [],
      });
      break;
    }

    case "join_room": {
      const roomCode = data.roomCode?.toUpperCase();
      const room = storage.getRoom(roomCode);

      if (!room) {
        sendToClient(ws, {
          type: "error",
          message: "Sala no encontrada",
        });
        return;
      }

      if (room.status !== "waiting") {
        sendToClient(ws, {
          type: "error",
          message: "El juego ya ha comenzado",
        });
        return;
      }

      if (room.players.length >= 10) {
        sendToClient(ws, {
          type: "error",
          message: "La sala esta llena",
        });
        return;
      }

      const playerId = generateId();
      const player: Player = {
        id: playerId,
        name: data.playerName || "Player",
        score: 0,
        isHost: false,
        hasAnswered: false,
        streak: 0,
      };

      storage.addPlayerToRoom(roomCode, player);

      client.playerId = playerId;
      client.roomCode = roomCode;
      client.playerName = player.name;

      const updatedRoom = storage.getRoom(roomCode);

      sendToClient(ws, {
        type: "room_joined",
        roomCode,
        playerId,
        isHost: false,
        players: updatedRoom?.players || [],
      });

      broadcast(roomCode, {
        type: "player_joined",
        players: updatedRoom?.players || [],
      }, ws);
      break;
    }

    case "start_game": {
      const room = storage.getRoom(client.roomCode || "");

      if (!room || room.hostId !== client.playerId) {
        sendToClient(ws, {
          type: "error",
          message: "Solo el host puede iniciar el juego",
        });
        return;
      }

      if (room.players.length < 2) {
        sendToClient(ws, {
          type: "error",
          message: "Se necesitan al menos 2 jugadores",
        });
        return;
      }

      const questions = generateKahootQuestions(
        room.settings.questionCount,
        room.settings.tenses
      );

      storage.setRoomQuestions(client.roomCode!, questions);
      storage.updateRoom(client.roomCode!, { status: "playing", currentQuestion: 0 });

      room.players.forEach((p) => {
        storage.updatePlayer(client.roomCode!, p.id, {
          score: 0,
          streak: 0,
          hasAnswered: false,
        });
      });

      const updatedRoom = storage.getRoom(client.roomCode!);

      broadcast(client.roomCode!, {
        type: "game_started",
        questions,
        settings: room.settings,
        players: updatedRoom?.players || [],
      });
      break;
    }

    case "submit_answer": {
      const room = storage.getRoom(client.roomCode || "");
      if (!room || room.status !== "playing") return;

      const isCorrect = data.isCorrect === true;
      const timeTaken = data.timeTaken || 15;
      const maxTime = room.settings.timeLimit || 15;

      const player = room.players.find((p) => p.id === client.playerId);
      if (!player || player.hasAnswered) return;

      let points = 0;
      let newStreak = player.streak;

      if (isCorrect) {
        const timeBonus = Math.floor(((maxTime - timeTaken) / maxTime) * 500);
        points = 500 + timeBonus;
        newStreak = player.streak + 1;
      } else {
        newStreak = 0;
      }

      storage.updatePlayer(client.roomCode!, client.playerId, {
        score: player.score + points,
        streak: newStreak,
        hasAnswered: true,
        lastAnswerCorrect: isCorrect,
      });

      const updatedRoom = storage.getRoom(client.roomCode!);
      const allAnswered = updatedRoom?.players.every((p) => p.hasAnswered);

      if (allAnswered) {
        broadcast(client.roomCode!, {
          type: "question_result",
          players: updatedRoom?.players || [],
        });
      }
      break;
    }

    case "next_question": {
      const room = storage.getRoom(client.roomCode || "");
      if (!room || room.hostId !== client.playerId) return;

      const nextIndex = room.currentQuestion + 1;

      if (nextIndex >= room.questions.length) {
        storage.updateRoom(client.roomCode!, { status: "finished" });

        broadcast(client.roomCode!, {
          type: "game_finished",
          players: room.players,
        });
      } else {
        storage.updateRoom(client.roomCode!, { currentQuestion: nextIndex });

        room.players.forEach((p) => {
          storage.updatePlayer(client.roomCode!, p.id, { hasAnswered: false });
        });

        const updatedRoom = storage.getRoom(client.roomCode!);

        broadcast(client.roomCode!, {
          type: "next_question",
          questionIndex: nextIndex,
          players: updatedRoom?.players || [],
        });
      }
      break;
    }

    default:
      console.log("Unknown message type:", data.type);
  }
}

function handleDisconnect(ws: WebSocket) {
  const client = clients.get(ws);

  if (client && client.roomCode) {
    storage.removePlayerFromRoom(client.roomCode, client.playerId);

    const room = storage.getRoom(client.roomCode);

    if (room) {
      broadcast(client.roomCode, {
        type: "player_left",
        playerId: client.playerId,
        players: room.players,
      });
    }
  }

  clients.delete(ws);
}

export function setupWebSocket(server: Server) {
  const wss = new WebSocketServer({ 
    server,
    path: "/ws"
  });

  server.on("upgrade", (request: IncomingMessage, socket, head) => {
    const pathname = request.url;
    
    if (pathname === "/ws") {
      wss.handleUpgrade(request, socket, head, (ws) => {
        wss.emit("connection", ws, request);
      });
    }
  });

  wss.on("connection", (ws: WebSocket) => {
    const client: ClientConnection = {
      ws,
      playerId: "",
      roomCode: null,
      playerName: "",
    };

    clients.set(ws, client);

    ws.on("message", (message: string) => {
      try {
        const data = JSON.parse(message.toString());
        handleMessage(ws, data);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    });

    ws.on("close", () => {
      handleDisconnect(ws);
    });

    ws.on("error", (error) => {
      console.error("WebSocket error:", error);
      handleDisconnect(ws);
    });
  });

  console.log("WebSocket server initialized on /ws");
}
