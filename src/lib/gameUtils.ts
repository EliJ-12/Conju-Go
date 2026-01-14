import type { Verb, Tense, Pronoun, KahootQuestion, MemoryCard } from "@shared/schema";
import { frenchVerbs, getRandomVerbs } from "@shared/verbs";

export function generateKahootQuestion(verbs: Verb[], selectedTenses: Tense[]): KahootQuestion {
  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const tense = selectedTenses[Math.floor(Math.random() * selectedTenses.length)];
  const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
  
  const validPronouns = pronouns.filter(p => verb.conjugations[tense][p] !== "-");
  const pronoun = validPronouns[Math.floor(Math.random() * validPronouns.length)];
  const correctAnswer = verb.conjugations[tense][pronoun];
  
  const wrongAnswers = generateWrongAnswers(verb, tense, pronoun, correctAnswer);
  const options = shuffleArray([correctAnswer, ...wrongAnswers.slice(0, 3)]);
  
  return {
    verb,
    tense,
    pronoun,
    correctAnswer,
    options,
  };
}

function generateWrongAnswers(verb: Verb, tense: Tense, pronoun: Pronoun, correctAnswer: string): string[] {
  const wrongAnswers: Set<string> = new Set();
  
  // Prioridad 1: Mismo verbo, diferente persona (más similar)
  const pronouns: Pronoun[] = ["je", "tu", "il/elle", "nous", "vous", "ils/elles"];
  for (const p of shuffleArray(pronouns)) {
    if (p !== pronoun) {
      const answer = verb.conjugations[tense][p];
      if (answer && answer !== "-" && answer !== correctAnswer && !wrongAnswers.has(answer)) {
        wrongAnswers.add(answer);
      }
    }
  }
  
  // Prioridad 2: Mismo verbo, diferente tiempo verbal (similar)
  const tenses: Tense[] = ["présent", "passé composé", "imparfait"];
  for (const t of shuffleArray(tenses)) {
    if (t !== tense && verb.conjugations[t] && verb.conjugations[t][pronoun]) {
      const answer = verb.conjugations[t][pronoun];
      if (answer && answer !== "-" && answer !== correctAnswer && !wrongAnswers.has(answer)) {
        wrongAnswers.add(answer);
      }
    }
  }
  
  // Prioridad 3: Diferentes verbos (menos similar, solo si necesitamos más opciones)
  if (wrongAnswers.size < 3) {
    const otherVerbs = frenchVerbs.filter(v => v.id !== verb.id && v.conjugations[tense] && v.conjugations[tense][pronoun] !== "-");
    for (const otherVerb of shuffleArray(otherVerbs).slice(0, 5)) {
      const answer = otherVerb.conjugations[tense][pronoun];
      if (answer && answer !== "-" && answer !== correctAnswer && !wrongAnswers.has(answer)) {
        wrongAnswers.add(answer);
        if (wrongAnswers.size >= 3) break;
      }
    }
  }
  
  return Array.from(wrongAnswers);
}

export function generateKahootQuestions(count: number, selectedTenses: Tense[]): KahootQuestion[] {
  const verbs = getRandomVerbs(Math.min(count * 2, 50));
  const questions: KahootQuestion[] = [];
  
  for (let i = 0; i < count; i++) {
    questions.push(generateKahootQuestion(verbs, selectedTenses));
  }
  
  return questions;
}

export function generateMemoryCards(pairCount: number): MemoryCard[] {
  const verbs = getRandomVerbs(pairCount);
  const cards: MemoryCard[] = [];
  
  verbs.forEach((verb, index) => {
    cards.push({
      id: index * 2,
      type: "french",
      content: verb.infinitive,
      verbId: verb.id,
      isFlipped: false,
      isMatched: false,
    });
    
    cards.push({
      id: index * 2 + 1,
      type: "spanish",
      content: verb.translation,
      verbId: verb.id,
      isFlipped: false,
      isMatched: false,
    });
  });
  
  return shuffleArray(cards);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function calculateScore(isCorrect: boolean, timeRemaining: number, maxTime: number): number {
  if (!isCorrect) return 0;
  const timeBonus = Math.floor((timeRemaining / maxTime) * 500);
  return 500 + timeBonus;
}

export function generateRoomCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}

export function normalizeAnswer(answer: string): string {
  return answer
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['']/g, "'");
}

export function checkAnswer(userAnswer: string, correctAnswer: string): boolean {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  
  if (normalizedUser === normalizedCorrect) return true;
  
  const alternatives = correctAnswer.split("/").map(a => normalizeAnswer(a.trim()));
  if (alternatives.some(alt => alt === normalizedUser)) return true;
  
  const withParens = correctAnswer.replace(/\([^)]*\)/g, "").trim();
  if (normalizeAnswer(withParens) === normalizedUser) return true;
  
  return false;
}
