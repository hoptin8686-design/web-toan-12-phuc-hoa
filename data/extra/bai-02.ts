import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-02_01",
      "context": "Xét hàm số y = f(x) = x^4 - 2x^2 + 3 trên đoạn [-1; 2].",
      "statements": [
        {
          "text": "Đạo hàm f'(x) = 4x(x^2 - 1) = 0 có nghiệm x = 0, x = ±1 thuộc [-1; 2].",
          "answer": true,
          "explain": "Các nghiệm 0, 1, -1 đều thuộc [-1; 2]."
        },
        {
          "text": "Giá trị của hàm số tại các điểm tới hạn là f(0) = 3, f(1) = 2, f(-1) = 2.",
          "answer": true,
          "explain": "f(0) = 3, f(±1) = 1 - 2 + 3 = 2."
        },
        {
          "text": "Giá trị lớn nhất của hàm số trên [-1; 2] là 3.",
          "answer": false,
          "explain": "f(2) = 16 - 8 + 3 = 11 > 3, nên max = 11."
        },
        {
          "text": "Giá trị nhỏ nhất của hàm số trên [-1; 2] là 2.",
          "answer": true,
          "explain": "Min{f(-1), f(1), f(0), f(2)} = min{2, 2, 3, 11} = 2."
        }
      ]
    },
    {
      "id": "tf_bai-02_02",
      "context": "Cho hàm số y = (x - 1)/(x + 1) trên đoạn [0; 2].",
      "statements": [
        {
          "text": "Hàm số liên tục trên đoạn [0; 2].",
          "answer": true,
          "explain": "Mẫu số x + 1 khác 0 trên [0; 2]."
        },
        {
          "text": "Đạo hàm y' = 2/(x + 1)^2 > 0 với mọi x thuộc [0; 2].",
          "answer": true,
          "explain": "Hàm số đồng biến trên [0; 2]."
        },
        {
          "text": "Giá trị nhỏ nhất của hàm số đạt tại x = 0 và bằng -1.",
          "answer": true,
          "explain": "Hàm đồng biến nên min = y(0) = (0-1)/(0+1) = -1."
        },
        {
          "text": "Giá trị lớn nhất của hàm số trên [0; 2] là 1/3.",
          "answer": true,
          "explain": "Max = y(2) = (2-1)/(2+1) = 1/3."
        }
      ]
    },
    {
      "id": "tf_bai-02_03",
      "context": "Một mảnh vườn hình chữ nhật có chu vi bằng 40m. Gọi x (m) là chiều rộng của mảnh vườn (0 < x < 20).",
      "statements": [
        {
          "text": "Chiều dài của mảnh vườn là 40 - x (m).",
          "answer": false,
          "explain": "Nửa chu vi là 20m nên chiều dài là 20 - x (m)."
        },
        {
          "text": "Hàm số biểu diễn diện tích mảnh vườn là S(x) = 20x - x^2.",
          "answer": true,
          "explain": "S(x) = x(20 - x) = 20x - x^2."
        },
        {
          "text": "Diện tích mảnh vườn lớn nhất khi chiều rộng x = 10m.",
          "answer": true,
          "explain": "S'(x) = 20 - 2x = 0 <=> x = 10."
        },
        {
          "text": "Diện tích lớn nhất đạt được là 100 m^2.",
          "answer": true,
          "explain": "S(10) = 10 * 10 = 100 m^2."
        }
      ]
    },
    {
      "id": "tf_bai-02_04",
      "context": "Cho hàm số y = f(x) xác định và liên tục trên đoạn [-2; 3] có đồ thị đạt cực đại tại (-1; 4) và cực tiểu tại (1; -2). Biết f(-2) = 1, f(3) = 5.",
      "statements": [
        {
          "text": "Giá trị lớn nhất của hàm số trên [-2; 3] bằng 4.",
          "answer": false,
          "explain": "f(3) = 5 > 4 nên GTLN là 5 tại x = 3."
        },
        {
          "text": "Giá trị nhỏ nhất của hàm số trên [-2; 3] bằng -2.",
          "answer": true,
          "explain": "Min{-2, 1, 5} = -2 tại x = 1."
        },
        {
          "text": "Hàm số đạt giá trị lớn nhất tại x = 3.",
          "answer": true,
          "explain": "f(3) = 5 là giá trị cao nhất."
        },
        {
          "text": "Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng 3.",
          "answer": true,
          "explain": "M + m = 5 + (-2) = 3."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-02_01",
      "q": "Tìm giá trị lớn nhất của hàm số y = -x^2 + 4x + 1 trên đoạn [0; 3].",
      "correctAnswer": "5",
      "explain": "Đỉnh parabol x = 2 thuộc [0; 3]. y(0) = 1, y(2) = 5, y(3) = 4. Giá trị lớn nhất bằng 5."
    },
    {
      "id": "sa_bai-02_02",
      "q": "Tìm giá trị nhỏ nhất của hàm số y = x^3 - 3x + 1 trên đoạn [0; 2].",
      "correctAnswer": "-1",
      "explain": "y' = 3x^2 - 3 = 0 <=> x = 1 thuộc [0; 2]. y(0) = 1, y(1) = -1, y(2) = 3. Giá trị nhỏ nhất là -1."
    },
    {
      "id": "sa_bai-02_03",
      "q": "Cho hàm số y = (2x + 1)/(x - 2) trên đoạn [3; 5]. Tính tích của giá trị lớn nhất và giá trị nhỏ nhất.",
      "correctAnswer": "25.67",
      "explain": "y' = -5/(x - 2)^2 < 0 nên nghịch biến. Max = y(3) = 7/1 = 7, min = y(5) = 11/3. Tích M*m = 7 * (11/3) = 77/3 ≈ 25.67."
    },
    {
      "id": "sa_bai-02_04",
      "q": "Người ta muốn uốn một sợi dây thép dài 60 cm thành một hình chữ nhật có diện tích lớn nhất. Chiều dài mỗi cạnh của hình chữ nhật đó là bao nhiêu cm?",
      "correctAnswer": "15",
      "unit": "cm",
      "explain": "Hình chữ nhật có chu vi không đổi thì diện tích lớn nhất khi nó là hình vuông cạnh = 60 / 4 = 15 cm."
    },
    {
      "id": "sa_bai-02_05",
      "q": "Tìm giá trị nhỏ nhất của hàm số y = x + 9/x với x > 0.",
      "correctAnswer": "6",
      "explain": "Áp dụng BĐT Cô-si cho 2 số dương: x + 9/x >= 2*sqrt(x * 9/x) = 2*3 = 6. Dấu bằng khi x = 3."
    },
    {
      "id": "sa_bai-02_06",
      "q": "Giá trị lớn nhất của hàm số y = sin(x) - cos(x) bằng bao nhiêu (làm tròn 2 chữ số thập phân)?",
      "correctAnswer": "1.41",
      "explain": "sin(x) - cos(x) = sqrt(2)*sin(x - pi/4) <= sqrt(2) ≈ 1.41."
    }
  ],
  "essay": [
    {
      "id": "es_bai-02",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-02.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
