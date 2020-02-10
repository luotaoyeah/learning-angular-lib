'use strict';

const gulp = require('gulp');

function copyToAPP(cb) {
  gulp.src('dist/**/*.*').pipe(gulp.dest('../'));
  cb();
}

exports.copyToAPP = copyToAPP;
