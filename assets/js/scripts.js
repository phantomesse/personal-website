$(document).ready(function() {
  place_flaps();
  $(window).on('resize', function() {
    place_flaps();
  });
});

/**
 * Places each flap in the correct spot on the screen.
 */
function place_flaps() {
  var body_width = $('body').width();

  // Place the top flap
  var flap_width = $('#flap-top').width();
  $('#flap-top').css({
    'left' : (body_width - flap_width)/2 + 'px',
    'perspective' : flap_width + 'px'
  });

  // TODO: Place the other flaps
}