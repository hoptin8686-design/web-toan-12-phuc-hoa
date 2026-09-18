import type { LessonTheory } from "@/lib/types";

const bai17: LessonTheory = {
  "intro": "Phương trình mặt cầu trong không gian Oxyz, toạ độ tâm, bán kính và vị trí tương đối giữa mặt cầu và mặt phẳng.",
  "minutes": 15,
  "sections": [
    {
      "id": "pt-mat-cau",
      "emoji": "⚽",
      "heading": "1. Phương trình mặt cầu",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Phương trình chính tắc và tổng quát của mặt cầu tâm $I(a; b; c)$ bán kính $R$",
          "formula": "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 \\iff x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0",
          "note": "Điều kiện để phương trình tổng quát là mặt cầu: $a^2 + b^2 + c^2 - d > 0$. Khi đó bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
        },
        {
          "kind": "cards",
          "tone": "gold",
          "items": [
            {
              "emoji": "🚫",
              "title": "$d(I, (\\alpha)) > R$",
              "text": "Mặt phẳng và mặt cầu không có điểm chung."
            },
            {
              "emoji": "🎯",
              "title": "$d(I, (\\alpha)) = R$",
              "text": "Mặt phẳng tiếp xúc với mặt cầu tại một điểm duy nhất (mặt phẳng tiếp diện)."
            },
            {
              "emoji": "⭕",
              "title": "$d(I, (\\alpha)) < R$",
              "text": "Mặt phẳng cắt mặt cầu theo đường tròn giao tuyến có bán kính $r = \\sqrt{R^2 - d^2}$."
            }
          ]
        }
      ]
    }
  ],
  "summary": [
    "Mặt cầu hoàn toàn xác định khi biết toạ độ tâm $I(a; b; c)$ và độ dài bán kính $R > 0$.",
    "Đường kính $AB \\implies$ tâm $I$ là trung điểm $AB$ và bán kính $R = \\frac{AB}{2}$.",
    "Giao tuyến của mặt cầu và mặt phẳng khi cắt nhau là đường tròn có bán kính $r = \\sqrt{R^2 - d^2}$."
  ]
};

export default bai17;
