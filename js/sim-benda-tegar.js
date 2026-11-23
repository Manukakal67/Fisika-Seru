(function () {
  'use strict';

  // Balapan dua benda yang menggelinding tanpa slip di bidang miring.
  // a = g sin(theta) / (1 + k), posisi s = 1/2 a t^2, sudut putar = s / R.
  var G = 10;          // m/s^2
  var PANJANG = 5;     // panjang bidang miring (m)
  var RFIS = 0.25;     // jari-jari kedua benda (m)

  var BENTUK = [
    { k: 0.4, nama: 'bola pejal' },
    { k: 0.5, nama: 'silinder pejal' },
    { k: 2 / 3, nama: 'bola berongga' },
    { k: 1, nama: 'cincin' }
  ];

  function namaBentuk(k) {
    for (var i = 0; i < BENTUK.length; i++) {
      if (Math.abs(k - BENTUK[i].k) <= 0.015) return BENTUK[i].nama;
    }
    return 'k = ' + k.toFixed(2);
  }

  function fmt(x, d) { return x.toFixed(d); }

  // Benda: lingkaran dengan dua diameter berputar dan titik penanda.
  function gambarBenda(ctx, x, y, r, sudut, warna, k) {
    ctx.fillStyle = warna;
    ctx.globalAlpha = 0.22;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = warna;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
    // Benda pejal digambar dengan lingkaran dalam kecil bila k kecil (massa dekat poros).
    var rd = r * Math.max(0.15, Math.min(0.95, Math.sqrt(Math.max(k, 0.05)) * 1.0));
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(x, y, Math.max(rd, 1), 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 2;
    var cs = Math.cos(sudut), sn = Math.sin(sudut);
    ctx.beginPath();
    ctx.moveTo(x - r * cs, y - r * sn); ctx.lineTo(x + r * cs, y + r * sn);
    ctx.moveTo(x + r * sn, y - r * cs); ctx.lineTo(x - r * sn, y + r * cs);
    ctx.stroke();
    ctx.fillStyle = warna;
    ctx.beginPath(); ctx.arc(x + r * 0.8 * cs, y + r * 0.8 * sn, Math.max(r * 0.16, 1.5), 0, Math.PI * 2); ctx.fill();
  }

  function bendaTegarMenggelinding(ctx, u, n, c) {
    var W = u.w, H = u.h;
    var thDeg = Math.max(1, Math.min(80, n.theta));
    var th = thDeg * Math.PI / 180;
    var kA = Math.max(0.05, n.kA), kB = Math.max(0.05, n.kB);
    var t = Math.max(0, n.t);
    var sin = Math.sin(th), cos = Math.cos(th);

    var aA = G * sin / (1 + kA), aB = G * sin / (1 + kB);
    var tA = Math.sqrt(2 * PANJANG / aA), tB = Math.sqrt(2 * PANJANG / aB);
    var tt = [Math.min(t, tA), Math.min(t, tB)];
    var sA = 0.5 * aA * tt[0] * tt[0], sB = 0.5 * aB * tt[1] * tt[1];
    var vA = aA * tt[0], vB = aB * tt[1];

    // Area gambar bidang miring
    var yR = H * 0.58;
    var r = Math.max(4, Math.min(H * 0.05, 18));
    var off = 2.7 * r;                 // jarak rel B dari rel A (arah normal)
    var E = off + 2 * r;               // jangkauan benda ke arah normal
    var mar = 10;
    var xr = W - mar - E * sin;        // ujung bawah bidang (kanan)
    var Lp = Math.min((xr - mar - r) / cos, (yR - mar - E * cos) / sin);
    Lp = Math.max(Lp, 20);
    var x0 = xr - Lp * cos, y0 = yR - Lp * sin;   // ujung atas rel A

    // Alas dan bidang miring
    ctx.strokeStyle = c.garis;
    ctx.fillStyle = c.garis;
    ctx.globalAlpha = 0.25;
    ctx.beginPath();
    ctx.moveTo(x0, y0); ctx.lineTo(xr, yR); ctx.lineTo(x0, yR); ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x0, y0); ctx.lineTo(xr, yR); ctx.lineTo(x0, yR); ctx.closePath();
    ctx.stroke();

    // Rel kedua (jalur B) sejajar, digeser ke arah normal
    var nx = sin, ny = -cos;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 3]);
    ctx.beginPath();
    ctx.moveTo(x0 + off * nx, y0 + off * ny); ctx.lineTo(xr + off * nx, yR + off * ny);
    ctx.stroke();
    ctx.setLineDash([]);

    // Garis finis
    ctx.strokeStyle = c.teks2;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(xr, yR); ctx.lineTo(xr + (off + r) * nx, yR + (off + r) * ny);
    ctx.stroke();

    // Sudut bidang
    ctx.strokeStyle = c.teks2;
    var rs = Math.min(Lp * 0.25, 26);
    ctx.beginPath(); ctx.arc(xr, yR, Math.max(rs, 2), Math.PI, Math.PI + th); ctx.stroke();

    // Benda A (rel bawah) dan B (rel atas)
    var pA = (sA / PANJANG) * Lp, pB = (sB / PANJANG) * Lp;
    var ax = x0 + pA * cos + r * nx, ay = y0 + pA * sin + r * ny;
    var bx = x0 + pB * cos + (off + r) * nx, by = y0 + pB * sin + (off + r) * ny;
    gambarBenda(ctx, ax, ay, r, sA / RFIS, c.aksen, kA);
    gambarBenda(ctx, bx, by, r, sB / RFIS, c.salah, kB);

    // Bacaan
    var fs = W < 450 ? 11 : (W < 700 ? 12 : 13);
    var sp = (H - yR - 4) / 4;
    ctx.textAlign = 'left';
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    var pad = 10;
    var nA = namaBentuk(kA), nB = namaBentuk(kB);
    var lebih;
    if (Math.abs(kA - kB) < 0.005) lebih = 'Seri (k sama), tiba bersamaan';
    else if (kA < kB) lebih = 'Tiba lebih dulu: A (' + fmt(tA, 2) + ' s) vs B (' + fmt(tB, 2) + ' s)';
    else lebih = 'Tiba lebih dulu: B (' + fmt(tB, 2) + ' s) vs A (' + fmt(tA, 2) + ' s)';
    var baris = [
      ['θ = ' + fmt(thDeg, 0) + '°   t = ' + fmt(t, 1) + ' s', c.teks],
      ['A (' + nA + ') a=' + fmt(aA, 2) + ' m/s² v=' + fmt(vA, 1) + ' m/s' + (t >= tA ? ' tiba' : ''), c.aksen],
      ['B (' + nB + ') a=' + fmt(aB, 2) + ' m/s² v=' + fmt(vB, 1) + ' m/s' + (t >= tB ? ' tiba' : ''), c.salah],
      [lebih, c.teks]
    ];
    for (var i = 0; i < baris.length; i++) {
      ctx.fillStyle = baris[i][1];
      ctx.fillText(baris[i][0], pad, yR + sp * (i + 0.8));
    }
  }

  window.Simulasi.daftar('benda-tegar-menggelinding', bendaTegarMenggelinding);
})();
