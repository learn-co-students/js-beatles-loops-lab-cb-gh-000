function theBeatlesPlay(musicians, instruments) {
  let strings = [];

  for (var i = 0; i < musicians.length; i++) {
    let string = musicians[i]+' plays '+instruments[i];

    strings.push(string);
  }

  return strings;
}

function johnLennonFacts(facts) {
  let factsLength = facts.length - 1;
  let newFacts = [];

  while (factsLength >= 0) {
    newFacts.unshift(facts[factsLength]+'!!!');
    factsLength--;
  }

  return newFacts;
}

function iLoveTheBeatles(number) {
  let strings = [];

  do {
    strings.push('I love the Beatles!');
    number++;
  } while (number < 15);

  return strings;
}
