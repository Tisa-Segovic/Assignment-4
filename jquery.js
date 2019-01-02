/* jquery.js */

$(document).ready(function() { 
	
	// Style application
    $('#change').click(function() { 
    	
       $('h1').css('color', 'green');
       
       $('div.highlight').css('background-color', 'yellow');
       
       $('p').each(function(i){
    	   this.style.color = 'blue';
    	   this.style.width = '50%';
    	   this.style.border = 'solid';
       });
       
       $('p').each(function(i){
    	   alert($(this).text());
       });
    }); 
    
/*--------------------------------*/
    // Image application 
    $('#hideShow').click(function(){ // Hide/ Show Application
    	$('#img1').toggle('slow');
    });
    
    $('#fadeout').click(function(){ // Fadeout Application
    	$('#img1').fadeOut( "slow", function() {
    	    // Animation
    	});
    });
    
/*--------------------------------*/
    // Animation application 
    $('#anim').click(function(){
	    $('div.animate').animate({
	    	opacity: 0.25,
	    	left: "+=300",
	    	width: "toggle",
	        height: "toggle"
	    }, 5000, function() {
	        // Animation
	    });
    });
    
/*--------------------------------*/
    // Username-Password application 
	$("input").change(function () {
	    if ($(this).val()) {
	        $(this).css("background-color", 'pink');
	    }
	    else {
	        $(this).css("background-color",'orange');
	        alert('Enter the value for: '+ $(this).attr('name'));
	    }
	    
	    var name_value = $('input[name=name]').val();
	    var password_value = $('input[name=password]').val();
	    
	    if(name_value != '' && password_value != ''){
	    	$('#demo').html('The values you entered are ' + name_value + ' and ' + password_value);
	    }
	});
    
});


