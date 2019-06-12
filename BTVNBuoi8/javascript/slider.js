
var Size = document.getElementsByClassName("slide")[0].clientWidth;
var ChuyenSlide = document.getElementsByClassName("slideImage")[0];
var Image = ChuyenSlide.getElementsByTagName("img");
var Max = Size * Image.length;
Max -= Size;
var i = 0;
function Next(){
	if(i < Max) i += Size;
	else i = 0;
	ChuyenSlide.style.marginLeft = '-' + i + 'px';
}

function Back(){
	if(i == 0) i = Max;
	else i -= Size;
	ChuyenSlide.style.marginLeft = '-' + i + 'px';
}

setInterval(function() {
	Next();
}, 1000);