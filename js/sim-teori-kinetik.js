(function () {
  'use strict';

  var KB = 1.38e-23;
  var NA = 6.02e23;
  var VMAKS = 6000;          // sumbu v tetap (m/s)

  function koma(x, d) { return x.toFixed(d).replace('.', ','); }

  function sci(x) {
    if (!(x > 0) || !isFinite(x)) return '0';
    var e = Math.floor(Math.log(x) / Math.LN10);
    var m = x / Math.pow(10, e);
    if (m >= 9.995) { m = 1; e += 1; }
    var sup = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
    var es = String(e).split('').map(function (ch) { return sup[ch] || ch; }).join('');
    return koma(m, 2) + '×10' + es;
  }

  // f(v) Maxwell-Boltzmann, m dalam kg, T dalam K
  function fMB(v, m, T) {
    var a = m / (2 * Math.PI * KB * T);
    var r = a * v * v;
    var ex = r > 700 ? 0 : Math.exp(-r);
    return 4 * Math.PI * Math.pow(a, 1.5) * v * v * ex;
  }

  function distribusi(ctx, u, nn, c, def) {
    var W = u.w, H = u.h;
    var T = Math.max(1, isFinite(nn.T) ? nn.T : 300);
    var Mg = Math.max(0.1, isFinite(nn.M) ? nn.M : 28);
    var mol = Math.max(0, isFinite(nn.n) ? nn.n : 1);
    var m = Mg / 1000 / NA;

    var vmp = Math.sqrt(2 * KB * T / m);
    var vav = Math.sqrt(8 * KB * T / (Math.PI * m));
    var vrms = Math.sqrt(3 * KB * T / m);
    var Ek = 1.5 * KB * T;
    var Nmol = mol * NA;

    // skala tegak tetap: puncak kurva paling tinggi di rentang parameter
    var ps = (def && def.param) || [];
    var Tmin = 100, Mmaks = 44;
    ps.forEach(function (p) {
      if (p.kunci === 'T') Tmin = Math.max(1, p.min);
      if (p.kunci === 'M') Mmaks = Math.max(0.1, p.max);
    });
    var vpRef = Math.sqrt(2 * KB * Tmin / (Mmaks / 1000 / NA));
    var fTop = fMB(vpRef, Mmaks / 1000 / NA, Tmin) * 1.08;
    if (!(fTop > 0)) fTop = 1e-3;

    var fs = W < 450 ? 11 : 12;
    var pad = Math.max(8, Math.round(W * 0.03));
    var fontTeks = fs + 'px system-ui, sans-serif';
    var fontTebal = '600 ' + fs + 'px system-ui, sans-serif';

    // Bacaan: tiga laju
    var kolom = (W - 2 * pad) / 3;
    var nama = ['v paling mungkin', 'v rata-rata', 'v rms'];
    if (W < 450) nama = ['v mp', 'v rata2', 'v rms'];
    var nilaiV = [vmp, vav, vrms];
    var warna = [c.benar, c.aksen, c.salah];
    ctx.textAlign = 'left';
    for (var i = 0; i < 3; i++) {
      var x0 = pad + i * kolom;
      ctx.fillStyle = warna[i];
      ctx.fillRect(x0, 7, 8, 8);
      ctx.fillStyle = c.teks2;
      ctx.font = fontTeks;
      ctx.fillText(nama[i], x0 + 12, 15);
      ctx.fillStyle = c.teks;
      ctx.font = fontTebal;
      ctx.fillText(Math.round(nilaiV[i]) + ' m/s', x0 + 12, 15 + fs + 3);
    }
    var yBaris3 = 15 + 2 * (fs + 3) + 2;
    ctx.fillStyle = c.teks;
    ctx.font = fontTeks;
    ctx.fillText('E_k = ' + sci(Ek) + ' J', pad, yBaris3);
    ctx.textAlign = 'right';
    ctx.fillStyle = c.teks2;
    ctx.fillText('N = ' + sci(Nmol), W - pad, yBaris3);

    // Area plot
    var gx0 = pad + 4, gx1 = W - pad - 4;
    var gy0 = yBaris3 + 12, gy1 = H - 20;
    if (gy1 - gy0 < 30) gy0 = gy1 - 30;
    var X = function (v) { return gx0 + Math.min(v, VMAKS) / VMAKS * (gx1 - gx0); };
    var Y = function (f) { return gy1 - Math.max(0, Math.min(f / fTop, 1)) * (gy1 - gy0); };

    // sumbu
    ctx.strokeStyle = c.garis;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(gx0, gy0 - 4); ctx.lineTo(gx0, gy1); ctx.lineTo(gx1, gy1);
    ctx.stroke();

    // tik sumbu v
    ctx.font = (fs - 0) + 'px system-ui, sans-serif';
    ctx.fillStyle = c.teks2;
    ctx.textAlign = 'center';
    for (var t = 0; t <= 4000; t += 1000) {
      ctx.beginPath(); ctx.moveTo(X(t), gy1); ctx.lineTo(X(t), gy1 + 4); ctx.stroke();
      ctx.fillText(String(t), Math.max(gx0 + 6, X(t)), H - 6);
    }
    ctx.textAlign = 'right';
    ctx.fillText('v (m/s)', W - pad, H - 6);
    ctx.textAlign = 'left';
    ctx.fillText('f(v)', gx0 + 4, gy0 + 4);

    // kurva terisi
    var N = 160;
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = c.aksen;
    ctx.beginPath();
    ctx.moveTo(X(0), gy1);
    for (var j = 0; j <= N; j++) {
      var v = VMAKS * j / N;
      ctx.lineTo(X(v), Y(fMB(v, m, T)));
    }
    ctx.lineTo(X(VMAKS), gy1);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.strokeStyle = c.aksen;
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (var k = 0; k <= N; k++) {
      var v2 = VMAKS * k / N;
      var xx = X(v2), yy = Y(fMB(v2, m, T));
      if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
    }
    ctx.stroke();

    // garis penanda
    ctx.lineWidth = 1.5;
    ctx.setLineDash([5, 3]);
    for (var q = 0; q < 3; q++) {
      ctx.strokeStyle = warna[q];
      ctx.beginPath();
      ctx.moveTo(X(nilaiV[q]), gy1);
      ctx.lineTo(X(nilaiV[q]), gy0 - 2);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    ctx.lineWidth = 1;
  }

  window.Simulasi.daftar('teori-kinetik-distribusi', distribusi);
})();
