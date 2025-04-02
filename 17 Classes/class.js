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
let staticResult = document.getElementById('staticResult');

class Student extends Person {
    //CHILD CONSTRUCTOR
    constructor(name, schoolName) {
        super(name, []);
        this.schoolName = schoolName;
    }
    showType() {
        inheritanceResult.innerHTML = "Student";
    }
    
    //STATIC [THIS CAN CALL EVEN DON'T CREATE A OBJECT]
    static show() {
        staticResult.innerHTML = "Static";
    }
}

Student.show();

const shehara = new Student("Shehara", "JNS");
shehara.showType();

//OBJECT ASSIGN
let objectAssignResult = document.getElementById('objectAssignResult');

const object_1 = {
    name: "Object 1",
    type: 1
}
const object_2 = {
    objectName() {
        objectAssignResult.innerHTML = "Object Name: " +this.name;
    },
    type: 2
}

Object.assign(object_1, object_2);

object_1.objectName();
