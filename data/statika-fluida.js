window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['statika-fluida'] = {
  id: 'statika-fluida',
  judul: 'Statika Fluida',
  subbab: [
    {
      id: 'statika-fluida',
      judul: 'Statika Fluida',
      materi: {
        gambaranBesar: 'Saat menyelam, telingamu terasa makin sakit begitu kamu turun lebih dalam, dan badanmu terasa lebih ringan daripada di darat. Dua hal itu adalah inti statika fluida: tekanan fluida bertambah seiring kedalaman, dan fluida mendorong benda ke atas dengan gaya apung. Dengan dua gagasan ini kita bisa menjelaskan kenapa kapal baja terapung, kenapa dongkrak hidrolik mampu mengangkat mobil, dan kenapa air naik di pipa sangat kecil.',
        konsep: [
          {
            judul: 'Massa jenis dan massa jenis relatif',
            teks: 'Massa jenis $\\rho$ (dibaca rho) adalah massa per satuan volume. Benda yang rapat, misalnya besi, punya $\\rho$ besar. Massa jenis relatif (disebut juga berat jenis) membandingkan massa jenis suatu zat dengan massa jenis air, sehingga tidak punya satuan. Soal di bab ini memakai massa jenis air $1000\\ \\text{kg/m}^3$, sama dengan $1\\ \\text{g/cm}^3$. Hati-hati: $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$ dan $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$.',
            rumus: [
              {
                latex: '\\rho = \\frac{m}{V}',
                simbol: [
                  { s: '\\rho', arti: 'massa jenis', satuan: 'kg/m³' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'V', arti: 'volume benda', satuan: 'm³' }
                ]
              },
              {
                latex: '\\rho_{\\text{rel}} = \\frac{\\rho_{\\text{zat}}}{\\rho_{\\text{air}}}',
                simbol: [
                  { s: '\\rho_{\\text{rel}}', arti: 'massa jenis relatif', satuan: 'tanpa satuan' },
                  { s: '\\rho_{\\text{zat}}', arti: 'massa jenis zat', satuan: 'kg/m³' },
                  { s: '\\rho_{\\text{air}}', arti: 'massa jenis air (1000)', satuan: 'kg/m³' }
                ]
              }
            ]
          },
          {
            judul: 'Tekanan',
            teks: 'Tekanan adalah gaya tegak lurus permukaan dibagi luas permukaan yang ditekan. Gaya yang sama terasa lebih menusuk bila luasnya kecil, itulah sebabnya paku runcing mudah menembus kayu. Satuan SI-nya pascal, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$. Tekanan adalah besaran skalar, bukan vektor.',
            rumus: [
              {
                latex: 'P = \\frac{F}{A}',
                simbol: [
                  { s: 'P', arti: 'tekanan', satuan: 'Pa' },
                  { s: 'F', arti: 'gaya tegak lurus permukaan', satuan: 'N' },
                  { s: 'A', arti: 'luas permukaan', satuan: 'm²' }
                ]
              }
            ]
          },
          {
            judul: 'Tekanan hidrostatis, tekanan mutlak, dan tekanan ukur',
            teks: 'Fluida yang diam menekan ke segala arah, dan tekanannya hanya bergantung pada kedalaman $h$ (dihitung dari permukaan), bukan pada bentuk bejana. Tekanan hidrostatis adalah tekanan akibat berat kolom fluida. Tekanan mutlak adalah tekanan total, yaitu hidrostatis ditambah tekanan atmosfer $P_0 = 1{,}0 \\times 10^5\\ \\text{Pa}$ di permukaan. Tekanan ukur (gauge) adalah selisih tekanan mutlak terhadap atmosfer, yang dibaca oleh manometer atau pengukur tekanan ban. Pakai $g = 10\\ \\text{m/s}^2$.',
            rumus: [
              {
                latex: 'P_h = \\rho\\,g\\,h',
                simbol: [
                  { s: 'P_h', arti: 'tekanan hidrostatis', satuan: 'Pa' },
                  { s: '\\rho', arti: 'massa jenis fluida', satuan: 'kg/m³' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'kedalaman dari permukaan', satuan: 'm' }
                ]
              },
              {
                latex: 'P = P_0 + \\rho\\,g\\,h',
                simbol: [
                  { s: 'P', arti: 'tekanan mutlak', satuan: 'Pa' },
                  { s: 'P_0', arti: 'tekanan atmosfer di permukaan', satuan: 'Pa' },
                  { s: '\\rho', arti: 'massa jenis fluida', satuan: 'kg/m³' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'kedalaman dari permukaan', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum Pascal, dongkrak hidrolik, dan pipa-U',
            teks: 'Hukum Pascal: tekanan yang diberikan pada fluida tertutup diteruskan sama besar ke seluruh bagian fluida. Pada dongkrak hidrolik, tekanan di piston kecil sama dengan tekanan di piston besar, sehingga gaya kecil menghasilkan gaya besar (harganya, piston kecil bergerak lebih jauh). Pada bejana berhubungan dan pipa-U, titik-titik pada ketinggian sama di dalam fluida yang sama dan saling tersambung mempunyai tekanan sama. Bila ada dua fluida tak bercampur, samakan tekanan di bidang batas atau di dasar yang sama.',
            rumus: [
              {
                latex: '\\frac{F_1}{A_1} = \\frac{F_2}{A_2}',
                simbol: [
                  { s: 'F_1', arti: 'gaya pada piston kecil', satuan: 'N' },
                  { s: 'A_1', arti: 'luas piston kecil', satuan: 'm²' },
                  { s: 'F_2', arti: 'gaya pada piston besar', satuan: 'N' },
                  { s: 'A_2', arti: 'luas piston besar', satuan: 'm²' }
                ]
              },
              {
                latex: '\\rho_1\\,h_1 = \\rho_2\\,h_2',
                simbol: [
                  { s: '\\rho_1,\\ \\rho_2', arti: 'massa jenis kedua fluida di pipa-U', satuan: 'kg/m³' },
                  { s: 'h_1,\\ h_2', arti: 'tinggi kolom masing-masing dari bidang batas', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum Archimedes',
            teks: 'Benda yang tercelup sebagian atau seluruhnya di dalam fluida mendapat gaya ke atas sebesar berat fluida yang dipindahkannya. Gaya ini disebut gaya apung. Yang menentukan hanya massa jenis fluida dan volume benda yang tercelup, bukan massa jenis atau kedalaman benda. Berat semu adalah berat yang terbaca pada neraca pegas saat benda berada di dalam fluida.',
            rumus: [
              {
                latex: 'F_A = \\rho_f\\,g\\,V_{\\text{tc}}',
                simbol: [
                  { s: 'F_A', arti: 'gaya apung', satuan: 'N' },
                  { s: '\\rho_f', arti: 'massa jenis fluida', satuan: 'kg/m³' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'V_{\\text{tc}}', arti: 'volume benda yang tercelup', satuan: 'm³' }
                ]
              },
              {
                latex: 'w_{\\text{semu}} = w - F_A',
                simbol: [
                  { s: 'w_{\\text{semu}}', arti: 'berat semu di dalam fluida', satuan: 'N' },
                  { s: 'w', arti: 'berat benda di udara', satuan: 'N' },
                  { s: 'F_A', arti: 'gaya apung', satuan: 'N' }
                ]
              }
            ]
          },
          {
            judul: 'Terapung, melayang, dan tenggelam',
            teks: 'Bandingkan massa jenis benda $\\rho_b$ dengan massa jenis fluida $\\rho_f$. Bila $\\rho_b < \\rho_f$ benda terapung dan fraksi volume yang tercelup sama dengan $\\rho_b/\\rho_f$. Bila $\\rho_b = \\rho_f$ benda melayang. Bila $\\rho_b > \\rho_f$ benda tenggelam sampai dasar. Benda berongga seperti kapal boleh terapung walau bahannya berat, karena massa jenis rata-ratanya (massa total dibagi volume total) lebih kecil dari fluida. Kesetimbangan benda terapung: $F_A = w$.',
            rumus: [
              {
                latex: '\\frac{V_{\\text{tc}}}{V_b} = \\frac{\\rho_b}{\\rho_f}',
                simbol: [
                  { s: 'V_{\\text{tc}}', arti: 'volume benda yang tercelup', satuan: 'm³' },
                  { s: 'V_b', arti: 'volume seluruh benda', satuan: 'm³' },
                  { s: '\\rho_b', arti: 'massa jenis benda', satuan: 'kg/m³' },
                  { s: '\\rho_f', arti: 'massa jenis fluida', satuan: 'kg/m³' }
                ]
              }
            ]
          },
          {
            judul: 'Tegangan permukaan dan kapilaritas (ringkas)',
            teks: 'Molekul di permukaan cairan ditarik ke dalam sehingga permukaan berperilaku seperti selaput tegang. Tegangan permukaan $\\gamma$ adalah gaya per satuan panjang garis yang dikenai gaya itu. Kapilaritas adalah naik atau turunnya cairan di pipa sangat kecil. Sudut kontak $\\theta$ adalah sudut antara permukaan cairan dan dinding. Air di kaca naik (sudut kecil), raksa di kaca turun (sudut lebih dari 90 derajat).',
            rumus: [
              {
                latex: '\\gamma = \\frac{F}{L}',
                simbol: [
                  { s: '\\gamma', arti: 'tegangan permukaan', satuan: 'N/m' },
                  { s: 'F', arti: 'gaya tegangan permukaan', satuan: 'N' },
                  { s: 'L', arti: 'panjang garis yang dikenai gaya', satuan: 'm' }
                ]
              },
              {
                latex: 'h = \\frac{2\\,\\gamma\\,\\cos\\theta}{\\rho\\,g\\,r}',
                simbol: [
                  { s: 'h', arti: 'kenaikan cairan di pipa kapiler', satuan: 'm' },
                  { s: '\\gamma', arti: 'tegangan permukaan', satuan: 'N/m' },
                  { s: '\\theta', arti: 'sudut kontak', satuan: 'derajat' },
                  { s: '\\rho', arti: 'massa jenis cairan', satuan: 'kg/m³' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'r', arti: 'jari-jari dalam pipa', satuan: 'm' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Seorang penyelam berada $20\\ \\text{m}$ di bawah permukaan danau air tawar. Berapa tekanan hidrostatis dan tekanan mutlak di tempatnya? Gunakan $g = 10\\ \\text{m/s}^2$, $\\rho = 1000\\ \\text{kg/m}^3$, dan $P_0 = 1{,}0 \\times 10^5\\ \\text{Pa}$.',
            langkah: [
              'Tekanan hidrostatis: $P_h = \\rho\\,g\\,h = 1000 \\times 10 \\times 20 = 2{,}0 \\times 10^5\\ \\text{Pa}$.',
              'Tekanan mutlak: $P = P_0 + P_h = 1{,}0 \\times 10^5 + 2{,}0 \\times 10^5 = 3{,}0 \\times 10^5\\ \\text{Pa}$.',
              'Tekanan ukur sama dengan $P_h$, yaitu $2{,}0 \\times 10^5\\ \\text{Pa}$.'
            ],
            hasil: '$P_h = 2{,}0 \\times 10^5\\ \\text{Pa}$ dan $P = 3{,}0 \\times 10^5\\ \\text{Pa}$.'
          },
          {
            soal: 'Dongkrak hidrolik memiliki piston kecil berluas $10\\ \\text{cm}^2$ dan piston besar berluas $500\\ \\text{cm}^2$. Berapa gaya yang harus diberikan pada piston kecil untuk mengangkat beban $9000\\ \\text{N}$?',
            langkah: [
              'Hukum Pascal: $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$. Perbandingan luas tidak perlu diubah ke m², cukup satuan yang sama.',
              '$F_1 = F_2\\,\\dfrac{A_1}{A_2} = 9000 \\times \\dfrac{10}{500} = 180\\ \\text{N}$.'
            ],
            hasil: '$F_1 = 180\\ \\text{N}$ (keuntungan mekanik $50$ kali).'
          },
          {
            soal: 'Balok es bermassa jenis $900\\ \\text{kg/m}^3$ terapung di air tawar ($1000\\ \\text{kg/m}^3$). Berapa persen volume es yang berada di atas permukaan air?',
            langkah: [
              'Terapung berarti $F_A = w$, sehingga $\\rho_f\\,g\\,V_{\\text{tc}} = \\rho_b\\,g\\,V_b$.',
              'Fraksi tercelup: $V_{\\text{tc}}/V_b = \\rho_b/\\rho_f = 900/1000 = 0{,}90$, yaitu $90\\%$.',
              'Bagian di atas air: $100\\% - 90\\% = 10\\%$.'
            ],
            hasil: 'Sekitar $10\\%$ volume es muncul di atas permukaan air.'
          },
          {
            soal: 'Air $(\\gamma = 0{,}072\\ \\text{N/m},\\ \\theta = 0^\\circ)$ naik di pipa kapiler berjari-jari dalam $0{,}50\\ \\text{mm}$. Berapa kenaikannya? Pakai $g = 10\\ \\text{m/s}^2$ dan $\\rho = 1000\\ \\text{kg/m}^3$.',
            langkah: [
              'Ubah jari-jari ke meter: $r = 0{,}50\\ \\text{mm} = 5{,}0 \\times 10^{-4}\\ \\text{m}$.',
              '$h = \\dfrac{2\\,\\gamma\\,\\cos\\theta}{\\rho\\,g\\,r} = \\dfrac{2 \\times 0{,}072 \\times 1}{1000 \\times 10 \\times 5{,}0 \\times 10^{-4}} = \\dfrac{0{,}144}{5{,}0} = 0{,}0288\\ \\text{m}$.'
            ],
            hasil: '$h \\approx 2{,}9\\ \\text{cm}$.'
          }
        ],
        kesalahan: [
          'Mengira tekanan hidrostatis bergantung pada bentuk atau lebar bejana. Yang menentukan hanya massa jenis fluida dan kedalaman vertikal $h$.',
          'Lupa menambahkan tekanan atmosfer saat soal menanyakan tekanan mutlak, atau sebaliknya menambahkannya saat soal menanyakan tekanan ukur.',
          'Memakai volume seluruh benda untuk gaya apung padahal benda hanya tercelup sebagian. Yang dipakai adalah volume yang tercelup.',
          'Mengira gaya apung bergantung pada massa jenis benda atau pada kedalaman. Selama benda tercelup penuh, gaya apung tidak berubah bila dibenamkan lebih dalam.',
          'Lupa mengonversi satuan: $\\text{g/cm}^3$ ke $\\text{kg/m}^3$ (faktor $1000$) dan $\\text{cm}^3$ ke $\\text{m}^3$ (faktor $10^{-6}$).',
          'Pada pipa-U dua fluida, menyamakan tinggi kolom padahal yang sama adalah tekanannya. Kolom fluida yang lebih ringan harus lebih tinggi.',
          'Mengira dongkrak hidrolik menambah usaha atau energi. Gaya diperbesar, tetapi piston besar bergeser lebih pendek sehingga usaha tetap.'
        ],
        ringkasan: [
          'Massa jenis $\\rho = m/V$; massa jenis air $1000\\ \\text{kg/m}^3$; tekanan $P = F/A$ dalam pascal.',
          'Tekanan hidrostatis $P_h = \\rho\\,g\\,h$; tekanan mutlak $P = P_0 + \\rho\\,g\\,h$; tekanan ukur $= P - P_0$.',
          'Hukum Pascal: $F_1/A_1 = F_2/A_2$. Pada pipa-U, samakan tekanan di bidang batas fluida.',
          'Gaya apung $F_A = \\rho_f\\,g\\,V_{\\text{tc}}$, berat semu $= w - F_A$.',
          'Terapung bila $\\rho_b < \\rho_f$ (fraksi tercelup $\\rho_b/\\rho_f$), melayang bila sama, tenggelam bila lebih besar.',
          'Tegangan permukaan $\\gamma = F/L$ dan kapilaritas $h = 2\\gamma\\cos\\theta/(\\rho g r)$.'
        ],
        simulasi: {
          id: 'statika-fluida-apung',
          judul: 'Balok di dalam bejana fluida',
          param: [
            { kunci: 'rhoB', label: 'Massa jenis benda', min: 200, max: 3000, nilai: 600, satuan: 'kg/m³', langkah: 10 },
            { kunci: 'rhoF', label: 'Massa jenis fluida', min: 500, max: 3000, nilai: 1000, satuan: 'kg/m³', langkah: 10 },
            { kunci: 'vol', label: 'Volume benda', min: 100, max: 2000, nilai: 500, satuan: 'cm³', langkah: 10 },
            { kunci: 'dalam', label: 'Kedalaman bejana', min: 20, max: 60, nilai: 40, satuan: 'cm', langkah: 1 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'sf-p1',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok logam bermassa $2{,}4\\ \\text{kg}$ memiliki volume $3{,}0 \\times 10^{-3}\\ \\text{m}^3$. Berapa massa jenis logam tersebut?',
      pilihan: [],
      jawaban: 800,
      satuan: 'kg/m³',
      toleransi: 0.02,
      petunjuk: [
        'Massa jenis menyatakan massa per satuan volume.',
        'Gunakan $\\rho = m/V$.'
      ],
      pembahasan: [
        'Rumus massa jenis: $\\rho = \\dfrac{m}{V}$.',
        '$\\rho = \\dfrac{2{,}4}{3{,}0 \\times 10^{-3}} = 800\\ \\text{kg/m}^3$.'
      ],
      tag: ['massa jenis'],
      ragu: false
    },
    {
      id: 'sf-p2',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah gaya tegak lurus sebesar $600\\ \\text{N}$ bekerja pada permukaan seluas $0{,}020\\ \\text{m}^2$. Berapa tekanan yang dihasilkan?',
      pilihan: [
        '$12\\ \\text{Pa}$',
        '$3{,}0 \\times 10^{3}\\ \\text{Pa}$',
        '$3{,}0 \\times 10^{4}\\ \\text{Pa}$',
        '$3{,}0 \\times 10^{5}\\ \\text{Pa}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tekanan adalah gaya per satuan luas.',
        'Bagi gaya dengan luas, jangan mengalikannya.'
      ],
      pembahasan: [
        'Rumus tekanan: $P = \\dfrac{F}{A}$.',
        '$P = \\dfrac{600}{0{,}020} = 3{,}0 \\times 10^{4}\\ \\text{Pa}$.'
      ],
      tag: ['tekanan'],
      ragu: false
    },
    {
      id: 'sf-p3',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Berapa tekanan hidrostatis pada kedalaman $15\\ \\text{m}$ di dalam air kolam? Gunakan massa jenis air $1000\\ \\text{kg/m}^3$ dan $g = 10\\ \\text{m/s}^2$ (abaikan tekanan atmosfer).',
      pilihan: [],
      jawaban: 150000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Tekanan hidrostatis bergantung pada massa jenis fluida, gravitasi, dan kedalaman.',
        'Gunakan $P_h = \\rho\\,g\\,h$.'
      ],
      pembahasan: [
        'Rumus: $P_h = \\rho\\,g\\,h$.',
        '$P_h = 1000 \\times 10 \\times 15 = 1{,}5 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['tekanan hidrostatis'],
      ragu: false
    },
    {
      id: 'sf-p4',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Hukum yang menyatakan bahwa tekanan yang diberikan pada fluida tertutup diteruskan sama besar ke segala arah, dan menjadi dasar kerja dongkrak hidrolik, dinamai menurut nama seorang ilmuwan. Siapa namanya?',
      pilihan: [],
      jawaban: ['pascal'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Satuan SI tekanan juga memakai nama ilmuwan yang sama.',
        'Ilmuwan ini berasal dari Prancis.'
      ],
      pembahasan: [
        'Prinsip itu adalah hukum Pascal.',
        'Jawaban: Pascal. Pada dongkrak hidrolik, tekanan di piston kecil diteruskan sama besar ke piston besar.'
      ],
      tag: ['hukum Pascal'],
      ragu: false
    },
    {
      id: 'sf-p5',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah benda bervolume $200\\ \\text{cm}^3$ dicelupkan seluruhnya ke dalam air (massa jenis $1000\\ \\text{kg/m}^3$, $g = 10\\ \\text{m/s}^2$). Berapa gaya apung yang dialaminya?',
      pilihan: [
        '$0{,}2\\ \\text{N}$',
        '$2\\ \\text{N}$',
        '$20\\ \\text{N}$',
        '$200\\ \\text{N}$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Gaya apung sama dengan berat fluida yang dipindahkan.',
        'Ubah volume ke m³ lebih dulu: $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$.'
      ],
      pembahasan: [
        'Volume: $V = 200\\ \\text{cm}^3 = 2{,}0 \\times 10^{-4}\\ \\text{m}^3$.',
        '$F_A = \\rho\\,g\\,V = 1000 \\times 10 \\times 2{,}0 \\times 10^{-4} = 2\\ \\text{N}$.'
      ],
      tag: ['hukum Archimedes', 'konversi satuan'],
      ragu: false
    },
    /* ===================== MENENGAH ===================== */
    {
      id: 'sf-m1',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Seorang penyelam berada pada kedalaman $8{,}0\\ \\text{m}$ di danau air tawar. Berapa tekanan mutlak di tempat itu? Gunakan $\\rho = 1000\\ \\text{kg/m}^3$, $g = 10\\ \\text{m/s}^2$, dan tekanan atmosfer $1{,}0 \\times 10^{5}\\ \\text{Pa}$.',
      pilihan: [],
      jawaban: 180000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Tekanan mutlak adalah tekanan total, bukan hanya akibat fluida.',
        'Hitung $\\rho\\,g\\,h$, lalu tambahkan tekanan atmosfer.'
      ],
      pembahasan: [
        'Tekanan hidrostatis: $\\rho\\,g\\,h = 1000 \\times 10 \\times 8{,}0 = 8{,}0 \\times 10^{4}\\ \\text{Pa}$.',
        'Tekanan mutlak: $P = P_0 + \\rho\\,g\\,h = 1{,}0 \\times 10^{5} + 8{,}0 \\times 10^{4} = 1{,}8 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['tekanan mutlak', 'tekanan hidrostatis'],
      ragu: false
    },
    {
      id: 'sf-m2',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah dongkrak hidrolik memiliki piston kecil berdiameter $4{,}0\\ \\text{cm}$ dan piston besar berdiameter $20\\ \\text{cm}$. Dongkrak dipakai mengangkat mobil dengan gaya $1{,}2 \\times 10^{4}\\ \\text{N}$ pada piston besar. Berapa gaya minimum pada piston kecil?',
      pilihan: [],
      jawaban: 480,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Pakai hukum Pascal: tekanan di kedua piston sama.',
        'Luas piston sebanding dengan kuadrat diameter, jadi perbandingan luas adalah $(d_1/d_2)^2$.'
      ],
      pembahasan: [
        'Hukum Pascal: $\\dfrac{F_1}{A_1} = \\dfrac{F_2}{A_2}$, dengan $A \\propto d^2$.',
        '$F_1 = F_2\\left(\\dfrac{d_1}{d_2}\\right)^2 = 1{,}2 \\times 10^{4} \\times \\left(\\dfrac{4{,}0}{20}\\right)^2 = 1{,}2 \\times 10^{4} \\times 0{,}04$.',
        '$F_1 = 480\\ \\text{N}$.'
      ],
      tag: ['hukum Pascal', 'dongkrak hidrolik'],
      ragu: false
    },
    {
      id: 'sf-m3',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Sebuah balok kayu bermassa jenis $600\\ \\text{kg/m}^3$ terapung di air bermassa jenis $1000\\ \\text{kg/m}^3$. Berapa persen volume balok yang tercelup?',
      pilihan: [
        '$60\\%$',
        '$40\\%$',
        '$167\\%$',
        '$30\\%$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Benda terapung dalam kesetimbangan: gaya apung sama dengan berat.',
        'Fraksi tercelup sama dengan perbandingan massa jenis benda terhadap fluida.'
      ],
      pembahasan: [
        'Kesetimbangan: $\\rho_f\\,g\\,V_{\\text{tc}} = \\rho_b\\,g\\,V_b$.',
        '$\\dfrac{V_{\\text{tc}}}{V_b} = \\dfrac{600}{1000} = 0{,}60$, jadi $60\\%$ tercelup.'
      ],
      tag: ['terapung', 'hukum Archimedes'],
      ragu: false
    },
    {
      id: 'sf-m4',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah benda ditimbang dengan neraca pegas. Di udara bacaannya $12\\ \\text{N}$, dan saat tercelup seluruhnya di dalam air bacaannya $8{,}0\\ \\text{N}$. Berapa massa jenis benda tersebut? Gunakan massa jenis air $1000\\ \\text{kg/m}^3$ dan $g = 10\\ \\text{m/s}^2$.',
      pilihan: [],
      jawaban: 3000,
      satuan: 'kg/m³',
      toleransi: 0.02,
      petunjuk: [
        'Selisih bacaan di udara dan di air adalah gaya apung.',
        'Dari gaya apung, cari volume benda; dari berat di udara, cari massanya.'
      ],
      pembahasan: [
        'Gaya apung: $F_A = 12 - 8{,}0 = 4{,}0\\ \\text{N}$.',
        'Volume: $V = \\dfrac{F_A}{\\rho\\,g} = \\dfrac{4{,}0}{1000 \\times 10} = 4{,}0 \\times 10^{-4}\\ \\text{m}^3$. Massa: $m = \\dfrac{12}{10} = 1{,}2\\ \\text{kg}$.',
        '$\\rho_b = \\dfrac{m}{V} = \\dfrac{1{,}2}{4{,}0 \\times 10^{-4}} = 3000\\ \\text{kg/m}^3$.'
      ],
      tag: ['berat semu', 'massa jenis'],
      ragu: false
    },
    {
      id: 'sf-m5',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Pengukur tekanan pada ban kendaraan menunjukkan selisih tekanan di dalam ban terhadap tekanan atmosfer. Apa nama jenis tekanan yang dibaca alat itu? (jawab dengan dua kata)',
      pilihan: [],
      jawaban: ['tekanan ukur', 'tekanan gauge', 'gauge'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tekanan mutlak dikurangi tekanan atmosfer menghasilkan tekanan jenis lain.',
        'Dalam bahasa Inggris disebut gauge pressure.'
      ],
      pembahasan: [
        'Alat pengukur membaca selisih terhadap atmosfer, yaitu $P_{\\text{ukur}} = P_{\\text{mutlak}} - P_0$.',
        'Jawaban: tekanan ukur (tekanan gauge).'
      ],
      tag: ['tekanan ukur'],
      ragu: false
    },
    /* ===================== LANJUT ===================== */
    {
      id: 'sf-l1',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah pipa-U terbuka di kedua ujungnya berisi air dan minyak yang tidak bercampur. Di kaki kiri terdapat kolom minyak setinggi $20\\ \\text{cm}$ (massa jenis $800\\ \\text{kg/m}^3$) yang bertumpu langsung di atas air. Bidang batas minyak dan air ada di kaki kiri; di kaki kanan hanya ada air, dan permukaan air kaki kanan berada $h$ di atas ketinggian bidang batas tersebut (tinggi diukur dari bidang batas). Massa jenis air $1000\\ \\text{kg/m}^3$. Berapa $h$? Jawab dalam cm.',
      pilihan: [],
      jawaban: 16,
      satuan: 'cm',
      toleransi: 0.02,
      petunjuk: [
        'Titik pada ketinggian bidang batas di kedua kaki berada dalam air yang tersambung, jadi tekanannya sama.',
        'Kaki kiri: tekanan dari kolom minyak. Kaki kanan: tekanan dari kolom air setinggi $h$.',
        'Tekanan atmosfer di kedua permukaan sama, sehingga saling meniadakan.'
      ],
      pembahasan: [
        'Samakan tekanan di ketinggian bidang batas: $\\rho_{\\text{minyak}}\\,g\\,h_{\\text{minyak}} = \\rho_{\\text{air}}\\,g\\,h$.',
        '$h = \\dfrac{\\rho_{\\text{minyak}}}{\\rho_{\\text{air}}}\\,h_{\\text{minyak}} = \\dfrac{800}{1000} \\times 20\\ \\text{cm}$.',
        '$h = 16\\ \\text{cm}$.'
      ],
      tag: ['pipa-U', 'dua fluida'],
      ragu: false
    },
    {
      id: 'sf-l2',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah bejana berisi dua lapis fluida tak bercampur: air $(1000\\ \\text{kg/m}^3)$ di bawah dan minyak $(800\\ \\text{kg/m}^3)$ di atasnya. Balok seragam setinggi $12\\ \\text{cm}$ bermassa jenis $930\\ \\text{kg/m}^3$ berdiri tegak dengan sisi atasnya persis rata dengan permukaan minyak, dan seluruh balok terbenam pada kedua lapisan. Berapa tinggi bagian balok yang berada di dalam air? Jawab dalam cm.',
      pilihan: [],
      jawaban: 7.8,
      satuan: 'cm',
      toleransi: 0.02,
      petunjuk: [
        'Gaya apung total adalah jumlah gaya apung dari bagian di air dan bagian di minyak.',
        'Misalkan bagian di air setinggi $x$ dan bagian di minyak setinggi $12 - x$; luas penampang saling meniadakan.',
        'Samakan berat balok dengan gaya apung total.'
      ],
      pembahasan: [
        'Kesetimbangan: $\\rho_b\\,H = \\rho_a\\,x + \\rho_m\\,(H - x)$ (faktor $A$ dan $g$ saling meniadakan).',
        '$930 \\times 12 = 1000\\,x + 800\\,(12 - x)$, sehingga $11160 = 200\\,x + 9600$.',
        '$x = \\dfrac{1560}{200} = 7{,}8\\ \\text{cm}$.'
      ],
      tag: ['dua fluida berlapis', 'hukum Archimedes'],
      ragu: false
    },
    {
      id: 'sf-l3',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Sebuah kapal bermuatan penuh berlayar dari laut (massa jenis air $1030\\ \\text{kg/m}^3$) masuk ke muara sungai berair tawar ($1000\\ \\text{kg/m}^3$) tanpa menambah atau menurunkan muatan. Bagaimana gaya apung dan volume lambung yang tercelup berubah?',
      pilihan: [
        'Gaya apung bertambah dan volume tercelup tetap',
        'Gaya apung berkurang dan volume tercelup bertambah',
        'Gaya apung dan volume tercelup sama-sama tidak berubah',
        'Gaya apung tetap dan volume tercelup bertambah'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Kapal tetap terapung diam, jadi gaya apung harus sama dengan berat kapal.',
        'Berat kapal tidak berubah. Lalu tinjau $V_{\\text{tc}} = F_A/(\\rho_f\\,g)$ ketika $\\rho_f$ mengecil.'
      ],
      pembahasan: [
        'Terapung: $F_A = w$. Berat kapal dan muatan tetap, jadi $F_A$ tetap.',
        '$V_{\\text{tc}} = \\dfrac{w}{\\rho_f\\,g}$. Saat $\\rho_f$ turun dari $1030$ ke $1000\\ \\text{kg/m}^3$, $V_{\\text{tc}}$ naik sekitar $3\\%$.',
        'Jawaban: gaya apung tetap, volume tercelup bertambah (kapal sedikit tenggelam lebih dalam).'
      ],
      tag: ['kapal', 'terapung'],
      ragu: false
    },
    {
      id: 'sf-l4',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah perahu datar berbentuk kotak berukuran alas $4{,}0\\ \\text{m} \\times 2{,}0\\ \\text{m}$ dan bermassa kosong $1200\\ \\text{kg}$ terapung di air tawar $(1000\\ \\text{kg/m}^3)$. Berapa massa muatan maksimum yang boleh dimuat agar kedalaman bagian yang tercelup tidak melebihi $0{,}50\\ \\text{m}$?',
      pilihan: [],
      jawaban: 2800,
      satuan: 'kg',
      toleransi: 0.02,
      petunjuk: [
        'Pada batas muatan maksimum, gaya apung sama dengan berat perahu ditambah muatan.',
        'Volume tercelup adalah luas alas dikalikan kedalaman tercelup.'
      ],
      pembahasan: [
        'Volume tercelup: $V_{\\text{tc}} = 4{,}0 \\times 2{,}0 \\times 0{,}50 = 4{,}0\\ \\text{m}^3$.',
        'Massa total yang bisa ditopang: $m_{\\text{total}} = \\rho\\,V_{\\text{tc}} = 1000 \\times 4{,}0 = 4000\\ \\text{kg}$.',
        'Muatan: $4000 - 1200 = 2800\\ \\text{kg}$.'
      ],
      tag: ['kapal dengan muatan', 'hukum Archimedes'],
      ragu: false
    },
    {
      id: 'sf-l5',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah manometer pipa-U terbuka berisi raksa (massa jenis $13600\\ \\text{kg/m}^3$) dihubungkan ke tabung gas. Permukaan raksa di kaki yang terbuka ke udara berada $15\\ \\text{cm}$ lebih tinggi daripada di kaki yang terhubung ke gas. Dengan tekanan atmosfer $1{,}0 \\times 10^{5}\\ \\text{Pa}$ dan $g = 10\\ \\text{m/s}^2$, berapa tekanan mutlak gas?',
      pilihan: [],
      jawaban: 120400,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Kaki terbuka lebih tinggi berarti gas menekan raksa lebih kuat daripada atmosfer.',
        'Tekanan gas sama dengan tekanan atmosfer ditambah tekanan kolom raksa setinggi selisih tinggi.'
      ],
      pembahasan: [
        'Selisih tinggi: $\\Delta h = 0{,}15\\ \\text{m}$. Tekanan ukur gas: $\\rho\\,g\\,\\Delta h = 13600 \\times 10 \\times 0{,}15 = 2{,}04 \\times 10^{4}\\ \\text{Pa}$.',
        'Tekanan mutlak: $P = P_0 + \\rho\\,g\\,\\Delta h = 1{,}0 \\times 10^{5} + 2{,}04 \\times 10^{4} = 1{,}204 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['manometer', 'tekanan mutlak'],
      ragu: false
    },
    /* ===================== EXPERT ===================== */
    {
      id: 'sf-e1',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok kayu berukuran $0{,}30\\ \\text{m} \\times 0{,}25\\ \\text{m}$ (alas) dan tinggi $0{,}20\\ \\text{m}$, bermassa jenis $600\\ \\text{kg/m}^3$, terapung tegak di air $(1000\\ \\text{kg/m}^3)$. Sebuah beban bermassa $2{,}4\\ \\text{kg}$ diletakkan di tengah sisi atas balok dan balok tetap terapung tegak. Berapa pertambahan kedalaman bagian balok yang tercelup? Jawab dalam cm.',
      pilihan: [],
      jawaban: 3.2,
      satuan: 'cm',
      toleransi: 0.02,
      petunjuk: [
        'Tulis kesetimbangan sebelum dan sesudah beban ditambahkan, lalu kurangkan.',
        'Gaya apung tambahan harus sama dengan berat beban: $\\rho\\,g\\,A\\,\\Delta d = m\\,g$.',
        'Luas alas $A = 0{,}30 \\times 0{,}25$ dalam m².'
      ],
      pembahasan: [
        'Pertambahan gaya apung menopang beban: $\\rho_{\\text{air}}\\,g\\,A\\,\\Delta d = m\\,g$.',
        '$\\Delta d = \\dfrac{m}{\\rho_{\\text{air}}\\,A} = \\dfrac{2{,}4}{1000 \\times 0{,}075} = 0{,}032\\ \\text{m}$.',
        'Pemeriksaan: kedalaman awal $0{,}12\\ \\text{m}$, akhir $0{,}152\\ \\text{m} < 0{,}20\\ \\text{m}$, jadi balok tetap terapung. $\\Delta d = 3{,}2\\ \\text{cm}$.'
      ],
      tag: ['benda terapung', 'beban tambahan'],
      ragu: false
    },
    {
      id: 'sf-e2',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok tegak berpenampang $0{,}040\\ \\text{m}^2$ dan bermassa $8{,}0\\ \\text{kg}$ terapung di air $(1000\\ \\text{kg/m}^3)$ dalam bejana yang sangat luas. Balok ditekan sedikit ke bawah lalu dilepas sehingga berosilasi vertikal dengan simpangan kecil (gesekan dan gerak air diabaikan, $g = 10\\ \\text{m/s}^2$). Berapa periode osilasinya?',
      pilihan: [],
      jawaban: 0.8886,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Saat balok turun sejauh $x$ dari kesetimbangan, gaya apung bertambah sebesar $\\rho\\,g\\,A\\,x$ ke atas sebagai gaya pemulih.',
        'Gaya pemulih sebanding dengan simpangan, jadi geraknya osilasi harmonik dengan konstanta efektif $k = \\rho\\,g\\,A$.',
        'Pakai $T = 2\\pi\\sqrt{m/k}$.'
      ],
      pembahasan: [
        'Gaya pemulih: $F = -\\rho\\,g\\,A\\,x$, sehingga $k = \\rho\\,g\\,A = 1000 \\times 10 \\times 0{,}040 = 400\\ \\text{N/m}$.',
        'Periode: $T = 2\\pi\\sqrt{\\dfrac{m}{k}} = 2\\pi\\sqrt{\\dfrac{8{,}0}{400}} = 2\\pi\\sqrt{0{,}020}$.',
        '$T \\approx 0{,}8886\\ \\text{s}$.'
      ],
      tag: ['osilasi balok apung', 'GHS'],
      ragu: false
    },
    {
      id: 'sf-e3',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah bendungan berdinding tegak dan berlebar $50\\ \\text{m}$ menahan air setinggi $12\\ \\text{m}$ di satu sisinya. Tekanan atmosfer bekerja di kedua sisi dan saling meniadakan. Dengan $\\rho = 1000\\ \\text{kg/m}^3$ dan $g = 10\\ \\text{m/s}^2$, berapa gaya total air pada dinding?',
      pilihan: [],
      jawaban: 3.6e7,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Tekanan berubah menurut kedalaman, jadi gaya tidak bisa dihitung dengan satu nilai tekanan saja.',
        'Pada kedalaman $y$, ambil strip tipis setinggi $dy$ dan lebar $w$: $dF = \\rho\\,g\\,y\\,w\\,dy$.',
        'Integralkan dari $y = 0$ sampai $y = H$.'
      ],
      pembahasan: [
        'Gaya pada strip: $dF = P\\,dA = \\rho\\,g\\,y\\,w\\,dy$.',
        '$F = \\displaystyle\\int_0^H \\rho\\,g\\,y\\,w\\,dy = \\tfrac{1}{2}\\,\\rho\\,g\\,w\\,H^2$.',
        '$F = \\tfrac{1}{2} \\times 1000 \\times 10 \\times 50 \\times 12^2 = 3{,}6 \\times 10^{7}\\ \\text{N}$.'
      ],
      tag: ['bendungan', 'integral tekanan'],
      ragu: false
    },
    {
      id: 'sf-e4',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah balok bermassa jenis $650\\ \\text{kg/m}^3$ dan bervolume $0{,}012\\ \\text{m}^3$ ditahan oleh tali yang terikat ke dasar kolam sehingga terendam seluruhnya di air $(1000\\ \\text{kg/m}^3)$, dengan $g = 10\\ \\text{m/s}^2$. Berapa tegangan tali?',
      pilihan: [
        '$78\\ \\text{N}$',
        '$120\\ \\text{N}$',
        '$42\\ \\text{N}$',
        '$198\\ \\text{N}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Gambar gaya pada balok: gaya apung ke atas, berat dan tegangan tali ke bawah.',
        'Balok diam, jadi $F_A = w + T$.',
        'Hitung $F_A$ dari volume penuh karena balok terendam seluruhnya.'
      ],
      pembahasan: [
        'Gaya apung: $F_A = \\rho\\,g\\,V = 1000 \\times 10 \\times 0{,}012 = 120\\ \\text{N}$.',
        'Berat: $w = 650 \\times 10 \\times 0{,}012 = 78\\ \\text{N}$.',
        'Kesetimbangan: $T = F_A - w = 120 - 78 = 42\\ \\text{N}$.'
      ],
      tag: ['tegangan tali', 'hukum Archimedes'],
      ragu: false
    },
    {
      id: 'sf-e5',
      bab: 'statika-fluida',
      subbab: 'statika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Air dengan tegangan permukaan $0{,}072\\ \\text{N/m}$ dan sudut kontak $30^\\circ$ terhadap dinding kaca naik pada pipa kapiler berjari-jari dalam $0{,}25\\ \\text{mm}$. Dengan $\\rho = 1000\\ \\text{kg/m}^3$ dan $g = 10\\ \\text{m/s}^2$, berapa kenaikan air di dalam pipa? Jawab dalam mm.',
      pilihan: [],
      jawaban: 49.88,
      satuan: 'mm',
      toleransi: 0.02,
      petunjuk: [
        'Komponen vertikal gaya tegangan permukaan sepanjang keliling $2\\pi r$ menahan berat kolom air.',
        'Samakan $\\gamma\\,\\cos\\theta\\,(2\\pi r) = \\rho\\,g\\,\\pi r^2 h$ untuk mendapat $h$.',
        'Ubah $r$ ke meter dan jawaban akhir ke mm.'
      ],
      pembahasan: [
        'Kesetimbangan: $\\gamma\\cos\\theta\\,(2\\pi r) = \\rho\\,g\\,(\\pi r^2 h)$, sehingga $h = \\dfrac{2\\,\\gamma\\cos\\theta}{\\rho\\,g\\,r}$.',
        '$h = \\dfrac{2 \\times 0{,}072 \\times 0{,}8660}{1000 \\times 10 \\times 2{,}5 \\times 10^{-4}} = \\dfrac{0{,}12471}{2{,}5} = 0{,}04988\\ \\text{m}$.',
        '$h \\approx 49{,}88\\ \\text{mm}$.'
      ],
      tag: ['kapilaritas', 'tegangan permukaan'],
      ragu: false
    }
  ]
};
