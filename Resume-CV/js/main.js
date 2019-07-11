
$(document).ready(function(){

	// ANIMATE SCROLL

	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - 5}, 1500);
	});


	//Carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
	    autoplayTimeout:2500,
	    autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        691:{
	            items:2
	        },
	        1002:{
	            items:3
	        }
    }
	})


	// //Animation numbers
	let show = true;
	let countbox = ".wr-facts";
	$(window).on("scroll load resize", function(){
		if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
		let w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
		let e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
		let w_height = $(window).height();        // Высота окна браузера
		let d_height = $(document).height();      // Высота всего документа
		let e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
		if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
			$(".spincrement").spincrement({
				from: 0,
				duration: 3000
			});
			show = false;
		}
	});

	// PRELOADER
	$(window).on('load', () => {
		$('.preloader').fadeOut('slow');
	})
	

	// NAVIGATION LEFT CORNER
	$('.navigation').on('click', () => {
		$('.menu').fadeToggle('ease');
	})

	// BPOPUP
	$('.resume').on('click', () => {
		$('.jsPopup').bPopup({
			easing: 'easeInOutBack', //uses jQuery easing plugin
            speed: 750,
            transition: 'slideDown'
		});
	})



})