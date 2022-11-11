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
	// 13. Masonary Js


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
	// 21. Counter Js
	$('.counter').counterUp({
		delay: 10,
		time: 500,
	});



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

