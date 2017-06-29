const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments){
  var result = [];
  for(var i = 0; i < 4; i++){
    result[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return result
}

function johnLennonFacts(facts){
  var count = 0
  var res = [];
  while(facts[count] != undefined){
    res[count] = facts[count].concat("!!!")
    count++
  }
  return res
}

function iLoveTheBeatles(numb){
  var res = [];
  var i = 0
  do{
    res[i] = "I love the Beatles!"
    i++
  } while(numb < 15 && i <= numb)
  return res
}
