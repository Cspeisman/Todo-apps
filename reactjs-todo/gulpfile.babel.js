import gulp from 'gulp';
import babel from 'gulp-babel';
import gutil from 'gulp-util';

gulp.task('watch', function() {
  gulp.watch('./src/**', ['build'])
})

gulp.task('build', () => {
  gulp.src('./src/*.jsx')
    .pipe(babel().on('error', gutil.log))
    .pipe(gulp.dest('./lib', {overwrite: true}));
});

gulp.task('default', ['watch'])
