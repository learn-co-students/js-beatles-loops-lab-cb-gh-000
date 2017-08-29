function iLoveTheBeatles(num) {
  var arr = []; var i = 0;

  if (num > 14) {
    arr.push("I love the Beatles!")
    return arr;
  }

  do {
    arr.push("I love the Beatles!")
    i ++;
  } while (i <= num)
  return arr;
}

function johnLennonFacts(arr_f) {
  var i = 0;
  while (i < arr_f.length) {
    arr_f[i] = arr_f[i] + "!!!";
    i ++;
  }
  return arr_f;
}


function theBeatlesPlay(arr_m, arr_i) {
   const arr_temp = [];

   for (let i = 0; i < arr_m.length; i++) {
     arr_temp.push(`${arr_m[i]} plays ${arr_i[i]}`);
   }

   return arr_temp;
}
