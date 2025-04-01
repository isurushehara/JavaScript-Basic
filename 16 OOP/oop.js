//NORMAL OBJECT
const normalPerson = {
    name: "Isuru",
    age: 23,
    Who: function() {
        console.log("I am " +this.name +" and " + this.age +" years old.")
    }
}

//OBJECT CONSTRUCTOR FUNCTION
function person(name, age,) {
    this.name = name;
    this.age = age;
    this.Who = function() {
        console.log("I am " +this.name +" and " + this.age +" years old.")
    }
}

let person1 = new person("Shehara", 24);
let person2 = new person("IS", 22);

//SHOW BASED PROTOTYPE
console.log(person1.__proto__);

//CALL, APPLY & BIND FUNCTION
const student1 = {
    fullName: function(start, end) {
        console.log(start +this.firstName+ " " +lastName +end);
    }
}

const student2 = {
    firstName: "Isuru",
    lastName: "Shehara"
}

student1.fullName.call(student2, "* ", ".");

student1.fullName.apply(student2, ["* ", "."]);

let myFunction = student1.fullName.bind(student2, "* ", ".");
myFunction();
