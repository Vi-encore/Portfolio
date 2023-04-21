const staticDevCoffee = "dev-coffee-site-v1";
const assets = [
  "/",
  "./index.html",
  "./css/index.css",
  // "./scss/style.scss",
  "./js/index.js",
  "./manifest/icon-192x192.png",
  "./manifest/icon-256x256.png",
  "./manifest/icon-384x384.png",
  "./manifest/icon-512x512.png",
  "./img/calculator.png",
  "./img/dark.png",
  "./img/en-flag.png",
  "./img/favicon-big.png",
  "./img/favicon.ico",
  "./img/JS-Download.png",
  "./img/landing.png",
  "./img/light.png",
  "./img/me-photo.png",
  "./img/ua-flag.png",
  "./img/cat.jpg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      // location.reload(true);
      // cache.reload();
      cache.addAll(assets);
      // console.log(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
