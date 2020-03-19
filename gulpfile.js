var gulp = require("gulp");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var clean = require("gulp-clean-css");
var autoprefixer = require('gulp-autoprefixer');

gulp.task("sass", function(cb) {
  gulp
    .src("./src/SCSS/root/root.scss")
    .pipe(sass())
    .pipe(concat("root.min.css"))
    .pipe(clean())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dist/CSS/"));
  cb();
});

gulp.task(
  "default",
  gulp.series("sass", function(cb) {
    gulp.watch("./src/**/*.scss", gulp.series("sass"));
    cb();
  })
);