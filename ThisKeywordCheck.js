var fullName = 'John Doe';
var obj = {
    fullName: 'firstname1 lastname1',
    prop: {
        fullName: 'firstname2 lastname2',
        getFullName: function() {
            return this.fullName;
        }
    },
    getMyName: function() {
        return this.fullName;
    },
    getFirstName: () => {
        return fullName.split(' ')[0];
    },
    getLastName: (
         function() {
             return this.fullName.split(' ')[1];
         }
     )()
};

console.log(obj.prop.getFullName());
console.log(obj.getFirstName());
console.log(obj.getMyName());
console.log(obj.getLastName);