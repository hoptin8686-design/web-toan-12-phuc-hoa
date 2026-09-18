"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

/**
 * Safely render LaTeX math using KaTeX
 */
function renderLatex(formula: string, displayMode: boolean): string {
  try {
    return katex.renderToString(formula.trim(), {
      displayMode,
      throwOnError: false,
      output: "htmlAndMathml",
      strict: false,
    });
  } catch (err) {
    return `<span class="text-coral font-mono text-xs">${formula}</span>`;
  }
}

/**
 * MathText renders text containing:
 * - Block math: $$formula$$
 * - Inline math: $formula$
 * - Markdown bold: **text**
 * - Markdown italic: *text*
 * - Pure LaTeX formulas if block=true
 */
export default function MathText({ text, className = "", block = false }: MathTextProps) {
  const content = useMemo(() => {
    if (!text) return null;

    // If block mode is requested or the entire string is LaTeX
    if (block) {
      let clean = text.trim();
      if (clean.startsWith("$$") && clean.endsWith("$$")) {
        clean = clean.slice(2, -2).trim();
      } else if (clean.startsWith("$") && clean.endsWith("$")) {
        clean = clean.slice(1, -1).trim();
      }
      const html = renderLatex(clean, true);
      return (
        <div
          className={`overflow-x-auto py-1 my-1 ${className}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    // Split text into tokens:
    // 1. Block math: $$...$$
    // 2. Inline math: $...$
    // 3. Bold: **...**
    // 4. Italic: *...*
    const tokenRegex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\*\*[^*]+?\*\*|\*[^*]+?\*)/g;
    const parts = text.split(tokenRegex);

    return (
      <span className={className}>
        {parts.map((part, idx) => {
          if (!part) return null;

          // Block Math $$...$$
          if (part.startsWith("$$") && part.endsWith("$$") && part.length >= 4) {
            const math = part.slice(2, -2);
            const html = renderLatex(math, true);
            return (
              <span
                key={idx}
                className="block overflow-x-auto py-1 my-1"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }

          // Inline Math $...$
          if (part.startsWith("$") && part.endsWith("$") && part.length >= 2) {
            const math = part.slice(1, -1);
            const html = renderLatex(math, false);
            return (
              <span
                key={idx}
                className="inline-block px-0.5 align-middle"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }

          // Bold **...**
          if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
            const inner = part.slice(2, -2);
            return (
              <strong key={idx} className="font-semibold text-star">
                {inner}
              </strong>
            );
          }

          // Italic *...*
          if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
            const inner = part.slice(1, -1);
            return (
              <em key={idx} className="italic text-star-soft/90">
                {inner}
              </em>
            );
          }

          // Normal text
          return <span key={idx}>{part}</span>;
        })}
      </span>
    );
  }, [text, className, block]);

  return <>{content}</>;
}
