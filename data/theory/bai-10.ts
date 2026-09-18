import type { LessonTheory } from "@/lib/types";

const bai10: LessonTheory = {
  "intro": "Phương sai $s^2$ và Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm — các đại lượng đo mức độ phân tán quanh số trung bình.",
  "minutes": 15,
  "sections": [
    {
      "id": "phuong-sai-do-lech-chuan",
      "emoji": "📉",
      "heading": "1. Công thức Phương sai và Độ lệch chuẩn",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Số trung bình và Phương sai mẫu ghép nhóm",
          "formula": "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k n_i c_i; \\qquad s^2 = \\frac{1}{n} \\sum_{i=1}^k n_i (c_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^k n_i c_i^2 - (\\bar{x})^2",
          "note": "Trong đó $c_i = \\frac{a_{i-1} + a_i}{2}$ là giá trị đại diện của nhóm thứ $i$, $n_i$ là tần số, $n$ là cỡ mẫu."
        },
        {
          "kind": "mathBox",
          "title": "Độ lệch chuẩn",
          "formula": "s = \\sqrt{s^2}",
          "note": "Độ lệch chuẩn có cùng đơn vị đo với dữ liệu ban đầu, phản ánh độ phân tán thực tế quanh số trung bình."
        }
      ]
    }
  ],
  "summary": [
    "Phương sai và độ lệch chuẩn càng nhỏ thì dữ liệu càng tập trung, độ đồng đều càng cao.",
    "Áp dụng hiệu quả để so sánh độ ổn định năng suất cây trồng, thành tích học tập, độ tin cậy của thiết bị máy móc.",
    "Có thể dùng máy tính cầm tay (chế độ Thống kê 1 biến) để tính nhanh $\\bar{x}$ và $s$."
  ]
};

export default bai10;
