let result = document.getElementById('result');

//CLICK
function showText() {
    result.innerHTML = "Hello";
}

let clickButton = document.getElementById("clickButton");
clickButton.addEventListener('click', showText);

//HOVER
let hoverButton = document.getElementById("hoverButton");
hoverButton.addEventListener('mouseleave', function() {
    result.innerHTML = "Don't leave me";
})
hoverButton.addEventListener('mouseenter', function() {
    result.innerHTML = "Leave me";
})

//FOCUS
let focusButton = document.getElementById("focusButton");
focusButton.onfocus = function() {
    result.innerHTML = "Focused";
}