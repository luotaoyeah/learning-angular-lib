import fs from 'fs';

// ----------------------------------------------------------------------------------------------------
// 自动更新所有包的版本号
// ----------------------------------------------------------------------------------------------------

import('../package.json').then(({ default: json }) => {
  const type = process.argv[2];
  let version = json.version;

  switch (type) {
    //region 更新 major
    case 'major':
      version = version
        .split('.')
        .map((value, index) => (index === 0 ? Number(value) + 1 : 0))
        .join('.');
      break;
    //endregion
    //region 更新 minor
    case 'minor':
      version = version
        .split('.')
        .map((value, index) => (index === 0 ? value : index === 1 ? Number(value) + 1 : 0))
        .join('.');
      break;
    //endregion
    //region 更新 patch
    case 'patch':
      version = version
        .split('.')
        .map((value, index) => (index === 0 ? value : index === 1 ? value : Number(value) + 1))
        .join('.');
      break;
    //endregion
    default:
      throw new Error('INVALID SEMVER TYPE');
  }

  //region @kengic/ng.common
  import('../package.json').then(({ default: json }) => {
    json.version = version;
    fs.writeFile('./package.json', `${JSON.stringify(json, null, 2)}\n`, {}, (e) => {
      if (e) {
        console.log(e);
      }
    });
  });
  import('../package-lock.json').then(({ default: json }) => {
    json.version = version;
    json.packages[''].version = version;
    fs.writeFile('./package-lock.json', `${JSON.stringify(json, null, 2)}\n`, {}, (e) => {
      if (e) {
        console.log(e);
      }
    });
  });
  //endregion
});

export {};
