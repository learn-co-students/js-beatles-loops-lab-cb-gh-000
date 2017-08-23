function theBeatlesPlay(musicians,instruments){
  var emptyArr = []
  for(let i = 0; i < musicians.length; i++){
    emptyArr = [...emptyArr,`${musicians[i]} plays ${instruments[i]}`]
  }
  return emptyArr
}

function johnLennonFacts(facts){
  var i = 0
  while(i < facts.length){
    facts[i] += '!!!'
    i++
  }
  return facts
}

function iLoveTheBeatles(number){
  var result = []
  do{
    result = [...result , "I love the Beatles!"]
    ++number
  }while(number < 15);
  return result;
}
