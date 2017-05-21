const theBeatlesPlay = (musicians, instruments) => {
  const whoPlaysWhat = []
  for (let i = 0; i < musicians.length; i++) {
    whoPlaysWhat.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return whoPlaysWhat
}

const johnLennonFacts = (facts) => {
  let factsWithExclamation = []
  const length = facts.length
  let x = 0
  while (x < length) {
    factsWithExclamation.push(`${facts[x]}!!!`)
    x = x + 1
  }
  return factsWithExclamation
}

const iLoveTheBeatles = (number) => {
  let howMuchILoveThem = []
  do {
    howMuchILoveThem.push("I love the Beatles!")
    number = number + 1
  } while (number < 15)
  return howMuchILoveThem
}
