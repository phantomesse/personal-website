$(document).ready(function() {
  envelope_setup();
  $(window).resize(function() {
    envelope_setup();
  });

  $(window).scroll(function() {
    envelope_open();
  })
});

function envelope_setup() {
  var envelope = $('#envelope');
  var envelope_width = envelope.width();

  // Adjust envelope details
  var envelope_details = $('#envelope-details');
  envelope_details.css({
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px'
  });

  // Adjust envelope flap
  var envelope_flap_outside = $('#envelope-flap-outside');
  envelope_flap_outside.css({
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px'
  });
  var envelope_flap_inside = $('#envelope-flap-inside');
  envelope_flap_inside.css({
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px'
  });
}

function envelope_open() {
  var scroll_top = $(window).scrollTop();
  if (scroll_top > 180 || scroll_top < 0) {
    return;
  }

  var envelope_flap_outside = $('#envelope-flap-outside');
  envelope_flap_outside.css('transform', 'rotateX(' + scroll_top + 'deg)');

  var envelope_flap_inside = $('#envelope-flap-inside');
  envelope_flap_inside.css('transform', 'rotateX(' + (180 + scroll_top) + 'deg)');
}