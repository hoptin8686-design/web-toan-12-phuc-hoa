import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-cuoi-c4_01",
    "q": "Câu ôn tập 1 (Bài tập cuối chương IV): Khẳng định nào sau đây là đúng về lý thuyết trọng tâm của chương?",
    "options": [
      "Hệ thống kiến thức và định lý cơ bản được phát biểu chính xác",
      "Chỉ cần ghi nhớ kết quả không cần hiểu bản chất",
      "Không áp dụng được vào bài toán thực tiễn",
      "Tất cả các khẳng định trên đều sai"
    ],
    "answer": 0,
    "explain": "Nắm chắc lý thuyết và bản chất hình học/giải tích là chìa khoá đạt điểm cao."
  },
  {
    "id": "q_bai-cuoi-c4_02",
    "q": "Câu ôn tập 2 (Bài tập cuối chương IV): Phương pháp nào sau đây tối ưu nhất khi giải bài trắc nghiệm chương này?",
    "options": [
      "Kết hợp biến đổi đại số, phân tích đồ thị và bấm máy tính Casio kiểm tra",
      "Chỉ dùng phương pháp thử đáp án",
      "Đoán mò ngẫu nhiên",
      "Bỏ qua các câu vận dụng cao"
    ],
    "answer": 0,
    "explain": "Kết hợp tư duy tự luận và kỹ năng loại trừ phương án nhiễu."
  },
  {
    "id": "q_bai-cuoi-c4_03",
    "q": "Câu ôn tập 3 (Bài tập cuối chương IV): Điểm cần đặc biệt lưu ý để tránh mất điểm đáng tiếc là:",
    "options": [
      "Đọc kỹ yêu cầu đề bài (đồng biến hay nghịch biến, max hay min, hoành độ hay toạ độ)",
      "Tính toán vội vàng",
      "Không kiểm tra điều kiện xác định",
      "Bỏ qua các bước trung gian"
    ],
    "answer": 0,
    "explain": "Đọc kỹ đề và tìm điều kiện xác định luôn là bước tiên quyết."
  },
  {
    "id": "q_bai-cuoi-c4_04",
    "q": "Câu ôn tập 4 (Bài tập cuối chương IV): Dạng bài tập phân loại thí sinh trong đề thi tốt nghiệp thường liên quan đến:",
    "options": [
      "Bài toán chứa tham số m và ứng dụng mô hình hoá thực tế",
      "Các câu nhận biết cơ bản",
      "Định nghĩa trong sách giáo khoa",
      "Câu hỏi trắc nghiệm một bước tính"
    ],
    "answer": 0,
    "explain": "Các câu vận dụng và thực tế liên môn là câu hỏi phân hoá điểm 9-10."
  },
  {
    "id": "q_bai-cuoi-c4_05",
    "q": "Câu ôn tập 5 (Bài tập cuối chương IV): Đánh giá kết quả làm bài ôn tập chương, học sinh cần đạt tối thiểu:",
    "options": [
      "Từ 80% điểm số trở lên để mở khóa Sao Vàng Phục Hòa",
      "50% điểm số",
      "Chỉ cần làm hết bài",
      "Không cần xem lại câu sai"
    ],
    "answer": 0,
    "explain": "Mục tiêu nắm vững chuyên đề với tỷ lệ đúng >= 80%."
  },
  {
    "id": "q_bai-cuoi-c4_06",
    "q": "Họ nguyên hàm của hàm số f(x) = 1/(3x - 1) là:",
    "options": [
      "(1/3)*ln|3x - 1| + C",
      "ln|3x - 1| + C",
      "3*ln|3x - 1| + C",
      "-1/(3x - 1)^2 + C"
    ],
    "answer": 0,
    "explain": "int 1/(ax + b) dx = (1/a)*ln|ax + b| + C => (1/3)*ln|3x - 1| + C."
  },
  {
    "id": "q_bai-cuoi-c4_07",
    "q": "Tính tích phân I = int_0^1 e^x dx.",
    "options": [
      "e - 1",
      "e",
      "e + 1",
      "1"
    ],
    "answer": 0,
    "explain": "I = [e^x]_0^1 = e^1 - e^0 = e - 1."
  },
  {
    "id": "q_bai-cuoi-c4_08",
    "q": "Cho int_0^3 f(x) dx = 4 và int_0^3 g(x) dx = 2. Tính int_0^3 [f(x) - 2*g(x)] dx.",
    "options": [
      "0",
      "2",
      "8",
      "-4"
    ],
    "answer": 0,
    "explain": "int_0^3 [f(x) - 2g(x)] dx = 4 - 2*2 = 0."
  },
  {
    "id": "q_bai-cuoi-c4_09",
    "q": "Diện tích hình phẳng giới hạn bởi y = x^3, trục Ox và x = 0, x = 2 bằng:",
    "options": [
      "4",
      "8",
      "16",
      "2"
    ],
    "answer": 0,
    "explain": "S = int_0^2 x^3 dx = [x^4 / 4]_0^2 = 16 / 4 = 4."
  },
  {
    "id": "q_bai-cuoi-c4_10",
    "q": "Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y = 2, y = 0, x = 0, x = 3 quanh trục Ox.",
    "options": [
      "12*pi",
      "6*pi",
      "18*pi",
      "36*pi"
    ],
    "answer": 0,
    "explain": "Hình trụ có R = 2, h = 3 => V = pi * R^2 * h = pi * 4 * 3 = 12*pi."
  },
  {
    "id": "q_bai-cuoi-c4_11",
    "q": "Một nguyên hàm F(x) của hàm số f(x) = 2x thoả mãn F(0) = 5 là:",
    "options": [
      "F(x) = x^2 + 5",
      "F(x) = x^2",
      "F(x) = x^2 - 5",
      "F(x) = 2x^2 + 5"
    ],
    "answer": 0,
    "explain": "F(x) = x^2 + C. F(0) = 5 => C = 5 => F(x) = x^2 + 5."
  },
  {
    "id": "q_bai-cuoi-c4_12",
    "q": "Cho hàm số f(x) liên tục trên R và F(x) là một nguyên hàm. Khẳng định nào sau đây đúng?",
    "options": [
      "int_a^b f(x) dx = F(b) - F(a)",
      "int_a^b f(x) dx = F(a) - F(b)",
      "int_a^b f(x) dx = F'(b) - F'(a)",
      "int_a^b f(x) dx = f(b) - f(a)"
    ],
    "answer": 0,
    "explain": "Công thức định nghĩa tích phân Newton-Leibniz: int_a^b f(x) dx = F(b) - F(a)."
  }
];
