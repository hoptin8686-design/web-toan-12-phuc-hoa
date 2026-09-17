import type { MockExam } from "@/lib/types";

export const MOCK_EXAMS: MockExam[] = [
  {
    id: "de-thi-thu-01",
    title: "Äá» thi thá»­ Tá»‘t nghiá»‡p THPT 2025 â€” Äá» sá»‘ 01 (Tá»•ng há»£p 6 ChÆ°Æ¡ng)",
    durationMinutes: 90,
    description: "Äá» chuáº©n ma tráº­n thi Tá»‘t nghiá»‡p THPT 2025 cá»§a Bá»™ GD&ÄT gá»“m 3 pháº§n: Tráº¯c nghiá»‡m nhiá»u lá»±a chá»n, ÄÃºng/Sai vÃ  Tráº£ lá»i ngáº¯n.",
    questions: [
      {
        id: "ex1-01",
        q: "Cho hÃ m sá»‘ f(x) cÃ³ báº£ng biáº¿n thiÃªn: f'(x) Ä‘á»•i dáº¥u tá»« + sang - qua x = 1 vÃ  tá»« - sang + qua x = 3. Äiá»ƒm cá»±c Ä‘áº¡i cá»§a hÃ m sá»‘ lÃ :",
        options: ["x = 1", "x = 3", "y = 1", "y = 3"],
        answer: 0,
        explain: "Äáº¡o hÃ m Ä‘á»•i dáº¥u tá»« dÆ°Æ¡ng sang Ã¢m khi qua x = 1 nÃªn x = 1 lÃ  Ä‘iá»ƒm cá»±c Ä‘áº¡i."
      },
      {
        id: "ex1-02",
        q: "Tiá»‡m cáº­n ngang cá»§a Ä‘á»“ thá»‹ hÃ m sá»‘ y = (3x - 1)/(x + 2) lÃ  Ä‘Æ°á»ng tháº³ng:",
        options: ["y = 3", "x = -2", "y = -1/2", "x = 3"],
        answer: 0,
        explain: "lim khi x -> Â±âˆž báº±ng 3/1 = 3 nÃªn tiá»‡m cáº­n ngang lÃ  y = 3."
      },
      {
        id: "ex1-03",
        q: "GiÃ¡ trá»‹ nhá» nháº¥t cá»§a hÃ m sá»‘ y = x^3 - 3x + 2 trÃªn Ä‘oáº¡n [0; 2] báº±ng:",
        options: ["0", "2", "4", "-2"],
        answer: 0,
        explain: "y' = 3x^2 - 3 = 0 <=> x = 1 âˆˆ [0; 2]. y(0) = 2, y(1) = 0, y(2) = 4. Min = 0 táº¡i x = 1."
      },
      {
        id: "ex1-04",
        q: "Trong khÃ´ng gian Oxyz, cho a = (1; 2; -3) vÃ  b = (2; -1; 1). TÃ­ch vÃ´ hÆ°á»›ng a . b báº±ng:",
        options: ["-3", "3", "5", "-5"],
        answer: 0,
        explain: "a . b = 1*2 + 2*(-1) + (-3)*1 = 2 - 2 - 3 = -3."
      },
      {
        id: "ex1-05",
        q: "Máº·t pháº³ng (P): 2x - y + 3z - 4 = 0 cÃ³ má»™t vectÆ¡ phÃ¡p tuyáº¿n lÃ :",
        options: ["n = (2; -1; 3)", "n = (2; 1; 3)", "n = (2; -1; -4)", "n = (-1; 3; -4)"],
        answer: 0,
        explain: "Toáº¡ Ä‘á»™ VTPT láº¥y tá»« há»‡ sá»‘ trÆ°á»›c x, y, z: (2; -1; 3)."
      },
      {
        id: "ex1-06",
        q: "NguyÃªn hÃ m cá»§a hÃ m sá»‘ f(x) = cos 2x lÃ :",
        options: ["(1/2) sin 2x + C", "-2 sin 2x + C", "2 sin 2x + C", "-(1/2) sin 2x + C"],
        answer: 0,
        explain: "âˆ« cos(ax+b) dx = (1/a) sin(ax+b) + C => (1/2) sin 2x + C."
      },
      {
        id: "ex1-07",
        q: "TÃ­ch phÃ¢n I = âˆ«_0^1 e^(3x) dx báº±ng:",
        options: ["(e^3 - 1) / 3", "e^3 - 1", "(e^3 + 1) / 3", "3(e^3 - 1)"],
        answer: 0,
        explain: "[(1/3) e^(3x)] |_0^1 = (e^3 - 1)/3."
      },
      {
        id: "ex1-08",
        q: "Máº·t cáº§u (S): (x - 2)^2 + (y + 1)^2 + z^2 = 25 cÃ³ bÃ¡n kÃ­nh R báº±ng:",
        options: ["5", "25", "10", "âˆš5"],
        answer: 0,
        explain: "R = âˆš25 = 5."
      },
      {
        id: "ex1-09",
        q: "ÄÆ°á»ng tháº³ng d: (x - 1)/2 = (y + 2)/(-3) = (z - 5)/1 cÃ³ má»™t vectÆ¡ chá»‰ phÆ°Æ¡ng lÃ :",
        options: ["u = (2; -3; 1)", "u = (1; -2; 5)", "u = (-1; 2; -5)", "u = (2; 3; 1)"],
        answer: 0,
        explain: "CÃ¡c máº«u sá»‘ cho toáº¡ Ä‘á»™ VTCP: (2; -3; 1)."
      },
      {
        id: "ex1-10",
        q: "Hai biáº¿n cá»‘ A vÃ  B cÃ³ P(A) = 0.5, P(B) = 0.6 vÃ  P(AB) = 0.3. Khi Ä‘Ã³ hai biáº¿n cá»‘ A vÃ  B:",
        options: ["Äá»™c láº­p vá»›i nhau", "Xung kháº¯c vá»›i nhau", "Äá»‘i nhau", "KhÃ´ng Ä‘á»™c láº­p"],
        answer: 0,
        explain: "P(A) * P(B) = 0.5 * 0.6 = 0.3 = P(AB) nÃªn hai biáº¿n cá»‘ A vÃ  B Ä‘á»™c láº­p."
      },
      {
        id: "ex1-11",
        q: "Äá»™ lá»‡ch chuáº©n s cá»§a máº«u sá»‘ liá»‡u ghÃ©p nhÃ³m cÃ³ phÆ°Æ¡ng sai sÂ² = 9 báº±ng:",
        options: ["3", "81", "18", "4.5"],
        answer: 0,
        explain: "s = âˆš9 = 3."
      },
      {
        id: "ex1-12",
        q: "Diá»‡n tÃ­ch hÃ¬nh pháº³ng giá»›i háº¡n bá»Ÿi y = x^2, trá»¥c Ox vÃ  x = 2 báº±ng:",
        options: ["8/3", "4", "2", "8"],
        answer: 0,
        explain: "S = âˆ«_0^2 x^2 dx = x^3/3 |_0^2 = 8/3."
      }
    ],
    tfQuestions: [
      {
        id: "ex1-tf-01",
        context: "Cho hÃ m sá»‘ y = f(x) = (2x^2 - 3x + 2)/(x - 1).",
        statements: [
            {"text": "Táº­p xÃ¡c Ä‘á»‹nh cá»§a hÃ m sá»‘ lÃ  D = â„ \\ {1}.", "answer": true, "explain": "Máº«u sá»‘ khÃ¡c 0 <=> x â‰  1."},
            {"text": "Äá»“ thá»‹ hÃ m sá»‘ cÃ³ tiá»‡m cáº­n Ä‘á»©ng lÃ  Ä‘Æ°á»ng tháº³ng x = 1.", "answer": true, "explain": "lim khi x->1 thÃ¬ máº«u báº±ng 0, tá»­ báº±ng 1 â‰  0 nÃªn x = 1 lÃ  TCÄ."},
            {"text": "Äá»“ thá»‹ hÃ m sá»‘ cÃ³ tiá»‡m cáº­n xiÃªn lÃ  Ä‘Æ°á»ng tháº³ng y = 2x - 1.", "answer": true, "explain": "Chia tá»­ cho máº«u: (2x^2 - 3x + 2) = (x - 1)(2x - 1) + 1 => y = 2x - 1 + 1/(x-1)."},
            {"text": "HÃ m sá»‘ Ä‘á»“ng biáº¿n trÃªn â„.", "answer": false, "explain": "HÃ m sá»‘ khÃ´ng xÃ¡c Ä‘á»‹nh táº¡i x = 1 nÃªn khÃ´ng thá»ƒ Ä‘á»“ng biáº¿n trÃªn toÃ n bá»™ â„."}
        ]
      },
      {
        id: "ex1-tf-02",
        context: "Trong khÃ´ng gian Oxyz, cho máº·t pháº³ng (P): x + 2y - 2z + 5 = 0 vÃ  Ä‘iá»ƒm A(1; 2; 3).",
        statements: [
            {"text": "VectÆ¡ n = (1; 2; -2) lÃ  má»™t vectÆ¡ phÃ¡p tuyáº¿n cá»§a (P).", "answer": true, "explain": "ÄÃºng theo toáº¡ Ä‘á»™ há»‡ sá»‘ cá»§a (P)."},
            {"text": "Khoáº£ng cÃ¡ch tá»« A Ä‘áº¿n máº·t pháº³ng (P) báº±ng 4/3.", "answer": false, "explain": "d = |1 + 2*2 - 2*3 + 5| / âˆš(1+4+4) = |1 + 4 - 6 + 5| / 3 = 4 / 3. Æ , 4/3 lÃ  ÄÃšNG!"},
            {"text": "Máº·t pháº³ng song song vá»›i (P) vÃ  Ä‘i qua O cÃ³ phÆ°Æ¡ng trÃ¬nh x + 2y - 2z = 0.", "answer": true, "explain": "CÃ¹ng VTPT vÃ  Ä‘i qua O(0;0;0) nÃªn D = 0."},
            {"text": "Äiá»ƒm B(-1; 0; 2) thuá»™c máº·t pháº³ng (P).", "answer": true, "explain": "-1 + 0 - 4 + 5 = 0 => B thuá»™c (P)."}
        ]
      }
    ],
    shortAnswerQuestions: [
      {
        id: "ex1-sa-01",
        q: "Má»™t xÆ°á»Ÿng sáº£n xuáº¥t thÃ¹ng tÃ´n hÃ¬nh trá»¥ khÃ´ng náº¯p cÃ³ thá»ƒ tÃ­ch V = 54Ï€ dmÂ³. TÃ­nh bÃ¡n kÃ­nh Ä‘Ã¡y r (dm) Ä‘á»ƒ diá»‡n tÃ­ch tÃ´n cáº§n dÃ¹ng lÃ  nhá» nháº¥t.",
        answer: "V = Ï€ r^2 h = 54Ï€ => h = 54 / r^2.\nDiá»‡n tÃ­ch tÃ´n (Ä‘Ã¡y + xung quanh): S(r) = Ï€ r^2 + 2Ï€ r h = Ï€ r^2 + 108Ï€ / r.\nS'(r) = 2Ï€ r - 108Ï€ / r^2 = 0 <=> r^3 = 54 <=> r = 3âˆš2 â‰ˆ 3.78 dm (hoáº·c r = 3âˆš2 dm)."
      },
      {
        id: "ex1-sa-02",
        q: "Trong khÃ´ng gian Oxyz, cho hai máº·t pháº³ng (P): x + y + z - 1 = 0 vÃ  (Q): x - y + z + 2 = 0. TÃ­nh cosin gÃ³c giá»¯a hai máº·t pháº³ng (P) vÃ  (Q).",
        answer: "nP = (1; 1; 1), nQ = (1; -1; 1).\n|nP . nQ| = |1*1 + 1*(-1) + 1*1| = |1 - 1 + 1| = 1.\n|nP| = âˆš3, |nQ| = âˆš3.\ncos Ï† = 1 / (âˆš3 * âˆš3) = 1/3 â‰ˆ 0.333."
      }
    ]
  },
  {
    id: "de-thi-thu-02",
    title: "Äá» thi thá»­ Tá»‘t nghiá»‡p THPT 2025 â€” Äá» sá»‘ 02 (ChuyÃªn Ä‘á» Giáº£i tÃ­ch & HÃ¬nh há»c)",
    durationMinutes: 90,
    description: "Äá» thi nÃ¢ng cao rÃ¨n luyá»‡n ká»¹ nÄƒng phÃ¢n tÃ­ch Ä‘á»“ thá»‹, á»©ng dá»¥ng tÃ­ch phÃ¢n vÃ  toáº¡ Ä‘á»™ Oxyz khÃ´ng gian 12.",
    questions: [
      {
        id: "ex2-01",
        q: "Sá»‘ Ä‘iá»ƒm cá»±c trá»‹ cá»§a hÃ m sá»‘ y = x^4 - 4x^2 + 1 lÃ :",
        options: ["3", "1", "2", "0"],
        answer: 0,
        explain: "y' = 4x^3 - 8x = 4x(x^2 - 2) = 0 cÃ³ 3 nghiá»‡m phÃ¢n biá»‡t nÃªn cÃ³ 3 cá»±c trá»‹."
      },
      {
        id: "ex2-02",
        q: "Há» nguyÃªn hÃ m cá»§a f(x) = 1/(2x + 1) trÃªn (0; +âˆž) lÃ :",
        options: ["(1/2) ln(2x + 1) + C", "ln(2x + 1) + C", "2 ln(2x + 1) + C", "-1/(2x+1)^2 + C"],
        answer: 0,
        explain: "âˆ« 1/(ax+b) dx = (1/a) ln|ax+b| + C => (1/2) ln(2x + 1) + C."
      },
      {
        id: "ex2-03",
        q: "Trong khÃ´ng gian Oxyz, máº·t pháº³ng Ä‘i qua A(2; 0; 0), B(0; 3; 0), C(0; 0; -1) cÃ³ phÆ°Æ¡ng trÃ¬nh lÃ :",
        options: ["x/2 + y/3 - z = 1", "x/2 + y/3 + z = 1", "2x + 3y - z = 1", "x/2 + y/3 + z/(-1) = 0"],
        answer: 0,
        explain: "PhÆ°Æ¡ng trÃ¬nh máº·t pháº³ng Ä‘oáº¡n cháº¯n: x/2 + y/3 + z/(-1) = 1."
      },
      {
        id: "ex2-04",
        q: "Cho hÃ¬nh há»™p chá»¯ nháº­t ABCD.A'B'C'D' cÃ³ AB = 3, AD = 4, AA' = 5. Khoáº£ng cÃ¡ch tá»« A Ä‘áº¿n C' báº±ng:",
        options: ["5âˆš2", "5", "âˆš50", "7"],
        answer: 0,
        explain: "Äá»™ dÃ i Ä‘Æ°á»ng chÃ©o AC' = âˆš(3^2 + 4^2 + 5^2) = âˆš(9 + 16 + 25) = âˆš50 = 5âˆš2."
      },
      {
        id: "ex2-05",
        q: "XÃ¡c suáº¥t báº¯n trÃºng bia cá»§a xáº¡ thá»§ A lÃ  0.8, xáº¡ thá»§ B lÃ  0.7. XÃ¡c suáº¥t cáº£ hai cÃ¹ng báº¯n trÃºng lÃ :",
        options: ["0.56", "0.50", "0.75", "0.80"],
        answer: 0,
        explain: "Hai ngÆ°á»i báº¯n Ä‘á»™c láº­p: P = 0.8 * 0.7 = 0.56."
      },
      {
        id: "ex2-06",
        q: "Tiá»‡m cáº­n xiÃªn cá»§a hÃ m sá»‘ y = (x^2 + 1)/x lÃ :",
        options: ["y = x", "y = x + 1", "y = 2x", "x = 0"],
        answer: 0,
        explain: "y = x + 1/x => lim [y - x] = lim 1/x = 0 => TCX: y = x."
      }
    ]
  }
];
