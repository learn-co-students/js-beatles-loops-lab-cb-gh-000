// add solution here
function theBeatlesPlay(m, instruments) {
  var ret = [];

  for (var i = 0; i < m.length; i++) {
    ret.push(`${m[i]} plays ${instruments[i]}`);
  }

  return ret;
}

function johnLennonFacts(facts) {
  var ret = [];
  for (var i = 0; i < facts.length; i++) {
    ret.push(`${facts[i]}!!!`);
  }
  return ret;
}

function iLoveTheBeatles(n) {
  var ret = [];

  do {
    ret.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return ret;
}
