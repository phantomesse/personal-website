// Smooth scrolling.
$('a[href*="#"]').click(function (e) {
  e.preventDefault();

  const id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 200, 'linear');
});


// Parallax scrolling for header background.
$(window).scroll(function () {
  const scrollTop = $(window).scrollTop();
  $('.header-bg').css('transform', `translateY(${scrollTop / 2}px)`)
});