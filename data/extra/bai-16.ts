import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-16_01",
      "context": "Xét công thức tính góc giữa hai đường thẳng d1 và d2 có VTCP lần lượt là u1 và u2.",
      "statements": [
        {
          "text": "Góc phi giữa hai đường thẳng luôn thoả mãn 0° <= phi <= 90°.",
          "answer": true,
          "explain": "Quy ước góc giữa hai đường thẳng không vượt quá 90 độ."
        },
        {
          "text": "cos(phi) = |vecto(u1) . vecto(u2)| / (|vecto(u1)| * |vecto(u2)|).",
          "answer": true,
          "explain": "Công thức chuẩn có dấu giá trị tuyệt đối ở tử số."
        },
        {
          "text": "Nếu u1 . u2 = 0 thì hai đường thẳng vuông góc với nhau (phi = 90°).",
          "answer": true,
          "explain": "Điều kiện vuông góc."
        },
        {
          "text": "Nếu cos(phi) = 1/2 thì phi = 120°.",
          "answer": false,
          "explain": "Góc giữa 2 đường thẳng phi <= 90° nên phi = 60°."
        }
      ]
    },
    {
      "id": "tf_bai-16_02",
      "context": "Xét góc alpha giữa đường thẳng d (VTCP u) và mặt phẳng (P) (VTPT n).",
      "statements": [
        {
          "text": "Góc alpha thoả mãn 0° <= alpha <= 90°.",
          "answer": true,
          "explain": "Quy ước góc giữa đường thẳng và mặt phẳng."
        },
        {
          "text": "sin(alpha) = |u . n| / (|u| * |n|).",
          "answer": true,
          "explain": "Lưu ý công thức tính góc giữa ĐT và MP dùng hàm SIN chứ không dùng hàm cos."
        },
        {
          "text": "Nếu d vuông góc với (P) thì alpha = 90° và sin(alpha) = 1.",
          "answer": true,
          "explain": "Khi đó u cùng phương với n."
        },
        {
          "text": "Nếu d song song với (P) thì alpha = 90°.",
          "answer": false,
          "explain": "Nếu d song song với (P) thì góc bằng 0°."
        }
      ]
    },
    {
      "id": "tf_bai-16_03",
      "context": "Cho hai mặt phẳng (P): x - y + sqrt(2)z - 1 = 0 và (Q): x + y + sqrt(2)z + 3 = 0.",
      "statements": [
        {
          "text": "VTPT của (P) là n1 = (1; -1; sqrt(2)) có độ dài bằng 2.",
          "answer": true,
          "explain": "|n1| = sqrt(1 + 1 + 2) = 2."
        },
        {
          "text": "VTPT của (Q) là n2 = (1; 1; sqrt(2)) có độ dài bằng 2.",
          "answer": true,
          "explain": "|n2| = sqrt(1 + 1 + 2) = 2."
        },
        {
          "text": "Tích vô hướng n1 . n2 = 1*1 + (-1)*1 + sqrt(2)*sqrt(2) = 2.",
          "answer": true,
          "explain": "1 - 1 + 2 = 2."
        },
        {
          "text": "Góc giữa hai mặt phẳng (P) và (Q) bằng 60°.",
          "answer": true,
          "explain": "cos(phi) = |2| / (2 * 2) = 1/2 => phi = 60°."
        }
      ]
    },
    {
      "id": "tf_bai-16_04",
      "context": "Trong không gian, xét góc giữa đường thẳng d: x = t, y = t, z = 0 và mặt phẳng toạ độ (Oxy).",
      "statements": [
        {
          "text": "Đường thẳng d nằm hoàn toàn trong mặt phẳng (Oxy) vì cao độ z = 0 với mọi t.",
          "answer": true,
          "explain": "Mọi điểm trên d đều có z = 0 thuộc (Oxy)."
        },
        {
          "text": "VTPT của mặt phẳng (Oxy) là vecto(k) = (0; 0; 1).",
          "answer": true,
          "explain": "Vectơ đơn vị của trục Oz."
        },
        {
          "text": "VTCP của d là vecto(u) = (1; 1; 0) vuông góc với vecto(k).",
          "answer": true,
          "explain": "1*0 + 1*0 + 0*1 = 0."
        },
        {
          "text": "Góc giữa đường thẳng d và mặt phẳng (Oxy) bằng 90°.",
          "answer": false,
          "explain": "Vì d nằm trong (Oxy) nên góc giữa d và (Oxy) bằng 0°."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-16_01",
      "q": "Tính côsin góc giữa hai đường thẳng d1 có VTCP u1 = (1; 2; 2) và d2 có VTCP u2 = (2; -1; 2).",
      "correctAnswer": "0.44",
      "explain": "u1.u2 = 2 - 2 + 4 = 4. |u1| = 3, |u2| = 3. cos = 4 / 9 ≈ 0.44."
    },
    {
      "id": "sa_bai-16_02",
      "q": "Tính góc giữa hai mặt phẳng toạ độ (Oxy) và (Oxz) theo đơn vị độ.",
      "correctAnswer": "90",
      "unit": "độ",
      "explain": "Hai mặt phẳng toạ độ vuông góc với nhau nên góc bằng 90 độ."
    },
    {
      "id": "sa_bai-16_03",
      "q": "Tính sin của góc giữa đường thẳng d có VTCP u = (1; 0; 0) và mặt phẳng (P): x + y - 1 = 0 (làm tròn 2 chữ số thập phân).",
      "correctAnswer": "0.71",
      "explain": "n = (1; 1; 0). sin = |1*1 + 0*1 + 0*0| / (1 * sqrt(2)) = 1/sqrt(2) ≈ 0.71 (hoặc sqrt(2)/2)."
    },
    {
      "id": "sa_bai-16_04",
      "q": "Tìm m để hai đường thẳng có VTCP u1 = (m; 1; 2) và u2 = (2; -4; 1) vuông góc nhau.",
      "correctAnswer": "1",
      "explain": "u1.u2 = 2m - 4 + 2 = 0 <=> 2m = 2 <=> m = 1."
    },
    {
      "id": "sa_bai-16_05",
      "q": "Tính góc giữa đường thẳng d: x = 1 + t, y = 2 - t, z = 3 và mặt phẳng (Oxy) theo độ.",
      "correctAnswer": "0",
      "unit": "độ",
      "explain": "VTCP u = (1; -1; 0) có z = 0 nên d song song với (Oxy), góc bằng 0 độ."
    },
    {
      "id": "sa_bai-16_06",
      "q": "Tính góc giữa hai đường chéo AC và BD của hình vuông ABCD trong không gian theo độ.",
      "correctAnswer": "90",
      "unit": "độ",
      "explain": "Hai đường chéo của hình vuông luôn vuông góc nhau nên góc bằng 90 độ."
    }
  ],
  "essay": [
    {
      "id": "es_bai-16",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-16.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
