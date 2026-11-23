(function () {
  'use strict';

  // Panah dari (x0,y0) dengan vektor (dx,dy). putus: true untuk garis putus-putus.
  function panah(ctx, x0, y0, dx, dy, warna, putus, tebal) {
    const L = Math.hypot(dx, dy);
    if (!(L >= 2)) return;
    const ux = dx / L, uy = dy / L, k = Math.min(7, L * 0.6);
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = tebal || 2.5;
    if (putus) ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x0 + dx - ux * k * 0.5, y0 + dy - uy * k * 0.5); ctx.stroke();
    if (putus) ctx.setLineDash([]);
    ctx.beginPath();
    ctx.moveTo(x0 + dx, y0 + dy);
    ctx.lineTo(x0 + dx - k * ux + k * 0.5 * uy, y0 + dy - k * uy - k * 0.5 * ux);
    ctx.lineTo(x0 + dx - k * ux - k * 0.5 * uy, y0 + dy - k * uy + k * 0.5 * ux);
    ctx.closePath();
    ctx.fill();
  }

  function dinamikaBidangMiring(ctx, u, n, c) {
    const W = u.w, H = u.h, g = 10;
    const fs = W < 450 ? 11 : 12;

    // Parameter (dijaga dalam rentang yang wajar)
    const deg = Math.min(85, Math.max(0, Number(n.sudut) || 0));
    const th = deg * Math.PI / 180;
    const m = Math.max(0.1, Number(n.massa) || 1);
    const mus = Math.max(0, Number(n.mus) || 0);
    const mukIn = Math.max(0, Number(n.muk) || 0);
    const muk = Math.min(mukIn, mus);          // mu_k > mu_s ditangani dengan min
    const dipaksa = mukIn > mus;

    // Fisika
    const sn = Math.sin(th), cs = Math.cos(th);
    const berat = m * g;
    const N = berat * cs;
    const tarik = berat * sn;                  // komponen berat sejajar bidang
    const fmaks = mus * N;
    const meluncur = tarik > fmaks + 1e-9;
    const f = meluncur ? muk * N : tarik;      // statis: seimbang dengan tarik
    const a = meluncur ? Math.max(0, (tarik - f) / m) : 0;

    // Tata letak
    const Lmax = Math.max(18, 0.22 * H);       // panjang panah mg
    const kiri = 8, areaW = W * 0.58;
    const yb = H - Lmax - 8;                   // garis dasar
    const Lh = Math.max(40, 0.95 * Math.min(areaW - kiri, yb - 10));
    const Lx = Lh * cs, Ly = Lh * sn;
    const x0 = kiri + (areaW - kiri - Lx) / 2;
    const px = x0 + Lx, py = yb - Ly;

    // Bidang miring
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = c.aksen;
    ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(px, yb); ctx.lineTo(px, py); ctx.closePath(); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(px, yb); ctx.lineTo(px, py); ctx.closePath(); ctx.stroke();
    ctx.strokeStyle = c.teks2;
    ctx.beginPath(); ctx.moveTo(x0, yb); ctx.lineTo(px, py); ctx.stroke();

    // Busur sudut
    if (deg > 0.5) {
      ctx.strokeStyle = c.teks2;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(x0, yb, Math.max(6, Lh * 0.16), -th, 0, false); ctx.stroke();
    }

    // Balok (di tengah bidang)
    const s = Math.max(10, Lh * 0.13);
    const ux = cs, uy = -sn;                   // arah naik sepanjang bidang
    const nx = -sn, ny = -cs;                  // normal keluar bidang
    const sx = x0 + 0.5 * Lx, sy = yb - 0.5 * Ly;
    const bx = sx + nx * s / 2, by = sy + ny * s / 2;
    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(-th);
    ctx.fillStyle = c.panel;
    ctx.fillRect(-s / 2, -s / 2, s, s);
    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2;
    ctx.strokeRect(-s / 2, -s / 2, s, s);
    ctx.restore();

    // Panah gaya dari pusat balok
    const skala = Lmax / berat;
    // komponen mg (putus-putus)
    panah(ctx, bx, by, -ux * tarik * skala, -uy * tarik * skala, c.teks2, true, 1.5);
    panah(ctx, bx, by, -nx * N * skala, -ny * N * skala, c.teks2, true, 1.5);
    // mg, N, f
    panah(ctx, bx, by, 0, Lmax, c.teks, false, 2.5);
    panah(ctx, bx, by, nx * N * skala, ny * N * skala, c.benar, false, 2.5);
    panah(ctx, bx, by, ux * f * skala, uy * f * skala, c.salah, false, 2.5);

    // Label panah (dijepit agar tidak keluar area gambar)
    const klip = function (v, lo, hi) { return Math.max(lo, Math.min(hi, v)); };
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    ctx.fillText('mg', klip(bx + 4, 2, areaW - 16), klip(by + Lmax + 2, 12, H - 3));
    if (N * skala > 6) {
      ctx.fillStyle = c.benar;
      ctx.fillText('N', klip(bx + nx * N * skala - 4, 2, areaW - 12), klip(by + ny * N * skala - 3, 12, H - 3));
    }
    if (f * skala > 6) {
      ctx.fillStyle = c.salah;
      ctx.fillText('f', klip(bx + ux * f * skala + 4, 2, areaW - 12), klip(by + uy * f * skala - 2, 12, H - 3));
    }

    // Bacaan nilai
    const xt = W * 0.62, dy = fs + 6;
    let y = 18;
    ctx.textAlign = 'left';
    ctx.font = '600 ' + fs + 'px system-ui, sans-serif';
    ctx.fillStyle = meluncur ? c.salah : c.benar;
    ctx.fillText(meluncur ? 'Balok meluncur' : 'Balok diam', xt, y); y += dy;
    ctx.fillStyle = c.teks;
    ctx.fillText('a = ' + a.toFixed(2) + ' m/s²', xt, y); y += dy;
    ctx.fillText('f = ' + f.toFixed(1) + ' N', xt, y); y += dy;
    ctx.font = fs + 'px system-ui, sans-serif';
    ctx.fillStyle = c.teks2;
    ctx.fillText('mg sin θ = ' + tarik.toFixed(1) + ' N', xt, y); y += dy;
    ctx.fillText('N = ' + N.toFixed(1) + ' N', xt, y); y += dy;
    ctx.fillText('f maks = ' + fmaks.toFixed(1) + ' N', xt, y); y += dy;
    ctx.fillText('θ = ' + deg.toFixed(0) + '°', xt, y); y += dy;
    if (dipaksa) {
      ctx.fillStyle = c.teks2;
      ctx.fillText('μk dipakai = μs', xt, y);
    }
  }

  window.Simulasi.daftar('dinamika-bidang-miring', dinamikaBidangMiring);
})();
