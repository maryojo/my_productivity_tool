var myusername = "new-user";
var password = "password";

var usernameEntry = document.getElementById("login-username");
var passwordEntry = document.getElementById("password");
var loginButton = document.getElementById("submit");




function checkUser(){
if (usernameEntry.value === myusername && passwordEntry.value === password){
    window.location = "home-index.html";
} else{
    //onclick of submit
    alert("Sorry, wrong username or password");
}
}
loginButton.addEventListener("click", checkUser);
