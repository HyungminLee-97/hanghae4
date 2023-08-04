const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.gq7c239.mongodb.net/?retryWrites=true&w=majority",
  function (error, client) {
    if (error) return console.log(error);

    //mongodb 내에 hanghae4라는 database 폴더에 연결
    db = client.db("hanghae4");

    //서버띄우는 코드
    app.listen(3000, function () {
      console.log("3000번 포트가 열림");
    });
  }
);

// index 페이지 출력
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 팀 멤버 1,2,3 profile 조회
app.get("/:id", function (req, res) {
  const { id } = req.params;
  res.sendFile(__dirname + `/${id}`);
});

//방명록 작성
app.post("/add", function (req, res) {
  // 댓글 저장
  db.collection("post").insertOne(
    {
      이름: req.body.name,
      댓글: req.body.comment,
      암호: req.body.password,
    },
    function (error, result) {
      console.log("댓글 작성 완료");
    }
  );
  // 작성 완료 alert 후, index 페이지로 리디렉션
  res.write("<script>alert('Success')</script>");
  res.write('<script>window.location="/"</script>');
});


//css,img,js 적용
app.use("/public", express.static("public"));
