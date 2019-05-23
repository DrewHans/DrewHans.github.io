/* --- register service worker on the site --- */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function() {
      console.log("Service worker registered");
    })
    .catch(function(err) {
      console.log("Service worker registration failed: ", err);
    });
}
