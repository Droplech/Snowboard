$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
      if ( $(this).scrollTop() > 200 ){
    
            $menu.addClass("fixed");
    
        } else if($(this).scrollTop() <= 200) {
    
            $menu.removeClass("fixed");
    
        }
    
    });//scroll
    });