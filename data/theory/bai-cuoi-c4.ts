import type { LessonTheory } from "@/lib/types";

const baicuoic4: LessonTheory = {
  "intro": "Ôn tập tổng kết Chương IV: Nguyên hàm, Tích phân, Ứng dụng tính diện tích hình phẳng, thể tích khối tròn xoay và chuyển động.",
  "minutes": 20,
  "sections": [
    {
      "id": "tong-ket-c4",
      "emoji": "🌟",
      "heading": "1. Hệ thống công thức Chương IV",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Bộ ba công thức giải tích tích phân",
          "formula": "\\int_a^b f(x)dx = F(b) - F(a); \\quad S = \\int_a^b |f(x) - g(x)|dx; \\quad V = \\pi \\int_a^b [f(x)]^2 dx",
          "note": "Bài toán vận tốc - quãng đường: $s(t) = \\int v(t)dt$ và $v(t) = \\int a(t)dt$."
        }
      ]
    }
  ],
  "summary": [
    "Nắm vững 2 kỹ thuật then chốt: Đổi biến số và Tích phân từng phần.",
    "Vận dụng tính diện tích và thể tích hình học vào các bài toán thực tiễn 2025."
  ]
};

export default baicuoic4;
