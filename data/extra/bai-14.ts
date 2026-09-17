import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-14_01",
      "context": "Trong không gian Oxyz, cho mặt phẳng (P): 2x - y + 2z - 6 = 0.",
      "statements": [
        {
          "text": "Một vectơ pháp tuyến của (P) là vecto(n) = (2; -1; 2).",
          "answer": true,
          "explain": "Hệ số của x, y, z trong phương trình tổng quát."
        },
        {
          "text": "Điểm M(1; 2; 3) thuộc mặt phẳng (P).",
          "answer": true,
          "explain": "Thay toạ độ M: 2(1) - 2 + 2(3) - 6 = 2 - 2 + 6 - 6 = 0."
        },
        {
          "text": "Mặt phẳng (P) đi qua gốc toạ độ O(0; 0; 0).",
          "answer": false,
          "explain": "Hệ số tự do D = -6 khác 0 nên không đi qua gốc O."
        },
        {
          "text": "Khoảng cách từ gốc toạ độ O đến (P) bằng 2.",
          "answer": true,
          "explain": "d(O, P) = |-6| / sqrt(4 + 1 + 4) = 6 / 3 = 2."
        }
      ]
    },
    {
      "id": "tf_bai-14_02",
      "context": "Cho ba điểm A(2; 0; 0), B(0; -3; 0), C(0; 0; 4).",
      "statements": [
        {
          "text": "Phương trình mặt phẳng (ABC) theo đoạn chắn là x/2 + y/(-3) + z/4 = 1.",
          "answer": true,
          "explain": "Phương trình mặt phẳng theo đoạn chắn chuẩn."
        },
        {
          "text": "Quy đồng phương trình đoạn chắn ta được: 6x - 4y + 3z - 12 = 0.",
          "answer": true,
          "explain": "Nhân hai vế với 12: 6x - 4y + 3z = 12 <=> 6x - 4y + 3z - 12 = 0."
        },
        {
          "text": "Một vectơ pháp tuyến của mặt phẳng (ABC) là vecto(n) = (6; -4; 3).",
          "answer": true,
          "explain": "Lấy hệ số của phương trình tổng quát."
        },
        {
          "text": "Mặt phẳng (ABC) song song với trục Oz.",
          "answer": false,
          "explain": "Mặt phẳng cắt trục Oz tại C(0; 0; 4) nên không song song với Oz."
        }
      ]
    },
    {
      "id": "tf_bai-14_03",
      "context": "Xét vị trí tương đối của hai mặt phẳng (P): 2x - y + 3z - 1 = 0 và (Q): 4x - 2y + 6z + 5 = 0.",
      "statements": [
        {
          "text": "Vectơ pháp tuyến của (P) là n1 = (2; -1; 3) và của (Q) là n2 = (4; -2; 6).",
          "answer": true,
          "explain": "Toạ độ hai VTPT."
        },
        {
          "text": "Ta có n2 = 2*n1 nên hai vectơ pháp tuyến cùng phương.",
          "answer": true,
          "explain": "4/2 = -2/(-1) = 6/3 = 2."
        },
        {
          "text": "Hai mặt phẳng (P) và (Q) song song với nhau.",
          "answer": true,
          "explain": "Do VTPT cùng phương và tỉ số hệ số tự do 5/(-1) ≠ 2."
        },
        {
          "text": "Khoảng cách giữa hai mặt phẳng (P) và (Q) bằng 0.",
          "answer": false,
          "explain": "Hai mặt phẳng song song nên khoảng cách lớn hơn 0."
        }
      ]
    },
    {
      "id": "tf_bai-14_04",
      "context": "Cho hai điểm A(1; 2; 3) và B(3; 4; 1). Gọi (alpha) là mặt phẳng trung trực của đoạn thẳng AB.",
      "statements": [
        {
          "text": "Trung điểm M của đoạn AB có toạ độ (2; 3; 2).",
          "answer": true,
          "explain": "M = ((1+3)/2; (2+4)/2; (3+1)/2) = (2; 3; 2)."
        },
        {
          "text": "Vectơ vecto(AB) = (2; 2; -2) là một vectơ pháp tuyến của (alpha).",
          "answer": true,
          "explain": "Mặt phẳng trung trực vuông góc với đoạn AB."
        },
        {
          "text": "Phương trình của (alpha) là x + y - z - 3 = 0.",
          "answer": true,
          "explain": "2(x - 2) + 2(y - 3) - 2(z - 2) = 0 <=> x + y - z - 3 = 0."
        },
        {
          "text": "Điểm O(0; 0; 0) thuộc mặt phẳng (alpha).",
          "answer": false,
          "explain": "Thay O: 0 + 0 - 0 - 3 = -3 khác 0."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-14_01",
      "q": "Tính khoảng cách từ điểm M(1; 0; 2) đến mặt phẳng (P): 2x - y + 2z + 3 = 0.",
      "correctAnswer": "3",
      "explain": "d = |2(1) - 0 + 2(2) + 3| / sqrt(4 + 1 + 4) = |2 + 4 + 3| / 3 = 9 / 3 = 3."
    },
    {
      "id": "sa_bai-14_02",
      "q": "Mặt phẳng (P): ax + 2y - z + 4 = 0 đi qua điểm A(1; -1; 2). Tìm giá trị của a.",
      "correctAnswer": "0",
      "explain": "a(1) + 2(-1) - 2 + 4 = 0 <=> a - 2 - 2 + 4 = 0 <=> a = 0."
    },
    {
      "id": "sa_bai-14_03",
      "q": "Tìm hệ số D để mặt phẳng (P): 2x - 3y + 6z + D = 0 cách gốc toạ độ O một khoảng bằng 2 (biết D > 0).",
      "correctAnswer": "14",
      "explain": "d = |D| / sqrt(4 + 9 + 36) = D / 7 = 2 => D = 14."
    },
    {
      "id": "sa_bai-14_04",
      "q": "Mặt phẳng đi qua 3 điểm A(3; 0; 0), B(0; 2; 0), C(0; 0; 6) có phương trình 2x + by + cz - 6 = 0. Tính b + c.",
      "correctAnswer": "4",
      "explain": "x/3 + y/2 + z/6 = 1 <=> 2x + 3y + z - 6 = 0 => b = 3, c = 1 => b + c = 4."
    },
    {
      "id": "sa_bai-14_05",
      "q": "Tính khoảng cách giữa hai mặt phẳng song song (P): x + 2y - 2z + 1 = 0 và (Q): x + 2y - 2z + 7 = 0.",
      "correctAnswer": "2",
      "explain": "d = |7 - 1| / sqrt(1 + 4 + 4) = 6 / 3 = 2."
    },
    {
      "id": "sa_bai-14_06",
      "q": "Cho hai mặt phẳng (P): 2x - my + z - 1 = 0 và (Q): x + 2y - 2z + 3 = 0 vuông góc với nhau. Tìm giá trị của m.",
      "correctAnswer": "0",
      "explain": "n1.n2 = 2*1 + (-m)*2 + 1*(-2) = 2 - 2m - 2 = -2m = 0 <=> m = 0."
    }
  ],
  "essay": [
    {
      "id": "es_bai-14",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-14.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
