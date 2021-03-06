var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require("babelify");
var source = require('vinyl-source-stream');

gulp.task('watch', function(){
    gulp.watch(['./components/*.jsx', './*.jsx'], ['build'])
})
gulp.task('build', function(){
  browserify({
    entries: ['./index.jsx'],
    extensions: ['.jsx'],
    debug: true
  })
  .transform(babelify).bundle()
  .pipe(source('build.js'))
  .pipe(gulp.dest('lib'))
});
