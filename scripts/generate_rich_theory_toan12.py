# -*- coding: utf-8 -*-
"""
Script to generate rich, mathematically rigorous KaTeX theory files for all 25 lessons of Math 12
(Vietnam GDPT 2018 curriculum - SGK Ket noi tri thuc voi cuoc song Tap 1 & Tap 2).
"""

import os
import json

THEORY_DIR = r"d:\Du-an-web\web-toan-12-phuc-hoa\data\theory"
os.makedirs(THEORY_DIR, exist_ok=True)

THEORY_DATA = {
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
                            {"emoji": "⏸️", "title": "Đạo hàm triệt tiêu hữu hạn điểm", "text": "Nếu $f'(x) \\ge 0$ (hoặc $\\le 0$) trên $(a; b)$ và $f'(x) = 0$ chỉ tại hữu hạn điểm thì $f(x)$ vẫn đồng biến (hoặc nghịch biến)."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Định lý mở rộng về tính đơn điệu",
                        "formula": "f'(x) \\ge 0, \\forall x \\in (a; b) \\text{ và } f'(x) = 0 \\text{ tại hữu hạn điểm} \\implies f(x) \\text{ đồng biến trên } (a; b)",
                        "note": "Áp dụng then chốt khi tìm tham số $m$ để hàm số bậc ba đồng biến hoặc nghịch biến trên $\\mathbb{R}$."
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
                            {"emoji": "🔺", "title": "Điểm cực đại ($x_{CĐ}$)", "text": "Đạo hàm $f'(x)$ đổi dấu từ DƯƠNG (+) sang ÂM (-) khi $x$ đi qua điểm $x_0$."},
                            {"emoji": "🔻", "title": "Điểm cực tiểu ($x_{CT}$)", "text": "Đạo hàm $f'(x)$ đổi dấu từ ÂM (-) sang DƯƠNG (+) khi $x$ đi qua điểm $x_0$."},
                            {"emoji": "📍", "title": "Phân biệt thuật ngữ", "text": "$x_0$: điểm cực trị của hàm số; $y_0 = f(x_0)$: giá trị cực trị; $M(x_0; y_0)$: điểm cực trị của đồ thị."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Dấu hiệu II nhận biết cực trị (sử dụng $f''(x)$)",
                        "formula": "\\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) < 0 \\end{cases} \\implies x_0 \\text{ là điểm cực đại}; \\qquad \\begin{cases} f'(x_0) = 0 \\\\ f''(x_0) > 0 \\end{cases} \\implies x_0 \\text{ là điểm cực tiểu}",
                        "note": "Rất hiệu quả cho các hàm lượng giác hoặc bài toán tính cực trị mà bảng biến thiên phức tạp."
                    },
                    {
                        "kind": "example",
                        "title": "Tìm cực trị của hàm số bậc ba",
                        "text": "Tìm toạ độ các điểm cực trị của đồ thị hàm số $y = x^3 - 3x^2 + 2$.",
                        "solution": "1. Tập xác định $D = \\mathbb{R}$.\n2. Đạo hàm: $y' = 3x^2 - 6x = 3x(x - 2)$.\n3. $y' = 0 \\iff x = 0$ hoặc $x = 2$.\n4. Bảng xét dấu $y'$: qua $x = 0$, $y'$ đổi từ $(+)$ sang $(-)$ $\\implies x = 0$ là điểm cực đại, $y(0) = 2$; qua $x = 2$, $y'$ đổi từ $(-)$ sang $(+)$ $\\implies x = 2$ là điểm cực tiểu, $y(2) = -2$.\n5. Kết luận: Điểm cực đại của đồ thị là $(0; 2)$ và điểm cực tiểu của đồ thị là $(2; -2)$."
                    },
                    {
                        "kind": "warn",
                        "title": "Cạm bẫy đạo hàm bằng 0 nhưng không đổi dấu",
                        "text": "Nếu $f'(x_0) = 0$ nhưng $f'(x)$ không đổi dấu khi qua $x_0$ (nghiệm bội chẵn, ví dụ $y = x^3$ tại $x = 0$ có $y' = 3x^2 \\ge 0$) thì $x_0$ KHÔNG phải là điểm cực trị!"
                    }
                ]
            }
        ],
        "summary": [
            "Đạo hàm $f'(x) > 0 \\implies$ đồng biến; $f'(x) < 0 \\implies$ nghịch biến.",
            "Cực trị xuất hiện khi đạo hàm triệt tiêu (hoặc không xác định) và ĐỔI DẤU khi qua điểm đó.",
            "Phân biệt chính xác: điểm cực trị hàm số $x_0$, giá trị cực trị $y_0 = f(x_0)$ và điểm cực trị của đồ thị $(x_0; y_0)$."
        ]
    },
    "bai-02": {
        "varName": "bai02",
        "intro": "Phương pháp tìm giá trị lớn nhất (GTLN) và giá trị nhỏ nhất (GTNN) của hàm số trên một đoạn $[a; b]$ hoặc trên một khoảng.",
        "minutes": 15,
        "sections": [
            {
                "id": "dinh-nghia-gtln-gtnn",
                "emoji": "🎯",
                "heading": "1. Định nghĩa Giá trị lớn nhất & Nhỏ nhất",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "leaf",
                        "items": [
                            {"emoji": "👑", "title": "Giá trị lớn nhất ($M = \\max f(x)$)", "text": "$M$ là GTLN của $f(x)$ trên tập $D$ nếu $f(x) \\le M, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = M$."},
                            {"emoji": "⚓", "title": "Giá trị nhỏ nhất ($m = \\min f(x)$)", "text": "$m$ là GTNN của $f(x)$ trên tập $D$ nếu $f(x) \\ge m, \\forall x \\in D$ và tồn tại $x_0 \\in D$ sao cho $f(x_0) = m$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Công thức tìm GTLN, GTNN trên đoạn $[a; b]$",
                        "formula": "\\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_1), \\dots, f(x_k)\\}; \\quad \\min_{[a; b]} f(x) = \\min\\{f(a), f(b), f(x_1), \\dots, f(x_k)\\}",
                        "note": "Trong đó $x_1, \\dots, x_k$ là các điểm thuộc khoảng $(a; b)$ mà tại đó $f'(x) = 0$ hoặc đạo hàm không xác định."
                    }
                ]
            },
            {
                "id": "phuong-phap-tim",
                "emoji": "🛠️",
                "heading": "2. Quy trình thực hành tìm Max / Min trên đoạn $[a; b]$",
                "blocks": [
                    {
                        "kind": "steps",
                        "items": [
                            {"label": "Bước 1", "title": "Tính đạo hàm $f'(x)$", "text": "Xác định các nghiệm $x_i \\in (a; b)$ của phương trình $f'(x) = 0$ (loại bỏ các nghiệm nằm ngoài khoảng $(a; b)$)."},
                            {"label": "Bước 2", "title": "Tính các giá trị tại điểm đặc biệt", "text": "Tính $f(a), f(b)$ và tất cả các giá trị $f(x_i)$ tương ứng với các nghiệm nhận được."},
                            {"label": "Bước 3", "title": "So sánh và kết luận", "text": "Số lớn nhất trong các giá trị trên chính là $\\max_{[a; b]} f(x)$, số nhỏ nhất chính là $\\min_{[a; b]} f(x)$."}
                        ]
                    },
                    {
                        "kind": "example",
                        "title": "Tìm Max/Min trên đoạn số thực",
                        "text": "Tìm GTLN và GTNN của hàm số $f(x) = x^4 - 2x^2 + 3$ trên đoạn $[0; 2]$.",
                        "solution": "1. $f'(x) = 4x^3 - 4x = 4x(x^2 - 1) = 0 \\iff x = 0, x = 1, x = -1$.\n2. Trên khoảng $(0; 2)$, chỉ có nghiệm $x = 1$ thuộc khoảng.\n3. Tính các giá trị: $f(0) = 3$; $f(1) = 1 - 2 + 3 = 2$; $f(2) = 16 - 8 + 3 = 11$.\n4. So sánh: $\\max_{[0; 2]} f(x) = 11$ (tại $x = 2$) và $\\min_{[0; 2]} f(x) = 2$ (tại $x = 1$)."
                    }
                ]
            }
        ],
        "summary": [
            "Hàm số liên tục trên một đoạn $[a; b]$ luôn đạt GTLN và GTNN trên đoạn đó.",
            "Trên đoạn $[a; b]$, không cần lập bảng biến thiên, chỉ cần so sánh giá trị tại hai đầu mút $a, b$ và các điểm tới hạn trong khoảng $(a; b)$.",
            "Trên một khoảng $(a; b)$, bắt buộc phải lập bảng biến thiên để xác định giới hạn ở hai đầu mút và tìm cực trị tuyệt đối."
        ]
    },
    "bai-03": {
        "varName": "bai03",
        "intro": "Nhận biết và xác định 3 loại đường tiệm cận của đồ thị hàm số: Tiệm cận đứng, Tiệm cận ngang và Tiệm cận xiên.",
        "minutes": 15,
        "sections": [
            {
                "id": "tiem-can-dung-ngang",
                "emoji": "📏",
                "heading": "1. Tiệm cận đứng và Tiệm cận ngang",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "↕️", "title": "Tiệm cận đứng (TCĐ): $x = x_0$", "text": "Đường thẳng $x = x_0$ là TCĐ nếu ít nhất một trong các giới hạn một bên $\\lim_{x \\to x_0^+} f(x) = \\pm\\infty$ hoặc $\\lim_{x \\to x_0^-} f(x) = \\pm\\infty$."},
                            {"emoji": "↔️", "title": "Tiệm cận ngang (TCN): $y = y_0$", "text": "Đường thẳng $y = y_0$ là TCN nếu $\\lim_{x \\to +\\infty} f(x) = y_0$ hoặc $\\lim_{x \\to -\\infty} f(x) = y_0$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Tiệm cận của hàm phân thức bậc nhất trên bậc nhất",
                        "formula": "y = \\frac{ax + b}{cx + d} \\quad (c \\ne 0, ad - bc \\ne 0) \\implies \\text{TCĐ: } x = -\\frac{d}{c}; \\quad \\text{TCN: } y = \\frac{a}{c}",
                        "note": "Tâm đối xứng của đồ thị là giao điểm $I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)$ của 2 đường tiệm cận."
                    }
                ]
            },
            {
                "id": "tiem-can-xien",
                "emoji": "📐",
                "heading": "2. Tiệm cận xiên (Mới trong GDPT 2018)",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Định nghĩa và công thức xác định Tiệm cận xiên $y = ax + b$ ($a \\ne 0$)",
                        "formula": "\\lim_{x \\to \\pm\\infty} [f(x) - (ax + b)] = 0 \\iff \\begin{cases} a = \\lim_{x \\to \\pm\\infty} \\frac{f(x)}{x} \\\\ b = \\lim_{x \\to \\pm\\infty} [f(x) - ax] \\end{cases}",
                        "note": "Với hàm phân thức bậc 2 trên bậc 1: Chia đa thức tử cho mẫu $f(x) = ax + b + \\frac{r}{cx + d} \\implies \\text{TCX là } y = ax + b$."
                    },
                    {
                        "kind": "example",
                        "title": "Tìm tiệm cận xiên bằng phép chia đa thức",
                        "text": "Tìm các đường tiệm cận của đồ thị hàm số $y = \\frac{x^2 + 2x - 1}{x + 1}$.",
                        "solution": "1. Tập xác định: $D = \\mathbb{R} \\setminus \\{-1\\}$.\n2. Tiệm cận đứng: Nghiệm mẫu $x = -1$ làm tử bằng $(-1)^2 + 2(-1) - 1 = -2 \\ne 0 \\implies$ TCĐ: $x = -1$.\n3. Tiệm cận xiên: Chia tử cho mẫu: $x^2 + 2x - 1 = (x + 1)(x + 1) - 2 \\implies y = x + 1 - \\frac{2}{x + 1}$.\n   Vì $\\lim_{x \\to \\pm\\infty} [y - (x + 1)] = \\lim_{x \\to \\pm\\infty} \\frac{-2}{x + 1} = 0 \\implies$ TCX là đường thẳng $y = x + 1$."
                    }
                ]
            }
        ],
        "summary": [
            "Nghiệm của mẫu làm tử khác 0 thường là tiệm cận đứng $x = x_0$.",
            "Bậc tử bằng bậc mẫu $\\implies$ có TCN $y = \\frac{a}{c}$; bậc tử nhỏ hơn bậc mẫu $\\implies$ có TCN $y = 0$.",
            "Bậc tử lớn hơn bậc mẫu đúng 1 bậc $\\implies$ đồ thị có tiệm cận xiên $y = ax + b$."
        ]
    },
    "bai-04": {
        "varName": "bai04",
        "intro": "Sơ đồ khảo sát sự biến thiên và vẽ đồ thị của 3 họ hàm số trọng tâm: Hàm bậc ba, Hàm phân thức bậc nhất/bậc nhất, Hàm phân thức bậc hai/bậc nhất.",
        "minutes": 15,
        "sections": [
            {
                "id": "so-do-khao-sat",
                "emoji": "🗺️",
                "heading": "1. Sơ đồ khảo sát hàm số chuẩn",
                "blocks": [
                    {
                        "kind": "steps",
                        "items": [
                            {"label": "Bước 1", "title": "Tập xác định", "text": "Tìm tập xác định $D$ của hàm số."},
                            {"label": "Bước 2", "title": "Khảo sát sự biến thiên", "text": "Tính $y'$, tìm nghiệm $y'=0$, xét dấu $y'$, tìm cực trị, tính giới hạn tại vô cực và các điểm gián đoạn (tìm tiệm cận nếu có), lập Bảng biến thiên hoàn chỉnh."},
                            {"label": "Bước 3", "title": "Vẽ đồ thị", "text": "Xác định giao điểm với trục toạ độ ($Ox: y=0$, $Oy: x=0$), tìm toạ độ tâm đối xứng hoặc trục đối xứng, vẽ đường tiệm cận trước rồi vẽ đồ thị uốn lượn qua các điểm đặc biệt."}
                        ]
                    }
                ]
            },
            {
                "id": "cac-dang-do-thi",
                "emoji": "📊",
                "heading": "2. Dạng đồ thị các hàm số cơ bản",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "gold",
                        "items": [
                            {"emoji": "〰️", "title": "Hàm bậc ba: $y = ax^3+bx^2+cx+d$", "text": "Có dạng chữ N (khi $a > 0$) hoặc chữ N ngược (khi $a < 0$). Tâm đối xứng luôn là điểm uốn $I(x_0; y_0)$ với $y''(x_0) = 0$."},
                            {"emoji": "🔀", "title": "Hàm phân thức $y = \\frac{ax+b}{cx+d}$", "text": "Đồ thị hypebol gồm 2 nhánh rời nhau. Tâm đối xứng là giao điểm của TCĐ $x = -d/c$ và TCN $y = a/c$."},
                            {"emoji": "📐", "title": "Hàm phân thức $y = \\frac{ax^2+bx+c}{px+q}$", "text": "Gồm 2 nhánh nằm trong các góc tạo bởi tiệm cận đứng và tiệm cận xiên. Tâm đối xứng là giao của TCĐ và TCX."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Tâm đối xứng của đồ thị hàm số",
                        "formula": "y = ax^3+bx^2+cx+d \\implies I\\left(-\\frac{b}{3a}; y\\left(-\\frac{b}{3a}\\right)\\right); \\quad y = \\frac{ax+b}{cx+d} \\implies I\\left(-\\frac{d}{c}; \\frac{a}{c}\\right)",
                        "note": "Điểm uốn của đồ thị hàm bậc ba luôn là tâm đối xứng của nó."
                    }
                ]
            }
        ],
        "summary": [
            "Hàm bậc ba luôn có 1 tâm đối xứng (điểm uốn $y'' = 0$) và có 2 điểm cực trị hoặc không có cực trị nào.",
            "Hàm phân thức bậc 1/bậc 1 luôn đơn điệu trên từng khoảng xác định, không bao giờ có cực trị.",
            "Nhận diện hệ số $a$ bằng cách nhìn vào nhánh ngoài cùng bên phải của đồ thị (đi lên thì $a > 0$, đi xuống thì $a < 0$)."
        ]
    },
    "bai-05": {
        "varName": "bai05",
        "intro": "Ứng dụng đạo hàm giải quyết các bài toán tối ưu hóa trong kinh tế (chi phí, doanh thu, lợi nhuận) và bài toán thực tế (dung tích, vật liệu, chuyển động).",
        "minutes": 15,
        "sections": [
            {
                "id": "kinh-te",
                "emoji": "💰",
                "heading": "1. Các đại lượng kinh tế vi mô",
                "blocks": [
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "🏭", "title": "Hàm chi phí biên: $C'(x)$", "text": "Chi phí xấp xỉ để sản xuất thêm 1 đơn vị sản phẩm tiếp theo (tại mức sản xuất $x$): $C'(x) \\approx C(x+1) - C(x)$."},
                            {"emoji": "💵", "title": "Hàm doanh thu: $R(x) = x \\cdot p(x)$", "text": "Doanh thu bằng số lượng nhân với đơn giá $p(x)$. Doanh thu biên là đạo hàm $R'(x)$."},
                            {"emoji": "📈", "title": "Lợi nhuận: $P(x) = R(x) - C(x)$", "text": "Lợi nhuận bằng doanh thu trừ chi phí. Lợi nhuận biên $P'(x) = R'(x) - C'(x)$."}
                        ]
                    },
                    {
                        "kind": "mathBox",
                        "title": "Nguyên lý tối đa hóa lợi nhuận",
                        "formula": "P'(x) = 0 \\iff R'(x) = C'(x) \\quad (\\text{Doanh thu biên bằng Chi phí biên})",
                        "note": "Điểm mà tại đó doanh thu của sản phẩm bổ sung vừa vặn bù đắp chi phí phát sinh để làm ra sản phẩm đó."
                    }
                ]
            },
            {
                "id": "hinh-hoc-thuc-te",
                "emoji": "📦",
                "heading": "2. Bài toán tối ưu hình học & vật liệu",
                "blocks": [
                    {
                        "kind": "example",
                        "title": "Tối ưu vật liệu làm hộp kim loại",
                        "text": "Một người cần làm một chiếc hộp hình hộp chữ nhật không nắp có thể tích $V = 4\\text{ m}^3$, đáy hình vuông cạnh $x\\text{ (m)}$. Tìm $x$ để diện tích tôn sử dụng là ít nhất.",
                        "solution": "1. Gọi $h$ là chiều cao hộp. Thể tích $V = x^2 \\cdot h = 4 \\implies h = \\frac{4}{x^2}$.\n2. Diện tích tôn là diện tích đáy cộng diện tích 4 mặt bên:\n   $S(x) = x^2 + 4xh = x^2 + 4x \\cdot \\frac{4}{x^2} = x^2 + \\frac{16}{x}$ với $x > 0$.\n3. Đạo hàm: $S'(x) = 2x - \\frac{16}{x^2} = \\frac{2x^3 - 16}{x^2}$.\n4. $S'(x) = 0 \\iff 2x^3 = 16 \\iff x^3 = 8 \\iff x = 2\\text{ m}$.\n5. Khi $x = 2$, $S'(x)$ đổi dấu từ âm sang dương nên đạt GTNN tại $x = 2\\text{ m}$."
                    }
                ]
            }
        ],
        "summary": [
            "Chuyển đổi bài toán thực tế thành bài toán tìm GTLN hoặc GTNN của hàm 1 biến số $f(x)$ trên khoảng $(a; b)$.",
            "Lợi nhuận cực đại khi đạo hàm lợi nhuận bằng 0, tức là Doanh thu biên bằng Chi phí biên $R'(x) = C'(x)$.",
            "Luôn chú ý điều kiện thực tế của biến số (độ dài $x > 0$, số lượng sản phẩm $x \\in \\mathbb{N}^*$, giá bán $p > 0$)."
        ]
    },
    "bai-cuoi-c1": {
        "varName": "baicuoic1",
        "intro": "Ôn tập tổng kết toàn diện Chương I: Đạo hàm, Bảng biến thiên, Cực trị, Tiệm cận, Nhận dạng đồ thị và Bài toán thực tiễn.",
        "minutes": 20,
        "sections": [
            {
                "id": "tong-ket-c1",
                "emoji": "🌟",
                "heading": "1. Hệ thống công thức cốt lõi Chương I",
                "blocks": [
                    {
                        "kind": "mathBox",
                        "title": "Bộ ba công thức giải tích then chốt",
                        "formula": "f'(x) \\ge 0 \\iff \\text{Đồng biến}; \\quad \\max_{[a; b]} f(x) = \\max\\{f(a), f(b), f(x_i)\\}; \\quad \\lim_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0 \\implies y = ax+b",
                        "note": "Cần thuần thục kỹ năng đọc bảng biến thiên và đồ thị trong đề thi tốt nghiệp."
                    },
                    {
                        "kind": "cards",
                        "tone": "sea",
                        "items": [
                            {"emoji": "📌", "title": "Cực trị & Tham số m", "text": "Hàm bậc ba có 2 cực trị $\\iff y' = 0$ có 2 nghiệm phân biệt $\\iff \\Delta_{y'} > 0$."},
                            {"emoji": "📌", "title": "Tiệm cận đồ thị", "text": "Tiệm cận đứng (nghiệm của mẫu), Tiệm cận ngang (bậc tử $\\le$ bậc mẫu), Tiệm cận xiên (bậc tử = bậc mẫu + 1)."},
                            {"emoji": "📌", "title": "Tâm đối xứng", "text": "Hàm bậc ba có tâm đối xứng là điểm uốn $y'' = 0$; hàm phân thức có tâm đối xứng là giao điểm 2 tiệm cận."}
                        ]
                    }
                ]
            }
        ],
        "summary": [
            "Nắm vững 3 dạng toán lớn: Khảo sát hàm số, Bài toán tham số $m$ (đơn điệu/cực trị), và Ứng dụng tối ưu hóa thực tiễn.",
            "Luyện giải nhanh câu hỏi trắc nghiệm Đúng/Sai và Trả lời ngắn theo ma trận đề thi 2025."
        ]
    }
}

def generate_chapter1_theory():
    for lid, data in THEORY_DATA.items():
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
        print(f"Đã cập nhật lý thuyết chuẩn KaTeX cho {lid}")

if __name__ == "__main__":
    generate_chapter1_theory()
