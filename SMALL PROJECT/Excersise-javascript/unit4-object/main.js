const grades = [
  { name: "John", grade: 8, sex: "M" },
  { name: "Sarah", grade: 12, sex: "F" },
  { name: "Bob", grade: 16, sex: "M" },
  { name: "Johnny", grade: 2, sex: "M" },
  { name: "Ethan", grade: 4, sex: "M" },
  { name: "Paula", grade: 18, sex: "F" },
  { name: "Donald", grade: 5, sex: "M" },
  { name: "Jennifer", grade: 13, sex: "F" },
  { name: "Courtney", grade: 15, sex: "F" },
  { name: "Jane", grade: 9, sex: "F" },
];

// 1.Viết function tính thứ hạng trung bình của cả lớp
// 2.Viết function tính thứ hạng trung bình của Nam trong lớp
// 3.Viết function tính thứ hạng trung bình của Nữ trong lớp
// 4.Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
// 5.Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// 6.Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
// 7.Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
// 8.Viết function thứ hạng cao nhất của cả lớp
// 9.Viết function thứ hạng thấp nhất của cả lớp
// 10Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
// 11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
// 12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
// 13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
// 14.Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

// bai 1
function gradeTB() {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i].grade;
  }
  let gradeTB = sum / grades.length;
  return gradeTB;
}
let diemTB = gradeTB();
console.log(diemTB);

//bai2

function grade_Namtb() {
  let sum = 0;
  let maleCount = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === "M") {
      sum += grades[i].grade;
      maleCount++;
    }
  }
  let maleTB = sum / maleCount;
  return [maleTB, sum, maleCount];
}
let diemTBnam = grade_Namtb();
console.log(diemTBnam);

// bai 3
function grade_Nutb() {
  let sum = 0;
  let Femalecount = 0;
  let i = 0;
  while (i < grades.length) {
    if (grades[i].sex === "F") {
      sum += grades[i].grade;
      Femalecount++;
    }
    i++;
  }
  if (Femalecount === 0) {
    return 0;
  }
  let diemTBnu = sum / Femalecount;
  return [diemTBnu, sum, Femalecount];
}

let diemTB_nu = grade_Nutb();
console.log(diemTB_nu);

// bai4
function Nam_best() {
  let bestgrade = 0;
  let bestgrade_name = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === "M" && grades[i].grade > bestgrade) {
      bestgrade = grades[i].grade;
      bestgrade_name = grades[i];
    }
  }
  return bestgrade_name;
}
let gradebestnam = Nam_best();
console.log(
  ` hoc sinh nam co diem tot nhat la: ${gradebestnam.name} voi diem so: ${gradebestnam.grade}`
);

//bai 5
function Nu_best() {
  let bestgrade = 0;
  let bestgrade_nu = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === "F" && grades[i].grade > bestgrade) {
      bestgrade = grades[i].grade;
      bestgrade_nu = grades[i];
    }
  }
  return bestgrade_nu;
}
let gradebestnu = Nu_best();
console.log(
  ` hoc sinh nu co diem tot nhat la: ${gradebestnu.name} voi diem so: ${gradebestnu.grade}`
);

//bai6
function Namkemnhat() {
  let gradekem = Infinity;
  let namkem = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === "M" && grades[i].grade < gradekem) {
      gradekem = grades[i].grade;
      namkem = grades[i];
    }
  }
  return namkem;
}
let namKem = Namkemnhat();
console.log(
  ` hoc sinh nam co diem kiem nhat la ${namKem.name} voi so diem ${namKem.grade}`
);

// bai 7

function nukemnhat() {
  let gradekem = Infinity;
  let nukem = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].sex === "F" && grades[i].grade < gradekem) {
      gradekem = grades[i].grade;
      nukem = grades[i];
    }
  }
  return nukem;
}
let nuKem = nukemnhat();
console.log(
  ` hoc sinh nu co diem kiem nhat la ${nuKem.name} voi so diem ${nuKem.grade}`
);

// bai 8 thu hang cao nhat cua lop
function best() {
  let bestgrade = 0;
  let bestgrade_nu = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].grade > bestgrade) {
      bestgrade = grades[i].grade;
      bestgrade_nu = grades[i];
    }
  }
  return bestgrade_nu;
}
let bestlop = best();
let gioitinhcao;
if (best.sex === "M") {
  gioitinhcao = "Nam";
} else {
  gioitinhcao = "Nu";
}
console.log(
  ` hoc sinh co diem tot nhat lop la: ${bestlop.name}, gioi tinh: ${gioitinhcao}, voi diem so: ${bestlop.grade}`
);
// bai 9 thu hang thap nhat của lop

function kemnhat() {
  let gradekem = Infinity;
  let nukem = null;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i].grade < gradekem) {
      gradekem = grades[i].grade;
      nukem = grades[i];
    }
  }
  return nukem;
}
let Kemnhat = kemnhat();
let gioitinh;
if (Kemnhat.sex === "M") {
  gioitinh = "Nam";
} else {
  gioitinh = "Nu";
}
console.log(
  ` hoc sinh co diem kiem nhat lop la ${Kemnhat.name} , giới tính: ${gioitinh}, voi so diem ${Kemnhat.grade}`
);

// 10Viết function lấy ra danh sách tất cả học viên Nữ trong lớp: su dung ham filter

function femalestudent(grades) {
  let femalestuden = grades.filter((student) => student.sex === "F");
  return femalestuden;
}
let studentfemale = femalestudent(grades);
console.log(studentfemale);

// 10Viết function lấy ra danh sách tất cả học viên nam trong lớp: su dung ham filter

function malestudent(grades) {
  let malestudent = grades.filter((student) => student.sex === "M");
  return malestudent;
}
let studentmale = malestudent(grades);
console.log(studentmale);

// 11.Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sapxeptang(grades) {
  grades.sort(function (a, b) {
    if (a.name < b.name) return 1;
    if (a.name > b.name) return -1;
    return 0;
  });
  return grades;
}
sapxeptang(grades);
console.log(grades);

// function Car() {
//   this.speed = 0;
//   this.speedUp = function (speed) {
//     this.speed = speed;
//     let self = this;
//     setTimeout(function () {
//       console.log(self.speed);
//     }, 10);
//   };
// }
// let car = new Car();
// car.speedUp(150);

// 12.Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

function sapxepgradegiam(grades) {
  grades.sort(function (a, b) {
    if (a.grade < b.grade) return 1;
    if (a.grade > b.grade) return -1;
    return 0;
  });
  return grades;
}
sapxepgradegiam(grades);
console.log(grades);

// 13.Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”

function chonhocvien(grades) {
  const hocvien = grades.filter((e) => {
    return e.sex === "F" && e.name.startsWith("J");
    // hàm startsWith("J") tìm ký tự "J" ở đầu chuổi  nếu có trả về true, ko có trả về false
    // hàm endsWith("J") tìm ký tự "J" ở cuối chuổi nếu có trả về true, ko có trả về false
  });
  return hocvien;
}
console.log(chonhocvien(grades));

// 13.Viết function lấy ra học viên Nữ có tên chứa "N"

function chonnam(grades) {
  let hocvien = grades.filter((e) => {
    return e.sex === "M" && e.name.toLowerCase().includes("n");

    // hàm filter cho phép lọc những giá trị thoả mãn điều kiện bên trong" true" cụ thể: return e.sex === "M" giới tính nam
    // e.name.toLowerCase().includes("n") trong tên có chứa ký tự "n", hàm toLowerCase() chuyển chuổi ký tự về chữ thường
    // hàm includes("n") để tìm ký tự n trong tên e.name
  });
  return hocvien;
}
console.log(chonnam(grades));

// 14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

function xeptop5(grades) {
  if (
    typeof grades === "object" &&
    Array.isArray(grades) &&
    grades.every((e) => typeof e === "object" && "grade" in e)
  ) {
    let xepgiam = grades.sort((a, b) => {
      if (a.grade > b.grade) return -1;
      if (a.grade < b.grade) return 1;
      return 0;
    });
    let top = [];
    for (let i = 0; i < 5; i++) {
      top[i] = xepgiam[i];
    }
    return top;
  } else {
    console.log("khong ton tai ");
  }
}
console.log(xeptop5(grades));

// Ngoài ra, đoạn code này sẽ không hoạt động nếu biến grades không phải là một mảng
//  các đối tượng với thuộc tính grade. Bạn nên kiểm tra kiểu dữ liệu của biến grades
//  trước khi sử dụng để đảm bảo rằng nó là một mảng và chứa các đối tượng có thuộc tính grade.
// kiểm tra trước sẽ khiến cho code chặt chẽ hơn
