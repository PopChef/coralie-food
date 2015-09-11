var gulp = require('gulp'),
del = require('del'),
iconfont = require('gulp-iconfont'),
iconfontCss = require('gulp-iconfont-css');
rename = require("gulp-rename"),
serve = require('gulp-serve');

gulp.task('serve', serve('public'));

var runTimestamp = Math.round(Date.now() / 1000);

gulp.task('clean', function () {
  return del(['dist/*']);
});

gulp.task('icon', function(){
  return gulp.src(['icons/*.svg'])
    .pipe(rename(function (path) {
      path.basename = path.basename.replace('corafood_', '');
    }))
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

    }))

    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['clean', 'icon']);
gulp.task('serve', serve('./'));
