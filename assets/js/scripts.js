$(document).ready(function() {
  envelope();

  $(window).resize(function() {
    envelope();
  });

  $(window).scroll(function() {
    open_envelope();
  });
});

function envelope() {
  var envelope = $('#envelope');

  // Set the width and height of the envelope flap based on the width and height of the envelope
  var envelope_flap_svg = $('#envelope-flap svg');
  var envelope_border_width = parseInt(envelope.css('border-left-width'));
  var envelope_flap_width = envelope.width() + envelope_border_width * 4;
  var envelope_flap_height = envelope.height();
  envelope_flap_svg.attr('width', envelope_flap_width);
  envelope_flap_svg.attr('height', envelope_flap_height);

  // Draw the envelope flap
  var envelope_flap_path = $('#envelope-flap svg path');
  var envelope_corner_border_radius = parseInt(envelope.css('border-radius'));
  var envelope_flap_top_height = 50;
  var offset_top = envelope_border_width / 2;
  var offset_side = envelope_border_width;
  var envelope_flap_path_array = [
    ['M' + offset_side + envelope_corner_border_radius, offset_top],
    [(envelope_flap_width - envelope_corner_border_radius), offset_top],
    ['Q' + (envelope_flap_width - offset_side), offset_top],
    [envelope_flap_width - offset_side, offset_top + envelope_corner_border_radius],
    ['T' + (envelope_flap_width - offset_side), offset_top + envelope_corner_border_radius],
    ['L' + (envelope_flap_width - offset_side), offset_top + envelope_flap_top_height],
    ['C' + (envelope_flap_width / 2 - envelope_flap_width/5), offset_top+ envelope_flap_height],
    [envelope_flap_width / 2 + envelope_flap_width/5, offset_top + envelope_flap_height],
    [offset_side, offset_top + envelope_flap_top_height],
    ['T' + offset_side, offset_top + envelope_flap_top_height],
    ['L' + offset_side, offset_top + envelope_corner_border_radius],
    ['Q' + offset_side, offset_top],
    [offset_side + envelope_corner_border_radius, offset_top],
    ['T' + offset_side + envelope_corner_border_radius, offset_top]
  ];
  var envelope_flap_path_str = envelope_flap_path_array.reduce(function(path_str, path_part) {
    return path_str + ' ' + path_part[0] + ',' + path_part[1];
  });
  envelope_flap_path.attr('d', envelope_flap_path_str);
  envelope_flap_path.attr('fill', envelope.css('background-color'));
}

function open_envelope() {
  var envelope_flap = $('#envelope-flap svg');
  envelope_flap.css('transform', 'rotateX(' + $(window).scrollTop() + 'deg)')
}