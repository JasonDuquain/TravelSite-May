var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');



gulp.task('html', function() {
    console.log("k");
});


gulp.task('styles', function() {
    gulp.src('./app/assets/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer(['last 2 version']))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./app/assets/css/'))
});



gulp.task("watch", ['html', 'styles'], function() {
    gulp.watch('./app/index.html', ['html']);
    gulp.watch('./app/assets/scss/**/*.scss', ['styles']);
       
});