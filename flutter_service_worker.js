'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "103468b890a3cf396d875205aca3e39a",
"index.html": "f8eafd08b93e8648c01bff6df38b0f41",
"/": "f8eafd08b93e8648c01bff6df38b0f41",
"firebase-messaging-sw.js": "04b461781e9ad5034508857054d16f85",
"main.dart.js": "a3df78b06cd1d45d1787b58ab8ad32b9",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "555b36f740180f68a96dbe2b37c1a735",
"icons/Icon-192.png": "e125e08c8ae458c1db2a015d80852439",
"icons/Icon-maskable-192.png": "e125e08c8ae458c1db2a015d80852439",
"icons/Icon-maskable-512.png": "0ee8dad75f1e9d47132a8ccfd97eeb1f",
"icons/Icon-512.png": "0ee8dad75f1e9d47132a8ccfd97eeb1f",
"assets/AssetManifest.json": "d8718f6430a36c5c2a75cb7deadc47e4",
"assets/NOTICES": "e636c9d66ed154496f32206095e162b1",
"assets/FontManifest.json": "a5f956bec85c97317c39cd1b3052deb2",
"assets/AssetManifest.bin.json": "50c07a6e88102874141241e9c1ab1d7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "65655cdcc3ebc3c4c596c245e56889cd",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/app_icon.png": "40f03ba57883c8e3c23259ed08135935",
"assets/assets/images/launch_icon.png": "6d7fb80e249e745588c59d0ea8c40421",
"assets/assets/images/warning.svg": "41b8821c0d41d087ebd969d98c89fc9b",
"assets/assets/images/success.svg": "f806908f03b3f8fb5d56e87a7e3fc565",
"assets/assets/images/fintech_back.jpg": "3c11151fa17db41e4151362c7d995646",
"assets/assets/images/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/images/error.svg": "72879ae65b310b143e9d0774202bd870",
"assets/assets/icons/transaction.png": "9b2cbfa99c3103c8d795c757d678919e",
"assets/assets/icons/wallet.png": "2b4dbaef11536ec2399a8ff2cf71b4e9",
"assets/assets/icons/dashboard_icon.png": "8ed263a5bc0f7ea69e21016b8fd39773",
"assets/assets/icons/settings_icon.png": "b828d54764b59241981eec405c9e9f87",
"assets/assets/icons/user.png": "2b7e8312484d0e42c91dcfd612741b54",
"assets/assets/icons/member_icon.svg": "48c107d4c69f4b5d3d870333dc9a6fc0",
"assets/assets/icons/customer-service.png": "8db236036d4de4de4e72a32c109b920d",
"assets/assets/icons/wallet_icon.png": "8d7a98619ac7168f19d609fb10a9f9a4",
"assets/assets/icons/service/dth.svg": "b145832a8bba517a5eb5126c2273df77",
"assets/assets/icons/service/travel.svg": "3dca4c3e29622f1064aaab9efd642384",
"assets/assets/icons/service/bbps.svg": "9a2c507f4a02130a7983420e42905546",
"assets/assets/icons/service/banking.svg": "2511f97c35d686f32fb4978a5c0467d0",
"assets/assets/icons/service/rechage.svg": "0716bc016a49a0c48366e740c18969dd",
"assets/assets/icons/service/fastag.png": "4d15d3917c458ac93a9e788a471fe5e1",
"assets/assets/icons/service/google_pay.svg": "089849a4e2eb26310747beaa516fb729",
"assets/assets/icons/service/prePaid.svg": "5cd086ae59d1b4e1b5468edb20138cc9",
"assets/assets/icons/service/other.svg": "65316e1965bb66b39558b610c26dff70",
"assets/assets/icons/logout_icon.svg": "97e3588ea6a6b45a8f0729c00afabc83",
"assets/assets/icons/services_icon.png": "93fb58c809b248e1e17ad5d87a4d7406",
"assets/assets/fonts/Nunito/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/fonts/Nunito/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/fonts/Nunito/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito/Nunito-LightItalic.ttf": "cdf25a6c9cbb6def64afcc30d3e511b9",
"assets/assets/fonts/Nunito/Nunito-MediumItalic.ttf": "bd282ec988480f875b2f7cb0465ff7fa",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
