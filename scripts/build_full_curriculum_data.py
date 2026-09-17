# -*- coding: utf-8 -*-
"""
Script to ensure each of the 25 lesson units in web-toan-12-phuc-hoa has:
- Exactly 12 MCQs (Phần I)
- Exactly 4 True/False questions (Phần II - each with 4 statements a, b, c, d)
- Exactly 6 Short Answer questions (Phần III - with precise numeric/fraction answers & step-by-step explanations)
"""

import os
import json
import re

ROOT_DIR = r"d:\Du-an-web\web-toan-12-phuc-hoa"
Q_DIR = os.path.join(ROOT_DIR, "data", "questions")
EXTRA_DIR = os.path.join(ROOT_DIR, "data", "extra")

# Define high quality additions for each lesson
# We will create a comprehensive dictionary of all 25 lessons
