function returnNum(i) {
    return function() {
        return i;
    }
}

function createClouseArray() {

    var badArr = [];

    for (var i = 0; i < 5; i++) {
        badArr[i] = returnNum(i);
    }

    return badArr;
}


var badArr = createClouseArray();

for (var index in badArr) {
    console.log(badArr[index]());
}

