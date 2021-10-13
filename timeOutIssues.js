var variable = 10;
(() => {
    variable_3 = 35;
    console.log(variable_3);
    var variable_3 = 45;
    varibale_2 = 15;
    console.log(variable);
})();

console.log(varibale_2);
console.log(variable_3);
var variable = 30;




let multiply = function (x, y) {
    console.log(x * y);
}


let multiplyBy3 = multiply.bind(this, 3);
let multiplyBy5 = multiply.bind(this, 5);

multiplyBy3(5);
multiplyBy5(3);



let multiply = function (x) {
    return function (y) {
        console.log(x * y);
    }
}

let multiplyBy2 = multiply(2);
multiplyBy2(3);

multiply(2)(3);



let sum = function (a) {
    return function (b) {
        if(b) {
            return sum(a + b);
        } else {
            return a;
        }
    }
};

console.log(sum(1)(2)()); // 3