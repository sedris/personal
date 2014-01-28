$(document).ready(function(){
						   
 $(window).resize(function(){

  $('.overlay').css({
   position:'absolute',
   left: ($(window).width() 
     - $('.overlay').outerWidth())/2,
   top: ($(window).height() 
     - $('.overlay').outerHeight())/2
  });
		
 });
 
 // To initially run the function:
 $(window).resize();

});
