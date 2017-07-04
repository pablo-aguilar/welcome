var fill;

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
