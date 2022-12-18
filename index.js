function clock(){
    const date =new Date();
console.log(date);
let hours = date.getHours();
console.log(hours);
let mins = date.getMinutes();
console.log(mins);
let secs = date.getSeconds();
console.log(secs);

if (hours >= 20 && mins >= 0 && secs >= 1) {
    document.getElementById("mainimg").src = "./night1.jpg";
    document.getElementById('mainmessage').innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP"
    document.getElementById('message').innerHTML = "GOOD NIGHT!!"
    // message.style.fontSize ="25px";
    // message.style.marginTop ="15px";
    // mainmessage.style.fontSize ="18px";
    // mainmessage.style.top ="34px";
   
}
else if (hours >= 16 && mins >= 0 && secs >= 1) {
    document.getElementById("mainimg").src = "./evng.png";
    document.getElementById('message').innerHTML = "GOOD EVENING !!"
    document.getElementById('mainmessage').innerHTML = "STOP YAMING, GET SOME TEA.. ITS JUST EVENING !"
    // mainmessage.style.fontSize="25px";
    // mainmessage.style.bottom="-22px";
    // message.style.fontSize="25px";
    // message.style.marginTop="15px";

}
else if (hours >= 12 && mins >= 0 && secs >= 1) {
    document.getElementById("mainimg").src = "./afternoon.png";
    document.getElementById('message').innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP!!"
    document.getElementById('mainmessage').innerHTML = "LET'S HAVE SOME LUNCH !!"
    // message.style.fontSize="20px";
    // message.style.fontSize="20px";
    // mainmessage.style.fontSize="25px";
    // mainmessage.style.textAlign="center";
    // mainmessage.style.left="6px";
}
else if (hours >= 10 && mins >= 0 && secs >= 1) {
    document.getElementById("mainimg").src = "./component.svg";
    document.getElementById('mainmessage').innerHTML = "GRAB SOME HEALTHY BREAKFAST";
    document.getElementById('message').innerHTML = "GOOD MORNING!! WAKE UP !!";
}


let meridian ;
if(hours>12){
    meridian = "PM";
    hours-=12;
}
else{
    meridian ="AM";
}
if(hours<10){
    hours = "0"+hours;
}
if(mins<10){
    mins = "0"+mins;
}
if(secs<10){
    secs = "0"+secs;
}



const hoursSlot =document.getElementById('hours');
hoursSlot.innerHTML = `${hours}` + "\n hours";

const minsSlot =document.getElementById('mins');
minsSlot.innerHTML = `${mins}` + "\n mins";

const secsSlot =document.getElementById('secs');
secsSlot.innerHTML = `${secs}` + "\n secs";

const meridianSlot =document.getElementById('meridian');
meridianSlot.innerHTML = meridian;
}

setInterval(() =>{
clock();
},1000);

function SetAlarm(){
    document.getElementById("wake_up_text").innerHTML= document.getElementById('wake_up_time').value
    document.getElementById("lunch_text").innerHTML= document.getElementById('lunch_time').value
    document.getElementById("nap_text").innerHTML= document.getElementById('nap_time').value
    document.getElementById("night_text").innerHTML= document.getElementById('night_time').value
}
