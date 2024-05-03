'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "406097e93c11662880000d8bd253c3df",
"assets/AssetManifest.bin.json": "587e59ef734338e71cc2d5e350249958",
"assets/AssetManifest.json": "df4854c44e9fceef941cdd43bf8df129",
"assets/assets/1.2.jpg": "47fa02f5381a0a6b5343d6fb6d271fca",
"assets/assets/1.4.jpg": "519f83fba8806420e5616ae3a5ef77e6",
"assets/assets/1.5.jpg": "c0c2f094ae4e7b177b9be2e850e70476",
"assets/assets/1.jpg": "c0c2f094ae4e7b177b9be2e850e70476",
"assets/assets/10.1.jpg": "5adefedc3ad26ae572fe9be9395a4117",
"assets/assets/10.jpg": "1f1e81409d6ec549d7148fdd860ccab4",
"assets/assets/11.jpg": "fb08b1bb5f7bcc95f311ac6c1c8f1404",
"assets/assets/13.jpg": "5b895d70a6dbe103ac560b92f2a67393",
"assets/assets/14.jpg": "6965bf786326e7f0918174508cfdf563",
"assets/assets/15.jpg": "1755b1d7f98f76c6b48e8e8f007bc0d3",
"assets/assets/2.1.jpg": "cbe959fd17b5f837c14d329c50fd5cf5",
"assets/assets/2.jpg": "db032903db075591ab254f71ea1779f4",
"assets/assets/3.4.jpg": "7739d66b8797dd68d0907e5688fdc028",
"assets/assets/3.5.jpg": "119eb9f6f2ace9b5da66c3abf3195ab7",
"assets/assets/3.jpg": "383319b2fde42d1e7dc8a227b7cda25d",
"assets/assets/4.jpg": "fa7d81bb3994eedfe01cd802e2eef5d7",
"assets/assets/5.jpg": "20ed71e5fef2b452aa7c0bbd5a85153c",
"assets/assets/6.jpg": "f2d07f02ec79ea73dcc7e8b16576a472",
"assets/assets/7.1.jpg": "db032903db075591ab254f71ea1779f4",
"assets/assets/7.jpg": "845d15afb5d2e6d31b9de7ca3f9ffa7d",
"assets/assets/8.jpg": "870eb894909fd4a3bedeffe4be9f66d2",
"assets/assets/9.1.jpg": "a9bf1f919a8501e9782227d66fe249de",
"assets/assets/9.5.jpg": "fa7d81bb3994eedfe01cd802e2eef5d7",
"assets/assets/9.9.jpg": "383319b2fde42d1e7dc8a227b7cda25d",
"assets/assets/9.jpg": "d60db65185b1203d19881b3e4fab5d45",
"assets/assets/animations/confetti.json": "2efd2fc126bf0dae679bf87f41959b4b",
"assets/assets/animations/rain.json": "0d47b3b0b59168c53084938369c9ba19",
"assets/assets/background/1.jpg": "4ba2f86132b037aa9834a06d30d6fbc5",
"assets/assets/background/2.jpg": "695b04160afc63c672dd57a1f6df3aa7",
"assets/assets/background/3.jpg": "04618cf09f9b561d1346907e801fd2f9",
"assets/assets/background/4.jpg": "ff767f4d5a026f5431275aff4e490f18",
"assets/assets/background/5.jpg": "0692d69bf32e0246aedce98961572e52",
"assets/assets/background/6.jpg": "48c9157ca084ad7bc671f559fc32bb7b",
"assets/assets/background/7.jpg": "a3337baee399f93f9c1b63dd42477f50",
"assets/assets/background/acuarela.jpg": "cde1db6e1750146144a6662c2d101581",
"assets/assets/background/acuarela_vertical.jpg": "94407247341ff4ce74a93f313acdaa5d",
"assets/assets/bbva.png": "db2e0d15bc902ed3e0c5c4b2b5f65601",
"assets/assets/church.jpg": "0b8985f72cf55d8a59265f3d8596ad71",
"assets/assets/dress.svg": "4dda8bc65e30d51423ca224b6dc14dd1",
"assets/assets/dressPng.png": "747b102b47c77e9cd7235c0b49dbb62d",
"assets/assets/garden.jpg": "f54161dfa3056ea4c6138318baa304c5",
"assets/assets/head.jpg": "77e8fd6456dd96e58dcd728cec763c78",
"assets/assets/holidayInn.jpg": "dabe1baa6f1473181bad55438ba3104b",
"assets/assets/holidayInnExpress.jpg": "6e34681f83485149354bf2a1ff2f4451",
"assets/assets/hosteria.jpg": "0fa767ad77f6c7dfabc01be0f391a134",
"assets/assets/Instagram_icon.png": "c7937384fd9c561238863fe89e7454d0",
"assets/assets/liverpool.png": "2185d61626184ac24d085aeb0ab7b9f6",
"assets/assets/logo_boda.png": "01aec5ca31507766cf00be45fc2e5d01",
"assets/assets/logo_boda_borderless.png": "67cb3cb01c58b1535bbb0cf65ed2eb38",
"assets/assets/logo_boda_borderless2.png": "5a73fc9ddbecf415436f4b29c596e124",
"assets/assets/logo_boda_nombres.png": "847663926156466a7156458620dac125",
"assets/assets/main.jpg": "e00a83e19a1efe4f00b7f0608936e25f",
"assets/assets/main2.jpg": "0e4d949350d7cafc487140b919844bc5",
"assets/assets/main3.jpg": "31cb3e1ad43f00353ca06f634e43b5f4",
"assets/assets/main4.jpg": "14deea04af37847d4bb93f2b090e1657",
"assets/assets/suit.svg": "86ff73f8295e835e14692f2e09142817",
"assets/assets/suitPng.png": "1f6074d9f6b381f5becf249d6ce49aad",
"assets/assets/ubicacion.png": "fc016ae5e121218067800ca03d8e8d4d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/NOTICES": "0c86e5153b1545f388b93b79df047e99",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e1647a09b7d8c8b3435aebd7a7208da5",
"/": "e1647a09b7d8c8b3435aebd7a7208da5",
"main.dart.js": "c166f7f188b6a76de067011afa4ef593",
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
