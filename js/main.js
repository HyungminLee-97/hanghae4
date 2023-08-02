//전송 버튼 기능 활성화
$("#send").click(function () {
  var form = {
    name: $("#name").val(),
    comments: $("#comments").val(),
    date: new Date(),
  };
  db.collection("email-received")
    .add(form)
    .then((result) => {
      alert("댓글 작성이 완료되었습니다.");
    });
});

function showPopup1() {
  window.open("./about1.html","INTRODUCE MYSELF", "width=500, height=500, left=100, top=50")
}

function showPopup2() {
  window.open("./about2.html","INTRODUCE MYSELF", "width=500, height=500, left=100, top=50")
}

function showPopup3() {
  window.open("./about3.html","INTRODUCE MYSELF", "width=500, height=500, left=100, top=50")
}