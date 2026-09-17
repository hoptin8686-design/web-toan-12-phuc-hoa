import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        void: "#0A1720", // Nền trang vũ trụ
        "void-card": "#102631", // Nền thẻ bài học / khối hộp
        "void-light": "#183745", // Viền hover
        sea: "#0D7C86", // Màu chủ đạo, nút bấm chính
        "sea-deep": "#5EEAD4", // Chữ xanh ngọc nổi bật trên nền tối
        coral: "#F2683C", // Màu nhấn cam san hô
        "coral-deep": "#FDBA74", // Chữ cam sáng
        leaf: "#0E9F6E", // Đáp án đúng / thành tích
        "leaf-deep": "#6EE7B7", // Chữ xanh lá sáng
        gold: "#EFA31D", // Sao thưởng ⭐ / công thức quan trọng
        "gold-deep": "#FCD34D", // Chữ vàng sáng
        berry: "#DC2626", // Đáp án sai / cảnh báo bẫy
        star: "#EAF3F5", // Chữ nội dung chính
        "star-soft": "#94B3BC", // Chữ phụ chú
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.3), 0 8px 24px rgba(10,23,32,0.6)",
        "card-hover": "0 4px 12px rgba(13,124,134,0.2), 0 12px 32px rgba(0,0,0,0.5)",
        glow: "0 0 20px rgba(13,124,134,0.4)",
        "glow-gold": "0 0 20px rgba(239,163,29,0.35)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) both",
        wiggle: "wiggle 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
