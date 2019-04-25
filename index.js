// add solution here
function theBeatlesPlay(mus, ins){
var emp = []
  for(let i = 0; i < mus.length; i++)
  {
    emp.push(`${mus[i]} plays ${ins[i]}`)
  }

  return emp;
}

function johnLennonFacts(arr)
{
  var newArr = [];
  var i = 0;
  while(i < arr.length)
  {
    newArr.push(`${arr[i]}!!!`)
    i++;
  }
  return newArr;
}

function iLoveTheBeatles(num)
{
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    num++;
  } while (num < 15);

  return arr;
}
