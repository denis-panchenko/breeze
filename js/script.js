$(document).ready (function () {
	$('.lang__link').click (function(e) {
	  	e.preventDefault();
	 	$('.current').removeClass('current');
	  	$(this).addClass('current');
 	});
 })
$(document).ready (function () {
	$('.currency__link').click (function(e) {
	  	e.preventDefault();
	 	$('.active').removeClass('active');
	  	$(this).addClass('active');
 	});
 })
