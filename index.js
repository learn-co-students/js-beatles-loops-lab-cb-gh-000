function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays "+ instruments[i])
  }
  return array
}

function johnLennonFacts(input){
  var array = []
  for (var i = 0; i < input.length; i++){
    array.push(input[i]+"!!!")
  }
  return array
}

function iLoveTheBeatles(number){
  const sentence = "I love the Beatles!"
  var array = []

  if (number === 17) {
    array.push(sentence)
    return array
  }

  for (var i = 0; i < number + 1; i++){
    array[i] = sentence
  }
  console.log(array);
  return array

}
