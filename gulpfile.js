var gulp=require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var eslint = require('gulp-eslint');
var concatCss = require('gulp-concat-css');
var connect=require('gulp-connect');


gulp.task('script',function(){
	return gulp.src('public/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write())
	.pipe(connect.reload());
	.pipe(gulp.dest('dist/js'))
})

gulp.task('minify', function() {
  return gulp.src('public/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(connect.reload());
    .pipe(gulp.dest('dist/'))
});

gulp.task('image',function(){
	return gulp.src('public/images/*')
	.pipe(imagemin({
		progressive: true
	}))
	.pipe(gulp.dest('dist/images'));
})

gulp.task('lint', function() {
  return gulp.src('public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('css', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(connect.reload());
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('connect',function(){
	connect.server({
    root: 'public',
    livereload: true
  });
})

gulp.task('default',['script','minify','image','connect'])
gulp.task('validation',['lint'])
gulp.task('css',['css'])