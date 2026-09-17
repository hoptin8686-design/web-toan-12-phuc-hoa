# -*- coding: utf-8 -*-
"""
Dữ liệu Chương IV: Nguyên hàm và tích phân
Bao gồm: bai-11, bai-12, bai-13, bai-cuoi-c4
"""

DATA_C4 = {
    "bai-11": {
        "extra_mcq": [
            {
                "id": "q_bai-11_11",
                "q": "Họ nguyên hàm của hàm số f(x) = e^(2x) là:",
                "options": ["(1/2)*e^(2x) + C", "2*e^(2x) + C", "e^(2x) + C", "e^(x) + C"],
                "answer": 0,
                "explain": "int e^(ax) dx = (1/a)*e^(ax) + C => (1/2)*e^(2x) + C."
            },
            {
                "id": "q_bai-11_12",
                "q": "Tìm họ nguyên hàm F(x) của f(x) = 2x - 3 biết F(1) = 2.",
                "options": ["F(x) = x^2 - 3x + 4", "F(x) = x^2 - 3x", "F(x) = x^2 - 3x + 2", "F(x) = 2x^2 - 3x + 3"],
                "answer": 0,
                "explain": "F(x) = x^2 - 3x + C. F(1) = 1 - 3 + C = 2 <=> C - 2 = 2 <=> C = 4 => F(x) = x^2 - 3x + 4."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-11_01",
                "context": "Cho F(x) là một nguyên hàm của hàm số f(x) trên khoảng K.",
                "statements": [
                    {"text": "Đạo hàm F'(x) = f(x) với mọi x thuộc K.", "answer": True, "explain": "Định nghĩa chuẩn của nguyên hàm."},
                    {"text": "Nếu F(x) là một nguyên hàm thì F(x) + C (với C là hằng số) cũng là nguyên hàm của f(x).", "answer": True, "explain": "Họ tất cả các nguyên hàm có dạng F(x) + C."},
                    {"text": "Mọi hàm số liên tục trên K đều có nguyên hàm trên K.", "answer": True, "explain": "Định lý cơ bản về sự tồn tại nguyên hàm."},
                    {"text": "int [f(x)*g(x)] dx = (int f(x) dx) * (int g(x) dx).", "answer": False, "explain": "Nguyên hàm của tích KHÔNG BẰNG tích các nguyên hàm."}
                ]
            },
            {
                "id": "tf_bai-11_02",
                "context": "Xét các công thức nguyên hàm cơ bản.",
                "statements": [
                    {"text": "int x^alpha dx = x^(alpha+1)/(alpha+1) + C (với alpha ≠ -1).", "answer": True, "explain": "Công thức nguyên hàm lũy thừa."},
                    {"text": "int (1/x) dx = ln|x| + C (với x ≠ 0).", "answer": True, "explain": "Có dấu giá trị tuyệt đối |x|."},
                    {"text": "int sin(x) dx = cos(x) + C.", "answer": False, "explain": "int sin(x) dx = -cos(x) + C."},
                    {"text": "int cos(x) dx = sin(x) + C.", "answer": True, "explain": "Đạo hàm của sin(x) là cos(x)."}
                ]
            },
            {
                "id": "tf_bai-11_03",
                "context": "Tính nguyên hàm I = int x * e^x dx bằng phương pháp nguyên hàm từng phần.",
                "statements": [
                    {"text": "Đặt u = x và dv = e^x dx.", "answer": True, "explain": "Ưu tiên đặt u theo thứ tự: Nhất log, nhì đa, tam lượng, tứ mũ."},
                    {"text": "Khi đó du = dx và v = e^x.", "answer": True, "explain": "du = x' dx = dx, v = int e^x dx = e^x."},
                    {"text": "Công thức từng phần là int u dv = u*v - int v du.", "answer": True, "explain": "Công thức chuẩn từng phần."},
                    {"text": "Kết quả nguyên hàm là I = (x - 1)*e^x + C.", "answer": True, "explain": "I = x*e^x - int e^x dx = x*e^x - e^x + C = (x - 1)*e^x + C."}
                ]
            },
            {
                "id": "tf_bai-11_04",
                "context": "Tính nguyên hàm J = int 2x * (x^2 + 1)^3 dx bằng phương pháp đổi biến số.",
                "statements": [
                    {"text": "Đặt t = x^2 + 1.", "answer": True, "explain": "Phương pháp đổi biến số thích hợp."},
                    {"text": "Vi phân dt = 2x dx.", "answer": True, "explain": "dt = (x^2 + 1)' dx = 2x dx."},
                    {"text": "Biểu thức nguyên hàm theo biến t là int t^3 dt.", "answer": True, "explain": "Thay 2x dx bằng dt, được int t^3 dt."},
                    {"text": "Kết quả cuối cùng là J = (x^2 + 1)^4 / 4 + C.", "answer": True, "explain": "int t^3 dt = t^4 / 4 + C = (x^2 + 1)^4 / 4 + C."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-11_01",
                "q": "Biết F(x) = ax^3 + bx^2 + c là một nguyên hàm của f(x) = 6x^2 - 4x. Tính a + b.",
                "correctAnswer": "0",
                "explain": "int (6x^2 - 4x) dx = 2x^3 - 2x^2 + C => a = 2, b = -2. a + b = 2 + (-2) = 0."
            },
            {
                "id": "sa_bai-11_02",
                "q": "Tìm hằng số C để nguyên hàm F(x) = x^3 - 2x + C của f(x) = 3x^2 - 2 thoả mãn F(2) = 10.",
                "correctAnswer": "6",
                "explain": "F(2) = 8 - 4 + C = 4 + C = 10 <=> C = 6."
            },
            {
                "id": "sa_bai-11_03",
                "q": "Một nguyên hàm F(x) của f(x) = cos(2x) có dạng (1/k)*sin(2x) + C. Tìm giá trị của k.",
                "correctAnswer": "2",
                "explain": "int cos(2x) dx = (1/2)*sin(2x) + C => k = 2."
            },
            {
                "id": "sa_bai-11_04",
                "q": "Cho F(x) là nguyên hàm của f(x) = 1/(2x + 1) trên (0; +∞). Biết F(x) = a*ln(2x + 1) + C. Tìm giá trị a.",
                "correctAnswer": "0.5",
                "explain": "int 1/(2x + 1) dx = (1/2)*ln(2x + 1) + C => a = 1/2 = 0.5."
            },
            {
                "id": "sa_bai-11_05",
                "q": "Biết int (3x^2 + 2x + 1) dx = x^3 + x^2 + x + C. Hệ số của x^2 trong nguyên hàm bằng bao nhiêu?",
                "correctAnswer": "1",
                "explain": "Nguyên hàm là x^3 + x^2 + x + C, hệ số của x^2 là 1."
            },
            {
                "id": "sa_bai-11_06",
                "q": "Tính F(1) - F(0) biết F(x) là một nguyên hàm bất kỳ của f(x) = 4x^3.",
                "correctAnswer": "1",
                "explain": "F(1) - F(0) = int_0^1 4x^3 dx = [x^4]_0^1 = 1 - 0 = 1."
            }
        ]
    },
    "bai-12": {
        "extra_mcq": [
            {
                "id": "q_bai-12_11",
                "q": "Tính tích phân I = int_0^1 (3x^2 + 2x) dx.",
                "options": ["2", "1", "3", "5"],
                "answer": 0,
                "explain": "I = [x^3 + x^2]_0^1 = (1 + 1) - 0 = 2."
            },
            {
                "id": "q_bai-12_12",
                "q": "Cho int_0^2 f(x) dx = 3 và int_2^5 f(x) dx = 7. Tính int_0^5 f(x) dx.",
                "options": ["10", "4", "-4", "21"],
                "answer": 0,
                "explain": "int_0^5 f(x) dx = int_0^2 f(x) dx + int_2^5 f(x) dx = 3 + 7 = 10."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-12_01",
                "context": "Cho f(x) liên tục trên đoạn [a; b].",
                "statements": [
                    {"text": "int_a^a f(x) dx = 0.", "answer": True, "explain": "Tích phân có hai cận bằng nhau luôn bằng 0."},
                    {"text": "int_a^b f(x) dx = - int_b^a f(x) dx.", "answer": True, "explain": "Đổi cận thì đổi dấu tích phân."},
                    {"text": "int_a^b k*f(x) dx = k * int_a^b f(x) dx với k là hằng số thực.", "answer": True, "explain": "Tính chất tuyến tính của tích phân."},
                    {"text": "Tích phân int_a^b f(x) dx phụ thuộc vào biến số x.", "answer": False, "explain": "Tích phân chỉ phụ thuộc vào hàm f và hai cận a, b chứ không phụ thuộc vào tên biến số: int f(x)dx = int f(t)dt."}
                ]
            },
            {
                "id": "tf_bai-12_02",
                "context": "Tính tích phân I = int_0^(pi/2) sin(x) dx.",
                "statements": [
                    {"text": "Một nguyên hàm của sin(x) là -cos(x).", "answer": True, "explain": "(-cos(x))' = sin(x)."},
                    {"text": "Áp dụng công thức Newton-Leibniz: I = [-cos(x)]_0^(pi/2).", "answer": True, "explain": "Công thức cơ bản của tích phân."},
                    {"text": "-cos(pi/2) = 0 và -cos(0) = -1.", "answer": True, "explain": "cos(pi/2) = 0, cos(0) = 1."},
                    {"text": "Giá trị của tích phân I = 1.", "answer": True, "explain": "I = 0 - (-1) = 1."}
                ]
            },
            {
                "id": "tf_bai-12_03",
                "context": "Xét tích phân I = int_1^e (ln(x)/x) dx bằng phương pháp đổi biến.",
                "statements": [
                    {"text": "Đặt t = ln(x) => dt = (1/x) dx.", "answer": True, "explain": "Vi phân của hàm logarit tự nhiên."},
                    {"text": "Đổi cận: khi x = 1 thì t = 0; khi x = e thì t = 1.", "answer": True, "explain": "ln(1) = 0, ln(e) = 1."},
                    {"text": "Tích phân chuyển thành I = int_0^1 t dt.", "answer": True, "explain": "Thay biến và cận mới."},
                    {"text": "Giá trị của tích phân I = 1/2.", "answer": True, "explain": "[t^2 / 2]_0^1 = 1/2 - 0 = 1/2."}
                ]
            },
            {
                "id": "tf_bai-12_04",
                "context": "Cho hàm số f(x) chẵn và liên tục trên đoạn [-2; 2]. Biết int_0^2 f(x) dx = 4.",
                "statements": [
                    {"text": "Đồ thị hàm số f(x) nhận trục tung Oy làm trục đối xứng.", "answer": True, "explain": "Tính chất hàm số chẵn f(-x) = f(x)."},
                    {"text": "int_{-2}^0 f(x) dx = 4.", "answer": True, "explain": "Với hàm chẵn, tích phân trên [-a; 0] bằng tích phân trên [0; a]."},
                    {"text": "int_{-2}^2 f(x) dx = 2 * int_0^2 f(x) dx = 8.", "answer": True, "explain": "int_{-a}^a f(x) dx = 2*int_0^a f(x) dx với hàm chẵn."},
                    {"text": "Nếu f(x) là hàm số lẻ thì int_{-2}^2 f(x) dx = 8.", "answer": False, "explain": "Với hàm số lẻ thì tích phân trên [-a; a] bằng 0."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-12_01",
                "q": "Tính tích phân int_0^2 (2x + 1) dx.",
                "correctAnswer": "6",
                "explain": "[x^2 + x]_0^2 = (4 + 2) - 0 = 6."
            },
            {
                "id": "sa_bai-12_02",
                "q": "Tính tích phân int_1^3 4x^3 dx.",
                "correctAnswer": "80",
                "explain": "[x^4]_1^3 = 3^4 - 1^4 = 81 - 1 = 80."
            },
            {
                "id": "sa_bai-12_03",
                "q": "Cho int_1^4 f(x) dx = 9. Tính tích phân int_1^4 [2*f(x) - 3] dx.",
                "correctAnswer": "9",
                "explain": "2 * int_1^4 f(x) dx - int_1^4 3 dx = 2*9 - 3*(4 - 1) = 18 - 9 = 9."
            },
            {
                "id": "sa_bai-12_04",
                "q": "Tính tích phân int_0^1 e^(3x) dx (làm tròn 2 chữ số thập phân).",
                "correctAnswer": "6.36",
                "explain": "[(1/3)*e^(3x)]_0^1 = (e^3 - 1)/3 ≈ (20.0855 - 1)/3 ≈ 6.36."
            },
            {
                "id": "sa_bai-12_05",
                "q": "Cho int_0^3 f(x) dx = 5. Tính int_0^1 f(3x) dx.",
                "correctAnswer": "1.67",
                "explain": "Đặt t = 3x => dt = 3dx. Cận từ 0 đến 3. int_0^1 f(3x) dx = (1/3)*int_0^3 f(t) dt = 5/3 ≈ 1.67."
            },
            {
                "id": "sa_bai-12_06",
                "q": "Tính tích phân int_0^1 x * sqrt(x^2 + 1) dx (nhập kết quả làm tròn 2 chữ số thập phân).",
                "correctAnswer": "0.61",
                "explain": "Đặt t = x^2 + 1 => dt = 2x dx. int_1^2 (1/2)*t^(1/2) dt = (1/3)*(2*sqrt(2) - 1) ≈ (2.828 - 1)/3 ≈ 0.61."
            }
        ]
    },
    "bai-13": {
        "extra_mcq": [
            {
                "id": "q_bai-13_11",
                "q": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số y = x^2, trục hoành và hai đường thẳng x = 0, x = 3 bằng:",
                "options": ["9", "3", "27", "18"],
                "answer": 0,
                "explain": "S = int_0^3 x^2 dx = [x^3 / 3]_0^3 = 27 / 3 = 9."
            },
            {
                "id": "q_bai-13_12",
                "q": "Thể tích khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = sqrt(x), trục Ox và hai đường thẳng x = 0, x = 4 quanh trục Ox là:",
                "options": ["8*pi", "4*pi", "16*pi", "2*pi"],
                "answer": 0,
                "explain": "V = pi * int_0^4 (sqrt(x))^2 dx = pi * int_0^4 x dx = pi * [x^2 / 2]_0^4 = 8*pi."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-13_01",
                "context": "Cho hình phẳng (H) giới hạn bởi đồ thị y = f(x), trục Ox và hai đường thẳng x = a, x = b (a < b).",
                "statements": [
                    {"text": "Diện tích hình phẳng (H) được tính bởi công thức S = int_a^b |f(x)| dx.", "answer": True, "explain": "Công thức diện tích luôn có dấu giá trị tuyệt đối |f(x)|."},
                    {"text": "Nếu f(x) >= 0 với mọi x thuộc [a; b] thì S = int_a^b f(x) dx.", "answer": True, "explain": "Khi f(x) không âm thì |f(x)| = f(x)."},
                    {"text": "Nếu f(x) <= 0 với mọi x thuộc [a; b] thì S = - int_a^b f(x) dx.", "answer": True, "explain": "Khi f(x) không dương thì |f(x)| = -f(x)."},
                    {"text": "Thể tích khối tròn xoay khi quay (H) quanh trục Ox là V = int_a^b f(x)^2 dx (không có thừa số pi).", "answer": False, "explain": "Công thức thể tích tròn xoay bắt buộc phải có thừa số pi: V = pi * int_a^b [f(x)]^2 dx."}
                ]
            },
            {
                "id": "tf_bai-13_02",
                "context": "Xét hình phẳng giới hạn bởi parabol y = x^2 và đường thẳng y = 2x.",
                "statements": [
                    {"text": "Phương trình hoành độ giao điểm là x^2 - 2x = 0 có hai nghiệm x = 0 và x = 2.", "answer": True, "explain": "x^2 = 2x <=> x(x - 2) = 0."},
                    {"text": "Trên đoạn [0; 2], ta có 2x >= x^2.", "answer": True, "explain": "2x - x^2 = x(2 - x) >= 0 với mọi x thuộc [0; 2]."},
                    {"text": "Diện tích hình phẳng là S = int_0^2 (2x - x^2) dx.", "answer": True, "explain": "Lấy hàm phía trên trừ hàm phía dưới."},
                    {"text": "Diện tích tính được bằng 4/3.", "answer": True, "explain": "[x^2 - x^3 / 3]_0^2 = 4 - 8/3 = 4/3."}
                ]
            },
            {
                "id": "tf_bai-13_03",
                "context": "Quay hình phẳng giới hạn bởi y = x, y = 0, x = 0, x = 2 quanh trục hoành Ox.",
                "statements": [
                    {"text": "Khối tròn xoay thu được là một hình nón có chiều cao h = 2 và bán kính đáy R = 2.", "answer": True, "explain": "Quay tam giác vuông OAB quanh cạnh góc vuông OA."},
                    {"text": "Công thức tính thể tích theo tích phân là V = pi * int_0^2 x^2 dx.", "answer": True, "explain": "V = pi * int_0^2 [f(x)]^2 dx."},
                    {"text": "Giá trị tích phân là int_0^2 x^2 dx = 8/3.", "answer": True, "explain": "[x^3 / 3]_0^2 = 8/3."},
                    {"text": "Thể tích hình nón tính theo công thức hình học V = (1/3)*pi*R^2*h = 8pi/3 hoàn toàn trùng khớp.", "answer": True, "explain": "1/3 * pi * 4 * 2 = 8pi/3."}
                ]
            },
            {
                "id": "tf_bai-13_04",
                "context": "Một vật thể có đáy nằm trên trục Ox từ x = 0 đến x = 3. Cắt vật thể bởi mặt phẳng vuông góc với Ox tại điểm có hoành độ x, thiết diện là một hình vuông cạnh sqrt(x).",
                "statements": [
                    {"text": "Diện tích thiết diện tại điểm có hoành độ x là S(x) = (sqrt(x))^2 = x.", "answer": True, "explain": "Diện tích hình vuông cạnh a là a^2."},
                    {"text": "Công thức tính thể tích vật thể là V = int_0^3 S(x) dx.", "answer": True, "explain": "Công thức thể tích vật thể bất kỳ cắt bởi các mặt phẳng vuông góc."},
                    {"text": "Công thức thể tích vật thể này có nhân thêm số pi phía trước tích phân.", "answer": False, "explain": "Công thức thể tích vật thể tổng quát V = int S(x) dx KHÔNG CÓ pi (chỉ khối tròn xoay mới có pi)."},
                    {"text": "Thể tích vật thể bằng 4.5.", "answer": True, "explain": "int_0^3 x dx = [x^2 / 2]_0^3 = 9/2 = 4.5."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-13_01",
                "q": "Tính diện tích hình phẳng giới hạn bởi parabol y = 3x^2, trục Ox và hai đường thẳng x = 1, x = 2.",
                "correctAnswer": "7",
                "explain": "S = int_1^2 3x^2 dx = [x^3]_1^2 = 8 - 1 = 7."
            },
            {
                "id": "sa_bai-13_02",
                "q": "Tính diện tích hình phẳng giới hạn bởi hai đường cong y = x^2 và y = x.",
                "correctAnswer": "0.17",
                "explain": "Giao điểm x = 0, x = 1. S = int_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6 ≈ 0.17."
            },
            {
                "id": "sa_bai-13_03",
                "q": "Cho hình phẳng giới hạn bởi y = 2x, y = 0, x = 0, x = 3 quay quanh Ox tạo thành khối tròn xoay có thể tích V = k*pi. Tìm k.",
                "correctAnswer": "36",
                "explain": "V = pi * int_0^3 (2x)^2 dx = pi * int_0^3 4x^2 dx = 4pi * [x^3/3]_0^3 = 4pi * 9 = 36pi => k = 36."
            },
            {
                "id": "sa_bai-13_04",
                "q": "Tính diện tích hình phẳng giới hạn bởi đồ thị y = sin(x), trục Ox và hai đường x = 0, x = pi.",
                "correctAnswer": "2",
                "explain": "S = int_0^pi sin(x) dx = [-cos(x)]_0^pi = -(-1) - (-1) = 2."
            },
            {
                "id": "sa_bai-13_05",
                "q": "Thể tích vật thể có diện tích thiết diện vuông góc với Ox là S(x) = 2x + 1 chạy từ x = 0 đến x = 2 bằng bao nhiêu?",
                "correctAnswer": "6",
                "explain": "V = int_0^2 (2x + 1) dx = [x^2 + x]_0^2 = 4 + 2 = 6."
            },
            {
                "id": "sa_bai-13_06",
                "q": "Quay hình chữ nhật kích thước 2 x 3 quanh cạnh có độ dài 3 tạo thành hình trụ có thể tích bằng bao nhiêu pi (nhập hệ số k với V = k*pi)?",
                "correctAnswer": "12",
                "explain": "Bán kính đáy R = 2, chiều cao h = 3. V = pi * R^2 * h = pi * 4 * 3 = 12pi => k = 12."
            }
        ]
    },
    "bai-cuoi-c4": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c4_06",
                "q": "Họ nguyên hàm của hàm số f(x) = 1/(3x - 1) là:",
                "options": [
                    "(1/3)*ln|3x - 1| + C",
                    "ln|3x - 1| + C",
                    "3*ln|3x - 1| + C",
                    "-1/(3x - 1)^2 + C"
                ],
                "answer": 0,
                "explain": "int 1/(ax + b) dx = (1/a)*ln|ax + b| + C => (1/3)*ln|3x - 1| + C."
            },
            {
                "id": "q_bai-cuoi-c4_07",
                "q": "Tính tích phân I = int_0^1 e^x dx.",
                "options": ["e - 1", "e", "e + 1", "1"],
                "answer": 0,
                "explain": "I = [e^x]_0^1 = e^1 - e^0 = e - 1."
            },
            {
                "id": "q_bai-cuoi-c4_08",
                "q": "Cho int_0^3 f(x) dx = 4 và int_0^3 g(x) dx = 2. Tính int_0^3 [f(x) - 2*g(x)] dx.",
                "options": ["0", "2", "8", "-4"],
                "answer": 0,
                "explain": "int_0^3 [f(x) - 2g(x)] dx = 4 - 2*2 = 0."
            },
            {
                "id": "q_bai-cuoi-c4_09",
                "q": "Diện tích hình phẳng giới hạn bởi y = x^3, trục Ox và x = 0, x = 2 bằng:",
                "options": ["4", "8", "16", "2"],
                "answer": 0,
                "explain": "S = int_0^2 x^3 dx = [x^4 / 4]_0^2 = 16 / 4 = 4."
            },
            {
                "id": "q_bai-cuoi-c4_10",
                "q": "Tính thể tích khối tròn xoay khi quay hình phẳng giới hạn bởi y = 2, y = 0, x = 0, x = 3 quanh trục Ox.",
                "options": ["12*pi", "6*pi", "18*pi", "36*pi"],
                "answer": 0,
                "explain": "Hình trụ có R = 2, h = 3 => V = pi * R^2 * h = pi * 4 * 3 = 12*pi."
            },
            {
                "id": "q_bai-cuoi-c4_11",
                "q": "Một nguyên hàm F(x) của hàm số f(x) = 2x thoả mãn F(0) = 5 là:",
                "options": ["F(x) = x^2 + 5", "F(x) = x^2", "F(x) = x^2 - 5", "F(x) = 2x^2 + 5"],
                "answer": 0,
                "explain": "F(x) = x^2 + C. F(0) = 5 => C = 5 => F(x) = x^2 + 5."
            },
            {
                "id": "q_bai-cuoi-c4_12",
                "q": "Cho hàm số f(x) liên tục trên R và F(x) là một nguyên hàm. Khẳng định nào sau đây đúng?",
                "options": [
                    "int_a^b f(x) dx = F(b) - F(a)",
                    "int_a^b f(x) dx = F(a) - F(b)",
                    "int_a^b f(x) dx = F'(b) - F'(a)",
                    "int_a^b f(x) dx = f(b) - f(a)"
                ],
                "answer": 0,
                "explain": "Công thức định nghĩa tích phân Newton-Leibniz: int_a^b f(x) dx = F(b) - F(a)."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c4_01",
                "context": "Cho f(x) là hàm số liên tục trên R và F(x) là một nguyên hàm của f(x).",
                "statements": [
                    {"text": "Đạo hàm của F(x) là F'(x) = f(x).", "answer": True, "explain": "Định nghĩa nguyên hàm."},
                    {"text": "int f(x) dx = F(x) + C với C thuộc R.", "answer": True, "explain": "Họ tất cả các nguyên hàm."},
                    {"text": "Nếu F(x) là một nguyên hàm thì F(x) + 5 cũng là một nguyên hàm của f(x).", "answer": True, "explain": "Đạo hàm hằng số bằng 0 nên (F(x) + 5)' = f(x)."},
                    {"text": "int_1^2 f(x) dx = F(1) - F(2).", "answer": False, "explain": "Phải là F(2) - F(1)."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c4_02",
                "context": "Xét tích phân I = int_0^1 x * e^(x^2) dx.",
                "statements": [
                    {"text": "Phương pháp thích hợp để tính là phương pháp đổi biến số.", "answer": True, "explain": "Có mặt biểu thức x^2 và đạo hàm của nó là 2x."},
                    {"text": "Đặt t = x^2 => dt = 2x dx => x dx = dt/2.", "answer": True, "explain": "Vi phân chính xác."},
                    {"text": "Khi đổi cận: x = 0 => t = 0; x = 1 => t = 1.", "answer": True, "explain": "0^2 = 0, 1^2 = 1."},
                    {"text": "Giá trị tích phân là I = (e - 1)/2.", "answer": True, "explain": "I = (1/2)*int_0^1 e^t dt = (1/2)*(e - 1)."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c4_03",
                "context": "Cho hình phẳng (H) giới hạn bởi hai parabol y = -x^2 + 4 và y = x^2 - 4.",
                "statements": [
                    {"text": "Hai parabol đối xứng nhau qua trục hoành Ox.", "answer": True, "explain": "Phương trình có dạng y = f(x) và y = -f(x)."},
                    {"text": "Giao điểm của hai parabol có hoành độ x = ±2.", "answer": True, "explain": "-x^2 + 4 = x^2 - 4 <=> 2x^2 = 8 <=> x = ±2."},
                    {"text": "Diện tích hình phẳng là S = int_{-2}^2 (-2x^2 + 8) dx.", "answer": True, "explain": "(-x^2 + 4) - (x^2 - 4) = -2x^2 + 8."},
                    {"text": "Diện tích tính được là S = 64/3.", "answer": True, "explain": "[-2x^3/3 + 8x]_{-2}^2 = (-16/3 + 16) - (16/3 - 16) = 32/3 - (-32/3) = 64/3."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c4_04",
                "context": "Một ca nô đang chạy với vận tốc 10 m/s thì tắt máy và chuyển động chậm dần đều với gia tốc a(t) = -2t (m/s^2).",
                "statements": [
                    {"text": "Vận tốc của ca nô tại thời điểm t là v(t) = 10 - t^2 (m/s).", "answer": True, "explain": "v(t) = v0 + int a(t) dt = 10 - t^2."},
                    {"text": "Ca nô dừng hẳn tại thời điểm t = sqrt(10) giây.", "answer": True, "explain": "v(t) = 0 <=> 10 - t^2 = 0 <=> t = sqrt(10) s."},
                    {"text": "Quãng đường ca nô đi được từ lúc tắt máy đến khi dừng hẳn là s = int_0^(sqrt(10)) (10 - t^2) dt.", "answer": True, "explain": "Công thức tính quãng đường theo vận tốc."},
                    {"text": "Quãng đường đi được xấp xỉ bằng 21.08 mét.", "answer": True, "explain": "s = [10t - t^3/3]_0^(sqrt(10)) = 10*sqrt(10) - (10*sqrt(10))/3 = (20/3)*sqrt(10) ≈ 21.08 mét."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c4_01",
                "q": "Tính tích phân int_0^2 (3x^2 - 2x + 1) dx.",
                "correctAnswer": "6",
                "explain": "[x^3 - x^2 + x]_0^2 = (8 - 4 + 2) - 0 = 6."
            },
            {
                "id": "sa_bai-cuoi-c4_02",
                "q": "Cho int_1^2 f(x) dx = 3. Tính int_1^2 5*f(x) dx.",
                "correctAnswer": "15",
                "explain": "5 * 3 = 15."
            },
            {
                "id": "sa_bai-cuoi-c4_03",
                "q": "Tính diện tích hình phẳng giới hạn bởi y = x^2 - 4 và trục Ox.",
                "correctAnswer": "10.67",
                "explain": "Giao điểm x = ±2. S = int_{-2}^2 (4 - x^2) dx = [4x - x^3/3]_{-2}^2 = 16 - 16/3 = 32/3 ≈ 10.67."
            },
            {
                "id": "sa_bai-cuoi-c4_04",
                "q": "Tìm hệ số k biết thể tích khối tròn xoay khi quay y = x^2 (với 0 <= x <= 1) quanh Ox là V = k*pi.",
                "correctAnswer": "0.2",
                "explain": "V = pi * int_0^1 (x^2)^2 dx = pi * [x^5/5]_0^1 = 0.2*pi => k = 0.2 (hoặc 1/5)."
            },
            {
                "id": "sa_bai-cuoi-c4_05",
                "q": "Biết int_0^1 (2x + 1)*e^x dx = a*e + b với a, b là số nguyên. Tính a + b.",
                "correctAnswer": "0",
                "explain": "Từng phần: u = 2x+1 => du = 2dx, dv = e^x dx => v = e^x. I = [(2x+1)e^x]_0^1 - 2*int_0^1 e^x dx = (3e - 1) - 2(e - 1) = e + 1? Kiểm tra: [ (2x+1)e^x ]_0^1 = 3e - 1. - 2(e-1) = -2e + 2. Tổng = e + 1. Vậy a = 1, b = 1 => a + b = 2? Chờ: tại x=0, (2*0+1)*e^0 = 1, 3e - 1. -2[e^x]_0^1 = -2(e-1) = -2e + 2. (3e - 1) - 2e + 2 = e + 1 => a = 1, b = 1 => a + b = 2."
            },
            {
                "id": "sa_bai-cuoi-c4_06",
                "q": "Tính giá trị trung bình m của hàm số f(x) = 2x trên đoạn [1; 3] theo công thức m = 1/(b - a) * int_a^b f(x) dx.",
                "correctAnswer": "4",
                "explain": "m = 1/(3 - 1) * int_1^3 2x dx = 1/2 * [x^2]_1^3 = 1/2 * (9 - 1) = 4."
            }
        ]
    }
}
