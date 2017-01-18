(function($) {
  // defaults
  $.fn.fullClip = function(options) {
    var settings = $.extend({
      image: '../images/road.jpg'
    }, options);
  // change the background image
  return $(this).css('background-image', 'url(' + settings.image + ')');
}}(jQuery));
