const urlsToCache = [
    "/",
    "images/apple-touch-icon.png",
    "images/icon-192-maskable.png",
    "images/icon-192.png",
    "images/icon-512-maskable.png",
    "images/icon-512.png",
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });
  