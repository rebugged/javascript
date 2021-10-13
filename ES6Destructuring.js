const users = [
    ["Washington", "USA"],
    ["Delhi", "India"],
    ["KL", "Malaysia"]
];

// create an array of capital and their countries

const capitalMap = users.map(
    (each) => {
        return {capital: each[0], country: each[1]}
    }
)

const capitalMap2 = users.map(
    ([capital, country]) => {
        return {capital, country}
    }
)


console.log(capitalMap);
console.log(capitalMap2);


// ------------------------------------ Object desctructuring ----------------------------------

const employee = {
    id: 123,
    firstName: "Jane",
    lastName: "Doe",
    dept: "HR",
    address : {
        line1: "1, street, big ben",
        city : "big city"
    }
}

const {firstName: name, id = 0} = employee;
console.log(name);


const {address: {city}} = employee;
console.log(city);

// ---------------------------------------------------------------
console.log("------------------------------------------------------------------------")

function person({name: x, job: y} = {}) {
    console.log(x);
}

person({name: "Michelle"});//"Michelle"
person();//undefined
person(friend);//Error : friend is not defined

console.log("------------------------------------------------------------------------")

function person({name: x = "Sarah", job: y = "Developer"} = {}) {
    console.log(x);
}
person({name});//"Sarah"

console.log("------------------------------------------------------------------------")

let prop = "name";
let {[prop] : foo} = {name: "Sarah", country: "Nigeria", job: "Developer"};
console.log(foo);//"Sarah"

console.log("------------------------------------------------------------------------")

const company = {
    name: "Google",
    locations: ["SIngapore", "India", "Germany"]
};
const {locations : [, loc]} = company;
console.log(loc);


// ------------------------------ Array destructuring -----------------------------

console.log("------------------------------------------------------------------------")

const fruits = ["Apple", "banana", "Mango", "Pineapple"];
const [fruit1, , fruit2, ...rest] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(rest);

// --------------------------------------------
console.log("------------------------------------------------------------------------")

const groceryList = [
    {item: "Apples", price: 10, category: "fruits"},
    {item: "Mangoes", price: 20, category: "fruits"},
    {item: "Tomatoes", price: 30, category: "veg"},
    {item: "Milk", price: 40, category: "misc"},
    {item: "Bread", price: 50, category: "misc"}
];


const [, , {item}, ...restGrocery] = groceryList;

console.log(item);
console.log(restGrocery);

