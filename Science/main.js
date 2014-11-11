alert("Loading Water index V4.0")
var Define =["undefined","The Process of Changing a liquid to gas.","Rain, Sleet or Snow any form of liquid or solid that falls from the sky.","A River or stream crossing into a larger river or lake","A large body of water surrounded by land","A large natural stream of water flowing into a ocean or lake.","Water found underground in soil in other words and aquifier.","The process of water slowly passing through a filter","The source or headwaters of a river or stream is the furthest place in that river or stream from its estuary or confluence with another river, as  ","a very large amount of water all in one place","The conversion of water to a liquid, on a cold surface","An area of low lying ground near water or stream"," a crescent-shaped often ephemeral lake formed in the abandoned channel of a meander by the silting up of its ends after the stream has cut through the land within the meander at a narrow point.","Saturated Land, swamps ect.","a long rane hill top, mountain range , or water shed","a winding curve of a river","Delta is   a landform that forms at the mouth of a river, where the river flows into an ocean, sea, estuary, lake, or reservoir. Deltas form from deposition of sediment carried by a river as the flow leaves its mouth."," Transpiration is the process of water movement through a plant and its evaporation from aerial parts, such as from leaves but also from stems and flowers. Leaf surfaces are dotted with pores called stomata, and in most plants they are more numerous on the undersides of the foliage. "];
function search(keyword){
  var search = keyword.toLowerCase();
  if(search==="evaporation"){
    alert("Definition:"+Define[1]);
    document.getElementById("definition").innerHTML="Definition: "+Define[1];
    document.getElementById("searchimg").style.backgroundPosition='0px -150px';
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
  else if(search==="ocean"){
    alert("Definition:"+Define[9]);
  }
  else if(search==="condensation"){
    alert("Definition:"+Define[10]);
  }
  else if(search==="floodplain"){
    alert("Definition:"+Define[11]);
  }
  else if(search==="oxbowlake"){
    alert("Definition:"+Dfine[12]);
  }
  else if(search==="wetland"){
    alert("Definition:"+Define[13])
  }
  else if(search==="ridge"){
    alert("Definition:"+Define[14])
  }
  else if(search==="meander"){
    alert("Definition:"+Define[15]);
  }
  else if(search==="mouth"){
    alert("Deinition:"+Define[16]);
  }
  else if(search==="delta"){
  alert("Definition:"+Define[17]);
}
else if(search==="transpiration"){
  alert("Definition:"+Define[18]);
}
}
