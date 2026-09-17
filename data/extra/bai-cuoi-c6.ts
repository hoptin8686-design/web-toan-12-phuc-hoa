import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c6_01",
      "context": "Xét các tính chất cơ bản của xác suất có điều kiện và độc lập.",
      "statements": [
        {
          "text": "P(A|B) = P(AB) / P(B) với điều kiện P(B) > 0.",
          "answer": true,
          "explain": "Công thức xác suất có điều kiện."
        },
        {
          "text": "Nếu A và B độc lập thì P(A|B) = P(A).",
          "answer": true,
          "explain": "Điều kiện cần và đủ của tính độc lập."
        },
        {
          "text": "Nếu A và B độc lập thì P(AB) = P(A) * P(B).",
          "answer": true,
          "explain": "Quy tắc nhân cho hai biến cố độc lập."
        },
        {
          "text": "Hai biến cố xung khắc có xác suất dương thì luôn độc lập với nhau.",
          "answer": false,
          "explain": "Hai biến cố xung khắc P(AB) = 0 ≠ P(A)*P(B) nên KHÔNG BAO GIỜ độc lập."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c6_02",
      "context": "Một công ty bảo hiểm thấy rằng 20% khách hàng thuộc nhóm nguy cơ cao (xác suất xảy ra tai nạn trong năm là 0.1) và 80% thuộc nhóm nguy cơ thấp (xác suất tai nạn trong năm là 0.02).",
      "statements": [
        {
          "text": "Xác suất một khách hàng ngẫu nhiên bị tai nạn trong năm là P(T) = 0.2*0.1 + 0.8*0.02 = 0.036.",
          "answer": true,
          "explain": "0.02 + 0.016 = 0.036 (3.6%)."
        },
        {
          "text": "Biết một khách hàng vừa gặp tai nạn, xác suất người này thuộc nhóm nguy cơ cao là 0.02 / 0.036 ≈ 55.6%.",
          "answer": true,
          "explain": "Theo Bayes: 0.02 / 0.036 ≈ 0.5556."
        },
        {
          "text": "Số vụ tai nạn xuất phát từ nhóm nguy cơ thấp nhiều hơn nhóm nguy cơ cao.",
          "answer": false,
          "explain": "0.016 (nguy cơ thấp) < 0.020 (nguy cơ cao)."
        },
        {
          "text": "Nếu một người không bị tai nạn thì chắc chắn người đó thuộc nhóm nguy cơ thấp.",
          "answer": false,
          "explain": "Người nhóm nguy cơ cao vẫn có 90% không bị tai nạn."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c6_03",
      "context": "Có hai hộp bi: Hộp 1 chứa 3 bi đỏ và 7 bi trắng; Hộp 2 chứa 6 bi đỏ và 4 bi trắng. Tung đồng xu cân đối: nếu ngửa chọn Hộp 1, nếu sấp chọn Hộp 2, sau đó lấy 1 viên bi.",
      "statements": [
        {
          "text": "Xác suất chọn mỗi hộp là 1/2.",
          "answer": true,
          "explain": "Đồng xu cân đối."
        },
        {
          "text": "Xác suất lấy được bi đỏ nếu chọn Hộp 1 là 3/10 = 0.3.",
          "answer": true,
          "explain": "3 đỏ trên tổng 10 viên."
        },
        {
          "text": "Xác suất lấy được bi đỏ chung là P(Đỏ) = 0.5*0.3 + 0.5*0.6 = 0.45.",
          "answer": true,
          "explain": "0.15 + 0.30 = 0.45."
        },
        {
          "text": "Biết lấy được bi đỏ, xác suất bi đó đến từ Hộp 2 là 2/3.",
          "answer": true,
          "explain": "P(H2|Đỏ) = (0.5 * 0.6) / 0.45 = 0.30 / 0.45 = 2/3 ≈ 0.67."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c6_04",
      "context": "Một hệ thống máy tính có bộ phận phát hiện thư rác (spam). 80% email là thư rác, 20% là thư thường. Bộ lọc gắn nhãn đúng thư rác với xác suất 95% và nhầm thư thường thành rác với xác suất 5%.",
      "statements": [
        {
          "text": "Tỉ lệ thư rác là P(S) = 0.8; thư thường P(L) = 0.2.",
          "answer": true,
          "explain": "Theo giả thiết."
        },
        {
          "text": "Tỉ lệ một bức thư bất kỳ bị gắn nhãn rác là 0.8*0.95 + 0.2*0.05 = 0.77.",
          "answer": true,
          "explain": "0.76 + 0.01 = 0.77."
        },
        {
          "text": "Nếu một thư bị gắn nhãn rác, xác suất nó thực sự là thư rác bằng 0.76 / 0.77 ≈ 98.7%.",
          "answer": true,
          "explain": "Theo Bayes: 0.76 / 0.77 ≈ 0.987."
        },
        {
          "text": "Xác suất một bức thư thường bị phân loại nhầm là 20%.",
          "answer": false,
          "explain": "Xác suất nhầm thư thường thành rác chỉ là 5% (0.05)."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c6_01",
      "q": "Cho hai biến cố độc lập A và B có P(A) = 0.4 và P(B) = 0.5. Tính xác suất P(AB).",
      "correctAnswer": "0.2",
      "explain": "0.4 * 0.5 = 0.2."
    },
    {
      "id": "sa_bai-cuoi-c6_02",
      "q": "Cho P(A) = 0.6 và P(AB) = 0.18. Tính P(B|A).",
      "correctAnswer": "0.3",
      "explain": "P(B|A) = 0.18 / 0.6 = 0.3."
    },
    {
      "id": "sa_bai-cuoi-c6_03",
      "q": "Hai người cùng bắn vào 1 mục tiêu độc lập với xác suất trúng là 0.7 và 0.8. Tính xác suất để cả 2 cùng bắn trúng.",
      "correctAnswer": "0.56",
      "explain": "0.7 * 0.8 = 0.56."
    },
    {
      "id": "sa_bai-cuoi-c6_04",
      "q": "Một hệ đầy đủ gồm {A, B} với P(A) = 0.3, P(B) = 0.7. Biết P(D|A) = 0.1 và P(D|B) = 0.2. Tính xác suất P(D).",
      "correctAnswer": "0.17",
      "explain": "0.3*0.1 + 0.7*0.2 = 0.03 + 0.14 = 0.17."
    },
    {
      "id": "sa_bai-cuoi-c6_05",
      "q": "Tung đồng xu cân đối 3 lần. Tính xác suất cả 3 lần đều xuất hiện mặt sấp (nhập dạng số thập phân).",
      "correctAnswer": "0.125",
      "explain": "(1/2)^3 = 1/8 = 0.125."
    },
    {
      "id": "sa_bai-cuoi-c6_06",
      "q": "Cho P(A) = 0.5, P(B) = 0.3 và P(A U B) = 0.7. Tính xác suất P(AB).",
      "correctAnswer": "0.1",
      "explain": "P(AB) = P(A) + P(B) - P(A U B) = 0.5 + 0.3 - 0.7 = 0.1."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c6",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c6.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
