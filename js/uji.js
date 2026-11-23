/* Uji Pemahaman: soal olimpiade lintas bab dengan teknik dari "Make It Stick".
   - Interleaving : soal dari bab berbeda diacak, label bab disembunyikan.
   - Retrieval    : jawab dulu, pilih keyakinan, tebak bab, baru hasil dibuka.
   - Spacing      : kotak Leitner 1-3; soal salah/menebak muncul lagi lebih cepat.
   Rute: #/uji (pengaturan), #/uji/sesi, #/uji/hasil.
   Penyimpanan: localStorage "fisika-uji-v1" (jangka panjang),
                sessionStorage "fisika-uji-sesi-v1" (sesi berjalan) dan
                "fisika-uji-hasil-v1" (ringkasan sesi terakhir). */
(function () {
  'use strict';

  const KEY = 'fisika-uji-v1';
  const KEY_SESI = 'fisika-uji-sesi-v1';
  const KEY_HASIL = 'fisika-uji-hasil-v1';

  const TINGKAT = [
    { id: 'osk', label: 'OSK', ket: 'Tingkat kabupaten/kota' },
    { id: 'osn', label: 'OSN', ket: 'Tingkat nasional' },
    { id: 'internasional', label: 'Internasional', ket: 'Gaya IPhO/APhO' }
  ];
  const JUMLAH = [5, 10, 15];
  const YAKIN = [
    { id: 'yakin', label: 'Yakin' },
    { id: 'ragu', label: 'Ragu' },
    { id: 'menebak', label: 'Menebak' }
  ];
  // Kotak Leitner: soal muncul lagi setelah sekian sesi.
  const INTERVAL = { 1: 1, 2: 2, 3: 4 };

  // Pilihan pengaturan terakhir (hanya selama halaman terbuka).
  let pilihan = { tingkat: 'osk', jumlah: 5, bab: null };
  // Sedang menampilkan konfirmasi "Buang sesi?" di halaman pengaturan.
  let konfirmBuang = false;

  function U() { return window.U; }
  // Handler di #konten hanya boleh bekerja selama rute Uji Pemahaman aktif.
  function ujiAktif() { return /^#\/uji(\/|$)/.test(location.hash); }
  function semuaSoal() { return window.DATA_UJI || []; }
  function soalById(id) { return semuaSoal().find(function (q) { return q.id === id; }) || null; }
  function infoTingkat(id) { return TINGKAT.find(function (t) { return t.id === id; }) || TINGKAT[0]; }

  // Daftar bab mengikuti urutan pemuatan data bab di index.html.
  function daftarBab() {
    const d = window.DATA_BAB || {};
    return Object.keys(d).map(function (id) { return { id: id, judul: d[id].judul }; });
  }
  function judulBab(id) {
    const d = (window.DATA_BAB || {})[id];
    return d ? d.judul : id;
  }

  // ---------- Penyimpanan ----------

  function baru() { return { versi: 1, sesiKe: 0, soal: {}, perBab: {}, riwayat: [] }; }

  function muat() {
    let st;
    try {
      const raw = window.localStorage.getItem(KEY);
      st = raw ? JSON.parse(raw) : baru();
    } catch (e) { st = baru(); }
    if (!st || typeof st !== 'object') st = baru();
    if (typeof st.sesiKe !== 'number') st.sesiKe = 0;
    if (!st.soal || typeof st.soal !== 'object') st.soal = {};
    if (!st.perBab || typeof st.perBab !== 'object') st.perBab = {};
    if (!Array.isArray(st.riwayat)) st.riwayat = [];
    return st;
  }
  function simpan(st) {
    try { window.localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* abaikan */ }
  }

  function ambilSS(k) {
    try { const r = window.sessionStorage.getItem(k); return r ? JSON.parse(r) : null; } catch (e) { return null; }
  }
  function taruhSS(k, v) {
    try {
      if (v == null) window.sessionStorage.removeItem(k);
      else window.sessionStorage.setItem(k, JSON.stringify(v));
    } catch (e) { /* abaikan */ }
  }

  // ---------- Algoritma ----------

  function acak(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function jatuhTempo(rek, sesiKe) {
    if (!rek) return false;
    const jeda = INTERVAL[rek.kotak] || 1;
    return sesiKe - rek.sesiTerakhir >= jeda;
  }

  function poolSoal(tingkat, babDipilih) {
    return semuaSoal().filter(function (q) {
      if (q.tingkat !== tingkat) return false;
      if (!babDipilih) return true;
      return (q.bab || []).some(function (b) { return babDipilih.indexOf(b) !== -1; });
    });
  }

  function hitungTempo(pool, st) {
    const sesiBerikut = st.sesiKe + 1;
    return pool.filter(function (q) { return jatuhTempo(st.soal[q.id], sesiBerikut); }).length;
  }

  // Urutan isi: jatuh tempo, belum pernah dikerjakan, lalu sisanya.
  function pilihSoal(pool, n, st, sesiKe) {
    const tempo = [], belum = [], sisa = [];
    pool.forEach(function (q) {
      const rek = st.soal[q.id];
      if (!rek) belum.push(q);
      else if (jatuhTempo(rek, sesiKe)) tempo.push(q);
      else sisa.push(q);
    });
    return acak(tempo).concat(acak(belum), acak(sisa)).slice(0, n);
  }

  function irisan(a, b) {
    return (a || []).filter(function (x) { return (b || []).indexOf(x) !== -1; }).length;
  }

  // Interleaving: soal berikutnya dipilih yang babnya paling sedikit beririsan
  // dengan soal sebelumnya (idealnya nol). Susunan serakah bisa "terjebak" di
  // akhir, jadi dicoba beberapa kali dan diambil susunan dengan irisan terkecil.
  function susunInterleave(daftar) {
    let terbaik = null, nilaiTerbaik = Infinity;
    for (let c = 0; c < 40 && nilaiTerbaik > 0; c++) {
      const s = susunSerakah(daftar);
      let nilai = 0;
      for (let i = 1; i < s.length; i++) nilai += irisan(s[i - 1].bab, s[i].bab);
      if (nilai < nilaiTerbaik) { nilaiTerbaik = nilai; terbaik = s; }
    }
    return terbaik || [];
  }

  function susunSerakah(daftar) {
    const sisa = acak(daftar);
    const hasil = [];
    while (sisa.length) {
      const prev = hasil.length ? hasil[hasil.length - 1].bab : [];
      let terbaik = 0, skorTerbaik = Infinity;
      for (let i = 0; i < sisa.length; i++) {
        const s = irisan(prev, sisa[i].bab);
        if (s < skorTerbaik) { skorTerbaik = s; terbaik = i; if (s === 0) break; }
      }
      hasil.push(sisa.splice(terbaik, 1)[0]);
    }
    return hasil;
  }

  // Skor identifikasi bab: irisan dibagi gabungan (0..1).
  function skorIdentifikasi(dipilih, benar) {
    const gab = {};
    (dipilih || []).concat(benar || []).forEach(function (x) { gab[x] = true; });
    const n = Object.keys(gab).length;
    return n === 0 ? 0 : irisan(dipilih, benar) / n;
  }

  function kotakBaru(kotakLama, benar, yakin) {
    if (!benar) return 1;
    if (yakin === 'menebak') return 1;
    return Math.min(3, (kotakLama || 1) + 1);
  }

  // Catat satu jawaban langsung ke localStorage, agar tidak hilang bila sesi ditinggal.
  function catatJawaban(q, benar, yakin, sesiKe) {
    const st = muat();
    const lama = st.soal[q.id];
    st.soal[q.id] = {
      kotak: kotakBaru(lama && lama.kotak, benar, yakin),
      sesiTerakhir: sesiKe,
      benar: ((lama && lama.benar) || 0) + (benar ? 1 : 0),
      salah: ((lama && lama.salah) || 0) + (benar ? 0 : 1)
    };
    (q.bab || []).forEach(function (b) {
      const pb = (st.perBab[b] = st.perBab[b] || { benar: 0, total: 0 });
      pb.total++;
      if (benar) pb.benar++;
    });
    simpan(st);
    return st.soal[q.id].kotak;
  }

  // ---------- Halaman: pengaturan ----------

  function halamanPengaturan(konten) {
    const u = U();
    const st = muat();
    const babList = daftarBab();
    const babAktif = pilihan.bab || babList.map(function (b) { return b.id; });
    const pool = poolSoal(pilihan.tingkat, pilihan.bab);
    const tempo = hitungTempo(pool, st);
    const sesiJalan = ambilSS(KEY_SESI);
    const n = Math.min(pilihan.jumlah, pool.length);

    let h = '<a class="kembali" href="#/">← Beranda</a><h1>🧠 Uji Pemahaman</h1>' +
      '<p>Soal tingkat olimpiade dari berbagai bab diacak dalam satu sesi, <strong>tanpa label bab</strong>. ' +
      'Tugasmu bukan hanya menjawab, tetapi juga mengenali konsep mana yang dipakai. ' +
      'Soal yang salah atau ditebak akan muncul lagi di sesi berikutnya.</p>';

    if (!sesiJalan) konfirmBuang = false;
    if (sesiJalan && konfirmBuang) {
      // Konfirmasi di dalam halaman. Tidak memakai window.confirm() karena browser bawaan
      // aplikasi (WebView) sering memblokir dialog dan diam-diam menjawab "Batal".
      h += '<div class="kartu uji-lanjut"><div><strong>Buang sesi ini?</strong><br><small>' +
        'Soal yang belum dijawab dibatalkan. Jawaban yang sudah dikirim tetap tercatat.</small></div>' +
        '<div class="aksi" style="margin:0"><button class="btn utama" data-uji="buang-ya">Ya, buang</button>' +
        '<button class="btn" data-uji="buang-batal">Batal</button></div></div>';
    } else if (sesiJalan) {
      const ti = infoTingkat(sesiJalan.tingkat);
      h += '<div class="kartu uji-lanjut"><div><strong>Sesi belum selesai</strong><br><small>' +
        u.esc(ti.label) + ' · soal ' + (sesiJalan.idx + 1) + '/' + sesiJalan.ids.length + '</small></div>' +
        '<div class="aksi" style="margin:0"><a class="btn utama" href="#/uji/sesi" style="text-decoration:none">Lanjutkan</a>' +
        '<button class="btn" data-uji="buang">Buang sesi</button></div></div>';
    }

    h += '<div class="kartu"><h3>Tingkat</h3><div class="chip-baris">' +
      TINGKAT.map(function (t) {
        const jml = poolSoal(t.id, null).length;
        return '<button class="chip' + (pilihan.tingkat === t.id ? ' aktif' : '') + '" data-tingkat="' + t.id + '">' +
          u.esc(t.label) + ' <small>(' + jml + ')</small></button>';
      }).join('') + '</div><p><small>' + u.esc(infoTingkat(pilihan.tingkat).ket) + '</small></p>';

    h += '<h3>Jumlah soal</h3><div class="chip-baris">' +
      JUMLAH.map(function (j) {
        return '<button class="chip' + (pilihan.jumlah === j ? ' aktif' : '') + '" data-jumlah="' + j + '">' + j + '</button>';
      }).join('') + '</div>';

    h += '<h3>Bab yang diikutkan</h3>' +
      '<label class="uji-cek"><input type="checkbox" data-bab-semua' + (pilihan.bab ? '' : ' checked') + '> Semua bab</label>' +
      '<div class="uji-bab-grid">' + babList.map(function (b) {
        return '<label class="uji-cek"><input type="checkbox" data-bab="' + u.esc(b.id) + '"' +
          (babAktif.indexOf(b.id) !== -1 ? ' checked' : '') + '> ' + u.esc(b.judul) + '</label>';
      }).join('') + '</div>';

    h += '<p class="uji-info">' + pool.length + ' soal tersedia' +
      (tempo > 0 ? ' · 🔁 ' + tempo + ' soal menunggu diulang' : '') +
      (pool.length > 0 && pool.length < pilihan.jumlah ? ' · sesi ini berisi ' + n + ' soal' : '') + '</p>';

    h += '<div class="aksi">' + (pool.length > 0
      ? '<button class="btn utama" data-uji="mulai">Mulai sesi</button>'
      : '<span class="btn" style="opacity:.5">Belum ada soal untuk pilihan ini</span>') + '</div></div>';

    if (st.riwayat.length) {
      h += '<h2>Riwayat terakhir</h2><div class="kartu"><ul class="uji-riwayat">' +
        st.riwayat.slice(-5).reverse().map(function (r) {
          const tgl = new Date(r.tgl);
          return '<li>' + u.esc(tgl.toLocaleDateString('id-ID')) + ' · ' + u.esc(infoTingkat(r.tingkat).label) +
            ' · skor ' + r.skor + '/' + r.total + ' · identifikasi ' + r.akurasiKonsep + '%</li>';
        }).join('') + '</ul></div>';
    }

    konten.innerHTML = h;

    konten.onclick = function (e) {
      if (!ujiAktif()) return;
      const t = e.target.closest('[data-tingkat],[data-jumlah],[data-uji]');
      if (!t) return;
      if (t.hasAttribute('data-tingkat')) pilihan.tingkat = t.getAttribute('data-tingkat');
      else if (t.hasAttribute('data-jumlah')) pilihan.jumlah = Number(t.getAttribute('data-jumlah'));
      else if (t.getAttribute('data-uji') === 'buang') konfirmBuang = true;
      else if (t.getAttribute('data-uji') === 'buang-batal') konfirmBuang = false;
      else if (t.getAttribute('data-uji') === 'buang-ya') {
        taruhSS(KEY_SESI, null);
        konfirmBuang = false;
      } else if (t.getAttribute('data-uji') === 'mulai') { mulaiSesi(); return; }
      halamanPengaturan(konten);
    };
    konten.onchange = function (e) {
      if (!ujiAktif()) return;
      const t = e.target;
      if (!t.hasAttribute('data-bab-semua') && !t.hasAttribute('data-bab')) return;
      if (t.hasAttribute('data-bab-semua')) {
        pilihan.bab = t.checked ? null : [];
      } else if (t.hasAttribute('data-bab')) {
        const dicentang = Array.prototype.map.call(
          konten.querySelectorAll('input[data-bab]:checked'),
          function (x) { return x.getAttribute('data-bab'); });
        pilihan.bab = dicentang.length === babList.length ? null : dicentang;
      }
      halamanPengaturan(konten);
    };
  }

  function mulaiSesi() {
    const st = muat();
    const pool = poolSoal(pilihan.tingkat, pilihan.bab);
    if (!pool.length) return;
    st.sesiKe++;
    simpan(st);
    const dipilih = susunInterleave(pilihSoal(pool, pilihan.jumlah, st, st.sesiKe));
    taruhSS(KEY_SESI, {
      tingkat: pilihan.tingkat,
      sesiKe: st.sesiKe,
      ids: dipilih.map(function (q) { return q.id; }),
      idx: 0,
      jawaban: []
    });
    taruhSS(KEY_HASIL, null);
    location.hash = '#/uji/sesi';
  }

  // ---------- Halaman: sesi ----------

  function halamanSesi(konten) {
    const u = U();
    const sesi = ambilSS(KEY_SESI);
    if (!sesi) { location.hash = '#/uji'; return; }
    // Buang id soal yang sudah tidak ada di data.
    sesi.ids = sesi.ids.filter(function (id) { return !!soalById(id); });
    if (sesi.idx >= sesi.ids.length) { selesaiSesi(sesi); return; }

    const q = soalById(sesi.ids[sesi.idx]);
    const ti = infoTingkat(sesi.tingkat);
    const skor = sesi.jawaban.filter(function (j) { return j.benar; }).length;
    let petunjukTampil = 0;
    let terkirim = false;

    let input = '';
    if (q.tipe === 'pg') {
      input = q.pilihan.map(function (p, i) {
        return '<label class="opsi"><input type="radio" name="pg" value="' + i + '"><span>' +
          String.fromCharCode(65 + i) + '. ' + u.esc(p) + '</span></label>';
      }).join('');
    } else {
      input = '<div class="isian-baris"><input id="inp-jawab" type="text" inputmode="decimal" autocomplete="off" placeholder="Jawaban angka" aria-label="Jawaban angka">' +
        (q.satuan ? '<input id="inp-satuan" type="text" autocomplete="off" placeholder="satuan" aria-label="Satuan">' : '') +
        '</div>';
    }

    const nPetunjuk = (q.petunjuk || []).length;
    konten.innerHTML =
      '<a class="kembali" href="#/uji">← Pengaturan</a><h1>Uji Pemahaman</h1>' +
      '<div class="kuis-kepala"><span>' + u.esc(ti.label) + ' · Soal ' + (sesi.idx + 1) + '/' + sesi.ids.length + '</span>' +
      '<span>Skor: ' + skor + '</span></div>' +
      '<div class="kartu">' +
        '<div class="soal-teks">' + u.esc(q.pertanyaan) + '</div>' +
        input +
        '<div id="petunjuk-area"></div>' +
        '<div class="aksi"><button class="btn" id="btn-petunjuk"' + (nPetunjuk ? '' : ' disabled') + '>💡 Petunjuk (0/' + nPetunjuk + ')</button></div>' +
        '<div class="uji-langkah"><h3>1. Seberapa yakin kamu?</h3><div class="chip-baris" id="pilih-yakin">' +
          YAKIN.map(function (y) { return '<button class="chip" data-yakin="' + y.id + '">' + y.label + '</button>'; }).join('') +
        '</div></div>' +
        '<div class="uji-langkah"><h3>2. Bab apa saja yang kamu pakai?</h3><p><small>Boleh lebih dari satu.</small></p>' +
          '<div class="uji-bab-grid">' + daftarBab().map(function (b) {
            return '<label class="uji-cek"><input type="checkbox" name="bab-tebak" value="' + u.esc(b.id) + '"> ' + u.esc(b.judul) + '</label>';
          }).join('') + '</div></div>' +
        '<div class="aksi"><button class="btn utama" id="btn-buka">Buka hasil</button></div>' +
        '<div id="hasil"></div>' +
      '</div>';
    u.renderMath(konten);

    let yakin = null;
    function el(s) { return konten.querySelector(s); }
    function info(p) { el('#hasil').innerHTML = '<div class="pesan info">' + u.esc(p) + '</div>'; }

    konten.onchange = null;
    konten.onclick = function (e) {
      if (!ujiAktif()) return;
      const y = e.target.closest('[data-yakin]');
      if (y && !terkirim) {
        yakin = y.getAttribute('data-yakin');
        konten.querySelectorAll('[data-yakin]').forEach(function (b) { b.classList.toggle('aktif', b === y); });
      }
    };

    el('#btn-petunjuk').addEventListener('click', function () {
      if (petunjukTampil >= nPetunjuk || terkirim) return;
      petunjukTampil++;
      el('#petunjuk-area').innerHTML = '<div class="petunjuk-kotak">' +
        q.petunjuk.slice(0, petunjukTampil).map(function (p, i) {
          return '<p><strong>Petunjuk ' + (i + 1) + ':</strong> ' + u.esc(p) + '</p>';
        }).join('') + '</div>';
      this.textContent = '💡 Petunjuk (' + petunjukTampil + '/' + nPetunjuk + ')';
      if (petunjukTampil >= nPetunjuk) this.disabled = true;
      u.renderMath(el('#petunjuk-area'));
    });

    el('#btn-buka').addEventListener('click', function () {
      if (terkirim) return;
      // Langkah 0: jawaban.
      let hasil;
      if (q.tipe === 'pg') {
        const r = konten.querySelector('input[name="pg"]:checked');
        if (!r) { info('Pilih salah satu jawaban dulu.'); return; }
        hasil = window.Kuis.cekPg(q, Number(r.value));
      } else {
        const v = el('#inp-jawab').value;
        if (v.trim() === '') { info('Isi jawabanmu dulu.'); return; }
        hasil = window.Kuis.cekAngka(q, v, el('#inp-satuan') ? el('#inp-satuan').value : '');
        if (hasil.valid === false) { info(hasil.pesan); return; }
      }
      // Langkah 1 dan 2: keyakinan dan tebakan bab.
      if (!yakin) { info('Pilih dulu seberapa yakin kamu.'); return; }
      const tebak = Array.prototype.map.call(
        konten.querySelectorAll('input[name="bab-tebak"]:checked'), function (x) { return x.value; });
      if (!tebak.length) { info('Centang minimal satu bab yang kamu pakai.'); return; }

      terkirim = true;
      const ident = skorIdentifikasi(tebak, q.bab);
      const kotak = catatJawaban(q, hasil.benar, yakin, sesi.sesiKe);
      sesi.jawaban.push({ id: q.id, benar: hasil.benar, yakin: yakin, tebak: tebak, ident: ident, kotak: kotak, petunjuk: petunjukTampil });
      sesi.idx++;
      taruhSS(KEY_SESI, sesi);
      tampilHasil(q, hasil, tebak, ident, kotak, sesi);
    });

    const inp = el('#inp-jawab');
    if (inp) inp.focus({ preventScroll: true });
  }

  function teksJawaban(q) {
    if (q.tipe === 'pg') return String.fromCharCode(65 + q.jawaban) + '. ' + q.pilihan[q.jawaban];
    return U().fmt(q.jawaban) + (q.satuan ? ' ' + q.satuan : '');
  }

  function tampilHasil(q, hasil, tebak, ident, kotak, sesi) {
    const u = U();
    const konten = document.getElementById('konten');
    konten.querySelectorAll('input, #btn-buka, #btn-petunjuk, [data-yakin]').forEach(function (x) { x.disabled = true; });

    const tepat = tebak.filter(function (b) { return q.bab.indexOf(b) !== -1; });
    const lebih = tebak.filter(function (b) { return q.bab.indexOf(b) === -1; });
    const kurang = q.bab.filter(function (b) { return tebak.indexOf(b) === -1; });
    const terakhir = sesi.idx >= sesi.ids.length;

    let h = hasil.benar
      ? '<div class="pesan benar">✅ Benar!</div>'
      : '<div class="pesan salah">❌ Belum tepat.' + (hasil.pesan ? ' ' + u.esc(hasil.pesan) : '') + '</div>';
    h += '<p><strong>Jawaban yang benar:</strong> ' + u.esc(teksJawaban(q)) + '</p>';

    h += '<div class="uji-konsep"><p><strong>Konsep kunci soal ini:</strong></p><ul>' +
      q.konsep.map(function (k) { return '<li>' + u.esc(k) + '</li>'; }).join('') + '</ul>' +
      '<p><strong>Bab asal:</strong> ' + q.bab.map(function (b) { return u.esc(judulBab(b)); }).join(', ') + '</p>' +
      '<p><strong>Identifikasimu:</strong> ' + Math.round(ident * 100) + '% tepat' +
      (tepat.length ? ' · ✔ ' + tepat.map(judulBab).map(u.esc).join(', ') : '') +
      (kurang.length ? ' · terlewat: ' + kurang.map(judulBab).map(u.esc).join(', ') : '') +
      (lebih.length ? ' · tidak diperlukan: ' + lebih.map(judulBab).map(u.esc).join(', ') : '') + '</p>' +
      '<p><small>' + (kotak === 1
        ? '🔁 Soal ini akan muncul lagi di sesi berikutnya.'
        : '📦 Naik ke kotak ' + kotak + ': muncul lagi setelah ' + INTERVAL[kotak] + ' sesi.') + '</small></p></div>';

    h += '<div class="pembahasan"><strong>Pembahasan:</strong><ol>' +
      (q.pembahasan || []).map(function (p) { return '<li>' + u.esc(p) + '</li>'; }).join('') + '</ol></div>';

    if (q.referensi && q.referensi.url) {
      h += '<p><small>Soal resmi bergaya serupa: <a href="' + u.esc(q.referensi.url) + '" target="_blank" rel="noopener">' +
        u.esc(q.referensi.nama || q.referensi.url) + '</a></small></p>';
    }

    h += '<div class="aksi"><button class="btn utama" id="btn-lanjut">' + (terakhir ? 'Lihat hasil sesi' : 'Berikutnya →') + '</button></div>';

    const wadah = konten.querySelector('#hasil');
    wadah.innerHTML = h;
    u.renderMath(wadah);
    wadah.querySelector('#btn-lanjut').addEventListener('click', function () {
      if (terakhir) selesaiSesi(ambilSS(KEY_SESI));
      else { halamanSesi(konten); window.scrollTo(0, 0); }
    });
  }

  function selesaiSesi(sesi) {
    if (!sesi) { location.hash = '#/uji'; return; }
    const st = muat();
    const total = sesi.jawaban.length;
    const skor = sesi.jawaban.filter(function (j) { return j.benar; }).length;
    const akurasi = total ? Math.round(100 * sesi.jawaban.reduce(function (a, j) { return a + j.ident; }, 0) / total) : 0;
    if (total) {
      st.riwayat.push({ tgl: new Date().toISOString(), tingkat: sesi.tingkat, skor: skor, total: total, akurasiKonsep: akurasi });
      if (st.riwayat.length > 20) st.riwayat.shift();
      simpan(st);
    }
    taruhSS(KEY_HASIL, { tingkat: sesi.tingkat, skor: skor, total: total, akurasi: akurasi, jawaban: sesi.jawaban });
    taruhSS(KEY_SESI, null);
    if (location.hash === '#/uji/hasil') halamanHasil(document.getElementById('konten'));
    else location.hash = '#/uji/hasil';
  }

  // ---------- Halaman: hasil ----------

  function halamanHasil(konten) {
    const u = U();
    const r = ambilSS(KEY_HASIL);
    if (!r) { location.hash = '#/uji'; return; }
    const st = muat();
    const persen = r.total ? Math.round(100 * r.skor / r.total) : 0;

    let komentar = 'Soal olimpiade memang berat. Baca pembahasannya, lalu coba lagi di sesi berikutnya.';
    if (persen >= 80) komentar = 'Luar biasa! Kamu siap naik tingkat.';
    else if (persen >= 50) komentar = 'Bagus. Perhatikan bab yang masih lemah di peta di bawah.';

    let h = '<a class="kembali" href="#/uji">← Pengaturan</a><h1>Hasil Uji Pemahaman</h1>' +
      '<div class="kartu"><div class="skor-besar">' + r.skor + ' / ' + r.total + '</div>' +
      '<p>' + persen + '% benar · identifikasi konsep ' + r.akurasi + '%. ' + u.esc(komentar) + '</p>';

    const ditebak = r.jawaban.filter(function (j) { return j.benar && j.yakin === 'menebak'; }).length;
    const yakinSalah = r.jawaban.filter(function (j) { return !j.benar && j.yakin === 'yakin'; }).length;
    if (ditebak) h += '<p><small>🎲 ' + ditebak + ' jawaban benar karena menebak, jadi tetap diulang.</small></p>';
    if (yakinSalah) h += '<p><small>⚠ ' + yakinSalah + ' soal kamu jawab dengan yakin tetapi salah. Ini tanda ada miskonsepsi, baca pembahasannya lagi.</small></p>';
    h += '</div>';

    // Peta kekuatan per bab (semua sesi).
    const babData = daftarBab().filter(function (b) { return st.perBab[b.id]; });
    h += '<h2>Peta kekuatan per bab</h2><div class="kartu">';
    if (!babData.length) h += '<p>Belum ada data.</p>';
    else {
      h += '<p><small>Gabungan semua sesi. Satu soal lintas bab dihitung untuk setiap babnya.</small></p>' +
        babData.map(function (b) {
          const d = st.perBab[b.id];
          const p = Math.round(100 * d.benar / d.total);
          return '<div class="uji-peta"><span class="uji-peta-nama">' + u.esc(b.judul) + '</span>' +
            '<span class="bar"><span style="width:' + p + '%"></span></span>' +
            '<span class="uji-peta-angka">' + d.benar + '/' + d.total + '</span></div>';
        }).join('');
    }
    h += '</div>';

    // Soal yang diulang sesi berikutnya.
    const ulang = r.jawaban.filter(function (j) { return j.kotak === 1; });
    h += '<h2>Diulang di sesi berikutnya</h2><div class="kartu">' +
      (ulang.length
        ? '<ul>' + ulang.map(function (j) {
            const q = soalById(j.id);
            const ringkas = q ? q.konsep.join(', ') : j.id;
            return '<li>' + u.esc(ringkas) + (j.benar ? ' <small>(benar, tetapi menebak)</small>' : '') + '</li>';
          }).join('') + '</ul>'
        : '<p>Tidak ada. Semua soal sesi ini naik kotak. 🎉</p>') + '</div>';

    h += '<div class="aksi"><a class="btn utama" href="#/uji" style="text-decoration:none">Sesi baru</a>' +
      '<a class="btn" href="#/" style="text-decoration:none">Beranda</a></div>';

    konten.onclick = null;
    konten.onchange = null;
    konten.innerHTML = h;
  }

  // ---------- Pintu masuk dari router ----------

  function tampil(konten, bagian) {
    konten.onclick = null;
    konten.onchange = null;
    konfirmBuang = false;
    const hal = bagian[0];
    if (hal === 'sesi') halamanSesi(konten);
    else if (hal === 'hasil') halamanHasil(konten);
    else halamanPengaturan(konten);
  }

  window.Uji = {
    tampil: tampil,
    // Diekspos untuk pengujian.
    _susunInterleave: susunInterleave,
    _pilihSoal: pilihSoal,
    _kotakBaru: kotakBaru,
    _skorIdentifikasi: skorIdentifikasi,
    _jatuhTempo: jatuhTempo
  };
})();
