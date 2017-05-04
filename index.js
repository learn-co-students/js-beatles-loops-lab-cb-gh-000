function theBeatlesPlay(musicians, instruments) {
  var constructedArray = [];
  for (let i = 0; i < musicians.length; i++)
    constructedArray.push(`${musicians[i]} plays ${instruments[i]}`);
  return constructedArray;
}

function johnLennonFacts(facts) {
  var constructedArray = [];
  let i = 0;
  while (i < facts.length) {
    constructedArray.push(`${facts[i]}!!!`);
    i++;
  }
  return constructedArray;
}

function iLoveTheBeatles(initialVal) {
  var constructedArray = [];
  var val = initialVal;
  do
    constructedArray.push("I love the Beatles!");
  while (++val < 15);
  return constructedArray;
}
