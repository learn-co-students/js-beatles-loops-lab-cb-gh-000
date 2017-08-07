function theBeatlesPlay(musicians, instruments){
  var a = [];
  for(var i=0; i<musicians.length; i++){
    a.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return a;
}

function johnLennonFacts(facts){
  var newFacts = [];
  var i = 0;
  while(facts.length > i){
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var a = [];
  do {
    a.push("I love the Beatles!");
    num++;
  } while(num < 15)
    return a;
}
