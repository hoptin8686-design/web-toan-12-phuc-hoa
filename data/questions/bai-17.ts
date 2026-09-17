import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-17_01",
    "q": "Mặt cầu (S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16 có tâm và bán kính là:",
    "options": [
      "I(1; -2; 3), R = 4",
      "I(-1; 2; -3), R = 4",
      "I(1; -2; 3), R = 16",
      "I(-1; 2; -3), R = 16"
    ],
    "answer": 0,
    "explain": "Tâm I(1; -2; 3), R = √16 = 4."
  },
  {
    "id": "q_bai-17_02",
    "q": "Mặt cầu x^2 + y^2 + z^2 - 2x + 4y - 6z + 1 = 0 có bán kính bằng:",
    "options": [
      "√13",
      "√14",
      "13",
      "3"
    ],
    "answer": 0,
    "explain": "a = 1, b = -2, c = 3, d = 1. R = √(1^2 + (-2)^2 + 3^2 - 1) = √(1 + 4 + 9 - 1) = √13."
  },
  {
    "id": "q_bai-17_03",
    "q": "Phương trình mặt cầu tâm O(0; 0; 0) bán kính R = 3 là:",
    "options": [
      "x^2 + y^2 + z^2 = 9",
      "x^2 + y^2 + z^2 = 3",
      "(x-3)^2 + y^2 + z^2 = 9",
      "x^2 + y^2 + z^2 = 6"
    ],
    "answer": 0,
    "explain": "x^2 + y^2 + z^2 = R^2 = 9."
  },
  {
    "id": "q_bai-17_04",
    "q": "Mặt phẳng (P) tiếp xúc với mặt cầu S(I, R) khi và chỉ khi:",
    "options": [
      "d(I, (P)) = R",
      "d(I, (P)) < R",
      "d(I, (P)) > R",
      "d(I, (P)) = 0"
    ],
    "answer": 0,
    "explain": "Điều kiện tiếp xúc là khoảng cách từ tâm I đến mặt phẳng bằng đúng bán kính R."
  },
  {
    "id": "q_bai-17_05",
    "q": "Phương trình mặt cầu đường kính AB với A(1; 2; 0) và B(3; 0; 2) có tâm là:",
    "options": [
      "I(2; 1; 1)",
      "I(4; 2; 2)",
      "I(1; -1; 1)",
      "I(2; -1; 1)"
    ],
    "answer": 0,
    "explain": "Tâm I là trung điểm AB: ((1+3)/2; (2+0)/2; (0+2)/2) = (2; 1; 1)."
  },
  {
    "id": "q_bai-17_06",
    "q": "Bán kính của mặt cầu đường kính AB với A(1; 2; 0) và B(3; 0; 2) bằng:",
    "options": [
      "√3",
      "3",
      "2√3",
      "6"
    ],
    "answer": 0,
    "explain": "AB = √[(2)^2 + (-2)^2 + (2)^2] = √12 = 2√3 => R = AB/2 = √3."
  },
  {
    "id": "q_bai-17_07",
    "q": "Vị trí tương đối của mặt phẳng (P): z = 0 và mặt cầu (S): x^2 + y^2 + (z - 5)^2 = 9 là:",
    "options": [
      "Không cắt nhau",
      "Tiếp xúc nhau",
      "Cắt nhau theo đường tròn",
      "Đi qua tâm"
    ],
    "answer": 0,
    "explain": "Tâm I(0; 0; 5), R = 3. d(I, Oxy) = |5| = 5 > R = 3 => không cắt nhau."
  },
  {
    "id": "q_bai-17_08",
    "q": "Phương trình x^2 + y^2 + z^2 + 2x - 4y + 2z + 10 = 0 có phải là mặt cầu không?",
    "options": [
      "Không, vì a^2 + b^2 + c^2 - d < 0",
      "Có, R = 1",
      "Có, R = 2",
      "Có, R = √10"
    ],
    "answer": 0,
    "explain": "a = -1, b = 2, c = -1, d = 10. a^2 + b^2 + c^2 - d = 1 + 4 + 1 - 10 = -4 < 0 => không phải mặt cầu."
  },
  {
    "id": "q_bai-17_09",
    "q": "Mặt cầu tâm I(1; 2; 3) tiếp xúc với mặt phẳng (Oxy) có bán kính bằng:",
    "options": [
      "3",
      "1",
      "2",
      "√14"
    ],
    "answer": 0,
    "explain": "d(I, Oxy) = |z_I| = 3 => R = 3."
  },
  {
    "id": "q_bai-17_10",
    "q": "Giao tuyến của mặt cầu (S) và mặt phẳng (P) khi d(I, (P)) < R là một:",
    "options": [
      "Đường tròn bán kính r = √(R^2 - d^2)",
      "Điểm duy nhất",
      "Hình elip",
      "Đoạn thẳng"
    ],
    "answer": 0,
    "explain": "Giao tuyến là đường tròn có bán kính r = √(R^2 - d^2)."
  }
];
