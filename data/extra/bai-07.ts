import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-07_01",
      "context": "Trong không gian Oxyz, cho điểm A(3; -2; 4).",
      "statements": [
        {
          "text": "Hình chiếu của A trên trục Ox là điểm A1(3; 0; 0).",
          "answer": true,
          "explain": "Chiếu lên Ox cho y = 0, z = 0."
        },
        {
          "text": "Hình chiếu của A trên mặt phẳng (Oyz) là điểm A2(0; -2; 4).",
          "answer": true,
          "explain": "Chiếu lên (Oyz) cho x = 0."
        },
        {
          "text": "Khoảng cách từ A đến mặt phẳng (Oxy) bằng 4.",
          "answer": true,
          "explain": "d(A, Oxy) = |z_A| = |4| = 4."
        },
        {
          "text": "Khoảng cách từ A đến gốc toạ độ O bằng 5.",
          "answer": false,
          "explain": "OA = sqrt(3^2 + (-2)^2 + 4^2) = sqrt(9 + 4 + 16) = sqrt(29) khác 5."
        }
      ]
    },
    {
      "id": "tf_bai-07_02",
      "context": "Cho hai điểm A(1; 2; 3) và B(3; 0; -1).",
      "statements": [
        {
          "text": "Vectơ vecto(AB) có toạ độ là (2; -2; -4).",
          "answer": true,
          "explain": "vecto(AB) = (3-1; 0-2; -1-3) = (2; -2; -4)."
        },
        {
          "text": "Trung điểm M của đoạn thẳng AB có toạ độ (2; 1; 1).",
          "answer": true,
          "explain": "M = ((1+3)/2; (2+0)/2; (3-1)/2) = (2; 1; 1)."
        },
        {
          "text": "Độ dài đoạn thẳng AB bằng 2*sqrt(6).",
          "answer": true,
          "explain": "AB = sqrt(2^2 + (-2)^2 + (-4)^2) = sqrt(4 + 4 + 16) = sqrt(24) = 2*sqrt(6)."
        },
        {
          "text": "Điểm B nằm trên mặt phẳng toạ độ (Oxz).",
          "answer": true,
          "explain": "B(3; 0; -1) có tung độ y = 0 nên thuộc (Oxz)."
        }
      ]
    },
    {
      "id": "tf_bai-07_03",
      "context": "Trong không gian Oxyz, cho ba điểm A(1; 0; 0), B(0; 2; 0), C(0; 0; 3).",
      "statements": [
        {
          "text": "Điểm A thuộc trục Ox, điểm B thuộc trục Oy, điểm C thuộc trục Oz.",
          "answer": true,
          "explain": "Mỗi điểm chỉ có 1 toạ độ khác 0 tương ứng."
        },
        {
          "text": "Trọng tâm tam giác ABC có toạ độ (1/3; 2/3; 1).",
          "answer": true,
          "explain": "G = ((1+0+0)/3; (0+2+0)/3; (0+0+3)/3) = (1/3; 2/3; 1)."
        },
        {
          "text": "Tam giác ABC là tam giác vuông tại O.",
          "answer": false,
          "explain": "O không phải là đỉnh của tam giác ABC."
        },
        {
          "text": "Thể tích tứ diện OABC bằng 1.",
          "answer": true,
          "explain": "V = 1/6 * OA * OB * OC = 1/6 * 1 * 2 * 3 = 1."
        }
      ]
    },
    {
      "id": "tf_bai-07_04",
      "context": "Cho vectơ vecto(u) = 2*vecto(i) - 3*vecto(j) + vecto(k) với vecto(i), vecto(j), vecto(k) là các vectơ đơn vị của hệ toạ độ Oxyz.",
      "statements": [
        {
          "text": "Toạ độ của vectơ vecto(u) là (2; -3; 1).",
          "answer": true,
          "explain": "Theo định nghĩa toạ độ vectơ qua hệ cơ sở."
        },
        {
          "text": "Độ dài của vecto(u) bằng sqrt(14).",
          "answer": true,
          "explain": "|vecto(u)| = sqrt(2^2 + (-3)^2 + 1^2) = sqrt(14)."
        },
        {
          "text": "Vectơ cùng phương với vecto(u) là vecto(v) = (-4; 6; -2).",
          "answer": true,
          "explain": "vecto(v) = -2*vecto(u)."
        },
        {
          "text": "vecto(u) vuông góc với trục Oz.",
          "answer": false,
          "explain": "vecto(u) . vecto(k) = 1 khác 0 nên không vuông góc."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-07_01",
      "q": "Tìm cao độ z của hình chiếu của điểm M(4; 5; -6) lên trục Oz.",
      "correctAnswer": "-6",
      "explain": "Hình chiếu lên Oz là (0; 0; -6) nên cao độ z = -6."
    },
    {
      "id": "sa_bai-07_02",
      "q": "Tính khoảng cách từ điểm M(3; -4; 0) đến gốc toạ độ O.",
      "correctAnswer": "5",
      "explain": "OM = sqrt(3^2 + (-4)^2 + 0^2) = sqrt(9 + 16) = 5."
    },
    {
      "id": "sa_bai-07_03",
      "q": "Cho A(1; 2; 4) và B(3; 4; 0). Tìm hoành độ x của trung điểm M của đoạn AB.",
      "correctAnswer": "2",
      "explain": "x_M = (1 + 3)/2 = 2."
    },
    {
      "id": "sa_bai-07_04",
      "q": "Cho tam giác ABC có A(1; 2; 3), B(2; 3; 1), C(3; 1; 2). Tính tổng toạ độ x_G + y_G + z_G của trọng tâm G.",
      "correctAnswer": "6",
      "explain": "G = (2; 2; 2). Tổng toạ độ = 2 + 2 + 2 = 6."
    },
    {
      "id": "sa_bai-07_05",
      "q": "Tìm khoảng cách từ điểm P(1; 2; -3) đến mặt phẳng toạ độ (Oxz).",
      "correctAnswer": "2",
      "explain": "Khoảng cách từ P đến (Oxz) là |y_P| = |2| = 2."
    },
    {
      "id": "sa_bai-07_06",
      "q": "Điểm M(a; b; c) đối xứng với A(2; -1; 3) qua mặt phẳng (Oxy). Tính a + b + c.",
      "correctAnswer": "-2",
      "explain": "Đối xứng qua (Oxy) giữ nguyên x, y và đổi dấu z: M(2; -1; -3). a + b + c = 2 + (-1) + (-3) = -2."
    }
  ],
  "essay": [
    {
      "id": "es_bai-07",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-07.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
