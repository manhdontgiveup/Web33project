let products = [
  {
    name: "Iphone 13 Pro Max", // Tên sản phẩm
    price: 3000000, // Giá mỗi sản phẩm
    brand: "Apple", // Thương hiệu
    count: 2, // Số lượng sản phẩm trong giỏ hàng
    costs: 1500000, //chi phi cho mỗi sản phẩm : sản xuất, maketings
  },
  {
    name: "Samsung Galaxy Z Fold3",
    price: 41000000,
    brand: "Samsung",
    count: 1,
    costs: 5500000,
  },
  {
    name: "IPhone 11",
    price: 15500000,
    brand: "Apple",
    count: 1,
    costs: 3500000,
  },
  {
    name: "OPPO Find X3 Pro",
    price: 19500000,
    brand: "OPPO",
    count: 3,
    costs: 4500000,
  },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// 4. Tìm các sản phẩm có giá > 20000000

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

// Làm bài

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
console.log(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
console.log(products[0]);
function total() {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].count;
  }
  return total;
}
alert(total());

// tinh tong bang ham reduce()

let total2 = products.reduce(
  (accumulator, product) => accumulator + product.price * product.count,
  0
);
console.log(total2);

// giaỉ thich cho ham reduce
// Để tính tổng tiền của tất cả các sản phẩm trong mảng products bằng phương thức reduce(), bạn có thể làm như sau:

// javascript
// Copy code
// let total = products.reduce((accumulator, product) => accumulator + (product.price * product.count), 0);
// console.log(total);
// Trong đó, accumulator là biến lưu trữ kết quả tính toán trước đó, và product là phần tử hiện tại đang được xét trong mảng.
//  Trong hàm reduce() trên, ta cần tính tổng giá trị của tất cả các sản phẩm trong mảng products, do đó,
//   giá trị ban đầu của accumulator được thiết lập là 0. Trong mỗi lần lặp, ta sẽ cộng thêm giá trị
//   của sản phẩm hiện tại (tính bằng product.price * product.count) vào biến accumulator.

// Kết quả sẽ là tổng tiền của tất cả các sản phẩm trong mảng products

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

function Find(thuonghieu) {
  let findProducts = products.filter((product) => product.brand === thuonghieu);
  return findProducts;
}
console.log(Find("Apple"));
console.log(Find("Samsung"));

// 3. Tìm các sản phẩm co gia >10.000.000
function Findprice(pri) {
  let findPrice = products.filter((product) => product.price > pri);
  return findPrice;
}
console.log(Findprice(10000000));

// 3. Tìm các sản phẩm co so luong san pham trong gio hang > 2

// function findcount(soluong) {
//   let countArr = products.filter((products) => products.count >  soluong);
//   return countArr;
// }
// console.log(findcount(2));

function oddNumbersNotFilter(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].count >= 3) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(oddNumbersNotFilter(products));

function findcount() {
  let countPro = products.filter((product) => product.count == 1);
  return countPro;
}
console.log(findcount());

// tính lãi của tất cả các sản phẩm trong products:  ( sum "so luong * (giá - chi phi )/ moi san pham *) bằng hàm educe

let lai = products.reduce(
  (laiSP, products) =>
    laiSP + products.count * (products.price - products.costs),
  0
);
console.log(lai);

//ket qua 95.500.000
function tonglai() {
  let lai = 0;
  for (let i = 0; i < products.length; i++) {
    lai += products[i].count * (products[i].price - products[i].costs);
  }
  return lai;
}
console.log(tonglai());

// câu 4

// Để tìm các sản phẩm có chữ "pro" trong tên, bạn có thể sử dụng phương thức filter() trong JavaScript để lọc các phần tử trong mảng và trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.

// Với mảng sản phẩm ở trên, hãy viết hàm sau để tìm các sản phẩm có chữ "pro" trong tên:

// javascript
// Copy code
// function findProductsWithProName(products) {
//   return products.filter((product) => product.name.toLowerCase().includes("pro"));
// }
// Cách hoạt động của hàm này là lấy mảng products, sử dụng phương thức filter() để lọc các sản phẩm có tên chứa chuỗi "pro" (sử dụng hàm includes() để kiểm tra), và trả về một mảng mới chứa các sản phẩm thỏa mãn điều kiện. Hàm toLowerCase() được sử dụng để chuyển đổi tên sản phẩm thành chữ thường trước khi kiểm tra, để không phân biệt hoa thường.

// Bạn có thể sử dụng hàm này như sau:

// javascript
// Copy code
// const productsWithProName = findProductsWithProName(products);
// console.log(productsWithProName);
// Kết quả đầu ra sẽ là một mảng mới chứa các sản phẩm có tên chứa chuỗi "pro":

// javascript
// Copy code
// [
//   {
//     name: "Iphone 13 Pro Max",
//     price: 3000000,
//     brand: "Apple",
//     count: 2,
//     costs: 1500000,
//   },
//   {
//     name: "OPPO Find X3 Pro",
//     price: 19500000,
//     brand: "OPPO",
//     count: 3,
//     costs: 4500000,
//   },
// ]

function seachName(products) {
  return products.filter((products) =>
    products.name.toLowerCase().includes("pro")
  );
}

console.log(seachName(products));

// function findProductsWithProName(products) {
//   return products.filter((product) => product.name.toLowerCase().includes("pro"));
// }

// console.log(findProductsWithProName(products));

// cau 6 them 1 san pham bat ky vao products
//them vao cuoi
products.push({
  name: "Huawei p60 pro",
  price: 46000000,
  brand: "Huawei",
  count: 15,
  costs: 19000000,
});
console.log(products);
//them vao dau
products.unshift({
  name: "Google pixels 6 pro",
  price: 46000000,
  brand: "Google",
  count: 11,
  costs: 12000000,
});
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// xoa phan tu dau mang
// products.pop();
// console.log(products);
// xoa phan tu cuoi mang
// products.shift();
// console.log(products);
// xoa sanr pham cua thuong hieu samsung tra ve arrr moi
function deleteSamsung(products) {
  const result = products.filter((products) => products.brand !== "Samsung");
  return result;
}
// console.log(deleteSamsung(products));
// console.log(products);

// xoa san pham sam sung hoc apple tren arr: products

function xoa(products, call) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].brand == call) products.splice(i, 1);
  }
  return products;
}
// console.log(xoa(products, "Apple"));

// 8. Sắp xếp giỏ hàng theo price tăng dần

function sortByPriceAscending(products) {
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  return products;
}

sortByPriceAscending(products);
console.log(products);

//  users.sort((a, b) => a.income - b.income);
//  console.table(users);

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

// function getTwoRandomProducts(products) {
//   let randomIndexes = [];
//   while (randomIndexes.length < 2) {
//     let randomIndex = Math.floor(Math.random() * products.length);  // la 1 số nguyên
//     if (!randomIndexes.includes(randomIndex)) {
//       randomIndexes.push(randomIndex);
//     }
//   }
//   return [products[randomIndexes[0]], products[randomIndexes[1]]];
// }

// console.log(getTwoRandomProducts(products));

// Lấy ra 2 phần tử bất kỳ trong mảng arr

function random2sp(products) {
  let indexsp = [];
  for (let i = 0; i < 2; i++) {
    let index = Math.floor(Math.random() * products.length);
    if (!indexsp.includes(index)) {
      indexsp.push(index);
    }
  }
  return [products[indexsp[0]], products[indexsp[1]]];
}
console.log(random2sp(products));
