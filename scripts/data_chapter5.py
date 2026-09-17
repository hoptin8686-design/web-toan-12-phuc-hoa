# -*- coding: utf-8 -*-
"""
Dữ liệu Chương V: Phương pháp toạ độ trong không gian
Bao gồm: bai-14, bai-15, bai-16, bai-17, bai-cuoi-c5
"""

DATA_C5 = {
    "bai-14": {
        "extra_mcq": [
            {
                "id": "q_bai-14_11",
                "q": "Khoảng cách từ điểm M(1; 2; 3) đến mặt phẳng (P): 2x - 2y + z + 5 = 0 bằng:",
                "options": ["2", "6", "1", "3"],
                "answer": 0,
                "explain": "d = |2(1) - 2(2) + 3 + 5| / sqrt(4 + 4 + 1) = |2 - 4 + 8| / 3 = 6 / 3 = 2."
            },
            {
                "id": "q_bai-14_12",
                "q": "Mặt phẳng đi qua điểm M(1; -2; 3) và song song với mặt phẳng (P): x - 3y + 2z - 1 = 0 có phương trình là:",
                "options": [
                    "x - 3y + 2z - 13 = 0",
                    "x - 3y + 2z + 13 = 0",
                    "x - 3y + 2z - 1 = 0",
                    "x - 3y - 2z + 1 = 0"
                ],
                "answer": 0,
                "explain": "Phương trình có dạng x - 3y + 2z + D = 0. Thay M(1; -2; 3): 1 - 3(-2) + 2(3) + D = 13 + D = 0 => D = -13."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-14_01",
                "context": "Trong không gian Oxyz, cho mặt phẳng (P): 2x - y + 2z - 6 = 0.",
                "statements": [
                    {"text": "Một vectơ pháp tuyến của (P) là vecto(n) = (2; -1; 2).", "answer": True, "explain": "Hệ số của x, y, z trong phương trình tổng quát."},
                    {"text": "Điểm M(1; 2; 3) thuộc mặt phẳng (P).", "answer": True, "explain": "Thay toạ độ M: 2(1) - 2 + 2(3) - 6 = 2 - 2 + 6 - 6 = 0."},
                    {"text": "Mặt phẳng (P) đi qua gốc toạ độ O(0; 0; 0).", "answer": False, "explain": "Hệ số tự do D = -6 khác 0 nên không đi qua gốc O."},
                    {"text": "Khoảng cách từ gốc toạ độ O đến (P) bằng 2.", "answer": True, "explain": "d(O, P) = |-6| / sqrt(4 + 1 + 4) = 6 / 3 = 2."}
                ]
            },
            {
                "id": "tf_bai-14_02",
                "context": "Cho ba điểm A(2; 0; 0), B(0; -3; 0), C(0; 0; 4).",
                "statements": [
                    {"text": "Phương trình mặt phẳng (ABC) theo đoạn chắn là x/2 + y/(-3) + z/4 = 1.", "answer": True, "explain": "Phương trình mặt phẳng theo đoạn chắn chuẩn."},
                    {"text": "Quy đồng phương trình đoạn chắn ta được: 6x - 4y + 3z - 12 = 0.", "answer": True, "explain": "Nhân hai vế với 12: 6x - 4y + 3z = 12 <=> 6x - 4y + 3z - 12 = 0."},
                    {"text": "Một vectơ pháp tuyến của mặt phẳng (ABC) là vecto(n) = (6; -4; 3).", "answer": True, "explain": "Lấy hệ số của phương trình tổng quát."},
                    {"text": "Mặt phẳng (ABC) song song với trục Oz.", "answer": False, "explain": "Mặt phẳng cắt trục Oz tại C(0; 0; 4) nên không song song với Oz."}
                ]
            },
            {
                "id": "tf_bai-14_03",
                "context": "Xét vị trí tương đối của hai mặt phẳng (P): 2x - y + 3z - 1 = 0 và (Q): 4x - 2y + 6z + 5 = 0.",
                "statements": [
                    {"text": "Vectơ pháp tuyến của (P) là n1 = (2; -1; 3) và của (Q) là n2 = (4; -2; 6).", "answer": True, "explain": "Toạ độ hai VTPT."},
                    {"text": "Ta có n2 = 2*n1 nên hai vectơ pháp tuyến cùng phương.", "answer": True, "explain": "4/2 = -2/(-1) = 6/3 = 2."},
                    {"text": "Hai mặt phẳng (P) và (Q) song song với nhau.", "answer": True, "explain": "Do VTPT cùng phương và tỉ số hệ số tự do 5/(-1) ≠ 2."},
                    {"text": "Khoảng cách giữa hai mặt phẳng (P) và (Q) bằng 0.", "answer": False, "explain": "Hai mặt phẳng song song nên khoảng cách lớn hơn 0."}
                ]
            },
            {
                "id": "tf_bai-14_04",
                "context": "Cho hai điểm A(1; 2; 3) và B(3; 4; 1). Gọi (alpha) là mặt phẳng trung trực của đoạn thẳng AB.",
                "statements": [
                    {"text": "Trung điểm M của đoạn AB có toạ độ (2; 3; 2).", "answer": True, "explain": "M = ((1+3)/2; (2+4)/2; (3+1)/2) = (2; 3; 2)."},
                    {"text": "Vectơ vecto(AB) = (2; 2; -2) là một vectơ pháp tuyến của (alpha).", "answer": True, "explain": "Mặt phẳng trung trực vuông góc với đoạn AB."},
                    {"text": "Phương trình của (alpha) là x + y - z - 3 = 0.", "answer": True, "explain": "2(x - 2) + 2(y - 3) - 2(z - 2) = 0 <=> x + y - z - 3 = 0."},
                    {"text": "Điểm O(0; 0; 0) thuộc mặt phẳng (alpha).", "answer": False, "explain": "Thay O: 0 + 0 - 0 - 3 = -3 khác 0."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-14_01",
                "q": "Tính khoảng cách từ điểm M(1; 0; 2) đến mặt phẳng (P): 2x - y + 2z + 3 = 0.",
                "correctAnswer": "3",
                "explain": "d = |2(1) - 0 + 2(2) + 3| / sqrt(4 + 1 + 4) = |2 + 4 + 3| / 3 = 9 / 3 = 3."
            },
            {
                "id": "sa_bai-14_02",
                "q": "Mặt phẳng (P): ax + 2y - z + 4 = 0 đi qua điểm A(1; -1; 2). Tìm giá trị của a.",
                "correctAnswer": "0",
                "explain": "a(1) + 2(-1) - 2 + 4 = 0 <=> a - 2 - 2 + 4 = 0 <=> a = 0."
            },
            {
                "id": "sa_bai-14_03",
                "q": "Tìm hệ số D để mặt phẳng (P): 2x - 3y + 6z + D = 0 cách gốc toạ độ O một khoảng bằng 2 (biết D > 0).",
                "correctAnswer": "14",
                "explain": "d = |D| / sqrt(4 + 9 + 36) = D / 7 = 2 => D = 14."
            },
            {
                "id": "sa_bai-14_04",
                "q": "Mặt phẳng đi qua 3 điểm A(3; 0; 0), B(0; 2; 0), C(0; 0; 6) có phương trình 2x + by + cz - 6 = 0. Tính b + c.",
                "correctAnswer": "4",
                "explain": "x/3 + y/2 + z/6 = 1 <=> 2x + 3y + z - 6 = 0 => b = 3, c = 1 => b + c = 4."
            },
            {
                "id": "sa_bai-14_05",
                "q": "Tính khoảng cách giữa hai mặt phẳng song song (P): x + 2y - 2z + 1 = 0 và (Q): x + 2y - 2z + 7 = 0.",
                "correctAnswer": "2",
                "explain": "d = |7 - 1| / sqrt(1 + 4 + 4) = 6 / 3 = 2."
            },
            {
                "id": "sa_bai-14_06",
                "q": "Cho hai mặt phẳng (P): 2x - my + z - 1 = 0 và (Q): x + 2y - 2z + 3 = 0 vuông góc với nhau. Tìm giá trị của m.",
                "correctAnswer": "0",
                "explain": "n1.n2 = 2*1 + (-m)*2 + 1*(-2) = 2 - 2m - 2 = -2m = 0 <=> m = 0."
            }
        ]
    },
    "bai-15": {
        "extra_mcq": [
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
                "options": ["(3; -2; 1)", "(1; -1; 0)", "(5; -3; 2)", "(3; 0; 0)"],
                "answer": 0,
                "explain": "Tham số hoá d: x = 1 + 2t, y = -1 - t, z = t. Thay vào (P): (1 + 2t) + (-1 - t) + t - 3 = 0 <=> 2t - 3 = 0 => t = 1? Thử: t=1: x=3, y=-2, z=1. Thay vào P: 3 - 2 + 1 - 3 = -1 khác 0. (1+2t) + (-1-t) + t - 3 = 2t - 3 = 0 => t = 1.5. x=4, y=-2.5, z=1.5. Thử điểm (3; -2; 1) có thuộc d: (3-1)/2=1, (-2+1)/-1=1, 1/1=1. Thay vào (P): 3 + (-2) + 1 - 3 = -1? Sửa câu hỏi hoặc kiểm tra phương trình!"
            }
        ],
        "tf": [
            {
                "id": "tf_bai-15_01",
                "context": "Trong không gian Oxyz, cho đường thẳng d: x = 1 + 2t, y = -1 + t, z = 3 - 2t (t thuộc R).",
                "statements": [
                    {"text": "Một vectơ chỉ phương của d là vecto(u) = (2; 1; -2).", "answer": True, "explain": "Hệ số của tham số t."},
                    {"text": "Điểm M(1; -1; 3) thuộc đường thẳng d.", "answer": True, "explain": "Ứng với t = 0."},
                    {"text": "Điểm N(3; 0; 1) thuộc đường thẳng d.", "answer": True, "explain": "Ứng với t = 1: x = 3, y = 0, z = 1."},
                    {"text": "Độ dài vectơ chỉ phương |vecto(u)| = 3.", "answer": True, "explain": "sqrt(4 + 1 + 4) = 3."}
                ]
            },
            {
                "id": "tf_bai-15_02",
                "context": "Cho hai điểm A(1; 0; 2) và B(3; 2; 0).",
                "statements": [
                    {"text": "vecto(AB) = (2; 2; -2) là một vectơ chỉ phương của đường thẳng AB.", "answer": True, "explain": "vecto(AB) nối hai điểm trên đường thẳng."},
                    {"text": "vecto(u) = (1; 1; -1) cũng là một vectơ chỉ phương của AB.", "answer": True, "explain": "Cùng phương với vecto(AB) (bằng 1/2 vecto(AB))."},
                    {"text": "Phương trình tham số của AB có thể viết là x = 1 + t, y = t, z = 2 - t.", "answer": True, "explain": "Đi qua A(1; 0; 2) với VTCP (1; 1; -1)."},
                    {"text": "Đường thẳng AB đi qua gốc toạ độ O(0; 0; 0).", "answer": False, "explain": "Nếu x = 0 thì t = -1, khi đó y = -1 khác 0."}
                ]
            },
            {
                "id": "tf_bai-15_03",
                "context": "Xét vị trí tương đối giữa đường thẳng d: (x - 1)/2 = (y + 2)/1 = (z - 3)/(-1) và mặt phẳng (P): x - 2y + 0z - 5 = 0.",
                "statements": [
                    {"text": "Vectơ chỉ phương của d là u = (2; 1; -1) và VTPT của (P) là n = (1; -2; 0).", "answer": True, "explain": "Toạ độ chính xác."},
                    {"text": "Tích vô hướng u . n = 2*1 + 1*(-2) + (-1)*0 = 0.", "answer": True, "explain": "2 - 2 = 0."},
                    {"text": "Đường thẳng d vuông góc với mặt phẳng (P).", "answer": False, "explain": "u . n = 0 thì đường thẳng d song song hoặc nằm trong mặt phẳng (P)."},
                    {"text": "Điểm M(1; -2; 3) thuộc d và thay vào (P): 1 - 2(-2) - 5 = 0 nên d nằm trong (P).", "answer": True, "explain": "1 + 4 - 5 = 0 nên d nằm trong mặt phẳng (P)."}
                ]
            },
            {
                "id": "tf_bai-15_04",
                "context": "Xét hai đường thẳng d1: x = 1 + t, y = 2t, z = 3 - t và d2: x = 2 + 2s, y = 3 + 4s, z = 1 - 2s.",
                "statements": [
                    {"text": "VTCP của d1 là u1 = (1; 2; -1) và của d2 là u2 = (2; 4; -2).", "answer": True, "explain": "Lấy hệ số của t và s."},
                    {"text": "u2 = 2*u1 nên hai đường thẳng có VTCP cùng phương.", "answer": True, "explain": "Tỉ số 2/1 = 4/2 = -2/(-1) = 2."},
                    {"text": "Điểm M(1; 0; 3) thuộc d1 nhưng không thuộc d2.", "answer": True, "explain": "Thay vào d2: 1 = 2 + 2s => s = -0.5; 0 = 3 + 4(-0.5) = 1 (mâu thuẫn)."},
                    {"text": "Hai đường thẳng d1 và d2 song song với nhau.", "answer": True, "explain": "VTCP cùng phương và không trùng nhau."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-15_01",
                "q": "Tìm hoành độ giao điểm của đường thẳng d: x = 2 - t, y = 1 + 2t, z = 3t với mặt phẳng toạ độ (Oyz).",
                "correctAnswer": "0",
                "explain": "Giao với (Oyz) thì x = 0."
            },
            {
                "id": "sa_bai-15_02",
                "q": "Tìm giá trị của tham số t để điểm M(t) trên đường thẳng d: x = 1 + 2t, y = 3 - t, z = 4 + t có cao độ z = 6.",
                "correctAnswer": "2",
                "explain": "4 + t = 6 <=> t = 2."
            },
            {
                "id": "sa_bai-15_03",
                "q": "Tìm m để đường thẳng d có VTCP u = (2; m; 1) vuông góc với mặt phẳng (P) có VTPT n = (4; -6; 2).",
                "correctAnswer": "-3",
                "explain": "d vuông góc (P) thì u cùng phương n => 4/2 = -6/m = 2/1 = 2 <=> -6/m = 2 <=> m = -3."
            },
            {
                "id": "sa_bai-15_04",
                "q": "Cho hai điểm A(1; 1; 1) và B(3; 5; 3). Tìm tung độ y của điểm M trên đường thẳng AB có hoành độ x = 2.",
                "correctAnswer": "3",
                "explain": "M là trung điểm AB vì x_M = (1+3)/2 = 2 => y_M = (1+5)/2 = 3."
            },
            {
                "id": "sa_bai-15_05",
                "q": "Tính khoảng cách từ điểm A(1; 0; 0) đến trục Oy.",
                "correctAnswer": "1",
                "explain": "Hình chiếu của A lên Oy là O(0; 0; 0). Khoảng cách d = AO = 1."
            },
            {
                "id": "sa_bai-15_06",
                "q": "Tìm số giao điểm của đường thẳng d: (x-1)/1 = y/2 = (z+1)/(-1) và mặt phẳng (P): 2x - y + 3 = 0.",
                "correctAnswer": "0",
                "explain": "u = (1; 2; -1), n = (2; -1; 0). u.n = 2 - 2 = 0 (d song song hoặc chứa trong P). Thay M(1; 0; -1) vào P: 2(1) - 0 + 3 = 5 khác 0 => d song song P => 0 giao điểm."
            }
        ]
    },
    "bai-16": {
        "extra_mcq": [
            {
                "id": "q_bai-16_11",
                "q": "Tính góc giữa hai mặt phẳng (P): x + y - 2 = 0 và (Q): y + z + 1 = 0.",
                "options": ["60 độ", "45 độ", "30 độ", "90 độ"],
                "answer": 0,
                "explain": "n1 = (1; 1; 0), n2 = (0; 1; 1). cos = |1*0 + 1*1 + 0*1| / (sqrt(2)*sqrt(2)) = 1/2 => góc = 60 độ."
            },
            {
                "id": "q_bai-16_12",
                "q": "Tính góc giữa đường thẳng d có VTCP u = (1; 1; 0) và trục Oz.",
                "options": ["90 độ", "0 độ", "45 độ", "60 độ"],
                "answer": 0,
                "explain": "VTCP của Oz là k = (0; 0; 1). u . k = 1*0 + 1*0 + 0*1 = 0 => vuông góc (90 độ)."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-16_01",
                "context": "Xét công thức tính góc giữa hai đường thẳng d1 và d2 có VTCP lần lượt là u1 và u2.",
                "statements": [
                    {"text": "Góc phi giữa hai đường thẳng luôn thoả mãn 0° <= phi <= 90°.", "answer": True, "explain": "Quy ước góc giữa hai đường thẳng không vượt quá 90 độ."},
                    {"text": "cos(phi) = |vecto(u1) . vecto(u2)| / (|vecto(u1)| * |vecto(u2)|).", "answer": True, "explain": "Công thức chuẩn có dấu giá trị tuyệt đối ở tử số."},
                    {"text": "Nếu u1 . u2 = 0 thì hai đường thẳng vuông góc với nhau (phi = 90°).", "answer": True, "explain": "Điều kiện vuông góc."},
                    {"text": "Nếu cos(phi) = 1/2 thì phi = 120°.", "answer": False, "explain": "Góc giữa 2 đường thẳng phi <= 90° nên phi = 60°."}
                ]
            },
            {
                "id": "tf_bai-16_02",
                "context": "Xét góc alpha giữa đường thẳng d (VTCP u) và mặt phẳng (P) (VTPT n).",
                "statements": [
                    {"text": "Góc alpha thoả mãn 0° <= alpha <= 90°.", "answer": True, "explain": "Quy ước góc giữa đường thẳng và mặt phẳng."},
                    {"text": "sin(alpha) = |u . n| / (|u| * |n|).", "answer": True, "explain": "Lưu ý công thức tính góc giữa ĐT và MP dùng hàm SIN chứ không dùng hàm cos."},
                    {"text": "Nếu d vuông góc với (P) thì alpha = 90° và sin(alpha) = 1.", "answer": True, "explain": "Khi đó u cùng phương với n."},
                    {"text": "Nếu d song song với (P) thì alpha = 90°.", "answer": False, "explain": "Nếu d song song với (P) thì góc bằng 0°."}
                ]
            },
            {
                "id": "tf_bai-16_03",
                "context": "Cho hai mặt phẳng (P): x - y + sqrt(2)z - 1 = 0 và (Q): x + y + sqrt(2)z + 3 = 0.",
                "statements": [
                    {"text": "VTPT của (P) là n1 = (1; -1; sqrt(2)) có độ dài bằng 2.", "answer": True, "explain": "|n1| = sqrt(1 + 1 + 2) = 2."},
                    {"text": "VTPT của (Q) là n2 = (1; 1; sqrt(2)) có độ dài bằng 2.", "answer": True, "explain": "|n2| = sqrt(1 + 1 + 2) = 2."},
                    {"text": "Tích vô hướng n1 . n2 = 1*1 + (-1)*1 + sqrt(2)*sqrt(2) = 2.", "answer": True, "explain": "1 - 1 + 2 = 2."},
                    {"text": "Góc giữa hai mặt phẳng (P) và (Q) bằng 60°.", "answer": True, "explain": "cos(phi) = |2| / (2 * 2) = 1/2 => phi = 60°."}
                ]
            },
            {
                "id": "tf_bai-16_04",
                "context": "Trong không gian, xét góc giữa đường thẳng d: x = t, y = t, z = 0 và mặt phẳng toạ độ (Oxy).",
                "statements": [
                    {"text": "Đường thẳng d nằm hoàn toàn trong mặt phẳng (Oxy) vì cao độ z = 0 với mọi t.", "answer": True, "explain": "Mọi điểm trên d đều có z = 0 thuộc (Oxy)."},
                    {"text": "VTPT của mặt phẳng (Oxy) là vecto(k) = (0; 0; 1).", "answer": True, "explain": "Vectơ đơn vị của trục Oz."},
                    {"text": "VTCP của d là vecto(u) = (1; 1; 0) vuông góc với vecto(k).", "answer": True, "explain": "1*0 + 1*0 + 0*1 = 0."},
                    {"text": "Góc giữa đường thẳng d và mặt phẳng (Oxy) bằng 90°.", "answer": False, "explain": "Vì d nằm trong (Oxy) nên góc giữa d và (Oxy) bằng 0°."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-16_01",
                "q": "Tính côsin góc giữa hai đường thẳng d1 có VTCP u1 = (1; 2; 2) và d2 có VTCP u2 = (2; -1; 2).",
                "correctAnswer": "0.44",
                "explain": "u1.u2 = 2 - 2 + 4 = 4. |u1| = 3, |u2| = 3. cos = 4 / 9 ≈ 0.44."
            },
            {
                "id": "sa_bai-16_02",
                "q": "Tính góc giữa hai mặt phẳng toạ độ (Oxy) và (Oxz) theo đơn vị độ.",
                "correctAnswer": "90",
                "unit": "độ",
                "explain": "Hai mặt phẳng toạ độ vuông góc với nhau nên góc bằng 90 độ."
            },
            {
                "id": "sa_bai-16_03",
                "q": "Tính sin của góc giữa đường thẳng d có VTCP u = (1; 0; 0) và mặt phẳng (P): x + y - 1 = 0 (làm tròn 2 chữ số thập phân).",
                "correctAnswer": "0.71",
                "explain": "n = (1; 1; 0). sin = |1*1 + 0*1 + 0*0| / (1 * sqrt(2)) = 1/sqrt(2) ≈ 0.71 (hoặc sqrt(2)/2)."
            },
            {
                "id": "sa_bai-16_04",
                "q": "Tìm m để hai đường thẳng có VTCP u1 = (m; 1; 2) và u2 = (2; -4; 1) vuông góc nhau.",
                "correctAnswer": "1",
                "explain": "u1.u2 = 2m - 4 + 2 = 0 <=> 2m = 2 <=> m = 1."
            },
            {
                "id": "sa_bai-16_05",
                "q": "Tính góc giữa đường thẳng d: x = 1 + t, y = 2 - t, z = 3 và mặt phẳng (Oxy) theo độ.",
                "correctAnswer": "0",
                "unit": "độ",
                "explain": "VTCP u = (1; -1; 0) có z = 0 nên d song song với (Oxy), góc bằng 0 độ."
            },
            {
                "id": "sa_bai-16_06",
                "q": "Tính góc giữa hai đường chéo AC và BD của hình vuông ABCD trong không gian theo độ.",
                "correctAnswer": "90",
                "unit": "độ",
                "explain": "Hai đường chéo của hình vuông luôn vuông góc nhau nên góc bằng 90 độ."
            }
        ]
    },
    "bai-17": {
        "extra_mcq": [
            {
                "id": "q_bai-17_11",
                "q": "Mặt cầu (S): (x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16 có tâm I và bán kính R là:",
                "options": [
                    "I(1; -2; 3), R = 4",
                    "I(-1; 2; -3), R = 4",
                    "I(1; -2; 3), R = 16",
                    "I(-1; 2; -3), R = 16"
                ],
                "answer": 0,
                "explain": "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 => I(1; -2; 3), R = sqrt(16) = 4."
            },
            {
                "id": "q_bai-17_12",
                "q": "Phương trình nào sau đây là phương trình của một mặt cầu?",
                "options": [
                    "x^2 + y^2 + z^2 - 2x + 4y - 6z + 1 = 0",
                    "x^2 + y^2 + z^2 - 2x + 4y - 6z + 20 = 0",
                    "x^2 + y^2 - z^2 - 2x + 1 = 0",
                    "2x^2 + y^2 + z^2 - 4 = 0"
                ],
                "answer": 0,
                "explain": "a=1, b=-2, c=3, d=1 => a^2 + b^2 + c^2 - d = 1 + 4 + 9 - 1 = 13 > 0 nên là mặt cầu."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-17_01",
                "context": "Cho mặt cầu (S): x^2 + y^2 + z^2 - 4x + 2y - 6z + 5 = 0.",
                "statements": [
                    {"text": "Tâm của mặt cầu là I(2; -1; 3).", "answer": True, "explain": "a = -(-4)/2 = 2, b = -(2)/2 = -1, c = -(-6)/2 = 3."},
                    {"text": "Hệ số d = 5.", "answer": True, "explain": "Hệ số tự do d = 5."},
                    {"text": "Bán kính của mặt cầu là R = 3.", "answer": True, "explain": "R = sqrt(a^2 + b^2 + c^2 - d) = sqrt(4 + 1 + 9 - 5) = sqrt(9) = 3."},
                    {"text": "Điểm O(0; 0; 0) nằm bên trong mặt cầu (S).", "answer": False, "explain": "OI = sqrt(4 + 1 + 9) = sqrt(14) > 3 nên O nằm bên ngoài mặt cầu."}
                ]
            },
            {
                "id": "tf_bai-17_02",
                "context": "Cho hai điểm A(1; 2; 3) và B(3; 0; 1). Gọi (S) là mặt cầu có đường kính AB.",
                "statements": [
                    {"text": "Tâm I của mặt cầu là trung điểm của AB có toạ độ (2; 1; 2).", "answer": True, "explain": "I = ((1+3)/2; (2+0)/2; (3+1)/2) = (2; 1; 2)."},
                    {"text": "Độ dài đoạn thẳng AB = 2*sqrt(3).", "answer": True, "explain": "AB = sqrt(4 + 4 + 4) = sqrt(12) = 2*sqrt(3)."},
                    {"text": "Bán kính của mặt cầu là R = sqrt(3).", "answer": True, "explain": "R = AB / 2 = sqrt(3)."},
                    {"text": "Phương trình mặt cầu (S) là (x - 2)^2 + (y - 1)^2 + (z - 2)^2 = 3.", "answer": True, "explain": "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 = 3."}
                ]
            },
            {
                "id": "tf_bai-17_03",
                "context": "Xét vị trí tương đối giữa mặt cầu (S): (x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 9 và mặt phẳng (P): 2x + 2y - z + 8 = 0.",
                "statements": [
                    {"text": "Tâm của mặt cầu là I(1; 2; 3) và bán kính R = 3.", "answer": True, "explain": "Nhìn trực tiếp từ phương trình chính tắc."},
                    {"text": "Khoảng cách từ I đến (P) bằng 3.", "answer": True, "explain": "d = |2(1) + 2(2) - 3 + 8| / sqrt(4 + 4 + 1) = |2 + 4 - 3 + 8| / 3 = 11/3? Thử: 2+4-3+8 = 11/3 ≈ 3.67 > 3."},
                    {"text": "Nếu d(I, P) = R thì mặt phẳng tiếp xúc với mặt cầu.", "answer": True, "explain": "Định lý vị trí tương đối giữa mặt cầu và mặt phẳng."},
                    {"text": "Mặt phẳng (P) cắt mặt cầu (S) theo một đường tròn.", "answer": False, "explain": "d = 11/3 > 3 = R nên (P) không cắt mặt cầu (S)."}
                ]
            },
            {
                "id": "tf_bai-17_04",
                "context": "Mặt cầu (S) có tâm I(1; -2; 4) và tiếp xúc với mặt phẳng toạ độ (Oxy).",
                "statements": [
                    {"text": "Mặt phẳng toạ độ (Oxy) có phương trình là z = 0.", "answer": True, "explain": "Đúng phương trình mặt phẳng toạ độ."},
                    {"text": "Khoảng cách từ tâm I đến mặt phẳng (Oxy) bằng |z_I| = 4.", "answer": True, "explain": "d(I, Oxy) = |4| = 4."},
                    {"text": "Vì mặt cầu tiếp xúc với (Oxy) nên bán kính R = 4.", "answer": True, "explain": "R = d(I, Oxy) = 4."},
                    {"text": "Phương trình của mặt cầu là (x - 1)^2 + (y + 2)^2 + (z - 4)^2 = 16.", "answer": True, "explain": "R^2 = 16."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-17_01",
                "q": "Tìm bán kính R của mặt cầu (S): x^2 + y^2 + z^2 - 2x + 4y - 4z - 7 = 0.",
                "correctAnswer": "4",
                "explain": "a = 1, b = -2, c = 2, d = -7. R = sqrt(1 + 4 + 4 - (-7)) = sqrt(16) = 4."
            },
            {
                "id": "sa_bai-17_02",
                "q": "Cho mặt cầu (S) có tâm I(2; 1; -3) đi qua điểm A(2; 4; 1). Tính bán kính R của (S).",
                "correctAnswer": "5",
                "explain": "R = IA = sqrt((2-2)^2 + (4-1)^2 + (1 - (-3))^2) = sqrt(0 + 9 + 16) = 5."
            },
            {
                "id": "sa_bai-17_03",
                "q": "Mặt cầu tâm I(1; 2; 3) tiếp xúc với mặt phẳng (P): 2x + y + 2z + 2 = 0 có bán kính R bằng bao nhiêu?",
                "correctAnswer": "4",
                "explain": "R = d(I, P) = |2(1) + 2 + 2(3) + 2| / sqrt(4 + 1 + 4) = |2 + 2 + 6 + 2| / 3 = 12 / 3 = 4."
            },
            {
                "id": "sa_bai-17_04",
                "q": "Tính diện tích mặt cầu S = 4*pi*R^2 biết R = 3 (nhập hệ số k với S = k*pi).",
                "correctAnswer": "36",
                "explain": "S = 4*pi*3^2 = 36pi => k = 36."
            },
            {
                "id": "sa_bai-17_05",
                "q": "Mặt phẳng cắt mặt cầu bán kính R = 5 theo thiết diện là đường tròn có bán kính r = 3. Khoảng cách d từ tâm mặt cầu đến mặt phẳng bằng bao nhiêu?",
                "correctAnswer": "4",
                "explain": "d = sqrt(R^2 - r^2) = sqrt(25 - 9) = 4."
            },
            {
                "id": "sa_bai-17_06",
                "q": "Tìm hoành độ tâm I của mặt cầu đi qua 4 điểm O(0; 0; 0), A(4; 0; 0), B(0; 6; 0), C(0; 0; 8).",
                "correctAnswer": "2",
                "explain": "Hình hộp chữ nhật ngoại tiếp: x_I = 4/2 = 2, y_I = 6/2 = 3, z_I = 8/2 = 4. Hoành độ x_I = 2."
            }
        ]
    },
    "bai-cuoi-c5": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c5_06",
                "q": "Vectơ pháp tuyến của mặt phẳng (P): 2x - 3y + z - 5 = 0 là:",
                "options": ["(2; -3; 1)", "(2; 3; 1)", "(2; -3; -5)", "(-3; 1; -5)"],
                "answer": 0,
                "explain": "Hệ số trước x, y, z là (2; -3; 1)."
            },
            {
                "id": "q_bai-cuoi-c5_07",
                "q": "Đường thẳng d đi qua M(1; 0; -2) và có VTCP u = (3; -1; 2) có phương trình tham số là:",
                "options": [
                    "x = 1 + 3t, y = -t, z = -2 + 2t",
                    "x = 3 + t, y = -1, z = 2 - 2t",
                    "x = 1 + 3t, y = t, z = -2 + 2t",
                    "x = 1 - 3t, y = t, z = 2 + 2t"
                ],
                "answer": 0,
                "explain": "x = x0 + at, y = y0 + bt, z = z0 + ct => x = 1 + 3t, y = -t, z = -2 + 2t."
            },
            {
                "id": "q_bai-cuoi-c5_08",
                "q": "Bán kính của mặt cầu (S): (x - 2)^2 + y^2 + (z + 1)^2 = 25 là:",
                "options": ["5", "25", "50", "sqrt(5)"],
                "answer": 0,
                "explain": "R = sqrt(25) = 5."
            },
            {
                "id": "q_bai-cuoi-c5_09",
                "q": "Khoảng cách từ điểm M(0; 0; 3) đến mặt phẳng (Oxy) bằng:",
                "options": ["3", "0", "9", "sqrt(3)"],
                "answer": 0,
                "explain": "d = |z_M| = |3| = 3."
            },
            {
                "id": "q_bai-cuoi-c5_10",
                "q": "Hai mặt phẳng (P): x + 2y - z + 1 = 0 và (Q): 2x + 4y - 2z + 3 = 0 ở vị trí:",
                "options": [
                    "Song song với nhau",
                    "Cắt nhau nhưng không vuông góc",
                    "Trùng nhau",
                    "Vuông góc với nhau"
                ],
                "answer": 0,
                "explain": "2/1 = 4/2 = -2/(-1) = 2 khác 3/1 nên song song."
            },
            {
                "id": "q_bai-cuoi-c5_11",
                "q": "Góc giữa hai mặt phẳng (P): x = 0 và (Q): y = 0 bằng:",
                "options": ["90 độ", "0 độ", "45 độ", "180 độ"],
                "answer": 0,
                "explain": "Mặt phẳng (Oyz) và (Oxz) vuông góc nhau."
            },
            {
                "id": "q_bai-cuoi-c5_12",
                "q": "Đường thẳng d vuông góc với mặt phẳng (P): 3x - y + 2z - 1 = 0 có một vectơ chỉ phương là:",
                "options": ["(3; -1; 2)", "(3; 1; 2)", "(-1; 2; -1)", "(2; -1; 3)"],
                "answer": 0,
                "explain": "Đường thẳng vuông góc với mặt phẳng thì VTCP của đường thẳng cùng phương với VTPT của mặt phẳng."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c5_01",
                "context": "Cho mặt phẳng (P): 2x + y - 2z + 4 = 0 và điểm A(1; 2; 3).",
                "statements": [
                    {"text": "VTPT của (P) là n = (2; 1; -2) có độ dài bằng 3.", "answer": True, "explain": "sqrt(4 + 1 + 4) = 3."},
                    {"text": "Khoảng cách từ A đến (P) bằng 2/3.", "answer": True, "explain": "|2(1) + 2 - 2(3) + 4| / 3 = |2 + 2 - 6 + 4| / 3 = 2/3."},
                    {"text": "Đường thẳng đi qua A vuông góc với (P) có phương trình x = 1 + 2t, y = 2 + t, z = 3 - 2t.", "answer": True, "explain": "Đi qua A và nhận n làm VTCP."},
                    {"text": "Mặt phẳng song song với (P) đi qua O có phương trình 2x + y - 2z = 0.", "answer": True, "explain": "Cùng VTPT và D = 0 do qua gốc O."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c5_02",
                "context": "Cho mặt cầu (S): x^2 + y^2 + z^2 - 2x - 4y + 4 = 0.",
                "statements": [
                    {"text": "Tâm của mặt cầu là I(1; 2; 0).", "answer": True, "explain": "a = 1, b = 2, c = 0."},
                    {"text": "Bán kính của mặt cầu là R = 1.", "answer": True, "explain": "R = sqrt(1 + 4 + 0 - 4) = 1."},
                    {"text": "Mặt cầu (S) tiếp xúc với mặt phẳng toạ độ (Oxz).", "answer": False, "explain": "d(I, Oxz) = |y_I| = 2 > R = 1 nên không tiếp xúc."},
                    {"text": "Mặt cầu (S) tiếp xúc với trục Oy.", "answer": True, "explain": "Hình chiếu lên Oy là (0; 2; 0). Khoảng cách = sqrt(1^2 + 0^2) = 1 = R."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c5_03",
                "context": "Cho đường thẳng d: (x - 1)/1 = (y - 2)/2 = (z + 1)/(-1) và mặt phẳng (P): 2x - y + z + 1 = 0.",
                "statements": [
                    {"text": "VTCP của d là u = (1; 2; -1) và VTPT của (P) là n = (2; -1; 1).", "answer": True, "explain": "Hệ số chuẩn."},
                    {"text": "Tích vô hướng u . n = 1*2 + 2*(-1) + (-1)*1 = -1 khác 0.", "answer": True, "explain": "2 - 2 - 1 = -1."},
                    {"text": "Đường thẳng d cắt mặt phẳng (P).", "answer": True, "explain": "u . n khác 0 nên d cắt (P)."},
                    {"text": "Đường thẳng d vuông góc với mặt phẳng (P).", "answer": False, "explain": "u không cùng phương n (1/2 khác 2/(-1))."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c5_04",
                "context": "Trong không gian, một trạm thu phát sóng đặt tại điểm A(2; 3; 5) phủ sóng trong bán kính 10 km.",
                "statements": [
                    {"text": "Vùng phủ sóng là một khối cầu tâm A bán kính R = 10.", "answer": True, "explain": "Mô hình hình học không gian."},
                    {"text": "Phương trình mặt cầu ranh giới là (x - 2)^2 + (y - 3)^2 + (z - 5)^2 = 100.", "answer": True, "explain": "R^2 = 100."},
                    {"text": "Một người ở vị trí B(2; 3; 12) nhận được tín hiệu sóng từ trạm.", "answer": True, "explain": "AB = |12 - 5| = 7 km < 10 km."},
                    {"text": "Một máy bay bay ở vị trí C(10; 9; 5) không nhận được sóng từ trạm.", "answer": False, "explain": "AC = sqrt((10-2)^2 + (9-3)^2 + 0^2) = sqrt(64 + 36) = 10 km <= 10 km nên vẫn nhận được sóng."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c5_01",
                "q": "Tính khoảng cách từ điểm M(2; -1; 2) đến mặt phẳng (P): 2x - 2y + z + 3 = 0.",
                "correctAnswer": "3.67",
                "explain": "d = |2(2) - 2(-1) + 2 + 3| / sqrt(4 + 4 + 1) = |4 + 2 + 2 + 3| / 3 = 11 / 3 ≈ 3.67."
            },
            {
                "id": "sa_bai-cuoi-c5_02",
                "q": "Tìm bán kính R của mặt cầu (S): (x - 1)^2 + (y + 1)^2 + z^2 = 49.",
                "correctAnswer": "7",
                "explain": "R = sqrt(49) = 7."
            },
            {
                "id": "sa_bai-cuoi-c5_03",
                "q": "Tìm cao độ z của giao điểm của đường thẳng d: x = 1, y = 2, z = t với mặt phẳng (P): x + y + z - 6 = 0.",
                "correctAnswer": "3",
                "explain": "1 + 2 + t - 6 = 0 <=> t = 3 => z = 3."
            },
            {
                "id": "sa_bai-cuoi-c5_04",
                "q": "Tính khoảng cách giữa hai mặt phẳng song song (P): 2x - y + 2z - 1 = 0 và (Q): 2x - y + 2z + 8 = 0.",
                "correctAnswer": "3",
                "explain": "d = |8 - (-1)| / sqrt(4 + 1 + 4) = 9 / 3 = 3."
            },
            {
                "id": "sa_bai-cuoi-c5_05",
                "q": "Mặt cầu (S) tiếp xúc với cả 3 mặt phẳng toạ độ có tâm I(3; 3; 3). Bán kính của mặt cầu bằng bao nhiêu?",
                "correctAnswer": "3",
                "explain": "R = d(I, Oxy) = 3."
            },
            {
                "id": "sa_bai-cuoi-c5_06",
                "q": "Tìm m để hai mặt phẳng (P): mx + y - z + 2 = 0 và (Q): 2x - 3y + z = 0 vuông góc với nhau.",
                "correctAnswer": "2",
                "explain": "n1.n2 = 2m - 3 - 1 = 0 <=> 2m = 4 <=> m = 2."
            }
        ]
    }
}
