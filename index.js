// add solution here

function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array();
  for(let i = 0; i < musicians.length; i++ ) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var newArray = new Array();
  for (let i = 0; i < array.length ; i++) {
    newArray.push(array[i]+"!!!");
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = new Array();
  do {
    newArray.push("I love the Beatles!")
    num += 1
  }
  while ( num < 15 && num > 0);
  return newArray;
}
