// add solution here
var theBeatlesPlay = (musicians, instruments) => {
  let out_array = [];
  for (let x = 0; x < musicians.length; x++) {
    out_array.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return out_array
}

var johnLennonFacts = facts => {
  let out_array = [];
  let x = 0;
  while (x < facts.length) {
    out_array.push(`${facts[x]}!!!`);
    x++;
  }
  return out_array
}

var iLoveTheBeatles = n => {
  let out_array = [];
  do {
    out_array.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return out_array
}
