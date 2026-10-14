# BÀI KIỂM TRA GIỮA KỲ - HỌC PHẦN PHÁT TRIỂN ỨNG DỤNG WEB CƠ BẢN (CSE122)

## 📌 THÔNG TIN CHUNG
* **Đề tài BTL:** Hệ thống quản lý sáng tạo nội dung - CreatorStudio
* **Tên trang thực hiện:** Quản lý người dùng (User Management / Admin - User Management)
* **Họ và tên:** Nguyễn Xuân Điều
* **Mã sinh viên:** 2551060601
* **Lớp:** 67CNTT1

---

## 🎯 MỤC ĐÍCH CỦA TRANG
Trang **Quản lý người dùng** dành cho **Quản trị viên (Admin)** của hệ thống CreatorStudio. Trang giúp Admin dễ dàng theo dõi danh sách toàn bộ người dùng, quản lý vai trò (Khách hàng, Nhà thiết kế, Creative Lead, Quản trị viên) và thực hiện các thao tác quản trị tài khoản (thêm mới, chỉnh sửa, vô hiệu hóa/kích hoạt tài khoản).

---

## 🚀 CÁC CHỨC NĂNG CHÍNH
1. **Hiển thị danh sách người dùng (Render Data):** Hiển thị danh sách người dùng dưới dạng bảng gồm các thông tin: Họ tên, Email, Vai trò, Trạng thái hoạt động, Thao tác.
2. **Tìm kiếm & Lọc người dùng:** 
   * Tìm kiếm theo tên hoặc email người dùng.
   * Lọc người dùng theo Vai trò (Khách hàng, Nhà thiết kế, Creative Lead, Quản trị viên).
   * Lọc người dùng theo Trạng thái (Đang chạy, Vô hiệu hóa).
3. **Thêm người dùng mới (Modal / Popup Form):**
   * Mở/Đóng Modal thêm người dùng khi nhấn nút `+ Thêm người dùng` hoặc nút `Hủy`.
   * Nhập Họ tên, Email và chọn Vai trò người dùng.
   * Validate dữ liệu đầu vào (kiểm tra trường bắt buộc, định dạng email).
4. **Thay đổi trạng thái tài khoản:**
   * Nút hành động cho phép **Vô hiệu hóa** hoặc **Kích hoạt** người dùng trực tiếp trên danh sách.

---

## 🛠 CÔNG NGHỆ SỬ DỤNG
* **HTML5:** Cấu trúc Semantic HTML (`header`, `nav`, `main`, `section`, `table`, `form`...).
* **CSS3:** Flexbox, CSS Grid, Media Queries (đáp ứng Responsive cơ bản cho Desktop/Mobile), Custom Button, Modal styling, Status Badges.
* **JavaScript (ES6):**
  * DOM Manipulation (`querySelector`, `getElementById`, `innerHTML`, `classList`).
  * Event Handling (`click`, `input`, `submit`).
  * Array Filtering & Rendering (xử lý dữ liệu động).
  * Modal Control (Mở/Đóng dialog thêm người dùng).

---

## 🔗 CÁC LIÊN KẾT BÀI NỘP
* **Link Figma:** (https://www.figma.com/design/w9PWqTTjqXUzy1OzIdwXzL/B%E1%BA%A3ng-%C4%91i%E1%BB%81u-khi%E1%BB%83n--gk-?node-id=0-1&t=Lg809pkMCAb5uA1h-1)
* **Link GitHub Repository:** [Dán link repo GitHub của bạn vào đây]
* **Link Video trình bày:** [Dán link Video (Youtube/Drive) của bạn vào đây]

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN
```text
project/
├── index.html          # Trang Quản lý người dùng
├── css/
│   └── style.css       # File định dạng CSS
├── js/
│   └── main.js         # File xử lý tương tác JavaScript (Modal, Search, Filter, Render)
├── assets/             # Chứa hình ảnh, icons, logo
└── README.md           # Báo cáo thông tin bài kiểm tra
