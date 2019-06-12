// In du lieu trong javascript
	// alert('Hello 19PHP02');
	document.getElementById('demo1').InnerHTML = 'Hello World';
	document.write('<h1>HelloDocument</h1>');
	console.log('Hello Test');  // chủ yếu dùng để debug

	// Khai Báo Biến
	var x = 5;
	x = x + 9;
	console.log(x);

	var varName;
	var varName2 = '19PHP02';
	var varName3 , varNmae4;
	var userName;

	var x = 8;
	var y = 9;
	document.write(x+y);
	document.write('<br>');
	document.write(x-y);
	document.write('<br>');
	document.write(x*y);
	document.write('<br>');
	document.write(x/y);
	document.write('<br>');
	document.write(x%y);
	document.write('<br>');

function nameFunction() {
	document.write('My Function');
}

nameFunction();

function sumFunction(a,b) {
	return a+b;
}
document.write(sumFunction(7,8));
document.write('<br>');

var c = sumFunction(5,8);
console.log(c);

var d = sumFunction();
console.log(d); 

// Câu lệnh điều kiện if else
	// if
	// if else
	// if(dieu kien dung 1){
	// 	thuc hien lenh dung 1
	// } else if(dieu kien dung 2) {
	// 	thuc hien cua lenh dung 2
	// } else {
	// 	thuc hien cau lenh 1 sai va 2 sai
	// }

// BT :
// 1. Cho truoc 1 so n, kiem tra n la chan hay le ?
// 2. Cho ba so a,b,c . Kiem tra so lon nhat trong 3 so ? 	
// 1.
var n = 11;

if (n%2 == 0) {
	document.write('Day la so chan');
} else {
	document.write('Day la so le');
}

// 2.
var a = 10, b = 6, c = 15 ;
var max = a;

if (b > max) {
	document.write('<br>');
	document.write(b); 
} else if (c > max) {
	document.write('<br>');
	document.write(c);
} else {
	document.write('<br>');
	document.write(a);
}

// Vòng lặp 

for(var i = 0; i < 10; i++) {
	document.write('<br>'+i+'<br>');
}

// BT:
// Cho so chay tu 0 den 100
// chia het cho 3 thi in ra "So n chia het cho 3"
// chia het cho 5 thi in ra "So n chia het cho 5"
// chia het cho 15 thi in ra "So n chia het cho 15" ma khong in 
// ra hai dong tren la "So n chia het cho 3" va "So n chia het cho 5"

// nên cho dk % 15 lên đầu tiên 
for(var i = 0; i < 100; i++) {
	if (i % 15 == 0) {
		document.write('');
	} else if (i % 3 ==0) {
		document.write('So ' +i+ 'chia het cho 5'+'<br>');
	} else if (i % 5 == 0) {
		document.write('So ' +i+ 'chia het cho 3'+'<br>');
	} else {
		document.write('..'+'<br>');
	}
}


// BT1:
var binh = 27;
var minh=binh/3;
var solanchuyen = 0;
	while(binh != minh * 2){
		binh--;
		minh++;
		solanchuyen++;
	}
document.write('So sach can chuyen la : '+solanchuyen);	

//BT2:
var money = 2000;
var candy = 0;
var voCandy = 0;
while(money > 0) {
	money = money - 200;
	candy++;
	voCandy++;
	// doi vo keo
	while (voCandy >= 2){
		voCandy = voCandy - 2;
		candy++;
		voCandy++;
	}
}
document.write('<br> So keo mua duoc la : ' +candy);

// BT6:
var money = 2000000;
var loinhuan = (money*10)/100;

for(var i = 0;i < 30; i++) {
	var loinhuan = (money*10)/100;
	money = money + loinhuan;
}
document.write('<br> So tien co duoc la : ' +money);

// BT7:
var money = 2000000;
//var loinhuan = (money*10)/100;
var tuthien = 50000;

for(var i = 0;i < 30; i++) {
	var loinhuan = (money*10)/100;
	money = money + loinhuan - tuthien;
}
document.write('<br> So tien co duoc la : ' +money);
