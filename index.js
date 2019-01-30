// add solution here
function theBeatlesPlay (musicians, instruments) {
  var array = [];
  var counter
  for (counter = 0; counter < musicians.length; counter ++) {
    array.push(musicians[counter] + " plays "+ instruments[counter]);
  }
  return array;
}

function johnLennonFacts (facts) {
  var counter = facts.length
  while (counter > 0) {
    facts[counter - 1] = facts[counter - 1] + "!!!"
    counter--
  }
  return facts
}

function iLoveTheBeatles (number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number ++;
  } while(number < 15)
  return array
}
