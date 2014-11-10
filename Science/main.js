alert("Loading Water index")
var Define ={};
var Example ={};
Define.evaporation="The Process of Changing a liquid to gas.";
Define.precipitation="Rain, Sleet or Snow any form of liquid or solid that falls from the sky.";
Define.tributaries="A River or stream crossing into a larger river or lake";
Define.lake="A large body of water surrounded by land";
Define.river="A large natural stream of water flowing into a ocean or lake.";
Define.groundwater="Water found underground in soil in other words and aquifier.";
Define.percolation="The process of water slowly passing through a filter";
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
