var myusername = "new-user";
var password = "password";

var usernameEntry = document.getElementById("login-username");
var passwordEntry = document.getElementById("password");
var loginButton = document.getElementById("submit");




function checkUser(){
if (usernameEntry.value === myusername && passwordEntry.value === password){
    window.location = "file:///C:/Users/MARY%20OJO/Documents/Web%20development%20projects/Productivity%20App/Home%20page/home_index.html";
} else{
    //onclick of submit
    alert("Sorry, wrong username or password");
}
}
loginButton.addEventListener("click", checkUser);
