function theBeatlesPlay(musicians, instruments) {
  let data = [];
  for (let i = 0; i < musicians.length; i++) {
    var desc = `${musicians[i]} plays ${instruments[i]}`;
    data.push(desc);
  }
  return data;
}

function johnLennonFacts(facts) {
  var n = facts.length;
  var result = [];
  while (n > 0) {
    result.push(facts[facts.length - n] + '!!!');
    n--;
  }
  return result;
}

function iLoveTheBeatles(n) {
  var result = [];
  do {
    result.push('I love the Beatles!');
    n++;
  } while (n < 15);

  return result;
}
