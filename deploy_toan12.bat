@echo off
set "PATH=C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd;C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin;%PATH%"
cd /d "d:\Du-an-web\web-toan-12-phuc-hoa"

echo [1/3] Git add...
git add .

echo [2/3] Git commit...
git commit -m "feat: Cap nhat de thi thu chuan cau truc 2025 (12 cau trac nghiem, 4 cau dung sai, 6 cau tra loi ngan)"

echo [3/3] Git push...
git push origin main

echo HOAN THANH!
