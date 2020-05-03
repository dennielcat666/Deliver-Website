const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

sass.compiler = require('node-sass');

// function dev (cb) {

//     gulp.src('./src/fonts/*')
//         .pipe(gulp.dest('./dist/fonts/'));

//     gulp.src('./src/*.html')
//         .pipe(gulp.dest('./dist/'));

//     gulp.src('./src/img/**/*')
//         .pipe(gulp.dest('./dist/img/'));
    
//     /* gulp.src('./src/js/*.js')
//         .pipe(concat('bundle.js'))
//          .pipe(uglify())
//         .pipe(gulp.dest('./dist/js/')); */
    
//     gulp.src('./src/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         /* .pipe(concat('main.css')) */
//   /*       .pipe(uglifycss({
//             "maxLineLen": 20,
//             "uglyComments": true
//         })) */
//         .pipe(gulp.dest('./dist/css'));
//     cb();
//   }

//   gulp.task('dev', dev);


gulp.task('dev', function dev (cb) {

    gulp.src('./src/fonts/*')
        .pipe(gulp.dest('./dist/fonts/'));

    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'));

    gulp.src('./src/img/**/*')
        .pipe(gulp.dest('./dist/img/'));
    
    /* gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
         .pipe(uglify())
        .pipe(gulp.dest('./dist/js/')); */
    
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        /* .pipe(concat('main.css')) */
  /*       .pipe(uglifycss({
            "maxLineLen": 20,
            "uglyComments": true
        })) */
        .pipe(gulp.dest('./dist/css'));
    cb();
  });



    gulp.task('watch', function (cb) {
        gulp.watch('./src/**/*', gulp.task('dev'));
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