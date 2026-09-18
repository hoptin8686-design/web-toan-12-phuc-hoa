import type { LessonTheory } from "@/lib/types";

const bai13: LessonTheory = {
  "intro": "Ứng dụng hình học của tích phân: Tính diện tích hình phẳng và thể tích khối tròn xoay.",
  "minutes": 15,
  "sections": [
    {
      "id": "dien-tich",
      "emoji": "📐",
      "heading": "1. Tính diện tích hình phẳng",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số",
          "formula": "S = \\int_a^b |f(x)| dx; \\qquad S = \\int_a^b |f(x) - g(x)| dx",
          "note": "Khi tính diện tích giới hạn bởi 2 đồ thị, các cận $a, b$ là nghiệm của phương trình hoành độ giao điểm $f(x) = g(x)$."
        }
      ]
    },
    {
      "id": "the-tich",
      "emoji": "🏺",
      "heading": "2. Tính thể tích khối tròn xoay",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Thể tích vật thể tròn xoay quanh trục Ox",
          "formula": "V = \\pi \\int_a^b [f(x)]^2 dx; \\qquad V = \\pi \\int_a^b |f^2(x) - g^2(x)| dx",
          "note": "Luôn nhớ có hệ số $\\pi$ phía trước dấu tích phân và biểu thức hàm số phải bình phương!"
        }
      ]
    }
  ],
  "summary": [
    "Diện tích hình phẳng: tích phân trị tuyệt đối $|f(x) - g(x)|$.",
    "Thể tích quay quanh $Ox$: có hệ số $\\pi$ và bình phương hàm số $[f(x)]^2$.",
    "Ứng dụng thực tiễn để tính thể tích thùng chứa, phao cứu sinh, bình gốm sứ."
  ]
};

export default bai13;
