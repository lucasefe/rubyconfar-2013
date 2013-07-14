// Placeholders for IE
$(document).ready(function(){
  Placeholders.init();


  $("#speakers ul li a").hover(function() {
    $(this).parents('li').find("img").toggleClass('highlight');    
  });
  
});