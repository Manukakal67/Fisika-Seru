# Fisika Seru

Aplikasi web belajar fisika berbahasa Indonesia untuk pelajar dan mahasiswa tahun pertama.
HTML, CSS, dan JavaScript murni (tanpa framework dan tanpa build). Rumus memakai KaTeX yang sudah
disertakan di `lib/katex`, jadi aplikasi juga jalan tanpa internet.

## Cara membuka
- Ekstrak folder, lalu buka `index.html` di browser (langsung dari file, tanpa server).
- Atau unggah seluruh folder ke GitHub Pages / hosting statis lain.

## Isi
12 bab, 280 soal latihan (4 tingkat: Pemula, Menengah, Lanjut, Expert), 14 simulasi interaktif,
dan fitur **Uji Pemahaman** berisi 60 soal olimpiade lintas bab (lihat bagian di bawah).

| No | Bab | Soal |
|----|-----|------|
| 1 | Vektor | 20 |
| 2 | Kinematika gerak (gerak lurus dan gerak melingkar) | 40 |
| 3 | Dinamika gerak | 20 |
| 4 | Usaha dan energi | 20 |
| 5 | Momentum dan impuls | 20 |
| 6 | Elastisitas dan gerak harmonik sederhana | 40 |
| 7 | Dinamika benda tegar | 20 |
| 8 | Statika fluida | 20 |
| 9 | Dinamika fluida | 20 |
| 10 | Termodinamika | 20 |
| 11 | Teori kinetik gas | 20 |
| 12 | Teori relativitas khusus | 20 |

Progres tersimpan di browser (localStorage) dan tidak dikirim ke mana pun.

## Uji Pemahaman
Menu terpisah dari Latihan (sidebar paling atas dan kartu di beranda, rute `#/uji`). Soal tingkat
olimpiade dari berbagai bab diacak dalam satu sesi, memakai teknik belajar dari buku *Make It Stick*:

- **Interleaving**: soal lintas bab diacak tanpa label bab. Urutan disusun agar dua soal berturut-turut
  tidak berasal dari bab yang sama.
- **Retrieval practice**: pengguna menjawab, memilih tingkat keyakinan (Yakin / Ragu / Menebak), dan
  menebak bab yang dipakai, baru setelah itu hasil, konsep kunci, dan pembahasan dibuka.
- **Spacing (kotak Leitner)**: soal salah, atau benar tapi "Menebak", masuk kotak 1 dan muncul lagi di
  sesi berikutnya. Jawaban benar menaikkan kotak (kotak 2: tiap 2 sesi, kotak 3: tiap 4 sesi).
- **Refleksi**: akurasi identifikasi bab dihitung per soal, dan halaman hasil menampilkan peta kekuatan
  per bab serta daftar soal yang akan diulang.

| Tingkat | Soal | Ciri |
|---------|------|------|
| OSK | 20 | Dua konsep dari bab berbeda, langkah lugas |
| OSN | 20 | Multi-langkah, sering tiga konsep sekaligus |
| Internasional | 20 | Gaya IPhO/APhO: penurunan rumus, integral, persamaan diferensial, optimasi |

Semua soal ditulis orisinal dengan gaya olimpiade, bukan salinan soal resmi. Setiap jawaban sudah
dihitung ulang dengan Python; soal Internasional diperiksa dua cara (analitik dan numerik).
Kolom `referensi` sengaja dikosongkan (`null`) agar tidak ada rujukan yang dikarang. Isi kolom itu
hanya dengan nama dan tautan resmi soal yang benar-benar bergaya serupa.

Penyimpanan Uji Pemahaman terpisah dari progres latihan:
- `localStorage` `fisika-uji-v1`: kotak Leitner tiap soal, statistik per bab, riwayat 20 sesi terakhir.
- `sessionStorage` `fisika-uji-sesi-v1`: sesi yang sedang berjalan (refresh halaman melanjutkan sesi).
- `sessionStorage` `fisika-uji-hasil-v1`: ringkasan sesi terakhir untuk halaman hasil.

Untuk mengatur ulang data Uji Pemahaman, jalankan di console browser:
`localStorage.removeItem('fisika-uji-v1')`.

### Format soal Uji Pemahaman
File `data/uji/<tingkat>.js` memakai pola:
```js
window.DATA_UJI = window.DATA_UJI || [];
window.DATA_UJI.push({
  id: 'osn-07',
  tingkat: 'osn',                       // 'osk' | 'osn' | 'internasional'
  bab: ['momentum', 'benda-tegar'],     // id bab dari daftar BAB di js/app.js (minimal 2)
  konsep: ['...', '...'],
  tipe: 'angka',                        // 'pg' | 'angka'
  pertanyaan: '...', pilihan: null,     // pilihan: array string untuk 'pg'
  jawaban: 2.4,                         // indeks (pg) atau angka
  satuan: 'rad/s', toleransi: 0.02,     // toleransi relatif, hanya untuk 'angka'
  petunjuk: ['...'], pembahasan: ['...'],
  referensi: null                       // atau { nama: '...', url: '...' }
});
```
Menambah soal cukup dengan menambah objek baru (id harus unik). Menambah tingkat baru: buat file
`data/uji/<tingkat>.js`, tambahkan tag `<script>` di `index.html` sebelum `js/uji.js`, dan tambahkan
tingkat itu ke daftar `TINGKAT` di `js/uji.js`.

## Struktur folder
```
index.html
css/        tema.css (warna terang/gelap), style.css (tata letak), uji.css (Uji Pemahaman)
js/         app.js (router dan halaman), kuis.js (mesin latihan), progres.js, util.js,
            simulasi.js (registri + simulasi kinematika), sim-<bab>.js (simulasi tiap bab),
            uji.js (mesin Uji Pemahaman)
data/       satu file per bab: materi dan soal
data/uji/   soal Uji Pemahaman per tingkat: osk.js, osn.js, internasional.js
lib/katex/  KaTeX (rumus matematika)
```

## Format data bab
Tiap file `data/<bab>.js` memakai pola:
```js
window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['<id-bab>'] = { id, judul, subbab: [ ... ], soal: [ ... ] };
```
Tipe soal: `pg` (pilihan ganda), `angka` (angka + satuan, dengan toleransi relatif), `isian` (kata kunci).
Di dalam string JavaScript, backslash LaTeX ditulis ganda, misalnya `'\\frac{a}{b}'`.

## Menambah bab baru
1. Buat `data/<bab>.js` dan `js/sim-<bab>.js`.
2. Tambahkan dua baris `<script>` di `index.html`.
3. Tambahkan bab itu ke daftar `BAB` di `js/app.js` bila belum ada.

## Install di Android (dengan ikon, seperti aplikasi biasa)
Aplikasi ini sudah berupa PWA (ada `manifest.webmanifest`, `sw.js`, dan ikon di folder `ikon/`).
Syaratnya harus dibuka dari alamat **https** (bukan dari file langsung).

1. Unggah seluruh isi folder ke hosting statis, misalnya GitHub Pages
   (buat repo → unggah semua file → Settings → Pages → Branch `main` → Save).
2. Buka alamatnya di **Chrome Android**.
3. Ketuk menu ⋮ → **Instal aplikasi** (atau **Tambahkan ke layar utama**).
4. Ikon Fisika Seru muncul di layar utama, terbuka layar penuh, dan tetap jalan tanpa internet.

Setiap kali isi aplikasi diubah, naikkan nilai `VERSI` di `sw.js` agar HP mengambil versi terbaru.

Ingin file APK sungguhan (misalnya untuk Play Store)? Masukkan alamat https tadi ke pwabuilder.com,
pilih Android, lalu unduh paket APK/AAB yang dibuatkan.
