function theBeatlesPlay(musicians, instruments) {
  const play = []
  for(let i = 0, l = musicians.length; i < l; i++) {
    play.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return play
}

function johnLennonFacts(array) {
  const facts = [
  ];
  let i = 0;
  while (i < array.length) {
    facts.push(`${array[i]}!!!`)
    ++i;
  }
  return facts
}

function iLoveTheBeatles(n) {
  const array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}
