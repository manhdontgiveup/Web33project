let circle = {
  radius: 55555555555,
  area: function () {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area());

let square = {
  adge: 100,
  acreage: function () {
    return this.adge ** 2;
  },
};
console.log(square.adge);
console.log(square.acreage());

// su dung contructor function

function Circle(radius) {
  this.radius = radius;
  this.area = function () {
    return Math.PI * this.radius ** 2;
  };
}
let bircle = new Circle(50);
console.log(bircle.radius);

function Square(adge) {
  this.adge = adge;
  this.acreage = function () {
    return this.adge ** 2;
  };
}
let square1 = new Square(2000);
console.log(square1.acreage);
console.log(square1.adge);

// thay doi thuoc tinh
square1.adge = "10000";
console.log(square1.adge);
console.log(square1);

// them thuoc tinh moi
square1.color = "blue";
square1.boder_width = 1;
console.log(square1);
square1.applicability = "science";
// xoa thuoc tinh

delete square1.boder_width;
console.log(square1);

// Lấy danh sách key của object

console.log(Object.keys(square1));
console.log(Object.keys(bircle));

//Lấy danh sách value của object
console.log(Object.values(square1));

console.log(Object.values(bircle));

//Kiểm tra 1 key có nằm trong object hay không
console.log(square1.hasOwnProperty("color")); // true or false
console.log(square1.hasOwnProperty(" radius"));
