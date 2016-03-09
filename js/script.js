$(document).ready(function() { 

	$(function() {  
		$('.greenBox1').click(function(){
    	$(this).css('background', '#30e964');
 
  		});
	});
	
	$(function() {  
		$('.greenBox2').click(function(){
    	$(this).css('background', 'red');

  		});
	});
	
	$(function() {  
		$('.greenBox3').click(function(){
    	$(this).css('background', 'red');

  		});
	});
	
	$(function() {  
		$('.greenBox4').click(function(){
    	$(this).css('background', 'red');  

  		});
	});
	
	var audio1 = document.createElement('audio');
		audio1.setAttribute('src', 'sounds/1.wav');
		
	$('#sound1').click(function(){
		audio1.play();
	});
	
});