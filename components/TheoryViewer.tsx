"use client";

import { useState } from "react";
import type { LessonTheory, TheoryBlock, Tone } from "@/lib/types";
import { markTheoryRead } from "@/lib/progress";
import Diagram from "@/components/theory/Diagram";

const TONE: Record<Tone, { box: string; title: string }> = {
  sea: { box: "border-sea/30 bg-sea/[0.08]", title: "text-sea-deep" },
  coral: { box: "border-coral/30 bg-coral/[0.08]", title: "text-coral" },
  leaf: { box: "border-leaf/30 bg-leaf/[0.08]", title: "text-leaf-deep" },
  gold: { box: "border-gold/35 bg-gold/[0.1]", title: "text-gold-deep" },
  berry: { box: "border-berry/30 bg-berry/[0.08]", title: "text-berry" },
};

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-star">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.length > 2 && p.startsWith("*") && p.endsWith("*")) {
          return (
            <em key={i} className="text-star-soft/90 italic">
              {p.slice(1, -1)}
            </em>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function QuickCheck({
  q,
  options,
  answer,
  explain,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === answer;

  return (
    <div className="my-5 rounded-2xl border-2 border-dashed border-sea/40 bg-sea/[0.06] p-4 sm:p-5">
      <p className="font-display text-sm font-semibold text-sea-deep">
        🤔 Thử kiểm tra tư duy logic của em:
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-star">
        <Rich text={q} />
      </p>
      <div className="mt-3 space-y-2">
        {options.map((o, i) => {
          const chosen = picked === i;
          const reveal = picked !== null;
          const isRight = i === answer;
          return (
            <button
              key={i}
              onClick={() => picked === null && setPicked(i)}
              disabled={picked !== null}
              className={`flex w-full items-start gap-2.5 rounded-xl border-2 px-3.5 py-2.5 text-left text-sm transition ${
                reveal && isRight
                  ? "border-leaf bg-leaf/20 text-leaf-deep"
                  : chosen
                    ? "border-berry bg-berry/20 text-berry"
                    : "border-star/10 bg-void-card text-star hover:border-sea/50"
              } ${picked === null ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="font-mono text-xs font-bold opacity-70">
                {String.fromCharCode(65 + i)}.
              </span>
              <span className="flex-1">{o}</span>
              {reveal && isRight && <span className="font-bold text-leaf-deep">✓</span>}
              {reveal && chosen && !isRight && <span className="font-bold text-berry">✕</span>}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-3 animate-pop-in rounded-xl bg-void-card p-3.5 border border-white/5">
          <p className={`font-display text-sm font-semibold ${correct ? "text-leaf-deep" : "text-coral"}`}>
            {correct ? "🎉 Rất tốt! Tư duy lập luận hoàn toàn chính xác!" : "💡 Chưa chính xác, cùng xem phân tích logic nhé:"}
          </p>
          <p className="mt-1 text-xs sm:text-sm leading-relaxed text-star-soft">
            <Rich text={explain} />
          </p>
        </div>
      )}
    </div>
  );
}

function RenderBlock({ block }: { block: TheoryBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="text-[15px] leading-relaxed text-star/90">
          <Rich text={block.text} />
        </p>
      );

    case "list":
      return (
        <ul className="my-2 space-y-1.5 pl-5 list-disc text-[15px] text-star/90">
          {block.items.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              <Rich text={item} />
            </li>
          ))}
        </ul>
      );

    case "cards": {
      const tone = TONE[block.tone ?? "sea"];
      return (
        <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {block.items.map((item, idx) => (
            <div key={idx} className={`rounded-xl border p-4 shadow-sm ${tone.box}`}>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className={`font-display font-bold text-[15px] ${tone.title}`}>
                  {item.title}
                </h4>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-star-soft">
                <Rich text={item.text} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    case "compare":
      return (
        <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-sea/30 bg-sea/[0.06] p-4">
            <div className="flex items-center gap-2 border-b border-sea/20 pb-2">
              <span className="text-xl">{block.left.emoji}</span>
              <h4 className="font-display font-bold text-sm text-sea-deep">{block.left.title}</h4>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-star">
              {block.left.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-sea-deep">•</span>
                  <span><Rich text={it} /></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-coral/30 bg-coral/[0.06] p-4">
            <div className="flex items-center gap-2 border-b border-coral/20 pb-2">
              <span className="text-xl">{block.right.emoji}</span>
              <h4 className="font-display font-bold text-sm text-coral">{block.right.title}</h4>
            </div>
            <ul className="mt-2.5 space-y-1.5 text-xs sm:text-sm text-star">
              {block.right.items.map((it, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-coral">•</span>
                  <span><Rich text={it} /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );

    case "steps":
      return (
        <div className="my-4 space-y-3">
          {block.items.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 rounded-xl border border-star/10 bg-void-card p-3.5">
              <span className="shrink-0 rounded-lg bg-sea px-2.5 py-1 font-mono text-xs font-bold text-white">
                {step.label}
              </span>
              <div>
                <h5 className="font-display font-bold text-sm text-star">{step.title}</h5>
                <p className="mt-1 text-xs sm:text-sm text-star-soft leading-relaxed">
                  <Rich text={step.text} />
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "figure":
      return (
        <div className="my-4">
          <Diagram name={block.diagram} />
          {block.caption && (
            <p className="mt-1 text-center font-mono text-xs text-star-soft">
              {block.caption}
            </p>
          )}
        </div>
      );

    case "mathBox":
      return (
        <div className="my-4 rounded-xl border border-sea/30 bg-sea/[0.08] p-4 text-star">
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-sea-deep">
            <span>📐</span>
            <span>{block.title}</span>
          </div>
          <div className="mt-2 overflow-x-auto rounded-lg bg-[#07131b] p-3 font-mono text-sm font-semibold text-sea-deep whitespace-pre-line">
            {block.formula}
          </div>
          {block.note && (
            <p className="mt-2 text-xs text-star-soft leading-relaxed">
              <Rich text={block.note} />
            </p>
          )}
        </div>
      );

    case "example":
      return (
        <div className="my-4 rounded-xl border border-leaf/30 bg-leaf/[0.08] p-4">
          <p className="font-display text-xs font-bold uppercase tracking-wider text-leaf-deep">
            💡 Ví dụ minh họa: {block.title}
          </p>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-star">
            <Rich text={block.text} />
          </p>
          {block.solution && (
            <div className="mt-2 pt-2 border-t border-leaf/20 text-xs sm:text-sm text-star-soft leading-relaxed">
              <span className="font-semibold text-leaf-deep">Hướng dẫn giải: </span>
              <Rich text={block.solution} />
            </div>
          )}
        </div>
      );

    case "note":
      return (
        <div className="my-4 rounded-xl border-l-4 border-gold bg-gold/[0.1] p-4 text-star">
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-gold-deep">
            <span>📌</span>
            <span>Điều cốt lõi cần nhớ:</span>
          </div>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-star/90">
            <Rich text={block.text} />
          </p>
        </div>
      );

    case "warn":
      return (
        <div className="my-4 rounded-xl border-l-4 border-berry bg-berry/[0.08] p-4 text-star">
          <div className="flex items-center gap-1.5 font-display text-sm font-bold text-berry">
            <span>⚠️</span>
            <span>Cảnh báo bẫy hay gặp: {block.title}</span>
          </div>
          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-star/90">
            <Rich text={block.text} />
          </p>
        </div>
      );

    case "check":
      return <QuickCheck {...block} />;

    default:
      return null;
  }
}

export default function TheoryViewer({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  onBack,
  onGoQuiz,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory;
  onBack: () => void;
  onGoQuiz: () => void;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      {/* Header điều hướng */}
      <div className="flex items-center justify-between gap-2 border-b border-star/10 pb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 rounded-full border border-star/20 bg-void-card px-3.5 py-1.5 font-mono text-xs font-medium text-star hover:border-sea/50 hover:bg-void-light transition"
        >
          ← Menu bài học
        </button>
        <span className="font-mono text-xs text-star-soft">
          ⏱️ Khoảng {theory.minutes} phút đọc
        </span>
      </div>

      {/* Tiêu đề bài */}
      <div className="mt-6">
        <span className="rounded-full bg-sea/15 px-3 py-1 font-mono text-xs font-semibold text-sea-deep">
          {topicName}
        </span>
        <h1 className="mt-2.5 font-display text-2xl font-bold text-star sm:text-3xl">
          {lessonTitle}
        </h1>
        <div className="mt-3 rounded-xl border border-sea/20 bg-sea/[0.05] p-3.5 text-sm leading-relaxed text-star-soft">
          <Rich text={theory.intro} />
        </div>
      </div>

      {/* Các phần lý thuyết */}
      <div className="mt-8 space-y-10">
        {theory.sections.map((sec, idx) => (
          <section key={sec.id || idx} className="rounded-2xl border border-star/10 bg-void-card/60 p-5 sm:p-6 shadow-card">
            <div className="flex items-center gap-2 border-b border-star/10 pb-3">
              <span className="text-2xl">{sec.emoji}</span>
              <h2 className="font-display text-lg sm:text-xl font-bold text-star">
                {sec.heading}
              </h2>
            </div>
            <div className="mt-4 space-y-4">
              {sec.blocks.map((block, bIdx) => (
                <RenderBlock key={bIdx} block={block} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Tóm tắt ghi nhớ */}
      {theory.summary && theory.summary.length > 0 && (
        <div className="mt-8 rounded-2xl border border-leaf/30 bg-leaf/[0.07] p-5 sm:p-6 shadow-card">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-leaf-deep">
            <span>🎯</span>
            <span>Tóm tắt ghi nhớ logic Toán 10:</span>
          </h3>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm text-star">
            {theory.summary.map((sum, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="font-bold text-leaf-deep">✓</span>
                <span><Rich text={sum} /></span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer kết thúc */}
      <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          onClick={() => {
            markTheoryRead(lessonId);
            onGoQuiz();
          }}
          className="w-full sm:w-auto rounded-full bg-gradient-to-r from-sea to-coral px-6 py-3 font-display text-base font-bold text-white shadow-card hover:shadow-glow transition hover:-translate-y-0.5"
        >
          Luyện trắc nghiệm 15 câu ngay →
        </button>
        <button
          onClick={onBack}
          className="w-full sm:w-auto rounded-full border border-star/20 bg-void-card px-5 py-3 font-display text-sm font-medium text-star hover:border-star/40 transition"
        >
          Quay lại menu bài học
        </button>
      </div>
    </div>
  );
}
