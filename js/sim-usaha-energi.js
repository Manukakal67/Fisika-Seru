/* Simulasi bab Usaha dan Energi: benda meluncur pada lintasan berprofil
   (bukit dan lembah), dengan batang energi potensial, kinetik, mekanik, dan kalor.
   Profil lintasan: tinggi y(x) = h0 * f(x), f memakai interpolasi Hermite yang halus.
   Panjang mendatar lintasan L = 4 h0 (skala lintasan mengikuti tinggi awal),
   sehingga usaha gesek kinetik = mu m g (jarak mendatar), karena mu m g cos(theta) ds = mu m g dx. */
(function () {
  'use strict';

  const G = 10;

  // Titik kunci profil (x dari 0 sampai 1, f dari 0 sampai 1) dan kemiringan di tiap titik.
  const KX = [0, 0.35, 0.7, 1];
  const KF = [1, 0.05, 0.6, 0.2];
  const KM = [-2.5, 0, 0, 0];

  function profil(x) {
    const xc = Math.min(1, Math.max(0, x));
    let i = 0;
    while (i < KX.length - 2 && xc > KX[i + 1]) i++;
    const d = KX[i + 1] - KX[i];
    const t = (xc - KX[i]) / d;
    const t2 = t * t, t3 = t2 * t;
    const h00 = 2 * t3 - 3 * t2 + 1, h10 = t3 - 2 * t2 + t;
    const h01 = -2 * t3 + 3 * t2, h11 = t3 - t2;
    return h00 * KF[i] + h10 * d * KM[i] + h01 * KF[i + 1] + h11 * d * KM[i + 1];
  }

  function lintasanBenda(ctx, u, n, c) {
    const W = u.w, H = u.h;
    const pad = Math.max(8, Math.round(W * 0.03));
    const h0 = Math.max(0.1, n.h0);
    const m = Math.max(0.01, n.m);
    const mu = Math.max(0, n.mu);
    const pos = Math.min(100, Math.max(0, n.pos)) / 100;
    const L = 4 * h0;              // panjang mendatar lintasan (m)
    const E0 = m * G * h0;         // energi mekanik awal (J)

    // Cari posisi terjauh yang dapat dicapai (energi kinetik tidak boleh negatif).
    const N = 400;
    let xStop = 1, berhenti = false;
    for (let i = 0; i <= N; i++) {
      const x = i / N;
      const K = E0 - mu * m * G * L * x - m * G * h0 * profil(x);
      if (K < -1e-9) { xStop = Math.max(0, (i - 1) / N); berhenti = true; break; }
    }
    const xp = Math.min(pos, xStop);
    const tinggi = h0 * profil(xp);
    const Q = mu * m * G * L * xp;
    const Em = Math.max(0, E0 - Q);
    const U = m * G * tinggi;
    const K = Math.max(0, Em - U);
    const v = Math.sqrt(2 * K / m);
    const hMek = Em / (m * G);     // tinggi setara energi mekanik

    // Tata letak
    const yAtas = 34, yDasar = Math.round(H * 0.57);
    const kiri = pad + 4, kanan = W - pad - 4;
    const skala = (yDasar - yAtas) / 10;   // piksel per meter, rentang 0..10 m
    const PX = function (x) { return kiri + x * (kanan - kiri); };
    const PY = function (h) { return yDasar - h * skala; };

    // Bacaan nilai di atas
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    ctx.font = '600 12px system-ui, sans-serif';
    ctx.fillText('posisi ' + Math.round(xp * 100) + '%  h = ' + tinggi.toFixed(1) + ' m  v = ' + v.toFixed(1) + ' m/s', pad, 16);

    // Tanah dan profil lintasan (area transparan)
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(kiri, yDasar); ctx.lineTo(kanan, yDasar); ctx.stroke();

    const M = 80;
    ctx.globalAlpha = 0.18;
    ctx.fillStyle = c.teks2;
    ctx.beginPath();
    ctx.moveTo(PX(0), yDasar);
    for (let i = 0; i <= M; i++) ctx.lineTo(PX(i / M), PY(h0 * profil(i / M)));
    ctx.lineTo(PX(1), yDasar);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = c.teks2;
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i <= M; i++) {
      const px = PX(i / M), py = PY(h0 * profil(i / M));
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.stroke();

    // Garis tinggi awal (titik-titik) dan garis setara energi mekanik (putus-putus)
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 4]);
    ctx.strokeStyle = c.garis;
    ctx.beginPath(); ctx.moveTo(kiri, PY(h0)); ctx.lineTo(kanan, PY(h0)); ctx.stroke();
    ctx.setLineDash([5, 4]);
    ctx.strokeStyle = c.teks;
    ctx.beginPath(); ctx.moveTo(kiri, PY(hMek)); ctx.lineTo(kanan, PY(hMek)); ctx.stroke();
    ctx.setLineDash([]);

    // Benda
    const r = Math.max(4, Math.round(W * 0.016));
    const bx = PX(xp), by = PY(tinggi) - r - 1;
    ctx.fillStyle = c.aksen;
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = c.teks;
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(bx, by, r, 0, Math.PI * 2); ctx.stroke();

    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = c.teks2;
    ctx.textAlign = 'left';
    ctx.fillText('tinggi awal ' + h0.toFixed(1) + ' m', kiri + 2, yAtas - 4);
    if (berhenti && pos > xStop + 1e-9) {
      ctx.textAlign = 'right';
      ctx.fillStyle = c.salah;
      ctx.fillText('berhenti: energi tidak cukup', kanan, yDasar - 4);
    }

    // Batang energi
    const baris = [
      ['Ep', U, c.aksen],
      ['Ek', K, c.benar],
      ['Em', Em, c.teks]
    ];
    if (mu > 0.0005) baris.push(['Q', Q, c.salah]);
    const yBar0 = yDasar + 8;
    const rh = (H - 4 - yBar0) / baris.length;
    const xB0 = pad + 24, xB1 = W - pad - 52;
    baris.forEach(function (b, i) {
      const y = yBar0 + i * rh;
      const tinggiBar = Math.max(4, rh - 4);
      const frak = Math.min(1, Math.max(0, b[1] / E0));
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = c.garis;
      ctx.fillRect(xB0, y + 1, xB1 - xB0, tinggiBar);
      ctx.globalAlpha = 1;
      ctx.fillStyle = b[2];
      ctx.fillRect(xB0, y + 1, (xB1 - xB0) * frak, tinggiBar);
      ctx.font = '600 11px system-ui, sans-serif';
      ctx.fillStyle = c.teks;
      ctx.textAlign = 'left';
      ctx.fillText(b[0], pad, y + tinggiBar - 1);
      ctx.textAlign = 'right';
      ctx.fillText(b[1].toFixed(1) + ' J', W - pad, y + tinggiBar - 1);
    });
  }

  window.Simulasi.daftar('usaha-energi-lintasan', lintasanBenda);
})();
