 $(document).ready(function() {

 	//Carousel
 	$('.owl-carousel').owlCarousel({
	 	loop:true,
	    margin:10,
	    items: 1,
	    autoplay:true,
	    autoplayTimeout:200000,
	    autoplayHoverPause:true
    }); 
     
    //Popup
    
    $('.jsLoginPopup').click(function(){
    	$('.jsPopupLogin').bPopup({});
    });

    $('.jsRegisterPopup').click(function(){
    	$('.jsPopupRegister').bPopup({});
    });
   
   	// FancyBox
   	$('.jsFancybox a img').fancybox();

   	//WOW
   	new WOW().init();
   });