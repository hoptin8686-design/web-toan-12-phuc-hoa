export default function Diagram({ name }: { name: string }) {
  if (name === "truth_table_negation") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-sea/30 bg-[#07131b] p-6">
        <svg viewBox="0 0 680 180" className="w-full max-w-xl text-star">
          <defs>
            <linearGradient id="grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
            <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="grad-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Cột Trái: P */}
          <rect x="50" y="30" width="220" height="120" rx="14" fill="#102631" stroke="#38bdf8" strokeWidth="2" />
          <text x="160" y="65" textAnchor="middle" fill="#38bdf8" fontWeight="bold" fontSize="18">Mệnh đề P</text>
          <line x1="60" y1="80" x2="260" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="160" y="105" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="16">Đúng (True - Đ)</text>
          <text x="160" y="132" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="16">Sai (False - S)</text>

          {/* Mũi tên đảo logic */}
          <path d="M 290 75 L 370 75" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="375,75 365,69 365,81" fill="#f59e0b" />
          <text x="330" y="65" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">Phủ định</text>

          <path d="M 370 125 L 290 125" stroke="#f59e0b" strokeWidth="3" strokeDasharray="6 4" />
          <polygon points="285,125 295,119 295,131" fill="#f59e0b" />

          {/* Cột Phải: P ngang */}
          <rect x="390" y="30" width="220" height="120" rx="14" fill="#102631" stroke="#f43f5e" strokeWidth="2" />
          <text x="500" y="65" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="18">Mệnh đề phủ định P̄</text>
          <line x1="400" y1="80" x2="600" y2="80" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
          <text x="500" y="105" textAnchor="middle" fill="#f43f5e" fontWeight="bold" fontSize="16">Sai (False - S)</text>
          <text x="500" y="132" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="16">Đúng (True - Đ)</text>
        </svg>
      </div>
    );
  }

  if (name === "quantifier_map") {
    return (
      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-sea/30 bg-void-card p-5 text-center">
          <span className="text-4xl">∀</span>
          <h4 className="mt-2 font-display text-lg font-bold text-sea-deep">Với mọi (Universal)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">∀x ∈ X, P(x)</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Khẳng định đúng với toàn bộ 100% phần tử trong tập X. Chỉ cần chỉ ra duy nhất 1 phản ví dụ là mệnh đề bị bác bỏ ngay lập tức!
          </p>
        </div>
        <div className="rounded-2xl border border-coral/30 bg-void-card p-5 text-center">
          <span className="text-4xl">∃</span>
          <h4 className="mt-2 font-display text-lg font-bold text-coral">Tồn tại (Existential)</h4>
          <p className="mt-1 font-mono text-xs text-star-soft">∃x ∈ X, P(x)</p>
          <p className="mt-2 text-xs leading-relaxed text-star">
            Khẳng định có ít nhất một phần tử thuộc tập X thỏa mãn. Chỉ cần tìm được một đối tượng cụ thể là chứng minh mệnh đề đúng!
          </p>
        </div>
      </div>
    );
  }

  if (name === "venn_inclusion") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-sea/30 bg-[#07131b] p-5">
        <svg viewBox="0 0 600 200" className="w-full max-w-lg text-star">
          <defs>
            <radialGradient id="grad-sub" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </radialGradient>
            <radialGradient id="grad-parent" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#1e293b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.95" />
            </radialGradient>
          </defs>
          {/* Tập S to bên ngoài */}
          <ellipse cx="280" cy="100" rx="220" ry="85" fill="url(#grad-parent)" stroke="#38bdf8" strokeWidth="2.5" strokeDasharray="4 2" />
          <text x="440" y="55" fill="#38bdf8" fontWeight="bold" fontSize="18">Tập hợp S (Tập mẹ)</text>
          
          {/* Tập T nhỏ bên trong */}
          <ellipse cx="230" cy="115" rx="100" ry="55" fill="url(#grad-sub)" stroke="#10b981" strokeWidth="2.5" />
          <text x="230" y="110" textAnchor="middle" fill="#10b981" fontWeight="bold" fontSize="17">Tập con T</text>
          <text x="230" y="132" textAnchor="middle" fill="#94a3b8" fontSize="13">∀x ∈ T ⇒ x ∈ S</text>

          {/* Phần tử ngoài T trong S */}
          <circle cx="370" cy="115" r="4" fill="#f59e0b" />
          <text x="385" y="120" fill="#f59e0b" fontSize="13" fontWeight="600">y ∈ S (y ∉ T)</text>
        </svg>
      </div>
    );
  }

  if (name === "number_line_intervals") {
    return (
      <div className="my-4 flex flex-col items-center justify-center rounded-2xl border border-leaf/30 bg-[#07131b] p-5">
        <svg viewBox="0 0 700 230" className="w-full max-w-2xl text-star">
          {/* Trục 1: Đoạn [a; b] */}
          <g transform="translate(40, 30)">
            <line x1="0" y1="20" x2="620" y2="20" stroke="#475569" strokeWidth="2" />
            <polygon points="625,20 615,15 615,25" fill="#475569" />
            {/* Vùng lấy: [160, 420] */}
            <rect x="160" y="16" width="260" height="8" fill="#10b981" />
            <text x="160" y="27" fill="#10b981" fontWeight="bold" fontSize="24" textAnchor="middle">[</text>
            <text x="420" y="27" fill="#10b981" fontWeight="bold" fontSize="24" textAnchor="middle">]</text>
            <text x="160" y="48" fill="#10b981" fontSize="13" fontWeight="bold" textAnchor="middle">a</text>
            <text x="420" y="48" fill="#10b981" fontSize="13" fontWeight="bold" textAnchor="middle">b</text>
            <text x="20" y="25" fill="#e2e8f0" fontSize="14" fontWeight="bold">Đoạn [a; b]</text>
            <text x="520" y="25" fill="#94a3b8" fontSize="12">Lấy cả a và b (ngoặc vuông)</text>
          </g>

          {/* Trục 2: Khoảng (a; b) */}
          <g transform="translate(40, 95)">
            <line x1="0" y1="20" x2="620" y2="20" stroke="#475569" strokeWidth="2" />
            <polygon points="625,20 615,15 615,25" fill="#475569" />
            {/* Vùng lấy: (160, 420) */}
            <rect x="160" y="16" width="260" height="8" fill="#38bdf8" />
            <text x="160" y="26" fill="#38bdf8" fontWeight="bold" fontSize="24" textAnchor="middle">(</text>
            <text x="420" y="26" fill="#38bdf8" fontWeight="bold" fontSize="24" textAnchor="middle">)</text>
            <text x="160" y="48" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">a</text>
            <text x="420" y="48" fill="#38bdf8" fontSize="13" fontWeight="bold" textAnchor="middle">b</text>
            <text x="20" y="25" fill="#e2e8f0" fontSize="14" fontWeight="bold">Khoảng (a; b)</text>
            <text x="520" y="25" fill="#94a3b8" fontSize="12">Bỏ a và b (ngoặc tròn)</text>
          </g>

          {/* Trục 3: Nửa khoảng [a; b) */}
          <g transform="translate(40, 160)">
            <line x1="0" y1="20" x2="620" y2="20" stroke="#475569" strokeWidth="2" />
            <polygon points="625,20 615,15 615,25" fill="#475569" />
            {/* Vùng lấy: [160, 420) */}
            <rect x="160" y="16" width="260" height="8" fill="#f59e0b" />
            <text x="160" y="27" fill="#f59e0b" fontWeight="bold" fontSize="24" textAnchor="middle">[</text>
            <text x="420" y="26" fill="#f59e0b" fontWeight="bold" fontSize="24" textAnchor="middle">)</text>
            <text x="160" y="48" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">a</text>
            <text x="420" y="48" fill="#f59e0b" fontSize="13" fontWeight="bold" textAnchor="middle">b</text>
            <text x="20" y="25" fill="#e2e8f0" fontSize="14" fontWeight="bold">Nửa khoảng [a; b)</text>
            <text x="520" y="25" fill="#94a3b8" fontSize="12">Lấy a, bỏ b</text>
          </g>
        </svg>
      </div>
    );
  }

  if (name === "venn_operations") {
    return (
      <div className="my-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Card 1: Giao */}
        <div className="flex flex-col items-center rounded-2xl border border-sea/30 bg-[#07131b] p-4 text-center">
          <svg viewBox="0 0 260 140" className="w-full max-w-[220px]">
            <defs>
              <clipPath id="clip-a">
                <circle cx="95" cy="70" r="50" />
              </clipPath>
            </defs>
            <circle cx="95" cy="70" r="50" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="70" r="50" fill="#1e293b" stroke="#f43f5e" strokeWidth="2" />
            {/* Phần giao được highlight */}
            <circle cx="155" cy="70" r="50" clipPath="url(#clip-a)" fill="#10b981" fillOpacity="0.8" />
            <text x="65" y="75" fill="#38bdf8" fontWeight="bold" fontSize="16">A</text>
            <text x="185" y="75" fill="#f43f5e" fontWeight="bold" fontSize="16">B</text>
            <text x="125" y="75" fill="#ffffff" fontWeight="bold" fontSize="11" textAnchor="middle">A ∩ B</text>
          </svg>
          <h4 className="mt-2 font-display text-sm font-bold text-leaf-deep">Phép Giao (A ∩ B)</h4>
          <p className="mt-0.5 text-xs text-star-soft">Phần tử chung của cả A và B</p>
        </div>

        {/* Card 2: Hợp */}
        <div className="flex flex-col items-center rounded-2xl border border-coral/30 bg-[#07131b] p-4 text-center">
          <svg viewBox="0 0 260 140" className="w-full max-w-[220px]">
            <circle cx="95" cy="70" r="50" fill="#38bdf8" fillOpacity="0.65" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="155" cy="70" r="50" fill="#38bdf8" fillOpacity="0.65" stroke="#38bdf8" strokeWidth="2" />
            <text x="65" y="75" fill="#ffffff" fontWeight="bold" fontSize="16">A</text>
            <text x="185" y="75" fill="#ffffff" fontWeight="bold" fontSize="16">B</text>
            <text x="125" y="75" fill="#ffffff" fontWeight="bold" fontSize="12" textAnchor="middle">A ∪ B</text>
          </svg>
          <h4 className="mt-2 font-display text-sm font-bold text-coral">Phép Hợp (A ∪ B)</h4>
          <p className="mt-0.5 text-xs text-star-soft">Lấy tất cả phần tử của A hoặc B</p>
        </div>

        {/* Card 3: Hiệu */}
        <div className="flex flex-col items-center rounded-2xl border border-gold/30 bg-[#07131b] p-4 text-center">
          <svg viewBox="0 0 260 140" className="w-full max-w-[220px]">
            <mask id="mask-b">
              <rect width="260" height="140" fill="white" />
              <circle cx="155" cy="70" r="50" fill="black" />
            </mask>
            <circle cx="95" cy="70" r="50" fill="#f59e0b" fillOpacity="0.8" mask="url(#mask-b)" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="95" cy="70" r="50" fill="none" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="155" cy="70" r="50" fill="#1e293b" fillOpacity="0.4" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
            <text x="75" y="75" fill="#ffffff" fontWeight="bold" fontSize="13" textAnchor="middle">A ∖ B</text>
            <text x="185" y="75" fill="#94a3b8" fontWeight="bold" fontSize="16">B</text>
          </svg>
          <h4 className="mt-2 font-display text-sm font-bold text-gold-deep">Phép Hiệu (A ∖ B)</h4>
          <p className="mt-0.5 text-xs text-star-soft">Thuộc A nhưng loại bỏ các phần tử của B</p>
        </div>

        {/* Card 4: Phần bù */}
        <div className="flex flex-col items-center rounded-2xl border border-sea/30 bg-[#07131b] p-4 text-center">
          <svg viewBox="0 0 260 140" className="w-full max-w-[220px]">
            <mask id="mask-sub">
              <rect width="260" height="140" fill="white" />
              <circle cx="130" cy="70" r="28" fill="black" />
            </mask>
            <rect x="30" y="20" width="200" height="100" rx="16" fill="#8b5cf6" fillOpacity="0.5" mask="url(#mask-sub)" stroke="#8b5cf6" strokeWidth="2" />
            <rect x="30" y="20" width="200" height="100" rx="16" fill="none" stroke="#8b5cf6" strokeWidth="2" />
            <circle cx="130" cy="70" r="28" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            <text x="130" y="74" fill="#38bdf8" fontWeight="bold" fontSize="14" textAnchor="middle">A</text>
            <text x="50" y="45" fill="#c084fc" fontWeight="bold" fontSize="13">E</text>
            <text x="190" y="45" fill="#e2e8f0" fontWeight="bold" fontSize="11" textAnchor="middle">C_E A</text>
          </svg>
          <h4 className="mt-2 font-display text-sm font-bold text-purple-400">Phần Bù (C_E A)</h4>
          <p className="mt-0.5 text-xs text-star-soft">Khi A ⊂ E, là phần còn lại của E ngoài A</p>
        </div>
      </div>
    );
  }

  return null;
}
