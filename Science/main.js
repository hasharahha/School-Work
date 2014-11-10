alert("Loading Water index")
var Define ={};
var Example ={};
Define.evaporation="The Process of Changing a liquid to gas.";
Define.precipitation="Rain, Sleet or Snow any form of liquid or solid that falls from the sky."
function search(){
  
var key = document.getElementById("search").value;
search = key.toLowerCase();
if(search==="evaporation"){
document.getElementById("definition").innerHTML="Definition:"+" "+Define.evaporation;
}
else if(search==="precipitation"){
  
}
}
else{
  alert("error Code 404 not found")
}
}
