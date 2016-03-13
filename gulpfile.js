var gulp=require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');

gulp.task('script',function(){
	return gulp.src('public/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'))
})

gulp.task('minify', function() {
  return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('image',function(){
	return gulp.src('public/images/*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist/images'));
})

gulp.task('default',['script','minify','image'])