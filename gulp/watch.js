var gulp = require('gulp');

gulp.task('listen', function () {
  gulp.watch('node_modules/greenaddress-webfiles/', ['webfiles']);
});
