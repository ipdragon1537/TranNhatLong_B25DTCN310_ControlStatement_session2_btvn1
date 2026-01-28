let titleBook = prompt("Nhập tên sách:");
let yearCondition = prompt("Nhập năm xuất bản:");
let conditonBook = prompt("Nhập tình trạng sách:");
let yearPresent = new Date().getFullYear();
let isAvalable = true;
oddYear = yearPresent - yearCondition;
if (isAvalable && oddYear <=5 ){
    console.log("Sách này mới và có sẵn để mượn");
} else if (!isAvalable && oddYear <=10){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
} else if (!isAvalable && oddYear > 10){
    console.log("Sách này đã mượn và khá cũ");
} else if (!isAvalable && oddYear > 5){
    console.log("Sách này có sẵn nhưng đã lâu năm");
}