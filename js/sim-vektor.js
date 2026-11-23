(function () {
  'use strict';

  function panah(ctx, x1, y1, x2, y2, warna, tebal, kepala) {
    const dx = x2 - x1, dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = tebal;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    if (len < 2) return;
    const k = Math.min(kepala, len * 0.6);
    const a = Math.atan2(dy, dx);
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(x2 - k * Math.cos(a - 0.4), y2 - k * Math.sin(a - 0.4));
    ctx.lineTo(x2 - k * Math.cos(a + 0.4), y2 - k * Math.sin(a + 0.4));
    ctx.closePath();
    ctx.fill();
  }

  function vektorResultan(ctx, u, n, c) {
    const w = u.w, h = u.h;
    const kecil = w < 460;
    const fs = kecil ? 11 : 12;
    const rad = Math.PI / 180;
    const A = Math.max(0, n.A), B = Math.max(0, n.B);
    const ax = A * Math.cos(n.thA * rad), ay = A * Math.sin(n.thA * rad);
    const bx = B * Math.cos(n.thB * rad), by = B * Math.sin(n.thB * rad);
    const rx = ax + bx, ry = ay + by;
    const R = Math.sqrt(rx * rx + ry * ry);
    let arah = Math.atan2(ry, rx) / rad;
    if (arah < 0) arah += 360;
    if (R < 1e-9) arah = 0;

    ctx.fillStyle = c.panel;
    ctx.fillRect(0, 0, w, h);

    // Area gambar: kiri; bacaan angka: bawah (lebar kecil) atau kanan.
    const bacaH = kecil ? h * 0.26 : 0;
    const bacaW = kecil ? 0 : w * 0.33;
    const gx0 = 6, gy0 = 6;
    const gw = w - bacaW - 12, gh = h - bacaH - 12;

    // Jangkauan koordinat: semua titik (0, A, A+B) harus muat.
    const xs = [0, ax, rx], ys = [0, ay, ry];
    const xmin = Math.min.apply(null, xs), xmax = Math.max.apply(null, xs);
    const ymin = Math.min.apply(null, ys), ymax = Math.max.apply(null, ys);
    const pad = 14;
    const rentX = Math.max(xmax - xmin, 1), rentY = Math.max(ymax - ymin, 1);
    const skala = Math.max(Math.min((gw - 2 * pad) / rentX, (gh - 2 * pad) / rentY), 1e-6);
    const ox = gx0 + pad + (gw - 2 * pad - rentX * skala) / 2 - xmin * skala;
    const oy = gy0 + gh - pad - (gh - 2 * pad - rentY * skala) / 2 + ymin * skala;
    const X = function (x) { return ox + x * skala; };
    const Y = function (y) { return oy - y * skala; };

    // Sumbu (melewati titik asal, dipotong ke area gambar)
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    const sy = Math.min(Math.max(Y(0), gy0), gy0 + gh);
    const sx = Math.min(Math.max(X(0), gx0), gx0 + gw);
    ctx.beginPath();
    ctx.moveTo(gx0, sy); ctx.lineTo(gx0 + gw, sy);
    ctx.moveTo(sx, gy0); ctx.lineTo(sx, gy0 + gh);
    ctx.stroke();
    ctx.fillStyle = c.teks2;
    ctx.font = fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'bottom';
    ctx.fillText('x', gx0 + gw - 2, Math.max(sy - 2, gy0 + fs + 2));
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    ctx.fillText('y', Math.min(sx + 4, gx0 + gw - 10), gy0 + 1);

    // Vektor A (asal -> A), B (kepala A -> R), R (asal -> R)
    const tb = kecil ? 2 : 2.5, kp = kecil ? 8 : 10;
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = c.teks2;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(X(0), Y(0));
    ctx.lineTo(X(rx), Y(0));
    ctx.lineTo(X(rx), Y(ry));
    ctx.stroke();
    ctx.setLineDash([]);

    panah(ctx, X(0), Y(0), X(ax), Y(ay), c.aksen, tb, kp);
    panah(ctx, X(ax), Y(ay), X(rx), Y(ry), c.benar, tb, kp);
    panah(ctx, X(0), Y(0), X(rx), Y(ry), c.salah, tb + 0.5, kp + 1);

    ctx.fillStyle = c.teks;
    ctx.beginPath();
    ctx.arc(X(0), Y(0), 3, 0, Math.PI * 2);
    ctx.fill();

    // Label vektor di tengah masing-masing panah
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const label = function (t, x, y, col, geserX, geserY) {
      const lx = Math.min(Math.max(x + geserX, gx0 + 8), gx0 + gw - 8);
      const ly = Math.min(Math.max(y + geserY, gy0 + 8), gy0 + gh - 8);
      ctx.fillStyle = col;
      ctx.fillText(t, lx, ly);
    };
    const norm = function (dx, dy) {
      const l = Math.sqrt(dx * dx + dy * dy);
      return l < 1e-9 ? [0, 0] : [dx / l, dy / l];
    };
    const nA = norm(ay, -ax), nB = norm(by, -bx), nR = norm(-ry, rx);
    label('A', X(ax / 2), Y(ay / 2), c.aksen, nA[0] * 10, -nA[1] * 10);
    label('B', X(ax + bx / 2), Y(ay + by / 2), c.benar, nB[0] * 10, -nB[1] * 10);
    label('R', X(rx / 2), Y(ry / 2), c.salah, nR[0] * 10, -nR[1] * 10);

    // Bacaan angka
    const fmt = function (v) { return (Math.round(v * 100) / 100).toFixed(2).replace('.', ','); };
    const baris = [
      '|R| = ' + fmt(R) + ' satuan',
      'arah R = ' + fmt(arah) + '°',
      'Rx = ' + fmt(rx) + '   Ry = ' + fmt(ry)
    ];
    ctx.font = fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    if (kecil) {
      const y0 = h - bacaH + 2;
      const lh = Math.min(fs + 3, (bacaH - 2) / 3);
      baris.forEach(function (t, i) {
        ctx.fillStyle = i === 0 ? c.salah : c.teks;
        ctx.fillText(t, 8, y0 + i * lh);
      });
    } else {
      const x0 = w - bacaW + 4;
      ctx.fillStyle = c.teks2;
      ctx.fillText('Bacaan', x0, 10);
      baris.forEach(function (t, i) {
        ctx.fillStyle = i === 0 ? c.salah : c.teks;
        ctx.fillText(t, x0, 32 + i * 22);
      });
      ctx.fillStyle = c.teks2;
      ctx.fillText('Biru: A', x0, 32 + 3 * 22 + 8);
      ctx.fillText('Hijau: B (dari kepala A)', x0, 32 + 4 * 22 + 8);
      ctx.fillText('Merah: R = A + B', x0, 32 + 5 * 22 + 8);
    }
  }

  window.Simulasi.daftar('vektor-resultan', vektorResultan);
})();
