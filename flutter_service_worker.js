'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6ae389c3ce7e9e35286fc7f09bc516a3",
"assets/AssetManifest.bin.json": "17170e7f70b0f7aafec8724356c80730",
"assets/AssetManifest.json": "c038770017f783504167228ebc189ae0",
"assets/assets/1.2.jpg": "e15d1f0b92a71cb4947e5dd46b7fcb0f",
"assets/assets/1.4.jpg": "dd4b248a010c1a18880cd2e52cf334a1",
"assets/assets/1.5.jpg": "3fa54d525e98b59ab5e3f2894e029f7c",
"assets/assets/1.jpg": "3fa54d525e98b59ab5e3f2894e029f7c",
"assets/assets/10.1.jpg": "c5474f0db96ffdee24670af8929892f0",
"assets/assets/10.jpg": "137181ee3e397c141e1b5606f66eb928",
"assets/assets/11.jpg": "c70d35718e0403b0c3adc23192fc4107",
"assets/assets/13.jpg": "31d6927515f3c6e9f83c3e135ee9debc",
"assets/assets/14.jpg": "6baccdfd5514c76934ca291eb982f232",
"assets/assets/15.jpg": "0c07d65d16a0592fd593cc26d7eed4fb",
"assets/assets/2.1.jpg": "748fd0821e913176f1bf675b6ef3e28b",
"assets/assets/2.jpg": "08064ae571e427daabf2923ac0d97aae",
"assets/assets/3.4.jpg": "3d8d191c19447563a4ca40726c734eb5",
"assets/assets/3.5.jpg": "3b7fd478c033adf8399460e7128fbf1e",
"assets/assets/3.jpg": "1c7853b582d971734fc96c07e069c7ce",
"assets/assets/4.jpg": "a0883f55b1ae063f354d192655b7ac80",
"assets/assets/5.jpg": "9f0212fe8f957a64ff35b5aa72ad3836",
"assets/assets/6.jpg": "82647bfbb36689891ebdfadd708189e3",
"assets/assets/7.1.jpg": "08064ae571e427daabf2923ac0d97aae",
"assets/assets/7.jpg": "733d14f37e7d689ec7ab9391b27621ab",
"assets/assets/8.jpg": "b23e6f969ea2fa9c2e25e4cfd0dbdc3c",
"assets/assets/9.1.jpg": "602bbc3c96ac0ea24b0a636ee3616bc3",
"assets/assets/9.5.jpg": "a0883f55b1ae063f354d192655b7ac80",
"assets/assets/9.9.jpg": "1c7853b582d971734fc96c07e069c7ce",
"assets/assets/9.jpg": "9d98fb83ee110b4e8d703589386b6d03",
"assets/assets/background/acuarela.jpg": "cde1db6e1750146144a6662c2d101581",
"assets/assets/background/acuarela_vertical.jpg": "94407247341ff4ce74a93f313acdaa5d",
"assets/assets/bbva.png": "db2e0d15bc902ed3e0c5c4b2b5f65601",
"assets/assets/boho1.jpg": "d81aaf1a5c661991accce5d85829e702",
"assets/assets/boho2.jpg": "adf576e9d43c3a662319e34325e98aea",
"assets/assets/boho3.jpg": "d78fd92a228900374823de7456ca4c0e",
"assets/assets/boho4.jpg": "fcfc9433f42e1aa698a4ddaab1388bcf",
"assets/assets/boho5.jpg": "d44eb11d9f1e015f4a21fb2847bce00e",
"assets/assets/church.jpg": "0b8985f72cf55d8a59265f3d8596ad71",
"assets/assets/dress.svg": "4dda8bc65e30d51423ca224b6dc14dd1",
"assets/assets/dressPng.png": "747b102b47c77e9cd7235c0b49dbb62d",
"assets/assets/garden.jpg": "f54161dfa3056ea4c6138318baa304c5",
"assets/assets/holidayInn.jpg": "dabe1baa6f1473181bad55438ba3104b",
"assets/assets/holidayInnExpress.jpg": "6e34681f83485149354bf2a1ff2f4451",
"assets/assets/hosteria.jpg": "0fa767ad77f6c7dfabc01be0f391a134",
"assets/assets/Instagram_icon.png": "c7937384fd9c561238863fe89e7454d0",
"assets/assets/liverpool.png": "2185d61626184ac24d085aeb0ab7b9f6",
"assets/assets/logo_boda.jpg": "3722037173a7afe2c1aca25c707d2737",
"assets/assets/logo_boda.png": "01aec5ca31507766cf00be45fc2e5d01",
"assets/assets/logo_boda_borderless.png": "67cb3cb01c58b1535bbb0cf65ed2eb38",
"assets/assets/logo_boda_borderless2.png": "5a73fc9ddbecf415436f4b29c596e124",
"assets/assets/logo_boda_nombres.png": "847663926156466a7156458620dac125",
"assets/assets/main.jpg": "56220e1c9ad9143ab5f16689cee72ee4",
"assets/assets/main2.jpg": "118ebb80abc85a39dce252eef23c5cc9",
"assets/assets/main3.jpg": "540f4b0527993e6b3c6b0119e90d9f48",
"assets/assets/main4.jpg": "081d19f0f92ab6596da403e981fa3f13",
"assets/assets/suit.svg": "86ff73f8295e835e14692f2e09142817",
"assets/assets/suitPng.png": "1f6074d9f6b381f5becf249d6ce49aad",
"assets/assets/ubicacion.png": "fc016ae5e121218067800ca03d8e8d4d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "87a442d4076ec26d43fb02d2aa1935e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "ffd063c5ddbbe185f778e7e41fdceb31",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "37e104cd24d8874e73fe34335f335853",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "79d88181fec982c2cebe1a425406042c",
"/": "79d88181fec982c2cebe1a425406042c",
"main.dart.js": "d3390260da677f7de25c315a9318dfaa",
"manifest.json": "e8add07f0fa638eadb3c306d597d1dff",
"version.json": "2aa3c57100564158890f8d71e4f523a9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
