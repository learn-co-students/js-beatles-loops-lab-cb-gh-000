function theBeatlesPlay(musicians, instruments) {
  let output = [];
  for (let i = 0; i < musicians.length; i++) {
    output.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return output;
}

function johnLennonFacts(facts) {
  let output = [];
  let c = 0;
  while (c < facts.length) {
    output.push(`${facts[c]}!!!`);
    c++;
  }
  return output;
}

function iLoveTheBeatles(num) {
  let output = [];
  do {
    output.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return output;
}
