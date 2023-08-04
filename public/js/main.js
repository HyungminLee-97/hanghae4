//전송 버튼 기능 활성화
$("#send").click(function () {
  var form = {
    name: $("#name").val(),
    comments: $("#comments").val(),
    password: $("#pwd").val(),
    date: new Date(),
  };
  db.collection("email-received")
    .add(form)
    .then((result) => {
      alert("댓글 작성이 완료되었습니다.");
    });
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
  };

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  };

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
  };

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
  };
  
function openModal3() {
  document.getElementById("myModal3").style.display = "block";
  };

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
  };