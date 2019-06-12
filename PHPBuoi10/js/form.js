function checkForm() {
	var name = document.getElementById('name').value;
	var pass = document.getElementById('password').value;

	if (name == '') {
		document.getElementById('errName').InnerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').style.display = 'none';
	}
	if (password == '') {
		document.getElementById('errPassword').InnerHTML = 'Please input your password';
	} else {
		document.getElementById('errPassword').style.display = 'none';
	}
}