const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
app.use(express.urlencoded({ extended: true }));

MongoClient.connect(
  "mongodb+srv://admin:qwer1234@cluster0.gq7c239.mongodb.net/?retryWrites=true&w=majority",
  function (err, client) {
    if (err) return console.log(err);
    app.listen(3000, function () {
      console.log("3000번 포트가 열림");
    });
  }
);

app.listen(3000, function () {
  console.log("3000번 포트가 열림");
});

// index 페이지 출력
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 팀 멤버 1,2,3 profile 조회
app.get("/data/:id", function (req, res) {
  const { id } = req.params;
  res.sendFile(__dirname + `/${id}.html`);
});

//방명록 작성
app.post("/add", function (req, res) {
  res.send("댓글이 작성되었습니다.");
  console.log(req.body);
});

//css,img,js 적용
app.use("/public", express.static("public"));
