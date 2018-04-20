function theBeatlesPlay(musicians, instruments){
  var store = [];
  for(let i = 0; i < musicians.length; i ++){
    store.push(musicians[i] + " plays " + instruments[i]);
  }
  return store;
}

function johnLennonFacts(facts){
  var newfacts = [];
  var i = 0;

  while(i < facts.length){
    newfacts.push(facts[i] + "!!!");
    i++;
  }
  return newfacts;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
