
function theBeatlesPlay(musicians, instruments) {
  var tempArr = [];
  // loop through the musicians array
  for (var i = 0; i < musicians.length; i++) {
    tempArr[i] = musicians[i] + ' plays ' + instruments[i];
  }

  return tempArr;
}

function johnLennonFacts(facts) {
  var temp = facts.length - 1;
  while (temp >= 0) {
    facts[temp] = facts[temp] + '!!!';
    temp--;
  }

  return facts;
}

function iLoveTheBeatles(num) {
    var tempArr = [];
    do {
      tempArr.push('I love the Beatles!');
      num++;
    } while(num < 15)

    return tempArr;
}
