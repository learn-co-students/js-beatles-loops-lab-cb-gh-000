function theBeatlesPlay(musicians, instruments){
  var rv = [];
  for (var i = 0; i < musicians.length; i++) {
    rv.push(musicians[i] + " plays " + instruments[i]);
  }
  return rv;
}

function johnLennonFacts(array){
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + "!!!";
  }
  return array;
}

function iLoveTheBeatles(n){
  var rv = [];
  do{
    rv.push("I love the Beatles!");
    n--;
  } while (n >= 0 && n < 15);

  return rv;
}
