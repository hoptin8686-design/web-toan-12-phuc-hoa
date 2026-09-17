"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EssayQuestion, LessonTheory, Question, TFQuestion, ShortAnswerQuestion } from "@/lib/types";
import { getLessonProgress, theoryKey, tfKey, saKey, sgkKey } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import ShortAnswerQuiz from "@/components/ShortAnswerQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";
import SgkViewer from "@/components/SgkViewer";

type Mode = "menu" | "theory" | "mcq" | "tf" | "sa" | "essay" | "sgk";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  bookPages,
  theory,
  mcq,
  tf,
  shortAnswer = [],
  essay,
  sgkUrl,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  bookPages?: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  shortAnswer?: ShortAnswerQuestion[];
  essay: EssayQuestion[];
  sgkUrl?: string | null;
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [bestTf, setBestTf] = useState<number | null>(null);
  const [bestSa, setBestSa] = useState<number | null>(null);
  const [readTheory, setReadTheory] = useState(false);
  const [readSgk, setReadSgk] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setBestTf(getLessonProgress(tfKey(lessonId))?.best ?? null);
      setBestSa(getLessonProgress(saKey(lessonId))?.best ?? null);
      setReadTheory(getLessonProgress(theoryKey(lessonId)) !== null);
      setReadSgk(getLessonProgress(sgkKey(lessonId)) !== null);
    }
  }, [mode, lessonId]);

  const leaveTo = (next: Mode) => {
    window.scrollTo({ top: 0 });
    setMode(next);
  };

  // 1. Chế độ Đọc SGK Điện tử màn hình máy tính
  if (mode === "sgk") {
    return (
      <main className="playground min-h-screen px-2 py-3 sm:px-8 sm:py-6">
        <div className="mx-auto max-w-6xl w-full">
          <SgkViewer
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            bookPages={bookPages}
            onBack={() => leaveTo("menu")}
            onGoQuiz={mcq.length > 0 ? () => leaveTo("mcq") : undefined}
          />
        </div>
      </main>
    );
  }

  // 2. Chế độ Lý thuyết 5 Điểm tương tác
  if (mode === "theory" && theory) {
    return (
      <main className="playground min-h-screen pb-16">
        <TheoryViewer
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          topicName={topicName}
          theory={theory}
          onBack={() => leaveTo("menu")}
          onGoQuiz={() => leaveTo("mcq")}
        />
      </main>
    );
  }

  // 3. Phần I: Trắc nghiệm 12 câu 4 lựa chọn
  if (mode === "mcq") {
    return (
      <main className="playground min-h-screen pb-16">
        <QuizClient
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={mcq}
          onBack={() => leaveTo("menu")}
          onGoNext={tf.length > 0 ? () => leaveTo("tf") : (shortAnswer.length > 0 ? () => leaveTo("sa") : undefined)}
        />
      </main>
    );
  }

  // 4. Phần II: Đúng / Sai 4 câu format BGD 2025
  if (mode === "tf") {
    return (
      <main className="playground min-h-screen pb-16">
        <TrueFalseQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={tf}
          onBack={() => leaveTo("menu")}
          onGoNext={shortAnswer.length > 0 ? () => leaveTo("sa") : (essay.length > 0 ? () => leaveTo("essay") : undefined)}
        />
      </main>
    );
  }

  // 5. Phần III: Trả lời ngắn 6 câu format BGD 2025
  if (mode === "sa") {
    return (
      <main className="playground min-h-screen pb-16">
        <ShortAnswerQuiz
          lessonId={lessonId}
          lessonTitle={lessonTitle}
          questions={shortAnswer}
          onBack={() => leaveTo("menu")}
          onGoNext={essay.length > 0 ? () => leaveTo("essay") : undefined}
        />
      </main>
    );
  }

  // 6. Chế độ Tự luận & Bảng nháp Lập luận logic
  if (mode === "essay") {
    return (
      <main className="playground min-h-screen pb-16">
        <EssayViewer
          lessonTitle={lessonTitle}
          questions={essay}
          onBack={() => leaveTo("menu")}
        />
      </main>
    );
  }

  // Màn hình Menu bài học chính
  return (
    <main className="playground min-h-screen px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header điều hướng */}
        <div className="flex items-center justify-between gap-3 border-b border-star/10 pb-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-star/20 bg-void-card px-4 py-1.5 font-mono text-xs font-medium text-star hover:border-sea/40 transition"
          >
            ← Về trang chủ Toán 12
          </Link>
          <span className="font-mono text-xs text-star-soft">
            Trường THPT Phục Hòa • Tổ Tự nhiên
          </span>
        </div>

        {/* Tiêu đề bài học */}
        <div className="mt-8 text-center sm:text-left">
          <span className="rounded-full bg-sea/15 px-3.5 py-1 font-mono text-xs font-bold text-sea-deep">
            {topicName}
          </span>
          <h1 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-star">
            {lessonTitle}
          </h1>
          <p className="mt-2 text-sm text-star-soft">
            {bookPages ? `${bookPages} SGK Toán 12 Kết nối tri thức. ` : ""}
            Hệ thống ôn luyện chuẩn 3 phần cấu trúc thi Tốt nghiệp THPT 2025 của Bộ GD&ĐT. Đạt từ 80% trở lên để nhận Sao Vàng Phục Hòa ⭐.
          </p>
        </div>

        {/* Lưới các phân hệ học tập */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Card 1: SGK Điện tử */}
          <button
            onClick={() => leaveTo("sgk")}
            className="flex flex-col justify-between rounded-2xl border border-sea/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-sea hover:shadow-card-hover cursor-pointer"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="text-3xl">📖</span>
                {readSgk ? (
                  <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-leaf-deep">
                    ✓ Đã đọc SGK
                  </span>
                ) : (
                  <span className="rounded-full bg-sea/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sea-deep">
                    Sách Điện tử Vi tính
                  </span>
                )}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-star">
                Sách giáo khoa Điện tử
              </h3>
              <p className="mt-1 text-xs text-star-soft leading-relaxed">
                Thiết kế chuyên biệt cho màn hình máy tính với thanh mục lục bên trái bám sát từng trang, nút phóng to thu nhỏ cỡ chữ, chế độ sáng/tối/giấy cổ và bài tập có lời giải ẩn hiện.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-sea-deep">
              Mở SGK điện tử đọc ngay →
            </span>
          </button>

          {/* Card 2: Lý thuyết 5 Điểm Tương tác */}
          {theory && (
            <button
              onClick={() => leaveTo("theory")}
              className="flex flex-col justify-between rounded-2xl border border-coral/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-coral hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">💡</span>
                  {readTheory && (
                    <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-leaf-deep">
                      ✓ Đã đọc lý thuyết
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Lý thuyết Cốt lõi
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Sơ đồ logic, đồ thị trực quan, bảng tóm tắt công thức, hộp cảnh báo bẫy thi cử và câu hỏi phản xạ nhanh.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-coral">
                Học lý thuyết tương tác →
              </span>
            </button>
          )}

          {/* Card 3: Phần I - Trắc nghiệm 12 câu 4 lựa chọn */}
          {mcq.length > 0 && (
            <button
              onClick={() => leaveTo("mcq")}
              className="flex flex-col justify-between rounded-2xl border border-sea/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-sea hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">🎯</span>
                  {bestMcq !== null ? (
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] font-bold ${
                        bestMcq >= 80
                          ? "bg-leaf/20 text-leaf-deep"
                          : "bg-gold/20 text-gold-deep"
                      }`}
                    >
                      {bestMcq >= 80 ? `⭐ ${bestMcq}%` : `${bestMcq}%`}
                    </span>
                  ) : (
                    <span className="rounded-full bg-sea/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-sea-deep">
                      Phần I • {mcq.length} câu
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Phần I: Trắc nghiệm 12 câu
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  12 câu hỏi trắc nghiệm nhiều lựa chọn (chọn 1 trong 4 phương án A, B, C, D) bao quát toàn bộ kiến thức trọng tâm của bài.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-sea-deep">
                {bestMcq !== null ? "Luyện lại Phần I →" : "Làm 12 câu trắc nghiệm →"}
              </span>
            </button>
          )}

          {/* Card 4: Phần II - Đúng / Sai 4 câu */}
          {tf.length > 0 && (
            <button
              onClick={() => leaveTo("tf")}
              className="flex flex-col justify-between rounded-2xl border border-gold/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-gold hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">⚖️</span>
                  {bestTf !== null ? (
                    <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-gold-deep">
                      {bestTf >= 80 ? `⭐ ${bestTf}%` : `${bestTf}%`}
                    </span>
                  ) : (
                    <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-gold-deep">
                      Phần II • {tf.length} câu
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Phần II: Đúng / Sai 4 câu
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  4 tình huống toán học với 16 nhận định độc lập a, b, c, d. Chấm điểm theo thang bậc chuẩn kỳ thi Tốt nghiệp THPT 2025.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-gold-deep">
                {bestTf !== null ? "Luyện lại Đúng/Sai →" : "Rèn phản biện Đúng/Sai →"}
              </span>
            </button>
          )}

          {/* Card 5: Phần III - Trả lời ngắn 6 câu */}
          {shortAnswer.length > 0 && (
            <button
              onClick={() => leaveTo("sa")}
              className="flex flex-col justify-between rounded-2xl border border-coral/40 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-coral hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">✍️</span>
                  {bestSa !== null ? (
                    <span className="rounded-full bg-coral/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-coral">
                      {bestSa >= 80 ? `⭐ ${bestSa}%` : `${bestSa}%`}
                    </span>
                  ) : (
                    <span className="rounded-full bg-coral/20 px-2.5 py-0.5 font-mono text-[11px] font-bold text-coral">
                      Phần III • {shortAnswer.length} câu
                    </span>
                  )}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Phần III: Trả lời ngắn 6 câu
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  6 bài toán yêu cầu tự tính toán và nhập đáp số chính xác. Hệ thống tự động so khớp, chấm điểm và hiện lời giải chi tiết.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-coral">
                {bestSa !== null ? "Luyện lại Trả lời ngắn →" : "Làm bài Trả lời ngắn →"}
              </span>
            </button>
          )}

          {/* Card 6: Tự luận & Bảng nháp */}
          {essay.length > 0 && (
            <button
              onClick={() => leaveTo("essay")}
              className="flex flex-col justify-between rounded-2xl border border-leaf/30 bg-void-card p-5 text-left shadow-card transition hover:-translate-y-1 hover:border-leaf hover:shadow-card-hover cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl">📝</span>
                  <span className="rounded-full bg-leaf/15 px-2.5 py-0.5 font-mono text-[11px] font-bold text-leaf-deep">
                    {essay.length} bài tự luận
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold text-star">
                  Tự luận & Bảng nháp Lập luận
                </h3>
                <p className="mt-1 text-xs text-star-soft leading-relaxed">
                  Rèn luyện khả năng trình bày bài toán logic hình thức, kèm bảng nháp gõ trực tiếp và nút mở xem đáp án chi tiết.
                </p>
              </div>
              <span className="mt-4 inline-flex items-center font-display text-xs font-bold text-leaf-deep">
                Mở bảng nháp & tự luận →
              </span>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}
