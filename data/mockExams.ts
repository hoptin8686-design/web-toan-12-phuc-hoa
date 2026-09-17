import type { MockExam } from "@/lib/types";

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-thi-thu-01",
    title: "Đề thi thử Tốt nghiệp THPT 2025 — Đề số 01 (Chuẩn cấu trúc Bộ GD&ĐT)",
    durationMinutes: 90,
    description: "Đề thi chính thức chuẩn định dạng Bộ GD&ĐT gồm 3 phần: 12 câu trắc nghiệm nhiều phương án, 4 câu Đúng/Sai và 6 câu trả lời ngắn.",
    // ==========================================
    // PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN
    // ==========================================
    questions: [
      {
        id: "p1-01",
        q: "Cho hàm số f(x) có bảng xét dấu đạo hàm: f'(x) đổi dấu từ dương sang âm khi qua x = 1 và từ âm sang dương khi qua x = 3. Điểm cực đại của hàm số đã cho là:",
        options: ["x = 1", "x = 3", "y = 1", "x = 2"],
        answer: 0,
        explain: "Đạo hàm đổi dấu từ dương (+) sang âm (-) khi qua x = 1 nên x = 1 là điểm cực đại của hàm số."
      },
      {
        id: "p1-02",
        q: "Hàm số y = x^3 - 3x^2 + 2 đồng biến trên khoảng nào dưới đây?",
        options: ["(2; +∞)", "(0; 2)", "(-∞; 2)", "(0; +∞)"],
        answer: 0,
        explain: "y' = 3x^2 - 6x = 3x(x - 2) > 0 <=> x < 0 hoặc x > 2. Khoảng (2; +∞) thuộc miền đồng biến."
      },
      {
        id: "p1-03",
        q: "Đường tiệm cận ngang của đồ thị hàm số y = (3x - 1)/(x + 2) là đường thẳng:",
        options: ["y = 3", "x = -2", "y = -1/2", "x = 3"],
        answer: 0,
        explain: "lim_{x -> ±∞} (3x - 1)/(x + 2) = 3 nên tiệm cận ngang là y = 3."
      },
      {
        id: "p1-04",
        q: "Giá trị nhỏ nhất của hàm số f(x) = x^3 - 3x + 2 trên đoạn [0; 2] bằng:",
        options: ["0", "2", "4", "-2"],
        answer: 0,
        explain: "f'(x) = 3x^2 - 3 = 0 <=> x = 1 ∈ [0; 2]. Ta có f(0) = 2, f(1) = 0, f(2) = 4. Vậy min = 0 tại x = 1."
      },
      {
        id: "p1-05",
        q: "Trong không gian, cho hình hộp ABCD.A'B'C'D'. Vectơ tổng AB + AD + AA' bằng vectơ nào sau đây?",
        options: ["AC'", "CA'", "BD'", "A'C"],
        answer: 0,
        explain: "Theo quy tắc hình hộp trong không gian: AB + AD + AA' = AC' (đường chéo xuất phát từ đỉnh A)."
      },
      {
        id: "p1-06",
        q: "Trong không gian Oxyz, cho hai vectơ a = (1; 2; -3) và b = (2; -1; 1). Tích vô hướng a . b bằng:",
        options: ["-3", "3", "5", "-5"],
        answer: 0,
        explain: "a . b = 1*2 + 2*(-1) + (-3)*1 = 2 - 2 - 3 = -3."
      },
      {
        id: "p1-07",
        q: "Trong không gian Oxyz, mặt phẳng (P): 2x - y + 3z - 4 = 0 có một vectơ pháp tuyến là:",
        options: ["n = (2; -1; 3)", "n = (2; 1; 3)", "n = (2; -1; -4)", "n = (-1; 3; -4)"],
        answer: 0,
        explain: "Toạ độ vectơ pháp tuyến lấy từ các hệ số của x, y, z: n = (2; -1; 3)."
      },
      {
        id: "p1-08",
        q: "Nguyên hàm của hàm số f(x) = cos 2x là:",
        options: ["(1/2) sin 2x + C", "-2 sin 2x + C", "2 sin 2x + C", "-(1/2) sin 2x + C"],
        answer: 0,
        explain: "∫ cos(ax+b) dx = (1/a) sin(ax+b) + C => (1/2) sin 2x + C."
      },
      {
        id: "p1-09",
        q: "Tích phân I = ∫_0^1 e^(3x) dx có giá trị bằng:",
        options: ["(e^3 - 1) / 3", "e^3 - 1", "(e^3 + 1) / 3", "3(e^3 - 1)"],
        answer: 0,
        explain: "[(1/3) e^(3x)] |_0^1 = (1/3)(e^3 - 1)."
      },
      {
        id: "p1-10",
        q: "Trong không gian Oxyz, mặt cầu (S): (x - 2)^2 + (y + 1)^2 + z^2 = 25 có bán kính R bằng:",
        options: ["5", "25", "10", "√5"],
        answer: 0,
        explain: "R = √25 = 5."
      },
      {
        id: "p1-11",
        q: "Cho hai biến cố A và B độc lập với nhau, biết P(A) = 0.5 và P(B) = 0.6. Xác suất biến cố giao P(AB) bằng:",
        options: ["0.30", "0.10", "1.10", "0.55"],
        answer: 0,
        explain: "Vì A và B độc lập nên P(AB) = P(A) * P(B) = 0.5 * 0.6 = 0.30."
      },
      {
        id: "p1-12",
        q: "Một mẫu số liệu ghép nhóm có phương sai s² = 16. Độ lệch chuẩn s của mẫu số liệu bằng:",
        options: ["4", "256", "8", "2"],
        answer: 0,
        explain: "Độ lệch chuẩn s = √(s²) = √16 = 4."
      }
    ],

    // ==========================================
    // PHẦN II: 4 CÂU ĐÚNG / SAI (MỖI CÂU 4 Ý A,B,C,D)
    // ==========================================
    tfQuestions: [
      {
        id: "p2-01",
        context: "Cho hàm số f(x) = (2x^2 - 3x + 2)/(x - 1).",
        statements: [
          {
            text: "a) Tập xác định của hàm số là D = ℝ \\ {1}.",
            answer: true,
            explain: "Hàm phân thức xác định khi mẫu số khác 0 <=> x ≠ 1."
          },
          {
            text: "b) Đồ thị hàm số có đường tiệm cận đứng là x = 1.",
            answer: true,
            explain: "Tại x = 1 mẫu bằng 0, tử bằng 2(1) - 3(1) + 2 = 1 ≠ 0 nên x = 1 là tiệm cận đứng."
          },
          {
            text: "c) Đồ thị hàm số có đường tiệm cận xiên là y = 2x - 1.",
            answer: true,
            explain: "Chia đa thức: (2x^2 - 3x + 2)/(x - 1) = 2x - 1 + 1/(x - 1). Suy ra tiệm cận xiên là y = 2x - 1."
          },
          {
            text: "d) Hàm số đồng biến trên toàn bộ tập xác định ℝ \\ {1}.",
            answer: false,
            explain: "y' = 2 - 1/(x - 1)^2 = (2(x-1)^2 - 1)/(x-1)^2. Đạo hàm đổi dấu nên hàm số không đồng biến trên toàn miền."
          }
        ]
      },
      {
        id: "p2-02",
        context: "Trong không gian Oxyz, cho mặt phẳng (P): 2x - 2y + z + 5 = 0 và điểm A(1; 2; -3).",
        statements: [
          {
            text: "a) Vectơ n = (2; -2; 1) là một vectơ pháp tuyến của mặt phẳng (P).",
            answer: true,
            explain: "Toạ độ vectơ pháp tuyến chính là hệ số trước x, y, z của (P): n = (2; -2; 1)."
          },
          {
            text: "b) Điểm A(1; 2; -3) thuộc mặt phẳng (P).",
            answer: false,
            explain: "Thay toạ độ A vào pt: 2(1) - 2(2) + (-3) + 5 = 2 - 4 - 3 + 5 = 0. A THUỘC (P)!"
          },
          {
            text: "c) Khoảng cách từ gốc toạ độ O đến mặt phẳng (P) bằng 5/3.",
            answer: true,
            explain: "d(O, (P)) = |5| / √(2^2 + (-2)^2 + 1^2) = 5 / √9 = 5/3."
          },
          {
            text: "d) Mặt phẳng (Q) song song với (P) và đi qua O có phương trình 2x - 2y + z = 0.",
            answer: true,
            explain: "(Q) cùng VTPT với (P) và đi qua O(0;0;0) nên có phương trình 2x - 2y + z = 0."
          }
        ]
      },
      {
        id: "p2-03",
        context: "Cho hàm số f(x) = 3x^2 - 2x + 1 và F(x) là một nguyên hàm của f(x) thoả mãn F(1) = 4.",
        statements: [
          {
            text: "a) Họ tất cả các nguyên hàm của f(x) là F(x) = x^3 - x^2 + x + C.",
            answer: true,
            explain: "∫ (3x^2 - 2x + 1) dx = x^3 - x^2 + x + C."
          },
          {
            text: "b) Với điều kiện F(1) = 4 thì hằng số C = 3.",
            answer: true,
            explain: "F(1) = 1^3 - 1^2 + 1 + C = 1 + C = 4 <=> C = 3."
          },
          {
            text: "c) Tích phân I = ∫_0^2 f(x) dx có giá trị bằng 6.",
            answer: true,
            explain: "I = (x^3 - x^2 + x) |_0^2 = (8 - 4 + 2) - 0 = 6."
          },
          {
            text: "d) Diện tích hình phẳng giới hạn bởi đồ thị y = f(x), trục Ox và hai đường thẳng x = 0, x = 1 bằng 1.",
            answer: true,
            explain: "f(x) = 3x^2 - 2x + 1 > 0 ∀x. S = ∫_0^1 (3x^2 - 2x + 1) dx = (x^3 - x^2 + x)|_0^1 = 1 - 1 + 1 = 1."
          }
        ]
      },
      {
        id: "p2-04",
        context: "Một hộp có 6 quả cầu đỏ và 4 quả cầu xanh. Lấy ngẫu nhiên liên tiếp 2 quả cầu (không hoàn lại). Gọi A là biến cố 'Quả cầu lấy lần 1 màu đỏ', B là biến cố 'Quả cầu lấy lần 2 màu đỏ'.",
        statements: [
          {
            text: "a) Xác suất để quả cầu lấy lần thứ nhất màu đỏ là P(A) = 0.6.",
            answer: true,
            explain: "P(A) = 6 / 10 = 0.6."
          },
          {
            text: "b) Xác suất có điều kiện P(B | A) = 5/9.",
            answer: true,
            explain: "Khi lần 1 đã lấy 1 quả đỏ, trong hộp còn 9 quả (5 đỏ, 4 xanh). P(B|A) = 5/9."
          },
          {
            text: "c) Xác suất để cả hai lần đều lấy được quả cầu màu đỏ là P(AB) = 1/3.",
            answer: true,
            explain: "P(AB) = P(A) * P(B|A) = (6/10) * (5/9) = 30/90 = 1/3."
          },
          {
            text: "d) Hai biến cố A và B độc lập với nhau.",
            answer: false,
            explain: "Vì lấy không hoàn lại nên kết quả lần 1 ảnh hưởng đến số bi lần 2, P(B|A) = 5/9 ≠ P(B) = 6/10 = 3/5. Do đó A và B không độc lập."
          }
        ]
      }
    ],

    // ==========================================
    // PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // ==========================================
    shortAnswerQuestions: [
      {
        id: "p3-01",
        q: "Một sợi dây kim loại dài 60 cm được uốn thành một hình chữ nhật. Tính diện tích lớn nhất (theo cm²) của hình chữ nhật đó.",
        correctAnswer: "225",
        unit: "cm²",
        explain: "Nửa chu vi x + y = 30 => y = 30 - x. Diện tích S(x) = x(30 - x) đạt GTLN khi hình vuông x = y = 15 cm. S_max = 15 * 15 = 225 cm²."
      },
      {
        id: "p3-02",
        q: "Tính diện tích hình phẳng (làm tròn đến hàng phần mười nếu cần) giới hạn bởi đồ thị parabol y = -x^2 + 4 và trục hoành Ox.",
        correctAnswer: "10.67",
        unit: "đvdt",
        explain: "Hoành độ giao điểm: -x^2 + 4 = 0 <=> x = ±2. S = ∫_{-2}^2 (4 - x^2) dx = (4x - x^3/3) |_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 32/3 ≈ 10.67."
      },
      {
        id: "p3-03",
        q: "Trong không gian Oxyz, cho mặt phẳng (P): 2x - y + 2z - 9 = 0 và điểm A(1; 2; 3). Tính khoảng cách từ điểm A đến mặt phẳng (P).",
        correctAnswer: "1",
        explain: "d(A, (P)) = |2(1) - 2 + 2(3) - 9| / √(2^2 + (-1)^2 + 2^2) = |2 - 2 + 6 - 9| / 3 = |-3| / 3 = 1."
      },
      {
        id: "p3-04",
        q: "Trong không gian Oxyz, cho mặt cầu (S): x^2 + y^2 + z^2 - 2x + 4y - 6z - 11 = 0. Tính bán kính R của mặt cầu (S).",
        correctAnswer: "5",
        explain: "Tâm I(1; -2; 3) và d = -11. Bán kính R = √(1^2 + (-2)^2 + 3^2 - (-11)) = √(1 + 4 + 9 + 11) = √25 = 5."
      },
      {
        id: "p3-05",
        q: "Một nhà máy có hai dây chuyền I và II sản xuất lần lượt 60% và 40% sản phẩm. Tỷ lệ phế phẩm của dây chuyền I là 2%, của dây chuyền II là 3%. Chọn ngẫu nhiên một sản phẩm. Tính xác suất (theo %) để sản phẩm được chọn là phế phẩm.",
        correctAnswer: "2.4",
        unit: "%",
        explain: "Theo công thức xác suất toàn phần: P(F) = 0.60 * 0.02 + 0.40 * 0.03 = 0.012 + 0.012 = 0.024 = 2.4%."
      },
      {
        id: "p3-06",
        q: "Cho hàm số f(x) có đạo hàm f'(x) = 3x^2 - 6x. Tính toạ độ hoành độ của điểm cực tiểu của hàm số.",
        correctAnswer: "2",
        explain: "f'(x) = 3x(x - 2) = 0 <=> x = 0 hoặc x = 2. f'(x) đổi dấu từ âm sang dương khi qua x = 2 nên điểm cực tiểu là x = 2."
      }
    ]
  },
  {
    id: "de-thi-thu-02",
    title: "Đề thi thử Tốt nghiệp THPT 2025 — Đề số 02 (Phát triển Ma trận Đề Tham Khảo)",
    durationMinutes: 90,
    description: "Bộ đề rèn luyện nâng cao tư duy phản biện, tối ưu hoá hình học và giải tích không gian Oxyz chuẩn 12 câu trắc nghiệm, 4 câu Đúng/Sai, 6 câu trả lời ngắn.",
    // ==========================================
    // PHẦN I: 12 CÂU TRẮC NGHIỆM NHIỀU LỰA CHỌN
    // ==========================================
    questions: [
      {
        id: "p1-02-01",
        q: "Số điểm cực trị của hàm số y = x^4 - 4x^2 + 1 là:",
        options: ["3", "1", "2", "0"],
        answer: 0,
        explain: "y' = 4x^3 - 8x = 4x(x^2 - 2) = 0 có 3 nghiệm phân biệt đổi dấu nên hàm số có 3 điểm cực trị."
      },
      {
        id: "p1-02-02",
        q: "Hàm số y = -x^3 + 3x^2 - 2 nghịch biến trên khoảng nào sau đây?",
        options: ["(2; +∞) và (-∞; 0)", "(0; 2)", "(-∞; 2)", "(0; +∞)"],
        answer: 0,
        explain: "y' = -3x^2 + 6x = -3x(x - 2) < 0 <=> x < 0 hoặc x > 2."
      },
      {
        id: "p1-02-03",
        q: "Đường tiệm cận xiên của đồ thị hàm số y = (x^2 + 2x - 1)/(x + 1) là:",
        options: ["y = x + 1", "y = x - 1", "y = x + 2", "y = 2x"],
        answer: 0,
        explain: "(x^2 + 2x - 1)/(x + 1) = x + 1 - 2/(x + 1) => Tiệm cận xiên: y = x + 1."
      },
      {
        id: "p1-02-04",
        q: "GTLN của hàm số y = √(16 - x^2) bằng:",
        options: ["4", "16", "0", "2"],
        answer: 0,
        explain: "√(16 - x^2) <= √16 = 4. Dấu bằng xảy ra tại x = 0."
      },
      {
        id: "p1-02-05",
        q: "Trong không gian Oxyz, cho A(1; 2; 3) và B(3; 0; 1). Toạ độ trung điểm I của đoạn AB là:",
        options: ["(2; 1; 2)", "(4; 2; 4)", "(1; -1; -1)", "(2; 0; 2)"],
        answer: 0,
        explain: "I = ((1+3)/2; (2+0)/2; (3+1)/2) = (2; 1; 2)."
      },
      {
        id: "p1-02-06",
        q: "Trong không gian Oxyz, vectơ đơn vị k của trục cao Oz có toạ độ là:",
        options: ["(0; 0; 1)", "(1; 0; 0)", "(0; 1; 0)", "(1; 1; 1)"],
        answer: 0,
        explain: "Vectơ đơn vị của Oz là k = (0; 0; 1)."
      },
      {
        id: "p1-02-07",
        q: "Họ nguyên hàm của hàm số f(x) = 1/(2x + 1) trên (0; +∞) là:",
        options: ["(1/2) ln(2x + 1) + C", "ln(2x + 1) + C", "2 ln(2x + 1) + C", "-1/(2x+1)^2 + C"],
        answer: 0,
        explain: "∫ 1/(ax+b) dx = (1/a) ln|ax+b| + C => (1/2) ln(2x + 1) + C."
      },
      {
        id: "p1-02-08",
        q: "Tích phân I = ∫_0^(π/2) cos x dx có giá trị bằng:",
        options: ["1", "0", "-1", "2"],
        answer: 0,
        explain: "sin(π/2) - sin(0) = 1 - 0 = 1."
      },
      {
        id: "p1-02-09",
        q: "Trong không gian Oxyz, mặt phẳng đi qua A(2; 0; 0), B(0; 3; 0), C(0; 0; -1) có phương trình đoạn chắn là:",
        options: ["x/2 + y/3 - z = 1", "x/2 + y/3 + z = 1", "2x + 3y - z = 1", "x/2 + y/3 + z/(-1) = 0"],
        answer: 0,
        explain: "x/2 + y/3 + z/(-1) = 1 <=> x/2 + y/3 - z = 1."
      },
      {
        id: "p1-02-10",
        q: "Trong không gian Oxyz, đường thẳng d: (x - 1)/2 = (y + 3)/(-1) = z/4 có một VTCP là:",
        options: ["u = (2; -1; 4)", "u = (1; -3; 0)", "u = (-1; 3; 0)", "u = (2; 1; 4)"],
        answer: 0,
        explain: "Toạ độ VTCP lấy từ mẫu số: u = (2; -1; 4)."
      },
      {
        id: "p1-02-11",
        q: "Xác suất bắn trúng bia của xạ thủ 1 là 0.8, của xạ thủ 2 là 0.7. Xác suất cả hai cùng bắn trúng là:",
        options: ["0.56", "0.50", "0.75", "0.80"],
        answer: 0,
        explain: "Hai người bắn độc lập: P = 0.8 * 0.7 = 0.56."
      },
      {
        id: "p1-02-12",
        q: "Khoảng biến thiên của mẫu số liệu ghép nhóm [10; 20), [20; 30), [30; 40), [40; 50) bằng:",
        options: ["40", "50", "10", "30"],
        answer: 0,
        explain: "R = 50 - 10 = 40."
      }
    ],

    // ==========================================
    // PHẦN II: 4 CÂU ĐÚNG / SAI (MỖI CÂU 4 Ý A,B,C,D)
    // ==========================================
    tfQuestions: [
      {
        id: "p2-02-01",
        context: "Cho hàm số f(x) = x^3 - 3x^2 + 1.",
        statements: [
          {
            text: "a) Đạo hàm f'(x) = 3x^2 - 6x có hai nghiệm là x = 0 và x = 2.",
            answer: true,
            explain: "f'(x) = 3x(x - 2) = 0 <=> x = 0 hoặc x = 2."
          },
          {
            text: "b) Điểm cực đại của đồ thị hàm số là (0; 1).",
            answer: true,
            explain: "f'(x) đổi dấu từ + sang - khi qua x = 0, f(0) = 1 nên điểm cực đại của đồ thị là (0; 1)."
          },
          {
            text: "c) Giá trị cực tiểu của hàm số bằng -3.",
            answer: true,
            explain: "f(2) = 2^3 - 3(2^2) + 1 = 8 - 12 + 1 = -3."
          },
          {
            text: "d) Đồ thị hàm số nhận điểm uốn I(1; -1) làm tâm đối xứng.",
            answer: true,
            explain: "f''(x) = 6x - 6 = 0 <=> x = 1, y(1) = -1. Đồ thị bậc ba luôn nhận điểm uốn làm tâm đối xứng."
          }
        ]
      },
      {
        id: "p2-02-02",
        context: "Trong không gian Oxyz, cho đường thẳng d: (x - 1)/2 = (y + 1)/1 = (z - 2)/(-2) và mặt phẳng (P): 2x + y - 2z + 1 = 0.",
        statements: [
          {
            text: "a) Vectơ chỉ phương của đường thẳng d là u = (2; 1; -2).",
            answer: true,
            explain: "Đúng theo mẫu số của phương trình chính tắc."
          },
          {
            text: "b) Vectơ pháp tuyến của mặt phẳng (P) là n = (2; 1; -2).",
            answer: true,
            explain: "Đúng theo hệ số của phương trình mặt phẳng."
          },
          {
            text: "c) Đường thẳng d vuông góc với mặt phẳng (P).",
            answer: true,
            explain: "Vì VTCP u cùng phương với VTPT n (u = n) nên đường thẳng d vuông góc với mặt phẳng (P)."
          },
          {
            text: "d) Điểm M(1; -1; 2) thuộc cả đường thẳng d và mặt phẳng (P).",
            answer: true,
            explain: "Thay M vào d: (1-1)/2 = (-1+1)/1 = (2-2)/(-2) = 0 (thuộc d). Thay M vào (P): 2(1) + (-1) - 2(2) + 1 = 2 - 1 - 4 + 1 = -2 ≠ 0 => M KHÔNG thuộc (P). Vậy ý này Sai!"
          }
        ]
      },
      {
        id: "p2-02-03",
        context: "Cho hình phẳng (H) giới hạn bởi đường cong y = x^2, trục hoành Ox và đường thẳng x = 2.",
        statements: [
          {
            text: "a) Diện tích hình phẳng (H) được tính bởi tích phân S = ∫_0^2 x^2 dx.",
            answer: true,
            explain: "Đúng theo định nghĩa diện tích hình phẳng."
          },
          {
            text: "b) Diện tích hình phẳng (H) bằng 8/3.",
            answer: true,
            explain: "S = x^3/3 |_0^2 = 8/3."
          },
          {
            text: "c) Thể tích khối tròn xoay tạo thành khi quay (H) quanh trục Ox là V = π ∫_0^2 x^4 dx.",
            answer: true,
            explain: "V = π ∫_0^2 (x^2)^2 dx = π ∫_0^2 x^4 dx."
          },
          {
            text: "d) Thể tích khối tròn xoay nói trên bằng 32π/5.",
            answer: true,
            explain: "V = π [x^5/5]|_0^2 = 32π / 5."
          }
        ]
      },
      {
        id: "p2-02-04",
        context: "Cho mẫu số liệu ghép nhóm về thời gian tự học (giờ/ngày) của 50 học sinh với số trung bình x̄ = 3.5 giờ và phương sai s² = 0.64.",
        statements: [
          {
            text: "a) Độ lệch chuẩn của mẫu số liệu là s = 0.8 giờ.",
            answer: true,
            explain: "s = √0.64 = 0.8 giờ."
          },
          {
            text: "b) Nếu mỗi học sinh tăng thời gian tự học thêm 1 giờ thì độ lệch chuẩn mới tăng thành 1.8 giờ.",
            answer: false,
            explain: "Cộng thêm một hằng số vào số liệu không làm thay đổi độ lệch chuẩn, độ lệch chuẩn vẫn là 0.8 giờ."
          },
          {
            text: "c) Độ lệch chuẩn đo mức độ phân tán của thời gian tự học quanh giá trị trung bình 3.5 giờ.",
            answer: true,
            explain: "Đúng định nghĩa ý nghĩa thống kê của độ lệch chuẩn."
          },
          {
            text: "d) Độ lệch chuẩn càng nhỏ chứng tỏ thời gian tự học của các bạn học sinh càng đồng đều.",
            answer: true,
            explain: "Đúng, độ lệch chuẩn nhỏ phản ánh tính đồng đều của số liệu."
          }
        ]
      }
    ],

    // ==========================================
    // PHẦN III: 6 CÂU TRẮC NGHIỆM TRẢ LỜI NGẮN
    // ==========================================
    shortAnswerQuestions: [
      {
        id: "p3-02-01",
        q: "Tìm giá trị lớn nhất của hàm số y = -x^3 + 3x + 1 trên đoạn [0; 2].",
        correctAnswer: "3",
        explain: "y' = -3x^2 + 3 = 0 <=> x = 1 ∈ [0; 2]. y(0) = 1, y(1) = 3, y(2) = -1. GTLN = 3 tại x = 1."
      },
      {
        id: "p3-02-02",
        q: "Tính tích phân I = ∫_0^1 (2x + 3) dx.",
        correctAnswer: "4",
        explain: "I = (x^2 + 3x) |_0^1 = 1 + 3 - 0 = 4."
      },
      {
        id: "p3-02-03",
        q: "Trong không gian Oxyz, cho hai điểm A(1; 1; 2) và B(3; 3; 3). Tính độ dài đoạn thẳng AB.",
        correctAnswer: "3",
        explain: "AB = √[(3-1)^2 + (3-1)^2 + (3-2)^2] = √(4 + 4 + 1) = √9 = 3."
      },
      {
        id: "p3-02-04",
        q: "Trong không gian Oxyz, mặt cầu tâm I(1; -2; 3) tiếp xúc với mặt phẳng toạ độ (Oxy) có bán kính R bằng bao nhiêu?",
        correctAnswer: "3",
        explain: "Khoảng cách từ I đến mặt phẳng (Oxy) là d = |z_I| = |3| = 3. Do tiếp xúc nên R = 3."
      },
      {
        id: "p3-02-05",
        q: "Gieo đồng thời hai con xúc xắc cân đối. Tính xác suất (làm tròn 2 chữ số thập phân) để tổng số chấm xuất hiện trên hai con bằng 7.",
        correctAnswer: "0.17",
        explain: "Không gian mẫu 36 phần tử. Các cặp có tổng bằng 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) có 6 cặp. P = 6/36 = 1/6 ≈ 0.17."
      },
      {
        id: "p3-02-06",
        q: "Tính hệ số góc k của tiếp tuyến của đồ thị hàm số y = x^3 - 2x + 3 tại điểm có hoành độ x0 = 2.",
        correctAnswer: "10",
        explain: "y' = 3x^2 - 2. Hệ số góc k = y'(2) = 3(4) - 2 = 10."
      }
    ]
  }
];
