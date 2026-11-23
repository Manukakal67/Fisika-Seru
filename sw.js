/* Service worker Fisika Seru: menyimpan semua file aplikasi agar bisa dibuka tanpa internet.
   Naikkan VERSI setiap kali isi aplikasi diubah, supaya HP mengunduh versi terbaru. */
const VERSI = 'fisika-seru-v2-1';
const FILE = [
    "./",
    "css/style.css",
    "css/tema.css",
    "css/uji.css",
    "data/benda-tegar.js",
    "data/dinamika-fluida.js",
    "data/dinamika.js",
    "data/elastisitas-shm.js",
    "data/kinematika.js",
    "data/momentum.js",
    "data/relativitas.js",
    "data/statika-fluida.js",
    "data/teori-kinetik.js",
    "data/termodinamika.js",
    "data/uji/internasional.js",
    "data/uji/osk.js",
    "data/uji/osn.js",
    "data/usaha-energi.js",
    "data/vektor.js",
    "ikon/apple-touch-icon.png",
    "ikon/favicon-48.png",
    "ikon/ikon-192.png",
    "ikon/ikon-512.png",
    "ikon/ikon-maskable-192.png",
    "ikon/ikon-maskable-512.png",
    "index.html",
    "js/app.js",
    "js/kuis.js",
    "js/progres.js",
    "js/sim-benda-tegar.js",
    "js/sim-dinamika-fluida.js",
    "js/sim-dinamika.js",
    "js/sim-elastisitas-shm.js",
    "js/sim-momentum.js",
    "js/sim-relativitas.js",
    "js/sim-statika-fluida.js",
    "js/sim-teori-kinetik.js",
    "js/sim-termodinamika.js",
    "js/sim-usaha-energi.js",
    "js/sim-vektor.js",
    "js/simulasi.js",
    "js/uji.js",
    "js/util.js",
    "lib/katex/auto-render.min.js",
    "lib/katex/fonts/KaTeX_AMS-Regular.woff2",
    "lib/katex/fonts/KaTeX_Caligraphic-Bold.woff2",
    "lib/katex/fonts/KaTeX_Caligraphic-Regular.woff2",
    "lib/katex/fonts/KaTeX_Fraktur-Bold.woff2",
    "lib/katex/fonts/KaTeX_Fraktur-Regular.woff2",
    "lib/katex/fonts/KaTeX_Main-Bold.woff2",
    "lib/katex/fonts/KaTeX_Main-BoldItalic.woff2",
    "lib/katex/fonts/KaTeX_Main-Italic.woff2",
    "lib/katex/fonts/KaTeX_Main-Regular.woff2",
    "lib/katex/fonts/KaTeX_Math-BoldItalic.woff2",
    "lib/katex/fonts/KaTeX_Math-Italic.woff2",
    "lib/katex/fonts/KaTeX_SansSerif-Bold.woff2",
    "lib/katex/fonts/KaTeX_SansSerif-Italic.woff2",
    "lib/katex/fonts/KaTeX_SansSerif-Regular.woff2",
    "lib/katex/fonts/KaTeX_Script-Regular.woff2",
    "lib/katex/fonts/KaTeX_Size1-Regular.woff2",
    "lib/katex/fonts/KaTeX_Size2-Regular.woff2",
    "lib/katex/fonts/KaTeX_Size3-Regular.woff2",
    "lib/katex/fonts/KaTeX_Size4-Regular.woff2",
    "lib/katex/fonts/KaTeX_Typewriter-Regular.woff2",
    "lib/katex/katex.min.css",
    "lib/katex/katex.min.js",
    "manifest.webmanifest",
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSI).then((c) => c.addAll(FILE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== VERSI).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => hit || fetch(e.request).then((res) => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const salin = res.clone();
        caches.open(VERSI).then((c) => c.put(e.request, salin));
      }
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
