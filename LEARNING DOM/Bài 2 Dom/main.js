const headingNode = document.getElementById("heading");
console.log({
  element: headingNode,
}); // là 1 object
// Với getElementbyId: số ít chỉ lấy ra 1 thẻ đầu tiên
// theo tiêu chuẩn W3C
// mỗi HTML chỉ có 1 tên Id: nếu trùng tên nó cũng chỉ lấy thằng đầu tiên
const headingNodes = document.getElementsByClassName("heading");
// do dạng số nhiều nên có thêm s sau getElement
console.log(headingNodes);
// kết quả trả về là 1 HTML collection là 1 mảng có thuộc tính length . nhưng không có các phương thức như.map().sort()...
// ta có thể duyệt mảng như array bình thường
// lấy phần tử thứ i giống như mảng arr[i]:
console.log(headingNodes[0]);
console.log(headingNodes[1]);

// để thay đổi nội dung của thẻ ta dùng thuộc tính textContent
headingNodes[0].textContent = " Tôi đã luôn nổ lực để tốt hơn";

// duyệt mảng
//** do phương thức forEach không được áp dụng đối với  HTML collection nên ta có thể sử dụng vong lặp for, while
// hoặc chuyển HTML collection sang mảng
let arrheadingNodes = Array.from(headingNodes);

// chuyển HTML collection thành mảng bằng Array.prototype.slice.call();
let arrheadingNodess = Array.prototype.slice.call(headingNodes);
arrheadingNodess.forEach((element) => {
  element.textContent = element.textContent.toUpperCase();
});
console.log(arrheadingNodess);
console.log(headingNodes);

// thay nội dung và chuyển thằng con thứ 2 thành mầu đỏ với fontsize 30px:
headingNodes[1].textContent = " Bắt đầu một hành trình mới";
headingNodes[1].style.color = "red";
headingNodes[1].style.fontSize = "40px";
headingNodes[0].style.fontWeight = "bold";
headingNodes[0].style["font-size"] = "30px";
headingNodes[0].style["background-color"] = "red";
headingNodes[1].style.backgroundColor = "violet";
const headingTagname = document.getElementsByTagName("p");
console.log(headingTagname);
let headingCss = document.querySelector(".heading-2"); // có thể '.box.heading-2' or 'html.box.heading-2'
console.log(headingCss);

// default kết quả trả về là 1 Object có 1 phần tử chứa class: heading-2 đầu tiên tìm thấy
// nếu muốn lấy các class con thứ i thì dùng thuộc tính của css

// lấy class heading đầu tiên trong box
let headingCss1 = document.querySelector(".box .heading-2:first-child");
console.log(headingCss1);
// lấy class heading thứ n trong box
let headingCss2 = document.querySelector(".box .heading-2:nth-child(3)");
console.log(headingCss2);
// lấy class heading trong thẻ span
let headingCss2_span = document.querySelectorAll("span.heading-2");
console.log(headingCss2_span); // kết quả là 1 NodeList
let headingCss2_spanheading2 = document.querySelector("span.heading-2");
console.log(headingCss2_spanheading2); // kết quả là 1 thẻ span với class: heading-2 đầu tiên
// kiến thức css như thế nào ta thực hiện như thế

// chọn span có class ở thứ chẵn tô mầu xanh, thứ lẻ tô màu đỏ = 2 cách khác nhau
// cách 1: sử dụng vòng lặp for hoặc forEach (nếu đối tượng là 1 NodeList)
// Cách 2 sử dụng : :nth-child(even)    chẵn
//     :nth-child(odd)    lẻ

// Với thằng headingNodes là 1 HTMLCollection
for (let i = 0; i < headingNodes.length; i++) {
  if (i % 2 == 0) {
    headingNodes[i].style["color"] = "yellow";
  }
  if (i % 2 == 1) {
    headingNodes[i].style.color = "green";
  }
}
// Cách 2: không áp dụng .style cho tất cả HTMLClollection và NodeList nên vânc phải dùng vòng lặp
let headingNodes_even = document.querySelectorAll(".box:nth-child(even)");
// headingNodes_even.style.color = "gray";
let headingNodes_odd = document.querySelectorAll(".box:nth-child(odd)");
// headingNodes_odd.style["color"] = "orange";

// đối với thằng headingCss2_span là  NodeList  ta sử dụng for Each hoặc map() nhưng TH này vẫn phải dùng for ỏ while
let i = 0;
while (i < headingCss2_span.length) {
  if (i % 2 == 0) {
    headingCss2_span[i].style.color = "gray";
  } else {
    headingCss2_span[i].style.color = "blue";
  }
  i++;
}
// Kiểm tra đối tượng là HTMLCollection  hay NodeList  bằng thuộc tính: instanceof
// elements instanceof HTMLCollection;
// elements instanceof NodeList;
console.log(headingNodes instanceof HTMLCollection); // true          // kết quả trả về true hoặc false
console.log(headingNodes instanceof NodeList); // false
console.log(headingCss2_span instanceof NodeList); //true
console.log(headingCss2_span instanceof HTMLCollection); // flase

let box_nth3 = document.querySelector(".box .heading-2:nth-child(4)"); // thằng con thứ 3 của box có class là .heading-3
let box_nth2 = document.querySelector(".box :nth-child(3)"); // dấu .liền child()
console.log(box_nth2); // trả về rổng vì nó trỏ đến thằng box ở thứ 3 có heading-2
console.log(box_nth3); //

