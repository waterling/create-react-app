
var paths = require('./paths');
var appPackage  = require(paths.appPackageJson);

function getBuildTargetOpts(target) {
  var outpath = paths.appBuild;
  var jsExts = [];

  if (target) {
    if (!appPackage.targets) {
      throw new Error('Targets is not defined in package json');  
    }

    var targOpts = appPackage.targets[target];
    if (!targOpts) {
      throw new Error('Target "' + target + '"" is not defined in package json');
    }
    outpath = targOpts.outpath || paths.appBuild + '_' + target;
    jsExts = targOpts.jsExts || ['.' + target + '.js'];
  }

  var opts = {
    outpath: outpath,
    jsExts: jsExts,
  }

  return opts;
}

module.exports = getBuildTargetOpts;