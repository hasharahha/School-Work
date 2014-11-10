alert("Loading Water index")
var Define =[];
var Example ={};
Define[1]="The Process of Changing a liquid to gas.";
Define[2]="Rain, Sleet or Snow any form of liquid or solid that falls from the sky.";
Define[3]="A River or stream crossing into a larger river or lake";
Define[4]="A large body of water surrounded by land";
Define[5]="A large natural stream of water flowing into a ocean or lake.";
Define[6]="Water found underground in soil in other words and aquifier.";
Define[7]="The process of water slowly passing through a filter";
function search(){
  
var key = document.getElementById("search").value;
search = key.toLowerCase();
if(search==="evaporation"){
document.getElementById("definition").innerHTML="Definition: "+Define[1]
}
else if(search==="precipitation"){
  
}
}
else{
  alert("error Code 404 not found")
}
}
