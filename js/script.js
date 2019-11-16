var $currencyLink = $('.currency__link');
  var $langLink = $('.lang__link');

  $currencyLink.on( 'click', function(e) {
    e.preventDefault();
    setActiveItem( $('.active'), $(this), 'active');
  });

  $langLink.on( 'click', function(e) {
    e.preventDefault();
    setActiveItem( $('.current'), $(this), 'current');
  });

  function setActiveItem(oldElem, newElem, currentClass) {
    oldElem.removeClass(currentClass);
    newElem.addClass(currentClass);
  }

$(function () {
	$('.login').on('click', function(e) {
	  	e.preventDefault();
	 	$('.container-pop-up').css('display', 'block');
 	});

	$('.container-pop-up .escape').on('click', function(e) {
	  	e.preventDefault();
	 	$('.container-pop-up').css('display', 'none');
 	});
})
