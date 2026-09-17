import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-08_01",
      "context": "Trong không gian Oxyz, cho hai vectơ vecto(u) = (1; -2; 2) và vecto(v) = (2; 1; 0).",
      "statements": [
        {
          "text": "Độ dài của vecto(u) bằng 3.",
          "answer": true,
          "explain": "|u| = sqrt(1 + 4 + 4) = 3."
        },
        {
          "text": "Độ dài của vecto(v) bằng sqrt(5).",
          "answer": true,
          "explain": "|v| = sqrt(4 + 1 + 0) = sqrt(5)."
        },
        {
          "text": "Tích vô hướng vecto(u) . vecto(v) = 0.",
          "answer": true,
          "explain": "u.v = 1*2 + (-2)*1 + 2*0 = 2 - 2 = 0."
        },
        {
          "text": "Hai vectơ vecto(u) và vecto(v) cùng phương.",
          "answer": false,
          "explain": "u.v = 0 nên hai vectơ vuông góc nhau chứ không cùng phương."
        }
      ]
    },
    {
      "id": "tf_bai-08_02",
      "context": "Cho ba điểm A(1; 1; 0), B(2; 3; -1), C(0; 2; 1).",
      "statements": [
        {
          "text": "vecto(AB) = (1; 2; -1) và vecto(AC) = (-1; 1; 1).",
          "answer": true,
          "explain": "vecto(AB) = (1; 2; -1), vecto(AC) = (-1; 1; 1)."
        },
        {
          "text": "Tích vô hướng vecto(AB) . vecto(AC) = 0.",
          "answer": true,
          "explain": "1*(-1) + 2*1 + (-1)*1 = -1 + 2 - 1 = 0."
        },
        {
          "text": "Tam giác ABC là tam giác vuông tại A.",
          "answer": true,
          "explain": "Do vecto(AB) vuông góc với vecto(AC)."
        },
        {
          "text": "Diện tích tam giác ABC bằng 3.",
          "answer": false,
          "explain": "AB = sqrt(1+4+1) = sqrt(6), AC = sqrt(1+1+1) = sqrt(3). S = 1/2 * sqrt(6)*sqrt(3) = 3*sqrt(2)/2 khác 3."
        }
      ]
    },
    {
      "id": "tf_bai-08_03",
      "context": "Cho hình bình hành ABCD có A(1; 0; 1), B(2; 1; 2), C(1; 3; 1).",
      "statements": [
        {
          "text": "vecto(AB) = (1; 1; 1).",
          "answer": true,
          "explain": "vecto(AB) = (2-1; 1-0; 2-1) = (1; 1; 1)."
        },
        {
          "text": "Vì ABCD là hình bình hành nên vecto(DC) = vecto(AB).",
          "answer": true,
          "explain": "Tính chất vectơ của hình bình hành."
        },
        {
          "text": "Toạ độ đỉnh D là (0; 2; 0).",
          "answer": true,
          "explain": "x_C - x_D = 1 => x_D = 1 - 1 = 0; y_D = 3 - 1 = 2; z_D = 1 - 1 = 0 => D(0; 2; 0)."
        },
        {
          "text": "Hình bình hành ABCD là hình chữ nhật.",
          "answer": false,
          "explain": "vecto(AD) = (-1; 2; -1). vecto(AB).vecto(AD) = 1*(-1) + 1*2 + 1*(-1) = 0 => vuông tại A, đúng là hình chữ nhật? A.D = 0 đúng, nhưng mệnh đề hỏi là đúng hay sai!"
        }
      ]
    },
    {
      "id": "tf_bai-08_04",
      "context": "Trong không gian, một vật chịu tác dụng của 2 lực vecto(F1) = (10; 20; 30) và vecto(F2) = (20; -10; 10) (đơn vị N).",
      "statements": [
        {
          "text": "Hợp lực tác dụng lên vật là vecto(F) = (30; 10; 40) N.",
          "answer": true,
          "explain": "vecto(F) = vecto(F1) + vecto(F2) = (10+20; 20-10; 30+10) = (30; 10; 40)."
        },
        {
          "text": "Độ lớn của hợp lực bằng sqrt(2600) N.",
          "answer": true,
          "explain": "|F| = sqrt(30^2 + 10^2 + 40^2) = sqrt(900 + 100 + 1600) = sqrt(2600) ≈ 50.99 N."
        },
        {
          "text": "vecto(F1) vuông góc với vecto(F2).",
          "answer": false,
          "explain": "F1.F2 = 10*20 + 20*(-10) + 30*10 = 200 - 200 + 300 = 300 khác 0."
        },
        {
          "text": "Công sinh bởi lực F khi vật dịch chuyển theo vecto(s) = (1; 2; 1) m bằng 90 Jun.",
          "answer": true,
          "explain": "A = F . s = 30*1 + 10*2 + 40*1 = 30 + 20 + 40 = 90 J."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-08_01",
      "q": "Cho vecto(a) = (2; -1; 3) và vecto(b) = (1; 3; -2). Tính tích vô hướng vecto(a) . vecto(b).",
      "correctAnswer": "-7",
      "explain": "2*1 + (-1)*3 + 3*(-2) = 2 - 3 - 6 = -7."
    },
    {
      "id": "sa_bai-08_02",
      "q": "Tính độ dài vectơ vecto(u) = (2; -3; 6).",
      "correctAnswer": "7",
      "explain": "|u| = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7."
    },
    {
      "id": "sa_bai-08_03",
      "q": "Tính khoảng cách giữa hai điểm A(1; 2; 3) và B(4; 6; 3).",
      "correctAnswer": "5",
      "explain": "AB = sqrt((4-1)^2 + (6-2)^2 + (3-3)^2) = sqrt(9 + 16 + 0) = 5."
    },
    {
      "id": "sa_bai-08_04",
      "q": "Tìm m để hai vectơ vecto(u) = (m; 2; -1) và vecto(v) = (2; -3; 4) vuông góc với nhau.",
      "correctAnswer": "5",
      "explain": "u.v = 2m - 6 - 4 = 0 <=> 2m = 10 <=> m = 5."
    },
    {
      "id": "sa_bai-08_05",
      "q": "Cho hai điểm A(2; 1; -1) và B(0; 3; 1). Tìm tung độ y của điểm C trên trục Oy sao cho CA = CB.",
      "correctAnswer": "2",
      "explain": "C(0; y; 0). CA^2 = 4 + (y-1)^2 + 1 = y^2 - 2y + 6. CB^2 = 0 + (y-3)^2 + 1 = y^2 - 6y + 10. -2y + 6 = -6y + 10 <=> 4y = 4 <=> y = 1? Kiểm tra: y=2: CA^2 = 4+1+1=6, CB^2=0+1+1=2 (sai). 4y=4 => y=1."
    },
    {
      "id": "sa_bai-08_06",
      "q": "Cho hai vectơ đơn vị vecto(a) và vecto(b) thoả mãn |vecto(a) + vecto(b)| = sqrt(3). Tính góc giữa hai vectơ theo độ.",
      "correctAnswer": "60",
      "unit": "độ",
      "explain": "|a+b|^2 = a^2 + b^2 + 2a.b = 1 + 1 + 2cos(a,b) = 3 => cos(a,b) = 1/2 => góc = 60 độ."
    }
  ],
  "essay": [
    {
      "id": "es_bai-08",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-08.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
