// Tính tổng các phần tử trong mảng số
function sumOfArray(arr) {
  // Code
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum; // Kết quả
}

console.log(sumOfArray([1, 2, 3, 4, 5, 6]));

// Tính trung bình cộng các số trong một mảng
function averageOfArray(arr) {
  // Code
  return sumOfArray(arr) / arr.length;
}

console.log(averageOfArray([1, 2, 3, 4, 5]));

// Tìm số lớn nhất trong mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMax(arr) {
  // Code

  // Coi như quả táo đầu tiên là quả lớn nhất
  let max = arr[0];

  // Nhặt từng quả táo lên xem
  for (let value of arr) {
    // Nếu quả táo này lớn hơn
    if (value > max) {
      // Thì giữ quả này
      max = value;
    }
  }

  return max; // Kết quả
}

console.log(findMax([9, 10, -1, 5, 15, 2, 0]));
console.log(findMax([-4, -5, -3, -2, -1]));

// Tìm số nhỏ nhất trong 1  mảng số
// Giả sử mảng chưa được sắp xếp và mỗi giá trị chỉ xuất hiện 1 lần
function findMin(arr) {
  // Code

  // Coi như quả táo đầu tiên là quả nhỏ nhất
  let min = arr[0];

  // Nhặt từng quả táo lên xem
  for (let value of arr) {
    // Nếu quả táo này nhỏ hơn quả min hiện tại
    if (value < min) {
      // Giữ quả này
      min = value;
    }
  }

  // Sau khi kiểm tra hết táo trong giỏ
  // Thì tìm đc quả nhỏ nhất
  return min; // Kết quả
}

// Viết hàm kiểm tra xem một mảng số có phải mảng tăng dần hay không
// Mảng tăng dần nghĩa là các phần tử có giá trị tăng dần
function isAscending(arr) {
  // Xem xét từng số 1
  for (let i = 0; i < arr.length - 1; i++) {
    // So sánh số hiện tại và số tiếp theo
    // Nếu số hiện tại mà lớn hơn số sau nó
    if (arr[i] > arr[i + 1]) {
      // Thì phá vỡ quy tắc
      // Trả về false
      return false;
    }
  }

  // Sau khi xem xét hết các số
  // Mà tất cả đều hợp lệ
  // Thì trả về true
  return true; // Kết quả
}
console.log(isAscending([1, 2, 3, 4]));

// Viết hàm kiểm tra xem một mảng số có phải mảng giảm dần hay không
// Mảng giảm dần nghĩa là các phần tử có giá trị giảm dần
function isDescending(arr) {
  // Code

  return; // Kết quả
}

// Viết hàm để loại bỏ các phần tử trùng nhau trong 1 mảng
// Giữ 1 số
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function removeDuplicate(arr) {
  let dodai = arr.length;

  // Duyệt qua từng số
  for (i = 0; i < dodai; i++) {
    // Duyệt qua các số phía sau nó
    for (j = i + 1; j < dodai; j++) {
      // Nếu có 1 số trùng
      if (arr[i] == arr[j]) {
        // Xóa số trùng đi
        arr.splice(j, 1);
        // Sau khi xóa thì độ dài mảng giảm đi 1
        dodai -= 1;
        // j cũng phải 1 vì cái index phía sau bị đẩy lên
        j--;
      }
    }
  }

  return arr; // Kết quả
}
console.log(removeDuplicate([1, 2, 1, 1]));

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// Viết hàm đảo ngược thứ tự các phần tử trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào
function reverse(arr) {
  // Code
  // Duyệt từ đầu cho đến giữa mảng
  for (let i = 0; i < arr.length / 2; i++) {
    // Với mỗi phần tử, đổi chỗ của nó cho phần tử đối xứng phía sau
    let j = arr.length - i - 1;
    swap(arr, i, j);
  }

  return arr; // Kết quả
}

console.log(reverse([1, 2, 3, 4, 5]));

// Viết hàm để lọc ra các số dương trong 1 mảng số
// Kết quả trả về là một mảng mới
function filterEvenNumber(arr) {
  // Tạo một mảng mới chứa các số dương
  let newArr = [];

  // Duyệt qua từng số
  for (let i = 0; i < arr.length; i++) {
    // Nếu nó là số dương
    if (arr[i] > 0) {
      // Thì push vào mảng mới
      newArr.push(arr[i]);
    }
  }

  // Sau khi duyệt qua hết các số, thì trả về mảng kết quả
  return newArr; // Kết quả
}
console.log(filterEvenNumber([-2, 3, 4, 5, -1, -4, 0]));

// Viết hàm kiểm tra xem một mảng có chứa bất kỳ số nào là số nguyên tố hay không
function isPrime(n) {
  // Số âm hoặc 1 thì không phải số nguyên tố
  if (n < 2) return false;

  // Cho i chạy từ 2 đến căn bậc 2 của n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    // Nếu n chia hết cho i thì không phải số nguyên tố
    if (n % i == 0) return false;
  }

  // Nếu kiểm tra hết mà không chia hết cho số nào thì là số nguyên tố
  return true;
}

function hasPrime(arr) {
  // Code
  // Kiểm tra lần lượt từng
  for (let i = 0; i < arr.length; i++) {
    // Nếu có 1 số là số nguyên tố
    if (isPrime(arr[i])) {
      // Trả về true (vì chỉ cần 1 số thỏa mã)
      return true;
    }
  }

  // Nếu kiểm tra hết mà k có số nguyên tố nào
  // Thì trả về kết quả false
  return false; // Kết quả
}
// Gọi Hàm
console.log(hasPrime([1, 4, 6, 12]));
// Viết hàm để bình phương tất cả giá trị trong mảng
// Kết quả trả về là một mảng mới
function squareAllElement(arr) {
  // Code
  // Tạo 1 mảng mới chứa kết quả
  let result = [];

  // Duyệt qua từng phần tử
  for (let value of arr) {
    // Tính bình phương
    let square = value ** 2;

    // Push vào mảng mới
    result.push(square);
  }

  // Return kết quả
  return result; // Kết quả
}

console.log(squareAllElement([1, 2, 3, 4, 5]));
