let asyncBtn = document.getElementById('asyncBtn');

async function getData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    res = await res.json();
    console.log(res);
    res.forEach(async function (todo) {
        let result = await fetch('https://jsonplaceholder.typicode.com/todos/'+todo.id);
        result = await result.json();
        console.log(result);
    })
}

asyncBtn.onclick = getData;