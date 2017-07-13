window.$ = window.jQuery = require('jquery')
window.Tether = require('tether')
require('bootstrap')
$ ->
  $('[data-toggle="tooltip"]').tooltip()
  return

do fill = (item = 'The t most creative minds Hello in Art') ->
  $('.tagline').append "#{item}"
fill


# Anchor Scrolling
scrolltoAnchor = ->
  $(" a[href*='#']").click ->
    $(this).hide()
    anchorTo = $(this).attr('href')
    offset = 60
    console.log(anchorTo)
     #Animate
    $('html, body').stop().animate { scrollTop: $(anchorTo).offset().top - offset }, 400
    false

scrolltoAnchor()
