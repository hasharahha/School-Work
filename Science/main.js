alert("Loading Water index")
var Define =["undefined","The Process of Changing a liquid to gas.","Rain, Sleet or Snow any form of liquid or solid that falls from the sky.","A River or stream crossing into a larger river or lake","A large body of water surrounded by land","A large natural stream of water flowing into a ocean or lake.","Water found underground in soil in other words and aquifier.","The process of water slowly passing through a filter","a very large amount of water all in one place","The conversion of water to a liquid, on a cold surface","An area of low lying ground near water or stream"," a crescent-shaped often ephemeral lake formed in the abandoned channel of a meander by the silting up of its ends after the stream has cut through the land within the meander at a narrow point.","Saturated Land, swamps ect.","a long rane hill top, mountain range , or water shed","a winding curve of a river","Delta is   a landform that forms at the mouth of a river, where the river flows into an ocean, sea, estuary, lake, or reservoir. Deltas form from deposition of sediment carried by a river as the flow leaves its mouth."," Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as from leaves but also from stems and flowers. Leaf surfaces are dotted with pores called stomata, and in most plants they are more numerous on the undersides of the foliage. "];
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
