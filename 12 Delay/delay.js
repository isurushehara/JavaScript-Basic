//SET TIMEOUT
function showResult() {
    let input = Number(document.getElementById('input1').value);
    let result = document.getElementById('result1');
    setTimeout(function() {
        result.innerHTML = "After " + input +" s.";
    }, input*1000)
    
}

//SET INTERVAL
let lightOnBtn = document.getElementById('lightOn');
let lightOffBtn = document.getElementById('lightOff');
let result = document.getElementById('result2');
let onOff;

function lightOn() {
    onOff = setInterval(function() {
        if(result.innerHTML == "off") {
            result.innerHTML = "on";
        } else {
            result.innerHTML = "off";
        }
    }, 1000)
}

lightOnBtn.onclick = lightOn;

lightOffBtn.onclick = function() {
    clearInterval(onOff);
    result.innerHTML = "off";
}