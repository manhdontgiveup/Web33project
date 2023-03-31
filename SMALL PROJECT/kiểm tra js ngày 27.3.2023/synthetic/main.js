// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'',
// tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây
// kể từ thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
// Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét,
//  ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng.
//   Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).
// Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra
//  1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.

// Bài 1: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'',
// tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây
// kể từ thời điểm t. Ví dụ với t = ''09:20:56'' và x = 7 thì kết quả là ''09:21:03''.
function increaseTime(str, x) {
  // chuyển chuỗi thời gian str thành mảng
  let arrTime = str.split(":");
  // chuyển đổi thời gian thành giây ( chú ý chuyển định dạng string thành number bằng hàm parseInt) để có kết quả đúng
  let convertSecond =
    parseInt(arrTime[0]) * 3600 +
    parseInt(arrTime[1]) * 60 +
    parseInt(arrTime[2]);

  // tăng số giây lên x
  convertSecond += x;
  // chuyển đổi ngược lại thành h:m:s
  let hour = Math.floor(convertSecond / 3600).toString();
  let minute = Math.floor((convertSecond % 3600) / 60).toString();
  let second = (convertSecond % 60).toString();
  // trả về kết quả là chuổi định dạnh giống chuỗi ban đầu
  return `"${hour}:${minute}:${second}"`;
}
console.log(increaseTime("20:20:20", 60));

//Bài 2: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét,
//  ban đêm lại bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng.
//   Viết hàm giải bài toán trên với 3 tham số h > 0 là chiều cao của giếng, x và y như mô tả trên (x > 0, y > 0).

function solveMath_snail(h, x, y) {
  // khởi tạo biến kết quả quảng đường
  let result = 0; //đơn vị m
  // khởi tạo biến thời gian
  let time = 0; //đơn vị ngày
  if (x >= h) {
    time = 1;
    return time;
  } else if (x <= y) {
    time = Infinity;
    return time;
  } else {
    for (let i = 0; i <= Math.ceil(h / (x - y)); i++) {
      // tăng quảng đường result lên x (m)
      result += x;
      // tăng thời gian lên 1
      time++;
      // kiểm tra xem result đã bằng h chưa
      if (result >= h) {
        break;
      }
      // giảm quảng đường đi y (m)
      result -= y;
    }
  }

  return time;
}
console.log(solveMath_snail(3.1, 3, 2.9));

//Bài 3: Cho 1 số nguyên dương, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra
//  1 số nhỏ nhất (giữ nguyên số chữ số). Ví dụ với tham số 530751 thì kết quả là 103557.

function sortIntegers(num) {
  // chuyển số thành chuỗi
  let str = num.toString();
  // chuyển chuổi thành mảng
  let arr = str.split("");
  // khai báo số nhỏ nhất
  let result = 0;
  // chuyển các phần tử của mảng định dạng số
  arr.map((e) => parseInt(e));
  // sắp xếp mảng theo thứ tự tăng dần
  arr.sort((a, b) => a - b);
  // nếu arr[0] ==0 thì đổi o với số lớn hơn gần nó nhất
  if (arr[0] != 0) {
    // chuyển mảng về chuổi từ chuỗi về số
    result = parseInt(arr.join(""));
  }
  if (arr[0] == 0) {
    // duyệt qua mảng để đổi vị trí với o
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > 0) {
        arr[0] = arr[i];
        arr[i] = 0;
        break;
      }
    }
    // chuyển mảng về chuổi từ chuỗi về số
    result = parseInt(arr.join(""));
  }

  return result;
}
console.log(sortIntegers(530751));
