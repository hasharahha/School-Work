//Checker for test
alert("test loaded");
var score =0;
function Check1(){
  if(document.getElementById("Q1A").checked){
    score +=10;
  }
}
 funtion Check2(){
   if(document.getElementById("Q2B").checked){
     score +10;
   }
 }
 function Check3(){
   if(document.getElementById("Q3D").checked){
     score +=10;
 }
}
function Check4(){
  if(document.getElementById("Q4A").checked){
    score +=10;
  }
}
function Check5(){
  if(document.getElementById("Q5C").checked){
    score +=10;
  }
}
function Check6(){
  if(document.getElementById("Q6D").checked){
    score +=10;
  }
}
function Check7(){
  if(document.getElementById("Q7A").checked){
    score +=10;
  }
}
function Check8(){
  if(document.getElementById("Q8B").checked){
    score +=10;
  }
}
function Check9(){
  if(document.getElementById("Q9A").checked){
    score +=10;
  }
}
function Check10(){
  if(document.getElementById("Q10A").checked){
    score +=10;
  }
}

function UpdateScore(){
  document.getElementById("score").innerHTML="Score: "+score;
}

function Check(){

setTimeout("Check1()", 500);
setTimeout("Check2()", 600);
setTimeout("Check3()", 700);
setTimeout("Check4()", 800);
setTimeout("Check5()", 900);
setTimeout("Check6()", 1000);
setTimeout("Check7()", 1100);
setTimeout("Check8()", 1200);
setTimeout("Check9()", 1300);
setTimeout("Check10()", 1400);
setInterval("UpdateScore()", 2000);
}




