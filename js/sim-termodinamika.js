/* Simulasi: diagram P-V proses gas ideal monoatomik (gamma = 5/3).
   Konvensi: W = usaha OLEH gas, Q positif bila kalor masuk, dU = Q - W. */
(function () {
  'use strict';

  const R = 8.31, GAMMA = 5 / 3, V1 = 0.010; // volume awal tetap 10 L

  function batas(x, a, b) { return Math.min(b, Math.max(a, x)); }

  function fmtJ(x) {
    if (Math.abs(x) < 0.5) return '0 J';
    if (Math.abs(x) >= 10000) return (x / 1000).toFixed(1) + ' kJ';
    return Math.round(x) + ' J';
  }

  // Kecilkan huruf sampai teks muat (atau sampai ukuran minimum).
  function muat(ctx, teks, lebarMaks, ukuran, tebal) {
    let s = ukuran;
    ctx.font = (tebal ? '600 ' : '') + s + 'px system-ui, sans-serif';
    while (s > 10 && ctx.measureText(teks).width > lebarMaks) {
      s -= 1;
      ctx.font = (tebal ? '600 ' : '') + s + 'px system-ui, sans-serif';
    }
  }

  function termodinamikaPV(ctx, u, n, c) {
    const W = u.w, H = u.h;
    const fs = W < 450 ? 11 : (W < 750 ? 12 : 13);
    const proses = batas(Math.round(n.proses), 1, 4);
    const mol = Math.max(0.1, n.n);
    const T1 = Math.max(50, n.T1);
    const rv = Math.max(0.05, n.rv);

    // ----- Keadaan awal dan akhir -----
    const P1 = mol * R * T1 / V1;               // Pa
    let V2, P2, T2, Wg, dU, Q;
    const nama = ['Isobarik (P tetap)', 'Isokhorik: V tetap, T2 = 2 T1', 'Isotermal (T tetap)', 'Adiabatik (Q = 0)'][proses - 1];
    let kurva; // fungsi P(V) untuk tekanan sepanjang proses
    if (proses === 1) {
      V2 = V1 * rv; P2 = P1; T2 = T1 * rv;
      Wg = P1 * (V2 - V1);
      kurva = function () { return P1; };
    } else if (proses === 2) {
      V2 = V1; P2 = 2 * P1; T2 = 2 * T1;
      Wg = 0;
      kurva = null;
    } else if (proses === 3) {
      V2 = V1 * rv; P2 = P1 / rv; T2 = T1;
      Wg = mol * R * T1 * Math.log(rv);
      kurva = function (v) { return P1 * V1 / v; };
    } else {
      V2 = V1 * rv; P2 = P1 * Math.pow(V1 / V2, GAMMA); T2 = T1 * Math.pow(V1 / V2, GAMMA - 1);
      Wg = (P1 * V1 - P2 * V2) / (GAMMA - 1);
      kurva = function (v) { return P1 * Math.pow(V1 / v, GAMMA); };
    }
    dU = 1.5 * mol * R * (T2 - T1);
    Q = dU + Wg;

    // ----- Titik sepanjang lintasan -----
    const pts = [];
    const N = 60;
    for (let i = 0; i <= N; i++) {
      const f = i / N;
      if (proses === 2) pts.push([V1, P1 + (P2 - P1) * f]);
      else { const v = V1 + (V2 - V1) * f; pts.push([v, kurva(v)]); }
    }

    // ----- Skala sumbu (selalu dari 0 agar luas terlihat) -----
    let Vmaks = Math.max(V1, V2), Pmaks = Math.max(P1, P2);
    pts.forEach(function (p) { if (p[1] > Pmaks) Pmaks = p[1]; });
    Vmaks *= 1.15; Pmaks *= 1.15;

    // ----- Tata letak -----
    const pad = 8;
    const x0 = pad + 36, x1 = Math.max(x0 + 60, W * 0.58);
    const y0 = 58, y1 = H - 24;
    const X = function (v) { return x0 + (v / Vmaks) * (x1 - x0); };
    const Y = function (p) { return y1 - (p / Pmaks) * (y1 - y0); };

    // Judul proses
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    muat(ctx, nama, W - 2 * pad, fs + 1, true);
    ctx.fillText(nama, pad, 17);
    ctx.fillStyle = c.teks2;
    ctx.font = fs + 'px system-ui, sans-serif';
    ctx.fillText('n = ' + mol.toFixed(1) + ' mol, T1 = ' + Math.round(T1) + ' K', pad, 33);

    // Sumbu
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x0, y0 - 4); ctx.lineTo(x0, y1); ctx.lineTo(x1 + 4, y1);
    ctx.stroke();

    // Area di bawah kurva (usaha)
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = Wg < 0 ? c.salah : c.aksen;
    ctx.beginPath();
    ctx.moveTo(X(pts[0][0]), Y(0));
    pts.forEach(function (p) { ctx.lineTo(X(p[0]), Y(p[1])); });
    ctx.lineTo(X(pts[N][0]), Y(0));
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    // Kurva proses
    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    pts.forEach(function (p, i) { if (i === 0) ctx.moveTo(X(p[0]), Y(p[1])); else ctx.lineTo(X(p[0]), Y(p[1])); });
    ctx.stroke();

    // Kepala panah di ujung kurva
    const a = pts[N - 2], b = pts[N];
    const dx = X(b[0]) - X(a[0]), dy = Y(b[1]) - Y(a[1]);
    const L = Math.hypot(dx, dy);
    if (L > 0.5) {
      const ux = dx / L, uy = dy / L, k = 8;
      ctx.fillStyle = c.aksen;
      ctx.beginPath();
      ctx.moveTo(X(b[0]), Y(b[1]));
      ctx.lineTo(X(b[0]) - k * ux + k * 0.5 * uy, Y(b[1]) - k * uy - k * 0.5 * ux);
      ctx.lineTo(X(b[0]) - k * ux - k * 0.5 * uy, Y(b[1]) - k * uy + k * 0.5 * ux);
      ctx.closePath();
      ctx.fill();
    }

    // Titik keadaan 1 dan 2
    ctx.fillStyle = c.benar;
    ctx.beginPath(); ctx.arc(X(V1), Y(P1), 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = c.salah;
    ctx.beginPath(); ctx.arc(X(V2), Y(P2), 4, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = c.teks;
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('1', X(V1) + 6, Y(P1) - 5);
    ctx.fillText('2', X(V2) + 6, Y(P2) - 5);

    // Label sumbu dan angka ujung
    ctx.fillStyle = c.teks2;
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(String(Math.round(Pmaks / 1000)), x0 - 4, y0 + 4);
    ctx.fillText('0', x0 - 4, y1 + 1);
    ctx.textAlign = 'left';
    ctx.fillText('P (kPa)', pad, y0 - 6);
    ctx.textAlign = 'center';
    ctx.fillText('V (L): 0 sampai ' + (Vmaks * 1000).toFixed(0), (x0 + x1) / 2, H - 6);

    // Bacaan nilai di kanan
    const xt = Math.min(x1 + 12, W - 70);
    const yt = y0 + 4, dy2 = Math.max(16, Math.min(22, (y1 - y0) / 5));
    const baris = [
      ['W = ' + fmtJ(Wg), c.aksen],
      ['ΔU = ' + fmtJ(dU), c.teks],
      ['Q = ' + fmtJ(Q), c.teks],
      ['T2 = ' + Math.round(T2) + ' K', c.teks2],
      [Wg < 0 ? 'W < 0: gas dimampatkan' : (Wg > 0 ? 'W > 0: gas memuai' : 'W = 0: V tetap'), c.teks2]
    ];
    ctx.textAlign = 'left';
    baris.forEach(function (bb, i) {
      ctx.fillStyle = bb[1];
      muat(ctx, bb[0], W - xt - pad, i < 4 ? fs + 1 : fs - 1, i < 3);
      ctx.fillText(bb[0], xt, yt + 10 + i * dy2);
    });
  }

  window.Simulasi.daftar('termodinamika-pv', termodinamikaPV);
})();
