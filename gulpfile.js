const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');


gulp.task('sass', function (cb) {
    
    /* gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/js/')); */

    /* gulp.src('./dist/js/bundle.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/')); */
    
    gulp.src('./src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));

    /* gulp.src('./dist/css/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css/'));

    gulp.src('./dist/css/main.css')
        .pipe(uglifycss({
            "maxLineLen": 20,
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css/')); */

    /* gulp.task('sass:watch', function (cb) {
        gulp.watch('./src/sass/*.scss', ['sass']);
    }); */
    cb();
  });




 
    /* gulp.task('scripts', function(cb) {
        gulp.src('./src/js/*.js')
            .pipe(concat('bundle.js'))
            .pipe(gulp.dest('./dist/js/'));

        gulp.src('./src/sass/*.scss')
            .pipe(concat('main.css'))
            .pipe(concat('main.css'))
            .pipe(gulp.dest('./dist/css/'));

        cb();
    });


    gulp.task('uglify', function(cb){
        gulp.src('./dist/js/scriptHWJS_15_2.main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));

        cb();
    });

    gulp.task('uglifycss', function(cb){
        gulp.src('./dist/css/styleHWJS_15_2.main.css')
        .pipe(uglifycss({
            "maxLineLen": 5,
            "uglyComments": true
          }))
        .pipe(gulp.dest('./dist/css/'));

        cb();
    });
 */