import type { LessonTheory } from "@/lib/types";

const bai03: LessonTheory = {
  "intro": "Phương pháp xác định tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số.",
  "minutes": 15,
  "sections": [
    {
      "id": "dung-ngang",
      "emoji": "📏",
      "heading": "1. Tiệm cận đứng và Tiệm cận ngang",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Tiệm cận đứng và Tiệm cận ngang",
          "formula": "\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\implies x = x_0 \\text{ (TCĐ)}; \\qquad \\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0 \\text{ (TCN)}",
          "note": "Đồ thị hàm số $y = \\frac{ax+b}{cx+d}$ luôn có TCĐ: $x = -\\frac{d}{c}$ và TCN: $y = \\frac{a}{c}$."
        }
      ]
    },
    {
      "id": "xien",
      "emoji": "📐",
      "heading": "2. Tiệm cận xiên (GDPT 2018)",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Định nghĩa và công thức tính hệ số Tiệm cận xiên $y = ax + b$",
          "formula": "a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\quad (a \\ne 0); \\qquad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]",
          "note": "Với phân thức bậc 2 trên bậc 1: Chia tử cho mẫu $f(x) = ax + b + \\frac{r}{cx+d} \\implies y = ax + b$ là tiệm cận xiên."
        }
      ]
    }
  ],
  "summary": [
    "TCĐ là nghiệm của mẫu làm tử khác 0.",
    "Bậc tử $\\le$ bậc mẫu $\\implies$ có tiệm cận ngang.",
    "Bậc tử = bậc mẫu + 1 $\\implies$ đồ thị có tiệm cận xiên $y = ax + b$."
  ]
};

export default bai03;
