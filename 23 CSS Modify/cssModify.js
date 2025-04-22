let colorBoxDirect = document.getElementById('colorBoxDirect');
let redBtnDirect = document.getElementById('redBtnDirect');
let greenBtnDirect = document.getElementById('greenBtnDirect');

let colorBoxCL = document.getElementById('colorBoxCL');
let redBtnCL = document.getElementById('redBtnCL');
let greenBtnCL = document.getElementById('greenBtnCL');

//DIRECT CHANGE
redBtnDirect.onclick = () => {
	colorBoxDirect.style.backgroundColor = "red";
}

greenBtnDirect.onclick = () => {
	colorBoxDirect.style.backgroundColor = "green";
}

//CHANGE USING CLASSLIST
redBtnCL.onclick = () => {
	console.log("work");
	colorBoxCL.classList.add('toRed');
	colorBoxCL.classList.remove('toGreen');
}

greenBtnCL.onclick = () => {
	colorBoxCL.classList.add('toGreen');
	colorBoxCL.classList.remove('toRed');
}
