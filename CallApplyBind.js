let name1 = {
    firstName : "ABC",
    lastName: "DEF"
};

function printFullName() {
    console.log(this.firstName + " " + this.lastName);
}

function printFullNameWithDetails(details) {
    console.log(this.firstName + " " + this.lastName + " " + details);
}

printFullName.call(name1);
printFullNameWithDetails.call(name1, "hello !!!");
printFullNameWithDetails.apply(name1, ["hello !!!"]);






let name2 = {
    firstName : "XYZ",
    lastName: "123"
};

function printFullNameWithDetails(details) {
    console.log(this.firstName + " " + this.lastName + " " + details);
}

let printNameCopy = printFullNameWithDetails.bind(name2, "Hii!!");
printNameCopy();





Function.prototype.myBind = function(...args) {
    var obj = this;
    var params = args.slice(1);
    return function(...args2) {
        obj.apply(args[0], params);
    }
}

let printNameCopyNew = printFullNameWithDetails.myBind(name2, "Hii!!");
printNameCopyNew();