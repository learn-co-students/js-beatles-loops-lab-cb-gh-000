theBeatlesPlay

const facts = [
    "He was the last Beatle to learn to drive",
    "He was never a vegetarian",
    "He was a choir boy and boy scout",
    "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
    var beatlesPlay = []

    for (let i=0; i < musicians.length; i++) {
        beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`)
    }

    return beatlesPlay
}

function johnLennonFacts(facts) {
    var johnFacts = []

    let i=0
    while (i < facts.length) {
        johnFacts.push(`${facts[i]}!!!`)
        i++
    }

    return johnFacts
}
function iLoveTheBeatles(n) {
    var beatleLove = []

    do {
        beatleLove.push('I love the Beatles!')
        n++
    } while (n < 15)

    return beatleLove
}

console.log(johnLennonFacts(facts))