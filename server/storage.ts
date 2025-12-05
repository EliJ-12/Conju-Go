import type { Player, MultiplayerRoom, KahootQuestion, GameSettings } from "@shared/schema";

export interface IStorage {
  createRoom(roomCode: string, hostId: string, settings: GameSettings): MultiplayerRoom;
  getRoom(roomCode: string): MultiplayerRoom | undefined;
  updateRoom(roomCode: string, updates: Partial<MultiplayerRoom>): MultiplayerRoom | undefined;
  deleteRoom(roomCode: string): boolean;
  addPlayerToRoom(roomCode: string, player: Player): boolean;
  removePlayerFromRoom(roomCode: string, playerId: string): boolean;
  updatePlayer(roomCode: string, playerId: string, updates: Partial<Player>): boolean;
  setRoomQuestions(roomCode: string, questions: KahootQuestion[]): boolean;
}

export class MemStorage implements IStorage {
  private rooms: Map<string, MultiplayerRoom> = new Map();

  createRoom(roomCode: string, hostId: string, settings: GameSettings): MultiplayerRoom {
    const room: MultiplayerRoom = {
      code: roomCode,
      hostId,
      players: [],
      status: "waiting",
      currentQuestion: 0,
      questions: [],
      settings,
    };
    this.rooms.set(roomCode, room);
    return room;
  }

  getRoom(roomCode: string): MultiplayerRoom | undefined {
    return this.rooms.get(roomCode);
  }

  updateRoom(roomCode: string, updates: Partial<MultiplayerRoom>): MultiplayerRoom | undefined {
    const room = this.rooms.get(roomCode);
    if (!room) return undefined;

    const updatedRoom = { ...room, ...updates };
    this.rooms.set(roomCode, updatedRoom);
    return updatedRoom;
  }

  deleteRoom(roomCode: string): boolean {
    return this.rooms.delete(roomCode);
  }

  addPlayerToRoom(roomCode: string, player: Player): boolean {
    const room = this.rooms.get(roomCode);
    if (!room) return false;

    room.players.push(player);
    return true;
  }

  removePlayerFromRoom(roomCode: string, playerId: string): boolean {
    const room = this.rooms.get(roomCode);
    if (!room) return false;

    const index = room.players.findIndex((p) => p.id === playerId);
    if (index === -1) return false;

    room.players.splice(index, 1);

    if (room.players.length === 0) {
      this.rooms.delete(roomCode);
    } else if (room.hostId === playerId && room.players.length > 0) {
      room.hostId = room.players[0].id;
      room.players[0].isHost = true;
    }

    return true;
  }

  updatePlayer(roomCode: string, playerId: string, updates: Partial<Player>): boolean {
    const room = this.rooms.get(roomCode);
    if (!room) return false;

    const player = room.players.find((p) => p.id === playerId);
    if (!player) return false;

    Object.assign(player, updates);
    return true;
  }

  setRoomQuestions(roomCode: string, questions: KahootQuestion[]): boolean {
    const room = this.rooms.get(roomCode);
    if (!room) return false;

    room.questions = questions;
    return true;
  }
}

export const storage = new MemStorage();
