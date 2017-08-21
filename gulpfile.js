
var gulp = require('gulp'),
	
	less = require('gulp-less'),


// gulp 对象，提供了若干方法

// 处理css
gulp.task('css', function () {

	return gulp.src('./public/less/main.less')
		.pipe(less())
		
		

		.pipe(gulp.dest('./public/css'))
		

});

