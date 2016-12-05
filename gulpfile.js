/* Gulp will be used primarily for minification of the sass files */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var server = require('gulp-webserver');
var combineMq = require('gulp-combine-mq');


/*
var scripts = [
    // './node_modules/jquery/dist/jquery.js',
    './node_modules/jquery/dist/jquery.min.js',
    './resources/js/linkScroll.js'
];
*/
//var scriptsDest = './resources/js';


gulp.task('default', ['sass']);

/*
gulp.task('sass_old', function () {
    return gulp.src('./resources/css/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./resources/css'))
    ;
}); */

gulp.task("sass", function () {
    return gulp.src('./resources/sass/manifest.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./resources/css'))
        .pipe(combineMq({
            beautify: true
        }))
        .pipe(rename('style.bundle.css'))
        .pipe(gulp.dest('./resources/css'))
    ;
});

/*
gulp.task('js', function () {
    return gulp.src(scripts)
        .pipe(concat('site.bundle.js'))
        .pipe(gulp.dest(scriptsDest))
    ;
}); */

gulp.task('watch', function () {
    // gulp.watch('./resources/css/*.scss', ['sass']);
    gulp.watch('./resources/sass/*.scss', ['sass']);
    //gulp.watch(scripts, ['js']);
});

gulp.task('dev-server', function(){
    gulp.src('.')
        .pipe(server({
            livereload: true,
            port: 8080
        }));
});
