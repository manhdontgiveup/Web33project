// function cuoctaxi(km) {
//   if (km <= 30) {
//     let tong = 10000 + km * 11000;
//     return tong;
//   } else {
//     let tong = 10000 + 30 * 110000 + (km - 30) * 9500;
//     return tong;
//   }
// }
// let tiencuoc = cuoctaxi(40);
// console.log(tiencuoc);

// function solveEquation(a, b, c) {
//   if (a == 0 && b == 0 && c == 0) {
//     return Infinity;
//   }
//   let delta = b ** 2 - 4 * a * c;
//   if (delta < 0) {
//     return null;
//   } else if (delta == 0) {
//     return -b / (2 * a);
//   } else {
//     let x1 = (-b + delta ** 0.5) / (2 * a);
//     let x2 = (-b - delta ** 0.5) / (2 * a);
//     return [x1, x2];
//   }
// }
// console.log(
//   `nghiem cua phuong trinh 2x2 + 4x -4 la: ${solveEquation(1, 5, 2)}`
// );

// // vong lap for

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// let y = 1;
// while(y <= 10){
//   console.log(y);
//   y++;
// }
// console.log(`anh`);

// let i = 99;
// while (i > 0) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// let i = 0;
// let sum =0;
// While(i<100){
//     let sum =0;
//     sum+=i;
//     i+=2;
// }
// console.log(sum);
// let tong = 0;
// for(let i = 0; i<100;i+=2) {
//   tong +=i;
// }
// console.log(tong);

// let tong35 = 0;
// for (let i = 0; i < 100; i += 2) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     tong35 += i;
//   }
// }
// console.log(tong35);

// for (let i = 0; i <= 12; i++) {
//   if (12%i==0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i <= 12) {
//   if (12 % i == 0) {
//     console.log(i);
//     i++;
//   }
// }

// function bangcuuchuon(n) {
//   let i = 1;
//   while (i <= 10) {
//     let cuuchuong = n * i;
//     console.log(`${n} x ${i} = ${cuuchuong}`);
//     i++;
//   }
// }
// let bangcuuchuong3 = bangcuuchuon(3);
// console.log(bangcuuchuong3);

// function bangcuuchuong(j) {
//   for (let n = 1; n <= j; n++) {
//     console.log(bangcuuchuon(n));
//   }
// }
// console.log(bangcuuchuong(20));

// function gacho() {
//   for (let x = 0; x <= 36; x++) {
//     let y = 36 - x;
//     if (4 * x + 2 * y == 100) {
//       console.log(` so con cho = ${x}`);
//       console.log(` so con ga = ${y}`);
//     }
//   }
// }
// let dapan = gacho();
// console.log(dapan);

// function gacho() {
//   for (let x = 0; (x <= 36) && (4 * x + 2 * (36 - x)) == 100; x++) {
//     console.log(` so con cho = ${x}`);
//     let y = 36 - x;
//     console.log(` so con ga = ${y}`);
//   }
// }
// let dapan = gacho();
// console.log(dapan);
function starpp(row, column) {
  let i = 1;
  while (i < row) {
    let j = 0;
    let star = "";
    while (j < column) {
      star += "*";
      j++;
    }
    console.log(star);
    i++;
  }
}

console.log(starpp(10, 10));
