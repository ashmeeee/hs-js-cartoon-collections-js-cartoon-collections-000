var dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"]

 function dwarfRollCall(callDwarves){
   var array =[]
   
   for (var i=0;i<callDwarves.length;i++) {
     
     array.push(`${i+1}. ${callDwarves[i]} `)
     
   }
   
   return array.join("")
 }
 
//console.log(dwarfRollCall(callDwarves))

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"]

function summonCaptainPlanet(callPlaneteerCalls){
	var newArray =[]
	for(var i=0; i<callPlaneteerCalls.length; i++) {
	  
    newArray.push(callPlaneteerCalls[i].toUpperCase() + "!")
    
  }
  return newArray
}
// console.log(summonCaptainPlanet(callPlaneteerCalls));

function longPlaneteerCalls(characters){
  for(var i=0;i<characters.length;i++){
    if (characters[i].length>4){
      return true
    }
  }
  return false
}

 

function findTheCheese (cheese) {
  for(var i=0;i<cheese.length;i++){
  if (cheese[i]=="cheddar"
  ||cheese[i]=="gouda"
  ||cheese[i]=="camembert"
  ||cheese[i]=="swiss"
  ){
    return cheese[i]
  }
}
return "no cheese!"
}


function wordsWithB (words){
  var newArray=[]
    for (var i=0, i<=words.length, i++)
    if (var=b)
    newArray.push(words[i]())
  

}
return newArray

