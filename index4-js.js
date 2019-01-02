/* index4-js.js */

/* Functions for #4 
 * Create a converter application that allows you to convert an amount from a USD to Euro. 
 * Use a form input field, onchange event, and a .js  to convert and display the result. */

function converter(valNum) {
	
	valNum = parseFloat(valNum);
	
	// Formula for conversion F >>> C
	document.getElementById("outputEuro").innerHTML = Math.round((valNum * 0.88) * 100) / 100;
}


// The function for a slideshow with buttons
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}



