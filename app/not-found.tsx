import Link from "next/link";

export default function NotFound() {
  return (
    <main className="playground flex min-h-screen items-center justify-center p-4">
      <div className="rounded-3xl border border-sea/30 bg-void-card/90 p-8 text-center shadow-card max-w-md">
        <span className="text-5xl">📐</span>
        <h1 className="mt-4 font-display text-2xl font-bold text-star">
          404 — Không tìm thấy trang
        </h1>
        <p className="mt-2 text-xs text-star-soft">
          Bài học hoặc đường dẫn này không tồn tại trong chương trình Toán học 12.
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex rounded-2xl bg-sea px-5 py-2.5 font-display text-xs font-bold text-white shadow hover:bg-sea/90 transition"
          >
            ← Quay lại Trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
