function theBeatlesPlay(musicians, instruments) {
  const newArray = [];
  for(let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var newArray = [];
  var count = 0;
  while (count < facts.length) {
    newArray.push(`${facts[count]}!!!`);
    count++;
  }
  return newArray;
}

function iLoveTheBeatles(n) {
  var newArray =[];
  do {
    newArray.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return newArray;
}
