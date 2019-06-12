var name = "A local newspaper in English that serves investors";
document.write(name);
console.log(name.length);

console.log(name.indexOf('n'));
console.log(name.indexOf('m'));

console.log(name.lastIndexOf('n'));
console.log(name.lastIndexOf('m'));

// cat tu vi tri, voi so ky tu se cat
console.log(name.substr(5, 7));

// cat tu vi tri den vi tri
console.log(name.substring(5, 7));

// thay the ky tu trong chuoi
console.log(name.replace('English', 'Viet Nam'));

// viet hoa chuoi ky tu
console.log(name.toUpperCase());

//viet thuong chuoi ky tu
console.log(name.toLowerCase());

// Bài tập string javascript:
// 1. Cho 1 biến chứa họ tên đầy đủ. Ví dụ: Tran Van Tuan
// 2. Kiểm tra xem họ tên hôm bao nhiêu ký tự?
// 3. Tách họ, tên đệm, tên ra?
// 4. Viết hoa tên đệm lên và in ra đầy đủ 
// 5. Kiểm tra tên có ký tự n không? có và không có phân 
// biệt hoa thường
// 6. Thay thế tên bằng 19PHP02 và in ra đầy đủ
// 7. Kiểm tra trong họ tên gồm bao nhiêu ký tự n?
// 8. Bôi vàng ký tự a trong tên nếu có?
document.write("<br>");
function replaceSpace(replaceString) {
	var newreplaceString;
	while (replaceString.indexOf(' ') != -1) {
			newreplaceString = replaceString.replace(" ", "");
			replaceString = newreplaceString;
	}
	return replaceString;
}
// Tran Van Minh Tuan
function splitFirstName(name) {
	// cat ho ra la: cat trong ho va ten tinh tu dau cho den khoang
	// trong dau tien
	var firstSpace = name.indexOf(' ');
	var firstName = name.substring(0, firstSpace);
	return firstName;
}
function splitMiddleName(name) {
	// cat ten dem ra la: cat trong ho va ten tinh tu khoang
	// trong dau tien cho den khoang trong cuoi cung
	var firstSpace = name.indexOf(' ');
	var lastSpace = name.lastIndexOf(' ');
	var middleName = name.substring(firstSpace, lastSpace);
	return middleName;
}
function splitLastName(name) {
	// cat ten ra la: cat trong ho va ten tinh tu khoang
	// trong cuoi cung cho den cuoi ho ten
	var lastSpace = name.lastIndexOf(' ');
	var lastName = name.substring(lastSpace, name.length);
	return lastName;
}
function checkCharInName(checkChar, name) {
	if (name.indexOf(checkChar) != -1) {
		return true;
	}
	return false;
}
function checkCharInNameNotUpperLower(checkChar, name) {
	var name = name.toLowerCase();
	var checkChar = checkChar.toLowerCase();
	if (name.indexOf(checkChar) != -1) {
		return true;
	}
	return false;
}
function checkCharInFullName(checkChar, fullName){
	var checkChar = checkChar.toLowerCase();
	var fullName = fullName.toLowerCase();
	var count = 0;
	var tmpName = '';
	while (fullName.indexOf(checkChar) != -1) {
		count++;
		tmpName = fullName.substring(fullName.indexOf(checkChar) 
			+ checkChar.length, fullName.length)
		fullName = tmpName;
	}
	return count;
}

function changeColorCharInName(checkChar, name) {
	var checkCharLower = checkChar.toLowerCase();
	var nameLower = name.toLowerCase();
	var newName = '';
	var newNameTmp = '';
	var lastPosition = 0;
	while (nameLower.indexOf(checkChar) != -1) {
		newNameTmp = nameLower.substring(0, nameLower.indexOf(checkChar)) 
		+ '<span>' + checkChar + '</span>';
		nameLower = nameLower.substring(nameLower.indexOf(checkChar) + 1, nameLower.length);
		newName += newNameTmp;
	}
	if (name.lastIndexOf(checkChar) < name.length) {
		newName += name.substring(name.lastIndexOf(checkChar) + 1, name.length);
	}
	return newName;
}
var myName = prompt("Please enter your name", "Ngo Van Huy");
document.write("1. Ho va ten cua ban la: " + myName);

document.write("<br>2. So ky tu trong ho va ten cua ban la: "
 + replaceSpace(myName).length);
document.write("<br>3. Ho cua ban la: "
 + splitFirstName(myName));
document.write("<br>Ten cua ban la: "
 + splitLastName(myName));
document.write("<br>Ten dem cua ban la: "
 + splitMiddleName(myName));

var middleName = splitMiddleName(myName);
var lastName   = splitLastName(myName);

document.write('<br>4. Viet hoa ten dem la:' 
	+ middleName.toUpperCase());

var yesNoInName = checkCharInName('n', lastName)?'Co':'Khong';

document.write('<br>5.' + yesNoInName +' ky tu n trong ten cua ban');

// phan biet hoa thuong
var yesNoInName = checkCharInNameNotUpperLower('n', lastName)?'Co':'Khong';

document.write('<br>5. '+ yesNoInName +' ky tu n trong ten cua ban ma khong phan biet hoa thuong');

document.write('<br>6. Thay the ten bang 19PHP02 la: ' 
	+ myName.replace(lastName, ' 19PHP02'));
document.write('<br>7. Co '+ checkCharInFullName('n', myName) + ' n trong ten cua ban')

//document.write('<br>8. ' + myName.replace('n', '<span>n</span>'));

//document.write('<br>Ex. Luo<span>n</span>g Mi<span>n</span>h Ca<span>n</span>h');

document.write('<br>8. ' + changeColorCharInName('n', myName));