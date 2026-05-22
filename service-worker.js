const CACHE_NAME = 'motosys-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e guarda os arquivos essenciais no cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Ativa o SW e limpa caches antigos se houver
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Responde às requisições puxando do cache ou buscando na rede
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});