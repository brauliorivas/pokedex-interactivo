import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
const VERSION = 'v1';
let APIS = [];

for (let i = 1; i < 899; i++) {
    APIS.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return response.status == 200 ? cache.put(request, response) : new Promise((resolve,reject) => resolve('Resolved'));
}

async function precache() {
    const cache = await caches.open(VERSION);
    cache.addAll(APIS);
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION);
    const response = await cache.match(request);
    return response || fetch(request);
}

self.addEventListener('install', event => {
    event.waitUntil(precache());
})

self.addEventListener('fetch', event => {
    const request = event.request;

    if (request.method !== 'GET') {
        return;
    }

    event.respondWith(cachedResponse(request)); 

    event.waitUntil(updateCache(request));
})

