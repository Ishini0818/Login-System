//deifining function for show password
function showPass() {
  var x = document.getElementById("pword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//defining user array
function users() {
  var usernames = ["Ishini"];
  var passwords = ["1234"];
  var x = document.getElementById("username").value;
  var y = document.getElementById("pword").value;

  for (var i = 0; i < usernames.length; i++) {
    for (var j = 0; j < usernames.length; j++) {
      if (x == usernames[i] && y == passwords[j]) {
        location.replace("home.html");
        break;
      } else {
        alert("Invalid User Name or Password!");
        break;
      }
    }
  }
}


