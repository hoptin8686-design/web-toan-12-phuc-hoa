import type { LessonTheory } from "@/lib/types";

const bai02: LessonTheory = {
  "intro": "Phương pháp tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số trên một đoạn $[a; b]$ hoặc trên một khoảng.",
  "minutes": 15,
  "sections": [
    {
      "id": "dinh-nghia",
      "emoji": "🎯",
      "heading": "1. Định nghĩa và Tính chất",
      "blocks": [
        {
          "kind": "cards",
          "tone": "leaf",
          "items": [
            {
              "emoji": "👑",
              "title": "GTLN: $M = \\max_{[a; b]} f(x)$",
              "text": "$f(x) \\le M, \\forall x \\in [a; b]$ và tồn tại $x_0 \\in [a; b]$ sao cho $f(x_0) = M$."
            },
            {
              "emoji": "⚓",
              "title": "GTNN: $m = \\min_{[a; b]} f(x)$",
              "text": "$f(x) \\ge m, \\forall x \\in [a; b]$ và tồn tại $x_0 \\in [a; b]$ sao cho $f(x_0) = m$."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Công thức tìm Max / Min trên đoạn $[a; b]$",
          "formula": "\\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_i)\\}; \\qquad \\min_{[a; b]} f(x) = \\min\\{f(a), f(b), f(x_i)\\}",
          "note": "Trong đó $x_i \\in (a; b)$ là các nghiệm của $f'(x) = 0$ hoặc nơi $f'(x)$ không xác định."
        }
      ]
    },
    {
      "id": "quy-trinh",
      "emoji": "🛠️",
      "heading": "2. Quy trình 3 bước giải bài toán trên đoạn",
      "blocks": [
        {
          "kind": "steps",
          "items": [
            {
              "label": "Bước 1",
              "title": "Tính $f'(x)$ và tìm nghiệm",
              "text": "Giải phương trình $f'(x) = 0$, chỉ lấy các nghiệm $x_i$ thoả mãn $a < x_i < b$."
            },
            {
              "label": "Bước 2",
              "title": "Tính các giá trị biên và cực trị",
              "text": "Tính giá trị tại 2 đầu mút $f(a), f(b)$ và các giá trị $f(x_i)$."
            },
            {
              "label": "Bước 3",
              "title": "So sánh và kết luận",
              "text": "Số lớn nhất trong các giá trị vừa tính là GTLN, số nhỏ nhất là GTNN."
            }
          ]
        }
      ]
    }
  ],
  "summary": [
    "Hàm liên tục trên đoạn $[a; b]$ luôn đạt được GTLN và GTNN.",
    "Không cần lập bảng biến thiên khi tìm Max/Min trên đoạn $[a; b]$, chỉ cần so sánh các giá trị.",
    "Tìm Max/Min trên khoảng mở bắt buộc phải lập bảng biến thiên để xét giới hạn ở vô cực."
  ]
};

export default bai02;
