$(document).ready(function() {

  position_envelope();
  $(window).on('resize', function() {
    position_envelope();
  });
});

function position_envelope() {
  var envelope_width = $('#envelope').width();
  
  // Set the position of the envelope on the screen
  $('#envelope').css({
    'left' : ($('body').width() - envelope_width) / 2 + 'px'
  });

  // Set the perspective of the envelope flap
  $('#envelope-flap').css({
    'perspective' : envelope_width + 'px'
  });

  // Set the width of the envelope flap
  $('#envelope-flap .inner').css({
    'border-left-width' : envelope_width / 2,
    'border-right-width' : envelope_width / 2
  });
}