// Xử lý sự kiện khi nhấn nút "Đăng ký"
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn hành động submit mặc định

    // Lấy dữ liệu từ form
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Kiểm tra nếu các trường chưa được nhập
    if (!username || !email || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    // Thông báo đăng ký thành công
    alert("Đăng ký tài khoản thành công!");

    // Chuyển hướng đến trang quản lý xe
    window.location.href = "index.html"; // Thay "quanlyxe.html" bằng tên file của bạn
});
