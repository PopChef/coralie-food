var gulp = require('gulp'),
del = require('del'),
iconfont = require('gulp-iconfont'),
iconfontCss = require('gulp-iconfont-css');

var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('clean', function () {
  return del(['dist/*']);
});

gulp.task('icon', function(){
  return gulp.src(['icons/*.svg'])
    .pipe(iconfontCss({
      fontName: 'corafood',
      path: 'template.css',
      targetPath: 'corafood.css',
      fontPath: './'
    }))
    .pipe(iconfont({
      fontName: 'corafood',
      appendUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'svg'],
      timestamp: runTimestamp,

      fixedWidth: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'icon']);
