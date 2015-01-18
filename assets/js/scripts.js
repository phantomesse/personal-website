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

  // Draw the envelope flap
  var envelope_flap_height = $('#envelope-flap').height();
  var envelope_rectangular_part_height = 48;
  $('#envelope-flap svg polygon')
    .attr('points', '0,0 '
      + envelope_width + ',0 '
      + envelope_width + ',' + envelope_rectangular_part_height + ' '
      + (envelope_width / 2) + ',' + envelope_flap_height + ' '
      + '0, ' + envelope_rectangular_part_height);

  // Draw the envelope liner
  $('#envelope-liner polygon')
    .attr('points', '');
}