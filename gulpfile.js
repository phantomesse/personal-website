'use strict';

// Gulp dependencies.
const gulp = require('gulp');
const newer = require('gulp-newer');

// HTML dependencies.
const fileinclude = require('gulp-file-include');
const htmlclean = require('gulp-htmlclean');

// JS dependencies.
const concat = require('gulp-concat');
const deporder = require('gulp-deporder');
const terser = require('gulp-terser');

// Image dependencies.
const imagemin = require('gulp-imagemin');

// CSS dependencies.
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const cssnano = require('cssnano');

// File paths.
const src = 'src/';
const build = 'build/';
const htmlSrc = src + '*.html';
const jsSrc = src + 'js/**/*';
const imagesSrc = src + 'images/**/*';

// Process HTML.
function html() {
  return gulp.src(htmlSrc)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlclean())
    .pipe(gulp.dest(build));
}

// Process JS.
function js() {
  return gulp.src(jsSrc)
    .pipe(deporder())
    .pipe(concat('scripts.js'))
    .pipe(terser())
    .pipe(gulp.dest(build + 'js/'));
}

// Process images.
function images() {
  const out = build + 'images/';
  return gulp.src(imagesSrc)
    .pipe(newer(out))
    .pipe(imagemin({ optimizationLevel: 5 }))
    .pipe(gulp.dest(out));
}

// Process CSS.
function css() {
  return gulp.src(src + 'scss/styles.scss')
    .pipe(sass({
      outputStyle: 'nested',
      imagePath: '/images/',
      precision: 3,
      errLogToConsole: true
    }).on('error', sass.logError))
    .pipe(postcss([
      assets({ loadPaths: ['images/'] }),
      autoprefixer({ browsers: ['last 2 versions', '> 2%'] }),
      mqpacker,
      cssnano
    ]))
    .pipe(gulp.dest(build + 'css/'));
}

// Watch for file changes.
function watch(done) {
  gulp.watch(htmlSrc, html);
  gulp.watch(src + 'includes/**/*', html);
  gulp.watch(jsSrc, js);
  gulp.watch(imagesSrc, images);
  gulp.watch(src + 'scss/**/*', css);
  done();
}

exports.html = html;
exports.js = js;
exports.images = images;
exports.css = gulp.series(images, css);

exports.build = gulp.parallel(exports.html, exports.js, exports.images, exports.css);
exports.watch = watch;

// Default functionality when `gulp` is invoked without arguments.
exports.default = gulp.series(exports.build, exports.watch);