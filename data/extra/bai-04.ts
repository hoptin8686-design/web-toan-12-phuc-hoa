import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-04_01",
      "context": "Cho đồ thị hàm số y = ax^3 + bx^2 + cx + d có nhánh cuối đi lên, cắt trục tung tại điểm có tung độ âm và có 2 điểm cực trị nằm về hai phía trục tung.",
      "statements": [
        {
          "text": "Hệ số a > 0 vì nhánh bên phải cùng đi lên.",
          "answer": true,
          "explain": "lim khi x -> +∞ bằng +∞ nên a > 0."
        },
        {
          "text": "Hệ số d < 0 vì đồ thị cắt Oy tại điểm có tung độ âm.",
          "answer": true,
          "explain": "f(0) = d < 0."
        },
        {
          "text": "Đạo hàm y' = 3ax^2 + 2bx + c = 0 có hai nghiệm trái dấu khi và chỉ khi a*c < 0.",
          "answer": true,
          "explain": "x1 * x2 = c / (3a) < 0 <=> ac < 0."
        },
        {
          "text": "Vì a > 0 và ac < 0 nên suy ra c > 0.",
          "answer": false,
          "explain": "a > 0 và ac < 0 suy ra c < 0."
        }
      ]
    },
    {
      "id": "tf_bai-04_02",
      "context": "Cho hàm số y = (ax + b)/(cx + d) có đồ thị (C) với tiệm cận đứng x = 1, tiệm cận ngang y = 2 và đi qua điểm M(0; -1).",
      "statements": [
        {
          "text": "Tiệm cận đứng x = 1 suy ra -d/c = 1 <=> d = -c.",
          "answer": true,
          "explain": "Mẫu số cx + d = 0 <=> x = -d/c = 1."
        },
        {
          "text": "Tiệm cận ngang y = 2 suy ra a/c = 2 <=> a = 2c.",
          "answer": true,
          "explain": "lim khi x -> ∞ bằng a/c = 2."
        },
        {
          "text": "Đồ thị đi qua M(0; -1) suy ra b/d = -1 <=> b = -d.",
          "answer": true,
          "explain": "f(0) = b/d = -1."
        },
        {
          "text": "Nếu chọn c = 1 thì hàm số có dạng y = (2x + 1)/(x - 1).",
          "answer": true,
          "explain": "c = 1 => d = -1 => b = 1, a = 2 => y = (2x + 1)/(x - 1)."
        }
      ]
    },
    {
      "id": "tf_bai-04_03",
      "context": "Cho hàm số y = -x^3 + 3x^2 - 4.",
      "statements": [
        {
          "text": "Bảng biến thiên có hai điểm cực trị là x = 0 và x = 2.",
          "answer": true,
          "explain": "y' = -3x^2 + 6x = 0 <=> x = 0 hoặc x = 2."
        },
        {
          "text": "Giá trị cực tiểu y_CT = -4 đạt tại x = 0.",
          "answer": true,
          "explain": "y(0) = -4, tại đây y' đổi dấu từ - sang +."
        },
        {
          "text": "Giá trị cực đại y_CD = 0 đạt tại x = 2.",
          "answer": true,
          "explain": "y(2) = -8 + 12 - 4 = 0."
        },
        {
          "text": "Phương trình -x^3 + 3x^2 - 4 = m có đúng 3 nghiệm phân biệt khi m thuộc (-4; 0).",
          "answer": true,
          "explain": "Số nghiệm là số giao điểm với đường nằm ngang y = m. Có 3 nghiệm khi y_CT < m < y_CD <=> -4 < m < 0."
        }
      ]
    },
    {
      "id": "tf_bai-04_04",
      "context": "Xét sự tương giao giữa đường thẳng d: y = 2x + m và đồ thị (C): y = (x + 1)/(x - 1).",
      "statements": [
        {
          "text": "Phương trình hoành độ giao điểm là 2x^2 + (m - 3)x - m - 1 = 0 (với x ≠ 1).",
          "answer": true,
          "explain": "(x + 1)/(x - 1) = 2x + m <=> x + 1 = (2x + m)(x - 1) <=> 2x^2 + (m - 3)x - m - 1 = 0."
        },
        {
          "text": "Đường thẳng d luôn cắt (C) tại 2 điểm phân biệt với mọi m.",
          "answer": true,
          "explain": "Delta = (m - 3)^2 - 4*2*(-m - 1) = m^2 - 6m + 9 + 8m + 8 = m^2 + 2m + 17 = (m + 1)^2 + 16 > 0 với mọi m."
        },
        {
          "text": "Nghiệm của phương trình hoành độ giao điểm luôn khác 1 với mọi m.",
          "answer": true,
          "explain": "Thay x = 1: 2(1)^2 + (m - 3)(1) - m - 1 = 2 + m - 3 - m - 1 = -2 khác 0 với mọi m."
        },
        {
          "text": "Khi m = 0, toạ độ giao điểm có hoành độ âm.",
          "answer": false,
          "explain": "Khi m = 0, pt là 2x^2 - 3x - 1 = 0 có ac = -2 < 0 nên có 1 nghiệm dương và 1 nghiệm âm."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-04_01",
      "q": "Tìm hoành độ tâm đối xứng của đồ thị hàm số y = 2x^3 - 6x^2 + 1.",
      "correctAnswer": "1",
      "explain": "y' = 6x^2 - 12x, y'' = 12x - 12 = 0 <=> x = 1. Hoành độ tâm đối xứng là 1."
    },
    {
      "id": "sa_bai-04_02",
      "q": "Cho đồ thị hàm số y = x^3 - 3x + 2. Đường thẳng y = m cắt đồ thị tại 3 điểm phân biệt khi m thuộc khoảng (a; b). Tính b - a.",
      "correctAnswer": "4",
      "explain": "y' = 3x^2 - 3 = 0 <=> x = ±1. y(-1) = 4, y(1) = 0. Có 3 nghiệm khi 0 < m < 4 => a = 0, b = 4 => b - a = 4."
    },
    {
      "id": "sa_bai-04_03",
      "q": "Đồ thị hàm số y = (x - 2)/(x + 1) cắt trục hoành tại điểm có hoành độ bằng bao nhiêu?",
      "correctAnswer": "2",
      "explain": "Cho y = 0 <=> x - 2 = 0 <=> x = 2."
    },
    {
      "id": "sa_bai-04_04",
      "q": "Đồ thị hàm số y = x^4 - 4x^2 + 3 cắt trục hoành tại bao nhiêu điểm phân biệt?",
      "correctAnswer": "4",
      "explain": "Đặt t = x^2 >= 0: t^2 - 4t + 3 = 0 <=> t = 1 hoặc t = 3. Với t = 1 => x = ±1; t = 3 => x = ±sqrt(3). Có 4 giao điểm."
    },
    {
      "id": "sa_bai-04_05",
      "q": "Tìm số tiếp tuyến của đồ thị hàm số y = x^3 - 3x^2 song song với đường thẳng y = 9x + 2.",
      "correctAnswer": "2",
      "explain": "y' = 3x^2 - 6x = 9 <=> x^2 - 2x - 3 = 0 <=> x = 3 hoặc x = -1. Hai tiếp điểm phân biệt có tiếp tuyến không trùng với d nên có 2 tiếp tuyến."
    },
    {
      "id": "sa_bai-04_06",
      "q": "Cho hàm số y = (2x - 1)/(x + 2) có đồ thị (C). Tính tổng toạ độ x_0 + y_0 của tâm đối xứng của (C).",
      "correctAnswer": "0",
      "explain": "Tâm đối xứng là I(-2; 2). Tổng toạ độ = -2 + 2 = 0."
    }
  ],
  "essay": [
    {
      "id": "es_bai-04",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-04.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
