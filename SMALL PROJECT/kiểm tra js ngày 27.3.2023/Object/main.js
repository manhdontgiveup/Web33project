// Bài 1: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
// Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
// Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', age: 20 }.
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.

// Bài 1
let arr1 = [
  { name: "Lan", age: 36 },
  { name: "Ngọc", age: 20 },
  { name: "Huy", age: 28 },
  { name: "anh", age: 42 },
  { name: "Bảo", age: 12 },
  { name: "Xô", age: 16 },
  { name: "Quân", age: 29 },
  { name: "Cường", age: 29 },
  { name: "huy", age: 29 },
];
function averageAge(arr) {
  // khai báo biến tổng tuổi của SV
  let Total = 0;
  // duyệt mảng
  for (let i = 0; i < arr.length; i++) {
    Total += arr[i].age;
  }
  // tuổi trung bình = tổng số tuổi/ số người
  let ageTB = Total / arr.length;
  return ageTB; // return tuổi trung bình
}
console.log(averageAge(arr1));

// bài 2 Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function arrangeHighshort(arr) {
  // sử dụng hàm sort
  arr.sort((a, b) => b.age - a.age);
  return arr;
}
console.log(arrangeHighshort(arr1));
//bài 3 Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function arrangeNamesv(arr) {
  // sử dụng hàm sort
  arr.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() < b.name.toLowerCase()) return +1;
    return 0;
    // a.name.toLowerCase().charCodeAt() - b.name.toLowerCase().charCodeAt()
  });
  return arr;
}
console.log(arrangeNamesv(arr1));

// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function filterStudent(arr) {
  // sử dụng hàm filter
  // khai báo biến là 1 mảng chứa kết quả
  let studentH = arr.filter((e) => {
    if (e.name[0] === "H" || e.name[0] === "h") return true;
    return false;
  });
  return studentH;
}
console.log(filterStudent(arr1));
