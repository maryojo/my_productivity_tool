var myusername = "new-user";

var greeting = document.getElementById("welcome-message");
var currentDate = document.getElementById("current-date");
var currentTime = document.getElementById("current-time");
var today = new Date();

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

// convert day number to name
var day  = new Array();
day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";
var dayName = day[today.getDay()];

currentDate.innerHTML = "Today is " + dayName + ", " + monthName + " " + today.getDate() + ", " + today.getFullYear();

//Function current time
function dynamicTime(){
    var today = new  Date();
    currentTime.innerHTML = "The time is " + today.toLocaleTimeString();
 }
var timeNow = setInterval(dynamicTime, 1000);
 


function buttonValue(v){
    display.value += v
}
function clearScreen(){
    document.getElementById("output").reset();
}
// Use the id of the form
function backspace(){
    display.value = display.value.slice(0, display.value.length -1)
}
// use the slice method
