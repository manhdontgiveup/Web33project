// let my_mane = "manh";
// let tuoi = "35";
// alert(`my_name ` + tuoi);
// function dientich(r) {
//   let acreage = 2 * r;
//   return acreage;
// }
// let dt = dientich(20);
// console.log(dt);

// function tinhDienTichHinhKhoiCau(banKinh) {
//   var dienTich = 4 * Math.PI * Math.pow(banKinh, 2);
//   return dienTich;
// }

// var banKinh = 5;
// var dienTich = tinhDienTichHinhKhoiCau(banKinh);
// console.log("Diện tích hình khối cầu là: " + dienTich);

// function dtvuong(canhvuong) {
//   let hinhvuong = canhvuong * canhvuong;
//   return hinhvuong;
// }
// let canhvuong = 9;
// let dientichvuong = dtvuong(canhvuong);
// console.log("diện tích hình vuông: " + dientichvuong);

// let a = 1;
// let b = 22;
// let name = "John";
// console.log(`Hello`);

// // khai báo biến mo ta thong tin ve 1 nguoi

// let userName = "manh";
// let age = 35;
// let isMale = true;
// let thanhCong;
// let loCal = ["Thanhhoa", "hanoi", "hoabinh"];
// let address = {
//   street: " Vo nguyen giap - Tieu khu 1 - TT Luong Son",
//   city: "Hoa binh",
//   state: "VN",
//   zipcode: "12345",
// };
// let hocVan = "dai hoc";
// let merri = false;
// function printstar(n, m) {
//   let star = " ";
//   // for (let i = 0; i < n; i++) {

//   while (i < 10)
//     for (let j = 0; j < m; j++) {
//       star += " * ";
//     }
//   return star;
//   i++;
// }
// // }
// console.log(printstar(10, 5));



  // var count;
  //           document.write("Starting Loop" + "<br />");
         
  //           for(count = 0; count < 10; count++){
  //              document.write("Current Count : " + count );
  //              document.write("<br />");
  //           }
         
  //           document.write("Loop stopped!");
      


  //           window.onload = function () {
  //             var chart = new CanvasJS.Chart("chartContainer", {
  //               animationEnabled: true,
  //               title: {
  //                 text: "So sánh dự trữ dầu thô và sản xuất, 2016",
  //               },
  //               axisY: {
  //                 title: "Hàng tỷ thùng",
  //                 titleFontColor: "#4F81BC",
  //                 lineColor: "#4F81BC",
  //                 labelFontColor: "#4F81BC",
  //                 tickColor: "#4F81BC",
  //               },
  //               axisY2: {
  //                 title: "Hàng triệu thùng/ngày",
  //                 titleFontColor: "#C0504E",
  //                 lineColor: "#C0504E",
  //                 labelFontColor: "#C0504E",
  //                 tickColor: "#C0504E",
  //               },
  //               toolTip: {
  //                 shared: true,
  //               },
  //               legend: {
  //                 cursor: "pointer",
  //                 itemclick: toggleDataSeries,
  //               },
  //               data: [
  //                 {
  //                   type: "column",
  //                   name: "Dự trữ dầu thực tế (bn)",
  //                   legendText: "Dự trữ dầu thực tế",
  //                   showInLegend: true,
  //                   dataPoints: [
  //                     { label: "Saudi", y: 266.21 },
  //                     { label: "Venezuela", y: 302.25 },
  //                     { label: "Iran", y: 157.2 },
  //                     { label: "Iraq", y: 148.77 },
  //                     { label: "Kuwait", y: 101.5 },
  //                     { label: "UAE", y: 97.8 },
  //                   ],
  //                 },
  //                 {
  //                   type: "column",
  //                   name: "Sản xuất dầu (triệu/ngày)",
  //                   legendText: "Sản xuất dầu",
  //                   axisYType: "secondary",
  //                   showInLegend: true,
  //                   dataPoints: [
  //                     { label: "Saudi", y: 10.46 },
  //                     { label: "Venezuela", y: 2.27 },
  //                     { label: "Iran", y: 3.99 },
  //                     { label: "Iraq", y: 4.45 },
  //                     { label: "Kuwait", y: 2.92 },
  //                     { label: "UAE", y: 3.1 },
  //                   ],
  //                 },
  //               ],
  //             });
  //             chart.render();

  //             function toggleDataSeries(e) {
  //               if (
  //                 typeof e.dataSeries.visible === "undefined" ||
  //                 e.dataSeries.visible
  //               ) {
  //                 e.dataSeries.visible = false;
  //               } else {
  //                 e.dataSeries.visible = true;
  //               }
  //               chart.render();
  //             }
  //           };





            window.onload = function () {
              var chart = new CanvasJS.Chart("chartContainer", {
                animationEnabled: true,
                title: {
                  text: "So sánh dự trữ dầu thô và sản xuất, 2016",
                },
                axisY: {
                  title: "Hàng tỷ thùng",
                  titleFontColor: "#4F81BC",
                  lineColor: "#4F81BC",
                  labelFontColor: "#4F81BC",
                  tickColor: "#4F81BC",
                },
                data: [
                  {
                    type: "column",
                    dataPoints: [
                      { label: "Dự trữ dầu thô", y: 500 },
                      { label: "Sản xuất", y: 300 },
                    ],
                  },
                ],
              });

              chart.render();
            };