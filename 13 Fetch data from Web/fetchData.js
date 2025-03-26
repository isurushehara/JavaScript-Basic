//USE XML HTTP REQUEST
let getDataBtn = document.getElementById('getData');
let result1 = document.getElementById('result1');

function getData() {
    console.log("Getting Data...")

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            result1.innerHTML = xhttp.responseText;
        }
    }

    xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
    xhttp.send();
}
getDataBtn.onclick = getData;

//USE FETCH API
let fetchDataBtn = document.getElementById('fetchData');
let result2 = document.getElementById('result2');

function fetchData() {
    console.log("Fetching Data...")

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        //.then(json => console.log(json))
        .then(function (data) {
            console.log(data);
            result2 = result2.innerHTML = data.title;
        })
}

fetchDataBtn.onclick = fetchData;