function theBeatlesPlay(musicians, instruments){
  var artistInfo = []
  for (var i = 0; i < musicians.length; i++) {
    artistInfo.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return artistInfo
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length) {
    facts[i]+="!!!"
    i+=1
  }
  return facts
}

function iLoveTheBeatles(num){
  var beatles = []
  do {
    beatles.push("I love the Beatles!")
    num++
  } while (num<15);
  return beatles
}
