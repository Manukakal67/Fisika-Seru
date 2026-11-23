(function () {
  'use strict';

  function fmt(x, d) {
    if (!isFinite(x)) x = 0;
    return x.toFixed(d).replace('.', ',');
  }

  function panah(ctx, x, y1, y2, warna) {
    // panah vertikal dari y1 ke y2
    const arah = y2 >= y1 ? 1 : -1;
    const kep = 6;
    ctx.strokeStyle = warna;
    ctx.fillStyle = warna;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2 - arah * kep); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y2);
    ctx.lineTo(x - 4, y2 - arah * kep);
    ctx.lineTo(x + 4, y2 - arah * kep);
    ctx.closePath(); ctx.fill();
    ctx.lineWidth = 1;
  }

  function apung(ctx, u, n, c) {
    const W = u.w, H = u.h;
    const rb = Math.max(1, n.rhoB), rf = Math.max(1, n.rhoF);
    const Vcm = Math.max(1, n.vol);
    const D = Math.max(10, n.dalam);
    const g = 10;
    const V = Vcm * 1e-6;
    const s = Math.cbrt(Vcm);                 // sisi kubus (cm)
    const rasio = rb / rf;
    const melayang = Math.abs(rasio - 1) < 0.005;
    const status = melayang ? 'melayang' : (rasio < 1 ? 'terapung' : 'tenggelam');
    const frak = melayang || rasio > 1 ? 1 : rasio;
    const berat = rb * V * g;
    const FA = rf * g * V * frak;

    // Bejana (kiri)
    const bx = 8, bw = W * 0.5;
    const by = H * 0.14, bh = H * 0.78;
    const pxcm = bh / D;                       // piksel per cm vertikal
    const Hf = 0.7 * D;                        // kedalaman fluida (cm)
    const yPerm = by + bh - Hf * pxcm;         // permukaan fluida
    let sp = s * pxcm;
    sp = Math.max(6, Math.min(sp, bw * 0.55));
    const bxc = bx + bw / 2;

    // Fluida
    ctx.globalAlpha = 0.28;
    ctx.fillStyle = c.aksen;
    ctx.fillRect(bx, yPerm, bw, by + bh - yPerm);
    ctx.globalAlpha = 1;

    // Posisi balok (sisi atas)
    let yAtas;
    const dalamTc = frak * sp;                 // bagian tercelup (piksel)
    if (status === 'terapung') yAtas = yPerm + dalamTc - sp;
    else if (status === 'melayang') yAtas = yPerm + (by + bh - yPerm - sp) / 2;
    else yAtas = by + bh - sp;
    const xBalok = bxc - sp / 2;

    // Balok
    ctx.globalAlpha = 0.85;
    ctx.fillStyle = c.teks2;
    ctx.fillRect(xBalok, yAtas, sp, sp);
    ctx.globalAlpha = 1;
    ctx.strokeStyle = c.teks;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(xBalok, yAtas, sp, sp);
    ctx.lineWidth = 1;

    // Garis permukaan dan dinding bejana
    ctx.strokeStyle = c.aksen;
    ctx.beginPath(); ctx.moveTo(bx, yPerm); ctx.lineTo(bx + bw, yPerm); ctx.stroke();
    ctx.strokeStyle = c.teks;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(bx, by); ctx.lineTo(bx, by + bh); ctx.lineTo(bx + bw, by + bh); ctx.lineTo(bx + bw, by);
    ctx.stroke();
    ctx.lineWidth = 1;

    // Panah gaya (berat ke bawah, gaya apung ke atas) dari pusat balok
    const yPusat = yAtas + sp / 2;
    const Lmaks = Math.max(14, Math.min(bh * 0.3, 60));
    const Fm = Math.max(berat, FA, 1e-9);
    const Lw = 8 + (Lmaks - 8) * berat / Fm;
    const La = 8 + (Lmaks - 8) * FA / Fm;
    panah(ctx, bxc - sp * 0.25, yPusat, yPusat + Lw, c.salah);
    panah(ctx, bxc + sp * 0.25, yPusat, yPusat - La, c.benar);

    // Label panah
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = c.salah;
    ctx.fillText('w', bxc - sp * 0.25, Math.min(yPusat + Lw + 12, by + bh - 2));
    ctx.fillStyle = c.benar;
    ctx.fillText('F', bxc + sp * 0.25, Math.max(yPusat - La - 4, by + 10));

    // Label bejana
    ctx.fillStyle = c.teks2;
    ctx.textAlign = 'left';
    ctx.fillText('Kedalaman bejana ' + fmt(D, 0) + ' cm', bx, by - 6);

    // Bacaan angka (kanan)
    const tx = bx + bw + 10;
    let ty = by + 8;
    const baris = H * 0.14 > 20 ? 16 : 15;
    ctx.textAlign = 'left';
    ctx.font = '600 12px system-ui, sans-serif';
    ctx.fillStyle = status === 'terapung' ? c.aksen : (status === 'melayang' ? c.benar : c.salah);
    ctx.fillText(status.toUpperCase(), tx, ty); ty += baris + 2;

    ctx.font = '11px system-ui, sans-serif';
    ctx.fillStyle = c.teks;
    ctx.fillText('Tercelup: ' + fmt(frak * 100, 1) + ' %', tx, ty); ty += baris;
    ctx.fillText('Berat w: ' + fmt(berat, 2) + ' N', tx, ty); ty += baris;
    ctx.fillText('G. apung F: ' + fmt(FA, 2) + ' N', tx, ty); ty += baris;
    ctx.fillStyle = c.teks2;
    ctx.fillText('rho b/rho f = ' + fmt(rasio, 2), tx, ty); ty += baris;
    if (status === 'tenggelam') {
      ctx.fillText('N dasar: ' + fmt(berat - FA, 2) + ' N', tx, ty); ty += baris;
    }
    ctx.fillText('Sisi balok: ' + fmt(s, 1) + ' cm', tx, ty);
  }

  window.Simulasi.daftar('statika-fluida-apung', apung);
})();
