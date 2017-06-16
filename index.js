function theBeatlesPlay(musicians, instruments) {
  var string = []
  for (var i = 0; i < musicians.length; i++) {
    string[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return string
}

function johnLennonFacts(facts) {
  var strings = []
  var counter = 0
  while (counter < facts.length) {
    strings[counter] = `${facts[counter]}!!!`
    counter++
  }
  return strings
}

function iLoveTheBeatles(number) {
  var strings = []
  do {
    strings.push("I love the Beatles!")
    number++
  } while (number<15);
  return strings
}
