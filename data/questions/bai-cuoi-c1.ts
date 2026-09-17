import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-cuoi-c1_01",
    "q": "Câu ôn tập 1 (Bài tập cuối chương I): Khẳng định nào sau đây là đúng về lý thuyết trọng tâm của chương?",
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
    "id": "q_bai-cuoi-c1_02",
    "q": "Câu ôn tập 2 (Bài tập cuối chương I): Phương pháp nào sau đây tối ưu nhất khi giải bài trắc nghiệm chương này?",
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
    "id": "q_bai-cuoi-c1_03",
    "q": "Câu ôn tập 3 (Bài tập cuối chương I): Điểm cần đặc biệt lưu ý để tránh mất điểm đáng tiếc là:",
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
    "id": "q_bai-cuoi-c1_04",
    "q": "Câu ôn tập 4 (Bài tập cuối chương I): Dạng bài tập phân loại thí sinh trong đề thi tốt nghiệp thường liên quan đến:",
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
    "id": "q_bai-cuoi-c1_05",
    "q": "Câu ôn tập 5 (Bài tập cuối chương I): Đánh giá kết quả làm bài ôn tập chương, học sinh cần đạt tối thiểu:",
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
    "id": "q_bai-cuoi-c1_06",
    "q": "Tìm tất cả các giá trị của tham số m để hàm số y = x^3 - 3x^2 + mx - 1 có hai điểm cực trị.",
    "options": [
      "m < 3",
      "m > 3",
      "m <= 3",
      "m >= 3"
    ],
    "answer": 0,
    "explain": "y' = 3x^2 - 6x + m. Hàm số có 2 điểm cực trị <=> Delta' = 9 - 3m > 0 <=> m < 3."
  },
  {
    "id": "q_bai-cuoi-c1_07",
    "q": "Tiệm cận xiên của đồ thị hàm số y = (x^2 + 2x - 1)/(x - 1) là đường thẳng:",
    "options": [
      "y = x + 3",
      "y = x - 3",
      "y = x + 1",
      "y = 2x - 1"
    ],
    "answer": 0,
    "explain": "(x^2 + 2x - 1) : (x - 1) = x + 3 + 2/(x - 1). Tiệm cận xiên là y = x + 3."
  },
  {
    "id": "q_bai-cuoi-c1_08",
    "q": "Cho hàm số y = f(x) có bảng xét dấu f'(x) đổi dấu 3 lần qua các điểm x = -2, x = 0, x = 1. Số điểm cực trị của hàm số là:",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "answer": 0,
    "explain": "Đạo hàm đổi dấu 3 lần qua 3 nghiệm đơn nên có đúng 3 điểm cực trị."
  },
  {
    "id": "q_bai-cuoi-c1_09",
    "q": "Giá trị nhỏ nhất của hàm số y = x^4 - 2x^2 + 5 trên đoạn [-2; 2] bằng:",
    "options": [
      "4",
      "5",
      "13",
      "1"
    ],
    "answer": 0,
    "explain": "y' = 4x(x^2 - 1) = 0 <=> x = 0, x = ±1. y(0) = 5, y(±1) = 4, y(±2) = 13. Min = 4."
  },
  {
    "id": "q_bai-cuoi-c1_10",
    "q": "Đồ thị hàm số y = (2x - 4)/(x + 1) có tâm đối xứng là điểm:",
    "options": [
      "I(-1; 2)",
      "I(1; 2)",
      "I(-1; -4)",
      "I(2; -1)"
    ],
    "answer": 0,
    "explain": "TCĐ x = -1, TCN y = 2 => Giao điểm I(-1; 2) là tâm đối xứng."
  },
  {
    "id": "q_bai-cuoi-c1_11",
    "q": "Hàm số y = (x + 2)/(x - 1) nghịch biến trên các khoảng nào?",
    "options": [
      "(-∞; 1) và (1; +∞)",
      "R \\ {1}",
      "(-∞; -2) và (1; +∞)",
      "(-2; 1)"
    ],
    "answer": 0,
    "explain": "y' = -3/(x - 1)^2 < 0 với mọi x ≠ 1, nghịch biến trên từng khoảng xác định (-∞; 1) và (1; +∞)."
  },
  {
    "id": "q_bai-cuoi-c1_12",
    "q": "Số giao điểm của đồ thị hàm số y = x^3 - 3x và trục hoành là:",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "answer": 0,
    "explain": "x^3 - 3x = 0 <=> x(x^2 - 3) = 0 <=> x = 0 hoặc x = ±sqrt(3). Có 3 giao điểm."
  }
];
