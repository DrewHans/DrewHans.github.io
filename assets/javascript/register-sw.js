/* --- register service worker on the site --- */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(function(reg) {
      console.log("Service worker registered. Scope: " + reg.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed. Error: " + err);
    });
}
