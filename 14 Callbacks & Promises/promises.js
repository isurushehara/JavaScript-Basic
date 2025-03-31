let promisesBtn = document.getElementById('promises');
let promisesResult = document.getElementById('result2');
let promisesCheckbox = document.getElementById('checkbox');

function agree() {
    const agreePromise = new Promise(function (resolve, reject) {
        let output;
        if(promisesCheckbox.checked) {
            output = "Agree";
            resolve(output);
        } else {
            output = "Disagree";
            reject(output);
        }
    })
    return agreePromise;
}

promisesBtn.onclick = function () {
    agree().then (function (data) {
        promisesResult.innerHTML = data;
    }).catch(function (data) {
        promisesResult.innerHTML = data;
    })
}