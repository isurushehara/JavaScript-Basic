//ALERT BOX
function alertBox() {
    alert("This is a alert box!");
}

//PROMPT BOX
function promptBox() {
    let input = prompt("Enter what you want?");
    document.getElementById('promptResult').innerHTML = "I want " + input;
}

//CONFIRM BOX
function confirmBox() {
    let confirmed = confirm("Are you sure?");
    document.getElementById('confirmResult').innerHTML = confirmed;
}