# Bảng điều khiển CreatorStudio - Bài Kiểm Tra Giữa Kỳ CSE122

## 1. Thông tin sinh viên & Đề tài
- **Họ và tên:** Nguyễn Xuân Điều
- **Mã sinh viên:** 2551060601
- **Học phần:** Phát triển ứng dụng Web cơ bản – CSE122
- **Tên đề tài BTL:** Hệ thống quản lý và sáng tạo nhận diện thương hiệu (CreatorStudio)
- **Tên trang thực hiện:** Trang Bảng điều khiển (Dashboard)

---

## 2. Mục đích của trang
Trang **Bảng điều khiển** được thiết kế dành cho nhà thiết kế (Designer), giúp người dùng tổng hợp nhanh chóng các công việc cần làm, theo dõi trạng thái dự án, số liệu thống kê trực quan và tiếp nhận các góp ý, phản hồi mới nhất từ khách hàng hoặc thành viên nội bộ để kịp thời chỉnh sửa phiên bản thiết kế.

---

## 3. Các chức năng chính
- **Thống kê tổng quan:** Hiển thị số liệu về dự án đang làm, công việc chưa xong, phiên bản chờ duyệt và các mục cần xử lý gấp.
- **Quản lý danh sách công việc ("Việc của tôi"):** 
  - Xem danh sách các công việc chi tiết kèm hạn hoàn thành.
  - Bộ lọc trạng thái công việc (*Tất cả, Đang làm, Cần làm*).
  - Tương tác nút "Gửi review" hoặc "Bắt đầu" với thông báo tương ứng.
- **Theo dõi góp ý đang mở:** Hiển thị các phản hồi từ khách hàng hoặc đồng nghiệp theo từng phiên bản (v3).
- **Responsive / Menu linh hoạt:** 
  - Thanh điều hướng (Sidebar) đầy đủ các mục: *Bảng điều khiển, Moodboard, Quản lý phiên bản*.
  - Nút mở/đóng menu linh hoạt trên thiết bị di động (Mobile/Tablet) với hiệu ứng trượt mượt mà.

---

## 4. Công nghệ sử dụng
- **HTML5:** Sử dụng cấu trúc Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `button`, `select`...) đảm bảo tính chuẩn xác và dễ đọc.
- **CSS3:** 
  - Sử dụng CSS Variables (`:root`) để quản lý màu sắc đồng bộ.
  - Sử dụng **Flexbox** và **CSS Grid** để dàn trang layout hiện đại.
  - Thiết kế Responsive hoàn chỉnh cho cả màn hình Desktop và Mobile (Media Queries).
- **JavaScript (Vanilla):** 
  - Xử lý bật/tắt menu trên mobile và tự động ẩn khi click ra ngoài.
  - Chuyển đổi trạng thái hoạt động (`active`) cho các mục menu.
  - Xử lý sự kiện tương tác bấm nút thông báo hành động (`alert`).
  - Chức năng điều hướng nhanh đến trang Quản lý phiên bản.

---

## 5. Liên kết minh chứng
- [Link thiết kế Figma](https://www.figma.com/design/w9PWqTTjqXUzy1OzIdwXzL/B%E1%BA%A3ng-%C4%91i%E1%BB%81u-khi%E1%BB%83n--gk-?node-id=0-1&t=GdrOtexgGK2ZfzC2-1) 
- [Link Video trình bày sản phẩm trên YouTube](#) *(Thay dấu # bằng link video YouTube của bạn)*
- [Link GitHub Repository](https://github.com/xdiiefu1411/Bang-dieu-khien)

---

## 6. Cấu trúc mã nguồn (Directory Structure)
```text
Bang-dieu-khien/
├── gk.html          # Trang chính (Bảng điều khiển)
├── gk.css           # Tệp định dạng giao diện và Responsive
├── gk.js            # Tệp mã nguồn tương tác JavaScript
└── README.md        # Tài liệu giới thiệu dự án
