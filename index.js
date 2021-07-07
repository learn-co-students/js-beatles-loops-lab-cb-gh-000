// add solution here
function theBeatlesPlay (music, instruments) {
  var array = []
  for (let i = 0; i < music.length; i++) {
    array.push(`${music[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  var i = facts.length
  var factsExclamation = []
  while (i > 0) {
    factsExclamation[i-1] = `${facts[i-1]}!!!`;
    i--;
  }
  return factsExclamation
}

function iLoveTheBeatles (n) {
  var array = []
  do {
    array.push("I love the Beatles!");
  } while (++n < 15)
  return array
}
