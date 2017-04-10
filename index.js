function theBeatlesPlay(musicians,instruments) {
  const temp = [];
  for(var i=0;i<musicians.length;i++) {
    temp.push(musicians[i] + " plays " + instruments[i]);
  }
  return temp;
}
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
function johnLennonFacts(facts) {
  var n = 0;
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}
function iLoveTheBeatles(number){
  var temp = [];
  do {
    temp.push("I love the Beatles!");
    number++;
  }
  while (number<15)
  return temp;
}
