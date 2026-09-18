import type { LessonTheory } from "@/lib/types";

const bai07: LessonTheory = {
  "intro": "Hệ toạ độ Descartes vuông góc $Oxyz$ trong không gian: toạ độ điểm, toạ độ vectơ và các mặt phẳng toạ độ.",
  "minutes": 15,
  "sections": [
    {
      "id": "he-toa-do",
      "emoji": "🌐",
      "heading": "1. Hệ toạ độ Oxyz và toạ độ điểm",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Biểu diễn điểm và vectơ trong không gian Oxyz",
          "formula": "M(x; y; z) \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}; \\qquad \\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)",
          "note": "Trong đó $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$ là các vectơ đơn vị của ba trục $Ox, Oy, Oz$."
        },
        {
          "kind": "cards",
          "tone": "leaf",
          "items": [
            {
              "emoji": "📌",
              "title": "Trung điểm đoạn thẳng",
              "text": "$I\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$."
            },
            {
              "emoji": "📌",
              "title": "Trọng tâm tam giác",
              "text": "$G\\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}; \\frac{z_A+z_B+z_C}{3}\\right)$."
            },
            {
              "emoji": "📌",
              "title": "Khoảng cách giữa hai điểm",
              "text": "$AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$."
            }
          ]
        }
      ]
    }
  ],
  "summary": [
    "Gốc toạ độ $O(0; 0; 0)$; các mặt phẳng toạ độ: $(Oxy): z = 0$, $(Oyz): x = 0$, $(Oxz): y = 0$.",
    "Hình chiếu của $M(x; y; z)$ lên $(Oxy)$ là $(x; y; 0)$, lên trục $Oz$ là $(0; 0; z)$.",
    "Khoảng cách từ $M(x; y; z)$ đến gốc toạ độ là $OM = \\sqrt{x^2 + y^2 + z^2}$."
  ]
};

export default bai07;
