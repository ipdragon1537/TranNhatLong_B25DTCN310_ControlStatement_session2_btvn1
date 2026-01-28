let numberBook = prompt("Nhập số sách:");
if (numberBook <=10){
    console.log("Thư viện có ít sách");
} else if (10 <= numberBook <= 20 ){
    console.log("Thư viện có số lượng sách đầy đủ ")
} else {
    console.log("Thư viện có nhiều sách");
}