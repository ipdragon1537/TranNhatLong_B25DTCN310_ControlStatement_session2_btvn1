let titleBook = prompt("Nhập tên sách:");
let categoryBook = prompt("Nhập thể loại sách:");
let conditonBook = prompt("Nhập tình trạng sách:");
let isAvailable = (conditonBook.toUpperCase() === "còn")
if (categoryBook === "Khoa học" || categoryBook === "Lịch sử"){
    if (isAvailable){
        console.log("Sách này đã có sẵn trong thư viện");
    } else {
        console.log("Sách này đã cho mượn");
    }
} else if (categoryBook === "Văn học" || categoryBook === "Truyện"){
    console.log("Sách này chỉ để đọc cho vui");
}