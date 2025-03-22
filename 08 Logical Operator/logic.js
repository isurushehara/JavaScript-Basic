function compare() {
    let number1 = Number(document.getElementById('input1').value);
    let number2 = Number(document.getElementById('input2').value);

    let result = number1 == number2 ? "Number's values are equal <br>" : "";
    result += number1 === number2 ? "Number's values and types are equal <br>" : "";
    result += number1 != number2 ? "Number's values are not equal <br>" : "";
    result += number1 !== number2 ? "Number's values are equal, but types are not equal <br>" : "";

    result += number1 > number2 ? "Number 1 > Number 2 <br>" : "";
    result += number1 < number2 ? "Number 1 < Number 2 <br>" : "";
    result += number1 >= number2 ? "Number 1 >= Number 2 <br>" : "";
    result += number1 <= number2 ? "Number 1 <= Number 2 <br>" : "";

    result += number1 > 10 && number2 < 10 ? "Number 1 > 10 && Number 2 < 10 <br>" : "";
    result += number1 > 10 || number2 < 10 ? "Number 1 > 10 || Number 2 < 10 <br>" : "";

    document.getElementById('result').innerHTML = result;
}