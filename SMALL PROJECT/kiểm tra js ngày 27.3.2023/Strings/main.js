//     Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các
// chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
//     Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
// Ví dụ: ''HELLO world'' => ''hello-world''.
//     Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng
//  hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng
//  và không phân biệt hoa thường), kết quả trả về true hoặc false.
//   Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
//     Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa
// toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true
//  nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa
//  ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.

//   Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các
// chữ cái đầu tiên của mỗi từ. Ví dụ: ''HELLO world'' => ''Hello World''.
function stringTocapper(str) {
  // chuyển chuổi thanh mảng
  let myArray = str.split(" ");
  // duyệt mảng
  for (let i = 0; i < myArray.length; i++) {
    // Phần tử thứ i của mảng = Chữ đầu viết hoa + chữ còn lại
    // .charAt(0) để lấy ký tự thứ 0 của strings
    // .toUpperCase() chuyển ký tự về viết HOA
    // hàm substring(1) cắt chuổi từ vị trí 01 trả về chuỗi mới từ vị trí 01 đến hết chuỗi
    myArray[i] = myArray[i].charAt(0).toUpperCase() + myArray[i].substring(1);
  }
  // Nối mảng thành chuỗi bằng dấu " "
  let myNewString = myArray.join(" ");
// trả về chuỗi mới nối
  return myNewString;
}
let str1 = "Chuyện ngày hôm đó anh đi với em";
console.log(stringTocapper(str1)); //

////Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case.
// Ví dụ: ''HELLO world'' => ''hello-world''.
function spinalCase(str) {
  // chuyển chuỗi thành mảng các từ bằng dấu " "
  let newArr = str.split(" ");
  // duyệt mảng newArr
  for (let i = 0; i < newArr.length; i++) {
    // Viết thường tất cả các phần tử của mảng
    newArr[i] = newArr[i].toLowerCase();
  }
  // chuyển mảng sang chuỗi bằng dấu nối "-"
  let newstr = newArr.join("-");
  // trả về mảng mới nối
  return newstr;
}
console.log(spinalCase(str1));

// Bài 3: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng
//  hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng
//  và không phân biệt hoa thường), kết quả trả về true hoặc false.
//   Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.
function strSymmetry(str) {
  // loai bỏ ký tự đặc biệt và khoảng trắng chuyển về chữ thường
  let myNewString = str.replace(/[^\w\s]/gi, "").trim().toLowerCase();
  // duyệt chuỗi
  for (let i = 0; i < myNewString.length / 2; i++) {
    // so sánh ký tự i và kí tự đối xứng với nó 
    if (myNewString[i] === myNewString[myNewString.length - 1-i]) {
      // nếu trùng nhau trả về true;
      return true;
    } else return false;   // không trùng nhau trả về false;
  }
}
let str2 = "poRace caroP";
let str3 = "Race c";
console.log(strSymmetry(str2));

////
// Bài 4: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa
// toàn bộ ký tự (tính cả dấu cách) nằm trong chuỗi thứ 2 hay không, kết quả trả về true
//  nếu có và false nếu không (không phân biệt hoa thường). Ví dụ ''HELLO world'' có chứa
//  ''how'' nhưng không chứa ''hey'' và không chứa ''ww''.
function strInstring(str1, str2) {
  // sử dụng hàm includes() để kiểm trả chuỗi str1 có nằm trong chuôic str2 hay không
  if (str2.includes(str1)) {
    //đúng trả về true;
    return true;
  } else {
    return false;  // sai trả về false;
  }
}
console.log(strInstring(str3, str2));
