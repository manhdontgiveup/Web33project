// break, continue
// dừng lại , bỏ qua vòng lặp.

// khia bao object mo ta chon cho
const dog = {
  // key  : value
  //trang thai- thuoc tinh
  name: "ben",
  age: 2,
  breed: "pibull",
  weight: 3,
  color: " yellow",
  eye: {
    color: "black",
  },

  // hanhf vi = phuong thuc

  brak() {
    console.log(" go go");
  },

  Bite() {
    console.log("ang");
  },
};

console.log(dog);
// cach truy cap thong tin
console.log(dog.name);
console.log(dog.brak);
console.log(dog.Bite);
console.log(console);
console.log(dog["name"]);
dog["brak"]();
console.log(dog.eye.color);

const table = {
  // thuoo tinh
  width: "1.2m",
  height: "2m",
  color: "white",

  // phuong thuc
  learn() {
    console.log(" thay ba");
  },
};
console.log(table.width);
console.log(table.color);
// cap nhat thay doi gia tri thuoc tinh
table.color = "blue";
console.log(table.color);

// xoa
delete table.height;
console.log(table);
console.log("color" in table);

// duyet qua cac thuoc tinh: gia tri
for (let key in table) {
  console.log("key:", key, "value:", table[key]);
}
// console.log(table);

let item = {
  iphone: 1000,
  macbook: 2000,
  clothes: 10,
};

total = 0;
for (let product in item) {
  const price = item[product];
  total += price;
}
console.log(total);

let students = {
  // kry ten hoc vien
  //value: que quan
  ba: "Nam dinh",
  son: "hanoi",
  quang: "Hai phong",
  hieu: "thai binh",
};

function greeting(name) {
  let from = students[name];
  if (name in students) {
    console.log(` xin chao minh la ${name}, minh den tu ${from} `);
  }
}
greeting("son");

// this duoc xac dinh la doi tuong truofn dau .

let point = { x: 1, y: 2 };
function calcu(p) {
  p.y = 10;
  p.x = 15;
}
console.log(calcu(point));

// khi so sanh phia cùng dia chi

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log(
      "Hello, my name is " + this.name + " and I am " + this.age + " years old."
    );
  };
}
const nguoi1 = new Person("manh", 35);
const nguoi2 = new Person("ba", 30);
console.log(nguoi1);
console.log(nguoi2);

Person.prototype.call = function(){
    console.log(` call reng reng reng`);
}

console.log(nguoi1.call);