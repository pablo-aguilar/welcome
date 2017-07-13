var fill, scrolltoAnchor;

window.$ = window.jQuery = require('jquery');

window.Tether = require('tether');

require('bootstrap');

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});

(fill = function(item) {
  return $('.tagline').append("" + item);
})('The t most creative minds Hello in Art');

fill;

scrolltoAnchor = function() {
  return $(" a[href*='#']").click(function() {
    var anchorTo, offset;
    $(this).hide();
    anchorTo = $(this).attr('href');
    offset = 60;
    console.log(anchorTo);
    $('html, body').stop().animate({
      scrollTop: $(anchorTo).offset().top - offset
    }, 400);
    return false;
  });
};

scrolltoAnchor();
