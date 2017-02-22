
var path = require('path');
var paths = require('./paths');
var appPackage  = require(paths.appPackageJson);

function replaceBase(fpath, newbase) {
  return path.join(path.dirname(fpath), newbase);
}

function getBuildTargetOpts(target) {
  var outpath = paths.appBuild;
  var jsExts = [];
  var appHtml = paths.appHtml;
  var appIndexJs = paths.appIndexJs;

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
    if (targOpts.appHtml) {
      appHtml = replaceBase(appHtml, targOpts.appHtml);
    }
    if (targOpts.appIndexJs) {
      appIndexJs = replaceBase(appIndexJs, targOpts.appIndexJs);
    }
  }

  var opts = {
    outpath: outpath,
    appHtml: appHtml,
    appIndexJs: appIndexJs,
    jsExts: jsExts,
  }

  return opts;
}

module.exports = getBuildTargetOpts;