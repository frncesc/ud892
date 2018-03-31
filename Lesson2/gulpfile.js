var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	browserSync.stream();
});


gulp.task('styles', function () {
	gulp.src('sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['styles'], function () {
	browserSync.init({
		server: "./"
	});
	browserSync.stream();
	console.log('Watching for changes');
	gulp.watch('sass/**/*.scss', ['styles'])
	gulp.watch("**/*").on('change', browserSync.reload);
});
