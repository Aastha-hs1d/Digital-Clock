const getCurrentTime =()=>{
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
let ms = now.getMilliseconds();
let day = now.getDay();
minutes = minutes<10 ? "0"+ minutes: minutes;
hours = hours<10 ? "0" + hours: hours;
seconds = seconds<10 ? "0" + seconds: seconds;
// document.querySelector(".clock").innerText = `${hours}:${minutes}:${seconds}`
document.getElementsByClassName("hours")[0].innerHTML = `${hours}`;
document.getElementsByClassName("minutes").item(0).innerHTML = `${minutes}`;
document.getElementsByClassName("seconds")[0].innerHTML = `${seconds}`;
}
setInterval(getCurrentTime,1000);