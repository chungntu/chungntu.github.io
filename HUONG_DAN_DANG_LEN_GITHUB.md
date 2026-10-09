# HƯỚNG DẪN ĐẨY LÊN GITHUB & KÍCH HOẠT WEBSITE `chungntu/chungtt.github.io`

Dành riêng cho tài khoản GitHub của Thầy: **`chungntu`**  
Repository đã tạo: **[https://github.com/chungntu/chungtt.github.io](https://github.com/chungntu/chungtt.github.io)**

---

## 🚀 BƯỚC 1: ĐẨY CODE TỪ MÁY LÊN GITHUB (CHẠY LỆNH HOẶC ĐÃ ĐƯỢC CẤU HÌNH SẴN)

Tại thư mục này (`c:\Users\User\Desktop\New folder (4)`), Thầy mở PowerShell/Terminal hoặc AI sẽ chạy giúp Thầy lệnh sau:

```bash
git remote set-url origin https://github.com/chungntu/chungtt.github.io.git
git push -u origin main
```

*(Nếu GitHub yêu cầu đăng nhập, một cửa sổ trình duyệt sẽ tự bật lên để Thầy nhấn **Sign in with your browser / Authorize** là xong).*

---

## 🌐 BƯỚC 2: BẬT GITHUB PAGES ĐỂ TRANG WEB HOẠT ĐỘNG ONLINE

Sau khi code đã được push lên GitHub:
1. Thầy vào trang repo: **[https://github.com/chungntu/chungtt.github.io](https://github.com/chungntu/chungtt.github.io)**
2. Bấm vào tab **Settings** (ở thanh menu phía trên).
3. Ở menu cột bên trái, bấm vào mục **Pages** (dưới nhóm *Code and automation*).
4. Tại mục **Build and deployment**:
   - **Source**: Chọn `Deploy from a branch`
   - **Branch**: Chọn nhánh `main` và thư mục `/ (root)`
   - Nhấn nút **Save**.
5. Đợi khoảng 1-2 phút, GitHub sẽ hiển thị đường link trang web trực tiếp:
   👉 **[https://chungntu.github.io/chungtt.github.io/](https://chungntu.github.io/chungtt.github.io/)**

> 💡 **Mẹo để có tên miền ngắn đẹp nhất `https://chungntu.github.io`:**  
> Nếu Thầy muốn link web ngắn gọn thành **`https://chungntu.github.io`** (không có đuôi `/chungtt.github.io`):  
> Vào **Settings** -> mục **General** -> ô **Repository name**: đổi tên thành **`chungntu.github.io`** rồi bấm **Rename**. Khi đó GitHub Pages sẽ chạy ngay tại **`https://chungntu.github.io`**!

---

## 👤 BƯỚC 3: TẠO TRANG PROFILE GITHUB CÁ NHÂN GIỐNG `anhtaynguyen`
*(Để trang cá nhân `https://github.com/chungntu` có lý lịch khoa học và bài báo nổi bật)*

1. Vào link: **[https://github.com/new](https://github.com/new)**.
2. Tại ô **Repository name**, nhập đúng tên tài khoản:
   ```text
   chungntu
   ```
   *(GitHub sẽ hiển thị biểu tượng hộp quà bí mật: "You found a secret! chungntu/chungntu is a special repository").*
3. Chọn **Public** và tích chọn **Add a README file**.
4. Nhấn nút xanh **Create repository**.
5. Mở file [README.md](./README.md) trong thư mục này, sao chép toàn bộ nội dung dán đè vào file `README.md` trên repo `chungntu` đó rồi nhấn **Commit changes**.
6. Ngay lập tức, khi bất kỳ ai bấm vào hồ sơ **`https://github.com/chungntu`**, toàn bộ thông tin khoa học, bài báo, trích dẫn của Thầy sẽ hiện lên cực kỳ chuyên nghiệp và đẹp mắt!

---

## 📚 BƯỚC 4: TẠO REPO RIÊNG CHO BÀI BÁO KHOA HỌC (TÙY CHỌN)
Nếu Thầy muốn có thêm một kho lưu trữ mã nguồn & dữ liệu bài báo riêng:
1. Tạo repo mới tên: **`publications`** (tại `https://github.com/chungntu/publications`).
2. Tải 2 file lên:
   - File [PUBLICATIONS.md](./PUBLICATIONS.md) (đổi tên thành `README.md`).
   - File [publications/publications.bib](./publications/publications.bib) (chứa mã trích dẫn BibTeX để ai cũng có thể trích dẫn).

---

## 📸 Lưu ý về Ảnh chân dung cá nhân:
- Hiện tại website đang dùng ảnh chân dung học thuật trong thư mục `assets/img/avatar.jpg`.
- Bất cứ khi nào Thầy muốn dùng ảnh chụp thực tế của mình: chỉ cần copy ảnh đó, đổi tên thành **`avatar.jpg`** và chép đè vào thư mục `assets/img/avatar.jpg`, sau đó push lại lên GitHub là trang web sẽ tự cập nhật.
