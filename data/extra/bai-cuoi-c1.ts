import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c1_01",
      "context": "Cho hàm số y = f(x) = (2x - 1)/(x + 1) có đồ thị là (C).",
      "statements": [
        {
          "text": "Đồ thị (C) có tiệm cận đứng là x = -1 và tiệm cận ngang là y = 2.",
          "answer": true,
          "explain": "lim khi x -> -1 là vô cực, lim khi x -> vô cực là 2."
        },
        {
          "text": "Hàm số đồng biến trên tập R \\ {-1}.",
          "answer": false,
          "explain": "Sai về cách diễn đạt tập hợp: hàm đồng biến trên từng khoảng (-∞; -1) và (-1; +∞)."
        },
        {
          "text": "Tâm đối xứng của đồ thị là I(-1; 2).",
          "answer": true,
          "explain": "Giao điểm của 2 đường tiệm cận là I(-1; 2)."
        },
        {
          "text": "Đồ thị (C) cắt trục tung tại điểm M(0; -1).",
          "answer": true,
          "explain": "f(0) = (0 - 1)/(0 + 1) = -1."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c1_02",
      "context": "Cho hàm số y = x^3 - 3x^2 + 2 có đồ thị (C).",
      "statements": [
        {
          "text": "Hàm số có hai điểm cực trị là x = 0 và x = 2.",
          "answer": true,
          "explain": "y' = 3x^2 - 6x = 0 <=> x = 0 hoặc x = 2."
        },
        {
          "text": "Giá trị cực đại của hàm số là 2, giá trị cực tiểu là -2.",
          "answer": true,
          "explain": "y(0) = 2, y(2) = 8 - 12 + 2 = -2."
        },
        {
          "text": "Điểm uốn của đồ thị là U(1; 0).",
          "answer": true,
          "explain": "y'' = 6x - 6 = 0 <=> x = 1, y(1) = 0."
        },
        {
          "text": "Phương trình tiếp tuyến của (C) tại điểm uốn có hệ số góc bằng 3.",
          "answer": false,
          "explain": "y'(1) = 3(1)^2 - 6(1) = -3 khác 3."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c1_03",
      "context": "Cho hàm số y = (x^2 - 2x + 2)/(x - 1).",
      "statements": [
        {
          "text": "Tập xác định của hàm số là D = R \\ {1}.",
          "answer": true,
          "explain": "Mẫu số khác 0 <=> x khác 1."
        },
        {
          "text": "Đồ thị có tiệm cận đứng là x = 1.",
          "answer": true,
          "explain": "Tử số tại x = 1 là 1 khác 0."
        },
        {
          "text": "Đường tiệm cận xiên có phương trình là y = x - 1.",
          "answer": true,
          "explain": "(x^2 - 2x + 2)/(x - 1) = x - 1 + 1/(x - 1). TCX là y = x - 1."
        },
        {
          "text": "Đồ thị hàm số có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.",
          "answer": true,
          "explain": "y' = 1 - 1/(x-1)^2 = 0 <=> (x-1)^2 = 1 <=> x = 2 hoặc x = 0. Hai nghiệm nằm về hai phía x = 1."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c1_04",
      "context": "Xét bài toán tìm giá trị lớn nhất, nhỏ nhất của hàm số f(x) = x + 1/x trên đoạn [1/2; 3].",
      "statements": [
        {
          "text": "Đạo hàm f'(x) = 1 - 1/x^2 = 0 có nghiệm x = 1 thuộc [1/2; 3].",
          "answer": true,
          "explain": "x = 1 thuộc [1/2; 3]."
        },
        {
          "text": "Giá trị của hàm số tại các mút là f(1/2) = 5/2 và f(3) = 10/3.",
          "answer": true,
          "explain": "f(1/2) = 1/2 + 2 = 5/2; f(3) = 3 + 1/3 = 10/3."
        },
        {
          "text": "Giá trị nhỏ nhất của hàm số trên đoạn [1/2; 3] bằng 2.",
          "answer": true,
          "explain": "f(1) = 1 + 1 = 2 < 5/2 < 10/3. Min = 2."
        },
        {
          "text": "Giá trị lớn nhất của hàm số trên đoạn [1/2; 3] là 5/2.",
          "answer": false,
          "explain": "10/3 ≈ 3.33 > 5/2 = 2.5 nên GTLN là 10/3."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c1_01",
      "q": "Tìm giá trị cực đại của hàm số y = -x^3 + 3x^2 + 9x - 2.",
      "correctAnswer": "25",
      "explain": "y' = -3x^2 + 6x + 9 = 0 <=> x = 3 hoặc x = -1. Cực đại tại x = 3, y(3) = -27 + 27 + 27 - 2 = 25."
    },
    {
      "id": "sa_bai-cuoi-c1_02",
      "q": "Tìm khoảng cách giữa hai đường tiệm cận đứng của đồ thị hàm số y = 1/(x^2 - 9).",
      "correctAnswer": "6",
      "explain": "Hai tiệm cận đứng là x = 3 và x = -3. Khoảng cách = 3 - (-3) = 6."
    },
    {
      "id": "sa_bai-cuoi-c1_03",
      "q": "Tìm giá trị nhỏ nhất của hàm số y = x^4 - 4x^2 + 3 trên đoạn [-1; 2].",
      "correctAnswer": "-1",
      "explain": "y' = 4x(x^2 - 2) = 0 => x = 0, x = ±sqrt(2). x = sqrt(2) thuộc [-1; 2]. y(sqrt(2)) = 4 - 8 + 3 = -1."
    },
    {
      "id": "sa_bai-cuoi-c1_04",
      "q": "Tìm hoành độ giao điểm của tiệm cận xiên của đồ thị y = (x^2 + x - 2)/(x + 2) với trục hoành.",
      "correctAnswer": "1",
      "explain": "y = x - 1. Giao với trục hoành y = 0 <=> x - 1 = 0 <=> x = 1."
    },
    {
      "id": "sa_bai-cuoi-c1_05",
      "q": "Một hộp chữ nhật không nắp có thể tích 32 m^3, đáy là hình vuông cạnh x (m). Chiều cao h bằng bao nhiêu mét để diện tích toàn phần của hộp nhỏ nhất?",
      "correctAnswer": "2",
      "unit": "m",
      "explain": "V = x^2*h = 32 => h = 32/x^2. S = x^2 + 4xh = x^2 + 128/x. S' = 2x - 128/x^2 = 0 <=> x^3 = 64 <=> x = 4m. Khi đó h = 32/16 = 2m."
    },
    {
      "id": "sa_bai-cuoi-c1_06",
      "q": "Cho hàm số y = x^3 - 3x^2 + m. Tìm m để giá trị nhỏ nhất của hàm số trên [-1; 1] bằng 0.",
      "correctAnswer": "4",
      "explain": "Trên [-1; 1], y' = 3x(x - 2) <= 0 nên nghịch biến. Min đạt tại x = 1 => y(1) = 1 - 3 + m = m - 2? Không, y(-1) = -1 - 3 + m = m - 4. Min = y(1) = m - 2? So sánh: y(-1) = m - 4, y(1) = m - 2. Nghịch biến nên min đạt tại x = 1 là sai, min đạt tại x = 1 nếu y' <= 0? Với x thuộc (-1; 0), 3x(x-2) > 0 (đồng biến). Tại x = 0 cực đại. y(-1) = m - 4, y(0) = m, y(1) = m - 2. Min là m - 4. m - 4 = 0 <=> m = 4."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c1",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c1.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
