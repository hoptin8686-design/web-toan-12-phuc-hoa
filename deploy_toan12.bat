@echo off
set "PATH=C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd;C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin;%PATH%"
cd /d "d:\Du-an-web\web-toan-12-phuc-hoa"

echo [1/3] Git add...
git add .

echo [2/3] Git commit...
git commit -m "update: Chuan hoa toan bo phong chu Inter va sua loi ma hoa tieng Viet de thi thu"

echo [3/3] Git push...
git push origin main

echo HOAN THANH!
