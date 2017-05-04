function theBeatlesPlay (musicians, instruments) {
 let array =  []
 for (let i=0;    i < musicians.length; i++) {
   var phrase = `${musicians[i]} plays ${instruments[i]}`
   array.push(phrase);
 }
  return array;
}



function johnLennonFacts (facts ) {
  let array = [];
  let i = 0;
  while (i < facts.length) {

    array.push(`${facts[i]}` + `!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles (number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
