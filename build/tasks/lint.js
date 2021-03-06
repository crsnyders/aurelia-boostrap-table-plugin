var gulp = require('gulp');
var paths = require('../paths');
var tslint = require('gulp-tslint');

// runs eslint on all .ts files
gulp.task('lint', function() {
  return gulp.src(paths.source)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError: false
    }));
});
