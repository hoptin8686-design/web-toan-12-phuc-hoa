import type { LessonTheory } from "@/lib/types";

const bai01: LessonTheory = {
  "intro": "Khảo sát tính đơn điệu và cực trị của hàm số thông qua dấu của đạo hàm bậc nhất $f'(x)$ và đạo hàm bậc hai $f''(x)$.",
  "minutes": 15,
  "sections": [
    {
      "id": "tinh-don-dieu",
      "emoji": "📈",
      "heading": "1. Tính đơn điệu của hàm số",
      "blocks": [
        {
          "kind": "cards",
          "tone": "sea",
          "items": [
            {
              "emoji": "↗️",
              "title": "Hàm số đồng biến (tăng)",
              "text": "Nếu $f'(x) > 0$ với mọi $x \\in (a; b)$ thì hàm số $f(x)$ đồng biến trên khoảng $(a; b)$."
            },
            {
              "emoji": "↘️",
              "title": "Hàm số nghịch biến (giảm)",
              "text": "Nếu $f'(x) < 0$ với mọi $x \\in (a; b)$ thì hàm số $f(x)$ nghịch biến trên khoảng $(a; b)$."
            },
            {
              "emoji": "⏸️",
              "title": "Đạo hàm triệt tiêu hữu hạn điểm",
              "text": "Nếu $f'(x) \\ge 0$ (hoặc $\\le 0$) và $f'(x) = 0$ chỉ tại hữu hạn điểm thì $f(x)$ vẫn đồng biến (hoặc nghịch biến)."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Định lý mở rộng về tính đơn điệu",
          "formula": "f'(x) \\ge 0, \\forall x \\in (a; b) \\text{ và } f'(x) = 0 \\text{ tại hữu hạn điểm} \\implies f(x) \\text{ đồng biến trên } (a; b)",
          "note": "Áp dụng then chốt khi giải các bài toán chứa tham số $m$ để hàm số bậc ba đồng biến trên $\\mathbb{R}$."
        }
      ]
    },
    {
      "id": "cuc-tri",
      "emoji": "⛰️",
      "heading": "2. Cực trị của hàm số",
      "blocks": [
        {
          "kind": "cards",
          "tone": "gold",
          "items": [
            {
              "emoji": "🔺",
              "title": "Điểm cực đại ($x_{CĐ}$)",
              "text": "$f'(x)$ đổi dấu từ DƯƠNG (+) sang ÂM (-) khi $x$ qua $x_0$."
            },
            {
              "emoji": "🔻",
              "title": "Điểm cực tiểu ($x_{CT}$)",
              "text": "$f'(x)$ đổi dấu từ ÂM (-) sang DƯƠNG (+) khi $x$ qua $x_0$."
            },
            {
              "emoji": "📍",
              "title": "Phân biệt thuật ngữ",
              "text": "$x_0$: điểm cực trị hàm số; $f(x_0)$: giá trị cực trị; $(x_0; f(x_0))$: điểm cực trị của đồ thị."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Dấu hiệu II nhận biết cực trị (sử dụng $f''(x)$)",
          "formula": "\\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) < 0 \\end{cases} \\implies x_0 \\text{ là điểm cực đại}; \\qquad \\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) > 0 \\end{cases} \\implies x_0 \\text{ là điểm cực tiểu}",
          "note": "Rất hữu hiệu khi kiểm tra nhanh các hàm lượng giác hoặc hàm đa thức đơn giản."
        },
        {
          "kind": "warn",
          "title": "Bẫy đạo hàm bằng 0 nhưng không đổi dấu",
          "text": "Nếu $f'(x_0) = 0$ nhưng $f'(x)$ không đổi dấu khi qua $x_0$ (nghiệm bội chẵn, ví dụ hàm $y = x^3$ tại $x = 0$) thì $x_0$ KHÔNG phải là điểm cực trị!"
        }
      ]
    }
  ],
  "summary": [
    "Dấu của $f'(x)$ quyết định tính đồng biến (dương) và nghịch biến (âm).",
    "Cực đại: $f'(x)$ đổi từ + sang -; Cực tiểu: $f'(x)$ đổi từ - sang +.",
    "Phân biệt rõ điểm cực trị hàm số $x_0$, giá trị cực trị $y_0$ và toạ độ điểm cực trị đồ thị $(x_0; y_0)$."
  ]
};

export default bai01;
