import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-cuoi-c2_01",
    "q": "Câu ôn tập 1 (Bài tập cuối chương II): Khẳng định nào sau đây là đúng về lý thuyết trọng tâm của chương?",
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
    "id": "q_bai-cuoi-c2_02",
    "q": "Câu ôn tập 2 (Bài tập cuối chương II): Phương pháp nào sau đây tối ưu nhất khi giải bài trắc nghiệm chương này?",
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
    "id": "q_bai-cuoi-c2_03",
    "q": "Câu ôn tập 3 (Bài tập cuối chương II): Điểm cần đặc biệt lưu ý để tránh mất điểm đáng tiếc là:",
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
    "id": "q_bai-cuoi-c2_04",
    "q": "Câu ôn tập 4 (Bài tập cuối chương II): Dạng bài tập phân loại thí sinh trong đề thi tốt nghiệp thường liên quan đến:",
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
    "id": "q_bai-cuoi-c2_05",
    "q": "Câu ôn tập 5 (Bài tập cuối chương II): Đánh giá kết quả làm bài ôn tập chương, học sinh cần đạt tối thiểu:",
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
    "id": "q_bai-cuoi-c2_06",
    "q": "Cho A(1; 2; 3), B(-1; 0; 1). Toạ độ vectơ vecto(BA) là:",
    "options": [
      "(2; 2; 2)",
      "(-2; -2; -2)",
      "(0; 2; 4)",
      "(0; 1; 2)"
    ],
    "answer": 0,
    "explain": "vecto(BA) = (1 - (-1); 2 - 0; 3 - 1) = (2; 2; 2)."
  },
  {
    "id": "q_bai-cuoi-c2_07",
    "q": "Khoảng cách từ điểm M(1; -2; 2) đến gốc toạ độ O là:",
    "options": [
      "3",
      "9",
      "sqrt(5)",
      "1"
    ],
    "answer": 0,
    "explain": "OM = sqrt(1^2 + (-2)^2 + 2^2) = sqrt(1 + 4 + 4) = 3."
  },
  {
    "id": "q_bai-cuoi-c2_08",
    "q": "Tìm toạ độ hình chiếu của M(3; -4; 5) trên trục Oy.",
    "options": [
      "(0; -4; 0)",
      "(3; 0; 0)",
      "(0; 0; 5)",
      "(3; 0; 5)"
    ],
    "answer": 0,
    "explain": "Chiếu lên Oy thì x = 0, z = 0, giữ nguyên y = -4."
  },
  {
    "id": "q_bai-cuoi-c2_09",
    "q": "Cho vecto(a) = (1; 2; 3), vecto(b) = (2; -1; 0). Tính vecto(u) = 2*vecto(a) - vecto(b).",
    "options": [
      "(0; 5; 6)",
      "(4; 3; 6)",
      "(0; 3; 6)",
      "(4; 5; 6)"
    ],
    "answer": 0,
    "explain": "2a - b = (2*1 - 2; 2*2 - (-1); 2*3 - 0) = (0; 5; 6)."
  },
  {
    "id": "q_bai-cuoi-c2_10",
    "q": "Cho tứ diện ABCD có G là trọng tâm tứ diện. Đẳng thức vectơ nào sau đây đúng?",
    "options": [
      "vecto(GA) + vecto(GB) + vecto(GC) + vecto(GD) = vecto(0)",
      "vecto(GA) + vecto(GB) + vecto(GC) = vecto(0)",
      "vecto(AB) + vecto(AC) + vecto(AD) = vecto(AG)",
      "vecto(GA) = vecto(GB)"
    ],
    "answer": 0,
    "explain": "Định nghĩa chuẩn của trọng tâm tứ diện."
  },
  {
    "id": "q_bai-cuoi-c2_11",
    "q": "Cho hai điểm A(2; -1; 3) và B(4; 3; 1). Trung điểm I của đoạn AB có toạ độ là:",
    "options": [
      "(3; 1; 2)",
      "(6; 2; 4)",
      "(1; 2; -1)",
      "(2; 4; -2)"
    ],
    "answer": 0,
    "explain": "I = ((2+4)/2; (-1+3)/2; (3+1)/2) = (3; 1; 2)."
  },
  {
    "id": "q_bai-cuoi-c2_12",
    "q": "Tìm m để hai vectơ vecto(u) = (2; 1; -3) và vecto(v) = (m; 2; 4) vuông góc với nhau.",
    "options": [
      "m = 5",
      "m = -5",
      "m = 2",
      "m = 10"
    ],
    "answer": 0,
    "explain": "u.v = 2m + 2 - 12 = 0 <=> 2m = 10 <=> m = 5."
  }
];
