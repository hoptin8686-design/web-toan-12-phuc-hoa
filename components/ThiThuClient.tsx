"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MOCK_EXAMS } from "@/data/mockExams";
import type { MockExam } from "@/lib/types";

export default function ThiThuClient() {
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(90 * 60);

  useEffect(() => {
    if (!selectedExam || submitted) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [selectedExam, submitted]);

  const handleStartExam = (exam: MockExam) => {
    setSelectedExam(exam);
    setAnswers({});
    setSubmitted(false);
    setTimeLeft(exam.durationMinutes * 60);
    window.scrollTo({ top: 0 });
  };

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!selectedExam) return;
    let correct = 0;
    selectedExam.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    const percent = Math.round((correct / selectedExam.questions.length) * 100);

    if (percent >= 80) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#0D7C86", "#F2683C", "#0E9F6E", "#EFA31D"],
        });
      } catch {
        // Confetti fallback
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  if (!selectedExam) {
    return (
      <main className="playground min-h-screen px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/"
              className="rounded-xl border border-star/20 bg-void-card px-4 py-2 font-mono text-xs text-star hover:border-sea/50 transition"
            >
              ← Trang chủ
            </Link>
            <span className="rounded-full bg-coral/20 px-3 py-1 font-mono text-xs font-bold text-coral-deep">
              ⏱️ Phòng Thi Thử Trực Tuyến
            </span>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-void-light px-4 py-1.5 font-mono text-xs font-bold text-sea-deep">
              🏫 Trường THPT Phục Hòa — Tổ Tự nhiên
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-star">
              Phòng Thi Thử Tốt Nghiệp THPT 2025
            </h1>
            <p className="mx-auto mt-2 max-w-xl text-sm text-star-soft">
              Hệ thống đề thi tổng hợp 6 chương môn Toán lớp 12 theo cấu trúc mới nhất của Bộ GD&ĐT.
              Thời gian làm bài thực tế, tự động tính điểm thang 10 và xem lời giải chi tiết.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {MOCK_EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col justify-between rounded-3xl border border-sea/25 bg-void-card/90 p-6 shadow-card hover:border-sea/50 transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-sea/20 px-2.5 py-0.5 font-mono text-xs font-bold text-sea-deep">
                      {exam.durationMinutes} phút
                    </span>
                    <span className="font-mono text-xs text-star-soft">
                      {exam.questions.length} câu trắc nghiệm
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-lg font-bold text-star">
                    {exam.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-star-soft leading-relaxed">
                    {exam.description}
                  </p>
                </div>

                <div className="mt-6">
                  <button
                    onClick={() => handleStartExam(exam)}
                    className="w-full rounded-2xl bg-gradient-to-r from-sea to-coral py-3 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
                  >
                    Bắt đầu làm bài →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  const correctCount = selectedExam.questions.filter(
    (q, i) => answers[i] === q.answer
  ).length;
  const scoreThang10 = (
    (correctCount / selectedExam.questions.length) *
    10
  ).toFixed(2);
  const percent = Math.round(
    (correctCount / selectedExam.questions.length) * 100
  );

  return (
    <main className="playground min-h-screen px-4 py-6 sm:px-6 pb-20">
      <div className="mx-auto max-w-3xl">
        {/* Floating Header */}
        <div className="sticky top-4 z-40 mb-6 flex items-center justify-between rounded-2xl border border-sea/30 bg-void-card/95 p-3.5 backdrop-blur shadow-card">
          <button
            onClick={() => setSelectedExam(null)}
            className="rounded-xl border border-star/20 bg-void-light px-3 py-1.5 font-mono text-xs text-star hover:border-star/40 transition"
          >
            ← Chọn đề khác
          </button>

          <div className="flex items-center gap-2">
            <span className="text-base">⏱️</span>
            <span
              className={`font-mono text-sm font-bold ${
                timeLeft < 300 ? "text-berry animate-pulse" : "text-sea-deep"
              }`}
            >
              {formatTime(timeLeft)}
            </span>
          </div>

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="rounded-xl bg-coral px-4 py-1.5 font-display text-xs font-bold text-white shadow hover:bg-coral/90 transition"
            >
              Nộp bài
            </button>
          ) : (
            <span className="rounded-xl bg-leaf/20 px-3 py-1.5 font-mono text-xs font-bold text-leaf-deep">
              Đã nộp bài
            </span>
          )}
        </div>

        {/* Kết quả sau khi nộp */}
        {submitted && (
          <div className="mb-8 rounded-3xl border-2 border-leaf/40 bg-void-card p-6 text-center shadow-card animate-pop-in">
            <span className="text-4xl">
              {percent >= 80 ? "🏆" : percent >= 50 ? "👍" : "💪"}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-star">
              Kết Quả Làm Bài
            </h2>
            <div className="mt-4 flex justify-center gap-6">
              <div className="rounded-2xl bg-void-light px-5 py-3">
                <div className="font-mono text-3xl font-extrabold text-sea-deep">
                  {scoreThang10}
                </div>
                <div className="text-xs text-star-soft">Điểm số / 10</div>
              </div>
              <div className="rounded-2xl bg-void-light px-5 py-3">
                <div className="font-mono text-3xl font-extrabold text-leaf-deep">
                  {correctCount}/{selectedExam.questions.length}
                </div>
                <div className="text-xs text-star-soft">Số câu đúng</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-star-soft">
              {percent >= 80
                ? "Xuất sắc! Bạn đã nắm vững kiến thức trọng tâm của kì thi Tốt nghiệp THPT 2025."
                : "Hãy đối chiếu đáp án và đọc kỹ lời giải giải thích bên dưới để rút kinh nghiệm nhé!"}
            </p>
          </div>
        )}

        {/* Danh sách câu hỏi */}
        <div className="space-y-6">
          {selectedExam.questions.map((q, qIdx) => {
            const isUserAnswer = answers[qIdx] !== undefined;
            const isCorrect = answers[qIdx] === q.answer;

            return (
              <div
                key={q.id}
                className="rounded-3xl border border-white/5 bg-void-card/90 p-5 shadow-card"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sea/20 font-mono text-xs font-bold text-sea-deep">
                    {qIdx + 1}
                  </span>
                  <div className="flex-1 font-body text-sm font-semibold text-star leading-relaxed">
                    {q.q}
                  </div>
                </div>

                {/* Các phương án lựa chọn */}
                <div className="mt-4 space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = answers[qIdx] === optIdx;
                    let btnStyle =
                      "border-white/10 bg-void/50 text-star-soft hover:border-sea/40 hover:text-star";

                    if (!submitted && isSelected) {
                      btnStyle =
                        "border-sea bg-sea/20 text-sea-deep font-bold ring-1 ring-sea";
                    }

                    if (submitted) {
                      if (optIdx === q.answer) {
                        btnStyle =
                          "border-leaf/50 bg-leaf/20 text-leaf-deep font-bold";
                      } else if (isSelected && !isCorrect) {
                        btnStyle =
                          "border-berry/50 bg-berry/20 text-berry font-bold";
                      }
                    }

                    const labels = ["A", "B", "C", "D"];

                    return (
                      <button
                        key={optIdx}
                        disabled={submitted}
                        onClick={() => handleSelect(qIdx, optIdx)}
                        className={`w-full text-left rounded-2xl border p-3 text-xs sm:text-sm transition flex items-center gap-3 ${btnStyle}`}
                      >
                        <span className="font-mono font-bold">{labels[optIdx]}.</span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Lời giải chi tiết sau khi nộp */}
                {submitted && (
                  <div className="mt-4 rounded-2xl border border-sea/20 bg-void-light/60 p-3.5 text-xs leading-relaxed text-star-soft">
                    <span className="font-bold text-sea-deep">💡 Lời giải: </span>
                    {q.explain}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
