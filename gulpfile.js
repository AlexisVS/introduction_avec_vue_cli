const gulp = require('gulp');
const postcss = require('gulp-postcss');
const autoPrefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const tailwindcss = require('tailwindcss');
const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const concat = require('gulp-concat');
const postcssPresetEnv = require('postcss-preset-env');

var cssSetup = () => {
  var sourcefiles = ['./src/css/*.css', './node_modules/tailwindcss/tailwind.css'];
  var postcssPlugins = [
    postcssPresetEnv(),
    postcssImport,
    tailwindcss,
  ];

  return gulp.src(sourcefiles)
    .pipe(sourcemaps.init())
    .pipe(postcss(postcssPlugins))
    .pipe(cssnano())
    .pipe(concat('app.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css/'));
};


gulp.task('css', cssSetup);

gulp.task('watch', () => {
  gulp.watch(['./tailwind.config.js', './src/css/*.css'], cssSetup);

})