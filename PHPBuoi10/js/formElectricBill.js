// 1. Taọ form tính tiền điện gồm:
// Họ tên, số điện đầu kỳ, số điện cuối kỳ, ngày đầu kỳ,
// ngày cuối kỳ
// 2. Validate các trường nhập không được để trống
// 3. Số điện cuối kỳ phải >= số diện đầu kỳ, ngày cuối kỳ
// phải lớn hơn hoặc bằng ngày đầu kỳ
// 4. Tính tiền điện với: 100 số đầu tiên tính giá 1.500 VND/số;
// 200 số tiếp theo tính 2.000 VND/số; còn lại tính 3.500 VND/số
// 5. In ra màn hình phiếu tính tiền điện cơ bản: Họ tên...
// Tính điện từ ngày...đến ngày...sử dụng...số với số tiền là:..

function checkElectricForm() {
	var name = document.getElementById('name').value;
	var fisrtElectricNumbers = document.getElementById('first_electric_numbers').value;
	var lastElectricNumbers = document.getElementById('last_electric_numbers').value;
	var firstDate = document.getElementById('first_date').value;
	var lastDate = document.getElementById('last_date').value;

	if (name == '') {
		document.getElementById('errName').innerHTML = 'Please input your name';
	} else {
		document.getElementById('errName').innerHTML = '';
	}

	if (fisrtElectricNumbers == '') {
		document.getElementById('errFirst_electric_numbers').innerHTML = 'Please input your electric numbers';
	} else if (fisrtElectricNumbers >= lastElectricNumbers) {
		document.getElementById('errFirst_electric_numbers').innerHTML = 'Số điện đầu kỳ phải nhỏ hơn số điện cuối kỳ';
	} else {
		document.getElementById('errFirst_electric_numbers').innerHTML = '';
	}

	if (lastElectricNumbers == '') {
		document.getElementById('errLast_electric_numbers').innerHTML = 'Please input your electric numbers';
	} else if (lastElectricNumbers < fisrtElectricNumbers) {
		document.getElementById('errLast_electric_numbers').innerHTML = 'Số điện cuối kỳ phải lớn hơn số điện đầu kỳ';
	} else {
		document.getElementById('errLast_electric_numbers').innerHTML = '';
	}

	if (firstDate == '') {
		document.getElementById('errFirst_date').innerHTML = 'Please input your first electric date';
	} else if (firstDate > lastDate) {
		document.getElementById('errFirst_date').innerHTML = 'Ngày đầu kỳ phải nhỏ hơn ngày cuối kỳ';
	} else {
		document.getElementById('errFirst_date').innerHTML = '';
	}

	if (lastDate == '') {
		document.getElementById('errLast_date').innerHTML = 'Please input your last electric date';
	} else if (lastDate < firstDate) {
		document.getElementById('errLast_date').innerHTML = 'Ngày cuối kỳ phải lớn hơn ngày đầu kỳ';
	} else {
		document.getElementById('errLast_date').innerHTML = '';
	}
}

function electricBill() {
	var oldElectricIndex = document.getElementById('first_electric_numbers').value;
	var newElectricIndex = document.getElementById('last_electric_numbers').value;
	var electricMoney;
	var electricIndex = newElectricIndex - oldElectricIndex;

	electricMoney = consumptionRange(electricIndex ,300 ,newElectricIndex) * 3500 + (consumptionRange(electricIndex ,100, 300) * 2000) + (consumptionRange(electricIndex ,0, 100) * 1500);
	document.write("So cu la : " +oldElectricIndex);
	document.write("So moi la : " +newElectricIndex);
	document.write("So tien dien phai tra la : " +electricMoney);
}
function consumptionRange(x ,  range_1 , range_2) {
	// x là tổng sô điện tiêu thụ
	// range_1 là khoảng sô điện cũ
	// range_2 là khoảng số điện mới

	if (x <= range_1) {
		return 0;
	}
	if (x >= range_2) {
		return (range_2 - range_1);
	}
	return (x - range_1);
}

function printElectricBill() {
	var myBill = window.open("","Electric Bill","width=500,height=500");
	var name = document.getElementById('name').value;
	var fisrtElectricNumbers = document.getElementById('first_electric_numbers').value;
	var lastElectricNumbers = document.getElementById('last_electric_numbers').value;
	var firstDate = document.getElementById('first_date').value;
	var lastDate = document.getElementById('last_date').value;
	myBill.document.writeln("Ho ten la : " +name);
	myBill.document.writeln("Tinh tu ngay : " +firstDate+ " den ngay : "+lastDate);
	myBill.document.writeln("Su dung het : " +(lastElectricNumbers-fisrtElectricNumbers)+ " so va tong so tien phai tra la : " +electricBill());
}

