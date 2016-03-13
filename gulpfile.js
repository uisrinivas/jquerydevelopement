var gulp=require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('script',function(){
	return gulp.src('public/js/**/*.js')
	.pipe(concat('all.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('dist/js'))
})

gulp.task('default',['script'])