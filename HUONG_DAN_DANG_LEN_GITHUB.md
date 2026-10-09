# HƯỚNG DẪN ĐẨY LÊN GITHUB & KÍCH HOẠT WEBSITE `chungtt.github.io`

Dưới đây là các bước chính xác 100% dành cho tài khoản GitHub: **`chungtt`**  
Tên repository trang web của Thầy: **`chungtt.github.io`** (chọn chế độ **Public**).

---

## 🚀 CÁCH 1: ĐẨY TOÀN BỘ CODE BẰNG DÒNG LỆNH GIT (NHANH NHẤT - 1 PHÚT)

Thư mục này đã được khởi tạo sẵn Git trên máy tính của Thầy. Thầy chỉ cần thực hiện 2 bước đơn giản:

### Bước 1: Tạo Repository trên GitHub
1. Mở trình duyệt, truy cập đường dẫn: **[https://github.com/new](https://github.com/new)**
2. Tại ô **Repository name**, nhập đúng:
   ```text
   chungtt.github.io
   ```
3. Mục quyền riêng tư: chọn **Public** (công khai).
4. **Không** tích chọn bất kỳ ô nào như "Add a README" hay "Add .gitignore" (vì trong máy đã có sẵn).
5. Nhấn nút xanh **Create repository**.

### Bước 2: Chạy lệnh đẩy code từ máy lên GitHub
Thầy mở cửa sổ **PowerShell** hoặc **Terminal** ngay tại thư mục này và chạy lần lượt 3 lệnh sau:

```bash
git remote add origin https://github.com/chungtt/chungtt.github.io.git
git branch -M main
git push -u origin main
```
*(Nếu GitHub yêu cầu đăng nhập, trình duyệt sẽ hiện cửa sổ để Thầy bấm Sign In xác thực rất nhanh).*

Sau khi chạy xong, website sẽ tự động kích hoạt tại:
👉 **[https://chungtt.github.io](https://chungtt.github.io)**

---

## 🌐 CÁCH 2: NẾU THẦY MUỐN KÉO THẢ TRỰC TIẾP TRÊN TRÌNH DUYỆT (KHÔNG DÙNG LỆNH)

Nếu Thầy không muốn dùng dòng lệnh:
1. Vào **[https://github.com/new](https://github.com/new)** -> đặt tên repo là **`chungtt.github.io`** -> chọn **Public** -> nhấn **Create repository**.
2. Trên màn hình repo mới tạo, Thầy sẽ thấy dòng chữ:  
   *`...or upload an existing file`* -> **Nhấn vào chữ "uploading an existing file"**.
3. Mở thư mục trên máy tính: `C:\Users\User\Desktop\New folder (4)`.
4. Chọn toàn bộ các file & thư mục kéo thả vào cửa sổ trình duyệt:
   - `index.html`
   - thư mục `css`
   - thư mục `js`
   - thư mục `assets`
   - `PUBLICATIONS.md`
   - `README.md`
   - thư mục `publications`
   - `_config.yml`
5. Cuộn xuống dưới nhấn nút xanh **Commit changes**.
6. Vào mục **Settings** của repository -> Chọn **Pages** (cột trái) -> Tại mục **Branch** chọn `main` và `/ (root)` -> bấm **Save**.
7. Đợi 1 phút, website sẽ hoạt động trực tiếp tại: **[https://chungtt.github.io](https://chungtt.github.io)**.

---

## 👤 CÁCH 3: TẠO TRANG PROFILE GITHUB CÁ NHÂN GIỐNG `anhtaynguyen`
*(Để trang cá nhân `https://github.com/chungtt` có bảng giới thiệu, lý lịch và bài báo nổi bật)*

1. Vào **[https://github.com/new](https://github.com/new)**.
2. Tại ô **Repository name**, nhập đúng tên tài khoản của Thầy:
   ```text
   chungtt
   ```
   *(GitHub sẽ hiển thị thông báo đặc biệt: "You found a secret! chungtt/chungtt is a special repository").*
3. Chọn **Public** và tích chọn **Add a README file**.
4. Nhấn **Create repository**.
5. Mở file [README.md](./README.md) trong thư mục này, sao chép toàn bộ nội dung dán đè vào file `README.md` trên GitHub rồi nhấn **Commit changes**.
6. Khi ai đó bấm vào hồ sơ **`https://github.com/chungtt`**, toàn bộ thông tin khoa học của Thầy sẽ hiện lên đẹp mắt giống như trang của `anhtaynguyen`!

---

## 📚 CÁCH 4: TẠO REPO RIÊNG CHO CÁC BÀI BÁO (NẾU CẦN)
Nếu Thầy muốn có 1 repo riêng chỉ lưu bài báo khoa học:
1. Tạo repo mới tên: **`publications`** (tại `https://github.com/chungtt/publications`).
2. Tải 2 file lên:
   - File [PUBLICATIONS.md](./PUBLICATIONS.md) (đổi tên thành `README.md`).
   - File [publications/publications.bib](./publications/publications.bib) (chứa mã trích dẫn BibTeX).

---

## 📸 Lưu ý về Ảnh chân dung cá nhân:
- Hiện tại website đang dùng ảnh chân dung học thuật chuyên nghiệp trong thư mục `assets/img/avatar.jpg`.
- Bất cứ khi nào Thầy muốn dùng ảnh chụp chân dung thực tế của mình: chỉ cần lấy ảnh đó, đổi tên thành **`avatar.jpg`** và chép đè vào thư mục `assets/img/avatar.jpg`, sau đó đẩy lại lên GitHub là trang web sẽ tự cập nhật.
