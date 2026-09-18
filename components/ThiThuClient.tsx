"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { MOCK_EXAMS } from "@/data/mockExams";
import type { MockExam } from "@/lib/types";
import MathText from "@/components/MathText";

export default function ThiThuClient() {
  const [selectedExam, setSelectedExam] = useState<MockExam | null>(null);
  
  // Phần I: Trắc nghiệm 4 lựa chọn (12 câu) -> Record<qIdx, optionIdx>
  const [answersP1, setAnswersP1] = useState<Record<number, number>>({});
  
  // Phần II: Đúng / Sai (4 câu, mỗi câu 4 ý a,b,c,d) -> Record<qIdx, Record<stmtIdx, boolean>>
  const [answersP2, setAnswersP2] = useState<Record<number, Record<number, boolean>>>({});
  
  // Phần III: Trả lời ngắn (6 câu) -> Record<qIdx, string>
  const [answersP3, setAnswersP3] = useState<Record<number, string>>({});

  const [activeTab, setActiveTab] = useState<"p1" | "p2" | "p3">("p1");
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
    setAnswersP1({});
    setAnswersP2({});
    setAnswersP3({});
    setActiveTab("p1");
    setSubmitted(false);
    setTimeLeft(exam.durationMinutes * 60);
    window.scrollTo({ top: 0 });
  };

  const handleSelectP1 = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswersP1((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSelectP2 = (qIdx: number, sIdx: number, val: boolean) => {
    if (submitted) return;
    setAnswersP2((prev) => ({
      ...prev,
      [qIdx]: {
        ...(prev[qIdx] ?? {}),
        [sIdx]: val,
      },
    }));
  };

  const handleInputP3 = (qIdx: number, text: string) => {
    if (submitted) return;
    setAnswersP3((prev) => ({ ...prev, [qIdx]: text }));
  };

  // Tính điểm chuẩn Bộ GD&ĐT
  const calculateScore = () => {
    if (!selectedExam) return { p1Score: 0, p2Score: 0, p3Score: 0, totalScore: 0 };

    // Phần I: 12 câu, mỗi câu 0.25đ -> tối đa 3.0đ
    let p1Correct = 0;
    selectedExam.questions.forEach((q, idx) => {
      if (answersP1[idx] === q.answer) p1Correct++;
    });
    const p1Score = p1Correct * 0.25;

    // Phần II: 4 câu, mỗi câu tính theo số ý đúng (0.1, 0.25, 0.5, 1.0) -> tối đa 4.0đ
    let p2Score = 0;
    selectedExam.tfQuestions.forEach((q, qIdx) => {
      let correctStmts = 0;
      const qAnswers = answersP2[qIdx] ?? {};
      q.statements.forEach((s, sIdx) => {
        if (qAnswers[sIdx] === s.answer) correctStmts++;
      });
      if (correctStmts === 1) p2Score += 0.1;
      else if (correctStmts === 2) p2Score += 0.25;
      else if (correctStmts === 3) p2Score += 0.5;
      else if (correctStmts === 4) p2Score += 1.0;
    });

    // Phần III: 6 câu, mỗi câu 0.5đ -> tối đa 3.0đ
    let p3Correct = 0;
    selectedExam.shortAnswerQuestions.forEach((q, idx) => {
      const userText = (answersP3[idx] ?? "").trim().replace(",", ".");
      const correctText = q.correctAnswer.trim().replace(",", ".");
      // So sánh số học hoặc chuỗi
      const userNum = parseFloat(userText);
      const correctNum = parseFloat(correctText);
      if (!isNaN(userNum) && !isNaN(correctNum)) {
        if (Math.abs(userNum - correctNum) < 0.01) p3Correct++;
      } else if (userText.toLowerCase() === correctText.toLowerCase()) {
        p3Correct++;
      }
    });
    const p3Score = p3Correct * 0.5;

    const totalScore = Number((p1Score + p2Score + p3Score).toFixed(2));
    return { p1Score, p2Score, p3Score, totalScore };
  };

  const handleSubmit = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const { totalScore } = calculateScore();
    if (totalScore >= 8.0) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#0D7C86", "#F2683C", "#0E9F6E", "#EFA31D"],
        });
      } catch {
        // Fallback
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
            <span className="rounded-full bg-coral/20 px-3.5 py-1 font-mono text-xs font-bold text-coral-deep">
              ⏱️ Cấu Trúc Đề Thi 2025 (12 Trắc nghiệm · 4 Đúng/Sai · 6 Trả lời ngắn)
            </span>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-void-light px-4 py-1.5 font-mono text-xs font-bold text-sea-deep">
              🏫 Trường THPT Phục Hòa — Tổ Tự nhiên
            </div>
            <h1 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-star">
              Phòng Thi Thử Tốt Nghiệp THPT 2025
            </h1>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-star-soft leading-relaxed">
              Hệ thống đề thi tổng hợp 6 chương môn Toán lớp 12 theo đúng cấu trúc Quyết định 764 của Bộ GD&ĐT:{" "}
              <strong>Phần I (12 câu trắc nghiệm)</strong>, <strong>Phần II (4 câu Đúng/Sai)</strong> và{" "}
              <strong>Phần III (6 câu trả lời ngắn)</strong>. Thời gian làm bài 90 phút, tự động chấm điểm thang 10 và chữa bài chi tiết.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {MOCK_EXAMS.map((exam) => (
              <div
                key={exam.id}
                className="flex flex-col justify-between rounded-3xl border border-sea/25 bg-void-card/90 p-6 shadow-card hover:border-sea/50 transition"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-sea/20 px-2.5 py-0.5 font-mono text-xs font-bold text-sea-deep">
                      ⏱️ {exam.durationMinutes} phút
                    </span>
                    <span className="font-mono text-[11px] text-star-soft">
                      12 TN • 4 Đ/S • 6 Ngắn
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
                    Bắt đầu làm bài thi (90 phút) →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  const scores = calculateScore();

  return (
    <main className="playground min-h-screen px-4 py-6 sm:px-6 pb-24">
      <div className="mx-auto max-w-4xl">
        {/* Floating Top Header Bar */}
        <div className="sticky top-4 z-40 mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-sea/30 bg-void-card/95 p-3.5 backdrop-blur shadow-card">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedExam(null)}
              className="rounded-xl border border-star/20 bg-void-light px-3 py-1.5 font-mono text-xs text-star hover:border-star/40 transition"
            >
              ← Chọn đề khác
            </button>
            <div className="hidden sm:block">
              <span className="font-display text-xs font-bold text-star truncate max-w-xs block">
                {selectedExam.title}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
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
                className="rounded-xl bg-gradient-to-r from-coral to-gold px-4 py-1.5 font-display text-xs font-bold text-white shadow hover:opacity-90 transition"
              >
                Nộp bài thi
              </button>
            ) : (
              <span className="rounded-xl bg-leaf/20 px-3 py-1.5 font-mono text-xs font-bold text-leaf-deep">
                ✓ Đã hoàn thành
              </span>
            )}
          </div>
        </div>

        {/* Thống kê kết quả sau khi nộp bài */}
        {submitted && (
          <div className="mb-8 rounded-3xl border-2 border-leaf/40 bg-void-card p-6 text-center shadow-card animate-pop-in">
            <span className="text-5xl">
              {scores.totalScore >= 8.0 ? "🏆" : scores.totalScore >= 5.0 ? "👏" : "💪"}
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold text-star">
              Kết Quả Bài Thi Tốt Nghiệp THPT 2025
            </h2>
            <p className="text-xs text-star-soft mt-1">
              Thang điểm 10 chuẩn ma trận đề thi của Bộ GD&ĐT
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-leaf/30 bg-leaf/10 p-3.5">
                <div className="font-mono text-3xl font-extrabold text-leaf-deep">
                  {scores.totalScore.toFixed(2)}
                </div>
                <div className="text-[11px] font-bold text-leaf-deep">TỔNG ĐIỂM / 10</div>
              </div>

              <div className="rounded-2xl border border-sea/30 bg-sea/10 p-3.5">
                <div className="font-mono text-2xl font-extrabold text-sea-deep">
                  {scores.p1Score.toFixed(2)} / 3.0
                </div>
                <div className="text-[11px] text-star-soft">Phần I (12 câu TN)</div>
              </div>

              <div className="rounded-2xl border border-gold/30 bg-gold/10 p-3.5">
                <div className="font-mono text-2xl font-extrabold text-gold-deep">
                  {scores.p2Score.toFixed(2)} / 4.0
                </div>
                <div className="text-[11px] text-star-soft">Phần II (4 câu Đ/S)</div>
              </div>

              <div className="rounded-2xl border border-coral/30 bg-coral/10 p-3.5">
                <div className="font-mono text-2xl font-extrabold text-coral-deep">
                  {scores.p3Score.toFixed(2)} / 3.0
                </div>
                <div className="text-[11px] text-star-soft">Phần III (6 câu Ngắn)</div>
              </div>
            </div>

            <p className="mt-4 text-xs text-star-soft leading-relaxed max-w-xl mx-auto">
              {scores.totalScore >= 8.0
                ? "Xuất sắc! Bạn đã làm chủ kiến thức 6 chương Toán 12 và hoàn toàn sẵn sàng cho kỳ thi Tốt nghiệp THPT 2025."
                : "Hãy xem kỹ đáp án và lời giải chi tiết cho từng phần bên dưới để củng cố các câu còn chưa chính xác nhé!"}
            </p>
          </div>
        )}

        {/* Tab chuyển đổi giữa 3 phần thi */}
        <div className="mb-6 flex rounded-2xl border border-sea/25 bg-void-card p-1.5">
          <button
            onClick={() => setActiveTab("p1")}
            className={`flex-1 rounded-xl py-2.5 text-center font-display text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === "p1"
                ? "bg-sea text-white shadow"
                : "text-star-soft hover:text-star"
            }`}
          >
            <span>🔘 Phần I</span>
            <span className="hidden sm:inline">Trắc nghiệm</span>
            <span className="text-[11px] font-mono opacity-80">(12 câu)</span>
          </button>

          <button
            onClick={() => setActiveTab("p2")}
            className={`flex-1 rounded-xl py-2.5 text-center font-display text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === "p2"
                ? "bg-sea text-white shadow"
                : "text-star-soft hover:text-star"
            }`}
          >
            <span>⚖️ Phần II</span>
            <span className="hidden sm:inline">Đúng / Sai</span>
            <span className="text-[11px] font-mono opacity-80">(4 câu)</span>
          </button>

          <button
            onClick={() => setActiveTab("p3")}
            className={`flex-1 rounded-xl py-2.5 text-center font-display text-xs sm:text-sm font-bold transition flex items-center justify-center gap-1.5 ${
              activeTab === "p3"
                ? "bg-sea text-white shadow"
                : "text-star-soft hover:text-star"
            }`}
          >
            <span>✍️ Phần III</span>
            <span className="hidden sm:inline">Trả lời ngắn</span>
            <span className="text-[11px] font-mono opacity-80">(6 câu)</span>
          </button>
        </div>

        {/* ========================================================================= */}
        {/* NỘI DUNG PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN                        */}
        {/* ========================================================================= */}
        {activeTab === "p1" && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-sea/10 border border-sea/20 p-4 text-xs text-sea-deep">
              💡 <strong>Phần I (3,0 điểm):</strong> Gồm 12 câu hỏi trắc nghiệm 4 lựa chọn (từ Câu 1 đến Câu 12). Mỗi câu chọn đúng được 0,25 điểm.
            </div>

            {selectedExam.questions.map((q, qIdx) => {
              const isUserAnswer = answersP1[qIdx] !== undefined;
              const isCorrect = answersP1[qIdx] === q.answer;

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
                      <MathText text={q.q} />
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = answersP1[qIdx] === optIdx;
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
                          onClick={() => handleSelectP1(qIdx, optIdx)}
                          className={`w-full text-left rounded-2xl border p-3 text-xs sm:text-sm transition flex items-center gap-3 ${btnStyle}`}
                        >
                          <span className="font-mono font-bold">{labels[optIdx]}.</span>
                          <span><MathText text={opt} /></span>
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-4 rounded-2xl border border-sea/20 bg-void-light/60 p-3.5 text-xs leading-relaxed text-star-soft">
                      <span className="font-bold text-sea-deep">💡 Lời giải chi tiết: </span>
                      <MathText text={q.explain} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* NỘI DUNG PHẦN II: 4 CÂU TRẮC NGHIỆM ĐÚNG / SAI                            */}
        {/* ========================================================================= */}
        {activeTab === "p2" && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-gold/10 border border-gold/20 p-4 text-xs text-gold-deep">
              💡 <strong>Phần II (4,0 điểm):</strong> Gồm 4 câu hỏi trắc nghiệm Đúng / Sai (từ Câu 1 đến Câu 4). Mỗi câu có 4 ý a, b, c, d: đúng 1 ý được 0,1đ; đúng 2 ý được 0,25đ; đúng 3 ý được 0,5đ; đúng 4 ý được 1,0đ.
            </div>

            {selectedExam.tfQuestions.map((q, qIdx) => {
              const qAnswers = answersP2[qIdx] ?? {};

              return (
                <div
                  key={q.id}
                  className="rounded-3xl border border-white/5 bg-void-card/90 p-5 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 font-mono text-xs font-bold text-gold-deep">
                      {qIdx + 1}
                    </span>
                    <div className="flex-1 font-body text-sm font-semibold text-star leading-relaxed">
                      <MathText text={q.context} />
                    </div>
                  </div>

                  {/* 4 Mệnh đề a, b, c, d */}
                  <div className="mt-4 space-y-3">
                    {q.statements.map((s, sIdx) => {
                      const userVal = qAnswers[sIdx];
                      const isCorrect = userVal === s.answer;

                      return (
                        <div
                          key={sIdx}
                          className="rounded-2xl border border-white/10 bg-void/50 p-3.5 text-xs sm:text-sm"
                        >
                          <div className="text-star leading-relaxed mb-3">
                            <MathText text={s.text} />
                          </div>

                          <div className="flex items-center gap-2">
                            <button
                              disabled={submitted}
                              onClick={() => handleSelectP2(qIdx, sIdx, true)}
                              className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-xl border text-xs font-bold transition ${
                                userVal === true
                                  ? "border-leaf bg-leaf/25 text-leaf-deep"
                                  : "border-white/10 bg-void text-star-soft hover:border-leaf/40 hover:text-star"
                              }`}
                            >
                              Đúng
                            </button>

                            <button
                              disabled={submitted}
                              onClick={() => handleSelectP2(qIdx, sIdx, false)}
                              className={`flex-1 sm:flex-initial px-4 py-1.5 rounded-xl border text-xs font-bold transition ${
                                userVal === false
                                  ? "border-berry bg-berry/25 text-berry"
                                  : "border-white/10 bg-void text-star-soft hover:border-berry/40 hover:text-star"
                              }`}
                            >
                              Sai
                            </button>

                            {submitted && (
                              <span className="ml-2 font-mono text-xs">
                                {isCorrect ? (
                                  <span className="text-leaf-deep font-bold">✓ Đúng ({s.answer ? "Đúng" : "Sai"})</span>
                                ) : (
                                  <span className="text-berry font-bold">✗ Sai (Đáp án: {s.answer ? "Đúng" : "Sai"})</span>
                                )}
                              </span>
                            )}
                          </div>

                          {submitted && (
                            <div className="mt-2 text-xs text-star-soft/90 border-t border-white/5 pt-2">
                              <span className="text-gold-deep font-semibold">Giải thích: </span>
                              <MathText text={s.explain} />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================================= */}
        {/* NỘI DUNG PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN                         */}
        {/* ========================================================================= */}
        {activeTab === "p3" && (
          <div className="space-y-6">
            <div className="rounded-2xl bg-coral/10 border border-coral/20 p-4 text-xs text-coral-deep">
              💡 <strong>Phần III (3,0 điểm):</strong> Gồm 6 câu hỏi trắc nghiệm trả lời ngắn (từ Câu 1 đến Câu 6). Thí sinh điền kết quả (dạng số hoặc số thập phân) vào ô trống. Mỗi câu trả lời đúng được 0,5 điểm.
            </div>

            {selectedExam.shortAnswerQuestions.map((q, qIdx) => {
              const userText = (answersP3[qIdx] ?? "").trim();
              const isMatch = (() => {
                if (!submitted) return false;
                const u = userText.replace(",", ".");
                const c = q.correctAnswer.replace(",", ".");
                const uNum = parseFloat(u);
                const cNum = parseFloat(c);
                if (!isNaN(uNum) && !isNaN(cNum)) return Math.abs(uNum - cNum) < 0.01;
                return u.toLowerCase() === c.toLowerCase();
              })();

              return (
                <div
                  key={q.id}
                  className="rounded-3xl border border-white/5 bg-void-card/90 p-5 shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral/20 font-mono text-xs font-bold text-coral-deep">
                      {qIdx + 1}
                    </span>
                    <div className="flex-1 font-body text-sm font-semibold text-star leading-relaxed">
                      <MathText text={q.q} />
                    </div>
                  </div>

                  {/* Ô nhập đáp án */}
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="text-xs font-bold text-star-soft">Đáp án của bạn:</span>
                    <input
                      type="text"
                      disabled={submitted}
                      placeholder="Nhập số kết quả..."
                      value={answersP3[qIdx] ?? ""}
                      onChange={(e) => handleInputP3(qIdx, e.target.value)}
                      className="w-48 rounded-xl border border-sea/30 bg-void px-3.5 py-2 font-mono text-sm text-star placeholder:text-star-soft/50 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                    />
                    {q.unit && (
                      <span className="text-xs font-mono text-star-soft">{q.unit}</span>
                    )}

                    {submitted && (
                      <span className="font-mono text-xs font-bold">
                        {isMatch ? (
                          <span className="text-leaf-deep">✓ Chính xác (+0.5đ)</span>
                        ) : (
                          <span className="text-berry">
                            ✗ Chưa đúng (Đáp án đúng: <strong>{q.correctAnswer}</strong>)
                          </span>
                        )}
                      </span>
                    )}
                  </div>

                  {submitted && (
                    <div className="mt-4 rounded-2xl border border-coral/20 bg-void-light/60 p-3.5 text-xs leading-relaxed text-star-soft">
                      <span className="font-bold text-coral-deep">💡 Lời giải chi tiết: </span>
                      <div className="mt-1 font-body whitespace-pre-wrap"><MathText text={q.explain} /></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
