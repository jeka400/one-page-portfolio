'use strict';

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var del = require('del');
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  //style paths
var scssFiles = './scss-styles/*.scss',
cssDest = './dist/css';

gulp.task('compile-sass', function(){
  return gulp.src(scssFiles)
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest(cssDest));
});

// Gulp task to minify CSS files
gulp.task('minimize-styles', function () {
return gulp.src('./dist/css/style.css')
  // Auto-prefix css styles for cross browser compatibility
  .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
  // Minify the file
  .pipe(csso())
  // Output
  .pipe(gulp.dest('./dist/css/minimized'))
});

//   // Gulp task to minify CSS files
// gulp.task('styles', function () {
//   return gulp.src('./scss-styles/*.scss')
//     // Compile SASS files
//     .pipe(sass({
//       outputStyle: 'nested',
//       precision: 10,
//       includePaths: ['.'],
//       onError: console.error.bind(console, 'Sass error:')
//     }))
//     // Auto-prefix css styles for cross browser compatibility
//     .pipe(autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
//     // Minify the file
//     .pipe(csso())
//     // Output
//     .pipe(gulp.dest('./dist/css'))
// });

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
  return gulp.src('./scripts.js')
    // Minify the file
    .pipe(uglify())
    // Output
    .pipe(gulp.dest('./dist/js'))
});
  
// Gulp task to minify HTML files
gulp.task('pages', function() {
  return gulp.src(['./*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest('./dist'));
});

// //bootstrap
// gulp.task("build:bootstrap", function () {
//   console.log("plugins: ", plugins);
//   return gulp.src(['client/scss/custom-bootstrap.scss'])
//     .pipe(plugins.sass())
//     .pipe(plugins.autoprefixer())
//     .pipe(gulp.dest('client/css')); // compile to a temporary file
// });
// gulp.task('build:css', gulp.series(
//   'build:bootstrap',
// ));

// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify all files
gulp.task('default', ['clean'], function () {
  runSequence(
    'compile-sass',
    'minimize-styles',
    'scripts',
    'pages'
  );
});

var filesToWatch = './scss-styles/*/*.scss';
var filesToWatch2 = './scss-styles/*.scss';
gulp.task('watch',function() {
  gulp.watch([filesToWatch, filesToWatch2],['compile-sass', 'minimize-styles']);
});

