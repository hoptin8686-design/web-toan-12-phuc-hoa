"use client";

import { useState } from "react";
import type { EssayQuestion } from "@/lib/types";

export default function EssayViewer({
  lessonTitle,
  questions,
  onBack,
}: {
  lessonTitle: string;
  questions: EssayQuestion[];
  onBack: () => void;
}) {
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [opened, setOpened] = useState<Record<string, boolean>>({});

  if (questions.length === 0) {
    return (
      <div className="mx-auto max-w-xl py-16 text-center">
        <p className="text-star-soft">Chưa có bài tập tự luận cho bài này.</p>
        <button
          onClick={onBack}
          className="mt-4 rounded-full bg-void-card px-4 py-2 text-sm text-star border border-star/20"
        >
          ← Quay lại
        </button>
      </div>
    );
  }

  const toggleAnswer = (id: string) => {
    setOpened((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      {/* Header điều hướng */}
      <div className="flex items-center justify-between gap-3 border-b border-star/10 pb-3">
        <button
          onClick={onBack}
          className="rounded-full border border-star/20 bg-void-card px-3.5 py-1.5 font-mono text-xs text-star hover:border-sea/40 transition"
        >
          ← Menu bài học
        </button>
        <span className="font-mono text-xs text-gold-deep">
          Tự luận & Rèn luyện suy luận logic ({questions.length} bài)
        </span>
      </div>

      <div className="mt-6 space-y-8">
        {questions.map((q, idx) => {
          const isOpen = !!opened[q.id];
          const draftText = drafts[q.id] ?? "";

          return (
            <div
              key={q.id}
              className="rounded-2xl border border-star/10 bg-void-card p-5 sm:p-6 shadow-card"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-gold/15 px-2.5 py-1 font-mono text-xs font-bold text-gold-deep">
                  Bài toán {idx + 1}
                </span>
              </div>

              <h3 className="mt-3 font-display text-base sm:text-lg font-semibold leading-relaxed text-star">
                {q.q}
              </h3>

              {q.math && (
                <div className="mt-3 overflow-x-auto rounded-xl border border-star/10 bg-[#07131b] p-3 font-mono text-xs sm:text-sm text-sea-deep">
                  {q.math}
                </div>
              )}

              {/* Ô gõ nháp của học sinh */}
              <div className="mt-4">
                <label className="block text-xs font-medium text-star-soft">
                  📝 Bảng nháp / Các bước lập luận của em:
                </label>
                <textarea
                  value={draftText}
                  onChange={(e) =>
                    setDrafts((prev) => ({ ...prev, [q.id]: e.target.value }))
                  }
                  placeholder="Gõ nháp các bước suy luận, lập luận logic, kiểm tra điều kiện hoặc tính toán tại đây..."
                  rows={4}
                  className="mt-1.5 w-full rounded-xl border border-star/15 bg-void p-3.5 font-mono text-sm text-star placeholder:text-star-soft/40 focus:border-sea focus:outline-none"
                />
              </div>

              {/* Nút xem đáp án đối chiếu */}
              <div className="mt-4 flex items-center justify-between">
                <button
                  onClick={() => toggleAnswer(q.id)}
                  className="flex items-center gap-2 rounded-full border border-sea/30 bg-sea/10 px-4 py-1.5 font-display text-xs font-bold text-sea-deep hover:bg-sea/20 transition"
                >
                  <span>{isOpen ? "Ẩn hướng dẫn giải" : "🔍 Xem lời giải chi tiết"}</span>
                </button>
                {draftText.trim().length > 0 && (
                  <span className="text-xs text-leaf-deep font-mono">
                    ✓ Đã lưu nháp lập luận
                  </span>
                )}
              </div>

              {/* Khối đáp án khi mở */}
              {isOpen && (
                <div className="mt-4 animate-pop-in rounded-xl border border-leaf/30 bg-leaf/[0.08] p-4">
                  <div className="flex items-center gap-1.5 font-display text-sm font-bold text-leaf-deep">
                    <span>💡</span>
                    <span>Lời giải chuẩn & Hướng dẫn lập luận:</span>
                  </div>
                  <div className="mt-2 whitespace-pre-wrap font-sans text-xs sm:text-sm leading-relaxed text-star">
                    {q.answer}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onBack}
          className="rounded-full bg-void-card border border-star/20 px-6 py-2.5 font-display text-sm font-bold text-star hover:border-sea/40 transition"
        >
          ← Hoàn thành & Quay lại Menu
        </button>
      </div>
    </div>
  );
}
