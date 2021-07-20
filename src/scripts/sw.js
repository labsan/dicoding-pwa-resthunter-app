import 'regenerator-runtime';
import CACHE_HELPER from './utils/cache-helper';

const {assets} = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  event.waitUntil(CACHE_HELPER.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CACHE_HELPER.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CACHE_HELPER.revalidateCache(event.request));
});
