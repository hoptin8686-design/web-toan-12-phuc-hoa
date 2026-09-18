import type { LessonTheory } from "@/lib/types";

const bai19: LessonTheory = {
  "intro": "Công thức xác suất toàn phần và công thức Bayes — công cụ xác suất hiện đại để cập nhật phán đoán khi có bằng chứng thực nghiệm.",
  "minutes": 15,
  "sections": [
    {
      "id": "toan-phan-bayes",
      "emoji": "🧬",
      "heading": "1. Công thức Xác suất toàn phần & Công thức Bayes",
      "blocks": [
        {
          "kind": "mathBox",
          "title": "Công thức xác suất toàn phần",
          "formula": "P(B) = \\sum_{i=1}^n P(A_i) \\cdot P(B|A_i) = P(A_1)P(B|A_1) + P(A_2)P(B|A_2) + \\dots + P(A_n)P(B|A_n)",
          "note": "Trong đó $A_1, A_2, \\dots, A_n$ là một hệ biến cố đầy đủ ($A_i$ đôi một xung khắc và tổng hợp thành không gian mẫu $\\Omega$)."
        },
        {
          "kind": "mathBox",
          "title": "Công thức Bayes (Cập nhật xác suất hậu nghiệm)",
          "formula": "P(A_k|B) = \\frac{P(A_k) \\cdot P(B|A_k)}{P(B)} = \\frac{P(A_k) \\cdot P(B|A_k)}{\\sum_{i=1}^n P(A_i) \\cdot P(B|A_i)}",
          "note": "Cho phép tính xác suất nguyên nhân $A_k$ gây ra kết quả $B$ đã được quan sát."
        },
        {
          "kind": "example",
          "title": "Ứng dụng trong chẩn đoán y tế",
          "text": "Một căn bệnh có tỉ lệ mắc trong cộng đồng là 1%. Xét nghiệm có độ chính xác: người có bệnh xét nghiệm dương tính 95%, người không có bệnh xét nghiệm âm tính 90%. Một người xét nghiệm dương tính, tính xác suất người đó thực sự mắc bệnh.",
          "solution": "1. Gọi $A$ là biến cố 'Người đó mắc bệnh' $\\implies P(A) = 0.01, P(\\bar{A}) = 0.99$.\n2. Gọi $B$ là biến cố 'Xét nghiệm cho kết quả dương tính'.\n   $P(B|A) = 0.95$ (độ nhạy), $P(B|\\bar{A}) = 1 - 0.90 = 0.10$ (dương tính giả).\n3. Theo công thức xác suất toàn phần:\n   $P(B) = P(A)P(B|A) + P(\\bar{A})P(B|\\bar{A}) = 0.01 \\times 0.95 + 0.99 \\times 0.10 = 0.0095 + 0.099 = 0.1085$.\n4. Theo công thức Bayes:\n   $P(A|B) = \\frac{P(A)P(B|A)}{P(B)} = \\frac{0.0095}{0.1085} \\approx 0.0876 = 8.76\\%$.\n5. Kết luận: Mặc dù xét nghiệm dương tính nhưng xác suất thực sự mắc bệnh chỉ khoảng $8.76\\%$ vì căn bệnh khá hiếm."
        }
      ]
    }
  ],
  "summary": [
    "Công thức xác suất toàn phần chia bài toán phức tạp thành các trường hợp đầy đủ nhỏ hơn.",
    "Công thức Bayes dùng để 'đảo ngược điều kiện', tính xác suất tiên nghiệm thành hậu nghiệm.",
    "Ứng dụng then chốt trong chẩn đoán y học, trí tuệ nhân tạo (AI/Machine Learning) và bộ lọc thư rác."
  ]
};

export default bai19;
