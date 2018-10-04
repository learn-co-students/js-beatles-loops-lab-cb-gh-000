// add solution here
function theBeatlesPlay(musicians, instruments) {
  var newArr=[]
  for(let i=0;i<musicians.length;i++) {
    newArr.push(musicians[i]+" plays "+instruments[i]);
  }
  return newArr
}

function johnLennonFacts(facts) {
  var i=0
  var newArr=[]
  while(i<facts.length) {
    newArr.push(facts[i]+"!!!");
    i+=1;
  }
  return newArr
}

function iLoveTheBeatles(num) {
  var newArr=[]
  do {
    newArr.push("I love the Beatles!")
    num+=1
  }while(num<15);
  return newArr;
}
