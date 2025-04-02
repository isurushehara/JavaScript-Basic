//CLASS
let getResult = document.getElementById('getResult');
let getResult1 = document.getElementById('getResult1');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //GETTER
    get name() {
        return "Name: " +this._name;
    }

    //SETTER
    set name(input) {
        this._name = input;
    }
}

const isuru = new Person("Isuru", 23);

getResult.innerHTML = isuru.name;
isuru.name = "Shehara";
getResult1.innerHTML = isuru.name;


