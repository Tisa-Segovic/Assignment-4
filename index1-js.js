/* index1-js.js */

/* Functions for #3 
 * Create an application that displays a slideshow with a start and stops buttons. */

// use an array to store images to cycle through for slideshow
var imagearray = ["http://www.finehomesandliving.com/Two(1).jpg",
	  			  "https://quitecontinental.files.wordpress.com/2012/10/dior3.jpg", 
				  "http://rs.img.com.ua/crop?v2=1&w=600&h=0&url=%2F%2Fv.img.com.ua%2Fb%2Forig%2F8%2F45%2Fbe858c37b3383e34e504e1028a304458.jpg", 
				  "https://www.fashion.hr/easyedit/UserFiles/rwd_images/adidas-stella-kol/_rwd_gettyimages-2673973840472/" +
				  "gettyimages-2673973840472_840_472.jpeg"];
	
var count = 0;
console.log(count);
	
var myFlag; // Flag to stop slideshow.

// Start slideshow when clicked on.
function start() {
	
	if (count == imagearray.length) {
		count=0;
	}
	// Change src of image.
	document.images[0].src= imagearray[count];
	document.images[0].style.width="80%";
	document.images[0].style.height="80%";
	count++; // Increment the count.
	
	// Recursively call the setTimeout function.
	myFlag = setTimeout(start, 500)
	}

function stop() {
	clearTimeout(myFlag);
}





