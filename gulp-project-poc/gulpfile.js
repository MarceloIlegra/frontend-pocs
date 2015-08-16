var gulp = require('gulp');
var stylus = require('gulp-stylus')
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css')
var rename = require('gulp-rename')
var gulpSync = require('gulp-sync') (gulp)

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

gulp.task('min', function(){
  return gulp.src('./compressed/all.css')
      .pipe(minifyCss())
      .pipe(rename('all.min.css'))
      .pipe(gulp.dest('./compressed/'));
})

gulp.task('default', gulpSync.sync(['stylus', 'combine' , 'min']))
