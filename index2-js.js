/* index2-js.js */


/* Functions for #2 
 * Display a random image every time you load the page. */
window.onload = randimage;
function randimage(){

	var img = new Array("https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044450990/gettyimages-1044450990_840_472.jpeg",
			   "https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044464686/gettyimages-1044464686_840_472.jpeg",
			   "https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044464692/gettyimages-1044464692_840_472.jpeg",
			   "https://www.fashion.hr/easyedit/UserFiles/rwd_images/a-kate-moss-sisice/_rwd_gettyimages-1044465074/gettyimages-1044465074_840_472.jpeg");

	var randnum = Math.floor(Math.random() * img.length);

	document.images[0].src= img[randnum];
}

