import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-06_01",
    "q": "Cho hình hộp ABCD.A'B'C'D'. Vectơ tổng AB + AD + AA' bằng vectơ nào?",
    "options": [
      "AC'",
      "AC",
      "A'C",
      "BD'"
    ],
    "answer": 0,
    "explain": "Quy tắc hình hộp: AB + AD + AA' = AC' (đường chéo xuất phát từ đỉnh A)."
  },
  {
    "id": "q_bai-06_02",
    "q": "Cho tứ diện ABCD. Trọng tâm G của tứ diện thoả mãn hệ thức vectơ nào?",
    "options": [
      "GA + GB + GC + GD = 0",
      "GA + GB + GC = GD",
      "AB + AC + AD = AG",
      "GA + GB = GC + GD"
    ],
    "answer": 0,
    "explain": "Trọng tâm tứ diện thoả mãn GA + GB + GC + GD = 0."
  },
  {
    "id": "q_bai-06_03",
    "q": "Hai vectơ a và b trong không gian vuông góc với nhau khi và chỉ khi:",
    "options": [
      "a . b = 0",
      "a + b = 0",
      "|a| = |b|",
      "a cùng phương b"
    ],
    "answer": 0,
    "explain": "Hai vectơ vuông góc <=> tích vô hướng bằng 0."
  },
  {
    "id": "q_bai-06_04",
    "q": "Cho tam giác ABC đều cạnh a. Tích vô hướng AB . AC bằng:",
    "options": [
      "a^2 / 2",
      "a^2",
      "a^2 √3 / 2",
      "-a^2 / 2"
    ],
    "answer": 0,
    "explain": "AB . AC = a * a * cos 60° = a^2 / 2."
  },
  {
    "id": "q_bai-06_05",
    "q": "Cho hình lập phương ABCD.A'B'C'D'. Góc giữa hai vectơ AB và A'D' bằng:",
    "options": [
      "90°",
      "0°",
      "45°",
      "180°"
    ],
    "answer": 0,
    "explain": "A'D' = AD mà AB vuông góc AD nên góc giữa AB và A'D' bằng 90°."
  },
  {
    "id": "q_bai-06_06",
    "q": "Ba vectơ a, b, c đồng phẳng khi:",
    "options": [
      "Giá của chúng cùng song song với một mặt phẳng",
      "Chúng cùng độ dài",
      "Chúng đôi một vuông góc",
      "Chúng có cùng điểm đầu"
    ],
    "answer": 0,
    "explain": "Định nghĩa: 3 vectơ đồng phẳng nếu giá của chúng cùng song song hoặc nằm trên 1 mặt phẳng."
  },
  {
    "id": "q_bai-06_07",
    "q": "Cho hình lăng trụ tam giác ABC.A'B'C'. Vectơ AA' + AB + AC bằng:",
    "options": [
      "2 AM' (với M là trung điểm BC)",
      "AB'",
      "AC'",
      "0"
    ],
    "answer": 0,
    "explain": "Theo quy tắc hình hộp, AA' + AB + AC = 2 AM'."
  },
  {
    "id": "q_bai-06_08",
    "q": "Độ dài của vectơ tổng a + b khi a và b vuông góc có độ dài 3 và 4 là:",
    "options": [
      "5",
      "7",
      "1",
      "12"
    ],
    "answer": 0,
    "explain": "|a + b| = √(3^2 + 4^2) = 5 (Định lý Pythagoras)."
  },
  {
    "id": "q_bai-06_09",
    "q": "Góc giữa hai vectơ a và b biết a . b = -|a||b| là:",
    "options": [
      "180°",
      "90°",
      "0°",
      "120°"
    ],
    "answer": 0,
    "explain": "cos α = -1 <=> α = 180° (hai vectơ ngược hướng)."
  },
  {
    "id": "q_bai-06_10",
    "q": "Trong không gian, điều kiện để ba vectơ a, b, c không đồng phẳng là:",
    "options": [
      "c không biểu diễn được dưới dạng ma + nb",
      "a . b = 0",
      "|a| = |b| = |c|",
      "a + b + c = 0"
    ],
    "answer": 0,
    "explain": "Ba vectơ không đồng phẳng khi và chỉ khi không tồn tại bộ số m, n để c = ma + nb."
  }
];
