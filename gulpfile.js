var gulp = require('gulp'),
    uglify = require('gulp-uglify');

gulp.task('default', function(){
  gulp.src('js/all.js')
  .pipe(uglify())
  .pipe(gulp.dest('minjs'));
});