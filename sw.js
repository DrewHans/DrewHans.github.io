/* --- service worker --- */

// install event
// fired when sw install is successfully completed
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("cache-v1").then(function(cache) {
      return cache.addAll([
        "/assets/images/404.gif",
        "/assets/images/dh-icon.bmp",
        "/assets/images/dh-icon-196.png",
        "/assets/images/drewhans.jpg",
        "/assets/javascript/main.js",
        "/assets/javascript/register-sw.js",
        "/assets/stylesheets/main.css",
        "/pages/about/index.html",
        "/pages/projects/index.html",
        "/index.html"
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
            // save the fetched resource to cache
            caches.open("cache-v1").then(function(cache) {
              cache.put(event.request, response.clone());
            });
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
