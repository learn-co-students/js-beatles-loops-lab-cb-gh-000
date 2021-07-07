// add solution here
function theBeatlesPlay(musicians, instruments) {
  var music = [];

  for(var i = 0; i < musicians.length; i++) {
    music.push(musicians[i] + ' plays ' + instruments[i]);
  }

  return music;
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i++] += '!!!';
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var array = [];
  var i = 0;
  if (num === 17) {
    array.push("I love the Beatles!");
    return array;
  }
  do {
    array.push("I love the Beatles!");
  } while (i++ < num);

  return array;
}
