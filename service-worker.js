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
    "revision": "a3ada661d4818ebb945fc556775c4397"
  },
  {
    "url": "assets/css/8.styles.f3935539.css",
    "revision": "ede0122f2808113b56501b4124d5ec88"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.22a5bc4e.js",
    "revision": "e7fdf6b3d9358cd15b42d256ced3ff5c"
  },
  {
    "url": "assets/js/1.26e1a1e7.js",
    "revision": "79afd7f9f03848dbf984e91846173691"
  },
  {
    "url": "assets/js/2.c05c723d.js",
    "revision": "cbbba28e6c50b77341964368f58074e7"
  },
  {
    "url": "assets/js/3.e6e9bd0d.js",
    "revision": "8e878e01874e555d94f3e0baf499f85b"
  },
  {
    "url": "assets/js/4.88b73648.js",
    "revision": "08d860837d7c8a8b8c5a5c1dc9d30d38"
  },
  {
    "url": "assets/js/5.d8906059.js",
    "revision": "f17b664a3c580be23cfbdc05863ebd45"
  },
  {
    "url": "assets/js/6.49b715d9.js",
    "revision": "cd177c0efb96d7a6722aeafe8ad50c45"
  },
  {
    "url": "assets/js/7.930146e9.js",
    "revision": "886d2c603a1b40ca011a8d7091ca360e"
  },
  {
    "url": "assets/js/app.94ffa603.js",
    "revision": "f51b6e4ad32692407088927877ea1940"
  },
  {
    "url": "guide/zh-CN/ActionSheet.html",
    "revision": "59d44193f38eb645503b9d19e7ba5b8b"
  },
  {
    "url": "guide/zh-CN/Dialog.html",
    "revision": "4b363a081ff4c9b5d51e895a85c820a6"
  },
  {
    "url": "guide/zh-CN/GettingStarted.html",
    "revision": "de4f664b49232500d252f9e5c48cd99a"
  },
  {
    "url": "guide/zh-CN/InfiniteScroll.html",
    "revision": "3294a1568aa900fd635cbce9acd2664f"
  },
  {
    "url": "guide/zh-CN/Masker.html",
    "revision": "cf470e97803452002ae211ee1db7153c"
  },
  {
    "url": "guide/zh-CN/Swipe.html",
    "revision": "e77c3c4b5ff8dbf6016f86d29c184066"
  },
  {
    "url": "guide/zh-CN/Toast.html",
    "revision": "9ea403e07250ff13d5679771e3687439"
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
    "revision": "9197c591b4101066c3dcd5204516d6a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
