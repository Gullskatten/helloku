const gulp = require('gulp');
const fs = require('fs');
const browserify = require('browserify');
const babelify = require('babelify');
const nodemon = require('gulp-nodemon');

gulp.task('bundle', function (){
  browserify({ debug: true })
    .transform(babelify)
    .require('source/js/app.js', { entry: true })
    .bundle()
    .on('error', function (err) { console.log('Error: ' + err.message); })
    .pipe(fs.createWriteStream('public/js/bundle.js'));
})

gulp.task('startServer', function () {
  nodemon({
    script: 'app.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})

gulp.task('watch', function() {
  gulp.watch('source/js/**/*.js',['bundle']);
});

gulp.task('default', ['watch', 'bundle', 'startServer']);
