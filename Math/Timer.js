var Time = 180;
setInterval("Calculate()", 1000);
setInterval("Show()", 1000);

function Calculate(){
Time -=1;
}
function Show(){
document.getElementById("Timer").innerHTML="Time Left: "+Time;
}
