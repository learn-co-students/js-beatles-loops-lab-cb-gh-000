/**
*The function should also contain a for loop which loops over the array of musicians. You'll want to be careful about what value you set your counter variable to store. (Hint: Think about what the first index of an array is). The first time through the loop, the body of the loop should create a string using the first index of the musicians array and the first index of the instruments array: "John Lennon plays guitar". This string should be added to the empty array you created. The loop should make the same sentence for every member of the musicians array.
The function should return the array of new strings.

**/


function theBeatlesPlay(musicians,instruments){

  var n_array = new Array();
  for (var i = 0; i < musicians.length; i++) {
    n_array.push(`${musicians[i]} plays ${instruments[i]}`);

  }
  return n_array;
}

/**
*Use a while loop to loop over the facts array
and add "!!!" to the end of every fact.
The function should return an array of strings with exclamation points.

*/
function johnLennonFacts(facts) {
    var new_array = [];
    var i = 0;
    while (new_array.length < facts.length) {
      new_array.push(facts[i] + '!!!');
      i++;
    }
  return new_array;
}


function iLoveTheBeatles(num){
 var array = [];

 do {
   array.push("I love the Beatles!");
   num++;
 } while (num < 15);
 return array;
}
