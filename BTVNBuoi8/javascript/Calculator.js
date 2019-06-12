function number(val) {
	document.getElementById('calculatorSection').value += val; 
}

function del() {
	document.getElementById('calculatorSection').value = 'calculatorSection'.value.substr(0,calculatorSection.value.length - 1)
}
function reset() {
	document.getElementById('calculatorSection').value = ' ';
}
function sqrt() {
	document.getElementById('calculatorSection').value = Math.sqrt(calculatorSection.value);
}
function pow() {
	document.getElementById('calculatorSection').value = Math.pow(calculatorSection.value,2);
}
function sin() {
	document.getElementById('calculatorSection').value = Math.sin(calculatorSection.value);
}

function cos() {
	document.getElementById('calculatorSection').value = Math.cos(calculatorSection.value);
}

function tan() {
	document.getElementById('calculatorSection').value = Math.tan(calculatorSection.value);
}

function cot() {
	document.getElementById('calculatorSection').value = ( 1 / Math.tan(calculatorSection.value));
}

function log() {
	document.getElementById('calculatorSection').value = Math.log(calculatorSection.value);
}

function e() {
	document.getElementById('calculatorSection').value = Math.E;
}

function equals() {
	document.getElementById('calculatorSection').value = Math.eval(calculatorSection.value);
}

