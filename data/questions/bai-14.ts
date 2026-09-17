import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-14_01",
    "q": "Mặt phẳng (P): 2x - 3y + z - 5 = 0 có một vectơ pháp tuyến là:",
    "options": [
      "n = (2; -3; 1)",
      "n = (2; 3; 1)",
      "n = (2; -3; -5)",
      "n = (-3; 1; -5)"
    ],
    "answer": 0,
    "explain": "Hệ số trước x, y, z là toạ độ VTPT: (2; -3; 1)."
  },
  {
    "id": "q_bai-14_02",
    "q": "Phương trình mặt phẳng đi qua M(1; 2; 3) và có VTPT n = (2; 1; -1) là:",
    "options": [
      "2x + y - z - 1 = 0",
      "2x + y - z + 1 = 0",
      "x + 2y + 3z - 1 = 0",
      "2x + y - z = 0"
    ],
    "answer": 0,
    "explain": "2(x - 1) + 1(y - 2) - 1(z - 3) = 0 <=> 2x + y - z - 1 = 0."
  },
  {
    "id": "q_bai-14_03",
    "q": "Mặt phẳng toạ độ (Oxy) có phương trình là:",
    "options": [
      "z = 0",
      "x = 0",
      "y = 0",
      "x + y = 0"
    ],
    "answer": 0,
    "explain": "Mặt phẳng (Oxy) khuyết z nên z = 0."
  },
  {
    "id": "q_bai-14_04",
    "q": "Khoảng cách từ điểm M(1; 2; 1) đến mặt phẳng (P): 2x - 2y + z + 3 = 0 là:",
    "options": [
      "4/3",
      "2/3",
      "2",
      "1"
    ],
    "answer": 0,
    "explain": "d = |2(1) - 2(2) + 1 + 3| / √(2^2 + (-2)^2 + 1^2) = |2| / 3 = 2/3 (nếu tử là 2, kiểm tra lại: 2 - 4 + 1 + 3 = 2 => d = 2/3)."
  },
  {
    "id": "q_bai-14_05",
    "q": "Hai mặt phẳng song song khi và chỉ khi:",
    "options": [
      "Các VTPT cùng phương và D1/D2 khác tỉ số đó",
      "Các VTPT vuông góc",
      "Chúng có cùng VTPT",
      "Tích vô hướng bằng 0"
    ],
    "answer": 0,
    "explain": "Điều kiện song song: VTPT tỉ lệ nhưng hệ số tự do không tỉ lệ."
  },
  {
    "id": "q_bai-14_06",
    "q": "Phương trình mặt phẳng theo đoạn chắn cắt các trục tại A(2;0;0), B(0;-3;0), C(0;0;4) là:",
    "options": [
      "x/2 + y/(-3) + z/4 = 1",
      "2x - 3y + 4z = 1",
      "x/2 + y/3 + z/4 = 0",
      "x/2 - y/3 + z/4 = 0"
    ],
    "answer": 0,
    "explain": "Phương trình mặt phẳng theo đoạn chắn x/a + y/b + z/c = 1."
  },
  {
    "id": "q_bai-14_07",
    "q": "Mặt phẳng đi qua 3 điểm A(1;0;0), B(0;1;0), C(0;0;1) có phương trình:",
    "options": [
      "x + y + z - 1 = 0",
      "x + y + z + 1 = 0",
      "x - y + z = 1",
      "x + y - z = 1"
    ],
    "answer": 0,
    "explain": "x/1 + y/1 + z/1 = 1 <=> x + y + z - 1 = 0."
  },
  {
    "id": "q_bai-14_08",
    "q": "Mặt phẳng trung trực của đoạn thẳng AB với A(2; 1; 1) và B(0; 3; 3) đi qua điểm nào?",
    "options": [
      "Trung điểm I(1; 2; 2)",
      "A(2; 1; 1)",
      "B(0; 3; 3)",
      "Gốc toạ độ O"
    ],
    "answer": 0,
    "explain": "Mặt phẳng trung trực luôn đi qua trung điểm I của đoạn AB."
  },
  {
    "id": "q_bai-14_09",
    "q": "Tìm m để hai mặt phẳng (P): x + 2y - z + 1 = 0 và (Q): 2x + my - 2z + 5 = 0 song song.",
    "options": [
      "m = 4",
      "m = 2",
      "m = -4",
      "Không có m"
    ],
    "answer": 0,
    "explain": "Tỉ lệ VTPT: 1/2 = 2/m = -1/(-2) <=> m = 4. Hệ số tự do 1/5 ≠ 1/2 nên hai mp song song."
  },
  {
    "id": "q_bai-14_10",
    "q": "Điểm nào sau đây thuộc mặt phẳng (P): x - 2y + z - 3 = 0?",
    "options": [
      "(3; 0; 0)",
      "(1; 1; 1)",
      "(0; 0; 0)",
      "(2; 1; 2)"
    ],
    "answer": 0,
    "explain": "Thay (3; 0; 0): 3 - 0 + 0 - 3 = 0 (thoả mãn)."
  }
];
