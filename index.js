function theBeatlesPlay(mus,ins) {
  var result = [];
  for(var i = 0; i < mus.length; i++) {
    result.push(`${mus[i]} plays ${ins[i]}`);
  }
  return result;
}

function johnLennonFacts(facts) {
  var pos = 0;
  while ( pos < facts.length) {
  facts[pos] = facts[pos] + "!!!";
  pos++;
  }
  return facts;
}

function iLoveTheBeatles(num) {

}

function iLoveTheBeatles(num) {
  var result = [];
  var pos = 0;
  if (num < 15) {
    do{
      result.push("I love the Beatles!");
      pos++;
    } while (pos <= num);
    return result;
  }
  else{
    result.push("I love the Beatles!");
    return result;
  }
}
