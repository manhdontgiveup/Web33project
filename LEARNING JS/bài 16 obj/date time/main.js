// navigator.toSring()
// string
// - có thuộc tính length
// lấy giá trị: str[0];
//  các phương thúc của chuổi:
//  -
//  -
//  khi sử dụng phương thức đều tạo thành chuỗi mới. không làm thay đổi chuỗi cũ

// let myName = "Ba nguyễn";
// console.log(myName.length);
// for (let character of myName) {
//   console.log(character);
// }
// console.log(`bien doi chu hoa: ${myName.toUpperCase()}`);
// console.log(`cắt theo dấu cách: ${myName.split(" ")}`);

// // viết hàm loại bỏ ký tự nguyên âm
// let str = "chuyện chàng ca sĩ đi chơi đêm bị bắt bacodihu";
// // duyệt chuỗi

// function nguyenam(str) {
//   let newSring = str;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u"
//     ) {
//       newSring = str.replace(str[i], "");
//     }
//   }
//   return newSring;
// }
// console.log(nguyenam(str));

// cách khác

// sử dụng
// RegularExpression rất mạnh mẽ đối với string

// function Nguyenam(str) {
//     str =str.replaceALl([aeuoi], "");
//     return str;
// }
// console.log(Nguyenam(str));

// date time

//date time sử dụng rất nhiều trong dự án thự tế
const now = new Date();

console.log(now);

const birthday = new Date("1988-03-15");

console.log(birthday);

const today = new Date(2023, 03, 22);

console.log(today);

const time = Date.now();

console.log(time);

console.log(birthday.getMonth());
console.log(birthday.getTimezoneOffset());
console.log(birthday.getDay());

console.log(birthday.toLocaleTimeString("vi-VN"));

// bài tập phan date time
// 1. Viết hàm trả về ngày tháng hiện tại theo định dạng ISO (YYYY-MM-DD)
function getCurrentDate() {
  // Code
  // tạo 1 biến là ngày tháng hiện tại
  let currentDate = new Date();
  // lấy biến năm
  let year = currentDate.getFullYear();
  // lấy biến tháng ( từ 0-11) do vậy phải +1 sử dụng .ToString để chuyển thành chuỗi
  let month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  //lấy biến ngày sử dụng phương thức .padStart (2, "0") để chuỗi ngày luôn ở dạng 2 chữ số
  let day = currentDate.getDate().toString().padStart(2, "0");
  // biến hiển thị ngày tháng năm
  let dateIso = ` ${year} - ${month} - ${day}`;
  return dateIso; // Kết quả
}
console.log(getCurrentDate());

// // 2. Viết hàm trả về số ngày giữa 2 ngày bất kỳ
// // dateString1 và dateString2 là 2 chuỗi ngày tháng dạng YYYY-MM-DD
let dateString1 = "2023-02-23";
let dateString2 = "2023-03-23";
function getDaysBetweenDates(dateString1, dateString2) {
  // Code
  // khởi tạo đối tượng từ 2 chuỗi ngày tháng đầu  vào
let date1 = new Date(dateString1);
let date2 = new Date(dateString2);
// tính toán khoảng thời gian giữa 2 đối tượng bằng lấy trị tuyệt đối của hiệu 2 đối tượng
 let diffTime = Math.abs(date2 - date1);
 // kết qyar của phép tính này trả về dưới dạng mili giây
  let diffdays = Math.ceil(diffTime/(1000*60*60*24));
 return diffdays; // Kết quả
}
console.log(getDaysBetweenDates(dateString1, dateString2));
// // 3. Viết hàm trả về chuỗi cho biết thời gian hiện tại theo định dạng 24h (HH:mm:ss)
function getCurrentTime() {
  // Code
// tạo biến mặc định là ngày hiện tại
let now = new Date();
// lấy giờ 
let hours = now.getHours();
// lấy phút
let minutes = now.getMinutes();
// lấy giây
let seconds = now.getSeconds();
// Biến chứa kết quả 
let ketqua = `${hours} - ${minutes} - ${seconds}`;
  return ketqua; // Kết quả
}
console.log(getCurrentTime());

// // 4. Viết hàm cho biết thứ tương ứng với ngày truyền vào
// // Ví dụ: Thứ 2, Thứ 3, ...
// dateString là một chuỗi ngày tháng dạng YYYY-MM-DD
let dateString = "2023-03-25"
function getDayOfWeek(dateString) {
  // Code
// khai bao bien
let date = new Date(dateString);
// Lấy ra ngày 
let day = date.getDay();
// ngày này có giá trị 0-6 tương ứng vối VN -t7
// ta có thể sử dụng Swith case hoặc tạo 1 mảng ngày
let arrday = [
  " CN",
  " Thứ hai",
  " Thứ ba",
  " Thứ tư",
  " Thứ năm",
  " Thứ sáu",
  " Thứ bảy"
];
  return arrday[day]; // Kết quả
}
console.log(getDayOfWeek(dateString));
// // 5. Viết hàm kiểm tra ngày truyền vào là tương lai hay quá khứ
// // Kết quả trả về là true hoặc false
function isDateInFuture(dateString) {
  // Code
//khai báo biến 
// ngày cần xét
let date = new Date(dateString);
//ngày hiện tại
let now = new Date();
// so sánh sử dụng phương thức .getTime() = mms so với 1-1-1970
if(date.getTime() > now.getTime() ){
     return true;
}
else if (date.getTime() < now.getTime()){
    return false; 
}
else {
    return "now"; 
}
}
let dateNow = "2023-03-24";
let datehientai = new Date(dateNow);
console.log(isDateInFuture(dateNow));
console.log(new Date());
console.log(datehientai);
// // KHÔNG SỬA PHẦN NÀY
// // KHÔNG SỬA PHẦN NÀY
// // KHÔNG SỬA PHẦN NÀY
// module.exports = {
//   getCurrentDate,
//   getDaysBetweenDates,
//   getCurrentTime,
//   getDayOfWeek,
//   isDateInFuture,
// }


// sử dụng hàm setday
