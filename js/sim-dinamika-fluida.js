(function () {
  'use strict';

  // Panah dengan kepala segitiga (salinan lokal).
  function panah(ctx, x0, y0, dx, dy, warna) {
    const L = Math.hypot(dx, dy);
    if (!(L >= 1)) return;
    const ux = dx / L, uy = dy / L, k = Math.min(7, L * 0.6);
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + dx, y0 + dy); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x0 + dx, y0 + dy);
    ctx.lineTo(x0 + dx - k * ux + k * 0.5 * uy, y0 + dy - k * uy - k * 0.5 * ux);
    ctx.lineTo(x0 + dx - k * ux - k * 0.5 * uy, y0 + dy - k * uy + k * 0.5 * ux);
    ctx.closePath();
    ctx.fill();
  }

  function ambil(x, lo, hi, cad) {
    if (typeof x !== 'number' || !isFinite(x)) x = cad;
    return Math.min(hi, Math.max(lo, x));
  }

  function fmt(x) {
    const a = Math.abs(x);
    if (a >= 1000) return x.toFixed(0);
    if (a >= 100) return x.toFixed(1);
    return x.toFixed(2);
  }

  // Pipa dengan dua penampang. v2 dari kontinuitas, P2 dari Bernoulli.
  function dinamikaFluidaPipa(ctx, u, n) {
    const W = u.w, H = u.h;
    const RHO = 1000, G = 10;
    const d1 = ambil(n.d1, 2, 20, 10) / 100;   // m
    const d2 = ambil(n.d2, 2, 20, 5) / 100;    // m
    const v1 = ambil(n.v1, 0, 50, 2);
    const dh = ambil(n.dh, -2, 3, 0);
    const P1 = ambil(n.P1, 0, 1000, 200) * 1000; // Pa

    const A1 = Math.PI * d1 * d1 / 4;
    const A2 = Math.PI * d2 * d2 / 4;
    const Q = A1 * v1;
    const v2 = A2 > 0 ? Q / A2 : 0;
    const P2 = P1 + 0.5 * RHO * (v1 * v1 - v2 * v2) - RHO * G * dh;
    const kavitasi = P2 < 0;

    const pad = 10;
    const fs = 11;
    const bar = 14;
    const barisBawah = 3;
    const atas = 16;                        // ruang label di atas pipa
    const bawah = H - barisBawah * bar - 4; // batas bawah area pipa
    const ah = Math.max(20, bawah - atas);

    // Skala: diameter 20 cm = 0,4 tinggi area. Geser 0,1 tinggi area per meter.
    const skala = 0.4 * ah / 0.20;
    const hw1 = skala * d1 / 2;
    const hw2 = skala * d2 / 2;
    const yc1 = atas + 0.52 * ah;
    const yc2 = yc1 - dh * 0.1 * ah;

    const xa = pad, xd = W - pad;
    const pjg = xd - xa;
    const x1 = xa + pjg * 0.34;
    const x2 = xa + pjg * 0.58;

    // Garis acuan ketinggian bagian 1
    ctx.strokeStyle = c0(n);
    ctx.setLineDash([4, 4]);
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(xa, yc1); ctx.lineTo(xd, yc1); ctx.stroke();
    ctx.setLineDash([]);

    // Badan pipa
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = col.aksen;
    ctx.beginPath();
    ctx.moveTo(xa, yc1 - hw1);
    ctx.lineTo(x1, yc1 - hw1);
    ctx.lineTo(x2, yc2 - hw2);
    ctx.lineTo(xd, yc2 - hw2);
    ctx.lineTo(xd, yc2 + hw2);
    ctx.lineTo(x2, yc2 + hw2);
    ctx.lineTo(x1, yc1 + hw1);
    ctx.lineTo(xa, yc1 + hw1);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = col.teks;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xa, yc1 - hw1); ctx.lineTo(x1, yc1 - hw1); ctx.lineTo(x2, yc2 - hw2); ctx.lineTo(xd, yc2 - hw2);
    ctx.moveTo(xa, yc1 + hw1); ctx.lineTo(x1, yc1 + hw1); ctx.lineTo(x2, yc2 + hw2); ctx.lineTo(xd, yc2 + hw2);
    ctx.stroke();

    // Panah kecepatan: panjang sebanding laju
    const vmaks = Math.max(v1, v2, 1e-9);
    const Lmaks = pjg * 0.2;
    panah(ctx, xa + pjg * 0.05, yc1, Lmaks * v1 / vmaks, 0, col.benar);
    panah(ctx, xa + pjg * 0.70, yc2, Lmaks * v2 / vmaks, 0, col.benar);

    // Label bagian
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    ctx.fillStyle = col.teks;
    ctx.textAlign = 'center';
    ctx.fillText('1', xa + pjg * 0.17, 12);
    ctx.fillText('2', xa + pjg * 0.79, 12);

    // Bacaan angka
    ctx.textAlign = 'left';
    const y0 = H - barisBawah * bar + 8;
    ctx.fillStyle = col.teks;
    ctx.fillText('Q = ' + fmt(Q * 1000) + ' L/s   v1 = ' + fmt(v1) + ' m/s', pad, y0);
    ctx.fillText('v2 = ' + fmt(v2) + ' m/s   P1 = ' + fmt(P1 / 1000) + ' kPa', pad, y0 + bar);
    if (kavitasi) {
      ctx.fillStyle = col.salah;
      ctx.fillText('P2 = ' + fmt(P2 / 1000) + ' kPa: negatif, kavitasi!', pad, y0 + 2 * bar);
    } else {
      ctx.fillStyle = col.aksen;
      ctx.fillText('P2 = ' + fmt(P2 / 1000) + ' kPa (Bernoulli)', pad, y0 + 2 * bar);
    }
  }

  // Warna disimpan sementara selama satu pemanggilan gambar.
  let col = null;
  function c0() { return col.garis; }

  function bungkus(ctx, u, n, c, def) {
    col = c;
    dinamikaFluidaPipa(ctx, u, n);
  }

  window.Simulasi.daftar('dinamika-fluida-pipa', bungkus);
})();
