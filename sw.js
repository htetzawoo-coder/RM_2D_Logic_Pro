const CACHE='rm2d-v146b1-manual-set-market';
const ASSETS=['./','./index.html','./manifest.json','./vendor/bootstrap.min.css','./favicon-32x32.png','./apple-touch-icon.png','./icon-144x144.png','./icon-192x192.png','./icon-512x512.png','./maskable-icon-192x192.png','./maskable-icon-512x512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(caches.match(event.request).then(res=>res||fetch(event.request).catch(()=>event.request.mode==='navigate'?caches.match('./index.html'):Response.error())));});
