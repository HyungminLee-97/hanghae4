const express = require("express");
const app = express();

app.listen(3000, function () {
  console.log("3000번 포트가 열림");
});

// index 페이지 출력
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 서주헤 profile about1
app.get("/about1", function (req, res) {
  res.sendFile(__dirname + "/about1.html");
});

// 이형민 profile about2
app.get("/about2", function (req, res) {
  res.sendFile(__dirname + "/about2.html");
});

// 오윤성 profile about3
app.get("/about3", function (req, res) {
  res.sendFile(__dirname + "/about3.html");
});

//css,img,js 적용
app.use(express.static("public"));
