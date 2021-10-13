a();
b(); // type error because funcion expressions are not hoisted
// function statement
function a() {
    console.log('a called');
}
// function expression
var b = function() {
    console.log('b called');
}

// Error anonymous function, because we need a name
// anonymous functions are used in callbacks
function () {

}

// Named funciton with expression
var b = function xyz () {
    console.log("anonymous");
    xyz(); // xyz can be called only inside the function
}
b();
xyz(); // error, xyz has local scope of xyz





