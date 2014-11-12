
var answer1 = document.getElementById("Q1A").value;
var answer2 = document.getElementById("Q2B").value;
var answer3 = document.getElementById("Q3D").value;
var score = 0;
function Score(){
  if(document.getElementById("Q1A").checked){
    score += 10;
  }
  switch(score){
    case document.getElementById("Q2B").checked:
      score +=10;
      break;
    case document.getElementById("Q3D").checked;
      sore +=10;
      break;
    
  }
}
}
