import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-12_01",
    "q": "Tích phân I = ∫_0^1 (2x + 1) dx có giá trị bằng:",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "explain": "F(x) = x^2 + x => F(1) - F(0) = (1 + 1) - 0 = 2."
  },
  {
    "id": "q_bai-12_02",
    "q": "Nếu ∫_1^2 f(x) dx = 3 và ∫_2^5 f(x) dx = -1 thì ∫_1^5 f(x) dx bằng:",
    "options": [
      "2",
      "4",
      "-3",
      "-2"
    ],
    "answer": 0,
    "explain": "∫_1^5 = ∫_1^2 + ∫_2^5 = 3 + (-1) = 2."
  },
  {
    "id": "q_bai-12_03",
    "q": "Tính tích phân I = ∫_0^(π/2) cos x dx.",
    "options": [
      "1",
      "0",
      "-1",
      "2"
    ],
    "answer": 0,
    "explain": "sin(π/2) - sin(0) = 1 - 0 = 1."
  },
  {
    "id": "q_bai-12_04",
    "q": "Tính I = ∫_1^e (1/x) dx.",
    "options": [
      "1",
      "e",
      "0",
      "ln 2"
    ],
    "answer": 0,
    "explain": "ln(e) - ln(1) = 1 - 0 = 1."
  },
  {
    "id": "q_bai-12_05",
    "q": "Tích phân ∫_a^a f(x) dx luôn bằng:",
    "options": [
      "0",
      "1",
      "f(a)",
      "2f(a)"
    ],
    "answer": 0,
    "explain": "Tích phân có hai cận bằng nhau luôn bằng 0."
  },
  {
    "id": "q_bai-12_06",
    "q": "Nếu đặt t = x^2 + 1 thì tích phân I = ∫_0^1 2x(x^2 + 1)^3 dx trở thành:",
    "options": [
      "∫_1^2 t^3 dt",
      "∫_0^1 t^3 dt",
      "∫_1^2 2t^3 dt",
      "∫_0^2 t^3 dt"
    ],
    "answer": 0,
    "explain": "dt = 2x dx; x=0=>t=1, x=1=>t=2 => ∫_1^2 t^3 dt."
  },
  {
    "id": "q_bai-12_07",
    "q": "Công thức tích phân từng phần đúng là:",
    "options": [
      "∫_a^b u dv = uv|_a^b - ∫_a^b v du",
      "∫_a^b u dv = uv|_a^b + ∫_a^b v du",
      "∫ u dv = u'v - v'u",
      "∫ u dv = uv"
    ],
    "answer": 0,
    "explain": "Chuẩn công thức Leibniz tích phân từng phần."
  },
  {
    "id": "q_bai-12_08",
    "q": "Tích phân I = ∫_0^1 e^(2x) dx bằng:",
    "options": [
      "(e^2 - 1) / 2",
      "e^2 - 1",
      "(e^2 + 1) / 2",
      "e - 1"
    ],
    "answer": 0,
    "explain": "(1/2) e^(2x) |_0^1 = (e^2 - 1)/2."
  },
  {
    "id": "q_bai-12_09",
    "q": "Cho hàm số f(x) liên tục trên [-a; a]. Nếu f(x) là hàm số lẻ thì ∫_{-a}^a f(x) dx bằng:",
    "options": [
      "0",
      "2 ∫_0^a f(x) dx",
      "f(a)",
      "-f(a)"
    ],
    "answer": 0,
    "explain": "Tích phân hàm lẻ trên đoạn đối xứng luôn bằng 0."
  },
  {
    "id": "q_bai-12_10",
    "q": "Tính I = ∫_0^1 x e^x dx.",
    "options": [
      "1",
      "e",
      "e - 1",
      "2"
    ],
    "answer": 0,
    "explain": "Từng phần: u = x, dv = e^x dx => x e^x|_0^1 - ∫_0^1 e^x dx = e - (e - 1) = 1."
  }
];
