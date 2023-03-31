// bai 1

function giai_thua1(n) {
  let Cal = 1;
  for (let i = 1; i <= n; i++) {
    Cal *= i;
  }
  return Cal;
}
let ketqua1 = giai_thua1(5);
console.log(ketqua1);

function giai_thua2(n) {
  let Cal = 1;
  let i = 1;
  while (i <= n) {
    Cal *= i;
    i++;
  }
  return Cal;
}
let ketqua2 = giai_thua2(2);
console.log(ketqua2);

// bai 2 chuổi đảo ngược

function chuoidaonguoc(str) {
  let dao_nguoc = "";
  for (let i = str.length - 1; i >= 0; i--) {
    dao_nguoc += str[i];
  }
  return dao_nguoc;
}
console.log(chuoidaonguoc("hello"));

// chuổi đảo ngược while

function converseString(str) {
  let converse = "";
  let i = str.length - 1;
  while (i >= 0) {
    converse += str[i];
    i--;
  }
  return converse;
}

console.log(converseString("anh"));

// bai 3  truyen vao ma quoc gia va in ra mesenger: xin chao tuong ung

function xinchao(str) {
  switch (str) {
    case "VN":
      return "Xin chao";
      break;
    case "EN":
      return "Hello";
      break;
    case "HQ":
      return "안녕하세요";
      break;
    case "JP":
      return "こんにちは";
      break;
    default:
      return "xin chao";
  }
}

console.log(xinchao("EN"));

function xinchao(str) {
  if (str == "VN") {
    return "xin chao";
  } else if (str == "EN") {
    return "hello";
  } else if (str == "US") {
    return "hi";
  } else if (str == "JP") {
    return "こんにちは";
  } else if (str == "KR") {
    return "안녕하세요";
  } else {
    return "xin chao";
  }
}

console.log(xinchao("US"));

// bai 4 cắt chuổi, nối chuỗi
function cutString(str) {
  if (str.length <= 15) {
    return str;
  } else {
    let newStr = "";
    newStr = str.substr(0, 10) + "...";
    return newStr;
  }
}
console.log(cutString("em da tro thanh ac quy"));

// bai 5

// function printNumber() {
//   for (let i = 1; i < 100; i++) {
//     if (i % 2 == 0) {
//       document.write("<span style='color: blue;'>" + i + " " + "</span>");
//     } else {
//       document.write("<span style='color: red;'>" + i + " " + "</span>");
//     }
//   }
// }
// printNumber();

function printNumber() {
  let i = 1;
  while (i < 100) {
    if (i % 2 != 0) {
      document.write(
        "<h1 style= 'color:red; background-color: violet;'>" + i + "</h1>"
      );
    } else {
      document.write(
        "<h3 style='color: blue; background-color: green;'>" + i + "</h3>"
      );
    }
    i++;
  }
}
printNumber();

//  vong lap long nhau

const products = ["Áo phông", "Quần Jean", "Giày Sneaker", "Túi xách"];

// Mảng giá sản phẩm tương ứng
const prices = [200000, 500000, 1000000, 800000];

// Hàm tính tổng giá trị các sản phẩm

// sử dụng hàm reduce
function calculateTotal(products, prices) {
  const total = prices.reduce((acc, price, index) => {
    return acc + price;
  }, 0);

  console.log(`Tổng giá trị của các sản phẩm là: ${total} VNĐ`);
}
calculateTotal(products, prices);

// sử dụng vòng lặp lồng nhau

function draw() {
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 4; j++) {
      document.write("* ");
    }
    document.write("* <br>");
  }
}
draw();

function drawWhile() {
  let i = 0;
  while (i < 5) {
    let j = 0;
    while (j < 5) {
      document.write("* ");
      j++;
    }
    document.write("<br>");
    i++;
  }
}
drawWhile();

// ve hinh vuong

// function drawVuong() {
//   for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= 5; j++) {
//       if (i === 1 || i === 5 || j === 1 || j === 5) {
//         document.write("* ");
//       } else {
//         document.write(" ");
//       }
//     }
//   }
//   document.write("<br>");
// }
// drawVuong();

function drawVuong() {
  let div = document.createElement("div");
  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
      if (i === 1 || i === 5 || j === 1 || j === 5) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    div.appendChild(document.createTextNode(row));
    div.appendChild(document.createElement("br"));
  }
  document.body.appendChild(div);
}
drawVuong();

function DrawSquare(n, m) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= m; j++) {
      if (i == 1 || i == n || j == 1 || j == m) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
DrawSquare(10, 10);

function DrawSqua(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j <= n; j++) {
      if (i == j || i == n + 1 - j) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
DrawSqua(7);

// ve hinh tam giac
function DrawTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      if (i >= j) {
        row += "* ";
      } else {
        row += "  ";
      }
    }
    console.log(row);
  }
}
DrawTriangle(3);
