import type { Express } from "express";
import type { Server } from "http";
import { frenchVerbs, getRandomVerb, getRandomVerbs } from "@shared/verbs";
import type { Tense, Pronoun } from "@shared/schema";
import { setupWebSocket } from "./websocket";

export async function registerRoutes(server: Server, app: Express): Promise<void> {
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.get("/api/verbs", (_req, res) => {
    res.json(frenchVerbs);
  });

  app.get("/api/verbs/random", (req, res) => {
    const count = parseInt(req.query.count as string) || 1;
    if (count === 1) {
      res.json(getRandomVerb());
    } else {
      res.json(getRandomVerbs(Math.min(count, 50)));
    }
  });

  app.get("/api/verbs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const verb = frenchVerbs.find((v) => v.id === id);

    if (!verb) {
      res.status(404).json({ error: "Verb not found" });
      return;
    }

    res.json(verb);
  });

  app.post("/api/check-conjugation", (req, res) => {
    const { verbId, tense, pronoun, answer } = req.body;

    const verb = frenchVerbs.find((v) => v.id === verbId);
    if (!verb) {
      res.status(404).json({ error: "Verb not found" });
      return;
    }

    const correctAnswer = verb.conjugations[tense as Tense]?.[pronoun as Pronoun];
    if (!correctAnswer) {
      res.status(400).json({ error: "Invalid tense or pronoun" });
      return;
    }

    const normalizeAnswer = (str: string) =>
      str
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/['']/g, "'");

    const normalizedUser = normalizeAnswer(answer || "");
    const normalizedCorrect = normalizeAnswer(correctAnswer);

    let isCorrect = normalizedUser === normalizedCorrect;

    if (!isCorrect) {
      const alternatives = correctAnswer.split("/").map((a) => normalizeAnswer(a.trim()));
      isCorrect = alternatives.some((alt) => alt === normalizedUser);
    }

    if (!isCorrect) {
      const withParens = correctAnswer.replace(/\([^)]*\)/g, "").trim();
      isCorrect = normalizeAnswer(withParens) === normalizedUser;
    }

    res.json({
      isCorrect,
      correctAnswer,
      userAnswer: answer,
    });
  });

  app.post("/api/generate-questions", (req, res) => {
    const { count = 10, tenses = ["présent"] } = req.body;

    const questions = generateQuestions(Math.min(count, 50), tenses);
    res.json(questions);
  });

  setupWebSocket(server);
}

function generateQuestions(count: number, tenses: string[]) {
  const questions = [];
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
