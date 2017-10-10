const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true
    }),
    cachebust = new $.cachebust(),
    transforms = [{
        transform: "babelify",
        options: {presets: ['es2017']}
    }];



gulp.task('build-js', () => {
    return gulp.src('./public/js/**/*.js')
        .pipe($.sourcemaps.init())
        .pipe($.browser.browserify(transforms))
        .pipe($.print())
        .pipe($.concat('bundle.js'))
        .pipe($.ngAnnotate())
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('build-css', () => {
    return gulp.src(['./public/styles/css/**/*', './public/styles/scss/**/*'])
        .pipe($.sourcemaps.init())
        .pipe($.print())
        .pipe(cachebust.resources())
        .pipe($.sass())
        .pipe($.concat('styles.min.css'))
        .pipe($.cssmin())
        .pipe($.sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/styles'))
});

gulp.task('views', () => {
    return gulp.src('./public/views/**/*')
        .pipe($.print())
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist/views'))
});

gulp.task('build', ['build-js', 'views', 'build-css'], () => {
    return gulp.src('./public/index.html')
        .pipe(cachebust.references())
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', () => {
    return gulp.watch(['./public/index.html', './public/styles/css/*.css', './public/styles/scss/*.scss', './public/js/**/*.js'], ['build']);
});

gulp.task('default', ['build', 'watch']);