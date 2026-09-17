import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-18_01",
      "context": "Xét hai biến cố A và B trong một phép thử ngẫu nhiên với P(B) > 0.",
      "statements": [
        {
          "text": "Xác suất của biến cố A với điều kiện B đã xảy ra là P(A|B) = P(AB) / P(B).",
          "answer": true,
          "explain": "Định nghĩa chuẩn của xác suất có điều kiện."
        },
        {
          "text": "Xác suất P(A|B) luôn thoả mãn 0 <= P(A|B) <= 1.",
          "answer": true,
          "explain": "Tính chất cơ bản của xác suất."
        },
        {
          "text": "Nếu A và B xung khắc (AB = rỗng) thì P(A|B) = 0.",
          "answer": true,
          "explain": "P(AB) = 0 nên P(A|B) = 0."
        },
        {
          "text": "P(A|B) luôn bằng P(B|A).",
          "answer": false,
          "explain": "P(A|B) và P(B|A) thường khác nhau (trừ khi P(A) = P(B))."
        }
      ]
    },
    {
      "id": "tf_bai-18_02",
      "context": "Gieo một con xúc xắc cân đối và đồng chất. Gọi A là biến cố 'xuất hiện mặt chẵn', B là biến cố 'xuất hiện mặt có số chấm lớn hơn 3'.",
      "statements": [
        {
          "text": "Không gian mẫu có 6 phần tử Omega = {1, 2, 3, 4, 5, 6}.",
          "answer": true,
          "explain": "6 mặt của xúc xắc."
        },
        {
          "text": "Biến cố A = {2, 4, 6} có P(A) = 1/2.",
          "answer": true,
          "explain": "3 / 6 = 1/2."
        },
        {
          "text": "Biến cố B = {4, 5, 6} có P(B) = 1/2.",
          "answer": true,
          "explain": "3 / 6 = 1/2."
        },
        {
          "text": "Xác suất có điều kiện P(A|B) = 2/3.",
          "answer": true,
          "explain": "AB = {4, 6} (2 phần tử). P(A|B) = P(AB)/P(B) = (2/6) / (3/6) = 2/3."
        }
      ]
    },
    {
      "id": "tf_bai-18_03",
      "context": "Một hộp có 10 tấm thẻ cùng loại được đánh số từ 1 đến 10. Rút ngẫu nhiên một tấm thẻ. Gọi A: 'Rút được số nguyên tố', B: 'Rút được số lẻ'.",
      "statements": [
        {
          "text": "Biến cố A gồm các số {2, 3, 5, 7} nên P(A) = 4/10 = 0.4.",
          "answer": true,
          "explain": "Các số nguyên tố từ 1 đến 10."
        },
        {
          "text": "Biến cố B gồm các số {1, 3, 5, 7, 9} nên P(B) = 5/10 = 0.5.",
          "answer": true,
          "explain": "5 số lẻ trong 10 số."
        },
        {
          "text": "Biến cố giao AB gồm các số {3, 5, 7} nên P(AB) = 3/10 = 0.3.",
          "answer": true,
          "explain": "Số vừa lẻ vừa nguyên tố."
        },
        {
          "text": "Xác suất P(A|B) bằng 0.75.",
          "answer": false,
          "explain": "P(A|B) = P(AB)/P(B) = 0.3 / 0.5 = 0.6 khác 0.75."
        }
      ]
    },
    {
      "id": "tf_bai-18_04",
      "context": "Một trường THPT có 60% học sinh đi học bằng xe đạp và 40% đi bộ. Trong số học sinh đi xe đạp có 5% đến muộn; trong số học sinh đi bộ có 10% đến muộn.",
      "statements": [
        {
          "text": "Gọi D là biến cố đi xe đạp, B là đi bộ thì {D, B} là một hệ biến cố đầy đủ.",
          "answer": true,
          "explain": "Mỗi học sinh thuộc một trong hai nhóm và P(D) + P(B) = 1."
        },
        {
          "text": "P(M|D) = 0.05 và P(M|B) = 0.10 với M là biến cố đến muộn.",
          "answer": true,
          "explain": "Theo giả thiết bài toán."
        },
        {
          "text": "Xác suất một học sinh vừa đi xe đạp vừa đến muộn là P(DM) = 0.03.",
          "answer": true,
          "explain": "P(DM) = P(D) * P(M|D) = 0.60 * 0.05 = 0.03."
        },
        {
          "text": "Xác suất một học sinh vừa đi bộ vừa đến muộn là P(BM) = 0.06.",
          "answer": false,
          "explain": "P(BM) = P(B) * P(M|B) = 0.40 * 0.10 = 0.04 khác 0.06."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-18_01",
      "q": "Cho P(A) = 0.5, P(B) = 0.4 và P(AB) = 0.2. Tính xác suất P(A|B).",
      "correctAnswer": "0.5",
      "explain": "P(A|B) = P(AB) / P(B) = 0.2 / 0.4 = 0.5."
    },
    {
      "id": "sa_bai-18_02",
      "q": "Cho P(A) = 0.6, P(B) = 0.3 và A, B là hai biến cố độc lập. Tính P(B|A).",
      "correctAnswer": "0.3",
      "explain": "Khi A và B độc lập thì P(B|A) = P(B) = 0.3."
    },
    {
      "id": "sa_bai-18_03",
      "q": "Gieo đồng tiền cân đối 2 lần. Tính xác suất để lần thứ hai xuất hiện mặt ngửa biết lần thứ nhất đã xuất hiện mặt ngửa.",
      "correctAnswer": "0.5",
      "explain": "Hai lần gieo độc lập nên xác suất lần 2 ngửa vẫn là 1/2 = 0.5."
    },
    {
      "id": "sa_bai-18_04",
      "q": "Một hộp có 4 viên bi đỏ và 6 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại. Tính xác suất để viên thứ hai màu đỏ biết viên thứ nhất màu đỏ.",
      "correctAnswer": "0.33",
      "explain": "Sau khi lấy 1 viên đỏ, trong hộp còn 3 đỏ và 6 xanh (tổng 9 viên). P = 3/9 = 1/3 ≈ 0.33."
    },
    {
      "id": "sa_bai-18_05",
      "q": "Cho P(B) = 0.8 và P(AB) = 0.56. Tính P(A|B).",
      "correctAnswer": "0.7",
      "explain": "P(A|B) = 0.56 / 0.8 = 0.7."
    },
    {
      "id": "sa_bai-18_06",
      "q": "Một lớp có 40 học sinh gồm 25 nam và 15 nữ. Chọn ngẫu nhiên 1 bạn làm lớp trưởng. Biết bạn được chọn là nam, tính xác suất để bạn đó giỏi Toán (biết có 10 nam giỏi Toán).",
      "correctAnswer": "0.4",
      "explain": "P = 10 / 25 = 0.4."
    }
  ],
  "essay": [
    {
      "id": "es_bai-18",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-18.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
