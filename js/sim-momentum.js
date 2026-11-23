(function () {
  'use strict';

  // Format angka dengan koma desimal Indonesia
  function f(x, d) {
    if (!isFinite(x)) x = 0;
    let s = x.toFixed(d);
    if (Number(s) === 0) s = (0).toFixed(d);
    return s.replace('.', ',');
  }

  function panah(ctx, x1, y1, x2, y2, warna, kepala) {
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    if (len < 1) return;
    const ux = dx / len, uy = dy / len;
    const k = Math.min(kepala, len);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - ux * k - uy * k * 0.5, y2 - uy * k + ux * k * 0.5);
    ctx.lineTo(x2 - ux * k + uy * k * 0.5, y2 - uy * k - ux * k * 0.5);
    ctx.closePath();
    ctx.fill();
    ctx.lineWidth = 1;
  }

  function momentumTumbukan(ctx, u, n, c, def) {
    const W = u.w, H = u.h;
    const m1 = Math.max(0.1, Number(n.m1) || 0.1);
    const m2 = Math.max(0.1, Number(n.m2) || 0.1);
    const v1 = Number(n.v1) || 0;
    const v2 = Number(n.v2) || 0;
    const e = Math.min(1, Math.max(0, Number(n.e) || 0));

    // Massa maksimum dari definisi parameter (untuk skala ukuran benda)
    let mMaks = 10;
    if (def && Array.isArray(def.param)) {
      def.param.forEach(function (p) { if ((p.kunci === 'm1' || p.kunci === 'm2') && p.max > 0) mMaks = Math.max(mMaks, p.max); });
    }

    // Benda 1 di kiri, benda 2 di kanan: bertumbukan hanya bila v1 > v2
    const tumbuk = v1 > v2;
    let a1 = v1, a2 = v2;
    if (tumbuk) {
      a1 = ((m1 - e * m2) * v1 + m2 * (1 + e) * v2) / (m1 + m2);
      a2 = ((m2 - e * m1) * v2 + m1 * (1 + e) * v1) / (m1 + m2);
    }
    const pAwal = m1 * v1 + m2 * v2;
    const pAkhir = m1 * a1 + m2 * a2;
    const ekAwal = 0.5 * m1 * v1 * v1 + 0.5 * m2 * v2 * v2;
    const ekAkhir = 0.5 * m1 * a1 * a1 + 0.5 * m2 * a2 * a2;
    const hilang = Math.max(0, ekAwal - ekAkhir);

    const kecil = W < 420;
    const fs = kecil ? 11 : 12;
    const strip = 3 * (fs + 3) + 8;
    const ph = Math.max(40, (H - strip) / 2);
    const sMaks = Math.max(10, Math.min(ph * 0.4, W * 0.12));
    const sisi = function (m) { return sMaks * Math.cbrt(m) / Math.cbrt(mMaks); };
    const vMaks = Math.max(1, Math.abs(v1), Math.abs(v2), Math.abs(a1), Math.abs(a2));
    const skala = (W * 0.2) / vMaks;

    const font = fs + 'px system-ui, sans-serif';

    function panel(y0, judul, x1c, x2c, w1, w2) {
      // bingkai dan lantai
      ctx.strokeStyle = c.garis;
      ctx.lineWidth = 1;
      ctx.strokeRect(2.5, y0 + 2.5, W - 5, ph - 5);
      const dasar = y0 + ph - 7;
      ctx.beginPath(); ctx.moveTo(6, dasar); ctx.lineTo(W - 6, dasar); ctx.stroke();

      ctx.font = '600 ' + font;
      ctx.fillStyle = c.teks2;
      ctx.textAlign = 'left';
      ctx.fillText(judul, 8, y0 + fs + 5);

      const s1 = sisi(m1), s2 = sisi(m2);
      const warna1 = c.aksen, warna2 = c.benar;
      ctx.fillStyle = warna1;
      ctx.fillRect(x1c - s1 / 2, dasar - s1, s1, s1);
      ctx.fillStyle = warna2;
      ctx.fillRect(x2c - s2 / 2, dasar - s2, s2, s2);
      ctx.fillStyle = c.panel;
      ctx.font = '600 ' + font;
      ctx.textAlign = 'center';
      ctx.fillText('1', x1c, dasar - s1 / 2 + fs * 0.35);
      ctx.fillText('2', x2c, dasar - s2 / 2 + fs * 0.35);

      // panah kecepatan di atas benda
      const yP = y0 + ph * 0.5 - 2;
      const yA1 = Math.min(yP, dasar - s1 - 6);
      const yA2 = Math.min(yP, dasar - s2 - 6);
      panah(ctx, x1c, yA1, x1c + w1 * skala, yA1, warna1, 6);
      panah(ctx, x2c, yA2, x2c + w2 * skala, yA2, warna2, 6);

      // bacaan kecepatan
      ctx.font = font;
      ctx.fillStyle = c.teks;
      ctx.textAlign = 'right';
      ctx.fillText('v1 = ' + f(w1, 1) + ' m/s', W / 2 - 4, y0 + fs + 5);
      ctx.textAlign = 'left';
      ctx.fillText('v2 = ' + f(w2, 1) + ' m/s', W / 2 + 4, y0 + fs + 5);
    }

    const s1a = sisi(m1), s2a = sisi(m2);
    panel(0, 'Sebelum', W * 0.25, W * 0.75, v1, v2);
    panel(ph, 'Sesudah', W / 2 - s1a / 2 - 1, W / 2 + s2a / 2 + 1, a1, a2);

    // Bacaan angka
    let y = 2 * ph + fs + 3;
    ctx.font = font;
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    ctx.fillText('m1 = ' + f(m1, 1) + ' kg   m2 = ' + f(m2, 1) + ' kg   e = ' + f(e, 2), 8, y);
    y += fs + 3;
    ctx.fillStyle = c.benar;
    ctx.fillText('p total: ' + f(pAwal, 1) + ' → ' + f(pAkhir, 1) + ' kg m/s', 8, y);
    y += fs + 3;
    ctx.fillStyle = hilang > 0.05 ? c.salah : c.teks;
    if (tumbuk) {
      ctx.fillText('EK: ' + f(ekAwal, 1) + ' → ' + f(ekAkhir, 1) + ' J (hilang ' + f(hilang, 1) + ' J)', 8, y);
    } else {
      ctx.fillStyle = c.teks2;
      ctx.fillText('Tidak bertumbukan (butuh v1 > v2)', 8, y);
    }
    ctx.lineWidth = 1;
    ctx.globalAlpha = 1;
  }

  window.Simulasi.daftar('momentum-tumbukan', momentumTumbukan);
})();
