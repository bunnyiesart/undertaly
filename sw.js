self.addEventListener('install', function(e) {
    self.skipWaiting();
});

self.addEventListener('activate', function(e) {
    self.registration.unregister()
        .then(function() {
            return self.clients.matchAll();
        })
        .then(function(clients) {
            clients.forEach(client => {
                if (client.navigate) {
                    client.navigate(client.url);
                }
            });
        });
});

self.addEventListener('fetch', function(e) {
    e.respondWith(fetch(e.request));
});