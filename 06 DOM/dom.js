//STORE THE ELEMENTs TO VARIABLEs
let titleElement = document.getElementById('title');
let sampleElement = document.getElementsByClassName('sample');
let text = document.getElementsByTagName('p');
let link = document.getElementById('link');

//PRINT THE ATTRIBUTE OR ...
console.log(link.href);

//CHANGE THE ELEMENTS
titleElement.innerHTML = "Change the Title";
link.href = "https://fewinfo.com";

//CHANGE STYLES
link.style.textDecoration = 'none';
link.style.color = 'green';

