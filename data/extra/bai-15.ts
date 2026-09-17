import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-15_01",
      "context": "Trong không gian Oxyz, cho đường thẳng d: x = 1 + 2t, y = -1 + t, z = 3 - 2t (t thuộc R).",
      "statements": [
        {
          "text": "Một vectơ chỉ phương của d là vecto(u) = (2; 1; -2).",
          "answer": true,
          "explain": "Hệ số của tham số t."
        },
        {
          "text": "Điểm M(1; -1; 3) thuộc đường thẳng d.",
          "answer": true,
          "explain": "Ứng với t = 0."
        },
        {
          "text": "Điểm N(3; 0; 1) thuộc đường thẳng d.",
          "answer": true,
          "explain": "Ứng với t = 1: x = 3, y = 0, z = 1."
        },
        {
          "text": "Độ dài vectơ chỉ phương |vecto(u)| = 3.",
          "answer": true,
          "explain": "sqrt(4 + 1 + 4) = 3."
        }
      ]
    },
    {
      "id": "tf_bai-15_02",
      "context": "Cho hai điểm A(1; 0; 2) và B(3; 2; 0).",
      "statements": [
        {
          "text": "vecto(AB) = (2; 2; -2) là một vectơ chỉ phương của đường thẳng AB.",
          "answer": true,
          "explain": "vecto(AB) nối hai điểm trên đường thẳng."
        },
        {
          "text": "vecto(u) = (1; 1; -1) cũng là một vectơ chỉ phương của AB.",
          "answer": true,
          "explain": "Cùng phương với vecto(AB) (bằng 1/2 vecto(AB))."
        },
        {
          "text": "Phương trình tham số của AB có thể viết là x = 1 + t, y = t, z = 2 - t.",
          "answer": true,
          "explain": "Đi qua A(1; 0; 2) với VTCP (1; 1; -1)."
        },
        {
          "text": "Đường thẳng AB đi qua gốc toạ độ O(0; 0; 0).",
          "answer": false,
          "explain": "Nếu x = 0 thì t = -1, khi đó y = -1 khác 0."
        }
      ]
    },
    {
      "id": "tf_bai-15_03",
      "context": "Xét vị trí tương đối giữa đường thẳng d: (x - 1)/2 = (y + 2)/1 = (z - 3)/(-1) và mặt phẳng (P): x - 2y + 0z - 5 = 0.",
      "statements": [
        {
          "text": "Vectơ chỉ phương của d là u = (2; 1; -1) và VTPT của (P) là n = (1; -2; 0).",
          "answer": true,
          "explain": "Toạ độ chính xác."
        },
        {
          "text": "Tích vô hướng u . n = 2*1 + 1*(-2) + (-1)*0 = 0.",
          "answer": true,
          "explain": "2 - 2 = 0."
        },
        {
          "text": "Đường thẳng d vuông góc với mặt phẳng (P).",
          "answer": false,
          "explain": "u . n = 0 thì đường thẳng d song song hoặc nằm trong mặt phẳng (P)."
        },
        {
          "text": "Điểm M(1; -2; 3) thuộc d và thay vào (P): 1 - 2(-2) - 5 = 0 nên d nằm trong (P).",
          "answer": true,
          "explain": "1 + 4 - 5 = 0 nên d nằm trong mặt phẳng (P)."
        }
      ]
    },
    {
      "id": "tf_bai-15_04",
      "context": "Xét hai đường thẳng d1: x = 1 + t, y = 2t, z = 3 - t và d2: x = 2 + 2s, y = 3 + 4s, z = 1 - 2s.",
      "statements": [
        {
          "text": "VTCP của d1 là u1 = (1; 2; -1) và của d2 là u2 = (2; 4; -2).",
          "answer": true,
          "explain": "Lấy hệ số của t và s."
        },
        {
          "text": "u2 = 2*u1 nên hai đường thẳng có VTCP cùng phương.",
          "answer": true,
          "explain": "Tỉ số 2/1 = 4/2 = -2/(-1) = 2."
        },
        {
          "text": "Điểm M(1; 0; 3) thuộc d1 nhưng không thuộc d2.",
          "answer": true,
          "explain": "Thay vào d2: 1 = 2 + 2s => s = -0.5; 0 = 3 + 4(-0.5) = 1 (mâu thuẫn)."
        },
        {
          "text": "Hai đường thẳng d1 và d2 song song với nhau.",
          "answer": true,
          "explain": "VTCP cùng phương và không trùng nhau."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-15_01",
      "q": "Tìm hoành độ giao điểm của đường thẳng d: x = 2 - t, y = 1 + 2t, z = 3t với mặt phẳng toạ độ (Oyz).",
      "correctAnswer": "0",
      "explain": "Giao với (Oyz) thì x = 0."
    },
    {
      "id": "sa_bai-15_02",
      "q": "Tìm giá trị của tham số t để điểm M(t) trên đường thẳng d: x = 1 + 2t, y = 3 - t, z = 4 + t có cao độ z = 6.",
      "correctAnswer": "2",
      "explain": "4 + t = 6 <=> t = 2."
    },
    {
      "id": "sa_bai-15_03",
      "q": "Tìm m để đường thẳng d có VTCP u = (2; m; 1) vuông góc với mặt phẳng (P) có VTPT n = (4; -6; 2).",
      "correctAnswer": "-3",
      "explain": "d vuông góc (P) thì u cùng phương n => 4/2 = -6/m = 2/1 = 2 <=> -6/m = 2 <=> m = -3."
    },
    {
      "id": "sa_bai-15_04",
      "q": "Cho hai điểm A(1; 1; 1) và B(3; 5; 3). Tìm tung độ y của điểm M trên đường thẳng AB có hoành độ x = 2.",
      "correctAnswer": "3",
      "explain": "M là trung điểm AB vì x_M = (1+3)/2 = 2 => y_M = (1+5)/2 = 3."
    },
    {
      "id": "sa_bai-15_05",
      "q": "Tính khoảng cách từ điểm A(1; 0; 0) đến trục Oy.",
      "correctAnswer": "1",
      "explain": "Hình chiếu của A lên Oy là O(0; 0; 0). Khoảng cách d = AO = 1."
    },
    {
      "id": "sa_bai-15_06",
      "q": "Tìm số giao điểm của đường thẳng d: (x-1)/1 = y/2 = (z+1)/(-1) và mặt phẳng (P): 2x - y + 3 = 0.",
      "correctAnswer": "0",
      "explain": "u = (1; 2; -1), n = (2; -1; 0). u.n = 2 - 2 = 0 (d song song hoặc chứa trong P). Thay M(1; 0; -1) vào P: 2(1) - 0 + 3 = 5 khác 0 => d song song P => 0 giao điểm."
    }
  ],
  "essay": [
    {
      "id": "es_bai-15",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-15.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
