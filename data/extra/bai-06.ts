import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-06_01",
      "context": "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O.",
      "statements": [
        {
          "text": "vecto(SA) + vecto(SC) = 2*vecto(SO).",
          "answer": true,
          "explain": "Vì O là trung điểm của AC nên vecto(SA) + vecto(SC) = 2*vecto(SO)."
        },
        {
          "text": "vecto(SB) + vecto(SD) = 2*vecto(SO).",
          "answer": true,
          "explain": "Vì O là trung điểm của BD nên vecto(SB) + vecto(SD) = 2*vecto(SO)."
        },
        {
          "text": "vecto(SA) + vecto(SC) = vecto(SB) + vecto(SD).",
          "answer": true,
          "explain": "Cùng bằng 2*vecto(SO)."
        },
        {
          "text": "vecto(AB) + vecto(BC) + vecto(CD) + vecto(DA) = vecto(AC).",
          "answer": false,
          "explain": "Tổng các cạnh tạo thành đường gấp khúc kín nên bằng vecto(0)."
        }
      ]
    },
    {
      "id": "tf_bai-06_02",
      "context": "Cho hình lập phương ABCD.A'B'C'D' cạnh a.",
      "statements": [
        {
          "text": "vecto(AB) cùng hướng với vecto(D'C').",
          "answer": true,
          "explain": "AB song song và cùng hướng với D'C' do ABB'A' và DCC'D' là các mặt bên."
        },
        {
          "text": "Góc giữa hai vectơ vecto(AB) và vecto(A'D') bằng 90 độ.",
          "answer": true,
          "explain": "vecto(A'D') = vecto(AD), mà AB vuông góc AD nên góc bằng 90 độ."
        },
        {
          "text": "Tích vô hướng vecto(AC) . vecto(BD) = 0.",
          "answer": true,
          "explain": "Hai đường chéo hình vuông đáy vuông góc với nhau."
        },
        {
          "text": "Độ dài vecto(AC') = a*sqrt(2).",
          "answer": false,
          "explain": "AC' là đường chéo hình lập phương nên độ dài là a*sqrt(3)."
        }
      ]
    },
    {
      "id": "tf_bai-06_03",
      "context": "Cho tứ diện đều ABCD có cạnh bằng a. Gọi M là trung điểm của CD.",
      "statements": [
        {
          "text": "vecto(AM) = (vecto(AC) + vecto(AD))/2.",
          "answer": true,
          "explain": "Công thức trung điểm trong tam giác ACD."
        },
        {
          "text": "vecto(AB) . vecto(CD) = 0.",
          "answer": true,
          "explain": "Trong tứ diện đều, các cặp cạnh đối diện vuông góc với nhau."
        },
        {
          "text": "Độ dài vecto(AM) bằng a*sqrt(3)/2.",
          "answer": true,
          "explain": "AM là đường cao tam giác đều cạnh a."
        },
        {
          "text": "Góc giữa vecto(AB) và vecto(AC) bằng 120 độ.",
          "answer": false,
          "explain": "Tam giác ABC đều nên góc giữa vecto(AB) và vecto(AC) bằng 60 độ."
        }
      ]
    },
    {
      "id": "tf_bai-06_04",
      "context": "Xét điều kiện đồng phẳng của ba vectơ trong không gian.",
      "statements": [
        {
          "text": "Ba vectơ được gọi là đồng phẳng nếu các giá của chúng cùng song song với một mặt phẳng.",
          "answer": true,
          "explain": "Định nghĩa chuẩn trong SGK Toán 12."
        },
        {
          "text": "Nếu có vecto(c) = 2*vecto(a) - 3*vecto(b) thì ba vectơ vecto(a), vecto(b), vecto(c) đồng phẳng.",
          "answer": true,
          "explain": "Biểu diễn tuyến tính một vectơ qua hai vectơ không cùng phương."
        },
        {
          "text": "Ba vectơ bất kỳ trong không gian luôn đồng phẳng.",
          "answer": false,
          "explain": "Ví dụ ba vectơ xuất phát từ một đỉnh của hình hộp không bao giờ đồng phẳng."
        },
        {
          "text": "Bốn điểm A, B, C, D đồng phẳng khi và chỉ khi ba vectơ vecto(AB), vecto(AC), vecto(AD) đồng phẳng.",
          "answer": true,
          "explain": "Định lý về sự đồng phẳng của 4 điểm."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-06_01",
      "q": "Cho hình lập phương ABCD.A'B'C'D' cạnh bằng 2. Tính tích vô hướng vecto(AB) . vecto(AC).",
      "correctAnswer": "4",
      "explain": "vecto(AC) = vecto(AB) + vecto(AD). vecto(AB).vecto(AC) = AB^2 + vecto(AB).vecto(AD) = 2^2 + 0 = 4."
    },
    {
      "id": "sa_bai-06_02",
      "q": "Cho hình lập phương cạnh 1. Tính góc giữa hai vectơ vecto(AC) và vecto(A'C') theo đơn vị độ.",
      "correctAnswer": "0",
      "unit": "độ",
      "explain": "vecto(AC) = vecto(A'C') (cùng hướng, cùng độ dài) nên góc giữa chúng bằng 0 độ."
    },
    {
      "id": "sa_bai-06_03",
      "q": "Cho tam giác đều ABC cạnh 4 trong không gian. Tính tích vô hướng vecto(AB) . vecto(BC).",
      "correctAnswer": "-8",
      "explain": "vecto(AB) . vecto(BC) = -vecto(BA) . vecto(BC) = -|BA|*|BC|*cos(60°) = -4 * 4 * 0.5 = -8."
    },
    {
      "id": "sa_bai-06_04",
      "q": "Cho tứ diện ABCD có G là trọng tâm tứ diện. Biết vecto(OG) = k*(vecto(OA) + vecto(OB) + vecto(OC) + vecto(OD)). Tìm giá trị k.",
      "correctAnswer": "0.25",
      "explain": "G là trọng tâm tứ diện nên vecto(OG) = 1/4 * (vecto(OA) + vecto(OB) + vecto(OC) + vecto(OD)). k = 1/4 = 0.25."
    },
    {
      "id": "sa_bai-06_05",
      "q": "Cho ba lực vecto(F1), vecto(F2), vecto(F3) cùng tác dụng vào một chất điểm cân bằng. Biết |F1| = 30N, |F2| = 40N và F1 vuông góc F2. Tính độ lớn của lực F3 theo đơn vị N.",
      "correctAnswer": "50",
      "unit": "N",
      "explain": "Cân bằng nên vecto(F3) = -(vecto(F1) + vecto(F2)). |F3| = sqrt(30^2 + 40^2) = 50 N."
    },
    {
      "id": "sa_bai-06_06",
      "q": "Cho hình hộp chữ nhật ABCD.A'B'C'D' có AB = 1, AD = 2, AA' = 3. Tính độ dài vectơ vecto(AC').",
      "correctAnswer": "3.74",
      "explain": "|vecto(AC')| = sqrt(AB^2 + AD^2 + AA'^2) = sqrt(1 + 4 + 9) = sqrt(14) ≈ 3.74."
    }
  ],
  "essay": [
    {
      "id": "es_bai-06",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-06.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
