import type { LessonTheory } from "@/lib/types";

const bai14: LessonTheory = {
  "intro": "Phương trình tổng quát của mặt phẳng trong không gian Oxyz, vectơ pháp tuyến và vị trí tương đối giữa hai mặt phẳng.",
  "minutes": 15,
  "sections": [
    {
      "id": "pt-mat-phang",
      "emoji": "📄",
      "heading": "1. Phương trình tổng quát của mặt phẳng",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Phương trình mặt phẳng đi qua điểm $M_0(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$",
          "formula": "A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0 \\quad (A^2 + B^2 + C^2 > 0)",
          "note": "Nếu mặt phẳng có cặp VTCP $\\vec{a}, \\vec{b}$ không cùng phương thì VTPT là tích có hướng $\\vec{n} = [\\vec{a}, \\vec{b}]$."
        },
        {
          "kind": "mathBox",
          "title": "Phương trình mặt phẳng theo đoạn chắn",
          "formula": "\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1",
          "note": "Mặt phẳng cắt 3 trục toạ độ $Ox, Oy, Oz$ lần lượt tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c \\ne 0$."
        }
      ]
    }
  ],
  "summary": [
    "Mặt phẳng hoàn toàn xác định khi biết 1 điểm đi qua và 1 vectơ pháp tuyến $\\vec{n}$.",
    "Hai mặt phẳng vuông góc $\\iff$ hai VTPT vuông góc: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
    "Hai mặt phẳng song song $\\iff \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\ne \\frac{D_1}{D_2}$."
  ]
};

export default bai14;
