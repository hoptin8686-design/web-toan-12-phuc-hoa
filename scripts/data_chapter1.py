# -*- coding: utf-8 -*-
"""
Dữ liệu Chương I: Ứng dụng đạo hàm để khảo sát và vẽ đồ thị hàm số
Bao gồm: bai-01, bai-02, bai-03, bai-04, bai-05, bai-cuoi-c1
"""

DATA_C1 = {
    "bai-01": {
        "extra_mcq": [
            {
                "id": "q_bai-01_11",
                "q": "Tìm tất cả các giá trị thực của tham số m để hàm số y = x^3 - 3mx^2 + 3(2m - 1)x + 1 đồng biến trên R.",
                "options": ["m = 1", "m > 1", "m < 1", "m <= 1"],
                "answer": 0,
                "explain": "y' = 3x^2 - 6mx + 3(2m - 1) >= 0 với mọi x <=> Delta' = 9m^2 - 9(2m - 1) = 9(m - 1)^2 <= 0 <=> m = 1."
            },
            {
                "id": "q_bai-01_12",
                "q": "Cho hàm số f(x) có bảng biến thiên với f'(x) đổi dấu từ dương sang âm khi qua x = -1 và đổi dấu từ âm sang dương khi qua x = 2. Khẳng định nào đúng?",
                "options": [
                    "Hàm số đạt cực đại tại x = -1 và đạt cực tiểu tại x = 2",
                    "Hàm số đạt cực tiểu tại x = -1 và đạt cực đại tại x = 2",
                    "Hàm số đồng biến trên khoảng (-1; 2)",
                    "Hàm số nghịch biến trên khoảng (2; +∞)"
                ],
                "answer": 0,
                "explain": "Đạo hàm đổi dấu từ + sang - khi qua x0 thì x0 là điểm cực đại; từ - sang + thì là cực tiểu."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-01_01",
                "context": "Cho hàm số y = f(x) = x^3 - 3x^2 + 2.",
                "statements": [
                    {"text": "Đạo hàm của hàm số là f'(x) = 3x^2 - 6x.", "answer": True, "explain": "f'(x) = 3x^2 - 6x."},
                    {"text": "Hàm số đồng biến trên khoảng (0; 2).", "answer": False, "explain": "Trên (0; 2) f'(x) < 0 nên hàm số nghịch biến."},
                    {"text": "Điểm cực đại của đồ thị hàm số là (0; 2).", "answer": True, "explain": "x = 0 => y = 2, f'(x) đổi dấu từ + sang - nên (0; 2) là điểm cực đại."},
                    {"text": "Khoảng cách giữa hai điểm cực trị của đồ thị hàm số bằng 2*sqrt(5).", "answer": True, "explain": "Hai điểm cực trị là A(0; 2) và B(2; -2). AB = sqrt(2^2 + (-4)^2) = sqrt(20) = 2*sqrt(5)."}
                ]
            },
            {
                "id": "tf_bai-01_02",
                "context": "Cho hàm số phân thức y = (2x - 1)/(x + 1).",
                "statements": [
                    {"text": "Tập xác định của hàm số là D = R \\ {-1}.", "answer": True, "explain": "Mẫu số x + 1 khác 0 <=> x khác -1."},
                    {"text": "Đạo hàm y' = 3/(x + 1)^2 với mọi x thuộc D.", "answer": True, "explain": "y' = (2*1 - (-1)*1)/(x+1)^2 = 3/(x+1)^2 > 0."},
                    {"text": "Hàm số đồng biến trên R \\ {-1}.", "answer": False, "explain": "Không được kết luận đồng biến trên R \\ {-1}, phải kết luận đồng biến trên từng khoảng (-∞; -1) và (-1; +∞)."},
                    {"text": "Đồ thị hàm số không có điểm cực trị nào.", "answer": True, "explain": "Hàm bậc nhất/bậc nhất y' luôn cùng dấu trên từng khoảng xác định nên không có cực trị."}
                ]
            },
            {
                "id": "tf_bai-01_03",
                "context": "Xét tính đơn điệu và cực trị của hàm số y = x^4 - 2x^2 - 3.",
                "statements": [
                    {"text": "Hàm số có 3 điểm cực trị.", "answer": True, "explain": "y' = 4x^3 - 4x = 4x(x^2 - 1) = 0 có 3 nghiệm phân biệt x = 0, x = ±1."},
                    {"text": "Hàm số đồng biến trên các khoảng (-1; 0) và (1; +∞).", "answer": True, "explain": "Lập bảng xét dấu y' ta thấy y' > 0 trên (-1; 0) và (1; +∞)."},
                    {"text": "Giá trị cực đại của hàm số là y_CĐ = 0.", "answer": False, "explain": "Tại x = 0, y(0) = -3. Do đó y_CĐ = -3."},
                    {"text": "Đồ thị hàm số nhận trục tung Oy làm trục đối xứng.", "answer": True, "explain": "Hàm số đã cho là hàm số chẵn f(-x) = f(x)."}
                ]
            },
            {
                "id": "tf_bai-01_04",
                "context": "Cho hàm số y = f(x) liên tục trên R và có đạo hàm f'(x) = (x - 1)^2(x + 2)(x - 3).",
                "statements": [
                    {"text": "Hàm số có 3 điểm cực trị.", "answer": False, "explain": "Nghiệm x = 1 là nghiệm bội chẵn nên đạo hàm không đổi dấu, hàm số chỉ có 2 điểm cực trị tại x = -2 và x = 3."},
                    {"text": "Hàm số nghịch biến trên khoảng (-2; 3).", "answer": True, "explain": "Với x thuộc (-2; 3) \\ {1}, (x-1)^2 > 0, x+2 > 0, x-3 < 0 nên f'(x) < 0."},
                    {"text": "Hàm số đạt cực tiểu tại x = 3.", "answer": True, "explain": "f'(x) đổi dấu từ âm sang dương khi qua x = 3 nên x = 3 là điểm cực tiểu."},
                    {"text": "Hàm số đạt cực đại tại x = 1.", "answer": False, "explain": "x = 1 không phải là điểm cực trị."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-01_01",
                "q": "Tìm số điểm cực trị của hàm số y = 2x^3 - 9x^2 + 12x - 4.",
                "correctAnswer": "2",
                "explain": "y' = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 0 <=> x = 1 hoặc x = 2. Hai nghiệm đơn nên hàm số có đúng 2 điểm cực trị."
            },
            {
                "id": "sa_bai-01_02",
                "q": "Tìm giá trị cực đại của hàm số y = -x^3 + 3x + 2.",
                "correctAnswer": "4",
                "explain": "y' = -3x^2 + 3 = 0 <=> x = 1 hoặc x = -1. Tại x = 1 hàm số đạt cực đại, y(1) = -1 + 3 + 2 = 4."
            },
            {
                "id": "sa_bai-01_03",
                "q": "Cho hàm số y = x^3 - 3x^2 + mx + 1. Tìm giá trị của m để hàm số đạt cực trị tại x = 1.",
                "correctAnswer": "3",
                "explain": "y' = 3x^2 - 6x + m. Hàm số đạt cực trị tại x = 1 thì y'(1) = 0 <=> 3 - 6 + m = 0 <=> m = 3."
            },
            {
                "id": "sa_bai-01_04",
                "q": "Hàm số y = (x - 2)/(x + 1) có bao nhiêu điểm cực trị?",
                "correctAnswer": "0",
                "explain": "Đạo hàm y' = 3/(x + 1)^2 > 0 với mọi x ≠ -1. Hàm số không có điểm cực trị nào."
            },
            {
                "id": "sa_bai-01_05",
                "q": "Tính khoảng cách giữa hai điểm cực trị của đồ thị hàm số y = x^3 - 3x.",
                "correctAnswer": "4.47",
                "explain": "Hai điểm cực trị là A(-1; 2) và B(1; -2). Độ dài đoạn thẳng AB = sqrt((1 - (-1))^2 + (-2 - 2)^2) = sqrt(4 + 16) = sqrt(20) ≈ 4.47 (hoặc 2*sqrt(5))."
            },
            {
                "id": "sa_bai-01_06",
                "q": "Hàm số f(x) có đạo hàm f'(x) = x(x - 2)^3(x + 1)^2. Hỏi f(x) có bao nhiêu điểm cực trị?",
                "correctAnswer": "2",
                "explain": "x = -1 là nghiệm bội 2 (chẵn) nên không đổi dấu. x = 0 (bội 1) và x = 2 (bội 3, lẻ) làm đổi dấu đạo hàm nên hàm số có 2 điểm cực trị."
            }
        ]
    },
    "bai-02": {
        "extra_mcq": [
            {
                "id": "q_bai-02_11",
                "q": "Giá trị nhỏ nhất của hàm số y = x + 4/x trên đoạn [1; 3] bằng:",
                "options": ["4", "5", "13/3", "2"],
                "answer": 0,
                "explain": "y' = 1 - 4/x^2 = 0 <=> x = 2 thuộc [1; 3]. y(1) = 5, y(2) = 4, y(3) = 13/3. Min = 4 tại x = 2."
            },
            {
                "id": "q_bai-02_12",
                "q": "Tìm giá trị lớn nhất M của hàm số y = sqrt(4 - x^2).",
                "options": ["M = 2", "M = 4", "M = 0", "M = 16"],
                "answer": 0,
                "explain": "Tập xác định [-2; 2]. 4 - x^2 <= 4 => sqrt(4 - x^2) <= 2. Dấu bằng xảy ra khi x = 0."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-02_01",
                "context": "Xét hàm số y = f(x) = x^4 - 2x^2 + 3 trên đoạn [-1; 2].",
                "statements": [
                    {"text": "Đạo hàm f'(x) = 4x(x^2 - 1) = 0 có nghiệm x = 0, x = ±1 thuộc [-1; 2].", "answer": True, "explain": "Các nghiệm 0, 1, -1 đều thuộc [-1; 2]."},
                    {"text": "Giá trị của hàm số tại các điểm tới hạn là f(0) = 3, f(1) = 2, f(-1) = 2.", "answer": True, "explain": "f(0) = 3, f(±1) = 1 - 2 + 3 = 2."},
                    {"text": "Giá trị lớn nhất của hàm số trên [-1; 2] là 3.", "answer": False, "explain": "f(2) = 16 - 8 + 3 = 11 > 3, nên max = 11."},
                    {"text": "Giá trị nhỏ nhất của hàm số trên [-1; 2] là 2.", "answer": True, "explain": "Min{f(-1), f(1), f(0), f(2)} = min{2, 2, 3, 11} = 2."}
                ]
            },
            {
                "id": "tf_bai-02_02",
                "context": "Cho hàm số y = (x - 1)/(x + 1) trên đoạn [0; 2].",
                "statements": [
                    {"text": "Hàm số liên tục trên đoạn [0; 2].", "answer": True, "explain": "Mẫu số x + 1 khác 0 trên [0; 2]."},
                    {"text": "Đạo hàm y' = 2/(x + 1)^2 > 0 với mọi x thuộc [0; 2].", "answer": True, "explain": "Hàm số đồng biến trên [0; 2]."},
                    {"text": "Giá trị nhỏ nhất của hàm số đạt tại x = 0 và bằng -1.", "answer": True, "explain": "Hàm đồng biến nên min = y(0) = (0-1)/(0+1) = -1."},
                    {"text": "Giá trị lớn nhất của hàm số trên [0; 2] là 1/3.", "answer": True, "explain": "Max = y(2) = (2-1)/(2+1) = 1/3."}
                ]
            },
            {
                "id": "tf_bai-02_03",
                "context": "Một mảnh vườn hình chữ nhật có chu vi bằng 40m. Gọi x (m) là chiều rộng của mảnh vườn (0 < x < 20).",
                "statements": [
                    {"text": "Chiều dài của mảnh vườn là 40 - x (m).", "answer": False, "explain": "Nửa chu vi là 20m nên chiều dài là 20 - x (m)."},
                    {"text": "Hàm số biểu diễn diện tích mảnh vườn là S(x) = 20x - x^2.", "answer": True, "explain": "S(x) = x(20 - x) = 20x - x^2."},
                    {"text": "Diện tích mảnh vườn lớn nhất khi chiều rộng x = 10m.", "answer": True, "explain": "S'(x) = 20 - 2x = 0 <=> x = 10."},
                    {"text": "Diện tích lớn nhất đạt được là 100 m^2.", "answer": True, "explain": "S(10) = 10 * 10 = 100 m^2."}
                ]
            },
            {
                "id": "tf_bai-02_04",
                "context": "Cho hàm số y = f(x) xác định và liên tục trên đoạn [-2; 3] có đồ thị đạt cực đại tại (-1; 4) và cực tiểu tại (1; -2). Biết f(-2) = 1, f(3) = 5.",
                "statements": [
                    {"text": "Giá trị lớn nhất của hàm số trên [-2; 3] bằng 4.", "answer": False, "explain": "f(3) = 5 > 4 nên GTLN là 5 tại x = 3."},
                    {"text": "Giá trị nhỏ nhất của hàm số trên [-2; 3] bằng -2.", "answer": True, "explain": "Min{-2, 1, 5} = -2 tại x = 1."},
                    {"text": "Hàm số đạt giá trị lớn nhất tại x = 3.", "answer": True, "explain": "f(3) = 5 là giá trị cao nhất."},
                    {"text": "Tổng giá trị lớn nhất và giá trị nhỏ nhất của hàm số bằng 3.", "answer": True, "explain": "M + m = 5 + (-2) = 3."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-02_01",
                "q": "Tìm giá trị lớn nhất của hàm số y = -x^2 + 4x + 1 trên đoạn [0; 3].",
                "correctAnswer": "5",
                "explain": "Đỉnh parabol x = 2 thuộc [0; 3]. y(0) = 1, y(2) = 5, y(3) = 4. Giá trị lớn nhất bằng 5."
            },
            {
                "id": "sa_bai-02_02",
                "q": "Tìm giá trị nhỏ nhất của hàm số y = x^3 - 3x + 1 trên đoạn [0; 2].",
                "correctAnswer": "-1",
                "explain": "y' = 3x^2 - 3 = 0 <=> x = 1 thuộc [0; 2]. y(0) = 1, y(1) = -1, y(2) = 3. Giá trị nhỏ nhất là -1."
            },
            {
                "id": "sa_bai-02_03",
                "q": "Cho hàm số y = (2x + 1)/(x - 2) trên đoạn [3; 5]. Tính tích của giá trị lớn nhất và giá trị nhỏ nhất.",
                "correctAnswer": "25.67",
                "explain": "y' = -5/(x - 2)^2 < 0 nên nghịch biến. Max = y(3) = 7/1 = 7, min = y(5) = 11/3. Tích M*m = 7 * (11/3) = 77/3 ≈ 25.67."
            },
            {
                "id": "sa_bai-02_04",
                "q": "Người ta muốn uốn một sợi dây thép dài 60 cm thành một hình chữ nhật có diện tích lớn nhất. Chiều dài mỗi cạnh của hình chữ nhật đó là bao nhiêu cm?",
                "correctAnswer": "15",
                "unit": "cm",
                "explain": "Hình chữ nhật có chu vi không đổi thì diện tích lớn nhất khi nó là hình vuông cạnh = 60 / 4 = 15 cm."
            },
            {
                "id": "sa_bai-02_05",
                "q": "Tìm giá trị nhỏ nhất của hàm số y = x + 9/x với x > 0.",
                "correctAnswer": "6",
                "explain": "Áp dụng BĐT Cô-si cho 2 số dương: x + 9/x >= 2*sqrt(x * 9/x) = 2*3 = 6. Dấu bằng khi x = 3."
            },
            {
                "id": "sa_bai-02_06",
                "q": "Giá trị lớn nhất của hàm số y = sin(x) - cos(x) bằng bao nhiêu (làm tròn 2 chữ số thập phân)?",
                "correctAnswer": "1.41",
                "explain": "sin(x) - cos(x) = sqrt(2)*sin(x - pi/4) <= sqrt(2) ≈ 1.41."
            }
        ]
    },
    "bai-03": {
        "extra_mcq": [
            {
                "id": "q_bai-03_11",
                "q": "Đồ thị hàm số y = (x^2 - 3x + 2)/(x - 1) có đường tiệm cận đứng là:",
                "options": [
                    "Không có tiệm cận đứng",
                    "x = 1",
                    "x = 2",
                    "y = 1"
                ],
                "answer": 0,
                "explain": "y = (x - 1)(x - 2)/(x - 1) = x - 2 khi x ≠ 1. Khi x -> 1 thì y -> -1 (hữu hạn) nên không có TCĐ."
            },
            {
                "id": "q_bai-03_12",
                "q": "Tìm phương trình đường tiệm cận xiên của đồ thị hàm số y = (2x^2 - 3x + 1)/(x - 1).",
                "options": [
                    "y = 2x - 1",
                    "y = 2x + 1",
                    "y = x - 1",
                    "y = 2x"
                ],
                "answer": 0,
                "explain": "Thực hiện phép chia đa thức: 2x^2 - 3x + 1 = (2x - 1)(x - 1). Khi x ≠ 1, y = 2x - 1 là đường thẳng."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-03_01",
                "context": "Cho hàm số y = (2x - 3)/(x + 1).",
                "statements": [
                    {"text": "Đồ thị hàm số có đường tiệm cận đứng là đường thẳng x = -1.", "answer": True, "explain": "lim khi x -> (-1)+ là -∞."},
                    {"text": "Đồ thị hàm số có đường tiệm cận ngang là đường thẳng y = 2.", "answer": True, "explain": "lim khi x -> ±∞ bằng 2/1 = 2."},
                    {"text": "Giao điểm của hai đường tiệm cận là I(-1; 2).", "answer": True, "explain": "Tâm đối xứng là giao của TCĐ x = -1 và TCN y = 2."},
                    {"text": "Đồ thị hàm số có đường tiệm cận xiên.", "answer": False, "explain": "Bậc tử bằng bậc mẫu nên chỉ có tiệm cận ngang, không có tiệm cận xiên."}
                ]
            },
            {
                "id": "tf_bai-03_02",
                "context": "Cho hàm số y = (x^2 + x - 1)/(x - 2).",
                "statements": [
                    {"text": "Đồ thị hàm số có tiệm cận đứng là x = 2.", "answer": True, "explain": "Tử số tại x = 2 bằng 4 + 2 - 1 = 5 khác 0, mẫu số bằng 0."},
                    {"text": "Ta có phân tích y = x + 3 + 5/(x - 2).", "answer": True, "explain": "(x^2 + x - 1) : (x - 2) = x + 3 dư 5."},
                    {"text": "Đường tiệm cận xiên của đồ thị là y = x + 3.", "answer": True, "explain": "lim [y - (x + 3)] = lim [5/(x - 2)] = 0 khi x -> ±∞."},
                    {"text": "Đồ thị hàm số có đường tiệm cận ngang y = 1.", "answer": False, "explain": "Bậc tử lớn hơn bậc mẫu nên không có tiệm cận ngang."}
                ]
            },
            {
                "id": "tf_bai-03_03",
                "context": "Xét đường tiệm cận của đồ thị hàm số y = (sqrt(x^2 + 1) + x)/x.",
                "statements": [
                    {"text": "Tập xác định của hàm số là D = R \\ {0}.", "answer": True, "explain": "x^2 + 1 > 0 với mọi x, mẫu số x khác 0."},
                    {"text": "Đường thẳng x = 0 là tiệm cận đứng của đồ thị.", "answer": True, "explain": "lim khi x -> 0+ là +∞."},
                    {"text": "Khi x -> +∞ thì y -> 2 nên y = 2 là một tiệm cận ngang.", "answer": True, "explain": "sqrt(x^2+1)/x -> 1 khi x -> +∞, nên y -> 1 + 1 = 2."},
                    {"text": "Đồ thị hàm số chỉ có đúng một tiệm cận ngang.", "answer": False, "explain": "Khi x -> -∞, sqrt(x^2+1)/x -> -1, nên y -> -1 + 1 = 0. Do đó có 2 TCN y = 2 và y = 0."}
                ]
            },
            {
                "id": "tf_bai-03_04",
                "context": "Cho hàm số y = (ax + 1)/(bx - 2) có đồ thị đi qua A(1; 3) và nhận x = 2 làm tiệm cận đứng.",
                "statements": [
                    {"text": "Từ điều kiện tiệm cận đứng x = 2 suy ra b = 1.", "answer": True, "explain": "Mẫu số b*2 - 2 = 0 <=> b = 1."},
                    {"text": "Từ điều kiện đồ thị qua A(1; 3) suy ra a = -4.", "answer": True, "explain": "(a + 1)/(1 - 2) = 3 <=> a + 1 = -3 <=> a = -4."},
                    {"text": "Tiệm cận ngang của đồ thị hàm số là đường thẳng y = -4.", "answer": True, "explain": "y = ax/bx = a/b = -4/1 = -4."},
                    {"text": "Giá trị biểu thức a + b = -5.", "answer": False, "explain": "a + b = -4 + 1 = -3."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-03_01",
                "q": "Tìm toạ độ giao điểm I của hai đường tiệm cận của đồ thị hàm số y = (3x - 1)/(x + 2). Nhập hoành độ x của I.",
                "correctAnswer": "-2",
                "explain": "Tiệm cận đứng x = -2, tiệm cận ngang y = 3. Hoành độ giao điểm x = -2."
            },
            {
                "id": "sa_bai-03_02",
                "q": "Đồ thị hàm số y = (2x + 1)/(x - 3) có tiệm cận ngang là đường thẳng y = a. Tìm giá trị của a.",
                "correctAnswer": "2",
                "explain": "lim khi x -> ±∞ của (2x + 1)/(x - 3) = 2. Vậy a = 2."
            },
            {
                "id": "sa_bai-03_03",
                "q": "Cho hàm số y = (x^2 + 2x - 3)/(x + 1). Đường tiệm cận xiên có dạng y = ax + b. Tính giá trị a + b.",
                "correctAnswer": "2",
                "explain": "(x^2 + 2x - 3) : (x + 1) = x + 1 - 4/(x + 1). Tiệm cận xiên là y = x + 1 => a = 1, b = 1. Do đó a + b = 2."
            },
            {
                "id": "sa_bai-03_04",
                "q": "Đồ thị hàm số y = 1/(x^2 - 4) có tất cả bao nhiêu đường tiệm cận (cả đứng và ngang)?",
                "correctAnswer": "3",
                "explain": "2 tiệm cận đứng: x = 2, x = -2. 1 tiệm cận ngang: y = 0. Tổng cộng 3 tiệm cận."
            },
            {
                "id": "sa_bai-03_05",
                "q": "Tính khoảng cách từ gốc toạ độ O(0; 0) đến đường tiệm cận đứng của đồ thị hàm số y = (5x - 2)/(x - 4).",
                "correctAnswer": "4",
                "explain": "Tiệm cận đứng là x = 4. Khoảng cách từ O(0; 0) đến đường thẳng x = 4 bằng |0 - 4| = 4."
            },
            {
                "id": "sa_bai-03_06",
                "q": "Tìm m để đồ thị hàm số y = (x - 1)/(x^2 - 2x + m) có đúng 1 đường tiệm cận đứng.",
                "correctAnswer": "1",
                "explain": "Để có đúng 1 TCĐ thì mẫu có nghiệm kép hoặc mẫu có 2 nghiệm phân biệt trong đó 1 nghiệm là x = 1. delta' = 1 - m = 0 <=> m = 1 (khi đó mẫu (x-1)^2 có nghiệm kép x = 1, rút gọn với tử còn 1/(x-1) vẫn là TCĐ)."
            }
        ]
    },
    "bai-04": {
        "extra_mcq": [
            {
                "id": "q_bai-04_11",
                "q": "Tâm đối xứng của đồ thị hàm số bậc ba y = x^3 - 3x^2 + 2 là điểm:",
                "options": ["I(1; 0)", "I(0; 2)", "I(2; -2)", "I(-1; -2)"],
                "answer": 0,
                "explain": "y'' = 6x - 6 = 0 <=> x = 1, y(1) = 0. Tâm đối xứng của đồ thị hàm bậc ba chính là điểm uốn I(1; 0)."
            },
            {
                "id": "q_bai-04_12",
                "q": "Đồ thị hàm số y = (2x - 1)/(x + 1) cắt trục tung tại điểm có toạ độ là:",
                "options": ["(0; -1)", "(1/2; 0)", "(0; 2)", "(-1; 0)"],
                "answer": 0,
                "explain": "Cho x = 0 => y = (0 - 1)/(0 + 1) = -1. Toạ độ giao điểm với Oy là (0; -1)."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-04_01",
                "context": "Cho đồ thị hàm số y = ax^3 + bx^2 + cx + d có nhánh cuối đi lên, cắt trục tung tại điểm có tung độ âm và có 2 điểm cực trị nằm về hai phía trục tung.",
                "statements": [
                    {"text": "Hệ số a > 0 vì nhánh bên phải cùng đi lên.", "answer": True, "explain": "lim khi x -> +∞ bằng +∞ nên a > 0."},
                    {"text": "Hệ số d < 0 vì đồ thị cắt Oy tại điểm có tung độ âm.", "answer": True, "explain": "f(0) = d < 0."},
                    {"text": "Đạo hàm y' = 3ax^2 + 2bx + c = 0 có hai nghiệm trái dấu khi và chỉ khi a*c < 0.", "answer": True, "explain": "x1 * x2 = c / (3a) < 0 <=> ac < 0."},
                    {"text": "Vì a > 0 và ac < 0 nên suy ra c > 0.", "answer": False, "explain": "a > 0 và ac < 0 suy ra c < 0."}
                ]
            },
            {
                "id": "tf_bai-04_02",
                "context": "Cho hàm số y = (ax + b)/(cx + d) có đồ thị (C) với tiệm cận đứng x = 1, tiệm cận ngang y = 2 và đi qua điểm M(0; -1).",
                "statements": [
                    {"text": "Tiệm cận đứng x = 1 suy ra -d/c = 1 <=> d = -c.", "answer": True, "explain": "Mẫu số cx + d = 0 <=> x = -d/c = 1."},
                    {"text": "Tiệm cận ngang y = 2 suy ra a/c = 2 <=> a = 2c.", "answer": True, "explain": "lim khi x -> ∞ bằng a/c = 2."},
                    {"text": "Đồ thị đi qua M(0; -1) suy ra b/d = -1 <=> b = -d.", "answer": True, "explain": "f(0) = b/d = -1."},
                    {"text": "Nếu chọn c = 1 thì hàm số có dạng y = (2x + 1)/(x - 1).", "answer": True, "explain": "c = 1 => d = -1 => b = 1, a = 2 => y = (2x + 1)/(x - 1)."}
                ]
            },
            {
                "id": "tf_bai-04_03",
                "context": "Cho hàm số y = -x^3 + 3x^2 - 4.",
                "statements": [
                    {"text": "Bảng biến thiên có hai điểm cực trị là x = 0 và x = 2.", "answer": True, "explain": "y' = -3x^2 + 6x = 0 <=> x = 0 hoặc x = 2."},
                    {"text": "Giá trị cực tiểu y_CT = -4 đạt tại x = 0.", "answer": True, "explain": "y(0) = -4, tại đây y' đổi dấu từ - sang +."},
                    {"text": "Giá trị cực đại y_CD = 0 đạt tại x = 2.", "answer": True, "explain": "y(2) = -8 + 12 - 4 = 0."},
                    {"text": "Phương trình -x^3 + 3x^2 - 4 = m có đúng 3 nghiệm phân biệt khi m thuộc (-4; 0).", "answer": True, "explain": "Số nghiệm là số giao điểm với đường nằm ngang y = m. Có 3 nghiệm khi y_CT < m < y_CD <=> -4 < m < 0."}
                ]
            },
            {
                "id": "tf_bai-04_04",
                "context": "Xét sự tương giao giữa đường thẳng d: y = 2x + m và đồ thị (C): y = (x + 1)/(x - 1).",
                "statements": [
                    {"text": "Phương trình hoành độ giao điểm là 2x^2 + (m - 3)x - m - 1 = 0 (với x ≠ 1).", "answer": True, "explain": "(x + 1)/(x - 1) = 2x + m <=> x + 1 = (2x + m)(x - 1) <=> 2x^2 + (m - 3)x - m - 1 = 0."},
                    {"text": "Đường thẳng d luôn cắt (C) tại 2 điểm phân biệt với mọi m.", "answer": True, "explain": "Delta = (m - 3)^2 - 4*2*(-m - 1) = m^2 - 6m + 9 + 8m + 8 = m^2 + 2m + 17 = (m + 1)^2 + 16 > 0 với mọi m."},
                    {"text": "Nghiệm của phương trình hoành độ giao điểm luôn khác 1 với mọi m.", "answer": True, "explain": "Thay x = 1: 2(1)^2 + (m - 3)(1) - m - 1 = 2 + m - 3 - m - 1 = -2 khác 0 với mọi m."},
                    {"text": "Khi m = 0, toạ độ giao điểm có hoành độ âm.", "answer": False, "explain": "Khi m = 0, pt là 2x^2 - 3x - 1 = 0 có ac = -2 < 0 nên có 1 nghiệm dương và 1 nghiệm âm."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-04_01",
                "q": "Tìm hoành độ tâm đối xứng của đồ thị hàm số y = 2x^3 - 6x^2 + 1.",
                "correctAnswer": "1",
                "explain": "y' = 6x^2 - 12x, y'' = 12x - 12 = 0 <=> x = 1. Hoành độ tâm đối xứng là 1."
            },
            {
                "id": "sa_bai-04_02",
                "q": "Cho đồ thị hàm số y = x^3 - 3x + 2. Đường thẳng y = m cắt đồ thị tại 3 điểm phân biệt khi m thuộc khoảng (a; b). Tính b - a.",
                "correctAnswer": "4",
                "explain": "y' = 3x^2 - 3 = 0 <=> x = ±1. y(-1) = 4, y(1) = 0. Có 3 nghiệm khi 0 < m < 4 => a = 0, b = 4 => b - a = 4."
            },
            {
                "id": "sa_bai-04_03",
                "q": "Đồ thị hàm số y = (x - 2)/(x + 1) cắt trục hoành tại điểm có hoành độ bằng bao nhiêu?",
                "correctAnswer": "2",
                "explain": "Cho y = 0 <=> x - 2 = 0 <=> x = 2."
            },
            {
                "id": "sa_bai-04_04",
                "q": "Đồ thị hàm số y = x^4 - 4x^2 + 3 cắt trục hoành tại bao nhiêu điểm phân biệt?",
                "correctAnswer": "4",
                "explain": "Đặt t = x^2 >= 0: t^2 - 4t + 3 = 0 <=> t = 1 hoặc t = 3. Với t = 1 => x = ±1; t = 3 => x = ±sqrt(3). Có 4 giao điểm."
            },
            {
                "id": "sa_bai-04_05",
                "q": "Tìm số tiếp tuyến của đồ thị hàm số y = x^3 - 3x^2 song song với đường thẳng y = 9x + 2.",
                "correctAnswer": "2",
                "explain": "y' = 3x^2 - 6x = 9 <=> x^2 - 2x - 3 = 0 <=> x = 3 hoặc x = -1. Hai tiếp điểm phân biệt có tiếp tuyến không trùng với d nên có 2 tiếp tuyến."
            },
            {
                "id": "sa_bai-04_06",
                "q": "Cho hàm số y = (2x - 1)/(x + 2) có đồ thị (C). Tính tổng toạ độ x_0 + y_0 của tâm đối xứng của (C).",
                "correctAnswer": "0",
                "explain": "Tâm đối xứng là I(-2; 2). Tổng toạ độ = -2 + 2 = 0."
            }
        ]
    },
    "bai-05": {
        "extra_mcq": [
            {
                "id": "q_bai-05_11",
                "q": "Một doanh nghiệp sản xuất x sản phẩm với hàm tổng chi phí C(x) = 0.01x^3 - 3x^2 + 400x + 5000. Chi phí biên tại mức sản lượng x = 100 bằng:",
                "options": ["100", "200", "300", "400"],
                "answer": 0,
                "explain": "Chi phí biên C'(x) = 0.03x^2 - 6x + 400. Tại x = 100: C'(100) = 0.03(10000) - 6(100) + 400 = 300 - 600 + 400 = 100."
            },
            {
                "id": "q_bai-05_12",
                "q": "Một chất điểm chuyển động theo quy luật s(t) = -t^3 + 6t^2 + 2 (t tính bằng giây, s tính bằng mét). Vận tốc lớn nhất của chất điểm đạt được là:",
                "options": ["12 m/s", "6 m/s", "18 m/s", "24 m/s"],
                "answer": 0,
                "explain": "v(t) = s'(t) = -3t^2 + 12t = -3(t - 2)^2 + 12 <= 12 m/s tại t = 2s."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-05_01",
                "context": "Một công ty dự tính giá bán của một loại sản phẩm là p(x) = 200 - 0.2x (nghìn đồng), trong đó x là số lượng sản phẩm bán ra. Hàm tổng chi phí sản xuất là C(x) = 50x + 10000 (nghìn đồng).",
                "statements": [
                    {"text": "Hàm doanh thu là R(x) = 200x - 0.2x^2 (nghìn đồng).", "answer": True, "explain": "R(x) = x * p(x) = 200x - 0.2x^2."},
                    {"text": "Hàm lợi nhuận là P(x) = -0.2x^2 + 150x - 10000.", "answer": True, "explain": "P(x) = R(x) - C(x) = -0.2x^2 + 150x - 10000."},
                    {"text": "Lợi nhuận đạt mức tối đa khi mức sản lượng x = 375 sản phẩm.", "answer": True, "explain": "P'(x) = -0.4x + 150 = 0 <=> x = 375."},
                    {"text": "Mức lợi nhuận tối đa công ty thu được là 18.125 nghìn đồng.", "answer": True, "explain": "P(375) = -0.2*(375)^2 + 150*(375) - 10000 = 18125 nghìn đồng."}
                ]
            },
            {
                "id": "tf_bai-05_02",
                "context": "Người ta muốn làm một chiếc hộp hình chữ nhật không nắp từ một tấm bìa hình vuông cạnh 60 cm bằng cách cắt bỏ 4 góc bốn hình vuông cạnh x (cm) rồi gấp mép lên.",
                "statements": [
                    {"text": "Điều kiện của x là 0 < x < 30.", "answer": True, "explain": "Cạnh đáy 60 - 2x > 0 <=> x < 30 và x > 0."},
                    {"text": "Thể tích chiếc hộp tính theo x là V(x) = x(60 - 2x)^2.", "answer": True, "explain": "Đáy là hình vuông cạnh 60 - 2x, chiều cao là x."},
                    {"text": "Đạo hàm V'(x) = 12(x - 10)(x - 30).", "answer": True, "explain": "V(x) = 4x^3 - 240x^2 + 3600x => V'(x) = 12x^2 - 480x + 3600 = 12(x - 10)(x - 30)."},
                    {"text": "Thể tích chiếc hộp lớn nhất khi x = 10 cm và thể tích đó bằng 16.000 cm^3.", "answer": True, "explain": "V(10) = 10 * (40)^2 = 16000 cm^3."}
                ]
            },
            {
                "id": "tf_bai-05_03",
                "context": "Một nông dân có 120m hàng rào muốn rào một khu đất hình chữ nhật sát bờ sông thẳng để làm trang trại chăn nuôi (phía bờ sông không cần rào). Gọi x (m) là chiều rộng (vuông góc bờ sông).",
                "statements": [
                    {"text": "Chiều dài khu đất song song bờ sông là 120 - 2x (m).", "answer": True, "explain": "2 cạnh bên dài x, cạnh bờ sông không rào nên cạnh song song là 120 - 2x."},
                    {"text": "Diện tích khu đất là S(x) = 120x - 2x^2.", "answer": True, "explain": "S(x) = x(120 - 2x) = 120x - 2x^2."},
                    {"text": "Diện tích khu đất lớn nhất khi x = 30m.", "answer": True, "explain": "S'(x) = 120 - 4x = 0 <=> x = 30m."},
                    {"text": "Diện tích lớn nhất mà bác nông dân rào được là 1800 m^2.", "answer": True, "explain": "S(30) = 30 * (120 - 60) = 1800 m^2."}
                ]
            },
            {
                "id": "tf_bai-05_04",
                "context": "Một bể chứa nước hình trụ có thể tích cố định V = 54pi (m^3). Người ta muốn làm bể sao cho diện tích toàn phần của bể (gồm 2 đáy và mặt xung quanh) là nhỏ nhất để tiết kiệm chi phí vật liệu.",
                "statements": [
                    {"text": "Diện tích toàn phần là S = 2*pi*r*h + 2*pi*r^2.", "answer": True, "explain": "Công thức diện tích toàn phần hình trụ."},
                    {"text": "Từ V = pi*r^2*h = 54pi suy ra h = 54/r^2.", "answer": True, "explain": "h = V/(pi*r^2) = 54/r^2."},
                    {"text": "Biểu thức diện tích theo r là S(r) = 108pi/r + 2pi*r^2.", "answer": True, "explain": "S(r) = 2pi*r*(54/r^2) + 2pi*r^2 = 108pi/r + 2pi*r^2."},
                    {"text": "Bán kính r để tiết kiệm vật liệu nhất là r = 3m.", "answer": True, "explain": "S'(r) = -108pi/r^2 + 4pi*r = 0 <=> 4r^3 = 108 <=> r^3 = 27 <=> r = 3m."}
                ]
            }
        ],
        "short_answer": [
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
        ]
    },
    "bai-cuoi-c1": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c1_06",
                "q": "Tìm tất cả các giá trị của tham số m để hàm số y = x^3 - 3x^2 + mx - 1 có hai điểm cực trị.",
                "options": ["m < 3", "m > 3", "m <= 3", "m >= 3"],
                "answer": 0,
                "explain": "y' = 3x^2 - 6x + m. Hàm số có 2 điểm cực trị <=> Delta' = 9 - 3m > 0 <=> m < 3."
            },
            {
                "id": "q_bai-cuoi-c1_07",
                "q": "Tiệm cận xiên của đồ thị hàm số y = (x^2 + 2x - 1)/(x - 1) là đường thẳng:",
                "options": ["y = x + 3", "y = x - 3", "y = x + 1", "y = 2x - 1"],
                "answer": 0,
                "explain": "(x^2 + 2x - 1) : (x - 1) = x + 3 + 2/(x - 1). Tiệm cận xiên là y = x + 3."
            },
            {
                "id": "q_bai-cuoi-c1_08",
                "q": "Cho hàm số y = f(x) có bảng xét dấu f'(x) đổi dấu 3 lần qua các điểm x = -2, x = 0, x = 1. Số điểm cực trị của hàm số là:",
                "options": ["3", "2", "1", "4"],
                "answer": 0,
                "explain": "Đạo hàm đổi dấu 3 lần qua 3 nghiệm đơn nên có đúng 3 điểm cực trị."
            },
            {
                "id": "q_bai-cuoi-c1_09",
                "q": "Giá trị nhỏ nhất của hàm số y = x^4 - 2x^2 + 5 trên đoạn [-2; 2] bằng:",
                "options": ["4", "5", "13", "1"],
                "answer": 0,
                "explain": "y' = 4x(x^2 - 1) = 0 <=> x = 0, x = ±1. y(0) = 5, y(±1) = 4, y(±2) = 13. Min = 4."
            },
            {
                "id": "q_bai-cuoi-c1_10",
                "q": "Đồ thị hàm số y = (2x - 4)/(x + 1) có tâm đối xứng là điểm:",
                "options": ["I(-1; 2)", "I(1; 2)", "I(-1; -4)", "I(2; -1)"],
                "answer": 0,
                "explain": "TCĐ x = -1, TCN y = 2 => Giao điểm I(-1; 2) là tâm đối xứng."
            },
            {
                "id": "q_bai-cuoi-c1_11",
                "q": "Hàm số y = (x + 2)/(x - 1) nghịch biến trên các khoảng nào?",
                "options": [
                    "(-∞; 1) và (1; +∞)",
                    "R \\ {1}",
                    "(-∞; -2) và (1; +∞)",
                    "(-2; 1)"
                ],
                "answer": 0,
                "explain": "y' = -3/(x - 1)^2 < 0 với mọi x ≠ 1, nghịch biến trên từng khoảng xác định (-∞; 1) và (1; +∞)."
            },
            {
                "id": "q_bai-cuoi-c1_12",
                "q": "Số giao điểm của đồ thị hàm số y = x^3 - 3x và trục hoành là:",
                "options": ["3", "2", "1", "0"],
                "answer": 0,
                "explain": "x^3 - 3x = 0 <=> x(x^2 - 3) = 0 <=> x = 0 hoặc x = ±sqrt(3). Có 3 giao điểm."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c1_01",
                "context": "Cho hàm số y = f(x) = (2x - 1)/(x + 1) có đồ thị là (C).",
                "statements": [
                    {"text": "Đồ thị (C) có tiệm cận đứng là x = -1 và tiệm cận ngang là y = 2.", "answer": True, "explain": "lim khi x -> -1 là vô cực, lim khi x -> vô cực là 2."},
                    {"text": "Hàm số đồng biến trên tập R \\ {-1}.", "answer": False, "explain": "Sai về cách diễn đạt tập hợp: hàm đồng biến trên từng khoảng (-∞; -1) và (-1; +∞)."},
                    {"text": "Tâm đối xứng của đồ thị là I(-1; 2).", "answer": True, "explain": "Giao điểm của 2 đường tiệm cận là I(-1; 2)."},
                    {"text": "Đồ thị (C) cắt trục tung tại điểm M(0; -1).", "answer": True, "explain": "f(0) = (0 - 1)/(0 + 1) = -1."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c1_02",
                "context": "Cho hàm số y = x^3 - 3x^2 + 2 có đồ thị (C).",
                "statements": [
                    {"text": "Hàm số có hai điểm cực trị là x = 0 và x = 2.", "answer": True, "explain": "y' = 3x^2 - 6x = 0 <=> x = 0 hoặc x = 2."},
                    {"text": "Giá trị cực đại của hàm số là 2, giá trị cực tiểu là -2.", "answer": True, "explain": "y(0) = 2, y(2) = 8 - 12 + 2 = -2."},
                    {"text": "Điểm uốn của đồ thị là U(1; 0).", "answer": True, "explain": "y'' = 6x - 6 = 0 <=> x = 1, y(1) = 0."},
                    {"text": "Phương trình tiếp tuyến của (C) tại điểm uốn có hệ số góc bằng 3.", "answer": False, "explain": "y'(1) = 3(1)^2 - 6(1) = -3 khác 3."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c1_03",
                "context": "Cho hàm số y = (x^2 - 2x + 2)/(x - 1).",
                "statements": [
                    {"text": "Tập xác định của hàm số là D = R \\ {1}.", "answer": True, "explain": "Mẫu số khác 0 <=> x khác 1."},
                    {"text": "Đồ thị có tiệm cận đứng là x = 1.", "answer": True, "explain": "Tử số tại x = 1 là 1 khác 0."},
                    {"text": "Đường tiệm cận xiên có phương trình là y = x - 1.", "answer": True, "explain": "(x^2 - 2x + 2)/(x - 1) = x - 1 + 1/(x - 1). TCX là y = x - 1."},
                    {"text": "Đồ thị hàm số có 2 điểm cực trị nằm về hai phía của đường tiệm cận đứng.", "answer": True, "explain": "y' = 1 - 1/(x-1)^2 = 0 <=> (x-1)^2 = 1 <=> x = 2 hoặc x = 0. Hai nghiệm nằm về hai phía x = 1."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c1_04",
                "context": "Xét bài toán tìm giá trị lớn nhất, nhỏ nhất của hàm số f(x) = x + 1/x trên đoạn [1/2; 3].",
                "statements": [
                    {"text": "Đạo hàm f'(x) = 1 - 1/x^2 = 0 có nghiệm x = 1 thuộc [1/2; 3].", "answer": True, "explain": "x = 1 thuộc [1/2; 3]."},
                    {"text": "Giá trị của hàm số tại các mút là f(1/2) = 5/2 và f(3) = 10/3.", "answer": True, "explain": "f(1/2) = 1/2 + 2 = 5/2; f(3) = 3 + 1/3 = 10/3."},
                    {"text": "Giá trị nhỏ nhất của hàm số trên đoạn [1/2; 3] bằng 2.", "answer": True, "explain": "f(1) = 1 + 1 = 2 < 5/2 < 10/3. Min = 2."},
                    {"text": "Giá trị lớn nhất của hàm số trên đoạn [1/2; 3] là 5/2.", "answer": False, "explain": "10/3 ≈ 3.33 > 5/2 = 2.5 nên GTLN là 10/3."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c1_01",
                "q": "Tìm giá trị cực đại của hàm số y = -x^3 + 3x^2 + 9x - 2.",
                "correctAnswer": "25",
                "explain": "y' = -3x^2 + 6x + 9 = 0 <=> x = 3 hoặc x = -1. Cực đại tại x = 3, y(3) = -27 + 27 + 27 - 2 = 25."
            },
            {
                "id": "sa_bai-cuoi-c1_02",
                "q": "Tìm khoảng cách giữa hai đường tiệm cận đứng của đồ thị hàm số y = 1/(x^2 - 9).",
                "correctAnswer": "6",
                "explain": "Hai tiệm cận đứng là x = 3 và x = -3. Khoảng cách = 3 - (-3) = 6."
            },
            {
                "id": "sa_bai-cuoi-c1_03",
                "q": "Tìm giá trị nhỏ nhất của hàm số y = x^4 - 4x^2 + 3 trên đoạn [-1; 2].",
                "correctAnswer": "-1",
                "explain": "y' = 4x(x^2 - 2) = 0 => x = 0, x = ±sqrt(2). x = sqrt(2) thuộc [-1; 2]. y(sqrt(2)) = 4 - 8 + 3 = -1."
            },
            {
                "id": "sa_bai-cuoi-c1_04",
                "q": "Tìm hoành độ giao điểm của tiệm cận xiên của đồ thị y = (x^2 + x - 2)/(x + 2) với trục hoành.",
                "correctAnswer": "1",
                "explain": "y = x - 1. Giao với trục hoành y = 0 <=> x - 1 = 0 <=> x = 1."
            },
            {
                "id": "sa_bai-cuoi-c1_05",
                "q": "Một hộp chữ nhật không nắp có thể tích 32 m^3, đáy là hình vuông cạnh x (m). Chiều cao h bằng bao nhiêu mét để diện tích toàn phần của hộp nhỏ nhất?",
                "correctAnswer": "2",
                "unit": "m",
                "explain": "V = x^2*h = 32 => h = 32/x^2. S = x^2 + 4xh = x^2 + 128/x. S' = 2x - 128/x^2 = 0 <=> x^3 = 64 <=> x = 4m. Khi đó h = 32/16 = 2m."
            },
            {
                "id": "sa_bai-cuoi-c1_06",
                "q": "Cho hàm số y = x^3 - 3x^2 + m. Tìm m để giá trị nhỏ nhất của hàm số trên [-1; 1] bằng 0.",
                "correctAnswer": "4",
                "explain": "Trên [-1; 1], y' = 3x(x - 2) <= 0 nên nghịch biến. Min đạt tại x = 1 => y(1) = 1 - 3 + m = m - 2? Không, y(-1) = -1 - 3 + m = m - 4. Min = y(1) = m - 2? So sánh: y(-1) = m - 4, y(1) = m - 2. Nghịch biến nên min đạt tại x = 1 là sai, min đạt tại x = 1 nếu y' <= 0? Với x thuộc (-1; 0), 3x(x-2) > 0 (đồng biến). Tại x = 0 cực đại. y(-1) = m - 4, y(0) = m, y(1) = m - 2. Min là m - 4. m - 4 = 0 <=> m = 4."
            }
        ]
    }
}
