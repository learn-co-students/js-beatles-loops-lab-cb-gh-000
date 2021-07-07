// add solution here
function theBeatlesPlay(musi, instru){
  var res = [];
  for(let i = 0; i < musi.length; i++){
    res.push(`${musi[i]} plays ${instru[i]}`);
  }
  return res
}

function johnLennonFacts(array){
  var res = [];
  var counter = 0;
  while(counter <= array.length-1){
    res.push(`${array[counter]}!!!`);
    counter += 1;
  }
  return res;
}

function iLoveTheBeatles(num){
  var resu = [];

  do{
    resu.push("I love the Beatles!");
    num+=1;
  }
  while(num < 15);
  return resu;
}
