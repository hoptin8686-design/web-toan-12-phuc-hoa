import HomeClient from "@/components/HomeClient";
import { CURRICULUM } from "@/data/curriculum";
import { getQuestions } from "@/lib/questions";
import { getExtra } from "@/lib/extras";
import { hasTheory } from "@/lib/theory";
import type { LessonCounts } from "@/lib/types";

export const metadata = {
  title: "Chinh phục Toán 12 — Trường THPT Phục Hòa - Tỉnh Cao Bằng",
  description:
    "Hệ thống tự học và ôn thi trực tuyến môn Toán lớp 12 (Sách Kết nối tri thức với cuộc sống), tích hợp SGK điện tử, Lý thuyết tương tác, Trắc nghiệm 3 phần chuẩn format thi Tốt nghiệp THPT 2025 — Trường THPT Phục Hòa.",
};

export default function HomePage() {
  const counts: Record<string, LessonCounts> = {};

  for (const topic of CURRICULUM) {
    for (const lesson of topic.lessons) {
      const extra = getExtra(lesson.id);
      counts[lesson.id] = {
        mcq: getQuestions(lesson.id).length,
        tf: extra?.tf?.length ?? 0,
        essay: extra?.essay?.length ?? 0,
        theory: hasTheory(lesson.id),
      };
    }
  }

  return <HomeClient counts={counts} />;
}
