//CREATE A OBJECT
let person = {
    name : "Isuru",
    age : 24,
    Iam : function() {
        console.log("I am " + this.name);
    }
};

//PRINT THE OBJECT
console.log(person);

//ADD OR MODIFY THE CURRENT ATTRIBUTES OR METHODS
person.approve = true;
person.Approve() = function() {
    console.log("Approved");
}
console.log(person);
person.name = "Shehara";
console.log(person);

//DELETE THE ATTRIBUTE OR METHOD
console.log(person);
delete person.age;
console.log(person);

//CONSOLE METHODS
console.clear;
console.error(person);

//SHOW OBJECT KEYS OR VALUES
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

//COPING OBJECT
let employee = {
    name : "employee",
    count : 30
}

Object.assign(employee,person);
console.log(person);
console.log(employee);


