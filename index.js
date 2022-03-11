// Variables here
const hour = document.getElementById('Hour-Hand');
const minute = document.getElementById('Minute-Hand');
const second = document.getElementById("Second-Hand");




setInterval(() => {
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();
    if(currentHour>=12){
            currentHour-=12;
        }
    let secondDeg = 6 * currentSecond;
    let minuteDeg = 6 * currentMinute;
    let hourDeg = 30*currentHour + currentMinute/2;
    second.style.transform = `rotate(${secondDeg}deg)`;
    minute.style.transform = `rotate(${minuteDeg}deg)`;
    hour.style.transform = `rotate(${hourDeg}deg)`;
    console.log("i am running");
    
}, 1000);

























// if(flag===0){
//     flag =1;

// }
// let secondTime = 1000;
// let minuteTime;
// minuteTime = 60*secondTime;
// let hourTime;
// hourTime = 12*minuteTime;

// Main Logic here
// setInterval(() => {
    
//     secondDeg = secondDeg%360;
//     second.style.transform = `rotate(${secondDeg}deg)`;
//     secondDeg = secondDeg+6;
// }, secondTime);
// setInterval(() => {
   
//     minute.style.transform = `rotate(${minuteDeg}deg)`;
//     minuteDeg = minuteDeg%360;
//     minuteDeg = minuteDeg+6;
// }, minuteTime);
// setInterval(() => {
//     hourDeg = hourDeg%360;
//     hour.style.transform = `rotate(${hourDeg}deg)`;
//     hourDeg = hourDeg+6;
// }, hourTime);