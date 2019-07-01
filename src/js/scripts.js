// Smooth scrolling.
$('a[href*="#"]').click(function (e) {
  e.preventDefault();

  const id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 200, 'linear');
});
