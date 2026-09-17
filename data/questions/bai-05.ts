import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-05_01",
    "q": "Một doanh nghiệp sản xuất x sản phẩm với hàm chi phí C(x) = 0.01x^2 + 20x + 500. Chi phí biên tại mức sản xuất 100 sản phẩm là:",
    "options": [
      "22",
      "20",
      "200",
      "522"
    ],
    "answer": 0,
    "explain": "Chi phí biên C'(x) = 0.02x + 20. Tại x = 100: C'(100) = 2 + 20 = 22."
  },
  {
    "id": "q_bai-05_02",
    "q": "Một hộp kim loại hình hộp chữ nhật đáy vuông không nắp thể tích V = 4 m³. Để tốn ít vật liệu nhất (diện tích toàn phần min), cạnh đáy x bằng:",
    "options": [
      "2 m",
      "1 m",
      "4 m",
      "1.5 m"
    ],
    "answer": 0,
    "explain": "V = x^2 * h = 4 => h = 4/x^2. S(x) = x^2 + 4xh = x^2 + 16/x. S'(x) = 2x - 16/x^2 = 0 <=> x^3 = 8 <=> x = 2 m."
  },
  {
    "id": "q_bai-05_03",
    "q": "Vận tốc của vật chuyển động thẳng s(t) = -t^3 + 6t^2 + 2 đạt giá trị lớn nhất tại thời điểm:",
    "options": [
      "t = 2 s",
      "t = 4 s",
      "t = 3 s",
      "t = 1 s"
    ],
    "answer": 0,
    "explain": "v(t) = s'(t) = -3t^2 + 12t. v'(t) = -6t + 12 = 0 <=> t = 2 s."
  },
  {
    "id": "q_bai-05_04",
    "q": "Một bác nông dân dùng 100 m lưới rào một mảnh vườn hình chữ nhật. Diện tích lớn nhất của vườn là:",
    "options": [
      "625 m²",
      "500 m²",
      "1000 m²",
      "250 m²"
    ],
    "answer": 0,
    "explain": "Chu vi 100 => nửa chu vi 50 => max khi hình vuông cạnh 25 m => S = 625 m²."
  },
  {
    "id": "q_bai-05_05",
    "q": "Hàm cầu p = 120 - 2x. Doanh thu R(x) = x * p = 120x - 2x^2 đạt cực đại khi x bằng:",
    "options": [
      "30",
      "60",
      "40",
      "20"
    ],
    "answer": 0,
    "explain": "R'(x) = 120 - 4x = 0 <=> x = 30."
  },
  {
    "id": "q_bai-05_06",
    "q": "Một công ty bán sản phẩm với giá p = 100 - x (USD). Doanh thu biên tại x = 20 là:",
    "options": [
      "60",
      "80",
      "40",
      "100"
    ],
    "answer": 0,
    "explain": "R(x) = 100x - x^2 => R'(x) = 100 - 2x. R'(20) = 60."
  },
  {
    "id": "q_bai-05_07",
    "q": "Chi phí trung bình AC(x) = C(x)/x. AC đạt cực tiểu khi:",
    "options": [
      "C'(x) = AC(x)",
      "C'(x) = 0",
      "C(x) = 0",
      "AC'(x) > 0"
    ],
    "answer": 0,
    "explain": "Đạo hàm AC'(x) = [C'(x)*x - C(x)]/x^2 = 0 <=> C'(x) = C(x)/x = AC(x)."
  },
  {
    "id": "q_bai-05_08",
    "q": "Bác An muốn uốn một sợi dây thép dài 48 cm thành một tam giác cân có diện tích lớn nhất. Khi đó tam giác là:",
    "options": [
      "Tam giác đều cạnh 16 cm",
      "Tam giác vuông cân",
      "Tam giác có cạnh đáy 24 cm",
      "Tam giác có góc 120°"
    ],
    "answer": 0,
    "explain": "Trong các tam giác cùng chu vi, tam giác đều có diện tích lớn nhất => 48/3 = 16 cm."
  },
  {
    "id": "q_bai-05_09",
    "q": "Một hạt chuyển động với gia tốc a(t) = 6t - 2. Biết v(0) = 3. Vận tốc tại t = 2 là:",
    "options": [
      "11",
      "15",
      "8",
      "10"
    ],
    "answer": 0,
    "explain": "v(t) = 3t^2 - 2t + 3. v(2) = 3(4) - 4 + 3 = 11."
  },
  {
    "id": "q_bai-05_10",
    "q": "Lợi nhuận biên là đạo hàm của:",
    "options": [
      "Hàm lợi nhuận P(x)",
      "Hàm doanh thu",
      "Hàm chi phí",
      "Hàm giá cả"
    ],
    "answer": 0,
    "explain": "Lợi nhuận biên là đạo hàm P'(x) của hàm lợi nhuận P(x)."
  },
  {
    "id": "q_bai-05_11",
    "q": "Một doanh nghiệp sản xuất x sản phẩm với hàm tổng chi phí C(x) = 0.01x^3 - 3x^2 + 400x + 5000. Chi phí biên tại mức sản lượng x = 100 bằng:",
    "options": [
      "100",
      "200",
      "300",
      "400"
    ],
    "answer": 0,
    "explain": "Chi phí biên C'(x) = 0.03x^2 - 6x + 400. Tại x = 100: C'(100) = 0.03(10000) - 6(100) + 400 = 300 - 600 + 400 = 100."
  },
  {
    "id": "q_bai-05_12",
    "q": "Một chất điểm chuyển động theo quy luật s(t) = -t^3 + 6t^2 + 2 (t tính bằng giây, s tính bằng mét). Vận tốc lớn nhất của chất điểm đạt được là:",
    "options": [
      "12 m/s",
      "6 m/s",
      "18 m/s",
      "24 m/s"
    ],
    "answer": 0,
    "explain": "v(t) = s'(t) = -3t^2 + 12t = -3(t - 2)^2 + 12 <= 12 m/s tại t = 2s."
  }
];
