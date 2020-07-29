/*
  Parallax effect tutorial by Patryk Zabielski @ medium.com
  -----
  https://medium.com/@PatrykZabielski/how-to-make-multi-layered-parallax-illustration-with-css-javascript-2b56883c3f27#.soyybjqtk
*/

(function() {
	// adding the event listener when there's a scroll
	'use strict';
	window.addEventListener('scroll', function(event) {
		// declaring the variables
		var depth, i, layer, layers, len, movement, topDistance, translate3d;
		// distance from the top of the window
		topDistance = this.pageYOffset;
		layers = document.querySelectorAll('[data-type="parallax"]');
		for (i = 0, len = layers.length; i < len; i = i + 1) {
			layer = layers[i];
			depth = layer.getAttribute('data-depth');
			movement = -(topDistance * depth);
			// moving the layers based on depth modifier and distance from the top of the window
			translate3d = 'translate3d(0, ' + movement + 'px, 0)';
			layer.style['-webkit-transform'] = translate3d;
			layer.style['-moz-transform'] = translate3d;
			layer.style['-ms-transform'] = translate3d;
			layer.style['-o-transform'] = translate3d;
			layer.style.transform = translate3d;
		}
	});
}.call(this)); // calling the function


// Section Call
var sections = $('section')
  , nav = $('nav')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});