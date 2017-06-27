const fs = require('fs');
const path = require('path');
const standardVersion = require('standard-version');
const commit = require('standard-version/lib/lifecycles/commit');
const packageJsonFile = path.resolve(__dirname, '../package.json');
var packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
const configXmlFile = path.resolve(__dirname, '../config.xml');
const loginTsFile = path.resolve(__dirname, '../src/pages/login/login.ts');

var versionBefore = packageJson['version'];
console.log('Version before:',  commit);
standardVersion({ "skip": { "commit": true }, }).then(function succ() {
  packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
  var newVersion = packageJson['version'];
  replaceInFile(configXmlFile, 'id="io.github.imsmobile.app" version="' + versionBefore + '"', 'id="io.github.imsmobile.app" version="' + newVersion + '"');
  replaceInFile(loginTsFile, 'version: string = \'' + versionBefore + '\'', 'version: string = \'' + newVersion + '\'');
  //commit(args, newVersion);
  commit.execCommit(null, newVersion);
});

function replaceInFile(file, searchValue, replaceValue) {
  var content = fs.readFileSync(file, 'utf8');
  var contentReplaced = content.replace(searchValue, replaceValue);
  fs.writeFileSync(file, contentReplaced, 'utf8');

}
