function EmployeeDetails() {
    let name = "Mayank";
    var age = 30;
    var designation = "Developer";
    var salary = 10000;

    var calculateBonus = function (amount) {
        salary = salary + amount;
    }

    var getData = function () {
        return {
            name: name,
            age: age,
            designation: designation,
            salary: salary
        }
    }

    return {
        name: name,
        age: age,
        designation: designation,
        calculateBonus: calculateBonus
    }

}



var newEmployee = EmployeeDetails
var y = newEmployee();
console.log(y);
console.log(newEmployee.age);
newEmployee().age = 20;

var x = newEmployee();
x.calculateBonus(100);

