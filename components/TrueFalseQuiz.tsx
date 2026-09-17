"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import type { TFQuestion } from "@/lib/types";
import { saveLessonProgress, tfKey } from "@/lib/progress";

export default function TrueFalseQuiz({
  lessonId,
  lessonTitle,
  questions,
  onBack,
  onGoNext,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: TFQuestion[];
  onBack: () => void;
  onGoNext?: () => void;
}) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [revealed, setRevealed] = useState(false);
  const [scores, setScores] = useState<number[]>([]);
  const [isDone, setIsDone] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-star-soft">Chưa có câu hỏi Đúng/Sai cho bài này.</p>
        <button
          onClick={onBack}
          className="mt-4 rounded-full bg-void-card px-4 py-2 text-sm text-star border border-star/20"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  const currentQ = questions[qIndex];
  const total = questions.length;
  const allAnswered = [0, 1, 2, 3].every((i) => answers[i] !== undefined);

  const handlePick = (statementIdx: number, val: boolean) => {
    if (revealed || isDone) return;
    setAnswers((prev) => ({ ...prev, [statementIdx]: val }));
  };

  const handleCheck = () => {
    if (!allAnswered) return;
    setRevealed(true);

    let correctStatements = 0;
    currentQ.statements.forEach((st, idx) => {
      if (answers[idx] === st.answer) correctStatements++;
    });

    const newScores = [...scores, correctStatements];
    setScores(newScores);

    if (qIndex === total - 1) {
      const totalStatements = total * 4;
      const totalCorrect = newScores.reduce((a, b) => a + b, 0);
      const finalPercent = Math.round((totalCorrect / totalStatements) * 100);
      saveLessonProgress(tfKey(lessonId), finalPercent);
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

  const handleNext = () => {
    if (qIndex < total - 1) {
      setQIndex((prev) => prev + 1);
      setAnswers({});
      setRevealed(false);
    } else {
      setIsDone(true);
    }
  };

  const handleRestart = () => {
    setQIndex(0);
    setAnswers({});
    setRevealed(false);
    setScores([]);
    setIsDone(false);
  };

  const totalCorrect = scores.reduce((a, b) => a + b, 0);
  const totalStatements = total * 4;
  const finalPercent = Math.round((totalCorrect / totalStatements) * 100);

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
        <span className="font-mono text-xs text-coral-deep">
          Câu Đúng/Sai {qIndex + 1} / {total}
        </span>
      </div>

      {!isDone ? (
        <div className="mt-6 animate-pop-in">
          <div className="rounded-2xl border border-star/10 bg-void-card p-5 sm:p-6 shadow-card">
            <span className="rounded bg-coral/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-coral">
              Đúng / Sai theo chuẩn đề thi Bộ GD&ĐT
            </span>

            {/* Lời dẫn tình huống */}
            <div className="mt-3 rounded-xl border border-star/10 bg-[#07131b] p-4 text-[15px] leading-relaxed text-star">
              <p className="font-semibold text-sea-deep">Ngữ cảnh bài toán:</p>
              <p className="mt-1 text-star/90">{currentQ.context}</p>
            </div>

            {currentQ.math && (
              <div className="mt-3 overflow-x-auto rounded-xl border border-star/10 bg-[#07131b] p-3 font-mono text-xs text-sea-deep">
                {currentQ.math}
              </div>
            )}

            {/* 4 Mệnh đề a, b, c, d */}
            <div className="mt-6 space-y-4">
              {currentQ.statements.map((st, idx) => {
                const label = String.fromCharCode(97 + idx); // a, b, c, d
                const pickedVal = answers[idx];
                const isRight = pickedVal === st.answer;

                return (
                  <div
                    key={idx}
                    className={`rounded-xl border p-3.5 transition ${
                      revealed
                        ? isRight
                          ? "border-leaf/50 bg-leaf/[0.08]"
                          : "border-berry/50 bg-berry/[0.08]"
                        : "border-star/10 bg-void/50"
                    }`}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="flex-1 text-sm sm:text-[15px] leading-relaxed text-star">
                        <strong className="mr-1.5 font-mono text-base font-bold text-coral">
                          {label})
                        </strong>
                        {st.text}
                      </div>

                      {/* Hai nút Đúng / Sai */}
                      <div className="flex shrink-0 items-center gap-2">
                        <button
                          onClick={() => handlePick(idx, true)}
                          disabled={revealed}
                          className={`rounded-xl px-4 py-1.5 font-display text-xs font-bold transition ${
                            pickedVal === true
                              ? "bg-sea text-white shadow-sm ring-2 ring-sea-deep"
                              : "border border-star/20 bg-void-card text-star-soft hover:border-sea/40"
                          } ${!revealed ? "cursor-pointer" : "cursor-default"}`}
                        >
                          Đúng
                        </button>
                        <button
                          onClick={() => handlePick(idx, false)}
                          disabled={revealed}
                          className={`rounded-xl px-4 py-1.5 font-display text-xs font-bold transition ${
                            pickedVal === false
                              ? "bg-coral text-white shadow-sm ring-2 ring-coral-deep"
                              : "border border-star/20 bg-void-card text-star-soft hover:border-coral/40"
                          } ${!revealed ? "cursor-pointer" : "cursor-default"}`}
                        >
                          Sai
                        </button>
                      </div>
                    </div>

                    {/* Giải thích khi bấm kiểm tra */}
                    {revealed && (
                      <div className="mt-3 border-t border-white/5 pt-2 text-xs sm:text-sm">
                        <p className="font-semibold">
                          Đáp án:{" "}
                          <span className={st.answer ? "text-leaf-deep font-bold" : "text-coral font-bold"}>
                            {st.answer ? "ĐÚNG" : "SAI"}
                          </span>
                          {" — "}
                          {isRight ? (
                            <span className="text-leaf-deep">Em đã phán đoán chính xác!</span>
                          ) : (
                            <span className="text-berry">Em cần xem lại lý thuyết mục này.</span>
                          )}
                        </p>
                        <p className="mt-1 text-star-soft leading-relaxed">{st.explain}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Nút hành động */}
            <div className="mt-6 flex justify-end">
              {!revealed ? (
                <button
                  onClick={handleCheck}
                  disabled={!allAnswered}
                  className={`rounded-full px-6 py-2.5 font-display text-sm font-bold text-white shadow-card transition ${
                    allAnswered
                      ? "bg-gradient-to-r from-sea to-coral hover:shadow-glow cursor-pointer"
                      : "bg-void-light text-star-soft/50 cursor-not-allowed border border-star/10"
                  }`}
                >
                  {allAnswered ? "Kiểm tra đáp án 4 ý" : "Hãy chọn Đúng/Sai cho cả 4 ý"}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
                >
                  {qIndex < total - 1 ? "Câu tiếp theo →" : "Xem kết quả tổng kết →"}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Màn hình tổng kết Đúng/Sai */
        <div className="mt-8 animate-pop-in rounded-2xl border border-star/15 bg-void-card p-6 text-center shadow-card sm:p-8">
          <span className="text-5xl">
            {finalPercent >= 80 ? "⭐🎯⭐" : "💡"}
          </span>
          <h3 className="mt-4 font-display text-2xl font-bold text-star">
            {finalPercent >= 80
              ? "Tư duy phản biện xuất sắc!"
              : "Hoàn thành phần Đúng / Sai!"}
          </h3>
          <div className="my-5 inline-flex flex-col items-center rounded-2xl border border-star/10 bg-[#07131b] px-8 py-4">
            <span className="font-mono text-4xl font-extrabold text-coral">
              {finalPercent}%
            </span>
            <span className="mt-1 text-xs text-star-soft">
              Đúng {totalCorrect} / {totalStatements} ý
            </span>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={handleRestart}
              className="w-full sm:w-auto rounded-full bg-sea px-6 py-2.5 font-display text-sm font-bold text-white hover:bg-sea/80 transition"
            >
              🔄 Làm lại phần Đúng/Sai
            </button>
            {onGoNext && (
              <button
                onClick={onGoNext}
                className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sea to-coral px-6 py-2.5 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
              >
                Chuyển sang Tự luận logic →
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
