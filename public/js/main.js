//전송 버튼 기능 활성화
$("#send").click(function () {
  var form = {
    name: $("#name").val(),
    password: $("#pwd").val(),
    comments: $("#comments").val(),
    date: new Date(),
  };
  db.collection("email-received")
    .add(form)
    .then((result) => {
      alert("댓글 작성이 완료되었습니다.");
    });
});

window.onload = getCommnet();

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function openModal2() {
  document.getElementById("myModal2").style.display = "block";
}

function closeModal2() {
  document.getElementById("myModal2").style.display = "none";
}

function openModal3() {
  document.getElementById("myModal3").style.display = "block";
}

function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}

function getCommnet() {
  // 기존에 있는 방명록 목록을 비워준다.
  $("#comment-list").empty();

  $.ajax({
    type: "GET",
    url: "/comment",
    success: function (response) {
      for (let comment of response) {
        let html = genCardHtml(comment);
        $("#comment-list").append(html);
      }
    },
  });
}

function genCardHtml(commnet) {
  let name = commnet["이름"];
  let content = commnet["댓글"];

  if (name == "") return;

  let html = `
      <div class="comment-card">
          <div class="comment-content">
            <div><span class="comment-name">${name}</span></div>
            <div>${content}</div>
          </div>
        </div>
      <hr>
    `;

  return html;
}

document.getElementById("f").onsubmit = function () {
  var name = document.getElementById("name").value;
  var content = document.getElementById("content").value;

  document.getElementById("result").textContent = name + ":" + content;
};
