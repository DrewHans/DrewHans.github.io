/* --- service worker --- */

// install event
// fired when sw install is successfully completed
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("cache-v3").then(function(cache) {
      return cache.addAll([
        "/assets/images/404.gif",
        "/assets/images/dh-icon.bmp",
        "/assets/images/dh-icon-196.png",
        "/assets/images/drewhans.jpg"
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
            /* Optional: add files to cache when fetched from network

            // clone the fetched resource stream and save it to cache
            let responseStreamClone = response.clone();
            caches.open("cache-v3").then(function(cache) {
              cache.put(event.request, responseStreamClone);
            });

            */
            console.log("sw.js fetch called.");
            console.log("- event.request: " + event.request.url);
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
  let cacheWhitelist = ["cache-v3"];
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
