import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-12_01",
      "context": "Cho f(x) liên tục trên đoạn [a; b].",
      "statements": [
        {
          "text": "int_a^a f(x) dx = 0.",
          "answer": true,
          "explain": "Tích phân có hai cận bằng nhau luôn bằng 0."
        },
        {
          "text": "int_a^b f(x) dx = - int_b^a f(x) dx.",
          "answer": true,
          "explain": "Đổi cận thì đổi dấu tích phân."
        },
        {
          "text": "int_a^b k*f(x) dx = k * int_a^b f(x) dx với k là hằng số thực.",
          "answer": true,
          "explain": "Tính chất tuyến tính của tích phân."
        },
        {
          "text": "Tích phân int_a^b f(x) dx phụ thuộc vào biến số x.",
          "answer": false,
          "explain": "Tích phân chỉ phụ thuộc vào hàm f và hai cận a, b chứ không phụ thuộc vào tên biến số: int f(x)dx = int f(t)dt."
        }
      ]
    },
    {
      "id": "tf_bai-12_02",
      "context": "Tính tích phân I = int_0^(pi/2) sin(x) dx.",
      "statements": [
        {
          "text": "Một nguyên hàm của sin(x) là -cos(x).",
          "answer": true,
          "explain": "(-cos(x))' = sin(x)."
        },
        {
          "text": "Áp dụng công thức Newton-Leibniz: I = [-cos(x)]_0^(pi/2).",
          "answer": true,
          "explain": "Công thức cơ bản của tích phân."
        },
        {
          "text": "-cos(pi/2) = 0 và -cos(0) = -1.",
          "answer": true,
          "explain": "cos(pi/2) = 0, cos(0) = 1."
        },
        {
          "text": "Giá trị của tích phân I = 1.",
          "answer": true,
          "explain": "I = 0 - (-1) = 1."
        }
      ]
    },
    {
      "id": "tf_bai-12_03",
      "context": "Xét tích phân I = int_1^e (ln(x)/x) dx bằng phương pháp đổi biến.",
      "statements": [
        {
          "text": "Đặt t = ln(x) => dt = (1/x) dx.",
          "answer": true,
          "explain": "Vi phân của hàm logarit tự nhiên."
        },
        {
          "text": "Đổi cận: khi x = 1 thì t = 0; khi x = e thì t = 1.",
          "answer": true,
          "explain": "ln(1) = 0, ln(e) = 1."
        },
        {
          "text": "Tích phân chuyển thành I = int_0^1 t dt.",
          "answer": true,
          "explain": "Thay biến và cận mới."
        },
        {
          "text": "Giá trị của tích phân I = 1/2.",
          "answer": true,
          "explain": "[t^2 / 2]_0^1 = 1/2 - 0 = 1/2."
        }
      ]
    },
    {
      "id": "tf_bai-12_04",
      "context": "Cho hàm số f(x) chẵn và liên tục trên đoạn [-2; 2]. Biết int_0^2 f(x) dx = 4.",
      "statements": [
        {
          "text": "Đồ thị hàm số f(x) nhận trục tung Oy làm trục đối xứng.",
          "answer": true,
          "explain": "Tính chất hàm số chẵn f(-x) = f(x)."
        },
        {
          "text": "int_{-2}^0 f(x) dx = 4.",
          "answer": true,
          "explain": "Với hàm chẵn, tích phân trên [-a; 0] bằng tích phân trên [0; a]."
        },
        {
          "text": "int_{-2}^2 f(x) dx = 2 * int_0^2 f(x) dx = 8.",
          "answer": true,
          "explain": "int_{-a}^a f(x) dx = 2*int_0^a f(x) dx với hàm chẵn."
        },
        {
          "text": "Nếu f(x) là hàm số lẻ thì int_{-2}^2 f(x) dx = 8.",
          "answer": false,
          "explain": "Với hàm số lẻ thì tích phân trên [-a; a] bằng 0."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-12_01",
      "q": "Tính tích phân int_0^2 (2x + 1) dx.",
      "correctAnswer": "6",
      "explain": "[x^2 + x]_0^2 = (4 + 2) - 0 = 6."
    },
    {
      "id": "sa_bai-12_02",
      "q": "Tính tích phân int_1^3 4x^3 dx.",
      "correctAnswer": "80",
      "explain": "[x^4]_1^3 = 3^4 - 1^4 = 81 - 1 = 80."
    },
    {
      "id": "sa_bai-12_03",
      "q": "Cho int_1^4 f(x) dx = 9. Tính tích phân int_1^4 [2*f(x) - 3] dx.",
      "correctAnswer": "9",
      "explain": "2 * int_1^4 f(x) dx - int_1^4 3 dx = 2*9 - 3*(4 - 1) = 18 - 9 = 9."
    },
    {
      "id": "sa_bai-12_04",
      "q": "Tính tích phân int_0^1 e^(3x) dx (làm tròn 2 chữ số thập phân).",
      "correctAnswer": "6.36",
      "explain": "[(1/3)*e^(3x)]_0^1 = (e^3 - 1)/3 ≈ (20.0855 - 1)/3 ≈ 6.36."
    },
    {
      "id": "sa_bai-12_05",
      "q": "Cho int_0^3 f(x) dx = 5. Tính int_0^1 f(3x) dx.",
      "correctAnswer": "1.67",
      "explain": "Đặt t = 3x => dt = 3dx. Cận từ 0 đến 3. int_0^1 f(3x) dx = (1/3)*int_0^3 f(t) dt = 5/3 ≈ 1.67."
    },
    {
      "id": "sa_bai-12_06",
      "q": "Tính tích phân int_0^1 x * sqrt(x^2 + 1) dx (nhập kết quả làm tròn 2 chữ số thập phân).",
      "correctAnswer": "0.61",
      "explain": "Đặt t = x^2 + 1 => dt = 2x dx. int_1^2 (1/2)*t^(1/2) dt = (1/3)*(2*sqrt(2) - 1) ≈ (2.828 - 1)/3 ≈ 0.61."
    }
  ],
  "essay": [
    {
      "id": "es_bai-12",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-12.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
