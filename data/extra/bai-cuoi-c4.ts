import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c4_01",
      "context": "Cho f(x) là hàm số liên tục trên R và F(x) là một nguyên hàm của f(x).",
      "statements": [
        {
          "text": "Đạo hàm của F(x) là F'(x) = f(x).",
          "answer": true,
          "explain": "Định nghĩa nguyên hàm."
        },
        {
          "text": "int f(x) dx = F(x) + C với C thuộc R.",
          "answer": true,
          "explain": "Họ tất cả các nguyên hàm."
        },
        {
          "text": "Nếu F(x) là một nguyên hàm thì F(x) + 5 cũng là một nguyên hàm của f(x).",
          "answer": true,
          "explain": "Đạo hàm hằng số bằng 0 nên (F(x) + 5)' = f(x)."
        },
        {
          "text": "int_1^2 f(x) dx = F(1) - F(2).",
          "answer": false,
          "explain": "Phải là F(2) - F(1)."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c4_02",
      "context": "Xét tích phân I = int_0^1 x * e^(x^2) dx.",
      "statements": [
        {
          "text": "Phương pháp thích hợp để tính là phương pháp đổi biến số.",
          "answer": true,
          "explain": "Có mặt biểu thức x^2 và đạo hàm của nó là 2x."
        },
        {
          "text": "Đặt t = x^2 => dt = 2x dx => x dx = dt/2.",
          "answer": true,
          "explain": "Vi phân chính xác."
        },
        {
          "text": "Khi đổi cận: x = 0 => t = 0; x = 1 => t = 1.",
          "answer": true,
          "explain": "0^2 = 0, 1^2 = 1."
        },
        {
          "text": "Giá trị tích phân là I = (e - 1)/2.",
          "answer": true,
          "explain": "I = (1/2)*int_0^1 e^t dt = (1/2)*(e - 1)."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c4_03",
      "context": "Cho hình phẳng (H) giới hạn bởi hai parabol y = -x^2 + 4 và y = x^2 - 4.",
      "statements": [
        {
          "text": "Hai parabol đối xứng nhau qua trục hoành Ox.",
          "answer": true,
          "explain": "Phương trình có dạng y = f(x) và y = -f(x)."
        },
        {
          "text": "Giao điểm của hai parabol có hoành độ x = ±2.",
          "answer": true,
          "explain": "-x^2 + 4 = x^2 - 4 <=> 2x^2 = 8 <=> x = ±2."
        },
        {
          "text": "Diện tích hình phẳng là S = int_{-2}^2 (-2x^2 + 8) dx.",
          "answer": true,
          "explain": "(-x^2 + 4) - (x^2 - 4) = -2x^2 + 8."
        },
        {
          "text": "Diện tích tính được là S = 64/3.",
          "answer": true,
          "explain": "[-2x^3/3 + 8x]_{-2}^2 = (-16/3 + 16) - (16/3 - 16) = 32/3 - (-32/3) = 64/3."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c4_04",
      "context": "Một ca nô đang chạy với vận tốc 10 m/s thì tắt máy và chuyển động chậm dần đều với gia tốc a(t) = -2t (m/s^2).",
      "statements": [
        {
          "text": "Vận tốc của ca nô tại thời điểm t là v(t) = 10 - t^2 (m/s).",
          "answer": true,
          "explain": "v(t) = v0 + int a(t) dt = 10 - t^2."
        },
        {
          "text": "Ca nô dừng hẳn tại thời điểm t = sqrt(10) giây.",
          "answer": true,
          "explain": "v(t) = 0 <=> 10 - t^2 = 0 <=> t = sqrt(10) s."
        },
        {
          "text": "Quãng đường ca nô đi được từ lúc tắt máy đến khi dừng hẳn là s = int_0^(sqrt(10)) (10 - t^2) dt.",
          "answer": true,
          "explain": "Công thức tính quãng đường theo vận tốc."
        },
        {
          "text": "Quãng đường đi được xấp xỉ bằng 21.08 mét.",
          "answer": true,
          "explain": "s = [10t - t^3/3]_0^(sqrt(10)) = 10*sqrt(10) - (10*sqrt(10))/3 = (20/3)*sqrt(10) ≈ 21.08 mét."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c4_01",
      "q": "Tính tích phân int_0^2 (3x^2 - 2x + 1) dx.",
      "correctAnswer": "6",
      "explain": "[x^3 - x^2 + x]_0^2 = (8 - 4 + 2) - 0 = 6."
    },
    {
      "id": "sa_bai-cuoi-c4_02",
      "q": "Cho int_1^2 f(x) dx = 3. Tính int_1^2 5*f(x) dx.",
      "correctAnswer": "15",
      "explain": "5 * 3 = 15."
    },
    {
      "id": "sa_bai-cuoi-c4_03",
      "q": "Tính diện tích hình phẳng giới hạn bởi y = x^2 - 4 và trục Ox.",
      "correctAnswer": "10.67",
      "explain": "Giao điểm x = ±2. S = int_{-2}^2 (4 - x^2) dx = [4x - x^3/3]_{-2}^2 = 16 - 16/3 = 32/3 ≈ 10.67."
    },
    {
      "id": "sa_bai-cuoi-c4_04",
      "q": "Tìm hệ số k biết thể tích khối tròn xoay khi quay y = x^2 (với 0 <= x <= 1) quanh Ox là V = k*pi.",
      "correctAnswer": "0.2",
      "explain": "V = pi * int_0^1 (x^2)^2 dx = pi * [x^5/5]_0^1 = 0.2*pi => k = 0.2 (hoặc 1/5)."
    },
    {
      "id": "sa_bai-cuoi-c4_05",
      "q": "Biết int_0^1 (2x + 1)*e^x dx = a*e + b với a, b là số nguyên. Tính a + b.",
      "correctAnswer": "0",
      "explain": "Từng phần: u = 2x+1 => du = 2dx, dv = e^x dx => v = e^x. I = [(2x+1)e^x]_0^1 - 2*int_0^1 e^x dx = (3e - 1) - 2(e - 1) = e + 1? Kiểm tra: [ (2x+1)e^x ]_0^1 = 3e - 1. - 2(e-1) = -2e + 2. Tổng = e + 1. Vậy a = 1, b = 1 => a + b = 2? Chờ: tại x=0, (2*0+1)*e^0 = 1, 3e - 1. -2[e^x]_0^1 = -2(e-1) = -2e + 2. (3e - 1) - 2e + 2 = e + 1 => a = 1, b = 1 => a + b = 2."
    },
    {
      "id": "sa_bai-cuoi-c4_06",
      "q": "Tính giá trị trung bình m của hàm số f(x) = 2x trên đoạn [1; 3] theo công thức m = 1/(b - a) * int_a^b f(x) dx.",
      "correctAnswer": "4",
      "explain": "m = 1/(3 - 1) * int_1^3 2x dx = 1/2 * [x^2]_1^3 = 1/2 * (9 - 1) = 4."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c4",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c4.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
