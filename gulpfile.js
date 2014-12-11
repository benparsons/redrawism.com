/*
 * Init Gulp dependencies
 */
var gulp =
	require("gulp"),
	sass = require("gulp-ruby-sass"),
	minifycss = require("gulp-minify-css"),
	rename = require("gulp-rename"),
	autoprefixer = require("gulp-autoprefixer"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	notify = require("gulp-notify");


/*
 * Gulp tasks
 */
gulp.task("sass", function() {

	gulp.src("css/include/screen.sass")
		.pipe(sass({
			loadPath: process.cwd() + "/css/include",
			style: "nested"
		}))
		.pipe(autoprefixer("last 20 version", "> 1%"))
		.pipe(gulp.dest("css"))
		.pipe(notify("SASS successfully compiled!"));

});

gulp.task("watch", function() {

	gulp.watch("css/include/**/*.sass", ["sass"]);

});


/*
 * Default Gulp task
 */
gulp.task("default", function() {
	gulp.start("watch");
});
