import os
import re

q_dir = os.path.join(r"d:\Du-an-web\web-toan-12-phuc-hoa", "data", "questions")
extra_dir = os.path.join(r"d:\Du-an-web\web-toan-12-phuc-hoa", "data", "extra")

print("Checking questions:")
for f in sorted(os.listdir(q_dir)):
    if f.endswith(".ts"):
        p = os.path.join(q_dir, f)
        with open(p, "r", encoding="utf-8") as fp:
            c = fp.read()
        cnt = len(re.findall(r'"id":', c))
        print(f"  {f}: {cnt} questions")

print("\nChecking extra:")
for f in sorted(os.listdir(extra_dir)):
    if f.endswith(".ts"):
        p = os.path.join(extra_dir, f)
        with open(p, "r", encoding="utf-8") as fp:
            c = fp.read()
        cnt_tf = len(re.findall(r'"id":\s*"tf_', c))
        cnt_sa = len(re.findall(r'"id":\s*"sa_', c))
        print(f"  {f}: {cnt_tf} TF, {cnt_sa} SA")
