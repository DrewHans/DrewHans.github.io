/* --- service worker --- */

// changing CACHENAME value will trigger a cache update
const CACHENAME = "cache-2022-04-13-v1";

// never cache these resources, they change too frequently
const URLDENYLIST = [
  "drewhans.github.io/",
  "drewhans.github.io/index.html",
  "drewhans.github.io/manifest.json",
  "drewhans.github.io/sw.js",
  "drewhans.github.io/assets/javascript/darkmode.js",
  "drewhans.github.io/assets/javascript/main.js",
  "drewhans.github.io/assets/javascript/register-sw.js",
  "drewhans.github.io/assets/stylesheets/darkmode.css",
  "drewhans.github.io/assets/stylesheets/main.css",
  "drewhans.github.io/pages/about/",
  "drewhans.github.io/pages/about/index.html",
  "drewhans.github.io/pages/projects/",
  "drewhans.github.io/pages/projects/index.html"
];

// install event
// fired when sw install is successfully completed
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHENAME).then(function(cache) {
      return cache.addAll([
        "/assets/images/404.gif"
      ]);
    })
  );
});

// fetch event
// fires every time any resource controlled by sw is fetched
self.addEventListener("fetch", function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) {
      // resource is in cache, return it
      return response;
    }

    // resource is not in cache, request it from the network
    return fetch(event.request)
      .then(function(response) {
        let resourceurl = event.request.url
          .replace("http://", "")
          .replace("https://", "");

        if (URLDENYLIST.indexOf(resourceurl) === -1) {
          // resource is not blacklisted & should be put in cache
          let responseStreamClone = response.clone();
          caches.open(CACHENAME).then(function(cache) {
            cache.put(event.request, responseStreamClone);
          });
        }

        // return the fetched resource
        return response;
      })
      .catch(function() {
        // network is not available, provide a default fallback resource
        return caches.match("/assets/images/404.gif");
      });
  }));
});

// activate event
// fires when updated sw.js takes control from old sw.js after update
self.addEventListener("activate", function(event) {
  let cacheWhitelist = [CACHENAME];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // cache is not whitelisted & should be deleted
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
