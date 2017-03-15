function theBeatlesPlay(musicians, instruments) {
  var play = []
  for (var i = 0; i < musicians.length; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(facts){
  var wowFacts = []
  var i = 0
  while (i < facts.length) {
    wowFacts.push(facts[i] + "!!!")
    i++
  }
  return wowFacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push("I love the Beatles!")
    n++
    
  } while(n < 15)

  return love
}