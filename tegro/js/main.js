
$(document).ready(function(){


	// Выравнивание "Доставка товаров из Китая" при загрузке страницы
	let off = $('h1').offset().left;
	$('.howUse h2').css('paddingLeft', off);
	$('.slides__number').css('marginLeft', off);

	// Выравнивание "Доставка товаров из Китая" при ресайзе
	$(window).resize(function(){
		let res= $('h1').offset().left;
  	$('.howUse h2').css('paddingLeft', res);
  	$('.slides__number').css('marginLeft', res);
	})

	// FIRST CAROUSEL
	$('.tutorial').owlCarousel({
    loop:true,
    margin:10,
    // autoplay:true,
    autoplayTimeout:5000,
	 autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        }
    }
})

	// SECOND CAROUSEL (REVIEWS)
$('.reviews__wr__flex__carousel').owlCarousel({
    loop:true,
    nav: true,
    margin:20,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    // autoplay:true,
    autoplayTimeout:5000,
	 autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        868:{
            items:2
        }
    }
})

// ARROW TOP IN FOOTER
$('.footer__wr__rowMiddle__arrow').on('click', () => {
  	$('html, body').animate({
  		scrollTop: 0
  	}, 1000);
  })


// DROPDOWN MENU
$('.main .menu .menu__flex__down').on('click', e =>{
$('.main .menu .menu__flex__down .dropDown').fadeToggle(300);
event.stopPropagation();
})


// УБИРАЕМ ВЫПАДАЮЩЕЕ МЕНЮ ПО ЛЮБОМУ КЛИКУ
$(window).on('click', () =>{
$('.main .menu .menu__flex__down .dropDown').fadeOut(300);
$('.main .menu__flex .enter .profile').fadeOut(300);
})

// СМЕНА ПЛЕЙСХОЛДЕРА "Просто вставьте ссылку" ПРИ ЗАГРУЗКЕ
if($(window).outerWidth(true) < 417){
  $('.main .menu__flex form input').attr("placeholder", "Просто вставьте ссылку");
  }
else{
  $('.main .menu__flex form input').attr("placeholder", "Просто вставьте ссылку с любого китайского сайта");
}

// СМЕНА ПЛЕЙСХОЛДЕРА "Просто вставьте ссылку" ПРИ ИЗМЕНЕНИИ ШИРИНЫ 
$(window).resize(function(){
if($(window).outerWidth(true) < 417){
  $('.main .menu__flex form input').attr("placeholder", "Просто вставьте ссылку");
  }
else{
  $('.main .menu__flex form input').attr("placeholder", "Просто вставьте ссылку с любого китайского сайта");
}
 })

  // МЕНЮ ИЗ_ПОД БУРГЕРА В ЗАВИСИМОСТИ ОТ РАЗРЕШЕНИЯ
  $('.header .hwrapper .head__burger').on('click', () =>{
  if($(window).outerWidth(true) < 768){
    $('.jsBurgerS').bPopup({
        position: ["auto",'auto'],
        opacity: 0.1,
        follow: false
    });
  } else{
    $('.jsBurgerM').bPopup({
        position: ["auto",'auto'],
        opacity: 0.1,
        follow: false
    });
  }
  
})
// POPUP ВХОДА
$('.enter .enterEnter').on('click', () =>{
$('.jsPopupEnter').bPopup({
      positionStyle: 'fixed',
       amsl:[0]
});
})

// POPUP "НЕВЕРНЫЙ ПАРОЛЬ"
$('.enterPopup .more').on('click', () =>{
$('.jsWrongPass').bPopup({
  positionStyle: 'fixed',
   amsl:[0]
});
})
// Появление меню "Профиль" при клике на "Аккаунт"
$('.enter .acc').on('click', () =>{
  $('.profile').fadeToggle();
    event.stopPropagation();
})

// POPUP ВХОДА С ССЫЛКИ НА СТРАНИЦЕ РЕГИСТРАЦИИ
$('.reg__popup__send__enter').on('click', () =>{
$('.jsPopupEnter').bPopup({
  positionStyle: 'fixed',
   amsl:[0]
});
})

  // POPUP ВХОДА из БУРГЕРА
  $('.popupBurgerMid .enter').on('click', () =>{
  $('.jsPopupEnter').bPopup({
        positionStyle: 'fixed',
         amsl:[0]
  });
  })

  // POPUP ВХОДА из SMALLБУРГЕРА
  $('.popupBurgerSmall ul li .enter').on('click', () =>{
  $('.jsPopupEnter').bPopup({
        positionStyle: 'fixed',
         amsl:[0]
  });
  })

// ЧТО-ТО С ОТЗЫВОМ СВЯЗАНО ЯВНО
$('.reviews__wr__flex__clients span .linkRew').on('click', () =>{
  $('.jsPopupReview').bPopup({
  positionStyle: 'fixed',
   amsl:[0]
  })
})

// POPUP РЕГИСТРАЦИИ
$('.enterPopup__links-reg').on('click', () =>{
  $('.jsPopupRegistration').bPopup({
     amsl:[0]
  })
  })


// POPUP ВОССТАНОВЛЕНИЕ ПАРОЛЯ -> ДАЛЕЕ -> ПРОВЕРЯЙТЕ ПОЧТУ
$('.jsRecovery .more').on('click', () =>{
$('.jsCheckEmail').bPopup({
    positionStyle: 'fixed',
     amsl:[0]
})
})



// POPUP на ссылку "Забыли пароль"
// И ОТКРЫТИЕ ОКНА "ВОССТАНОВЛЕНИЕ ПАРОЛЯ"
$('.enterPopup__links-remember').on('click', () =>{
$('.jsRecovery').bPopup({
	positionStyle: 'fixed',
  amsl:[0]
})
})

// POPUP "Получить консультацию"
$('.opt__wrapper__why__1 .more').on('click', ()=>{
  $('.jsPopupCallme').bPopup({
    amsl:[0]
  });
})



})


