import { z } from "zod";

export const pronouns = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"] as const;
export type Pronoun = typeof pronouns[number];

export const tenses = ["présent", "passé composé", "imparfait"] as const;
export type Tense = typeof tenses[number];

export const verbTypes = ["regular", "irregular"] as const;
export type VerbType = typeof verbTypes[number];

export const gameModes = ["solo", "solo-timed", "memory", "kahoot-solo", "kahoot-multi"] as const;
export type GameMode = typeof gameModes[number];

export interface Conjugation {
  je: string;
  tu: string;
  "il/elle": string;
  nous: string;
  vous: string;
  "ils/elles": string;
}

export interface Verb {
  id: number;
  infinitive: string;
  translation: string;
  type: VerbType;
  group: 1 | 2 | 3;
  auxiliaire: "avoir" | "être";
  participe: string;
  conjugations: {
    présent: Conjugation;
    "passé composé": Conjugation;
    imparfait: Conjugation;
  };
}

export interface GameSettings {
  tenses: Tense[];
  timeLimit?: number;
  questionCount: number;
}

export interface GameState {
  mode: GameMode;
  settings: GameSettings;
  currentQuestion: number;
  score: number;
  streak: number;
  bestStreak: number;
  startTime?: number;
  timeRemaining?: number;
}

export interface KahootQuestion {
  verb: Verb;
  tense: Tense;
  pronoun: Pronoun;
  correctAnswer: string;
  options: string[];
}

export interface MemoryCard {
  id: number;
  type: "french" | "spanish";
  content: string;
  verbId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface MultiplayerRoom {
  code: string;
  hostId: string;
  players: Player[];
  status: "waiting" | "playing" | "finished";
  currentQuestion: number;
  questions: KahootQuestion[];
  settings: GameSettings;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  isHost: boolean;
  hasAnswered: boolean;
  lastAnswerCorrect?: boolean;
  streak: number;
}

export const playerNameSchema = z.object({
  name: z.string().min(2).max(20),
});

export const roomCodeSchema = z.object({
  code: z.string().length(6).toUpperCase(),
});

export const gameSettingsSchema = z.object({
  tenses: z.array(z.enum(tenses)).min(1),
  timeLimit: z.number().min(10).max(120).optional(),
  questionCount: z.number().min(5).max(50),
});

export type InsertPlayer = z.infer<typeof playerNameSchema>;
export type InsertRoom = z.infer<typeof roomCodeSchema>;
export type InsertGameSettings = z.infer<typeof gameSettingsSchema>;

export interface User {
  id: string;
  username: string;
  password: string;
}

export interface InsertUser {
  username: string;
  password: string;
}
