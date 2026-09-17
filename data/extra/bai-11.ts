import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-11_01",
      "context": "Cho F(x) là một nguyên hàm của hàm số f(x) trên khoảng K.",
      "statements": [
        {
          "text": "Đạo hàm F'(x) = f(x) với mọi x thuộc K.",
          "answer": true,
          "explain": "Định nghĩa chuẩn của nguyên hàm."
        },
        {
          "text": "Nếu F(x) là một nguyên hàm thì F(x) + C (với C là hằng số) cũng là nguyên hàm của f(x).",
          "answer": true,
          "explain": "Họ tất cả các nguyên hàm có dạng F(x) + C."
        },
        {
          "text": "Mọi hàm số liên tục trên K đều có nguyên hàm trên K.",
          "answer": true,
          "explain": "Định lý cơ bản về sự tồn tại nguyên hàm."
        },
        {
          "text": "int [f(x)*g(x)] dx = (int f(x) dx) * (int g(x) dx).",
          "answer": false,
          "explain": "Nguyên hàm của tích KHÔNG BẰNG tích các nguyên hàm."
        }
      ]
    },
    {
      "id": "tf_bai-11_02",
      "context": "Xét các công thức nguyên hàm cơ bản.",
      "statements": [
        {
          "text": "int x^alpha dx = x^(alpha+1)/(alpha+1) + C (với alpha ≠ -1).",
          "answer": true,
          "explain": "Công thức nguyên hàm lũy thừa."
        },
        {
          "text": "int (1/x) dx = ln|x| + C (với x ≠ 0).",
          "answer": true,
          "explain": "Có dấu giá trị tuyệt đối |x|."
        },
        {
          "text": "int sin(x) dx = cos(x) + C.",
          "answer": false,
          "explain": "int sin(x) dx = -cos(x) + C."
        },
        {
          "text": "int cos(x) dx = sin(x) + C.",
          "answer": true,
          "explain": "Đạo hàm của sin(x) là cos(x)."
        }
      ]
    },
    {
      "id": "tf_bai-11_03",
      "context": "Tính nguyên hàm I = int x * e^x dx bằng phương pháp nguyên hàm từng phần.",
      "statements": [
        {
          "text": "Đặt u = x và dv = e^x dx.",
          "answer": true,
          "explain": "Ưu tiên đặt u theo thứ tự: Nhất log, nhì đa, tam lượng, tứ mũ."
        },
        {
          "text": "Khi đó du = dx và v = e^x.",
          "answer": true,
          "explain": "du = x' dx = dx, v = int e^x dx = e^x."
        },
        {
          "text": "Công thức từng phần là int u dv = u*v - int v du.",
          "answer": true,
          "explain": "Công thức chuẩn từng phần."
        },
        {
          "text": "Kết quả nguyên hàm là I = (x - 1)*e^x + C.",
          "answer": true,
          "explain": "I = x*e^x - int e^x dx = x*e^x - e^x + C = (x - 1)*e^x + C."
        }
      ]
    },
    {
      "id": "tf_bai-11_04",
      "context": "Tính nguyên hàm J = int 2x * (x^2 + 1)^3 dx bằng phương pháp đổi biến số.",
      "statements": [
        {
          "text": "Đặt t = x^2 + 1.",
          "answer": true,
          "explain": "Phương pháp đổi biến số thích hợp."
        },
        {
          "text": "Vi phân dt = 2x dx.",
          "answer": true,
          "explain": "dt = (x^2 + 1)' dx = 2x dx."
        },
        {
          "text": "Biểu thức nguyên hàm theo biến t là int t^3 dt.",
          "answer": true,
          "explain": "Thay 2x dx bằng dt, được int t^3 dt."
        },
        {
          "text": "Kết quả cuối cùng là J = (x^2 + 1)^4 / 4 + C.",
          "answer": true,
          "explain": "int t^3 dt = t^4 / 4 + C = (x^2 + 1)^4 / 4 + C."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-11_01",
      "q": "Biết F(x) = ax^3 + bx^2 + c là một nguyên hàm của f(x) = 6x^2 - 4x. Tính a + b.",
      "correctAnswer": "0",
      "explain": "int (6x^2 - 4x) dx = 2x^3 - 2x^2 + C => a = 2, b = -2. a + b = 2 + (-2) = 0."
    },
    {
      "id": "sa_bai-11_02",
      "q": "Tìm hằng số C để nguyên hàm F(x) = x^3 - 2x + C của f(x) = 3x^2 - 2 thoả mãn F(2) = 10.",
      "correctAnswer": "6",
      "explain": "F(2) = 8 - 4 + C = 4 + C = 10 <=> C = 6."
    },
    {
      "id": "sa_bai-11_03",
      "q": "Một nguyên hàm F(x) của f(x) = cos(2x) có dạng (1/k)*sin(2x) + C. Tìm giá trị của k.",
      "correctAnswer": "2",
      "explain": "int cos(2x) dx = (1/2)*sin(2x) + C => k = 2."
    },
    {
      "id": "sa_bai-11_04",
      "q": "Cho F(x) là nguyên hàm của f(x) = 1/(2x + 1) trên (0; +∞). Biết F(x) = a*ln(2x + 1) + C. Tìm giá trị a.",
      "correctAnswer": "0.5",
      "explain": "int 1/(2x + 1) dx = (1/2)*ln(2x + 1) + C => a = 1/2 = 0.5."
    },
    {
      "id": "sa_bai-11_05",
      "q": "Biết int (3x^2 + 2x + 1) dx = x^3 + x^2 + x + C. Hệ số của x^2 trong nguyên hàm bằng bao nhiêu?",
      "correctAnswer": "1",
      "explain": "Nguyên hàm là x^3 + x^2 + x + C, hệ số của x^2 là 1."
    },
    {
      "id": "sa_bai-11_06",
      "q": "Tính F(1) - F(0) biết F(x) là một nguyên hàm bất kỳ của f(x) = 4x^3.",
      "correctAnswer": "1",
      "explain": "F(1) - F(0) = int_0^1 4x^3 dx = [x^4]_0^1 = 1 - 0 = 1."
    }
  ],
  "essay": [
    {
      "id": "es_bai-11",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-11.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
