import type { MockExam } from "@/lib/types";

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-thi-thu-01",
    title: "Đề thi thử Tốt nghiệp THPT 2025 — Đề số 01 (Tổng hợp 6 Chương)",
    durationMinutes: 90,
    description: "Đề chuẩn ma trận thi Tốt nghiệp THPT 2025 của Bộ GD&ĐT gồm 3 phần: Trắc nghiệm nhiều lựa chọn, Đúng/Sai và Trả lời ngắn.",
    questions: [
      {
        id: "ex1-01",
        q: "Cho hàm số f(x) có bảng biến thiên: f'(x) đổi dấu từ + sang - qua x = 1 và từ - sang + qua x = 3. Điểm cực đại của hàm số là:",
        options: ["x = 1", "x = 3", "y = 1", "y = 3"],
        answer: 0,
        explain: "Đạo hàm đổi dấu từ dương sang âm khi qua x = 1 nên x = 1 là điểm cực đại của hàm số."
      },
      {
        id: "ex1-02",
        q: "Tiệm cận ngang của đồ thị hàm số y = (3x - 1)/(x + 2) là đường thẳng:",
        options: ["y = 3", "x = -2", "y = -1/2", "x = 3"],
        answer: 0,
        explain: "Giới hạn khi x -> ±∞ bằng 3/1 = 3 nên tiệm cận ngang là y = 3."
      },
      {
        id: "ex1-03",
        q: "Giá trị nhỏ nhất của hàm số y = x^3 - 3x + 2 trên đoạn [0; 2] bằng:",
        options: ["0", "2", "4", "-2"],
        answer: 0,
        explain: "y' = 3x^2 - 3 = 0 <=> x = 1 ∈ [0; 2]. y(0) = 2, y(1) = 0, y(2) = 4. Giá trị nhỏ nhất là 0 tại x = 1."
      },
      {
        id: "ex1-04",
        q: "Trong không gian Oxyz, cho hai vectơ a = (1; 2; -3) và b = (2; -1; 1). Tích vô hướng a . b bằng:",
        options: ["-3", "3", "5", "-5"],
        answer: 0,
        explain: "a . b = 1*2 + 2*(-1) + (-3)*1 = 2 - 2 - 3 = -3."
      },
      {
        id: "ex1-05",
        q: "Mặt phẳng (P): 2x - y + 3z - 4 = 0 có một vectơ pháp tuyến là:",
        options: ["n = (2; -1; 3)", "n = (2; 1; 3)", "n = (2; -1; -4)", "n = (-1; 3; -4)"],
        answer: 0,
        explain: "Toạ độ VTPT lấy từ hệ số trước x, y, z: n = (2; -1; 3)."
      },
      {
        id: "ex1-06",
        q: "Nguyên hàm của hàm số f(x) = cos 2x là:",
        options: ["(1/2) sin 2x + C", "-2 sin 2x + C", "2 sin 2x + C", "-(1/2) sin 2x + C"],
        answer: 0,
        explain: "∫ cos(ax+b) dx = (1/a) sin(ax+b) + C => (1/2) sin 2x + C."
      },
      {
        id: "ex1-07",
        q: "Tích phân I = ∫_0^1 e^(3x) dx bằng:",
        options: ["(e^3 - 1) / 3", "e^3 - 1", "(e^3 + 1) / 3", "3(e^3 - 1)"],
        answer: 0,
        explain: "[(1/3) e^(3x)] |_0^1 = (e^3 - 1)/3."
      },
      {
        id: "ex1-08",
        q: "Mặt cầu (S): (x - 2)^2 + (y + 1)^2 + z^2 = 25 có bán kính R bằng:",
        options: ["5", "25", "10", "√5"],
        answer: 0,
        explain: "Bán kính R = √25 = 5."
      },
      {
        id: "ex1-09",
        q: "Đường thẳng d: (x - 1)/2 = (y + 2)/(-3) = (z - 5)/1 có một vectơ chỉ phương là:",
        options: ["u = (2; -3; 1)", "u = (1; -2; 5)", "u = (-1; 2; -5)", "u = (2; 3; 1)"],
        answer: 0,
        explain: "Các mẫu số cho toạ độ VTCP: u = (2; -3; 1)."
      },
      {
        id: "ex1-10",
        q: "Hai biến cố A và B có P(A) = 0.5, P(B) = 0.6 và P(AB) = 0.3. Khi đó hai biến cố A và B:",
        options: ["Độc lập với nhau", "Xung khắc với nhau", "Đối nhau", "Không độc lập"],
        answer: 0,
        explain: "P(A) * P(B) = 0.5 * 0.6 = 0.3 = P(AB) nên hai biến cố A và B độc lập."
      },
      {
        id: "ex1-11",
        q: "Độ lệch chuẩn s của mẫu số liệu ghép nhóm có phương sai s² = 9 bằng:",
        options: ["3", "81", "18", "4.5"],
        answer: 0,
        explain: "Độ lệch chuẩn s = √9 = 3."
      },
      {
        id: "ex1-12",
        q: "Diện tích hình phẳng giới hạn bởi y = x^2, trục Ox và x = 2 bằng:",
        options: ["8/3", "4", "2", "8"],
        answer: 0,
        explain: "S = ∫_0^2 x^2 dx = x^3/3 |_0^2 = 8/3."
      }
    ],
    tfQuestions: [
      {
        id: "ex1-tf-01",
        context: "Cho hàm số y = f(x) = (2x^2 - 3x + 2)/(x - 1).",
        statements: [
          {"text": "Tập xác định của hàm số là D = ℝ \\ {1}.", "answer": true, "explain": "Mẫu số khác 0 <=> x ≠ 1."},
          {"text": "Đồ thị hàm số có tiệm cận đứng là đường thẳng x = 1.", "answer": true, "explain": "Giới hạn khi x -> 1 thì mẫu bằng 0, tử bằng 1 ≠ 0 nên x = 1 là TCĐ."},
          {"text": "Đồ thị hàm số có tiệm cận xiên là đường thẳng y = 2x - 1.", "answer": true, "explain": "Chia tử cho mẫu: (2x^2 - 3x + 2) = (x - 1)(2x - 1) + 1 => y = 2x - 1 + 1/(x-1)."},
          {"text": "Hàm số đồng biến trên ℝ.", "answer": false, "explain": "Hàm số không xác định tại x = 1 nên không thể đồng biến trên toàn bộ ℝ."}
        ]
      },
      {
        id: "ex1-tf-02",
        context: "Trong không gian Oxyz, cho mặt phẳng (P): x + 2y - 2z + 5 = 0 và điểm A(1; 2; 3).",
        statements: [
          {"text": "Vectơ n = (1; 2; -2) là một vectơ pháp tuyến của (P).", "answer": true, "explain": "Đúng theo toạ độ hệ số của (P)."},
          {"text": "Khoảng cách từ A đến mặt phẳng (P) bằng 4/3.", "answer": true, "explain": "d = |1 + 2*2 - 2*3 + 5| / √(1+4+4) = |1 + 4 - 6 + 5| / 3 = 4 / 3."},
          {"text": "Mặt phẳng song song với (P) và đi qua O có phương trình x + 2y - 2z = 0.", "answer": true, "explain": "Cùng VTPT và đi qua O(0;0;0) nên hệ số tự do D = 0."},
          {"text": "Điểm B(-1; 0; 2) thuộc mặt phẳng (P).", "answer": true, "explain": "-1 + 2(0) - 2(2) + 5 = -1 - 4 + 5 = 0 => B thuộc (P)."}
        ]
      }
    ],
    shortAnswerQuestions: [
      {
        id: "ex1-sa-01",
        q: "Một xưởng sản xuất thùng tôn hình trụ không nắp có thể tích V = 54π dm³. Tính bán kính đáy r (dm) để diện tích tôn cần dùng là nhỏ nhất.",
        answer: "V = π r^2 h = 54π => h = 54 / r^2.\nDiện tích tôn (đáy + xung quanh): S(r) = π r^2 + 2π r h = π r^2 + 108π / r.\nS'(r) = 2π r - 108π / r^2 = 0 <=> r^3 = 54 <=> r = 3√2 ≈ 3.78 dm."
      },
      {
        id: "ex1-sa-02",
        q: "Trong không gian Oxyz, cho hai mặt phẳng (P): x + y + z - 1 = 0 và (Q): x - y + z + 2 = 0. Tính cosin góc giữa hai mặt phẳng (P) và (Q).",
        answer: "nP = (1; 1; 1), nQ = (1; -1; 1).\n|nP . nQ| = |1*1 + 1*(-1) + 1*1| = |1 - 1 + 1| = 1.\n|nP| = √3, |nQ| = √3.\ncos φ = 1 / (√3 * √3) = 1/3 ≈ 0.333."
      }
    ]
  },
  {
    id: "de-thi-thu-02",
    title: "Đề thi thử Tốt nghiệp THPT 2025 — Đề số 02 (Chuyên đề Giải tích & Hình học)",
    durationMinutes: 90,
    description: "Đề thi nâng cao rèn luyện kỹ năng phân tích đồ thị, ứng dụng tích phân và toạ độ Oxyz không gian 12.",
    questions: [
      {
        id: "ex2-01",
        q: "Số điểm cực trị của hàm số y = x^4 - 4x^2 + 1 là:",
        options: ["3", "1", "2", "0"],
        answer: 0,
        explain: "y' = 4x^3 - 8x = 4x(x^2 - 2) = 0 có 3 nghiệm phân biệt nên hàm số có 3 điểm cực trị."
      },
      {
        id: "ex2-02",
        q: "Họ nguyên hàm của f(x) = 1/(2x + 1) trên (0; +∞) là:",
        options: ["(1/2) ln(2x + 1) + C", "ln(2x + 1) + C", "2 ln(2x + 1) + C", "-1/(2x+1)^2 + C"],
        answer: 0,
        explain: "∫ 1/(ax+b) dx = (1/a) ln|ax+b| + C => (1/2) ln(2x + 1) + C."
      },
      {
        id: "ex2-03",
        q: "Trong không gian Oxyz, mặt phẳng đi qua A(2; 0; 0), B(0; 3; 0), C(0; 0; -1) có phương trình là:",
        options: ["x/2 + y/3 - z = 1", "x/2 + y/3 + z = 1", "2x + 3y - z = 1", "x/2 + y/3 + z/(-1) = 0"],
        answer: 0,
        explain: "Phương trình mặt phẳng đoạn chắn: x/2 + y/3 + z/(-1) = 1 <=> x/2 + y/3 - z = 1."
      },
      {
        id: "ex2-04",
        q: "Cho hình hộp chữ nhật ABCD.A'B'C'D' có AB = 3, AD = 4, AA' = 5. Khoảng cách từ A đến C' bằng:",
        options: ["5√2", "5", "√50", "7"],
        answer: 0,
        explain: "Độ dài đường chéo AC' = √(3^2 + 4^2 + 5^2) = √(9 + 16 + 25) = √50 = 5√2."
      },
      {
        id: "ex2-05",
        q: "Xác suất bắn trúng bia của xạ thủ A là 0.8, xạ thủ B là 0.7. Xác suất cả hai cùng bắn trúng là:",
        options: ["0.56", "0.50", "0.75", "0.80"],
        answer: 0,
        explain: "Hai người bắn độc lập: P = 0.8 * 0.7 = 0.56."
      },
      {
        id: "ex2-06",
        q: "Tiệm cận xiên của đồ thị hàm số y = (x^2 + 1)/x là:",
        options: ["y = x", "y = x + 1", "y = 2x", "x = 0"],
        answer: 0,
        explain: "y = x + 1/x => lim [y - x] = lim 1/x = 0 => tiệm cận xiên là y = x."
      }
    ]
  }
];
