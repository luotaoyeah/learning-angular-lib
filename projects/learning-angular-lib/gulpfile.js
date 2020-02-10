'use strict';

const gulp = require('gulp');

function copyToAPP(cb) {
  gulp.src('dist/**/*.*').pipe(gulp.dest('../../../learning-angular/node_modules/@luotao/learning-angular-lib'));
  cb();
}

exports.copyToAPP = copyToAPP;
