jQuery(document).ready(function($) {



$('a[href^="#"]').click(function(){
	var target = $(this).attr('href');
	var scroll_t = $(window).scrollTop();
	if(scroll_t<=60){
		$('html, body').animate({scrollTop: $(target).offset().top }, 400);
	}
	else{
		$('html, body').animate({scrollTop: $(target).offset().top}, 400);
	}
	return false;
});




});