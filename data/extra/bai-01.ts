import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-01_01",
      "context": "Cho hàm số y = f(x) = x^3 - 3x^2 + 2.",
      "statements": [
        {
          "text": "Đạo hàm của hàm số là f'(x) = 3x^2 - 6x.",
          "answer": true,
          "explain": "f'(x) = 3x^2 - 6x."
        },
        {
          "text": "Hàm số đồng biến trên khoảng (0; 2).",
          "answer": false,
          "explain": "Trên (0; 2) f'(x) < 0 nên hàm số nghịch biến."
        },
        {
          "text": "Điểm cực đại của đồ thị hàm số là (0; 2).",
          "answer": true,
          "explain": "x = 0 => y = 2, f'(x) đổi dấu từ + sang - nên (0; 2) là điểm cực đại."
        },
        {
          "text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng 2*sqrt(5).",
          "answer": true,
          "explain": "Hai điểm cực trị là A(0; 2) và B(2; -2). AB = sqrt(2^2 + (-4)^2) = sqrt(20) = 2*sqrt(5)."
        }
      ]
    },
    {
      "id": "tf_bai-01_02",
      "context": "Cho hàm số phân thức y = (2x - 1)/(x + 1).",
      "statements": [
        {
          "text": "Tập xác định của hàm số là D = R \\ {-1}.",
          "answer": true,
          "explain": "Mẫu số x + 1 khác 0 <=> x khác -1."
        },
        {
          "text": "Đạo hàm y' = 3/(x + 1)^2 với mọi x thuộc D.",
          "answer": true,
          "explain": "y' = (2*1 - (-1)*1)/(x+1)^2 = 3/(x+1)^2 > 0."
        },
        {
          "text": "Hàm số đồng biến trên R \\ {-1}.",
          "answer": false,
          "explain": "Không được kết luận đồng biến trên R \\ {-1}, phải kết luận đồng biến trên từng khoảng (-∞; -1) và (-1; +∞)."
        },
        {
          "text": "Đồ thị hàm số không có điểm cực trị nào.",
          "answer": true,
          "explain": "Hàm bậc nhất/bậc nhất y' luôn cùng dấu trên từng khoảng xác định nên không có cực trị."
        }
      ]
    },
    {
      "id": "tf_bai-01_03",
      "context": "Xét tính đơn điệu và cực trị của hàm số y = x^4 - 2x^2 - 3.",
      "statements": [
        {
          "text": "Hàm số có 3 điểm cực trị.",
          "answer": true,
          "explain": "y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 có 3 nghiệm phân biệt x = 0, x = ±1."
        },
        {
          "text": "Hàm số đồng biến trên các khoảng (-1; 0) và (1; +∞).",
          "answer": true,
          "explain": "Lập bảng xét dấu y' ta thấy y' > 0 trên (-1; 0) và (1; +∞)."
        },
        {
          "text": "Giá trị cực đại của hàm số là y_CĐ = 0.",
          "answer": false,
          "explain": "Tại x = 0, y(0) = -3. Do đó y_CĐ = -3."
        },
        {
          "text": "Đồ thị hàm số nhận trục tung Oy làm trục đối xứng.",
          "answer": true,
          "explain": "Hàm số đã cho là hàm số chẵn f(-x) = f(x)."
        }
      ]
    },
    {
      "id": "tf_bai-01_04",
      "context": "Cho hàm số y = f(x) liên tục trên R và có đạo hàm f'(x) = (x - 1)^2(x + 2)(x - 3).",
      "statements": [
        {
          "text": "Hàm số có 3 điểm cực trị.",
          "answer": false,
          "explain": "Nghiệm x = 1 là nghiệm bội chẵn nên đạo hàm không đổi dấu, hàm số chỉ có 2 điểm cực trị tại x = -2 và x = 3."
        },
        {
          "text": "Hàm số nghịch biến trên khoảng (-2; 3).",
          "answer": true,
          "explain": "Với x thuộc (-2; 3) \\ {1}, (x-1)^2 > 0, x+2 > 0, x-3 < 0 nên f'(x) < 0."
        },
        {
          "text": "Hàm số đạt cực tiểu tại x = 3.",
          "answer": true,
          "explain": "f'(x) đổi dấu từ âm sang dương khi qua x = 3 nên x = 3 là điểm cực tiểu."
        },
        {
          "text": "Hàm số đạt cực đại tại x = 1.",
          "answer": false,
          "explain": "x = 1 không phải là điểm cực trị."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-01_01",
      "q": "Tìm số điểm cực trị của hàm số y = 2x^3 - 9x^2 + 12x - 4.",
      "correctAnswer": "2",
      "explain": "y' = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 0 <=> x = 1 hoặc x = 2. Hai nghiệm đơn nên hàm số có đúng 2 điểm cực trị."
    },
    {
      "id": "sa_bai-01_02",
      "q": "Tìm giá trị cực đại của hàm số y = -x^3 + 3x + 2.",
      "correctAnswer": "4",
      "explain": "y' = -3x^2 + 3 = 0 <=> x = 1 hoặc x = -1. Tại x = 1 hàm số đạt cực đại, y(1) = -1 + 3 + 2 = 4."
    },
    {
      "id": "sa_bai-01_03",
      "q": "Cho hàm số y = x^3 - 3x^2 + mx + 1. Tìm giá trị của m để hàm số đạt cực trị tại x = 1.",
      "correctAnswer": "3",
      "explain": "y' = 3x^2 - 6x + m. Hàm số đạt cực trị tại x = 1 thì y'(1) = 0 <=> 3 - 6 + m = 0 <=> m = 3."
    },
    {
      "id": "sa_bai-01_04",
      "q": "Hàm số y = (x - 2)/(x + 1) có bao nhiêu điểm cực trị?",
      "correctAnswer": "0",
      "explain": "Đạo hàm y' = 3/(x + 1)^2 > 0 với mọi x ≠ -1. Hàm số không có điểm cực trị nào."
    },
    {
      "id": "sa_bai-01_05",
      "q": "Tính khoảng cách giữa hai điểm cực trị của đồ thị hàm số y = x^3 - 3x.",
      "correctAnswer": "4.47",
      "explain": "Hai điểm cực trị là A(-1; 2) và B(1; -2). Độ dài đoạn thẳng AB = sqrt((1 - (-1))^2 + (-2 - 2)^2) = sqrt(4 + 16) = sqrt(20) ≈ 4.47 (hoặc 2*sqrt(5))."
    },
    {
      "id": "sa_bai-01_06",
      "q": "Hàm số f(x) có đạo hàm f'(x) = x(x - 2)^3(x + 1)^2. Hỏi f(x) có bao nhiêu điểm cực trị?",
      "correctAnswer": "2",
      "explain": "x = -1 là nghiệm bội 2 (chẵn) nên không đổi dấu. x = 0 (bội 1) và x = 2 (bội 3, lẻ) làm đổi dấu đạo hàm nên hàm số có 2 điểm cực trị."
    }
  ],
  "essay": [
    {
      "id": "es_bai-01",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-01.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
