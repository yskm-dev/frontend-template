module.exports = {
  gulp: require('gulp'),
  pug: require('gulp-pug'),
  plumber: require('gulp-plumber'),
  gulpif: require('gulp-if'),
  sourcemaps: require('gulp-sourcemaps'),
  log: require('fancy-log'),
  browserSync: require('browser-sync'),
  ejs: require('gulp-ejs'),
  htmlMinifier: require('gulp-html-minifier'),
  webpack: require('webpack'),
  webpackStream: require('webpack-stream'),
  sass: require('gulp-sass')(require('sass')),
  sassGlob: require('gulp-sass-glob-use-forward'),
  postcss: require('gulp-postcss'),
  autoprefixer: require('autoprefixer'),
  csswring: require('csswring'),
  del: require('del'),
  cache: require('gulp-cache'),
  rename: require('gulp-rename')
};
