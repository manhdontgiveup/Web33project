// 1. Viết hàm trả về chuỗi với thứ tự các từ trong câu bị đảo ngược
function reverseWords(str) {
  // Code
  // cách 1
  // chuyển chuổi str thàng mảng chứa các ký tự bằng hàm split
  str.split(" ");
  // đảo ngược mảng bằng hàm reverse
  str.split(" ").reverse();
  // chuyển mảng về chuổi bằng hàm join()
  str.split(" ").reverse().join();
  return str.split(" ").reverse().join(" "); // Kết quả
}
let str = "what do you like about our company";
console.log(reverseWords(str)); //ynapmoc ruo tuoba ekil uoy od tahw
console.log(str); //what do you like about our company
// Successful implemention nhưng không làm thay đổi chuỗi ban đầu

// Cách 2 :
function reverseWord(str) {
  // chuyển chuổi thành mảng
  let arr = str.split("");
  // duyệt mảng và đảo ngược mảng arr
  for (let i = 0; i < arr.length / 2; i++) {
    let stemp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = stemp;
  }
  str = arr.join("");
  return str;
}
console.log(reverseWord(str));
console.log(str);

// cách 3
function reverseW(str) {
  // Chuyển đổi chuỗi thành một mảng các từ
  let arr = str.split(" ");
  // Đảo ngược thứ tự các phần tử của mảng
  arr.reverse();
  // Chuyển đổi mảng thành chuỗi và gán lại vào biến str
  str = arr.join(" ");
  // Trả về chuỗi kết quả
  return str;
}
console.log(reverseW(str));
// gán giá trị lại vào biến bán đầu để thay đổi nó
str = reverseW(str);
console.log(str);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//comment sử dụng phương thức map()
// cách thức hoạt động: phương thức máp sẽ được truyền vào 1 hàm ẩn danh trong()
// hàm ẩn danh thường được viết theo kiểu arrow function để clear code
// hàm ẩn anh này có thể được truyền vào từ bên ngoài hoặc viết trực tiếp trong () của .map()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr1 = arr.map((num) => {
  return num ** 2;
});
console.log(arr1);

const sinhVien = [
  { ho: "Đặng", ten: "Ngọc Anh" },
  { ho: "Vi", ten: "Tiểu Bảo" },
  { ho: "Hàn", ten: "Lập" },
];

function layTenDayDu(sv) {
  // Ghép họ và tên bằng hàm join()
  //   let hoVaTen = [sv.ho, sv.ten].join(" ");
  // ghép họ và tên bằng + string
  let hoVaten = sv.ho + " " + sv.ten;
  return hoVaten;
}

let tenDayDu = sinhVien.map(layTenDayDu);
console.log(tenDayDu);

//////
const SinhVien = [
  { msv: "SV1", ten: "Ngọc Anh" },
  { msv: "SV2", ten: "Tiểu Bảo" },
  { msv: "SV3", ten: "Hàn Lập" },
];

//Bây giờ chúng ta muốn tạo một đối tượng mới trong đó có tên sinh viên và độ dài tên của từng sinh viên, ta làm như sau:

let SVM = SinhVien.map((sv) => {
  let svm = {};
  svm[sv.msv] = sv.ten;
  svm.dodaiten = sv.ten.length;
  return svm;
});
console.log(SVM);
////////////////////////////////////////////////////////////////////////////////////////////////////
// bài 2 truyền vào 1 chuỗi viết hàm lấy ra chuỗi có chữ cái dầu tiên viết hoa
let string = "trên con đường đó có những thứ dường như rất thân quên";
function capitalizeString(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}
string = capitalizeString(string);
console.log(capitalizeString(string));

// PHương thức string.chatAt()  tìm kiếm kí tự ở vị trí (index)  từ 0 tới string.length-1
console.log(string.charAt(0).toLowerCase());
// phương thức string.toUpperCase()  chuyển chuỗi từ chữ thường ra chữ hoa
let string1 = string.toLocaleUpperCase();
console.log(string1);
// phương thức string.toLowerCase() chuyển chữ  ra chữ thường
let string2 = string.toLowerCase();
console.log(string2);
// Hàm tìm kiếm chuỗi string
// có 3 hàm thường dùng
// hàm indexOf()  tìm kiếm chuỗi con "Trên" trong chuỗi cha Sting. kết qyar trả về vị trí đầu tiên xuất hiện của chuỗi con
// nếu không tìm thấy trả về -1
let a = string.indexOf("Trên");
console.log(a); // 0
// hàm lastIndexOf()  tìm kiếm chuỗi con và trả về vị trí chuỗi con cuối cùng trong chuỗi cha
let b = string.lastIndexOf("Con");
console.log(b);

// hàm seacrch giống như hàm indeOf: trả về vị trí đầu tiên
let c = string.search("Trên");
console.log(c);
// cắt chuỗi: ta sử dụng 3 hàm sau:
// hàm slice
let d = string.slice(0, 10);
// truyền vào 2 tham số( stars, end)
// khi truyền vào tham số âm thì sẽ lấy từ cuối lên
console.log(d);
let e = string.split(" ");
console.log(e);
// hàm substring()      ; giống như hàm slice() như tham số truyền vào luôn> 0
let f = string.substring(0, 10);
console.log(f);
// hàm substr(); 2 tham số tuyền vào (start, length)
let g = string.substr(10, 10);
console.log(g);
// tìm kiếm và thay thế
let h = string.replace("Trên", "Dưới");
console.log(h);
let k = string.replace(string[1], string[1].toLocaleUpperCase());
console.log(k);
string = k;
console.log(string);
// nối chuỗi: dùng toán tử + hoặc hàm concat
let str1 = "hello";
let str2 = "world";
let str3 = str1.concat(" cùng", " với ", str2);
console.log(str3);
//Tìm ký tự hoặc mã ASCII của một ký tự
// Để xem ký tự của một vị trí nào đó thì dùng hàm charAt(),
// còn xem mã ASCII thì dùng hàm charCodeAt().
// Cả hai hàm này đều có tham số truyền vào là vị trí muốn xem.
let q = str1.charAt(0).toLocaleUpperCase().toLowerCase();
console.log(q);
let w = str1.charCodeAt(1);
console.log(w);
// sử dụng vòng lặp for of để duyệt chuõi
for (let char of str1) {
  console.log(char.toLocaleUpperCase());
}

// // 3. Viết hàm kiểm tra xem một chuỗi có phải chuỗi đối xứng (Palindrome) hay không
// Không tính các ký tự đặc biệt như dấu cách, ;!*-...
function isPalindrome(str) {
  // Loại bỏ các ký tự đặc biệt và chuyển đổi chuỗi thành chữ thường
  str = str.replace(/[^\w]/g, "").toLowerCase();
  // So sánh từng ký tự trong chuỗi
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
// Kiểm tra
console.log(isPalindrome("pppppppppppp")); // true
console.log(isPalindrome("Hello, world!")); // false

/////
// bài kiểm tra số diện thoại có hợp lệ không

const phoneNumber = "+84-123456789";
const phonePattern = /^\+\d{2}-\d{9}$/; // một biểu thức chính quy để xác định định dạng số điện thoại

if (phonePattern.test(phoneNumber)) {
  console.log("Số điện thoại hợp lệ");
} else {
  console.log("Số điện thoại không hợp lệ");
}

////
// 4. Viết hàm tìm ký tự có số lần xuất hiện nhiều nhất trong chuỗi
// Không tính các ký tự đặc biệt như dấu cách, ;!*-...
// Kết quả trả về dạng { char: number }

function findMostFrequentChar(str) {
  // Loại bỏ các ký tự đặc biệt và chuyển đổi chuỗi thành chữ thường
  str = str.replace(/[^\w]/g, "").toLowerCase();
  // Tạo đối tượng lưu trữ số lần xuất hiện của các ký tự
  let charCount = {};
  // Duyệt qua từng ký tự trong chuỗi
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    // Nếu ký tự chưa có trong đối tượng thì tạo mới một cặp key-value
    if (!charCount[char]) {
      charCount[char] = 1;
    }
    // Nếu ký tự đã có trong đối tượng thì tăng giá trị tương ứng lên 1
    else {
      charCount[char]++;
    }
  }
  // Tìm ký tự có số lần xuất hiện nhiều nhất
  let mostFrequentChar = "";
  let maxCount = 0;
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      mostFrequentChar = char;
      maxCount = charCount[char];
    }
  }
  // Trả về kết quả dưới dạng { char: number }
  return { [mostFrequentChar]: maxCount };
}

// Kiểm tra
console.log(findMostFrequentChar("Hello, world!")); // { l: 3 }
console.log(findMostFrequentChar("To be or not to be, that is the question."));
