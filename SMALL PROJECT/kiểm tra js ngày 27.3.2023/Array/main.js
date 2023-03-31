// Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng.
// Các giá trị sai bao gồm: false, null, undefined, NaN, 0, ''''.
// Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
// Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên),
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
//  Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
// Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp
//  (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
//               [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

//  Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng.

arr1 = [1, 2, 3, 4, null, false, true, undefined, "anh", NaN, "em", 0, ""];
function removeFalsevalue(arr) {
  // duyệt mảng
  for (let i = 0; i < arr.length; i++) {
    // nếu phần tử bằng các giá trị sai thì xoá phần tử đó bằng hàm .splice(arr[i],1)
    // riêng phần tử NaN là 1 giá trị đặc biệt: nó không bằng bất kỳ giá trị nào kể cả chính nó
    // vì vậy ==NaN luôn trả về False. dó vậy đối với NaN ta dùng hàm isNaN(arr[i]) để kiểm tra
    // xem có phải là NaN hay ko. nếu đúng trả về true; sai trả về false;
    if (
      arr[i] === undefined ||
      arr[i] === false ||
      arr[i] === null ||
      arr[i] === 0 ||
      isNaN(arr[i]) ||
      arr[i] === ""
    ) {
      arr.splice(i, 1);
      // sau khi xoá 1 phần tử thì giảm i đi 1 để nó không bỏ qua phần tử kế tiếp
      i--;
    }
  }
  return arr;
}
console.log(removeFalsevalue(arr1));

// clear code function trên bằng cách sử dụng toán tử not (!) để kiểm tra giá trị sai của a phần tử
// !arr[i]  trả về true nếu phần tử sai, false nếu phần tử đúng. thay vì so sánh nó với từng giá trị sai
function removeFalse(arr) {
  // duyệt mảng
  for (let i = 0; i < arr.length; i++) {
    // nếu phẩn tử arr[i] là phần tử sai trả về true
    if (!arr[i]) {
      arr.splice(i, 1); // xoá phần tử i
      i--; // giảm i đi 1 để không bỏ qua phần tử kế tiếp
    }
  }
  return arr;
}
arr2 = [
  1,
  NaN,
  3,
  "",
  4,
  null,
  false,
  true,
  undefined,
  "anh",
  NaN,
  "chị",
  0,
  "",
];
console.log(removeFalse(arr2));

//Bài 2: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất.
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
function longestString(arr) {
  // tạo biến là 1 array để chứa các phằn tử có độ dài lớn nhất
  let longerstrings = [];
  // duyệt mảng tìm độ dài của phần tử lớn nhất max
  // coi phần tử đầu tiên có độ dài lớn nhất
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }
  // duyệt mảng để lấy những phần tử có độ dài ==max và push vào longerstrings
  arr.forEach((element) => {
    if (element.length == max) {
      longerstrings.push(element);
    }
  });
  //   return longerstrings;
  // hoặc sử dụng hàm filter lọc những phần tử có độ dài = max
  let longestString2 = arr.filter((e) => e.length == max);
  return longestString2;
}
// ví dụ
let arr3 = ["1", "12", "123", "1234", "12345", "54321", "abcde"];
console.log(longestString(arr3));

///Bài 3: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên),
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào.
//  Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function Number_notin2array(arr1, arr2) {
  // tạo mảng chứa kết quả
  let result = [];
  // duyệt mảng đầu tiên arr1
  for (let i = 0; i < arr1.length; i++) {
    // với mỗi phần tử của mảng 1 có nằm trong mảng 2 hay không
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]); // nếu không nằm mảng 2 thì push vào result
    }
  }
  // duyệt mảng đầu thứ 2
  for (let j = 0; j < arr2.length; j++) {
    // với mỗi phần tử của mảng 2 so sánh với mảng 1
    if (!arr1.includes(arr2[j])) {
      result.push(arr2[j]); // nếu không nằm mảng 1 thì push vào result
    }
  }
  return result;
}
let numBer1 = [1, 2, 3, 4, 5];
let numBer2 = [3, 4, 5, 6, 7, 8];
console.log(Number_notin2array(numBer1, numBer2));

//Bài 4: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp
//  (tính từ 1) theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
//               [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].

function arrays_2dimensional(m, n) {
  // khởi tạo biến chứa kết quả
  let result = []; // mảng 2 chiều chứa m rows và n columns
  // tạo giá trị ban đầu
  let start = 1;
  // duyệt mảng
  for (let i = 0; i < m; i++) {
    // khởi tạo rows
    let row = [];
    // nếu mảng thứ tự chẵn: 0,2,4
    if (i % 2 == 0) {
      for (let j = 0; j < n; j++) {
        // push biến start vào mảng
        row.push(start);
        // sau mỗi lần lặp tăng start lên 1  tạo mảng row là số nguyên dương tăng dần
        start++;
      }
    }
    // nếu mảng row ở thứ tự lẻ : 1,3,5,7...
    else {
      for (let j = n - 1; j >= 0; j--) {
        // unshift start vào đầu mảng để lấy giá trị từ cuối lên
        row.unshift(start);
        // tăng start lên 1
        start++;
      }
    }
    // push row vào mảng kết quả result
    result.push(row);
  }
  // return mảng kết quả
  return result;
}
console.log(arrays_2dimensional(20, 11));

///
