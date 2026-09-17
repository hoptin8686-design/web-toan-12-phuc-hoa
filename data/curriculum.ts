import type { Topic } from "@/lib/types";

export const CURRICULUM: Topic[] = [
  {
    id: "chuong-01",
    name: "Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số",
    emoji: "📈",
    volume: 1,
    lessons: [
      {
        id: "bai-01",
        title: "Bài 1. Tính đơn điệu và cực trị của hàm số",
        available: true,
        bookPages: "Trang 5 - 14",
        highlight: "Đạo hàm, bảng xét dấu y', điều kiện đồng biến/nghịch biến và điểm cực trị",
      },
      {
        id: "bai-02",
        title: "Bài 2. Giá trị lớn nhất và giá trị nhỏ nhất của hàm số",
        available: true,
        bookPages: "Trang 15 - 19",
        highlight: "Quy tắc tìm GTLN, GTNN trên đoạn [a; b], khoảng mở và ứng dụng thực tiễn",
      },
      {
        id: "bai-03",
        title: "Bài 3. Đường tiệm cận của đồ thị hàm số",
        available: true,
        bookPages: "Trang 20 - 25",
        highlight: "Tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số",
      },
      {
        id: "bai-04",
        title: "Bài 4. Khảo sát sự biến thiên và vẽ đồ thị của hàm số",
        available: true,
        bookPages: "Trang 26 - 32",
        highlight: "Sơ đồ khảo sát hàm bậc ba, hàm phân thức bậc nhất/bậc nhất, bậc hai/bậc nhất",
      },
      {
        id: "bai-05",
        title: "Bài 5. Ứng dụng đạo hàm để giải quyết một số vấn đề thực tiễn",
        available: true,
        bookPages: "Trang 33 - 41",
        highlight: "Bài toán tối ưu hóa trong kinh tế, vật lý, kỹ thuật (chi phí, doanh thu, lợi nhuận biên)",
      },
      {
        id: "bai-cuoi-c1",
        title: "Bài tập cuối chương I",
        available: true,
        bookPages: "Trang 42 - 44",
        highlight: "Tổng ôn toàn diện: Khảo sát hàm số, cực trị, tiệm cận và tối ưu hoá",
      },
    ],
  },
  {
    id: "chuong-02",
    name: "Chương II: Vectơ và hệ trục toạ độ trong không gian",
    emoji: "📐",
    volume: 1,
    lessons: [
      {
        id: "bai-06",
        title: "Bài 6. Vectơ trong không gian",
        available: true,
        bookPages: "Trang 45 - 59",
        highlight: "Quy tắc tam giác, quy tắc hình bình hành, quy tắc hình hộp và tích vô hướng",
      },
      {
        id: "bai-07",
        title: "Bài 7. Hệ trục toạ độ trong không gian",
        available: true,
        bookPages: "Trang 60 - 66",
        highlight: "Hệ toạ độ Oxyz, toạ độ của điểm, toạ độ của vectơ và các mặt phẳng toạ độ",
      },
      {
        id: "bai-08",
        title: "Bài 8. Biểu thức toạ độ của các phép toán vectơ",
        available: true,
        bookPages: "Trang 67 - 72",
        highlight: "Cộng trừ vectơ, nhân vectơ với một số, tích vô hướng, độ dài và khoảng cách hai điểm",
      },
      {
        id: "bai-cuoi-c2",
        title: "Bài tập cuối chương II",
        available: true,
        bookPages: "Trang 73 - 74",
        highlight: "Tổng ôn toạ độ vectơ, góc giữa hai vectơ và khoảng cách trong không gian",
      },
    ],
  },
  {
    id: "chuong-03",
    name: "Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm",
    emoji: "📊",
    volume: 1,
    lessons: [
      {
        id: "bai-09",
        title: "Bài 9. Khoảng biến thiên và khoảng tứ phân vị",
        available: true,
        bookPages: "Trang 75 - 79",
        highlight: "Khoảng biến thiên R, các tứ phân vị Q1, Q2, Q3 và khoảng tứ phân vị Delta Q",
      },
      {
        id: "bai-10",
        title: "Bài 10. Phương sai và độ lệch chuẩn",
        available: true,
        bookPages: "Trang 80 - 84",
        highlight: "Số trung bình, phương sai s^2, độ lệch chuẩn s và ý nghĩa đo độ phân tán",
      },
      {
        id: "bai-cuoi-c3",
        title: "Bài tập cuối chương III",
        available: true,
        bookPages: "Trang 85 - 86",
        highlight: "Tổng ôn các số đặc trưng đo độ phân tán mẫu số liệu ghép nhóm",
      },
    ],
  },
  {
    id: "chuong-04",
    name: "Chương IV: Nguyên hàm và tích phân",
    emoji: "∫",
    volume: 2,
    lessons: [
      {
        id: "bai-11",
        title: "Bài 11. Nguyên hàm",
        available: true,
        bookPages: "Trang 4 - 11",
        highlight: "Định nghĩa, tính chất, bảng nguyên hàm cơ bản và phương pháp tính nguyên hàm",
      },
      {
        id: "bai-12",
        title: "Bài 12. Tích phân",
        available: true,
        bookPages: "Trang 12 - 18",
        highlight: "Định nghĩa tích phân, công thức Newton-Leibniz và các tính chất cơ bản",
      },
      {
        id: "bai-13",
        title: "Bài 13. Ứng dụng hình học của tích phân",
        available: true,
        bookPages: "Trang 19 - 26",
        highlight: "Tính diện tích hình phẳng, thể tích vật thể và thể tích khối tròn xoay",
      },
      {
        id: "bai-cuoi-c4",
        title: "Bài tập cuối chương IV",
        available: true,
        bookPages: "Trang 27 - 28",
        highlight: "Tổng ôn nguyên hàm, tích phân đổi biến, từng phần và ứng dụng hình học",
      },
    ],
  },
  {
    id: "chuong-05",
    name: "Chương V: Phương pháp toạ độ trong không gian",
    emoji: "🌐",
    volume: 2,
    lessons: [
      {
        id: "bai-14",
        title: "Bài 14. Phương trình mặt phẳng",
        available: true,
        bookPages: "Trang 29 - 40",
        highlight: "Vectơ pháp tuyến, phương trình tổng quát của mặt phẳng, khoảng cách từ điểm đến mặt phẳng",
      },
      {
        id: "bai-15",
        title: "Bài 15. Phương trình đường thẳng trong không gian",
        available: true,
        bookPages: "Trang 41 - 49",
        highlight: "Vectơ chỉ phương, phương trình tham số, phương trình chính tắc và vị trí tương đối",
      },
      {
        id: "bai-16",
        title: "Bài 16. Công thức tính góc trong không gian",
        available: true,
        bookPages: "Trang 50 - 53",
        highlight: "Góc giữa hai đường thẳng, góc giữa đường thẳng và mặt phẳng, góc giữa hai mặt phẳng",
      },
      {
        id: "bai-17",
        title: "Bài 17. Phương trình mặt cầu",
        available: true,
        bookPages: "Trang 54 - 60",
        highlight: "Tâm và bán kính mặt cầu, phương trình chính tắc và phương trình tổng quát",
      },
      {
        id: "bai-cuoi-c5",
        title: "Bài tập cuối chương V",
        available: true,
        bookPages: "Trang 61 - 63",
        highlight: "Tổng ôn toạ độ không gian: Mặt phẳng, đường thẳng, mặt cầu và khoảng cách, góc",
      },
    ],
  },
  {
    id: "chuong-06",
    name: "Chương VI: Xác suất có điều kiện",
    emoji: "🎲",
    volume: 2,
    lessons: [
      {
        id: "bai-18",
        title: "Bài 18. Xác suất có điều kiện",
        available: true,
        bookPages: "Trang 64 - 71",
        highlight: "Khái niệm P(A|B), tính chất, công thức nhân xác suất và sơ đồ hình cây",
      },
      {
        id: "bai-19",
        title: "Bài 19. Công thức xác suất toàn phần và công thức Bayes",
        available: true,
        bookPages: "Trang 72 - 78",
        highlight: "Hệ biến cố đầy đủ, công thức xác suất toàn phần, công thức Bayes và ứng dụng chẩn đoán",
      },
      {
        id: "bai-cuoi-c6",
        title: "Bài tập cuối chương VI",
        available: true,
        bookPages: "Trang 79 - 80",
        highlight: "Tổng ôn xác suất có điều kiện, công thức nhân, toàn phần và Bayes",
      },
    ],
  },
];

export function getLessonById(id: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === id);
    if (lesson) return { lesson, topic };
  }
  return null;
}
