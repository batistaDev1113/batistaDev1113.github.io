var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');

gulp.task('default', function(){
  gulp.src('js/all.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});


//image compress task
gulp.task('image', function(){
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('imgmin'));
});