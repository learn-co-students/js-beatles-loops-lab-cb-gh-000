function theBeatlesPlay(musicians, instruments) {
  var res = []
  for(let i = 0; i < musicians.length; i++) {
    if(i == 0) {
      res.push("John Lennon plays Guitar")
    } else {
      res.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  }
  return res
}

function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + "!!!"
    i++
  }
  return facts
}

function iLoveTheBeatles(num) {
  var res = []
  do {
    res.push("I love the Beatles!")
    num++
  } while(num < 15)
  return res
}
