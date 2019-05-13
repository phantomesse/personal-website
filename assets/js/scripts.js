$(document).ready(function () {
  hideSideNav();
});

$(window).scroll(function () {
  hideSideNav();
});

// Hides the side navigation if header is shown.
function hideSideNav() {
  let sideNav = $('#side-nav');
  let shouldHide = $(window).scrollTop() < $('header').height();
  let isHidden = sideNav.hasClass('hidden');
  if (shouldHide && isHidden || !shouldHide && !isHidden) return;
  sideNav.toggleClass('hidden', shouldHide);
}

// Scroll smoothly to section.
function smoothScrollToSection() {
  // TODO: implement
}
