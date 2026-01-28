let titleBook = prompt("Nhập tên sách:");
let borrower = prompt("Nhập người mượn:");
let Evaluate = parseInt(prompt("Nhập mức độ yêu thích:"));
if (Evaluate > 3){
    console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!")
} else {
    if (Evaluate = 3){
        console.log("Sách này khá ổn, có thể mượn");
    } else {
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
    }
}

