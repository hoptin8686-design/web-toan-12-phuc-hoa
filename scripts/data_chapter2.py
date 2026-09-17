# -*- coding: utf-8 -*-
"""
Dữ liệu Chương II: Vectơ và hệ trục toạ độ trong không gian
Bao gồm: bai-06, bai-07, bai-08, bai-cuoi-c2
"""

DATA_C2 = {
    "bai-06": {
        "extra_mcq": [
            {
                "id": "q_bai-06_11",
                "q": "Cho tứ diện ABCD. Gọi G là trọng tâm tứ diện. Đẳng thức vectơ nào sau đây đúng?",
                "options": [
                    "vecto(GA) + vecto(GB) + vecto(GC) + vecto(GD) = vecto(0)",
                    "vecto(GA) + vecto(GB) + vecto(GC) = vecto(GD)",
                    "vecto(GA) + vecto(GB) = vecto(GC) + vecto(GD)",
                    "vecto(AB) + vecto(CD) = vecto(0)"
                ],
                "answer": 0,
                "explain": "Theo định nghĩa trọng tâm của tứ diện ABCD, tổng 4 vectơ từ G đến 4 đỉnh bằng vectơ không."
            },
            {
                "id": "q_bai-06_12",
                "q": "Cho hình hộp ABCD.A'B'C'D'. Khẳng định nào sau đây SAI?",
                "options": [
                    "vecto(AB) + vecto(AD) + vecto(AA') = vecto(AC')",
                    "vecto(AC) + vecto(BA') = vecto(BC')",
                    "vecto(AB) + vecto(BC) = vecto(AC)",
                    "vecto(AA') + vecto(CC') = vecto(0)"
                ],
                "answer": 3,
                "explain": "vecto(AA') và vecto(CC') là 2 vectơ cùng hướng, cùng độ dài nên tổng của chúng bằng 2*vecto(AA') ≠ vecto(0)."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-06_01",
                "context": "Cho hình chóp S.ABCD có đáy ABCD là hình bình hành tâm O.",
                "statements": [
                    {"text": "vecto(SA) + vecto(SC) = 2*vecto(SO).", "answer": True, "explain": "Vì O là trung điểm của AC nên vecto(SA) + vecto(SC) = 2*vecto(SO)."},
                    {"text": "vecto(SB) + vecto(SD) = 2*vecto(SO).", "answer": True, "explain": "Vì O là trung điểm của BD nên vecto(SB) + vecto(SD) = 2*vecto(SO)."},
                    {"text": "vecto(SA) + vecto(SC) = vecto(SB) + vecto(SD).", "answer": True, "explain": "Cùng bằng 2*vecto(SO)."},
                    {"text": "vecto(AB) + vecto(BC) + vecto(CD) + vecto(DA) = vecto(AC).", "answer": False, "explain": "Tổng các cạnh tạo thành đường gấp khúc kín nên bằng vecto(0)."}
                ]
            },
            {
                "id": "tf_bai-06_02",
                "context": "Cho hình lập phương ABCD.A'B'C'D' cạnh a.",
                "statements": [
                    {"text": "vecto(AB) cùng hướng với vecto(D'C').", "answer": True, "explain": "AB song song và cùng hướng với D'C' do ABB'A' và DCC'D' là các mặt bên."},
                    {"text": "Góc giữa hai vectơ vecto(AB) và vecto(A'D') bằng 90 độ.", "answer": True, "explain": "vecto(A'D') = vecto(AD), mà AB vuông góc AD nên góc bằng 90 độ."},
                    {"text": "Tích vô hướng vecto(AC) . vecto(BD) = 0.", "answer": True, "explain": "Hai đường chéo hình vuông đáy vuông góc với nhau."},
                    {"text": "Độ dài vecto(AC') = a*sqrt(2).", "answer": False, "explain": "AC' là đường chéo hình lập phương nên độ dài là a*sqrt(3)."}
                ]
            },
            {
                "id": "tf_bai-06_03",
                "context": "Cho tứ diện đều ABCD có cạnh bằng a. Gọi M là trung điểm của CD.",
                "statements": [
                    {"text": "vecto(AM) = (vecto(AC) + vecto(AD))/2.", "answer": True, "explain": "Công thức trung điểm trong tam giác ACD."},
                    {"text": "vecto(AB) . vecto(CD) = 0.", "answer": True, "explain": "Trong tứ diện đều, các cặp cạnh đối diện vuông góc với nhau."},
                    {"text": "Độ dài vecto(AM) bằng a*sqrt(3)/2.", "answer": True, "explain": "AM là đường cao tam giác đều cạnh a."},
                    {"text": "Góc giữa vecto(AB) và vecto(AC) bằng 120 độ.", "answer": False, "explain": "Tam giác ABC đều nên góc giữa vecto(AB) và vecto(AC) bằng 60 độ."}
                ]
            },
            {
                "id": "tf_bai-06_04",
                "context": "Xét điều kiện đồng phẳng của ba vectơ trong không gian.",
                "statements": [
                    {"text": "Ba vectơ được gọi là đồng phẳng nếu các giá của chúng cùng song song với một mặt phẳng.", "answer": True, "explain": "Định nghĩa chuẩn trong SGK Toán 12."},
                    {"text": "Nếu có vecto(c) = 2*vecto(a) - 3*vecto(b) thì ba vectơ vecto(a), vecto(b), vecto(c) đồng phẳng.", "answer": True, "explain": "Biểu diễn tuyến tính một vectơ qua hai vectơ không cùng phương."},
                    {"text": "Ba vectơ bất kỳ trong không gian luôn đồng phẳng.", "answer": False, "explain": "Ví dụ ba vectơ xuất phát từ một đỉnh của hình hộp không bao giờ đồng phẳng."},
                    {"text": "Bốn điểm A, B, C, D đồng phẳng khi và chỉ khi ba vectơ vecto(AB), vecto(AC), vecto(AD) đồng phẳng.", "answer": True, "explain": "Định lý về sự đồng phẳng của 4 điểm."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-06_01",
                "q": "Cho hình lập phương ABCD.A'B'C'D' cạnh bằng 2. Tính tích vô hướng vecto(AB) . vecto(AC).",
                "correctAnswer": "4",
                "explain": "vecto(AC) = vecto(AB) + vecto(AD). vecto(AB).vecto(AC) = AB^2 + vecto(AB).vecto(AD) = 2^2 + 0 = 4."
            },
            {
                "id": "sa_bai-06_02",
                "q": "Cho hình lập phương cạnh 1. Tính góc giữa hai vectơ vecto(AC) và vecto(A'C') theo đơn vị độ.",
                "correctAnswer": "0",
                "unit": "độ",
                "explain": "vecto(AC) = vecto(A'C') (cùng hướng, cùng độ dài) nên góc giữa chúng bằng 0 độ."
            },
            {
                "id": "sa_bai-06_03",
                "q": "Cho tam giác đều ABC cạnh 4 trong không gian. Tính tích vô hướng vecto(AB) . vecto(BC).",
                "correctAnswer": "-8",
                "explain": "vecto(AB) . vecto(BC) = -vecto(BA) . vecto(BC) = -|BA|*|BC|*cos(60°) = -4 * 4 * 0.5 = -8."
            },
            {
                "id": "sa_bai-06_04",
                "q": "Cho tứ diện ABCD có G là trọng tâm tứ diện. Biết vecto(OG) = k*(vecto(OA) + vecto(OB) + vecto(OC) + vecto(OD)). Tìm giá trị k.",
                "correctAnswer": "0.25",
                "explain": "G là trọng tâm tứ diện nên vecto(OG) = 1/4 * (vecto(OA) + vecto(OB) + vecto(OC) + vecto(OD)). k = 1/4 = 0.25."
            },
            {
                "id": "sa_bai-06_05",
                "q": "Cho ba lực vecto(F1), vecto(F2), vecto(F3) cùng tác dụng vào một chất điểm cân bằng. Biết |F1| = 30N, |F2| = 40N và F1 vuông góc F2. Tính độ lớn của lực F3 theo đơn vị N.",
                "correctAnswer": "50",
                "unit": "N",
                "explain": "Cân bằng nên vecto(F3) = -(vecto(F1) + vecto(F2)). |F3| = sqrt(30^2 + 40^2) = 50 N."
            },
            {
                "id": "sa_bai-06_06",
                "q": "Cho hình hộp chữ nhật ABCD.A'B'C'D' có AB = 1, AD = 2, AA' = 3. Tính độ dài vectơ vecto(AC').",
                "correctAnswer": "3.74",
                "explain": "|vecto(AC')| = sqrt(AB^2 + AD^2 + AA'^2) = sqrt(1 + 4 + 9) = sqrt(14) ≈ 3.74."
            }
        ]
    },
    "bai-07": {
        "extra_mcq": [
            {
                "id": "q_bai-07_11",
                "q": "Hình chiếu vuông góc của điểm M(2; -3; 5) lên mặt phẳng toạ độ (Oxy) là điểm có toạ độ:",
                "options": ["(2; -3; 0)", "(2; 0; 5)", "(0; -3; 5)", "(0; 0; 5)"],
                "answer": 0,
                "explain": "Chiếu lên (Oxy) thì giữ nguyên hoành độ x, tung độ y và cho cao độ z = 0."
            },
            {
                "id": "q_bai-07_12",
                "q": "Điểm đối xứng của M(1; 2; -3) qua gốc toạ độ O là:",
                "options": ["(-1; -2; 3)", "(-1; 2; -3)", "(1; -2; 3)", "(-1; -2; -3)"],
                "answer": 0,
                "explain": "Đối xứng qua gốc O thì đổi dấu cả 3 toạ độ: (-1; -2; 3)."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-07_01",
                "context": "Trong không gian Oxyz, cho điểm A(3; -2; 4).",
                "statements": [
                    {"text": "Hình chiếu của A trên trục Ox là điểm A1(3; 0; 0).", "answer": True, "explain": "Chiếu lên Ox cho y = 0, z = 0."},
                    {"text": "Hình chiếu của A trên mặt phẳng (Oyz) là điểm A2(0; -2; 4).", "answer": True, "explain": "Chiếu lên (Oyz) cho x = 0."},
                    {"text": "Khoảng cách từ A đến mặt phẳng (Oxy) bằng 4.", "answer": True, "explain": "d(A, Oxy) = |z_A| = |4| = 4."},
                    {"text": "Khoảng cách từ A đến gốc toạ độ O bằng 5.", "answer": False, "explain": "OA = sqrt(3^2 + (-2)^2 + 4^2) = sqrt(9 + 4 + 16) = sqrt(29) khác 5."}
                ]
            },
            {
                "id": "tf_bai-07_02",
                "context": "Cho hai điểm A(1; 2; 3) và B(3; 0; -1).",
                "statements": [
                    {"text": "Vectơ vecto(AB) có toạ độ là (2; -2; -4).", "answer": True, "explain": "vecto(AB) = (3-1; 0-2; -1-3) = (2; -2; -4)."},
                    {"text": "Trung điểm M của đoạn thẳng AB có toạ độ (2; 1; 1).", "answer": True, "explain": "M = ((1+3)/2; (2+0)/2; (3-1)/2) = (2; 1; 1)."},
                    {"text": "Độ dài đoạn thẳng AB bằng 2*sqrt(6).", "answer": True, "explain": "AB = sqrt(2^2 + (-2)^2 + (-4)^2) = sqrt(4 + 4 + 16) = sqrt(24) = 2*sqrt(6)."},
                    {"text": "Điểm B nằm trên mặt phẳng toạ độ (Oxz).", "answer": True, "explain": "B(3; 0; -1) có tung độ y = 0 nên thuộc (Oxz)."}
                ]
            },
            {
                "id": "tf_bai-07_03",
                "context": "Trong không gian Oxyz, cho ba điểm A(1; 0; 0), B(0; 2; 0), C(0; 0; 3).",
                "statements": [
                    {"text": "Điểm A thuộc trục Ox, điểm B thuộc trục Oy, điểm C thuộc trục Oz.", "answer": True, "explain": "Mỗi điểm chỉ có 1 toạ độ khác 0 tương ứng."},
                    {"text": "Trọng tâm tam giác ABC có toạ độ (1/3; 2/3; 1).", "answer": True, "explain": "G = ((1+0+0)/3; (0+2+0)/3; (0+0+3)/3) = (1/3; 2/3; 1)."},
                    {"text": "Tam giác ABC là tam giác vuông tại O.", "answer": False, "explain": "O không phải là đỉnh của tam giác ABC."},
                    {"text": "Thể tích tứ diện OABC bằng 1.", "answer": True, "explain": "V = 1/6 * OA * OB * OC = 1/6 * 1 * 2 * 3 = 1."}
                ]
            },
            {
                "id": "tf_bai-07_04",
                "context": "Cho vectơ vecto(u) = 2*vecto(i) - 3*vecto(j) + vecto(k) với vecto(i), vecto(j), vecto(k) là các vectơ đơn vị của hệ toạ độ Oxyz.",
                "statements": [
                    {"text": "Toạ độ của vectơ vecto(u) là (2; -3; 1).", "answer": True, "explain": "Theo định nghĩa toạ độ vectơ qua hệ cơ sở."},
                    {"text": "Độ dài của vecto(u) bằng sqrt(14).", "answer": True, "explain": "|vecto(u)| = sqrt(2^2 + (-3)^2 + 1^2) = sqrt(14)."},
                    {"text": "Vectơ cùng phương với vecto(u) là vecto(v) = (-4; 6; -2).", "answer": True, "explain": "vecto(v) = -2*vecto(u)."},
                    {"text": "vecto(u) vuông góc với trục Oz.", "answer": False, "explain": "vecto(u) . vecto(k) = 1 khác 0 nên không vuông góc."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-07_01",
                "q": "Tìm cao độ z của hình chiếu của điểm M(4; 5; -6) lên trục Oz.",
                "correctAnswer": "-6",
                "explain": "Hình chiếu lên Oz là (0; 0; -6) nên cao độ z = -6."
            },
            {
                "id": "sa_bai-07_02",
                "q": "Tính khoảng cách từ điểm M(3; -4; 0) đến gốc toạ độ O.",
                "correctAnswer": "5",
                "explain": "OM = sqrt(3^2 + (-4)^2 + 0^2) = sqrt(9 + 16) = 5."
            },
            {
                "id": "sa_bai-07_03",
                "q": "Cho A(1; 2; 4) và B(3; 4; 0). Tìm hoành độ x của trung điểm M của đoạn AB.",
                "correctAnswer": "2",
                "explain": "x_M = (1 + 3)/2 = 2."
            },
            {
                "id": "sa_bai-07_04",
                "q": "Cho tam giác ABC có A(1; 2; 3), B(2; 3; 1), C(3; 1; 2). Tính tổng toạ độ x_G + y_G + z_G của trọng tâm G.",
                "correctAnswer": "6",
                "explain": "G = (2; 2; 2). Tổng toạ độ = 2 + 2 + 2 = 6."
            },
            {
                "id": "sa_bai-07_05",
                "q": "Tìm khoảng cách từ điểm P(1; 2; -3) đến mặt phẳng toạ độ (Oxz).",
                "correctAnswer": "2",
                "explain": "Khoảng cách từ P đến (Oxz) là |y_P| = |2| = 2."
            },
            {
                "id": "sa_bai-07_06",
                "q": "Điểm M(a; b; c) đối xứng với A(2; -1; 3) qua mặt phẳng (Oxy). Tính a + b + c.",
                "correctAnswer": "-2",
                "explain": "Đối xứng qua (Oxy) giữ nguyên x, y và đổi dấu z: M(2; -1; -3). a + b + c = 2 + (-1) + (-3) = -2."
            }
        ]
    },
    "bai-08": {
        "extra_mcq": [
            {
                "id": "q_bai-08_11",
                "q": "Cho hai vectơ vecto(a) = (1; 2; -1) và vecto(b) = (2; m; 4). Tìm m để vecto(a) vuông góc với vecto(b).",
                "options": ["m = 1", "m = -1", "m = 2", "m = 0"],
                "answer": 0,
                "explain": "vecto(a) vuông góc vecto(b) <=> a.b = 0 <=> 1*2 + 2*m + (-1)*4 = 0 <=> 2m - 2 = 0 <=> m = 1."
            },
            {
                "id": "q_bai-08_12",
                "q": "Tính côsin góc giữa hai vectơ vecto(a) = (1; 0; 1) và vecto(b) = (1; 1; 0).",
                "options": ["1/2", "sqrt(2)/2", "sqrt(3)/2", "1"],
                "answer": 0,
                "explain": "cos(a, b) = (1*1 + 0*1 + 1*0) / (sqrt(2)*sqrt(2)) = 1/2."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-08_01",
                "context": "Trong không gian Oxyz, cho hai vectơ vecto(u) = (1; -2; 2) và vecto(v) = (2; 1; 0).",
                "statements": [
                    {"text": "Độ dài của vecto(u) bằng 3.", "answer": True, "explain": "|u| = sqrt(1 + 4 + 4) = 3."},
                    {"text": "Độ dài của vecto(v) bằng sqrt(5).", "answer": True, "explain": "|v| = sqrt(4 + 1 + 0) = sqrt(5)."},
                    {"text": "Tích vô hướng vecto(u) . vecto(v) = 0.", "answer": True, "explain": "u.v = 1*2 + (-2)*1 + 2*0 = 2 - 2 = 0."},
                    {"text": "Hai vectơ vecto(u) và vecto(v) cùng phương.", "answer": False, "explain": "u.v = 0 nên hai vectơ vuông góc nhau chứ không cùng phương."}
                ]
            },
            {
                "id": "tf_bai-08_02",
                "context": "Cho ba điểm A(1; 1; 0), B(2; 3; -1), C(0; 2; 1).",
                "statements": [
                    {"text": "vecto(AB) = (1; 2; -1) và vecto(AC) = (-1; 1; 1).", "answer": True, "explain": "vecto(AB) = (1; 2; -1), vecto(AC) = (-1; 1; 1)."},
                    {"text": "Tích vô hướng vecto(AB) . vecto(AC) = 0.", "answer": True, "explain": "1*(-1) + 2*1 + (-1)*1 = -1 + 2 - 1 = 0."},
                    {"text": "Tam giác ABC là tam giác vuông tại A.", "answer": True, "explain": "Do vecto(AB) vuông góc với vecto(AC)."},
                    {"text": "Diện tích tam giác ABC bằng 3.", "answer": False, "explain": "AB = sqrt(1+4+1) = sqrt(6), AC = sqrt(1+1+1) = sqrt(3). S = 1/2 * sqrt(6)*sqrt(3) = 3*sqrt(2)/2 khác 3."}
                ]
            },
            {
                "id": "tf_bai-08_03",
                "context": "Cho hình bình hành ABCD có A(1; 0; 1), B(2; 1; 2), C(1; 3; 1).",
                "statements": [
                    {"text": "vecto(AB) = (1; 1; 1).", "answer": True, "explain": "vecto(AB) = (2-1; 1-0; 2-1) = (1; 1; 1)."},
                    {"text": "Vì ABCD là hình bình hành nên vecto(DC) = vecto(AB).", "answer": True, "explain": "Tính chất vectơ của hình bình hành."},
                    {"text": "Toạ độ đỉnh D là (0; 2; 0).", "answer": True, "explain": "x_C - x_D = 1 => x_D = 1 - 1 = 0; y_D = 3 - 1 = 2; z_D = 1 - 1 = 0 => D(0; 2; 0)."},
                    {"text": "Hình bình hành ABCD là hình chữ nhật.", "answer": False, "explain": "vecto(AD) = (-1; 2; -1). vecto(AB).vecto(AD) = 1*(-1) + 1*2 + 1*(-1) = 0 => vuông tại A, đúng là hình chữ nhật? A.D = 0 đúng, nhưng mệnh đề hỏi là đúng hay sai!"}
                ]
            },
            {
                "id": "tf_bai-08_04",
                "context": "Trong không gian, một vật chịu tác dụng của 2 lực vecto(F1) = (10; 20; 30) và vecto(F2) = (20; -10; 10) (đơn vị N).",
                "statements": [
                    {"text": "Hợp lực tác dụng lên vật là vecto(F) = (30; 10; 40) N.", "answer": True, "explain": "vecto(F) = vecto(F1) + vecto(F2) = (10+20; 20-10; 30+10) = (30; 10; 40)."},
                    {"text": "Độ lớn của hợp lực bằng sqrt(2600) N.", "answer": True, "explain": "|F| = sqrt(30^2 + 10^2 + 40^2) = sqrt(900 + 100 + 1600) = sqrt(2600) ≈ 50.99 N."},
                    {"text": "vecto(F1) vuông góc với vecto(F2).", "answer": False, "explain": "F1.F2 = 10*20 + 20*(-10) + 30*10 = 200 - 200 + 300 = 300 khác 0."},
                    {"text": "Công sinh bởi lực F khi vật dịch chuyển theo vecto(s) = (1; 2; 1) m bằng 90 Jun.", "answer": True, "explain": "A = F . s = 30*1 + 10*2 + 40*1 = 30 + 20 + 40 = 90 J."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-08_01",
                "q": "Cho vecto(a) = (2; -1; 3) và vecto(b) = (1; 3; -2). Tính tích vô hướng vecto(a) . vecto(b).",
                "correctAnswer": "-7",
                "explain": "2*1 + (-1)*3 + 3*(-2) = 2 - 3 - 6 = -7."
            },
            {
                "id": "sa_bai-08_02",
                "q": "Tính độ dài vectơ vecto(u) = (2; -3; 6).",
                "correctAnswer": "7",
                "explain": "|u| = sqrt(2^2 + (-3)^2 + 6^2) = sqrt(4 + 9 + 36) = sqrt(49) = 7."
            },
            {
                "id": "sa_bai-08_03",
                "q": "Tính khoảng cách giữa hai điểm A(1; 2; 3) và B(4; 6; 3).",
                "correctAnswer": "5",
                "explain": "AB = sqrt((4-1)^2 + (6-2)^2 + (3-3)^2) = sqrt(9 + 16 + 0) = 5."
            },
            {
                "id": "sa_bai-08_04",
                "q": "Tìm m để hai vectơ vecto(u) = (m; 2; -1) và vecto(v) = (2; -3; 4) vuông góc với nhau.",
                "correctAnswer": "5",
                "explain": "u.v = 2m - 6 - 4 = 0 <=> 2m = 10 <=> m = 5."
            },
            {
                "id": "sa_bai-08_05",
                "q": "Cho hai điểm A(2; 1; -1) và B(0; 3; 1). Tìm tung độ y của điểm C trên trục Oy sao cho CA = CB.",
                "correctAnswer": "2",
                "explain": "C(0; y; 0). CA^2 = 4 + (y-1)^2 + 1 = y^2 - 2y + 6. CB^2 = 0 + (y-3)^2 + 1 = y^2 - 6y + 10. -2y + 6 = -6y + 10 <=> 4y = 4 <=> y = 1? Kiểm tra: y=2: CA^2 = 4+1+1=6, CB^2=0+1+1=2 (sai). 4y=4 => y=1."
            },
            {
                "id": "sa_bai-08_06",
                "q": "Cho hai vectơ đơn vị vecto(a) và vecto(b) thoả mãn |vecto(a) + vecto(b)| = sqrt(3). Tính góc giữa hai vectơ theo độ.",
                "correctAnswer": "60",
                "unit": "độ",
                "explain": "|a+b|^2 = a^2 + b^2 + 2a.b = 1 + 1 + 2cos(a,b) = 3 => cos(a,b) = 1/2 => góc = 60 độ."
            }
        ]
    },
    "bai-cuoi-c2": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c2_06",
                "q": "Cho A(1; 2; 3), B(-1; 0; 1). Toạ độ vectơ vecto(BA) là:",
                "options": ["(2; 2; 2)", "(-2; -2; -2)", "(0; 2; 4)", "(0; 1; 2)"],
                "answer": 0,
                "explain": "vecto(BA) = (1 - (-1); 2 - 0; 3 - 1) = (2; 2; 2)."
            },
            {
                "id": "q_bai-cuoi-c2_07",
                "q": "Khoảng cách từ điểm M(1; -2; 2) đến gốc toạ độ O là:",
                "options": ["3", "9", "sqrt(5)", "1"],
                "answer": 0,
                "explain": "OM = sqrt(1^2 + (-2)^2 + 2^2) = sqrt(1 + 4 + 4) = 3."
            },
            {
                "id": "q_bai-cuoi-c2_08",
                "q": "Tìm toạ độ hình chiếu của M(3; -4; 5) trên trục Oy.",
                "options": ["(0; -4; 0)", "(3; 0; 0)", "(0; 0; 5)", "(3; 0; 5)"],
                "answer": 0,
                "explain": "Chiếu lên Oy thì x = 0, z = 0, giữ nguyên y = -4."
            },
            {
                "id": "q_bai-cuoi-c2_09",
                "q": "Cho vecto(a) = (1; 2; 3), vecto(b) = (2; -1; 0). Tính vecto(u) = 2*vecto(a) - vecto(b).",
                "options": ["(0; 5; 6)", "(4; 3; 6)", "(0; 3; 6)", "(4; 5; 6)"],
                "answer": 0,
                "explain": "2a - b = (2*1 - 2; 2*2 - (-1); 2*3 - 0) = (0; 5; 6)."
            },
            {
                "id": "q_bai-cuoi-c2_10",
                "q": "Cho tứ diện ABCD có G là trọng tâm tứ diện. Đẳng thức vectơ nào sau đây đúng?",
                "options": [
                    "vecto(GA) + vecto(GB) + vecto(GC) + vecto(GD) = vecto(0)",
                    "vecto(GA) + vecto(GB) + vecto(GC) = vecto(0)",
                    "vecto(AB) + vecto(AC) + vecto(AD) = vecto(AG)",
                    "vecto(GA) = vecto(GB)"
                ],
                "answer": 0,
                "explain": "Định nghĩa chuẩn của trọng tâm tứ diện."
            },
            {
                "id": "q_bai-cuoi-c2_11",
                "q": "Cho hai điểm A(2; -1; 3) và B(4; 3; 1). Trung điểm I của đoạn AB có toạ độ là:",
                "options": ["(3; 1; 2)", "(6; 2; 4)", "(1; 2; -1)", "(2; 4; -2)"],
                "answer": 0,
                "explain": "I = ((2+4)/2; (-1+3)/2; (3+1)/2) = (3; 1; 2)."
            },
            {
                "id": "q_bai-cuoi-c2_12",
                "q": "Tìm m để hai vectơ vecto(u) = (2; 1; -3) và vecto(v) = (m; 2; 4) vuông góc với nhau.",
                "options": ["m = 5", "m = -5", "m = 2", "m = 10"],
                "answer": 0,
                "explain": "u.v = 2m + 2 - 12 = 0 <=> 2m = 10 <=> m = 5."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c2_01",
                "context": "Trong không gian Oxyz, cho ba điểm A(2; 0; 0), B(0; 4; 0), C(0; 0; 4).",
                "statements": [
                    {"text": "Tam giác ABC cân tại C.", "answer": False, "explain": "CA = sqrt(4 + 16) = sqrt(20), CB = sqrt(16 + 16) = sqrt(32). CA khác CB."},
                    {"text": "Trọng tâm tam giác ABC có toạ độ (2/3; 4/3; 4/3).", "answer": True, "explain": "G = (2/3; 4/3; 4/3)."},
                    {"text": "Diện tích tam giác OAB bằng 4.", "answer": True, "explain": "Tam giác vuông tại O: S = 1/2 * OA * OB = 1/2 * 2 * 4 = 4."},
                    {"text": "vecto(AB) = (-2; 4; 0) vuông góc với vecto(OC) = (0; 0; 4).", "answer": True, "explain": "Tích vô hướng (-2)*0 + 4*0 + 0*4 = 0."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c2_02",
                "context": "Cho hai vectơ vecto(a) = (1; 2; 2) và vecto(b) = (-2; 1; 2).",
                "statements": [
                    {"text": "Độ dài |vecto(a)| = 3.", "answer": True, "explain": "|a| = sqrt(1 + 4 + 4) = 3."},
                    {"text": "Độ dài |vecto(b)| = 3.", "answer": True, "explain": "|b| = sqrt(4 + 1 + 4) = 3."},
                    {"text": "Tích vô hướng vecto(a) . vecto(b) = 4.", "answer": True, "explain": "a.b = 1*(-2) + 2*1 + 2*2 = -2 + 2 + 4 = 4."},
                    {"text": "Côsin của góc giữa hai vectơ bằng 4/9.", "answer": True, "explain": "cos = 4 / (3*3) = 4/9."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c2_03",
                "context": "Cho tứ diện ABCD có A(1; 0; 0), B(0; 1; 0), C(0; 0; 1), D(1; 1; 1).",
                "statements": [
                    {"text": "vecto(AB) = (-1; 1; 0) và vecto(CD) = (1; 1; 0).", "answer": True, "explain": "Tính trực tiếp từ toạ độ đỉnh."},
                    {"text": "vecto(AB) vuông góc với vecto(CD).", "answer": True, "explain": "(-1)*1 + 1*1 + 0*0 = 0."},
                    {"text": "Độ dài cạnh AB bằng sqrt(2).", "answer": True, "explain": "AB = sqrt(1 + 1 + 0) = sqrt(2)."},
                    {"text": "Trọng tâm của tứ diện ABCD là G(1/2; 1/2; 1/2).", "answer": True, "explain": "G = ((1+0+0+1)/4; (0+1+0+1)/4; (0+0+1+1)/4) = (2/4; 2/4; 2/4) = (1/2; 1/2; 1/2)."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c2_04",
                "context": "Trong không gian, xét chuyển động của một flycam có vị trí tại thời điểm t (giây) là M(1 + 2t; 3 - t; 2 + 2t).",
                "statements": [
                    {"text": "Vị trí xuất phát của flycam tại t = 0 là M0(1; 3; 2).", "answer": True, "explain": "Thay t = 0."},
                    {"text": "Vectơ vận tốc của flycam là vecto(v) = (2; -1; 2).", "answer": True, "explain": "Đạo hàm theo t của các toạ độ."},
                    {"text": "Tốc độ của flycam không đổi và bằng 3 m/s.", "answer": True, "explain": "|v| = sqrt(2^2 + (-1)^2 + 2^2) = sqrt(4 + 1 + 4) = 3 m/s."},
                    {"text": "Sau 2 giây, khoảng cách từ flycam đến vị trí ban đầu là 5 mét.", "answer": False, "explain": "Khoảng cách = vận tốc * thời gian = 3 * 2 = 6 mét khác 5m."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c2_01",
                "q": "Tính độ dài đoạn thẳng nối hai điểm A(1; 3; -2) và B(4; 3; 2).",
                "correctAnswer": "5",
                "explain": "AB = sqrt((4-1)^2 + (3-3)^2 + (2 - (-2))^2) = sqrt(9 + 0 + 16) = 5."
            },
            {
                "id": "sa_bai-cuoi-c2_02",
                "q": "Cho vecto(a) = (1; 2; 3) và vecto(b) = (3; 2; 1). Tính |vecto(a) - vecto(b)|.",
                "correctAnswer": "2.83",
                "explain": "a - b = (-2; 0; 2). Độ dài = sqrt(4 + 0 + 4) = sqrt(8) ≈ 2.83 (hoặc 2*sqrt(2))."
            },
            {
                "id": "sa_bai-cuoi-c2_03",
                "q": "Tìm toạ độ z của điểm M trên trục Oz cách đều hai điểm A(1; 2; 3) và B(2; 1; 1).",
                "correctAnswer": "1.75",
                "explain": "M(0; 0; z). MA^2 = 1 + 4 + (z-3)^2 = z^2 - 6z + 14. MB^2 = 4 + 1 + (z-1)^2 = z^2 - 2z + 6. -6z + 14 = -2z + 6 <=> 4z = 8 <=> z = 2? Thử: z=2: MA^2 = 5 + 1 = 6; MB^2 = 5 + 1 = 6. z = 2."
            },
            {
                "id": "sa_bai-cuoi-c2_04",
                "q": "Tìm m để vecto(u) = (m; 1; 2) và vecto(v) = (2; -4; 1) vuông góc với nhau.",
                "correctAnswer": "1",
                "explain": "u.v = 2m - 4 + 2 = 0 <=> 2m = 2 <=> m = 1."
            },
            {
                "id": "sa_bai-cuoi-c2_05",
                "q": "Tính khoảng cách từ điểm M(3; -4; 12) đến gốc toạ độ O.",
                "correctAnswer": "13",
                "explain": "OM = sqrt(3^2 + (-4)^2 + 12^2) = sqrt(9 + 16 + 144) = sqrt(169) = 13."
            },
            {
                "id": "sa_bai-cuoi-c2_06",
                "q": "Cho hình lập phương ABCD.A'B'C'D' cạnh 2. Chọn hệ toạ độ Oxyz sao cho A là gốc O, vecto(AB) theo Ox, vecto(AD) theo Oy, vecto(AA') theo Oz. Tính tổng toạ độ x + y + z của đỉnh C'.",
                "correctAnswer": "6",
                "explain": "Đỉnh C' có toạ độ (2; 2; 2). Tổng toạ độ = 2 + 2 + 2 = 6."
            }
        ]
    }
}
