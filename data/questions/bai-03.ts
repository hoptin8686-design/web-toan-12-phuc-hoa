import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-03_01",
    "q": "Tiệm cận đứng của y = (2x - 3)/(x + 1) là:",
    "options": [
      "x = -1",
      "x = 2",
      "y = 2",
      "y = -1"
    ],
    "answer": 0,
    "explain": "Nghiệm mẫu x = -1 làm tử khác 0 nên TCĐ: x = -1."
  },
  {
    "id": "q_bai-03_02",
    "q": "Tiệm cận ngang của y = (3x + 1)/(x - 2) là:",
    "options": [
      "y = 3",
      "x = 2",
      "y = -1/2",
      "x = 3"
    ],
    "answer": 0,
    "explain": "lim khi x -> ∞ bằng 3/1 = 3 => TCN: y = 3."
  },
  {
    "id": "q_bai-03_03",
    "q": "Tiệm cận xiên của y = (x^2 + 2x - 1)/(x + 1) là:",
    "options": [
      "y = x + 1",
      "y = x - 1",
      "y = x + 2",
      "y = 2x"
    ],
    "answer": 0,
    "explain": "(x^2 + 2x - 1)/(x + 1) = x + 1 - 2/(x + 1) => TCX: y = x + 1."
  },
  {
    "id": "q_bai-03_04",
    "q": "Số đường tiệm cận của đồ thị hàm số y = 1/(x^2 - 1) là:",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "2 TCĐ x = ±1 và 1 TCN y = 0. Tổng cộng 3."
  },
  {
    "id": "q_bai-03_05",
    "q": "Đồ thị hàm số y = (x^2 - 4)/(x - 2) có tiệm cận đứng không?",
    "options": [
      "Không có tiệm cận đứng",
      "Có TCĐ x = 2",
      "Có TCĐ x = -2",
      "Có 2 TCĐ"
    ],
    "answer": 0,
    "explain": "(x^2 - 4)/(x - 2) = x + 2 (với x ≠ 2), giới hạn khi x->2 hữu hạn = 4 nên không có TCĐ."
  },
  {
    "id": "q_bai-03_06",
    "q": "Giao điểm hai tiệm cận của y = (2x + 1)/(x - 1) là:",
    "options": [
      "(1; 2)",
      "(-1; 2)",
      "(1; -1)",
      "(2; 1)"
    ],
    "answer": 0,
    "explain": "TCĐ x = 1, TCN y = 2 => Tâm đối xứng (1; 2)."
  },
  {
    "id": "q_bai-03_07",
    "q": "Hàm số y = x + 2 - 3/(x - 1) có tiệm cận xiên là:",
    "options": [
      "y = x + 2",
      "y = x - 1",
      "y = 2x",
      "x = 1"
    ],
    "answer": 0,
    "explain": "lim [y - (x + 2)] = lim -3/(x - 1) = 0 => TCX: y = x + 2."
  },
  {
    "id": "q_bai-03_08",
    "q": "Đồ thị hàm số nào sau đây có tiệm cận ngang y = 0?",
    "options": [
      "y = 2/(x + 3)",
      "y = (2x + 1)/(x - 1)",
      "y = x^2 + 1",
      "y = (x^2 + 1)/x"
    ],
    "answer": 0,
    "explain": "Bậc tử < bậc mẫu nên lim = 0 => TCN: y = 0."
  },
  {
    "id": "q_bai-03_09",
    "q": "Đồ thị hàm số y = (ax + 1)/(bx - 2) có TCĐ x = 1 và TCN y = 3. Giá trị a - b là:",
    "options": [
      "4",
      "2",
      "1",
      "-1"
    ],
    "answer": 0,
    "explain": "TCĐ: 2/b = 1 => b = 2. TCN: a/b = 3 => a = 3b = 6. a - b = 6 - 2 = 4."
  },
  {
    "id": "q_bai-03_10",
    "q": "Tiệm cận xiên của y = (2x^2 + 3x + 1)/(x + 2) là:",
    "options": [
      "y = 2x - 1",
      "y = 2x + 1",
      "y = x + 2",
      "y = 2x + 3"
    ],
    "answer": 0,
    "explain": "Chia đa thức: (2x^2 + 3x + 1) = (x + 2)(2x - 1) + 3 => TCX: y = 2x - 1."
  }
];
