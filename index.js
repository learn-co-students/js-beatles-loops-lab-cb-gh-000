var theBeatlesPlay = (artistArr, instrumentArr) => {
    var tmpArr = [];
    var s;

    for (var i = 0; i < artistArr.length; i++) {
        s = artistArr[i] + ' plays ' + instrumentArr[i];
        tmpArr.push(s);
    }

    return tmpArr;
}

var johnLennonFacts = arr => {
    var i = 0;

    while (i != arr.length) {
        arr[i] = arr[i] + '!!!';
        i++;
    }

    return arr;
}

var iLoveTheBeatles = num => {
    var tmpArr = [];

    do {
        tmpArr.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return tmpArr;
}
