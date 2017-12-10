function theBeatlesPlay(musicians, instruments) {
  var myArray = [];
  for (let i = 0; i < musicians.length || i <  instruments.length ;i++)
    myArray[i] = `${musicians[i]} plays ${instruments[i]}`;
  return myArray;
}

function johnLennonFacts(array) {
  var myArray = [];
  for (let i = 0; i < array.length ;i++)
    myArray[i] = array[i] + "!!!"

  return myArray;
}

function iLoveTheBeatles(n) {
  var myArray = [];
  do {
    myArray.push("I love the Beatles!");
    n++;
  } while(n < 15);
  return myArray;
}
