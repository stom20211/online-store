let mytime=setInterval(timeFunction,1000);

function timeFunction(){
    let currentTime=new Date();
    let currentHour=currentTime.getHours();
    let currentMinute=currentTime.getMinutes();
    let currentSecond=currentTime.getSeconds();
    let message1="Good Morning!";
    let message2="Good Afternoon!";
    let message3="Good Evening!";
    if(currentHour<13){
        document.getElementById("greeting").innerHTML = `${message1} The current time is ${currentHour}:${currentMinute}:${currentSecond} AM.`;
    }
    else if(currentHour<18){
        document.getElementById("greeting").innerHTML = `${message2} The current time is ${currentHour-12}:${currentMinute}:${currentSecond} PM.`;  
    }
    else{
        document.getElementById("greeting").innerHTML = `${message3} The current time is ${currentHour-12}:${currentMinute}:${currentSecond} PM.`;
    }
}
