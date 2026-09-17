import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-03_01",
      "context": "Cho hàm số y = (2x - 3)/(x + 1).",
      "statements": [
        {
          "text": "Đồ thị hàm số có đường tiệm cận đứng là đường thẳng x = -1.",
          "answer": true,
          "explain": "lim khi x -> (-1)+ là -∞."
        },
        {
          "text": "Đồ thị hàm số có đường tiệm cận ngang là đường thẳng y = 2.",
          "answer": true,
          "explain": "lim khi x -> ±∞ bằng 2/1 = 2."
        },
        {
          "text": "Giao điểm của hai đường tiệm cận là I(-1; 2).",
          "answer": true,
          "explain": "Tâm đối xứng là giao của TCĐ x = -1 và TCN y = 2."
        },
        {
          "text": "Đồ thị hàm số có đường tiệm cận xiên.",
          "answer": false,
          "explain": "Bậc tử bằng bậc mẫu nên chỉ có tiệm cận ngang, không có tiệm cận xiên."
        }
      ]
    },
    {
      "id": "tf_bai-03_02",
      "context": "Cho hàm số y = (x^2 + x - 1)/(x - 2).",
      "statements": [
        {
          "text": "Đồ thị hàm số có tiệm cận đứng là x = 2.",
          "answer": true,
          "explain": "Tử số tại x = 2 bằng 4 + 2 - 1 = 5 khác 0, mẫu số bằng 0."
        },
        {
          "text": "Ta có phân tích y = x + 3 + 5/(x - 2).",
          "answer": true,
          "explain": "(x^2 + x - 1) : (x - 2) = x + 3 dư 5."
        },
        {
          "text": "Đường tiệm cận xiên của đồ thị là y = x + 3.",
          "answer": true,
          "explain": "lim [y - (x + 3)] = lim [5/(x - 2)] = 0 khi x -> ±∞."
        },
        {
          "text": "Đồ thị hàm số có đường tiệm cận ngang y = 1.",
          "answer": false,
          "explain": "Bậc tử lớn hơn bậc mẫu nên không có tiệm cận ngang."
        }
      ]
    },
    {
      "id": "tf_bai-03_03",
      "context": "Xét đường tiệm cận của đồ thị hàm số y = (sqrt(x^2 + 1) + x)/x.",
      "statements": [
        {
          "text": "Tập xác định của hàm số là D = R \\ {0}.",
          "answer": true,
          "explain": "x^2 + 1 > 0 với mọi x, mẫu số x khác 0."
        },
        {
          "text": "Đường thẳng x = 0 là tiệm cận đứng của đồ thị.",
          "answer": true,
          "explain": "lim khi x -> 0+ là +∞."
        },
        {
          "text": "Khi x -> +∞ thì y -> 2 nên y = 2 là một tiệm cận ngang.",
          "answer": true,
          "explain": "sqrt(x^2+1)/x -> 1 khi x -> +∞, nên y -> 1 + 1 = 2."
        },
        {
          "text": "Đồ thị hàm số chỉ có đúng một tiệm cận ngang.",
          "answer": false,
          "explain": "Khi x -> -∞, sqrt(x^2+1)/x -> -1, nên y -> -1 + 1 = 0. Do đó có 2 TCN y = 2 và y = 0."
        }
      ]
    },
    {
      "id": "tf_bai-03_04",
      "context": "Cho hàm số y = (ax + 1)/(bx - 2) có đồ thị đi qua A(1; 3) và nhận x = 2 làm tiệm cận đứng.",
      "statements": [
        {
          "text": "Từ điều kiện tiệm cận đứng x = 2 suy ra b = 1.",
          "answer": true,
          "explain": "Mẫu số b*2 - 2 = 0 <=> b = 1."
        },
        {
          "text": "Từ điều kiện đồ thị qua A(1; 3) suy ra a = -4.",
          "answer": true,
          "explain": "(a + 1)/(1 - 2) = 3 <=> a + 1 = -3 <=> a = -4."
        },
        {
          "text": "Tiệm cận ngang của đồ thị hàm số là đường thẳng y = -4.",
          "answer": true,
          "explain": "y = ax/bx = a/b = -4/1 = -4."
        },
        {
          "text": "Giá trị biểu thức a + b = -5.",
          "answer": false,
          "explain": "a + b = -4 + 1 = -3."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-03_01",
      "q": "Tìm toạ độ giao điểm I của hai đường tiệm cận của đồ thị hàm số y = (3x - 1)/(x + 2). Nhập hoành độ x của I.",
      "correctAnswer": "-2",
      "explain": "Tiệm cận đứng x = -2, tiệm cận ngang y = 3. Hoành độ giao điểm x = -2."
    },
    {
      "id": "sa_bai-03_02",
      "q": "Đồ thị hàm số y = (2x + 1)/(x - 3) có tiệm cận ngang là đường thẳng y = a. Tìm giá trị của a.",
      "correctAnswer": "2",
      "explain": "lim khi x -> ±∞ của (2x + 1)/(x - 3) = 2. Vậy a = 2."
    },
    {
      "id": "sa_bai-03_03",
      "q": "Cho hàm số y = (x^2 + 2x - 3)/(x + 1). Đường tiệm cận xiên có dạng y = ax + b. Tính giá trị a + b.",
      "correctAnswer": "2",
      "explain": "(x^2 + 2x - 3) : (x + 1) = x + 1 - 4/(x + 1). Tiệm cận xiên là y = x + 1 => a = 1, b = 1. Do đó a + b = 2."
    },
    {
      "id": "sa_bai-03_04",
      "q": "Đồ thị hàm số y = 1/(x^2 - 4) có tất cả bao nhiêu đường tiệm cận (cả đứng và ngang)?",
      "correctAnswer": "3",
      "explain": "2 tiệm cận đứng: x = 2, x = -2. 1 tiệm cận ngang: y = 0. Tổng cộng 3 tiệm cận."
    },
    {
      "id": "sa_bai-03_05",
      "q": "Tính khoảng cách từ gốc toạ độ O(0; 0) đến đường tiệm cận đứng của đồ thị hàm số y = (5x - 2)/(x - 4).",
      "correctAnswer": "4",
      "explain": "Tiệm cận đứng là x = 4. Khoảng cách từ O(0; 0) đến đường thẳng x = 4 bằng |0 - 4| = 4."
    },
    {
      "id": "sa_bai-03_06",
      "q": "Tìm m để đồ thị hàm số y = (x - 1)/(x^2 - 2x + m) có đúng 1 đường tiệm cận đứng.",
      "correctAnswer": "1",
      "explain": "Để có đúng 1 TCĐ thì mẫu có nghiệm kép hoặc mẫu có 2 nghiệm phân biệt trong đó 1 nghiệm là x = 1. delta' = 1 - m = 0 <=> m = 1 (khi đó mẫu (x-1)^2 có nghiệm kép x = 1, rút gọn với tử còn 1/(x-1) vẫn là TCĐ)."
    }
  ],
  "essay": [
    {
      "id": "es_bai-03",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-03.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
