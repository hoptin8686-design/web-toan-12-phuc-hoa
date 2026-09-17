import { CURRICULUM } from "@/data/curriculum";
import type { ErrorStat } from "./types";

const NGUONG_SO_CAU = 4;
const NGUONG_TY_LE_SAI = 25; // Từ 25% câu sai trở lên

export type BaiCanOnLai = {
  id: string;
  title: string;
  tyLeSai: number;
  soCauDaLam: number;
};

export type ChuDeCanOnLai = {
  id: string;
  name: string;
  emoji: string;
  tyLeSai: number;
  soCauSai: number;
  soCauDaLam: number;
  bai: BaiCanOnLai[];
};

export function chuDeCanOnLai(errors: Record<string, ErrorStat>): ChuDeCanOnLai[] {
  const ketQua: ChuDeCanOnLai[] = [];

  for (const chuDe of CURRICULUM) {
    let sai = 0;
    let tong = 0;
    const bai: BaiCanOnLai[] = [];

    for (const lesson of chuDe.lessons) {
      const stat = errors[lesson.id];
      if (!stat || stat.totalAnswered <= 0) continue;
      sai += stat.wrongCount;
      tong += stat.totalAnswered;

      const tyLe = Math.round((stat.wrongCount / stat.totalAnswered) * 100);
      if (stat.totalAnswered >= NGUONG_SO_CAU && tyLe >= NGUONG_TY_LE_SAI) {
        bai.push({
          id: lesson.id,
          title: lesson.title,
          tyLeSai: tyLe,
          soCauDaLam: stat.totalAnswered,
        });
      }
    }

    if (tong < NGUONG_SO_CAU) continue;
    const tyLeChuDe = Math.round((sai / tong) * 100);
    if (tyLeChuDe < NGUONG_TY_LE_SAI && bai.length === 0) continue;

    ketQua.push({
      id: chuDe.id,
      name: chuDe.name,
      emoji: chuDe.emoji,
      tyLeSai: tyLeChuDe,
      soCauSai: sai,
      soCauDaLam: tong,
      bai: bai.sort((a, b) => b.tyLeSai - a.tyLeSai),
    });
  }

  return ketQua.sort((a, b) => b.tyLeSai - a.tyLeSai);
}
