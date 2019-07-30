// add solution here
function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var phrase = `${musicians[i]} plays ${instruments[i]}`
    array.push(phrase);
  }
  return array
}
function johnLennonFacts(facts){
  for (var i = 0; i < facts.length; i++) {
    facts[i]= facts[i].concat("!!!");
  }
  return facts;
}
function iLoveTheBeatles(number){
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return arr;
}
