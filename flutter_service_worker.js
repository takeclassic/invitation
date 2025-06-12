'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4c8c8dcea1c16278bd143ba23addc8a5",
"version.json": "2aa3c57100564158890f8d71e4f523a9",
"splash/img/light-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/dark-1x.gif": "1aa0202c99d9672a7e16a25720db46a8",
"splash/img/dark-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/dark-3x.png": "28ea726b2f6208d070a5ecfb555a80ac",
"splash/img/light-4x.png": "ca4091b55c7e88f56fa7cfb58cc0d1dd",
"splash/img/light-1x.gif": "1aa0202c99d9672a7e16a25720db46a8",
"splash/img/dark-2x.png": "a05816164f51c9f149c5c4f989a0152d",
"splash/img/light-2x.gif": "3d495936cf10d93c160f26bd948e5f64",
"splash/img/dark-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-4x.gif": "b123089b5eeabd7c96c08959bd3d0aa4",
"splash/img/light-3x.gif": "d5683d5d15482a07d25eae6435c36f79",
"splash/img/dark-3x.gif": "d5683d5d15482a07d25eae6435c36f79",
"splash/img/light-4x.gif": "b123089b5eeabd7c96c08959bd3d0aa4",
"splash/img/light-1x.png": "186c56b04a8c6bd7e8f84106b40786ec",
"splash/img/dark-2x.gif": "3d495936cf10d93c160f26bd948e5f64",
"index.html": "2bed904787d3c1fcac157465ae0763b1",
"/": "2bed904787d3c1fcac157465ae0763b1",
"main.dart.js": "ca4e6c0ba9ae32ba8e2113f735239599",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "73a61c925c76f6a0909e3e962b2f9adf",
"assets/map.html": "c9ba3e13299ba8a0c130874e63d9865d",
"assets/AssetManifest.json": "5a1e2e7fff0e07c3edb936890f5e79c3",
"assets/NOTICES": "009282809e89c7391821c46ead858f0d",
"assets/FontManifest.json": "3cb9dbd6c54df540ab658113eafbdfb9",
"assets/AssetManifest.bin.json": "900faacf3df5b9ae347a048550b49891",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "72a721440de5f4525e45366fdd20251c",
"assets/fonts/MaterialIcons-Regular.otf": "1ec31aa71b57bde8cfac4485c7a2fa6f",
"assets/assets/images/thumbnail_13.jpg": "e09e594c7ae477cda9b1a468faace81f",
"assets/assets/images/thumbnail_9.jpg": "f26b09bf9a90daadfcf5746b7816678b",
"assets/assets/images/thumbnail_8.jpg": "4ae8c5fc5146b4a3d5c579b2ef0bcb40",
"assets/assets/images/thumbnail_12.jpg": "8bc6bc25fde90dcae0114f30c66934f7",
"assets/assets/images/thumbnail_10.jpg": "ee4e3c871b11d6a928a3696d8e008ff0",
"assets/assets/images/thumbnail_11.jpg": "5f1bcd8d38d805b06131ab92906fb108",
"assets/assets/images/flower1.png": "f528ed459f370c42fa11bda224d78ad8",
"assets/assets/images/thumbnail_15.jpg": "d1f5c517a00ff13c0cb49b8a8c44629b",
"assets/assets/images/naver_icon.png": "76285da67acdeaeb82c41119c81130ce",
"assets/assets/images/mail.png": "3b7b51b1df874a470fece74bd070f3fa",
"assets/assets/images/thumbnail_14.jpg": "a999ac525e866233a631d7dd03c1b4b5",
"assets/assets/images/8.jpg": "edddb86925f2234ce64f988794940b9a",
"assets/assets/images/promise.jpg": "753227df0f51e58724957dfeb297f481",
"assets/assets/images/9.jpg": "b12271e4895053b1f587cc57c3113182",
"assets/assets/images/14.jpg": "0386cfbaa49c8bbc2aab5f2066b5f5d7",
"assets/assets/images/15.jpg": "75910325fd5a7ccd5b68c2d8d8a27826",
"assets/assets/images/family.jpg": "e45ebc927b0a1448291c660034edccba",
"assets/assets/images/letter.png": "7f86b90b95f63ca8ac0843712843c67a",
"assets/assets/images/12.jpg": "f14df7e6e98f5bca6fa51b555ac40449",
"assets/assets/images/loading.gif": "92156aaac22d1d9974808ad9670881cb",
"assets/assets/images/13.jpg": "7d1526fbc3aaf870995ed0e854c24fa3",
"assets/assets/images/11.jpg": "62e98f685e4fbc61459f9b5503818a00",
"assets/assets/images/10.jpg": "b97f7dd75bc9972c30a8359a43bece9a",
"assets/assets/images/load.gif": "609a49efb7fa72a48ba193aaada287bf",
"assets/assets/images/kakaonavi_icon.png": "92bfea26ac50d96940782ff08b1e0f3f",
"assets/assets/images/bubu.jpg": "079e793773327f3e53f381e07d133ea4",
"assets/assets/images/4.jpg": "79a9262bc559207e467e0dcf73c03e45",
"assets/assets/images/thumbnail_1.jpg": "e5e1b118325b638da570b72c5a477c09",
"assets/assets/images/buffet_1.jpg": "f19965c12d8c37dca8f91fe136539a20",
"assets/assets/images/5.jpg": "01c5ae607c218acb8894ebb290faf198",
"assets/assets/images/7.jpg": "cc3728978b6c99394bb4db560b49aff5",
"assets/assets/images/thumbnail_3.jpg": "6585005e35fb18f028cb1a9ab27a0247",
"assets/assets/images/photobooth.jpg": "b3428468e2d02990968ad8bc8e12304c",
"assets/assets/images/thumbnail_2.jpg": "7c077e215f25bb7ef5e22c624476612f",
"assets/assets/images/6.jpg": "b7bb9f9d9995e29071c4a41894477901",
"assets/assets/images/2.jpg": "2f02ddc778c837d561fb82b6f5e2b595",
"assets/assets/images/thumbnail_6.jpg": "9af5df77a809f9c9977e47783e65018a",
"assets/assets/images/paper-plane.png": "e594586e4846c06f98878ffe0adfbc31",
"assets/assets/images/loveletter.jpeg": "31b799ae0c0d5f30803111c42f3cc870",
"assets/assets/images/thumbnail_7.jpg": "6c3328ea7d0261ae0c52e449ea23fd1e",
"assets/assets/images/3.jpg": "660e7942cd4584ae6c8c06f93702eeea",
"assets/assets/images/1.jpg": "7bea965bb71e4c1bc713bc39b95c0dd4",
"assets/assets/images/thumbnail_5.jpg": "cc09a4b61a3e7cee63fe78d2af69eca5",
"assets/assets/images/tmap_icon.jpeg": "76731d07f90ca8c92123903d9f849131",
"assets/assets/images/thumbnail_4.jpg": "49a617ac2579eba07617fb5cd9b16045",
"assets/assets/fonts/42dotSans-SemiBold.ttf": "ef64f5264184ddf3c058658b21cb442d",
"assets/assets/fonts/42dotSans-Regular.ttf": "3fcb5f08666f813b30b6c747c8105ee0",
"assets/assets/fonts/GowunDodum.ttf": "7b97b0ecc1dff537f516227c5d68d37c",
"assets/assets/fonts/PlaywriteAUSA-Regular.ttf": "bd45087c37105053d5167a685da75471",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
