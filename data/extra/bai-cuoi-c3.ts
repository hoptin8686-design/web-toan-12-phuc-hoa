import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-cuoi-c3_01",
      "context": "Xét các số đặc trưng đo độ phân tán của mẫu số liệu ghép nhóm.",
      "statements": [
        {
          "text": "Khoảng biến thiên R = a_{k+1} - a_1.",
          "answer": true,
          "explain": "Công thức định nghĩa khoảng biến thiên."
        },
        {
          "text": "Khoảng tứ phân vị Delta_Q = Q3 - Q1.",
          "answer": true,
          "explain": "Công thức khoảng tứ phân vị."
        },
        {
          "text": "Phương sai s^2 có thể nhận giá trị âm nếu số liệu có giá trị âm.",
          "answer": false,
          "explain": "Phương sai luôn không âm vì là trung bình bình phương độ lệch."
        },
        {
          "text": "Độ lệch chuẩn s = sqrt(s^2).",
          "answer": true,
          "explain": "Độ lệch chuẩn là căn bậc hai số học của phương sai."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c3_02",
      "context": "Hai xạ thủ bắn bia có cùng điểm trung bình là 9.2. Xạ thủ A có độ lệch chuẩn s_A = 0.5; xạ thủ B có s_B = 0.8.",
      "statements": [
        {
          "text": "Xạ thủ A có phong độ thi đấu ổn định hơn xạ thủ B.",
          "answer": true,
          "explain": "Độ lệch chuẩn nhỏ hơn thể hiện độ ổn định cao hơn."
        },
        {
          "text": "Phương sai điểm bắn của xạ thủ A là 0.25.",
          "answer": true,
          "explain": "0.5^2 = 0.25."
        },
        {
          "text": "Phương sai điểm bắn của xạ thủ B là 0.64.",
          "answer": true,
          "explain": "0.8^2 = 0.64."
        },
        {
          "text": "Xạ thủ B bắn điểm cao hơn xạ thủ A.",
          "answer": false,
          "explain": "Hai người có điểm trung bình bằng nhau."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c3_03",
      "context": "Cho mẫu số liệu ghép nhóm có Q1 = 30 và Q3 = 50.",
      "statements": [
        {
          "text": "Khoảng tứ phân vị Delta_Q = 20.",
          "answer": true,
          "explain": "50 - 30 = 20."
        },
        {
          "text": "Ngưỡng phát hiện giá trị ngoại lệ trên là 50 + 1.5*20 = 80.",
          "answer": true,
          "explain": "Q3 + 1.5*Delta_Q = 50 + 30 = 80."
        },
        {
          "text": "Ngưỡng phát hiện giá trị ngoại lệ dưới là 30 - 1.5*20 = 0.",
          "answer": true,
          "explain": "Q1 - 1.5*Delta_Q = 30 - 30 = 0."
        },
        {
          "text": "Một giá trị bằng 85 trong mẫu số liệu được coi là giá trị ngoại lệ.",
          "answer": true,
          "explain": "85 > 80 nên là giá trị ngoại lệ."
        }
      ]
    },
    {
      "id": "tf_bai-cuoi-c3_04",
      "context": "Một mẫu số liệu ghép nhóm có n = 100, số trung bình x_bar = 50, phương sai s^2 = 16.",
      "statements": [
        {
          "text": "Độ lệch chuẩn của mẫu số liệu là s = 4.",
          "answer": true,
          "explain": "sqrt(16) = 4."
        },
        {
          "text": "Khoảng (x_bar - s; x_bar + s) là khoảng (46; 54).",
          "answer": true,
          "explain": "50 - 4 = 46 và 50 + 4 = 54."
        },
        {
          "text": "Nếu cộng tất cả các giá trị thêm 10 đơn vị thì phương sai mới bằng 26.",
          "answer": false,
          "explain": "Tịnh tiến mẫu số liệu không làm thay đổi phương sai, s^2 vẫn bằng 16."
        },
        {
          "text": "Nếu nhân tất cả các giá trị với 3 thì phương sai mới bằng 16 * 9 = 144.",
          "answer": true,
          "explain": "Phương sai mới = 3^2 * s^2 = 9 * 16 = 144."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-cuoi-c3_01",
      "q": "Mẫu số liệu ghép nhóm có nhóm đầu [15; 20) và nhóm cuối [45; 50]. Tính khoảng biến thiên R.",
      "correctAnswer": "35",
      "explain": "R = 50 - 15 = 35."
    },
    {
      "id": "sa_bai-cuoi-c3_02",
      "q": "Biết Q1 = 14.5 và Q3 = 26.5. Tính khoảng tứ phân vị Delta_Q.",
      "correctAnswer": "12",
      "explain": "Delta_Q = 26.5 - 14.5 = 12."
    },
    {
      "id": "sa_bai-cuoi-c3_03",
      "q": "Một mẫu số liệu ghép nhóm có phương sai s^2 = 49. Tính độ lệch chuẩn s.",
      "correctAnswer": "7",
      "explain": "s = sqrt(49) = 7."
    },
    {
      "id": "sa_bai-cuoi-c3_04",
      "q": "Nếu độ lệch chuẩn của mẫu là s = 1.5 thì phương sai s^2 bằng bao nhiêu?",
      "correctAnswer": "2.25",
      "explain": "s^2 = 1.5^2 = 2.25."
    },
    {
      "id": "sa_bai-cuoi-c3_05",
      "q": "Tìm giá trị đại diện của nhóm [120; 160).",
      "correctAnswer": "140",
      "explain": "(120 + 160) / 2 = 140."
    },
    {
      "id": "sa_bai-cuoi-c3_06",
      "q": "Cho Q1 = 100, Q3 = 130. Ngưỡng ngoại lệ trên (Q3 + 1.5*Delta_Q) bằng bao nhiêu?",
      "correctAnswer": "175",
      "explain": "Delta_Q = 30. Ngưỡng trên = 130 + 1.5*30 = 130 + 45 = 175."
    }
  ],
  "essay": [
    {
      "id": "es_bai-cuoi-c3",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-cuoi-c3.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
