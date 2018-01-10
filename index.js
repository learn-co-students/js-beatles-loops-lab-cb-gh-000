function theBeatlesPlay(musicians, instruments){
  var empty = []
  for(var i = 0; i<musicians.length; ++i)
  {
    empty[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return empty
}
function johnLennonFacts(tab){
  var i = 0;
  while(i<tab.length)
  {
    tab[i] = tab[i]+'!!!'
    ++i
  }
  return tab
}
function iLoveTheBeatles(num) {
  var temp = []
  var j = 0;
  do{
    temp[j] = 'I love the Beatles!'
    num++
    j++
  }while(num<15)
  return  temp
}
