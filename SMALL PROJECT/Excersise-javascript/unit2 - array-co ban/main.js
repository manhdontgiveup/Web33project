function isArraySorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 5, 4];

console.log(isArraySorted(arr1)); // true
console.log(isArraySorted(arr2)); // false

const arr3 = [5, 4, 3, 2, 1];
const arr4 = [5, 4, 3, 2, 0];
function kiemtra(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(kiemtra(arr3));
console.log(kiemtra(arr4));

function kiemTraMangChanTang(arr) {
  // Kiểm tra xem mảng có chứa phần tử không phải số không
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }

  // Kiểm tra xem mảng có chứa phần tử lẻ không
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }

  // Kiểm tra xem mảng có tăng dần không
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      return false;
    }
  }

  // Nếu không có lỗi nào, trả về true
  return true;
}

function kiemtramangchantang(arr) {
  // kiem tra xem mang co phai mang so khong
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  // kiem tra xem mang cos phan tu le hay khong
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }

  //kiem tra mang cos phai mang tang dan ko
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr11 = [2, 4, 6, 8, 10];
const arr12 = [2, 4, 5, 8, 10];
const arr13 = [2, 4, 6, 8, "10"];
const arr14 = [2, 4, 6, 8, 12];
console.log(kiemtramangchantang(arr11));
console.log(kiemtramangchantang(arr12));
console.log(kiemtramangchantang(arr13));
console.log(kiemtramangchantang(arr14));
