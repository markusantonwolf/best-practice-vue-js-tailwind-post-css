/* eslint-disable no-undef */
// if (workbox) {}

self.addEventListener('install', function(event) {
  self.skipWaiting()

  event.waitUntil(console.info('install skipWaiting'))
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response
      }
      return fetch(event.request)
    })
  )
})
