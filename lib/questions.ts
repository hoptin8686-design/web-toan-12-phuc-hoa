import type { Question } from "./types";
import { questions as bai01Qs } from "@/data/questions/bai-01";
import { questions as bai02Qs } from "@/data/questions/bai-02";
import { questions as bai03Qs } from "@/data/questions/bai-03";
import { questions as bai04Qs } from "@/data/questions/bai-04";
import { questions as bai05Qs } from "@/data/questions/bai-05";
import { questions as baicuoic1Qs } from "@/data/questions/bai-cuoi-c1";
import { questions as bai06Qs } from "@/data/questions/bai-06";
import { questions as bai07Qs } from "@/data/questions/bai-07";
import { questions as bai08Qs } from "@/data/questions/bai-08";
import { questions as baicuoic2Qs } from "@/data/questions/bai-cuoi-c2";
import { questions as bai09Qs } from "@/data/questions/bai-09";
import { questions as bai10Qs } from "@/data/questions/bai-10";
import { questions as baicuoic3Qs } from "@/data/questions/bai-cuoi-c3";
import { questions as bai11Qs } from "@/data/questions/bai-11";
import { questions as bai12Qs } from "@/data/questions/bai-12";
import { questions as bai13Qs } from "@/data/questions/bai-13";
import { questions as baicuoic4Qs } from "@/data/questions/bai-cuoi-c4";
import { questions as bai14Qs } from "@/data/questions/bai-14";
import { questions as bai15Qs } from "@/data/questions/bai-15";
import { questions as bai16Qs } from "@/data/questions/bai-16";
import { questions as bai17Qs } from "@/data/questions/bai-17";
import { questions as baicuoic5Qs } from "@/data/questions/bai-cuoi-c5";
import { questions as bai18Qs } from "@/data/questions/bai-18";
import { questions as bai19Qs } from "@/data/questions/bai-19";
import { questions as baicuoic6Qs } from "@/data/questions/bai-cuoi-c6";

export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": bai01Qs,
  "bai-02": bai02Qs,
  "bai-03": bai03Qs,
  "bai-04": bai04Qs,
  "bai-05": bai05Qs,
  "bai-cuoi-c1": baicuoic1Qs,
  "bai-06": bai06Qs,
  "bai-07": bai07Qs,
  "bai-08": bai08Qs,
  "bai-cuoi-c2": baicuoic2Qs,
  "bai-09": bai09Qs,
  "bai-10": bai10Qs,
  "bai-cuoi-c3": baicuoic3Qs,
  "bai-11": bai11Qs,
  "bai-12": bai12Qs,
  "bai-13": bai13Qs,
  "bai-cuoi-c4": baicuoic4Qs,
  "bai-14": bai14Qs,
  "bai-15": bai15Qs,
  "bai-16": bai16Qs,
  "bai-17": bai17Qs,
  "bai-cuoi-c5": baicuoic5Qs,
  "bai-18": bai18Qs,
  "bai-19": bai19Qs,
  "bai-cuoi-c6": baicuoic6Qs,
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] ?? [];
}
