//CLASS
let classResult = document.getElementById('classResult');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showInfo() {
        classResult.innerHTML = "I am " +this.name +" and " +this.age +" years old.";
    }
    showType() {
        classResult.innerHTML = "Person";
    }
}

const isuru = new Person("Isuru", 23);
isuru.showInfo();

//INHERITANCE
let inheritanceResult = document.getElementById('inheritanceResult');

class Student extends Person {
    showType() {
        inheritanceResult.innerHTML = "Student";
    }
}

const shehara = new Student("Shehara", 23);
shehara.showType();