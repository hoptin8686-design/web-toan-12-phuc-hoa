import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-10_01",
    "q": "Độ lệch chuẩn s liên hệ với phương sai s² theo công thức:",
    "options": [
      "s = √(s²)",
      "s = (s²)²",
      "s = 2 * s²",
      "s = s² / n"
    ],
    "answer": 0,
    "explain": "Độ lệch chuẩn là căn bậc hai số học của phương sai."
  },
  {
    "id": "q_bai-10_02",
    "q": "Độ lệch chuẩn càng nhỏ chứng tỏ:",
    "options": [
      "Các giá trị của mẫu càng tập trung quanh số trung bình",
      "Mẫu có độ phân tán lớn",
      "Số trung bình càng nhỏ",
      "Mẫu có nhiều sai số"
    ],
    "answer": 0,
    "explain": "Độ lệch chuẩn nhỏ thể hiện dữ liệu đồng đều, tập trung quanh giá trị trung bình."
  },
  {
    "id": "q_bai-10_03",
    "q": "Giá trị đại diện của nhóm [a; b) là:",
    "options": [
      "(a + b) / 2",
      "b - a",
      "a + b",
      "ab"
    ],
    "answer": 0,
    "explain": "Giá trị đại diện c_i là trung điểm của khoảng: (a + b)/2."
  },
  {
    "id": "q_bai-10_04",
    "q": "Đơn vị đo của phương sai so với đơn vị đo ban đầu của số liệu là:",
    "options": [
      "Bình phương đơn vị đo ban đầu",
      "Cùng đơn vị đo",
      "Không có đơn vị",
      "Căn bậc hai đơn vị"
    ],
    "answer": 0,
    "explain": "Phương sai tính theo (x - x̄)² nên có đơn vị là bình phương, độ lệch chuẩn cùng đơn vị với số liệu."
  },
  {
    "id": "q_bai-10_05",
    "q": "Nếu mỗi giá trị trong mẫu số liệu được cộng thêm một hằng số c thì độ lệch chuẩn:",
    "options": [
      "Không thay đổi",
      "Tăng thêm c",
      "Tăng thêm c²",
      "Nhân lên c lần"
    ],
    "answer": 0,
    "explain": "Cộng thêm hằng số chỉ dịch chuyển vị trí trung bình, không làm thay đổi độ phân tán."
  },
  {
    "id": "q_bai-10_06",
    "q": "Phương sai của mẫu số liệu luôn là:",
    "options": [
      "Một số không âm (>= 0)",
      "Một số dương (> 0)",
      "Một số tuỳ ý",
      "Một số nhỏ hơn 1"
    ],
    "answer": 0,
    "explain": "Phương sai là trung bình của các bình phương nên luôn >= 0."
  },
  {
    "id": "q_bai-10_07",
    "q": "Biết phương sai s² = 16. Độ lệch chuẩn bằng:",
    "options": [
      "4",
      "256",
      "8",
      "2"
    ],
    "answer": 0,
    "explain": "s = √16 = 4."
  },
  {
    "id": "q_bai-10_08",
    "q": "Khi so sánh độ đồng đều giữa 2 lớp có cùng điểm trung bình, lớp nào có độ lệch chuẩn nhỏ hơn thì:",
    "options": [
      "Học sinh học đồng đều hơn",
      "Học sinh học lệch hơn",
      "Điểm số cao hơn",
      "Có nhiều điểm 10 hơn"
    ],
    "answer": 0,
    "explain": "Độ lệch chuẩn nhỏ hơn => kết quả đồng đều hơn."
  },
  {
    "id": "q_bai-10_09",
    "q": "Mẫu số liệu có n = 40, tổng m_i * c_i = 200. Số trung bình x̄ là:",
    "options": [
      "5",
      "8",
      "50",
      "0.2"
    ],
    "answer": 0,
    "explain": "x̄ = 200 / 40 = 5."
  },
  {
    "id": "q_bai-10_10",
    "q": "Độ lệch chuẩn của mẫu gồm các số 5, 5, 5, 5, 5 là:",
    "options": [
      "0",
      "5",
      "1",
      "25"
    ],
    "answer": 0,
    "explain": "Tất cả các giá trị bằng nhau nên không có sai lệch: s = 0."
  }
];
