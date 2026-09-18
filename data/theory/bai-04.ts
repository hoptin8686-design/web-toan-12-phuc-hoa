import type { LessonTheory } from "@/lib/types";

const bai04: LessonTheory = {
  "intro": "Sơ đồ khảo sát sự biến thiên và vẽ đồ thị hàm bậc ba $y = ax^3+bx^2+cx+d$ và hàm phân thức hữu tỉ.",
  "minutes": 15,
  "sections": [
    {
      "id": "khao-sat",
      "emoji": "📊",
      "heading": "1. Sơ đồ khảo sát chuẩn",
      "blocks": [
        {
          "kind": "steps",
          "items": [
            {
              "label": "Bước 1",
              "title": "Tập xác định",
              "text": "Tìm tập xác định $D$ của hàm số."
            },
            {
              "label": "Bước 2",
              "title": "Sự biến thiên",
              "text": "Tính $y'$, tìm cực trị, tính giới hạn và tiệm cận, lập bảng biến thiên hoàn chỉnh."
            },
            {
              "label": "Bước 3",
              "title": "Vẽ đồ thị",
              "text": "Xác định giao điểm với trục toạ độ, tâm đối xứng, vẽ tiệm cận rồi nối các điểm đặc biệt."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Tâm đối xứng của đồ thị",
          "formula": "y = ax^3+bx^2+cx+d \\implies I\\left(-\\frac{b}{3a}; y_I\\right) \\text{ (điểm uốn)}; \\quad y = \\frac{ax+b}{cx+d} \\implies I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)",
          "note": "Đồ thị hàm bậc ba luôn nhận điểm uốn làm tâm đối xứng; hàm phân thức nhận giao điểm 2 tiệm cận làm tâm đối xứng."
        }
      ]
    }
  ],
  "summary": [
    "Hệ số $a > 0$: nhánh ngoài cùng bên phải của đồ thị hướng lên trên.",
    "Hàm bậc ba có 2 cực trị khi phương trình $y' = 0$ có 2 nghiệm phân biệt.",
    "Hàm bậc nhất/bậc nhất không có cực trị, luôn đồng biến hoặc luôn nghịch biến trên từng khoảng xác định."
  ]
};

export default bai04;
