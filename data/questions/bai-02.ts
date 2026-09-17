import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-02_01",
    "q": "GTLN của hàm số f(x) = x^4 - 2x^2 + 3 trên đoạn [0; 2] bằng:",
    "options": [
      "11",
      "3",
      "2",
      "19"
    ],
    "answer": 0,
    "explain": "f(0) = 3, f(1) = 2, f(2) = 11. Max = 11."
  },
  {
    "id": "q_bai-02_02",
    "q": "GTNN của hàm số y = x + 4/x trên đoạn [1; 3] bằng:",
    "options": [
      "4",
      "5",
      "13/3",
      "3"
    ],
    "answer": 0,
    "explain": "y' = 1 - 4/x^2 = 0 <=> x = 2. y(1) = 5, y(2) = 4, y(3) = 13/3. Min = 4."
  },
  {
    "id": "q_bai-02_03",
    "q": "Cho hàm số y = (x - 1)/(x + 1) trên [0; 2]. Giá trị max + min bằng:",
    "options": [
      "-2/3",
      "1/3",
      "-1",
      "2/3"
    ],
    "answer": 0,
    "explain": "y đồng biến: min = y(0) = -1, max = y(2) = 1/3. Tổng = -2/3."
  },
  {
    "id": "q_bai-02_04",
    "q": "Diện tích lớn nhất của hình chữ nhật có chu vi 40 cm là:",
    "options": [
      "100 cm²",
      "400 cm²",
      "50 cm²",
      "200 cm²"
    ],
    "answer": 0,
    "explain": "Cạnh x, 20-x => S = x(20-x) đạt max khi x = 10 (hình vuông) => S = 100 cm²."
  },
  {
    "id": "q_bai-02_05",
    "q": "GTNN của hàm số y = x^3 - 3x trên [0; 2] là:",
    "options": [
      "-2",
      "0",
      "2",
      "-1"
    ],
    "answer": 0,
    "explain": "y(0) = 0, y(1) = -2, y(2) = 2. Min = -2."
  },
  {
    "id": "q_bai-02_06",
    "q": "GTLN của y = √(9 - x^2) bằng:",
    "options": [
      "3",
      "9",
      "0",
      "√3"
    ],
    "answer": 0,
    "explain": "√(9 - x^2) <= √9 = 3 khi x = 0."
  },
  {
    "id": "q_bai-02_07",
    "q": "Cho f(x) liên tục trên [-2; 3] có min = -5, max = 7. GTLN của |f(x)| trên [-2; 3] bằng:",
    "options": [
      "7",
      "5",
      "12",
      "2"
    ],
    "answer": 0,
    "explain": "Max |f(x)| = max{|-5|, |7|} = 7."
  },
  {
    "id": "q_bai-02_08",
    "q": "Hàm số y = sin 2x + 1 có GTLN bằng:",
    "options": [
      "2",
      "1",
      "3",
      "0"
    ],
    "answer": 0,
    "explain": "sin 2x <= 1 => y <= 2."
  },
  {
    "id": "q_bai-02_09",
    "q": "Tìm m để GTNN của y = x^2 - 4x + m trên [0; 3] bằng 2.",
    "options": [
      "m = 6",
      "m = 2",
      "m = 4",
      "m = 5"
    ],
    "answer": 0,
    "explain": "Đỉnh x = 2 ∈ [0; 3] => min = y(2) = 4 - 8 + m = m - 4 = 2 <=> m = 6."
  },
  {
    "id": "q_bai-02_10",
    "q": "Hàm số y = x + 1/x trên (0; +∞) có GTNN bằng:",
    "options": [
      "2",
      "1",
      "4",
      "Không có"
    ],
    "answer": 0,
    "explain": "Theo BĐT Cô-si: x + 1/x >= 2. Dấu bằng khi x = 1."
  },
  {
    "id": "q_bai-02_11",
    "q": "Giá trị nhỏ nhất của hàm số y = x + 4/x trên đoạn [1; 3] bằng:",
    "options": [
      "4",
      "5",
      "13/3",
      "2"
    ],
    "answer": 0,
    "explain": "y' = 1 - 4/x^2 = 0 <=> x = 2 thuộc [1; 3]. y(1) = 5, y(2) = 4, y(3) = 13/3. Min = 4 tại x = 2."
  },
  {
    "id": "q_bai-02_12",
    "q": "Tìm giá trị lớn nhất M của hàm số y = sqrt(4 - x^2).",
    "options": [
      "M = 2",
      "M = 4",
      "M = 0",
      "M = 16"
    ],
    "answer": 0,
    "explain": "Tập xác định [-2; 2]. 4 - x^2 <= 4 => sqrt(4 - x^2) <= 2. Dấu bằng xảy ra khi x = 0."
  }
];
