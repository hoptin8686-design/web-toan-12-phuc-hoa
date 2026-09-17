# -*- coding: utf-8 -*-
"""
Dữ liệu Chương VI: Xác suất có điều kiện
Bao gồm: bai-18, bai-19, bai-cuoi-c6
"""

DATA_C6 = {
    "bai-18": {
        "extra_mcq": [
            {
                "id": "q_bai-18_11",
                "q": "Cho hai biến cố A và B độc lập với nhau, P(A) = 0.4 và P(B) = 0.5. Tính xác suất P(AB).",
                "options": ["0.2", "0.9", "0.1", "0.8"],
                "answer": 0,
                "explain": "Hai biến cố độc lập nên P(AB) = P(A) * P(B) = 0.4 * 0.5 = 0.2."
            },
            {
                "id": "q_bai-18_12",
                "q": "Cho P(B) = 0.6 và P(A|B) = 0.7. Xác suất P(AB) bằng:",
                "options": ["0.42", "0.13", "0.76", "0.85"],
                "answer": 0,
                "explain": "Theo công thức nhân xác suất: P(AB) = P(B) * P(A|B) = 0.6 * 0.7 = 0.42."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-18_01",
                "context": "Xét hai biến cố A và B trong một phép thử ngẫu nhiên với P(B) > 0.",
                "statements": [
                    {"text": "Xác suất của biến cố A với điều kiện B đã xảy ra là P(A|B) = P(AB) / P(B).", "answer": True, "explain": "Định nghĩa chuẩn của xác suất có điều kiện."},
                    {"text": "Xác suất P(A|B) luôn thoả mãn 0 <= P(A|B) <= 1.", "answer": True, "explain": "Tính chất cơ bản của xác suất."},
                    {"text": "Nếu A và B xung khắc (AB = rỗng) thì P(A|B) = 0.", "answer": True, "explain": "P(AB) = 0 nên P(A|B) = 0."},
                    {"text": "P(A|B) luôn bằng P(B|A).", "answer": False, "explain": "P(A|B) và P(B|A) thường khác nhau (trừ khi P(A) = P(B))."}
                ]
            },
            {
                "id": "tf_bai-18_02",
                "context": "Gieo một con xúc xắc cân đối và đồng chất. Gọi A là biến cố 'xuất hiện mặt chẵn', B là biến cố 'xuất hiện mặt có số chấm lớn hơn 3'.",
                "statements": [
                    {"text": "Không gian mẫu có 6 phần tử Omega = {1, 2, 3, 4, 5, 6}.", "answer": True, "explain": "6 mặt của xúc xắc."},
                    {"text": "Biến cố A = {2, 4, 6} có P(A) = 1/2.", "answer": True, "explain": "3 / 6 = 1/2."},
                    {"text": "Biến cố B = {4, 5, 6} có P(B) = 1/2.", "answer": True, "explain": "3 / 6 = 1/2."},
                    {"text": "Xác suất có điều kiện P(A|B) = 2/3.", "answer": True, "explain": "AB = {4, 6} (2 phần tử). P(A|B) = P(AB)/P(B) = (2/6) / (3/6) = 2/3."}
                ]
            },
            {
                "id": "tf_bai-18_03",
                "context": "Một hộp có 10 tấm thẻ cùng loại được đánh số từ 1 đến 10. Rút ngẫu nhiên một tấm thẻ. Gọi A: 'Rút được số nguyên tố', B: 'Rút được số lẻ'.",
                "statements": [
                    {"text": "Biến cố A gồm các số {2, 3, 5, 7} nên P(A) = 4/10 = 0.4.", "answer": True, "explain": "Các số nguyên tố từ 1 đến 10."},
                    {"text": "Biến cố B gồm các số {1, 3, 5, 7, 9} nên P(B) = 5/10 = 0.5.", "answer": True, "explain": "5 số lẻ trong 10 số."},
                    {"text": "Biến cố giao AB gồm các số {3, 5, 7} nên P(AB) = 3/10 = 0.3.", "answer": True, "explain": "Số vừa lẻ vừa nguyên tố."},
                    {"text": "Xác suất P(A|B) bằng 0.75.", "answer": False, "explain": "P(A|B) = P(AB)/P(B) = 0.3 / 0.5 = 0.6 khác 0.75."}
                ]
            },
            {
                "id": "tf_bai-18_04",
                "context": "Một trường THPT có 60% học sinh đi học bằng xe đạp và 40% đi bộ. Trong số học sinh đi xe đạp có 5% đến muộn; trong số học sinh đi bộ có 10% đến muộn.",
                "statements": [
                    {"text": "Gọi D là biến cố đi xe đạp, B là đi bộ thì {D, B} là một hệ biến cố đầy đủ.", "answer": True, "explain": "Mỗi học sinh thuộc một trong hai nhóm và P(D) + P(B) = 1."},
                    {"text": "P(M|D) = 0.05 và P(M|B) = 0.10 với M là biến cố đến muộn.", "answer": True, "explain": "Theo giả thiết bài toán."},
                    {"text": "Xác suất một học sinh vừa đi xe đạp vừa đến muộn là P(DM) = 0.03.", "answer": True, "explain": "P(DM) = P(D) * P(M|D) = 0.60 * 0.05 = 0.03."},
                    {"text": "Xác suất một học sinh vừa đi bộ vừa đến muộn là P(BM) = 0.06.", "answer": False, "explain": "P(BM) = P(B) * P(M|B) = 0.40 * 0.10 = 0.04 khác 0.06."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-18_01",
                "q": "Cho P(A) = 0.5, P(B) = 0.4 và P(AB) = 0.2. Tính xác suất P(A|B).",
                "correctAnswer": "0.5",
                "explain": "P(A|B) = P(AB) / P(B) = 0.2 / 0.4 = 0.5."
            },
            {
                "id": "sa_bai-18_02",
                "q": "Cho P(A) = 0.6, P(B) = 0.3 và A, B là hai biến cố độc lập. Tính P(B|A).",
                "correctAnswer": "0.3",
                "explain": "Khi A và B độc lập thì P(B|A) = P(B) = 0.3."
            },
            {
                "id": "sa_bai-18_03",
                "q": "Gieo đồng tiền cân đối 2 lần. Tính xác suất để lần thứ hai xuất hiện mặt ngửa biết lần thứ nhất đã xuất hiện mặt ngửa.",
                "correctAnswer": "0.5",
                "explain": "Hai lần gieo độc lập nên xác suất lần 2 ngửa vẫn là 1/2 = 0.5."
            },
            {
                "id": "sa_bai-18_04",
                "q": "Một hộp có 4 viên bi đỏ và 6 viên bi xanh. Lấy lần lượt 2 viên bi không hoàn lại. Tính xác suất để viên thứ hai màu đỏ biết viên thứ nhất màu đỏ.",
                "correctAnswer": "0.33",
                "explain": "Sau khi lấy 1 viên đỏ, trong hộp còn 3 đỏ và 6 xanh (tổng 9 viên). P = 3/9 = 1/3 ≈ 0.33."
            },
            {
                "id": "sa_bai-18_05",
                "q": "Cho P(B) = 0.8 và P(AB) = 0.56. Tính P(A|B).",
                "correctAnswer": "0.7",
                "explain": "P(A|B) = 0.56 / 0.8 = 0.7."
            },
            {
                "id": "sa_bai-18_06",
                "q": "Một lớp có 40 học sinh gồm 25 nam và 15 nữ. Chọn ngẫu nhiên 1 bạn làm lớp trưởng. Biết bạn được chọn là nam, tính xác suất để bạn đó giỏi Toán (biết có 10 nam giỏi Toán).",
                "correctAnswer": "0.4",
                "explain": "P = 10 / 25 = 0.4."
            }
        ]
    },
    "bai-19": {
        "extra_mcq": [
            {
                "id": "q_bai-19_11",
                "q": "Hệ hai biến cố {A, \overline{A}} có tính chất nào sau đây?",
                "options": [
                    "Là một hệ biến cố đầy đủ",
                    "Hai biến cố độc lập",
                    "Hai biến cố bằng nhau",
                    "Có tích P(A)*P(\overline{A}) = 1"
                ],
                "answer": 0,
                "explain": "A và A đối xung khắc nhau và hợp thành không gian mẫu nên tạo thành một hệ biến cố đầy đủ."
            },
            {
                "id": "q_bai-19_12",
                "q": "Công thức xác suất toàn phần với hệ đầy đủ {A1, A2} là:",
                "options": [
                    "P(B) = P(A1)*P(B|A1) + P(A2)*P(B|A2)",
                    "P(B) = P(A1)*P(A2)",
                    "P(B) = P(B|A1) + P(B|A2)",
                    "P(B) = P(A1)*P(B) + P(A2)*P(B)"
                ],
                "answer": 0,
                "explain": "Công thức xác suất toàn phần chuẩn trong SGK Toán 12."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-19_01",
                "context": "Xét một nhà máy có 2 phân xưởng sản xuất bóng đèn. Phân xưởng I sản xuất 60% sản phẩm với tỉ lệ phế phẩm 2%. Phân xưởng II sản xuất 40% sản phẩm với tỉ lệ phế phẩm 3%. Lấy ngẫu nhiên một bóng đèn.",
                "statements": [
                    {"text": "Gọi A1 là biến cố bóng lấy từ PX I thì P(A1) = 0.6.", "answer": True, "explain": "PX I sản xuất 60% sản phẩm."},
                    {"text": "Gọi A2 là biến cố bóng lấy từ PX II thì P(A2) = 0.4.", "answer": True, "explain": "PX II sản xuất 40% sản phẩm."},
                    {"text": "Xác suất bóng là phế phẩm theo công thức toàn phần là P(B) = 0.6*0.02 + 0.4*0.03 = 0.024.", "answer": True, "explain": "0.012 + 0.012 = 0.024 (tức 2.4%)."},
                    {"text": "Nếu lấy được bóng hỏng, xác suất nó do PX I sản xuất tính theo Bayes là 0.5.", "answer": True, "explain": "P(A1|B) = P(A1*B) / P(B) = 0.012 / 0.024 = 0.5."}
                ]
            },
            {
                "id": "tf_bai-19_02",
                "context": "Một xét nghiệm y khoa chẩn đoán bệnh X có độ nhạy 95% (người có bệnh xét nghiệm dương tính là 95%) và độ đặc hiệu 90% (người không bệnh xét nghiệm âm tính là 90%). Tỉ lệ mắc bệnh trong cộng đồng là 1%.",
                "statements": [
                    {"text": "Xác suất người được chọn mắc bệnh là P(B) = 0.01.", "answer": True, "explain": "Tỉ lệ mắc bệnh 1%."},
                    {"text": "Xác suất người không mắc bệnh là P(B_ngang) = 0.99.", "answer": True, "explain": "1 - 0.01 = 0.99."},
                    {"text": "Xác suất xét nghiệm dương tính khi không có bệnh là 10% (0.10).", "answer": True, "explain": "1 - 0.90 = 0.10."},
                    {"text": "Một người có kết quả dương tính thì chắc chắn 100% người đó bị bệnh.", "answer": False, "explain": "Theo Bayes, xác suất thực sự mắc bệnh khi dương tính chỉ khoảng 8.8% do tỉ lệ người lành giả dương tính lớn."}
                ]
            },
            {
                "id": "tf_bai-19_03",
                "context": "Cho hệ biến cố đầy đủ {A1, A2, A3} với P(A1) = 0.2, P(A2) = 0.5, P(A3) = 0.3. Biến cố B thoả mãn P(B|A1) = 0.1, P(B|A2) = 0.2, P(B|A3) = 0.3.",
                "statements": [
                    {"text": "P(A1) + P(A2) + P(A3) = 1.", "answer": True, "explain": "0.2 + 0.5 + 0.3 = 1."},
                    {"text": "P(A1)*P(B|A1) = 0.02.", "answer": True, "explain": "0.2 * 0.1 = 0.02."},
                    {"text": "Xác suất P(B) = 0.02 + 0.10 + 0.09 = 0.21.", "answer": True, "explain": "Tổng 0.2*0.1 + 0.5*0.2 + 0.3*0.3 = 0.21."},
                    {"text": "Xác suất hậu nghiệm P(A3|B) = 0.09 / 0.21 ≈ 0.43.", "answer": True, "explain": "Theo công thức Bayes: 0.09 / 0.21 ≈ 0.4286."}
                ]
            },
            {
                "id": "tf_bai-19_04",
                "context": "Xét công thức Bayes P(Ai|B) = [P(Ai)*P(B|Ai)] / P(B).",
                "statements": [
                    {"text": "Các xác suất P(Ai) được gọi là các xác suất tiên nghiệm (trước khi có thông tin B).", "answer": True, "explain": "Khái niệm xác suất tiên nghiệm (prior probability)."},
                    {"text": "Xác suất P(Ai|B) được gọi là xác suất hậu nghiệm (sau khi đã quan sát thấy B).", "answer": True, "explain": "Khái niệm xác suất hậu nghiệm (posterior probability)."},
                    {"text": "Mẫu số P(B) được tính thông qua công thức xác suất toàn phần.", "answer": True, "explain": "P(B) = tổng P(Ai)*P(B|Ai)."},
                    {"text": "Công thức Bayes chỉ áp dụng được khi các biến cố Ai độc lập với nhau.", "answer": False, "explain": "Công thức áp dụng cho bất kỳ hệ biến cố đầy đủ nào (xung khắc từng đôi và hợp lại là không gian mẫu)."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-19_01",
                "q": "Một lô hàng gồm 70% sản phẩm loại I và 30% sản phẩm loại II. Tỉ lệ phế phẩm của loại I là 1%, loại II là 2%. Tính tỉ lệ phế phẩm chung của lô hàng theo phần trăm (%).",
                "correctAnswer": "1.3",
                "unit": "%",
                "explain": "P = 0.70 * 0.01 + 0.30 * 0.02 = 0.007 + 0.006 = 0.013 = 1.3%."
            },
            {
                "id": "sa_bai-19_02",
                "q": "Cho hệ đầy đủ {A, B} với P(A) = 0.6, P(B) = 0.4. Biết P(C|A) = 0.2 và P(C|B) = 0.5. Tính xác suất P(C).",
                "correctAnswer": "0.32",
                "explain": "P(C) = 0.6*0.2 + 0.4*0.5 = 0.12 + 0.20 = 0.32."
            },
            {
                "id": "sa_bai-19_03",
                "q": "Ở bài toán trên, biết C đã xảy ra, tính xác suất để biến cố A xảy ra P(A|C) (làm tròn 2 chữ số thập phân).",
                "correctAnswer": "0.38",
                "explain": "P(A|C) = P(A)*P(C|A) / P(C) = 0.12 / 0.32 = 0.375 ≈ 0.38."
            },
            {
                "id": "sa_bai-19_04",
                "q": "Một hộp có 3 bi trắng và 2 bi đen. Hộp 2 có 4 bi trắng và 1 bi đen. Chọn ngẫu nhiên 1 hộp rồi rút 1 bi. Tính xác suất rút được bi trắng.",
                "correctAnswer": "0.7",
                "explain": "P = 0.5 * (3/5) + 0.5 * (4/5) = 0.5 * (7/5) = 0.7."
            },
            {
                "id": "sa_bai-19_05",
                "q": "Một thiết bị có 2 linh kiện A và B hoạt động độc lập. Xác suất A hỏng là 0.1, B hỏng là 0.2. Tính xác suất cả 2 linh kiện đều không hỏng.",
                "correctAnswer": "0.72",
                "explain": "P = (1 - 0.1) * (1 - 0.2) = 0.9 * 0.8 = 0.72."
            },
            {
                "id": "sa_bai-19_06",
                "q": "Một bệnh hiếm có tỉ lệ mắc là 0.001. Xét nghiệm có độ chính xác 99% cho cả người bệnh và người lành. Xác suất một người dương tính thực sự mắc bệnh xấp xỉ bằng bao nhiêu (làm tròn 2 chữ số thập phân)?",
                "correctAnswer": "0.09",
                "explain": "P(D) = 0.001*0.99 + 0.999*0.01 ≈ 0.00099 + 0.00999 = 0.01098. P(B|D) = 0.00099 / 0.01098 ≈ 0.09 (9%)."
            }
        ]
    },
    "bai-cuoi-c6": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c6_06",
                "q": "Cho hai biến cố A và B độc lập với P(A) = 0.3, P(B) = 0.6. Tính P(A U B).",
                "options": ["0.72", "0.90", "0.18", "0.82"],
                "answer": 0,
                "explain": "P(A U B) = P(A) + P(B) - P(AB) = 0.3 + 0.6 - (0.3*0.6) = 0.9 - 0.18 = 0.72."
            },
            {
                "id": "q_bai-cuoi-c6_07",
                "q": "Công thức Bayes dùng để làm gì?",
                "options": [
                    "Cập nhật xác suất của các biến cố nguyên nhân khi đã biết kết quả",
                    "Tính diện tích hình phẳng",
                    "Đo độ phân tán của mẫu số liệu",
                    "Khảo sát sự biến thiên của hàm số"
                ],
                "answer": 0,
                "explain": "Ý nghĩa công thức Bayes: đánh giá lại xác suất các giả thuyết (nguyên nhân) khi có bằng chứng mới."
            },
            {
                "id": "q_bai-cuoi-c6_08",
                "q": "Nếu P(A|B) = 1 thì điều gì xảy ra?",
                "options": [
                    "B là biến cố con của A",
                    "A là biến cố rỗng",
                    "A và B xung khắc",
                    "P(A) = 0"
                ],
                "answer": 0,
                "explain": "P(A|B) = 1 <=> P(AB) = P(B) <=> B con A."
            },
            {
                "id": "q_bai-cuoi-c6_09",
                "q": "Cho P(A) = 0.7. Xác suất của biến cố đối P(\overline{A}) là:",
                "options": ["0.3", "0.7", "0", "1"],
                "answer": 0,
                "explain": "P(\overline{A}) = 1 - P(A) = 1 - 0.7 = 0.3."
            },
            {
                "id": "q_bai-cuoi-c6_10",
                "q": "Một hộp có 5 bi xanh và 5 bi đỏ. Rút 2 bi lần lượt không hoàn lại. Xác suất cả 2 bi cùng màu đỏ là:",
                "options": ["2/9", "1/4", "1/2", "5/18"],
                "answer": 0,
                "explain": "P = (5/10) * (4/9) = 20 / 90 = 2/9."
            },
            {
                "id": "q_bai-cuoi-c6_11",
                "q": "Hai xạ thủ bắn vào bia độc lập nhau với xác suất trúng lần lượt là 0.8 và 0.7. Xác suất có ít nhất 1 người bắn trúng là:",
                "options": ["0.94", "0.56", "0.86", "0.75"],
                "answer": 0,
                "explain": "Xác suất cả 2 cùng trượt = (1 - 0.8)*(1 - 0.7) = 0.2 * 0.3 = 0.06. Có ít nhất 1 người trúng = 1 - 0.06 = 0.94."
            },
            {
                "id": "q_bai-cuoi-c6_12",
                "q": "Cho hệ đầy đủ {A1, A2, A3} với P(A1) = 0.3, P(A2) = 0.3. Tìm P(A3).",
                "options": ["0.4", "0.6", "0.3", "0.1"],
                "answer": 0,
                "explain": "Tổng xác suất của hệ đầy đủ bằng 1: P(A3) = 1 - 0.3 - 0.3 = 0.4."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c6_01",
                "context": "Xét các tính chất cơ bản của xác suất có điều kiện và độc lập.",
                "statements": [
                    {"text": "P(A|B) = P(AB) / P(B) với điều kiện P(B) > 0.", "answer": True, "explain": "Công thức xác suất có điều kiện."},
                    {"text": "Nếu A và B độc lập thì P(A|B) = P(A).", "answer": True, "explain": "Điều kiện cần và đủ của tính độc lập."},
                    {"text": "Nếu A và B độc lập thì P(AB) = P(A) * P(B).", "answer": True, "explain": "Quy tắc nhân cho hai biến cố độc lập."},
                    {"text": "Hai biến cố xung khắc có xác suất dương thì luôn độc lập với nhau.", "answer": False, "explain": "Hai biến cố xung khắc P(AB) = 0 ≠ P(A)*P(B) nên KHÔNG BAO GIỜ độc lập."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c6_02",
                "context": "Một công ty bảo hiểm thấy rằng 20% khách hàng thuộc nhóm nguy cơ cao (xác suất xảy ra tai nạn trong năm là 0.1) và 80% thuộc nhóm nguy cơ thấp (xác suất tai nạn trong năm là 0.02).",
                "statements": [
                    {"text": "Xác suất một khách hàng ngẫu nhiên bị tai nạn trong năm là P(T) = 0.2*0.1 + 0.8*0.02 = 0.036.", "answer": True, "explain": "0.02 + 0.016 = 0.036 (3.6%)."},
                    {"text": "Biết một khách hàng vừa gặp tai nạn, xác suất người này thuộc nhóm nguy cơ cao là 0.02 / 0.036 ≈ 55.6%.", "answer": True, "explain": "Theo Bayes: 0.02 / 0.036 ≈ 0.5556."},
                    {"text": "Số vụ tai nạn xuất phát từ nhóm nguy cơ thấp nhiều hơn nhóm nguy cơ cao.", "answer": False, "explain": "0.016 (nguy cơ thấp) < 0.020 (nguy cơ cao)."},
                    {"text": "Nếu một người không bị tai nạn thì chắc chắn người đó thuộc nhóm nguy cơ thấp.", "answer": False, "explain": "Người nhóm nguy cơ cao vẫn có 90% không bị tai nạn."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c6_03",
                "context": "Có hai hộp bi: Hộp 1 chứa 3 bi đỏ và 7 bi trắng; Hộp 2 chứa 6 bi đỏ và 4 bi trắng. Tung đồng xu cân đối: nếu ngửa chọn Hộp 1, nếu sấp chọn Hộp 2, sau đó lấy 1 viên bi.",
                "statements": [
                    {"text": "Xác suất chọn mỗi hộp là 1/2.", "answer": True, "explain": "Đồng xu cân đối."},
                    {"text": "Xác suất lấy được bi đỏ nếu chọn Hộp 1 là 3/10 = 0.3.", "answer": True, "explain": "3 đỏ trên tổng 10 viên."},
                    {"text": "Xác suất lấy được bi đỏ chung là P(Đỏ) = 0.5*0.3 + 0.5*0.6 = 0.45.", "answer": True, "explain": "0.15 + 0.30 = 0.45."},
                    {"text": "Biết lấy được bi đỏ, xác suất bi đó đến từ Hộp 2 là 2/3.", "answer": True, "explain": "P(H2|Đỏ) = (0.5 * 0.6) / 0.45 = 0.30 / 0.45 = 2/3 ≈ 0.67."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c6_04",
                "context": "Một hệ thống máy tính có bộ phận phát hiện thư rác (spam). 80% email là thư rác, 20% là thư thường. Bộ lọc gắn nhãn đúng thư rác với xác suất 95% và nhầm thư thường thành rác với xác suất 5%.",
                "statements": [
                    {"text": "Tỉ lệ thư rác là P(S) = 0.8; thư thường P(L) = 0.2.", "answer": True, "explain": "Theo giả thiết."},
                    {"text": "Tỉ lệ một bức thư bất kỳ bị gắn nhãn rác là 0.8*0.95 + 0.2*0.05 = 0.77.", "answer": True, "explain": "0.76 + 0.01 = 0.77."},
                    {"text": "Nếu một thư bị gắn nhãn rác, xác suất nó thực sự là thư rác bằng 0.76 / 0.77 ≈ 98.7%.", "answer": True, "explain": "Theo Bayes: 0.76 / 0.77 ≈ 0.987."},
                    {"text": "Xác suất một bức thư thường bị phân loại nhầm là 20%.", "answer": False, "explain": "Xác suất nhầm thư thường thành rác chỉ là 5% (0.05)."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c6_01",
                "q": "Cho hai biến cố độc lập A và B có P(A) = 0.4 và P(B) = 0.5. Tính xác suất P(AB).",
                "correctAnswer": "0.2",
                "explain": "0.4 * 0.5 = 0.2."
            },
            {
                "id": "sa_bai-cuoi-c6_02",
                "q": "Cho P(A) = 0.6 và P(AB) = 0.18. Tính P(B|A).",
                "correctAnswer": "0.3",
                "explain": "P(B|A) = 0.18 / 0.6 = 0.3."
            },
            {
                "id": "sa_bai-cuoi-c6_03",
                "q": "Hai người cùng bắn vào 1 mục tiêu độc lập với xác suất trúng là 0.7 và 0.8. Tính xác suất để cả 2 cùng bắn trúng.",
                "correctAnswer": "0.56",
                "explain": "0.7 * 0.8 = 0.56."
            },
            {
                "id": "sa_bai-cuoi-c6_04",
                "q": "Một hệ đầy đủ gồm {A, B} với P(A) = 0.3, P(B) = 0.7. Biết P(D|A) = 0.1 và P(D|B) = 0.2. Tính xác suất P(D).",
                "correctAnswer": "0.17",
                "explain": "0.3*0.1 + 0.7*0.2 = 0.03 + 0.14 = 0.17."
            },
            {
                "id": "sa_bai-cuoi-c6_05",
                "q": "Tung đồng xu cân đối 3 lần. Tính xác suất cả 3 lần đều xuất hiện mặt sấp (nhập dạng số thập phân).",
                "correctAnswer": "0.125",
                "explain": "(1/2)^3 = 1/8 = 0.125."
            },
            {
                "id": "sa_bai-cuoi-c6_06",
                "q": "Cho P(A) = 0.5, P(B) = 0.3 và P(A U B) = 0.7. Tính xác suất P(AB).",
                "correctAnswer": "0.1",
                "explain": "P(AB) = P(A) + P(B) - P(A U B) = 0.5 + 0.3 - 0.7 = 0.1."
            }
        ]
    }
}
