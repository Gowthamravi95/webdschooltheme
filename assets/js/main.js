/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js


****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load',function() {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>'],
	});

	////////////////////////////////////////////////////
	// 03. Sidebar Js
	$(".offcanvas-toggle-btn").on("click", function () {
		$(".offcanvas__area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".offcanvas__close-btn").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 06. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header__sticky");
		} else {
			$("#header-sticky").addClass("header__sticky");
		}
	});


	////////////////////////////////////////////////////
	// 07. Data CSS Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

	////////////////////////////////////////////////////
	// 07. Nice Select Js
	


	////////////////////////////////////////////////////
	// 08. slider__active Slider Js
	if (jQuery(".slider__active").length > 0) {
		let sliderActive1 = ".slider__active";
		let sliderInit1 = new Swiper(sliderActive1, {
			// Optional parameters
			slidesPerView: 1,
			slidesPerColumn: 1,
			paginationClickable: true,
			loop: true,
			effect: 'fade',

			autoplay: {
				delay: 5000,
			},

			// If we need pagination
			pagination: {
				el: ".ain-slider-paginations",
				// dynamicBullets: true,
				clickable: false,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".slider-button-next",
				prevEl: ".slider-button-prev",
			},

			a11y: false,
		});

		function animated_swiper(selector, init) {
			let animated = function animated() {
				$(selector + " [data-animation]").each(function () {
					let anim = $(this).data("animation");
					let delay = $(this).data("delay");
					let duration = $(this).data("duration");

					$(this)
						.removeClass("anim" + anim)
						.addClass(anim + " animated")
						.css({
							webkitAnimationDelay: delay,
							animationDelay: delay,
							webkitAnimationDuration: duration,
							animationDuration: duration,
						})
						.one(
							"webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
							function () {
								$(this).removeClass(anim + " animated");
							}
						);
				});
			};
			animated();
			// Make animated when slide change
			init.on("slideChange", function () {
				$(sliderActive1 + " [data-animation]").removeClass("animated");
			});
			init.on("slideChange", animated);
		}

		animated_swiper(sliderActive1, sliderInit1);
	}


	var sliderr = new Swiper('.active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: ".testimonial-pagination",
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + '<button>'+(index + 1)+'</button>' + "</span>";
			},
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	///////////////////////////////////////////////////
	// 13. Masonary Js
	

	// course slider
	var swiper = new Swiper('.course__slider', {
		spaceBetween: 30,
		slidesPerView: 2,
		breakpoints: {  
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		
		// Navigation arrows
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
	});

	var postboxSlider = new Swiper('.postbox__slider', {
		slidesPerView: 1,
        spaceBetween: 0,
		loop: true,
		autoplay: {
		  delay: 3000,
		},
		// Navigation arrows
		navigation: {
			nextEl: ".postbox-slider-button-next",
			prevEl: ".postbox-slider-button-prev",
		},
		breakpoints: {  
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	////////////////////////////////////////////////////
	// 13. Masonary Js
	$('.grid').imagesLoaded(function () {
		// init Isotope
		var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
				// use outer width of grid-sizer for columnWidth
				columnWidth: 1,
			}
		});


		// filter items on button click
		$('.masonary-menu').on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
		});

		//for menu active class
		$('.masonary-menu button').on('click', function (event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});

	});

	/* magnificPopup img view */
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	/* magnificPopup video view */
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 14. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 16. Cart Quantity Js
	$('.cart-minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.cart-plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});

	$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
	$(".qtybutton").on("click", function () {
		var $button = $(this);
		var oldValue = $button.parent().find("input").val();
		if ($button.text() == "+") {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find("input").val(newVal);
	});

	////////////////////////////////////////////////////
	// 17. Show Login Toggle Js
	$('#showlogin').on('click', function () {
		$('#checkout-login').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 18. Show Coupon Toggle Js
	$('#showcoupon').on('click', function () {
		$('#checkout_coupon').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 19. Create An Account Toggle Js
	$('#cbox').on('click', function () {
		$('#cbox_info').slideToggle(900);
	});

	////////////////////////////////////////////////////
	// 20. Shipping Box Toggle Js
	$('#ship-box').on('click', function () {
		$('#ship-box-info').slideToggle(1000);
	});

	////////////////////////////////////////////////////
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 500,
	});

	////////////////////////////////////////////////////
	// 22. Parallax Js
	if ($('.scene').length > 0) {
		$('.scene').parallax({
			scalarX: 10.0,
			scalarY: 15.0,
		});
	};

	////////////////////////////////////////////////////
	// 23. InHover Active Js
	$('.hover__active').on('mouseenter', function () {
		$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	});



	 $('.blog-active').slick({
        dots: false,
        infinite: false,
        // arrows: true,
        prevArrow: '<span class="next"><svg style="background-color: black; border-radius: 50%;"  enable-background="new 0 0 32 32" height="32px"  version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Chevron_Left_Circle"><path d="M16,0C7.164,0,0,7.164,0,16c0,8.837,7.163,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z    M16,30.031C8.28,30.031,2,23.72,2,16C2,8.28,8.28,2,16,2c7.72,0,14,6.28,14,14C30,23.72,23.72,30.031,16,30.031z" fill="#ed8621"/><path d="M19.607,8.302c-0.391-0.394-1.024-0.394-1.414,0l-6.9,6.999c-0.38,0.384-0.381,1.044,0,1.429l6.899,6.999   c0.391,0.394,1.024,0.394,1.414,0c0.391-0.395,0.391-1.034,0-1.429l-6.195-6.285l6.196-6.285   C19.997,9.336,19.997,8.697,19.607,8.302z" fill="#ed8621"/></g><g/><g/><g/><g/><g/><g/></svg></span>',
        nextArrow:'<span class="prev"><svg style="background-color: black; border-radius: 50%;" enable-background="new 0 0 32 32" height="32px"  version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Chevron_Right_Circle"><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16c8.836,0,16-7.164,16-16C32,7.163,24.836,0,16,0z M16,30   C8.28,30,2,23.72,2,16C2,8.28,8.28,1.969,16,1.969c7.72,0,14,6.311,14,14.031C30,23.72,23.72,30,16,30z" fill="#ed8621"/><path d="M13.808,8.271c-0.391-0.394-1.024-0.394-1.414,0c-0.391,0.395-0.391,1.034,0,1.429l6.195,6.285   l-6.196,6.285c-0.391,0.394-0.391,1.034,0,1.429c0.391,0.394,1.024,0.394,1.414,0l6.9-6.999c0.38-0.385,0.381-1.044,0-1.429   L13.808,8.271z" fill="#ed8621"/></g><g/><g/><g/><g/><g/><g/></svg></span>',
        // autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    });

	$('.blog-active-sw').slick({
		dots: false,
        infinite: false,
        // arrows: true,
        prevArrow: '<span class="next"><svg style="background-color: rgba(26,26,26,1); border-radius: 50%;"  enable-background="new 0 0 32 32" height="32px"  version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Chevron_Left_Circle"><path d="M16,0C7.164,0,0,7.164,0,16c0,8.837,7.163,16,16,16c8.837,0,16-7.163,16-16C32,7.164,24.837,0,16,0z    M16,30.031C8.28,30.031,2,23.72,2,16C2,8.28,8.28,2,16,2c7.72,0,14,6.28,14,14C30,23.72,23.72,30.031,16,30.031z" fill="#ed8621"/><path d="M19.607,8.302c-0.391-0.394-1.024-0.394-1.414,0l-6.9,6.999c-0.38,0.384-0.381,1.044,0,1.429l6.899,6.999   c0.391,0.394,1.024,0.394,1.414,0c0.391-0.395,0.391-1.034,0-1.429l-6.195-6.285l6.196-6.285   C19.997,9.336,19.997,8.697,19.607,8.302z" fill="#ed8621"/></g><g/><g/><g/><g/><g/><g/></svg></span>',
        nextArrow:'<span class="prev"><svg style="background-color: rgba(26,26,26,1); border-radius: 50%;" enable-background="new 0 0 32 32" height="32px"  version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Chevron_Right_Circle"><path d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16c8.836,0,16-7.164,16-16C32,7.163,24.836,0,16,0z M16,30   C8.28,30,2,23.72,2,16C2,8.28,8.28,1.969,16,1.969c7.72,0,14,6.311,14,14.031C30,23.72,23.72,30,16,30z" fill="#ed8621"/><path d="M13.808,8.271c-0.391-0.394-1.024-0.394-1.414,0c-0.391,0.395-0.391,1.034,0,1.429l6.195,6.285   l-6.196,6.285c-0.391,0.394-0.391,1.034,0,1.429c0.391,0.394,1.024,0.394,1.414,0l6.9-6.999c0.38-0.385,0.381-1.044,0-1.429   L13.808,8.271z" fill="#ed8621"/></g><g/><g/><g/><g/><g/><g/></svg></span>',
        // autoplay: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
		variableWidth: true,

        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
        ]

    });





// tab scroll into view




const scrollIntoViewWithOffset = () => {
	window.scrollTo({
	  behavior: 'smooth',
	  top:
		document.querySelector('#course-top').getBoundingClientRect().top - document.body.getBoundingClientRect().top - 240,
	})
  }

$('#nav-trending-tab').click(function(e){
	
	scrollIntoViewWithOffset()

  })
  
  $('#nav-all-tab').click(function(e){
	scrollIntoViewWithOffset()
  })


// $('img').attr({"loading":"lazy","height":"100%","width":"100%"});

$('img').attr({"loading":"lazy"});














})(jQuery);

