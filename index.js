function theBeatlesPlay(musicians, instruments){
  var tempArray = []

  for (let i = 0, l = musicians.length; i<l; i++) {
    tempArray.push(musicians[i] + " plays " + instruments[i])
  }

  return tempArray
}

function johnLennonFacts(facts){
  var shoutFacts = []

  let i = 0

  while (i < facts.length) {
    shoutFacts.push(facts[i] + "!!!")
    i++
  }

  return shoutFacts
}

function iLoveTheBeatles(n){
  var tempArray = []

  do {
    tempArray.push('I love the Beatles!')
    n++
  } while (n < 15)

  return tempArray
}
