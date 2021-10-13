function EmployeeDetails() {
    var name;
    var age;
    var designation;
    var salary = 0;

    var updateSalaryIncrement = (amt) => {
        salary = salary + amt;
        console.log(salary);
    }

    var getEmpsal = () => {
        return Number(salary);
    }

    return {
        name: name,
        age: age,
        designation: designation,
        updateSalaryIncrement : updateSalaryIncrement,
        getEmpsal: getEmpsal
    }
}


var newEmployee =  new EmployeeDetails();
newEmployee.name = "Abhishek"
newEmployee.age = "31"
newEmployee.designation = "Engineer"

newEmployee.updateSalaryIncrement(10);

console.log(`Hi I am ${newEmployee.name} of age ${newEmployee.age} and my designation is ${newEmployee.designation}. 
My salary will be ${newEmployee.getEmpsal()}`);