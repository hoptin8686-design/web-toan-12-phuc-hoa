import type { ErrorStat, LessonProgress, ProgressMap } from "./types";

const STORAGE_KEY = "toan12_phuchoa_progress";
const ERROR_STORAGE_KEY = "toan12_phuchoa_errors";

export function theoryKey(lessonId: string): string {
  return `theory:${lessonId}`;
}

export function sgkKey(lessonId: string): string {
  return `sgk:${lessonId}`;
}

export function tfKey(lessonId: string): string {
  return `${lessonId}:ds`;
}

export function getProgress(): ProgressMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getLessonProgress(key: string): LessonProgress | null {
  const map = getProgress();
  return map[key] ?? null;
}

export function saveLessonProgress(key: string, percent: number): void {
  if (typeof window === "undefined") return;
  try {
    const map = getProgress();
    const current = map[key];
    const rounded = Math.round(percent);
    map[key] = {
      best: current ? Math.max(current.best, rounded) : rounded,
      last: rounded,
      tries: (current?.tries ?? 0) + 1,
      updatedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(map));
  } catch (e) {
    console.error("Lỗi khi lưu tiến độ:", e);
  }
}

export function markTheoryRead(lessonId: string): void {
  saveLessonProgress(theoryKey(lessonId), 100);
}

export function isTheoryRead(lessonId: string): boolean {
  const p = getLessonProgress(theoryKey(lessonId));
  return p !== null && p.best >= 100;
}

export function markSgkRead(lessonId: string): void {
  saveLessonProgress(sgkKey(lessonId), 100);
}

export function isSgkRead(lessonId: string): boolean {
  const p = getLessonProgress(sgkKey(lessonId));
  return p !== null && p.best >= 100;
}

export function recordQuestionAnswer(lessonId: string, isCorrect: boolean): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(ERROR_STORAGE_KEY);
    const stats: Record<string, ErrorStat> = raw ? JSON.parse(raw) : {};
    if (!stats[lessonId]) {
      stats[lessonId] = { lessonId, wrongCount: 0, totalAnswered: 0 };
    }
    stats[lessonId].totalAnswered += 1;
    if (!isCorrect) {
      stats[lessonId].wrongCount += 1;
    }
    localStorage.setItem(ERROR_STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    console.error("Lỗi khi lưu thống kê câu sai:", e);
  }
}

export function getErrorStats(): Record<string, ErrorStat> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ERROR_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
