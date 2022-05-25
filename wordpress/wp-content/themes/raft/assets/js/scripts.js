(function($) {
	$(document).ready(function() {
		"use strict";
		
	
		// WORKS BACKGROUND
		$(".project-box").hover(function () {
		$(".vision").css("background-color", $(this).data('bg'));
        $(".vision").not(this).each(function(){
            $(this).css("background-color", $(this).data('bg'));
        });
		}, function(){
			$(".vision").css("background-color", '');
		});	
		

		
		// TYPEWRITER
			$("#typewriter").typewriter({
				prefix : "",
				text : ["Please wait", "Still loading", "Almost done"],
				typeDelay : 100,
				waitingTime : 1500,
				blinkSpeed : 800
			});
		


		// HAMBURGER MENU
		$('.hamburger').on('click', function(e) {
			if ($(".navigation-menu").hasClass("active")) {
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu").removeClass("active");
				$(".navigation-menu .inner .menu").css("transition-delay", "0s");
				$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");
			} else
			{
				$(".navigation-menu").addClass('active');
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu.active .inner .menu").css("transition-delay", "0.45s");
				$(".navigation-menu.active .inner blockquote").css("transition-delay", "0.50s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0s");
			}
			$(this).toggleClass("active");
		});
		
		
		
		// PAGE TRANSITION
		$('body a').on('click', function(e) {
			
			if (typeof $( this ).data('fancybox') == 'undefined') {
			e.preventDefault(); 	
			var url = this.getAttribute("href"); 
			if( url.indexOf('#') != -1 ) {
			var hash = url.substring(url.indexOf('#'));

			if( $('body ' + hash ).length != 0 ){
			$('.transition-overlay').removeClass("active");
			$(".hamburger").toggleClass("open");
			$("body").toggleClass("overflow");
			$(".navigation-menu").removeClass("active");
			$(".navigation-menu .inner ul").css("transition-delay", "0s");
			$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
			$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

			$('html, body').animate({
			scrollTop: $(hash).offset().top
			}, 1000);

			}
			}
			else {
			$('.transition-overlay').toggleClass("active");
			setTimeout(function(){
			window.location = url;
			},1000); 

			}
			}
			});
		
		
		// PAGE HEADER FADE
			var divs = $('header');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 'opacity' : (1 - st/700) });
				divs.css({ 'transition-delay' : ("0s") });
				divs.css({ 'transition' : ("0.05s ease-in-out") });
			});

		
		
		
		});
	// END JQUERY	
	
		// WOW ANIMATION 
			wow = new WOW(
				{
					animateClass: 'animated',
					offset:       0
				}
				);
			wow.init();
	
	
		// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");	
			});
	
		// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});
	/*=======================================================================
     [05] STICKY HEADER
     =========================================================================*/
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300)
        {
            $(".isSticky").addClass('fixedHeader animated slideInDown');
        }else
        {
            $(".isSticky").removeClass('fixedHeader animated slideInDown');
        }

        /*====== Menu Active on Scroll ======*/
        Scroll();
        Scroll2();
        Scroll3();
    });

    $('.mainMenu ul li.scroll > a, .mouseSlider a, .mainMenu_home3 ul li.scroll > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top - 68}, 1000);
        return false;
    });

    function Scroll(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.mainMenu').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });

        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.mainMenu li.scroll').removeClass('active').eq(i).addClass('active');
            }
        });
    }



    $('.fixednavHeader ul li.scroll > a, .mouseSlider2 > a').on('click', function(){
        if($(this).parent().hasClass('has-child'))
        {
            $(this).parent().children('ul').slideToggle('slow');
        }
        $('html, body').animate({scrollTop : $(this.hash).offset().top + 10}, 1000);
        return false;
    });



    function Scroll2(){

        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;

        $('.fixednavHeader').find('.scroll > a').each(function(){
            var atr = $(this).attr('href');
            if($(atr).length > 0)
            {
                contentTop.push($($(this).attr('href')).offset().top);
                contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
            }
        });
        $.each(contentTop, function(i){
            if(winTop > contentTop[i] - rangeTop){
                $('.fixednavHeader li.scroll, .mouseSlider2').removeClass('active').eq(i).addClass('active');
            }
        });
    }

	
})(jQuery);	