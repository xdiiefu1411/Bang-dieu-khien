document.addEventListener("DOMContentLoaded", function () {
  const nutMoMenu = document.getElementById("nutMoMenu");
  const thanhDieuHuong = document.getElementById("thanhDieuHuong");

  if (nutMoMenu && thanhDieuHuong) {
    nutMoMenu.addEventListener("click", function (suKien) {
      suKien.stopPropagation();
      thanhDieuHuong.classList.toggle("hien-thi");
    });

    document.addEventListener("click", function (suKien) {
      if (window.innerWidth <= 768) {
        if (
          !thanhDieuHuong.contains(suKien.target) &&
          !nutMoMenu.contains(suKien.target)
        ) {
          thanhDieuHuong.classList.remove("hien-thi");
        }
      }
    });
  }

  const cacMucMenu = document.querySelectorAll(".muc-menu");
  cacMucMenu.forEach(function (muc) {
    muc.addEventListener("click", function (suKien) {
      suKien.preventDefault();
      cacMucMenu.forEach((item) => item.classList.remove("hoat-dong"));
      this.classList.add("hoat-dong");

      if (window.innerWidth <= 768) {
        thanhDieuHuong.classList.remove("hien-thi");
      }
    });
  });

  const nutReview = document.querySelectorAll(".nut-hanh-dong");
  nutReview.forEach(function (nut) {
    nut.addEventListener("click", function () {
      const tenCV =
        this.closest(".muc-cong-viec").querySelector("h3").innerText;
      alert('Bạn đã chọn thao tác cho công việc: "' + tenCV + '"');
    });
  });

  const nutQuanLyPB = document.getElementById("nutQuanLyPhienBan");
  if (nutQuanLyPB) {
    nutQuanLyPB.addEventListener("click", function () {
      const mucQuanLy = document.querySelector(
        '[data-trang="quan-ly-phien-ban"]',
      );
      if (mucQuanLy) {
        mucQuanLy.click();
      } else {
        alert("Chuyển hướng đến trang Quản lý phiên bản.");
      }
    });
  }
});
