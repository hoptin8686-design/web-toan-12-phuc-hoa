import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-19_01",
    "q": "Công thức xác suất toàn phần cho hệ 2 biến cố đầy đủ B và B̄ là:",
    "options": [
      "P(A) = P(B)P(A|B) + P(B̄)P(A|B̄)",
      "P(A) = P(B) + P(B̄)",
      "P(A) = P(A|B) + P(A|B̄)",
      "P(A) = P(AB) + P(B)"
    ],
    "answer": 0,
    "explain": "P(A) = P(B)P(A|B) + P(B̄)P(A|B̄)."
  },
  {
    "id": "q_bai-19_02",
    "q": "Công thức Bayes dùng để tính:",
    "options": [
      "Xác suất hậu nghiệm P(B|A) khi đã biết A xảy ra",
      "Xác suất tiên nghiệm",
      "Kỳ vọng toán học",
      "Phương sai"
    ],
    "answer": 0,
    "explain": "Công thức Bayes cập nhật xác suất nguyên nhân B khi đã biết kết quả A xảy ra."
  },
  {
    "id": "q_bai-19_03",
    "q": "Một nhà máy có 2 phân xưởng I và II sản xuất lần lượt 60% và 40% tổng sản phẩm. Tỷ lệ phế phẩm của I và II lần lượt là 2% và 3%. Chọn ngẫu nhiên 1 sản phẩm, xác suất để sản phẩm đó là phế phẩm là:",
    "options": [
      "2.4%",
      "2.5%",
      "5%",
      "1.2%"
    ],
    "answer": 0,
    "explain": "P = 0.6 * 0.02 + 0.4 * 0.03 = 0.012 + 0.012 = 0.024 = 2.4%."
  },
  {
    "id": "q_bai-19_04",
    "q": "Tỷ lệ người mắc bệnh trong dân số là 1%. Xét nghiệm chẩn đoán chính xác 95% với người có bệnh và dương tính giả 2% với người không bệnh. Xác suất một người có kết quả xét nghiệm dương tính là:",
    "options": [
      "2.93%",
      "1%",
      "5%",
      "95%"
    ],
    "answer": 0,
    "explain": "P(D) = 0.01 * 0.95 + 0.99 * 0.02 = 0.0095 + 0.0198 = 0.0293 = 2.93%."
  },
  {
    "id": "q_bai-19_05",
    "q": "Hệ biến cố {B1, B2, ..., Bn} được gọi là hệ đầy đủ nếu:",
    "options": [
      "Các biến cố đôi một xung khắc và hợp của chúng là biến cố chắc chắn Ω",
      "Tất cả có xác suất bằng nhau",
      "Chúng độc lập đôi một",
      "Tổng xác suất lớn hơn 1"
    ],
    "answer": 0,
    "explain": "Định nghĩa hệ đầy đủ: đôi một xung khắc và B1 ∪ B2 ∪ ... ∪ Bn = Ω."
  },
  {
    "id": "q_bai-19_06",
    "q": "Biết P(B) = 0.4 => P(B̄) bằng:",
    "options": [
      "0.6",
      "0.4",
      "1",
      "0"
    ],
    "answer": 0,
    "explain": "P(B̄) = 1 - P(B) = 1 - 0.4 = 0.6."
  },
  {
    "id": "q_bai-19_07",
    "q": "Trong công thức Bayes, P(B) được gọi là:",
    "options": [
      "Xác suất tiên nghiệm (prior probability)",
      "Xác suất hậu nghiệm",
      "Độ tin cậy",
      "Xác suất biên duyên"
    ],
    "answer": 0,
    "explain": "P(B) là xác suất tiên nghiệm trước khi có thêm dữ kiện A."
  },
  {
    "id": "q_bai-19_08",
    "q": "Công thức Bayes là nền tảng toán học của thuật toán phân loại nào trong Machine Learning / AI?",
    "options": [
      "Thuật toán Naive Bayes",
      "K-Means",
      "Cây quyết định Decision Tree",
      "Hồi quy tuyến tính"
    ],
    "answer": 0,
    "explain": "Thuật toán Phân loại Naive Bayes được ứng dụng rộng rãi lọc spam và AI chẩn đoán."
  },
  {
    "id": "q_bai-19_09",
    "q": "Cho P(B1) = 0.7, P(B2) = 0.3. P(A|B1) = 0.1, P(A|B2) = 0.2. Tính P(A).",
    "options": [
      "0.13",
      "0.15",
      "0.30",
      "0.07"
    ],
    "answer": 0,
    "explain": "P(A) = 0.7 * 0.1 + 0.3 * 0.2 = 0.07 + 0.06 = 0.13."
  },
  {
    "id": "q_bai-19_10",
    "q": "Biết A xảy ra trong bài toán trên, xác suất A xuất phát từ nhóm B1 là P(B1|A) bằng:",
    "options": [
      "7/13",
      "6/13",
      "0.7",
      "0.1"
    ],
    "answer": 0,
    "explain": "P(B1|A) = (0.7 * 0.1) / 0.13 = 0.07 / 0.13 = 7/13."
  },
  {
    "id": "q_bai-19_11",
    "q": "Hệ hai biến cố {A, \\overline{A}} có tính chất nào sau đây?",
    "options": [
      "Là một hệ biến cố đầy đủ",
      "Hai biến cố độc lập",
      "Hai biến cố bằng nhau",
      "Có tích P(A)*P(\\overline{A}) = 1"
    ],
    "answer": 0,
    "explain": "A và A đối xung khắc nhau và hợp thành không gian mẫu nên tạo thành một hệ biến cố đầy đủ."
  },
  {
    "id": "q_bai-19_12",
    "q": "Công thức xác suất toàn phần với hệ đầy đủ {A1, A2} là:",
    "options": [
      "P(B) = P(A1)*P(B|A1) + P(A2)*P(B|A2)",
      "P(B) = P(A1)*P(A2)",
      "P(B) = P(B|A1) + P(B|A2)",
      "P(B) = P(A1)*P(B) + P(A2)*P(B)"
    ],
    "answer": 0,
    "explain": "Công thức xác suất toàn phần chuẩn trong SGK Toán 12."
  }
];
