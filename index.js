// add solution here
function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var i =0; i < musicians.length ; i++){
    result.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return result;
}

function johnLennonFacts(facts){
  var counter = 0;
  var result = []
  while (counter <  facts.length){
    result.push(facts[counter] + "!!!");
    counter++;
  }
  return result;
}

function iLoveTheBeatles(n){
  var result = [];
  do {
  result.push("I love the Beatles!");
  n++;
} while (n < 15 );
return result;
}