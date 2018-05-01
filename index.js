function theBeatlesPlay(musicians, instruments) {
var empty=[]
  for (var i = 0; i < musicians.length; i++) {
    var str=musicians[i] + " plays " + instruments[i]
    empty[i]=str
  }
return empty
}


function johnLennonFacts(facts) {
  var i = 0
  var realFacts=facts;
  while (i < facts.length) {
    realFacts[i]=realFacts[i] + "!!!"
    i++;
  }
  return realFacts
}

function iLoveTheBeatles(number) {
  var empty=[]
  do {
    empty.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return empty
}
