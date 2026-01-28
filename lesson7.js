let hoTen = prompt("Nhập tên người dùng:");
let vaiTroInput = prompt("Nhập vai trò (admin, student, guest):");
let soDu = Number(prompt("Nhập số dư tài khoản thẻ:"));
let trangThaiTheInput = prompt("Trạng thái thẻ (nhập 'true' nếu hoạt động):");
let soNgayQuaHan = parseInt(prompt("Nhập số ngày quá hạn (0 nếu đúng hạn):"));
let vaiTro = vaiTroInput ? vaiTroInput.toLowerCase() : "";
let trangThaiThe = (trangThaiTheInput === "true");
let tenHienThi = hoTen ? hoTen.toUpperCase() : "ẨN DANH";
let thongBaoQuyen = "";
switch (vaiTro) {
    case "admin":
        thongBaoQuyen = "Chào Admin, bạn có toàn quyền hệ thống";
        break;
    case "student":
        thongBaoQuyen = "Chào sinh viên, bạn có thể mượn sách";
        break;
    case "guest":
        thongBaoQuyen = "Chào khách, bạn chỉ có thể đọc tại chỗ";
        break;
    default:
        thongBaoQuyen = "Lỗi: Vai trò không hợp lệ!";
}
let ketQuaMuon = "";
let lyDoTuChoi = "";
if (hoTen && (vaiTro === "admin" || vaiTro === "student") && soDu > 0 && trangThaiThe) {
    ketQuaMuon = "ĐƯỢC PHÉP MƯỢN SÁCH";
} else {
    ketQuaMuon = "YÊU CẦU BỊ TỪ CHỐI";
    if (!hoTen) lyDoTuChoi = "Tên trống";
    else if (vaiTro !== "admin" && vaiTro !== "student") lyDoTuChoi = "Sai vai trò";
    else if (soDu <= 0) lyDoTuChoi = "Hết tiền";
    else if (!trangThaiThe) lyDoTuChoi = "Thẻ bị khóa";
}
let tienPhat = 0;
let tinhTrangTra = "";
let canhBao = "";

if (soNgayQuaHan <= 0) {
    tinhTrangTra = "Đúng hạn";
    canhBao = "Cảm ơn bạn đã trả đúng hạn";
} else {
    tinhTrangTra = `Quá hạn ${soNgayQuaHan} ngày`;
    if (soNgayQuaHan <= 5) {
        tienPhat = soNgayQuaHan * 5000;
    } else if (soNgayQuaHan <= 10) {
        tienPhat = soNgayQuaHan * 10000;
    } else {
        tienPhat = 200000;
        canhBao = "TÀI KHOẢN BỊ KHÓA";
    }
}
console.log(`
--- HỆ THỐNG MƯỢN TRẢ ---
Người dùng: ${tenHienThi}
Quyền hạn: ${thongBaoQuyen}
Kết quả mượn: ${ketQuaMuon} ${lyDoTuChoi ? `(${lyDoTuChoi})` : ""}
Tình trạng trả sách: ${tinhTrangTra}
Tiền phạt: ${tienPhat} VNĐ
${canhBao ? `LƯU Ý: ${canhBao}` : ""}
`);