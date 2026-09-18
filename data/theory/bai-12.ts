import type { LessonTheory } from "@/lib/types";

const bai12: LessonTheory = {
  "intro": "Định nghĩa tích phân theo công thức Newton-Leibniz, các tính chất cơ bản, phương pháp đổi biến số và tích phân từng phần.",
  "minutes": 15,
  "sections": [
    {
      "id": "dinh-nghia-tich-phan",
      "emoji": "🎯",
      "heading": "1. Công thức Newton - Leibniz và Tính chất",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Công thức Newton - Leibniz",
          "formula": "\\int_a^b f(x) dx = F(b) - F(a) = \\left. F(x) \\right|_a^b",
          "note": "Tích phân chỉ phụ thuộc vào hàm số $f$ và các cận $a, b$, không phụ thuộc vào biến số: $\\int_a^b f(x)dx = \\int_a^b f(t)dt$."
        },
        {
          "kind": "cards",
          "tone": "leaf",
          "items": [
            {
              "emoji": "🔄",
              "title": "Đổi cận đảo dấu",
              "text": "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$; $\\int_a^a f(x)dx = 0$."
            },
            {
              "emoji": "🔗",
              "title": "Chèn cận liên tiếp",
              "text": "$\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$ với mọi $a, b, c$."
            },
            {
              "emoji": "✨",
              "title": "Tuyến tính",
              "text": "$\\int_a^b [k f(x) + m g(x)]dx = k \\int_a^b f(x)dx + m \\int_a^b g(x)dx$."
            }
          ]
        }
      ]
    },
    {
      "id": "phuong-phap-tinh",
      "emoji": "🛠️",
      "heading": "2. Hai phương pháp tính tích phân then chốt",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Phương pháp đổi biến số & Từng phần",
          "formula": "\\int_a^b f(u(x)) u'(x) dx = \\int_{u(a)}^{u(b)} f(u) du; \\qquad \\int_a^b u \\, dv = \\left. uv \\right|_a^b - \\int_a^b v \\, du",
          "note": "Đổi biến số BẮT BUỘC phải đổi cận! Tích phân từng phần tuân theo thứ tự ưu tiên đặt $u$: 'Nhất log, nhì đa, tam lượng, tứ mũ'."
        }
      ]
    }
  ],
  "summary": [
    "Tích phân là một số thực, trong khi nguyên hàm là một họ hàm số.",
    "Tích phân từng phần dùng công thức $\\int u dv = uv - \\int v du$.",
    "Đổi biến số thì phải đổi cận tương ứng từ $x$ sang $u$."
  ]
};

export default bai12;
