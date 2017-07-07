$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data) {
    var template = $('#speakerstpl').html();
    var html = Mustache.to_html(template, data);
    $('#speakers').html(html);
  }); //getJSON

}); //function

$(function() {
  var Mustache = require('mustache');

  $.getJSON('js/data.json', function(data) {
    var template = $('#quick-links-tpl').html();
    var html = Mustache.to_html(template, data);
    $('#quick-links').html(html);
  }); //getJSON

}); //function
