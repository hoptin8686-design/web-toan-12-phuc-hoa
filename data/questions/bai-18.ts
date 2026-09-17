import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-18_01",
    "q": "Xác suất có điều kiện của biến cố A khi biến cố B đã xảy ra ký hiệu là:",
    "options": [
      "P(A | B)",
      "P(B | A)",
      "P(A / B)",
      "P(AB)"
    ],
    "answer": 0,
    "explain": "Ký hiệu chuẩn P(A|B)."
  },
  {
    "id": "q_bai-18_02",
    "q": "Công thức tính xác suất có điều kiện P(A|B) khi P(B) > 0 là:",
    "options": [
      "P(A | B) = P(AB) / P(B)",
      "P(A | B) = P(AB) / P(A)",
      "P(A | B) = P(A) / P(B)",
      "P(A | B) = P(A) * P(B)"
    ],
    "answer": 0,
    "explain": "P(A|B) = P(AB) / P(B)."
  },
  {
    "id": "q_bai-18_03",
    "q": "Nếu hai biến cố A và B độc lập thì P(A|B) bằng:",
    "options": [
      "P(A)",
      "P(B)",
      "P(AB)",
      "1"
    ],
    "answer": 0,
    "explain": "Độc lập nghĩa là biến cố B xảy ra không làm thay đổi xác suất của A: P(A|B) = P(A)."
  },
  {
    "id": "q_bai-18_04",
    "q": "Gieo một con xúc xắc cân đối. Biết số chấm xuất hiện là số chẵn, xác suất để số chấm chia hết cho 3 là:",
    "options": [
      "1/3",
      "1/6",
      "1/2",
      "2/3"
    ],
    "answer": 0,
    "explain": "Số chẵn B = {2, 4, 6} có 3 phần tử. Chia hết cho 3 là {6} (1 phần tử) => P = 1/3."
  },
  {
    "id": "q_bai-18_05",
    "q": "Cho P(A) = 0.6, P(B) = 0.5, P(AB) = 0.3. Giá trị P(A|B) bằng:",
    "options": [
      "0.6",
      "0.5",
      "0.3",
      "0.8"
    ],
    "answer": 0,
    "explain": "P(A|B) = P(AB) / P(B) = 0.3 / 0.5 = 0.6."
  },
  {
    "id": "q_bai-18_06",
    "q": "Công thức nhân xác suất cho hai biến cố bất kỳ là:",
    "options": [
      "P(AB) = P(A) * P(B|A)",
      "P(AB) = P(A) * P(B)",
      "P(AB) = P(A) + P(B)",
      "P(AB) = P(A) / P(B)"
    ],
    "answer": 0,
    "explain": "P(AB) = P(A) * P(B|A)."
  },
  {
    "id": "q_bai-18_07",
    "q": "Một hộp có 5 bi xanh và 3 bi đỏ. Lấy liên tiếp không hoàn lại 2 viên bi. Xác suất cả 2 viên màu đỏ là:",
    "options": [
      "3/28",
      "9/64",
      "3/8",
      "1/4"
    ],
    "answer": 0,
    "explain": "P(D1) = 3/8, P(D2|D1) = 2/7 => P = (3/8) * (2/7) = 6/56 = 3/28."
  },
  {
    "id": "q_bai-18_08",
    "q": "Nếu A và B xung khắc (AB = ∅) với P(B) > 0 thì P(A|B) bằng:",
    "options": [
      "0",
      "1",
      "P(A)",
      "Không xác định"
    ],
    "answer": 0,
    "explain": "P(AB) = 0 => P(A|B) = 0 / P(B) = 0."
  },
  {
    "id": "q_bai-18_09",
    "q": "Sơ đồ nào thường được sử dụng trực quan để tính xác suất có điều kiện và công thức nhân?",
    "options": [
      "Sơ đồ hình cây (Tree diagram)",
      "Sơ đồ Ven",
      "Biểu đồ cột",
      "Biểu đồ tròn"
    ],
    "answer": 0,
    "explain": "Sơ đồ hình cây là công cụ trực quan rất hiệu quả trong chương trình Toán 12."
  },
  {
    "id": "q_bai-18_10",
    "q": "Khẳng định nào sau đây luôn đúng với hai biến cố A, B bất kỳ có xác suất dương?",
    "options": [
      "P(AB) <= P(A)",
      "P(A|B) >= P(A)",
      "P(AB) = P(A)P(B)",
      "P(A|B) + P(B|A) = 1"
    ],
    "answer": 0,
    "explain": "Tập AB là tập con của A nên P(AB) <= P(A)."
  },
  {
    "id": "q_bai-18_11",
    "q": "Cho hai biến cố A và B độc lập với nhau, P(A) = 0.4 và P(B) = 0.5. Tính xác suất P(AB).",
    "options": [
      "0.2",
      "0.9",
      "0.1",
      "0.8"
    ],
    "answer": 0,
    "explain": "Hai biến cố độc lập nên P(AB) = P(A) * P(B) = 0.4 * 0.5 = 0.2."
  },
  {
    "id": "q_bai-18_12",
    "q": "Cho P(B) = 0.6 và P(A|B) = 0.7. Xác suất P(AB) bằng:",
    "options": [
      "0.42",
      "0.13",
      "0.76",
      "0.85"
    ],
    "answer": 0,
    "explain": "Theo công thức nhân xác suất: P(AB) = P(B) * P(A|B) = 0.6 * 0.7 = 0.42."
  }
];
