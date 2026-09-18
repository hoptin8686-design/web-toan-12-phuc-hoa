import type { LessonTheory } from "@/lib/types";

const bai15: LessonTheory = {
  "intro": "Phương trình tham số và phương trình chính tắc của đường thẳng trong không gian Oxyz, vị trí tương đối giữa hai đường thẳng.",
  "minutes": 15,
  "sections": [
    {
      "id": "pt-duong-thang",
      "emoji": "📏",
      "heading": "1. Phương trình đường thẳng trong không gian",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Phương trình tham số và chính tắc của đường thẳng qua $M_0$ có VTCP $\\vec{u} = (a; b; c)$",
          "formula": "\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} (t \\in \\mathbb{R}); \\qquad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\quad (a, b, c \\ne 0)",
          "note": "Đường thẳng hoàn toàn xác định khi biết 1 điểm đi qua và 1 vectơ chỉ phương $\\vec{u} \\ne \\vec{0}$."
        }
      ]
    }
  ],
  "summary": [
    "Vectơ chỉ phương $\\vec{u} = (a; b; c)$ có giá song song hoặc trùng với đường thẳng.",
    "Muốn chuyển từ PT chính tắc sang tham số: đặt các tỉ số bằng $t$ rồi rút $x, y, z$.",
    "Hai đường thẳng trong không gian có 4 vị trí tương đối: cắt nhau, song song, trùng nhau hoặc chéo nhau."
  ]
};

export default bai15;
