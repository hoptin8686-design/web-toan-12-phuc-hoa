import type { LessonTheory } from "@/lib/types";

const bai16: LessonTheory = {
  "intro": "Công thức tính khoảng cách từ điểm đến mặt phẳng và công thức tính góc giữa hai đường thẳng, đường thẳng với mặt phẳng, hai mặt phẳng.",
  "minutes": 15,
  "sections": [
    {
      "id": "khoang-cach-goc",
      "emoji": "📐",
      "heading": "1. Khoảng cách và Góc trong không gian Oxyz",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax+By+Cz+D=0$",
          "formula": "d(M_0, (\\alpha)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}",
          "note": "Công thức khoảng cách luôn có dấu giá trị tuyệt đối ở tử số và căn bậc hai ở mẫu số."
        },
        {
          "kind": "mathBox",
          "title": "Công thức tính các góc trong không gian",
          "formula": "\\cos(d_1, d_2) = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|}; \\quad \\cos((\\alpha), (\\beta)) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|}; \\quad \\sin(d, (\\alpha)) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}",
          "note": "Đặc biệt chú ý: Góc giữa ĐƯỜNG THẲNG và MẶT PHẲNG dùng hàm SIN, trong khi hai góc còn lại dùng hàm COS!"
        }
      ]
    }
  ],
  "summary": [
    "Góc trong không gian luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$ nên cos và sin luôn không âm (có trị tuyệt đối ở tử).",
    "Đường thẳng và mặt phẳng: dùng $\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$.",
    "Khoảng cách từ điểm đến mặt phẳng là công cụ nền tảng để viết phương trình mặt cầu tiếp xúc."
  ]
};

export default bai16;
