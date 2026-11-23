window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['elastisitas-shm'] = {
  id: 'elastisitas-shm',
  judul: 'Elastisitas dan Gerak Harmonik Sederhana',
  subbab: [
    {
      id: 'elastisitas',
      judul: 'Elastisitas',
      materi: {
        gambaranBesar: 'Bayangkan karet gelang, pegas bolpoin, atau kabel lift dari baja. Saat ditarik atau ditekan, benda-benda itu berubah bentuk sedikit lalu kembali seperti semula ketika gaya dilepas, dan sifat inilah yang disebut elastisitas. Fisika merapikannya dengan tiga pertanyaan: seberapa besar gaya yang bekerja pada tiap satuan luas (tegangan), seberapa besar perubahan bentuknya (regangan), dan seberapa kaku bahannya (modulus Young). Untuk pegas, semuanya terangkum dalam hukum Hooke dan energi yang tersimpan di dalamnya.',
        konsep: [
          {
            judul: 'Tegangan dan regangan',
            teks: 'Kawat yang ditarik dengan gaya $F$ tegak lurus penampangnya yang luasnya $A$ mengalami tegangan (stress), yaitu gaya per satuan luas. Akibatnya kawat memanjang sebesar $\\Delta L$ dari panjang awal $L_0$. Perbandingan $\\Delta L$ terhadap $L_0$ disebut regangan (strain). Regangan adalah rasio dua panjang, jadi tidak punya satuan. Untuk kawat berpenampang bulat, luasnya dihitung dari diameter $d$.',
            rumus: [
              {
                latex: '\\sigma = \\frac{F}{A}',
                simbol: [
                  { s: '\\sigma', arti: 'tegangan', satuan: 'Pa' },
                  { s: 'F', arti: 'gaya tarik atau tekan', satuan: 'N' },
                  { s: 'A', arti: 'luas penampang', satuan: 'm²' }
                ]
              },
              {
                latex: '\\varepsilon = \\frac{\\Delta L}{L_0}',
                simbol: [
                  { s: '\\varepsilon', arti: 'regangan', satuan: 'tanpa satuan' },
                  { s: '\\Delta L', arti: 'pertambahan panjang', satuan: 'm' },
                  { s: 'L_0', arti: 'panjang mula-mula', satuan: 'm' }
                ]
              },
              {
                latex: 'A = \\frac{\\pi d^2}{4}',
                simbol: [
                  { s: 'A', arti: 'luas penampang bulat', satuan: 'm²' },
                  { s: 'd', arti: 'diameter kawat', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Modulus Young',
            teks: 'Pada daerah elastis, tegangan sebanding dengan regangan. Konstanta pembandingnya adalah modulus Young $E$, yang menyatakan kekakuan bahan: makin besar $E$, makin sulit bahan itu diregangkan. Nilai $E$ hanya bergantung pada jenis bahan, bukan pada ukuran kawat. Baja punya $E \\approx 2 \\times 10^{11}\\ \\text{Pa}$. Dari definisi ini kita bisa menghitung pertambahan panjang kawat.',
            rumus: [
              {
                latex: 'E = \\frac{\\sigma}{\\varepsilon} = \\frac{F\\,L_0}{A\\,\\Delta L}',
                simbol: [
                  { s: 'E', arti: 'modulus Young', satuan: 'Pa' },
                  { s: '\\sigma', arti: 'tegangan', satuan: 'Pa' },
                  { s: '\\varepsilon', arti: 'regangan', satuan: 'tanpa satuan' },
                  { s: 'L_0', arti: 'panjang mula-mula', satuan: 'm' }
                ]
              },
              {
                latex: '\\Delta L = \\frac{F\\,L_0}{A\\,E}',
                simbol: [
                  { s: '\\Delta L', arti: 'pertambahan panjang', satuan: 'm' },
                  { s: 'F', arti: 'gaya tarik', satuan: 'N' },
                  { s: 'A', arti: 'luas penampang', satuan: 'm²' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum Hooke dan konstanta pegas',
            teks: 'Pegas yang diregangkan atau ditekan sejauh $x$ dari panjang alaminya melawan perubahan itu dengan gaya pemulih yang besarnya sebanding dengan $x$. Itulah hukum Hooke. Konstanta $k$ menyatakan kekakuan pegas: makin besar $k$, makin besar gaya yang diperlukan untuk satu meter perubahan panjang. Sebuah kawat juga berperilaku seperti pegas. Dengan menyamakan $F = k\\,\\Delta L$ dan rumus $\\Delta L$ di atas, diperoleh konstanta kawat. Hukum Hooke hanya berlaku sampai batas proporsional.',
            rumus: [
              {
                latex: 'F = k\\,x',
                simbol: [
                  { s: 'F', arti: 'besar gaya pegas', satuan: 'N' },
                  { s: 'k', arti: 'konstanta pegas', satuan: 'N/m' },
                  { s: 'x', arti: 'pertambahan atau pengurangan panjang dari panjang alami', satuan: 'm' }
                ]
              },
              {
                latex: 'k = \\frac{E\\,A}{L_0}',
                simbol: [
                  { s: 'k', arti: 'konstanta kawat', satuan: 'N/m' },
                  { s: 'E', arti: 'modulus Young', satuan: 'Pa' },
                  { s: 'A', arti: 'luas penampang', satuan: 'm²' },
                  { s: 'L_0', arti: 'panjang mula-mula', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Grafik tegangan terhadap regangan',
            teks: 'Grafik tegangan terhadap regangan sebuah logam punya beberapa daerah. Dari titik asal sampai batas proporsional, grafik berupa garis lurus: hukum Hooke berlaku dan kemiringan garis adalah modulus Young. Sedikit di atasnya ada batas elastis. Selama tegangan belum melewati titik ini, benda kembali ke bentuk semula saat gaya dilepas. Melewati batas elastis, benda masuk daerah plastis: kurva melengkung landai, dan setelah gaya dilepas tersisa regangan permanen. Di ujung kurva ada tegangan maksimum, lalu titik patah. Bahan yang patah hampir tanpa melar disebut getas (kaca), sedangkan bahan yang melar jauh sebelum patah disebut ulet (tembaga).'
          },
          {
            judul: 'Susunan pegas seri dan paralel',
            teks: 'Pada susunan seri, pegas disambung ujung ke ujung: gaya yang meregangkan tiap pegas sama besar, dan pertambahan panjang totalnya adalah jumlah pertambahan panjang tiap pegas. Hasilnya lebih lunak daripada pegas terlemah. Pada susunan paralel, pegas berdampingan dan bertambah panjang sama, sedangkan gaya terbagi di antara pegas. Hasilnya lebih kaku daripada tiap pegas. Dua pegas identik berkonstanta $k$ menjadi $k/2$ bila seri dan $2k$ bila paralel.',
            rumus: [
              {
                latex: '\\frac{1}{k_s} = \\frac{1}{k_1} + \\frac{1}{k_2}',
                simbol: [
                  { s: 'k_s', arti: 'konstanta pengganti susunan seri', satuan: 'N/m' },
                  { s: 'k_1,\\ k_2', arti: 'konstanta tiap pegas', satuan: 'N/m' }
                ]
              },
              {
                latex: 'k_p = k_1 + k_2',
                simbol: [
                  { s: 'k_p', arti: 'konstanta pengganti susunan paralel', satuan: 'N/m' },
                  { s: 'k_1,\\ k_2', arti: 'konstanta tiap pegas', satuan: 'N/m' }
                ]
              }
            ]
          },
          {
            judul: 'Energi potensial pegas dan usaha dari grafik F\u2013x',
            teks: 'Saat pegas diregangkan dari $x = 0$, gaya yang diperlukan naik dari nol sampai $kx$. Usaha yang dilakukan sama dengan luas daerah di bawah grafik gaya terhadap pertambahan panjang ($F$\u2013$x$), yaitu luas segitiga. Usaha ini tersimpan sebagai energi potensial pegas. Bila grafik $F$\u2013$x$ bukan garis lurus dari titik asal, usaha tetap dihitung sebagai luas di bawah kurva, misalnya dengan memecahnya menjadi segitiga, persegi panjang, atau trapesium.',
            rumus: [
              {
                latex: 'U = \\tfrac{1}{2}\\,k\\,x^2 = \\tfrac{1}{2}\\,F\\,x',
                simbol: [
                  { s: 'U', arti: 'energi potensial pegas', satuan: 'J' },
                  { s: 'k', arti: 'konstanta pegas', satuan: 'N/m' },
                  { s: 'x', arti: 'pertambahan panjang', satuan: 'm' },
                  { s: 'F', arti: 'gaya pegas pada saat itu', satuan: 'N' }
                ]
              },
              {
                latex: 'W = \\tfrac{1}{2}\\,k\\,(x_2^2 - x_1^2)',
                simbol: [
                  { s: 'W', arti: 'usaha untuk menggeser dari x_1 ke x_2', satuan: 'J' },
                  { s: 'x_1,\\ x_2', arti: 'pertambahan panjang awal dan akhir', satuan: 'm' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Kawat baja sepanjang $2{,}0\\ \\text{m}$ dengan luas penampang $1{,}0 \\times 10^{-6}\\ \\text{m}^2$ ditarik gaya $200\\ \\text{N}$. Modulus Young baja $2{,}0 \\times 10^{11}\\ \\text{Pa}$. Berapa tegangan, regangan, dan pertambahan panjangnya?',
            langkah: [
              'Tegangan: $\\sigma = \\dfrac{F}{A} = \\dfrac{200}{1{,}0 \\times 10^{-6}} = 2{,}0 \\times 10^{8}\\ \\text{Pa}$.',
              'Regangan: $\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{2{,}0 \\times 10^{8}}{2{,}0 \\times 10^{11}} = 1{,}0 \\times 10^{-3}$.',
              'Pertambahan panjang: $\\Delta L = \\varepsilon\\,L_0 = 1{,}0 \\times 10^{-3} \\times 2{,}0 = 2{,}0 \\times 10^{-3}\\ \\text{m}$.'
            ],
            hasil: 'Tegangannya 2,0 x 10^8 Pa, regangannya 1,0 x 10^-3, dan kawat bertambah panjang 2,0 mm.'
          },
          {
            soal: 'Sebuah pegas bertambah panjang $3{,}0\\ \\text{cm}$ ketika ditarik gaya $15\\ \\text{N}$. Berapa gaya dan energi potensial pegas bila ia direnggangkan $5{,}0\\ \\text{cm}$?',
            langkah: [
              'Ubah satuan: $3{,}0\\ \\text{cm} = 0{,}030\\ \\text{m}$ dan $5{,}0\\ \\text{cm} = 0{,}050\\ \\text{m}$.',
              'Konstanta pegas: $k = \\dfrac{F}{x} = \\dfrac{15}{0{,}030} = 500\\ \\text{N/m}$.',
              'Gaya pada $x = 0{,}050\\ \\text{m}$: $F = kx = 500 \\times 0{,}050 = 25\\ \\text{N}$.',
              'Energi: $U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2} \\times 500 \\times 0{,}0025 = 0{,}625\\ \\text{J}$.'
            ],
            hasil: 'Gayanya 25 N dan energi potensialnya 0,625 J.'
          },
          {
            soal: 'Dua pegas berkonstanta $200\\ \\text{N/m}$ dan $300\\ \\text{N/m}$ dipakai menahan beban berbobot $6{,}0\\ \\text{N}$. Bandingkan pertambahan panjang bila keduanya disusun seri dan bila disusun paralel.',
            langkah: [
              'Seri: $\\dfrac{1}{k_s} = \\dfrac{1}{200} + \\dfrac{1}{300} = \\dfrac{5}{600}$, jadi $k_s = 120\\ \\text{N/m}$.',
              'Pertambahan panjang seri: $x = \\dfrac{F}{k_s} = \\dfrac{6{,}0}{120} = 0{,}050\\ \\text{m}$.',
              'Paralel: $k_p = 200 + 300 = 500\\ \\text{N/m}$.',
              'Pertambahan panjang paralel: $x = \\dfrac{6{,}0}{500} = 0{,}012\\ \\text{m}$.'
            ],
            hasil: 'Seri bertambah 5,0 cm, paralel hanya 1,2 cm. Susunan paralel jauh lebih kaku.'
          },
          {
            soal: 'Grafik $F$\u2013$x$ sebuah pegas naik lurus dari titik asal sampai $8{,}0\\ \\text{N}$ pada $x = 0{,}040\\ \\text{m}$, lalu mendatar pada $8{,}0\\ \\text{N}$ sampai $x = 0{,}100\\ \\text{m}$. Berapa usaha total dari $x = 0$ sampai $x = 0{,}100\\ \\text{m}$?',
            langkah: [
              'Usaha sama dengan luas di bawah grafik $F$\u2013$x$.',
              'Bagian pertama berbentuk segitiga: $\\tfrac{1}{2} \\times 0{,}040 \\times 8{,}0 = 0{,}16\\ \\text{J}$.',
              'Bagian kedua berbentuk persegi panjang: $(0{,}100 - 0{,}040) \\times 8{,}0 = 0{,}48\\ \\text{J}$.',
              'Jumlah: $0{,}16 + 0{,}48 = 0{,}64\\ \\text{J}$.'
            ],
            hasil: 'Usaha totalnya 0,64 J.'
          }
        ],
        kesalahan: [
          'Mengira modulus Young bergantung pada ukuran kawat. Modulus hanya sifat bahan: kawat baja tipis dan tebal punya $E$ sama, tetapi konstanta pegasnya $k$ berbeda.',
          'Memakai diameter sebagai luas penampang. Hitung dulu $A = \\tfrac{1}{4}\\pi d^2$, lalu ubah ke m$^2$ (ingat $1\\ \\text{mm}^2 = 10^{-6}\\ \\text{m}^2$).',
          'Lupa menyamakan satuan. Pertambahan panjang dalam cm atau mm harus diubah ke meter sebelum dipakai di $F = kx$ atau $U = \\tfrac{1}{2}kx^2$.',
          'Memakai panjang total pegas sebagai $x$. Yang dipakai adalah pertambahan atau pengurangan panjang dari panjang alaminya.',
          'Tertukar rumus seri dan paralel. Pada seri, $k$ gabungan lebih kecil dari pegas terlemah. Pada paralel, $k$ gabungan lebih besar dari tiap pegas.',
          'Mengira hukum Hooke berlaku untuk gaya sebesar apa pun. Hukum itu hanya berlaku sampai batas proporsional.',
          'Menghitung energi pegas dengan $U = F\\,x$. Gaya pegas tidak tetap, jadi yang benar adalah $\\tfrac{1}{2}F\\,x$ atau $\\tfrac{1}{2}k\\,x^2$.'
        ],
        ringkasan: [
          'Tegangan $\\sigma = F/A$ (Pa), regangan $\\varepsilon = \\Delta L / L_0$ (tanpa satuan), dan modulus Young $E = \\sigma/\\varepsilon$ adalah sifat bahan.',
          'Pertambahan panjang kawat: $\\Delta L = \\dfrac{F L_0}{A E}$. Kawat berperilaku seperti pegas dengan $k = EA/L_0$.',
          'Hukum Hooke: $F = kx$, berlaku sampai batas proporsional. Lewat batas elastis, tersisa regangan permanen.',
          'Pegas seri: $1/k_s = 1/k_1 + 1/k_2$ (lebih lunak). Pegas paralel: $k_p = k_1 + k_2$ (lebih kaku).',
          'Energi potensial pegas $U = \\tfrac{1}{2}kx^2$, sama dengan luas di bawah grafik $F$\u2013$x$.'
        ],
        simulasi: {
          id: 'elastisitas-pegas',
          judul: 'Simulasi: pegas vertikal dengan beban',
          param: [
            { kunci: 'k', label: 'Konstanta pegas', min: 40, max: 200, nilai: 100, satuan: 'N/m', langkah: 10 },
            { kunci: 'm', label: 'Massa beban', min: 0.1, max: 1.5, nilai: 0.5, satuan: 'kg', langkah: 0.1 },
            { kunci: 'L0', label: 'Panjang alami', min: 0.1, max: 0.5, nilai: 0.3, satuan: 'm', langkah: 0.05 },
            { kunci: 'susun', label: 'Susunan (0 tunggal, 1 seri, 2 paralel)', min: 0, max: 2, nilai: 0, satuan: '', langkah: 1 }
          ]
        }
      }
    },
    {
      id: 'getaran-harmonik',
      judul: 'Gerak Harmonik Sederhana',
      materi: {
        gambaranBesar: 'Ayunan di taman, senar gitar yang dipetik, dan balok di ujung pegas semuanya bergerak bolak-balik melewati satu titik tengah secara berulang. Gerak yang berulang dalam selang waktu sama disebut gerak periodik, dan bila gaya yang menariknya kembali sebanding dengan simpangan, kita menyebutnya gerak harmonik sederhana (GHS). Kuncinya: makin jauh dari titik tengah, makin kuat gaya yang menarik balik, sehingga benda melambat di ujung dan paling cepat di tengah. Rumus-rumus bab ini hanyalah cara rapi untuk mengukur seberapa cepat, seberapa jauh, dan seberapa kuat getaran itu.',
        konsep: [
          {
            judul: 'Getaran, periode, dan frekuensi',
            teks: 'Satu getaran adalah gerak dari satu titik sampai kembali ke titik itu lagi dengan arah gerak yang sama. Periode $T$ adalah waktu untuk satu getaran. Frekuensi $f$ adalah banyaknya getaran tiap sekon, dengan satuan hertz ($1\\ \\text{Hz} = 1$ getaran/s). Keduanya saling berkebalikan.',
            rumus: [
              {
                latex: 'T = \\frac{t}{n}, \\qquad f = \\frac{n}{t} = \\frac{1}{T}',
                simbol: [
                  { s: 'T', arti: 'periode', satuan: 's' },
                  { s: 'f', arti: 'frekuensi', satuan: 'Hz' },
                  { s: 'n', arti: 'banyaknya getaran', satuan: 'tanpa satuan' },
                  { s: 't', arti: 'waktu total', satuan: 's' }
                ]
              }
            ]
          },
          {
            judul: 'Simpangan, amplitudo, dan persamaan GHS',
            teks: 'Simpangan $y$ adalah jarak benda dari titik setimbang (titik tengah) pada saat tertentu, dan bisa positif atau negatif. Simpangan terbesar disebut amplitudo $A$. Pada GHS, simpangan berbentuk sinus terhadap waktu. Kecepatan sudut $\\omega$ (disebut juga frekuensi sudut) menyatakan seberapa cepat fase bertambah, dan $\\varphi_0$ adalah sudut fase awal. Sudut pada fungsi sinus ini harus dalam radian.',
            rumus: [
              {
                latex: 'y = A\\,\\sin(\\omega t + \\varphi_0)',
                simbol: [
                  { s: 'y', arti: 'simpangan pada saat t', satuan: 'm' },
                  { s: 'A', arti: 'amplitudo', satuan: 'm' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 't', arti: 'waktu', satuan: 's' },
                  { s: '\\varphi_0', arti: 'sudut fase awal', satuan: 'rad' }
                ]
              },
              {
                latex: '\\omega = \\frac{2\\pi}{T} = 2\\pi f',
                simbol: [
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'T', arti: 'periode', satuan: 's' },
                  { s: 'f', arti: 'frekuensi', satuan: 'Hz' }
                ]
              }
            ]
          },
          {
            judul: 'Kecepatan dan percepatan getaran',
            teks: 'Kecepatan adalah turunan simpangan terhadap waktu, dan percepatan adalah turunan kecepatan. Hasilnya: kecepatan paling besar di titik setimbang (simpangan nol), sedangkan percepatan paling besar di ujung lintasan (simpangan maksimum). Tanda minus pada percepatan menunjukkan bahwa percepatan selalu berlawanan arah dengan simpangan, yaitu menuju titik setimbang.',
            rumus: [
              {
                latex: 'v = \\frac{dy}{dt} = A\\omega\\,\\cos(\\omega t + \\varphi_0)',
                simbol: [
                  { s: 'v', arti: 'kecepatan', satuan: 'm/s' },
                  { s: 'A', arti: 'amplitudo', satuan: 'm' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' }
                ]
              },
              {
                latex: 'a = \\frac{dv}{dt} = -\\omega^2\\,y',
                simbol: [
                  { s: 'a', arti: 'percepatan', satuan: 'm/s²' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'y', arti: 'simpangan', satuan: 'm' }
                ]
              },
              {
                latex: 'v_{\\text{maks}} = A\\omega, \\qquad a_{\\text{maks}} = A\\omega^2',
                simbol: [
                  { s: 'v_{\\text{maks}}', arti: 'kecepatan maksimum (di titik setimbang)', satuan: 'm/s' },
                  { s: 'a_{\\text{maks}}', arti: 'percepatan maksimum (di ujung lintasan)', satuan: 'm/s²' }
                ]
              }
            ]
          },
          {
            judul: 'Getaran pegas dan bandul sederhana',
            teks: 'Balok bermassa $m$ di ujung pegas berkonstanta $k$ mendapat gaya pemulih $F = -ky$, sehingga $\\omega = \\sqrt{k/m}$. Makin berat bebannya, makin lambat getarannya, dan makin kaku pegasnya, makin cepat. Bandul sederhana (beban kecil pada tali ringan sepanjang $L$) juga ber-GHS bila simpangannya kecil (sudut kurang dari sekitar $10^\\circ$). Periodenya tidak bergantung pada massa beban maupun amplitudo. Soal di aplikasi ini memakai $g = 10\\ \\text{m/s}^2$ kecuali dikatakan lain.',
            rumus: [
              {
                latex: '\\omega = \\sqrt{\\frac{k}{m}}, \\qquad T = 2\\pi\\sqrt{\\frac{m}{k}}',
                simbol: [
                  { s: 'k', arti: 'konstanta pegas', satuan: 'N/m' },
                  { s: 'm', arti: 'massa beban', satuan: 'kg' },
                  { s: 'T', arti: 'periode getaran pegas', satuan: 's' }
                ]
              },
              {
                latex: 'T = 2\\pi\\sqrt{\\frac{L}{g}}',
                simbol: [
                  { s: 'L', arti: 'panjang tali bandul', satuan: 'm' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'T', arti: 'periode bandul', satuan: 's' }
                ]
              }
            ]
          },
          {
            judul: 'Energi dalam GHS',
            teks: 'Energi total getaran adalah jumlah energi kinetik $K$ dan energi potensial $U$, dan nilainya tetap (kekal) bila tidak ada gesekan. Di ujung lintasan seluruh energi berupa energi potensial. Di titik setimbang seluruh energi berupa energi kinetik. Dengan menyamakan $K + U = E$ kita dapat menghitung laju benda di simpangan mana pun tanpa perlu waktu.',
            rumus: [
              {
                latex: 'E = K + U = \\tfrac{1}{2}\\,k\\,A^2',
                simbol: [
                  { s: 'E', arti: 'energi total getaran', satuan: 'J' },
                  { s: 'K', arti: 'energi kinetik, $\\tfrac{1}{2}mv^2$', satuan: 'J' },
                  { s: 'U', arti: 'energi potensial, $\\tfrac{1}{2}ky^2$', satuan: 'J' },
                  { s: 'A', arti: 'amplitudo', satuan: 'm' }
                ]
              },
              {
                latex: 'v = \\omega\\sqrt{A^2 - y^2}',
                simbol: [
                  { s: 'v', arti: 'laju pada simpangan y', satuan: 'm/s' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'y', arti: 'simpangan', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'GHS dan gerak melingkar beraturan',
            teks: 'Bayangan (proyeksi) benda yang bergerak melingkar beraturan pada salah satu garis tengah lingkaran bergerak harmonik sederhana. Jari-jari lingkaran menjadi amplitudo, dan kecepatan sudut gerak melingkar menjadi kecepatan sudut getaran. Sudut $\\theta = \\omega t + \\varphi_0$ pada lingkaran sama dengan fase sudut getaran. Satu putaran penuh sama dengan satu getaran. Cara pandang ini berguna untuk soal waktu tempuh antara dua posisi: cari sudut kedua posisi pada lingkaran, lalu bagi selisihnya dengan $\\omega$.',
            rumus: [
              {
                latex: 'y = r\\,\\sin\\theta, \\qquad \\theta = \\omega t + \\varphi_0, \\qquad A = r',
                simbol: [
                  { s: 'r', arti: 'jari-jari lingkaran acuan', satuan: 'm' },
                  { s: '\\theta', arti: 'sudut posisi pada lingkaran', satuan: 'rad' },
                  { s: 'A', arti: 'amplitudo getaran', satuan: 'm' }
                ]
              },
              {
                latex: '\\Delta t = \\frac{\\Delta\\theta}{\\omega}',
                simbol: [
                  { s: '\\Delta t', arti: 'waktu tempuh antara dua posisi', satuan: 's' },
                  { s: '\\Delta\\theta', arti: 'selisih sudut kedua posisi', satuan: 'rad' }
                ]
              }
            ]
          },
          {
            judul: 'Fase dan beda fase',
            teks: 'Fase $\\varphi$ menyatakan seberapa jauh getaran sudah berlangsung, dihitung dalam satuan getaran. Fase didefinisikan lewat $y = A\\sin 2\\pi\\varphi$. Dua getaran dengan beda fase nol atau bilangan bulat dikatakan sefase, sedangkan beda fase $\\tfrac{1}{2}$ berarti berlawanan fase (satu di puncak saat yang lain di lembah).',
            rumus: [
              {
                latex: '\\varphi = \\frac{t}{T} + \\frac{\\varphi_0}{2\\pi}',
                simbol: [
                  { s: '\\varphi', arti: 'fase getaran', satuan: 'tanpa satuan' },
                  { s: 't', arti: 'waktu', satuan: 's' },
                  { s: 'T', arti: 'periode', satuan: 's' },
                  { s: '\\varphi_0', arti: 'sudut fase awal', satuan: 'rad' }
                ]
              },
              {
                latex: '\\Delta\\varphi = \\varphi_2 - \\varphi_1',
                simbol: [
                  { s: '\\Delta\\varphi', arti: 'beda fase', satuan: 'tanpa satuan' },
                  { s: '\\varphi_1,\\ \\varphi_2', arti: 'fase kedua titik atau kedua getaran', satuan: 'tanpa satuan' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Balok $0{,}25\\ \\text{kg}$ di ujung pegas ($k = 100\\ \\text{N/m}$) bergetar di lantai licin dengan amplitudo $5{,}0\\ \\text{cm}$. Berapa $\\omega$, periode, kecepatan maksimum, dan percepatan maksimum?',
            langkah: [
              'Kecepatan sudut: $\\omega = \\sqrt{k/m} = \\sqrt{100/0{,}25} = \\sqrt{400} = 20\\ \\text{rad/s}$.',
              'Periode: $T = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{20} \\approx 0{,}314\\ \\text{s}$.',
              'Kecepatan maksimum: $v_{\\text{maks}} = A\\omega = 0{,}050 \\times 20 = 1{,}0\\ \\text{m/s}$.',
              'Percepatan maksimum: $a_{\\text{maks}} = A\\omega^2 = 0{,}050 \\times 400 = 20\\ \\text{m/s}^2$.'
            ],
            hasil: 'Hasilnya $\\omega = 20$ rad/s, $T \\approx 0{,}314$ s, $v_{\\text{maks}} = 1{,}0$ m/s, dan $a_{\\text{maks}} = 20$ m/s$^2$.'
          },
          {
            soal: 'Simpangan sebuah benda adalah $y = 0{,}040\\sin(5\\pi t)$ meter. Tentukan amplitudo, frekuensi, periode, dan simpangan pada $t = 0{,}050\\ \\text{s}$.',
            langkah: [
              'Bandingkan dengan $y = A\\sin\\omega t$: amplitudo $A = 0{,}040\\ \\text{m}$ dan $\\omega = 5\\pi\\ \\text{rad/s}$.',
              'Frekuensi: $f = \\dfrac{\\omega}{2\\pi} = \\dfrac{5\\pi}{2\\pi} = 2{,}5\\ \\text{Hz}$.',
              'Periode: $T = \\dfrac{1}{f} = 0{,}40\\ \\text{s}$.',
              'Simpangan: $y = 0{,}040\\sin(5\\pi \\times 0{,}050) = 0{,}040\\sin\\left(\\dfrac{\\pi}{4}\\right) \\approx 0{,}0283\\ \\text{m}$.'
            ],
            hasil: 'Amplitudo 4,0 cm, frekuensi 2,5 Hz, periode 0,40 s, dan simpangan pada 0,050 s sekitar 2,83 cm.'
          },
          {
            soal: 'Balok $0{,}20\\ \\text{kg}$ di ujung pegas ($k = 50\\ \\text{N/m}$) bergetar dengan amplitudo $0{,}080\\ \\text{m}$. Berapa energi total, dan berapa laju balok saat simpangannya $0{,}040\\ \\text{m}$?',
            langkah: [
              'Energi total: $E = \\tfrac{1}{2}kA^2 = \\tfrac{1}{2} \\times 50 \\times 0{,}0064 = 0{,}16\\ \\text{J}$.',
              'Energi potensial di $y = 0{,}040\\ \\text{m}$: $U = \\tfrac{1}{2} \\times 50 \\times 0{,}0016 = 0{,}040\\ \\text{J}$.',
              'Energi kinetik: $K = E - U = 0{,}16 - 0{,}040 = 0{,}12\\ \\text{J}$.',
              'Laju: $v = \\sqrt{\\dfrac{2K}{m}} = \\sqrt{\\dfrac{2 \\times 0{,}12}{0{,}20}} = \\sqrt{1{,}2} \\approx 1{,}10\\ \\text{m/s}$.'
            ],
            hasil: 'Energi totalnya 0,16 J dan lajunya sekitar 1,10 m/s.'
          },
          {
            soal: 'Berapa periode dan frekuensi bandul sederhana sepanjang $0{,}40\\ \\text{m}$? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Pakai $T = 2\\pi\\sqrt{L/g}$ dengan $L = 0{,}40\\ \\text{m}$.',
              '$T = 2\\pi\\sqrt{\\dfrac{0{,}40}{10}} = 2\\pi \\times 0{,}20 = 0{,}40\\pi \\approx 1{,}26\\ \\text{s}$.',
              'Frekuensi: $f = \\dfrac{1}{T} = \\dfrac{1}{1{,}26} \\approx 0{,}796\\ \\text{Hz}$.'
            ],
            hasil: 'Periodenya sekitar 1,26 s dan frekuensinya sekitar 0,796 Hz.'
          }
        ],
        kesalahan: [
          'Memakai kalkulator dalam mode derajat saat menghitung $\\sin(\\omega t + \\varphi_0)$. Pada rumus GHS, sudutnya dalam radian.',
          'Mengira periode pegas bergantung pada amplitudo. Rumus $T = 2\\pi\\sqrt{m/k}$ tidak memuat $A$. Amplitudo hanya menentukan jarak dan kecepatan maksimum.',
          'Mengira periode bandul bergantung pada massa beban. Massa hilang dari rumus, yang menentukan hanyalah $L$ dan $g$.',
          'Menukar $\\omega$ dengan $f$. Hubungannya $\\omega = 2\\pi f$: $\\omega$ dalam rad/s, sedangkan $f$ dalam Hz.',
          'Menyangka kecepatan maksimum dan percepatan maksimum terjadi di titik yang sama. Kecepatan maksimum ada di titik setimbang (percepatan nol), percepatan maksimum ada di ujung (kecepatan nol).',
          'Menganggap waktu dari titik setimbang ke $y = A/2$ adalah $T/8$ karena jaraknya separuh. Geraknya tidak seragam: $\\sin\\omega t = \\tfrac{1}{2}$ memberi $t = T/12$.',
          'Memakai $T = 2\\pi\\sqrt{L/g}$ untuk simpangan sudut besar. Rumus itu hanya berlaku untuk sudut kecil.'
        ],
        ringkasan: [
          'Periode $T = t/n$, frekuensi $f = 1/T$, dan $\\omega = 2\\pi f = 2\\pi/T$.',
          'Persamaan GHS: $y = A\\sin(\\omega t + \\varphi_0)$, $v = A\\omega\\cos(\\omega t + \\varphi_0)$, $a = -\\omega^2 y$. Maksimumnya $v_{\\text{maks}} = A\\omega$ dan $a_{\\text{maks}} = A\\omega^2$.',
          'Pegas: $T = 2\\pi\\sqrt{m/k}$. Bandul sederhana (sudut kecil): $T = 2\\pi\\sqrt{L/g}$.',
          'Energi total $E = \\tfrac{1}{2}kA^2$ tetap, $K + U = E$, dan $v = \\omega\\sqrt{A^2 - y^2}$.',
          'GHS adalah proyeksi gerak melingkar beraturan: jari-jari menjadi amplitudo, sudut menjadi fase, dan waktu tempuh $\\Delta t = \\Delta\\theta/\\omega$.',
          'Fase $\\varphi = t/T + \\varphi_0/2\\pi$. Beda fase nol berarti sefase, beda fase $\\tfrac{1}{2}$ berarti berlawanan fase.'
        ],
        simulasi: {
          id: 'getaran-harmonik-pegas',
          judul: 'Simulasi: balok-pegas horizontal dan grafik y\u2013t',
          param: [
            { kunci: 'A', label: 'Amplitudo', min: 0.02, max: 0.2, nilai: 0.1, satuan: 'm', langkah: 0.01 },
            { kunci: 'm', label: 'Massa balok', min: 0.1, max: 2, nilai: 0.5, satuan: 'kg', langkah: 0.1 },
            { kunci: 'k', label: 'Konstanta pegas', min: 20, max: 200, nilai: 100, satuan: 'N/m', langkah: 10 },
            { kunci: 't', label: 'Waktu', min: 0, max: 2, nilai: 0.3, satuan: 's', langkah: 0.01 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== ELASTISITAS: PEMULA ===================== */
    {
      id: 'el-p1',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah kawat ditarik dengan gaya $100\\ \\text{N}$. Luas penampang kawat $2{,}0 \\times 10^{-6}\\ \\text{m}^2$. Berapa tegangan tarik pada kawat?',
      pilihan: [],
      jawaban: 5e7,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Tegangan adalah gaya yang bekerja pada tiap satuan luas penampang.',
        'Gunakan $\\sigma = F/A$.'
      ],
      pembahasan: [
        'Diketahui $F = 100\\ \\text{N}$ dan $A = 2{,}0 \\times 10^{-6}\\ \\text{m}^2$.',
        '$\\sigma = \\dfrac{F}{A} = \\dfrac{100}{2{,}0 \\times 10^{-6}} = 5{,}0 \\times 10^{7}\\ \\text{Pa}$.'
      ],
      tag: ['tegangan'],
      ragu: false
    },
    {
      id: 'el-p2',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Kawat sepanjang $2{,}0\\ \\text{m}$ bertambah panjang $1{,}0\\ \\text{mm}$ ketika ditarik. Berapa regangan kawat?',
      pilihan: [
        '$2 \\times 10^{3}$',
        '$5 \\times 10^{-1}$',
        '$5 \\times 10^{-4}$',
        '$1 \\times 10^{-3}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Regangan adalah perbandingan pertambahan panjang terhadap panjang mula-mula.',
        'Samakan dulu satuan: $1{,}0\\ \\text{mm} = 1{,}0 \\times 10^{-3}\\ \\text{m}$.'
      ],
      pembahasan: [
        'Diketahui $\\Delta L = 1{,}0 \\times 10^{-3}\\ \\text{m}$ dan $L_0 = 2{,}0\\ \\text{m}$.',
        '$\\varepsilon = \\dfrac{\\Delta L}{L_0} = \\dfrac{1{,}0 \\times 10^{-3}}{2{,}0} = 5 \\times 10^{-4}$ (tanpa satuan).'
      ],
      tag: ['regangan'],
      ragu: false
    },
    {
      id: 'el-p3',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah pegas dengan konstanta $350\\ \\text{N/m}$ ditarik sehingga bertambah panjang $6{,}0\\ \\text{cm}$. Berapa besar gaya pegas?',
      pilihan: [],
      jawaban: 21,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Ubah dulu pertambahan panjang ke meter.',
        'Gunakan hukum Hooke $F = kx$.'
      ],
      pembahasan: [
        'Ubah satuan: $x = 6{,}0\\ \\text{cm} = 0{,}060\\ \\text{m}$.',
        '$F = kx = 350 \\times 0{,}060 = 21\\ \\text{N}$.'
      ],
      tag: ['hukum Hooke'],
      ragu: false
    },
    {
      id: 'el-p4',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Sifat benda yang dapat kembali ke bentuk dan ukuran semula setelah gaya yang mengubah bentuknya dihilangkan disebut sifat ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['elastis'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Karet gelang dan pegas memiliki sifat ini. Kebalikannya adalah sifat plastis, seperti pada plastisin.',
        'Kata yang dicari berawalan huruf e dan juga menjadi nama bab ini.'
      ],
      pembahasan: [
        'Benda yang kembali ke bentuk semula setelah gaya dilepas bersifat elastis.',
        'Bila gaya terlalu besar sampai melewati batas elastis, benda tidak lagi pulih sempurna.'
      ],
      tag: ['elastisitas', 'istilah'],
      ragu: false
    },
    {
      id: 'el-p5',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Modulus Young suatu bahan memiliki satuan yang sama dengan besaran ...',
      pilihan: [
        'gaya',
        'tekanan',
        'energi',
        'konstanta pegas'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Modulus Young adalah tegangan dibagi regangan.',
        'Regangan tidak punya satuan, jadi satuan modulus sama dengan satuan tegangan.'
      ],
      pembahasan: [
        '$E = \\dfrac{\\sigma}{\\varepsilon}$ dan $\\varepsilon$ tanpa satuan, sehingga $E$ bersatuan sama dengan $\\sigma = F/A$.',
        'Satuannya $\\text{N/m}^2 = \\text{Pa}$, yaitu satuan tekanan.'
      ],
      tag: ['modulus Young', 'satuan'],
      ragu: false
    },

    /* ===================== ELASTISITAS: MENENGAH ===================== */
    {
      id: 'el-m1',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Kawat baja dengan modulus Young $2{,}0 \\times 10^{11}\\ \\text{Pa}$ memiliki panjang $2{,}5\\ \\text{m}$ dan luas penampang $1{,}5 \\times 10^{-6}\\ \\text{m}^2$. Kawat ditarik gaya $180\\ \\text{N}$ (masih di daerah elastis). Berapa pertambahan panjang kawat, dalam mm?',
      pilihan: [],
      jawaban: 1.5,
      satuan: 'mm',
      toleransi: 0.02,
      petunjuk: [
        'Hitung tegangan lebih dulu, lalu regangan lewat modulus Young.',
        'Pertambahan panjang $= \\varepsilon\\,L_0$. Jangan lupa mengubah meter ke mm di akhir.'
      ],
      pembahasan: [
        'Tegangan: $\\sigma = \\dfrac{F}{A} = \\dfrac{180}{1{,}5 \\times 10^{-6}} = 1{,}2 \\times 10^{8}\\ \\text{Pa}$.',
        'Regangan: $\\varepsilon = \\dfrac{\\sigma}{E} = \\dfrac{1{,}2 \\times 10^{8}}{2{,}0 \\times 10^{11}} = 6{,}0 \\times 10^{-4}$.',
        '$\\Delta L = \\varepsilon L_0 = 6{,}0 \\times 10^{-4} \\times 2{,}5 = 1{,}5 \\times 10^{-3}\\ \\text{m} = 1{,}5\\ \\text{mm}$.'
      ],
      tag: ['modulus Young', 'regangan'],
      ragu: false
    },
    {
      id: 'el-m2',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Kawat tembaga ($E = 1{,}2 \\times 10^{11}\\ \\text{Pa}$) sepanjang $1{,}2\\ \\text{m}$ dengan luas penampang $2{,}5 \\times 10^{-6}\\ \\text{m}^2$ diperlakukan sebagai pegas. Berapa konstanta pegas kawat itu?',
      pilihan: [],
      jawaban: 250000,
      satuan: 'N/m',
      toleransi: 0.02,
      petunjuk: [
        'Konstanta pegas adalah gaya yang diperlukan per satuan pertambahan panjang.',
        'Dari $\\Delta L = F L_0/(AE)$ diperoleh $k = F/\\Delta L = EA/L_0$.'
      ],
      pembahasan: [
        '$k = \\dfrac{F}{\\Delta L} = \\dfrac{E\\,A}{L_0}$.',
        '$k = \\dfrac{1{,}2 \\times 10^{11} \\times 2{,}5 \\times 10^{-6}}{1{,}2} = 2{,}5 \\times 10^{5}\\ \\text{N/m}$.'
      ],
      tag: ['konstanta pegas', 'modulus Young'],
      ragu: false
    },
    {
      id: 'el-m3',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Kawat A dan kawat B terbuat dari bahan yang sama dan panjangnya sama. Diameter kawat B dua kali diameter kawat A. Jika keduanya ditarik gaya yang sama (di daerah elastis), berapa perbandingan pertambahan panjang $\\Delta L_B : \\Delta L_A$?',
      pilihan: [
        '$1 : 4$',
        '$1 : 2$',
        '$2 : 1$',
        '$4 : 1$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Bahan sama berarti $E$ sama. Panjang dan gaya juga sama, jadi hanya $A$ yang berbeda.',
        'Dari $\\Delta L = FL_0/(AE)$, $\\Delta L$ berbanding terbalik dengan $A$. Ingat $A \\propto d^2$.'
      ],
      pembahasan: [
        '$\\Delta L \\propto \\dfrac{1}{A}$ dan $A = \\tfrac{1}{4}\\pi d^2 \\propto d^2$.',
        'Diameter B dua kali diameter A, maka $A_B = 4A_A$.',
        '$\\Delta L_B : \\Delta L_A = \\dfrac{1}{4} : 1 = 1 : 4$.'
      ],
      tag: ['modulus Young', 'perbandingan'],
      ragu: false
    },
    {
      id: 'el-m4',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Dua pegas ringan dengan konstanta $300\\ \\text{N/m}$ dan $600\\ \\text{N/m}$ disambung seri, lalu digantung vertikal. Sebuah beban $4{,}0\\ \\text{kg}$ digantung di ujung bawah (gunakan $g = 10\\ \\text{m/s}^2$). Berapa pertambahan panjang total kedua pegas?',
      pilihan: [],
      jawaban: 0.2,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Pada susunan seri, gaya di tiap pegas sama dengan berat beban.',
        'Cari $k_s$ dengan $1/k_s = 1/k_1 + 1/k_2$, lalu pakai $x = F/k_s$.'
      ],
      pembahasan: [
        'Berat beban: $F = mg = 4{,}0 \\times 10 = 40\\ \\text{N}$.',
        '$\\dfrac{1}{k_s} = \\dfrac{1}{300} + \\dfrac{1}{600} = \\dfrac{3}{600}$, jadi $k_s = 200\\ \\text{N/m}$.',
        '$x = \\dfrac{F}{k_s} = \\dfrac{40}{200} = 0{,}20\\ \\text{m}$.'
      ],
      tag: ['pegas seri', 'hukum Hooke'],
      ragu: false
    },
    {
      id: 'el-m5',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Dua pegas disambung ujung ke ujung sehingga gaya yang menarik keduanya sama besar, dan pertambahan panjang totalnya adalah jumlah pertambahan panjang tiap pegas. Susunan ini disebut susunan ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['seri'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ada dua susunan dasar pegas. Yang satu disambung berdampingan, yang lain disambung berurutan.',
        'Lampu hias yang disambung berurutan dalam satu jalur juga memakai istilah yang sama.'
      ],
      pembahasan: [
        'Pegas yang disambung ujung ke ujung (berurutan) menanggung gaya yang sama.',
        'Itu adalah susunan seri, dengan $1/k_s = 1/k_1 + 1/k_2$.'
      ],
      tag: ['pegas seri', 'istilah'],
      ragu: false
    },

    /* ===================== ELASTISITAS: LANJUT ===================== */
    {
      id: 'el-l1',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Grafik gaya terhadap pertambahan panjang ($F$\u2013$x$) sebuah pegas berupa garis lurus yang berawal dari titik asal. Pada $x = 0{,}040\\ \\text{m}$ gaya pegas $12\\ \\text{N}$, dan pada $x = 0{,}080\\ \\text{m}$ gaya pegas $24\\ \\text{N}$. Berapa usaha yang diperlukan untuk meregangkan pegas dari $x = 0{,}040\\ \\text{m}$ sampai $x = 0{,}080\\ \\text{m}$?',
      pilihan: [],
      jawaban: 0.72,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Usaha sama dengan luas di bawah grafik $F$\u2013$x$ pada selang yang diminta.',
        'Daerah yang dimaksud berbentuk trapesium dengan sisi sejajar $12\\ \\text{N}$ dan $24\\ \\text{N}$.'
      ],
      pembahasan: [
        'Luas trapesium: $W = \\tfrac{1}{2}(12 + 24)(0{,}080 - 0{,}040) = 18 \\times 0{,}040 = 0{,}72\\ \\text{J}$.',
        'Cek dengan $k = 12/0{,}040 = 300\\ \\text{N/m}$: $W = \\tfrac{1}{2}k(x_2^2 - x_1^2) = 150\\,(0{,}0064 - 0{,}0016) = 0{,}72\\ \\text{J}$.'
      ],
      tag: ['grafik F-x', 'usaha'],
      ragu: false
    },
    {
      id: 'el-l2',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Grafik tegangan terhadap regangan sebuah kawat logam berupa garis lurus dari titik asal sampai titik P (batas proporsional), lalu melengkung dengan kemiringan makin landai melewati titik E (batas elastis), terus melengkung sampai titik tertinggi, dan berakhir di titik patah B. Kawat ditarik sampai tegangannya berada di antara titik E dan titik B (belum patah), kemudian gaya tarik dilepas perlahan. Apa yang terjadi?',
      pilihan: [
        'Kawat kembali tepat ke panjang semula karena hukum Hooke selalu berlaku',
        'Kawat langsung patah begitu gaya dilepas',
        'Kawat menjadi lebih pendek daripada panjang semula',
        'Kawat tetap lebih panjang daripada semula karena tersisa regangan permanen'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Perhatikan letak tegangan maksimum kawat terhadap batas elastis.',
        'Melewati batas elastis berarti sebagian perubahan bentuk tidak dapat pulih.'
      ],
      pembahasan: [
        'Tegangan maksimum melewati titik E, jadi kawat sudah masuk daerah plastis.',
        'Saat gaya dilepas, kawat memendek mengikuti garis yang sejajar bagian lurus grafik, sehingga regangan tidak turun sampai nol.',
        'Akibatnya tersisa regangan permanen: kawat lebih panjang daripada semula.'
      ],
      tag: ['batas elastis', 'grafik tegangan-regangan'],
      ragu: false
    },
    {
      id: 'el-l3',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Kawat baja sepanjang $1{,}5\\ \\text{m}$ ($E = 2{,}0 \\times 10^{11}\\ \\text{Pa}$) disambung ujung ke ujung dengan kawat tembaga sepanjang $0{,}8\\ \\text{m}$ ($E = 1{,}0 \\times 10^{11}\\ \\text{Pa}$). Kedua kawat berpenampang sama, yaitu $2{,}0 \\times 10^{-6}\\ \\text{m}^2$. Gabungan digantung vertikal dan ujung bawahnya ditarik gaya $240\\ \\text{N}$. Abaikan berat kawat. Berapa pertambahan panjang total, dalam mm?',
      pilihan: [],
      jawaban: 1.86,
      satuan: 'mm',
      toleransi: 0.02,
      petunjuk: [
        'Kedua kawat disambung seri, jadi gaya pada masing-masing sama besar, yaitu $240\\ \\text{N}$.',
        'Hitung $\\Delta L = FL_0/(AE)$ untuk tiap kawat, lalu jumlahkan.'
      ],
      pembahasan: [
        'Baja: $\\Delta L_1 = \\dfrac{240 \\times 1{,}5}{2{,}0 \\times 10^{-6} \\times 2{,}0 \\times 10^{11}} = 9{,}0 \\times 10^{-4}\\ \\text{m}$.',
        'Tembaga: $\\Delta L_2 = \\dfrac{240 \\times 0{,}8}{2{,}0 \\times 10^{-6} \\times 1{,}0 \\times 10^{11}} = 9{,}6 \\times 10^{-4}\\ \\text{m}$.',
        'Total: $\\Delta L = 9{,}0 \\times 10^{-4} + 9{,}6 \\times 10^{-4} = 1{,}86 \\times 10^{-3}\\ \\text{m} = 1{,}86\\ \\text{mm}$.'
      ],
      tag: ['modulus Young', 'kawat seri'],
      ragu: false
    },
    {
      id: 'el-l4',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah pegas ditarik gaya $12\\ \\text{N}$ dan bertambah panjang $5{,}0\\ \\text{cm}$. Berapa energi potensial pegas itu ketika diregangkan sejauh $9{,}0\\ \\text{cm}$ dari panjang alaminya?',
      pilihan: [],
      jawaban: 0.972,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Cari dulu konstanta pegas dari data pertama.',
        'Gunakan $U = \\tfrac{1}{2}kx^2$ dengan $x$ dalam meter.'
      ],
      pembahasan: [
        'Konstanta pegas: $k = \\dfrac{F}{x} = \\dfrac{12}{0{,}050} = 240\\ \\text{N/m}$.',
        '$U = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2} \\times 240 \\times (0{,}090)^2 = 120 \\times 0{,}0081 = 0{,}972\\ \\text{J}$.'
      ],
      tag: ['energi pegas', 'hukum Hooke'],
      ragu: false
    },
    {
      id: 'el-l5',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pada uji tarik sebuah kawat, bagian awal grafik tegangan terhadap regangan berupa garis lurus dari titik asal. Sebuah titik pada garis itu menunjukkan tegangan $4{,}0 \\times 10^{7}\\ \\text{Pa}$ untuk regangan $2{,}0 \\times 10^{-4}$. Kawat lain dari bahan yang sama dengan panjang $3{,}0\\ \\text{m}$ dan luas penampang $1{,}5 \\times 10^{-6}\\ \\text{m}^2$ ditarik sampai bertambah panjang $0{,}90\\ \\text{mm}$ (masih di daerah garis lurus). Berapa gaya tariknya?',
      pilihan: [],
      jawaban: 90,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Kemiringan garis lurus pada grafik tegangan\u2013regangan adalah modulus Young.',
        'Cari $E$ dari titik yang diketahui, lalu hitung regangan, tegangan, dan gaya untuk kawat kedua.'
      ],
      pembahasan: [
        'Modulus Young: $E = \\dfrac{\\sigma}{\\varepsilon} = \\dfrac{4{,}0 \\times 10^{7}}{2{,}0 \\times 10^{-4}} = 2{,}0 \\times 10^{11}\\ \\text{Pa}$.',
        'Regangan kawat kedua: $\\varepsilon = \\dfrac{0{,}90 \\times 10^{-3}}{3{,}0} = 3{,}0 \\times 10^{-4}$.',
        'Tegangan: $\\sigma = E\\varepsilon = 2{,}0 \\times 10^{11} \\times 3{,}0 \\times 10^{-4} = 6{,}0 \\times 10^{7}\\ \\text{Pa}$.',
        'Gaya: $F = \\sigma A = 6{,}0 \\times 10^{7} \\times 1{,}5 \\times 10^{-6} = 90\\ \\text{N}$.'
      ],
      tag: ['grafik tegangan-regangan', 'modulus Young'],
      ragu: false
    },

    /* ===================== ELASTISITAS: EXPERT ===================== */
    {
      id: 'el-e1',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok kaku ringan digantung mendatar pada dua cabang pegas yang berdampingan. Cabang pertama terdiri atas dua pegas, $300\\ \\text{N/m}$ dan $600\\ \\text{N/m}$, yang disambung seri. Cabang kedua terdiri atas dua pegas, $400\\ \\text{N/m}$ dan $1200\\ \\text{N/m}$, yang juga disambung seri. Beban $6{,}0\\ \\text{kg}$ digantung pada titik yang membuat balok tetap mendatar, sehingga kedua cabang bertambah panjang sama. Gunakan $g = 10\\ \\text{m/s}^2$ dan abaikan massa pegas dan balok. Berapa energi potensial elastis total yang tersimpan di keempat pegas?',
      pilihan: [],
      jawaban: 3.6,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Kedua cabang bertambah panjang sama, jadi cabang-cabang itu paralel. Di dalam tiap cabang, pegas-pegasnya seri.',
        'Cari konstanta tiap cabang dengan rumus seri, jumlahkan untuk mendapat $k_{\\text{total}}$, lalu cari $x$ dari berat beban.',
        'Energi total $= \\tfrac{1}{2}k_{\\text{total}}x^2$. Hati-hati: energi ini bukan $mg\\,x$.'
      ],
      pembahasan: [
        'Cabang 1: $k_1 = \\dfrac{300 \\times 600}{300 + 600} = 200\\ \\text{N/m}$. Cabang 2: $k_2 = \\dfrac{400 \\times 1200}{400 + 1200} = 300\\ \\text{N/m}$.',
        'Kedua cabang paralel: $k_{\\text{total}} = 200 + 300 = 500\\ \\text{N/m}$.',
        'Berat beban $F = 6{,}0 \\times 10 = 60\\ \\text{N}$, jadi $x = \\dfrac{60}{500} = 0{,}12\\ \\text{m}$.',
        '$U = \\tfrac{1}{2} \\times 500 \\times 0{,}12^2 = 3{,}6\\ \\text{J}$.',
        'Cek: cabang 1 menyimpan $\\tfrac{1}{2} \\times 200 \\times 0{,}0144 = 1{,}44\\ \\text{J}$ dan cabang 2 menyimpan $2{,}16\\ \\text{J}$; jumlahnya $3{,}6\\ \\text{J}$. Energi ini hanya separuh dari penurunan energi potensial gravitasi beban ($mg\\,x = 7{,}2\\ \\text{J}$) saat beban dilepas pelan-pelan dari posisi tanpa regangan.'
      ],
      tag: ['pegas seri-paralel', 'energi pegas'],
      ragu: false
    },
    {
      id: 'el-e2',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Pegas homogen berkonstanta $90\\ \\text{N/m}$ dipotong menjadi dua bagian dengan perbandingan panjang $1 : 2$. Kedua potongan kemudian dipasang berdampingan (paralel) pada beban yang sama. Berapa konstanta pegas pengganti susunan itu?',
      pilihan: [],
      jawaban: 405,
      satuan: 'N/m',
      toleransi: 0.02,
      petunjuk: [
        'Bayangkan pegas utuh sebagai banyak segmen identik yang disambung seri.',
        'Memotong pegas berarti mengurangi jumlah segmen, sehingga konstanta tiap potongan berubah menurut panjangnya.',
        'Setelah mendapat $k$ tiap potongan, gabungkan dengan rumus paralel.'
      ],
      pembahasan: [
        'Pegas utuh = $n$ segmen identik berkonstanta $k_0$ yang seri: $k = k_0/n$. Jadi untuk pegas homogen, $k \\propto 1/L$.',
        'Potongan pendek punya $\\tfrac{1}{3}$ panjang: $k_1 = 3k = 270\\ \\text{N/m}$. Potongan panjang punya $\\tfrac{2}{3}$ panjang: $k_2 = \\tfrac{3}{2}k = 135\\ \\text{N/m}$.',
        'Paralel: $k_p = 270 + 135 = 405\\ \\text{N/m}$.'
      ],
      tag: ['pegas dipotong', 'pegas paralel'],
      ragu: false
    },
    {
      id: 'el-e3',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Kawat baja homogen sepanjang $40\\ \\text{m}$ digantung dari ujung atasnya dan meregang hanya karena beratnya sendiri. Massa jenis baja $8000\\ \\text{kg/m}^3$, modulus Young $2{,}0 \\times 10^{11}\\ \\text{Pa}$, dan $g = 10\\ \\text{m/s}^2$. Berapa pertambahan panjang kawat, dalam mm?',
      pilihan: [],
      jawaban: 0.32,
      satuan: 'mm',
      toleransi: 0.02,
      petunjuk: [
        'Tegangan tidak sama di setiap titik: bagian atas menanggung berat kawat di bawahnya.',
        'Ambil potongan tipis $dy$ pada jarak $y$ dari ujung atas. Gaya di situ adalah berat kawat sepanjang $L - y$.',
        'Pertambahan panjang potongan itu $d(\\Delta L) = \\dfrac{\\rho g (L - y)}{E}\\,dy$. Integralkan dari $0$ sampai $L$.'
      ],
      pembahasan: [
        'Gaya di jarak $y$: $F(y) = \\rho A g (L - y)$, jadi tegangan $\\sigma(y) = \\rho g (L - y)$ (luas $A$ habis terbagi).',
        '$d(\\Delta L) = \\dfrac{\\sigma}{E}\\,dy = \\dfrac{\\rho g (L - y)}{E}\\,dy$.',
        '$\\Delta L = \\displaystyle\\int_0^L \\dfrac{\\rho g (L - y)}{E}\\,dy = \\dfrac{\\rho g L^2}{2E}$.',
        '$\\Delta L = \\dfrac{8000 \\times 10 \\times 40^2}{2 \\times 2{,}0 \\times 10^{11}} = 3{,}2 \\times 10^{-4}\\ \\text{m} = 0{,}32\\ \\text{mm}$.'
      ],
      tag: ['kalkulus', 'berat sendiri'],
      ragu: false
    },
    {
      id: 'el-e4',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Balok bermassa $0{,}50\\ \\text{kg}$ dilepas dari diam pada ketinggian $0{,}40\\ \\text{m}$ di atas ujung atas sebuah pegas tegak ($k = 200\\ \\text{N/m}$) yang ujung bawahnya tertanam di lantai. Balok menempel pada pegas dan menekannya sampai berhenti sesaat, tanpa ada kehilangan energi lain. Gunakan $g = 10\\ \\text{m/s}^2$ dan abaikan massa pegas. Berapa pemampatan maksimum pegas?',
      pilihan: [],
      jawaban: 0.16861,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Gunakan kekekalan energi antara posisi awal dan saat pegas termampat maksimum (laju balok nol).',
        'Balok turun sejauh $h + x$ dengan $x$ adalah pemampatan pegas.',
        'Persamaannya: $mg(h + x) = \\tfrac{1}{2}kx^2$. Selesaikan sebagai persamaan kuadrat dan ambil akar positif.'
      ],
      pembahasan: [
        'Energi: $mg(h + x) = \\tfrac{1}{2}kx^2$, dengan $mg = 5{,}0\\ \\text{N}$ dan $\\tfrac{1}{2}k = 100$.',
        '$5{,}0\\,(0{,}40 + x) = 100\\,x^2 \\Rightarrow 100x^2 - 5x - 2 = 0$.',
        '$x = \\dfrac{5 + \\sqrt{25 + 800}}{200} = \\dfrac{5 + 28{,}72}{200} \\approx 0{,}1686\\ \\text{m}$.'
      ],
      tag: ['energi pegas', 'persamaan kuadrat'],
      ragu: false
    },
    {
      id: 'el-e5',
      bab: 'elastisitas-shm',
      subbab: 'elastisitas',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Dua kawat baja memakai bahan yang sama. Kawat 1 memiliki panjang $L$ dan diameter $d$, kawat 2 memiliki panjang $2L$ dan diameter $2d$. Keduanya ditarik gaya yang sama di daerah elastis. Berapa perbandingan energi potensial elastis yang tersimpan, $U_1 : U_2$?',
      pilihan: [
        '$1 : 2$',
        '$2 : 1$',
        '$4 : 1$',
        '$1 : 8$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Energi yang tersimpan sama dengan usaha: $U = \\tfrac{1}{2}F\\,\\Delta L$.',
        'Masukkan $\\Delta L = FL_0/(AE)$ agar $U$ hanya bergantung pada $F$, $L_0$, $A$, dan $E$.'
      ],
      pembahasan: [
        '$U = \\tfrac{1}{2}F\\,\\Delta L = \\dfrac{F^2 L_0}{2AE}$. Dengan $F$ dan $E$ sama, $U \\propto L_0/A \\propto L_0/d^2$.',
        'Kawat 1: $\\dfrac{L}{d^2}$. Kawat 2: $\\dfrac{2L}{(2d)^2} = \\dfrac{L}{2d^2}$.',
        '$U_1 : U_2 = 1 : \\tfrac{1}{2} = 2 : 1$.'
      ],
      tag: ['energi pegas', 'perbandingan'],
      ragu: false
    },

    /* ===================== GHS: PEMULA ===================== */
    {
      id: 'ghs-p1',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah garpu tala bergetar $440$ kali dalam waktu $2{,}0\\ \\text{s}$. Berapa frekuensi getarannya?',
      pilihan: [],
      jawaban: 220,
      satuan: 'Hz',
      toleransi: 0.02,
      petunjuk: [
        'Frekuensi adalah banyaknya getaran tiap sekon.',
        'Gunakan $f = n/t$.'
      ],
      pembahasan: [
        'Diketahui $n = 440$ getaran dan $t = 2{,}0\\ \\text{s}$.',
        '$f = \\dfrac{n}{t} = \\dfrac{440}{2{,}0} = 220\\ \\text{Hz}$.'
      ],
      tag: ['frekuensi'],
      ragu: false
    },
    {
      id: 'ghs-p2',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Simpangan sebuah benda dinyatakan $y = 0{,}08\\sin(10\\pi t)$ dengan $y$ dalam meter dan $t$ dalam sekon. Berapa frekuensi getarannya?',
      pilihan: [
        '$5\\ \\text{Hz}$',
        '$10\\ \\text{Hz}$',
        '$10\\pi\\ \\text{Hz}$',
        '$0{,}2\\ \\text{Hz}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Bandingkan dengan $y = A\\sin\\omega t$. Bilangan di depan $t$ adalah $\\omega$.',
        'Gunakan $\\omega = 2\\pi f$.'
      ],
      pembahasan: [
        'Dari persamaan, $\\omega = 10\\pi\\ \\text{rad/s}$.',
        '$f = \\dfrac{\\omega}{2\\pi} = \\dfrac{10\\pi}{2\\pi} = 5\\ \\text{Hz}$ (periodenya $0{,}2\\ \\text{s}$).'
      ],
      tag: ['frekuensi', 'persamaan GHS'],
      ragu: false
    },
    {
      id: 'ghs-p3',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok bermassa $0{,}50\\ \\text{kg}$ dihubungkan ke pegas horizontal berkonstanta $200\\ \\text{N/m}$ pada lantai licin, lalu digetarkan. Berapa periode getarannya?',
      pilihan: [],
      jawaban: 0.31416,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Periode getaran balok-pegas bergantung pada massa dan konstanta pegas.',
        'Gunakan $T = 2\\pi\\sqrt{m/k}$.'
      ],
      pembahasan: [
        'Diketahui $m = 0{,}50\\ \\text{kg}$ dan $k = 200\\ \\text{N/m}$.',
        '$T = 2\\pi\\sqrt{\\dfrac{0{,}50}{200}} = 2\\pi \\times 0{,}050 = 0{,}1\\pi \\approx 0{,}314\\ \\text{s}$.'
      ],
      tag: ['periode pegas'],
      ragu: false
    },
    {
      id: 'ghs-p4',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Simpangan terbesar yang dicapai benda yang bergetar, diukur dari titik setimbangnya, disebut ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['amplitudo', 'amplitude'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Besaran ini diberi lambang $A$ pada rumus GHS.',
        'Kata ini juga dipakai untuk menyatakan tinggi puncak gelombang.'
      ],
      pembahasan: [
        'Simpangan maksimum dari titik setimbang disebut amplitudo.',
        'Pada $y = A\\sin(\\omega t + \\varphi_0)$, nilai maksimum $y$ adalah $A$.'
      ],
      tag: ['amplitudo', 'istilah'],
      ragu: false
    },
    {
      id: 'ghs-p5',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Pada saat benda yang bergetar harmonik sederhana melewati titik setimbang, bagaimana kecepatan dan percepatannya?',
      pilihan: [
        'Kecepatan nol, percepatan maksimum',
        'Kecepatan maksimum, percepatan nol',
        'Kecepatan maksimum, percepatan maksimum',
        'Kecepatan nol, percepatan nol'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Percepatan GHS sebanding dengan simpangan: $a = -\\omega^2 y$.',
        'Di titik setimbang simpangannya nol. Pikirkan apa yang terjadi pada kecepatan lewat kekekalan energi.'
      ],
      pembahasan: [
        'Di titik setimbang $y = 0$, jadi $a = -\\omega^2 y = 0$.',
        'Seluruh energi berupa energi kinetik, sehingga kecepatan maksimum: $v_{\\text{maks}} = A\\omega$.'
      ],
      tag: ['kecepatan', 'percepatan'],
      ragu: false
    },

    /* ===================== GHS: MENENGAH ===================== */
    {
      id: 'ghs-m1',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah bandul sederhana harus berperiode tepat $2{,}0\\ \\text{s}$ (simpangan kecil, $g = 10\\ \\text{m/s}^2$). Berapa panjang tali bandul?',
      pilihan: [],
      jawaban: 1.0132,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Bandul sederhana punya periode $T = 2\\pi\\sqrt{L/g}$.',
        'Kuadratkan kedua ruas untuk mendapat $L$.'
      ],
      pembahasan: [
        '$T^2 = 4\\pi^2\\,\\dfrac{L}{g} \\Rightarrow L = \\dfrac{g\\,T^2}{4\\pi^2}$.',
        '$L = \\dfrac{10 \\times 2{,}0^2}{4\\pi^2} = \\dfrac{40}{39{,}478} \\approx 1{,}013\\ \\text{m}$.'
      ],
      tag: ['bandul sederhana'],
      ragu: false
    },
    {
      id: 'ghs-m2',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Balok $0{,}20\\ \\text{kg}$ di ujung pegas berkonstanta $80\\ \\text{N/m}$ bergetar harmonik di lantai licin dengan amplitudo $0{,}060\\ \\text{m}$. Berapa kecepatan maksimum balok?',
      pilihan: [],
      jawaban: 1.2,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Kecepatan maksimum terjadi di titik setimbang dan sama dengan $A\\omega$.',
        'Cari $\\omega$ dari $\\omega = \\sqrt{k/m}$.'
      ],
      pembahasan: [
        '$\\omega = \\sqrt{\\dfrac{k}{m}} = \\sqrt{\\dfrac{80}{0{,}20}} = \\sqrt{400} = 20\\ \\text{rad/s}$.',
        '$v_{\\text{maks}} = A\\omega = 0{,}060 \\times 20 = 1{,}2\\ \\text{m/s}$.'
      ],
      tag: ['kecepatan maksimum', 'pegas'],
      ragu: false
    },
    {
      id: 'ghs-m3',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Simpangan sebuah benda dinyatakan $y = 0{,}10\\sin\\left(4\\pi t + \\dfrac{\\pi}{6}\\right)$ dengan $y$ dalam meter, $t$ dalam sekon, dan sudut dalam radian. Berapa simpangan benda pada saat $t = 0$?',
      pilihan: [
        '$0\\ \\text{m}$',
        '$0{,}087\\ \\text{m}$',
        '$0{,}050\\ \\text{m}$',
        '$0{,}10\\ \\text{m}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Masukkan $t = 0$ ke persamaan. Suku $4\\pi t$ menjadi nol, tetapi sudut fase awal tetap ada.',
        'Ingat $\\sin 30^\\circ = \\tfrac{1}{2}$, dan $\\pi/6$ rad sama dengan $30^\\circ$.'
      ],
      pembahasan: [
        '$y(0) = 0{,}10\\sin\\left(\\dfrac{\\pi}{6}\\right)$.',
        '$\\sin\\dfrac{\\pi}{6} = 0{,}5$, sehingga $y(0) = 0{,}10 \\times 0{,}5 = 0{,}050\\ \\text{m}$.'
      ],
      tag: ['persamaan GHS', 'fase awal'],
      ragu: false
    },
    {
      id: 'ghs-m4',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Simpangan sebuah benda dinyatakan $y = 0{,}020\\sin(10\\pi t)$ dengan $y$ dalam meter dan $t$ dalam sekon. Berapa besar percepatan maksimum benda itu?',
      pilihan: [],
      jawaban: 19.739,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan adalah turunan kedua simpangan terhadap waktu: $a = -\\omega^2 y$.',
        'Percepatan maksimum $a_{\\text{maks}} = A\\omega^2$.'
      ],
      pembahasan: [
        'Dari persamaan: $A = 0{,}020\\ \\text{m}$ dan $\\omega = 10\\pi\\ \\text{rad/s}$.',
        '$a_{\\text{maks}} = A\\omega^2 = 0{,}020 \\times (10\\pi)^2 = 2\\pi^2 \\approx 19{,}74\\ \\text{m/s}^2$.'
      ],
      tag: ['percepatan maksimum', 'persamaan GHS'],
      ragu: false
    },
    {
      id: 'ghs-m5',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Gaya pemulih pada getaran harmonik sederhana selalu mengarah menuju titik apa? (tulis satu istilah, misalnya titik ...)',
      pilihan: [],
      jawaban: ['setimbang', 'seimbang', 'equilibrium'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Gaya pemulih berfungsi mengembalikan benda ke posisi tempat gaya total nol.',
        'Pada balok-pegas, posisi itu adalah saat pegas berada pada panjang alaminya.'
      ],
      pembahasan: [
        'Gaya pemulih $F = -ky$ berlawanan arah dengan simpangan.',
        'Karena itu gaya ini selalu menarik benda menuju titik setimbang (simpangan nol).'
      ],
      tag: ['gaya pemulih', 'istilah'],
      ragu: false
    },

    /* ===================== GHS: LANJUT ===================== */
    {
      id: 'ghs-l1',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok $0{,}50\\ \\text{kg}$ di ujung pegas ($k = 200\\ \\text{N/m}$) bergetar harmonik di lantai licin dengan amplitudo $0{,}10\\ \\text{m}$. Berapa laju balok saat simpangannya $0{,}060\\ \\text{m}$?',
      pilihan: [],
      jawaban: 1.6,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Energi total tetap: $K + U = \\tfrac{1}{2}kA^2$.',
        'Atau pakai $v = \\omega\\sqrt{A^2 - y^2}$ dengan $\\omega = \\sqrt{k/m}$.'
      ],
      pembahasan: [
        '$\\omega = \\sqrt{\\dfrac{200}{0{,}50}} = 20\\ \\text{rad/s}$.',
        '$v = \\omega\\sqrt{A^2 - y^2} = 20\\sqrt{0{,}10^2 - 0{,}060^2} = 20\\sqrt{0{,}0064}$.',
        '$v = 20 \\times 0{,}080 = 1{,}6\\ \\text{m/s}$.'
      ],
      tag: ['energi GHS', 'laju'],
      ragu: false
    },
    {
      id: 'ghs-l2',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Grafik simpangan terhadap waktu ($y$\u2013$t$) sebuah balok berbentuk gelombang sinus. Pada $t = 0$ balok berada di titik setimbang dan bergerak ke arah positif. Puncak pertama grafik bernilai $y = 5{,}0\\ \\text{cm}$ dan tercapai pada $t = 0{,}10\\ \\text{s}$. Berapa laju balok pada $t = 0{,}050\\ \\text{s}$, dalam m/s?',
      pilihan: [],
      jawaban: 0.55536,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Puncak pertama dicapai setelah seperempat periode, jadi $T/4 = 0{,}10\\ \\text{s}$.',
        'Dengan $A = 0{,}050\\ \\text{m}$ dan $\\omega$ dari $T$, tulis $v = A\\omega\\cos\\omega t$.'
      ],
      pembahasan: [
        '$T = 4 \\times 0{,}10 = 0{,}40\\ \\text{s}$ sehingga $\\omega = \\dfrac{2\\pi}{T} = 5\\pi\\ \\text{rad/s}$.',
        'Persamaannya $y = 0{,}050\\sin(5\\pi t)$, jadi $v = A\\omega\\cos\\omega t = 0{,}050 \\times 5\\pi\\cos(5\\pi t)$.',
        'Pada $t = 0{,}050\\ \\text{s}$: $v = 0{,}25\\pi\\cos\\dfrac{\\pi}{4} \\approx 0{,}7854 \\times 0{,}7071 \\approx 0{,}555\\ \\text{m/s}$.'
      ],
      tag: ['grafik y-t', 'kecepatan'],
      ragu: false
    },
    {
      id: 'ghs-l3',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Sebuah partikel bergerak melingkar beraturan dengan jari-jari $0{,}50\\ \\text{m}$ dan frekuensi $2{,}0\\ \\text{Hz}$. Bayangan (proyeksi) partikel itu pada salah satu garis tengah lingkaran bergerak harmonik sederhana. Berapa kecepatan maksimum bayangan tersebut?',
      pilihan: [
        '$1\\ \\text{m/s}$',
        '$\\pi\\ \\text{m/s}$',
        '$4\\pi\\ \\text{m/s}$',
        '$2\\pi\\ \\text{m/s}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Amplitudo bayangan sama dengan jari-jari lingkaran, dan kecepatan sudutnya sama dengan kecepatan sudut gerak melingkar.',
        'Kecepatan maksimum bayangan sama dengan laju partikel pada lingkaran: $v = \\omega r$.'
      ],
      pembahasan: [
        '$\\omega = 2\\pi f = 2\\pi \\times 2{,}0 = 4\\pi\\ \\text{rad/s}$ dan $A = r = 0{,}50\\ \\text{m}$.',
        '$v_{\\text{maks}} = A\\omega = 0{,}50 \\times 4\\pi = 2\\pi\\ \\text{m/s} \\approx 6{,}28\\ \\text{m/s}$.'
      ],
      tag: ['proyeksi gerak melingkar', 'kecepatan maksimum'],
      ragu: false
    },
    {
      id: 'ghs-l4',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok $2{,}0\\ \\text{kg}$ berada di lantai licin dan diapit dua pegas. Pegas di sisi kiri ($300\\ \\text{N/m}$) terhubung ke dinding kiri, dan pegas di sisi kanan ($500\\ \\text{N/m}$) terhubung ke dinding kanan. Pada posisi setimbang kedua pegas berada pada panjang alaminya. Balok digeser sedikit lalu dilepas. Berapa frekuensi getarannya?',
      pilihan: [],
      jawaban: 3.1831,
      satuan: 'Hz',
      toleransi: 0.02,
      petunjuk: [
        'Saat balok bergeser ke kanan sejauh $y$, satu pegas teregang dan pegas lainnya tertekan. Keduanya mendorong balok ke arah yang sama.',
        'Gaya pemulih total $= -(k_1 + k_2)\\,y$, jadi kedua pegas berperilaku seperti susunan paralel.'
      ],
      pembahasan: [
        '$k_{\\text{total}} = 300 + 500 = 800\\ \\text{N/m}$.',
        '$T = 2\\pi\\sqrt{\\dfrac{m}{k_{\\text{total}}}} = 2\\pi\\sqrt{\\dfrac{2{,}0}{800}} = 2\\pi \\times 0{,}050 \\approx 0{,}3142\\ \\text{s}$.',
        '$f = \\dfrac{1}{T} = \\dfrac{1}{0{,}1\\pi} \\approx 3{,}18\\ \\text{Hz}$.'
      ],
      tag: ['pegas paralel', 'frekuensi'],
      ragu: false
    },
    {
      id: 'ghs-l5',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Simpangan sebuah benda adalah $y = 0{,}10\\sin\\left(4\\pi t + \\dfrac{\\pi}{4}\\right)$ dengan $y$ dalam meter, $t$ dalam sekon, dan sudut dalam radian. Fase getaran $\\varphi$ didefinisikan lewat $y = A\\sin 2\\pi\\varphi$. Berapa fase getaran pada $t = 0{,}35\\ \\text{s}$ (tanpa satuan)?',
      pilihan: [],
      jawaban: 0.825,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Tulis ulang sudut dalam fungsi sinus sebagai $2\\pi\\varphi$.',
        'Maka $\\varphi = \\dfrac{4\\pi t + \\pi/4}{2\\pi}$. Masukkan $t = 0{,}35\\ \\text{s}$.'
      ],
      pembahasan: [
        '$\\varphi = \\dfrac{4\\pi t + \\pi/4}{2\\pi} = 2t + \\dfrac{1}{8}$.',
        'Pada $t = 0{,}35\\ \\text{s}$: $\\varphi = 2 \\times 0{,}35 + 0{,}125 = 0{,}825$ (tanpa satuan).'
      ],
      tag: ['fase', 'persamaan GHS'],
      ragu: false
    },

    /* ===================== GHS: EXPERT ===================== */
    {
      id: 'ghs-e1',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Pegas homogen berkonstanta $120\\ \\text{N/m}$ dipotong menjadi dua bagian dengan perbandingan panjang $1 : 3$. Bagian yang lebih pendek dipakai untuk menggantung balok $0{,}50\\ \\text{kg}$ pada langit-langit. Berapa periode getaran vertikal balok itu (simpangan kecil, $g = 10\\ \\text{m/s}^2$)?',
      pilihan: [],
      jawaban: 0.20279,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Untuk pegas homogen, konstanta pegas berbanding terbalik dengan panjangnya (pegas utuh = segmen identik yang seri).',
        'Bagian yang lebih pendek punya $\\tfrac{1}{4}$ panjang pegas utuh.',
        'Gravitasi hanya menggeser titik setimbang dan tidak mengubah periode. Pakai $T = 2\\pi\\sqrt{m/k}$.'
      ],
      pembahasan: [
        'Potongan pendek panjangnya $\\tfrac{1}{4}$ dari panjang pegas utuh, jadi $k_{\\text{pendek}} = 4k = 480\\ \\text{N/m}$.',
        'Gravitasi hanya mengubah panjang pegas saat setimbang, bukan periode.',
        '$T = 2\\pi\\sqrt{\\dfrac{0{,}50}{480}} = 2\\pi \\times 0{,}03227 \\approx 0{,}2028\\ \\text{s}$.'
      ],
      tag: ['pegas dipotong', 'periode pegas'],
      ragu: false
    },
    {
      id: 'ghs-e2',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Balok bermassa $2{,}0\\ \\text{kg}$ diikat pada dua pegas ideal yang vertikal: pegas atas ($150\\ \\text{N/m}$) terhubung ke langit-langit dan pegas bawah ($250\\ \\text{N/m}$) terhubung ke lantai. Balok digetarkan vertikal dengan amplitudo kecil, dan kedua pegas tidak pernah kendur. Gunakan $g = 10\\ \\text{m/s}^2$. Berapa periode getarannya?',
      pilihan: [],
      jawaban: 0.44429,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Ukur simpangan $y$ ke atas dari posisi setimbang. Gaya gravitasi dan gaya pegas saling meniadakan di posisi ini.',
        'Tinjau perubahan gaya tiap pegas akibat simpangan $y$. Apakah keduanya bekerja ke arah yang sama?',
        'Gaya pemulih total $= -(k_1 + k_2)\\,y$. Gravitasi tidak mengubah periode.'
      ],
      pembahasan: [
        'Bila balok naik sejauh $y$ dari setimbang, gaya tarik pegas atas ke atas berkurang $k_1 y$, dan perubahan gaya pegas bawah menambah gaya ke bawah sebesar $k_2 y$. Keduanya mengarah ke bawah, yaitu ke titik setimbang.',
        'Gaya pemulih total: $F = -(k_1 + k_2)\\,y$ sehingga $k_{\\text{total}} = 150 + 250 = 400\\ \\text{N/m}$.',
        '$T = 2\\pi\\sqrt{\\dfrac{m}{k_{\\text{total}}}} = 2\\pi\\sqrt{\\dfrac{2{,}0}{400}} \\approx 0{,}4443\\ \\text{s}$.'
      ],
      tag: ['dua pegas', 'periode pegas'],
      ragu: false
    },
    {
      id: 'ghs-e3',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah benda bergetar harmonik dengan amplitudo $0{,}10\\ \\text{m}$ dan periode $1{,}2\\ \\text{s}$. Pada $t = 0$ benda berada di titik setimbang dan bergerak ke arah positif. Berapa waktu yang diperlukan benda untuk bergerak dari simpangan $y = 0{,}060\\ \\text{m}$ ke simpangan $y = 0{,}080\\ \\text{m}$ (pertama kali, menjauhi titik setimbang)?',
      pilihan: [],
      jawaban: 0.0542,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Gerak ini tidak seragam, jadi jangan membagi jarak dengan laju. Pakai fase: $y = A\\sin\\omega t$.',
        'Cari waktu tiap posisi dari $\\sin\\omega t = y/A$ (ambil nilai pertama, saat benda naik).',
        'Kurangkan kedua waktu itu.'
      ],
      pembahasan: [
        '$\\omega = \\dfrac{2\\pi}{T} = \\dfrac{2\\pi}{1{,}2} \\approx 5{,}236\\ \\text{rad/s}$.',
        '$y = 0{,}060$: $\\sin\\omega t_1 = 0{,}6 \\Rightarrow \\omega t_1 = 0{,}6435\\ \\text{rad}$. $y = 0{,}080$: $\\sin\\omega t_2 = 0{,}8 \\Rightarrow \\omega t_2 = 0{,}9273\\ \\text{rad}$.',
        '$\\Delta t = \\dfrac{0{,}9273 - 0{,}6435}{5{,}236} \\approx 0{,}0542\\ \\text{s}$.'
      ],
      tag: ['waktu tempuh', 'fase'],
      ragu: false
    },
    {
      id: 'ghs-e4',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah bandul sederhana sepanjang $1{,}5\\ \\text{m}$ digantung di langit-langit lift. Lift bergerak ke atas dengan percepatan tetap $2{,}5\\ \\text{m/s}^2$. Dengan $g = 10\\ \\text{m/s}^2$ dan simpangan sudut kecil, berapa periode ayunan bandul menurut pengamat di dalam lift?',
      pilihan: [],
      jawaban: 2.1766,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Di dalam lift yang dipercepat, pengamat merasakan gravitasi efektif yang berbeda dari $g$.',
        'Lift dipercepat ke atas membuat berat semu bertambah: $g_{\\text{ef}} = g + a$.',
        'Pakai $T = 2\\pi\\sqrt{L/g_{\\text{ef}}}$.'
      ],
      pembahasan: [
        'Dalam kerangka lift ada gaya semu $ma$ ke bawah. Jadi gravitasi efektif $g_{\\text{ef}} = g + a = 10 + 2{,}5 = 12{,}5\\ \\text{m/s}^2$.',
        '$T = 2\\pi\\sqrt{\\dfrac{L}{g_{\\text{ef}}}} = 2\\pi\\sqrt{\\dfrac{1{,}5}{12{,}5}} = 2\\pi \\times 0{,}3464$.',
        '$T \\approx 2{,}177\\ \\text{s}$ (lebih singkat daripada $T = 2{,}433\\ \\text{s}$ saat lift diam).'
      ],
      tag: ['bandul', 'gravitasi efektif'],
      ragu: false
    },
    {
      id: 'ghs-e5',
      bab: 'elastisitas-shm',
      subbab: 'getaran-harmonik',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah benda bergetar harmonik sederhana dengan amplitudo $A$. Pada simpangan berapa energi kinetiknya tepat tiga kali energi potensialnya?',
      pilihan: [
        '$0{,}25\\,A$',
        '$0{,}87\\,A$',
        '$0{,}50\\,A$',
        '$0{,}75\\,A$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Energi total $E = K + U$. Bila $K = 3U$, berapa bagian dari $E$ yang berupa energi potensial?',
        'Energi potensial $U = \\tfrac{1}{2}ky^2$ sebanding dengan kuadrat simpangan, bukan simpangan itu sendiri.'
      ],
      pembahasan: [
        '$K = 3U$ sehingga $E = K + U = 4U$, atau $U = \\tfrac{1}{4}E$.',
        '$\\tfrac{1}{2}ky^2 = \\tfrac{1}{4}\\cdot\\tfrac{1}{2}kA^2 \\Rightarrow y^2 = \\tfrac{1}{4}A^2$.',
        '$y = \\tfrac{1}{2}A = 0{,}50\\,A$.'
      ],
      tag: ['energi GHS', 'perbandingan'],
      ragu: false
    }
  ]
};
