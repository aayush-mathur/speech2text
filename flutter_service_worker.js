'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "518054e3e89e5d5e1da1f4b5a3655f8b",
"/": "518054e3e89e5d5e1da1f4b5a3655f8b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "bfad896ec1a5c513599d6a2ae772023b",
"assets/images/beach.jpg": "785edc2ab55745ca40337ed3614f48a0",
"assets/images/kitchen.jpg": "d75e9e35de241021c3f6e8351d2a5ce6",
"assets/images/tree.jpg": "fc080f5fffc5f2105e63ed5ad83bfd83",
"assets/images/fantasy.jpg": "879ec0c8aa9fc4e480f53334604899ec",
"assets/images/mountains.jpg": "cdaf00758a615d7847f7868847f3a53c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/NOTICES": "f68e2956f66a65d8fd7fba41cce12312",
"README.md": "b2f5ff47436671b6e533d8dc3614845d",
"app.js": "69600d13986edc68b1af4844b42cb498",
"main.dart.js": "72376f5fe80108347672c9eccfd0b79f",
".git/COMMIT_EDITMSG": "c6566f64461986ffe46c913e76644b70",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/logs/refs/remotes/origin/master": "75ff043541516ab3ee8857bea8d625df",
".git/logs/refs/heads/master": "b9165db016b47101ed95f3efd6c63841",
".git/logs/HEAD": "b9165db016b47101ed95f3efd6c63841",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/master": "14c111492b2389ecbcc9d1e1535ecf59",
".git/refs/heads/master": "14c111492b2389ecbcc9d1e1535ecf59",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/config": "ed2c133bdfd5520d86e3e12e83e236c0",
".git/objects/25/e921cb64621cb5eff12bc6653cbb7961ca6fde": "5e2e4914fce3f4949b643d08bb4c2474",
".git/objects/e2/dcda20703651b89744b6bc86cb7873ec911f3f": "d753011a6435a5849c5ccb2e769f2aa1",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4b/cac8c56d1c2c22cb2eea4a3138068ee6674f6a": "4908104ba83c6fc3a145672cb21f8134",
".git/objects/47/5306ad8f1980a4e9c1d5508be8aae88bc514af": "6f6fe3297dadadffe70852efdd18a04e",
".git/objects/50/6ad3e7e2599fa279396edf1e211659e2d9967c": "42aaafacf819e6c87a50390671b31c3e",
".git/objects/5f/103b0bce479afa3952b320248594456072d513": "c893031ffcde943f57670c1f44fbe7ad",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/2f/00fd7965d58782ac77dbeb397f559e4b40c9f6": "8ecc6539905917adb32affb5325428a3",
".git/objects/4a/b37f397e93103c9e702f2e5faa53fb13153df3": "530bc05465c840a2e83e8f27547f1086",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f6/dd685768ea63cab4a4177e41e262058f9969dc": "db9bedc2da5c8d210948c725bddc8794",
".git/objects/a6/0639f5857ea5697c8acfe23797af0a4739c96e": "daf4fd7855e05df8e7993e267bbc8479",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/7a/b91751a0e9ff5f22c48ed33354d7eb0b1a5476": "a6c0a1235f158f3b09fd72a52fab1e09",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/24/6bf527f4b526c6b146f2f0af5d8d818510a781": "ae37e925e1518bb470d76145ffd2c450",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/1c658fa3672c81f6c0ef23d36f9f31c0eb55fb": "082d31eb7bb656fe16718d577f8ae7f9",
".git/objects/f7/04c28428c424c24c96e35b0898ec9107887774": "ca6a1c2a38980bb96de29386ba28d950",
".git/objects/a3/c3ac4c4512658530ac219c396034240f5a9767": "c121019901d101bdacc88ff206a3b8e9",
".git/objects/17/21b29dc9770d90a8019e4c8e40c72fbc8730ae": "ac895177734b555e040efea96b603785",
".git/objects/a9/f5ced65c18aa5fa83cffb7fd81a34699892db3": "087152f42dc634aa5e8ca58754a8fef2",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/03/8db976dff98c5c10dd0a4eda32985f3c17c238": "b5550a08af81a23c12def6231516f11e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6c/8adf2da860d4ef7dfd6ba3adfdba0ffcf74ade": "164f6bd04d304e1d076d6e74fdec0996",
".git/objects/01/a5ff5b3a3ff5d1bdcd1721b07c6484292bf4c0": "3fb426896408e3aee1f19a3d82755776",
".git/index": "ab50c81b912b2dbdcf75f046af4eedee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "884a0b64bf077861f5b79e0d1580b6f3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
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
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
