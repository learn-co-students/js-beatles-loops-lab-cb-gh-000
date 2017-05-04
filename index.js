function theBeatlesPlay(musician, instrument) {
  var emptyArray = new Array();
  for (var i = 0; i < musician.length; i++) {
      emptyArray[i] = `${musician[i]} plays ${instrument[i]}`
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++;
  }
  return facts
}

function iLoveTheBeatles(number) {
  var emptyArray = new Array();
  do {
    emptyArray.push("I love the Beatles!")
    number++
  } while (number < 15);
  return emptyArray
}
