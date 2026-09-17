import type { Metadata } from "next";
import ThiThuClient from "@/components/ThiThuClient";

export const metadata: Metadata = {
  title: "Phòng Thi Thử Tốt Nghiệp THPT 2025 môn Toán — THPT Phục Hòa",
  description: "Đề thi thử Tốt nghiệp THPT môn Toán 12 theo cấu trúc mới 2025 của Bộ GD&ĐT có bấm giờ và chấm điểm tự động — Trường THPT Phục Hòa.",
};

export default function ThiThuPage() {
  return <ThiThuClient />;
}
