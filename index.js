// add solution here
var newarr = new Array();
function theBeatlesPlay(musicians, instruments){
  for(let i=0; i<musicians.length; i++){
    newarr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarr;

}

function johnLennonFacts(facts){
 var arr = new Array();
 for(let i=0; i<facts.length; i++){
   arr[i]=`${facts[i]}!!!`;
 }
 return arr;
}

function iLoveTheBeatles(n){
  var arr = new Array();
    do{
      arr.push('I love the Beatles!');
      n+=1;
    }
    while(n<'15');
    return arr;
}
