const myObj = {
    a: 10,
    b: 20
}

let addPropToObject = (object, propName, propVal) => {
    object[propName] = propVal;
}

addPropToObject(myObj, 'c', 30);

console.log(myObj); //  { a: 10, b: 20, c: 30 }