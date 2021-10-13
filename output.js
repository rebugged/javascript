// console.log('bar : ', bar);
// bar = 15;
// var foo = 1;
// console.log("foo : ", foo, "bar : ", bar);
// var bar;


// greetings();
// var greetings = function() {
//     console.log("First Greetings");
// };
// greetings();
// function greetings() {
//     console.log("Second Greetings");
// }
// greetings();


// var variable = 10;
// (
//     () => {
//         console.log(variable); // 10
//         variable = 20;
//         console.log(variable); // 20
//     }
// )();


// console.log(variable); // 20
// var variable = 30;



// var variable = 10;
// (
//     () => {
//         variable_3 = 35;
//         console.log(variable_3);
//         var variable_3 = 45;
//         variable_2 = 15;
//         console.log(variable);
//     }
// )();


// console.log(variable_2);
// console.log(variable_3);
// var variable = 30;


// let counter = function () {
//     var k = 0;
//     return () => k++;
// }();

// console.log(counter());
// console.log(counter());
// console.log(counter());



// Array.prototype.myFilter = function(callback, context) {
//     if(typeof callback != 'function') {
//         throw new Error();
//     }
//     const arr = [];
//     const obj = this;
//     for(let i=0; i < obj.length; i++) {
//         if(callback.call(context, obj[i], i, obj)) {
//             arr.push(obj[i]);
//         }
//     }
//     return arr;
// }



// Array.prototype.myNewFilter = function(callback) {
//     if(typeof callback != 'function') {
//         throw new Error();
//     }
//     const arr = [];
//     const obj = this;
//     for(let i=0; i < obj.length; i++) {
//         if(callback.call(obj[i], i, obj)) {
//             arr.push(obj[i]);
//         }
//     }
//     return arr;
// }

// let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];

// let n = Math.max(arr);
// console.log(n);

// let newarr1 = arr.myFilter(i => i%2 == 0);
// let newarr2 = arr.filter(i => i%2 == 0);
// let newarr3 = arr.myNewFilter(i => i%2 == 0);

// console.log(newarr1);
// console.log(newarr2);
// console.log(newarr3);


let arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];

let n = Math.max.apply(this, arr);
console.log(n);