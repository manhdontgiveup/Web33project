let arr3 = new Array();
arr3[0] = "Ba;";
arr3[1] = "Manh;";
arr3[2] = "Tuan;";
arr3[3] = "Linh;";
// duyệt mảng
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

// duyệt qua giá trị: sử dụng for of
for (let value of arr3) {
  console.log(value);
}
// thêm vào cuối  mảng
arr3[arr3.length] = "Anh";
arr3[arr3.length] = "Phuong";
console.log(arr3);

// suwr dung hamf push
arr3.push("thai");

// xoá phần tử
// xoá giá trị
delete arr3[0];
console.log(arr3);

// xoá phần tử: xoá cả vị trí và giá trị
arr3.splice(0, 1);

// chèn phan tử vào giưu mảng
arr3.splice(1, 0, "huong", "lan");

// vi trí can thao tác, so phan tu muon xoa (sửa), thêm phan tủ có giá trị "huong", "lan"
let arr = [];

// Array.isArray(arr); // kiem tra gia tri co phai la mang
// arr.reverse(); // ddo nguoc mang
// arr.included(value); // mảng có chứa value hay không
// arr.indexOf(value); // chỉ mục của value (trái - phải)
// arr.lastIndexOf(value); // chỉ mục của value (trái - phải)
// arr.pop(); // xoá phần tử cuối cùng - trả về giá trị ( lấy giá trị trong mảng)
// arr.push(value); // thêm giá trị cuối mảng
// arr.slice(from, to); //  sao chép giá trị trong mảng
// arr.splice(from, to); // xoá phàn tử, thêm , chèn phần tử
// arr.join(saperato); // nối giá trị mảng thành chuổi
// arr.concat(other); //  nối 2 hoặc nhiều mảng

/// Viết hàm kiểm tra xem một mảng số có phải mảng giảm dần hay không
let arr2 = [1, 2, 3, 5, 8, 9, 10];
function kiemtra(arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      return true;
    }
    return false;
  }
}
console.log(kiemtra(arr2));

/// Viết hàm kiểm tra xem một mảng số có phải mảng tăng dần hay không
function kiemtra2(arr2) {
  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] < arr2[i + 1]) {
      return true;
    }
    return false;
  }
}
console.log(kiemtra2(arr2));

// loai bo gia tri trung nhau trong mang
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

// đảo ngược
function daoNguocMang(arr2) {
  for (let i = 0; i < arr2.length / 2; i++) {
    let temp = arr2[i];
    arr2[i] = arr2[arr2.length - 1 - i];
    arr2[arr2.length - 1 - i] = temp;
  }
  return arr2;
}
console.log(daoNguocMang(arr2));

// viết cụ thể coment cho từng câu lệnh

// Viết hàm để loại bỏ các phần tử trùng nhau trong 1 mảng
// Giữ 1 số
// Kết quả phản ảnh trực tiếp trong mảng đầu vào

let arr4 = [4, 45, 8, 14, 18];

function locmang(arr4) {
  // dat bien co do dai == length cua mang
  let dodai = arr4.length;
  // duyet qua tung phan tu cua mang arr4
  for (let i = 0; i < dodai; i++) {
    // duyet qua cac phan tu phia sau no

    for (let j = i + 1; j < dodai; j++) {
      // so sanh arr4.i voi cac phan tu phia sau no
      if (arr4[i] == arr4[j]) {
        // neu trung nhau thi xoa phan tu phia sau no di
        arr4.splice(j, 1);
        // luc nay do dai cua mang se giam di 1
        dodai--;
        // luc nay j cung giam di 1 do cac phan tu phia sau no don ve.
        j--;
        // nếu không giảm j thì sẽ bỏ sót phần tử phía sau phần tử bị xoá
      }
    }
  }
  return arr4;
}
console.log(locmang(arr4));

// tim so nho nhat
function findMin(arr4) {
  // Code

  // Coi như quả táo đầu tiên là quả nhỏ nhất
  let min = arr4[0];

  // Nhặt từng quả táo lên xem
  for (let value of arr4) {
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

console.log(findMin(arr4));

// viet ham tra ve binh phuong cac gia tri trong mang
function binhphuong(arr4) {
  // tao 1 mang moi
  let mang = [];
  // duyet qua cac phan tu trong mang
  for (let value of arr4) {
    // tính bình phương
    let binhphuong = value ** 2;
    // push vào mảng mới
    mang.push(binhphuong);
  }
  return mang;
}
console.log(binhphuong(arr4));
// tìm nghiệm phương trình :  Math.sqrt(x) + Math.sqrt(y) = Math.sqrt(const)
function giaitoan(a) {
  let ketqua = [];
  for (let i = 0; i < 2137; i++) {
    for (let j = 0; j < 2137; j++) {
      if (Math.sqrt(j) + Math.sqrt(i) == Math.sqrt(a)) {
        ketqua.push(i);
        ketqua.push(j);
      }
    }
  }
  if (ketqua.length == 0) {
    return " vô nghiệm";
  }
  return ketqua;
}
console.log(giaitoan(99));

// phương trinh bậc 3
function cubicEquation(a, b, c, d) {
  if (a === 0) {
    return "a phải khác 0";
  }
  let delta, x1, x2, x3;
  delta = b * b - 3 * a * c;
  if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / (3 * a);
    x2 = (-b - Math.sqrt(delta)) / (3 * a);
    x3 = -b + (Math.sqrt(delta) / 2) * Math.sqrt(3) - 3 * a;
    return [x1, x2, x3];
  } else if (delta === 0) {
    x1 = -b / (3 * a);
    x2 = x3 = (-b + Math.sqrt(delta)) / (3 * a);
    return [x1, x2, x3];
  } else {
    let realPart = (-b / (3 * a)).toFixed(2);
    let imaginaryPart = (Math.sqrt(-delta) / (3 * a)).toFixed(2);
    x1 = `${realPart} + ${imaginaryPart}i`;
    x2 = `${realPart} - ${imaginaryPart}i`;
    x3 = `${realPart} + ${imaginaryPart}i`;
    return [x1, x2, x3];
  }
}
console.log(cubicEquation(1, -1, 0, 0));

// Viết hàm đảo ngược thứ tự các phần tử trong 1 mảng
// Kết quả phản ảnh trực tiếp trong mảng đầu vào

function reverse(arr4) {
  // duyệt 1/2 mảng
  for (let i = 0; i < arr4.length / 2; i++) {
    //lưu giá trị nửa đầu của array
    let stemp = arr4[i];
    // xác định vị trí đảo từ cuối lên
    let j = arr4.length - 1 - i;
    // đổi giá trí của cuối lên đầu
    arr4[i] = arr4[j];
    // gán vị trí cuối bằng giá trị đầu đã lưu bằng biến stemp
    arr4[j] = stemp;
  }
  return arr4;
}
console.log(reverse(arr4));

// ham kiểm tra số nguyên tố trong mảng co so nguyen nto : true  ko: false

function isPrime(arr4) {
  // duyet qua tung doi tuong cua mang
  for (let i = 0; i < arr4.length; i++) {
    // neu <2 tra ve false
    if (arr4[i] < 2) return false;
    // kiem tra tung phan tu cua mang co phải so nguyen to
    for (let j = 2; j < arr4[i]; j++) {
      if (arr4[i] % j != 0) {
        return true;
        break;
      }
    }
  }
   return false;
}
console.log(isPrime(arr4));

// làm cách khác dễ hiểu hơn
// hàm kiểm tra 1 số co phải số nguyên tố hay không
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(6));

// ham kieemr tra trong 1 mang co so nguyen to kho. neu co tra ve true ko tra ve false
function isPrimearr(arr) {
  // duyet qua cac phan tu cua mang
  for (let i = 0; i < arr.length; i++) {
    // neu cac phan tu cua mang nho hon 2 thif tra ve false
    if (arr[i] < 2) {
      return false;
    }
    // neu chi 1 phan tu la so nguyen to tra ve true , neu ko tra ve false
    if (isPrime(arr[i])) {
      return true;
    }
  }
  return false;
}
console.log(isPrimearr(arr4));
