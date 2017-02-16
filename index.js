
function theBeatlesPlay(players, instruments) {
    var allPlayers = [];
    for (var i=0; i < players.length; i++) {
        allPlayers.push(players[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}

/*function johnLennonFacts() {
  const facts = [
"He was the last Beatle to learn to drive",
"He was never a vegetarian",
"He was a choir boy and boy scout",
"He hated the sound of his own voice"
];
    var i = 0;
    newFacts = facts.slice(0)
    while (i < facts.length) {
       facts.push(facts[i] + "!!!");
        i++;
    }
    return facts;
}*/

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);
    
    return love;
}

function johnLennonFacts(newFacts) {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var newFacts = [];
    var i = 0;
    while (i < facts.length) {
      newFacts.push(facts[i] +"!!!");
        i++;
    }
    return newFacts;
}
johnLennonFacts("foo");
johnLennonFacts("bar");