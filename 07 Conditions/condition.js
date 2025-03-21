let displayQ = document.getElementById('displayQuestion');
let displayA = document.getElementById('displayAnswer');

function checkA() {
    if(displayA.innerHTML == "Yes") {
        displayA.innerHTML = "No";
    }
    else if(displayA.innerHTML == "No") {
        displayA.innerHTML = "Yes";
    }
    else {
        displayA.innerHTML = "Yes";
    }

    switch(displayA.innerHTML) {
        case "Yes":
            displayQ.innerHTML = "Do you like me?";
            break;
        case "No":
            displayQ.innerHTML = "Don't you like me?";
            break;
    }
}

// function checkQ() {
//     switch(displayA.innerHTML) {
//         case "Yes":
//             displayQ.innerHTML = "Do you like me?";
//             break;
//         case "No":
//             displayQ.innerHTML = "Don't you like me?";
//             break;
//     }
// }

//TERNARY OPERATOR

///NORMAL
let age = 18;
let message;

if (age >= 18) {
    message = "You are an adult.";
} else {
    message = "You are a minor.";
}
console.log(message); // Output: "You are an adult."

///USER TERNARY OPERATOR
message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message); // Output: "You are an adult."
