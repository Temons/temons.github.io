
$(document).ready(function(){


// HEADER SLIDER
$('#headerMain__wrapper').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    margin: 1,
    navText :['<i class="pe-7s-angle-left" ></i>',
    '<i class="pe-7s-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
})


// CUSTOMER SLIDER
$('#customer__people').owlCarousel({
    loop:true,
    nav:false,
    dotsEach: true,
    margin: 1,
    responsive:{
        0:{
            items:1
        }
    }
})


// CAKE nav
$('.headerTop__wrapper__cake').on('click', () =>{
    $('.headerTop__wrapper__mobile').slideToggle();
    $('.headerTop__wrapper').css('alignItems', 'flex-start');
    $('.headerTop__wrapper__cake').css('marginTop', '10px');
}) 



$('.featProd__flex__caption__item').on('mouseenter', function() {
    let $circle = $(this).children();
    $circle.html('2').css('display', 'block');
})

$('.featProd__flex__caption__item').on('mouseleave', function() {
    let $circle = $(this).children();
    $circle.css('display', 'none');
})


// ARROW TOP
let top_show = 250;
if ($(this).scrollTop() > top_show) $('.arrow').fadeIn();
      else $('.arrow').fadeOut();

    $('.arrow').on('click', () => {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    })

    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('.arrow').fadeIn();
      else $('.arrow').fadeOut();
    });
})


