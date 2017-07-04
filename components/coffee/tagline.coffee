window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
require('bootstrap')
$ ->
  $('[data-toggle="tooltip"]').tooltip()
  return
  
do fill = (item = 'The t most creative minds Hello in Art') ->
  $('.tagline').append "#{item}"
fill
