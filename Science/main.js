alert("Loading Water index V5.0")
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
    document.getElementById("definition").innerHTML="Definition: "+Define[2];
    document.getElementById("searchimg").style.backgroundPosition='0px -300px';
  }
  else if(search==="tributaries"){
    alert("Definition:"+Define[3]);
    document.getElementById("definition").innerHTML="Definition: "+Define[3];
    document.getElementById("searchimg").style.backgroundPosition='0px -450px'
  }
  else if(search==="lake"){
    alert("Definition:"+Define[4]);
    document.getElementById("definition").innerHTML="Definition: "+Define[4];
    document.getElementById("searchimg").style.backgroundPosition='0px -600px'
  }
  else if(search==="river"){
    alert("Definition:"+Define[5]);
    document.getElementById("definition").innerHTML="Definition: "+Define[5];
    document.getElementById("searchimg").style.backgroundPosition='0px -750px';
  }
  else if(search==="groundwater"){
    alert("Definition:"+Define[6]);
    document.getElementById("definition").innerHTML="Definition: "+Define[6];
    document.getElementById("searchimg").style.backgroundPosition='0px -900px';
  }
  else if(search==="percolation"){
    confirm("No images found");
    alert("Definition:"+Define[7]);
    document.getElementById("definition").innerHTML="Definition: "+Define[7];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="headwaters"){
    confirm("No image found");
    alert("Definition:"+Define[8]);
    document.getElementById("definition").innerHTML="Definition: "+Define[8];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="ocean"){
    alert("Definition:"+Define[9]);
    document.getElementById("definition").innerHTML="Definition: "+Define[9];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
    
  }
  else if(search==="condensation"){
    confirm("No image found")
    alert("Definition:"+Define[10]);
    document.getElementById("definition").innerHTML="Definition: "+Define[10];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="floodplain"){
    confirm("No image found");
    alert("Definition:"+Define[11]);
    document.getElementById("definition").innerHTML="Definition: "+Define[11];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="oxbowlake"){
    confirm("No image Found Because server is full of http request");
    alert("Definition:"+Define[12]);
    document.getElementById("definition").innerHTML="Definition: "+Define[12];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="wetland"){
    confirm("No image found");
    alert("Definition:"+Define[13])
    document.getElementById("definition").innerHTML="Definition: "+Define[13];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
    
  }
  else if(search==="ridge"){
    confirm("No image found");
    alert("Definition:"+Define[14])
    document.getElementById("definition").innerHTML="Definition: "+Define[14];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="meander"){
    confirm("No image found");
    alert("Definition:"+Define[15]);
    document.getElementById("definition").innerHTML="Definiton: "+Define[15];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
  }
  else if(search==="mouth"){
    confirm("No image found");
    alert("Deinition:"+Define[16]);
    document.getElementById("definition").innerHTML="Definition: "+Define[16];
  }
  else if(search==="delta"){
    confirm("No image found");
    alert("Definition:"+Define[17]);
    document.getElementById("definition").innerHTML="Definition: "+Define[17];
    document.getElementById("searchimg").style.backgroundPosition='0px 0px';
}
else if(search==="transpiration"){
  confirm("No image found");
  alert("Definition:"+Define[18]);
  document.getElementById("definition").innerHTML="Definition: "+Define[18];
  document.getElementById("searchimg").style.backgroundPosition='0px 0px';
}
else{
  document.getElementById("definition").innerHTML="sorry but "+search+" did not match any of our documents";
  document.getElementById("searchimg").style.backgroundPosition='0px 0px';
}
}


function Contact(){
  var person = prompt("Leave your first name:", "Here");
  alert("Okay, "+person+" Email me at hasharahha@gmail.com");
}

