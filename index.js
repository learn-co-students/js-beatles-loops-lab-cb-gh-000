function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(facts) {
  var f = [];
  var i = 0;
  while(i < facts.length) {
    f[i] = facts[i] + "!!!";
    i++;
  }
  return f;
}

function iLoveTheBeatles(number) {
  var array = [];
  var n = 0;
  do {

    array[n] = "I love the Beatles!";
    n++;

  } while (n <= number && number < 15);
  return array;
}
