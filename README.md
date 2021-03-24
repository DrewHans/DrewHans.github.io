# DrewHans.github.io

[![GitHub][shield-img-license]](LICENSE)
[![Website][shield-img-website]](https://drewhans.github.io/)

My personal hub on the web.

## Notable Features

### Bootstrap Design
Bootstrap websites are ubiquitous, responsive, and mobile friendly by default.

### FontAwesome Icons
FontAwesome provides a large and robust icon set for free. More importantly, using these icons minimizes the number of new graphics that need to be created.

### Static Resource Caching
On your first visit the service worker will cache static resources, such as images and third party css/js files, so that they do not need to be re-downloaded on subsequent visits. This reduces network usage and improves overall site performance.

### Progressive Web App Checklist Compliant
Progressive Web App compliance can by audited with Google Chrome's [Lighthouse](https://github.com/GoogleChrome/lighthouse) 5.0.0.
#### Fast & Reliable
- [x] Page load is fast enough on mobile networks
- [x] Pages respond with a 200 when offline
- [x] start_url responds with a 200 when offline
#### Installable
- [x] Uses HTTPS
- [x] Registers a service worker that controls page and start_url
- [x] Web app manifest meets the installability requirements
#### PWA Optimized
- [x] Redirects HTTP traffic to HTTPS
- [x] Configured for a custom splash screen
- [x] Sets an address-bar theme color
- [x] Content is sized correctly for the viewport
- [x] Has a <meta name="viewport"> tag with width or initial-scale
- [x] Contains some content when JavaScript is not available
- [x] Provides a valid apple-touch-icon

## Third Party Resources:
* [Bootstrap](https://getbootstrap.com/) 4.3.1
* [FontAwesome](https://fontawesome.com/) 5.8.2
* [Google Fonts](https://fonts.google.com/specimen/Roboto) - Roboto
* [jQuery](https://jquery.com/) 3.4.1
* [Popper.js](https://popper.js.org/) 1.14.7

[shield-img-license]: https://img.shields.io/github/license/DrewHans/DrewHans.github.io.svg
[shield-img-website]: https://img.shields.io/website/https/drewhans.github.io.svg
