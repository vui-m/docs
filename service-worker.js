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
    "revision": "ba34f94f4808867b65a1748006a5a4b5"
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
    "url": "assets/js/app.ea865b19.js",
    "revision": "b12beca0bab20002925afc25e2ad92b4"
  },
  {
    "url": "guide/zh-CN/ActionSheet.html",
    "revision": "21bdeade5ffd22a6c313e94cb0504f1f"
  },
  {
    "url": "guide/zh-CN/GettingStarted.html",
    "revision": "1c49bb235a58f9a6886416ab301cf97f"
  },
  {
    "url": "guide/zh-CN/InfiniteScroll.html",
    "revision": "e59986cfaff1a4296305e9288b9ce7a8"
  },
  {
    "url": "guide/zh-CN/Masker.html",
    "revision": "21e5c5abaf9dfc0295bfdf80dd0aa22e"
  },
  {
    "url": "guide/zh-CN/Swipe.html",
    "revision": "6c82dacdf9e405c962afc4c72e8eb2b2"
  },
  {
    "url": "guide/zh-CN/Toast.html",
    "revision": "905eaf2e581e0f0b0fb89b543b898ed2"
  },
  {
    "url": "hero.png",
    "revision": "606925906c21b60638ae64061edfcdb0"
  },
  {
    "url": "index.html",
    "revision": "27eb623692e281d83e197e8bf6223348"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
