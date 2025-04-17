//FOR ARRAY
let names = ["Isuru", "Shehara", "FewT"];

///NORMAL WAY
let name1 = names[0];
let name2 = names[1];
let name3 = names[2];

///DESTRUCTURING 
let [name01, name02, name03, name04="Default"] = names;
console.log(name01,name02,name03,name04);

///-IGNORE SOME VALUES
[name01,,name02,name03] = names;
console.log(name01,name02,name03);

///SWAP NORMAL WAY
let a = 10;
let b = 20;
let temp = 10;
a = b;
b = temp;

///SWAP USING DESTRUCTURING
a = 10;
b = 20;
[a,b] = [b,a];
console.log(`a = ${a}, b = ${b}`);

//FOR OBJECT
const person = {
    name: "Isuru",
    age: 23
}

///NORMAL WAY
let myName = person.name;
let myAge = person.age;

///DESTRUCTURING
let {name, age:Age} = person;
//({name, age:myAge} = person);
console.log(name, Age);

//OBJECT INSIDE OBJECT
const animal = {
    type: "bird",
    color: "blue",
    behavior: {
        fly: "high",
        run: "medium"
    } 
}

let {type, color, behavior:{fly, run}} = animal;
console.log(type, color, fly, run);