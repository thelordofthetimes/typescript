var gulp = require('gulp');
var tsc = require('gulp-tsc');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');

gulp.task('typescript.clean', function() {
    return gulp.src('dest/').
        pipe(clean());
});

gulp.task('typescript', ['typescript.clean'], function() {
    return gulp.src('src/script/*tsc').
        pipe(tsc()).
        pipe(concat('lib.js')).
        pipe(gulp.dest('dest/'));
});