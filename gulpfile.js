const gulp = require('gulp'),
     sourcemaps = require('gulp-sourcemaps'),
     concat = require('gulp-concat'),
     CacheBuster = require('gulp-cachebust'),
     cachebust = new CacheBuster(),
     print = require('gulp-print'),
     babel = require('gulp-babel'),
     es2015 = require('babel-preset-es2015'),
     ngAnnotate = require('gulp-ng-annotate'),
     uglify = require('gulp-uglify'),
     htmlmin = require('gulp-htmlmin'),
     cssmin = require('gulp-cssmin');


gulp.task('build-js', () => {
    return gulp.src('./public/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('bundle.js'))
        .pipe(ngAnnotate())
        // .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('build-css', () => {
    return gulp.src('./client/styles/**/*')
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(sass())
        .pipe(cachebust.resources())
        .pipe(concat('styles.min.css'))
        .pipe(cssmin())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./dist/styles'))
});
gulp.task('views', () => {
    return gulp.src('./public/views/**/*')
        .pipe(print())
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/views'))
});

gulp.task('build', ['build-js', 'views'], () => {
    return gulp.src('./public/index.html')
        .pipe(cachebust.references())
        .pipe(gulp.dest('dist'));
});
gulp.task('default', ['build']);

gulp.task('watch', function () {
    return gulp.watch(['./index.html', './styles/*.*css', './js/**/*.js'], ['build']);
});