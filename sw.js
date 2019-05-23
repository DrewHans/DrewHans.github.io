/* --- service worker --- */

// install event
// fired when an install is successfully completed
self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("cache-v1").then(function(cache) {
      return cache.addAll([
        "/assets/images/404.gif",
        "/assets/images/avidemux-idx2-file-maker-screenshot.png",
        "/assets/images/card-avidemux-idx2-file-maker.png",
        "/assets/images/card-kana2romaji-file-renamer.jpg",
        "/assets/images/card-lissajous-curves.png",
        "/assets/images/card-neuronmancer.jpg",
        "/assets/images/card-pr0ca1.png",
        "/assets/images/card-reblogged.png",
        "/assets/images/card-untanglingracket.png",
        "/assets/images/dh-icon.bmp",
        "/assets/images/dh-icon-196.png",
        "/assets/images/dh-icon-512.png",
        "/assets/images/drewhans.jpg",
        "/assets/images/kana2romaji-file-renamer-screenshot.png",
        "/assets/images/lissajous-curves-screenshot.png",
        "/assets/images/neuronmancer_presentation.jpg",
        "/assets/images/neuronmancer-screenshot.jpg",
        "/assets/images/pr0ca1-screenshot.png",
        "/assets/images/reblogged-screenshot.png",
        "/assets/images/untanglingracket-screenshot.png",
        "/assets/images/yoga.jpg"
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
            /* Optional step:
            // save the fetched resource to cache
            let responseClone = response.clone();
            caches.open("cache-v1").then(function(cache) {
              cache.put(event.request, responseClone);
            });*/

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
