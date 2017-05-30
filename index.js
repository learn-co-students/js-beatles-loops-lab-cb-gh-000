function theBeatlesPlay (musicians, instruments) {
  let array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts (facts) {
  let array = []
  let i = 0
  while (array.length < facts.length) {
    array[i] = facts[i] + '!!!'   // In this case, when iterating, using [i] is same as push.
    i++
  }
  return array
}

function iLoveTheBeatles (n) {
  let array = []
  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)
  return array
}
