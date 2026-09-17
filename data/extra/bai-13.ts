import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-13_01",
      "context": "Cho hình phẳng (H) giới hạn bởi đồ thị y = f(x), trục Ox và hai đường thẳng x = a, x = b (a < b).",
      "statements": [
        {
          "text": "Diện tích hình phẳng (H) được tính bởi công thức S = int_a^b |f(x)| dx.",
          "answer": true,
          "explain": "Công thức diện tích luôn có dấu giá trị tuyệt đối |f(x)|."
        },
        {
          "text": "Nếu f(x) >= 0 với mọi x thuộc [a; b] thì S = int_a^b f(x) dx.",
          "answer": true,
          "explain": "Khi f(x) không âm thì |f(x)| = f(x)."
        },
        {
          "text": "Nếu f(x) <= 0 với mọi x thuộc [a; b] thì S = - int_a^b f(x) dx.",
          "answer": true,
          "explain": "Khi f(x) không dương thì |f(x)| = -f(x)."
        },
        {
          "text": "Thể tích khối tròn xoay khi quay (H) quanh trục Ox là V = int_a^b f(x)^2 dx (không có thừa số pi).",
          "answer": false,
          "explain": "Công thức thể tích tròn xoay bắt buộc phải có thừa số pi: V = pi * int_a^b [f(x)]^2 dx."
        }
      ]
    },
    {
      "id": "tf_bai-13_02",
      "context": "Xét hình phẳng giới hạn bởi parabol y = x^2 và đường thẳng y = 2x.",
      "statements": [
        {
          "text": "Phương trình hoành độ giao điểm là x^2 - 2x = 0 có hai nghiệm x = 0 và x = 2.",
          "answer": true,
          "explain": "x^2 = 2x <=> x(x - 2) = 0."
        },
        {
          "text": "Trên đoạn [0; 2], ta có 2x >= x^2.",
          "answer": true,
          "explain": "2x - x^2 = x(2 - x) >= 0 với mọi x thuộc [0; 2]."
        },
        {
          "text": "Diện tích hình phẳng là S = int_0^2 (2x - x^2) dx.",
          "answer": true,
          "explain": "Lấy hàm phía trên trừ hàm phía dưới."
        },
        {
          "text": "Diện tích tính được bằng 4/3.",
          "answer": true,
          "explain": "[x^2 - x^3 / 3]_0^2 = 4 - 8/3 = 4/3."
        }
      ]
    },
    {
      "id": "tf_bai-13_03",
      "context": "Quay hình phẳng giới hạn bởi y = x, y = 0, x = 0, x = 2 quanh trục hoành Ox.",
      "statements": [
        {
          "text": "Khối tròn xoay thu được là một hình nón có chiều cao h = 2 và bán kính đáy R = 2.",
          "answer": true,
          "explain": "Quay tam giác vuông OAB quanh cạnh góc vuông OA."
        },
        {
          "text": "Công thức tính thể tích theo tích phân là V = pi * int_0^2 x^2 dx.",
          "answer": true,
          "explain": "V = pi * int_0^2 [f(x)]^2 dx."
        },
        {
          "text": "Giá trị tích phân là int_0^2 x^2 dx = 8/3.",
          "answer": true,
          "explain": "[x^3 / 3]_0^2 = 8/3."
        },
        {
          "text": "Thể tích hình nón tính theo công thức hình học V = (1/3)*pi*R^2*h = 8pi/3 hoàn toàn trùng khớp.",
          "answer": true,
          "explain": "1/3 * pi * 4 * 2 = 8pi/3."
        }
      ]
    },
    {
      "id": "tf_bai-13_04",
      "context": "Một vật thể có đáy nằm trên trục Ox từ x = 0 đến x = 3. Cắt vật thể bởi mặt phẳng vuông góc với Ox tại điểm có hoành độ x, thiết diện là một hình vuông cạnh sqrt(x).",
      "statements": [
        {
          "text": "Diện tích thiết diện tại điểm có hoành độ x là S(x) = (sqrt(x))^2 = x.",
          "answer": true,
          "explain": "Diện tích hình vuông cạnh a là a^2."
        },
        {
          "text": "Công thức tính thể tích vật thể là V = int_0^3 S(x) dx.",
          "answer": true,
          "explain": "Công thức thể tích vật thể bất kỳ cắt bởi các mặt phẳng vuông góc."
        },
        {
          "text": "Công thức thể tích vật thể này có nhân thêm số pi phía trước tích phân.",
          "answer": false,
          "explain": "Công thức thể tích vật thể tổng quát V = int S(x) dx KHÔNG CÓ pi (chỉ khối tròn xoay mới có pi)."
        },
        {
          "text": "Thể tích vật thể bằng 4.5.",
          "answer": true,
          "explain": "int_0^3 x dx = [x^2 / 2]_0^3 = 9/2 = 4.5."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-13_01",
      "q": "Tính diện tích hình phẳng giới hạn bởi parabol y = 3x^2, trục Ox và hai đường thẳng x = 1, x = 2.",
      "correctAnswer": "7",
      "explain": "S = int_1^2 3x^2 dx = [x^3]_1^2 = 8 - 1 = 7."
    },
    {
      "id": "sa_bai-13_02",
      "q": "Tính diện tích hình phẳng giới hạn bởi hai đường cong y = x^2 và y = x.",
      "correctAnswer": "0.17",
      "explain": "Giao điểm x = 0, x = 1. S = int_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6 ≈ 0.17."
    },
    {
      "id": "sa_bai-13_03",
      "q": "Cho hình phẳng giới hạn bởi y = 2x, y = 0, x = 0, x = 3 quay quanh Ox tạo thành khối tròn xoay có thể tích V = k*pi. Tìm k.",
      "correctAnswer": "36",
      "explain": "V = pi * int_0^3 (2x)^2 dx = pi * int_0^3 4x^2 dx = 4pi * [x^3/3]_0^3 = 4pi * 9 = 36pi => k = 36."
    },
    {
      "id": "sa_bai-13_04",
      "q": "Tính diện tích hình phẳng giới hạn bởi đồ thị y = sin(x), trục Ox và hai đường x = 0, x = pi.",
      "correctAnswer": "2",
      "explain": "S = int_0^pi sin(x) dx = [-cos(x)]_0^pi = -(-1) - (-1) = 2."
    },
    {
      "id": "sa_bai-13_05",
      "q": "Thể tích vật thể có diện tích thiết diện vuông góc với Ox là S(x) = 2x + 1 chạy từ x = 0 đến x = 2 bằng bao nhiêu?",
      "correctAnswer": "6",
      "explain": "V = int_0^2 (2x + 1) dx = [x^2 + x]_0^2 = 4 + 2 = 6."
    },
    {
      "id": "sa_bai-13_06",
      "q": "Quay hình chữ nhật kích thước 2 x 3 quanh cạnh có độ dài 3 tạo thành hình trụ có thể tích bằng bao nhiêu pi (nhập hệ số k với V = k*pi)?",
      "correctAnswer": "12",
      "explain": "Bán kính đáy R = 2, chiều cao h = 3. V = pi * R^2 * h = pi * 4 * 3 = 12pi => k = 12."
    }
  ],
  "essay": [
    {
      "id": "es_bai-13",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-13.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
