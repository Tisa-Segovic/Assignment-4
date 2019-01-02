/* index5-js.js */

/* Functions for #5 
 * Create an application allowing you to display and validate input from user similar to Icecream shop we did in class. 
 * Use all types of fields such as 4 input fields for name, phone, email, zip code, selection, checkbox, radio and 
 * submit and reset fields. */

function display() {

	var obj = document.forms[0]; // accessing the first form inside the document 
	// var len = document.forms[0].elements.length;// how many elements in form[0]
	var len = obj.elements.length;// how many elements in form[0]
	var output = "Here is your Receipt: ";
	
	for (var index=0; index < len -2; index ++) {
		var el = obj.elements[index];
		
		if (el.value == "" || el.value== null){

			alert("You must enter a value for " + el.name);
			
			el.focus();
			el.select();
			el.style.backgroundColor="#F00";

			return;
		}

		if (index == 2 && el.value.length != 5) {

			alert("You must enter a 5 digit zip code " );
			
			el.focus();
			el.select();
			el.style.backgroundColor="#F00";

			return;
		}

		if (index == 3 && el.value.indexOf("@") == -1) {
		
			alert("You must include an @ in your email " );
			
			el.focus();
			el.select();
			el.style.backgroundColor="#F00";
		
			return;
		}
		
		if (index == 3 && el.value.indexOf(".") == -1) {
		
			alert("You must include an . in your email " );
			
			el.focus();
			el.select();
			el.style.backgroundColor="#F00";
			
			return;
		}

		output += "<p>" + el.name + " :" + el.value; 

	}

	document.getElementById("result").innerHTML = output;
}

