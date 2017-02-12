function theBeatlesPlay(musicians,instruments) {
  var greatArtists = [];
  for(var i = 0; i < musicians.length; i++) {
    greatArtists.push(musicians[i] + " plays " + instruments[i]);
  }
  return greatArtists
}

function johnLennonFacts(array) {
  var i = 0;
  while(i < array.length) {
     array[i] = array[i] + "!!!";
     i++
  }
  return array;
}

function iLoveTheBeatles(n) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    n++
  } while(n < 15);
  return emptyArray;
}
