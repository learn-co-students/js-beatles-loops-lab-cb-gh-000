// add solution here
function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArr;
}
function johnLennonFacts(facts){
  var newArr = [];
  var i = 0;
  while (i < facts.length) {
    newArr[i] = facts[i] + "!!!";
    i++;
  }
  return newArr;
}
function iLoveTheBeatles(num){
  var newArr = [];
  do {
    newArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArr;
}
