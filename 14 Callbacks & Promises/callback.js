let callbackBtn = document.getElementById('callback');
let callbackResult = document.getElementById('result1');

function hello(name) {
    callbackResult.innerHTML = "Hello, " +name;
}

function getName(callback) {
    let name = prompt("Enter your name: ");
    hello(name);
}

callbackBtn.addEventListener('click', getName);