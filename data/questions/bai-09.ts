import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-09_01",
    "q": "Khoảng biến thiên của mẫu số liệu ghép nhóm là:",
    "options": [
      "Hiệu giữa đầu mút phải của nhóm cuối và đầu mút trái của nhóm đầu",
      "Hiệu giữa hai tần số lớn nhất",
      "Hiệu giữa số trung bình và trung vị",
      "Tổng các tần số"
    ],
    "answer": 0,
    "explain": "Khoảng biến thiên R = x_max - x_min = a_{k+1} - a_1."
  },
  {
    "id": "q_bai-09_02",
    "q": "Ý nghĩa của khoảng biến thiên và khoảng tứ phân vị là:",
    "options": [
      "Đo độ phân tán của mẫu số liệu",
      "Đo xu thế trung tâm",
      "Tính giá trị trung bình",
      "Xác định mốt"
    ],
    "answer": 0,
    "explain": "Cả hai đều là số đặc trưng đo độ phân tán của mẫu số liệu."
  },
  {
    "id": "q_bai-09_03",
    "q": "Khoảng tứ phân vị Delta Q được tính bằng công thức:",
    "options": [
      "ΔQ = Q3 - Q1",
      "ΔQ = Q3 - Q2",
      "ΔQ = Q2 - Q1",
      "ΔQ = (Q1 + Q3)/2"
    ],
    "answer": 0,
    "explain": "ΔQ = Q3 - Q1."
  },
  {
    "id": "q_bai-09_04",
    "q": "Nhóm chứa tứ phân vị thứ nhất Q1 là nhóm đầu tiên có tần số tích lũy:",
    "options": [
      ">= n/4",
      ">= n/2",
      ">= 3n/4",
      ">= n"
    ],
    "answer": 0,
    "explain": "Q1 tương ứng với mức 25% cỡ mẫu nên tích lũy >= n/4."
  },
  {
    "id": "q_bai-09_05",
    "q": "Nhóm chứa trung vị Q2 là nhóm đầu tiên có tần số tích lũy:",
    "options": [
      ">= n/2",
      ">= n/4",
      ">= 3n/4",
      ">= n"
    ],
    "answer": 0,
    "explain": "Trung vị chia đôi mẫu số liệu nên tích lũy >= n/2."
  },
  {
    "id": "q_bai-09_06",
    "q": "Khoảng biến thiên của mẫu điểm [0; 20), [20; 40), [40; 60), [60; 80) là:",
    "options": [
      "80",
      "60",
      "20",
      "40"
    ],
    "answer": 0,
    "explain": "R = 80 - 0 = 80."
  },
  {
    "id": "q_bai-09_07",
    "q": "Ưu điểm của khoảng tứ phân vị so với khoảng biến thiên là:",
    "options": [
      "Ít bị ảnh hưởng bởi các giá trị ngoại lai bất thường",
      "Dễ tính hơn",
      "Luôn bằng 0",
      "Tính được cho mọi mẫu"
    ],
    "answer": 0,
    "explain": "Khoảng tứ phân vị chỉ xét 50% dữ liệu ở giữa nên loại trừ các giá trị ngoại lai."
  },
  {
    "id": "q_bai-09_08",
    "q": "Biết Q1 = 15 và Q3 = 35. Khoảng tứ phân vị bằng:",
    "options": [
      "20",
      "50",
      "25",
      "10"
    ],
    "answer": 0,
    "explain": "ΔQ = 35 - 15 = 20."
  },
  {
    "id": "q_bai-09_09",
    "q": "Tứ phân vị thứ hai Q2 của mẫu số liệu chính là:",
    "options": [
      "Trung vị (Median)",
      "Số trung bình",
      "Mốt",
      "Độ lệch chuẩn"
    ],
    "answer": 0,
    "explain": "Q2 = Me (Trung vị)."
  },
  {
    "id": "q_bai-09_10",
    "q": "Nếu tất cả các số liệu trong mẫu đều bằng nhau thì khoảng biến thiên R bằng:",
    "options": [
      "0",
      "1",
      "Vô cùng",
      "Không xác định"
    ],
    "answer": 0,
    "explain": "Dữ liệu không phân tán nên R = 0."
  }
];
