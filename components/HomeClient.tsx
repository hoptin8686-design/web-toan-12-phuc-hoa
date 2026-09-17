"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress, getErrorStats } from "@/lib/progress";
import { chuDeCanOnLai, type ChuDeCanOnLai } from "@/lib/onLai";
import type { LessonCounts, ProgressMap } from "@/lib/types";

function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-leaf/20 px-2.5 py-0.5 font-mono text-xs font-bold text-leaf-deep">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-gold/20 px-2.5 py-0.5 font-mono text-xs font-bold text-gold-deep">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-berry/20 px-2.5 py-0.5 font-mono text-xs font-bold text-berry">
      {best}%
    </span>
  );
}

export default function HomeClient({
  counts,
}: {
  counts: Record<string, LessonCounts>;
}) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [canOnLai, setCanOnLai] = useState<ChuDeCanOnLai[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVolume, setSelectedVolume] = useState<0 | 1 | 2>(0); // 0 = Tất cả, 1 = Tập 1, 2 = Tập 2

  useEffect(() => {
    setProgress(getProgress());
    setCanOnLai(chuDeCanOnLai(getErrorStats()));
    setLoaded(true);
  }, []);

  const allLessons = CURRICULUM.flatMap((t) => t.lessons);
  const starCount = allLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;

  const filteredCurriculum = CURRICULUM.filter((topic) => {
    if (selectedVolume === 1 && topic.volume !== 1) return false;
    if (selectedVolume === 2 && topic.volume !== 2) return false;
    return true;
  }).map((topic) => ({
    ...topic,
    lessons: topic.lessons.filter((l) =>
      searchTerm.trim() === ""
        ? true
        : l.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          topic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (l.highlight && l.highlight.toLowerCase().includes(searchTerm.toLowerCase()))
    ),
  })).filter((topic) => topic.lessons.length > 0);

  return (
    <main className="playground min-h-screen pb-20">
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        {/* HEADER THƯƠNG HIỆU PHỤC HÒA CHUẨN */}
        <header className="text-center">
          <div className="inline-flex flex-col items-center">
            {/* Huy hiệu trường */}
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sea via-[#14B8A6] to-coral px-5 py-2 font-display text-sm sm:text-base font-bold text-white shadow-card">
              <span>🏫</span>
              <span>Trường THPT Phục Hòa - Tỉnh Cao Bằng</span>
            </div>
            <p className="mt-2 font-mono text-xs sm:text-sm font-semibold text-sea-deep tracking-wide">
              Tổ Tự nhiên — Năm học 2026-2027
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2 text-4xl sm:text-5xl">
            <span>📈</span>
            <span>∫</span>
            <span>🌐</span>
            <span>🎲</span>
          </div>

          <h1 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-star">
            Chinh phục{" "}
            <span className="bg-gradient-to-r from-sea via-sea-deep to-coral bg-clip-text text-transparent">
              Toán học 12
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-star-soft leading-relaxed">
            Hệ thống tự học và ôn thi trực tuyến môn Toán lớp 12 theo chương trình GDPT 2018 bộ sách <strong>Kết nối tri thức với cuộc sống</strong> (Tập 1 & Tập 2).
            Bao gồm <strong>6 Chương trọng tâm</strong>: Đạo hàm & Khảo sát đồ thị, Vectơ toạ độ không gian, Thống kê ghép nhóm, Nguyên hàm tích phân, Toạ độ Oxyz, Xác suất có điều kiện. Luyện trắc nghiệm 3 phần chuẩn format thi Tốt nghiệp THPT 2025+.
          </p>

          {/* Thanh chỉ số thành tích */}
          {loaded && (
            <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-sea/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-sea-deep shadow-card">
                🏆 Đã mở khóa: <strong>{starCount}</strong> / {allLessons.length} sao vàng
              </span>
              <span className="rounded-full border border-coral/30 bg-void-card px-4 py-1.5 font-mono text-xs sm:text-sm text-coral-deep shadow-card">
                📖 6 Chương · 25 Bài SGK KNTT
              </span>
            </div>
          )}
        </header>

        {/* NÚT TRUY CẬP NHANH: SGK ĐIỆN TỬ VÀ THI THỬ TỐT NGHIỆP THPT */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Card SGK Điện tử */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-sea/40 bg-gradient-to-br from-sea/[0.15] via-void-card to-sea/[0.05] p-5 shadow-card">
            <div>
              <span className="rounded-full bg-sea/20 px-3 py-1 font-mono text-xs font-bold text-sea-deep">
                📖 Trực quan trên máy vi tính
              </span>
              <h2 className="mt-2.5 font-display text-xl font-bold text-star">
                Sách giáo khoa Điện tử Toán 12
              </h2>
              <p className="mt-1 text-xs text-star-soft leading-relaxed">
                Tích hợp toàn bộ 201 trang scan chuẩn từ SGK gốc (Tập 1 & Tập 2). Hỗ trợ cuộn liên tục, lật từng trang, phóng to chữ và làm bài tập song song.
              </p>
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <Link
                href="/luyen/bai-01"
                className="flex items-center justify-between rounded-xl border border-sea/30 bg-sea/10 px-3 py-2 text-xs font-bold text-sea-deep hover:bg-sea/20 transition"
              >
                <span>📈 Bài 1: Tính đơn điệu & cực trị (Tập 1)</span>
                <span>Đọc ngay →</span>
              </Link>
              <Link
                href="/luyen/bai-11"
                className="flex items-center justify-between rounded-xl border border-sea/30 bg-sea/10 px-3 py-2 text-xs font-bold text-sea-deep hover:bg-sea/20 transition"
              >
                <span>∫ Bài 11: Nguyên hàm (Tập 2)</span>
                <span>Đọc ngay →</span>
              </Link>
            </div>
          </div>

          {/* Card Phòng Thi Thử Tốt Nghiệp THPT */}
          <div className="flex flex-col justify-between rounded-3xl border-2 border-coral/40 bg-gradient-to-br from-coral/[0.15] via-void-card to-coral/[0.05] p-5 shadow-card">
            <div>
              <span className="rounded-full bg-coral/20 px-3 py-1 font-mono text-xs font-bold text-coral-deep">
                ⏱️ Phòng Thi Thử Tốt Nghiệp 2025
              </span>
              <h2 className="mt-2.5 font-display text-xl font-bold text-star">
                Đề Thi Thử Tốt Nghiệp THPT
              </h2>
              <p className="mt-1 text-xs text-star-soft leading-relaxed">
                Đề thi chuẩn cấu trúc mới của Bộ GD&ĐT (Trắc nghiệm nhiều lựa chọn, Đúng/Sai, Trả lời ngắn). Có đồng hồ đếm ngược và chấm điểm tự động.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="/thi-thu"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-coral to-gold px-4 py-3 font-display text-sm font-bold text-white shadow-card hover:shadow-glow transition"
              >
                <span>🎯 Vào phòng thi thử ngay</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* CẢNH BÁO CHỦ ĐỀ CẦN ÔN LẠI */}
        {loaded && canOnLai.length > 0 && (
          <div className="mt-6 rounded-3xl border border-berry/30 bg-berry/10 p-5 backdrop-blur shadow-card">
            <div className="flex items-center gap-2">
              <span className="text-xl">⚠️</span>
              <h3 className="font-display text-base font-bold text-star">
                Chuyên đề bạn cần củng cố thêm:
              </h3>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {canOnLai.map((c) => (
                <span
                  key={c.id}
                  className="rounded-xl border border-berry/30 bg-void-card px-3 py-1 text-xs font-semibold text-berry"
                >
                  {c.emoji} {c.name}: sai {c.tyLeSai}%
                </span>
              ))}
            </div>
          </div>
        )}

        {/* THANH TÌM KIẾM VÀ BỘ LỌC TẬP 1 / TẬP 2 */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Bộ lọc Tập 1 / Tập 2 */}
          <div className="inline-flex rounded-2xl border border-sea/20 bg-void-card p-1">
            <button
              onClick={() => setSelectedVolume(0)}
              className={`rounded-xl px-4 py-1.5 font-mono text-xs font-bold transition ${
                selectedVolume === 0
                  ? "bg-sea text-white shadow"
                  : "text-star-soft hover:text-star"
              }`}
            >
              Tất cả (6 Chương)
            </button>
            <button
              onClick={() => setSelectedVolume(1)}
              className={`rounded-xl px-4 py-1.5 font-mono text-xs font-bold transition ${
                selectedVolume === 1
                  ? "bg-sea text-white shadow"
                  : "text-star-soft hover:text-star"
              }`}
            >
              📘 Tập 1
            </button>
            <button
              onClick={() => setSelectedVolume(2)}
              className={`rounded-xl px-4 py-1.5 font-mono text-xs font-bold transition ${
                selectedVolume === 2
                  ? "bg-sea text-white shadow"
                  : "text-star-soft hover:text-star"
              }`}
            >
              📙 Tập 2
            </button>
          </div>

          {/* Ô tìm kiếm */}
          <div className="relative flex-1 sm:max-w-xs">
            <input
              type="text"
              placeholder="Tìm bài học, chủ đề..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-sea/25 bg-void-card px-4 py-2 text-xs text-star placeholder:text-star-soft/60 focus:border-sea focus:outline-none focus:ring-1 focus:ring-sea"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-2 text-xs text-star-soft hover:text-star"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* DANH SÁCH CÁC CHƯƠNG VÀ BÀI HỌC */}
        <div className="mt-6 space-y-6">
          {filteredCurriculum.map((topic) => (
            <section
              key={topic.id}
              className="rounded-3xl border border-sea/20 bg-void-card/80 p-5 backdrop-blur shadow-card transition hover:border-sea/40"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{topic.emoji}</span>
                  <div>
                    <h2 className="font-display text-base sm:text-lg font-bold text-star">
                      {topic.name}
                    </h2>
                    <span className="text-[11px] font-mono text-sea-deep">
                      {topic.volume === 1 ? "Toán 12 — Tập 1" : "Toán 12 — Tập 2"}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-void-light px-3 py-1 font-mono text-xs text-star-soft">
                  {topic.lessons.length} bài
                </span>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {topic.lessons.map((lesson) => {
                  const p = progress[lesson.id];
                  const c = counts[lesson.id];
                  return (
                    <Link
                      key={lesson.id}
                      href={`/luyen/${lesson.id}`}
                      className="group flex flex-col justify-between rounded-2xl border border-white/5 bg-void/60 p-4 transition hover:border-sea/50 hover:bg-void-light/50"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-display text-sm font-bold text-star group-hover:text-sea-deep transition">
                            {lesson.title}
                          </h3>
                          {p && <ScoreBadge best={p.best} />}
                        </div>
                        {lesson.highlight && (
                          <p className="mt-1 text-xs text-star-soft line-clamp-2">
                            {lesson.highlight}
                          </p>
                        )}
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-star-soft/80 border-t border-white/5 pt-2">
                        <span>{lesson.bookPages ?? "SGK"}</span>
                        <div className="flex items-center gap-2 text-sea-deep">
                          <span>{c?.mcq ?? 10} trắc nghiệm</span>
                          <span>•</span>
                          <span>Đúng/Sai</span>
                          <span>•</span>
                          <span>SGK ↗</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* FOOTER BẢN QUYỀN */}
        <footer className="mt-12 text-center text-xs text-star-soft">
          <p>
            © 2026 — 2027 Trường THPT Phục Hòa, Huyện Quảng Hòa, Tỉnh Cao Bằng.
          </p>
          <p className="mt-1 text-sea-deep/80">
            Hệ thống Chinh phục Toán học 12 — Vì sự tiến bộ của học sinh Phục Hòa.
          </p>
        </footer>
      </div>
    </main>
  );
}
