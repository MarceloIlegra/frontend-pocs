var gulp = require('gulp');
var stylus = require('gulp-stylus')

gulp.task('stylus', function() {
  gulp.src('src/styls/**/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./assets/css/'))
});
