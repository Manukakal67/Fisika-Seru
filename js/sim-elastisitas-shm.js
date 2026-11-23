/* Simulasi bab Elastisitas dan Gerak Harmonik Sederhana.
   1) 'elastisitas-pegas'        : pegas vertikal dengan beban (tunggal, seri, paralel)
   2) 'getaran-harmonik-pegas'   : balok-pegas horizontal dan grafik y-t
   File mandiri: semua fungsi bantu disalin di sini. */
(function () {
  'use strict';

  const DUAPI = 2 * Math.PI;

  function batas(x, a, b) { return Math.min(b, Math.max(a, x)); }

  function ambilParam(def, kunci, cadangan, sisi) {
    const ps = (def && def.param) || [];
    for (let i = 0; i < ps.length; i++) {
      if (ps[i].kunci === kunci && isFinite(ps[i][sisi])) return ps[i][sisi];
    }
    return cadangan;
  }

  function ukFont(W) { return W < 500 ? 11 : 12; }

  // Pegas zig-zag vertikal dari (x, ya) ke (x, yb). Jumlah lekukan tetap,
  // jadi jarak antarlekukan membesar sebanding dengan panjang pegas.
  function pegasV(ctx, x, ya, yb, lebar, warna) {
    const L = Math.max(0, yb - ya);
    const lead = Math.min(8, L * 0.2);
    const N = 12;
    ctx.strokeStyle = warna;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, ya);
    ctx.lineTo(x, ya + lead);
    for (let i = 1; i < N; i++) {
      ctx.lineTo(x + (i % 2 ? lebar : -lebar), ya + lead + (L - 2 * lead) * i / N);
    }
    ctx.lineTo(x, yb - lead);
    ctx.lineTo(x, yb);
    ctx.stroke();
  }

  // Pegas zig-zag horizontal dari (xa, y) ke (xb, y).
  function pegasH(ctx, xa, xb, y, lebar, warna) {
    const L = Math.max(0, xb - xa);
    const lead = Math.min(8, L * 0.2);
    const N = 14;
    ctx.strokeStyle = warna;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(xa, y);
    ctx.lineTo(xa + lead, y);
    for (let i = 1; i < N; i++) {
      ctx.lineTo(xa + lead + (L - 2 * lead) * i / N, y + (i % 2 ? lebar : -lebar));
    }
    ctx.lineTo(xb - lead, y);
    ctx.lineTo(xb, y);
    ctx.stroke();
  }

  function langit(ctx, x0, x1, y, warna) {
    ctx.strokeStyle = warna;
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(x0, y); ctx.lineTo(x1, y); ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = x0; x < x1 - 4; x += 8) { ctx.moveTo(x + 6, y - 1); ctx.lineTo(x, y - 7); }
    ctx.stroke();
  }

  // ---------- Simulasi 1: pegas vertikal dengan beban ----------
  function elastisitasPegas(ctx, u, n, c, def) {
    const W = u.w, H = u.h, g = 10;
    const k = Math.max(1, n.k);
    const m = Math.max(0, n.m);
    const L0 = Math.max(0.01, n.L0);
    const mode = batas(Math.round(n.susun), 0, 2);
    const NAMA = ['tunggal', 'seri', 'paralel'];

    // Pegas pengganti
    let kef = k, Lnat = L0;
    if (mode === 1) { kef = k / 2; Lnat = 2 * L0; }
    if (mode === 2) { kef = 2 * k; Lnat = L0; }
    const F = m * g;
    const dx = F / kef;
    const Ltot = Lnat + dx;
    const U = 0.5 * kef * dx * dx;

    // Skala tetap: muat untuk massa terbesar pada k, panjang, dan susunan saat ini
    const mMaks = ambilParam(def, 'm', 1.5, 'max');
    const Lmaks = Math.max(0.05, Lnat + mMaks * g / kef);
    const y0 = H * 0.14;
    const bh = Math.max(14, H * 0.1);
    const skala = Math.max(1, (H - 12 - bh - y0) / Lmaks);
    const cx = W * 0.27;
    const lebar = batas(W * 0.022, 4, 9);
    const yAlami = y0 + Lnat * skala;
    const yUjung = y0 + Ltot * skala;

    langit(ctx, cx - W * 0.16, cx + W * 0.16, y0, c.garis);

    if (mode === 0) {
      pegasV(ctx, cx, y0, yUjung, lebar, c.teks2);
    } else if (mode === 1) {
      const L1 = (L0 + F / k) * skala;
      pegasV(ctx, cx, y0, y0 + L1, lebar, c.teks2);
      ctx.fillStyle = c.teks2;
      ctx.fillRect(cx - 4, y0 + L1 - 2, 8, 4);
      pegasV(ctx, cx, y0 + L1, yUjung, lebar, c.teks2);
    } else {
      const d = W * 0.07;
      pegasV(ctx, cx - d, y0, yUjung, lebar, c.teks2);
      pegasV(ctx, cx + d, y0, yUjung, lebar, c.teks2);
      ctx.strokeStyle = c.teks2;
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(cx - d - 6, yUjung); ctx.lineTo(cx + d + 6, yUjung); ctx.stroke();
    }

    // Balok beban (lebar naik pelan dengan massa)
    const bw = W * (0.08 + 0.05 * Math.sqrt(batas(m / Math.max(0.1, mMaks), 0, 1)));
    ctx.fillStyle = c.aksen;
    ctx.fillRect(cx - bw / 2, yUjung, bw, bh);
    ctx.fillStyle = c.panel;
    ctx.font = '600 ' + ukFont(W) + 'px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('m', cx, yUjung + bh / 2 + 4);

    // Garis putus: panjang alami, dan anak panah pertambahan panjang
    ctx.strokeStyle = c.salah;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath(); ctx.moveTo(cx - W * 0.13, yAlami); ctx.lineTo(cx + W * 0.2, yAlami); ctx.stroke();
    ctx.setLineDash([]);
    const xa = cx + W * 0.16;
    if (yUjung - yAlami > 4) {
      ctx.beginPath();
      ctx.moveTo(xa, yAlami); ctx.lineTo(xa, yUjung);
      ctx.moveTo(xa - 3, yUjung - 5); ctx.lineTo(xa, yUjung); ctx.lineTo(xa + 3, yUjung - 5);
      ctx.stroke();
    }

    // Bacaan nilai
    const f = ukFont(W);
    const lh = Math.max(14, H * 0.1);
    const xt = W * 0.56;
    const baris = [
      ['Susunan: ' + NAMA[mode], c.teks],
      ['k_ef = ' + kef.toFixed(0) + ' N/m', c.teks],
      ['F = m g = ' + F.toFixed(1) + ' N', c.teks],
      ['Δx = ' + (dx * 100).toFixed(1) + ' cm', c.salah],
      ['L = ' + (Ltot * 100).toFixed(1) + ' cm', c.teks],
      ['U = ' + U.toFixed(3) + ' J', c.aksen],
      ['garis putus: L alami', c.teks2]
    ];
    ctx.textAlign = 'left';
    ctx.font = '600 ' + f + 'px system-ui, sans-serif';
    baris.forEach(function (b, i) {
      ctx.fillStyle = b[1];
      if (i === baris.length - 1) ctx.font = f + 'px system-ui, sans-serif';
      ctx.fillText(b[0], xt, H * 0.1 + 6 + i * lh);
    });
  }

  window.Simulasi.daftar('elastisitas-pegas', elastisitasPegas);

  // ---------- Simulasi 2: balok-pegas horizontal dan grafik y-t ----------
  function getaranHarmonikPegas(ctx, u, n, c, def) {
    const W = u.w, H = u.h, pad = W * 0.04;
    const A = Math.max(0, n.A);
    const m = Math.max(0.01, n.m);
    const k = Math.max(0.01, n.k);
    const t = Math.max(0, n.t);

    const w = Math.sqrt(k / m);
    const T = DUAPI / w;
    const f = 1 / T;
    const y = A * Math.sin(w * t);
    const v = A * w * Math.cos(w * t);
    const a = -w * w * y;
    const K = 0.5 * m * v * v;
    const Ue = 0.5 * k * y * y;
    const E = 0.5 * k * A * A;

    const Amaks = Math.max(0.01, ambilParam(def, 'A', 0.2, 'max'));
    const Twin = Math.max(0.5, ambilParam(def, 't', 2, 'max'));
    const fs = ukFont(W);

    // Bacaan nilai (tiga baris)
    ctx.textAlign = 'left';
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    const lh = H * 0.1;
    ctx.fillStyle = c.teks;
    ctx.fillText('T = ' + T.toFixed(2) + ' s  f = ' + f.toFixed(2) + ' Hz  ω = ' + w.toFixed(1) + ' rad/s', pad, H * 0.09 + 4);
    ctx.fillStyle = c.aksen;
    ctx.fillText('y = ' + y.toFixed(3) + ' m  v = ' + v.toFixed(2) + ' m/s  a = ' + a.toFixed(1) + ' m/s²', pad, H * 0.09 + 4 + lh);
    ctx.fillStyle = c.benar;
    ctx.fillText('Ek = ' + K.toFixed(3) + ' J  Ep = ' + Ue.toFixed(3) + ' J  E = ' + E.toFixed(3) + ' J', pad, H * 0.09 + 4 + 2 * lh);

    // Balok dan pegas horizontal
    const yB = H * 0.47;
    const bh = H * 0.12;
    const bw = W * 0.1;
    const xc = W / 2;
    const dinding = pad;
    const skala = Math.max(1, (xc - dinding - bw / 2 - 12) / Amaks);
    const xb = xc + y * skala;

    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(dinding, yB - bh); ctx.lineTo(dinding, yB + bh);
    ctx.moveTo(dinding, yB + bh / 2); ctx.lineTo(W - pad, yB + bh / 2);
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(xc, yB - bh * 0.9); ctx.lineTo(xc, yB + bh / 2); ctx.stroke();
    ctx.setLineDash([]);

    pegasH(ctx, dinding, xb - bw / 2, yB, Math.max(3, bh * 0.28), c.teks2);
    ctx.fillStyle = c.aksen;
    ctx.fillRect(xb - bw / 2, yB - bh / 2, bw, bh);

    // Grafik y-t
    const gx0 = W * 0.09, gx1 = W - pad;
    const gy0 = H * 0.64, gy1 = H * 0.88;
    const gmid = (gy0 + gy1) / 2;
    const gsk = (gy1 - gy0) / 2 * 0.92 / Amaks;
    const X = function (s) { return gx0 + s / Twin * (gx1 - gx0); };
    const Y = function (yy) { return gmid - yy * gsk; };

    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gx0, gy0 - 2); ctx.lineTo(gx0, gy1 + 2);
    ctx.moveTo(gx0, gmid); ctx.lineTo(gx1, gmid);
    ctx.stroke();

    const N = 240;
    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const s = Twin * i / N;
      const px = X(s), py = Y(A * Math.sin(w * s));
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Penanda waktu t
    ctx.strokeStyle = c.salah;
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(X(t), gy0 - 2); ctx.lineTo(X(t), gy1 + 2); ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = c.salah;
    ctx.beginPath(); ctx.arc(X(t), Y(y), 4, 0, DUAPI); ctx.fill();

    ctx.fillStyle = c.teks2;
    ctx.font = fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('y', gx0 + 4, gy0 + 4);
    ctx.fillText('0', gx0, H - 4);
    ctx.textAlign = 'right';
    ctx.fillText('t (s) hingga ' + Twin.toFixed(0) + ' s', gx1, H - 4);
  }

  window.Simulasi.daftar('getaran-harmonik-pegas', getaranHarmonikPegas);
})();
