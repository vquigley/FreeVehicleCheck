var src = process.argv[2];
var dest = process.argv[3];
var wrench = require('wrench');
var ncp = require('ncp').ncp;
var fs = require('fs');
 
 var errorLog = function (err) {
 if (err) {
   return console.error(err);
 }
};

var stripTrailingSlash = function (str) {
    if(str.substr(-1) === '/') {
        return str.substr(0, str.length - 1);
    }
    return str;
}

var saveFolders = [
    ".git",
    ".gitignore"
];

var tempDir = src + "/tmp";

var copyFolders = [
    ".build",
    "config",
    "controllers",
    "models",
    ".npmignore",
    "index.js",
    "package.json",
    "server.js"
];

wrench.mkdirSyncRecursive(tempDir);
wrench.mkdirSyncRecursive(dest);

wrench.copyDirSyncRecursive(dest, tempDir, {
    forceDelete:true,
    include: function (folder) {
        return (saveFolders.indexOf(folder) > -1);
    }
});

saveFolders.forEach(function (file) {
    var srcPath = src + "/" + file;
    var destPath = dest + "/" + file;
    
    if (fs.lstatSync(srcPath).isDirectory()) {
        wrench.copyDirSyncRecursive(srcPath, destPath, {
            forceDelete:true,
            include: function (folder) {
                return (copyFolders.indexOf(folder) > -1);
            }
        });
    }
    else {
        ncp(srcPath, destPath, errorLog);
    }
});

wrench.copyDirSyncRecursive(tempDir, dest);

wrench.rmdirSyncRecursive(tempDir);