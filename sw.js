/* --- service worker --- */

const CACHENAME = "cache-v2019-05-27";

// never cache these resources, they change too frequently
const URLBLACKLIST = [
  "drewhans555.github.io/",
  "drewhans555.github.io/index.html",
  "drewhans555.github.io/manifest.json",
  "drewhans555.github.io/sw.js",
  "drewhans555.github.io/assets/javascript/main.js",
  "drewhans555.github.io/assets/javascript/register-sw.js",
  "drewhans555.github.io/assets/stylesheets/main.css",
  "drewhans555.github.io/pages/about/",
  "drewhans555.github.io/pages/about/index.html",
  "drewhans555.github.io/pages/projects/",
  "drewhans555.github.io/pages/projects/index.html"
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
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response !== undefined) {
        // resource is in cache, return it
        return response;
      } else {
        // resource is not in cache, request it from the network
        return fetch(event.request)
          .then(function(response) {
            let resourceurl = event.request.url
              .replace("http://", "")
              .replace("https://", "");

            if (URLBLACKLIST.indexOf(resourceurl) === -1) {
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
      }
    })
  );
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
