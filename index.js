function theBeatlesPlay(musicians, instruments){
  let empty = [];
  for(let i = 0; i < musicians.length; i++){
      empty.push(`${musicians[i]} plays ${instruments[i]}`)
    }
  return empty;
}

function johnLennonFacts(lennonFacts){
  let i = 0;
  while (i < lennonFacts.length){
    lennonFacts[i] = lennonFacts[i] +'!!!';
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(number){
  let empty = [];
  do{
    empty.push('I love the Beatles!');
    number ++;
  } while(number < 15);
  return empty;
}
