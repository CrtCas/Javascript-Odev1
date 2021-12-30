
let isim =prompt("Adınızı giriniz.");
let placeholder =  document.querySelector("#myName");
placeholder.innerHTML = isim;

let clock = document.querySelector("#myClock")

function showTime(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];
    let minute = (minutes<10)? "0".concat(minutes):minutes;
    let second =(seconds<10)? "0".concat(seconds):seconds;
    let today = days[date.getDay()-1];
    clock.innerHTML = `${hours}:${minute}:${second} ${today}`;
}
setInterval(showTime,1000);