var gulp = require('gulp');
var stylus = require('gulp-stylus')
var concat = require('gulp-concat');

gulp.task('stylus', function() {
  gulp.src('src/styls/**/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest('./assets/css/'))
});

gulp.task('combine', function(){
  return gulp.src('./assets/css/**/*.css')
      .pipe(concat('all.css'))
      .pipe(gulp.dest('./compressed/'));
})
