/* Penyimpanan progres dan tema di localStorage (key: fisika-progres-v1). */
(function () {
  'use strict';

  const KEY = 'fisika-progres-v1';
  const TINGKAT = ['pemula', 'menengah', 'lanjut', 'expert'];
  let st = null;

  function baru() { return { tema: null, bab: {} }; }

  function muat() {
    if (st) return st;
    try {
      const raw = window.localStorage.getItem(KEY);
      st = raw ? JSON.parse(raw) : baru();
    } catch (e) {
      st = baru();
    }
    if (!st || typeof st !== 'object') st = baru();
    if (!st.bab || typeof st.bab !== 'object') st.bab = {};
    return st;
  }

  function simpan() {
    try { window.localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) { /* abaikan */ }
  }

  const Progres = {
    tema: function () {
      muat();
      if (st.tema === 'gelap' || st.tema === 'terang') return st.tema;
      const gelap = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      return gelap ? 'gelap' : 'terang';
    },

    setTema: function (t) {
      muat();
      st.tema = t;
      simpan();
    },

    // Catat hasil satu sesi latihan.
    catat: function (bab, tingkat, benar, total) {
      muat();
      const b = (st.bab[bab] = st.bab[bab] || {});
      const t = (b[tingkat] = b[tingkat] || { benar: 0, total: 0, terbaik: 0, riwayat: [] });
      const persen = total > 0 ? Math.round((benar / total) * 100) : 0;
      t.benar = benar;
      t.total = total;
      t.terbaik = Math.max(t.terbaik || 0, persen);
      t.riwayat.push({ tgl: new Date().toISOString(), skor: persen, benar: benar, total: total });
      if (t.riwayat.length > 20) t.riwayat.shift();
      simpan();
    },

    // Skor terbaik (persen) untuk satu tingkat, atau null jika belum pernah.
    terbaik: function (bab, tingkat) {
      muat();
      const t = st.bab[bab] && st.bab[bab][tingkat];
      return t ? t.terbaik : null;
    },

    // Progres bab: tiap tingkat dengan skor terbaik >= 60% menyumbang 25%.
    persen: function (bab) {
      muat();
      const b = st.bab[bab];
      if (!b) return 0;
      let selesai = 0;
      TINGKAT.forEach(function (k) { if (b[k] && b[k].terbaik >= 60) selesai++; });
      return selesai * 25;
    }
  };

  window.Progres = Progres;
})();
