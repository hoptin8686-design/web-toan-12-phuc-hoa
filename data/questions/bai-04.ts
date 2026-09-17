import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-04_01",
    "q": "Đồ thị hàm số y = ax^3 + bx^2 + cx + d có nhánh cuối đi lên khi:",
    "options": [
      "a > 0",
      "a < 0",
      "d > 0",
      "c > 0"
    ],
    "answer": 0,
    "explain": "Khi x -> +∞ thì ax^3 -> +∞ nếu a > 0."
  },
  {
    "id": "q_bai-04_02",
    "q": "Tâm đối xứng của đồ thị hàm số y = (2x - 1)/(x + 1) là:",
    "options": [
      "(-1; 2)",
      "(1; 2)",
      "(-1; -1)",
      "(2; -1)"
    ],
    "answer": 0,
    "explain": "Giao điểm của TCĐ x = -1 và TCN y = 2 là I(-1; 2)."
  },
  {
    "id": "q_bai-04_03",
    "q": "Đồ thị hàm bậc ba y = ax^3 + bx^2 + cx + d có tâm đối xứng là:",
    "options": [
      "Điểm uốn I(x0; y0)",
      "Gốc toạ độ O",
      "Điểm cực đại",
      "Điểm cực tiểu"
    ],
    "answer": 0,
    "explain": "Đồ thị hàm bậc ba luôn nhận điểm uốn I (với y'' = 0) làm tâm đối xứng."
  },
  {
    "id": "q_bai-04_04",
    "q": "Đồ thị hàm số y = -x^3 + 3x cắt trục tung tại điểm có toạ độ:",
    "options": [
      "(0; 0)",
      "(0; 3)",
      "(√3; 0)",
      "(-√3; 0)"
    ],
    "answer": 0,
    "explain": "Cho x = 0 => y = 0. Cắt trục tung tại (0; 0)."
  },
  {
    "id": "q_bai-04_05",
    "q": "Hàm số y = (ax + b)/(cx + d) có đồ thị nhận giao điểm hai tiệm cận làm:",
    "options": [
      "Tâm đối xứng",
      "Trục đối xứng",
      "Điểm uốn",
      "Điểm cực đại"
    ],
    "answer": 0,
    "explain": "Đồ thị hypebol nhận giao điểm của 2 đường tiệm cận làm tâm đối xứng."
  },
  {
    "id": "q_bai-04_06",
    "q": "Số giao điểm của đồ thị y = x^3 - 3x và trục hoành là:",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 0,
    "explain": "x^3 - 3x = 0 <=> x(x^2 - 3) = 0 <=> x = 0 hoặc x = ±√3 (3 nghiệm)."
  },
  {
    "id": "q_bai-04_07",
    "q": "Đồ thị hàm số y = (x^2 - 2x)/(x - 1) có bao nhiêu nhánh?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "explain": "Hàm phân thức có TCĐ x = 1 chia đồ thị thành 2 nhánh (trái và phải)."
  },
  {
    "id": "q_bai-04_08",
    "q": "Cho hàm số bậc ba có 2 cực trị cùng dấu với nhau. Đồ thị hàm số cắt trục hoành tại:",
    "options": [
      "1 điểm duy nhất",
      "3 điểm phân biệt",
      "2 điểm",
      "Không cắt"
    ],
    "answer": 0,
    "explain": "y_CD * y_CT > 0 thì đồ thị chỉ cắt trục hoành tại đúng 1 điểm."
  },
  {
    "id": "q_bai-04_09",
    "q": "Đồ thị hàm số y = x^3 - 3x^2 + 2 tiếp xúc với trục hoành tại:",
    "options": [
      "x = 1 (sai), tại cực trị y = 0",
      "x = 2",
      "x = 0",
      "x = -1"
    ],
    "answer": 1,
    "explain": "y(2) = 8 - 12 + 2 = -2. y(1) = 0, y'(1) = -3. Điểm tiếp xúc khi y = 0 và y' = 0."
  },
  {
    "id": "q_bai-04_10",
    "q": "Hàm số nào có đồ thị dạng chữ N ngược (nhánh ngoài cùng đi xuống)?",
    "options": [
      "y = -x^3 + 3x",
      "y = x^3 - 3x",
      "y = x^4 - 2x^2",
      "y = -x^4 + 2x^2"
    ],
    "answer": 0,
    "explain": "Hàm bậc ba có hệ số a < 0."
  }
];
