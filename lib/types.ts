export type Question = {
  id: string;
  q: string;
  math?: string; // Khối công thức toán học riêng
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explain: string;
};

export type TFStatement = {
  text: string;
  answer: boolean; // true = Đúng, false = Sai
  explain: string;
};

export type TFQuestion = {
  id: string;
  context: string;
  math?: string;
  statements: TFStatement[];
};

export type EssayQuestion = {
  id: string;
  q: string;
  math?: string;
  answer: string; // Lời giải chi tiết
};

export type LessonExtra = {
  tf: TFQuestion[];
  shortAnswer?: ShortAnswerQuestion[];
  essay: EssayQuestion[];
};

export type Tone = "sea" | "coral" | "leaf" | "gold" | "berry";

export type TheoryCard = {
  emoji: string;
  title: string;
  text: string;
};

export type TheoryBlock =
  | { kind: "text"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "cards"; tone?: Tone; items: TheoryCard[] }
  | {
      kind: "compare";
      left: { title: string; emoji: string; items: string[] };
      right: { title: string; emoji: string; items: string[] };
    }
  | { kind: "steps"; items: { label: string; title: string; text: string }[] }
  | { kind: "figure"; diagram: string; caption: string }
  | { kind: "mathBox"; title: string; formula: string; note?: string }
  | { kind: "example"; title: string; text: string; solution?: string }
  | { kind: "note"; text: string }
  | { kind: "warn"; title: string; text: string }
  | {
      kind: "check";
      q: string;
      options: string[];
      answer: number;
      explain: string;
    };

export type TheorySection = {
  id: string;
  emoji: string;
  heading: string;
  blocks: TheoryBlock[];
};

export type LessonTheory = {
  intro: string;
  minutes: number;
  sections: TheorySection[];
  summary: string[];
};

export type LessonCounts = {
  mcq: number;
  tf: number;
  shortAnswer?: number;
  essay: number;
  theory: boolean;
};

export type Lesson = {
  id: string;
  title: string;
  available: boolean;
  bookPages?: string;
  highlight?: string;
};

export type Topic = {
  id: string;
  name: string;
  emoji: string;
  volume: 1 | 2; // Tập 1 hay Tập 2
  lessons: Lesson[];
};

export type LessonProgress = {
  best: number;
  last: number;
  tries: number;
  updatedAt: number;
};

export type ProgressMap = Record<string, LessonProgress>;

export type ErrorStat = {
  lessonId: string;
  wrongCount: number;
  totalAnswered: number;
};

export type ShortAnswerQuestion = {
  id: string;
  q: string;
  math?: string;
  correctAnswer: string;
  explain: string;
  unit?: string;
};

export type MockExam = {
  id: string;
  title: string;
  durationMinutes: number;
  description: string;
  questions: Question[]; // Phần I: 12 câu trắc nghiệm
  tfQuestions: TFQuestion[]; // Phần II: 4 câu đúng / sai
  shortAnswerQuestions: ShortAnswerQuestion[]; // Phần III: 6 câu trả lời ngắn
};
