import type { LessonTheory } from "@/lib/types";

const bai05: LessonTheory = {
  "intro": "Ứng dụng đạo hàm giải các bài toán thực tế: tối ưu hóa chi phí, doanh thu, lợi nhuận và hình học vật liệu.",
  "minutes": 15,
  "sections": [
    {
      "id": "kinh-te",
      "emoji": "💼",
      "heading": "1. Các đại lượng kinh tế vi mô",
      "blocks": [
        {
          "kind": "cards",
          "tone": "gold",
          "items": [
            {
              "emoji": "🏭",
              "title": "Chi phí biên $C'(x)$",
              "text": "Chi phí để sản xuất thêm 1 đơn vị sản phẩm tiếp theo: $C'(x) \\approx C(x+1) - C(x)$."
            },
            {
              "emoji": "💵",
              "title": "Doanh thu biên $R'(x)$",
              "text": "Doanh thu tăng thêm khi bán thêm 1 đơn vị: $R(x) = x \\cdot p(x)$."
            },
            {
              "emoji": "📈",
              "title": "Lợi nhuận tối đa",
              "text": "Lợi nhuận $P(x) = R(x) - C(x)$. Lợi nhuận cực đại khi $P'(x) = 0 \\iff R'(x) = C'(x)$."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Nguyên lý tối ưu hóa kinh tế",
          "formula": "P'(x) = 0 \\iff R'(x) = C'(x) \\quad (\\text{Doanh thu biên bằng Chi phí biên})",
          "note": "Điểm sản xuất tối ưu mang lại lợi nhuận cao nhất cho doanh nghiệp."
        }
      ]
    }
  ],
  "summary": [
    "Đưa bài toán thực tế về bài toán tìm Max/Min của hàm 1 biến $f(x)$ trên khoảng $(0; +\\infty)$.",
    "Lợi nhuận cực đại khi Doanh thu biên bằng Chi phí biên.",
    "Luôn chú ý điều kiện biên tự nhiên của biến số (chiều dài $x > 0$, số sản phẩm nguyên dương)."
  ]
};

export default bai05;
