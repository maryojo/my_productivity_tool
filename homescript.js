var myusername = "new-user";

var greeting = document.getElementById("welcome-message");
var currentDate = document.getElementById("current-date");
var currentTime = document.getElementById("current-time");
var today = new Date();

var calculator = document.getElementById("calculator");
var todolist = document.getElementById("todolist");
var calendar = document.getElementById("calendar");
var dictionary = document.getElementById("dictionary");
var alarm = document.getElementById("alarm");
var timer = document.getElementById("timer");

//Greeting
greeting.innerHTML = "Welcome " + myusername + "!";


// convert month number to name
    var month  = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
var monthName = month[today.getMonth()];

currentDate.innerHTML = "Today is " + monthName + " " + today.getDate() + ", " + today.getFullYear();

//Function current time
function dynamicTime(){
    var today = new  Date();
    currentTime.innerHTML = "The time is " + today.toLocaleTimeString();
 }
var timeNow = setInterval(dynamicTime, 1000);
 

function runCalendar(){
        window.location = "https://developers.google.com/calendar/quickstart/js";
}
function runCalculator(){
    window.location = "calculator.html";
}
function runDictionary(){
    window.location = "";
}
function runToDoList(){
    window.location = "";
}
function runAlarm(){
    window.location = "";
}
function runTimer(){
    window.location = "";
}



calculator.addEventListener("click", runCalculator);
dictionary.addEventListener("click", runDictionary);
calendar.addEventListener("click", runCalendar);
todolist.addEventListener("click", runToDoList);
alarm.addEventListener("click", runAlarm);
timer.addEventListener("click", runTimer);
