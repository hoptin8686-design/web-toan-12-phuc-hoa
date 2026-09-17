# -*- coding: utf-8 -*-
"""
Dữ liệu Chương III: Các số đặc trưng đo mức độ phân tán của mẫu số liệu ghép nhóm
Bao gồm: bai-09, bai-10, bai-cuoi-c3
"""

DATA_C3 = {
    "bai-09": {
        "extra_mcq": [
            {
                "id": "q_bai-09_11",
                "q": "Khoảng biến thiên R của mẫu số liệu ghép nhóm với các nhóm từ [a1; a2) đến [ak; ak+1) là:",
                "options": [
                    "R = a_{k+1} - a_1",
                    "R = a_k - a_1",
                    "R = a_{k+1} - a_2",
                    "R = a_k - a_2"
                ],
                "answer": 0,
                "explain": "Khoảng biến thiên là hiệu giữa đầu mút phải của nhóm cuối cùng và đầu mút trái của nhóm đầu tiên: R = a_{k+1} - a_1."
            },
            {
                "id": "q_bai-09_12",
                "q": "Khoảng tứ phân vị Delta_Q của mẫu số liệu ghép nhóm được tính bằng công thức:",
                "options": [
                    "Delta_Q = Q_3 - Q_1",
                    "Delta_Q = Q_3 - Q_2",
                    "Delta_Q = Q_2 - Q_1",
                    "Delta_Q = (Q_3 - Q_1)/2"
                ],
                "answer": 0,
                "explain": "Khoảng tứ phân vị Delta_Q = Q_3 - Q_1, phản ánh mức độ phân tán của 50% số liệu chính giữa."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-09_01",
                "context": "Một bảng thống kê điểm thi thử môn Toán của 40 học sinh được ghép nhóm như sau: [4; 6): 8 em, [6; 8): 20 em, [8; 10]: 12 em.",
                "statements": [
                    {"text": "Đầu mút trái của nhóm đầu tiên là 4, đầu mút phải của nhóm cuối cùng là 10.", "answer": True, "explain": "Nhóm đầu là [4; 6) và nhóm cuối là [8; 10]."},
                    {"text": "Khoảng biến thiên của mẫu số liệu là R = 10 - 4 = 6 điểm.", "answer": True, "explain": "R = 10 - 4 = 6."},
                    {"text": "Cỡ mẫu n = 40.", "answer": True, "explain": "n = 8 + 20 + 12 = 40."},
                    {"text": "Tứ phân vị thứ nhất Q1 rơi vào nhóm [4; 6).", "answer": False, "explain": "n/4 = 10. Tần số tích lũy: nhóm 1 có 8 < 10, nên giá trị thứ 10 rơi vào nhóm 2 là [6; 8)."}
                ]
            },
            {
                "id": "tf_bai-09_02",
                "context": "Xét ý nghĩa thực tiễn của khoảng biến thiên R và khoảng tứ phân vị Delta_Q.",
                "statements": [
                    {"text": "Khoảng biến thiên R bị ảnh hưởng mạnh bởi các giá trị bất thường (ngoại lệ).", "answer": True, "explain": "Vì R chỉ phụ thuộc vào giá trị nhỏ nhất và lớn nhất."},
                    {"text": "Khoảng tứ phân vị Delta_Q đo độ phân tán của 50% số liệu trung tâm.", "answer": True, "explain": "Delta_Q = Q3 - Q1 chứa 50% số liệu ở giữa."},
                    {"text": "Khoảng tứ phân vị ít bị ảnh hưởng bởi các giá trị ngoại lệ hơn so với khoảng biến thiên.", "answer": True, "explain": "Ưu điểm cốt lõi của khoảng tứ phân vị."},
                    {"text": "Nếu Delta_Q càng lớn thì các số liệu ở giữa càng tập trung dày đặc quanh trung vị.", "answer": False, "explain": "Delta_Q càng lớn nghĩa là số liệu phân tán càng rộng, ít tập trung."}
                ]
            },
            {
                "id": "tf_bai-09_03",
                "context": "Một khảo sát về thời gian tự học mỗi ngày của học sinh lớp 12 (đơn vị: giờ) có kết quả: [0; 1): 5 em, [1; 2): 15 em, [2; 3): 20 em, [3; 4]: 10 em. Cỡ mẫu n = 50.",
                "statements": [
                    {"text": "Khoảng biến thiên của mẫu số liệu là R = 4 giờ.", "answer": True, "explain": "R = 4 - 0 = 4."},
                    {"text": "Trung vị Q2 nằm trong nhóm [2; 3).", "answer": True, "explain": "n/2 = 25. Tần số tích lũy: nhóm 1 (5), nhóm 2 (20), nhóm 3 (40) => chứa giá trị 25."},
                    {"text": "Tứ phân vị Q1 nằm trong nhóm [1; 2).", "answer": True, "explain": "n/4 = 12.5 > 5 và <= 20 => nhóm [1; 2)."},
                    {"text": "Tứ phân vị Q3 nằm trong nhóm [3; 4].", "answer": False, "explain": "3n/4 = 37.5 <= 40 (nhóm [2; 3)), nên Q3 cũng thuộc [2; 3)."}
                ]
            },
            {
                "id": "tf_bai-09_04",
                "context": "Cho mẫu số liệu ghép nhóm có Q1 = 15.2 và Q3 = 24.8.",
                "statements": [
                    {"text": "Khoảng tứ phân vị của mẫu số liệu là Delta_Q = 9.6.", "answer": True, "explain": "Delta_Q = 24.8 - 15.2 = 9.6."},
                    {"text": "Giá trị ngoại lệ bé hơn Q1 - 1.5*Delta_Q = 15.2 - 14.4 = 0.8.", "answer": True, "explain": "Q1 - 1.5*Delta_Q = 15.2 - 1.5*9.6 = 0.8."},
                    {"text": "Giá trị ngoại lệ lớn hơn Q3 + 1.5*Delta_Q = 24.8 + 14.4 = 39.2.", "answer": True, "explain": "Q3 + 1.5*Delta_Q = 24.8 + 14.4 = 39.2."},
                    {"text": "Một giá trị bằng 40 trong mẫu số liệu được coi là giá trị thông thường.", "answer": False, "explain": "40 > 39.2 nên 40 là giá trị ngoại lệ (bất thường)."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-09_01",
                "q": "Mẫu số liệu ghép nhóm có các nhóm tuổi: [20; 30), [30; 40), [40; 50), [50; 60]. Tính khoảng biến thiên R của mẫu số liệu.",
                "correctAnswer": "40",
                "explain": "R = 60 - 20 = 40."
            },
            {
                "id": "sa_bai-09_02",
                "q": "Một mẫu số liệu ghép nhóm có tứ phân vị thứ nhất Q1 = 45 và tứ phân vị thứ ba Q3 = 68. Tính khoảng tứ phân vị Delta_Q.",
                "correctAnswer": "23",
                "explain": "Delta_Q = Q3 - Q1 = 68 - 45 = 23."
            },
            {
                "id": "sa_bai-09_03",
                "q": "Cho mẫu số liệu có Q1 = 20 và Delta_Q = 12. Tìm tứ phân vị thứ ba Q3.",
                "correctAnswer": "32",
                "explain": "Q3 = Q1 + Delta_Q = 20 + 12 = 32."
            },
            {
                "id": "sa_bai-09_04",
                "q": "Một trạm khí tượng ghi nhận nhiệt độ trong ngày ghép nhóm: [18; 22), [22; 26), [26; 30), [30; 34]. Tính khoảng biến thiên R theo độ C.",
                "correctAnswer": "16",
                "unit": "độ C",
                "explain": "R = 34 - 18 = 16 độ C."
            },
            {
                "id": "sa_bai-09_05",
                "q": "Mẫu số liệu điểm kiểm tra của 20 học sinh: nhóm [5; 7) có 8 em, nhóm [7; 9] có 12 em. Tính khoảng biến thiên của mẫu.",
                "correctAnswer": "4",
                "explain": "R = 9 - 5 = 4."
            },
            {
                "id": "sa_bai-09_06",
                "q": "Biết Q1 = 10, Q3 = 25. Giá trị x nhỏ nhất thoả mãn điều kiện là giá trị ngoại lệ lớn (x > Q3 + 1.5*Delta_Q) lớn hơn bao nhiêu (nhập giá trị ngưỡng)?",
                "correctAnswer": "47.5",
                "explain": "Delta_Q = 15. Ngưỡng ngoại lệ trên = 25 + 1.5*15 = 47.5."
            }
        ]
    },
    "bai-10": {
        "extra_mcq": [
            {
                "id": "q_bai-10_11",
                "q": "Độ lệch chuẩn s của mẫu số liệu ghép nhóm có phương sai s^2 = 25 là:",
                "options": ["5", "25", "625", "12.5"],
                "answer": 0,
                "explain": "Độ lệch chuẩn là căn bậc hai của phương sai: s = sqrt(25) = 5."
            },
            {
                "id": "q_bai-10_12",
                "q": "So sánh hai lớp học có cùng điểm thi trung bình, lớp nào có độ lệch chuẩn s nhỏ hơn thì:",
                "options": [
                    "Điểm số của học sinh lớp đó đồng đều hơn",
                    "Điểm số của học sinh lớp đó chênh lệch nhiều hơn",
                    "Điểm số của học sinh lớp đó cao hơn",
                    "Không thể kết luận được"
                ],
                "answer": 0,
                "explain": "Độ lệch chuẩn càng nhỏ thì độ phân tán quanh số trung bình càng ít, nghĩa là điểm số đồng đều hơn."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-10_01",
                "context": "Xét phương sai s^2 và độ lệch chuẩn s của mẫu số liệu ghép nhóm.",
                "statements": [
                    {"text": "Phương sai luôn là một số không âm (s^2 >= 0).", "answer": True, "explain": "Phương sai là trung bình của các bình phương độ lệch nên luôn không âm."},
                    {"text": "Độ lệch chuẩn có cùng đơn vị đo với đại lượng đang xét.", "answer": True, "explain": "Ví dụ: điểm số, mét, kilôgam... độ lệch chuẩn có cùng đơn vị đo."},
                    {"text": "Phương sai có đơn vị bằng bình phương đơn vị của đại lượng đang xét.", "answer": True, "explain": "Ví dụ: m^2, kg^2..."},
                    {"text": "Nếu tất cả các giá trị trong mẫu số liệu bằng nhau thì phương sai bằng 1.", "answer": False, "explain": "Nếu tất cả bằng nhau thì không có sự phân tán nên s^2 = 0."}
                ]
            },
            {
                "id": "tf_bai-10_02",
                "context": "Hai lớp 12A và 12B có bảng điểm kiểm tra Toán với số trung bình và độ lệch chuẩn như sau: Lớp 12A: x_bar = 7.5; s = 1.2. Lớp 12B: x_bar = 7.5; s = 2.0.",
                "statements": [
                    {"text": "Điểm trung bình của hai lớp là như nhau.", "answer": True, "explain": "Cùng bằng 7.5."},
                    {"text": "Học sinh lớp 12A có kết quả học tập đồng đều hơn học sinh lớp 12B.", "answer": True, "explain": "Vì s_A = 1.2 < s_B = 2.0."},
                    {"text": "Phương sai của điểm thi lớp 12A là s^2 = 1.44.", "answer": True, "explain": "1.2^2 = 1.44."},
                    {"text": "Phương sai của điểm thi lớp 12B là s^2 = 4.0.", "answer": True, "explain": "2.0^2 = 4.0."}
                ]
            },
            {
                "id": "tf_bai-10_03",
                "context": "Để tính phương sai của mẫu số liệu ghép nhóm, người ta dùng giá trị đại diện c_i của mỗi nhóm [a_i; a_{i+1}).",
                "statements": [
                    {"text": "Giá trị đại diện của nhóm [a_i; a_{i+1}) được tính bằng c_i = (a_i + a_{i+1})/2.", "answer": True, "explain": "Trung bình cộng hai đầu mút của nhóm."},
                    {"text": "Giá trị đại diện của nhóm [10; 20) là 15.", "answer": True, "explain": "(10 + 20)/2 = 15."},
                    {"text": "Số trung bình ghép nhóm x_bar = (tổng m_i * c_i) / n.", "answer": True, "explain": "Công thức chuẩn SGK Toán 12."},
                    {"text": "Phương sai ghép nhóm s^2 luôn lớn hơn khoảng biến thiên R.", "answer": False, "explain": "Không có quy tắc này, thường s^2 nhỏ hơn nhiều so với R."}
                ]
            },
            {
                "id": "tf_bai-10_04",
                "context": "Một mẫu số liệu ghép nhóm có 2 nhóm: nhóm [0; 10) có 5 phần tử (giá trị đại diện 5), nhóm [10; 20] có 5 phần tử (giá trị đại diện 15).",
                "statements": [
                    {"text": "Cỡ mẫu n = 10.", "answer": True, "explain": "5 + 5 = 10."},
                    {"text": "Số trung bình của mẫu số liệu là x_bar = 10.", "answer": True, "explain": "(5*5 + 5*15)/10 = (25 + 75)/10 = 10."},
                    {"text": "Phương sai của mẫu số liệu là s^2 = 25.", "answer": True, "explain": "s^2 = [5*(5-10)^2 + 5*(15-10)^2]/10 = [5*25 + 5*25]/10 = 250/10 = 25."},
                    {"text": "Độ lệch chuẩn s = 5.", "answer": True, "explain": "s = sqrt(25) = 5."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-10_01",
                "q": "Tìm giá trị đại diện của nhóm điểm [6.5; 8.5).",
                "correctAnswer": "7.5",
                "explain": "(6.5 + 8.5) / 2 = 7.5."
            },
            {
                "id": "sa_bai-10_02",
                "q": "Một mẫu số liệu ghép nhóm có phương sai s^2 = 16. Tính độ lệch chuẩn s.",
                "correctAnswer": "4",
                "explain": "s = sqrt(16) = 4."
            },
            {
                "id": "sa_bai-10_03",
                "q": "Một mẫu số liệu ghép nhóm có độ lệch chuẩn s = 2.5. Tính phương sai s^2.",
                "correctAnswer": "6.25",
                "explain": "s^2 = 2.5^2 = 6.25."
            },
            {
                "id": "sa_bai-10_04",
                "q": "Cho mẫu số liệu có 2 nhóm: nhóm 1 đại diện c1 = 4 (tần số 10), nhóm 2 đại diện c2 = 6 (tần số 10). Tính số trung bình x_bar.",
                "correctAnswer": "5",
                "explain": "x_bar = (10*4 + 10*6)/20 = 100/20 = 5."
            },
            {
                "id": "sa_bai-10_05",
                "q": "Cho mẫu ở câu trên (x_bar = 5, c1 = 4, c2 = 6, m1 = m2 = 10). Tính phương sai s^2.",
                "correctAnswer": "1",
                "explain": "s^2 = [10*(4 - 5)^2 + 10*(6 - 5)^2]/20 = (10*1 + 10*1)/20 = 1."
            },
            {
                "id": "sa_bai-10_06",
                "q": "Độ lệch chuẩn của một quy trình đóng gói là s = 0.4 gam. Tính phương sai của quy trình đóng gói đó.",
                "correctAnswer": "0.16",
                "explain": "s^2 = 0.4^2 = 0.16."
            }
        ]
    },
    "bai-cuoi-c3": {
        "extra_mcq": [
            {
                "id": "q_bai-cuoi-c3_06",
                "q": "Giá trị đại diện của nhóm [20; 30) là:",
                "options": ["25", "20", "30", "10"],
                "answer": 0,
                "explain": "(20 + 30)/2 = 25."
            },
            {
                "id": "q_bai-cuoi-c3_07",
                "q": "Độ lệch chuẩn s của mẫu số liệu có phương sai s^2 = 36 là:",
                "options": ["6", "18", "72", "1296"],
                "answer": 0,
                "explain": "s = sqrt(36) = 6."
            },
            {
                "id": "q_bai-cuoi-c3_08",
                "q": "Khoảng biến thiên R của mẫu số liệu ghép nhóm từ [10; 20) đến [50; 60] là:",
                "options": ["50", "40", "60", "10"],
                "answer": 0,
                "explain": "R = 60 - 10 = 50."
            },
            {
                "id": "q_bai-cuoi-c3_09",
                "q": "Đại lượng nào sau đây KHÔNG PHẢI là số đặc trưng đo độ phân tán của mẫu số liệu ghép nhóm?",
                "options": [
                    "Số trung bình",
                    "Khoảng biến thiên",
                    "Khoảng tứ phân vị",
                    "Phương sai"
                ],
                "answer": 0,
                "explain": "Số trung bình là số đặc trưng đo xu thế trung tâm, không phải đo độ phân tán."
            },
            {
                "id": "q_bai-cuoi-c3_10",
                "q": "Cho Q1 = 12 và Q3 = 20. Khoảng tứ phân vị Delta_Q bằng:",
                "options": ["8", "16", "32", "4"],
                "answer": 0,
                "explain": "Delta_Q = Q3 - Q1 = 20 - 12 = 8."
            },
            {
                "id": "q_bai-cuoi-c3_11",
                "q": "Nếu tất cả các số liệu trong mẫu ghép nhóm đều được nhân với 2 thì độ lệch chuẩn mới sẽ:",
                "options": [
                    "Tăng gấp 2 lần",
                    "Tăng gấp 4 lần",
                    "Không đổi",
                    "Tăng gấp sqrt(2) lần"
                ],
                "answer": 0,
                "explain": "Khi nhân mẫu số liệu với hằng số k > 0 thì độ lệch chuẩn nhân với k: s_moi = 2*s."
            },
            {
                "id": "q_bai-cuoi-c3_12",
                "q": "Độ phân tán của mẫu số liệu càng nhỏ chứng tỏ:",
                "options": [
                    "Các giá trị càng tập trung gần số trung bình",
                    "Các giá trị càng tản mạn ra xa",
                    "Số trung bình càng lớn",
                    "Khoảng biến thiên càng lớn"
                ],
                "answer": 0,
                "explain": "Ý nghĩa đo độ phân tán: độ phân tán càng nhỏ thì số liệu càng tập trung quanh trung tâm."
            }
        ],
        "tf": [
            {
                "id": "tf_bai-cuoi-c3_01",
                "context": "Xét các số đặc trưng đo độ phân tán của mẫu số liệu ghép nhóm.",
                "statements": [
                    {"text": "Khoảng biến thiên R = a_{k+1} - a_1.", "answer": True, "explain": "Công thức định nghĩa khoảng biến thiên."},
                    {"text": "Khoảng tứ phân vị Delta_Q = Q3 - Q1.", "answer": True, "explain": "Công thức khoảng tứ phân vị."},
                    {"text": "Phương sai s^2 có thể nhận giá trị âm nếu số liệu có giá trị âm.", "answer": False, "explain": "Phương sai luôn không âm vì là trung bình bình phương độ lệch."},
                    {"text": "Độ lệch chuẩn s = sqrt(s^2).", "answer": True, "explain": "Độ lệch chuẩn là căn bậc hai số học của phương sai."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c3_02",
                "context": "Hai xạ thủ bắn bia có cùng điểm trung bình là 9.2. Xạ thủ A có độ lệch chuẩn s_A = 0.5; xạ thủ B có s_B = 0.8.",
                "statements": [
                    {"text": "Xạ thủ A có phong độ thi đấu ổn định hơn xạ thủ B.", "answer": True, "explain": "Độ lệch chuẩn nhỏ hơn thể hiện độ ổn định cao hơn."},
                    {"text": "Phương sai điểm bắn của xạ thủ A là 0.25.", "answer": True, "explain": "0.5^2 = 0.25."},
                    {"text": "Phương sai điểm bắn của xạ thủ B là 0.64.", "answer": True, "explain": "0.8^2 = 0.64."},
                    {"text": "Xạ thủ B bắn điểm cao hơn xạ thủ A.", "answer": False, "explain": "Hai người có điểm trung bình bằng nhau."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c3_03",
                "context": "Cho mẫu số liệu ghép nhóm có Q1 = 30 và Q3 = 50.",
                "statements": [
                    {"text": "Khoảng tứ phân vị Delta_Q = 20.", "answer": True, "explain": "50 - 30 = 20."},
                    {"text": "Ngưỡng phát hiện giá trị ngoại lệ trên là 50 + 1.5*20 = 80.", "answer": True, "explain": "Q3 + 1.5*Delta_Q = 50 + 30 = 80."},
                    {"text": "Ngưỡng phát hiện giá trị ngoại lệ dưới là 30 - 1.5*20 = 0.", "answer": True, "explain": "Q1 - 1.5*Delta_Q = 30 - 30 = 0."},
                    {"text": "Một giá trị bằng 85 trong mẫu số liệu được coi là giá trị ngoại lệ.", "answer": True, "explain": "85 > 80 nên là giá trị ngoại lệ."}
                ]
            },
            {
                "id": "tf_bai-cuoi-c3_04",
                "context": "Một mẫu số liệu ghép nhóm có n = 100, số trung bình x_bar = 50, phương sai s^2 = 16.",
                "statements": [
                    {"text": "Độ lệch chuẩn của mẫu số liệu là s = 4.", "answer": True, "explain": "sqrt(16) = 4."},
                    {"text": "Khoảng (x_bar - s; x_bar + s) là khoảng (46; 54).", "answer": True, "explain": "50 - 4 = 46 và 50 + 4 = 54."},
                    {"text": "Nếu cộng tất cả các giá trị thêm 10 đơn vị thì phương sai mới bằng 26.", "answer": False, "explain": "Tịnh tiến mẫu số liệu không làm thay đổi phương sai, s^2 vẫn bằng 16."},
                    {"text": "Nếu nhân tất cả các giá trị với 3 thì phương sai mới bằng 16 * 9 = 144.", "answer": True, "explain": "Phương sai mới = 3^2 * s^2 = 9 * 16 = 144."}
                ]
            }
        ],
        "short_answer": [
            {
                "id": "sa_bai-cuoi-c3_01",
                "q": "Mẫu số liệu ghép nhóm có nhóm đầu [15; 20) và nhóm cuối [45; 50]. Tính khoảng biến thiên R.",
                "correctAnswer": "35",
                "explain": "R = 50 - 15 = 35."
            },
            {
                "id": "sa_bai-cuoi-c3_02",
                "q": "Biết Q1 = 14.5 và Q3 = 26.5. Tính khoảng tứ phân vị Delta_Q.",
                "correctAnswer": "12",
                "explain": "Delta_Q = 26.5 - 14.5 = 12."
            },
            {
                "id": "sa_bai-cuoi-c3_03",
                "q": "Một mẫu số liệu ghép nhóm có phương sai s^2 = 49. Tính độ lệch chuẩn s.",
                "correctAnswer": "7",
                "explain": "s = sqrt(49) = 7."
            },
            {
                "id": "sa_bai-cuoi-c3_04",
                "q": "Nếu độ lệch chuẩn của mẫu là s = 1.5 thì phương sai s^2 bằng bao nhiêu?",
                "correctAnswer": "2.25",
                "explain": "s^2 = 1.5^2 = 2.25."
            },
            {
                "id": "sa_bai-cuoi-c3_05",
                "q": "Tìm giá trị đại diện của nhóm [120; 160).",
                "correctAnswer": "140",
                "explain": "(120 + 160) / 2 = 140."
            },
            {
                "id": "sa_bai-cuoi-c3_06",
                "q": "Cho Q1 = 100, Q3 = 130. Ngưỡng ngoại lệ trên (Q3 + 1.5*Delta_Q) bằng bao nhiêu?",
                "correctAnswer": "175",
                "explain": "Delta_Q = 30. Ngưỡng trên = 130 + 1.5*30 = 130 + 45 = 175."
            }
        ]
    }
}
