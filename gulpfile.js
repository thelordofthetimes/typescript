var gulp = require('gulp');
var tsc = require('gulp-tsc');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var run = require('gulp-run');

gulp.task('script.clean', function() {
    return gulp.src('dest/').
        pipe(clean());
});

gulp.task('script.compile', ['script.clean'], function() {
    return gulp.src('src/script/main.ts').
        pipe(tsc({
            target: 'ES5',
            module: 'amd'
        })).
        pipe(concat('bin.js')).
        pipe(gulp.dest('dest/script/')).
        pipe(uglify()).
        pipe(concat('bin.min.js')).
        pipe(gulp.dest('dest/script'));
});

gulp.task('script.run', ['script.compile'], function() {
    run('node dest/script/bin.js').
        exec();
});

gulp.task('default', ['script.run']);