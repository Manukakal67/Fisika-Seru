/* Utilitas umum: escape HTML, render KaTeX, parsing angka. */
(function () {
  'use strict';

  const U = {};

  U.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  // Render semua $...$ dan $$...$$ di dalam elemen. Aman jika KaTeX belum termuat.
  U.renderMath = function (el) {
    if (!el || typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false,
        output: 'html' // hanya satu salinan; mencegah teks ganda jika CSS KaTeX gagal termuat
      });
    } catch (e) { /* abaikan */ }
  };

  // Angka sangat besar/kecil memakai notasi ilmiah, misalnya 6,02 × 10^23.
  U.fmt = function (n) {
    n = Number(n);
    const a = Math.abs(n);
    if (a !== 0 && (a >= 1e6 || a < 1e-3)) {
      const bagian = n.toExponential(3).split('e');
      const mantis = Number(bagian[0]).toLocaleString('id-ID', { maximumFractionDigits: 3 });
      return mantis + ' × 10^' + parseInt(bagian[1], 10);
    }
    return n.toLocaleString('id-ID', { maximumSignificantDigits: 6 });
  };

  window.U = U;
})();
