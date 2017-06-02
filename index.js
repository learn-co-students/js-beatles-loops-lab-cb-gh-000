const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];
const facts2 = ["foo", "bar"];
const iLTB = [];

function theBeatlesPlay(musicians, instruments) {
  var strarr = [];

  for(var i = 0; i < 4; i++) {
    strarr.push(musicians[i] + " plays " + instruments[i])
  }
  return strarr
}

function johnLennonFacts(array) {
  var strarr = [];
  var i = 0;

  while (i < 4) {
    strarr.push(facts[i] + "!!!");
    i++;
  }
  return strarr
}
function iLoveTheBeatles(number) {
  var strarr = [];

  do {
    strarr.push("I love the Beatles!");
    number++
  }while(number < 15)

  return strarr;
}

iLoveTheBeatles(7)
