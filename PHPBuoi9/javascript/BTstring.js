//1.
var name = prompt("Mời bạn nhập vào họ và tên ", "");;
//2.
function replaceSpace(replaceString) {
	var newRepalceString;
	while(replaceString.indexOf(" ") != -1) {
		newRepalceString = replaceString.replace(" ","");
		replaceString = newRepalceString;
	}
	return replaceString;
}

//3.
function sliptFirstName(name) {
	
	return document.write(name.substring(0,name.indexOf(" "))); 
}
document.write('Ho cua ban la : ' +  sliptFirstName);
function sliptMiddleName() {
	
}
function sliptLastName() {
	
}