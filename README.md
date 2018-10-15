This is a CRA fork that I use for my projects.  You can use it, too.

# CRA WITH SAUCE
Add some SAUCEsomeness to your CRAwesomeness, supporting:
* Monorepos -- transpile other packages in your monorepo
* App variants -- react native -like source file overrides by extension, e.g. MyComponent.ios.js, but configurable

#### Disclaimer
It's a much better idea to use the [official CRA](https://github.com/facebook/create-react-app) unless you are extremely adventurous or desperate.

#### Goals
* Trail official CRA releases
* Add useful features that aren't yet supported by official CRA
* Transition to official CRA features as they become available
* Die when official CRA supports all features

#### Getting Started
In an existing CRA app that uses react-scripts:
* ```yarn remove react-scripts```, then ```yarn add @bradfordlemley/react-scripts```
* ```@bradfordlemley/react-scripts``` uses the same versioning as ```react-scripts```, except that the patch version is x100, e.g., ```@bradfordlemley/react-scripts@2.0.401``` is based on ```react-scripts@2.0.4```  (This allows several versions based on a single ```react-scripts``` release, but means ```@bradfordlemley\react-scripts``` itself is not semantically versioned.)

#### Additional Features
##### Monorepo / Source Code Sharing
   * See [Sharing Components in Monorepo]( https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/template/README.md#sharing-components-in-a-monorepo)
   * On [RS 2.0 roadmap](https://github.com/facebook/create-react-app/issues/3815), [merged](https://github.com/facebook/create-react-app/pull/3741), [pre-released](https://github.com/facebook/create-react-app/issues/3815#issuecomment-363631534)
   * Unfortunately, this was reverted from the official CRA 2.0.

##### App Variants
This feature can be used for producing slight differences in an app, e.g. to support an admin variant of the app or a hybrid version of the app.
```
app/
  package.json:
    "devDependencies": {
      "@bradfordlemley/react-scripts": "2.0.402"
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
      "build": "react-scripts build", // standard build
      "build:android": "TARGET=android react-scripts build",  // build android
      "build:ios": "TARGET=ios react-scripts build" // build ios
    }
  src/
    App.js
      import comp1 from './comp1';
      import comp2 from './comp2';
    comp1.js  // standard build
    comp1.android.js // used for TARGET=android build
    comp1.ios.js     // used for TARGET=ios build
    comp2.js         // standard build
    comp2.cor.js     // used for both ios and android builds
  public/
    index.html // standard build
    index.cor.html // TARGET=ios build
  build/ // build output for standard build
  build_android/  // build output for TARGET=android
  build_ios/  // build output for TARGET=ios
```

#### Other Forks and Extensions
* [custom-react-scripts](https://github.com/kitze/custom-react-scripts)
* [react-app-rewire-babel-loader](https://github.com/dashed/react-app-rewire-babel-loader)
