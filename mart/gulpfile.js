var gulp = require ('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync');

gulp.task('default', function(){});

//BROWSERSYNC
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//SASS
gulp.task('sass', function () {
  return gulp.src('sass/main.scss')
    .pipe(sass().on('error', sass.logError))
    //AUTOPREFIXER
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}));
});

//WATCH
gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('sass/*.scss', ['sass']);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./js/**/*.js', browserSync.reload);
});

