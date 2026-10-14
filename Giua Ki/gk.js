let danhSachNguoiDung = [
  {
    id: 1,
    name: "Lan Anh",
    email: "client@demo.vn",
    role: "Khách hàng",
    status: "Đang chạy",
    isMe: false,
  },
  {
    id: 2,
    name: "Minh Quân",
    email: "designer@demo.vn",
    role: "Nhà thiết kế",
    status: "Đang chạy",
    isMe: false,
  },
  {
    id: 3,
    name: "Thu Hà",
    email: "lead@demo.vn",
    role: "Creative Lead",
    status: "Đang chạy",
    isMe: false,
  },
  {
    id: 4,
    name: "Quản trị viên",
    email: "admin@demo.vn",
    role: "Quản trị viên",
    status: "Đang chạy",
    isMe: true,
  },
  {
    id: 5,
    name: "Gia Bảo",
    email: "bao@demo.vn",
    role: "Nhà thiết kế",
    status: "Đang chạy",
    isMe: false,
  },
  {
    id: 6,
    name: "Công ty Trà Việt",
    email: "travet@demo.vn",
    role: "Khách hàng",
    status: "Vô hiệu hóa",
    isMe: false,
  },
];

const bangNguoiDung = document.getElementById("bangNguoiDung");
const modalNguoiDung = document.getElementById("modalNguoiDung");
const moModalBtn = document.getElementById("moModalBtn");
const dongModalBtn = document.getElementById("dongModalBtn");
const formNguoiDung = document.getElementById("formNguoiDung");
const tieuDeModal = document.getElementById("tieuDeModal");

const oTimKiem = document.getElementById("oTimKiem");
const locVaiTro = document.getElementById("locVaiTro");
const locTrangThai = document.getElementById("locTrangThai");

function hienThiBang(data) {
  bangNguoiDung.innerHTML = "";
  data.forEach((user) => {
    let tr = document.createElement("tr");

    let nhanTrangThai =
      user.status === "Đang chạy"
        ? `<span class="nhan-trang-thai hoat-dong">Đang chạy</span>`
        : `<span class="nhan-trang-thai vo-hieu">Vô hiệu hóa</span>`;

    let textNutTrangThai =
      user.status === "Đang chạy" ? "Vô hiệu hóa" : "Kích hoạt";
    let theBan = user.isMe ? `<span class="nhan-ban">Bạn</span>` : "";

    tr.innerHTML = `
            <td><strong>${user.name}</strong> ${theBan}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${nhanTrangThai}</td>
            <td>
                <button class="nut-thao-tac" onclick="suaNguoiDung(${user.id})">Sửa</button>
                <button class="nut-thao-tac nguy-hiem" onclick="doiTrangThai(${user.id})">${textNutTrangThai}</button>
            </td>
        `;
    bangNguoiDung.appendChild(tr);
  });
}

function locDuLieu() {
  let tuKhoa = oTimKiem.value.toLowerCase();
  let vaiTroChon = locVaiTro.value;
  let trangThaiChon = locTrangThai.value;

  let ketQua = danhSachNguoiDung.filter((user) => {
    let khopTuKhoa =
      user.name.toLowerCase().includes(tuKhoa) ||
      user.email.toLowerCase().includes(tuKhoa);
    let khopVaiTro = vaiTroChon === "" || user.role === vaiTroChon;
    let khopTrangThai = trangThaiChon === "" || user.status === trangThaiChon;
    return khopTuKhoa && khopVaiTro && khopTrangThai;
  });

  hienThiBang(ketQua);
}

oTimKiem.addEventListener("input", locDuLieu);
locVaiTro.addEventListener("change", locDuLieu);
locTrangThai.addEventListener("change", locDuLieu);

moModalBtn.addEventListener("click", () => {
  tieuDeModal.innerText = "Thêm người dùng";
  formNguoiDung.reset();
  document.getElementById("maNguoiDung").value = "";
  modalNguoiDung.classList.add("hien-thi");
});

dongModalBtn.addEventListener("click", () => {
  modalNguoiDung.classList.remove("hien-thi");
});

formNguoiDung.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = document.getElementById("maNguoiDung").value;
  let name = document.getElementById("nhapHoTen").value;
  let email = document.getElementById("nhapEmail").value;
  let role = document.getElementById("nhapVaiTro").value;

  if (id) {
    let user = danhSachNguoiDung.find((u) => u.id == id);
    if (user) {
      user.name = name;
      user.email = email;
      user.role = role;
    }
  } else {
    let nguoiDungMoi = {
      id: Date.now(),
      name: name,
      email: email,
      role: role,
      status: "Đang chạy",
      isMe: false,
    };
    danhSachNguoiDung.push(nguoiDungMoi);
  }

  modalNguoiDung.classList.remove("hien-thi");
  locDuLieu();
});

window.suaNguoiDung = function (id) {
  let user = danhSachNguoiDung.find((u) => u.id == id);
  if (user) {
    tieuDeModal.innerText = "Sửa thông tin người dùng";
    document.getElementById("maNguoiDung").value = user.id;
    document.getElementById("nhapHoTen").value = user.name;
    document.getElementById("nhapEmail").value = user.email;
    document.getElementById("nhapVaiTro").value = user.role;
    modalNguoiDung.classList.add("hien-thi");
  }
};

window.doiTrangThai = function (id) {
  let user = danhSachNguoiDung.find((u) => u.id == id);
  if (user) {
    user.status = user.status === "Đang chạy" ? "Vô hiệu hóa" : "Đang chạy";
    locDuLieu();
  }
};

hienThiBang(danhSachNguoiDung);
