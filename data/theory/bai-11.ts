import type { LessonTheory } from "@/lib/types";

const bai11: LessonTheory = {
  "intro": "Định nghĩa nguyên hàm, các tính chất tuyến tính và bảng nguyên hàm của các hàm số sơ cấp cơ bản.",
  "minutes": 15,
  "sections": [
    {
      "id": "dinh-nghia-tinh-chat",
      "emoji": "∫",
      "heading": "1. Định nghĩa và Tính chất nguyên hàm",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Định nghĩa nguyên hàm",
          "formula": "\\int f(x) dx = F(x) + C \\iff F'(x) = f(x)",
          "note": "Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì họ nguyên hàm là $F(x) + C$ ($C \\in \\mathbb{R}$)."
        },
        {
          "kind": "cards",
          "tone": "sea",
          "items": [
            {
              "emoji": "➕",
              "title": "Tính chất cộng trừ",
              "text": "$\\int [f(x) \\pm g(x)] dx = \\int f(x)dx \\pm \\int g(x)dx$."
            },
            {
              "emoji": "✖️",
              "title": "Nhân với hằng số $k \\ne 0$",
              "text": "$\\int k f(x) dx = k \\int f(x) dx$."
            },
            {
              "emoji": "⚡",
              "title": "Đạo hàm của nguyên hàm",
              "text": "$(\\int f(x)dx)' = f(x)$."
            }
          ]
        }
      ]
    },
    {
      "id": "bang-nguyen-ham",
      "emoji": "📜",
      "heading": "2. Bảng nguyên hàm các hàm số sơ cấp",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Bảng nguyên hàm cơ bản",
          "formula": "\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1); \\qquad \\int \\frac{1}{x} dx = \\ln|x| + C; \\qquad \\int e^x dx = e^x + C; \\qquad \\int a^x dx = \\frac{a^x}{\\ln a} + C",
          "note": "Nguyên hàm lượng giác: $\\int \\cos x dx = \\sin x + C$; $\\int \\sin x dx = -\\cos x + C$; $\\int \\frac{dx}{\\cos^2 x} = \\tan x + C$; $\\int \\frac{dx}{\\sin^2 x} = -\\cot x + C$."
        },
        {
          "kind": "mathBox",
          "title": "Công thức mở rộng cho hàm bậc nhất $ax + b$ ($a \\ne 0$)",
          "formula": "\\int f(ax+b) dx = \\frac{1}{a} F(ax+b) + C",
          "note": "Ví dụ: $\\int \\cos(2x+1)dx = \\frac{1}{2}\\sin(2x+1) + C$; $\\int e^{3x}dx = \\frac{1}{3}e^{3x} + C$."
        }
      ]
    }
  ],
  "summary": [
    "Nguyên hàm là phép toán ngược của đạo hàm: $(\\int f(x)dx)' = f(x)$.",
    "Luôn nhớ cộng thêm hằng số $C$ khi viết họ nguyên hàm.",
    "Không có công thức nguyên hàm của tích hay thương: $\\int f \\cdot g \\ne \\int f \\cdot \\int g$."
  ]
};

export default bai11;
