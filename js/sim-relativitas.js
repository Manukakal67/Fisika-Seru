/* Simulasi: dilatasi waktu dan kontraksi panjang.
   Kiri: kurva gamma terhadap beta dengan titik penanda.
   Kanan: batang waktu proper vs teramati dan panjang proper vs teramati. */
(function () {
  'use strict';

  function gammaDari(b) {
    const bb = Math.min(0.99, Math.max(0, b));
    return 1 / Math.sqrt(1 - bb * bb);
  }

  function relativitasDilatasi(ctx, u, n, c) {
    const W = u.w, H = u.h;
    const beta = Math.min(0.99, Math.max(0, n.beta));
    const tp = Math.max(0, n.tp);
    const Lp = Math.max(0, n.Lp);
    const g = gammaDari(beta);
    const tObs = g * tp;
    const LObs = Lp / g;
    const GMAX = gammaDari(0.99);

    // Bacaan utama
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    ctx.font = '600 13px system-ui, sans-serif';
    ctx.fillText('β = ' + beta.toFixed(2) + '   γ = ' + g.toFixed(3), 8, 16);

    // ---------- Panel kiri: kurva gamma(beta) ----------
    const gx0 = 30, gx1 = Math.max(gx0 + 40, W * 0.40);
    const gy0 = 34, gy1 = H - 24;
    const X = function (b) { return gx0 + (b / 0.99) * (gx1 - gx0); };
    const Y = function (gm) { return gy1 - (gm - 1) / (GMAX - 1) * (gy1 - gy0); };

    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gx0, gy0 - 4); ctx.lineTo(gx0, gy1);
    ctx.moveTo(gx0, gy1); ctx.lineTo(gx1 + 4, gy1);
    ctx.stroke();

    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let i = 0; i <= 60; i++) {
      const b = 0.99 * i / 60;
      const px = X(b), py = Y(gammaDari(b));
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Garis bantu ke titik penanda
    ctx.strokeStyle = c.teks2;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(X(beta), gy1); ctx.lineTo(X(beta), Y(g));
    ctx.moveTo(gx0, Y(g)); ctx.lineTo(X(beta), Y(g));
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.fillStyle = c.salah;
    ctx.beginPath(); ctx.arc(X(beta), Y(g), 5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = c.teks2;
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('1', gx0 - 4, gy1 + 4);
    ctx.fillText(GMAX.toFixed(1), gx0 - 4, gy0 + 4);
    ctx.textAlign = 'left';
    ctx.fillText('γ', gx0 + 4, gy0 - 2);
    ctx.textAlign = 'center';
    ctx.fillText('0', gx0, gy1 + 14);
    ctx.fillText('0,99', gx1, gy1 + 14);
    ctx.fillText('β = v/c', (gx0 + gx1) / 2, H - 4);

    // ---------- Panel kanan: batang ----------
    const rx0 = W * 0.46, rx1 = W - 8;
    const lebar = Math.max(20, rx1 - rx0);
    const baris = [
      { teks: 'Waktu proper: ' + tp.toFixed(1) + ' tahun', panjang: lebar / g, warna: c.benar },
      { teks: 'Waktu teramati: ' + tObs.toFixed(1) + ' tahun', panjang: lebar, warna: c.salah },
      { teks: 'Panjang proper: ' + Lp.toFixed(0) + ' m', panjang: lebar, warna: c.benar },
      { teks: 'Panjang teramati: ' + LObs.toFixed(1) + ' m', panjang: lebar / g, warna: c.salah }
    ];
    const yAwal = 32, jarak = (H - yAwal - 6) / 4;
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'left';
    baris.forEach(function (b, i) {
      const y = yAwal + i * jarak;
      ctx.fillStyle = c.teks;
      ctx.fillText(b.teks, rx0, y + 8);
      // lintasan batang (penuh) dan batang nilai
      ctx.globalAlpha = 0.2;
      ctx.fillStyle = c.garis;
      ctx.fillRect(rx0, y + 13, lebar, 9);
      ctx.globalAlpha = 1;
      ctx.fillStyle = b.warna;
      ctx.fillRect(rx0, y + 13, Math.max(2, b.panjang), 9);
    });
  }

  window.Simulasi.daftar('relativitas-dilatasi', relativitasDilatasi);
})();
