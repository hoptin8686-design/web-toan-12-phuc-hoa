import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-08_01",
    "q": "Cho a = (1; -2; 3) và b = (2; 1; -1). Toạ độ vectơ a + b là:",
    "options": [
      "(3; -1; 2)",
      "(1; 3; -4)",
      "(-1; -3; 4)",
      "(2; -2; -3)"
    ],
    "answer": 0,
    "explain": "a + b = (1+2; -2+1; 3+(-1)) = (3; -1; 2)."
  },
  {
    "id": "q_bai-08_02",
    "q": "Tích vô hướng của hai vectơ a = (1; 2; -3) và b = (3; -1; 2) bằng:",
    "options": [
      "-5",
      "5",
      "7",
      "-7"
    ],
    "answer": 0,
    "explain": "a . b = 1*3 + 2*(-1) + (-3)*2 = 3 - 2 - 6 = -5."
  },
  {
    "id": "q_bai-08_03",
    "q": "Độ dài của vectơ u = (2; -1; 2) là:",
    "options": [
      "3",
      "9",
      "5",
      "√5"
    ],
    "answer": 0,
    "explain": "|u| = √(2^2 + (-1)^2 + 2^2) = √9 = 3."
  },
  {
    "id": "q_bai-08_04",
    "q": "Khoảng cách giữa hai điểm A(1; 2; 3) và B(3; 4; 2) bằng:",
    "options": [
      "3",
      "9",
      "√5",
      "√11"
    ],
    "answer": 0,
    "explain": "AB = √[(3-1)^2 + (4-2)^2 + (2-3)^2] = √(4 + 4 + 1) = 3."
  },
  {
    "id": "q_bai-08_05",
    "q": "Cho a = (2; -1; 1) và b = (m; 2; -4). Tìm m để a vuông góc b.",
    "options": [
      "m = 3",
      "m = 2",
      "m = -3",
      "m = 1"
    ],
    "answer": 0,
    "explain": "a . b = 2m - 2 - 4 = 2m - 6 = 0 <=> m = 3."
  },
  {
    "id": "q_bai-08_06",
    "q": "Cho a = (1; 2; 3). Toạ độ vectơ 2a là:",
    "options": [
      "(2; 4; 6)",
      "(1; 4; 9)",
      "(3; 4; 5)",
      "(2; 2; 3)"
    ],
    "answer": 0,
    "explain": "2a = (2*1; 2*2; 2*3) = (2; 4; 6)."
  },
  {
    "id": "q_bai-08_07",
    "q": "Côsin của góc giữa hai vectơ a = (1; 0; 1) và b = (0; 1; 1) bằng:",
    "options": [
      "1/2",
      "√2/2",
      "1/√3",
      "0"
    ],
    "answer": 0,
    "explain": "cos = (1*0 + 0*1 + 1*1)/(√2 * √2) = 1/2."
  },
  {
    "id": "q_bai-08_08",
    "q": "Hai vectơ a = (1; 2; -1) và b = (-2; -4; 2) có quan hệ gì?",
    "options": [
      "Ngược hướng",
      "Cùng hướng",
      "Vuông góc",
      "Không cùng phương"
    ],
    "answer": 0,
    "explain": "b = -2a với hệ số âm nên hai vectơ ngược hướng."
  },
  {
    "id": "q_bai-08_09",
    "q": "Cho A(1; 1; 0) và B(0; 2; 2). Vectơ AB có toạ độ là:",
    "options": [
      "(-1; 1; 2)",
      "(1; -1; -2)",
      "(1; 3; 2)",
      "(0; 2; 0)"
    ],
    "answer": 0,
    "explain": "AB = (0-1; 2-1; 2-0) = (-1; 1; 2)."
  },
  {
    "id": "q_bai-08_10",
    "q": "Tìm toạ độ điểm D để tứ giác ABCD là hình bình hành biết A(1;0;1), B(2;1;2), C(1;3;2).",
    "options": [
      "(0; 2; 1)",
      "(2; 2; 1)",
      "(0; 4; 3)",
      "(2; 4; 3)"
    ],
    "answer": 0,
    "explain": "AD = BC => D - A = C - B => D = A + C - B = (1+1-2; 0+3-1; 1+2-2) = (0; 2; 1)."
  }
];
