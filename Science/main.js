alert("Loading Water index")
var Define =["undefined","The Process of Changing a liquid to gas.","Rain, Sleet or Snow any form of liquid or solid that falls from the sky.","A River or stream crossing into a larger river or lake","A large body of water surrounded by land","A large natural stream of water flowing into a ocean or lake.","Water found underground in soil in other words and aquifier.","The process of water slowly passing through a filter","a very large amount of water all in one place","The conversion of water to a liquid, on a cold surface","An area of low lying ground near water or stream"," a crescent-shaped often ephemeral lake formed in the abandoned channel of a meander by the silting up of its ends after the stream has cut through the land within the meander at a narrow point.","Saturated Land, swamps ect."];
function search(keyword){
  var search = keyword.toLowerCase();
  if(search==="evaporation"){
    alert("Definition:"+Define[1]);
  }
  else if(search==="precipitation"){
    alert("Definition:"+Define[2]);
  }
  else if(search==="tributaries"){
    alert("Definition:"+Define[3]);
  }
  else if(search==="lake"){
    alert("Definition:"+Define[4]);
  }
  else if(search==="river"){
    alert("Definition:"+Define[5])
  }
  else if(search==="groundwater"){
    alert("Definition:"+Define[6]);
  }
  else if(search==="percolation"){
    alert("Definition:"+Define[7]);
  }
  else if(search==="headwaters"){
    alert("Definition:"+Define[8])
  }
}
