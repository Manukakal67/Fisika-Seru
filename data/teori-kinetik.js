window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['teori-kinetik'] = {
  id: 'teori-kinetik',
  judul: 'Teori Kinetik Gas',
  subbab: [
    {
      id: 'teori-kinetik',
      judul: 'Teori Kinetik Gas',
      materi: {
        gambaranBesar: 'Bayangkan ruangan penuh bola pingpong yang melesat ke segala arah dan terus menumbuk dinding. Kita tidak bisa melacak satu per satu, tetapi rata-ratanya sangat teratur: dinding terdorong (itu tekanan) dan makin cepat bola-bolanya, makin panas gas itu terasa (itu suhu). Teori kinetik gas menjembatani dunia mikroskopis (molekul bergerak) dengan besaran makroskopis yang bisa diukur (tekanan, volume, suhu).',
        konsep: [
          {
            judul: 'Gas ideal dan asumsinya',
            teks: 'Gas ideal adalah model sederhana yang dibangun dari beberapa asumsi: (1) gas terdiri dari sangat banyak molekul identik yang bergerak acak ke segala arah; (2) ukuran molekul sangat kecil dibanding jarak antarmolekul; (3) tidak ada gaya antarmolekul, kecuali saat tumbukan yang singkat; (4) tumbukan antarmolekul dan dengan dinding bersifat lenting sempurna; (5) hukum Newton berlaku. Gas nyata mendekati model ini pada tekanan rendah dan suhu jauh di atas titik cair.'
          },
          {
            judul: 'Hukum gas dan persamaan keadaan',
            teks: 'Tiga hukum klasik berlaku untuk jumlah gas tetap. Hukum Boyle: pada suhu tetap, $P V$ konstan (proses isotermal). Hukum Charles: pada tekanan tetap, $V/T$ konstan (isobarik). Hukum Gay-Lussac: pada volume tetap, $P/T$ konstan (isokhorik). Suhu $T$ harus selalu dalam kelvin. Ketiganya digabung menjadi persamaan keadaan gas ideal, dengan $n$ jumlah mol dan $N$ jumlah molekul. Untuk campuran gas yang tidak bereaksi, hukum Dalton menyatakan tekanan total sama dengan jumlah tekanan parsial tiap gas.',
            rumus: [
              {
                latex: 'P V = n R T = N k_B T',
                simbol: [
                  { s: 'P', arti: 'tekanan mutlak gas', satuan: 'Pa' },
                  { s: 'V', arti: 'volume gas', satuan: 'm³' },
                  { s: 'n', arti: 'jumlah mol gas', satuan: 'mol' },
                  { s: 'R', arti: 'tetapan gas universal, $8{,}31$', satuan: 'J/(mol K)' },
                  { s: 'T', arti: 'suhu mutlak', satuan: 'K' },
                  { s: 'N', arti: 'jumlah molekul', satuan: 'tanpa satuan' },
                  { s: 'k_B', arti: 'tetapan Boltzmann, $1{,}38 \\times 10^{-23}$', satuan: 'J/K' }
                ]
              },
              {
                latex: '\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}, \\qquad P_{\\text{total}} = P_A + P_B + \\dots',
                simbol: [
                  { s: 'P_1,\\ P_2', arti: 'tekanan keadaan 1 dan 2', satuan: 'Pa' },
                  { s: 'V_1,\\ V_2', arti: 'volume keadaan 1 dan 2', satuan: 'm³' },
                  { s: 'T_1,\\ T_2', arti: 'suhu mutlak keadaan 1 dan 2', satuan: 'K' },
                  { s: 'P_A,\\ P_B', arti: 'tekanan parsial tiap gas dalam campuran', satuan: 'Pa' }
                ]
              }
            ]
          },
          {
            judul: 'Tekanan dari tumbukan molekul',
            teks: 'Tekanan muncul dari tumbukan molekul pada dinding. Satu molekul bermassa $m$ yang memantul tegak lurus dinding kubus sisi $L$ dengan komponen kecepatan $v_x$ memberi impuls $2 m v_x$ pada tiap tumbukan, dan tumbukan berulang setiap $2L/v_x$. Menjumlahkan untuk $N$ molekul dan memakai $\\langle v_x^2 \\rangle = \\tfrac{1}{3}\\langle v^2 \\rangle$ (karena geraknya acak ke tiga sumbu) memberi hasil di bawah. Di sini $\\rho = N m / V$ adalah massa jenis gas.',
            rumus: [
              {
                latex: 'P = \\frac{N m \\langle v^2 \\rangle}{3 V} = \\frac{1}{3}\\,\\rho\\,v_{\\text{rms}}^2 = \\frac{2}{3}\\,\\frac{N}{V}\\,\\bar{E}_k',
                simbol: [
                  { s: 'P', arti: 'tekanan gas', satuan: 'Pa' },
                  { s: 'N', arti: 'jumlah molekul', satuan: 'tanpa satuan' },
                  { s: 'm', arti: 'massa satu molekul', satuan: 'kg' },
                  { s: 'V', arti: 'volume', satuan: 'm³' },
                  { s: '\\rho', arti: 'massa jenis gas', satuan: 'kg/m³' },
                  { s: 'v_{\\text{rms}}', arti: 'laju efektif (akar rata-rata kuadrat)', satuan: 'm/s' },
                  { s: '\\bar{E}_k', arti: 'energi kinetik translasi rata-rata satu molekul', satuan: 'J' }
                ]
              }
            ]
          },
          {
            judul: 'Suhu, energi kinetik, dan laju efektif',
            teks: 'Menggabungkan $P V = N k_B T$ dengan hasil tekanan di atas, diperoleh bahwa suhu mutlak ukuran langsung energi kinetik translasi rata-rata molekul: $\\bar{E}_k = \\tfrac{3}{2} k_B T$. Nilai ini tidak bergantung pada jenis gas. Laju efektif $v_{\\text{rms}}$ adalah akar dari rata-rata kuadrat laju. Untuk massa molar $M$ (dalam kg/mol), $v_{\\text{rms}}$ lebih besar pada gas yang lebih ringan dan pada suhu lebih tinggi.',
            rumus: [
              {
                latex: '\\bar{E}_k = \\tfrac{3}{2}\\,k_B T',
                simbol: [
                  { s: '\\bar{E}_k', arti: 'energi kinetik translasi rata-rata molekul', satuan: 'J' },
                  { s: 'k_B', arti: 'tetapan Boltzmann', satuan: 'J/K' },
                  { s: 'T', arti: 'suhu mutlak', satuan: 'K' }
                ]
              },
              {
                latex: 'v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}} = \\sqrt{\\frac{3 R T}{M}}',
                simbol: [
                  { s: 'v_{\\text{rms}}', arti: 'laju efektif molekul', satuan: 'm/s' },
                  { s: 'm', arti: 'massa satu molekul', satuan: 'kg' },
                  { s: 'M', arti: 'massa molar (harus dalam kg/mol)', satuan: 'kg/mol' },
                  { s: 'R', arti: 'tetapan gas universal', satuan: 'J/(mol K)' }
                ]
              }
            ]
          },
          {
            judul: 'Derajat kebebasan, ekipartisi, dan energi dalam',
            teks: 'Derajat kebebasan $f$ adalah banyaknya cara independen molekul menyimpan energi. Teorema ekipartisi: pada suhu $T$, tiap derajat kebebasan kuadratik menyimpan energi rata-rata $\\tfrac{1}{2} k_B T$ per molekul. Gas monoatomik (He, Ne) hanya bergerak translasi: $f = 3$. Gas diatomik (N2, O2, H2) pada suhu kamar menambah dua rotasi: $f = 5$; pada suhu sangat tinggi vibrasi ikut aktif sehingga $f = 7$. Pada suhu sangat rendah, rotasi membeku dan gas diatomik berperilaku seperti $f = 3$. Energi dalam gas ideal hanya bergantung pada suhu.',
            rumus: [
              {
                latex: 'U = \\frac{f}{2}\\,n R T = \\frac{f}{2}\\,N k_B T',
                simbol: [
                  { s: 'U', arti: 'energi dalam gas ideal', satuan: 'J' },
                  { s: 'f', arti: 'derajat kebebasan (3, 5, atau 7)', satuan: 'tanpa satuan' },
                  { s: 'n', arti: 'jumlah mol', satuan: 'mol' },
                  { s: 'R', arti: 'tetapan gas universal', satuan: 'J/(mol K)' },
                  { s: 'T', arti: 'suhu mutlak', satuan: 'K' }
                ]
              }
            ]
          },
          {
            judul: 'Kapasitas kalor molar dan gamma',
            teks: 'Kapasitas kalor molar pada volume tetap $C_V$ muncul karena pada volume tetap semua kalor menjadi energi dalam: $\\Delta U = n C_V \\Delta T$. Pada tekanan tetap gas juga melakukan kerja $n R \\Delta T$, sehingga $C_P = C_V + R$. Perbandingan $\\gamma = C_P / C_V$ menentukan proses adiabatik (tanpa pertukaran kalor), yang berlaku $P V^{\\gamma}$ konstan dan $T V^{\\gamma - 1}$ konstan. Pada proses adiabatik kerja yang dilakukan gas sama dengan penurunan energi dalamnya. Hukum I Termodinamika secara lengkap dibahas di bab Termodinamika.',
            rumus: [
              {
                latex: 'C_V = \\frac{f}{2}\\,R, \\qquad C_P = C_V + R, \\qquad \\gamma = \\frac{C_P}{C_V} = \\frac{f + 2}{f}',
                simbol: [
                  { s: 'C_V', arti: 'kapasitas kalor molar pada volume tetap', satuan: 'J/(mol K)' },
                  { s: 'C_P', arti: 'kapasitas kalor molar pada tekanan tetap', satuan: 'J/(mol K)' },
                  { s: '\\gamma', arti: 'perbandingan kapasitas kalor', satuan: 'tanpa satuan' },
                  { s: 'f', arti: 'derajat kebebasan', satuan: 'tanpa satuan' }
                ]
              },
              {
                latex: 'W_{\\text{adiabatik}} = -\\Delta U = n\\,C_V\\,(T_1 - T_2)',
                simbol: [
                  { s: 'W_{\\text{adiabatik}}', arti: 'kerja oleh gas pada proses adiabatik', satuan: 'J' },
                  { s: 'T_1,\\ T_2', arti: 'suhu awal dan akhir', satuan: 'K' }
                ]
              }
            ]
          },
          {
            judul: 'Distribusi kecepatan Maxwell-Boltzmann',
            teks: 'Tidak semua molekul punya laju yang sama. Distribusi Maxwell-Boltzmann $f(v)$ menyatakan seberapa banyak molekul yang lajunya sekitar $v$: luas di bawah kurva antara dua laju sama dengan fraksi molekul di rentang itu, dan luas totalnya 1. Kurva mulai dari nol, naik ke puncak, lalu turun landai ke kanan (ekor). Tiga laju khasnya berurutan: laju paling mungkin $v_{mp}$ (puncak) lebih kecil dari laju rata-rata $\\bar{v}$, lalu lebih kecil dari $v_{\\text{rms}}$. Perbandingannya selalu $v_{mp} : \\bar{v} : v_{\\text{rms}} = 1 : 1{,}13 : 1{,}22$. Suhu naik membuat kurva bergeser ke kanan dan melebar dan merendah; gas lebih ringan juga bergeser ke kanan.',
            rumus: [
              {
                latex: 'f(v) = 4\\pi \\left(\\frac{m}{2\\pi k_B T}\\right)^{3/2} v^2\\, e^{-m v^2 / (2 k_B T)}',
                simbol: [
                  { s: 'f(v)', arti: 'rapat peluang laju', satuan: 's/m' },
                  { s: 'm', arti: 'massa satu molekul', satuan: 'kg' },
                  { s: 'v', arti: 'laju molekul', satuan: 'm/s' },
                  { s: 'T', arti: 'suhu mutlak', satuan: 'K' }
                ]
              },
              {
                latex: 'v_{mp} = \\sqrt{\\frac{2 k_B T}{m}}, \\quad \\bar{v} = \\sqrt{\\frac{8 k_B T}{\\pi m}}, \\quad v_{\\text{rms}} = \\sqrt{\\frac{3 k_B T}{m}}',
                simbol: [
                  { s: 'v_{mp}', arti: 'laju paling mungkin (puncak kurva)', satuan: 'm/s' },
                  { s: '\\bar{v}', arti: 'laju rata-rata', satuan: 'm/s' },
                  { s: 'v_{\\text{rms}}', arti: 'laju efektif', satuan: 'm/s' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Berapa laju efektif molekul gas nitrogen (N2, massa molar $28\\ \\text{g/mol}$) pada suhu $300\\ \\text{K}$? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$.',
            langkah: [
              'Ubah massa molar ke satuan SI: $M = 28\\ \\text{g/mol} = 0{,}028\\ \\text{kg/mol}$.',
              'Pakai $v_{\\text{rms}} = \\sqrt{3 R T / M}$.',
              '$v_{\\text{rms}} = \\sqrt{3 \\times 8{,}31 \\times 300 / 0{,}028} = \\sqrt{2{,}671 \\times 10^{5}}$.',
              '$v_{\\text{rms}} \\approx 517\\ \\text{m/s}$.'
            ],
            hasil: 'Laju efektif molekul N2 sekitar 517 m/s, kira-kira 1,5 kali laju suara di udara.'
          },
          {
            soal: 'Sebuah gas ideal bervolume $2{,}0\\ \\text{L}$ pada $300\\ \\text{K}$ dipanaskan pada tekanan tetap hingga $450\\ \\text{K}$. Berapa volume akhirnya?',
            langkah: [
              'Tekanan tetap berarti proses isobarik, jadi hukum Charles: $V_1 / T_1 = V_2 / T_2$.',
              'Suhu sudah dalam kelvin, jadi tidak perlu diubah.',
              '$V_2 = V_1 \\times T_2 / T_1 = 2{,}0 \\times 450 / 300$.',
              '$V_2 = 3{,}0\\ \\text{L}$.'
            ],
            hasil: 'Volume akhir gas adalah 3,0 L.'
          },
          {
            soal: 'Berapa energi kinetik translasi rata-rata satu molekul gas pada $400\\ \\text{K}$? Gunakan $k_B = 1{,}38 \\times 10^{-23}\\ \\text{J/K}$.',
            langkah: [
              'Energi kinetik translasi rata-rata tidak bergantung pada jenis gas: $\\bar{E}_k = \\tfrac{3}{2} k_B T$.',
              '$\\bar{E}_k = 1{,}5 \\times 1{,}38 \\times 10^{-23} \\times 400$.',
              '$\\bar{E}_k = 8{,}28 \\times 10^{-21}\\ \\text{J}$.'
            ],
            hasil: 'Energi kinetik translasi rata-rata satu molekul adalah $8{,}28 \\times 10^{-21}$ J.'
          },
          {
            soal: 'Dua mol gas monoatomik dipanaskan pada volume tetap dari $300\\ \\text{K}$ ke $350\\ \\text{K}$. Berapa kalor yang diserap? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$.',
            langkah: [
              'Volume tetap: gas tidak melakukan kerja, jadi $Q = \\Delta U = n C_V \\Delta T$.',
              'Gas monoatomik punya $f = 3$, sehingga $C_V = \\tfrac{3}{2} R = 12{,}465\\ \\text{J/(mol K)}$.',
              '$Q = 2 \\times 12{,}465 \\times 50 = 1246{,}5\\ \\text{J}$.'
            ],
            hasil: 'Kalor yang diserap gas sekitar 1247 J.'
          }
        ],
        kesalahan: [
          'Memasukkan suhu dalam derajat Celsius ke rumus gas ideal. Suhu harus dalam kelvin: $T(\\text{K}) = T(^{\\circ}\\text{C}) + 273$.',
          'Lupa mengubah massa molar dari g/mol ke kg/mol saat memakai $v_{\\text{rms}} = \\sqrt{3RT/M}$, sehingga hasilnya salah faktor sekitar 32.',
          'Mengira semua molekul punya laju sama. Faktanya ada distribusi laju, dan $v_{mp} < \\bar{v} < v_{\\text{rms}}$.',
          'Mengira energi kinetik rata-rata molekul bergantung pada jenis gas. Pada suhu sama, He dan O2 punya $\\bar{E}_k$ sama; yang berbeda adalah lajunya.',
          'Menyamakan $f$ untuk semua gas. Gas monoatomik $f = 3$, diatomik pada suhu kamar $f = 5$, bukan 3.',
          'Menganggap $C_P$ dan $C_V$ sama. Pada tekanan tetap gas juga melakukan kerja, sehingga $C_P = C_V + R$.',
          'Pada campuran gas, mengira tiap gas hanya menempati sebagian volume wadah. Padahal tiap gas mengisi seluruh volume dan punya tekanan parsial sendiri; tekanan total adalah jumlahnya (Dalton).'
        ],
        ringkasan: [
          'Persamaan keadaan gas ideal: $P V = n R T = N k_B T$, dengan suhu dalam kelvin.',
          'Tekanan berasal dari tumbukan molekul: $P = \\tfrac{1}{3}\\rho v_{\\text{rms}}^2 = \\tfrac{2}{3}(N/V)\\bar{E}_k$.',
          'Suhu mutlak mengukur energi kinetik translasi rata-rata: $\\bar{E}_k = \\tfrac{3}{2}k_B T$ dan $v_{\\text{rms}} = \\sqrt{3RT/M}$.',
          'Ekipartisi: tiap derajat kebebasan menyimpan $\\tfrac{1}{2}k_B T$ per molekul, sehingga $U = \\tfrac{f}{2} n R T$.',
          '$C_V = \\tfrac{f}{2}R$, $C_P = C_V + R$, dan $\\gamma = C_P / C_V = (f+2)/f$.',
          'Distribusi Maxwell-Boltzmann: $v_{mp} < \\bar{v} < v_{\\text{rms}}$; suhu naik menggeser kurva ke kanan dan melebarkannya.'
        ],
        simulasi: {
          id: 'teori-kinetik-distribusi',
          judul: 'Kurva distribusi kecepatan Maxwell-Boltzmann',
          param: [
            { kunci: 'T', label: 'Suhu', min: 100, max: 1000, nilai: 300, satuan: 'K', langkah: 10 },
            { kunci: 'M', label: 'Massa molar gas', min: 2, max: 44, nilai: 28, satuan: 'g/mol', langkah: 1 },
            { kunci: 'n', label: 'Jumlah mol', min: 1, max: 5, nilai: 1, satuan: 'mol', langkah: 0.5 }
          ]
        }
      }
    }
  ],
  soal: [
    {
      id: 'tk-p1',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Manakah pernyataan berikut yang BUKAN merupakan asumsi gas ideal dalam teori kinetik gas?',
      pilihan: [
        'Molekul bergerak acak ke segala arah secara terus-menerus.',
        'Tumbukan molekul dengan dinding bersifat lenting sempurna.',
        'Antarmolekul bekerja gaya tarik yang kuat sehingga molekul cenderung berkelompok.',
        'Ukuran molekul sangat kecil dibanding jarak rata-rata antarmolekul.'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ingat model gas ideal: molekul dianggap partikel kecil yang hampir tidak saling mempengaruhi.',
        'Cari pernyataan yang menyebut interaksi antarmolekul yang besar.'
      ],
      pembahasan: [
        'Asumsi gas ideal: molekul bergerak acak, ukurannya diabaikan, tumbukan lenting sempurna, dan tidak ada gaya antarmolekul kecuali saat tumbukan.',
        'Pernyataan tentang gaya tarik yang kuat bertentangan dengan asumsi tidak ada gaya antarmolekul, jadi itulah jawabannya (pilihan C).'
      ],
      tag: ['asumsi gas ideal'],
      ragu: false
    },
    {
      id: 'tk-p2',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Hukum gas apa yang menyatakan bahwa hasil kali tekanan dan volume gas bernilai tetap jika suhu dan jumlah gas tidak berubah? (Jawab dengan nama ilmuwan penemunya.)',
      pilihan: [],
      jawaban: ['boyle'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Proses pada suhu tetap disebut isotermal.',
        'Hukum ini dinamai menurut ilmuwan Irlandia abad ke-17; bandingkan dengan hukum Charles dan Gay-Lussac.'
      ],
      pembahasan: [
        'Pada suhu dan jumlah gas tetap, $P V = \\text{konstan}$, atau $P_1 V_1 = P_2 V_2$.',
        'Hubungan ini disebut hukum Boyle.'
      ],
      tag: ['hukum Boyle', 'isotermal'],
      ragu: false
    },
    {
      id: 'tk-p3',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Hitung energi kinetik translasi rata-rata satu molekul gas ideal pada suhu $300\\ \\text{K}$. Gunakan $k_B = 1{,}38 \\times 10^{-23}\\ \\text{J/K}$. Jawab dalam joule.',
      pilihan: [],
      jawaban: 6.21e-21,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Energi kinetik translasi rata-rata hanya bergantung pada suhu mutlak.',
        'Pakai $\\bar{E}_k = \\tfrac{3}{2} k_B T$.'
      ],
      pembahasan: [
        'Rumus: $\\bar{E}_k = \\tfrac{3}{2} k_B T$.',
        'Substitusi: $\\bar{E}_k = 1{,}5 \\times 1{,}38 \\times 10^{-23} \\times 300$.',
        'Hasil: $\\bar{E}_k = 6{,}21 \\times 10^{-21}\\ \\text{J}$.'
      ],
      tag: ['energi kinetik rata-rata'],
      ragu: false
    },
    {
      id: 'tk-p4',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah tabung bervolume $0{,}015\\ \\text{m}^3$ berisi gas ideal bertekanan $2{,}0 \\times 10^{5}\\ \\text{Pa}$ pada suhu $300\\ \\text{K}$. Berapa jumlah mol gas di dalamnya? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$.',
      pilihan: [],
      jawaban: 1.2034,
      satuan: 'mol',
      toleransi: 0.02,
      petunjuk: [
        'Gunakan persamaan keadaan gas ideal.',
        'Susun ulang menjadi $n = P V / (R T)$.'
      ],
      pembahasan: [
        'Rumus: $P V = n R T$, sehingga $n = P V / (R T)$.',
        'Substitusi: $n = (2{,}0 \\times 10^{5})(0{,}015) / (8{,}31 \\times 300) = 3000 / 2493$.',
        'Hasil: $n \\approx 1{,}203\\ \\text{mol}$.'
      ],
      tag: ['persamaan keadaan'],
      ragu: false
    },
    {
      id: 'tk-p5',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Suhu mutlak suatu gas ideal dijadikan 4 kali semula, sedangkan jenis gasnya tetap. Laju efektif ($v_{\\text{rms}}$) molekulnya menjadi ...',
      pilihan: [
        '0,5 kali semula',
        '2 kali semula',
        '4 kali semula',
        '16 kali semula'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Lihat bagaimana $T$ muncul di $v_{\\text{rms}} = \\sqrt{3RT/M}$.',
        '$v_{\\text{rms}}$ sebanding dengan akar suhu mutlak.'
      ],
      pembahasan: [
        'Karena $v_{\\text{rms}} \\propto \\sqrt{T}$, maka $v_2 / v_1 = \\sqrt{T_2 / T_1} = \\sqrt{4}$.',
        'Hasil: $v_{\\text{rms}}$ menjadi 2 kali semula. Pilihan 4 kali adalah kesalahan umum karena mengira sebanding dengan $T$.'
      ],
      tag: ['laju efektif'],
      ragu: false
    },
    {
      id: 'tk-m1',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Hitung laju efektif molekul gas oksigen (O2, massa molar $32\\ \\text{g/mol}$) pada suhu $300\\ \\text{K}$. Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$. Jawab dalam m/s.',
      pilihan: [],
      jawaban: 483.44,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Ubah dulu massa molar ke kg/mol.',
        'Pakai $v_{\\text{rms}} = \\sqrt{3RT/M}$.'
      ],
      pembahasan: [
        'Massa molar: $M = 32\\ \\text{g/mol} = 0{,}032\\ \\text{kg/mol}$.',
        'Substitusi: $v_{\\text{rms}} = \\sqrt{3 \\times 8{,}31 \\times 300 / 0{,}032} = \\sqrt{233718{,}75}$.',
        'Hasil: $v_{\\text{rms}} \\approx 483{,}4\\ \\text{m/s}$.'
      ],
      tag: ['laju efektif', 'massa molar'],
      ragu: false
    },
    {
      id: 'tk-m2',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Gas ideal dalam tabung tertutup kaku (volume tetap) bertekanan $1{,}2 \\times 10^{5}\\ \\text{Pa}$ pada suhu $300\\ \\text{K}$. Tabung dipanaskan hingga $450\\ \\text{K}$. Tekanan gas sekarang adalah ...',
      pilihan: [
        '$0{,}80 \\times 10^{5}\\ \\text{Pa}$',
        '$2{,}7 \\times 10^{5}\\ \\text{Pa}$',
        '$3{,}6 \\times 10^{5}\\ \\text{Pa}$',
        '$1{,}8 \\times 10^{5}\\ \\text{Pa}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Volume tetap berarti proses isokhorik (hukum Gay-Lussac).',
        'Tekanan sebanding dengan suhu mutlak: $P_2 = P_1 T_2 / T_1$.'
      ],
      pembahasan: [
        'Isokhorik: $P_1 / T_1 = P_2 / T_2$.',
        'Substitusi: $P_2 = 1{,}2 \\times 10^{5} \\times 450 / 300$.',
        'Hasil: $P_2 = 1{,}8 \\times 10^{5}\\ \\text{Pa}$. Pilihan $2{,}7 \\times 10^{5}$ muncul bila suhu dikuadratkan, dan $0{,}80 \\times 10^{5}$ bila rasio suhu dibalik.'
      ],
      tag: ['isokhorik', 'Gay-Lussac'],
      ragu: false
    },
    {
      id: 'tk-m3',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Dua mol gas helium (gas monoatomik ideal) berada pada suhu $400\\ \\text{K}$. Berapa energi dalam gas tersebut? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$. Jawab dalam joule.',
      pilihan: [],
      jawaban: 9972,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Gas monoatomik hanya punya gerak translasi, jadi $f = 3$.',
        'Pakai $U = \\tfrac{f}{2} n R T$.'
      ],
      pembahasan: [
        'Gas monoatomik: $f = 3$.',
        'Substitusi: $U = \\tfrac{3}{2} \\times 2 \\times 8{,}31 \\times 400$.',
        'Hasil: $U = 9972\\ \\text{J}$.'
      ],
      tag: ['energi dalam', 'derajat kebebasan'],
      ragu: false
    },
    {
      id: 'tk-m4',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Teorema apa yang menyatakan bahwa energi rata-rata gas pada suhu tertentu terbagi sama besar, yaitu $\\tfrac{1}{2} k_B T$ per molekul, untuk tiap derajat kebebasan?',
      pilihan: [],
      jawaban: ['ekipartisi', 'ekuipartisi', 'equipartisi', 'equipartition'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Nama teorema ini berasal dari kata yang berarti pembagian sama rata.',
        'Awalannya mirip dengan kata ekuivalen (sama nilai).'
      ],
      pembahasan: [
        'Energi rata-rata $\\tfrac{1}{2} k_B T$ per derajat kebebasan per molekul.',
        'Pernyataan ini adalah teorema ekipartisi energi.'
      ],
      tag: ['ekipartisi'],
      ragu: false
    },
    {
      id: 'tk-m5',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah gas dengan massa jenis $1{,}2\\ \\text{kg/m}^3$ memiliki laju efektif molekul $500\\ \\text{m/s}$. Berapa tekanan gas tersebut? Jawab dalam pascal.',
      pilihan: [],
      jawaban: 100000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Hubungkan tekanan dengan massa jenis dan laju molekul.',
        'Pakai $P = \\tfrac{1}{3} \\rho v_{\\text{rms}}^2$.'
      ],
      pembahasan: [
        'Rumus: $P = \\tfrac{1}{3} \\rho v_{\\text{rms}}^2$.',
        'Substitusi: $P = \\tfrac{1}{3} \\times 1{,}2 \\times 500^2 = \\tfrac{1}{3} \\times 1{,}2 \\times 250000$.',
        'Hasil: $P = 1{,}0 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['tekanan gas', 'laju efektif'],
      ragu: false
    },
    {
      id: 'tk-l1',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Gas ideal bervolume $6{,}0\\ \\text{L}$ bertekanan $1{,}0 \\times 10^{5}\\ \\text{Pa}$ pada suhu $300\\ \\text{K}$. Gas dimampatkan secara isotermal hingga volumenya $2{,}0\\ \\text{L}$, lalu dipanaskan pada volume tetap hingga suhunya $450\\ \\text{K}$. Berapa tekanan akhir gas? Jawab dalam pascal.',
      pilihan: [],
      jawaban: 450000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Selesaikan dua tahap berurutan: isotermal lalu isokhorik.',
        'Tahap isotermal: $P_1 V_1 = P_2 V_2$ untuk mendapat tekanan setelah dimampatkan.',
        'Tahap isokhorik: $P_2 / T_1 = P_3 / T_2$.'
      ],
      pembahasan: [
        'Tahap 1 (isotermal): $P_2 = P_1 V_1 / V_2 = 1{,}0 \\times 10^{5} \\times 6{,}0 / 2{,}0 = 3{,}0 \\times 10^{5}\\ \\text{Pa}$.',
        'Tahap 2 (isokhorik): $P_3 = P_2 \\times T_2 / T_1 = 3{,}0 \\times 10^{5} \\times 450 / 300$.',
        'Hasil: $P_3 = 4{,}5 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['isotermal', 'isokhorik', 'perbandingan keadaan'],
      ragu: false
    },
    {
      id: 'tk-l2',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Sebuah tabung gas bervolume tetap awalnya bertekanan $8{,}0 \\times 10^{5}\\ \\text{Pa}$. Setelah sebagian gas bocor, tekanannya turun menjadi $5{,}0 \\times 10^{5}\\ \\text{Pa}$ pada suhu yang sama dengan semula. Berapa persen massa gas semula yang telah bocor?',
      pilihan: [
        '37,5%',
        '62,5%',
        '60%',
        '25%'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pada $V$ dan $T$ tetap, tekanan sebanding dengan jumlah mol ($P = nRT/V$).',
        'Massa gas sebanding dengan jumlah mol, jadi fraksi massa yang bocor sama dengan fraksi tekanan yang hilang.'
      ],
      pembahasan: [
        'Karena $V$ dan $T$ tetap, $n \\propto P$, sehingga $n_2 / n_1 = 5{,}0 / 8{,}0 = 0{,}625$.',
        'Gas yang tersisa 62,5%, jadi yang bocor $1 - 0{,}625 = 0{,}375$.',
        'Hasil: 37,5% dari massa semula bocor. Pilihan 62,5% adalah gas yang tersisa, dan 60% muncul bila selisih tekanan dibagi tekanan akhir.'
      ],
      tag: ['kebocoran tabung', 'jumlah mol'],
      ragu: false
    },
    {
      id: 'tk-l3',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Tabung A bervolume $4{,}0\\ \\text{L}$ berisi gas ideal bertekanan $3{,}0 \\times 10^{5}\\ \\text{Pa}$. Tabung B bervolume $6{,}0\\ \\text{L}$ berisi gas ideal jenis sama bertekanan $1{,}0 \\times 10^{5}\\ \\text{Pa}$. Keduanya bersuhu $300\\ \\text{K}$. Katup penghubung dibuka sehingga gas bercampur, dan suhu akhir tetap $300\\ \\text{K}$. Berapa tekanan akhir? Jawab dalam pascal.',
      pilihan: [],
      jawaban: 180000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Jumlah mol total tidak berubah ketika katup dibuka.',
        'Hitung $n_A$ dan $n_B$ dari $n = PV/(RT)$, lalu jumlahkan.',
        'Tekanan akhir: $P = (n_A + n_B) R T / (V_A + V_B)$.'
      ],
      pembahasan: [
        'Karena $T$ sama dan tetap, $P_{\\text{akhir}} (V_A + V_B) = P_A V_A + P_B V_B$.',
        'Substitusi: $P_{\\text{akhir}} \\times 10 = (3{,}0 \\times 10^{5})(4{,}0) + (1{,}0 \\times 10^{5})(6{,}0) = 18 \\times 10^{5}$.',
        'Hasil: $P_{\\text{akhir}} = 1{,}8 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['campuran gas', 'persamaan keadaan'],
      ragu: false
    },
    {
      id: 'tk-l4',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Gas ideal disimpan dalam tabung kaku bervolume $0{,}0250\\ \\text{m}^3$. Grafik tekanan (sumbu tegak, dalam Pa) terhadap suhu mutlak (sumbu mendatar, dalam K) berupa garis lurus yang melewati titik asal $(0, 0)$ dengan kemiringan (gradien) $624\\ \\text{Pa/K}$. Berapa jumlah mol gas di dalam tabung? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$.',
      pilihan: [],
      jawaban: 1.8773,
      satuan: 'mol',
      toleransi: 0.02,
      petunjuk: [
        'Tulis $P$ sebagai fungsi $T$ pada volume tetap: $P = (nR/V)\\,T$.',
        'Gradien garis sama dengan $nR/V$.'
      ],
      pembahasan: [
        'Volume tetap: $P = \\dfrac{nR}{V}\\,T$, garis lurus melalui titik asal dengan gradien $nR/V$.',
        'Maka $n = \\text{gradien} \\times V / R = 624 \\times 0{,}0250 / 8{,}31$.',
        'Hasil: $n \\approx 1{,}877\\ \\text{mol}$.'
      ],
      tag: ['grafik P-T', 'isokhorik'],
      ragu: false
    },
    {
      id: 'tk-l5',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Tabung bervolume tetap $25\\ \\text{L}$ berisi gas ideal pada tekanan $2{,}0 \\times 10^{6}\\ \\text{Pa}$ dan suhu $300\\ \\text{K}$. Setelah beberapa lama karena katupnya bocor, tekanan turun menjadi $1{,}5 \\times 10^{6}\\ \\text{Pa}$ dan suhu menjadi $280\\ \\text{K}$. Berapa mol gas yang telah keluar? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$.',
      pilihan: [],
      jawaban: 3.9396,
      satuan: 'mol',
      toleransi: 0.02,
      petunjuk: [
        'Hitung jumlah mol sebelum dan sesudah dari $n = PV/(RT)$. Ingat $25\\ \\text{L} = 0{,}025\\ \\text{m}^3$.',
        'Gas yang keluar adalah selisih kedua jumlah mol.'
      ],
      pembahasan: [
        'Mol awal: $n_1 = (2{,}0 \\times 10^{6})(0{,}025) / (8{,}31 \\times 300) \\approx 20{,}06\\ \\text{mol}$.',
        'Mol akhir: $n_2 = (1{,}5 \\times 10^{6})(0{,}025) / (8{,}31 \\times 280) \\approx 16{,}12\\ \\text{mol}$.',
        'Hasil: $n_1 - n_2 \\approx 3{,}94\\ \\text{mol}$ gas keluar.'
      ],
      tag: ['kebocoran tabung', 'persamaan keadaan'],
      ragu: false
    },
    {
      id: 'tk-e1',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah wadah kubus bersisi $L = 0{,}10\\ \\text{m}$ berisi $N = 3{,}0 \\times 10^{22}$ molekul helium, masing-masing bermassa $m = 6{,}64 \\times 10^{-27}\\ \\text{kg}$, dengan laju efektif $1350\\ \\text{m/s}$. Turunkan tekanan pada satu dinding dari tumbukan molekul: tiap molekul memantul lenting tegak lurus dinding dengan komponen $v_x$ (impuls $2 m |v_x|$ per tumbukan, tumbukan berulang tiap $2L/|v_x|$), dan geraknya isotropik sehingga $\\langle v_x^2 \\rangle = \\tfrac{1}{3} v_{\\text{rms}}^2$. Berapa tekanannya? Jawab dalam pascal.',
      pilihan: [],
      jawaban: 121014,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Gaya rata-rata satu molekul pada dinding adalah impuls per tumbukan dibagi selang antar tumbukan.',
        'Satu molekul: $F = (2 m |v_x|)/(2L/|v_x|) = m v_x^2 / L$.',
        'Jumlahkan untuk $N$ molekul memakai $\\langle v_x^2 \\rangle = v_{\\text{rms}}^2 / 3$, lalu bagi dengan luas dinding $L^2$.'
      ],
      pembahasan: [
        'Gaya satu molekul: $F_1 = \\dfrac{2 m |v_x|}{2L/|v_x|} = \\dfrac{m v_x^2}{L}$.',
        'Untuk $N$ molekul: $F = \\dfrac{N m \\langle v_x^2 \\rangle}{L} = \\dfrac{N m v_{\\text{rms}}^2}{3L}$, sehingga $P = F/L^2 = \\dfrac{N m v_{\\text{rms}}^2}{3V}$ dengan $V = L^3 = 1{,}0 \\times 10^{-3}\\ \\text{m}^3$.',
        'Substitusi: $N m = 3{,}0 \\times 10^{22} \\times 6{,}64 \\times 10^{-27} = 1{,}992 \\times 10^{-4}\\ \\text{kg}$ dan $v_{\\text{rms}}^2 = 1{,}8225 \\times 10^{6}$.',
        'Hasil: $P = (1{,}992 \\times 10^{-4})(1{,}8225 \\times 10^{6}) / (3 \\times 10^{-3}) \\approx 1{,}21 \\times 10^{5}\\ \\text{Pa}$.'
      ],
      tag: ['tekanan dari tumbukan', 'penurunan rumus'],
      ragu: false
    },
    {
      id: 'tk-e2',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Gas helium (massa molar $4\\ \\text{g/mol}$) pada suhu $200\\ \\text{K}$ dan gas oksigen (massa molar $32\\ \\text{g/mol}$) pada suhu $800\\ \\text{K}$ dibandingkan. Berapa perbandingan $v_{\\text{rms}}$ helium terhadap $v_{\\text{rms}}$ oksigen?',
      pilihan: [
        '0,71',
        '2,00',
        '1,41',
        '0,50'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tulis $v_{\\text{rms}} \\propto \\sqrt{T/M}$ untuk kedua gas.',
        'Bandingkan $T/M$ keduanya sebelum mengambil akar.'
      ],
      pembahasan: [
        'Rasio: $\\dfrac{v_{He}}{v_{O_2}} = \\sqrt{\\dfrac{T_{He}/M_{He}}{T_{O_2}/M_{O_2}}}$.',
        'Substitusi: $T_{He}/M_{He} = 200/4 = 50$ dan $T_{O_2}/M_{O_2} = 800/32 = 25$.',
        'Hasil: rasio $= \\sqrt{50/25} = \\sqrt{2} \\approx 1{,}41$. Pilihan 0,71 adalah kebalikannya.'
      ],
      tag: ['laju efektif', 'perbandingan'],
      ragu: false
    },
    {
      id: 'tk-e3',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Satu mol gas diatomik ideal dipanaskan pada volume tetap dari $100\\ \\text{K}$ hingga $1000\\ \\text{K}$. Anggap derajat kebebasannya berubah tajam terhadap suhu: untuk $T < 150\\ \\text{K}$ hanya translasi aktif ($f = 3$); untuk $150\\ \\text{K} \\le T < 800\\ \\text{K}$ translasi dan rotasi aktif ($f = 5$); untuk $T \\ge 800\\ \\text{K}$ vibrasi ikut aktif ($f = 7$). Berapa kalor total yang diserap gas? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$. Jawab dalam joule.',
      pilihan: [],
      jawaban: 19944,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Pada volume tetap, kalor yang diserap sama dengan kenaikan energi dalam.',
        'Karena $f$ berubah, bagi pemanasan menjadi tiga rentang dan hitung $\\Delta U = \\tfrac{f}{2} n R \\Delta T$ tiap rentang.',
        'Jumlahkan ketiganya.'
      ],
      pembahasan: [
        'Volume tetap: $Q = \\Delta U = \\sum \\tfrac{f}{2} n R\\,\\Delta T$.',
        'Rentang 100 sampai 150 K: $\\tfrac{3}{2} R (50) = 75R$. Rentang 150 sampai 800 K: $\\tfrac{5}{2} R (650) = 1625R$. Rentang 800 sampai 1000 K: $\\tfrac{7}{2} R (200) = 700R$.',
        'Jumlah: $Q = (75 + 1625 + 700)\\,R = 2400 \\times 8{,}31$.',
        'Hasil: $Q = 19944\\ \\text{J}$.'
      ],
      tag: ['energi dalam', 'derajat kebebasan', 'kalor'],
      ragu: false
    },
    {
      id: 'tk-e4',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Dua mol gas ideal dengan $\\gamma = C_P / C_V = 1{,}40$ memuai secara adiabatik sehingga suhunya turun dari $400\\ \\text{K}$ menjadi $300\\ \\text{K}$. Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$ dan hubungan $C_P - C_V = R$. Berapa kerja yang dilakukan gas? Jawab dalam joule.',
      pilihan: [],
      jawaban: 4155,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Dari $C_P = \\gamma C_V$ dan $C_P - C_V = R$, tentukan $C_V$.',
        'Proses adiabatik berarti $Q = 0$, jadi kerja oleh gas sama dengan penurunan energi dalam.',
        'Pakai $W = n C_V (T_1 - T_2)$.'
      ],
      pembahasan: [
        'Dari $(\\gamma - 1) C_V = R$ diperoleh $C_V = R/(\\gamma - 1) = 8{,}31/0{,}40 = 20{,}775\\ \\text{J/(mol K)}$.',
        'Adiabatik: $Q = 0$ sehingga $W = -\\Delta U = n C_V (T_1 - T_2)$.',
        'Substitusi: $W = 2 \\times 20{,}775 \\times 100$.',
        'Hasil: $W = 4155\\ \\text{J}$.'
      ],
      tag: ['adiabatik', 'gamma', 'kapasitas kalor'],
      ragu: false
    },
    {
      id: 'tk-e5',
      bab: 'teori-kinetik',
      subbab: 'teori-kinetik',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah wadah bervolume $5{,}0 \\times 10^{-4}\\ \\text{m}^3$ pada suhu $300\\ \\text{K}$ berisi campuran dua gas ideal yang tidak bereaksi, dengan tekanan total $2{,}0 \\times 10^{5}\\ \\text{Pa}$. Gas pertama berjumlah $1{,}2 \\times 10^{22}$ molekul. Gunakan $k_B = 1{,}38 \\times 10^{-23}\\ \\text{J/K}$. Berapa tekanan parsial gas kedua? Jawab dalam pascal.',
      pilihan: [],
      jawaban: 100640,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Hitung jumlah molekul total dari $N = PV/(k_B T)$.',
        'Tekanan parsial tiap gas adalah $P_i = N_i k_B T / V$.',
        'Hukum Dalton: $P_{\\text{total}} = P_1 + P_2$.'
      ],
      pembahasan: [
        'Tekanan parsial gas pertama: $P_1 = N_1 k_B T / V = (1{,}2 \\times 10^{22})(1{,}38 \\times 10^{-23})(300)/(5{,}0 \\times 10^{-4}) \\approx 9{,}936 \\times 10^{4}\\ \\text{Pa}$.',
        'Hukum Dalton: $P_2 = P_{\\text{total}} - P_1 = 2{,}0 \\times 10^{5} - 9{,}936 \\times 10^{4}$.',
        'Hasil: $P_2 \\approx 1{,}006 \\times 10^{5}\\ \\text{Pa}$ (setara $N_2 \\approx 1{,}22 \\times 10^{22}$ molekul).'
      ],
      tag: ['hukum Dalton', 'jumlah molekul'],
      ragu: false
    }
  ]
};
