var fs = require('fs');
var path = require('path');
var packageJsonFile = path.resolve(__dirname, '../package.json');
var packageJson = JSON.parse(fs.readFileSync(packageJsonFile, 'utf8'));
var standardVersion = require('standard-version')
var configXmlFile = path.resolve(__dirname, '../config.xml');


console.log('Version before:' + packageJson['version']);
standardVersion({
  noVerify: true,
  infile: 'docs/CHANGELOG.md',
  silent: true
}, function (err) {
  if (err) {
    console.error(`standard-version failed with message: ${err.message}`)
  }
});
console.log('Version after:' + packageJson['version']);