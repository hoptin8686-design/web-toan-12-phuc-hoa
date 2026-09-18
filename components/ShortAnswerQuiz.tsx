"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import type { ShortAnswerQuestion } from "@/lib/types";
import { saveLessonProgress, saKey } from "@/lib/progress";
import MathText from "@/components/MathText";

function normalizeAns(val: string): string {
  return val
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/,/g, ".")
    .replace(/^\+/, "");
}

function checkShortAnswerMatch(userVal: string, correctVal: string): boolean {
  const u = normalizeAns(userVal);
  const c = normalizeAns(correctVal);
  if (!u) return false;
  if (u === c) return true;

  // So sánh giá trị số thập phân nếu cả 2 là số
  const uNum = parseFloat(u);
  const cNum = parseFloat(c);
  if (!isNaN(uNum) && !isNaN(cNum) && Math.abs(uNum - cNum) < 1e-4) {
    return true;
  }

  // So sánh phân số dạng a/b
  if (u.includes("/") || c.includes("/")) {
    try {
      const evalFrac = (s: string) => {
        const parts = s.split("/");
        if (parts.length === 2) {
          const num = parseFloat(parts[0]);
          const den = parseFloat(parts[1]);
          if (!isNaN(num) && !isNaN(den) && den !== 0) return num / den;
        }
        return NaN;
      };
      const uFrac = evalFrac(u);
      const cFrac = evalFrac(c);
      const valU = isNaN(uFrac) ? uNum : uFrac;
      const valC = isNaN(cFrac) ? cNum : cFrac;
      if (!isNaN(valU) && !isNaN(valC) && Math.abs(valU - valC) < 1e-4) {
        return true;
      }
    } catch {}
  }

  return false;
}

export default function ShortAnswerQuiz({
  lessonId,
  lessonTitle,
  questions,
  onBack,
  onGoNext,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: ShortAnswerQuestion[];
  onBack: () => void;
  onGoNext?: () => void;
}) {
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const [isDone, setIsDone] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-star-soft">Chưa có câu hỏi trả lời ngắn cho bài này.</p>
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
  const userAns = answers[qIndex] ?? "";
  const hasInput = userAns.trim().length > 0;
  const isCorrect = results[qIndex];

  const handleInputChange = (val: string) => {
    if (revealed || isDone) return;
    setAnswers((prev) => ({ ...prev, [qIndex]: val }));
  };

  const handleCheck = () => {
    if (!hasInput || revealed) return;
    const correct = checkShortAnswerMatch(userAns, currentQ.correctAnswer);
    const newResults = { ...results, [qIndex]: correct };
    setResults(newResults);
    setRevealed(true);

    if (qIndex === total - 1) {
      const correctCount = Object.values(newResults).filter(Boolean).length;
      const finalPercent = Math.round((correctCount / total) * 100);
      saveLessonProgress(saKey(lessonId), finalPercent);
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
      setRevealed(results[qIndex + 1] !== undefined);
    } else {
      setIsDone(true);
    }
  };

  const handlePrev = () => {
    if (qIndex > 0) {
      setQIndex((prev) => prev - 1);
      setRevealed(results[qIndex - 1] !== undefined);
    }
  };

  const handleRestart = () => {
    setQIndex(0);
    setAnswers({});
    setRevealed(false);
    setResults({});
    setIsDone(false);
  };

  const correctCount = Object.values(results).filter(Boolean).length;
  const finalPercent = Math.round((correctCount / total) * 100);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Header điều hướng */}
      <div className="flex items-center justify-between border-b border-star/10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 font-mono text-xs font-medium text-star-soft hover:text-star transition"
        >
          ← Quay lại bài học
        </button>
        <span className="font-mono text-xs font-semibold text-coral">
          Phần III: Trắc nghiệm trả lời ngắn
        </span>
      </div>

      <div className="mt-4">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-star">
          {lessonTitle}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-star-soft">
          Điền đáp số chính xác vào ô trống (dạng số nguyên, số thập phân hoặc phân số a/b). Bấm &quot;Kiểm tra đáp án&quot; để xem lời giải chi tiết.
        </p>
      </div>

      {!isDone ? (
        <div className="mt-6 space-y-6">
          {/* Thanh chỉ số câu hỏi */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-star-soft">
              Câu {qIndex + 1} / {total}
            </span>
            <div className="flex gap-1.5">
              {questions.map((_, idx) => {
                const res = results[idx];
                const isCurrent = idx === qIndex;
                let bgClass = "bg-star/10 text-star-soft";
                if (res === true) bgClass = "bg-leaf/30 text-leaf-deep font-bold";
                else if (res === false) bgClass = "bg-berry/30 text-berry font-bold";
                else if (isCurrent) bgClass = "ring-2 ring-coral bg-coral/20 text-coral";

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setQIndex(idx);
                      setRevealed(results[idx] !== undefined);
                    }}
                    className={`h-7 w-7 rounded-lg text-xs transition ${bgClass}`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Khối nội dung câu hỏi */}
          <div className="rounded-2xl border border-coral/30 bg-void-card p-6 shadow-card">
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-coral/20 px-2.5 py-1 font-mono text-xs font-bold text-coral">
                Câu {qIndex + 1}
              </span>
              <span className="text-xs text-star-soft">Định dạng thi Tốt nghiệp THPT 2025</span>
            </div>

            <div className="mt-4 font-body text-base text-star leading-relaxed">
              <MathText text={currentQ.q} />
            </div>

            {currentQ.math && (
              <div className="mt-3 rounded-xl bg-void-light/60 p-4 text-sm text-sea-deep border border-star/5 overflow-x-auto">
                <MathText text={currentQ.math} block={true} />
              </div>
            )}

            {/* Ô nhập kết quả */}
            <div className="mt-6">
              <label className="block text-xs font-semibold text-star-soft mb-2">
                Nhập kết quả hoặc đáp số của bạn:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  value={userAns}
                  disabled={revealed}
                  onChange={(e) => handleInputChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && hasInput && !revealed) {
                      handleCheck();
                    }
                  }}
                  placeholder="Ví dụ: -5 ; 3.25 ; 7/2..."
                  className={`flex-1 rounded-xl border px-4 py-2.5 text-base font-mono text-star placeholder:text-star-soft/40 focus:outline-none focus:ring-2 transition ${
                    revealed
                      ? isCorrect
                        ? "border-leaf bg-leaf/10 text-leaf-deep"
                        : "border-berry bg-berry/10 text-berry"
                      : "border-coral/40 bg-void-light focus:border-coral focus:ring-coral/20"
                  }`}
                />
                {currentQ.unit && (
                  <span className="font-mono text-sm text-star-soft">
                    {currentQ.unit}
                  </span>
                )}
                {!revealed ? (
                  <button
                    onClick={handleCheck}
                    disabled={!hasInput}
                    className={`rounded-xl px-5 py-2.5 font-display text-sm font-bold transition ${
                      hasInput
                        ? "bg-coral text-white shadow hover:bg-coral/90 cursor-pointer"
                        : "bg-star/10 text-star-soft/40 cursor-not-allowed"
                    }`}
                  >
                    Kiểm tra
                  </button>
                ) : (
                  <div className="flex items-center gap-2">
                    {isCorrect ? (
                      <span className="rounded-xl bg-leaf/20 px-3 py-2 font-mono text-xs font-bold text-leaf-deep">
                        ✓ Chính xác!
                      </span>
                    ) : (
                      <span className="rounded-xl bg-berry/20 px-3 py-2 font-mono text-xs font-bold text-berry">
                        ✕ Chưa đúng
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Lời giải chi tiết khi đã kiểm tra */}
            {revealed && (
              <div className="mt-6 border-t border-white/10 pt-4 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-star-soft">
                    Đáp án chuẩn:{" "}
                    <strong className="font-mono text-leaf-deep text-sm">
                      <MathText text={currentQ.correctAnswer} /> {currentQ.unit ?? ""}
                    </strong>
                  </span>
                  <span className="text-star-soft">
                    Câu trả lời của bạn:{" "}
                    <span className={`font-mono font-bold ${isCorrect ? "text-leaf-deep" : "text-berry"}`}>
                      {userAns || "(Trống)"}
                    </span>
                  </span>
                </div>

                <div className="rounded-xl bg-void-light/80 p-4 border border-white/5">
                  <p className="text-xs font-bold text-sea-deep uppercase tracking-wider mb-1">
                    📖 Lời giải chi tiết & Phương pháp:
                  </p>
                  <div className="font-body text-xs sm:text-sm text-star/90 whitespace-pre-line leading-relaxed">
                    <MathText text={currentQ.explain} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Điều hướng Câu trước / Câu tiếp theo */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              disabled={qIndex === 0}
              className={`rounded-xl px-4 py-2 text-xs font-mono font-medium transition ${
                qIndex > 0
                  ? "border border-star/20 text-star hover:border-star/40 cursor-pointer"
                  : "text-star-soft/30 cursor-not-allowed"
              }`}
            >
              ← Câu trước
            </button>

            <button
              onClick={handleNext}
              className="rounded-xl bg-gradient-to-r from-coral to-sea px-6 py-2.5 font-display text-xs sm:text-sm font-bold text-white shadow transition hover:opacity-90 cursor-pointer"
            >
              {qIndex < total - 1 ? "Câu tiếp theo →" : "Xem kết quả tổng kết"}
            </button>
          </div>
        </div>
      ) : (
        /* Màn hình tổng kết hoàn thành */
        <div className="mt-8 rounded-3xl border border-coral/30 bg-void-card p-8 text-center shadow-card">
          <div className="text-5xl">
            {finalPercent >= 80 ? "🏆" : finalPercent >= 50 ? "👍" : "💪"}
          </div>
          <h3 className="mt-4 font-display text-2xl font-bold text-star">
            {finalPercent >= 80
              ? "Xuất sắc! Bạn đã nắm vững Phần Trả Lời Ngắn!"
              : "Hoàn thành bài tập Trả lời ngắn"}
          </h3>
          <p className="mt-2 text-sm text-star-soft">
            Kết quả của bạn: Đúng <strong>{correctCount}/{total} câu</strong> ({finalPercent}%)
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="rounded-full border border-star/30 bg-void-light px-5 py-2.5 font-mono text-xs font-bold text-star hover:border-star transition cursor-pointer"
            >
              🔄 Làm lại từ đầu
            </button>
            <button
              onClick={onBack}
              className="rounded-full bg-void-light px-5 py-2.5 font-mono text-xs font-bold text-star-soft hover:text-star transition cursor-pointer"
            >
              ← Về menu bài học
            </button>
            {onGoNext && (
              <button
                onClick={onGoNext}
                className="rounded-full bg-leaf px-6 py-2.5 font-display text-xs font-bold text-white shadow hover:bg-leaf/90 transition cursor-pointer"
              >
                Tiếp tục sang Tự luận & Bảng nháp →
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
