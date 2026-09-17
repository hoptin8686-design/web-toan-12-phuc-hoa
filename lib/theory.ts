import type { LessonTheory } from "./types";
import bai01 from "@/data/theory/bai-01";
import bai02 from "@/data/theory/bai-02";
import bai03 from "@/data/theory/bai-03";
import bai04 from "@/data/theory/bai-04";
import bai05 from "@/data/theory/bai-05";
import baicuoic1 from "@/data/theory/bai-cuoi-c1";
import bai06 from "@/data/theory/bai-06";
import bai07 from "@/data/theory/bai-07";
import bai08 from "@/data/theory/bai-08";
import baicuoic2 from "@/data/theory/bai-cuoi-c2";
import bai09 from "@/data/theory/bai-09";
import bai10 from "@/data/theory/bai-10";
import baicuoic3 from "@/data/theory/bai-cuoi-c3";
import bai11 from "@/data/theory/bai-11";
import bai12 from "@/data/theory/bai-12";
import bai13 from "@/data/theory/bai-13";
import baicuoic4 from "@/data/theory/bai-cuoi-c4";
import bai14 from "@/data/theory/bai-14";
import bai15 from "@/data/theory/bai-15";
import bai16 from "@/data/theory/bai-16";
import bai17 from "@/data/theory/bai-17";
import baicuoic5 from "@/data/theory/bai-cuoi-c5";
import bai18 from "@/data/theory/bai-18";
import bai19 from "@/data/theory/bai-19";
import baicuoic6 from "@/data/theory/bai-cuoi-c6";

export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
  "bai-02": bai02,
  "bai-03": bai03,
  "bai-04": bai04,
  "bai-05": bai05,
  "bai-cuoi-c1": baicuoic1,
  "bai-06": bai06,
  "bai-07": bai07,
  "bai-08": bai08,
  "bai-cuoi-c2": baicuoic2,
  "bai-09": bai09,
  "bai-10": bai10,
  "bai-cuoi-c3": baicuoic3,
  "bai-11": bai11,
  "bai-12": bai12,
  "bai-13": bai13,
  "bai-cuoi-c4": baicuoic4,
  "bai-14": bai14,
  "bai-15": bai15,
  "bai-16": bai16,
  "bai-17": bai17,
  "bai-cuoi-c5": baicuoic5,
  "bai-18": bai18,
  "bai-19": bai19,
  "bai-cuoi-c6": baicuoic6,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
