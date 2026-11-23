window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['relativitas'] = {
  id: 'relativitas',
  judul: 'Teori Relativitas Khusus',
  subbab: [
    {
      id: 'relativitas',
      judul: 'Teori Relativitas Khusus',
      materi: {
        gambaranBesar: 'Bayangkan kamu duduk di kereta yang melaju mulus dan melempar bola ke depan. Menurut temanmu di peron, kecepatan bola adalah kecepatan kereta ditambah kecepatan lemparanmu. Tetapi untuk cahaya, aturan penjumlahan sederhana itu gagal: semua pengamat mengukur laju yang sama. Konsekuensinya mengejutkan, yaitu waktu dan panjang ternyata bergantung pada siapa yang mengukur, dan massa ternyata adalah bentuk energi.',
        konsep: [
          {
            judul: 'Kerangka inersial dan dua postulat Einstein',
            teks: 'Kerangka acuan inersial adalah kerangka yang tidak dipercepat, yaitu benda bebas di dalamnya bergerak lurus beraturan. Dalam relativitas Galileo, kecepatan dari dua kerangka dijumlahkan begitu saja, dan hukum mekanika sama di semua kerangka inersial. Einstein menambahkan dua postulat. Postulat pertama: hukum fisika berlaku sama di semua kerangka inersial. Postulat kedua: laju cahaya dalam vakum bernilai sama untuk semua pengamat inersial, apa pun gerak sumber atau pengamatnya. Di bab ini dipakai $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$.',
            rumus: [
              {
                latex: '\\beta = \\frac{v}{c}',
                simbol: [
                  { s: '\\beta', arti: 'laju sebagai pecahan dari laju cahaya', satuan: 'tanpa satuan' },
                  { s: 'v', arti: 'laju relatif antar kerangka', satuan: 'm/s' },
                  { s: 'c', arti: 'laju cahaya dalam vakum', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Faktor Lorentz',
            teks: 'Faktor Lorentz $\\gamma$ mengukur seberapa besar efek relativistik. Untuk laju sehari-hari nilainya praktis 1, sehingga efeknya tidak terasa. Nilainya naik tajam mendekati tak hingga ketika $v$ mendekati $c$. Beberapa nilai yang rapi: $\\beta = 0{,}6$ memberi $\\gamma = 1{,}25$, dan $\\beta = 0{,}8$ memberi $\\gamma = 5/3$.',
            rumus: [
              {
                latex: '\\gamma = \\frac{1}{\\sqrt{1 - v^2/c^2}}',
                simbol: [
                  { s: '\\gamma', arti: 'faktor Lorentz', satuan: 'tanpa satuan' },
                  { s: 'v', arti: 'laju relatif antar kerangka', satuan: 'm/s' },
                  { s: 'c', arti: 'laju cahaya dalam vakum', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Dilatasi waktu',
            teks: 'Waktu proper adalah selang waktu antara dua peristiwa yang terjadi di tempat yang sama menurut satu pengamat, jadi diukur oleh satu jam saja. Pengamat yang melihat jam itu bergerak mengukur selang waktu yang lebih panjang. Itulah dilatasi waktu: jam yang bergerak berjalan lebih lambat. Inilah alasan muon dari atmosfer atas, yang umurnya hanya sekitar mikrodetik, masih bisa mencapai permukaan Bumi.',
            rumus: [
              {
                latex: '\\Delta t = \\gamma\\,\\Delta t_0',
                simbol: [
                  { s: '\\Delta t', arti: 'selang waktu yang diukur pengamat yang melihat jam bergerak', satuan: 's' },
                  { s: '\\Delta t_0', arti: 'waktu proper (diukur oleh jam yang ikut bergerak)', satuan: 's' },
                  { s: '\\gamma', arti: 'faktor Lorentz', satuan: 'tanpa satuan' }
                ]
              }
            ]
          },
          {
            judul: 'Kontraksi panjang dan simultanitas',
            teks: 'Panjang proper adalah panjang benda yang diukur di kerangka tempat benda itu diam. Pengamat yang melihat benda bergerak sejajar arah geraknya mengukur panjang yang lebih pendek. Panjang yang tegak lurus arah gerak tidak berubah. Secara kualitatif, dua peristiwa yang simultan (serempak) di satu kerangka dan terjadi di tempat berbeda umumnya tidak simultan di kerangka lain yang bergerak. Simultanitas tidak mutlak.',
            rumus: [
              {
                latex: 'L = \\frac{L_0}{\\gamma}',
                simbol: [
                  { s: 'L', arti: 'panjang yang diukur pengamat yang melihat benda bergerak', satuan: 'm' },
                  { s: 'L_0', arti: 'panjang proper', satuan: 'm' },
                  { s: '\\gamma', arti: 'faktor Lorentz', satuan: 'tanpa satuan' }
                ]
              }
            ]
          },
          {
            judul: 'Transformasi Lorentz dan penjumlahan kecepatan',
            teks: 'Kerangka $S\'$ bergerak dengan laju $v$ searah sumbu $x$ terhadap kerangka $S$. Koordinat peristiwa di $S\'$ dihitung dari koordinat di $S$ dengan transformasi Lorentz. Selang ruang-waktu $\\Delta s^2 = (c\\,\\Delta t)^2 - \\Delta x^2$ bernilai sama di semua kerangka inersial (invarian). Bila benda bergerak dengan laju $u$ di kerangka yang bergerak $v$, laju terhadap kerangka diam diberikan rumus penjumlahan relativistik, dan hasilnya tidak pernah melebihi $c$.',
            rumus: [
              {
                latex: 'x\' = \\gamma\\,(x - v\\,t)',
                simbol: [
                  { s: 'x\'', arti: 'posisi di kerangka S\'', satuan: 'm' },
                  { s: 'x', arti: 'posisi di kerangka S', satuan: 'm' },
                  { s: 'v', arti: 'laju S\' terhadap S', satuan: 'm/s' },
                  { s: 't', arti: 'waktu di kerangka S', satuan: 's' },
                  { s: '\\gamma', arti: 'faktor Lorentz', satuan: 'tanpa satuan' }
                ]
              },
              {
                latex: 't\' = \\gamma\\left(t - \\frac{v\\,x}{c^2}\\right)',
                simbol: [
                  { s: 't\'', arti: 'waktu di kerangka S\'', satuan: 's' },
                  { s: 't', arti: 'waktu di kerangka S', satuan: 's' },
                  { s: 'x', arti: 'posisi di kerangka S', satuan: 'm' },
                  { s: 'v', arti: 'laju S\' terhadap S', satuan: 'm/s' },
                  { s: 'c', arti: 'laju cahaya', satuan: 'm/s' }
                ]
              },
              {
                latex: 'u = \\frac{u\' + v}{1 + u\'\\,v/c^2}',
                simbol: [
                  { s: 'u', arti: 'laju benda terhadap kerangka diam S', satuan: 'm/s' },
                  { s: 'u\'', arti: 'laju benda terhadap kerangka bergerak S\'', satuan: 'm/s' },
                  { s: 'v', arti: 'laju S\' terhadap S', satuan: 'm/s' },
                  { s: 'c', arti: 'laju cahaya', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Momentum dan energi relativistik',
            teks: 'Agar hukum kekekalan momentum dan energi tetap berlaku di semua kerangka inersial, rumus klasik harus diganti. Energi diam $E_0 = m c^2$ adalah energi benda yang diam. Energi total $E = \\gamma m c^2$, dan energi kinetik adalah selisih energi total dengan energi diam. Untuk laju kecil, $K$ kembali menjadi $\\tfrac{1}{2} m v^2$. Dalam fisika partikel, energi sering dinyatakan dalam elektronvolt dengan $1\\ \\text{eV} = 1{,}6 \\times 10^{-19}\\ \\text{J}$. Energi diam elektron (massa $9{,}11 \\times 10^{-31}\\ \\text{kg}$) adalah $0{,}511\\ \\text{MeV}$ dan energi diam proton adalah $938\\ \\text{MeV}$.',
            rumus: [
              {
                latex: 'p = \\gamma\\,m\\,v',
                simbol: [
                  { s: 'p', arti: 'momentum relativistik', satuan: 'kg m/s' },
                  { s: 'm', arti: 'massa diam', satuan: 'kg' },
                  { s: 'v', arti: 'laju benda', satuan: 'm/s' }
                ]
              },
              {
                latex: 'E = \\gamma\\,m\\,c^2 \\qquad K = (\\gamma - 1)\\,m\\,c^2',
                simbol: [
                  { s: 'E', arti: 'energi total', satuan: 'J' },
                  { s: 'K', arti: 'energi kinetik', satuan: 'J' },
                  { s: 'm', arti: 'massa diam', satuan: 'kg' },
                  { s: 'c', arti: 'laju cahaya', satuan: 'm/s' }
                ]
              },
              {
                latex: 'E^2 = (p\\,c)^2 + (m\\,c^2)^2',
                simbol: [
                  { s: 'E', arti: 'energi total', satuan: 'J' },
                  { s: 'p', arti: 'momentum', satuan: 'kg m/s' },
                  { s: 'm', arti: 'massa diam', satuan: 'kg' },
                  { s: 'c', arti: 'laju cahaya', satuan: 'm/s' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebuah pesawat melaju dengan $v = 0{,}8\\,c$. Menurut penumpang, perjalanan berlangsung $3{,}0\\ \\text{s}$. Berapa lama perjalanan itu menurut pengamat di Bumi?',
            langkah: [
              'Waktu di pesawat adalah waktu proper karena diukur satu jam di tempat yang sama: $\\Delta t_0 = 3{,}0\\ \\text{s}$.',
              'Faktor Lorentz: $\\gamma = 1/\\sqrt{1 - 0{,}8^2} = 1/0{,}6 = 5/3$.',
              '$\\Delta t = \\gamma\\,\\Delta t_0 = \\tfrac{5}{3} \\times 3{,}0 = 5{,}0\\ \\text{s}$.'
            ],
            hasil: 'Pengamat di Bumi mengukur $5{,}0\\ \\text{s}$, lebih lama dari waktu proper.'
          },
          {
            soal: 'Sebuah tongkat berpanjang proper $50\\ \\text{m}$ melaju sejajar panjangnya dengan $v = 0{,}6\\,c$ terhadap pengamat. Berapa panjang yang diukur pengamat?',
            langkah: [
              'Panjang proper adalah panjang di kerangka tongkat diam: $L_0 = 50\\ \\text{m}$.',
              'Untuk $\\beta = 0{,}6$ diperoleh $\\gamma = 1/\\sqrt{1 - 0{,}36} = 1{,}25$.',
              '$L = L_0/\\gamma = 50/1{,}25 = 40\\ \\text{m}$.'
            ],
            hasil: 'Panjang yang terukur adalah $40\\ \\text{m}$.'
          },
          {
            soal: 'Elektron (energi diam $0{,}511\\ \\text{MeV}$) bergerak dengan $v = 0{,}6\\,c$. Hitung energi total dan energi kinetiknya.',
            langkah: [
              'Untuk $\\beta = 0{,}6$, $\\gamma = 1{,}25$.',
              'Energi total: $E = \\gamma\\,E_0 = 1{,}25 \\times 0{,}511 = 0{,}639\\ \\text{MeV}$.',
              'Energi kinetik: $K = E - E_0 = 0{,}639 - 0{,}511 = 0{,}128\\ \\text{MeV}$.'
            ],
            hasil: '$E \\approx 0{,}639\\ \\text{MeV}$ dan $K \\approx 0{,}128\\ \\text{MeV}$.'
          }
        ],
        kesalahan: [
          'Mengira jam yang bergerak benar-benar rusak atau lambat secara mekanis. Yang berubah adalah pengukuran waktu antar kerangka, dan jam itu sendiri bekerja normal bagi pemiliknya.',
          'Salah memakai waktu proper: waktu proper selalu diukur oleh SATU jam yang berada di tempat kedua peristiwa. Pengamat lain mengukur waktu yang lebih panjang.',
          'Menerapkan kontraksi panjang pada arah tegak lurus gerak. Kontraksi hanya terjadi sejajar arah gerak.',
          'Menjumlahkan kecepatan dengan rumus Galileo untuk laju mendekati $c$. Hasilnya bisa melebihi $c$, padahal tidak boleh.',
          'Menganggap massa benda bertambah dan $E_0 = m c^2$ berubah. Massa diam $m$ tetap, yang bertambah adalah energi dan momentum.',
          'Memakai $K = \\tfrac{1}{2} m v^2$ untuk laju yang besar. Rumus klasik meremehkan energi kinetik ketika $v$ mendekati $c$.',
          'Mengira paradoks kembar simetris. Kembar yang berbalik arah mengalami percepatan sehingga keduanya tidak setara, dan kembar yang bepergian lebih muda.'
        ],
        ringkasan: [
          'Postulat Einstein: hukum fisika sama di semua kerangka inersial, dan laju cahaya $c$ sama bagi semua pengamat.',
          'Faktor Lorentz $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ selalu $\\geq 1$ dan membesar tajam ketika $v \\to c$.',
          'Dilatasi waktu $\\Delta t = \\gamma\\,\\Delta t_0$ dan kontraksi panjang $L = L_0/\\gamma$, dengan $\\Delta t_0$ dan $L_0$ diukur di kerangka tempat benda atau jam diam.',
          'Transformasi Lorentz menghubungkan koordinat antar kerangka, dan selang ruang-waktu $(c\\,\\Delta t)^2 - \\Delta x^2$ bersifat invarian.',
          'Penjumlahan relativistik $u = (u\' + v)/(1 + u\'v/c^2)$ tidak pernah menghasilkan laju di atas $c$.',
          'Energi total $E = \\gamma m c^2$, $K = (\\gamma - 1)m c^2$, dan $E^2 = (p c)^2 + (m c^2)^2$. Massa dan energi ekivalen.'
        ],
        simulasi: {
          id: 'relativitas-dilatasi',
          judul: 'Dilatasi waktu dan kontraksi panjang',
          param: [
            { kunci: 'beta', label: 'Laju (pecahan dari c)', min: 0, max: 0.99, nilai: 0.8, satuan: 'c', langkah: 0.01 },
            { kunci: 'tp', label: 'Waktu proper', min: 1, max: 20, nilai: 10, satuan: 'tahun', langkah: 1 },
            { kunci: 'Lp', label: 'Panjang proper', min: 10, max: 200, nilai: 100, satuan: 'm', langkah: 5 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'rel-p1',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah pesawat angkasa melaju dengan laju $0{,}6\\,c$ relatif terhadap Bumi. Hitung faktor Lorentz $\\gamma$ pesawat tersebut (tanpa satuan).',
      pilihan: [],
      jawaban: 1.25,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Faktor Lorentz hanya bergantung pada perbandingan $v/c$.',
        'Gunakan $\\gamma = 1/\\sqrt{1 - \\beta^2}$ dengan $\\beta = 0{,}6$.'
      ],
      pembahasan: [
        'Diketahui $\\beta = v/c = 0{,}6$.',
        '$\\gamma = 1/\\sqrt{1 - 0{,}36} = 1/\\sqrt{0{,}64} = 1/0{,}8 = 1{,}25$.'
      ],
      tag: ['faktor Lorentz'],
      ragu: false
    },
    {
      id: 'rel-p2',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Manakah pernyataan berikut yang merupakan salah satu postulat relativitas khusus Einstein?',
      pilihan: [
        'Laju cahaya dalam vakum bergantung pada laju sumber cahaya.',
        'Ruang dan waktu bersifat mutlak dan sama bagi semua pengamat.',
        'Laju cahaya dalam vakum bernilai sama bagi semua pengamat inersial.',
        'Hukum fisika hanya berlaku di kerangka yang diam terhadap eter.'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ada dua postulat: satu tentang hukum fisika, satu tentang cahaya.',
        'Pernyataan yang benar tidak membedakan pengamat berdasarkan geraknya.'
      ],
      pembahasan: [
        'Postulat kedua Einstein menyatakan bahwa laju cahaya dalam vakum sama bagi semua pengamat inersial, tidak bergantung pada gerak sumber maupun pengamat.',
        'Pilihan lain bertentangan: ruang dan waktu mutlak adalah pandangan Newton, dan eter ditolak oleh postulat pertama (semua kerangka inersial setara).'
      ],
      tag: ['postulat Einstein'],
      ragu: false
    },
    {
      id: 'rel-p3',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Seorang astronaut menempuh perjalanan dengan laju $0{,}8\\,c$ terhadap Bumi. Menurut jam di pesawatnya, perjalanan berlangsung $12$ tahun. Berapa lama perjalanan itu menurut pengamat di Bumi? Jawab dalam tahun.',
      pilihan: [],
      jawaban: 20,
      satuan: 'tahun',
      toleransi: 0.02,
      petunjuk: [
        'Jam di pesawat mengukur waktu proper karena kedua peristiwa (berangkat dan tiba) terjadi di tempat yang sama bagi astronaut.',
        'Gunakan $\\Delta t = \\gamma\\,\\Delta t_0$, dengan $\\gamma = 5/3$ untuk $\\beta = 0{,}8$.'
      ],
      pembahasan: [
        'Diketahui $\\Delta t_0 = 12$ tahun dan $\\beta = 0{,}8$, sehingga $\\gamma = 1/\\sqrt{1 - 0{,}64} = 5/3$.',
        '$\\Delta t = \\gamma\\,\\Delta t_0 = \\tfrac{5}{3} \\times 12 = 20$ tahun.'
      ],
      tag: ['dilatasi waktu'],
      ragu: false
    },
    {
      id: 'rel-p4',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Selang waktu antara dua peristiwa yang terjadi di tempat yang sama menurut seorang pengamat (diukur oleh satu jam saja) disebut waktu apa? Jawab dengan satu istilah.',
      pilihan: [],
      jawaban: ['proper', 'wajar'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Waktu ini adalah selang waktu yang paling pendek di antara semua pengamat.',
        'Istilah ini juga dipakai untuk panjang yang diukur di kerangka tempat benda diam.'
      ],
      pembahasan: [
        'Selang waktu yang diukur oleh satu jam yang berada di tempat kedua peristiwa disebut waktu proper (waktu wajar), dilambangkan $\\Delta t_0$.',
        'Pengamat lain yang melihat jam itu bergerak mengukur $\\Delta t = \\gamma\\,\\Delta t_0$, yang lebih panjang.'
      ],
      tag: ['waktu proper'],
      ragu: false
    },
    {
      id: 'rel-p5',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Muon terbentuk di atmosfer atas dan bergerak mendekati laju cahaya. Umur rata-ratanya sekitar $2\\ \\mu\\text{s}$ menurut jamnya sendiri, yang secara klasik hanya cukup untuk menempuh sekitar $600\\ \\text{m}$. Namun banyak muon tiba di permukaan Bumi. Penjelasan yang tepat menurut pengamat di Bumi adalah ...',
      pilihan: [
        'jam muon berjalan lebih lambat sehingga umurnya yang teramati menjadi lebih panjang (dilatasi waktu)',
        'muon bergerak lebih cepat daripada cahaya sehingga tiba lebih dulu',
        'massa muon bertambah sehingga ia meluruh lebih lambat karena lebih berat',
        'gravitasi Bumi memperlambat peluruhan muon sehingga umurnya lebih panjang'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tidak ada benda bermassa yang dapat melampaui laju cahaya.',
        'Tanyakan: jam siapa yang bergerak terhadap pengamat di Bumi?'
      ],
      pembahasan: [
        'Bagi pengamat di Bumi, jam muon bergerak dengan laju mendekati $c$, sehingga berjalan lebih lambat.',
        'Umur muon yang teramati menjadi $\\Delta t = \\gamma\\,\\Delta t_0$, jauh lebih panjang dari $2\\ \\mu\\text{s}$, sehingga jarak tempuhnya cukup untuk mencapai permukaan Bumi.'
      ],
      tag: ['dilatasi waktu', 'muon'],
      ragu: false
    },
    /* ===================== MENENGAH ===================== */
    {
      id: 'rel-m1',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah landasan pacu antariksa berpanjang proper $100\\ \\text{m}$ (diukur di kerangka landasan). Sebuah pesawat melintas sejajar landasan dengan laju $0{,}6\\,c$. Berapa panjang landasan menurut pilot pesawat? Jawab dalam meter.',
      pilihan: [],
      jawaban: 80,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Panjang proper diukur di kerangka tempat benda diam, yaitu kerangka landasan.',
        'Pilot melihat landasan bergerak, sehingga $L = L_0/\\gamma$.'
      ],
      pembahasan: [
        'Diketahui $L_0 = 100\\ \\text{m}$ dan $\\beta = 0{,}6$, sehingga $\\gamma = 1{,}25$.',
        '$L = L_0/\\gamma = 100/1{,}25 = 80\\ \\text{m}$.'
      ],
      tag: ['kontraksi panjang'],
      ragu: false
    },
    {
      id: 'rel-m2',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Kembar A tinggal di Bumi, sedangkan kembar B berangkat dengan pesawat berlaju sangat tinggi, berbalik arah di bintang tujuan, lalu pulang. Ketika mereka bertemu kembali, pernyataan yang paling tepat adalah ...',
      pilihan: [
        'usia keduanya sama, karena masing-masing melihat jam yang lain melambat',
        'B lebih muda, karena hanya B yang berbalik arah (mengalami percepatan) sehingga tidak selalu berada di satu kerangka inersial',
        'A lebih muda, karena A diam sehingga jamnya berjalan lebih lambat',
        'B lebih tua, karena kontraksi panjang memperpendek perjalanan B sehingga ia kurang menua'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Situasinya tidak simetris, sebab salah satu kembar berganti kerangka inersial.',
        'Waktu proper total diukur oleh jam yang menempuh lintasan ruang-waktu masing-masing.'
      ],
      pembahasan: [
        'A tetap di satu kerangka inersial, sedangkan B berganti kerangka saat berbalik, sehingga keduanya tidak setara.',
        'Jam B mencatat waktu proper yang lebih singkat daripada jam A, sehingga B lebih muda saat bertemu.'
      ],
      tag: ['paradoks kembar', 'dilatasi waktu'],
      ragu: false
    },
    {
      id: 'rel-m3',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Massa diam elektron adalah $9{,}11 \\times 10^{-31}\\ \\text{kg}$ dan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$. Hitung energi diam elektron dalam joule.',
      pilihan: [],
      jawaban: 8.199e-14,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Energi diam adalah energi benda yang diam, dengan $\\gamma = 1$.',
        'Gunakan $E_0 = m c^2$.'
      ],
      pembahasan: [
        'Diketahui $m = 9{,}11 \\times 10^{-31}\\ \\text{kg}$ dan $c^2 = 9{,}00 \\times 10^{16}\\ \\text{m}^2/\\text{s}^2$.',
        '$E_0 = m c^2 = 9{,}11 \\times 10^{-31} \\times 9{,}00 \\times 10^{16} \\approx 8{,}20 \\times 10^{-14}\\ \\text{J}$.'
      ],
      tag: ['energi diam', 'ekivalensi massa-energi'],
      ragu: false
    },
    {
      id: 'rel-m4',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah proton (energi diam $938\\ \\text{MeV}$) bergerak dengan laju $0{,}8\\,c$. Berapa energi kinetik relativistiknya? Jawab dalam MeV.',
      pilihan: [],
      jawaban: 625.33,
      satuan: 'MeV',
      toleransi: 0.02,
      petunjuk: [
        'Hitung dulu $\\gamma$ untuk $\\beta = 0{,}8$.',
        'Energi kinetik adalah $K = (\\gamma - 1)\\,m c^2$, dan $m c^2 = 938\\ \\text{MeV}$.'
      ],
      pembahasan: [
        'Untuk $\\beta = 0{,}8$, $\\gamma = 5/3$.',
        '$K = (\\gamma - 1)\\,E_0 = \\tfrac{2}{3} \\times 938 \\approx 625{,}3\\ \\text{MeV}$.'
      ],
      tag: ['energi kinetik'],
      ragu: false
    },
    {
      id: 'rel-m5',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Dua kilatan lampu terjadi di dua tempat berbeda dan menurut seorang pengamat terjadi pada saat yang sama. Pengamat lain yang bergerak terhadap pengamat pertama biasanya melihat kilatan itu terjadi pada saat berbeda. Sifat relativistik ini disebut relativitas apa? Jawab dengan satu istilah.',
      pilihan: [],
      jawaban: ['simultan', 'keserempakan', 'kebersamaan'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Istilah ini menyangkut apakah dua peristiwa terjadi pada saat yang sama.',
        'Kata kuncinya diawali huruf s dan berakar dari kata serempak (simultaneous dalam bahasa Inggris).'
      ],
      pembahasan: [
        'Karena laju cahaya sama bagi semua pengamat, keserempakan dua peristiwa di tempat berbeda bergantung pada kerangka acuan.',
        'Sifat ini disebut relativitas simultanitas.'
      ],
      tag: ['simultanitas'],
      ragu: false
    },
    /* ===================== LANJUT ===================== */
    {
      id: 'rel-l1',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah kapal bergerak dengan laju $0{,}5\\,c$ terhadap sebuah stasiun. Dari kapal, ditembakkan sebuah rudal searah gerak kapal dengan laju $0{,}5\\,c$ relatif terhadap kapal. Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, berapa laju rudal menurut stasiun? Jawab dalam m/s.',
      pilihan: [],
      jawaban: 2.4e8,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Penjumlahan biasa $0{,}5c + 0{,}5c = c$ tidak boleh dipakai untuk laju sebesar ini.',
        'Gunakan $u = (u\' + v)/(1 + u\'v/c^2)$ dengan $u\' = v = 0{,}5\\,c$.'
      ],
      pembahasan: [
        'Diketahui $u\' = 0{,}5\\,c$ dan $v = 0{,}5\\,c$.',
        '$u = \\dfrac{0{,}5c + 0{,}5c}{1 + 0{,}25} = \\dfrac{c}{1{,}25} = 0{,}8\\,c$.',
        'Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, $u = 2{,}4 \\times 10^{8}\\ \\text{m/s}$.'
      ],
      tag: ['penjumlahan kecepatan'],
      ragu: false
    },
    {
      id: 'rel-l2',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Di kerangka tanah $S$, peristiwa B terjadi $900\\ \\text{m}$ di depan peristiwa A (searah sumbu $x$) dan $4{,}0 \\times 10^{-6}\\ \\text{s}$ setelah A. Sebuah kerangka $S\'$ bergerak searah sumbu $x$ dengan laju $0{,}6\\,c$ terhadap $S$. Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, berapa selang waktu $\\Delta t\'$ antara A dan B menurut $S\'$? Jawab dalam detik.',
      pilihan: [],
      jawaban: 2.75e-6,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Gunakan transformasi Lorentz untuk waktu pada selisih dua peristiwa.',
        '$\\Delta t\' = \\gamma\\,(\\Delta t - v\\,\\Delta x/c^2)$, dengan $\\gamma = 1{,}25$ untuk $\\beta = 0{,}6$.'
      ],
      pembahasan: [
        'Diketahui $v = 0{,}6c = 1{,}8 \\times 10^{8}\\ \\text{m/s}$ dan $\\gamma = 1{,}25$.',
        '$v\\,\\Delta x/c^2 = (1{,}8 \\times 10^{8} \\times 900)/(9{,}00 \\times 10^{16}) = 1{,}8 \\times 10^{-6}\\ \\text{s}$.',
        '$\\Delta t\' = 1{,}25 \\times (4{,}0 - 1{,}8) \\times 10^{-6} = 2{,}75 \\times 10^{-6}\\ \\text{s}$.'
      ],
      tag: ['transformasi Lorentz'],
      ragu: false
    },
    {
      id: 'rel-l3',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah partikel bergerak dengan laju $0{,}6\\,c$. Berapa kali lipat energi kinetik relativistiknya dibandingkan nilai yang dihitung dengan rumus klasik $\\tfrac{1}{2} m v^2$? Jawab sebagai perbandingan $K_{\\text{rel}}/K_{\\text{klasik}}$ (tanpa satuan).',
      pilihan: [],
      jawaban: 1.38889,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Nyatakan kedua energi dalam satuan $m c^2$ supaya massa dan $c$ saling menghilang.',
        '$K_{\\text{rel}} = (\\gamma - 1)\\,m c^2$ dan $K_{\\text{klasik}} = \\tfrac{1}{2}\\beta^2\\,m c^2$.'
      ],
      pembahasan: [
        'Untuk $\\beta = 0{,}6$, $\\gamma = 1{,}25$, sehingga $K_{\\text{rel}} = 0{,}25\\,m c^2$.',
        '$K_{\\text{klasik}} = \\tfrac{1}{2}(0{,}36)\\,m c^2 = 0{,}18\\,m c^2$.',
        'Perbandingannya $0{,}25/0{,}18 \\approx 1{,}389$.'
      ],
      tag: ['energi kinetik', 'batas klasik'],
      ragu: false
    },
    {
      id: 'rel-l4',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Energi total sebuah partikel tepat dua kali energi diamnya. Berapa lajunya?',
      pilihan: [
        '$0{,}50\\,c$',
        '$0{,}75\\,c$',
        '$0{,}95\\,c$',
        '$0{,}87\\,c$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Energi total $E = \\gamma\\,m c^2$ dan energi diam $E_0 = m c^2$.',
        'Syarat $E = 2E_0$ memberi nilai $\\gamma$, lalu cari $\\beta$ dari $\\gamma$.'
      ],
      pembahasan: [
        '$E = 2E_0$ berarti $\\gamma = 2$.',
        '$\\beta = \\sqrt{1 - 1/\\gamma^2} = \\sqrt{1 - 1/4} = \\sqrt{0{,}75} \\approx 0{,}866$.',
        'Jadi laju partikel sekitar $0{,}87\\,c$.'
      ],
      tag: ['energi total', 'faktor Lorentz'],
      ragu: false
    },
    {
      id: 'rel-l5',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah elektron (massa $9{,}11 \\times 10^{-31}\\ \\text{kg}$) bergerak dengan laju $0{,}8\\,c$, dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$. Hitung besar momentum relativistiknya dalam kg m/s.',
      pilihan: [],
      jawaban: 3.644e-22,
      satuan: 'kg m/s',
      toleransi: 0.02,
      petunjuk: [
        'Hitung laju dalam m/s dan faktor $\\gamma$ untuk $\\beta = 0{,}8$.',
        'Momentum relativistik: $p = \\gamma\\,m\\,v$.'
      ],
      pembahasan: [
        'Laju $v = 0{,}8 \\times 3{,}00 \\times 10^{8} = 2{,}4 \\times 10^{8}\\ \\text{m/s}$ dan $\\gamma = 5/3$.',
        '$p = \\gamma\\,m\\,v = \\tfrac{5}{3} \\times 9{,}11 \\times 10^{-31} \\times 2{,}4 \\times 10^{8} \\approx 3{,}644 \\times 10^{-22}\\ \\text{kg m/s}$.'
      ],
      tag: ['momentum relativistik'],
      ragu: false
    },
    /* ===================== EXPERT ===================== */
    {
      id: 'rel-e1',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah elektron (energi diam $0{,}511\\ \\text{MeV}$) dipercepat sehingga energi kinetiknya $1{,}022\\ \\text{MeV}$. Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, berapa laju elektron tersebut? Jawab dalam m/s.',
      pilihan: [],
      jawaban: 2.828427e8,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Dari $K = (\\gamma - 1)E_0$ tentukan $\\gamma$ lebih dahulu.',
        'Balikkan rumus faktor Lorentz: $\\beta = \\sqrt{1 - 1/\\gamma^2}$.'
      ],
      pembahasan: [
        '$\\gamma = 1 + K/E_0 = 1 + 1{,}022/0{,}511 = 3$.',
        '$\\beta = \\sqrt{1 - 1/9} = \\sqrt{8/9} \\approx 0{,}9428$.',
        '$v = \\beta c \\approx 0{,}9428 \\times 3{,}00 \\times 10^{8} \\approx 2{,}83 \\times 10^{8}\\ \\text{m/s}$.'
      ],
      tag: ['energi kinetik', 'faktor Lorentz'],
      ragu: false
    },
    {
      id: 'rel-e2',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah pesawat bergerak lurus dengan laju konstan sehingga selang waktu $1{,}0$ tahun menurut jam di pesawat teramati sebagai $5{,}0$ tahun oleh pengamat di Bumi. Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, berapa laju pesawat terhadap Bumi? Jawab dalam m/s.',
      pilihan: [],
      jawaban: 2.939388e8,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Perbandingan $\\Delta t/\\Delta t_0$ sama dengan $\\gamma$.',
        'Selesaikan $\\gamma = 1/\\sqrt{1 - v^2/c^2}$ untuk $v$: $v = c\\sqrt{1 - 1/\\gamma^2}$.'
      ],
      pembahasan: [
        '$\\gamma = \\Delta t/\\Delta t_0 = 5{,}0$.',
        '$v = c\\sqrt{1 - 1/25} = c\\sqrt{24}/5 \\approx 0{,}9798\\,c$.',
        '$v \\approx 0{,}9798 \\times 3{,}00 \\times 10^{8} \\approx 2{,}94 \\times 10^{8}\\ \\text{m/s}$.'
      ],
      tag: ['dilatasi waktu', 'faktor Lorentz'],
      ragu: false
    },
    {
      id: 'rel-e3',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah partikel tak stabil berenergi diam $1000\\ \\text{MeV}$ meluruh dalam keadaan diam menjadi dua partikel identik yang masing-masing berenergi diam $300\\ \\text{MeV}$. Pakai kekekalan energi dan momentum. Berapa besar momentum salah satu partikel hasil, dinyatakan dalam $\\text{MeV}/c$? Jawab angkanya saja dengan satuan MeV/c.',
      pilihan: [],
      jawaban: 400,
      satuan: 'MeV/c',
      toleransi: 0.02,
      petunjuk: [
        'Karena partikel induk diam, momentum total nol sehingga kedua partikel hasil punya momentum sama besar dan berlawanan arah.',
        'Energi tiap partikel hasil sama, yaitu setengah energi total. Pakai $E^2 = (p c)^2 + (m c^2)^2$.'
      ],
      pembahasan: [
        'Energi total awal $1000\\ \\text{MeV}$ terbagi sama, sehingga $E = 500\\ \\text{MeV}$ per partikel.',
        '$(p c)^2 = E^2 - (m c^2)^2 = 500^2 - 300^2 = 160000\\ \\text{MeV}^2$.',
        '$p c = 400\\ \\text{MeV}$, jadi $p = 400\\ \\text{MeV}/c$.'
      ],
      tag: ['peluruhan', 'energi-momentum'],
      ragu: false
    },
    {
      id: 'rel-e4',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Di kerangka $S$, dua peristiwa terpisah $1500\\ \\text{m}$ dalam arah sumbu $x$ dan $3{,}0 \\times 10^{-6}\\ \\text{s}$ dalam waktu. Ada sebuah kerangka $S\'$ yang bergerak searah sumbu $x$ terhadap $S$ dan di dalamnya kedua peristiwa itu terjadi serempak. Dengan $c = 3{,}00 \\times 10^{8}\\ \\text{m/s}$, berapa jarak antara kedua peristiwa menurut $S\'$? Jawab dalam meter.',
      pilihan: [],
      jawaban: 1200,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Besaran $(c\\,\\Delta t)^2 - (\\Delta x)^2$ bernilai sama di semua kerangka inersial.',
        'Di $S\'$ serempak berarti $\\Delta t\' = 0$, sehingga selang ruang-waktu hanya berisi jarak $\\Delta x\'$.'
      ],
      pembahasan: [
        '$c\\,\\Delta t = 3{,}00 \\times 10^{8} \\times 3{,}0 \\times 10^{-6} = 900\\ \\text{m}$.',
        'Invarian: $(\\Delta x\')^2 = (\\Delta x)^2 - (c\\,\\Delta t)^2 = 1500^2 - 900^2 = 1{,}44 \\times 10^{6}\\ \\text{m}^2$.',
        '$\\Delta x\' = 1200\\ \\text{m}$.'
      ],
      tag: ['selang ruang-waktu', 'transformasi Lorentz'],
      ragu: false
    },
    {
      id: 'rel-e5',
      bab: 'relativitas',
      subbab: 'relativitas',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Dua foton berenergi sama bergerak berlawanan arah (tumbukan frontal) dan bertumbukan menghasilkan sepasang elektron dan positron. Energi diam masing-masing elektron dan positron adalah $0{,}511\\ \\text{MeV}$. Berapa energi minimum (energi ambang) tiap foton agar reaksi ini mungkin?',
      pilihan: [
        '$0{,}256\\ \\text{MeV}$',
        '$0{,}511\\ \\text{MeV}$',
        '$1{,}022\\ \\text{MeV}$',
        '$0{,}128\\ \\text{MeV}$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Momentum total kedua foton nol, sehingga kerangka pusat massa adalah kerangka lab.',
        'Di ambang, pasangan hasil diam, sehingga energi total sama dengan jumlah energi diam hasil.'
      ],
      pembahasan: [
        'Momentum total foton nol, sehingga di ambang elektron dan positron hasil keduanya diam.',
        'Kekekalan energi: $2E = 2 \\times 0{,}511\\ \\text{MeV}$.',
        'Jadi $E = 0{,}511\\ \\text{MeV}$ per foton.'
      ],
      tag: ['energi ambang', 'produksi pasangan'],
      ragu: false
    }
  ]
};
