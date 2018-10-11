# react-scripts -> plus

This is a fork of [Create React App](https://github.com/facebookincubator/create-react-app)'s react-scripts.

See [github repo](https://github.com/bradfordlemley/create-react-app) for more info.

# TL;DR

This provides `react-scripts-plus`, a replacement for `react-scripts`.

It is nearly identical to react-scripts, but adds some [extra features](#extra-features) not yet available in the standard react-scripts.

# Disclaimer

It's a much better idea to use the [official CRA](https://github.com/facebook/create-react-app) react-scripts unless you are extremely adventurous or desperate.

# Aims

- trail official CRA releases
- add useful features that aren't yet supported by official CRA
- transition to official CRA features as they become available
- die when official CRA supports all features

# Getting Started

In an existing CRA app that uses react-scripts:

- `yarn add @bradfordlemley/react-scripts --exact --dev`
  - This won't overwrite the standard react-scripts, but you'll probably only be able to have react-scripts or @bradfordlemley/react-scripts, not both, because they likely include conflicting versions of jest, so:
  - `yarn remove react-scripts`
- Replace standard `react-scripts` calls with `react-scripts-plus`, e.g.:
  - "build": "react-scripts-plus build"

# Extra Features

- Monorepo / Source Code Sharing
  - See [Sharing Components in Monorepo](https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#sharing-components-in-a-monorepo)
  - On [RS 2.0 roadmap](https://github.com/facebook/create-react-app/issues/3815), [merged](https://github.com/facebook/create-react-app/pull/3741), [pre-released](https://github.com/facebook/create-react-app/issues/3815#issuecomment-363631534)
- App Variants
  - this can be used for producing slight differences in an app, e.g. to support an admin variant of the app or a hybrid version of the app.

```
app/
  package.json:
    "devDependencies": {
      "@bradfordlemley/react-scripts": "^2.0.0-plus.11"
    },
    "targets": {
      "ios": {   <-- configure ios variant
        "jsExts": [
          ".ios.js",
          ".cor.js"
        ],
        "appHtml": "index.cor.html"
      },
      "android": {  <-- configure android variant
        "jsExts": [
          ".android.js",
          ".cor.js"
        ],
        "appHtml": "index.cor.html"
      },
    },
    "scripts": {
      "build": "react-scripts-plus build", <-- standard build
      "build:android": "TARGET=android react-scripts-plus build",  <-- build android hybrid
      "build:ios": "TARGET=ios react-scripts-plus build"  <-- build ios hybrid
    }
  src/
    comp1.js  <-- standard build
    comp1.android.js <-- TARGET=android build
    comp1.cor.js <-- fallback for both ios and android builds
    comp1.ios.js <-- TARGET=ios build
  public/
    index.html <-- standard build
    index.cor.html <-- ios and android builds
  build/ <-- standard build output
  build_android/  <-- output for TARGET=android build
  build_ios/  <-- output for TARGET=ios build
```
