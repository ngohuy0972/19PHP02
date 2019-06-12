function changeImage(image, name, id) {
	document.getElementById('image').src = image;
	document.getElementById('name').innerHTML = name;
	// Xoa tat ca border
	document.getElementById('henderson').style.border = "none";
	document.getElementById('salah').style.border = "none";
	document.getElementById('firmino').style.border = "none";
	document.getElementById('vandijk').style.border = "none";
	// them border cho doi tuong cick
	document.getElementById(id).style.border = "5px solid blue";
} 