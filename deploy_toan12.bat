@echo off
chcp 65001 > nul
echo ========================================================
echo   CHINH PHỤC TOÁN 12 — TRƯỜNG THPT PHỤC HÒA
echo   Tự động cập nhật Git ^& Đẩy lên GitHub
echo ========================================================
set "PATH=C:\Users\DMX HOA THUAN\AppData\Local\Programs\Git\cmd;C:\Users\DMX HOA THUAN\AppData\Local\Programs\gh\bin;%PATH%"

cd /d "d:\Du-an-web\web-toan-12-phuc-hoa"

echo [1/3] Kiểm tra trạng thái thay đổi...
git status -s

echo [2/3] Lưu thay đổi và tạo commit...
git add .
git commit -m "update: Cập nhật nội dung Toán 12 THPT Phục Hòa"

echo [3/3] Đẩy lên GitHub repository...
git push origin main

echo.
echo ========================================================
echo   ✅ ĐÃ ĐẨY LÊN GITHUB THÀNH CÔNG!
echo   Repo: https://github.com/hoptin8686-design/web-toan-12-phuc-hoa
echo   Vercel sẽ tự động kích hoạt bản build mới sau 1-2 phút!
echo ========================================================
pause
