$(document).ready(function() {
  envelope();

  $(window).resize(function() {
    envelope();
  });
});

function envelope() {
  var envelope = $('#envelope');

  // Set the width and height of the envelope flap based on the width and height of the envelope
  var envelope_flap_svg = $('#envelope-flap');
  var envelope_flap_width = envelope.width();
  var envelope_flap_height = envelope.height();
  envelope_flap_svg.attr('width', envelope_flap_width);
  envelope_flap_svg.attr('height', envelope_flap_height);

  // Draw the envelope flap
  var envelope_flap_path = $('#envelope-flap path');
  var envelope_corner_border_radius = parseInt(envelope.css('border-radius'));
  var envelope_flap_top_height = 50;
  var envelope_flap_path_array = [
    ['M' + envelope_corner_border_radius, 0],
    [(envelope_flap_width - envelope_corner_border_radius), 0],
    ['Q' + envelope_flap_width, 0],
    [envelope_flap_width, envelope_corner_border_radius],
    ['T' + envelope_flap_width, envelope_corner_border_radius],
    ['L' + (envelope_flap_width), envelope_flap_top_height],
    ['C' + (envelope_flap_width / 2 - envelope_flap_width/5), envelope_flap_height],
    [(envelope_flap_width / 2 + envelope_flap_width/5), envelope_flap_height],
    [0, envelope_flap_top_height],
    ['T0', envelope_flap_top_height],
    ['L0', envelope_corner_border_radius],
    ['Q0', 0],
    [envelope_corner_border_radius, 0]
  ];
  envelope_flap_path.attr('d', envelope_flap_path_array.reduce(function(path_str, path_part) {
    return path_str + ' ' + path_part[0] + ',' + path_part[1];
  }));
  envelope_flap_path.attr('fill', envelope.css('background-color'));
}