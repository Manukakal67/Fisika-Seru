window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['termodinamika'] = {
  id: 'termodinamika',
  judul: 'Termodinamika',
  subbab: [
    {
      id: 'termodinamika',
      judul: 'Termodinamika',
      materi: {
        gambaranBesar: 'Saat kamu menyeduh teh panas, kalor mengalir dari air ke cangkir lalu ke udara sampai semuanya sama hangat. Saat kamu memompa ban sepeda, pompa terasa hangat karena usaha yang kamu berikan berubah menjadi energi dalam gas. Termodinamika adalah ilmu tentang aliran kalor, usaha, dan energi dalam, serta batas-batas yang menentukan seberapa banyak kalor bisa diubah menjadi usaha oleh mesin.',
        konsep: [
          {
            judul: 'Suhu dan skala suhu',
            teks: 'Suhu adalah ukuran seberapa panas atau dingin suatu benda, dan secara mikroskopis berkaitan dengan energi gerak rata-rata partikelnya. Skala Celsius memakai titik beku air $0\\ ^\\circ\\text{C}$ dan titik didih air $100\\ ^\\circ\\text{C}$. Skala Kelvin adalah skala mutlak: $0\\ \\text{K}$ adalah suhu terendah yang mungkin. Rumus gas dan Carnot selalu memakai suhu dalam Kelvin. Selisih suhu bernilai sama di kedua skala, jadi $\\Delta T$ dalam K sama dengan $\\Delta t$ dalam $^\\circ\\text{C}$.',
            rumus: [
              {
                latex: 'T = t + 273',
                simbol: [
                  { s: 'T', arti: 'suhu mutlak', satuan: 'K' },
                  { s: 't', arti: 'suhu dalam skala Celsius', satuan: '°C' }
                ]
              }
            ]
          },
          {
            judul: 'Kalor, kalor jenis, dan kalor laten',
            teks: 'Kalor adalah energi yang berpindah karena perbedaan suhu. Kalor jenis $c$ adalah banyaknya kalor untuk menaikkan suhu $1\\ \\text{kg}$ zat sebesar $1\\ \\text{K}$. Selama zat berubah fase (melebur atau menguap) suhunya tetap, dan kalor yang diserap dipakai untuk memutus ikatan antarpartikel. Kalornya disebut kalor laten, dengan $L$ kalor lebur atau kalor uap per kilogram. Konstanta yang dipakai di bab ini: kalor jenis air $4200\\ \\text{J/(kg K)}$, kalor lebur es $3{,}34 \\times 10^5\\ \\text{J/kg}$, kalor uap air $2{,}26 \\times 10^6\\ \\text{J/kg}$.',
            rumus: [
              {
                latex: 'Q = m\\,c\\,\\Delta T',
                simbol: [
                  { s: 'Q', arti: 'kalor yang diserap (positif) atau dilepas (negatif)', satuan: 'J' },
                  { s: 'm', arti: 'massa zat', satuan: 'kg' },
                  { s: 'c', arti: 'kalor jenis', satuan: 'J/(kg K)' },
                  { s: '\\Delta T', arti: 'perubahan suhu', satuan: 'K' }
                ]
              },
              {
                latex: 'Q = m\\,L',
                simbol: [
                  { s: 'Q', arti: 'kalor untuk berubah fase', satuan: 'J' },
                  { s: 'm', arti: 'massa zat yang berubah fase', satuan: 'kg' },
                  { s: 'L', arti: 'kalor laten (lebur atau uap)', satuan: 'J/kg' }
                ]
              }
            ]
          },
          {
            judul: 'Asas Black',
            teks: 'Bila dua zat dengan suhu berbeda dicampur dalam wadah terisolasi, kalor yang dilepas zat panas sama dengan kalor yang diserap zat dingin, sampai tercapai suhu akhir yang sama. Bila ada perubahan fase, hitung dulu apakah kalor yang tersedia cukup untuk mengubah fase seluruh zat. Kalau tidak cukup, suhu akhirnya tetap di titik lebur atau titik didih.',
            rumus: [
              {
                latex: 'Q_{\\text{lepas}} = Q_{\\text{terima}}',
                simbol: [
                  { s: 'Q_{\\text{lepas}}', arti: 'total kalor yang dilepas zat yang lebih panas', satuan: 'J' },
                  { s: 'Q_{\\text{terima}}', arti: 'total kalor yang diserap zat yang lebih dingin', satuan: 'J' }
                ]
              }
            ]
          },
          {
            judul: 'Perpindahan kalor: konduksi, konveksi, radiasi',
            teks: 'Konduksi adalah perpindahan kalor melalui zat padat tanpa zatnya ikut bergerak; logam menghantarkan dengan baik karena $k$ besar. Konveksi adalah perpindahan kalor oleh aliran zat cair atau gas, misalnya air panas naik dan air dingin turun di dalam panci. Radiasi adalah perpindahan kalor lewat gelombang elektromagnetik dan tidak butuh zat perantara, seperti panas Matahari yang sampai ke Bumi. Pada radiasi, suhu harus dalam Kelvin. Bila lingkungan bersuhu $T_{\\text{lingk}}$, daya radiasi neto adalah $e\\,\\sigma\\,A\\,(T^4 - T_{\\text{lingk}}^4)$ dengan $\\sigma = 5{,}67 \\times 10^{-8}\\ \\text{W/(m}^2\\text{K}^4)$.',
            rumus: [
              {
                latex: 'H = \\frac{k\\,A\\,\\Delta T}{L}',
                simbol: [
                  { s: 'H', arti: 'laju kalor (kalor per detik) lewat konduksi', satuan: 'W' },
                  { s: 'k', arti: 'konduktivitas termal bahan', satuan: 'W/(m K)' },
                  { s: 'A', arti: 'luas penampang', satuan: 'm²' },
                  { s: '\\Delta T', arti: 'beda suhu kedua ujung', satuan: 'K' },
                  { s: 'L', arti: 'panjang batang', satuan: 'm' }
                ]
              },
              {
                latex: 'P = e\\,\\sigma\\,A\\,T^4',
                simbol: [
                  { s: 'P', arti: 'daya radiasi yang dipancarkan', satuan: 'W' },
                  { s: 'e', arti: 'emisivitas permukaan (0 sampai 1)', satuan: 'tanpa satuan' },
                  { s: '\\sigma', arti: 'konstanta Stefan-Boltzmann', satuan: 'W/(m² K⁴)' },
                  { s: 'A', arti: 'luas permukaan', satuan: 'm²' },
                  { s: 'T', arti: 'suhu mutlak permukaan', satuan: 'K' }
                ]
              }
            ]
          },
          {
            judul: 'Gas ideal dan usaha gas',
            teks: 'Gas ideal mengikuti persamaan keadaan di bawah, dengan $R = 8{,}31\\ \\text{J/(mol K)}$, suhu dalam Kelvin, dan tekanan dalam pascal. Saat gas memuai, gas mendorong lingkungannya dan melakukan usaha. Pada diagram P-V, usaha gas sama dengan luas di bawah kurva proses. Konvensi di bab ini: $W$ adalah usaha OLEH gas. Jadi $W > 0$ bila gas memuai, dan $W < 0$ bila gas dimampatkan (lingkungan melakukan usaha pada gas). Untuk tekanan tetap, usaha adalah $P\\,\\Delta V$. Tekanan atmosfer yang dipakai: $1{,}0 \\times 10^5\\ \\text{Pa}$.',
            rumus: [
              {
                latex: 'P\\,V = n\\,R\\,T',
                simbol: [
                  { s: 'P', arti: 'tekanan gas', satuan: 'Pa' },
                  { s: 'V', arti: 'volume gas', satuan: 'm³' },
                  { s: 'n', arti: 'jumlah mol gas', satuan: 'mol' },
                  { s: 'R', arti: 'konstanta gas umum', satuan: 'J/(mol K)' },
                  { s: 'T', arti: 'suhu mutlak gas', satuan: 'K' }
                ]
              },
              {
                latex: 'W = \\int_{V_1}^{V_2} P\\,dV \\;=\\; P\\,(V_2 - V_1)\\quad (P\\ \\text{tetap})',
                simbol: [
                  { s: 'W', arti: 'usaha yang dilakukan OLEH gas', satuan: 'J' },
                  { s: 'P', arti: 'tekanan gas', satuan: 'Pa' },
                  { s: 'V_1,\\ V_2', arti: 'volume awal dan akhir', satuan: 'm³' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum I Termodinamika dan empat proses',
            teks: 'Hukum I adalah kekekalan energi: kalor yang masuk ke gas dipakai untuk menaikkan energi dalam dan untuk melakukan usaha. Konvensi tanda: $Q > 0$ bila gas MENERIMA kalor, $Q < 0$ bila gas melepas kalor, $W > 0$ bila gas melakukan usaha. Untuk gas ideal monoatomik, $\\Delta U = \\tfrac{3}{2}\\,n\\,R\\,\\Delta T$ (alasan lengkapnya dibahas di bab teori kinetik). Isobarik: tekanan tetap. Isokhorik: volume tetap, jadi $W = 0$ dan $Q = \\Delta U$. Isotermal: suhu tetap, jadi $\\Delta U = 0$ dan $Q = W$. Adiabatik: tidak ada kalor masuk atau keluar, $Q = 0$, jadi $\\Delta U = -W$. Untuk gas monoatomik $\\gamma = 5/3$.',
            rumus: [
              {
                latex: '\\Delta U = Q - W',
                simbol: [
                  { s: '\\Delta U', arti: 'perubahan energi dalam gas', satuan: 'J' },
                  { s: 'Q', arti: 'kalor yang diterima gas (positif jika masuk)', satuan: 'J' },
                  { s: 'W', arti: 'usaha yang dilakukan OLEH gas (positif jika memuai)', satuan: 'J' }
                ]
              },
              {
                latex: 'W_{\\text{isotermal}} = n\\,R\\,T\\,\\ln\\frac{V_2}{V_1}',
                simbol: [
                  { s: 'n', arti: 'jumlah mol gas', satuan: 'mol' },
                  { s: 'R', arti: 'konstanta gas umum', satuan: 'J/(mol K)' },
                  { s: 'T', arti: 'suhu gas (tetap)', satuan: 'K' },
                  { s: 'V_2 / V_1', arti: 'perbandingan volume akhir terhadap awal', satuan: 'tanpa satuan' }
                ]
              },
              {
                latex: 'P\\,V^{\\gamma} = \\text{konstan}\\quad\\text{dan}\\quad T\\,V^{\\gamma - 1} = \\text{konstan}',
                simbol: [
                  { s: '\\gamma', arti: 'tetapan adiabatik (5/3 untuk gas monoatomik)', satuan: 'tanpa satuan' },
                  { s: 'P', arti: 'tekanan gas', satuan: 'Pa' },
                  { s: 'V', arti: 'volume gas', satuan: 'm³' },
                  { s: 'T', arti: 'suhu mutlak gas', satuan: 'K' }
                ]
              }
            ]
          },
          {
            judul: 'Mesin kalor, mesin Carnot, dan pendingin',
            teks: 'Mesin kalor mengambil kalor $Q_H$ dari reservoir panas, mengubah sebagian menjadi usaha $W$, dan membuang sisanya $Q_C$ ke reservoir dingin. Efisiensi adalah usaha yang dihasilkan dibanding kalor yang diambil. Untuk satu siklus lengkap $\\Delta U = 0$, jadi usaha neto sama dengan kalor neto, yaitu luas lingkaran tertutup pada diagram P-V. Mesin Carnot adalah mesin ideal dengan efisiensi tertinggi di antara semua mesin yang bekerja di antara dua suhu yang sama. Pendingin (lemari es) adalah mesin kalor yang dibalik: ia diberi usaha $W$ untuk memindahkan kalor $Q_C$ dari ruang dingin ke ruang panas. Koefisien kinerjanya $K = Q_C / W$.',
            rumus: [
              {
                latex: '\\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H}',
                simbol: [
                  { s: '\\eta', arti: 'efisiensi mesin kalor', satuan: 'tanpa satuan' },
                  { s: 'W', arti: 'usaha neto per siklus', satuan: 'J' },
                  { s: 'Q_H', arti: 'kalor yang diserap dari reservoir panas', satuan: 'J' },
                  { s: 'Q_C', arti: 'kalor yang dibuang ke reservoir dingin', satuan: 'J' }
                ]
              },
              {
                latex: '\\eta_{\\text{Carnot}} = 1 - \\frac{T_C}{T_H}',
                simbol: [
                  { s: 'T_C', arti: 'suhu reservoir dingin (dalam kelvin)', satuan: 'K' },
                  { s: 'T_H', arti: 'suhu reservoir panas (dalam kelvin)', satuan: 'K' }
                ]
              },
              {
                latex: 'K_{\\text{Carnot}} = \\frac{Q_C}{W} = \\frac{T_C}{T_H - T_C}',
                simbol: [
                  { s: 'K', arti: 'koefisien kinerja pendingin', satuan: 'tanpa satuan' },
                  { s: 'Q_C', arti: 'kalor yang diambil dari ruang dingin', satuan: 'J' },
                  { s: 'W', arti: 'usaha yang diberikan pada pendingin', satuan: 'J' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum II Termodinamika dan entropi',
            teks: 'Hukum II menyatakan bahwa kalor tidak mengalir sendiri dari benda dingin ke benda panas, dan tidak ada mesin yang mengubah seluruh kalor menjadi usaha secara terus-menerus (efisiensi 100 persen mustahil). Entropi $S$ adalah ukuran ketidakteraturan sistem. Untuk kalor $Q$ yang masuk secara reversibel pada suhu tetap $T$, entropi bertambah sebesar $Q/T$. Dalam proses nyata, entropi total sistem ditambah lingkungan tidak pernah berkurang. Entropi total yang bertambah itulah tanda proses berjalan satu arah.',
            rumus: [
              {
                latex: '\\Delta S = \\frac{Q}{T}',
                simbol: [
                  { s: '\\Delta S', arti: 'perubahan entropi (suhu tetap)', satuan: 'J/K' },
                  { s: 'Q', arti: 'kalor yang masuk ke benda (negatif jika keluar)', satuan: 'J' },
                  { s: 'T', arti: 'suhu mutlak benda', satuan: 'K' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebanyak $0{,}20\\ \\text{kg}$ air bersuhu $90\\ ^\\circ\\text{C}$ dicampur dengan $0{,}30\\ \\text{kg}$ air bersuhu $15\\ ^\\circ\\text{C}$ dalam wadah terisolasi. Berapa suhu akhir campuran?',
            langkah: [
              'Air panas melepas kalor, air dingin menerima. Pada kesetimbangan keduanya bersuhu $T_a$, dan kalor jenis air sama sehingga bisa dicoret.',
              'Asas Black: $0{,}20\\,c\\,(90 - T_a) = 0{,}30\\,c\\,(T_a - 15)$.',
              'Sederhanakan: $18 - 0{,}20\\,T_a = 0{,}30\\,T_a - 4{,}5$, sehingga $22{,}5 = 0{,}50\\,T_a$.'
            ],
            hasil: '$T_a = 45\\ ^\\circ\\text{C}$.'
          },
          {
            soal: 'Sebanyak $1{,}0\\ \\text{mol}$ gas ideal bersuhu $300\\ \\text{K}$ memuai secara isotermal sampai volumenya 3 kali semula. Berapa usaha yang dilakukan gas dan berapa kalor yang diserapnya? Gunakan $R = 8{,}31\\ \\text{J/(mol K)}$ dan $\\ln 3 = 1{,}099$.',
            langkah: [
              'Pada proses isotermal, $W = n\\,R\\,T\\,\\ln(V_2/V_1)$ dengan $V_2/V_1 = 3$.',
              '$W = 1{,}0 \\times 8{,}31 \\times 300 \\times 1{,}099 \\approx 2740\\ \\text{J}$.',
              'Suhu tetap, jadi $\\Delta U = 0$. Dari $\\Delta U = Q - W$ diperoleh $Q = W$.'
            ],
            hasil: '$W \\approx 2740\\ \\text{J}$ (positif karena gas memuai) dan $Q \\approx 2740\\ \\text{J}$ (kalor masuk ke gas).'
          },
          {
            soal: 'Mesin Carnot bekerja antara reservoir bersuhu $500\\ \\text{K}$ dan $300\\ \\text{K}$. Mesin menyerap $1000\\ \\text{J}$ kalor tiap siklus. Berapa efisiensi, usaha per siklus, dan kalor yang dibuang?',
            langkah: [
              'Efisiensi Carnot: $\\eta = 1 - T_C/T_H = 1 - 300/500 = 0{,}40$.',
              'Usaha per siklus: $W = \\eta\\,Q_H = 0{,}40 \\times 1000 = 400\\ \\text{J}$.',
              'Kalor yang dibuang: $Q_C = Q_H - W = 1000 - 400 = 600\\ \\text{J}$.'
            ],
            hasil: '$\\eta = 40\\%$, $W = 400\\ \\text{J}$, $Q_C = 600\\ \\text{J}$.'
          },
          {
            soal: 'Gas ideal menyerap kalor $800\\ \\text{J}$ sambil memuai pada tekanan tetap $2{,}0 \\times 10^5\\ \\text{Pa}$ dari $1{,}0 \\times 10^{-3}\\ \\text{m}^3$ menjadi $2{,}5 \\times 10^{-3}\\ \\text{m}^3$. Berapa perubahan energi dalamnya?',
            langkah: [
              'Proses isobarik, jadi usaha oleh gas $W = P\\,\\Delta V = 2{,}0 \\times 10^5 \\times 1{,}5 \\times 10^{-3} = 300\\ \\text{J}$ (positif karena memuai).',
              'Gas menerima kalor, jadi $Q = +800\\ \\text{J}$.',
              'Hukum I: $\\Delta U = Q - W = 800 - 300 = 500\\ \\text{J}$.'
            ],
            hasil: '$\\Delta U = +500\\ \\text{J}$, energi dalam gas bertambah.'
          }
        ],
        kesalahan: [
          'Memakai suhu Celsius pada rumus gas ideal, radiasi, atau Carnot. Di rumus-rumus itu suhu harus dalam Kelvin; hanya selisih suhu yang boleh tetap dalam Celsius.',
          'Mengira suhu naik selama zat melebur atau menguap. Selama perubahan fase suhu tetap; kalor dipakai untuk mengubah fase, dihitung dengan $Q = m\\,L$.',
          'Mencampur tanda usaha. Di bab ini $W$ adalah usaha OLEH gas. Saat gas dimampatkan, $W$ negatif; bila soal hanya memberi usaha pada gas, jangan lupa menambahkan tanda negatif.',
          'Mengira $\\Delta U = 0$ pada setiap proses yang suhunya berubah sedikit, atau mengira $Q = 0$ pada proses isotermal. Yang benar: isotermal berarti $\\Delta U = 0$, sedangkan adiabatik berarti $Q = 0$.',
          'Mengira usaha pada proses isokhorik tidak nol. Volume tetap berarti luas di bawah kurva nol, sehingga $W = 0$ dan seluruh kalor menjadi energi dalam.',
          'Menghitung usaha siklus dari satu garis saja. Usaha neto adalah luas yang dikelilingi lintasan tertutup, bukan luas di bawah satu bagian kurva.',
          'Memakai suhu Celsius pada efisiensi Carnot, atau mengira efisiensi dapat mencapai 100 persen. Efisiensi Carnot selalu kurang dari 1 kecuali $T_C = 0\\ \\text{K}$, yang tidak mungkin dicapai.',
          'Mengira pendingin bisa bekerja tanpa usaha dari luar. Kalor tidak mengalir sendiri dari dingin ke panas; pendingin membutuhkan usaha $W$, dan kalor yang dibuang ke ruangan sama dengan $Q_C + W$.'
        ],
        ringkasan: [
          'Suhu dalam rumus gas, radiasi, dan Carnot harus dalam Kelvin: $T = t + 273$. Kalor dihitung dengan $Q = m\\,c\\,\\Delta T$ atau $Q = m\\,L$ saat berubah fase, dan asas Black menyatakan $Q_{\\text{lepas}} = Q_{\\text{terima}}$.',
          'Kalor berpindah lewat konduksi ($H = kA\\Delta T/L$), konveksi (aliran zat), dan radiasi ($P = e\\sigma A T^4$).',
          'Gas ideal: $PV = nRT$. Usaha gas $W$ adalah luas di bawah kurva P-V; $W > 0$ saat memuai dan $W < 0$ saat dimampatkan.',
          'Hukum I: $\\Delta U = Q - W$ dengan $W$ usaha oleh gas dan $Q$ positif bila masuk. Isokhorik $W = 0$, isotermal $\\Delta U = 0$, adiabatik $Q = 0$.',
          'Pada proses adiabatik berlaku $PV^{\\gamma} =$ konstan dan $TV^{\\gamma-1} =$ konstan, dengan $\\gamma = 5/3$ untuk gas monoatomik.',
          'Efisiensi mesin $\\eta = W/Q_H$; mesin Carnot $\\eta = 1 - T_C/T_H$; pendingin Carnot $K = T_C/(T_H - T_C)$. Entropi total tidak pernah berkurang.'
        ],
        simulasi: {
          id: 'termodinamika-pv',
          judul: 'Diagram P-V proses gas ideal monoatomik',
          param: [
            { kunci: 'proses', label: 'Proses (1 isobarik, 2 isokhorik, 3 isotermal, 4 adiabatik)', min: 1, max: 4, nilai: 3, satuan: '', langkah: 1 },
            { kunci: 'n', label: 'Jumlah mol gas', min: 0.5, max: 5, nilai: 1, satuan: 'mol', langkah: 0.5 },
            { kunci: 'T1', label: 'Suhu awal', min: 200, max: 600, nilai: 300, satuan: 'K', langkah: 10 },
            { kunci: 'rv', label: 'Rasio volume akhir/awal (isokhorik: diabaikan, T2 = 2 T1)', min: 0.25, max: 4, nilai: 2, satuan: '', langkah: 0.25 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'td-p1',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Air bermassa $2{,}0\\ \\text{kg}$ dipanaskan dari $20\\ ^\\circ\\text{C}$ hingga $50\\ ^\\circ\\text{C}$. Kalor jenis air $4200\\ \\text{J/(kg K)}$. Berapa kalor yang diserap air?',
      pilihan: [],
      jawaban: 252000,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Kalor untuk menaikkan suhu dihitung dari massa, kalor jenis, dan kenaikan suhu.',
        'Kenaikan suhu $\\Delta T = 50 - 20$; selisih dalam Celsius sama dengan selisih dalam Kelvin.',
        'Gunakan $Q = m\\,c\\,\\Delta T$.'
      ],
      pembahasan: [
        'Diketahui $m = 2{,}0\\ \\text{kg}$, $c = 4200\\ \\text{J/(kg K)}$, $\\Delta T = 50 - 20 = 30\\ \\text{K}$.',
        '$Q = m\\,c\\,\\Delta T = 2{,}0 \\times 4200 \\times 30 = 252000\\ \\text{J}$.'
      ],
      tag: ['kalor jenis'],
      ragu: false
    },
    {
      id: 'td-p2',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Suhu sebuah ruangan adalah $27\\ ^\\circ\\text{C}$. Bila dinyatakan dalam kelvin (gunakan $T = t + 273$), suhu ruangan itu sama dengan ...',
      pilihan: [
        '$27\\ \\text{K}$',
        '$246\\ \\text{K}$',
        '$300\\ \\text{K}$',
        '$373\\ \\text{K}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Skala Kelvin dimulai dari nol mutlak, yaitu sekitar $-273\\ ^\\circ\\text{C}$.',
        'Untuk berpindah dari Celsius ke Kelvin, tambahkan 273.'
      ],
      pembahasan: [
        'Konversi ke kelvin: $T = t + 273$.',
        '$T = 27 + 273 = 300\\ \\text{K}$.'
      ],
      tag: ['skala suhu'],
      ragu: false
    },
    {
      id: 'td-p3',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Besaran yang menyatakan ukuran ketidakteraturan suatu sistem, dan yang total nilainya tidak pernah berkurang pada proses nyata, disebut ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['entropi'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Besaran ini muncul dalam pernyataan Hukum II Termodinamika.',
        'Satuannya $\\text{J/K}$ dan perubahannya pada suhu tetap adalah $Q/T$.'
      ],
      pembahasan: [
        'Ukuran ketidakteraturan sistem disebut entropi, dengan satuan J/K.',
        'Menurut Hukum II, entropi total sistem ditambah lingkungan tidak pernah berkurang pada proses nyata.'
      ],
      tag: ['entropi', 'Hukum II'],
      ragu: false
    },
    {
      id: 'td-p4',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Es bermassa $0{,}50\\ \\text{kg}$ pada $0\\ ^\\circ\\text{C}$ melebur seluruhnya menjadi air pada $0\\ ^\\circ\\text{C}$. Kalor lebur es $3{,}34 \\times 10^5\\ \\text{J/kg}$. Berapa kalor yang diperlukan?',
      pilihan: [],
      jawaban: 167000,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Suhu tidak berubah selama es melebur, jadi rumus kalor jenis tidak dipakai.',
        'Gunakan kalor laten: $Q = m\\,L$.'
      ],
      pembahasan: [
        'Diketahui $m = 0{,}50\\ \\text{kg}$ dan $L = 3{,}34 \\times 10^5\\ \\text{J/kg}$.',
        '$Q = m\\,L = 0{,}50 \\times 3{,}34 \\times 10^5 = 1{,}67 \\times 10^5\\ \\text{J}$.'
      ],
      tag: ['kalor laten'],
      ragu: false
    },
    {
      id: 'td-p5',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Proses gas yang berlangsung pada volume tetap disebut proses ... (tulis satu kata). Pada proses ini gas tidak melakukan usaha.',
      pilihan: [],
      jawaban: ['isokhorik', 'isokorik', 'isovolum', 'isometrik'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Awalan iso- berarti sama atau tetap.',
        'Proses tekanan tetap disebut isobarik, suhu tetap isotermal, dan volume tetap disebut ...'
      ],
      pembahasan: [
        'Proses pada volume tetap disebut isokhorik (isokorik).',
        'Karena $\\Delta V = 0$, usaha gas $W = 0$ dan hukum I menjadi $\\Delta U = Q$.'
      ],
      tag: ['isokhorik', 'proses gas'],
      ragu: false
    },

    /* ===================== MENENGAH ===================== */
    {
      id: 'td-m1',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebanyak $0{,}30\\ \\text{kg}$ air bersuhu $80\\ ^\\circ\\text{C}$ dituangkan ke dalam $0{,}60\\ \\text{kg}$ air bersuhu $20\\ ^\\circ\\text{C}$ dalam wadah terisolasi yang kapasitas kalornya diabaikan. Berapa suhu akhir campuran? (jawab dalam $^\\circ\\text{C}$)',
      pilihan: [],
      jawaban: 40,
      satuan: '°C',
      toleransi: 0.02,
      petunjuk: [
        'Air panas melepas kalor dan air dingin menerimanya.',
        'Asas Black: $Q_{\\text{lepas}} = Q_{\\text{terima}}$, dengan kalor jenis air yang sama pada kedua sisi.',
        'Suhu akhir $T_a$ berada di antara $20\\ ^\\circ\\text{C}$ dan $80\\ ^\\circ\\text{C}$.'
      ],
      pembahasan: [
        'Asas Black: $0{,}30\\,c\\,(80 - T_a) = 0{,}60\\,c\\,(T_a - 20)$; nilai $c$ saling meniadakan.',
        '$24 - 0{,}30\\,T_a = 0{,}60\\,T_a - 12$, sehingga $36 = 0{,}90\\,T_a$.',
        '$T_a = 40\\ ^\\circ\\text{C}$.'
      ],
      tag: ['asas Black'],
      ragu: false
    },
    {
      id: 'td-m2',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah bola logam berjari-jari $0{,}20\\ \\text{m}$ dengan emisivitas $e = 0{,}90$ bersuhu permukaan $400\\ \\text{K}$. Anggap luas permukaan bola $4\\pi r^2$ dan abaikan radiasi yang diterima dari lingkungan. Dengan $\\sigma = 5{,}67 \\times 10^{-8}\\ \\text{W/(m}^2\\text{K}^4)$, berapa daya radiasi yang dipancarkan bola?',
      pilihan: [],
      jawaban: 656.65,
      satuan: 'W',
      toleransi: 0.02,
      petunjuk: [
        'Hitung dulu luas permukaan bola dari jari-jarinya.',
        'Daya radiasi sebanding dengan pangkat empat suhu mutlak: $P = e\\,\\sigma\\,A\\,T^4$.',
        'Suhu sudah dalam kelvin, tidak perlu dikonversi.'
      ],
      pembahasan: [
        'Luas permukaan $A = 4\\pi r^2 = 4\\pi (0{,}20)^2 \\approx 0{,}5027\\ \\text{m}^2$.',
        '$T^4 = 400^4 = 2{,}56 \\times 10^{10}\\ \\text{K}^4$.',
        '$P = e\\,\\sigma\\,A\\,T^4 = 0{,}90 \\times 5{,}67 \\times 10^{-8} \\times 0{,}5027 \\times 2{,}56 \\times 10^{10} \\approx 657\\ \\text{W}$.'
      ],
      tag: ['radiasi'],
      ragu: false
    },
    {
      id: 'td-m3',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebanyak $2{,}0\\ \\text{mol}$ gas ideal bersuhu $300\\ \\text{K}$ berada dalam bejana bervolume $0{,}050\\ \\text{m}^3$. Dengan $R = 8{,}31\\ \\text{J/(mol K)}$, berapa tekanan gas dalam bejana?',
      pilihan: [],
      jawaban: 99720,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Hubungkan tekanan, volume, jumlah mol, dan suhu dengan persamaan keadaan gas ideal.',
        'Susun ulang $P V = n R T$ untuk $P$.'
      ],
      pembahasan: [
        'Persamaan keadaan: $P = \\dfrac{n R T}{V}$.',
        '$P = \\dfrac{2{,}0 \\times 8{,}31 \\times 300}{0{,}050} = 9{,}972 \\times 10^4\\ \\text{Pa}$, hampir sama dengan satu atmosfer.'
      ],
      tag: ['gas ideal'],
      ragu: false
    },
    {
      id: 'td-m4',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Gas dimampatkan sehingga lingkungan melakukan usaha $200\\ \\text{J}$ pada gas, sementara gas melepas kalor $50\\ \\text{J}$ ke lingkungan. Dengan hukum I $\\Delta U = Q - W$ ($W$ adalah usaha OLEH gas), perubahan energi dalam gas adalah ...',
      pilihan: [
        '$+150\\ \\text{J}$',
        '$-250\\ \\text{J}$',
        '$-150\\ \\text{J}$',
        '$+250\\ \\text{J}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tentukan tanda $Q$: gas melepas kalor, jadi negatif.',
        'Tentukan tanda $W$: usaha dilakukan PADA gas, sedangkan $W$ adalah usaha OLEH gas, jadi $W$ negatif.',
        'Substitusikan ke $\\Delta U = Q - W$ dengan hati-hati pada tanda minus ganda.'
      ],
      pembahasan: [
        'Gas melepas kalor: $Q = -50\\ \\text{J}$. Gas dimampatkan: $W = -200\\ \\text{J}$.',
        '$\\Delta U = Q - W = -50 - (-200) = +150\\ \\text{J}$.',
        'Energi dalam naik karena usaha yang diterima gas lebih besar daripada kalor yang dilepasnya.'
      ],
      tag: ['hukum I', 'konvensi tanda'],
      ragu: false
    },
    {
      id: 'td-m5',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebanyak $2{,}0\\ \\text{mol}$ gas ideal bersuhu $300\\ \\text{K}$ memuai secara isotermal sehingga volumenya menjadi dua kali semula. Dengan $R = 8{,}31\\ \\text{J/(mol K)}$ dan $\\ln 2 = 0{,}6931$, berapa usaha yang dilakukan gas?',
      pilihan: [],
      jawaban: 3456.03,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Suhu tetap, jadi tekanan berubah mengikuti $P = nRT/V$ dan usaha diperoleh dari integral.',
        'Hasil integralnya $W = n\\,R\\,T\\,\\ln(V_2/V_1)$.'
      ],
      pembahasan: [
        'Diketahui $n = 2{,}0\\ \\text{mol}$, $T = 300\\ \\text{K}$, $V_2/V_1 = 2$.',
        '$W = n R T \\ln(V_2/V_1) = 2{,}0 \\times 8{,}31 \\times 300 \\times 0{,}6931 \\approx 3456\\ \\text{J}$.'
      ],
      tag: ['isotermal', 'usaha gas'],
      ragu: false
    },

    /* ===================== LANJUT ===================== */
    {
      id: 'td-l1',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sepotong es bermassa $0{,}10\\ \\text{kg}$ pada $0\\ ^\\circ\\text{C}$ dimasukkan ke dalam $0{,}50\\ \\text{kg}$ air bersuhu $40\\ ^\\circ\\text{C}$ dalam wadah terisolasi yang kapasitas kalornya diabaikan. Kalor jenis air $4200\\ \\text{J/(kg K)}$ dan kalor lebur es $3{,}34 \\times 10^5\\ \\text{J/kg}$. Berapa suhu akhir setelah tercapai kesetimbangan? (jawab dalam $^\\circ\\text{C}$)',
      pilihan: [],
      jawaban: 20.079,
      satuan: '°C',
      toleransi: 0.02,
      petunjuk: [
        'Cek dulu apakah kalor dari air bisa melebur seluruh es: bandingkan kalor yang dilepas air saat turun ke $0\\ ^\\circ\\text{C}$ dengan kalor untuk melebur es.',
        'Bila es melebur seluruhnya, sisa kalor menghangatkan seluruh air (massa $0{,}60\\ \\text{kg}$) dari $0\\ ^\\circ\\text{C}$.',
        'Tuliskan $Q_{\\text{lepas}} = Q_{\\text{lebur}} + Q_{\\text{naik suhu air es}}$.'
      ],
      pembahasan: [
        'Kalor yang tersedia bila air turun ke $0\\ ^\\circ\\text{C}$: $0{,}50 \\times 4200 \\times 40 = 84000\\ \\text{J}$. Kalor melebur seluruh es: $0{,}10 \\times 3{,}34 \\times 10^5 = 33400\\ \\text{J}$. Karena $84000 > 33400$, seluruh es melebur.',
        'Asas Black dengan suhu akhir $T_a$: $0{,}50 \\times 4200\\,(40 - T_a) = 33400 + 0{,}10 \\times 4200\\,T_a$.',
        '$84000 - 2100\\,T_a = 33400 + 420\\,T_a$, sehingga $50600 = 2520\\,T_a$.',
        '$T_a \\approx 20{,}08\\ ^\\circ\\text{C}$.'
      ],
      tag: ['asas Black', 'kalor laten'],
      ragu: false
    },
    {
      id: 'td-l2',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pada diagram P-V (sumbu mendatar V, sumbu tegak P), sejumlah gas ideal menjalani siklus berbentuk persegi panjang dengan empat titik sudut: A ($V = 2{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$), B ($V = 2{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 3{,}0 \\times 10^5\\ \\text{Pa}$), C ($V = 5{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 3{,}0 \\times 10^5\\ \\text{Pa}$), dan D ($V = 5{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$). Siklus berjalan A ke B ke C ke D lalu kembali ke A (searah jarum jam). Berapa usaha neto yang dilakukan gas dalam satu siklus?',
      pilihan: [],
      jawaban: 600,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Usaha neto siklus sama dengan luas bidang yang dikelilingi lintasan pada diagram P-V.',
        'Siklus searah jarum jam menghasilkan usaha neto positif.',
        'Luas persegi panjang = (selisih tekanan) $\\times$ (selisih volume).'
      ],
      pembahasan: [
        'Gas memuai dari A-B-C pada tekanan tinggi: pada B ke C, $W = 3{,}0 \\times 10^5 \\times 3{,}0 \\times 10^{-3} = 900\\ \\text{J}$ (A ke B dan C ke D isokhorik, $W = 0$).',
        'Pada D ke A gas dimampatkan pada tekanan rendah: $W = -1{,}0 \\times 10^5 \\times 3{,}0 \\times 10^{-3} = -300\\ \\text{J}$.',
        '$W_{\\text{neto}} = 900 - 300 = 600\\ \\text{J}$, sama dengan luas persegi panjang $2{,}0 \\times 10^5 \\times 3{,}0 \\times 10^{-3}$.'
      ],
      tag: ['siklus', 'usaha gas'],
      ragu: false
    },
    {
      id: 'td-l3',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pada diagram P-V (sumbu mendatar V, sumbu tegak P), gas ideal menjalani siklus berbentuk segitiga dengan titik A ($V = 1{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$), B ($V = 1{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 4{,}0 \\times 10^5\\ \\text{Pa}$), dan C ($V = 3{,}0 \\times 10^{-3}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$). Lintasannya: A ke B garis lurus vertikal ke atas, B ke C garis lurus miring ke kanan-bawah, C ke A garis lurus mendatar ke kiri. Berapa kalor neto yang diserap gas dalam satu siklus lengkap?',
      pilihan: [],
      jawaban: 300,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Setelah satu siklus lengkap, gas kembali ke keadaan awal sehingga $\\Delta U = 0$.',
        'Dari hukum I, $Q_{\\text{neto}} = W_{\\text{neto}}$. Cari $W_{\\text{neto}}$ dari luas segitiga.',
        'Arah A, B, C, A adalah searah jarum jam sehingga usaha netonya positif.'
      ],
      pembahasan: [
        'Satu siklus: $\\Delta U = 0$, jadi $Q_{\\text{neto}} = W_{\\text{neto}}$.',
        'Alas segitiga (selisih volume): $3{,}0 \\times 10^{-3} - 1{,}0 \\times 10^{-3} = 2{,}0 \\times 10^{-3}\\ \\text{m}^3$; tinggi (selisih tekanan): $4{,}0 \\times 10^5 - 1{,}0 \\times 10^5 = 3{,}0 \\times 10^5\\ \\text{Pa}$.',
        '$W_{\\text{neto}} = \\tfrac{1}{2} \\times 2{,}0 \\times 10^{-3} \\times 3{,}0 \\times 10^5 = 300\\ \\text{J}$, jadi $Q_{\\text{neto}} = 300\\ \\text{J}$.'
      ],
      tag: ['siklus', 'hukum I'],
      ragu: false
    },
    {
      id: 'td-l4',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Dua batang logam dengan panjang dan luas penampang sama disambung ujung ke ujung. Batang pertama memiliki konduktivitas termal $2k$ dan batang kedua $k$. Ujung bebas batang pertama dijaga pada $100\\ ^\\circ\\text{C}$ dan ujung bebas batang kedua pada $0\\ ^\\circ\\text{C}$. Setelah keadaan tunak (suhu tidak berubah lagi) dan tanpa kehilangan kalor ke samping, suhu pada sambungan adalah ...',
      pilihan: [
        '$50\\ ^\\circ\\text{C}$',
        '$33{,}3\\ ^\\circ\\text{C}$',
        '$66{,}7\\ ^\\circ\\text{C}$',
        '$75\\ ^\\circ\\text{C}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pada keadaan tunak, laju kalor $H$ yang lewat kedua batang harus sama.',
        'Tulis $H = k A \\Delta T / L$ untuk tiap batang dengan $T$ sebagai suhu sambungan.',
        'Batang yang konduktivitasnya lebih besar mengalami penurunan suhu yang lebih kecil.'
      ],
      pembahasan: [
        'Kesamaan laju kalor: $\\dfrac{2k A (100 - T)}{L} = \\dfrac{k A (T - 0)}{L}$.',
        'Sederhanakan: $2(100 - T) = T$, sehingga $200 = 3T$.',
        '$T \\approx 66{,}7\\ ^\\circ\\text{C}$. Batang pertama (penghantar baik) hanya turun $33{,}3\\ ^\\circ\\text{C}$, batang kedua turun $66{,}7\\ ^\\circ\\text{C}$.'
      ],
      tag: ['konduksi', 'batang bersambung'],
      ragu: false
    },
    {
      id: 'td-l5',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pemanas listrik berdaya $1500\\ \\text{W}$ memanaskan $2{,}0\\ \\text{kg}$ air dalam sebuah wadah dari $25\\ ^\\circ\\text{C}$ hingga $75\\ ^\\circ\\text{C}$. Kapasitas kalor wadah $400\\ \\text{J/K}$, kalor jenis air $4200\\ \\text{J/(kg K)}$, dan sepanjang pemanasan kalor hilang ke lingkungan dengan laju tetap $150\\ \\text{W}$. Berapa waktu pemanasan yang diperlukan?',
      pilihan: [],
      jawaban: 325.93,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Hitung kalor total yang harus diserap air dan wadah.',
        'Daya efektif yang menaikkan suhu adalah daya pemanas dikurangi laju kehilangan kalor.',
        'Waktu = kalor yang diperlukan dibagi daya efektif.'
      ],
      pembahasan: [
        'Kenaikan suhu $\\Delta T = 50\\ \\text{K}$. Kalor yang diperlukan: $Q = (2{,}0 \\times 4200 + 400) \\times 50 = 440000\\ \\text{J}$.',
        'Daya efektif: $1500 - 150 = 1350\\ \\text{W}$.',
        '$t = \\dfrac{Q}{P_{\\text{efektif}}} = \\dfrac{440000}{1350} \\approx 326\\ \\text{s}$.'
      ],
      tag: ['kalor jenis', 'kehilangan kalor'],
      ragu: false
    },

    /* ===================== EXPERT ===================== */
    {
      id: 'td-e1',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebanyak $2{,}0\\ \\text{mol}$ gas ideal monoatomik ($\\gamma = 5/3$ dan $\\Delta U = \\tfrac{3}{2} n R \\Delta T$) bersuhu awal $400\\ \\text{K}$ dimampatkan secara adiabatik sampai volumenya menjadi $\\tfrac{1}{8}$ volume awal. Dengan $R = 8{,}31\\ \\text{J/(mol K)}$, berapa besar usaha yang dilakukan lingkungan pada gas?',
      pilihan: [],
      jawaban: 29916,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Pada proses adiabatik berlaku $T V^{\\gamma-1} = \\text{konstan}$; carilah suhu akhir dahulu.',
        'Karena $Q = 0$, hukum I memberi $W = -\\Delta U$ dengan $W$ usaha oleh gas.',
        'Usaha yang dilakukan PADA gas adalah $-W$, bernilai positif karena gas dimampatkan.'
      ],
      pembahasan: [
        'Suhu akhir: $T_2 = T_1 (V_1/V_2)^{\\gamma - 1} = 400 \\times 8^{2/3} = 400 \\times 4 = 1600\\ \\text{K}$.',
        'Perubahan energi dalam: $\\Delta U = \\tfrac{3}{2}\\,n R\\,\\Delta T = 1{,}5 \\times 2{,}0 \\times 8{,}31 \\times 1200 = 29916\\ \\text{J}$.',
        'Adiabatik, $Q = 0$, maka $W = -\\Delta U = -29916\\ \\text{J}$ (negatif karena gas dimampatkan).',
        'Usaha yang dilakukan lingkungan pada gas $= 29916\\ \\text{J}$, sekitar $2{,}99 \\times 10^4\\ \\text{J}$.'
      ],
      tag: ['adiabatik', 'hukum I'],
      ragu: false
    },
    {
      id: 'td-e2',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Gas ideal monoatomik ($\\Delta U = \\tfrac{3}{2} n R \\Delta T = \\tfrac{3}{2}\\,\\Delta(PV)$) menjalani siklus pada diagram P-V (sumbu mendatar V, sumbu tegak P) dengan empat titik: A ($V = 1{,}0 \\times 10^{-2}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$), B ($V = 1{,}0 \\times 10^{-2}\\ \\text{m}^3$, $P = 2{,}0 \\times 10^5\\ \\text{Pa}$), C ($V = 3{,}0 \\times 10^{-2}\\ \\text{m}^3$, $P = 2{,}0 \\times 10^5\\ \\text{Pa}$), dan D ($V = 3{,}0 \\times 10^{-2}\\ \\text{m}^3$, $P = 1{,}0 \\times 10^5\\ \\text{Pa}$). Siklus berjalan A ke B (isokhorik), B ke C (isobarik), C ke D (isokhorik), D ke A (isobarik). Gas menyerap kalor pada A ke B dan B ke C, dan melepas kalor pada C ke D dan D ke A. Berapa efisiensi siklus ini sebagai mesin kalor? (jawab dalam persen, tanpa satuan)',
      pilihan: [],
      jawaban: 17.391,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Efisiensi $\\eta = W_{\\text{neto}} / Q_H$, dengan $Q_H$ jumlah kalor yang DISERAP gas.',
        'Hitung $Q$ pada A ke B dan B ke C dengan $Q = \\Delta U + W$; untuk gas monoatomik $\\Delta U = \\tfrac{3}{2}\\,\\Delta(PV)$.',
        'Usaha neto sama dengan luas persegi panjang siklus.'
      ],
      pembahasan: [
        'A ke B (isokhorik, $W = 0$): $\\Delta U = 1{,}5 \\times (2{,}0 \\times 10^5 - 1{,}0 \\times 10^5) \\times 1{,}0 \\times 10^{-2} = 1500\\ \\text{J}$, jadi $Q_{AB} = 1500\\ \\text{J}$.',
        'B ke C (isobarik): $\\Delta U = 1{,}5 \\times 2{,}0 \\times 10^5 \\times 2{,}0 \\times 10^{-2} = 6000\\ \\text{J}$ dan $W = 2{,}0 \\times 10^5 \\times 2{,}0 \\times 10^{-2} = 4000\\ \\text{J}$, jadi $Q_{BC} = 10000\\ \\text{J}$.',
        '$Q_H = 1500 + 10000 = 11500\\ \\text{J}$. Usaha neto $= 1{,}0 \\times 10^5 \\times 2{,}0 \\times 10^{-2} = 2000\\ \\text{J}$.',
        '$\\eta = 2000 / 11500 \\approx 0{,}174$, yaitu sekitar $17{,}4\\%$.'
      ],
      tag: ['efisiensi', 'siklus'],
      ragu: false
    },
    {
      id: 'td-e3',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah mesin Carnot bekerja antara reservoir panas dan reservoir dingin bersuhu $300\\ \\text{K}$, dengan efisiensi $50\\%$. Agar efisiensinya naik menjadi $60\\%$ dengan suhu reservoir dingin dibuat tetap, suhu reservoir panas harus dinaikkan sebesar berapa kelvin?',
      pilihan: [],
      jawaban: 150,
      satuan: 'K',
      toleransi: 0.02,
      petunjuk: [
        'Dari $\\eta = 1 - T_C/T_H$ cari $T_H$ awal untuk efisiensi $50\\%$.',
        'Cari $T_H$ baru untuk efisiensi $60\\%$ dengan $T_C = 300\\ \\text{K}$.',
        'Yang ditanyakan adalah selisih kedua suhu panas tersebut.'
      ],
      pembahasan: [
        'Awal: $0{,}50 = 1 - 300/T_{H1}$, sehingga $T_{H1} = 300/0{,}50 = 600\\ \\text{K}$.',
        'Akhir: $0{,}60 = 1 - 300/T_{H2}$, sehingga $T_{H2} = 300/0{,}40 = 750\\ \\text{K}$.',
        'Kenaikan suhu reservoir panas: $750 - 600 = 150\\ \\text{K}$.'
      ],
      tag: ['mesin Carnot'],
      ragu: false
    },
    {
      id: 'td-e4',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah lemari es ideal (pendingin Carnot) menjaga bagian dalamnya tetap $260\\ \\text{K}$ di dapur bersuhu $300\\ \\text{K}$. Kalor sebesar $840\\ \\text{J}$ bocor masuk ke dalam lemari tiap detik, sehingga lemari harus mengeluarkan kalor sebesar itu tiap detik agar suhunya tetap. Berapa daya listrik minimum yang diperlukan lemari es?',
      pilihan: [],
      jawaban: 129.23,
      satuan: 'W',
      toleransi: 0.02,
      petunjuk: [
        'Hitung koefisien kinerja pendingin Carnot: $K = T_C/(T_H - T_C)$.',
        'Koefisien kinerja juga sama dengan $Q_C/W$.',
        'Daya adalah usaha per detik: bagi kalor yang dikeluarkan per detik dengan $K$.'
      ],
      pembahasan: [
        'Koefisien kinerja: $K = \\dfrac{T_C}{T_H - T_C} = \\dfrac{260}{300 - 260} = 6{,}5$.',
        'Tiap detik, $Q_C = 840\\ \\text{J}$ sehingga usaha tiap detik $W = Q_C / K = 840 / 6{,}5 \\approx 129{,}2\\ \\text{J}$.',
        'Daya minimum $P = W/t \\approx 129\\ \\text{W}$.'
      ],
      tag: ['pendingin Carnot', 'koefisien kinerja'],
      ragu: false
    },
    {
      id: 'td-e5',
      bab: 'termodinamika',
      subbab: 'termodinamika',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Es bermassa $0{,}200\\ \\text{kg}$ pada $273\\ \\text{K}$ melebur seluruhnya menjadi air pada $273\\ \\text{K}$ karena menyerap kalor dari ruangan yang bersuhu tetap $300\\ \\text{K}$. Kalor lebur es $3{,}34 \\times 10^5\\ \\text{J/kg}$. Perubahan entropi TOTAL (es-air ditambah ruangan) adalah ...',
      pilihan: [
        '$+245\\ \\text{J/K}$',
        '$+467\\ \\text{J/K}$',
        '$-223\\ \\text{J/K}$',
        '$+22{,}0\\ \\text{J/K}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Kalor yang diserap es sama dengan kalor yang dilepas ruangan: $Q = m L$.',
        'Hitung $\\Delta S = Q/T$ untuk es dengan $T = 273\\ \\text{K}$ (positif) dan untuk ruangan dengan $T = 300\\ \\text{K}$ (negatif, karena melepas kalor).',
        'Jumlahkan kedua perubahan entropi; hasilnya harus positif.'
      ],
      pembahasan: [
        'Kalor yang diserap es: $Q = 0{,}200 \\times 3{,}34 \\times 10^5 = 66800\\ \\text{J}$.',
        'Entropi es bertambah: $\\Delta S_{\\text{es}} = 66800/273 \\approx +244{,}7\\ \\text{J/K}$. Ruangan melepas kalor: $\\Delta S_{\\text{ruang}} = -66800/300 \\approx -222{,}7\\ \\text{J/K}$.',
        '$\\Delta S_{\\text{total}} \\approx +22{,}0\\ \\text{J/K}$. Hasil positif sesuai Hukum II: proses spontan menambah entropi total.'
      ],
      tag: ['entropi', 'peleburan'],
      ragu: false
    }
  ]
};
