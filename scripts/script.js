$(document).ready(function() {
// burgerrrrrrr
	$('.burger-nav').on('click tap', function(){
		console.log('YOO');
		$('.nav-links-wrap').toggleClass('burger');
	});
// Nav fixed when scrollll
	$(window).scroll(function() {
		console.log('SCROLLLLLLZIES');
		if ($(window).scrollTop() > 50 && $(window).width() > 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});

	$(window).scroll(function() {
		console.log('SCROLLLLLLZIES');
		if ($(window).scrollTop() > 50 && $(window).width() < 940) {
			$('.header-nav').addClass('navbar-fixed');
		}
		if ($(window).scrollTop() < 51) {
			$('.header-nav').removeClass('navbar-fixed');
		}
	});
// SmOOTh Scroolll
	$('.header-mouse').click(function() {
		console.log('MOUSE');
		$('html, body').animate({
			scrollTop: $('#about').offset().top},
			'slow');
	});

	$('.toTop').click(function() {
		console.log('toTop');
		$('html, body').animate({
			scrollTop: $('header').offset().top},
			'slow');
	});

	// $(window).scroll(function() {
	//     $('.about-box').each(function(){
	//     var imagePos = $(this).offset().top;

	//     var topOfWindow = $(window).scrollTop();
	//         if (imagePos < topOfWindow+500) {
	//             $(this).addClass("fadeInUp");
	//         }
	//     });
	// });
});