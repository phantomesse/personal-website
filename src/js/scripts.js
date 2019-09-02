const animationDuration = 1; // seconds
const paths = $('#logo path');

for (let i = 0; i < paths.length; i++) {
  const path = paths[i];
  const pathLength = path.getTotalLength();
  $(path).css({
    'stroke-dasharray': pathLength,
    'stroke-dashoffset': pathLength,
    'animation-duration': `${animationDuration}s`,
    'animation-delay': `${i * animationDuration}s`
  });
}

$('#logo').css({
  'animation-duration': `${animationDuration}s`,
  'animation-delay': `${paths.length * animationDuration}s`
});
