'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "103468b890a3cf396d875205aca3e39a",
"index.html": "92517f097212d10256783ff88cb12fd1",
"/": "92517f097212d10256783ff88cb12fd1",
"firebase-messaging-sw.js": "04b461781e9ad5034508857054d16f85",
"main.dart.js": "1fd37035f454652beae0091438b25f59",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "2ad632a7e6bcceab993ebb0dd4a8ad0b",
"icons/Icon-192.png": "75c731a289a633c35444b7714c73bbef",
"icons/Icon-maskable-192.png": "75c731a289a633c35444b7714c73bbef",
"icons/Icon-maskable-512.png": "9b5d98c63e6f6b6b5d2c85f22af2c561",
"icons/Icon-512.png": "9b5d98c63e6f6b6b5d2c85f22af2c561",
"assets/AssetManifest.json": "1bcd327e8b5fab1aed57d9effec3a854",
"assets/NOTICES": "baaeee64659259aa0ab2da3538207d3d",
"assets/FontManifest.json": "a5f956bec85c97317c39cd1b3052deb2",
"assets/AssetManifest.bin.json": "2c7795e6a78715975c8ecc688818e433",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "9d777f3c484864d9420a76fb32d3a83c",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/app_icon.png": "3723078cc60712c93483ac218dab0df0",
"assets/assets/images/launch_icon.png": "8863c371b13aa953e34eb5a407dd282b",
"assets/assets/images/warning.svg": "41b8821c0d41d087ebd969d98c89fc9b",
"assets/assets/images/success.svg": "f806908f03b3f8fb5d56e87a7e3fc565",
"assets/assets/images/fintech_back.jpg": "3c11151fa17db41e4151362c7d995646",
"assets/assets/images/google.png": "acb6e1dd389cdbf2ec50746e1e7460b9",
"assets/assets/images/error.svg": "72879ae65b310b143e9d0774202bd870",
"assets/assets/icons/news.png": "425dea6d3057e75c65cbd32d41708766",
"assets/assets/icons/employee_management.png": "fe0ec46be564e264da9c2d27664afc41",
"assets/assets/icons/support.png": "7f888d2ca2474c447d0bb8b667c3a66a",
"assets/assets/icons/transaction.png": "9b2cbfa99c3103c8d795c757d678919e",
"assets/assets/icons/wallet.png": "2b4dbaef11536ec2399a8ff2cf71b4e9",
"assets/assets/icons/profile_icon.png": "8dff49985d0d8afa53751d9ba8907aed",
"assets/assets/icons/approve.png": "43149f746f16a26249925a0ab7dc2193",
"assets/assets/icons/reports_icon.png": "fb971ea6667ac2b9a9c00e10db1d53de",
"assets/assets/icons/ecommerce.png": "7463fb320158e2d6dbb9c7370b7fa07f",
"assets/assets/icons/dashboard_icon.png": "8ed263a5bc0f7ea69e21016b8fd39773",
"assets/assets/icons/settings_icon.png": "b828d54764b59241981eec405c9e9f87",
"assets/assets/icons/user.png": "2b7e8312484d0e42c91dcfd612741b54",
"assets/assets/icons/member_icon.svg": "48c107d4c69f4b5d3d870333dc9a6fc0",
"assets/assets/icons/add_profile.png": "c0570c1051f5028f0b94a5be270aad73",
"assets/assets/icons/customer-service.png": "8db236036d4de4de4e72a32c109b920d",
"assets/assets/icons/wallet_icon.png": "8d7a98619ac7168f19d609fb10a9f9a4",
"assets/assets/icons/reject_sccount.png": "0e8ffb11c736885de872731e916650e9",
"assets/assets/icons/transaction_icon.png": "45d3720a089b1a4a058dfed14e65f519",
"assets/assets/icons/logout_icon.png": "c9a5063bd2ea46940de1518ae6cbafea",
"assets/assets/icons/remove.png": "dc8a298218b01cb39958e045e14036f8",
"assets/assets/icons/call.png": "91c5bf318e2109f33be1796a061f0d61",
"assets/assets/icons/service/dth.svg": "b145832a8bba517a5eb5126c2273df77",
"assets/assets/icons/service/travel.svg": "3dca4c3e29622f1064aaab9efd642384",
"assets/assets/icons/service/bbps.svg": "9a2c507f4a02130a7983420e42905546",
"assets/assets/icons/service/banking.svg": "2511f97c35d686f32fb4978a5c0467d0",
"assets/assets/icons/service/rechage.svg": "0716bc016a49a0c48366e740c18969dd",
"assets/assets/icons/service/fastag.png": "4d15d3917c458ac93a9e788a471fe5e1",
"assets/assets/icons/service/google_pay.svg": "089849a4e2eb26310747beaa516fb729",
"assets/assets/icons/service/prePaid.svg": "5cd086ae59d1b4e1b5468edb20138cc9",
"assets/assets/icons/service/other.svg": "65316e1965bb66b39558b610c26dff70",
"assets/assets/icons/pictures.png": "56278c8ca9c9d7d7a75fcef5d8ba83b8",
"assets/assets/icons/add_services.png": "06f14ff55a099d1fd315e2e98685cfee",
"assets/assets/icons/add_kyc_document.png": "80cc22b5bffef573ec2d933bda5aadec",
"assets/assets/icons/chat.png": "629250dbb57fc02a3a48ad17cc0b7e94",
"assets/assets/icons/review_account.png": "fb3683720ad6e14f427f5400f66c10b3",
"assets/assets/icons/services_icon.png": "93fb58c809b248e1e17ad5d87a4d7406",
"assets/assets/icons/no_member.png": "08d2f82c8e99e40e6fc2b79a8aaa62dc",
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
