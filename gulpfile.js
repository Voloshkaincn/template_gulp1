var gulp = require('gulp'),
   sassToCss = require('gulp-sass'),
   concat = require("gulp-concat"),
   uglify = require('gulp-uglify-es').default,
   cleanCSS = require('gulp-clean-css'),
   autoprefixer = require("gulp-autoprefixer"),
   rename = require("gulp-rename"),
   browserSync = require('browser-sync').create(),
   sourcemaps = require('gulp-sourcemaps'),
   cssnano = require('gulp-cssnano'),
   include = require('gulp-include');

//Compile CSS file from Sass
gulp.task('compileSass', function() {
   return gulp.src(['sass/**/*.{sass,scss}'])
      .pipe(sourcemaps.init())
      .pipe(sassToCss({ outputStyle: 'expanded' }).on('error', sassToCss.logError))
      .pipe(autoprefixer({ cascade: false }))
      .pipe(gulp.dest('css'))
      .pipe(cleanCSS())
      .pipe(cssnano())
      .pipe(rename({ suffix: '.min' }))
      .on('error', function(err) {
         console.error('Error!', err.message);
      })
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream({ match: '**/*.css' }));
});

//Concat all library js files into libs.min.js
gulp.task('createJsLibs', function() {
   return gulp.src([
         './libs/ScrollMagic.min.js'
      ])
      .pipe(concat('libs.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js'))
      .pipe(browserSync.stream({ match: '**/*.js' }));
});

//Compress JSFiles
gulp.task('compressJs', function() {
   return gulp.src([
         'js/main.js'
      ])
      .pipe(include())
      .on('error', console.log)
      .pipe(uglify())
      .pipe(rename({
         suffix: ".min"
      }))
      .pipe(gulp.dest('js'))
      .pipe(browserSync.stream({ match: '**/*.js' }));
});

gulp.task('code', function() {
   return gulp.src([
         '**/*.{php, html}'
      ])
      .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function() {
   browserSync.init({
      watch: true,
      server: "./",
   });
});


// Watch
gulp.task('watch', gulp.parallel('code', 'compileSass', 'createJsLibs', 'compressJs', 'browserSync', function startWatching() {
   gulp.watch('./sass/**/*.{css,sass,scss}', gulp.parallel('compileSass'));
   gulp.watch(['./js/main.js'], gulp.parallel('compressJs'));
   gulp.watch('**/*.{php,html}', gulp.parallel('code')).on('change', browserSync.reload);
}));

// Default Gulp function
gulp.task('default', gulp.parallel('watch'));