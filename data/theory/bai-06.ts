import type { LessonTheory } from "@/lib/types";

const bai06: LessonTheory = {
  "intro": "Các phép toán vectơ trong không gian 3 chiều: tổng, hiệu, tích với số, quy tắc hình hộp và tích vô hướng.",
  "minutes": 15,
  "sections": [
    {
      "id": "quy-tac",
      "emoji": "📦",
      "heading": "1. Các quy tắc vectơ không gian",
      "blocks": [
        {
          "kind": "cards",
          "tone": "sea",
          "items": [
            {
              "emoji": "📐",
              "title": "Quy tắc 3 điểm",
              "text": "Với 3 điểm bất kỳ $A, B, C$: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."
            },
            {
              "emoji": "📦",
              "title": "Quy tắc hình hộp",
              "text": "Với hình hộp $ABCD.A'B'C'D'$: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$."
            },
            {
              "emoji": "⚖️",
              "title": "Trọng tâm tứ diện",
              "text": "Trọng tâm $G$ của tứ diện $ABCD$: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Quy tắc hình hộp & Tích vô hướng",
          "formula": "\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}; \\qquad \\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})",
          "note": "Hai vectơ vuông góc với nhau khi và chỉ khi tích vô hướng bằng 0: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$."
        }
      ]
    }
  ],
  "summary": [
    "Vectơ trong không gian mở rộng quy tắc hình bình hành thành quy tắc hình hộp.",
    "Ba vectơ đồng phẳng khi một vectơ biểu diễn được tuyến tính qua hai vectơ còn lại.",
    "Tích vô hướng giúp tính độ dài vectơ và góc giữa hai đường thẳng trong không gian."
  ]
};

export default bai06;
