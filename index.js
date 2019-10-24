// add solution here
function theBeatlesPlay(musicArray, instArray){
  let emptyArr = [];
  for(let i = 0; i < musicArray.length; i++){
    emptyArr.push(`${musicArray[i]} plays ${instArray[i]}`);
  }
  return emptyArr;
}

function johnLennonFacts(factArr){
  let emptyArr2 = [];
  for(let i = 0; i < factArr.length; i++){
    emptyArr2.push(`${factArr[i]}!!!`)
  }
  return emptyArr2;
}

function iLoveTheBeatles(num){
  let emptyArr3 = [];
  do {
    emptyArr3.push('I love the Beatles!')
    num++;
  } while (15 > num);
  return emptyArr3;
}
