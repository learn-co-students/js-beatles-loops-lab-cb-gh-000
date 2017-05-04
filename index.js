function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < 4; i++) {
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array
}

function johnLennonFacts(facts){
  var array = [];
  var j = 0;
  while (j < facts.length) {
    array.push(facts[j] + "!!!")
    j++;
  }
  return array
}

function iLoveTheBeatles(n){
  var array = [];
  "I love the Beatles!";
  do {
    array.push("I love the Beatles!");
    n++
  } while (n < 15);
  return array
}
