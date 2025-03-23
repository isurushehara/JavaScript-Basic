function start() {
    let from = Number(document.getElementById('input1').value);
    let to = Number(document.getElementById('input2').value);

    let forUl = document.getElementById('forUl');
    let whileUl = document.getElementById('whileUl');
    let doWhileUl = document.getElementById('doWhileUl');

    //FOR LOOP
    for(let i = from; i < to; i++) {
        let li = document.createElement('li');
        let text = document.createTextNode("For loop : " + i);
        li.append(text);
        forUl.append(li);
    }

    //WHILE LOOP
    let i = from;
    while(i < to) {
        let li = document.createElement('li');
        let text = document.createTextNode("While loop : " + i);
        li.append(text);
        whileUl.append(li);
        i++;
    }

    //DO WHILE LOOP
    i = from;
    do {
        let li = document.createElement('li');
        let text = document.createTextNode("Do While loop : " + i);
        li.append(text);
        doWhileUl.append(li);
        i++;
    } while(i < to)
}

function breakContinue() {
    let breakNumber = Number(document.getElementById('input3').value);
    let continueNumber = Number(document.getElementById('input4').value);
    let forUl = document.getElementById('breakContinueUl');

    //BREAK AND CONTINUE KEYWORDS
    for(let i = 1; i < 11; i++) {
        if(i == breakNumber)
            break;
        if(i == continueNumber)
            continue;
        let li = document.createElement('li');
        let text = document.createTextNode("Count : " + i);
        li.append(text);
        forUl.append(li);
    }
}

//FOR IN
///OBJECT
let forInObjectUl = document.getElementById('forInObjectUl');

let personObject = {
    name: "Isuru",
    age: 23,
    email: "is@gmail.com"
}

for (const key in personObject) {
    let li = document.createElement('li');
    let text = document.createTextNode("For in Object : "+ key +" " + personObject[key]);
    li.append(text);
    forInObjectUl.append(li);
}

///ARRAY
let forInArrayUl = document.getElementById('forInArrayUl');

let personArray = ["Isuru", "23", "is@gmail.com"]

for (const index in personArray) {
    let li = document.createElement('li');
    let text = document.createTextNode("For in Array : "+ index +" " + personArray[index]);
    li.append(text);
    forInArrayUl.append(li);
}

//FOR IN
///USE "personArray" ARRAY
let forOfArrayUl = document.getElementById('forOfArrayUl');

for (const value of personArray) {
    let li = document.createElement('li');
    let text = document.createTextNode("For of Array : "+ value);
    li.append(text);
    forOfArrayUl.append(li);
}

//MODIFY ARRAY
let persons = [
    {name: "Isuru", age: 23},
    {name: "Shehara", age: 24},
    {name: "FewT", age: 25}
]

let names = [];

///COPY USING PUSH
for(let person of persons) {
    names.push(person.name)
}

let copyArrayUl = document.getElementById('copyArrayUl');
for (const value of names) {
    let li = document.createElement('li');
    let text = document.createTextNode("New Array : "+ value);
    li.append(text);
    copyArrayUl.append(li);
}

///USE MAP
let age = persons.map(function(person) {
    return person.age;
})

let mapArrayUl = document.getElementById('mapArrayUl');
for (const value of names) {
    let li = document.createElement('li');
    let text = document.createTextNode("Map Array : "+ value);
    li.append(text);
    mapArrayUl.append(li);
}

///USE FILTER
let filteredAge = persons.filter(function(person) {
    return person.age > 23;
})

let filterArrayUl = document.getElementById('filterArrayUl');
for (const value of names) {
    let li = document.createElement('li');
    let text = document.createTextNode("Filter Array : "+ value);
    li.append(text);
    filterArrayUl.append(li);
}