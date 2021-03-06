// Popup

$(function () {
	$('.login').on('click', function(e) {
	  	e.preventDefault();
	 	$('.container-pop-up').css('display', 'block');
 	});

	$('.container-pop-up .escape').on('click', function(e) {
	  	e.preventDefault();
	 	$('.container-pop-up').css('display', 'none');
   });

// Переключатель язык/валюта

  var $currencyLink = $('.currency__link');
  var $langLink = $('.lang__link');

  $currencyLink.on('click', function (e) {
    e.preventDefault();
    setActiveItem($('.active'), $(this), 'active');
  });

  $langLink.on('click', function (e) {
    e.preventDefault();
    setActiveItem($('.current'), $(this), 'current');
  });

  function setActiveItem(oldElem, newElem, currentClass) {
    oldElem.removeClass(currentClass);
    newElem.addClass(currentClass);
  }

  // Слайдер

  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  });

})
