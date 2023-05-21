
 
 $(document).ready(function(){
    $(".header-item-right span").click(function(){
    $(".header-item-right").toggleClass("hhhh");
        $(".header-bottom").toggleClass("open");
    });
});
    
$(".header-menu ul li ul").parent("li").addClass("m");
$('.header-menu ul li a').on('click', function(e) {
    var element = $(this).parent('li');
    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').removeClass('open');
        element.find('ul').slideUp("swing");
    }
    else {
        element.addClass('open');
        element.children('ul').slideDown("swing");
        element.siblings('li').children('ul').slideUp("swing");
        element.siblings('li').removeClass('open');
        element.siblings('li').find('li').removeClass('open');
        element.siblings('li').find('ul').slideUp("swing");
    }
});		


new Swiper(".safety_swipper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    992: {
      slidesPerView: 6,
    },
    768: {
      slidesPerView: 4,
    },
    576: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 2,
    },
  },

});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });




  new WOW().init();

  $(document).ready(function(){

			$(window).scroll(function(){
				if ($(this).scrollTop() > 100) {
					$('.scrollup').fadeIn();
				} else {
					$('.scrollup').fadeOut();
				}
			}); 
	 
			$('.scrollup').click(function(){
				$("html, body").animate({ scrollTop: 0 }, 600);
				return false;
			});
		
	});