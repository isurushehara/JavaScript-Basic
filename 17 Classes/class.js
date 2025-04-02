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
}

const isuru = new Person("Isuru", 23);
isuru.showInfo();