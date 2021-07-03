// add solution here
function iLoveTheBeatles(number){
    var song = [];
    do{
        song.push("I love the Beatles!");
      number++;
    }while(number < 15)
    return song;
}

function theBeatlesPlay (players,instruments){
    var emp = [];
    for(var i =0; i < players.length;i++){
       emp.push(players[i] + " plays " + instruments[i]);
      }
    return emp
}

function johnLennonFacts(facts){
     var ad = [];
     var i = 0;
    while(i < facts.length){
         ad.push(facts[i] + "!!!");
      i++
  }
  return ad;
}
