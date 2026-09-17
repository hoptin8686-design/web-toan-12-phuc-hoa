import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-11_01",
    "q": "Nguyên hàm của hàm số f(x) = x^3 là:",
    "options": [
      "x^4 / 4 + C",
      "3x^2 + C",
      "x^4 + C",
      "4x^4 + C"
    ],
    "answer": 0,
    "explain": "∫ x^n dx = x^(n+1)/(n+1) + C => x^4/4 + C."
  },
  {
    "id": "q_bai-11_02",
    "q": "Nguyên hàm của hàm số f(x) = cos x là:",
    "options": [
      "sin x + C",
      "-sin x + C",
      "cos x + C",
      "-cos x + C"
    ],
    "answer": 0,
    "explain": "(sin x)' = cos x nên ∫ cos x dx = sin x + C."
  },
  {
    "id": "q_bai-11_03",
    "q": "Nguyên hàm của f(x) = e^(2x) là:",
    "options": [
      "(1/2) e^(2x) + C",
      "2 e^(2x) + C",
      "e^(2x) + C",
      "e^x + C"
    ],
    "answer": 0,
    "explain": "∫ e^(ax) dx = (1/a) e^(ax) + C."
  },
  {
    "id": "q_bai-11_04",
    "q": "Nguyên hàm của hàm số f(x) = 1/x trên (0; +∞) là:",
    "options": [
      "ln x + C",
      "-1/x^2 + C",
      "ln|x| + C",
      "e^x + C"
    ],
    "answer": 0,
    "explain": "∫ 1/x dx = ln x + C trên khoảng dương."
  },
  {
    "id": "q_bai-11_05",
    "q": "Khẳng định nào sau đây là sai?",
    "options": [
      "∫ [f(x) * g(x)] dx = ∫ f(x)dx * ∫ g(x)dx",
      "∫ k f(x) dx = k ∫ f(x) dx (k ≠ 0)",
      "∫ [f(x) + g(x)] dx = ∫ f(x)dx + ∫ g(x)dx",
      "(∫ f(x) dx)' = f(x)"
    ],
    "answer": 0,
    "explain": "Tích phân/nguyên hàm của tích KHÔNG bằng tích các nguyên hàm!"
  },
  {
    "id": "q_bai-11_06",
    "q": "Họ nguyên hàm của f(x) = 1/cos^2 x là:",
    "options": [
      "tan x + C",
      "-cot x + C",
      "cot x + C",
      "-tan x + C"
    ],
    "answer": 0,
    "explain": "(tan x)' = 1/cos^2 x."
  },
  {
    "id": "q_bai-11_07",
    "q": "Tìm một nguyên hàm F(x) của f(x) = 2x + 1 thoả mãn F(1) = 4.",
    "options": [
      "F(x) = x^2 + x + 2",
      "F(x) = x^2 + x + 4",
      "F(x) = x^2 + x",
      "F(x) = 2x^2 + x + 1"
    ],
    "answer": 0,
    "explain": "F(x) = x^2 + x + C. F(1) = 1 + 1 + C = 4 => C = 2."
  },
  {
    "id": "q_bai-11_08",
    "q": "Nguyên hàm ∫ 2^x dx bằng:",
    "options": [
      "2^x / ln 2 + C",
      "2^x * ln 2 + C",
      "2^(x+1) / (x+1) + C",
      "2^x + C"
    ],
    "answer": 0,
    "explain": "∫ a^x dx = a^x / ln a + C."
  },
  {
    "id": "q_bai-11_09",
    "q": "Tính I = ∫ (2x - 3)^4 dx.",
    "options": [
      "(2x - 3)^5 / 10 + C",
      "(2x - 3)^5 / 5 + C",
      "2(2x - 3)^5 + C",
      "(2x - 3)^3 / 6 + C"
    ],
    "answer": 0,
    "explain": "∫ (ax+b)^n dx = 1/a * (ax+b)^(n+1)/(n+1) + C = (2x-3)^5 / 10 + C."
  },
  {
    "id": "q_bai-11_10",
    "q": "Nguyên hàm của f(x) = 0 là:",
    "options": [
      "C (hằng số)",
      "0",
      "x + C",
      "1"
    ],
    "answer": 0,
    "explain": "Đạo hàm của hằng số C bằng 0 nên ∫ 0 dx = C."
  }
];
