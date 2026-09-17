"use client";

import { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import type { Question } from "@/lib/types";
import { saveLessonProgress, recordQuestionAnswer } from "@/lib/progress";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

type PreparedQuestion = {
  originalId: string;
  q: string;
  math?: string;
  options: string[];
  correctIndex: number;
  explain: string;
};

export default function QuizClient({
  lessonId,
  lessonTitle,
  questions,
  onBack,
  onGoNext,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: Question[];
  onBack: () => void;
  onGoNext?: () => void;
}) {
  const [deck, setDeck] = useState<PreparedQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [isDone, setIsDone] = useState(false);

  const initQuiz = () => {
    if (questions.length === 0) return;
    const prepared: PreparedQuestion[] = questions.map((q) => {
      const originalOptions = q.options.map((opt, idx) => ({
        text: opt,
        isCorrect: idx === q.answer,
      }));
      const shuffled = shuffleArray(originalOptions);
      const correctIndex = shuffled.findIndex((o) => o.isCorrect);

      return {
        originalId: q.id,
        q: q.q,
        math: q.math,
        options: shuffled.map((o) => o.text),
        correctIndex,
        explain: q.explain,
      };
    });

    setDeck(shuffleArray(prepared));
    setCurrentIndex(0);
    setPicked(null);
    setCorrectCount(0);
    setIsDone(false);
  };

  useEffect(() => {
    initQuiz();
  }, [questions]);

  if (deck.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-star-soft">Chưa có câu hỏi trắc nghiệm cho bài này.</p>
        <button
          onClick={onBack}
          className="mt-4 rounded-full bg-void-card px-4 py-2 text-sm text-star border border-star/20"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  const currentQ = deck[currentIndex];
  const total = deck.length;
  const progressPercent = Math.round(((currentIndex + (isDone ? 1 : 0)) / total) * 100);

  const handleSelectOption = (index: number) => {
    if (picked !== null || isDone) return;
    setPicked(index);

    const isRight = index === currentQ.correctIndex;
    recordQuestionAnswer(lessonId, isRight);

    if (isRight) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setPicked(null);
    } else {
      const finalPercent = Math.round((correctCount / total) * 100);
      setIsDone(true);
      saveLessonProgress(lessonId, finalPercent);

      if (finalPercent >= 80) {
        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#0D7C86", "#F2683C", "#0E9F6E", "#EFA31D"],
          });
        } catch {}
      }
    }
  };

  const finalScore = Math.round((correctCount / total) * 100);

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      {/* Header điều hướng */}
      <div className="flex items-center justify-between gap-3 border-b border-star/10 pb-3">
        <button
          onClick={onBack}
          className="rounded-full border border-star/20 bg-void-card px-3.5 py-1.5 font-mono text-xs text-star hover:border-sea/40 transition"
        >
          ← Menu bài học
        </button>
        <span className="font-mono text-xs text-sea-deep">
          Câu {currentIndex + 1} / {total}
        </span>
      </div>

      {/* Thanh tiến trình */}
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-void-card border border-star/10">
        <div
          className="h-full bg-gradient-to-r from-sea to-coral transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {!isDone ? (
        <div className="mt-6 animate-pop-in">
          {/* Khối nội dung câu hỏi */}
          <div className="rounded-2xl border border-star/10 bg-void-card p-5 sm:p-6 shadow-card">
            <div className="flex items-center justify-between text-xs text-star-soft">
              <span className="rounded bg-sea/15 px-2 py-0.5 font-mono font-medium text-sea-deep">
                Trắc nghiệm 4 lựa chọn
              </span>
              <span>Điểm hiện tại: {correctCount}/{currentIndex + (picked !== null ? 1 : 0)}</span>
            </div>

            <h3 className="mt-3 font-display text-lg sm:text-xl font-bold leading-snug text-star">
              {currentQ.q}
            </h3>

            {currentQ.math && (
              <div className="mt-3 overflow-x-auto rounded-xl border border-star/10 bg-[#07131b] p-3.5 font-mono text-xs sm:text-sm text-sea-deep">
                {currentQ.math}
              </div>
            )}

            {/* Danh sách 4 phương án */}
            <div className="mt-5 space-y-3">
              {currentQ.options.map((opt, i) => {
                const isSelected = picked === i;
                const isRevealed = picked !== null;
                const isCorrect = i === currentQ.correctIndex;

                let btnStyle = "border-star/15 bg-void/70 text-star hover:border-sea/50 hover:bg-void-light";
                let badgeStyle = "bg-star/10 text-star-soft";

                if (isRevealed) {
                  if (isCorrect) {
                    btnStyle = "border-leaf bg-leaf/20 text-leaf-deep shadow-sm";
                    badgeStyle = "bg-leaf text-white";
                  } else if (isSelected) {
                    btnStyle = "border-berry bg-berry/20 text-berry";
                    badgeStyle = "bg-berry text-white";
                  } else {
                    btnStyle = "border-star/5 bg-void/30 text-star-soft opacity-50";
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelectOption(i)}
                    disabled={isRevealed}
                    className={`group flex w-full items-center gap-3.5 rounded-2xl border-2 p-4 text-left transition-all sm:p-5 ${btnStyle} ${
                      !isRevealed ? "cursor-pointer active:scale-[0.99]" : "cursor-default"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition ${badgeStyle}`}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="flex-1 text-[15px] sm:text-base leading-relaxed">
                      {opt}
                    </span>
                    {isRevealed && isCorrect && (
                      <span className="shrink-0 text-xl font-bold text-leaf-deep">✓</span>
                    )}
                    {isRevealed && isSelected && !isCorrect && (
                      <span className="shrink-0 text-xl font-bold text-berry">✕</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Hộp giải thích chi tiết */}
            {picked !== null && (
              <div className="mt-5 animate-pop-in rounded-xl border border-star/10 bg-[#07131b] p-4">
                <p className="font-display text-sm font-bold text-star">
                  {picked === currentQ.correctIndex ? (
                    <span className="text-leaf-deep">🎉 Rất chính xác!</span>
                  ) : (
                    <span className="text-coral">💡 Phân tích đáp án:</span>
                  )}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-star-soft">
                  {currentQ.explain}
                </p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="rounded-full bg-gradient-to-r from-sea to-coral px-5 py-2 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
                  >
                    {currentIndex < total - 1 ? "Câu tiếp theo →" : "Xem kết quả →"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Màn hình tổng kết điểm & tặng sao ⭐ */
        <div className="mt-8 animate-pop-in rounded-2xl border border-star/15 bg-void-card p-6 text-center shadow-card sm:p-8">
          <span className="text-5xl sm:text-6xl">
            {finalScore >= 80 ? "⭐🏆⭐" : finalScore >= 50 ? "👍" : "💪"}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold text-star sm:text-3xl">
            {finalScore >= 80
              ? "Xuất sắc! Em đã chinh phục bài học!"
              : finalScore >= 50
              ? "Làm khá tốt! Em chỉ cần ôn thêm một chút."
              : "Đừng nản lòng! Đọc lại lý thuyết rồi thử lại nhé."}
          </h3>

          <div className="my-6 inline-flex flex-col items-center rounded-2xl border border-star/10 bg-[#07131b] px-8 py-5">
            <span className="font-mono text-4xl sm:text-5xl font-extrabold text-sea-deep">
              {finalScore}%
            </span>
            <span className="mt-1 text-xs text-star-soft">
              Đúng {correctCount} / {total} câu
            </span>
            {finalScore >= 80 && (
              <span className="mt-2 rounded-full bg-gold/20 px-3 py-1 font-mono text-xs font-bold text-gold-deep">
                ⭐ Đã mở khoá sao vàng Phục Hòa!
              </span>
            )}
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={initQuiz}
              className="w-full sm:w-auto rounded-full bg-sea px-6 py-2.5 font-display text-sm font-bold text-white hover:bg-sea/80 transition"
            >
              🔄 Luyện lại (Đề sẽ trộn mới)
            </button>
            {onGoNext && (
              <button
                onClick={onGoNext}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
              >
                Chuyển sang Đúng/Sai →
              </button>
            )}
            <button
              onClick={onBack}
              className="w-full sm:w-auto rounded-full border border-star/20 bg-void px-5 py-2.5 font-display text-sm text-star hover:bg-void-light transition"
            >
              Quay về Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
