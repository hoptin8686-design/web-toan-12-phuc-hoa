import type { LessonTheory } from "@/lib/types";

const bai09: LessonTheory = {
  "intro": "Các số đặc trưng đo mức độ phân tán: Khoảng biến thiên $R$ và Khoảng tứ phân vị $\\Delta_Q = Q_3 - Q_1$ của mẫu số liệu ghép nhóm.",
  "minutes": 15,
  "sections": [
    {
      "id": "khoang-bien-thien-tu-phan-vi",
      "emoji": "📊",
      "heading": "1. Khoảng biến thiên và Tứ phân vị ghép nhóm",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Khoảng biến thiên $R$ và Khoảng tứ phân vị $\\Delta_Q$",
          "formula": "R = a_k - a_0; \\qquad \\Delta_Q = Q_3 - Q_1",
          "note": "Trong đó $a_0$ là đầu mút trái của nhóm đầu tiên và $a_k$ là đầu mút phải của nhóm cuối cùng."
        },
        {
          "kind": "mathBox",
          "title": "Công thức nội suy tính tứ phân vị thứ $r$ ($r \\in \\{1, 2, 3\\}$)",
          "formula": "Q_r = u_m + \\frac{\\frac{r \\cdot n}{4} - C}{n_m} \\cdot (u_{m+1} - u_m)",
          "note": "$u_m, u_{m+1}$ là hai đầu mút của nhóm chứa $Q_r$; $n_m$ là tần số nhóm đó; $C$ là tần số tích lũy của các nhóm trước nó."
        }
      ]
    }
  ],
  "summary": [
    "Khoảng biến thiên $R$ đo độ dãn giữa giá trị lớn nhất và nhỏ nhất của dữ liệu.",
    "Khoảng tứ phân vị $\\Delta_Q$ đo độ phân tán của 50% số liệu chính giữa, không bị ảnh hưởng bởi giá trị ngoại lai.",
    "Xác định nhóm chứa tứ phân vị bằng tần số tích lũy: $Q_1$ tương ứng $\\frac{n}{4}$, $Q_2$ (trung vị) tương ứng $\\frac{n}{2}$, $Q_3$ tương ứng $\\frac{3n}{4}$."
  ]
};

export default bai09;
