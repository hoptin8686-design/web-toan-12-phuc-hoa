"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface MathTextProps {
  text: string;
  className?: string;
  block?: boolean;
}

/**
 * Standardizes mathematical syntax into valid LaTeX before feeding to KaTeX:
 * - Exponents / số mũ: x^4, 2x^2, x^{10}, e^{2x}, e^{-x}, (x-1)^2, s^2, m^3, cm^2
 * - Fractions / phép chia: (A)/(B) -> \frac{A}{B}, 13/3 -> \frac{13}{3}, x + 4/x -> x + \frac{4}{x}
 * - Square roots: √(expr) -> \sqrt{expr}
 * - Integrals: int_0^1 e^x dx -> \int_0^1 e^x dx
 * - Sets & Intervals: R \ {1} -> \mathbb{R} \setminus \{1\}
 * - Symbols: <=>, =>, !=, <=, >=, ±, ∫, ∞, x̄ -> \bar{x}
 */
function cleanLatexMath(expr: string): string {
  let s = expr.trim();
  if (s.startsWith("$") && s.endsWith("$")) {
    s = s.slice(1, -1).trim();
  }

  // Convert unicode superscripts to standard exponents
  s = s.replace(/⁰/g, "^0")
       .replace(/¹/g, "^1")
       .replace(/²/g, "^2")
       .replace(/³/g, "^3")
       .replace(/⁴/g, "^4")
       .replace(/⁵/g, "^5")
       .replace(/⁶/g, "^6")
       .replace(/⁷/g, "^7")
       .replace(/⁸/g, "^8")
       .replace(/⁹/g, "^9")
       .replace(/ⁿ/g, "^n")
       .replace(/⁻¹/g, "^{-1}")
       .replace(/⁻²/g, "^{-2}")
       .replace(/⁻/g, "^-");

  // Relational & Logic symbols
  s = s.replace(/<=>/g, " \\iff ");
  s = s.replace(/=>/g, " \\implies ");
  s = s.replace(/!=/g, " \\ne ");
  s = s.replace(/≠/g, " \\ne ");
  s = s.replace(/<=/g, " \\le ");
  s = s.replace(/>=/g, " \\ge ");
  s = s.replace(/≤/g, " \\le ");
  s = s.replace(/≥/g, " \\ge ");
  s = s.replace(/±/g, " \\pm ");
  s = s.replace(/∈/g, " \\in ");
  s = s.replace(/∉/g, " \\notin ");

  // Greek & Calculus
  s = s.replace(/\bDelta'\b/g, "\\Delta'");
  s = s.replace(/\bDelta\b/g, "\\Delta");
  s = s.replace(/\bpi\b/g, "\\pi");
  s = s.replace(/π/g, "\\pi");
  s = s.replace(/x̄/g, "\\bar{x}");

  // Integrals: int_0^1 or int_a^b or \int
  s = s.replace(/\bint_([0-9a-zA-Z]+)\^([0-9a-zA-Z]+)/g, (_, a, b) => `\\int_{${a}}^{${b}} `);
  s = s.replace(/∫\s*/g, " \\int ");
  s = s.replace(/\bint\b/g, " \\int ");

  // Subscripts like x1, x2 -> x_1, x_2
  s = s.replace(/\b([a-zA-Z])([0-9])\b/g, "$1_$2");

  // Infinity & Sets
  s = s.replace(/([+-]?)∞/g, (_, sign) => (sign === "-" ? "-\\infty" : sign === "+" ? "+\\infty" : "\\infty"));
  s = s.replace(/R\s*\\\\\s*\{([^}]+)\}/g, "\\mathbb{R} \\setminus \\{$1\\}");
  s = s.replace(/R\s*\\\s*\{([^}]+)\}/g, "\\mathbb{R} \\setminus \\{$1\\}");
  s = s.replace(/\bR\b(?!\w)/g, "\\mathbb{R}");

  // Square roots: √(9 - x^2) -> \sqrt{9 - x^2}
  s = s.replace(/√\(([^)]+)\)/g, (_, a) => `\\sqrt{${a.trim()}}`);
  s = s.replace(/√([0-9a-zA-Z_]+)/g, (_, a) => `\\sqrt{${a.trim()}}`);
  s = s.replace(/sqrt\(([^)]+)\)/g, (_, a) => `\\sqrt{${a.trim()}}`);

  // Fractions:
  // 1. (A)/(B)^n or (A)/(B)
  s = s.replace(/\(([^)]+)\)\s*\/\s*(\([^)]+\)\^[0-9a-zA-Z]+|\([^)]+\))/g, (_, a, b) => `\\frac{${a.trim()}}{${b.trim()}}`);
  // 2. A / (B)^n or A / (B)
  s = s.replace(/([a-zA-Z0-9_\^]+)\s*\/\s*(\([^)]+\)\^[0-9a-zA-Z]+|\([^)]+\))/g, (_, a, b) => `\\frac{${a.trim()}}{${b.trim()}}`);
  // 3. (A) / B
  s = s.replace(/\(([^)]+)\)\s*\/\s*([a-zA-Z0-9_\^]+)/g, (_, a, b) => `\\frac{${a.trim()}}{${b.trim()}}`);
  // 4. Simple fractions like 13/3, x^4/4, 4/x, 1/x, -2/3, a/b, 1/3
  s = s.replace(/(-?\d+|[a-zA-Z0-9_\^]+)\s*\/\s*([a-zA-Z0-9_\^]+)/g, (_, a, b) => `\\frac{${a.trim()}}{${b.trim()}}`);

  // Exponents (Số mũ):
  // e^(2x) -> e^{2x}, 2^(x+1) -> 2^{x+1}, (x-1)^2 -> (x-1)^2
  s = s.replace(/\^\(([^)]+)\)/g, (_, a) => `^{${a.trim()}}`);
  // Multi-character exponents without braces: x^10 -> x^{10}, e^-x -> e^{-x}, a^2x -> a^{2x}
  s = s.replace(/\^([0-9a-zA-Z]{2,})/g, (_, a) => `^{${a}}`);
  s = s.replace(/\^(-[0-9a-zA-Z]+)/g, (_, a) => `^{${a}}`);

  // Units with exponents: cm^2 -> \text{cm}^2, m^3 -> \text{m}^3
  s = s.replace(/\b(cm|dm|mm|km|m)\^([23])\b/g, "\\text{$1}^{$2}");

  return s;
}

/**
 * Safely render LaTeX math using KaTeX
 */
function renderLatex(formula: string, displayMode: boolean): string {
  try {
    const cleaned = cleanLatexMath(formula);
    return katex.renderToString(cleaned, {
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
 * Automatically detects mathematical expressions in Vietnamese text and wraps them in $...$
 * using a protected placeholder pool to prevent any nested dollar signs.
 */
function autoWrapMathExpressions(text: string): string {
  if (!text) return text;

  const trimmed = text.trim();
  // Check if the entire string is a single pure math option (like "3", "(2; -2)", "x^4 / 4 + C", "13/3", "m = 6", "s² = 16")
  const isPureMath =
    /^[0-9a-zA-Z_\^\+\-\*\/\\\{\}\(\)\|\s=><≥≤≠≈.,;\[\]⁰¹²³⁴⁵⁶⁷⁸⁹ⁿ⁻x̄]+$/.test(trimmed) &&
    !/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(trimmed);

  if (isPureMath) {
    return `$${trimmed.replace(/^\$+|\$+$/g, "")}$`;
  }

  const pool: string[] = [];
  function pushMath(m: string): string {
    const idx = pool.length;
    pool.push(m.trim());
    return `___MTH_${idx}___`;
  }

  // 1. Preserve existing $...$ and $$...$$
  let s = text.replace(/(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g, (_, m) =>
    pushMath(m.startsWith("$") ? m.replace(/^\$+|\$+$/g, "") : m)
  );

  // 2. Pre-normalize unicode exponents in text so regexes can easily recognize them
  s = s.replace(/⁰/g, "^0")
       .replace(/¹/g, "^1")
       .replace(/²/g, "^2")
       .replace(/³/g, "^3")
       .replace(/⁴/g, "^4")
       .replace(/⁵/g, "^5")
       .replace(/⁶/g, "^6")
       .replace(/⁷/g, "^7")
       .replace(/⁸/g, "^8")
       .replace(/⁹/g, "^9")
       .replace(/ⁿ/g, "^n")
       .replace(/⁻¹/g, "^{-1}")
       .replace(/⁻²/g, "^{-2}")
       .replace(/⁻/g, "^-");

  // 3. Match integrals with limits: I = int_0^1 e^x dx or int_0^1 f(x) dx
  s = s.replace(/((?:[a-zA-Z]\s*=\s*)?(?:int_[0-9a-zA-Z]+\^[0-9a-zA-Z]+|int|∫)\s+[^.?!\n,;:]+\s*d[x-z])/gi, (_, itg) => pushMath(itg));

  // 4. Match sphere / quadratic equations: (x - a)^2 + (y - b)^2 + (z - c)^2 = R^2
  s = s.replace(/(\([a-zA-Z]\s*[\+\-]\s*[^)]+\)\^[0-9a-zA-Z]+\s*[\+\-]\s*\([a-zA-Z]\s*[\+\-]\s*[^)]+\)\^[0-9a-zA-Z]+(?:\s*[\+\-]\s*\([a-zA-Z]\s*[\+\-]\s*[^)]+\)\^[0-9a-zA-Z]+)?\s*=\s*[a-zA-Z0-9_\^]+)/g, (_, eq) => pushMath(eq));

  // 5. Match quantities with units: V = 4 m^3, S = 100 cm^2, 100 cm^2, 4 m^3
  s = s.replace(/((?:[A-Za-z]\s*=\s*)?\d+(?:\.\d+)?\s*(?:cm|dm|mm|km|m)\^[23])/g, (_, m) => pushMath(m));
  s = s.replace(/\b((?:cm|dm|mm|km|m)\^[23])\b/g, (_, u) => pushMath(u));

  // 6. Match equations like: y = x^4 - 2x^2 + 1, f'(x) = ..., s^2 = 16
  const eqRegex = /((?:y'|y''|f'\(x\)|f\(x\)|f''\(x\)|g\(x\)|C'\(x\)|C\(x\)|R'\(x\)|R\(x\)|P'\(x\)|P\(x\)|v\(t\)|s\(t\)|a\(t\)|s\^2|s|V|S|I|F\(x\)|y|m|x)\s*=\s*[^\s?.!,;:]+(?:\s+[\+\-\*\/=><≠≤≥]\s+[^\s?.!,;:]+)*)/gi;
  s = s.replace(eqRegex, (_, eq) => pushMath(eq));

  // 7. Match parenthesized expressions with exponent: (x - x̄)^2, (x - 1)^2
  s = s.replace(/(\([a-zA-Z0-9_\s\+\-x̄]+\)\^[0-9a-zA-Z_\(\)]+)/g, (_, m) => pushMath(m));

  // 8. Match intervals/tuples: (-∞; 0), (2; +∞), (2; -2), [0; 2], [1; 3], (a; b)
  s = s.replace(/([\(\[][-\+]?(?:\\infty|∞|[a-zA-Z0-9_]+)\s*;\s*[-\+]?(?:\\infty|∞|[a-zA-Z0-9_]+)[\)\]])/g, (_, iv) => pushMath(iv));

  // 9. Match set operations: R \ {1}, R \\ {1}, trên R, thuộc R
  s = s.replace(/R\s*\\\\\s*\{([^}]+)\}/g, (_, a) => pushMath(`\\mathbb{R} \\setminus \\{${a}\\}`));
  s = s.replace(/R\s*\\\s*\{([^}]+)\}/g, (_, a) => pushMath(`\\mathbb{R} \\setminus \\{${a}\\}`));
  s = s.replace(/(?<=(?:trên|thuộc|với|tập)\s+)R\b/g, () => pushMath(`\\mathbb{R}`));

  // 10. Match inequalities: f(x1) < f(x2), x1 < x2, x < 0, x > 2, m <= 1
  s = s.replace(/\b(f\([a-zA-Z0-9_]+\)\s*[<>=≤≥≠]\s*f\([a-zA-Z0-9_]+\))\b/g, (_, ineq) => pushMath(ineq));
  s = s.replace(/\b([a-zA-Z][0-9a-zA-Z_]*\s*[<>=≤≥≠]\s*[a-zA-Z0-9_]+)\b/g, (_, ineq) => pushMath(ineq));

  // 11. Match functions: f(x), f'(x), f''(x), g(x), y', y''
  s = s.replace(/\b(f\([a-zA-Z0-9_]+\)|f'\([a-zA-Z0-9_]+\)|f''\([a-zA-Z0-9_]+\)|g\([a-zA-Z0-9_]+\)|y'|y'')\b/g, (_, fn) => pushMath(fn));

  // 12. Match standalone powers: x^4, 2x^2, x^3, e^(2x), 2^x, 3^(x-1)
  s = s.replace(/\b([a-zA-Z0-9_\(\)]+\^[0-9a-zA-Z_\(\)]+(?:[\s\+\-\*\/][a-zA-Z0-9_\^\(\)\/]+)*)\b/g, (_, pow) => pushMath(pow));

  // 13. Match standalone fractions: (2x + 1)/(x - 1), 13/3, 4/x
  s = s.replace(/\b(\([^)]+\)\s*\/\s*\([^)]+\)|[a-zA-Z0-9_\^]+\s*\/\s*[a-zA-Z0-9_\^]+)\b/g, (_, frac) => pushMath(frac));

  // 14. Match roots
  s = s.replace(/√\(([^)]+)\)/g, (_, a) => pushMath(`\\sqrt{${a}}`));
  s = s.replace(/√([0-9a-zA-Z]+)/g, (_, a) => pushMath(`\\sqrt{${a}}`));

  // 15. Restore pool as $...$
  s = s.replace(/___MTH_(\d+)___/g, (_, idx) => {
    return `$${pool[parseInt(idx, 10)]}$`;
  });

  return s;
}

export default function MathText({ text, className = "", block = false }: MathTextProps) {
  const content = useMemo(() => {
    if (!text) return null;

    // Block math mode
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

    // Auto-detect math and format into tokens
    const preparedText = autoWrapMathExpressions(text);

    // Split text into tokens:
    // 1. Block math: $$...$$
    // 2. Inline math: $...$
    // 3. Bold: **...**
    // 4. Italic: *...*
    const tokenRegex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$|\*\*[^*]+?\*\*|\*[^*]+?\*)/g;
    const parts = preparedText.split(tokenRegex);

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
