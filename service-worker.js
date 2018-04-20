/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25fda381e6adb17ad0de37e63e41646a"
  },
  {
    "url": "assets/css/7.styles.54c989c2.css",
    "revision": "ede0122f2808113b56501b4124d5ec88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.b53f8779.js",
    "revision": "8218a60d22f109a0fc1a54aeeaf7a3ec"
  },
  {
    "url": "assets/js/1.17ef3eff.js",
    "revision": "beee040435e80d47fb07224854ccf0fc"
  },
  {
    "url": "assets/js/2.13e043af.js",
    "revision": "682f14c20d8924d810c62d504c9e699c"
  },
  {
    "url": "assets/js/3.5e32b520.js",
    "revision": "45ca331c66ecbcc19ca4807f1256cbed"
  },
  {
    "url": "assets/js/4.88b73648.js",
    "revision": "08d860837d7c8a8b8c5a5c1dc9d30d38"
  },
  {
    "url": "assets/js/5.71ef9514.js",
    "revision": "d647597aa31d757f0309c451f64131cd"
  },
  {
    "url": "assets/js/6.daf4e992.js",
    "revision": "6b87c675e34cf438976dd7aa4b2c19e3"
  },
  {
    "url": "assets/js/app.865b82b3.js",
    "revision": "cf0aabb5c2a7c74b0015e37aaad091e1"
  },
  {
    "url": "guide/zh-CN/ActionSheet.html",
    "revision": "3d63a17c7d143b8c3cd7402b26eb6b3c"
  },
  {
    "url": "guide/zh-CN/GettingStarted.html",
    "revision": "87487b1513b2dda47d555e68ed79414a"
  },
  {
    "url": "guide/zh-CN/InfiniteScroll.html",
    "revision": "002f65a009acdb45f5e4ab1532991151"
  },
  {
    "url": "guide/zh-CN/Masker.html",
    "revision": "cc492733448bb281643a630bbae86af8"
  },
  {
    "url": "guide/zh-CN/Swipe.html",
    "revision": "de8f194df24d4dcde35189e664bad2e5"
  },
  {
    "url": "guide/zh-CN/Toast.html",
    "revision": "f15a9672dab04cd130fa49083bf830f9"
  },
  {
    "url": "hero.png",
    "revision": "606925906c21b60638ae64061edfcdb0"
  },
  {
    "url": "index.html",
    "revision": "d2cf83b0ef3b040e23a79fbcd102e127"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
