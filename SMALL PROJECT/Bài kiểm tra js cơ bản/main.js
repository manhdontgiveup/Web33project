// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.
//Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất function
let arr1 = [6];
function transmissionArrayofnumbers(arr1, num) {
  arr1.push(num);
  let biggestNumber = arr1[0];
  let secondbiggestNumber = null;
  //tim so lon nhat
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > biggestNumber) {
      biggestNumber = arr1[i];
    }
  }
  // tim so lon thu 2
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > secondbiggestNumber && arr1[i] < biggestNumber) {
      secondbiggestNumber = arr1[i];
    }
  }
  return secondbiggestNumber;
}
console.log(transmissionArrayofnumbers(arr1, 6));

// cách khác ngắn gọn hơn
function secondMaxnumber(arr1, num) {
  // push biến num vào cuối mảng arr1
  arr1.push(num);
  // khai báo biến lớn nhất: coi phần tử đầu là lớn nhất
  let max = arr1[0];
  // khai báo biến lớn thứ 2: chưa xác định
  let secondMax = null;
  // duyệt mảng
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > max) {
      secondMax = max;
      max = arr1[i];
    } else if (arr1[i] > secondMax && arr1[i] < max) {
      secondMax = arr1[i];
    }
  }
  return secondMax;
}
console.log(secondMaxnumber(arr1, 6));
console.log(arr1);

//Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
let arr2 = [
  "chiến đấu",
  "không ngưng nghỉ",
  "tự tin",
  " mỗi ngày tốt hơn 3 %",
  " mỗi ngày tốt hơn 2 %",
  " mỗi ngày tốt hơn 1 %",
  " mỗi ngày tốt hơn 9 %",
  " mỗi ngày tốt hơn 9 %",
];
// tạo hàm có 2 tham số truyền vào là ar2 và str
function stringArr(arr2, str) {
  // push chuỗi str vào cuối mảng
  arr2.push(str);
  // khai bao mang chua chuoi dai nhat
  let arrString = [];
  // duyệt mảng arr2
  let stringMax = arr2[0];
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].length > stringMax.length) {
      stringMax = arr2[i];
    }
  }
  arrString.push(stringMax);
  return arrString;
}
console.log(stringArr(arr2, "thanh xuân"));
// với cách trên chúng ta chỉ in ra được 1 chuổi đầu tiên đáp ứng dk và những chuỗi khác có cùng
// độ dài sẽ không được in ra

// để khắc phục tinh trạng trên ta làm như sau
// viết hàm tìm chuổi dài nhât trong mảng
// function stringLongest(arr2) {
//   let elementLongest = arr2[0];
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].length > elementLongest.length) {
//     elementLongest = arr2[i];
//     }
//   }
//   return elementLongest;
// }

// function arrStringlongest(arr2) {
//   // tao mảng để chứa
//   let arrContains = [];
// //   duyệt mảng
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].length === stringLongest(arr2).length) {
//        arrContains.push(arr2[i]);
//     }
//   }
//   return arrContains;
// }
// console.log(arrStringlongest(arr2));

// thử đua hàm vào hàm
// function arrStringlongest(arr2) {
//   function stringLongest(arr2) {
//     let elementLongest = arr2[0];
//     for (let i = 0; i < arr2.length; i++) {
//       if (arr2[i].length > elementLongest.length) {
//         elementLongest = arr2[i];
//       }
//     }
//     return elementLongest;
//   }
//   // tao mảng để chứa
//   let arrContains = [];
//   //   duyệt mảng
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].length === stringLongest(arr2).length) {
//       arrContains.push(arr2[i]);
//     }
//   }
//   return arrContains;
// }
// console.log(arrStringlongest(arr2));

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó
function randomElement(arr) {
  // duyệt qua mảng
  return arr[Math.floor(Math.random() * arr.length)];
}
console.log(randomElement(arr2));

//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đ
let arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr5 = [5, 6, 7, 8, 9, 10, 11, 12];
function intersectElement(arr4, arr5) {
  // khai bao m4ảng chứa là mảng rổng
  let contain = [];
  // duyệt mảng thứ nhất
  for (let i = 0; i < arr4.length; i++) {
    // đùng vòng lặp lồng nhau để duyệt mảng thứ 2
    for (let j = 0; j < arr5.length; j++) {
      // nếu phần tử của 2 mảng giống nhau
      if (arr4[i] === arr5[j]) {
        // push giá trị giống đó vào mảng chứa
        contain.push(arr4[i]);
      }
    }
  }
  return contain;
}
console.log(intersectElement(arr4, arr5));

//  bài tập 7 cho 2 mảng
users = [
  {
    name: "Bùi Công Sơn",
    age: 30,
    isStatus: true,
  },
  {
    name: "Nguyễn Thu Hằng",
    age: 27,
    isStatus: false,
  },
  {
    name: "Phạm Văn Dũng",
    age: 20,
    isStatus: false,
  },
];
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

function youthTrue(users) {
  let youthTrue = users.filter((e) => {
    return e.age > 25 && e.isStatus == true;
  });
  return youthTrue;
}
console.log(youthTrue(users));

// mảng tăng dần
function ascenDing(users) {
  let youthTrue = users.sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
    return 0;
  });
  return youthTrue;
}
console.log(ascenDing(users));

// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả
// {
//     one: 3,
//     two : 1,
//     three : 2
// }

//  sử dụng thuộc tinh in để kiể trq 1 thuộc tính có nằm trong object hay không if ('name' in rapper) {
  //... làm gì đó ở đây :v

// let arr = ["one", "two", "three", "one", "one", "three"];
// function countOccurrences(arr) {
//     // tạo 1 object để chứa thông tin
//   let obj = {};
// //   duyệt qua mảng
//   for (let i = 0; i < arr.length; i++) {
//     // sử dụng thuộc tính in để kiểm tra arr[i] có nằm trong obj hay không
//     if ([arr[i]] in obj) {
//       // nếu có ( [arr[i]] in obj == true) thì tăng giá trị của thuộc tính đó trong obj lên 1 
//       obj[arr[i]]++;
//     } else {
//         // nếu không cho nó giá trị =1
//       obj[arr[i]] = 1;
//     }
//   }
//   // trả về obj
//   return obj;
// }
// // gọin hàm 
// console.log(countOccurrences(arr));


let arr = ["one", "two", "three", "one", "one", "three"];
function countOccurrences(arr) {
  // tạo 1 object để chứa thông tin
  let obj = {};
  //   duyệt qua mảng
  for (let i = 0; i < arr.length; i++) {
    // sử dụng thuộc tính in để kiểm tra arr[i] có nằm trong obj hay không
    if (arr[i] in obj) {
      // nếu có ( [arr[i]] in obj == true) thì tăng giá trị của thuộc tính đó trong obj lên 1
      obj.arr[i]++;
    } else {
      // nếu không cho nó giá trị =1
      obj.arr[i] = 1;
    }
  }
  // trả về obj
  return obj;
}
// gọin hàm
console.log(countOccurrences(arr));
