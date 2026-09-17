import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-19_01",
      "context": "Xét một nhà máy có 2 phân xưởng sản xuất bóng đèn. Phân xưởng I sản xuất 60% sản phẩm với tỉ lệ phế phẩm 2%. Phân xưởng II sản xuất 40% sản phẩm với tỉ lệ phế phẩm 3%. Lấy ngẫu nhiên một bóng đèn.",
      "statements": [
        {
          "text": "Gọi A1 là biến cố bóng lấy từ PX I thì P(A1) = 0.6.",
          "answer": true,
          "explain": "PX I sản xuất 60% sản phẩm."
        },
        {
          "text": "Gọi A2 là biến cố bóng lấy từ PX II thì P(A2) = 0.4.",
          "answer": true,
          "explain": "PX II sản xuất 40% sản phẩm."
        },
        {
          "text": "Xác suất bóng là phế phẩm theo công thức toàn phần là P(B) = 0.6*0.02 + 0.4*0.03 = 0.024.",
          "answer": true,
          "explain": "0.012 + 0.012 = 0.024 (tức 2.4%)."
        },
        {
          "text": "Nếu lấy được bóng hỏng, xác suất nó do PX I sản xuất tính theo Bayes là 0.5.",
          "answer": true,
          "explain": "P(A1|B) = P(A1*B) / P(B) = 0.012 / 0.024 = 0.5."
        }
      ]
    },
    {
      "id": "tf_bai-19_02",
      "context": "Một xét nghiệm y khoa chẩn đoán bệnh X có độ nhạy 95% (người có bệnh xét nghiệm dương tính là 95%) và độ đặc hiệu 90% (người không bệnh xét nghiệm âm tính là 90%). Tỉ lệ mắc bệnh trong cộng đồng là 1%.",
      "statements": [
        {
          "text": "Xác suất người được chọn mắc bệnh là P(B) = 0.01.",
          "answer": true,
          "explain": "Tỉ lệ mắc bệnh 1%."
        },
        {
          "text": "Xác suất người không mắc bệnh là P(B_ngang) = 0.99.",
          "answer": true,
          "explain": "1 - 0.01 = 0.99."
        },
        {
          "text": "Xác suất xét nghiệm dương tính khi không có bệnh là 10% (0.10).",
          "answer": true,
          "explain": "1 - 0.90 = 0.10."
        },
        {
          "text": "Một người có kết quả dương tính thì chắc chắn 100% người đó bị bệnh.",
          "answer": false,
          "explain": "Theo Bayes, xác suất thực sự mắc bệnh khi dương tính chỉ khoảng 8.8% do tỉ lệ người lành giả dương tính lớn."
        }
      ]
    },
    {
      "id": "tf_bai-19_03",
      "context": "Cho hệ biến cố đầy đủ {A1, A2, A3} với P(A1) = 0.2, P(A2) = 0.5, P(A3) = 0.3. Biến cố B thoả mãn P(B|A1) = 0.1, P(B|A2) = 0.2, P(B|A3) = 0.3.",
      "statements": [
        {
          "text": "P(A1) + P(A2) + P(A3) = 1.",
          "answer": true,
          "explain": "0.2 + 0.5 + 0.3 = 1."
        },
        {
          "text": "P(A1)*P(B|A1) = 0.02.",
          "answer": true,
          "explain": "0.2 * 0.1 = 0.02."
        },
        {
          "text": "Xác suất P(B) = 0.02 + 0.10 + 0.09 = 0.21.",
          "answer": true,
          "explain": "Tổng 0.2*0.1 + 0.5*0.2 + 0.3*0.3 = 0.21."
        },
        {
          "text": "Xác suất hậu nghiệm P(A3|B) = 0.09 / 0.21 ≈ 0.43.",
          "answer": true,
          "explain": "Theo công thức Bayes: 0.09 / 0.21 ≈ 0.4286."
        }
      ]
    },
    {
      "id": "tf_bai-19_04",
      "context": "Xét công thức Bayes P(Ai|B) = [P(Ai)*P(B|Ai)] / P(B).",
      "statements": [
        {
          "text": "Các xác suất P(Ai) được gọi là các xác suất tiên nghiệm (trước khi có thông tin B).",
          "answer": true,
          "explain": "Khái niệm xác suất tiên nghiệm (prior probability)."
        },
        {
          "text": "Xác suất P(Ai|B) được gọi là xác suất hậu nghiệm (sau khi đã quan sát thấy B).",
          "answer": true,
          "explain": "Khái niệm xác suất hậu nghiệm (posterior probability)."
        },
        {
          "text": "Mẫu số P(B) được tính thông qua công thức xác suất toàn phần.",
          "answer": true,
          "explain": "P(B) = tổng P(Ai)*P(B|Ai)."
        },
        {
          "text": "Công thức Bayes chỉ áp dụng được khi các biến cố Ai độc lập với nhau.",
          "answer": false,
          "explain": "Công thức áp dụng cho bất kỳ hệ biến cố đầy đủ nào (xung khắc từng đôi và hợp lại là không gian mẫu)."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-19_01",
      "q": "Một lô hàng gồm 70% sản phẩm loại I và 30% sản phẩm loại II. Tỉ lệ phế phẩm của loại I là 1%, loại II là 2%. Tính tỉ lệ phế phẩm chung của lô hàng theo phần trăm (%).",
      "correctAnswer": "1.3",
      "unit": "%",
      "explain": "P = 0.70 * 0.01 + 0.30 * 0.02 = 0.007 + 0.006 = 0.013 = 1.3%."
    },
    {
      "id": "sa_bai-19_02",
      "q": "Cho hệ đầy đủ {A, B} với P(A) = 0.6, P(B) = 0.4. Biết P(C|A) = 0.2 và P(C|B) = 0.5. Tính xác suất P(C).",
      "correctAnswer": "0.32",
      "explain": "P(C) = 0.6*0.2 + 0.4*0.5 = 0.12 + 0.20 = 0.32."
    },
    {
      "id": "sa_bai-19_03",
      "q": "Ở bài toán trên, biết C đã xảy ra, tính xác suất để biến cố A xảy ra P(A|C) (làm tròn 2 chữ số thập phân).",
      "correctAnswer": "0.38",
      "explain": "P(A|C) = P(A)*P(C|A) / P(C) = 0.12 / 0.32 = 0.375 ≈ 0.38."
    },
    {
      "id": "sa_bai-19_04",
      "q": "Một hộp có 3 bi trắng và 2 bi đen. Hộp 2 có 4 bi trắng và 1 bi đen. Chọn ngẫu nhiên 1 hộp rồi rút 1 bi. Tính xác suất rút được bi trắng.",
      "correctAnswer": "0.7",
      "explain": "P = 0.5 * (3/5) + 0.5 * (4/5) = 0.5 * (7/5) = 0.7."
    },
    {
      "id": "sa_bai-19_05",
      "q": "Một thiết bị có 2 linh kiện A và B hoạt động độc lập. Xác suất A hỏng là 0.1, B hỏng là 0.2. Tính xác suất cả 2 linh kiện đều không hỏng.",
      "correctAnswer": "0.72",
      "explain": "P = (1 - 0.1) * (1 - 0.2) = 0.9 * 0.8 = 0.72."
    },
    {
      "id": "sa_bai-19_06",
      "q": "Một bệnh hiếm có tỉ lệ mắc là 0.001. Xét nghiệm có độ chính xác 99% cho cả người bệnh và người lành. Xác suất một người dương tính thực sự mắc bệnh xấp xỉ bằng bao nhiêu (làm tròn 2 chữ số thập phân)?",
      "correctAnswer": "0.09",
      "explain": "P(D) = 0.001*0.99 + 0.999*0.01 ≈ 0.00099 + 0.00999 = 0.01098. P(B|D) = 0.00099 / 0.01098 ≈ 0.09 (9%)."
    }
  ],
  "essay": [
    {
      "id": "es_bai-19",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-19.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
