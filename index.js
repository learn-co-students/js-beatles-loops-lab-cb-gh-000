function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let a  = 0; a < musicians.length; a++){
    array.push(musicians[a]+" plays "+instruments[a]);
  }
  return array;
}

function johnLennonFacts(facts){
  let a = facts.length;
  while(a != 0){
    facts[a-1] = facts[a-1]+"!!!";
    a--;
  }
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15);
  return array;
}
