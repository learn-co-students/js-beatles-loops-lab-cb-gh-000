function theBeatlesPlay(musicians,instruments){
  var array=[]

  for (var i = 0; i < musicians.length; i++) {
    array.push(musicians[i]+" plays "+instruments[i])
  }
  return array
}

function johnLennonFacts(facts){
  for (var i = facts.length; i >0; i--) {
    facts[i-1]=facts[i-1]+"!!!"
  }
  return facts
}

function iLoveTheBeatles(num){
  var array = [];
  do{
    array.push("I love the Beatles!");
    num++;
  }while(num < 15);
  return array;
}
