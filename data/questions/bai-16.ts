import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-16_01",
    "q": "Góc giữa hai đường thẳng trong không gian có số đo trong khoảng nào?",
    "options": [
      "[0°; 90°]",
      "[0°; 180°]",
      "(0°; 90°)",
      "[0°; 360°]"
    ],
    "answer": 0,
    "explain": "Quy ước góc giữa hai đường thẳng luôn là góc nhọn hoặc góc vuông: 0° <= φ <= 90°."
  },
  {
    "id": "q_bai-16_02",
    "q": "Góc giữa đường thẳng và mặt phẳng tính theo công thức hàm lượng giác nào?",
    "options": [
      "sin φ = |u . n| / (|u| * |n|)",
      "cos φ = |u . n| / (|u| * |n|)",
      "tan φ = u . n",
      "cot φ = |u . n|"
    ],
    "answer": 0,
    "explain": "Góc giữa đường thẳng và mặt phẳng dùng hàm sin (do bù với góc giữa u và n)."
  },
  {
    "id": "q_bai-16_03",
    "q": "Góc giữa hai mặt phẳng vuông góc với nhau bằng:",
    "options": [
      "90°",
      "0°",
      "180°",
      "45°"
    ],
    "answer": 0,
    "explain": "Hai mặt phẳng vuông góc khi góc giữa chúng bằng 90°."
  },
  {
    "id": "q_bai-16_04",
    "q": "Tính cosin góc giữa hai vectơ u1 = (1; 0; 1) và u2 = (0; 1; 1).",
    "options": [
      "1/2",
      "√2/2",
      "√3/2",
      "0"
    ],
    "answer": 0,
    "explain": "cos = (1*0 + 0*1 + 1*1) / (√2 * √2) = 1/2 => góc bằng 60°."
  },
  {
    "id": "q_bai-16_05",
    "q": "Góc giữa trục Ox và mặt phẳng (Oyz) bằng:",
    "options": [
      "90°",
      "0°",
      "45°",
      "60°"
    ],
    "answer": 0,
    "explain": "Trục Ox vuông góc với mp toạ độ (Oyz) nên góc bằng 90°."
  },
  {
    "id": "q_bai-16_06",
    "q": "Nếu u . n = 0 thì góc giữa đường thẳng d và mặt phẳng (P) bằng:",
    "options": [
      "0° (d // (P) hoặc d ⊂ (P))",
      "90°",
      "45°",
      "60°"
    ],
    "answer": 0,
    "explain": "sin φ = 0 => φ = 0°."
  },
  {
    "id": "q_bai-16_07",
    "q": "Góc giữa hai mặt phẳng (P): x + y = 0 và (Q): y + z = 0 là:",
    "options": [
      "60°",
      "45°",
      "90°",
      "30°"
    ],
    "answer": 0,
    "explain": "nP = (1;1;0), nQ = (0;1;1). cos = |0 + 1 + 0| / (√2 * √2) = 1/2 => φ = 60°."
  },
  {
    "id": "q_bai-16_08",
    "q": "Góc giữa đường thẳng d có VTCP u = (1; 1; 0) và mp (Oxy) bằng:",
    "options": [
      "0° (d song song hoặc nằm trong Oxy)",
      "90°",
      "45°",
      "60°"
    ],
    "answer": 0,
    "explain": "n_Oxy = (0; 0; 1). u . n = 0 => sin φ = 0 => φ = 0°."
  },
  {
    "id": "q_bai-16_09",
    "q": "Góc giữa hai đường thẳng d1 có VTCP (1; -1; 0) và d2 có VTCP (1; 1; 2) bằng:",
    "options": [
      "90°",
      "60°",
      "45°",
      "30°"
    ],
    "answer": 0,
    "explain": "u1 . u2 = 1*1 + (-1)*1 + 0*2 = 0 => hai đường thẳng vuông góc (90°)."
  },
  {
    "id": "q_bai-16_10",
    "q": "Công thức cosin góc giữa hai mặt phẳng (P) và (Q) là:",
    "options": [
      "cos φ = |nP . nQ| / (|nP| * |nQ|)",
      "cos φ = (nP . nQ) / (|nP| * |nQ|)",
      "sin φ = |nP . nQ| / (|nP| * |nQ|)",
      "tan φ = |nP . nQ|"
    ],
    "answer": 0,
    "explain": "Cosin góc giữa 2 mặt phẳng bằng trị tuyệt đối tích vô hướng chia tích độ dài 2 VTPT."
  },
  {
    "id": "q_bai-16_11",
    "q": "Tính góc giữa hai mặt phẳng (P): x + y - 2 = 0 và (Q): y + z + 1 = 0.",
    "options": [
      "60 độ",
      "45 độ",
      "30 độ",
      "90 độ"
    ],
    "answer": 0,
    "explain": "n1 = (1; 1; 0), n2 = (0; 1; 1). cos = |1*0 + 1*1 + 0*1| / (sqrt(2)*sqrt(2)) = 1/2 => góc = 60 độ."
  },
  {
    "id": "q_bai-16_12",
    "q": "Tính góc giữa đường thẳng d có VTCP u = (1; 1; 0) và trục Oz.",
    "options": [
      "90 độ",
      "0 độ",
      "45 độ",
      "60 độ"
    ],
    "answer": 0,
    "explain": "VTCP của Oz là k = (0; 0; 1). u . k = 1*0 + 1*0 + 0*1 = 0 => vuông góc (90 độ)."
  }
];
