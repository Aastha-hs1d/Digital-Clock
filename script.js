const getCurrentTime =()=>{
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ms = now.getMilliseconds();
let dayIndex = now.getDay();

//Array to map day index to names
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let today = days[dayIndex];

// Format hours, minutes, and seconds
minutes = minutes<10 ? "0"+ minutes: minutes;
hours = hours<10 ? "0" + hours: hours;
seconds = seconds<10 ? "0" + seconds: seconds;
// document.querySelector(".clock").innerText = `${hours}:${minutes}:${seconds}`

//DOM crap
document.getElementsByClassName("hours")[0].innerHTML = `${hours}`;
document.getElementsByClassName("minutes").item(0).innerHTML = `${minutes}`;
document.getElementsByClassName("seconds")[0].innerHTML = `${seconds}`;
document.getElementsByClassName("day")[0].innerHTML = `${today}`;
}
setInterval(getCurrentTime,1000);