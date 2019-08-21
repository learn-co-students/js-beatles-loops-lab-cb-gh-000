// add solution here
function theBeatlesPlay(musicians, instruments) {
  var a = [];
  for (var i = 0; i < musicians.length; i++) {
    a.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return a;
}

function johnLennonFacts(ar) {
  var i = 0;
  while (i < ar.length) {
    ar[i] = ar[i] + "!!!";
    i++;
  }
  return ar;
}

function iLoveTheBeatles(n) {
  var a = [];
  do {
    a.push("I love the Beatles!");
    n++;
  } while (n < 15)
  return a;
}
