/*$(document).ready(function() {

var $animatedIcons = $(); // Add classnames here
var $window = $(window);

function checkIfInView() {
	var windowHeight = $window.height();
	var windowTopPosition = $window.scrollTop();
	var windowBottomPosition = windowTopPosition + windowHeight;

	$.each($animatedIcons, function() {
		var $element = $(this);
		var elementHeight = $element.outerHeight();
		var elementTopPosition = $element.offset().top;
		var elementBottomPosition = elementTopPosition + elementHeight;

		// check to see if this current container is within viewport
		if( (elementBottomPosition >= windowTopPosition) && (elementTopPosition <= windowBottomPosition) ) {
			$element.addClass('in-view');
		}
		else {
			$element.removeClass('in-view');
		}
	});
}

$window.on('scroll resize', checkIfInView);
$window.trigger('scroll'); // trigger the scroll event as soon as the DOM is ready

});*/

$(document).ready(function() {

	/* Animate image when scrolling to it */

	var $animatedIcons = $('.section-6'); // Add classnames here
	var $window = $(window);
	var lastScrollTop = 0;

	function checkIfInView() {
		var windowHeight = $window.height();
		var windowTopPosition = $window.scrollTop();
		var windowBottomPosition = windowTopPosition + windowHeight;

		$.each($animatedIcons, function() {
			var $element = $(this);
			var elementHeight = $element.outerHeight();
			var elementTopPosition = $element.offset().top;
			var elementBottomPosition = elementTopPosition + elementHeight;

			// check to see if this current container is within viewport
			if( /*(elementBottomPosition >= windowTopPosition) &&*/ (elementTopPosition <= windowBottomPosition) ) {
				$element.addClass('in-view');
			}
			else {
				$element.removeClass('in-view');
			}
		});

		/* Show the navbar if scrolling upwards */

		console.log(windowTopPosition);

		//if(windowTopPosition > 62) {
			if(windowTopPosition < lastScrollTop) {
				$('.section-1 .header').removeClass('scroll-down').addClass('scroll-up');
			}
			else {
				$('.section-1 .header').removeClass('scroll-up').addClass('scroll-down');
			}			
		//}
		/*else {
			$('.section-1 .header').removeClass('scoll-down').removeClass('scroll-up');
		}*/

		lastScrollTop = windowTopPosition;
	}

	$window.on('scroll', checkIfInView);

	/* Underline text when hovering over unrelated image */

	var $section6ImgLeft = $('.section-6 .image-left');
	var $section6TextLeft = $('.section-6 .content-left h1'); 

	var $section6ImgRight = $('.section-6 .image-right');
	var $section6TextRight = $('.section-6 .content-right h1'); 

	$section6ImgLeft.hover(
		function() {
			$section6TextLeft.addClass('underline');
		},
		function() {
			$section6TextLeft.removeClass('underline');
		}
	);

	$section6ImgRight.hover(
		function() {
			$section6TextRight.addClass('underline');
		},
		function() {
			$section6TextRight.removeClass('underline');
		}
	);
});