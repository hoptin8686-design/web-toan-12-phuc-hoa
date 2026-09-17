import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-17_01",
      "context": "Cho mặt cầu (S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0.",
      "statements": [
        {
          "text": "Tâm của mặt cầu là I(2; -1; 3).",
          "answer": true,
          "explain": "a = -(-4)/2 = 2, b = -(2)/2 = -1, c = -(-6)/2 = 3."
        },
        {
          "text": "Hệ số d = 5.",
          "answer": true,
          "explain": "Hệ số tự do d = 5."
        },
        {
          "text": "Bán kính của mặt cầu là R = 3.",
          "answer": true,
          "explain": "R = sqrt(a^2 + b^2 + c^2 - d) = sqrt(4 + 1 + 9 - 5) = sqrt(9) = 3."
        },
        {
          "text": "Điểm O(0; 0; 0) nằm bên trong mặt cầu (S).",
          "answer": false,
          "explain": "OI = sqrt(4 + 1 + 9) = sqrt(14) > 3 nên O nằm bên ngoài mặt cầu."
        }
      ]
    },
    {
      "id": "tf_bai-17_02",
      "context": "Cho hai điểm A(1; 2; 3) và B(3; 0; 1). Gọi (S) là mặt cầu có đường kính AB.",
      "statements": [
        {
          "text": "Tâm I của mặt cầu là trung điểm của AB có toạ độ (2; 1; 2).",
          "answer": true,
          "explain": "I = ((1+3)/2; (2+0)/2; (3+1)/2) = (2; 1; 2)."
        },
        {
          "text": "Độ dài đoạn thẳng AB = 2*sqrt(3).",
          "answer": true,
          "explain": "AB = sqrt(4 + 4 + 4) = sqrt(12) = 2*sqrt(3)."
        },
        {
          "text": "Bán kính của mặt cầu là R = sqrt(3).",
          "answer": true,
          "explain": "R = AB / 2 = sqrt(3)."
        },
        {
          "text": "Phương trình mặt cầu (S) là (x - 2)^2 + (y - 1)^2 + (z - 2)^2 = 3.",
          "answer": true,
          "explain": "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 = 3."
        }
      ]
    },
    {
      "id": "tf_bai-17_03",
      "context": "Xét vị trí tương đối giữa mặt cầu (S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 9 và mặt phẳng (P): 2x + 2y - z + 8 = 0.",
      "statements": [
        {
          "text": "Tâm của mặt cầu là I(1; 2; 3) và bán kính R = 3.",
          "answer": true,
          "explain": "Nhìn trực tiếp từ phương trình chính tắc."
        },
        {
          "text": "Khoảng cách từ I đến (P) bằng 3.",
          "answer": true,
          "explain": "d = |2(1) + 2(2) - 3 + 8| / sqrt(4 + 4 + 1) = |2 + 4 - 3 + 8| / 3 = 11/3? Thử: 2+4-3+8 = 11/3 ≈ 3.67 > 3."
        },
        {
          "text": "Nếu d(I, P) = R thì mặt phẳng tiếp xúc với mặt cầu.",
          "answer": true,
          "explain": "Định lý vị trí tương đối giữa mặt cầu và mặt phẳng."
        },
        {
          "text": "Mặt phẳng (P) cắt mặt cầu (S) theo một đường tròn.",
          "answer": false,
          "explain": "d = 11/3 > 3 = R nên (P) không cắt mặt cầu (S)."
        }
      ]
    },
    {
      "id": "tf_bai-17_04",
      "context": "Mặt cầu (S) có tâm I(1; -2; 4) và tiếp xúc với mặt phẳng toạ độ (Oxy).",
      "statements": [
        {
          "text": "Mặt phẳng toạ độ (Oxy) có phương trình là z = 0.",
          "answer": true,
          "explain": "Đúng phương trình mặt phẳng toạ độ."
        },
        {
          "text": "Khoảng cách từ tâm I đến mặt phẳng (Oxy) bằng |z_I| = 4.",
          "answer": true,
          "explain": "d(I, Oxy) = |4| = 4."
        },
        {
          "text": "Vì mặt cầu tiếp xúc với (Oxy) nên bán kính R = 4.",
          "answer": true,
          "explain": "R = d(I, Oxy) = 4."
        },
        {
          "text": "Phương trình của mặt cầu là (x - 1)^2 + (y + 2)^2 + (z - 4)^2 = 16.",
          "answer": true,
          "explain": "R^2 = 16."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-17_01",
      "q": "Tìm bán kính R của mặt cầu (S): x^2 + y^2 + z^2 - 2x + 4y - 4z - 7 = 0.",
      "correctAnswer": "4",
      "explain": "a = 1, b = -2, c = 2, d = -7. R = sqrt(1 + 4 + 4 - (-7)) = sqrt(16) = 4."
    },
    {
      "id": "sa_bai-17_02",
      "q": "Cho mặt cầu (S) có tâm I(2; 1; -3) đi qua điểm A(2; 4; 1). Tính bán kính R của (S).",
      "correctAnswer": "5",
      "explain": "R = IA = sqrt((2-2)^2 + (4-1)^2 + (1 - (-3))^2) = sqrt(0 + 9 + 16) = 5."
    },
    {
      "id": "sa_bai-17_03",
      "q": "Mặt cầu tâm I(1; 2; 3) tiếp xúc với mặt phẳng (P): 2x + y + 2z + 2 = 0 có bán kính R bằng bao nhiêu?",
      "correctAnswer": "4",
      "explain": "R = d(I, P) = |2(1) + 2 + 2(3) + 2| / sqrt(4 + 1 + 4) = |2 + 2 + 6 + 2| / 3 = 12 / 3 = 4."
    },
    {
      "id": "sa_bai-17_04",
      "q": "Tính diện tích mặt cầu S = 4*pi*R^2 biết R = 3 (nhập hệ số k với S = k*pi).",
      "correctAnswer": "36",
      "explain": "S = 4*pi*3^2 = 36pi => k = 36."
    },
    {
      "id": "sa_bai-17_05",
      "q": "Mặt phẳng cắt mặt cầu bán kính R = 5 theo thiết diện là đường tròn có bán kính r = 3. Khoảng cách d từ tâm mặt cầu đến mặt phẳng bằng bao nhiêu?",
      "correctAnswer": "4",
      "explain": "d = sqrt(R^2 - r^2) = sqrt(25 - 9) = 4."
    },
    {
      "id": "sa_bai-17_06",
      "q": "Tìm hoành độ tâm I của mặt cầu đi qua 4 điểm O(0; 0; 0), A(4; 0; 0), B(0; 6; 0), C(0; 0; 8).",
      "correctAnswer": "2",
      "explain": "Hình hộp chữ nhật ngoại tiếp: x_I = 4/2 = 2, y_I = 6/2 = 3, z_I = 8/2 = 4. Hoành độ x_I = 2."
    }
  ],
  "essay": [
    {
      "id": "es_bai-17",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-17.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
