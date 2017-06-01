function theBeatlesPlay(musicians, instruments) {
    let musiciansAndInstruments = [];

    for (let i = 0; i < musicians.length; i++) {
        musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
    }

    return musiciansAndInstruments;
}

function johnLennonFacts(facts) {
    let factsWithExclamations = [];

    let i = 0;
    while (i < facts.length) {
        factsWithExclamations.push(`${facts[i]}!!!`);
        i++;
    }

    return factsWithExclamations;
}