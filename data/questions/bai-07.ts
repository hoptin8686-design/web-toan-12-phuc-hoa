import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-07_01",
    "q": "Trong không gian Oxyz, toạ độ của vectơ i (vectơ đơn vị trục Ox) là:",
    "options": [
      "(1; 0; 0)",
      "(0; 1; 0)",
      "(0; 0; 1)",
      "(1; 1; 1)"
    ],
    "answer": 0,
    "explain": "Vectơ đơn vị của Ox là i = (1; 0; 0)."
  },
  {
    "id": "q_bai-07_02",
    "q": "Hình chiếu vuông góc của điểm M(2; -3; 5) lên mặt phẳng (Oxy) là:",
    "options": [
      "(2; -3; 0)",
      "(2; 0; 5)",
      "(0; -3; 5)",
      "(2; 0; 0)"
    ],
    "answer": 0,
    "explain": "Chiếu lên (Oxy) thì giữ nguyên x, y và cho z = 0 => (2; -3; 0)."
  },
  {
    "id": "q_bai-07_03",
    "q": "Hình chiếu vuông góc của điểm M(1; 4; -2) lên trục Oz là:",
    "options": [
      "(0; 0; -2)",
      "(1; 0; 0)",
      "(0; 4; 0)",
      "(1; 4; 0)"
    ],
    "answer": 0,
    "explain": "Chiếu lên Oz thì x = 0, y = 0, giữ nguyên z => (0; 0; -2)."
  },
  {
    "id": "q_bai-07_04",
    "q": "Khoảng cách từ điểm M(3; -4; 0) đến gốc toạ độ O là:",
    "options": [
      "5",
      "7",
      "1",
      "25"
    ],
    "answer": 0,
    "explain": "d = √(3^2 + (-4)^2 + 0^2) = 5."
  },
  {
    "id": "q_bai-07_05",
    "q": "Điểm đối xứng của A(1; 2; 3) qua gốc toạ độ O là:",
    "options": [
      "(-1; -2; -3)",
      "(1; 2; -3)",
      "(-1; 2; 3)",
      "(1; -2; -3)"
    ],
    "answer": 0,
    "explain": "Đối xứng qua O đổi dấu cả 3 toạ độ => (-1; -2; -3)."
  },
  {
    "id": "q_bai-07_06",
    "q": "Mặt phẳng (Oyz) có phương trình là:",
    "options": [
      "x = 0",
      "y = 0",
      "z = 0",
      "x + y = 0"
    ],
    "answer": 0,
    "explain": "Mặt phẳng (Oyz) khuyết x nên phương trình là x = 0."
  },
  {
    "id": "q_bai-07_07",
    "q": "Cho A(1; 2; 3) và B(3; 0; 1). Toạ độ trung điểm I của đoạn AB là:",
    "options": [
      "(2; 1; 2)",
      "(4; 2; 4)",
      "(2; -2; -2)",
      "(1; -1; -1)"
    ],
    "answer": 0,
    "explain": "I = ((1+3)/2; (2+0)/2; (3+1)/2) = (2; 1; 2)."
  },
  {
    "id": "q_bai-07_08",
    "q": "Cho tam giác ABC có A(1; 0; 0), B(0; 2; 0), C(0; 0; 3). Trọng tâm G của tam giác là:",
    "options": [
      "(1/3; 2/3; 1)",
      "(1; 2; 3)",
      "(1/2; 1; 3/2)",
      "(0; 0; 0)"
    ],
    "answer": 0,
    "explain": "G = ((1+0+0)/3; (0+2+0)/3; (0+0+3)/3) = (1/3; 2/3; 1)."
  },
  {
    "id": "q_bai-07_09",
    "q": "Điểm nào sau đây nằm trên trục hoành Ox?",
    "options": [
      "A(5; 0; 0)",
      "B(0; 5; 0)",
      "C(0; 0; 5)",
      "D(5; 5; 0)"
    ],
    "answer": 0,
    "explain": "Điểm trên Ox có y = 0 và z = 0 => A(5; 0; 0)."
  },
  {
    "id": "q_bai-07_10",
    "q": "Khoảng cách từ điểm M(1; 2; 3) đến mặt phẳng (Oxz) bằng:",
    "options": [
      "2",
      "1",
      "3",
      "√14"
    ],
    "answer": 0,
    "explain": "Khoảng cách đến (Oxz) là |y| = |2| = 2."
  }
];
