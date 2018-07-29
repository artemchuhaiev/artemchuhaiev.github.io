var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
var imagemin = require('gulp-imagemin');

gulp.task('sass', function () {
  return gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task("js", function () {
 return gulp.src("src/js/*.js")
    .pipe(babel({
			presets: ['env']
		}))
    .pipe(gulp.dest("dist/js"));
});

gulp.task('img', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);

gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['js']);
  gulp.watch('src/img/*', ['img']);
});