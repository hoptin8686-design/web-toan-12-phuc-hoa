# Hướng dẫn triển khai Web Ôn luyện Toán học 12 — THPT Phục Hòa

Trang web **Chinh phục Toán học 12** được xây dựng bằng **Next.js 14** và **Tailwind CSS**. Tích hợp đầy đủ 6 Chương (Tập 1 & Tập 2 SGK Kết nối tri thức), 201 trang SGK điện tử, Lý thuyết KaTeX sắc nét, Trắc nghiệm 3 phần chuẩn format thi Tốt nghiệp THPT 2025+ và Phòng thi thử thời gian thực.

---

## 1. Chạy thử trên máy tính cá nhân (Local)

### Các bước thực hiện:
1. Mở thư mục này trong terminal hoặc VS Code / Antigravity IDE.
2. Chạy máy chủ phát triển:
   ```bash
   npm run dev
   ```
3. Mở trình duyệt web và truy cập địa chỉ:
   ```
   http://localhost:3004
   ```

---

## 2. Đồng bộ & Cập nhật mã nguồn lên GitHub

Chỉ cần nhấp đúp vào tệp:
```bash
deploy_toan12.bat
```
Hoặc chạy lệnh trong terminal:
```bash
git add .
git commit -m "Cập nhật nội dung Toán 12"
git push origin main
```
Repository GitHub chính thức:
**https://github.com/hoptin8686-design/web-toan-12-phuc-hoa**

---

## 3. Triển khai lên Vercel (Miễn phí 100%, Tự động cập nhật)

1. Truy cập [vercel.com](https://vercel.com) và bấm **Log In** bằng tài khoản **GitHub** (`hoptin8686-design`).
2. Trên màn hình Dashboard của Vercel, bấm nút **Add New...** → chọn **Project**.
3. Tìm đến kho lưu trữ **`web-toan-12-phuc-hoa`** và bấm **Import**.
4. Các thông số cấu hình:
   - **Framework Preset**: Next.js (Vercel tự động nhận diện)
   - **Root Directory**: `./` (để mặc định)
   - **Build Command**: `next build` (mặc định)
   - **Output Directory**: `.next` (mặc định)
5. Bấm nút **Deploy**.
6. Chờ khoảng 1 phút, Vercel sẽ cấp đường link trực tuyến miễn phí (dạng `https://web-toan-12-phuc-hoa.vercel.app`) hoạt động 24/7 trên mọi thiết bị máy tính, điện thoại, máy tính bảng để gửi cho giáo viên và học sinh toàn trường sử dụng!
