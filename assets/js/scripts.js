var envelope_offset_bottom = 20;
var title_offset_bottom;

$(document).ready(function() {
  setup();
  $(window).resize(function() {
    setup();
  });

  $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    envelope_shift(scroll_top);
    title_shift(scroll_top);
    envelope_open(scroll_top);
  })
});

function setup() {
  var envelope = $('#envelope');
  var title = $('#title');
  var title_line_height = parseInt(title.css('height'));
  var envelope_width = envelope.width();
  var envelope_height = Math.floor($('body').height() - envelope_offset_bottom*2 - title_line_height*2);
  if (envelope_height % 2 !== 0) {
    // Make sure the height is even
    envelope_height -= 1;
  }
  envelope.css('height', envelope_height);
  $('#envelope-details-wrapper').css('height', envelope_height);

  // Place the title
  title_offset_bottom = envelope_height + parseInt(envelope.css('bottom'));
  title.css('bottom', title_offset_bottom + 'px');

  // Change the text of the title based on browser width
  var body_width = $('body').width();
  var title_h1 = $('#title h1');
  if (body_width < 520) {
    title_h1.html('<b>Lauren Zou</b>');
    title_h1.css('text-align', 'center');
  } else {
    title_h1.html('From: <b>Lauren Zou</b>');
    title_h1.css('text-align', 'left');
  }

  // Adjust envelope details
  var envelope_details = $('#envelope-details');
  envelope_details.css({
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px',
    'border-top-width' : envelope_height/2 + 'px',
    'border-bottom-width' : envelope_height/2 + 'px'
  });

  // Adjust envelope flap
  var envelope_flap_outside = $('#envelope-flap-outside');
  envelope_flap_outside.css({
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px',
    'border-top-width' : envelope_height/2 + 'px',
    'border-bottom-width' : envelope_height/2 + 'px'
  });
  var envelope_flap_inside = $('#envelope-flap-inside');
  envelope_flap_inside.css({
    'top' : -envelope_height + 'px',
    'border-left-width' : envelope_width/2 + 'px',
    'border-right-width' : envelope_width/2 + 'px',
    'border-top-width' : envelope_height/2 + 'px',
    'border-bottom-width' : envelope_height/2 + 'px'
  });

  // Offset top for letter
  var letter = $('#letter');
  letter.css('margin-top', $('body').height() - envelope.height()/2);
}

function envelope_shift(scroll_top) {
  if (scroll_top < 180) {
    $('#envelope').css('bottom', envelope_offset_bottom + 'px');
    $('#envelope-details-wrapper').css('bottom', envelope_offset_bottom + 'px');
    return;
  }

  $('#envelope').css('bottom', (envelope_offset_bottom - scroll_top + 180) + 'px');
  $('#envelope-details-wrapper').css('bottom', (envelope_offset_bottom - scroll_top + 180) + 'px');
}

function title_shift(scroll_top) {
  if (scroll_top > 60) {
    $('#title').hide();
    return;
  }

  $('#title').show();
  $('#title').css('bottom', (title_offset_bottom - scroll_top) + 'px');
}

function envelope_open(scroll_top) {
  if (scroll_top > 180 || scroll_top < 0) {
    return;
  }

  var envelope_flap_outside = $('#envelope-flap-outside');
  envelope_flap_outside.css('transform', 'rotateX(' + scroll_top + 'deg)');

  var envelope_flap_inside = $('#envelope-flap-inside');
  envelope_flap_inside.css('transform', 'rotateX(' + (180 + scroll_top) + 'deg)');
}