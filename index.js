// add solution here
function theBeatlesPlay(musicians,instruments){
  var music=[]
  for(var i=0;i<musicians.length;i++){
    music.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return music
}
function johnLennonFacts(facts){
  var counter=0;
  while(counter<facts.length){
    facts[counter]+="!!!";
    counter++;
  }
  return facts
}
function iLoveTheBeatles(number){
  var temp=[]
  do{
    temp.push("I love the Beatles!");
    number++;
  }while(number<15)
  return temp
}
