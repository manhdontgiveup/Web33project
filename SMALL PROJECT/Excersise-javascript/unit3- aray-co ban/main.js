// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.

// randomHexCode() => #728a98
// randomHexCode() => #a72938
// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.

// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

// bài 1
let arr = [1, 2, 3, 4, 5];
let number = [7, 8, 9, 10];
function testValue_inarr(arr, a) {
  console.log(arr.includes(a));
}
console.log(testValue_inarr(number, 5));

//bài 2
function filterGreaterThan(array, value) {
  return array.filter((element) => element > value);
}
console.log(filterGreaterThan(arr, 4));
// bai 3
function generateRandomHexColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
let randomcolor = generateRandomHexColor();
console.log(randomcolor);

function randomRGB() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let color = ` RGB( ${r}, ${g},${b})`;
  return color;
}
let colorrgb = randomRGB();
console.log(colorrgb);
