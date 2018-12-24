var fs = require('fs');

fs.ensureDirSync = function (dir) {
  if (!fs.existsSync(dir)) {
    dir.split(path.sep).reduce(function (currentPath, folder) {
      currentPath += folder + path.sep;
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
      return currentPath;
    }, '');
  }
};

const sourcePath = 'proguard-app.txt'
const destinationPath = 'platforms/android/app/src/main/proguard-app.txt'

var contents = fs.readFileSync(sourcePath).toString();
var folder = destinationPath.substring(0, destinationPath.lastIndexOf('/'));
fs.ensureDirSync(folder);
fs.writeFileSync(destinationPath, contents);
