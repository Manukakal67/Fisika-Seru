/* Router, sidebar, halaman materi dan latihan, mode gelap/terang.
   Rute (hash):
     #/                        beranda
     #/<bab>                   pilih Materi atau Latihan
     #/<bab>/materi[/<subbab>] halaman materi
     #/<bab>/latihan           pilih tingkat
     #/<bab>/latihan/<tingkat> sesi latihan
*/
(function () {
  'use strict';

  const U = window.U;
  const BAB = [
    { id: 'vektor', judul: 'Vektor' },
    { id: 'kinematika', judul: 'Kinematika Gerak' },
    { id: 'dinamika', judul: 'Dinamika Gerak' },
    { id: 'usaha-energi', judul: 'Usaha dan Energi' },
    { id: 'momentum', judul: 'Momentum dan Impuls' },
    { id: 'elastisitas-shm', judul: 'Elastisitas dan Gerak Harmonik Sederhana' },
    { id: 'benda-tegar', judul: 'Dinamika Benda Tegar' },
    { id: 'statika-fluida', judul: 'Statika Fluida' },
    { id: 'dinamika-fluida', judul: 'Dinamika Fluida' },
    { id: 'termodinamika', judul: 'Termodinamika' },
    { id: 'teori-kinetik', judul: 'Teori Kinetik Gas' },
    { id: 'relativitas', judul: 'Teori Relativitas Khusus' }
  ];
  const TINGKAT = [
    { id: 'pemula', label: 'Pemula', ket: 'Satu konsep, satu rumus' },
    { id: 'menengah', label: 'Menengah', ket: 'Dua konsep digabung' },
    { id: 'lanjut', label: 'Lanjut', ket: 'Multi-langkah dan analisis grafik' },
    { id: 'expert', label: 'Expert', ket: 'Level olimpiade / ujian akhir' }
  ];

  const konten = document.getElementById('konten');
  let filterSubbab = 'semua';

  function dataBab(id) { return (window.DATA_BAB || {})[id] || null; }
  function infoBab(id) { return BAB.find(function (b) { return b.id === id; }) || null; }

  // ---------- Tema ----------

  function terapkanTema(t) {
    document.documentElement.setAttribute('data-tema', t);
    const b = document.getElementById('btn-tema');
    b.textContent = t === 'gelap' ? '☀️' : '🌙';
    window.dispatchEvent(new Event('temaberubah'));
  }

  // ---------- Sidebar ----------

  function renderSidebar(aktifId) {
    const el = document.getElementById('sidebar');
    const ujiAktif = /^#\/uji(\/|$)/.test(location.hash);
    el.innerHTML = '<a class="sb-item sb-uji' + (ujiAktif ? ' aktif' : '') + '" href="#/uji">' +
        '<span class="sb-no">🧠</span><span class="sb-info"><span class="sb-nama">Uji Pemahaman</span></span></a>' +
      '<div class="sb-judul">Daftar bab</div>' + BAB.map(function (b, i) {
      const ada = !!dataBab(b.id);
      const p = window.Progres.persen(b.id);
      return '<a class="sb-item' + (b.id === aktifId ? ' aktif' : '') + (ada ? '' : ' belum') + '" href="#/' + b.id + '">' +
        '<span class="sb-no">' + (i + 1) + '</span>' +
        '<span class="sb-info"><span class="sb-nama">' + U.esc(b.judul) + '</span>' +
        '<span class="bar"><span style="width:' + p + '%"></span></span></span>' +
        '<span class="sb-p">' + (ada ? p + '%' : 'segera') + '</span></a>';
    }).join('');
  }

  // ---------- Halaman ----------

  function halamanBeranda() {
    konten.innerHTML =
      '<h1>Belajar Fisika, Pelan-pelan Tapi Paham</h1>' +
      '<p>Pilih satu bab, baca materinya, lalu uji pemahamanmu lewat latihan soal empat tingkat.</p>' +
      '<a class="kartu-pilih kartu-uji beranda-uji" href="#/uji"><strong>🧠 Uji Pemahaman</strong>' +
        '<small>Soal olimpiade lintas bab yang diacak. Uji apakah kamu bisa mengenali konsep yang tepat.</small></a>' +
      '<div class="grid-kartu">' + BAB.map(function (b, i) {
        const ada = !!dataBab(b.id);
        return '<a class="kartu-pilih" href="#/' + b.id + '"><strong>' + (i + 1) + '. ' + U.esc(b.judul) + '</strong>' +
          '<small>' + (ada ? 'Progres ' + window.Progres.persen(b.id) + '%' : 'Segera hadir') + '</small></a>';
      }).join('') + '</div>';
  }

  function halamanBelumAda(info) {
    konten.innerHTML =
      '<a class="kembali" href="#/">← Semua bab</a><h1>' + U.esc(info.judul) + '</h1>' +
      '<div class="kartu"><p>Bab ini belum tersedia. Kita kerjakan satu per satu, jadi sabar ya.</p></div>';
  }

  function halamanBab(data) {
    const id = data.id;
    konten.innerHTML =
      '<a class="kembali" href="#/">← Semua bab</a><h1>' + U.esc(data.judul) + '</h1>' +
      (data.dummy ? '<div class="banner">Konten uji coba: isi lengkap bab ini menyusul.</div>' : '') +
      '<div class="dua-tombol">' +
        '<a class="kartu-pilih" href="#/' + id + '/materi"><strong>📖 Materi</strong><small>Penjelasan, rumus, contoh, simulasi</small></a>' +
        '<a class="kartu-pilih" href="#/' + id + '/latihan"><strong>✏️ Latihan</strong><small>Soal empat tingkat dengan pembahasan</small></a>' +
      '</div>';
  }

  function daftarLi(arr) {
    return '<ul>' + arr.map(function (x) { return '<li>' + U.esc(x) + '</li>'; }).join('') + '</ul>';
  }

  function halamanMateri(data, subId) {
    const sub = data.subbab.find(function (s) { return s.id === subId; }) || data.subbab[0];
    const m = sub.materi;
    // Tombol "Lanjut ke latihan" membuka soal subbab yang baru dibaca.
    filterSubbab = sub.id;
    let h = '<a class="kembali" href="#/' + data.id + '">← ' + U.esc(data.judul) + '</a>' +
      '<h1>' + U.esc(sub.judul) + '</h1>';

    if (data.dummy) h += '<div class="banner">Konten uji coba: isi lengkap bab ini menyusul.</div>';

    if (data.subbab.length > 1) {
      h += '<div class="chip-baris">' + data.subbab.map(function (s) {
        return '<a class="chip' + (s.id === sub.id ? ' aktif' : '') + '" href="#/' + data.id + '/materi/' + s.id + '" style="text-decoration:none">' + U.esc(s.judul) + '</a>';
      }).join('') + '</div>';
    }

    h += '<h2>Gambaran besar</h2><div class="kartu"><p>' + U.esc(m.gambaranBesar) + '</p></div>';

    h += '<h2>Konsep dan rumus</h2>';
    (m.konsep || []).forEach(function (k) {
      h += '<div class="kartu"><h3>' + U.esc(k.judul) + '</h3><p>' + U.esc(k.teks) + '</p>';
      (k.rumus || []).forEach(function (r) {
        h += '<div class="rumus-kotak">$$' + U.esc(r.latex) + '$$</div>';
        h += '<ul class="simbol-daftar">' + (r.simbol || []).map(function (s) {
          return '<li>$' + U.esc(s.s) + '$ = ' + U.esc(s.arti) + (s.satuan ? ' (satuan: ' + U.esc(s.satuan) + ')' : '') + '</li>';
        }).join('') + '</ul>';
      });
      h += '</div>';
    });

    h += '<h2>Contoh soal</h2>';
    (m.contoh || []).forEach(function (c, i) {
      h += '<div class="kartu"><p><strong>Contoh ' + (i + 1) + ':</strong> ' + U.esc(c.soal) + '</p><ol>' +
        (c.langkah || []).map(function (l) { return '<li>' + U.esc(l) + '</li>'; }).join('') +
        '</ol><p class="contoh-hasil">' + U.esc(c.hasil) + '</p></div>';
    });

    h += '<h2>Kesalahan yang sering terjadi</h2><div class="kartu">' + daftarLi(m.kesalahan || []) + '</div>';
    h += '<h2>Ringkasan</h2><div class="kartu">' + daftarLi(m.ringkasan || []) + '</div>';

    if (m.simulasi) {
      h += '<h2>' + U.esc(m.simulasi.judul || 'Simulasi') + '</h2><div class="kartu"><div id="wadah-sim"></div></div>';
    }

    h += '<div class="aksi"><a class="btn utama" href="#/' + data.id + '/latihan" style="text-decoration:none">Lanjut ke latihan ✏️</a></div>';

    konten.innerHTML = h;
    U.renderMath(konten);
    if (m.simulasi) window.Simulasi.pasang(m.simulasi.id, document.getElementById('wadah-sim'), m.simulasi);
  }

  // Filter subbab yang tersimpan dari bab lain tidak boleh terbawa ke bab ini.
  function normalFilter(data) {
    if (!data.subbab.some(function (s) { return s.id === filterSubbab; })) filterSubbab = 'semua';
  }

  function soalTersaring(data, tingkat) {
    normalFilter(data);
    return (data.soal || []).filter(function (q) {
      return (!tingkat || q.tingkat === tingkat) && (filterSubbab === 'semua' || q.subbab === filterSubbab);
    });
  }

  function halamanPilihTingkat(data) {
    normalFilter(data);
    let h = '<a class="kembali" href="#/' + data.id + '">← ' + U.esc(data.judul) + '</a><h1>Latihan: pilih tingkat</h1>';
    if (data.dummy) h += '<div class="banner">Konten uji coba: soal lengkap menyusul.</div>';

    if (data.subbab.length > 1) {
      h += '<div class="chip-baris">' +
        '<button class="chip' + (filterSubbab === 'semua' ? ' aktif' : '') + '" data-filter="semua">Semua</button>' +
        data.subbab.map(function (s) {
          return '<button class="chip' + (filterSubbab === s.id ? ' aktif' : '') + '" data-filter="' + U.esc(s.id) + '">' + U.esc(s.judul) + '</button>';
        }).join('') + '</div>';
    }

    TINGKAT.forEach(function (t) {
      const n = soalTersaring(data, t.id).length;
      const best = window.Progres.terbaik(data.id, t.id);
      h += '<div class="kartu tingkat-kartu"><div><strong>' + t.label + '</strong><br><small>' + t.ket + ' · ' + n + ' soal' +
        (best !== null ? ' · terbaik ' + best + '%' : '') + '</small></div>' +
        (n > 0
          ? '<a class="btn utama" href="#/' + data.id + '/latihan/' + t.id + '" style="text-decoration:none">Mulai</a>'
          : '<span class="btn" style="opacity:.5">Belum ada</span>') +
        '</div>';
    });
    konten.innerHTML = h;
  }

  function halamanKuis(data, tingkatId) {
    const t = TINGKAT.find(function (x) { return x.id === tingkatId; });
    const urlKembali = '#/' + data.id + '/latihan';
    if (!t) { location.hash = urlKembali; return; }
    const soal = soalTersaring(data, t.id);
    konten.innerHTML = '<a class="kembali" href="' + urlKembali + '">← Pilih tingkat</a><h1>' + U.esc(data.judul) + '</h1><div id="kuis-wadah"></div>';
    const wadah = document.getElementById('kuis-wadah');
    if (soal.length === 0) {
      wadah.innerHTML = '<div class="kartu"><p>Belum ada soal untuk tingkat ini.</p></div>';
      return;
    }
    window.Kuis.mulai(wadah, {
      bab: data.id,
      tingkat: t.id,
      labelTingkat: t.label,
      soal: soal,
      urlKembali: urlKembali,
      onSelesai: function () { renderSidebar(data.id); }
    });
  }

  // ---------- Router ----------

  function render() {
    const bagian = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    const info = bagian[0] ? infoBab(bagian[0]) : null;
    window.Simulasi.lepas();
    renderSidebar(info ? info.id : null);
    document.body.classList.remove('menu-buka');

    // Uji Pemahaman ditangani js/uji.js.
    if (bagian[0] === 'uji' && window.Uji) {
      window.Uji.tampil(konten, bagian.slice(1));
      window.scrollTo(0, 0);
      return;
    }

    if (!info) { halamanBeranda(); }
    else {
      const data = dataBab(info.id);
      if (!data) halamanBelumAda(info);
      else if (!bagian[1]) halamanBab(data);
      else if (bagian[1] === 'materi') halamanMateri(data, bagian[2]);
      else if (bagian[1] === 'latihan') {
        if (bagian[2]) halamanKuis(data, bagian[2]); else halamanPilihTingkat(data);
      } else halamanBab(data);
    }
    window.scrollTo(0, 0);
  }

  // ---------- Inisialisasi ----------

  document.getElementById('btn-menu').addEventListener('click', function () {
    document.body.classList.toggle('menu-buka');
  });
  document.getElementById('overlay').addEventListener('click', function () {
    document.body.classList.remove('menu-buka');
  });
  document.getElementById('btn-tema').addEventListener('click', function () {
    const baru = document.documentElement.getAttribute('data-tema') === 'gelap' ? 'terang' : 'gelap';
    window.Progres.setTema(baru);
    terapkanTema(baru);
  });
  konten.addEventListener('click', function (e) {
    const chip = e.target.closest('[data-filter]');
    if (!chip) return;
    filterSubbab = chip.getAttribute('data-filter');
    render();
  });
  window.addEventListener('hashchange', render);

  terapkanTema(window.Progres.tema());
  render();
})();
