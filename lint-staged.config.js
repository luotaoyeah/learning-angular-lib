module.exports = {
  'projects/common/src/**/*.ts': ['tslint -c projects/common/tslint.json'],
  'projects/common/src/**/*.less': ['npm run common:lint:style'],
  '*.{ts,js,json,html,css,scss,less,md,yml}': ['prettier --write'],
};
