alert("Loading Water index")

function search(){
  alert("Checking Server....")
var key = document.getElementById("search").value;
search = key.toLowerCase();
if(search==="evaporation"){
document.getElementById("definition").innerHTML="The Process Changing of liquid into a gas";
}
}
