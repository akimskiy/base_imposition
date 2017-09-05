var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    sassPath = ('./src/style/scss/main.scss'),
    cssPath = ('./public/style/css'),
    jsPath = ('./public/js/main.js');
gulp.task('styles', function () {
    gulp.src(sassPath)
        .pipe(sass())
        .pipe(gulp.dest(cssPath))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
    gulp.src(jsPath)
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './public'
        }
    });

    gulp.watch('./src/style/scss/*.scss', ['styles']);
    gulp.watch('./public/js/*.js', ['js']);
    gulp.watch('./public/**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);