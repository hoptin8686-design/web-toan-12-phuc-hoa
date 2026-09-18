# -*- coding: utf-8 -*-
"""
Full theory database generator for ALL 25 lessons of Mathematics 12
(Vietnam GDPT 2018 - SGK Ket noi tri thuc voi cuoc song).
Every lesson has authentic, rigorous KaTeX formulas and clear didactic structures.
"""

import os
import sys
import io
import json

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

THEORY_DIR = r"d:\Du-an-web\web-toan-12-phuc-hoa\data\theory"
os.makedirs(THEORY_DIR, exist_ok=True)

LESSONS = {
    # ------------------ CHƯƠNG I ------------------
    "bai-01": {
        "varName": "bai01",
        "intro": "Khảo sát tính đơn điệu và cực trị của hàm số thông qua dấu của đạo hàm bậc nhất $f'(x)$ và đạo hàm bậc hai $f''(x)$.",
        "minutes": 15,
        "sections": [
            {
                "id": "tinh-don-dieu",
                "emoji": "📈",
                "heading": "1. Tính đơn điệu của hàm số",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "↗️", "title": "Hàm số đồng biến (tăng)", "text": "Nếu $f'(x) > 0$ với mọi $x \\in (a; b)$ thì hàm số $f(x)$ đồng biến trên khoảng $(a; b)$."},
                            {"emoji": "↘️", "title": "Hàm số nghịch biến (giảm)", "text": "Nếu $f'(x) < 0$ với mọi $x \\in (a; b)$ thì hàm số $f(x)$ nghịch biến trên khoảng $(a; b)$."},
                            {"emoji": "⏸️", "title": "Đạo hàm triệt tiêu hữu hạn điểm", "text": "Nếu $f'(x) \\ge 0$ (hoặc $\\le 0$) và $f'(x) = 0$ chỉ tại hữu hạn điểm thì $f(x)$ vẫn đồng biến (hoặc nghịch biến)."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Định lý mở rộng về tính đơn điệu",
                        "formula": "f'(x) \\ge 0, \\forall x \\in (a; b) \\text{ và } f'(x) = 0 \\text{ tại hữu hạn điểm} \\implies f(x) \\text{ đồng biến trên } (a; b)",
                        "note": "Áp dụng then chốt khi giải các bài toán chứa tham số $m$ để hàm số bậc ba đồng biến trên $\\mathbb{R}$."
                    }
                ]
            },
            {
                "id": "cuc-tri",
                "emoji": "⛰️",
                "heading": "2. Cực trị của hàm số",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "gold",
                        "items": [
                            {"emoji": "🔺", "title": "Điểm cực đại ($x_{CĐ}$)", "text": "$f'(x)$ đổi dấu từ DƯƠNG (+) sang ÂM (-) khi $x$ qua $x_0$."},
                            {"emoji": "🔻", "title": "Điểm cực tiểu ($x_{CT}$)", "text": "$f'(x)$ đổi dấu từ ÂM (-) sang DƯƠNG (+) khi $x$ qua $x_0$."},
                            {"emoji": "📍", "title": "Phân biệt thuật ngữ", "text": "$x_0$: điểm cực trị hàm số; $f(x_0)$: giá trị cực trị; $(x_0; f(x_0))$: điểm cực trị của đồ thị."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Dấu hiệu II nhận biết cực trị (sử dụng $f''(x)$)",
                        "formula": "\\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) < 0 \\end{cases} \\implies x_0 \\text{ là điểm cực đại}; \\qquad \\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) > 0 \\end{cases} \\implies x_0 \\text{ là điểm cực tiểu}",
                        "note": "Rất hữu hiệu khi kiểm tra nhanh các hàm lượng giác hoặc hàm đa thức đơn giản."
                    },
                    {
                        "kind": "warn",
                        "title": "Bẫy đạo hàm bằng 0 nhưng không đổi dấu",
                        "text": "Nếu $f'(x_0) = 0$ nhưng $f'(x)$ không đổi dấu khi qua $x_0$ (nghiệm bội chẵn, ví dụ hàm $y = x^3$ tại $x = 0$) thì $x_0$ KHÔNG phải là điểm cực trị!"
                    }
                ]
            }
        ],
        "summary": [
            "Dấu của $f'(x)$ quyết định tính đồng biến (dương) và nghịch biến (âm).",
            "Cực đại: $f'(x)$ đổi từ + sang -; Cực tiểu: $f'(x)$ đổi từ - sang +.",
            "Phân biệt rõ điểm cực trị hàm số $x_0$, giá trị cực trị $y_0$ và toạ độ điểm cực trị đồ thị $(x_0; y_0)$."
        ]
    },
    "bai-02": {
        "varName": "bai02",
        "intro": "Phương pháp tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số trên một đoạn $[a; b]$ hoặc trên một khoảng.",
        "minutes": 15,
        "sections": [
            {
                "id": "dinh-nghia",
                "emoji": "🎯",
                "heading": "1. Định nghĩa và Tính chất",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "leaf",
                        "items": [
                            {"emoji": "👑", "title": "GTLN: $M = \\max_{[a; b]} f(x)$", "text": "$f(x) \\le M, \\forall x \\in [a; b]$ và tồn tại $x_0 \\in [a; b]$ sao cho $f(x_0) = M$."},
                            {"emoji": "⚓", "title": "GTNN: $m = \\min_{[a; b]} f(x)$", "text": "$f(x) \\ge m, \\forall x \\in [a; b]$ và tồn tại $x_0 \\in [a; b]$ sao cho $f(x_0) = m$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Công thức tìm Max / Min trên đoạn $[a; b]$",
                        "formula": "\\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_i)\\}; \\qquad \\min_{[a; b]} f(x) = \\min\\{f(a), f(b), f(x_i)\\}",
                        "note": "Trong đó $x_i \\in (a; b)$ là các nghiệm của $f'(x) = 0$ hoặc nơi $f'(x)$ không xác định."
                    }
                ]
            },
            {
                "id": "quy-trinh",
                "emoji": "🛠️",
                "heading": "2. Quy trình 3 bước giải bài toán trên đoạn",
                "blocks": [
                    {
                        "kind": "steps",
                        "items": [
                            {"label": "Bước 1", "title": "Tính $f'(x)$ và tìm nghiệm", "text": "Giải phương trình $f'(x) = 0$, chỉ lấy các nghiệm $x_i$ thoả mãn $a < x_i < b$."},
                            {"label": "Bước 2", "title": "Tính các giá trị biên và cực trị", "text": "Tính giá trị tại 2 đầu mút $f(a), f(b)$ và các giá trị $f(x_i)$."},
                            {"label": "Bước 3", "title": "So sánh và kết luận", "text": "Số lớn nhất trong các giá trị vừa tính là GTLN, số nhỏ nhất là GTNN."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Hàm liên tục trên đoạn $[a; b]$ luôn đạt được GTLN và GTNN.",
            "Không cần lập bảng biến thiên khi tìm Max/Min trên đoạn $[a; b]$, chỉ cần so sánh các giá trị.",
            "Tìm Max/Min trên khoảng mở bắt buộc phải lập bảng biến thiên để xét giới hạn ở vô cực."
        ]
    },
    "bai-03": {
        "varName": "bai03",
        "intro": "Phương pháp xác định tiệm cận đứng, tiệm cận ngang và tiệm cận xiên của đồ thị hàm số.",
        "minutes": 15,
        "sections": [
            {
                "id": "dung-ngang",
                "emoji": "📏",
                "heading": "1. Tiệm cận đứng và Tiệm cận ngang",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Tiệm cận đứng và Tiệm cận ngang",
                        "formula": "\\lim_{x \\to x_0^\\pm} f(x) = \\pm\\infty \\implies x = x_0 \\text{ (TCĐ)}; \\qquad \\lim_{x \\to \\pm\\infty} f(x) = y_0 \\implies y = y_0 \\text{ (TCN)}",
                        "note": "Đồ thị hàm số $y = \\frac{ax+b}{cx+d}$ luôn có TCĐ: $x = -\\frac{d}{c}$ và TCN: $y = \\frac{a}{c}$."
                    }
                ]
            },
            {
                "id": "xien",
                "emoji": "📐",
                "heading": "2. Tiệm cận xiên (GDPT 2018)",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Định nghĩa và công thức tính hệ số Tiệm cận xiên $y = ax + b$",
                        "formula": "a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\quad (a \\ne 0); \\qquad b = \\lim_{x \\to \\pm\\infty} [f(x) - ax]",
                        "note": "Với phân thức bậc 2 trên bậc 1: Chia tử cho mẫu $f(x) = ax + b + \\frac{r}{cx+d} \\implies y = ax + b$ là tiệm cận xiên."
                    }
                ]
            }
        ],
        "summary": [
            "TCĐ là nghiệm của mẫu làm tử khác 0.",
            "Bậc tử $\\le$ bậc mẫu $\\implies$ có tiệm cận ngang.",
            "Bậc tử = bậc mẫu + 1 $\\implies$ đồ thị có tiệm cận xiên $y = ax + b$."
        ]
    },
    "bai-04": {
        "varName": "bai04",
        "intro": "Sơ đồ khảo sát sự biến thiên và vẽ đồ thị hàm bậc ba $y = ax^3+bx^2+cx+d$ và hàm phân thức hữu tỉ.",
        "minutes": 15,
        "sections": [
            {
                "id": "khao-sat",
                "emoji": "📊",
                "heading": "1. Sơ đồ khảo sát chuẩn",
                "blocks": [
                    {
                        "kind": "steps",
                        "items": [
                            {"label": "Bước 1", "title": "Tập xác định", "text": "Tìm tập xác định $D$ của hàm số."},
                            {"label": "Bước 2", "title": "Sự biến thiên", "text": "Tính $y'$, tìm cực trị, tính giới hạn và tiệm cận, lập bảng biến thiên hoàn chỉnh."},
                            {"label": "Bước 3", "title": "Vẽ đồ thị", "text": "Xác định giao điểm với trục toạ độ, tâm đối xứng, vẽ tiệm cận rồi nối các điểm đặc biệt."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Tâm đối xứng của đồ thị",
                        "formula": "y = ax^3+bx^2+cx+d \\implies I\\left(-\\frac{b}{3a}; y_I\\right) \\text{ (điểm uốn)}; \\quad y = \\frac{ax+b}{cx+d} \\implies I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)",
                        "note": "Đồ thị hàm bậc ba luôn nhận điểm uốn làm tâm đối xứng; hàm phân thức nhận giao điểm 2 tiệm cận làm tâm đối xứng."
                    }
                ]
            }
        ],
        "summary": [
            "Hệ số $a > 0$: nhánh ngoài cùng bên phải của đồ thị hướng lên trên.",
            "Hàm bậc ba có 2 cực trị khi phương trình $y' = 0$ có 2 nghiệm phân biệt.",
            "Hàm bậc nhất/bậc nhất không có cực trị, luôn đồng biến hoặc luôn nghịch biến trên từng khoảng xác định."
        ]
    },
    "bai-05": {
        "varName": "bai05",
        "intro": "Ứng dụng đạo hàm giải các bài toán thực tế: tối ưu hóa chi phí, doanh thu, lợi nhuận và hình học vật liệu.",
        "minutes": 15,
        "sections": [
            {
                "id": "kinh-te",
                "emoji": "💼",
                "heading": "1. Các đại lượng kinh tế vi mô",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "gold",
                        "items": [
                            {"emoji": "🏭", "title": "Chi phí biên $C'(x)$", "text": "Chi phí để sản xuất thêm 1 đơn vị sản phẩm tiếp theo: $C'(x) \\approx C(x+1) - C(x)$."},
                            {"emoji": "💵", "title": "Doanh thu biên $R'(x)$", "text": "Doanh thu tăng thêm khi bán thêm 1 đơn vị: $R(x) = x \\cdot p(x)$."},
                            {"emoji": "📈", "title": "Lợi nhuận tối đa", "text": "Lợi nhuận $P(x) = R(x) - C(x)$. Lợi nhuận cực đại khi $P'(x) = 0 \\iff R'(x) = C'(x)$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Nguyên lý tối ưu hóa kinh tế",
                        "formula": "P'(x) = 0 \\iff R'(x) = C'(x) \\quad (\\text{Doanh thu biên bằng Chi phí biên})",
                        "note": "Điểm sản xuất tối ưu mang lại lợi nhuận cao nhất cho doanh nghiệp."
                    }
                ]
            }
        ],
        "summary": [
            "Đưa bài toán thực tế về bài toán tìm Max/Min của hàm 1 biến $f(x)$ trên khoảng $(0; +\\infty)$.",
            "Lợi nhuận cực đại khi Doanh thu biên bằng Chi phí biên.",
            "Luôn chú ý điều kiện biên tự nhiên của biến số (chiều dài $x > 0$, số sản phẩm nguyên dương)."
        ]
    },
    "bai-cuoi-c1": {
        "varName": "baicuoic1",
        "intro": "Hệ thống hóa toàn bộ kiến thức Ứng dụng đạo hàm: Đơn điệu, Cực trị, Max/Min, Tiệm cận và Khảo sát hàm số.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-hop",
                "emoji": "🌟",
                "heading": "1. Tổng kết kiến thức Chương I",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bộ công thức giải tích then chốt",
                        "formula": "f'(x) \\ge 0 \\iff \\text{Đồng biến}; \\quad \\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) < 0 \\end{cases} \\implies \\text{Cực đại}; \\quad y = ax+b \\text{ (Tiệm cận xiên)}",
                        "note": "Nắm vững kỹ năng đọc đồ thị và bảng biến thiên để làm tốt phần trắc nghiệm Đúng/Sai."
                    }
                ]
            }
        ],
        "summary": [
            "Thành thạo khảo sát 3 dạng hàm: bậc ba, phân thức bậc 1/bậc 1, phân thức bậc 2/bậc 1.",
            "Vận dụng tốt quy tắc tìm GTLN, GTNN và giải bài toán thực tế tối ưu hóa."
        ]
    },

    # ------------------ CHƯƠNG II ------------------
    "bai-06": {
        "varName": "bai06",
        "intro": "Các phép toán vectơ trong không gian 3 chiều: tổng, hiệu, tích với số, quy tắc hình hộp và tích vô hướng.",
        "minutes": 15,
        "sections": [
            {
                "id": "quy-tac",
                "emoji": "📦",
                "heading": "1. Các quy tắc vectơ không gian",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "📐", "title": "Quy tắc 3 điểm", "text": "Với 3 điểm bất kỳ $A, B, C$: $\\overrightarrow{AB} + \\overrightarrow{BC} = \\overrightarrow{AC}$."},
                            {"emoji": "📦", "title": "Quy tắc hình hộp", "text": "Với hình hộp $ABCD.A'B'C'D'$: $\\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'} = \\overrightarrow{AC'}$."},
                            {"emoji": "⚖️", "title": "Trọng tâm tứ diện", "text": "Trọng tâm $G$ của tứ diện $ABCD$: $\\overrightarrow{GA} + \\overrightarrow{GB} + \\overrightarrow{GC} + \\overrightarrow{GD} = \\vec{0}$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Quy tắc hình hộp & Tích vô hướng",
                        "formula": "\\overrightarrow{AC'} = \\overrightarrow{AB} + \\overrightarrow{AD} + \\overrightarrow{AA'}; \\qquad \\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos(\\vec{a}, \\vec{b})",
                        "note": "Hai vectơ vuông góc với nhau khi và chỉ khi tích vô hướng bằng 0: $\\vec{a} \\perp \\vec{b} \\iff \\vec{a} \\cdot \\vec{b} = 0$."
                    }
                ]
            }
        ],
        "summary": [
            "Vectơ trong không gian mở rộng quy tắc hình bình hành thành quy tắc hình hộp.",
            "Ba vectơ đồng phẳng khi một vectơ biểu diễn được tuyến tính qua hai vectơ còn lại.",
            "Tích vô hướng giúp tính độ dài vectơ và góc giữa hai đường thẳng trong không gian."
        ]
    },
    "bai-07": {
        "varName": "bai07",
        "intro": "Hệ toạ độ Descartes vuông góc $Oxyz$ trong không gian: toạ độ điểm, toạ độ vectơ và các mặt phẳng toạ độ.",
        "minutes": 15,
        "sections": [
            {
                "id": "he-toa-do",
                "emoji": "🌐",
                "heading": "1. Hệ toạ độ Oxyz và toạ độ điểm",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Biểu diễn điểm và vectơ trong không gian Oxyz",
                        "formula": "M(x; y; z) \\iff \\overrightarrow{OM} = x\\vec{i} + y\\vec{j} + z\\vec{k}; \\qquad \\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A)",
                        "note": "Trong đó $\\vec{i} = (1; 0; 0), \\vec{j} = (0; 1; 0), \\vec{k} = (0; 0; 1)$ là các vectơ đơn vị của ba trục $Ox, Oy, Oz$."
                    },
                    {
                        "kind": "cards",
                        "tone": "leaf",
                        "items": [
                            {"emoji": "📌", "title": "Trung điểm đoạn thẳng", "text": "$I\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}; \\frac{z_A+z_B}{2}\\right)$."},
                            {"emoji": "📌", "title": "Trọng tâm tam giác", "text": "$G\\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}; \\frac{z_A+z_B+z_C}{3}\\right)$."},
                            {"emoji": "📌", "title": "Khoảng cách giữa hai điểm", "text": "$AB = |\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Gốc toạ độ $O(0; 0; 0)$; các mặt phẳng toạ độ: $(Oxy): z = 0$, $(Oyz): x = 0$, $(Oxz): y = 0$.",
            "Hình chiếu của $M(x; y; z)$ lên $(Oxy)$ là $(x; y; 0)$, lên trục $Oz$ là $(0; 0; z)$.",
            "Khoảng cách từ $M(x; y; z)$ đến gốc toạ độ là $OM = \\sqrt{x^2 + y^2 + z^2}$."
        ]
    },
    "bai-08": {
        "varName": "bai08",
        "intro": "Biểu thức toạ độ của các phép toán vectơ: cộng, trừ, nhân với một số, tích vô hướng, độ dài và góc.",
        "minutes": 15,
        "sections": [
            {
                "id": "phep-toan",
                "emoji": "🧮",
                "heading": "1. Biểu thức toạ độ các phép toán",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Công thức toạ độ vectơ cơ bản",
                        "formula": "\\vec{a} \\pm \\vec{b} = (x_1 \\pm x_2; y_1 \\pm y_2; z_1 \\pm z_2); \\qquad k\\vec{a} = (kx_1; ky_1; kz_1); \\qquad |\\vec{a}| = \\sqrt{x_1^2 + y_1^2 + z_1^2}",
                        "note": "Hai vectơ cùng phương: $\\vec{a} = k\\vec{b} \\iff \\frac{x_1}{x_2} = \\frac{y_1}{y_2} = \\frac{z_1}{z_2}$ (khi các mẫu khác 0)."
                    },
                    {
                        "kind": "mathBox",
                        "title": "Tích vô hướng và góc giữa hai vectơ",
                        "formula": "\\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2; \\qquad \\cos(\\vec{a}, \\vec{b}) = \\frac{x_1 x_2 + y_1 y_2 + z_1 z_2}{\\sqrt{x_1^2+y_1^2+z_1^2} \\cdot \\sqrt{x_2^2+y_2^2+z_2^2}}",
                        "note": "Điều kiện vuông góc: $\\vec{a} \\perp \\vec{b} \\iff x_1 x_2 + y_1 y_2 + z_1 z_2 = 0$."
                    }
                ]
            }
        ],
        "summary": [
            "Tích vô hướng bằng tổng các tích của các toạ độ tương ứng.",
            "Hai vectơ vuông góc khi và chỉ khi tích vô hướng bằng 0.",
            "Độ dài vectơ bằng căn bậc hai của tổng bình phương ba toạ độ."
        ]
    },
    "bai-cuoi-c2": {
        "varName": "baicuoic2",
        "intro": "Tổng kết Chương II: Phương pháp vectơ và Hệ toạ độ Oxyz giải các bài toán hình học không gian.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c2",
                "emoji": "🌟",
                "heading": "1. Tổng kết Chương II",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Hệ thống toạ độ Oxyz",
                        "formula": "\\overrightarrow{AB} = (x_B - x_A; y_B - y_A; z_B - z_A); \\quad |\\vec{a}| = \\sqrt{x^2+y^2+z^2}; \\quad \\vec{a} \\cdot \\vec{b} = x_1 x_2 + y_1 y_2 + z_1 z_2",
                        "note": "Đặt hệ trục toạ độ $Oxyz$ vào hình lập phương, hình chóp để tính góc và khoảng cách."
                    }
                ]
            }
        ],
        "summary": [
            "Nắm vững các phép toán vectơ bằng toạ độ trong không gian.",
            "Kỹ năng gắn hệ trục toạ độ $Oxyz$ vào khối đa diện cổ điển."
        ]
    },

    # ------------------ CHƯƠNG III ------------------
    "bai-09": {
        "varName": "bai09",
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
    },
    "bai-10": {
        "varName": "bai10",
        "intro": "Phương sai $s^2$ và Độ lệch chuẩn $s$ của mẫu số liệu ghép nhóm — các đại lượng đo mức độ phân tán quanh số trung bình.",
        "minutes": 15,
        "sections": [
            {
                "id": "phuong-sai-do-lech-chuan",
                "emoji": "📉",
                "heading": "1. Công thức Phương sai và Độ lệch chuẩn",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Số trung bình và Phương sai mẫu ghép nhóm",
                        "formula": "\\bar{x} = \\frac{1}{n} \\sum_{i=1}^k n_i c_i; \\qquad s^2 = \\frac{1}{n} \\sum_{i=1}^k n_i (c_i - \\bar{x})^2 = \\frac{1}{n} \\sum_{i=1}^k n_i c_i^2 - (\\bar{x})^2",
                        "note": "Trong đó $c_i = \\frac{a_{i-1} + a_i}{2}$ là giá trị đại diện của nhóm thứ $i$, $n_i$ là tần số, $n$ là cỡ mẫu."
                    },
                    {
                        "kind": "mathBox",
                        "title": "Độ lệch chuẩn",
                        "formula": "s = \\sqrt{s^2}",
                        "note": "Độ lệch chuẩn có cùng đơn vị đo với dữ liệu ban đầu, phản ánh độ phân tán thực tế quanh số trung bình."
                    }
                ]
            }
        ],
        "summary": [
            "Phương sai và độ lệch chuẩn càng nhỏ thì dữ liệu càng tập trung, độ đồng đều càng cao.",
            "Áp dụng hiệu quả để so sánh độ ổn định năng suất cây trồng, thành tích học tập, độ tin cậy của thiết bị máy móc.",
            "Có thể dùng máy tính cầm tay (chế độ Thống kê 1 biến) để tính nhanh $\\bar{x}$ và $s$."
        ]
    },
    "bai-cuoi-c3": {
        "varName": "baicuoic3",
        "intro": "Ôn tập tổng kết Chương III: Mẫu số liệu ghép nhóm, Số trung bình, Khoảng biến thiên, Tứ phân vị, Phương sai và Độ lệch chuẩn.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c3",
                "emoji": "🌟",
                "heading": "1. Tổng kết thống kê ghép nhóm",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "gold",
                        "items": [
                            {"emoji": "📌", "title": "Đo xu thế trung tâm", "text": "Số trung bình $\\bar{x}$, Trung vị $M_e = Q_2$, Mốt $M_o$."},
                            {"emoji": "📌", "title": "Đo độ phân tán", "text": "Khoảng biến thiên $R$, Khoảng tứ phân vị $\\Delta_Q$, Phương sai $s^2$, Độ lệch chuẩn $s$."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Nắm vững ý nghĩa thực tiễn của từng số đặc trưng thống kê.",
            "Phân biệt rõ bài toán so sánh chất lượng giữa 2 mẫu số liệu (nhóm có độ lệch chuẩn nhỏ hơn thì đồng đều hơn)."
        ]
    },

    # ------------------ CHƯƠNG IV ------------------
    "bai-11": {
        "varName": "bai11",
        "intro": "Định nghĩa nguyên hàm, các tính chất tuyến tính và bảng nguyên hàm của các hàm số sơ cấp cơ bản.",
        "minutes": 15,
        "sections": [
            {
                "id": "dinh-nghia-tinh-chat",
                "emoji": "∫",
                "heading": "1. Định nghĩa và Tính chất nguyên hàm",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Định nghĩa nguyên hàm",
                        "formula": "\\int f(x) dx = F(x) + C \\iff F'(x) = f(x)",
                        "note": "Nếu $F(x)$ là một nguyên hàm của $f(x)$ thì họ nguyên hàm là $F(x) + C$ ($C \\in \\mathbb{R}$)."
                    },
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "➕", "title": "Tính chất cộng trừ", "text": "$\\int [f(x) \\pm g(x)] dx = \\int f(x)dx \\pm \\int g(x)dx$."},
                            {"emoji": "✖️", "title": "Nhân với hằng số $k \\ne 0$", "text": "$\\int k f(x) dx = k \\int f(x) dx$."},
                            {"emoji": "⚡", "title": "Đạo hàm của nguyên hàm", "text": "$(\\int f(x)dx)' = f(x)$."}
                        ]
                    }
                ]
            },
            {
                "id": "bang-nguyen-ham",
                "emoji": "📜",
                "heading": "2. Bảng nguyên hàm các hàm số sơ cấp",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bảng nguyên hàm cơ bản",
                        "formula": "\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C \\quad (\\alpha \\ne -1); \\qquad \\int \\frac{1}{x} dx = \\ln|x| + C; \\qquad \\int e^x dx = e^x + C; \\qquad \\int a^x dx = \\frac{a^x}{\\ln a} + C",
                        "note": "Nguyên hàm lượng giác: $\\int \\cos x dx = \\sin x + C$; $\\int \\sin x dx = -\\cos x + C$; $\\int \\frac{dx}{\\cos^2 x} = \\tan x + C$; $\\int \\frac{dx}{\\sin^2 x} = -\\cot x + C$."
                    },
                    {
                        "kind": "mathBox",
                        "title": "Công thức mở rộng cho hàm bậc nhất $ax + b$ ($a \\ne 0$)",
                        "formula": "\\int f(ax+b) dx = \\frac{1}{a} F(ax+b) + C",
                        "note": "Ví dụ: $\\int \\cos(2x+1)dx = \\frac{1}{2}\\sin(2x+1) + C$; $\\int e^{3x}dx = \\frac{1}{3}e^{3x} + C$."
                    }
                ]
            }
        ],
        "summary": [
            "Nguyên hàm là phép toán ngược của đạo hàm: $(\\int f(x)dx)' = f(x)$.",
            "Luôn nhớ cộng thêm hằng số $C$ khi viết họ nguyên hàm.",
            "Không có công thức nguyên hàm của tích hay thương: $\\int f \\cdot g \\ne \\int f \\cdot \\int g$."
        ]
    },
    "bai-12": {
        "varName": "bai12",
        "intro": "Định nghĩa tích phân theo công thức Newton-Leibniz, các tính chất cơ bản, phương pháp đổi biến số và tích phân từng phần.",
        "minutes": 15,
        "sections": [
            {
                "id": "dinh-nghia-tich-phan",
                "emoji": "🎯",
                "heading": "1. Công thức Newton - Leibniz và Tính chất",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Công thức Newton - Leibniz",
                        "formula": "\\int_a^b f(x) dx = F(b) - F(a) = \\left. F(x) \\right|_a^b",
                        "note": "Tích phân chỉ phụ thuộc vào hàm số $f$ và các cận $a, b$, không phụ thuộc vào biến số: $\\int_a^b f(x)dx = \\int_a^b f(t)dt$."
                    },
                    {
                        "kind": "cards",
                        "tone": "leaf",
                        "items": [
                            {"emoji": "🔄", "title": "Đổi cận đảo dấu", "text": "$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$; $\\int_a^a f(x)dx = 0$."},
                            {"emoji": "🔗", "title": "Chèn cận liên tiếp", "text": "$\\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx$ với mọi $a, b, c$."},
                            {"emoji": "✨", "title": "Tuyến tính", "text": "$\\int_a^b [k f(x) + m g(x)]dx = k \\int_a^b f(x)dx + m \\int_a^b g(x)dx$."}
                        ]
                    }
                ]
            },
            {
                "id": "phuong-phap-tinh",
                "emoji": "🛠️",
                "heading": "2. Hai phương pháp tính tích phân then chốt",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Phương pháp đổi biến số & Từng phần",
                        "formula": "\\int_a^b f(u(x)) u'(x) dx = \\int_{u(a)}^{u(b)} f(u) du; \\qquad \\int_a^b u \\, dv = \\left. uv \\right|_a^b - \\int_a^b v \\, du",
                        "note": "Đổi biến số BẮT BUỘC phải đổi cận! Tích phân từng phần tuân theo thứ tự ưu tiên đặt $u$: 'Nhất log, nhì đa, tam lượng, tứ mũ'."
                    }
                ]
            }
        ],
        "summary": [
            "Tích phân là một số thực, trong khi nguyên hàm là một họ hàm số.",
            "Tích phân từng phần dùng công thức $\\int u dv = uv - \\int v du$.",
            "Đổi biến số thì phải đổi cận tương ứng từ $x$ sang $u$."
        ]
    },
    "bai-13": {
        "varName": "bai13",
        "intro": "Ứng dụng hình học của tích phân: Tính diện tích hình phẳng và thể tích khối tròn xoay.",
        "minutes": 15,
        "sections": [
            {
                "id": "dien-tich",
                "emoji": "📐",
                "heading": "1. Tính diện tích hình phẳng",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Diện tích hình phẳng giới hạn bởi đồ thị hàm số",
                        "formula": "S = \\int_a^b |f(x)| dx; \\qquad S = \\int_a^b |f(x) - g(x)| dx",
                        "note": "Khi tính diện tích giới hạn bởi 2 đồ thị, các cận $a, b$ là nghiệm của phương trình hoành độ giao điểm $f(x) = g(x)$."
                    }
                ]
            },
            {
                "id": "the-tich",
                "emoji": "🏺",
                "heading": "2. Tính thể tích khối tròn xoay",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Thể tích vật thể tròn xoay quanh trục Ox",
                        "formula": "V = \\pi \\int_a^b [f(x)]^2 dx; \\qquad V = \\pi \\int_a^b |f^2(x) - g^2(x)| dx",
                        "note": "Luôn nhớ có hệ số $\\pi$ phía trước dấu tích phân và biểu thức hàm số phải bình phương!"
                    }
                ]
            }
        ],
        "summary": [
            "Diện tích hình phẳng: tích phân trị tuyệt đối $|f(x) - g(x)|$.",
            "Thể tích quay quanh $Ox$: có hệ số $\\pi$ và bình phương hàm số $[f(x)]^2$.",
            "Ứng dụng thực tiễn để tính thể tích thùng chứa, phao cứu sinh, bình gốm sứ."
        ]
    },
    "bai-cuoi-c4": {
        "varName": "baicuoic4",
        "intro": "Ôn tập tổng kết Chương IV: Nguyên hàm, Tích phân, Ứng dụng tính diện tích hình phẳng, thể tích khối tròn xoay và chuyển động.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c4",
                "emoji": "🌟",
                "heading": "1. Hệ thống công thức Chương IV",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bộ ba công thức giải tích tích phân",
                        "formula": "\\int_a^b f(x)dx = F(b) - F(a); \\quad S = \\int_a^b |f(x) - g(x)|dx; \\quad V = \\pi \\int_a^b [f(x)]^2 dx",
                        "note": "Bài toán vận tốc - quãng đường: $s(t) = \\int v(t)dt$ và $v(t) = \\int a(t)dt$."
                    }
                ]
            }
        ],
        "summary": [
            "Nắm vững 2 kỹ thuật then chốt: Đổi biến số và Tích phân từng phần.",
            "Vận dụng tính diện tích và thể tích hình học vào các bài toán thực tiễn 2025."
        ]
    },

    # ------------------ CHƯƠNG V ------------------
    "bai-14": {
        "varName": "bai14",
        "intro": "Phương trình tổng quát của mặt phẳng trong không gian Oxyz, vectơ pháp tuyến và vị trí tương đối giữa hai mặt phẳng.",
        "minutes": 15,
        "sections": [
            {
                "id": "pt-mat-phang",
                "emoji": "📄",
                "heading": "1. Phương trình tổng quát của mặt phẳng",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Phương trình mặt phẳng đi qua điểm $M_0(x_0; y_0; z_0)$ có VTPT $\\vec{n} = (A; B; C)$",
                        "formula": "A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0 \\quad (A^2 + B^2 + C^2 > 0)",
                        "note": "Nếu mặt phẳng có cặp VTCP $\\vec{a}, \\vec{b}$ không cùng phương thì VTPT là tích có hướng $\\vec{n} = [\\vec{a}, \\vec{b}]$."
                    },
                    {
                        "kind": "mathBox",
                        "title": "Phương trình mặt phẳng theo đoạn chắn",
                        "formula": "\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1",
                        "note": "Mặt phẳng cắt 3 trục toạ độ $Ox, Oy, Oz$ lần lượt tại $A(a; 0; 0), B(0; b; 0), C(0; 0; c)$ với $a, b, c \\ne 0$."
                    }
                ]
            }
        ],
        "summary": [
            "Mặt phẳng hoàn toàn xác định khi biết 1 điểm đi qua và 1 vectơ pháp tuyến $\\vec{n}$.",
            "Hai mặt phẳng vuông góc $\\iff$ hai VTPT vuông góc: $A_1 A_2 + B_1 B_2 + C_1 C_2 = 0$.",
            "Hai mặt phẳng song song $\\iff \\frac{A_1}{A_2} = \\frac{B_1}{B_2} = \\frac{C_1}{C_2} \\ne \\frac{D_1}{D_2}$."
        ]
    },
    "bai-15": {
        "varName": "bai15",
        "intro": "Phương trình tham số và phương trình chính tắc của đường thẳng trong không gian Oxyz, vị trí tương đối giữa hai đường thẳng.",
        "minutes": 15,
        "sections": [
            {
                "id": "pt-duong-thang",
                "emoji": "📏",
                "heading": "1. Phương trình đường thẳng trong không gian",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Phương trình tham số và chính tắc của đường thẳng qua $M_0$ có VTCP $\\vec{u} = (a; b; c)$",
                        "formula": "\\begin{cases} x = x_0 + at \\\\ y = y_0 + bt \\\\ z = z_0 + ct \\end{cases} (t \\in \\mathbb{R}); \\qquad \\frac{x - x_0}{a} = \\frac{y - y_0}{b} = \\frac{z - z_0}{c} \\quad (a, b, c \\ne 0)",
                        "note": "Đường thẳng hoàn toàn xác định khi biết 1 điểm đi qua và 1 vectơ chỉ phương $\\vec{u} \\ne \\vec{0}$."
                    }
                ]
            }
        ],
        "summary": [
            "Vectơ chỉ phương $\\vec{u} = (a; b; c)$ có giá song song hoặc trùng với đường thẳng.",
            "Muốn chuyển từ PT chính tắc sang tham số: đặt các tỉ số bằng $t$ rồi rút $x, y, z$.",
            "Hai đường thẳng trong không gian có 4 vị trí tương đối: cắt nhau, song song, trùng nhau hoặc chéo nhau."
        ]
    },
    "bai-16": {
        "varName": "bai16",
        "intro": "Công thức tính khoảng cách từ điểm đến mặt phẳng và công thức tính góc giữa hai đường thẳng, đường thẳng với mặt phẳng, hai mặt phẳng.",
        "minutes": 15,
        "sections": [
            {
                "id": "khoang-cach-goc",
                "emoji": "📐",
                "heading": "1. Khoảng cách và Góc trong không gian Oxyz",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Khoảng cách từ điểm $M_0(x_0; y_0; z_0)$ đến mặt phẳng $(\\alpha): Ax+By+Cz+D=0$",
                        "formula": "d(M_0, (\\alpha)) = \\frac{|A x_0 + B y_0 + C z_0 + D|}{\\sqrt{A^2 + B^2 + C^2}}",
                        "note": "Công thức khoảng cách luôn có dấu giá trị tuyệt đối ở tử số và căn bậc hai ở mẫu số."
                    },
                    {
                        "kind": "mathBox",
                        "title": "Công thức tính các góc trong không gian",
                        "formula": "\\cos(d_1, d_2) = \\frac{|\\vec{u}_1 \\cdot \\vec{u}_2|}{|\\vec{u}_1| |\\vec{u}_2|}; \\quad \\cos((\\alpha), (\\beta)) = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|}; \\quad \\sin(d, (\\alpha)) = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}",
                        "note": "Đặc biệt chú ý: Góc giữa ĐƯỜNG THẲNG và MẶT PHẲNG dùng hàm SIN, trong khi hai góc còn lại dùng hàm COS!"
                    }
                ]
            }
        ],
        "summary": [
            "Góc trong không gian luôn nằm trong đoạn $[0^\\circ; 90^\\circ]$ nên cos và sin luôn không âm (có trị tuyệt đối ở tử).",
            "Đường thẳng và mặt phẳng: dùng $\\sin \\varphi = \\frac{|\\vec{u} \\cdot \\vec{n}|}{|\\vec{u}| |\\vec{n}|}$.",
            "Khoảng cách từ điểm đến mặt phẳng là công cụ nền tảng để viết phương trình mặt cầu tiếp xúc."
        ]
    },
    "bai-17": {
        "varName": "bai17",
        "intro": "Phương trình mặt cầu trong không gian Oxyz, toạ độ tâm, bán kính và vị trí tương đối giữa mặt cầu và mặt phẳng.",
        "minutes": 15,
        "sections": [
            {
                "id": "pt-mat-cau",
                "emoji": "⚽",
                "heading": "1. Phương trình mặt cầu",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Phương trình chính tắc và tổng quát của mặt cầu tâm $I(a; b; c)$ bán kính $R$",
                        "formula": "(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2 \\iff x^2 + y^2 + z^2 - 2ax - 2by - 2cz + d = 0",
                        "note": "Điều kiện để phương trình tổng quát là mặt cầu: $a^2 + b^2 + c^2 - d > 0$. Khi đó bán kính $R = \\sqrt{a^2 + b^2 + c^2 - d}$."
                    },
                    {
                        "kind": "cards",
                        "tone": "gold",
                        "items": [
                            {"emoji": "🚫", "title": "$d(I, (\\alpha)) > R$", "text": "Mặt phẳng và mặt cầu không có điểm chung."},
                            {"emoji": "🎯", "title": "$d(I, (\\alpha)) = R$", "text": "Mặt phẳng tiếp xúc với mặt cầu tại một điểm duy nhất (mặt phẳng tiếp diện)."},
                            {"emoji": "⭕", "title": "$d(I, (\\alpha)) < R$", "text": "Mặt phẳng cắt mặt cầu theo đường tròn giao tuyến có bán kính $r = \\sqrt{R^2 - d^2}$."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Mặt cầu hoàn toàn xác định khi biết toạ độ tâm $I(a; b; c)$ và độ dài bán kính $R > 0$.",
            "Đường kính $AB \\implies$ tâm $I$ là trung điểm $AB$ và bán kính $R = \\frac{AB}{2}$.",
            "Giao tuyến của mặt cầu và mặt phẳng khi cắt nhau là đường tròn có bán kính $r = \\sqrt{R^2 - d^2}$."
        ]
    },
    "bai-cuoi-c5": {
        "varName": "baicuoic5",
        "intro": "Tổng kết Chương V: Phương pháp toạ độ Oxyz — Mặt phẳng, Đường thẳng, Mặt cầu, Khoảng cách và Góc.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c5",
                "emoji": "🌟",
                "heading": "1. Hệ thống công thức Hình học Oxyz",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bộ tứ công thức toạ độ Oxyz then chốt",
                        "formula": "(\\alpha): Ax+By+Cz+D=0; \\quad d: \\frac{x-x_0}{a}=\\frac{y-y_0}{b}=\\frac{z-z_0}{c}; \\quad (S): (x-a)^2+(y-b)^2+(z-c)^2=R^2; \\quad d(M, (\\alpha)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}",
                        "note": "Nắm vững kỹ năng lập phương trình hình học và xác định toạ độ giao điểm."
                    }
                ]
            }
        ],
        "summary": [
            "Mặt phẳng gắn liền với vectơ pháp tuyến $\\vec{n}$; Đường thẳng gắn liền với vectơ chỉ phương $\\vec{u}$.",
            "Góc giữa đường thẳng và mặt phẳng dùng hàm SIN; khoảng cách dùng công thức trị tuyệt đối."
        ]
    },

    # ------------------ CHƯƠNG VI ------------------
    "bai-18": {
        "varName": "bai18",
        "intro": "Khái niệm xác suất có điều kiện $P(A|B)$, quy tắc nhân xác suất và điều kiện độc lập của hai biến cố.",
        "minutes": 15,
        "sections": [
            {
                "id": "xac-suat-co-dieu-kien",
                "emoji": "🎲",
                "heading": "1. Xác suất có điều kiện và Quy tắc nhân",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Định nghĩa Xác suất có điều kiện và Quy tắc nhân",
                        "formula": "P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0) \\implies P(A \\cap B) = P(B) \\cdot P(A|B) = P(A) \\cdot P(B|A)",
                        "note": "$P(A|B)$ là xác suất xảy ra biến cố $A$ khi biết biến cố $B$ đã xảy ra."
                    },
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "🤝", "title": "Hai biến cố độc lập", "text": "Hai biến cố $A$ và $B$ độc lập khi và chỉ khi: $P(A \\cap B) = P(A) \\cdot P(B)$."},
                            {"emoji": "💡", "title": "Tính chất độc lập", "text": "Khi $A, B$ độc lập thì việc $B$ xảy ra không ảnh hưởng đến xác suất của $A$: $P(A|B) = P(A)$."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Xác suất có điều kiện thu hẹp không gian mẫu ban đầu $\\Omega$ về không gian biến cố điều kiện $B$.",
            "Quy tắc nhân xác suất áp dụng cho các phép thử liên tiếp hoặc phụ thuộc nhau.",
            "Hai biến cố độc lập thì xác suất tích bằng tích các xác suất."
        ]
    },
    "bai-19": {
        "varName": "bai19",
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
    },
    "bai-cuoi-c6": {
        "varName": "baicuoic6",
        "intro": "Tổng kết Chương VI: Xác suất có điều kiện, Công thức nhân, Xác suất toàn phần, Công thức Bayes và Ứng dụng thực tiễn.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c6",
                "emoji": "🌟",
                "heading": "1. Hệ thống công thức Xác suất 12",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bộ ba công thức xác suất then chốt 2025",
                        "formula": "P(A|B) = \\frac{P(AB)}{P(B)}; \\quad P(B) = \\sum_{i=1}^n P(A_i)P(B|A_i); \\quad P(A_k|B) = \\frac{P(A_k)P(B|A_k)}{P(B)}",
                        "note": "Xác suất là nội dung mới và rất thực tế trong kỳ thi Tốt nghiệp THPT theo chương trình GDPT 2018."
                    }
                ]
            }
        ],
        "summary": [
            "Phân biệt rõ bài toán xác suất thông thường và xác suất có điều kiện.",
            "Thành thạo sơ đồ cây để tính xác suất toàn phần và công thức Bayes một cách trực quan, chính xác."
        ]
    }
}

def generate_all():
    count = 0
    for lid, data in LESSONS.items():
        vname = data["varName"]
        t_data = {
            "intro": data["intro"],
            "minutes": data["minutes"],
            "sections": data["sections"],
            "summary": data["summary"]
        }
        content = f"""import type {{ LessonTheory }} from "@/lib/types";

const {vname}: LessonTheory = {json.dumps(t_data, ensure_ascii=False, indent=2)};

export default {vname};
"""
        filepath = os.path.join(THEORY_DIR, f"{lid}.ts")
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        count += 1
        print(f"[{count}/25] Đã cập nhật thành công lý thuyết chuẩn KaTeX cho {lid}")

    print(f"\nHOÀN TẤT: Đã tạo và chuẩn hóa toàn bộ 25 tệp lý thuyết Toán 12 với công thức KaTeX chuẩn GDPT 2018!")

if __name__ == "__main__":
    generate_all()
