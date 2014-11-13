//Checker for test
var score =0;
function Check(){
Check1();
Check2();
Check3();
Check4();
Check5();
Check6();
Check7();
Check8();
Check9();
Check10();
UpdateScore();
}
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






