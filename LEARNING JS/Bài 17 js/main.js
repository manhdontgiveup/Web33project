//Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất
function secondNumber(arr) {
  // duyệt qua mảng lần 1 tìm max, secondmax
  let max = arr[0];
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    // nhặt 1 quả táo bất kỳ trong giỏ xem nó là lớn nhất
    if (arr[i] > max) {
      second = max;
      max = arr[i];
    } else if (second < arr[i] && arr[i] != max) second = arr[i];
  }
  return second;
}
let arr1 = [9, 8, 9, 9, 11, 9, 9, 55, 36];
console.log(secondNumber(arr1));
///
// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.
// Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function longSring(arr) {
  // duyệt qua mảng tìm chuổi có độ dài lớn nhất
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) max = arr[i].length;
  }
  // tạo 1 mảng mới chứa kết quả
  let arrNew = arr.filter((str) => str.length == max);
  //   let arrNew = [];
  //   // duyệt qua mảng
  //    for (let j = 0; j < arr.length; j++) {
  //      if (arr[j].length === max) arrNew.push(arr[j]);
  //    }
  return arrNew;
}
let arr2 = [
  " anh ",
  "tình em như nước",
  "tình em như lông",
  "tình em như công",
  " trong lúc em không để ý thì nó tát em ",
  " trong lúc em không để ý thì nó tát co ",
  " trong lúc em không để ý thì nó tát gi ",
  " trong lúc em không để ý thì nó tát ca ",
];

console.log(longSring(arr2));
// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function randomElement(arr) {
  let randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
}

console.log(randomElement(arr2));
//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó
function pearTogether(arr1, arr2) {
  // duyệt mảng 1
  // tạo 1 mảng chứa
  let total = [];
  for (let i = 0; i < arr1.length; i++) {
    // với từng phần tử của mảng 1 so sánh với từng phần tử của mảng 2
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        // push vào mảng chứa
        total.push(arr1[i]);
      }
    }
  }
  // lọc những phần tử giống nhau trong mảng tìm được nếu trùng nhau thì cắt
  for (let k = 0; k < total.length; k++) {
    for (let l = k + 1; l < total.length; l++) {
      if (total[k] == total[l]) {
        total.splice(l, 1);
        l--;
      }
    }
  }
  return total;
}
let em = [
  1, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6,
];
let anh = [3, 4, 5, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 8, 9];
console.log(pearTogether(em, anh));

//Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.
function addTime(timestr, x) {
  // tách chuổi thành arr
  let time = timestr.split(":");
  // chuyển giờ phút thành giây. sử dụng hàm parseInt() để chuyển thành số nguyên
  let total =
    3600 * parseInt(time[0]) + 60 * parseInt(time[1]) + parseInt(time[2]);
  // tăng lên x giây
  total += x;
  // chuyển đổi ngược lại
  let h = Math.floor(total / 3600);
  let m = Math.floor((total % 3600) / 60);
  let s = Math.floor((total % 3600) % 60);
  return `${h.toString().padStart(3, "1")} : ${m
    .toString()
    .padStart(3, "1")} : ${s.toString().padStart(3, "1")}`;
}
console.log(addTime("12:12:12", 269));
///

// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 26,
    isStatus: true,
  },
];

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function userObj(users) {
  return users.filter((a) => a.age > 25 && a.isStatus == true);
}
console.log(userObj(users));
function userAscending(users) {
  return users.sort((a, b) => -a.age + b.age);
}
console.log(userAscending(users));
//

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])
let arr3 = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 1, 2, 3, 4, 5,
];
function countOccurrences(arr) {
  // khai báo object chứa kết quả
  let obj = {};
  // duyệt qua mảng
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] in obj) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  return obj;
}
console.log(countOccurrences(arr3));
