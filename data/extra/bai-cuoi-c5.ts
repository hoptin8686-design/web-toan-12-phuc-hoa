import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c5_01",
      "context": "Cho mặt phẳng (P): 2x + y - 2z + 4 = 0 và điểm A(1; 2; 3).",
      "statements": [
        {
          "text": "VTPT của (P) là n = (2; 1; -2) có độ dài bằng 3.",
          "answer": true,
          "explain": "sqrt(4 + 1 + 4) = 3."
        },
        {
          "text": "Khoảng cách từ A đến (P) bằng 2/3.",
          "answer": true,
          "explain": "|2(1) + 2 - 2(3) + 4| / 3 = |2 + 2 - 6 + 4| / 3 = 2/3."
        },
        {
          "text": "Đường thẳng đi qua A vuông góc với (P) có phương trình x = 1 + 2t, y = 2 + t, z = 3 - 2t.",
          "answer": true,
          "explain": "Đi qua A và nhận n làm VTCP."
        },
        {
          "text": "Mặt phẳng song song với (P) đi qua O có phương trình 2x + y - 2z = 0.",
          "answer": true,
          "explain": "Cùng VTPT và D = 0 do qua gốc O."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c5_02",
      "context": "Cho mặt cầu (S): x^2 + y^2 + z^2 - 2x - 4y + 4 = 0.",
      "statements": [
        {
          "text": "Tâm của mặt cầu là I(1; 2; 0).",
          "answer": true,
          "explain": "a = 1, b = 2, c = 0."
        },
        {
          "text": "Bán kính của mặt cầu là R = 1.",
          "answer": true,
          "explain": "R = sqrt(1 + 4 + 0 - 4) = 1."
        },
        {
          "text": "Mặt cầu (S) tiếp xúc với mặt phẳng toạ độ (Oxz).",
          "answer": false,
          "explain": "d(I, Oxz) = |y_I| = 2 > R = 1 nên không tiếp xúc."
        },
        {
          "text": "Mặt cầu (S) tiếp xúc với trục Oy.",
          "answer": true,
          "explain": "Hình chiếu lên Oy là (0; 2; 0). Khoảng cách = sqrt(1^2 + 0^2) = 1 = R."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c5_03",
      "context": "Cho đường thẳng d: (x - 1)/1 = (y - 2)/2 = (z + 1)/(-1) và mặt phẳng (P): 2x - y + z + 1 = 0.",
      "statements": [
        {
          "text": "VTCP của d là u = (1; 2; -1) và VTPT của (P) là n = (2; -1; 1).",
          "answer": true,
          "explain": "Hệ số chuẩn."
        },
        {
          "text": "Tích vô hướng u . n = 1*2 + 2*(-1) + (-1)*1 = -1 khác 0.",
          "answer": true,
          "explain": "2 - 2 - 1 = -1."
        },
        {
          "text": "Đường thẳng d cắt mặt phẳng (P).",
          "answer": true,
          "explain": "u . n khác 0 nên d cắt (P)."
        },
        {
          "text": "Đường thẳng d vuông góc với mặt phẳng (P).",
          "answer": false,
          "explain": "u không cùng phương n (1/2 khác 2/(-1))."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c5_04",
      "context": "Trong không gian, một trạm thu phát sóng đặt tại điểm A(2; 3; 5) phủ sóng trong bán kính 10 km.",
      "statements": [
        {
          "text": "Vùng phủ sóng là một khối cầu tâm A bán kính R = 10.",
          "answer": true,
          "explain": "Mô hình hình học không gian."
        },
        {
          "text": "Phương trình mặt cầu ranh giới là (x - 2)^2 + (y - 3)^2 + (z - 5)^2 = 100.",
          "answer": true,
          "explain": "R^2 = 100."
        },
        {
          "text": "Một người ở vị trí B(2; 3; 12) nhận được tín hiệu sóng từ trạm.",
          "answer": true,
          "explain": "AB = |12 - 5| = 7 km < 10 km."
        },
        {
          "text": "Một máy bay bay ở vị trí C(10; 9; 5) không nhận được sóng từ trạm.",
          "answer": false,
          "explain": "AC = sqrt((10-2)^2 + (9-3)^2 + 0^2) = sqrt(64 + 36) = 10 km <= 10 km nên vẫn nhận được sóng."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c5_01",
      "q": "Tính khoảng cách từ điểm M(2; -1; 2) đến mặt phẳng (P): 2x - 2y + z + 3 = 0.",
      "correctAnswer": "3.67",
      "explain": "d = |2(2) - 2(-1) + 2 + 3| / sqrt(4 + 4 + 1) = |4 + 2 + 2 + 3| / 3 = 11 / 3 ≈ 3.67."
    },
    {
      "id": "sa_bai-cuoi-c5_02",
      "q": "Tìm bán kính R của mặt cầu (S): (x - 1)^2 + (y + 1)^2 + z^2 = 49.",
      "correctAnswer": "7",
      "explain": "R = sqrt(49) = 7."
    },
    {
      "id": "sa_bai-cuoi-c5_03",
      "q": "Tìm cao độ z của giao điểm của đường thẳng d: x = 1, y = 2, z = t với mặt phẳng (P): x + y + z - 6 = 0.",
      "correctAnswer": "3",
      "explain": "1 + 2 + t - 6 = 0 <=> t = 3 => z = 3."
    },
    {
      "id": "sa_bai-cuoi-c5_04",
      "q": "Tính khoảng cách giữa hai mặt phẳng song song (P): 2x - y + 2z - 1 = 0 và (Q): 2x - y + 2z + 8 = 0.",
      "correctAnswer": "3",
      "explain": "d = |8 - (-1)| / sqrt(4 + 1 + 4) = 9 / 3 = 3."
    },
    {
      "id": "sa_bai-cuoi-c5_05",
      "q": "Mặt cầu (S) tiếp xúc với cả 3 mặt phẳng toạ độ có tâm I(3; 3; 3). Bán kính của mặt cầu bằng bao nhiêu?",
      "correctAnswer": "3",
      "explain": "R = d(I, Oxy) = 3."
    },
    {
      "id": "sa_bai-cuoi-c5_06",
      "q": "Tìm m để hai mặt phẳng (P): mx + y - z + 2 = 0 và (Q): 2x - 3y + z = 0 vuông góc với nhau.",
      "correctAnswer": "2",
      "explain": "n1.n2 = 2m - 3 - 1 = 0 <=> 2m = 4 <=> m = 2."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c5",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c5.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
