// let a = 1;
// let b = (a%2)*2;
// let c=a++ -b--;
// let d="0";
// let x= a+b+c+d;
// let y = a-b-c-d;
// let z = a-- + (b--*c)/d;
// let t = ++a - +b*c +d;
// let h = d + ++a;

// let a = true;
// a && console.log("hello");

// let a = 7;
// let b = 11;
// if (a + 5 > b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let name = "bốn";
// if (name == "ba") {
//   console.log("chào anh ba đẹp trai");
// } else {
//   console.log(`chào bạn ${name} đẹp trai`);
// }

// cấu trúc if else if

// thứ tự kiểm tra rất quan trọng.
// let weekday = 6;
// if (weekday == 2) {
//   console.log("Hom nay la thu");
// } else if (weekday == 3) {
//   console.log("Hom nay la thu 3");
// } else if (weekday == 4) {
//   console.log("Hom nay la thu 4");
// } else if (weekday == 5) {
//   console.log("Hom nay la thu 5");
// } else {
//   console.log("Hom nay la thu 6,7,cn");
// }

// if (weekday > 2) {
//   if (weekday < 5) {
//     console.log("dau tuan");
//   } else {
//     console.log("cuoi tuan");
//   }
// } else {
//   console.log("thu 2");
// }

function checkmark(mark) {
  if (mark >= 85 && mark < 100) {
    console.log("A");
  } else if (mark >= 70 && mark < 85) {
    console.log("B");
  } else if (mark >= 40 && mark < 70) {
    console.log("C");
  } else {
    console.log("D");
  }
}
let kiemtra = checkmark(50);
console.log(kiemtra);
console.log(checkmark(85));

function test(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
test(5, 6);
test(12, 6);
test(12, 888888888888888888);

function testnumber(n) {
  if (n > 0) {
    console.log("${n}la so nguyen duong");
  } else if (n < 0) {
    console.log("la so nguyen am");
  } else {
    console.log("la so 0");
  }
}
testnumber(-5);

function chanle(n) {
  if (n % 2 == 0) {
    console.log("la so chan");
  } else {
    console.log(` la so le`);
  }
}
chanle(10);

function chiahet3va5(a) {
  if (a % 3 == 0 && a % 5 == 0) {
    console.log(` ${a} dong thoi chia het cho 3 va 5`);
  } else {
    console.log(` ${a} khong dong thoi chia het cho 3 va 5`);
  }
}
chiahet3va5(10);
chiahet3va5(15);

function kiemtraabc(a, b, c) {
  if (c == a + b) {
    console.log(` ${c} = ${a} + ${b}`);
  } else {
    console.log(`${c} #  ${a} + ${b}`);
  }
}
kiemtraabc(4, 6, 9);



