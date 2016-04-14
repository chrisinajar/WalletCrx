var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('webfiles', ['templates', 'static', 'prune-static']);

gulp.task('clean-templates', function () {
  return gulp.src([
      'de',
      'el',
      'en',
      'es',
      'fr',
      'it',
      'nl',
      'pl',
      'ru',
      'sv',
      'th',
      'uk'
    ], {read: false})
    .pipe(clean());
});

gulp.task('templates', ['clean-templates'], function () {
  return gulp.src('node_modules/greenaddress-webfiles/dist/templates/**/*')
    .pipe(gulp.dest('./'));
});

gulp.task('clean-static', function() {
  return gulp.src([
      'static/css/',
      'static/fonts/',
      'static/img/',
      'static/js/',
      'static/sound/'
    ], {read: false})
    .pipe(clean());
});

gulp.task('static', ['clean-static'], function() {
  return gulp.src('node_modules/greenaddress-webfiles/dist/static/**/*')
    .pipe(gulp.dest('./static'));
});

gulp.task('prune-static', ['static'], function() {
  return gulp.src([
    'static/fonts/*.svg',
    'static/sound/*.wav',
    'static/js/cdv-plugin-fb-connect.js',
    'static/js/facebook-js-sdk.js',
    'static/js/common_cordova_handlers.js',
    'static/js/greenaddress.js',
    'static/js/instant.js'
  ])
  .pipe(clean());
});
