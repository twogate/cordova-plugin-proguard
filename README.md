# cordova-plugin-proguard

> Cordova plugin which activates ProGuard and minification for debug and release builds in your cordova mobile application.

## What is ProGuard?

> ProGuard is the open source optimizer for Java bytecode

You can read more about it on [ProGuard official website](https://www.guardsquare.com/en/proguard) and on [android developer portal](https://developer.android.com/studio/build/shrink-code.html)

## How to use

- If you already have installed [Android Studio](https://developer.android.com/studio/index.html) then seems you already have installed ProGuard on your machine. If no, then  you should download and install it manually from [ProGuard official website](https://www.guardsquare.com/en/proguard).
- ```cordova plugin add cordova-plugin-proguard```
- Then, put your `proguard-app.txt` on to the your cordova project root directory.
  - this command will copy `proguard-app.txt` to `${androidPlatformDirectory}/proguard-app.txt` on `before_build`.

## Customization

You should put `proguard-app.txt` on to the cordova project root directory.
This plugin copies it to the platform directory on `before_build`.

You can also to check out some [Android ProGuard snippets](https://github.com/krschultz/android-proguard-snippets)

## History
 - v1.0.0 - supports Cordova version <7
 - v2.0.0 - supports Cordova version 7+ (thanks to @SujitSingh)
 - v2.1.0 - supports app specifix customization

## License

MIT © [Aleksandr Filatov](https://alfilatov.com)

[npm-url]: https://npmjs.org/package/cordova-plugin-proguard
[npm-image]: https://img.shields.io/npm/v/cordova-plugin-proguard.svg
