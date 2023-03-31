// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
// Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
// Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.

//Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function volumeSphere(radius) {
  const voLume = ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2);
  // làm trong xuống 2 số thập phân
  return voLume;
}
console.log(volumeSphere(0.5));

// bài 2 Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng.
function TotalInteger(a, b) {
  // khai biến tổng
  let sum = 0;
  //nếu a<b
  if (a < b) {
    for (let i = a + 1; i < b; i++) {
      sum += i;
    }
  }
  if (a > b) {
    for (let j = b + 1; j < a; j++) {
      sum += j;
    }
  }
  if (a == b) sum = null;
  return sum;
}
console.log(TotalInteger(11, 36));
//Bài 3: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function divisor(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i == 0) sum += i;
  }
  return sum;
}
console.log(divisor(7));
//Bài 4: Cho 1 số nguyên dương bất kỳ, kiểm tra xem số đó có phải là số nguyên tố hay không
function prime(n) {
  // nếu =1 false: 1 không phải số nguyên tố
  if (n === 1) {
    return false;
  }
  // mếu ==2 true: 2 là só nguyên tố
  if (n === 2) {
    return true;
  }
  // nếu > 2  duỵet qua tất cả các số trong khoảng tờ 2- chính nó-1
  if (n > 2) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) {
        // nếu  chia hết cho bất kỳ số nào
        return false;
      }
    }
    return true;
  }
}
console.log(prime(9));

// Bài 5: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố nhỏ hơn hoặc bằng tham số truyền vào.
function totalN(num) {
  // khai báo biến tổng
  let sum = 0;
  // duyệt qua các giá trị <= num
  for (let i = 0; i <= num; i++) {
    // sử dụng hàm prime(n) để kiểm tra các số i có phải số nguyên tố hay không
    if (prime(i) == true) sum += i;   // nếu đúng thì + vào sum giá trị i
  }
  return sum;
}
console.log(totalN(19));
