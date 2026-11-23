/* Mesin latihan: pengecekan jawaban (pg, angka, isian), petunjuk bertahap,
   skor, dan tampilan sesi. */
(function () {
  'use strict';

  // ---------- Pengecekan jawaban ----------

  function normSatuan(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/\s+/g, '')
      .replace(/[·⋅*°^]/g, '')
      .replace(/⁻¹/g, '-1')
      .replace(/²/g, '2')
      .replace(/³/g, '3')
      .replace(/μ/g, 'u');
  }

  // Terima "12,5", "1.5e3", "3x10^8", "3*10^-8". Kembalikan null jika bukan angka.
  function parseAngka(str) {
    let s = String(str == null ? '' : str).trim().replace(/\s+/g, '');
    s = s.replace(/[x×*]10\^?/i, 'e').replace(',', '.');
    if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(s)) return null;
    return Number(s);
  }

  function cekPg(soal, indeks) {
    return { benar: indeks === soal.jawaban, pesan: '' };
  }

  function cekAngka(soal, teksJawaban, teksSatuan) {
    const n = parseAngka(teksJawaban);
    if (n === null) {
      return { benar: false, valid: false, pesan: 'Jawaban harus berupa angka, misalnya 12,5 atau 3e8.' };
    }
    const tol = soal.toleransi == null ? 0.02 : soal.toleransi;
    const target = soal.jawaban;
    const batas = target === 0 ? tol : Math.abs(target) * tol;
    const angkaOk = Math.abs(n - target) <= batas + 1e-12;
    const satuanOk = !soal.satuan || normSatuan(teksSatuan) === normSatuan(soal.satuan);
    if (angkaOk && satuanOk) return { benar: true, pesan: '' };
    if (angkaOk) return { benar: false, pesan: 'Angkanya sudah tepat, tetapi satuannya belum sesuai.' };
    return { benar: false, pesan: '' };
  }

  function normTeks(t) {
    return String(t == null ? '' : t)
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]/gu, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function cekIsian(soal, teks) {
    const t = normTeks(teks);
    const benar = (soal.jawaban || []).some(function (k) {
      const kk = normTeks(k);
      return kk !== '' && t.indexOf(kk) !== -1;
    });
    return { benar: benar, pesan: '' };
  }

  // ---------- Tampilan sesi latihan ----------

  function teksJawabanBenar(q) {
    if (q.tipe === 'pg') return String.fromCharCode(65 + q.jawaban) + '. ' + q.pilihan[q.jawaban];
    if (q.tipe === 'angka') return window.U.fmt(q.jawaban) + (q.satuan ? ' ' + q.satuan : '');
    return (q.jawaban || [])[0] || '';
  }

  // opsi: { bab, judulBab, tingkat, labelTingkat, soal, urlKembali, onSelesai }
  function mulai(wadah, opsi) {
    const U = window.U;
    const soal = opsi.soal.slice();
    let idx = 0;
    let skor = 0;
    let petunjukTampil = 0;
    let sudah = false;

    function el(sel) { return wadah.querySelector(sel); }
    function nilai(sel) { const e = el(sel); return e ? e.value : ''; }

    function info(pesan) {
      el('#hasil').innerHTML = '<div class="pesan info">' + U.esc(pesan) + '</div>';
    }

    function tampil() {
      sudah = false;
      petunjukTampil = 0;
      const q = soal[idx];

      let input = '';
      if (q.tipe === 'pg') {
        input = q.pilihan.map(function (p, i) {
          return '<label class="opsi"><input type="radio" name="pg" value="' + i + '"><span>' +
            String.fromCharCode(65 + i) + '. ' + U.esc(p) + '</span></label>';
        }).join('');
      } else if (q.tipe === 'angka') {
        input = '<div class="isian-baris"><input id="inp-jawab" type="text" inputmode="decimal" autocomplete="off" placeholder="Jawaban angka" aria-label="Jawaban angka">' +
          (q.satuan ? '<input id="inp-satuan" type="text" autocomplete="off" placeholder="satuan" aria-label="Satuan">' : '') +
          '</div>';
      } else {
        input = '<div class="isian-baris"><input id="inp-jawab" type="text" autocomplete="off" placeholder="Jawaban singkat" aria-label="Jawaban singkat"></div>';
      }

      const adaPetunjuk = (q.petunjuk || []).length > 0;
      wadah.innerHTML =
        '<div class="kuis-kepala"><span>' + U.esc(opsi.labelTingkat) + ' · Soal ' + (idx + 1) + '/' + soal.length + '</span>' +
        '<span id="skor-now">Skor: ' + skor + '</span></div>' +
        '<div class="kartu">' +
          (q.ragu ? '<p><span class="lencana-ragu">⚠ jawaban soal ini sedang diverifikasi</span></p>' : '') +
          '<div class="soal-teks">' + U.esc(q.pertanyaan) + '</div>' +
          input +
          '<div id="petunjuk-area"></div>' +
          '<div class="aksi">' +
            '<button class="btn" id="btn-petunjuk"' + (adaPetunjuk ? '' : ' disabled') + '>💡 Petunjuk (0/' + (q.petunjuk || []).length + ')</button>' +
            '<button class="btn utama" id="btn-periksa">Periksa</button>' +
          '</div>' +
          '<div id="hasil"></div>' +
        '</div>';
      U.renderMath(wadah);

      el('#btn-petunjuk').addEventListener('click', tampilPetunjuk);
      el('#btn-periksa').addEventListener('click', periksa);
      const inp = el('#inp-jawab');
      if (inp) {
        inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') periksa(); });
        inp.focus({ preventScroll: true });
      }
      const sat = el('#inp-satuan');
      if (sat) sat.addEventListener('keydown', function (e) { if (e.key === 'Enter') periksa(); });
    }

    function tampilPetunjuk() {
      const q = soal[idx];
      const daftar = q.petunjuk || [];
      if (petunjukTampil >= daftar.length) return;
      petunjukTampil++;
      el('#petunjuk-area').innerHTML = '<div class="petunjuk-kotak">' +
        daftar.slice(0, petunjukTampil).map(function (p, i) {
          return '<p><strong>Petunjuk ' + (i + 1) + ':</strong> ' + U.esc(p) + '</p>';
        }).join('') + '</div>';
      const b = el('#btn-petunjuk');
      b.textContent = '💡 Petunjuk (' + petunjukTampil + '/' + daftar.length + ')';
      if (petunjukTampil >= daftar.length) b.disabled = true;
      U.renderMath(el('#petunjuk-area'));
    }

    function periksa() {
      if (sudah) return;
      const q = soal[idx];
      let hasil;
      if (q.tipe === 'pg') {
        const r = wadah.querySelector('input[name="pg"]:checked');
        if (!r) { info('Pilih salah satu jawaban dulu.'); return; }
        hasil = cekPg(q, Number(r.value));
      } else if (q.tipe === 'angka') {
        if (nilai('#inp-jawab').trim() === '') { info('Isi jawabanmu dulu.'); return; }
        hasil = cekAngka(q, nilai('#inp-jawab'), nilai('#inp-satuan'));
        if (hasil.valid === false) { info(hasil.pesan); return; }
      } else {
        if (nilai('#inp-jawab').trim() === '') { info('Isi jawabanmu dulu.'); return; }
        hasil = cekIsian(q, nilai('#inp-jawab'));
      }

      sudah = true;
      if (hasil.benar) skor++;
      tampilHasil(q, hasil);
    }

    function tampilHasil(q, hasil) {
      wadah.querySelectorAll('input').forEach(function (i) { i.disabled = true; });
      el('#btn-periksa').disabled = true;
      el('#btn-petunjuk').disabled = true;
      el('#skor-now').textContent = 'Skor: ' + skor;

      const terakhir = idx === soal.length - 1;
      let html = hasil.benar
        ? '<div class="pesan benar">✅ Benar!</div>'
        : '<div class="pesan salah">❌ Belum tepat.' + (hasil.pesan ? ' ' + U.esc(hasil.pesan) : '') + '</div>';
      html += '<p><strong>Jawaban yang benar:</strong> ' + U.esc(teksJawabanBenar(q)) + '</p>';
      html += '<div class="pembahasan"><strong>Pembahasan:</strong><ol>' +
        (q.pembahasan || []).map(function (p) { return '<li>' + U.esc(p) + '</li>'; }).join('') +
        '</ol></div>';
      html += '<div class="aksi"><button class="btn utama" id="btn-lanjut">' +
        (terakhir ? 'Lihat skor' : 'Berikutnya →') + '</button></div>';

      el('#hasil').innerHTML = html;
      U.renderMath(el('#hasil'));
      el('#btn-lanjut').addEventListener('click', function () {
        idx++;
        if (idx < soal.length) tampil(); else selesai();
      });
    }

    function selesai() {
      window.Progres.catat(opsi.bab, opsi.tingkat, skor, soal.length);
      const persen = Math.round((skor / soal.length) * 100);
      let komentar = 'Tidak apa-apa, baca ulang materinya lalu coba lagi.';
      if (persen >= 80) komentar = 'Mantap! Kamu sudah menguasai tingkat ini.';
      else if (persen >= 60) komentar = 'Bagus, tinggal sedikit lagi.';
      wadah.innerHTML =
        '<div class="kartu"><h2>Sesi selesai</h2>' +
        '<div class="skor-besar">' + skor + ' / ' + soal.length + '</div>' +
        '<p>' + persen + '% benar. ' + U.esc(komentar) + '</p>' +
        '<div class="aksi"><button class="btn utama" id="btn-ulang">Ulangi</button>' +
        '<a class="btn" href="' + U.esc(opsi.urlKembali) + '" style="text-decoration:none">Pilih tingkat lain</a></div></div>';
      el('#btn-ulang').addEventListener('click', function () { mulai(wadah, opsi); });
      if (typeof opsi.onSelesai === 'function') opsi.onSelesai();
    }

    tampil();
  }

  window.Kuis = {
    mulai: mulai,
    cekPg: cekPg,
    cekAngka: cekAngka,
    cekIsian: cekIsian,
    parseAngka: parseAngka,
    normSatuan: normSatuan
  };
})();
