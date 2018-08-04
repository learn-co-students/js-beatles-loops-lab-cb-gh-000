// add solution here
function theBeatlesPlay(musicians, instruments) {
  var mus_ins = []
  for (let i = 0; i < musicians.length; i++) {
    mus_ins[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return mus_ins
}

function johnLennonFacts(facts) {
  for (let i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!"
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = []
  var count = 0;
  do {
    array[count] = "I love the Beatles!"
    count++
  } while (num < 15 && count - 1 < num);
return array
}
