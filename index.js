// add solution here
function iLoveTheBeatles(num){
  var arr = [];
  do{
    arr.push("I love the Beatles!");
    num++
  }while(num<15)
  return arr
}
function theBeatlesPlay(people,instrument){
  var arr = []
  var i = 0
  for(i=0;i<people.length;i++){
    arr.push(`${people[i]} plays ${instrument[i]}`)
  }
  return arr
}
function johnLennonFacts(array){
  var arr = []
  var i = 0
  for(i=0;i<array.length;i++){
    arr.push(`${array[i]}!!!`)
  }
  return arr
}
