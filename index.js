function theBeatlesPlay(musarr, instarr) {
  var TheBeatles = [];
  for (var i = 0; i < musarr.length && i < instarr.length; i++) {
    TheBeatles[i] = (musarr[i] + ' plays ' + instarr[i])
  }
  return TheBeatles;
}

function johnLennonFacts(factsarr) {
  let i = 0;
  while (factsarr[i]) {
  factsarr[i] = (factsarr[i] + '!!!');
  i++;
  }
  return factsarr;
}

function iLoveTheBeatles(n) {
  let i = 0;
  let ilb = [];
  do {
    ilb[i] = 'I love the Beatles!';
    i++;
  } while (i <= n);
if (i > 10) {
  return('I love the Beatles!');
} else {
  return ilb;
}
}
