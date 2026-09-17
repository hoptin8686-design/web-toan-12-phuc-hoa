import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-09_01",
      "context": "Một bảng thống kê điểm thi thử môn Toán của 40 học sinh được ghép nhóm như sau: [4; 6): 8 em, [6; 8): 20 em, [8; 10]: 12 em.",
      "statements": [
        {
          "text": "Đầu mút trái của nhóm đầu tiên là 4, đầu mút phải của nhóm cuối cùng là 10.",
          "answer": true,
          "explain": "Nhóm đầu là [4; 6) và nhóm cuối là [8; 10]."
        },
        {
          "text": "Khoảng biến thiên của mẫu số liệu là R = 10 - 4 = 6 điểm.",
          "answer": true,
          "explain": "R = 10 - 4 = 6."
        },
        {
          "text": "Cỡ mẫu n = 40.",
          "answer": true,
          "explain": "n = 8 + 20 + 12 = 40."
        },
        {
          "text": "Tứ phân vị thứ nhất Q1 rơi vào nhóm [4; 6).",
          "answer": false,
          "explain": "n/4 = 10. Tần số tích lũy: nhóm 1 có 8 < 10, nên giá trị thứ 10 rơi vào nhóm 2 là [6; 8)."
        }
      ]
    },
    {
      "id": "tf_bai-09_02",
      "context": "Xét ý nghĩa thực tiễn của khoảng biến thiên R và khoảng tứ phân vị Delta_Q.",
      "statements": [
        {
          "text": "Khoảng biến thiên R bị ảnh hưởng mạnh bởi các giá trị bất thường (ngoại lệ).",
          "answer": true,
          "explain": "Vì R chỉ phụ thuộc vào giá trị nhỏ nhất và lớn nhất."
        },
        {
          "text": "Khoảng tứ phân vị Delta_Q đo độ phân tán của 50% số liệu trung tâm.",
          "answer": true,
          "explain": "Delta_Q = Q3 - Q1 chứa 50% số liệu ở giữa."
        },
        {
          "text": "Khoảng tứ phân vị ít bị ảnh hưởng bởi các giá trị ngoại lệ hơn so với khoảng biến thiên.",
          "answer": true,
          "explain": "Ưu điểm cốt lõi của khoảng tứ phân vị."
        },
        {
          "text": "Nếu Delta_Q càng lớn thì các số liệu ở giữa càng tập trung dày đặc quanh trung vị.",
          "answer": false,
          "explain": "Delta_Q càng lớn nghĩa là số liệu phân tán càng rộng, ít tập trung."
        }
      ]
    },
    {
      "id": "tf_bai-09_03",
      "context": "Một khảo sát về thời gian tự học mỗi ngày của học sinh lớp 12 (đơn vị: giờ) có kết quả: [0; 1): 5 em, [1; 2): 15 em, [2; 3): 20 em, [3; 4]: 10 em. Cỡ mẫu n = 50.",
      "statements": [
        {
          "text": "Khoảng biến thiên của mẫu số liệu là R = 4 giờ.",
          "answer": true,
          "explain": "R = 4 - 0 = 4."
        },
        {
          "text": "Trung vị Q2 nằm trong nhóm [2; 3).",
          "answer": true,
          "explain": "n/2 = 25. Tần số tích lũy: nhóm 1 (5), nhóm 2 (20), nhóm 3 (40) => chứa giá trị 25."
        },
        {
          "text": "Tứ phân vị Q1 nằm trong nhóm [1; 2).",
          "answer": true,
          "explain": "n/4 = 12.5 > 5 và <= 20 => nhóm [1; 2)."
        },
        {
          "text": "Tứ phân vị Q3 nằm trong nhóm [3; 4].",
          "answer": false,
          "explain": "3n/4 = 37.5 <= 40 (nhóm [2; 3)), nên Q3 cũng thuộc [2; 3)."
        }
      ]
    },
    {
      "id": "tf_bai-09_04",
      "context": "Cho mẫu số liệu ghép nhóm có Q1 = 15.2 và Q3 = 24.8.",
      "statements": [
        {
          "text": "Khoảng tứ phân vị của mẫu số liệu là Delta_Q = 9.6.",
          "answer": true,
          "explain": "Delta_Q = 24.8 - 15.2 = 9.6."
        },
        {
          "text": "Giá trị ngoại lệ bé hơn Q1 - 1.5*Delta_Q = 15.2 - 14.4 = 0.8.",
          "answer": true,
          "explain": "Q1 - 1.5*Delta_Q = 15.2 - 1.5*9.6 = 0.8."
        },
        {
          "text": "Giá trị ngoại lệ lớn hơn Q3 + 1.5*Delta_Q = 24.8 + 14.4 = 39.2.",
          "answer": true,
          "explain": "Q3 + 1.5*Delta_Q = 24.8 + 14.4 = 39.2."
        },
        {
          "text": "Một giá trị bằng 40 trong mẫu số liệu được coi là giá trị thông thường.",
          "answer": false,
          "explain": "40 > 39.2 nên 40 là giá trị ngoại lệ (bất thường)."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-09_01",
      "q": "Mẫu số liệu ghép nhóm có các nhóm tuổi: [20; 30), [30; 40), [40; 50), [50; 60]. Tính khoảng biến thiên R của mẫu số liệu.",
      "correctAnswer": "40",
      "explain": "R = 60 - 20 = 40."
    },
    {
      "id": "sa_bai-09_02",
      "q": "Một mẫu số liệu ghép nhóm có tứ phân vị thứ nhất Q1 = 45 và tứ phân vị thứ ba Q3 = 68. Tính khoảng tứ phân vị Delta_Q.",
      "correctAnswer": "23",
      "explain": "Delta_Q = Q3 - Q1 = 68 - 45 = 23."
    },
    {
      "id": "sa_bai-09_03",
      "q": "Cho mẫu số liệu có Q1 = 20 và Delta_Q = 12. Tìm tứ phân vị thứ ba Q3.",
      "correctAnswer": "32",
      "explain": "Q3 = Q1 + Delta_Q = 20 + 12 = 32."
    },
    {
      "id": "sa_bai-09_04",
      "q": "Một trạm khí tượng ghi nhận nhiệt độ trong ngày ghép nhóm: [18; 22), [22; 26), [26; 30), [30; 34]. Tính khoảng biến thiên R theo độ C.",
      "correctAnswer": "16",
      "unit": "độ C",
      "explain": "R = 34 - 18 = 16 độ C."
    },
    {
      "id": "sa_bai-09_05",
      "q": "Mẫu số liệu điểm kiểm tra của 20 học sinh: nhóm [5; 7) có 8 em, nhóm [7; 9] có 12 em. Tính khoảng biến thiên của mẫu.",
      "correctAnswer": "4",
      "explain": "R = 9 - 5 = 4."
    },
    {
      "id": "sa_bai-09_06",
      "q": "Biết Q1 = 10, Q3 = 25. Giá trị x nhỏ nhất thoả mãn điều kiện là giá trị ngoại lệ lớn (x > Q3 + 1.5*Delta_Q) lớn hơn bao nhiêu (nhập giá trị ngưỡng)?",
      "correctAnswer": "47.5",
      "explain": "Delta_Q = 15. Ngưỡng ngoại lệ trên = 25 + 1.5*15 = 47.5."
    }
  ],
  "essay": [
    {
      "id": "es_bai-09",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-09.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
