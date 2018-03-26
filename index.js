function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++ ) {
    array.push(musicians[i] + ' plays ' + instruments[i]);

  }
  return array;
}

function johnLennonFacts(facts) {
var array = [];
var co = 0;
while(co < facts.length) {
  array.push(facts[co] + '!!!');
  co++;
}
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number++;
  } while (number < 15);
  return array;
}
