let titleBook = prompt("Nhập tên sách: ");
let author = prompt("Tác giả:");
let yearPublication = prompt("Năm xuất bản:");
const currentYear = new Date().getFullYear();
if (yearPublication == currentYear){
    console.log("Đây là sách mới");
} else if (currentYear - yearPublication <=5){
    console.log("Đây là sách khá mới");
} else {
    console.log("Đây là sách cũ");
}