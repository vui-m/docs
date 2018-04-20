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
    "revision": "4f92384c796cd3fe7fefa24afeed6cf9"
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
    "url": "assets/js/6.dd5b6efa.js",
    "revision": "bd59819d87f5181ed9c5fb572bcb5146"
  },
  {
    "url": "assets/js/app.cd18619b.js",
    "revision": "9a29057463abc64d02fbf7b2826cf8c8"
  },
  {
    "url": "guide/zh-CN/ActionSheet.html",
    "revision": "03ab8f7047293c41fc32fa72f4bc0c53"
  },
  {
    "url": "guide/zh-CN/GettingStarted.html",
    "revision": "3d5d32e90c2835179378f1d2f9e7aaba"
  },
  {
    "url": "guide/zh-CN/InfiniteScroll.html",
    "revision": "8550cadbf737523b88fca910b5faf064"
  },
  {
    "url": "guide/zh-CN/Masker.html",
    "revision": "cb677340013103edd470a9015aea7798"
  },
  {
    "url": "guide/zh-CN/Swipe.html",
    "revision": "58def825d90e9f469b62a48c17a66b7a"
  },
  {
    "url": "guide/zh-CN/Toast.html",
    "revision": "5afc2af59405293ca46f0ea0596e14f0"
  },
  {
    "url": "hero-1.png",
    "revision": "891d93c66ceff77dfe4676ab9357bfdd"
  },
  {
    "url": "hero-m.png",
    "revision": "606925906c21b60638ae64061edfcdb0"
  },
  {
    "url": "hero.png",
    "revision": "2310257a5c75d7ec2e1f8b0e02806904"
  },
  {
    "url": "index.html",
    "revision": "1b6f6d63a46f6ba7033deaccfa94aba1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
