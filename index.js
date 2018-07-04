// add solution here
function theBeatlesPlay(musicians, instruments) {
  var plays = [];

  for (var i =0; i < musicians.length;
  i = i + 1) {
    plays[i] = musicians[i] + ' plays ' + instruments[i];
  }

  return plays;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + '!!!';
    i = i +1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var empty = [];
  do {
    empty.push('I love the Beatles!');
    n++;
  } while (n<15);
  return empty;
}
