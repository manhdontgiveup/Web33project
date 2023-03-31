// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
// Xóa thẻ có class=“para-1”

// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
const headingNode = document.getElementById("heading");
headingNode.style.color = "red";
headingNode.style["text-transform"] = "uppercase";

//// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
const paraNodes = document.getElementsByClassName("para");
for (let i = 0; i < paraNodes.length; i++) {
  paraNodes[i].style.color = "blue";
  paraNodes[i].style.fontSize = "20px";
}

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
// khai báo biến là thẻ có class para-3
const para3Node = document.querySelector(".para-3");
// khai báo thẻ a links
const fbLinks = '<a href="http://facebook.com.vn">Facebook</a>';
//chèn fblinks vào sau para-3
para3Node.insertAdjacentHTML("afterend", fbLinks);
// chèn gglinks vào trước para-3
const gglinks = '<a href="http://google.com.vn">google</a>';
para3Node.insertAdjacentHTML("beforebegin", gglinks);

// Thay đổi nội dung của thẻ có id=“title” thành "“Đây là thẻ tiêu đề”"
const titleNode = document.getElementById("title");
titleNode.textContent = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
const descriptionNode = document.querySelector(".description");
descriptionNode.classList.add("text-bold");

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
const btn = document.createElement("button");
btn.textContent = "click me";
para3Node.replaceWith(btn);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
let para2 = document.querySelector(".para-2");
let para2After = para2.cloneNode(true);
para2.insertAdjacentElement("beforeend", para2After);
para2After.classList.add("paracopy");
console.log(para2After);

// Xóa thẻ có class=“para-1”
const para1 = document.querySelector(".para-1");
para1.remove();