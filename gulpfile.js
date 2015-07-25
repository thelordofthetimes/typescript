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
    return gulp.src('src/script/module.ts').
        pipe(tsc({
            target: 'ES5',
            module: 'amd'
        })).
        pipe(concat('web.media.js')).
        pipe(gulp.dest('dest/script/')).
        pipe(uglify()).
        pipe(concat('web.media.min.js')).
        pipe(gulp.dest('dest/script'));
});

gulp.task('script.test.clean', function() {
    return gulp.src('test/bin/*').
        pipe(clean());
});

gulp.task('script.test.compile', ['script.test.clean'], function() {
    return gulp.src('test/unit.ts').
        pipe(tsc({
            target: 'ES5',
            module: 'amd'
        })).
        pipe(concat('unit.js')).
        pipe(gulp.dest('test/bin/'));
});

gulp.task('script.test', ['script.test.compile'], function() {
    run('node test/bin/unit.js').
        exec();
});

gulp.task('default', ['script.compile']);
gulp.task('test', ['script.test']);