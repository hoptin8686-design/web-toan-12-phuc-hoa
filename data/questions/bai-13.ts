import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-13_01",
    "q": "Diện tích hình phẳng giới hạn bởi đồ thị y = f(x), trục Ox và hai đường thẳng x = a, x = b (a < b) là:",
    "options": [
      "S = ∫_a^b |f(x)| dx",
      "S = ∫_a^b f(x) dx",
      "S = π ∫_a^b f^2(x) dx",
      "S = |∫_a^b f(x) dx|"
    ],
    "answer": 0,
    "explain": "Định nghĩa diện tích hình phẳng: S = ∫_a^b |f(x)| dx."
  },
  {
    "id": "q_bai-13_02",
    "q": "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = f(x), Ox, x = a, x = b quanh Ox là:",
    "options": [
      "V = π ∫_a^b [f(x)]^2 dx",
      "V = ∫_a^b [f(x)]^2 dx",
      "V = π ∫_a^b |f(x)| dx",
      "V = 2π ∫_a^b f(x) dx"
    ],
    "answer": 0,
    "explain": "Công thức chuẩn tính thể tích quay quanh Ox."
  },
  {
    "id": "q_bai-13_03",
    "q": "Diện tích hình phẳng giới hạn bởi y = x^2, trục Ox, x = 0, x = 3 bằng:",
    "options": [
      "9",
      "27",
      "3",
      "18"
    ],
    "answer": 0,
    "explain": "S = ∫_0^3 x^2 dx = x^3/3 |_0^3 = 27/3 = 9."
  },
  {
    "id": "q_bai-13_04",
    "q": "Diện tích hình phẳng giới hạn bởi parabol y = x^2 và đường thẳng y = 2x là:",
    "options": [
      "4/3",
      "2/3",
      "2",
      "4"
    ],
    "answer": 0,
    "explain": "Phương trình hoành độ giao điểm: x^2 = 2x <=> x = 0 hoặc x = 2. S = ∫_0^2 (2x - x^2) dx = (x^2 - x^3/3)|_0^2 = 4 - 8/3 = 4/3."
  },
  {
    "id": "q_bai-13_05",
    "q": "Thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y = √x, Ox, x = 0, x = 4 quanh Ox là:",
    "options": [
      "8π",
      "16π",
      "4π",
      "2π"
    ],
    "answer": 0,
    "explain": "V = π ∫_0^4 (√x)^2 dx = π ∫_0^4 x dx = π [x^2/2]|_0^4 = 8π."
  },
  {
    "id": "q_bai-13_06",
    "q": "Diện tích hình phẳng giới hạn bởi y = sin x, trục Ox trên đoạn [0; π] bằng:",
    "options": [
      "2",
      "0",
      "1",
      "π"
    ],
    "answer": 0,
    "explain": "S = ∫_0^π sin x dx = -cos x |_0^π = 1 - (-1) = 2."
  },
  {
    "id": "q_bai-13_07",
    "q": "Thể tích khối cầu bán kính R có thể chứng minh bằng tích phân quay hình tròn x^2 + y^2 <= R^2 quanh Ox, cho kết quả:",
    "options": [
      "(4/3) π R³",
      "4 π R²",
      "2 π R³",
      "π R³"
    ],
    "answer": 0,
    "explain": "Công thức thể tích hình cầu V = 4/3 π R³."
  },
  {
    "id": "q_bai-13_08",
    "q": "Nếu f(x) >= g(x) với mọi x ∈ [a; b] thì diện tích hình phẳng giữa hai đồ thị là:",
    "options": [
      "∫_a^b [f(x) - g(x)] dx",
      "∫_a^b [g(x) - f(x)] dx",
      "π ∫_a^b [f(x) - g(x)] dx",
      "∫_a^b f(x)g(x) dx"
    ],
    "answer": 0,
    "explain": "Khi f(x) >= g(x) thì |f(x) - g(x)| = f(x) - g(x)."
  },
  {
    "id": "q_bai-13_09",
    "q": "Diện tích hình phẳng giới hạn bởi y = e^x, Ox, x = 0, x = 1 là:",
    "options": [
      "e - 1",
      "e",
      "e + 1",
      "1"
    ],
    "answer": 0,
    "explain": "∫_0^1 e^x dx = e^1 - e^0 = e - 1."
  },
  {
    "id": "q_bai-13_10",
    "q": "Thể tích khối nón tròn xoay chiều cao h, bán kính đáy r tính bằng tích phân bằng:",
    "options": [
      "(1/3) π r² h",
      "π r² h",
      "(2/3) π r² h",
      "(4/3) π r² h"
    ],
    "answer": 0,
    "explain": "Công thức thể tích hình nón V = 1/3 π r² h."
  },
  {
    "id": "q_bai-13_11",
    "q": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số y = x^2, trục hoành và hai đường thẳng x = 0, x = 3 bằng:",
    "options": [
      "9",
      "3",
      "27",
      "18"
    ],
    "answer": 0,
    "explain": "S = int_0^3 x^2 dx = [x^3 / 3]_0^3 = 27 / 3 = 9."
  },
  {
    "id": "q_bai-13_12",
    "q": "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = sqrt(x), trục Ox và hai đường thẳng x = 0, x = 4 quanh trục Ox là:",
    "options": [
      "8*pi",
      "4*pi",
      "16*pi",
      "2*pi"
    ],
    "answer": 0,
    "explain": "V = pi * int_0^4 (sqrt(x))^2 dx = pi * int_0^4 x dx = pi * [x^2 / 2]_0^4 = 8*pi."
  }
];
