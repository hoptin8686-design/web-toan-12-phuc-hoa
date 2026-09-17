import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-cuoi-c6_01",
    "q": "Câu ôn tập 1 (Bài tập cuối chương VI): Khẳng định nào sau đây là đúng về lý thuyết trọng tâm của chương?",
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
    "id": "q_bai-cuoi-c6_02",
    "q": "Câu ôn tập 2 (Bài tập cuối chương VI): Phương pháp nào sau đây tối ưu nhất khi giải bài trắc nghiệm chương này?",
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
    "id": "q_bai-cuoi-c6_03",
    "q": "Câu ôn tập 3 (Bài tập cuối chương VI): Điểm cần đặc biệt lưu ý để tránh mất điểm đáng tiếc là:",
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
    "id": "q_bai-cuoi-c6_04",
    "q": "Câu ôn tập 4 (Bài tập cuối chương VI): Dạng bài tập phân loại thí sinh trong đề thi tốt nghiệp thường liên quan đến:",
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
    "id": "q_bai-cuoi-c6_05",
    "q": "Câu ôn tập 5 (Bài tập cuối chương VI): Đánh giá kết quả làm bài ôn tập chương, học sinh cần đạt tối thiểu:",
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
    "id": "q_bai-cuoi-c6_06",
    "q": "Cho hai biến cố A và B độc lập với P(A) = 0.3, P(B) = 0.6. Tính P(A U B).",
    "options": [
      "0.72",
      "0.90",
      "0.18",
      "0.82"
    ],
    "answer": 0,
    "explain": "P(A U B) = P(A) + P(B) - P(AB) = 0.3 + 0.6 - (0.3*0.6) = 0.9 - 0.18 = 0.72."
  },
  {
    "id": "q_bai-cuoi-c6_07",
    "q": "Công thức Bayes dùng để làm gì?",
    "options": [
      "Cập nhật xác suất của các biến cố nguyên nhân khi đã biết kết quả",
      "Tính diện tích hình phẳng",
      "Đo độ phân tán của mẫu số liệu",
      "Khảo sát sự biến thiên của hàm số"
    ],
    "answer": 0,
    "explain": "Ý nghĩa công thức Bayes: đánh giá lại xác suất các giả thuyết (nguyên nhân) khi có bằng chứng mới."
  },
  {
    "id": "q_bai-cuoi-c6_08",
    "q": "Nếu P(A|B) = 1 thì điều gì xảy ra?",
    "options": [
      "B là biến cố con của A",
      "A là biến cố rỗng",
      "A và B xung khắc",
      "P(A) = 0"
    ],
    "answer": 0,
    "explain": "P(A|B) = 1 <=> P(AB) = P(B) <=> B con A."
  },
  {
    "id": "q_bai-cuoi-c6_09",
    "q": "Cho P(A) = 0.7. Xác suất của biến cố đối P(\\overline{A}) là:",
    "options": [
      "0.3",
      "0.7",
      "0",
      "1"
    ],
    "answer": 0,
    "explain": "P(\\overline{A}) = 1 - P(A) = 1 - 0.7 = 0.3."
  },
  {
    "id": "q_bai-cuoi-c6_10",
    "q": "Một hộp có 5 bi xanh và 5 bi đỏ. Rút 2 bi lần lượt không hoàn lại. Xác suất cả 2 bi cùng màu đỏ là:",
    "options": [
      "2/9",
      "1/4",
      "1/2",
      "5/18"
    ],
    "answer": 0,
    "explain": "P = (5/10) * (4/9) = 20 / 90 = 2/9."
  },
  {
    "id": "q_bai-cuoi-c6_11",
    "q": "Hai xạ thủ bắn vào bia độc lập nhau với xác suất trúng lần lượt là 0.8 và 0.7. Xác suất có ít nhất 1 người bắn trúng là:",
    "options": [
      "0.94",
      "0.56",
      "0.86",
      "0.75"
    ],
    "answer": 0,
    "explain": "Xác suất cả 2 cùng trượt = (1 - 0.8)*(1 - 0.7) = 0.2 * 0.3 = 0.06. Có ít nhất 1 người trúng = 1 - 0.06 = 0.94."
  },
  {
    "id": "q_bai-cuoi-c6_12",
    "q": "Cho hệ đầy đủ {A1, A2, A3} với P(A1) = 0.3, P(A2) = 0.3. Tìm P(A3).",
    "options": [
      "0.4",
      "0.6",
      "0.3",
      "0.1"
    ],
    "answer": 0,
    "explain": "Tổng xác suất của hệ đầy đủ bằng 1: P(A3) = 1 - 0.3 - 0.3 = 0.4."
  }
];
