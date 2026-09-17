"use client";

import { useState } from "react";
import { markSgkRead } from "@/lib/progress";

interface SgkViewerProps {
  lessonId: string;
  lessonTitle: string;
  bookPages?: string;
  onBack?: () => void;
  onGoQuiz?: () => void;
}

export default function SgkViewer({
  lessonId,
  lessonTitle,
  bookPages,
  onBack,
  onGoQuiz,
}: SgkViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [readConfirmed, setReadConfirmed] = useState(false);

  const handleMarkRead = () => {
    markSgkRead(lessonId);
    setReadConfirmed(true);
  };

  return (
    <div className={`flex flex-col ${isFullscreen ? "fixed inset-0 z-50 bg-[#090d16]" : "space-y-3"}`}>
      {/* Control bar for Mobile & Desktop Reader */}
      <div className="flex flex-col gap-3 rounded-2xl border border-sea/25 bg-void-card/95 p-3.5 backdrop-blur shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-4">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="rounded-full border border-star/20 bg-void-light px-3 py-1.5 text-xs font-mono text-star hover:border-sea/50 transition shrink-0"
            >
              ← Menu
            </button>
          )}
          <span className="text-xl sm:text-2xl shrink-0">📖</span>
          <div className="min-w-0">
            <div className="font-display font-bold text-sm text-star sm:text-base truncate">
              SGK Điện tử — {lessonTitle}
            </div>
            <div className="text-[11px] text-star-soft truncate">
              {bookPages ?? "Chương I"} • Màn hình vi tính & di động chuẩn KNTT
            </div>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {!readConfirmed ? (
            <button
              onClick={handleMarkRead}
              className="flex-1 sm:flex-initial rounded-xl border border-leaf/40 bg-leaf/15 px-3 py-1.5 text-xs font-bold text-leaf-deep hover:bg-leaf/25 transition text-center"
              title="Đánh dấu đã đọc trang SGK này"
            >
              ✓ Đã đọc
            </button>
          ) : (
            <span className="flex-1 sm:flex-initial rounded-xl bg-leaf/20 px-3 py-1.5 text-xs font-bold text-leaf-deep text-center">
              🌟 Đã đọc SGK
            </span>
          )}

          <a
            href={`/sgk/${lessonId}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial rounded-xl border border-sea/30 bg-sea/10 px-3 py-1.5 text-xs font-bold text-sea-deep hover:bg-sea/20 transition flex items-center justify-center gap-1 text-center"
            title="Mở toàn màn hình tab mới"
          >
            ↗ Tab mới
          </a>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="flex-1 sm:flex-initial rounded-xl border border-star/20 bg-void-light px-3 py-1.5 text-xs font-mono text-star hover:border-star/40 transition text-center"
          >
            {isFullscreen ? "Thu nhỏ 🗗" : "Toàn màn ⛶"}
          </button>

          {onGoQuiz && (
            <button
              onClick={onGoQuiz}
              className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-sea to-coral px-3.5 py-2 text-xs font-bold text-white shadow-card hover:shadow-glow transition text-center"
            >
              Luyện 15 câu trắc nghiệm →
            </button>
          )}
        </div>
      </div>

      {/* Frame displaying the Digital Textbook */}
      <div
        className={`relative overflow-hidden rounded-2xl border border-sea/20 bg-[#090d16] shadow-2xl w-full max-w-full ${
          isFullscreen ? "flex-1 h-[calc(100vh-70px)]" : "h-[75vh] sm:h-[820px]"
        }`}
      >
        <iframe
          src={`/sgk/${lessonId}.html`}
          className="w-full h-full border-none block"
          title={`SGK Điện tử - ${lessonTitle}`}
        />
      </div>
    </div>
  );
}
