
let tenSach = prompt("Nhập tên sách:");
let tenNguoiMuon = prompt("Nhập tên người mượn:");
let tinhTrang = prompt("Nhập tình trạng sách (có sẵn, đã mượn, không có sẵn):").toLowerCase();
let soNgayMuon = parseInt(prompt("Nhập số ngày muốn mượn:"));
let coTheThuVien = prompt("Bạn có thẻ thư viện không? (co/khong):").toLowerCase() === "co";
if (tinhTrang === "co san") {
    if (coTheThuVien) {
        console.log("Chúc mừng, bạn có thể mượn sách này.");
    } else {
        console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
    }

} else if (tinhTrang === "da muon") {
    if (soNgayMuon < 30) {
        if (coTheThuVien) {
            console.log("Sách đang được mượn, vui lòng đợi đến khi trả lại.");
        } else {
            console.log("Bạn không thể mượn sách nếu không có thẻ thư viện.");
        }
    } else {
        console.log("Thời gian mượn quá dài, vui lòng liên hệ quản lý.");
    }

} else if (tinhTrang === "khong co san") {
    console.log("Sách này hiện tại không có sẵn trong thư viện, bạn có thể đăng ký mượn sau.");

} else {
    console.log("Thông tin không hợp lệ, vui lòng nhập lại.");
}