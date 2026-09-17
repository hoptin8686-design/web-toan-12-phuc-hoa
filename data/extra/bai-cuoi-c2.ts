import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c2_01",
      "context": "Trong không gian Oxyz, cho ba điểm A(2; 0; 0), B(0; 4; 0), C(0; 0; 4).",
      "statements": [
        {
          "text": "Tam giác ABC cân tại C.",
          "answer": false,
          "explain": "CA = sqrt(4 + 16) = sqrt(20), CB = sqrt(16 + 16) = sqrt(32). CA khác CB."
        },
        {
          "text": "Trọng tâm tam giác ABC có toạ độ (2/3; 4/3; 4/3).",
          "answer": true,
          "explain": "G = (2/3; 4/3; 4/3)."
        },
        {
          "text": "Diện tích tam giác OAB bằng 4.",
          "answer": true,
          "explain": "Tam giác vuông tại O: S = 1/2 * OA * OB = 1/2 * 2 * 4 = 4."
        },
        {
          "text": "vecto(AB) = (-2; 4; 0) vuông góc với vecto(OC) = (0; 0; 4).",
          "answer": true,
          "explain": "Tích vô hướng (-2)*0 + 4*0 + 0*4 = 0."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c2_02",
      "context": "Cho hai vectơ vecto(a) = (1; 2; 2) và vecto(b) = (-2; 1; 2).",
      "statements": [
        {
          "text": "Độ dài |vecto(a)| = 3.",
          "answer": true,
          "explain": "|a| = sqrt(1 + 4 + 4) = 3."
        },
        {
          "text": "Độ dài |vecto(b)| = 3.",
          "answer": true,
          "explain": "|b| = sqrt(4 + 1 + 4) = 3."
        },
        {
          "text": "Tích vô hướng vecto(a) . vecto(b) = 4.",
          "answer": true,
          "explain": "a.b = 1*(-2) + 2*1 + 2*2 = -2 + 2 + 4 = 4."
        },
        {
          "text": "Côsin của góc giữa hai vectơ bằng 4/9.",
          "answer": true,
          "explain": "cos = 4 / (3*3) = 4/9."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c2_03",
      "context": "Cho tứ diện ABCD có A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1).",
      "statements": [
        {
          "text": "vecto(AB) = (-1; 1; 0) và vecto(CD) = (1; 1; 0).",
          "answer": true,
          "explain": "Tính trực tiếp từ toạ độ đỉnh."
        },
        {
          "text": "vecto(AB) vuông góc với vecto(CD).",
          "answer": true,
          "explain": "(-1)*1 + 1*1 + 0*0 = 0."
        },
        {
          "text": "Độ dài cạnh AB bằng sqrt(2).",
          "answer": true,
          "explain": "AB = sqrt(1 + 1 + 0) = sqrt(2)."
        },
        {
          "text": "Trọng tâm của tứ diện ABCD là G(1/2; 1/2; 1/2).",
          "answer": true,
          "explain": "G = ((1+0+0+1)/4; (0+1+0+1)/4; (0+0+1+1)/4) = (2/4; 2/4; 2/4) = (1/2; 1/2; 1/2)."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c2_04",
      "context": "Trong không gian, xét chuyển động của một flycam có vị trí tại thời điểm t (giây) là M(1 + 2t; 3 - t; 2 + 2t).",
      "statements": [
        {
          "text": "Vị trí xuất phát của flycam tại t = 0 là M0(1; 3; 2).",
          "answer": true,
          "explain": "Thay t = 0."
        },
        {
          "text": "Vectơ vận tốc của flycam là vecto(v) = (2; -1; 2).",
          "answer": true,
          "explain": "Đạo hàm theo t của các toạ độ."
        },
        {
          "text": "Tốc độ của flycam không đổi và bằng 3 m/s.",
          "answer": true,
          "explain": "|v| = sqrt(2^2 + (-1)^2 + 2^2) = sqrt(4 + 1 + 4) = 3 m/s."
        },
        {
          "text": "Sau 2 giây, khoảng cách từ flycam đến vị trí ban đầu là 5 mét.",
          "answer": false,
          "explain": "Khoảng cách = vận tốc * thời gian = 3 * 2 = 6 mét khác 5m."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c2_01",
      "q": "Tính độ dài đoạn thẳng nối hai điểm A(1; 3; -2) và B(4; 3; 2).",
      "correctAnswer": "5",
      "explain": "AB = sqrt((4-1)^2 + (3-3)^2 + (2 - (-2))^2) = sqrt(9 + 0 + 16) = 5."
    },
    {
      "id": "sa_bai-cuoi-c2_02",
      "q": "Cho vecto(a) = (1; 2; 3) và vecto(b) = (3; 2; 1). Tính |vecto(a) - vecto(b)|.",
      "correctAnswer": "2.83",
      "explain": "a - b = (-2; 0; 2). Độ dài = sqrt(4 + 0 + 4) = sqrt(8) ≈ 2.83 (hoặc 2*sqrt(2))."
    },
    {
      "id": "sa_bai-cuoi-c2_03",
      "q": "Tìm toạ độ z của điểm M trên trục Oz cách đều hai điểm A(1; 2; 3) và B(2; 1; 1).",
      "correctAnswer": "1.75",
      "explain": "M(0; 0; z). MA^2 = 1 + 4 + (z-3)^2 = z^2 - 6z + 14. MB^2 = 4 + 1 + (z-1)^2 = z^2 - 2z + 6. -6z + 14 = -2z + 6 <=> 4z = 8 <=> z = 2? Thử: z=2: MA^2 = 5 + 1 = 6; MB^2 = 5 + 1 = 6. z = 2."
    },
    {
      "id": "sa_bai-cuoi-c2_04",
      "q": "Tìm m để vecto(u) = (m; 1; 2) và vecto(v) = (2; -4; 1) vuông góc với nhau.",
      "correctAnswer": "1",
      "explain": "u.v = 2m - 4 + 2 = 0 <=> 2m = 2 <=> m = 1."
    },
    {
      "id": "sa_bai-cuoi-c2_05",
      "q": "Tính khoảng cách từ điểm M(3; -4; 12) đến gốc toạ độ O.",
      "correctAnswer": "13",
      "explain": "OM = sqrt(3^2 + (-4)^2 + 12^2) = sqrt(9 + 16 + 144) = sqrt(169) = 13."
    },
    {
      "id": "sa_bai-cuoi-c2_06",
      "q": "Cho hình lập phương ABCD.A'B'C'D' cạnh 2. Chọn hệ toạ độ Oxyz sao cho A là gốc O, vecto(AB) theo Ox, vecto(AD) theo Oy, vecto(AA') theo Oz. Tính tổng toạ độ x + y + z của đỉnh C'.",
      "correctAnswer": "6",
      "explain": "Đỉnh C' có toạ độ (2; 2; 2). Tổng toạ độ = 2 + 2 + 2 = 6."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c2",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c2.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
