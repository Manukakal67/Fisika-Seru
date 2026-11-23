/* Registri simulasi Canvas. Tiap simulasi didaftarkan dengan ID yang sama
   seperti di data bab (materi.simulasi.id).

   Tanda tangan fungsi gambar:
     function (ctx, ukuran, nilai, warna, def)
       ctx    : CanvasRenderingContext2D (sudah diskalakan ke piksel CSS)
       ukuran : { w, h } dalam piksel CSS
       nilai  : { kunci: angka } sesuai param di data bab
       warna  : { teks, teks2, garis, aksen, benar, salah, panel }
       def    : objek simulasi dari data bab
*/
(function () {
  'use strict';

  const registri = {};
  let gambarAktif = null;

  function bacaWarna() {
    const cs = window.getComputedStyle(document.documentElement);
    const ambil = function (n) { return cs.getPropertyValue(n).trim(); };
    return {
      teks: ambil('--teks'), teks2: ambil('--teks2'), garis: ambil('--garis'),
      aksen: ambil('--aksen'), benar: ambil('--benar'), salah: ambil('--salah'),
      panel: ambil('--panel')
    };
  }

  // Modul kosong: dipakai sebagai cadangan dan untuk uji kerangka.
  function kosong(ctx, ukuran, nilai, warna, def) {
    ctx.strokeStyle = warna.garis;
    ctx.setLineDash([6, 6]);
    ctx.strokeRect(8, 8, ukuran.w - 16, ukuran.h - 16);
    ctx.setLineDash([]);
    ctx.fillStyle = warna.teks;
    ctx.font = '600 15px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Modul simulasi "' + def.id + '" belum diisi', ukuran.w / 2, ukuran.h / 2 - 8);
    ctx.fillStyle = warna.teks2;
    ctx.font = '13px system-ui, sans-serif';
    const teks = Object.keys(nilai).map(function (k) { return k + ' = ' + nilai[k]; }).join('   ');
    ctx.fillText(teks, ukuran.w / 2, ukuran.h / 2 + 16);
  }

  const Simulasi = {
    daftar: function (id, fn) { registri[id] = fn; },

    ambil: function (id) { return registri[id]; },

    pasang: function (id, wadah, def) {
      const fn = registri[id] || kosong;
      const param = def.param || [];
      wadah.innerHTML =
        '<div class="sim"><canvas aria-label="Simulasi interaktif"></canvas><div class="sim-kontrol"></div></div>';
      const canvas = wadah.querySelector('canvas');
      const kontrol = wadah.querySelector('.sim-kontrol');
      const nilai = {};

      function gambar() {
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth || 600;
        const h = Math.round(w * 0.5);
        canvas.style.height = h + 'px';
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        const ctx = canvas.getContext('2d');
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);
        fn(ctx, { w: w, h: h }, nilai, bacaWarna(), def);
      }

      param.forEach(function (p) {
        nilai[p.kunci] = p.nilai;
        const label = document.createElement('label');
        const nama = document.createElement('span');
        const out = document.createElement('output');
        const slider = document.createElement('input');
        const satuan = p.satuan ? ' ' + p.satuan : '';
        nama.textContent = p.label;
        out.textContent = p.nilai + satuan;
        slider.type = 'range';
        slider.min = p.min;
        slider.max = p.max;
        slider.step = p.langkah || 1;
        slider.value = p.nilai;
        slider.addEventListener('input', function () {
          nilai[p.kunci] = parseFloat(slider.value);
          out.textContent = slider.value + satuan;
          gambar();
        });
        label.appendChild(nama);
        label.appendChild(out);
        label.appendChild(slider);
        kontrol.appendChild(label);
      });

      gambarAktif = gambar;
      gambar();
    },

    // Dipanggil saat tema berubah atau layar diputar/diubah ukurannya.
    gambarUlang: function () { if (gambarAktif) gambarAktif(); },

    lepas: function () { gambarAktif = null; }
  };

  // ---------- Simulasi: GLB / GLBB ----------
  // Balok di lintasan (posisi x pada waktu t) dan grafik v-t.
  // Luas area berwarna di bawah grafik sampai waktu t = perpindahan.
  function glbGlbb(ctx, u, n, c) {
    const W = u.w, H = u.h, pad = 16, T = 10;
    const v0 = n.v0, a = n.a, t = n.t;
    const pos = function (s) { return v0 * s + 0.5 * a * s * s; };
    const vel = function (s) { return v0 + a * s; };

    // Rentang posisi selama 0..T agar skala lintasan tetap saat t digeser.
    let xmin = 0, xmax = 0;
    for (let i = 0; i <= 100; i++) {
      const x = pos(T * i / 100);
      if (x < xmin) xmin = x;
      if (x > xmax) xmax = x;
    }
    if (xmax - xmin < 1) xmax = xmin + 1;
    const kiri = pad + 12, kanan = W - pad - 12;
    const X = function (x) { return kiri + (x - xmin) / (xmax - xmin) * (kanan - kiri); };

    // Bacaan nilai
    ctx.textAlign = 'left';
    ctx.fillStyle = c.teks;
    ctx.font = '600 13px system-ui, sans-serif';
    ctx.fillText('t = ' + t.toFixed(1) + ' s   v = ' + vel(t).toFixed(1) + ' m/s   x = ' + pos(t).toFixed(1) + ' m', pad, 20);

    // Lintasan
    const yL = H * 0.32;
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(kiri, yL); ctx.lineTo(kanan, yL); ctx.stroke();
    ctx.lineWidth = 1;
    ctx.fillStyle = c.teks2;
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i <= 4; i++) {
      const xv = xmin + (xmax - xmin) * i / 4;
      ctx.beginPath(); ctx.moveTo(X(xv), yL); ctx.lineTo(X(xv), yL + 6); ctx.stroke();
      ctx.fillText((Math.round(xv * 10) / 10) + ' m', X(xv), yL + 20);
    }

    // Balok
    ctx.fillStyle = c.aksen;
    ctx.fillRect(X(pos(t)) - 11, yL - 24, 22, 22);

    // Grafik v-t
    const gx0 = pad + 28, gx1 = W - pad, gy0 = H * 0.58, gy1 = H - 22;
    let vmin = Math.min(0, vel(0), vel(T));
    let vmax = Math.max(0, vel(0), vel(T));
    if (vmax - vmin < 1) vmax = vmin + 1;
    const Tx = function (s) { return gx0 + s / T * (gx1 - gx0); };
    const Y = function (v) { return gy1 - (v - vmin) / (vmax - vmin) * (gy1 - gy0); };

    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gx0, gy0 - 6); ctx.lineTo(gx0, gy1);
    ctx.moveTo(gx0, Y(0)); ctx.lineTo(gx1, Y(0));
    ctx.stroke();

    ctx.globalAlpha = 0.25;
    ctx.fillStyle = c.aksen;
    ctx.beginPath();
    ctx.moveTo(Tx(0), Y(0));
    ctx.lineTo(Tx(0), Y(vel(0)));
    ctx.lineTo(Tx(t), Y(vel(t)));
    ctx.lineTo(Tx(t), Y(0));
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(Tx(0), Y(vel(0))); ctx.lineTo(Tx(T), Y(vel(T))); ctx.stroke();
    ctx.fillStyle = c.aksen;
    ctx.beginPath(); ctx.arc(Tx(t), Y(vel(t)), 5, 0, Math.PI * 2); ctx.fill();

    ctx.fillStyle = c.teks2;
    ctx.font = '11px system-ui, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('v (m/s)', gx0 + 4, gy0 - 8);
    ctx.fillText('Area berwarna = perpindahan', gx0 + 4, H - 6);
    ctx.textAlign = 'right';
    ctx.fillText('t (s)', gx1, H - 6);
  }

  Simulasi.daftar('glb-glbb', glbGlbb);

  // ---------- Simulasi: gerak melingkar ----------
  // Titik di lingkaran dengan panah kecepatan (hijau, menyinggung)
  // dan percepatan sentripetal (merah, menuju pusat).
  function panah(ctx, x0, y0, dx, dy, warna) {
    const L = Math.hypot(dx, dy);
    if (L < 1) return;
    const ux = dx / L, uy = dy / L, k = 7;
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

  function gerakMelingkar(ctx, u, n, c) {
    const W = u.w, H = u.h, DUAPI = 2 * Math.PI;
    const r = n.r, w0 = n.w0, al = n.alpha, t = n.t;
    const theta = w0 * t + 0.5 * al * t * t;
    const w = w0 + al * t;
    const v = w * r;
    const as = w * w * r;
    const at = al * r;

    const cx = W * 0.32, cy = H / 2;
    const Rmax = Math.min(H / 2 - 16, W * 0.28);
    const R = Rmax * Math.max(0.2, 0.3 + 0.7 * (r - 0.5) / 4.5);
    const px = cx + R * Math.cos(theta);
    const py = cy - R * Math.sin(theta);

    // Lingkaran, pusat, dan garis acuan sudut nol
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, DUAPI); ctx.stroke();
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R + 8, cy); ctx.stroke();
    ctx.fillStyle = c.teks2;
    ctx.beginPath(); ctx.arc(cx, cy, 3, 0, DUAPI); ctx.fill();

    // Busur sudut theta (dalam satu putaran) dan jari-jari ke titik
    const th = ((theta % DUAPI) + DUAPI) % DUAPI;
    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2;
    if (th > 0.01) {
      ctx.beginPath(); ctx.arc(cx, cy, Math.min(24, R * 0.4), 0, -th, true); ctx.stroke();
    }
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(px, py); ctx.stroke();
    ctx.setLineDash([]);

    // Panah kecepatan (menyinggung) dan percepatan sentripetal (ke pusat)
    const arah = w >= 0 ? 1 : -1;
    const Lv = Math.abs(v) > 0.01 ? Math.min(70, 12 + 5 * Math.abs(v)) : 0;
    const La = as > 0.01 ? Math.min(60, 10 + 1.2 * as) : 0;
    panah(ctx, px, py, arah * -Math.sin(theta) * Lv, arah * -Math.cos(theta) * Lv, c.benar);
    panah(ctx, px, py, -Math.cos(theta) * La, Math.sin(theta) * La, c.salah);

    // Titik benda
    ctx.fillStyle = c.aksen;
    ctx.beginPath(); ctx.arc(px, py, 6, 0, DUAPI); ctx.fill();

    // Bacaan nilai
    const xt = W * 0.62, y0 = H / 2 - 45, dy = 18;
    ctx.textAlign = 'left';
    ctx.font = '600 12px system-ui, sans-serif';
    const baris = [
      ['t = ' + t.toFixed(1) + ' s', c.teks],
      ['θ = ' + theta.toFixed(1) + ' rad', c.aksen],
      ['ω = ' + w.toFixed(1) + ' rad/s', c.teks],
      ['v = ' + Math.abs(v).toFixed(1) + ' m/s', c.benar],
      ['a_s = ' + as.toFixed(1) + ' m/s²', c.salah],
      ['a_t = ' + at.toFixed(1) + ' m/s²', c.teks2]
    ];
    baris.forEach(function (b, i) {
      ctx.fillStyle = b[1];
      ctx.fillText(b[0], xt, y0 + i * dy);
    });
  }

  Simulasi.daftar('gerak-melingkar', gerakMelingkar);

  window.addEventListener('resize', function () { Simulasi.gambarUlang(); });
  window.addEventListener('temaberubah', function () { Simulasi.gambarUlang(); });

  window.Simulasi = Simulasi;
})();
