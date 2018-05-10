function theBeatlesPlay (musicians, instruments) {
  var allTogether = [];

  for (let i in musicians) {
    allTogether.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return allTogether;
}

function johnLennonFacts(facts) {

  for (let i in facts) {
    facts[i] = facts[i] + '!!!'
  }

  return facts;
}

function iLoveTheBeatles (parameter) {
  var arrayToReturn = [];

  do {
    arrayToReturn.push("I love the Beatles!");
    parameter++;
  } while (parameter < 15);

  return arrayToReturn;
}
