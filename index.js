function theBeatlesPlay(musicians, instruments){
  var rv = [];
  for (var i = 0; i < musicians.length; i++){
    rv.push(musicians[i] +" plays " + instruments[i] )
  }
  return rv;
}

function johnLennonFacts(facts){
  var array = [];
  for (var i = 0; i < facts.length; i++){
    array[i] = facts[i] + "!!!";
  }
  return array;
}

function iLoveTheBeatles(n){
  var rv = [];
do{
  rv.push("I love the Beatles!");
  n--;
} while (n >= 0 && n < 15);

return rv;
}
