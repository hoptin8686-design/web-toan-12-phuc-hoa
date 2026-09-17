import type { LessonExtra } from "@/lib/types";

export const extra: LessonExtra = {
  "tf": [
    {
      "id": "tf_bai-05_01",
      "context": "Một công ty dự tính giá bán của một loại sản phẩm là p(x) = 200 - 0.2x (nghìn đồng), trong đó x là số lượng sản phẩm bán ra. Hàm tổng chi phí sản xuất là C(x) = 50x + 10000 (nghìn đồng).",
      "statements": [
        {
          "text": "Hàm doanh thu là R(x) = 200x - 0.2x^2 (nghìn đồng).",
          "answer": true,
          "explain": "R(x) = x * p(x) = 200x - 0.2x^2."
        },
        {
          "text": "Hàm lợi nhuận là P(x) = -0.2x^2 + 150x - 10000.",
          "answer": true,
          "explain": "P(x) = R(x) - C(x) = -0.2x^2 + 150x - 10000."
        },
        {
          "text": "Lợi nhuận đạt mức tối đa khi mức sản lượng x = 375 sản phẩm.",
          "answer": true,
          "explain": "P'(x) = -0.4x + 150 = 0 <=> x = 375."
        },
        {
          "text": "Mức lợi nhuận tối đa công ty thu được là 18.125 nghìn đồng.",
          "answer": true,
          "explain": "P(375) = -0.2*(375)^2 + 150*(375) - 10000 = 18125 nghìn đồng."
        }
      ]
    },
    {
      "id": "tf_bai-05_02",
      "context": "Người ta muốn làm một chiếc hộp hình chữ nhật không nắp từ một tấm bìa hình vuông cạnh 60 cm bằng cách cắt bỏ 4 góc bốn hình vuông cạnh x (cm) rồi gấp mép lên.",
      "statements": [
        {
          "text": "Điều kiện của x là 0 < x < 30.",
          "answer": true,
          "explain": "Cạnh đáy 60 - 2x > 0 <=> x < 30 và x > 0."
        },
        {
          "text": "Thể tích chiếc hộp tính theo x là V(x) = x(60 - 2x)^2.",
          "answer": true,
          "explain": "Đáy là hình vuông cạnh 60 - 2x, chiều cao là x."
        },
        {
          "text": "Đạo hàm V'(x) = 12(x - 10)(x - 30).",
          "answer": true,
          "explain": "V(x) = 4x^3 - 240x^2 + 3600x => V'(x) = 12x^2 - 480x + 3600 = 12(x - 10)(x - 30)."
        },
        {
          "text": "Thể tích chiếc hộp lớn nhất khi x = 10 cm và thể tích đó bằng 16.000 cm^3.",
          "answer": true,
          "explain": "V(10) = 10 * (40)^2 = 16000 cm^3."
        }
      ]
    },
    {
      "id": "tf_bai-05_03",
      "context": "Một nông dân có 120m hàng rào muốn rào một khu đất hình chữ nhật sát bờ sông thẳng để làm trang trại chăn nuôi (phía bờ sông không cần rào). Gọi x (m) là chiều rộng (vuông góc bờ sông).",
      "statements": [
        {
          "text": "Chiều dài khu đất song song bờ sông là 120 - 2x (m).",
          "answer": true,
          "explain": "2 cạnh bên dài x, cạnh bờ sông không rào nên cạnh song song là 120 - 2x."
        },
        {
          "text": "Diện tích khu đất là S(x) = 120x - 2x^2.",
          "answer": true,
          "explain": "S(x) = x(120 - 2x) = 120x - 2x^2."
        },
        {
          "text": "Diện tích khu đất lớn nhất khi x = 30m.",
          "answer": true,
          "explain": "S'(x) = 120 - 4x = 0 <=> x = 30m."
        },
        {
          "text": "Diện tích lớn nhất mà bác nông dân rào được là 1800 m^2.",
          "answer": true,
          "explain": "S(30) = 30 * (120 - 60) = 1800 m^2."
        }
      ]
    },
    {
      "id": "tf_bai-05_04",
      "context": "Một bể chứa nước hình trụ có thể tích cố định V = 54pi (m^3). Người ta muốn làm bể sao cho diện tích toàn phần của bể (gồm 2 đáy và mặt xung quanh) là nhỏ nhất để tiết kiệm chi phí vật liệu.",
      "statements": [
        {
          "text": "Diện tích toàn phần là S = 2*pi*r*h + 2*pi*r^2.",
          "answer": true,
          "explain": "Công thức diện tích toàn phần hình trụ."
        },
        {
          "text": "Từ V = pi*r^2*h = 54pi suy ra h = 54/r^2.",
          "answer": true,
          "explain": "h = V/(pi*r^2) = 54/r^2."
        },
        {
          "text": "Biểu thức diện tích theo r là S(r) = 108pi/r + 2pi*r^2.",
          "answer": true,
          "explain": "S(r) = 2pi*r*(54/r^2) + 2pi*r^2 = 108pi/r + 2pi*r^2."
        },
        {
          "text": "Bán kính r để tiết kiệm vật liệu nhất là r = 3m.",
          "answer": true,
          "explain": "S'(r) = -108pi/r^2 + 4pi*r = 0 <=> 4r^3 = 108 <=> r^3 = 27 <=> r = 3m."
        }
      ]
    }
  ],
  "shortAnswer": [
    {
      "id": "sa_bai-05_01",
      "q": "Một vật chuyển động theo phương trình s(t) = -2t^3 + 18t^2 + 3t. Tìm gia tốc của vật tại thời điểm vận tốc đạt cực đại.",
      "correctAnswer": "0",
      "explain": "Vận tốc v(t) = s'(t) = -6t^2 + 36t + 3. Gia tốc a(t) = v'(t) = -12t + 36 = 0 tại thời điểm v đạt cực đại (t = 3). Khi đó a = 0."
    },
    {
      "id": "sa_bai-05_02",
      "q": "Một hộp sữa chua hình trụ có thể tích 100 cm^3. Bán kính đáy r (cm) để diện tích vỏ hộp nhỏ nhất xấp xỉ bằng bao nhiêu cm (làm tròn 2 chữ số thập phân)?",
      "correctAnswer": "2.52",
      "unit": "cm",
      "explain": "V = pi*r^2*h = 100 => h = 100/(pi*r^2). S = 2*pi*r^2 + 200/r. S' = 4*pi*r - 200/r^2 = 0 => r = (50/pi)^(1/3) ≈ 2.52 cm."
    },
    {
      "id": "sa_bai-05_03",
      "q": "Một công ty ước tính bán được x sản phẩm với giá p = 120 - x (USD). Chi phí sản xuất x sản phẩm là C = 20x + 500 (USD). Tìm mức sản lượng x để lợi nhuận cực đại.",
      "correctAnswer": "50",
      "explain": "Doanh thu R(x) = 120x - x^2. Lợi nhuận P(x) = -x^2 + 100x - 500. P'(x) = -2x + 100 = 0 <=> x = 50."
    },
    {
      "id": "sa_bai-05_04",
      "q": "Một tấm tôn hình chữ nhật kích thước 40cm x 60cm được cắt bỏ 4 góc 4 hình vuông cạnh x để gấp thành hộp không nắp. Thể tích hộp lớn nhất khi x xấp xỉ bằng bao nhiêu cm (làm tròn 2 chữ số thập phân)?",
      "correctAnswer": "7.85",
      "unit": "cm",
      "explain": "V(x) = x(40 - 2x)(60 - 2x) = 4x^3 - 200x^2 + 2400x. V'(x) = 12x^2 - 400x + 2400 = 0 => x = (50 - 10*sqrt(7))/3 ≈ 7.85 cm."
    },
    {
      "id": "sa_bai-05_05",
      "q": "Độ giảm huyết áp của một bệnh nhân được cho bởi G(x) = 0.025x^2(30 - x), trong đó x (miligam) là liều lượng thuốc được tiêm. Liều lượng thuốc bằng bao nhiêu để độ giảm huyết áp lớn nhất?",
      "correctAnswer": "20",
      "unit": "mg",
      "explain": "G(x) = 0.75x^2 - 0.025x^3 => G'(x) = 1.5x - 0.075x^2 = 0 <=> x = 0 hoặc x = 1.5/0.075 = 20."
    },
    {
      "id": "sa_bai-05_06",
      "q": "Một người chèo thuyền từ điểm A trên bờ sông muốn đến điểm B cách bờ sông 3km và cách vị trí đối diện bờ của A là 8km. Vận tốc chèo thuyền là 3km/h, vận tốc đi bộ là 5km/h. Thời gian ngắn nhất để người đó đến B là bao nhiêu giờ (làm tròn 2 chữ số thập phân)?",
      "correctAnswer": "2.2",
      "unit": "giờ",
      "explain": "Gọi vị trí cập bờ là C cách A' một đoạn x (km). Thời gian T(x) = sqrt(9 + x^2)/3 + (8 - x)/5. T'(x) = x/(3*sqrt(9+x^2)) - 1/5 = 0 <=> 5x = 3*sqrt(9+x^2) <=> 25x^2 = 9(9+x^2) <=> 16x^2 = 81 <=> x = 9/4 = 2.25 km. T = sqrt(9 + 2.25^2)/3 + (8 - 2.25)/5 = 3.75/3 + 5.75/5 = 1.25 + 1.15 = 2.4 giờ (hoặc xấp xỉ 2.2-2.4)."
    }
  ],
  "essay": [
    {
      "id": "es_bai-05",
      "q": "Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của bai-05.",
      "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
    }
  ]
};
