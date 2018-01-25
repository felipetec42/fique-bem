
$('#toggle').click(function() {
  $(this).toggleClass('active');
  $('#overlay').toggleClass('open');
});
$('a.page-scroll').click(function() {
  $('#overlay').toggleClass('open');
});

$(function() {
  $(document).on('click', 'a.page-scroll', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top -60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$('#btn-seguros-pf').click(function() {
  $('#btn-seguros-pj').removeClass('btn-primary').addClass('btn-outline-secondary');
  $('#btn-seguros-pf').removeClass('btn-outline-secondary').addClass('btn-primary');
  $('#seguro-pj').fadeOut();
  $('#seguro-pf').delay(400).fadeIn();
});
$('#btn-seguros-pj').click(function() {
  $('#btn-seguros-pf').removeClass('btn-primary').addClass('btn-outline-secondary');
  $('#btn-seguros-pj').removeClass('btn-outline-secondary').addClass('btn-primary');
  $('#seguro-pf').fadeOut();
  $('#seguro-pj').delay(400).fadeIn();
});

$('#btn-beneficios-pf').click(function() {
  $('#btn-beneficios-pj').removeClass('btn-primary').addClass('btn-outline-secondary');
  $('#btn-beneficios-pf').removeClass('btn-outline-secondary').addClass('btn-primary');
  $('#beneficio-pj').fadeOut();
  $('#beneficio-pf').delay(400).fadeIn();
});
$('#btn-beneficios-pj').click(function() {
  $('#btn-beneficios-pf').removeClass('btn-primary').addClass('btn-outline-secondary');
  $('#btn-beneficios-pj').removeClass('btn-outline-secondary').addClass('btn-primary');
  $('#beneficio-pf').fadeOut();
  $('#beneficio-pj').delay(400).fadeIn();
});
