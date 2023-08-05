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


document.getElementById('f').onsubmit = function () {
  var name = document.getElementById('name').value;
  var content = document.getElementById('content').value;

  document.getElementById("result").textContent = name + ':' + content;
}



// form.addEventListener('submit', function(e) {
//   e.preventDefault();
  
//   var name = document.getElementById('name').value;
//   var content = document.getElementById('content').value;

//   var node = document.createElement('li')
//   var textnode = name + ':' + content;
//   node.appendChild(textnode);
//   document.getElementsByTagName('txt').appendChild(node)
//  })


 // function append() {
//   var name = document.getElementById('name').value;
//   var content = document.getElementById('content').value;

//   var node = document.createElement('li')
//   var textnode = name + ':' + content;
//   node.appendChild(textnode);
//   document.getElementsByTagName('txt').appendChild(node)
// }
