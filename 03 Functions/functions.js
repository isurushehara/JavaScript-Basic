function addNumber(){
    let num1 = 10;
    let num2 = 3;
    console.log(num1+num2);
}
addNumber();

function addNumber(num1, num2){
    console.log(num1 + num2);
}
addNumber(20, 6);

function returnNumber(num1, num2){
    return num1 + num2;
}
console.log(returnNumber(30, 9));
