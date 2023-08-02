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
