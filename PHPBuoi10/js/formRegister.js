// 1. Tạo form đăng ký gồm:
// - Tên (input text)
// - Email (input text)
// - Gioi tính (input radio)
// - Ngày sinh (input date)
// - Quên quán ((input select option)
// 2. Validate các trường không được để trống
// 3. Nếu các trường validate OK thì thông báo đã đăng ký thành công


function checkForm() {
	var name = document.getElementById('name').value;
	var password = document.getElementById('password').value;
	var male = document.getElementById('male').checked;
	var female = document.getElementById('female').checked;
	var other = document.getElementById('other').checked;
	if (name == '') {
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}
	if (password == '') {
		document.getElementById('errPassword').innerHTML = 'Please input your password';
	}else {
		document.getElementById('errPassword').innerHTML = '';
	}
	if (male || female || other) {
		document.getElementById('errGender').innerHTML = '';
	}else {
		document.getElementById('errGender').innerHTML = 'Please input your password';
	}
	if (name != '' && password != '' && (male || female || other)) {
		alert('Dang ky thanh cong');
	}
}
