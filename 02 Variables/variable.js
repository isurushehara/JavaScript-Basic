var varName = "Isuru";
console.log(name);
varName = "Shehara";
console.log(name);

let letName = "IS";
console.log(letName);
letName = "ISD";
console.log(letName);

const constName = "III";
console.log(constName);
constName = "SSS";  // Cannot change const variable
console.log(constName);

///Data types
let stringName = "Isuru";
let numberAge = 23;
let numberGPA = 3.6;
let booleanOK = true;
let nullNone = null;
let undefinedDefault = undefined;
let objectPerson = {
    name: "Isuru",
    age: 23
}
let functionPrint = function(){
    console.log("Function")
}


    //Find the type of variable
    console.log(typeof stringName);
    console.log(typeof numberAge);
    console.log(typeof numberGPA);
    console.log(typeof booleanOK);
    console.log(typeof nullNone);
    console.log(typeof undefinedDefault);
    console.log(typeof objectPerson);


///Operations
let number1 = 10;
let number2 = 3;

let answer;
answer = number1 + number2;
answer = number1 - number2;
answer = number1 / number2;
answer = number1 * number2;

answer = number1 % number2; //10/3 => 3 and 1 .. answer is 1

number1++;
number += 5; //number = number + 5  

let addName = stringName +" "+ stringName;

let booleanGreater = number1 > number2;
let booleanLess = number1 < number2;
let booleanEqual = number1 == number2;
let booleanNotEqual = number1 != number2;
let booleanEqualWithType = number1 != number2;

    //And && OR ||
    answer = booleanEqual && booleanGreater;
    answer = booleanEqual || booleanGreater;