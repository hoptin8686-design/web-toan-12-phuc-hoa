import type { LessonTheory } from "@/lib/types";

const baicuoic1: LessonTheory = {
  "intro": "Hệ thống hóa toàn bộ kiến thức Ứng dụng đạo hàm: Đơn điệu, Cực trị, Max/Min, Tiệm cận và Khảo sát hàm số.",
  "minutes": 20,
  "sections": [
    {
      "id": "tong-hop",
      "emoji": "🌟",
      "heading": "1. Tổng kết kiến thức Chương I",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Bộ công thức giải tích then chốt",
          "formula": "f'(x) \\ge 0 \\iff \\text{Đồng biến}; \\quad \\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) < 0 \\end{cases} \\implies \\text{Cực đại}; \\quad y = ax+b \\text{ (Tiệm cận xiên)}",
          "note": "Nắm vững kỹ năng đọc đồ thị và bảng biến thiên để làm tốt phần trắc nghiệm Đúng/Sai."
        }
      ]
    }
  ],
  "summary": [
    "Thành thạo khảo sát 3 dạng hàm: bậc ba, phân thức bậc 1/bậc 1, phân thức bậc 2/bậc 1.",
    "Vận dụng tốt quy tắc tìm GTLN, GTNN và giải bài toán thực tế tối ưu hóa."
  ]
};

export default baicuoic1;
