function theBeatlesPlay(musicians,instruments){
  let results = [];
  for(let i = 0; i < musicians.length; i++){
    results.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return results;
}

function johnLennonFacts(array){
  let i = 0;
  while( i < array.length){
    array[i] += "!!!";
    i++;
  }
  return array;
}
function iLoveTheBeatles(number){
  let array = [];
  do {
    array.push( "I love the Beatles!");
    number++

  }while(number < 15);
  return array
}
