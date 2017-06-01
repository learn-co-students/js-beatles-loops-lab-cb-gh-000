function theBeatlesPlay(musicians, instruments) {
    let musiciansAndInstruments = [];

    for (let i = 0; i < musicians.length; i++) {
        musiciansAndInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
    }

    return musiciansAndInstruments;
}