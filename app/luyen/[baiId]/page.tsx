import { notFound } from "next/navigation";
import { CURRICULUM, getLessonById } from "@/data/curriculum";
import { getTheory } from "@/lib/theory";
import { getQuestions } from "@/lib/questions";
import { getExtra } from "@/lib/extras";
import LessonClient from "@/components/LessonClient";

export async function generateStaticParams() {
  return CURRICULUM.flatMap((topic) =>
    topic.lessons.map((l) => ({ baiId: l.id }))
  );
}

export async function generateMetadata({ params }: { params: { baiId: string } }) {
  const info = getLessonById(params.baiId);
  if (!info) return { title: "Không tìm thấy bài học — Toán 12" };
  return {
    title: `${info.lesson.title} — Chinh phục Toán 12 — THPT Phục Hòa`,
    description: `Học và tự luyện ${info.lesson.title}, ${info.topic.name} — Trường THPT Phục Hòa.`,
  };
}

export default function LessonPage({ params }: { params: { baiId: string } }) {
  const info = getLessonById(params.baiId);
  if (!info) notFound();

  const { lesson, topic } = info;
  const theory = getTheory(lesson.id);
  const mcq = getQuestions(lesson.id);
  const extra = getExtra(lesson.id);

  // Đường dẫn SGK số hóa HTML
  const sgkUrl = `/sgk/${lesson.id}.html`;

  return (
    <LessonClient
      lessonId={lesson.id}
      lessonTitle={lesson.title}
      topicName={topic.name}
      bookPages={lesson.bookPages}
      theory={theory}
      mcq={mcq}
      tf={extra?.tf ?? []}
      shortAnswer={extra?.shortAnswer ?? []}
      essay={extra?.essay ?? []}
      sgkUrl={sgkUrl}
    />
  );
}
