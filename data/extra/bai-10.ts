import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-10_01",
      "context": "Xét phương sai s^2 và độ lệch chuẩn s của mẫu số liệu ghép nhóm.",
      "statements": [
        {
          "text": "Phương sai luôn là một số không âm (s^2 >= 0).",
          "answer": true,
          "explain": "Phương sai là trung bình của các bình phương độ lệch nên luôn không âm."
        },
        {
          "text": "Độ lệch chuẩn có cùng đơn vị đo với đại lượng đang xét.",
          "answer": true,
          "explain": "Ví dụ: điểm số, mét, kilôgam... độ lệch chuẩn có cùng đơn vị đo."
        },
        {
          "text": "Phương sai có đơn vị bằng bình phương đơn vị của đại lượng đang xét.",
          "answer": true,
          "explain": "Ví dụ: m^2, kg^2..."
        },
        {
          "text": "Nếu tất cả các giá trị trong mẫu số liệu bằng nhau thì phương sai bằng 1.",
          "answer": false,
          "explain": "Nếu tất cả bằng nhau thì không có sự phân tán nên s^2 = 0."
        }
      ]
    },
    {
      "id": "tf_bai-10_02",
      "context": "Hai lớp 12A và 12B có bảng điểm kiểm tra Toán với số trung bình và độ lệch chuẩn như sau: Lớp 12A: x_bar = 7.5; s = 1.2. Lớp 12B: x_bar = 7.5; s = 2.0.",
      "statements": [
        {
          "text": "Điểm trung bình của hai lớp là như nhau.",
          "answer": true,
          "explain": "Cùng bằng 7.5."
        },
        {
          "text": "Học sinh lớp 12A có kết quả học tập đồng đều hơn học sinh lớp 12B.",
          "answer": true,
          "explain": "Vì s_A = 1.2 < s_B = 2.0."
        },
        {
          "text": "Phương sai của điểm thi lớp 12A là s^2 = 1.44.",
          "answer": true,
          "explain": "1.2^2 = 1.44."
        },
        {
          "text": "Phương sai của điểm thi lớp 12B là s^2 = 4.0.",
          "answer": true,
          "explain": "2.0^2 = 4.0."
        }
      ]
    },
    {
      "id": "tf_bai-10_03",
      "context": "Để tính phương sai của mẫu số liệu ghép nhóm, người ta dùng giá trị đại diện c_i của mỗi nhóm [a_i; a_{i+1}).",
      "statements": [
        {
          "text": "Giá trị đại diện của nhóm [a_i; a_{i+1}) được tính bằng c_i = (a_i + a_{i+1})/2.",
          "answer": true,
          "explain": "Trung bình cộng hai đầu mút của nhóm."
        },
        {
          "text": "Giá trị đại diện của nhóm [10; 20) là 15.",
          "answer": true,
          "explain": "(10 + 20)/2 = 15."
        },
        {
          "text": "Số trung bình ghép nhóm x_bar = (tổng m_i * c_i) / n.",
          "answer": true,
          "explain": "Công thức chuẩn SGK Toán 12."
        },
        {
          "text": "Phương sai ghép nhóm s^2 luôn lớn hơn khoảng biến thiên R.",
          "answer": false,
          "explain": "Không có quy tắc này, thường s^2 nhỏ hơn nhiều so với R."
        }
      ]
    },
    {
      "id": "tf_bai-10_04",
      "context": "Một mẫu số liệu ghép nhóm có 2 nhóm: nhóm [0; 10) có 5 phần tử (giá trị đại diện 5), nhóm [10; 20] có 5 phần tử (giá trị đại diện 15).",
      "statements": [
        {
          "text": "Cỡ mẫu n = 10.",
          "answer": true,
          "explain": "5 + 5 = 10."
        },
        {
          "text": "Số trung bình của mẫu số liệu là x_bar = 10.",
          "answer": true,
          "explain": "(5*5 + 5*15)/10 = (25 + 75)/10 = 10."
        },
        {
          "text": "Phương sai của mẫu số liệu là s^2 = 25.",
          "answer": true,
          "explain": "s^2 = [5*(5-10)^2 + 5*(15-10)^2]/10 = [5*25 + 5*25]/10 = 250/10 = 25."
        },
        {
          "text": "Độ lệch chuẩn s = 5.",
          "answer": true,
          "explain": "s = sqrt(25) = 5."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-10_01",
      "q": "Tìm giá trị đại diện của nhóm điểm [6.5; 8.5).",
      "correctAnswer": "7.5",
      "explain": "(6.5 + 8.5) / 2 = 7.5."
    },
    {
      "id": "sa_bai-10_02",
      "q": "Một mẫu số liệu ghép nhóm có phương sai s^2 = 16. Tính độ lệch chuẩn s.",
      "correctAnswer": "4",
      "explain": "s = sqrt(16) = 4."
    },
    {
      "id": "sa_bai-10_03",
      "q": "Một mẫu số liệu ghép nhóm có độ lệch chuẩn s = 2.5. Tính phương sai s^2.",
      "correctAnswer": "6.25",
      "explain": "s^2 = 2.5^2 = 6.25."
    },
    {
      "id": "sa_bai-10_04",
      "q": "Cho mẫu số liệu có 2 nhóm: nhóm 1 đại diện c1 = 4 (tần số 10), nhóm 2 đại diện c2 = 6 (tần số 10). Tính số trung bình x_bar.",
      "correctAnswer": "5",
      "explain": "x_bar = (10*4 + 10*6)/20 = 100/20 = 5."
    },
    {
      "id": "sa_bai-10_05",
      "q": "Cho mẫu ở câu trên (x_bar = 5, c1 = 4, c2 = 6, m1 = m2 = 10). Tính phương sai s^2.",
      "correctAnswer": "1",
      "explain": "s^2 = [10*(4 - 5)^2 + 10*(6 - 5)^2]/20 = (10*1 + 10*1)/20 = 1."
    },
    {
      "id": "sa_bai-10_06",
      "q": "Độ lệch chuẩn của một quy trình đóng gói là s = 0.4 gam. Tính phương sai của quy trình đóng gói đó.",
      "correctAnswer": "0.16",
      "explain": "s^2 = 0.4^2 = 0.16."
    }
  ],
  "essay": [
    {
      "id": "es_bai-10",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-10.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
