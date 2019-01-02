/* index3-js.js */

/* Functions for #2 
 * User can change image properties when they click on the image (at least 4 properties). */

var imageArray = ["https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044465184/gettyimages-1044465184_840_472.jpeg", 
				  "https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044465186/gettyimages-1044465186_840_472.jpeg"]

function image(){

	var size = document.images.length; // num of imag loaded in document
	console.log(size);
	
	for (var index=0; index < size ; index++){	
		document.images[index].style.height = "550px";
		document.images[index].style.width = "745px";
		document.images[index].style.border = "solid #D2691E 4px";
		document.images[index].style.filter = "grayscale(100%)";
	}
	
	var myTxt = document.getElementById('hideTxt');
	myTxt.style.display = 'none';

}