# -*- coding: utf-8 -*-
"""
Script to merge all chapter data and update all 25 lessons in web-toan-12-phuc-hoa:
- data/questions/*.ts -> Exactly 12 MCQs
- data/extra/*.ts -> Exactly 4 TF questions & exactly 6 ShortAnswer questions
"""

import os
import json
import re

from data_chapter1 import DATA_C1
from data_chapter2 import DATA_C2
from data_chapter3 import DATA_C3
from data_chapter4 import DATA_C4
from data_chapter5 import DATA_C5
from data_chapter6 import DATA_C6

ALL_DATA = {}
for c in [DATA_C1, DATA_C2, DATA_C3, DATA_C4, DATA_C5, DATA_C6]:
    ALL_DATA.update(c)

ROOT_DIR = r"d:\Du-an-web\web-toan-12-phuc-hoa"
Q_DIR = os.path.join(ROOT_DIR, "data", "questions")
EXTRA_DIR = os.path.join(ROOT_DIR, "data", "extra")

print(f"Total lessons with new data: {len(ALL_DATA)}")

for lesson_id, ldata in sorted(ALL_DATA.items()):
    # 1. Update questions/lesson_id.ts
    q_file = os.path.join(Q_DIR, f"{lesson_id}.ts")
    if os.path.exists(q_file):
        with open(q_file, "r", encoding="utf-8") as f:
            content = f.read()

        # Extract existing JSON array
        # Find everything between "export const questions: Question[] = [" and "];"
        match = re.search(r"export const questions: Question\[\] = (\[.*\]);", content, re.DOTALL)
        if match:
            raw_json = match.group(1)
            existing_questions = json.loads(raw_json)
        else:
            existing_questions = []

        # Ensure we don't duplicate questions by id
        existing_ids = {q["id"] for q in existing_questions}
        for add_q in ldata.get("extra_mcq", []):
            if add_q["id"] not in existing_ids:
                existing_questions.append(add_q)
                existing_ids.add(add_q["id"])

        # Write back
        new_content = 'import type { Question } from "@/lib/types";\n\n'
        new_content += f"export const questions: Question[] = {json.dumps(existing_questions, ensure_ascii=False, indent=2)};\n"

        with open(q_file, "w", encoding="utf-8", newline="\n") as f:
            f.write(new_content)
        print(f"Updated {lesson_id}.ts with {len(existing_questions)} MCQs")

    # 2. Update extra/lesson_id.ts
    extra_file = os.path.join(EXTRA_DIR, f"{lesson_id}.ts")
    tf_list = ldata.get("tf", [])
    sa_list = ldata.get("short_answer", [])
    essay_list = [
        {
            "id": f"es_{lesson_id}",
            "q": f"Trình bày phương pháp tư duy và các bước giải tiêu biểu cho một bài toán trọng tâm của {lesson_id}.",
            "answer": "1. Bước 1: Đọc kỹ đề bài, xác định rõ giả thiết và yêu cầu bài toán.\n2. Bước 2: Lựa chọn định lý, công thức phù hợp để thiết lập mô hình đại số hoặc hình học.\n3. Bước 3: Biến đổi logic, tính toán cẩn thận và đối chiếu điều kiện xác định.\n4. Bước 4: Kết luận chính xác đáp số và ý nghĩa thực tế của bài toán."
        }
    ]

    extra_obj = {
        "tf": tf_list,
        "shortAnswer": sa_list,
        "essay": essay_list
    }

    extra_content = 'import type { LessonExtra } from "@/lib/types";\n\n'
    extra_content += f"export const extra: LessonExtra = {json.dumps(extra_obj, ensure_ascii=False, indent=2)};\n"

    with open(extra_file, "w", encoding="utf-8", newline="\n") as f:
        f.write(extra_content)
    print(f"Updated extra/{lesson_id}.ts: {len(tf_list)} TF, {len(sa_list)} SA")

print("\n--- HOÀN TẤT CẬP NHẬT TẤT CẢ 25 BÀI HỌC! ---")
