# Checklist Pengujian Manual: Fisika Seru + Uji Pemahaman

Centang `[x]` setiap butir yang lolos. Uji minimal di dua tempat: laptop (Chrome/Edge/Firefox)
dan HP. Uji sekali dengan membuka `index.html` langsung dari file, dan sekali dari GitHub Pages
(jika sudah di-hosting).

Sebelum mulai, kosongkan data lama agar hasilnya bersih. Buka console browser (F12), lalu jalankan:
`localStorage.clear(); sessionStorage.clear();`, kemudian muat ulang halaman.

## A. Fitur lama tetap berjalan (regresi)
- [ ] Beranda menampilkan 12 kartu bab dan progres masing-masing.
- [ ] Sidebar menampilkan 12 bab, dan bab yang sedang dibuka tersorot.
- [ ] Halaman Materi satu bab: rumus tampil rapi (tidak ada teks merah atau `$...$` mentah).
- [ ] Simulasi di halaman Materi bergerak dan slider-nya merespons.
- [ ] Latihan: pilih tingkat, jawab satu soal PG dan satu soal angka, Periksa, pembahasan muncul.
- [ ] Petunjuk bertahap di Latihan bisa dibuka satu per satu.
- [ ] Selesaikan satu sesi Latihan: skor tersimpan, dan progres bab di sidebar bertambah.
- [ ] Tombol tema 🌙/☀️ mengganti terang/gelap, dan pilihan tetap tersimpan setelah refresh.
- [ ] Di HP: tombol ☰ membuka dan menutup sidebar.

## B. Akses Uji Pemahaman
- [ ] Ada menu "🧠 Uji Pemahaman" di paling atas sidebar, dan tersorot saat dibuka.
- [ ] Ada kartu "🧠 Uji Pemahaman" di beranda.
- [ ] Halaman pengaturan menampilkan OSK (20), OSN (20), Internasional (20).

## C. Pengaturan sesi
- [ ] Memilih tingkat dan jumlah soal (5/10/15) mengubah tombol yang aktif.
- [ ] Menghapus centang "Semua bab" lalu memilih 2–3 bab mengubah jumlah "soal tersedia".
- [ ] Jika tidak ada soal untuk pilihan bab, tombol Mulai berubah menjadi "Belum ada soal".
- [ ] Mulai sesi membuka halaman soal.

## D. Alur satu soal (retrieval practice)
- [ ] Label bab TIDAK terlihat sebelum hasil dibuka.
- [ ] Klik "Buka hasil" tanpa menjawab muncul pesan "Isi jawabanmu dulu" / "Pilih salah satu jawaban dulu".
- [ ] Tanpa memilih keyakinan muncul pesan "Pilih dulu seberapa yakin kamu".
- [ ] Tanpa mencentang bab muncul pesan "Centang minimal satu bab".
- [ ] Setelah lengkap: tampil benar/salah, jawaban benar, konsep kunci, bab asal, persen identifikasi,
      info kotak/pengulangan, dan pembahasan.
- [ ] Jawaban angka dengan koma (`2,4`) dan titik (`2.4`) sama-sama diterima.
- [ ] Satuan dengan variasi penulisan diterima (misal `m/s²` dan `m/s^2`, `MN·m` dan `MNm`).
- [ ] Angka benar tetapi satuan salah memberi pesan "Angkanya sudah tepat, tetapi satuannya belum sesuai".
- [ ] Rumus di soal, petunjuk, dan pembahasan tampil rapi, juga di layar HP.

## E. Interleaving dan sesi
- [ ] Dalam satu sesi, soal berasal dari berbagai bab yang berbeda-beda.
- [ ] Refresh halaman di tengah sesi: sesi berlanjut di soal yang sama, skor tidak hilang.
- [ ] Kembali ke pengaturan di tengah sesi: muncul kartu "Sesi belum selesai" dengan tombol Lanjutkan dan Buang sesi.
- [ ] Menutup tab lalu membuka lagi: sesi yang belum selesai hilang (memang disimpan per tab),
      tetapi jawaban yang sudah dikirim tetap tercatat.

## F. Halaman hasil
- [ ] Menampilkan skor, persen benar, dan akurasi identifikasi konsep.
- [ ] Muncul catatan jika ada jawaban "yakin tapi salah" atau "benar karena menebak".
- [ ] Peta kekuatan per bab tampil dengan batang progres.
- [ ] Daftar "Diulang di sesi berikutnya" berisi soal yang salah atau ditebak.
- [ ] Tombol "Sesi baru" kembali ke pengaturan.

## G. Spacing (kotak Leitner)
- [ ] Setelah sesi pertama, halaman pengaturan menampilkan "🔁 N soal menunggu diulang" sesuai jumlah
      soal yang salah atau ditebak.
- [ ] Di sesi berikutnya, soal-soal itu muncul lebih dulu.
- [ ] Soal yang dijawab benar dengan "Yakin" tidak langsung muncul di sesi berikutnya (kecuali soal
      lain sudah habis).
- [ ] Riwayat 5 sesi terakhir tampil di halaman pengaturan.

## H. Tampilan
- [ ] Mode gelap: semua halaman Uji Pemahaman terbaca jelas (kartu, tombol, peta bab).
- [ ] Di HP (lebar ±390 px): tidak ada geser ke samping, dan centang bab tersusun satu kolom.
- [ ] Peta kekuatan di HP: nama bab di atas, batang di bawahnya.

## I. Isi soal (cek acak)
- [ ] Pilih 2–3 soal dari tiap tingkat, kerjakan sendiri, dan cocokkan dengan pembahasan.
- [ ] Laporkan soal yang teksnya ambigu, angkanya terasa janggal, atau pembahasannya sulit diikuti.

Catatan hasil pengujian:

| Tanggal | Perangkat / browser | Butir yang gagal | Keterangan |
|---------|--------------------|------------------|------------|
|         |                    |                  |            |
