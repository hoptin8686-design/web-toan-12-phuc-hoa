import type { LessonTheory } from "@/lib/types";

const bai11: LessonTheory = {
  "intro": "Khái niệm nguyên hàm, họ nguyên hàm, tính chất và bảng nguyên hàm các hàm số cơ bản.",
  "minutes": 15,
  "sections": [
    {
      "id": "trong-tam",
      "emoji": "💡",
      "heading": "1. Kiến thức trọng tâm cần nhớ",
      "blocks": [
        {
          "kind": "cards",
          "tone": "sea",
          "items": [
            {
              "emoji": "📌",
              "title": "Khái niệm cốt lõi",
              "text": "Nắm vững định nghĩa, ý nghĩa hình học và giải tích của Bài 11. Nguyên hàm."
            },
            {
              "emoji": "⚡",
              "title": "Công thức then chốt",
              "text": "Ghi nhớ chính xác công thức và các trường hợp ngoại lệ/điều kiện đi kèm."
            },
            {
              "emoji": "🎯",
              "title": "Kỹ năng giải bài",
              "text": "Phân loại các dạng toán thường gặp từ nhận biết đến vận dụng cao."
            }
          ]
        },
        {
          "kind": "mathBox",
          "title": "Công thức trọng tâm",
          "formula": "\\int f(x) dx = F(x) + C \\iff F'(x) = f(x)",
          "note": "Học sinh cần nắm chắc điều kiện áp dụng của công thức."
        }
      ]
    },
    {
      "id": "phuong-phap-giai",
      "emoji": "🛠️",
      "heading": "2. Phương pháp giải & Chú ý sai lầm thường gặp",
      "blocks": [
        {
          "kind": "steps",
          "items": [
            {
              "label": "Bước 1",
              "title": "Phân tích đề",
              "text": "Xác định rõ dữ kiện bài toán và điều kiện ràng buộc."
            },
            {
              "label": "Bước 2",
              "title": "Thiết lập phương trình / biểu thức",
              "text": "Chuyển ngôn ngữ đề bài sang biểu thức toán học chính xác."
            },
            {
              "label": "Bước 3",
              "title": "Giải và biện luận",
              "text": "Tính toán cẩn thận, loại trừ nghiệm không thoả mãn."
            }
          ]
        },
        {
          "kind": "warn",
          "title": "Bẫy thường gặp",
          "text": "Quên tìm điều kiện xác định hoặc nhầm lẫn giữa các khái niệm tương tự nhau trong đề thi."
        }
      ]
    }
  ],
  "summary": [
    "Nắm vững các khái niệm và công thức cốt lõi của Bài 11. Nguyên hàm.",
    "Lưu ý điều kiện xác định và cạm bẫy toán học thường gặp.",
    "Luyện tập thành thạo 3 dạng: Trắc nghiệm 4 lựa chọn, Đúng/Sai và Trả lời ngắn."
  ]
};

export default bai11;
