import type { LessonTheory } from "@/lib/types";

const bai18: LessonTheory = {
  "intro": "Khái niệm xác suất có điều kiện $P(A|B)$, quy tắc nhân xác suất và điều kiện độc lập của hai biến cố.",
  "minutes": 15,
  "sections": [
    {
      "id": "xac-suat-co-dieu-kien",
      "emoji": "🎲",
      "heading": "1. Xác suất có điều kiện và Quy tắc nhân",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Định nghĩa Xác suất có điều kiện và Quy tắc nhân",
          "formula": "P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0) \\implies P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)",
          "note": "$P(A|B)$ là xác suất xảy ra biến cố $A$ khi biết biến cố $B$ đã xảy ra."
        },
        {
          "kind": "cards",
          "tone": "sea",
          "items": [
            {
              "emoji": "🤝",
              "title": "Hai biến cố độc lập",
              "text": "Hai biến cố $A$ và $B$ độc lập khi và chỉ khi: $P(A \\cap B) = P(A) \\cdot P(B)$."
            },
            {
              "emoji": "💡",
              "title": "Tính chất độc lập",
              "text": "Khi $A, B$ độc lập thì việc $B$ xảy ra không ảnh hưởng đến xác suất của $A$: $P(A|B) = P(A)$."
            }
          ]
        }
      ]
    }
  ],
  "summary": [
    "Xác suất có điều kiện thu hẹp không gian mẫu ban đầu $\\Omega$ về không gian biến cố điều kiện $B$.",
    "Quy tắc nhân xác suất áp dụng cho các phép thử liên tiếp hoặc phụ thuộc nhau.",
    "Hai biến cố độc lập thì xác suất tích bằng tích các xác suất."
  ]
};

export default bai18;
