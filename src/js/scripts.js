// Smooth scrolling.
$('a[href*="#"]').click(function (e) {
  e.preventDefault();

  const id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 200, 'linear');
});


$(window).scroll(function () {
  // Parallax scrolling for header background.
  const scrollTop = $(window).scrollTop();
  $('.header-bg').css('transform', `translateY(${scrollTop / 2}px)`);

  // Only show the nav when scrolled below the header.
  $('.side-nav').toggleClass('hidden', scrollTop < $(window).height() / 2);
});
