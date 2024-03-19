var password2 = document.getElementById("password");
var uname2 = document.getElementById("username");
var login = document.getElementById("btn");

function check() {
  var pass2 = password2.value;
  var name2 = uname2.value;
  var nameget = localStorage.getItem("usname");
  var passget = localStorage.getItem("password");

  if (name2 == nameget && pass2 == passget) {
    alert("Login Succesfull");
  } else {
    alert("Unsuccesfull");
  }
}

login.addEventListener("click", check);
