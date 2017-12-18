/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
gutil = require('gulp-util');
jshint     = require('gulp-jshint'),

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('source/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('jshint-stylish'));
  });
  
// create a default task and just log a message
gulp.task('watch', function() {
    gulp.watch('source/**/*.js', ['jshint']);
  });
  