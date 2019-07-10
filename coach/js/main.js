$(document).ready(function(){

	// Стрелочка "ВНИЗ" в header и скролл при нажатии
	$('.about .arrowDown').on('click', () => {
		let scrollHeight = $('.about').offset().top - 80;

	  	$('html, body').animate({
	  		scrollTop: scrollHeight 
	  	}, 1100);
	  })

	// Обработка события SCROLL
	$(window).scroll(function(){

		// В header появляется стрелочка "ВНИЗ"
		$('.about .arrowDown').fadeIn(1000);

		// Высота главного экрана
		let headerHeight = $('header').outerHeight();

		// Появление/пропадание nav
		if($(window).scrollTop() > headerHeight/2){
			$('nav').css('transform', 'translateY(0%)');
		} else {
			$('nav').css('transform', 'translateY(-100%)');
		}

		// Скрываем header если он вне экрана
		if($(window).scrollTop() > headerHeight){
			$('header').css('display', 'none');
		} else {
			$('header').css('display', 'block');
		}
		
	})


	//WOW-script
   	new WOW({
   		offset: 100
   	}).init();



   	// ANIMATE SCROLL

	$("#nav").on("click","li", function (event) {
		
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top - 80}, 1500);
	});
})