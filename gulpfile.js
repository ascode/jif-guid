var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src('guid.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'))
})