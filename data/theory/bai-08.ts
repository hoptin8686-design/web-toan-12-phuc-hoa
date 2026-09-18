import type { LessonTheory } from "@/lib/types";

const bai08: LessonTheory = {
  "intro": "Biểu thức toạ độ của các phép toán vectơ: cộng, trừ, nhân với một số, tích vô hướng, độ dài và góc.",
  "minutes": 15,
  "sections": [
    {
      "id": "phep-toan",
      "emoji": "🧮",
      "heading": "1. Biểu thức toạ độ các phép toán",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Công thức toạ độ vectơ cơ bản",
          "formula": "\\vec{a} \\pm \\vec{b} = (x_1 \\pm x_2; y_1 \\pm y_2; z_1 \\pm z_2); \\qquad k\\vec{a} = (kx_1; ky_1; kz_1); \\qquad |\\vec{a}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}",
          "note": "Hai vectơ cùng phương: $\\vec{a} = k\\vec{b} \\iff \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$ (khi các mẫu khác 0)."
        },
        {
          "kind": "mathBox",
          "title": "Tích vô hướng và góc giữa hai vectơ",
          "formula": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2; \\qquad \\cos(\\vec{a}, \\vec{b}) = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\cdot \\sqrt{x_2^2+y_2^2+z_2^2}}",
          "note": "Điều kiện vuông góc: $\\vec{a} \\perp \\vec{b} \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$."
        }
      ]
    }
  ],
  "summary": [
    "Tích vô hướng bằng tổng các tích của các toạ độ tương ứng.",
    "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0.",
    "Độ dài vectơ bằng căn bậc hai của tổng bình phương ba toạ độ."
  ]
};

export default bai08;
