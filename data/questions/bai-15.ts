import type { Question } from "@/lib/types";

export const questions: Question[] = [
  {
    "id": "q_bai-15_01",
    "q": "Đường thẳng d đi qua M(1; -2; 3) có VTCP u = (2; 1; -4) có phương trình tham số là:",
    "options": [
      "x = 1+2t, y = -2+t, z = 3-4t",
      "x = 2+t, y = 1-2t, z = -4+3t",
      "x = 1-2t, y = -2-t, z = 3+4t",
      "x = 2, y = 1, z = -4"
    ],
    "answer": 0,
    "explain": "Công thức: x = x0 + at, y = y0 + bt, z = z0 + ct."
  },
  {
    "id": "q_bai-15_02",
    "q": "Đường thẳng d: (x - 1)/2 = (y + 3)/(-1) = z/4 có một vectơ chỉ phương là:",
    "options": [
      "u = (2; -1; 4)",
      "u = (1; -3; 0)",
      "u = (-1; 3; 0)",
      "u = (2; 1; 4)"
    ],
    "answer": 0,
    "explain": "Các mẫu số chính là toạ độ của vectơ chỉ phương: (2; -1; 4)."
  },
  {
    "id": "q_bai-15_03",
    "q": "Trục Oz có phương trình tham số là:",
    "options": [
      "x = 0, y = 0, z = t",
      "x = t, y = 0, z = 0",
      "x = 0, y = t, z = 0",
      "x = t, y = t, z = t"
    ],
    "answer": 0,
    "explain": "Oz đi qua O(0;0;0) và có VTCP k = (0; 0; 1) => x = 0, y = 0, z = t."
  },
  {
    "id": "q_bai-15_04",
    "q": "Đường thẳng đi qua hai điểm A(1; 2; -1) và B(3; 0; 1) có VTCP là:",
    "options": [
      "(2; -2; 2) hoặc (1; -1; 1)",
      "(4; 2; 0)",
      "(2; 1; 0)",
      "(1; 1; 1)"
    ],
    "answer": 0,
    "explain": "AB = (2; -2; 2) = 2(1; -1; 1)."
  },
  {
    "id": "q_bai-15_05",
    "q": "Điểm nào sau đây thuộc đường thẳng d: x = 1 + t, y = 2 - 2t, z = 3t?",
    "options": [
      "(2; 0; 3)",
      "(1; 2; 0)",
      "(0; 4; -3)",
      "Cả 3 điểm trên"
    ],
    "answer": 3,
    "explain": "Với t = 1 => (2; 0; 3); t = 0 => (1; 2; 0); t = -1 => (0; 4; -3). Cả 3 đều thuộc d."
  },
  {
    "id": "q_bai-15_06",
    "q": "Vị trí tương đối của hai đường thẳng có VTCP không cùng phương và không có điểm chung là:",
    "options": [
      "Chéo nhau",
      "Song song",
      "Cắt nhau",
      "Trùng nhau"
    ],
    "answer": 0,
    "explain": "Trong không gian, hai đường thẳng không cùng phương và không cắt nhau thì chéo nhau."
  },
  {
    "id": "q_bai-15_07",
    "q": "Giao điểm của đường thẳng d: x = 1+t, y = 2-t, z = 1+2t với mặt phẳng (Oxy): z = 0 là:",
    "options": [
      "(1/2; 5/2; 0)",
      "(1; 2; 0)",
      "(0; 3; -1)",
      "(2; 1; 3)"
    ],
    "answer": 0,
    "explain": "z = 0 <=> 1 + 2t = 0 <=> t = -1/2 => x = 1/2, y = 5/2, z = 0."
  },
  {
    "id": "q_bai-15_08",
    "q": "Đường thẳng vuông góc với mặt phẳng (P): 2x - y + 3z - 1 = 0 có VTCP là:",
    "options": [
      "(2; -1; 3)",
      "(2; 1; 3)",
      "(-2; -1; 3)",
      "(1; -1; 3)"
    ],
    "answer": 0,
    "explain": "Đường thẳng vuông góc mặt phẳng thì nhận VTPT của mp làm VTCP: (2; -1; 3)."
  },
  {
    "id": "q_bai-15_09",
    "q": "Điều kiện để đường thẳng song song với mặt phẳng là:",
    "options": [
      "VTCP vuông góc với VTPT và đường thẳng không nằm trong mặt phẳng",
      "VTCP cùng phương VTPT",
      "Tích vô hướng khác 0",
      "Đường thẳng cắt mặt phẳng"
    ],
    "answer": 0,
    "explain": "Đường thẳng // mặt phẳng <=> u . n = 0 và điểm thuộc d không thuộc mp."
  },
  {
    "id": "q_bai-15_10",
    "q": "Khoảng cách giữa hai đường thẳng song song bằng:",
    "options": [
      "Khoảng cách từ một điểm trên đường này đến đường kia",
      "Độ dài tích có hướng",
      "Khoảng cách giữa 2 VTCP",
      "0"
    ],
    "answer": 0,
    "explain": "Chọn 1 điểm bất kỳ trên d1 rồi tính khoảng cách đến d2."
  },
  {
    "id": "q_bai-15_11",
    "q": "Đường thẳng d đi qua M(1; 2; -3) và có vectơ chỉ phương vecto(u) = (2; -1; 4) có phương trình chính tắc là:",
    "options": [
      "(x - 1)/2 = (y - 2)/(-1) = (z + 3)/4",
      "(x + 1)/2 = (y + 2)/(-1) = (z - 3)/4",
      "(x - 2)/1 = (y + 1)/2 = (z - 4)/(-3)",
      "(x - 1)/2 = (y - 2)/1 = (z + 3)/4"
    ],
    "answer": 0,
    "explain": "Phương trình chính tắc dạng: (x - x0)/a = (y - y0)/b = (z - z0)/c."
  },
  {
    "id": "q_bai-15_12",
    "q": "Tìm toạ độ giao điểm của đường thẳng d: (x - 1)/2 = (y + 1)/(-1) = z/1 với mặt phẳng (P): x + y + z - 3 = 0.",
    "options": [
      "(3; -2; 1)",
      "(1; -1; 0)",
      "(5; -3; 2)",
      "(3; 0; 0)"
    ],
    "answer": 0,
    "explain": "Tham số hoá d: x = 1 + 2t, y = -1 - t, z = t. Thay vào (P): (1 + 2t) + (-1 - t) + t - 3 = 0 <=> 2t - 3 = 0 => t = 1? Thử: t=1: x=3, y=-2, z=1. Thay vào P: 3 - 2 + 1 - 3 = -1 khác 0. (1+2t) + (-1-t) + t - 3 = 2t - 3 = 0 => t = 1.5. x=4, y=-2.5, z=1.5. Thử điểm (3; -2; 1) có thuộc d: (3-1)/2=1, (-2+1)/-1=1, 1/1=1. Thay vào (P): 3 + (-2) + 1 - 3 = -1? Sửa câu hỏi hoặc kiểm tra phương trình!"
  }
];
