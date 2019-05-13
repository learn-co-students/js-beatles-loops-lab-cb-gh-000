// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for(let i = 0; i < musicians.length; i++){
    array.push([musicians[i], instruments[i]]);
  }
  array = array.map( ([musician, instrument]) => `${musician} plays ${instrument}`);
  return array;
}

function johnLennonFacts(array){
  array = array.map((element) => element + "!!!");
  return array;
  
}

function iLoveTheBeatles(number){
  var array = [];
  do{
    array.push("I love the Beatles!");
    number++;
  }while(number < 15)
  return array;
}