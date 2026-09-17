import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-01_01",
    "q": "Cho hàm số f(x) có f'(x) = x(x-1)^2(x+2). Số điểm cực trị của hàm số là:",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answer": 0,
    "explain": "Nghiệm bội lẻ x = 0 và x = -2 đổi dấu đạo hàm nên có 2 điểm cực trị."
  },
  {
    "id": "q_bai-01_02",
    "q": "Hàm số y = -x^3 + 3x^2 - 1 nghịch biến trên khoảng nào sau đây?",
    "options": [
      "(-∞; 0) và (2; +∞)",
      "(0; 2)",
      "(-∞; 2)",
      "(0; +∞)"
    ],
    "answer": 0,
    "explain": "y' = -3x(x - 2) < 0 khi x < 0 hoặc x > 2."
  },
  {
    "id": "q_bai-01_03",
    "q": "Điểm cực tiểu của đồ thị hàm số y = x^3 - 3x^2 + 2 là:",
    "options": [
      "(2; -2)",
      "(0; 2)",
      "(2; 0)",
      "(-1; -2)"
    ],
    "answer": 0,
    "explain": "y' = 3x^2 - 6x = 0 <=> x = 2 (cực tiểu), y(2) = -2 => (2; -2)."
  },
  {
    "id": "q_bai-01_04",
    "q": "Hàm số y = (2x + 1)/(x - 1) có tính chất:",
    "options": [
      "Nghịch biến trên từng khoảng xác định",
      "Đồng biến trên R \\ {1}",
      "Đồng biến trên (-∞; 1)",
      "Nghịch biến trên R"
    ],
    "answer": 0,
    "explain": "y' = -3/(x - 1)^2 < 0 với mọi x ≠ 1."
  },
  {
    "id": "q_bai-01_05",
    "q": "Cho f(x) đồng biến trên (a; b). Với x1 < x2 thuộc (a; b) thì:",
    "options": [
      "f(x1) < f(x2)",
      "f(x1) > f(x2)",
      "f(x1) = f(x2)",
      "f(x1) >= f(x2)"
    ],
    "answer": 0,
    "explain": "Định nghĩa hàm đồng biến: x tăng thì f(x) tăng."
  },
  {
    "id": "q_bai-01_06",
    "q": "Đồ thị hàm số y = x^4 - 2x^2 + 1 có bao nhiêu điểm cực trị?",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "answer": 0,
    "explain": "a = 1 > 0, b = -2 < 0 => ab < 0 có 3 điểm cực trị."
  },
  {
    "id": "q_bai-01_07",
    "q": "Hàm số y = x^3 - 3x có giá trị cực đại bằng:",
    "options": [
      "2",
      "-2",
      "0",
      "1"
    ],
    "answer": 0,
    "explain": "y' = 3x^2 - 3 = 0 <=> x = -1 (cực đại), y(-1) = 2."
  },
  {
    "id": "q_bai-01_08",
    "q": "Điểm uốn của đồ thị hàm số y = x^3 - 3x^2 + 4 là:",
    "options": [
      "(1; 2)",
      "(0; 4)",
      "(2; 0)",
      "(1; 0)"
    ],
    "answer": 0,
    "explain": "y'' = 6x - 6 = 0 <=> x = 1, y(1) = 2 => (1; 2)."
  },
  {
    "id": "q_bai-01_09",
    "q": "Hàm số nào sau đây không có cực trị?",
    "options": [
      "y = (x - 2)/(x + 1)",
      "y = x^3 - 3x",
      "y = x^4 + 1",
      "y = -x^3 + 3x"
    ],
    "answer": 0,
    "explain": "Hàm phân thức bậc 1/bậc 1 không bao giờ có cực trị."
  },
  {
    "id": "q_bai-01_10",
    "q": "Hàm số y = x + 1/x nghịch biến trên khoảng nào?",
    "options": [
      "(0; 1) và (-1; 0)",
      "(1; +∞)",
      "(-∞; -1)",
      "(0; +∞)"
    ],
    "answer": 0,
    "explain": "y' = (x^2 - 1)/x^2 < 0 <=> -1 < x < 1 (x ≠ 0)."
  },
  {
    "id": "q_bai-01_11",
    "q": "Tìm tất cả các giá trị thực của tham số m để hàm số y = x^3 - 3mx^2 + 3(2m - 1)x + 1 đồng biến trên R.",
    "options": [
      "m = 1",
      "m > 1",
      "m < 1",
      "m <= 1"
    ],
    "answer": 0,
    "explain": "y' = 3x^2 - 6mx + 3(2m - 1) >= 0 với mọi x <=> Delta' = 9m^2 - 9(2m - 1) = 9(m - 1)^2 <= 0 <=> m = 1."
  },
  {
    "id": "q_bai-01_12",
    "q": "Cho hàm số f(x) có bảng biến thiên với f'(x) đổi dấu từ dương sang âm khi qua x = -1 và đổi dấu từ âm sang dương khi qua x = 2. Khẳng định nào đúng?",
    "options": [
      "Hàm số đạt cực đại tại x = -1 và đạt cực tiểu tại x = 2",
      "Hàm số đạt cực tiểu tại x = -1 và đạt cực đại tại x = 2",
      "Hàm số đồng biến trên khoảng (-1; 2)",
      "Hàm số nghịch biến trên khoảng (2; +∞)"
    ],
    "answer": 0,
    "explain": "Đạo hàm đổi dấu từ + sang - khi qua x0 thì x0 là điểm cực đại; từ - sang + thì là cực tiểu."
  }
];
