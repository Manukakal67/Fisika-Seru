window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['dinamika-fluida'] = {
  id: 'dinamika-fluida',
  judul: 'Dinamika Fluida',
  subbab: [
    {
      id: 'dinamika-fluida',
      judul: 'Dinamika Fluida',
      materi: {
        gambaranBesar: 'Bayangkan air selang kebun. Kalau ujung selang kamu pencet, air menyembur lebih cepat karena lubangnya menyempit. Fluida yang mengalir mengikuti dua aturan sederhana: jumlah air yang lewat tiap detik tidak boleh hilang (kontinuitas), dan energinya hanya bertukar bentuk antara tekanan, kecepatan, dan ketinggian (Bernoulli). Dari dua aturan itu kita bisa menjelaskan pancuran tangki bocor, alat ukur aliran, sampai gaya angkat sayap pesawat.',
        konsep: [
          {
            judul: 'Fluida ideal dan jenis aliran',
            teks: 'Fluida adalah zat yang bisa mengalir, yaitu cairan dan gas. Agar hitungan sederhana, kita memakai model fluida ideal: tak termampatkan (massa jenis $\\rho$ tetap), tak kental (tidak ada gesekan dalam fluida), dan alirannya tunak (kecepatan di satu titik tidak berubah terhadap waktu). Aliran laminar adalah aliran berlapis yang mulus, sedangkan aliran turbulen penuh pusaran acak dan terjadi bila lajunya besar atau pipanya lebar. Dalam bab ini $g = 10\\ \\text{m/s}^2$ dan massa jenis air $1000\\ \\text{kg/m}^3$ kecuali dinyatakan lain.'
          },
          {
            judul: 'Debit dan persamaan kontinuitas',
            teks: 'Debit $Q$ adalah volume fluida yang melewati penampang pipa tiap sekon. Untuk fluida tak termampatkan, debit di setiap penampang pipa sama. Akibatnya, bagian pipa yang sempit membuat fluida mengalir lebih cepat. Luas lingkaran $A = \\pi d^2/4$, jadi laju berbanding terbalik dengan kuadrat diameter.',
            rumus: [
              {
                latex: 'Q = \\frac{V}{t} = A\\,v',
                simbol: [
                  { s: 'Q', arti: 'debit', satuan: 'm³/s' },
                  { s: 'V', arti: 'volume fluida yang lewat', satuan: 'm³' },
                  { s: 't', arti: 'selang waktu', satuan: 's' },
                  { s: 'A', arti: 'luas penampang pipa', satuan: 'm²' },
                  { s: 'v', arti: 'laju aliran', satuan: 'm/s' }
                ]
              },
              {
                latex: 'A_1 v_1 = A_2 v_2',
                simbol: [
                  { s: 'A_1,\\ A_2', arti: 'luas penampang bagian 1 dan 2', satuan: 'm²' },
                  { s: 'v_1,\\ v_2', arti: 'laju aliran di bagian 1 dan 2', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Persamaan Bernoulli',
            teks: 'Persamaan Bernoulli adalah hukum kekekalan energi untuk fluida ideal yang mengalir pada satu garis alir. Jumlah tekanan, energi kinetik per volume, dan energi potensial per volume bernilai tetap. Di tempat fluida mengalir cepat, tekanannya rendah. Di tempat yang lebih tinggi, tekanannya juga lebih rendah. Semua suku harus dalam satuan tekanan (pascal, $1\\ \\text{Pa} = 1\\ \\text{N/m}^2$).',
            rumus: [
              {
                latex: 'P + \\tfrac{1}{2}\\rho v^2 + \\rho g h = \\text{konstan}',
                simbol: [
                  { s: 'P', arti: 'tekanan fluida', satuan: 'Pa' },
                  { s: '\\rho', arti: 'massa jenis fluida', satuan: 'kg/m³' },
                  { s: 'v', arti: 'laju aliran', satuan: 'm/s' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'ketinggian dari acuan', satuan: 'm' }
                ]
              },
              {
                latex: 'P_1 + \\tfrac{1}{2}\\rho v_1^2 + \\rho g h_1 = P_2 + \\tfrac{1}{2}\\rho v_2^2 + \\rho g h_2',
                simbol: [
                  { s: 'P_1,\\ P_2', arti: 'tekanan di titik 1 dan 2', satuan: 'Pa' },
                  { s: 'v_1,\\ v_2', arti: 'laju di titik 1 dan 2', satuan: 'm/s' },
                  { s: 'h_1,\\ h_2', arti: 'ketinggian titik 1 dan 2', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Teorema Torricelli dan pancuran tangki',
            teks: 'Bila tangki terbuka berlubang pada kedalaman $h$ di bawah permukaan air, air menyembur dengan laju yang sama seperti benda jatuh bebas dari ketinggian $h$. Setelah keluar, air bergerak sebagai gerak parabola mendatar. Jika lubang berada pada ketinggian $y$ di atas tanah, jarak jatuh mendatarnya mengikuti rumus di bawah. Rumus ini menunjukkan bahwa lubang di kedalaman $h$ dan di kedalaman $H - h$ memberi jarak jatuh yang sama.',
            rumus: [
              {
                latex: 'v = \\sqrt{2 g h}',
                simbol: [
                  { s: 'v', arti: 'laju semburan air', satuan: 'm/s' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'kedalaman lubang dari permukaan air', satuan: 'm' }
                ]
              },
              {
                latex: 'x = 2\\sqrt{h\\,y}',
                simbol: [
                  { s: 'x', arti: 'jarak jatuh mendatar', satuan: 'm' },
                  { s: 'h', arti: 'kedalaman lubang dari permukaan air', satuan: 'm' },
                  { s: 'y', arti: 'tinggi lubang di atas tanah', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Venturimeter dan tabung Pitot',
            teks: 'Venturimeter mengukur laju aliran fluida dalam pipa. Pipa dibuat menyempit, sehingga di bagian sempit lajunya naik dan tekanannya turun. Selisih tekanan $\\Delta P = P_1 - P_2$ dibaca dengan manometer (pipa U berisi fluida lain seperti raksa). Bila selisih tinggi cairan manometer $h$ dan massa jenis cairan manometer $\\rho_m$, maka $\\Delta P = (\\rho_m - \\rho)\\,g\\,h$. Tabung Pitot mengukur laju gas (misalnya udara) dengan membandingkan tekanan di titik yang menghadap aliran (laju nol) dan tekanan di samping aliran.',
            rumus: [
              {
                latex: '\\Delta P = P_1 - P_2 = \\tfrac{1}{2}\\rho\\,(v_2^2 - v_1^2)',
                simbol: [
                  { s: '\\Delta P', arti: 'selisih tekanan antara bagian lebar dan sempit', satuan: 'Pa' },
                  { s: '\\rho', arti: 'massa jenis fluida yang mengalir', satuan: 'kg/m³' },
                  { s: 'v_1,\\ v_2', arti: 'laju di bagian lebar dan sempit', satuan: 'm/s' }
                ]
              },
              {
                latex: 'v = \\sqrt{\\frac{2\\,\\Delta P}{\\rho}}',
                simbol: [
                  { s: 'v', arti: 'laju gas pada tabung Pitot', satuan: 'm/s' },
                  { s: '\\Delta P', arti: 'selisih tekanan titik henti dan titik samping', satuan: 'Pa' },
                  { s: '\\rho', arti: 'massa jenis gas', satuan: 'kg/m³' }
                ]
              }
            ]
          },
          {
            judul: 'Gaya angkat sayap pesawat',
            teks: 'Penampang sayap dibentuk dan dimiringkan sedemikian rupa sehingga udara di atas sayap mengalir lebih cepat daripada di bawahnya. Menurut Bernoulli, tekanan di atas sayap lebih kecil daripada di bawah sayap. Selisih tekanan dikalikan luas sayap menghasilkan gaya angkat ke atas. Ini penjelasan sederhana. Penjelasan lengkap juga memperhitungkan sudut serang sayap dan hukum Newton (udara dibelokkan ke bawah).',
            rumus: [
              {
                latex: 'F_{\\text{angkat}} \\approx \\tfrac{1}{2}\\rho_{u}\\,(v_{a}^2 - v_{b}^2)\\,A',
                simbol: [
                  { s: 'F_{\\text{angkat}}', arti: 'gaya angkat', satuan: 'N' },
                  { s: '\\rho_{u}', arti: 'massa jenis udara (sekitar 1,2)', satuan: 'kg/m³' },
                  { s: 'v_{a},\\ v_{b}', arti: 'laju udara di atas dan di bawah sayap', satuan: 'm/s' },
                  { s: 'A', arti: 'luas sayap', satuan: 'm²' }
                ]
              }
            ]
          },
          {
            judul: 'Viskositas dan hukum Stokes',
            teks: 'Viskositas adalah ukuran kekentalan fluida, yaitu hambatan internal terhadap aliran. Madu lebih kental daripada air. Koefisien viskositas $\\eta$ bersatuan pascal sekon ($\\text{Pa s}$). Bola kecil yang bergerak lambat dalam fluida kental merasakan gaya hambat Stokes. Bola yang dilepas dalam fluida dipercepat sampai gaya berat, gaya apung, dan gaya Stokes seimbang, lalu bergerak dengan kecepatan terminal (kecepatan tetap).',
            rumus: [
              {
                latex: 'F_s = 6\\pi\\,\\eta\\,r\\,v',
                simbol: [
                  { s: 'F_s', arti: 'gaya hambat Stokes', satuan: 'N' },
                  { s: '\\eta', arti: 'koefisien viskositas fluida', satuan: 'Pa s' },
                  { s: 'r', arti: 'jari-jari bola', satuan: 'm' },
                  { s: 'v', arti: 'laju bola terhadap fluida', satuan: 'm/s' }
                ]
              },
              {
                latex: 'v_t = \\frac{2\\,r^2\\,(\\rho_b - \\rho_f)\\,g}{9\\,\\eta}',
                simbol: [
                  { s: 'v_t', arti: 'kecepatan terminal', satuan: 'm/s' },
                  { s: '\\rho_b', arti: 'massa jenis bola', satuan: 'kg/m³' },
                  { s: '\\rho_f', arti: 'massa jenis fluida', satuan: 'kg/m³' },
                  { s: 'r', arti: 'jari-jari bola', satuan: 'm' },
                  { s: '\\eta', arti: 'koefisien viskositas', satuan: 'Pa s' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Air mengalir dalam pipa berdiameter $6\\ \\text{cm}$ dengan laju $2\\ \\text{m/s}$, lalu pipa menyempit menjadi berdiameter $3\\ \\text{cm}$. Berapa laju air di bagian sempit dan berapa debitnya?',
            langkah: [
              'Luas sebanding dengan kuadrat diameter, jadi $A_1/A_2 = (6/3)^2 = 4$.',
              'Kontinuitas: $v_2 = v_1 \\times A_1/A_2 = 2 \\times 4 = 8\\ \\text{m/s}$.',
              'Debit: $Q = A_1 v_1 = \\pi (0{,}03)^2 \\times 2 \\approx 5{,}65 \\times 10^{-3}\\ \\text{m}^3\\text{/s}$.'
            ],
            hasil: 'Laju di bagian sempit 8 m/s dan debitnya sekitar $5{,}65 \\times 10^{-3}$ m³/s.'
          },
          {
            soal: 'Pada pipa mendatar, air mengalir dengan laju $1\\ \\text{m/s}$ dan tekanan $120\\ \\text{kPa}$ di bagian lebar. Di bagian sempit lajunya $3\\ \\text{m/s}$. Berapa tekanan di bagian sempit? (massa jenis air $1000\\ \\text{kg/m}^3$)',
            langkah: [
              'Pipa mendatar, jadi $h_1 = h_2$ dan suku $\\rho g h$ saling meniadakan.',
              'Bernoulli: $P_2 = P_1 + \\tfrac{1}{2}\\rho\\,(v_1^2 - v_2^2)$.',
              '$P_2 = 120\\,000 + 500\\,(1 - 9) = 120\\,000 - 4000 = 116\\,000\\ \\text{Pa}$.'
            ],
            hasil: 'Tekanan di bagian sempit 116 kPa, lebih kecil karena aliran lebih cepat.'
          },
          {
            soal: 'Tangki terbuka berisi air. Sebuah lubang berada $0{,}8\\ \\text{m}$ di bawah permukaan air dan $1{,}2\\ \\text{m}$ di atas tanah. Berapa jarak jatuh air dari dinding tangki? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Torricelli: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 0{,}8} = 4\\ \\text{m/s}$.',
              'Waktu jatuh dari $y = 1{,}2\\ \\text{m}$: $t = \\sqrt{2y/g} = \\sqrt{0{,}24} \\approx 0{,}49\\ \\text{s}$.',
              'Jarak: $x = v\\,t = 4 \\times 0{,}49 \\approx 1{,}96\\ \\text{m}$. Dengan rumus langsung: $x = 2\\sqrt{0{,}8 \\times 1{,}2} \\approx 1{,}96\\ \\text{m}$.'
            ],
            hasil: 'Air jatuh sekitar 1,96 m dari dinding tangki.'
          },
          {
            soal: 'Bola kaca berjari-jari $1\\ \\text{mm}$ dan massa jenis $2500\\ \\text{kg/m}^3$ jatuh dalam gliserin ($\\rho_f = 1000\\ \\text{kg/m}^3$, $\\eta = 0{,}2\\ \\text{Pa s}$). Berapa kecepatan terminalnya? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Pada kecepatan terminal, berat = gaya apung + gaya Stokes, sehingga $v_t = \\dfrac{2 r^2 (\\rho_b - \\rho_f) g}{9\\eta}$.',
              'Substitusi: $v_t = \\dfrac{2 \\times (10^{-3})^2 \\times 1500 \\times 10}{9 \\times 0{,}2}$.',
              '$v_t = \\dfrac{0{,}03}{1{,}8} \\approx 1{,}67 \\times 10^{-2}\\ \\text{m/s}$.'
            ],
            hasil: 'Kecepatan terminal bola sekitar $1{,}67 \\times 10^{-2}$ m/s (1,67 cm/s).'
          }
        ],
        kesalahan: [
          'Mengira laju berbanding terbalik dengan diameter. Yang benar, laju berbanding terbalik dengan luas, yaitu kuadrat diameter. Diameter dibagi 2 berarti laju menjadi 4 kali.',
          'Mengira tekanan di bagian sempit lebih besar karena airnya "terjepit". Menurut Bernoulli, di bagian sempit lajunya naik sehingga tekanannya justru turun (pada ketinggian sama).',
          'Mencampur satuan tekanan. Suku $\\tfrac{1}{2}\\rho v^2$ dan $\\rho g h$ bersatuan Pa, jadi kPa atau atm harus diubah ke Pa dulu.',
          'Memakai Bernoulli untuk fluida yang sangat kental atau aliran turbulen deras tanpa kehati-hatian. Persamaan ini hanya berlaku untuk model fluida ideal.',
          'Memakai $h$ dari tanah pada rumus Torricelli. Yang dipakai adalah kedalaman lubang dari permukaan air, bukan tinggi dari tanah.',
          'Lupa gaya apung pada kecepatan terminal. Selisih massa jenis $(\\rho_b - \\rho_f)$ muncul karena gaya apung ikut mengurangi gaya berat.',
          'Menganggap gaya angkat sayap hanya karena "udara di atas menempuh jalur lebih panjang". Penyebab utamanya adalah beda laju dan tekanan akibat bentuk dan sudut sayap, ditambah pembelokan aliran udara ke bawah.'
        ],
        ringkasan: [
          'Fluida ideal: tak termampatkan, tak kental, aliran tunak. Debit $Q = A\\,v$ dan kontinuitas $A_1 v_1 = A_2 v_2$.',
          'Bernoulli: $P + \\tfrac{1}{2}\\rho v^2 + \\rho g h$ bernilai tetap sepanjang garis alir. Aliran cepat berarti tekanan rendah.',
          'Torricelli: $v = \\sqrt{2gh}$ dan jarak jatuh pancuran $x = 2\\sqrt{h\\,y}$.',
          'Venturimeter dan tabung Pitot mengukur laju aliran dari selisih tekanan. Manometer memberi $\\Delta P = (\\rho_m - \\rho)\\,g\\,h$.',
          'Gaya angkat sayap berasal dari tekanan di bawah sayap yang lebih besar daripada di atasnya.',
          'Gaya Stokes $F_s = 6\\pi\\eta r v$. Kecepatan terminal $v_t = 2 r^2 (\\rho_b - \\rho_f) g / (9\\eta)$.'
        ],
        simulasi: {
          id: 'dinamika-fluida-pipa',
          judul: 'Simulasi: aliran dalam pipa menyempit (kontinuitas dan Bernoulli)',
          param: [
            { kunci: 'd1', label: 'Diameter bagian 1', min: 4, max: 20, nilai: 10, satuan: 'cm', langkah: 1 },
            { kunci: 'd2', label: 'Diameter bagian 2', min: 2, max: 20, nilai: 5, satuan: 'cm', langkah: 1 },
            { kunci: 'v1', label: 'Laju di bagian 1', min: 0.5, max: 6, nilai: 2, satuan: 'm/s', langkah: 0.5 },
            { kunci: 'dh', label: 'Bagian 2 lebih tinggi', min: -2, max: 3, nilai: 0, satuan: 'm', langkah: 0.5 },
            { kunci: 'P1', label: 'Tekanan bagian 1', min: 50, max: 300, nilai: 200, satuan: 'kPa', langkah: 10 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'df-p1',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Air mengalir dalam pipa yang luas penampangnya $0{,}0035\\ \\text{m}^2$ dengan laju $2{,}4\\ \\text{m/s}$. Hitung debit air tersebut dalam m³/s.',
      pilihan: [],
      jawaban: 0.0084,
      satuan: 'm³/s',
      toleransi: 0.02,
      petunjuk: [
        'Debit adalah volume fluida yang lewat tiap sekon.',
        'Gunakan $Q = A\\,v$.'
      ],
      pembahasan: [
        'Diketahui $A = 0{,}0035\\ \\text{m}^2$ dan $v = 2{,}4\\ \\text{m/s}$.',
        '$Q = A\\,v = 0{,}0035 \\times 2{,}4 = 0{,}0084\\ \\text{m}^3\\text{/s}$.'
      ],
      tag: ['debit'],
      ragu: false
    },
    {
      id: 'df-p2',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Air mengalir dengan laju $1{,}5\\ \\text{m/s}$ dalam pipa berdiameter $6\\ \\text{cm}$. Pipa kemudian menyempit menjadi berdiameter $3\\ \\text{cm}$. Berapa laju air di bagian yang sempit?',
      pilihan: [
        '$3\\ \\text{m/s}$',
        '$6\\ \\text{m/s}$',
        '$0{,}375\\ \\text{m/s}$',
        '$9\\ \\text{m/s}$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Debit tidak berubah, sehingga $A_1 v_1 = A_2 v_2$.',
        'Luas penampang sebanding dengan kuadrat diameter.'
      ],
      pembahasan: [
        'Perbandingan luas: $A_1/A_2 = (6/3)^2 = 4$.',
        '$v_2 = v_1 \\times A_1/A_2 = 1{,}5 \\times 4 = 6\\ \\text{m/s}$.'
      ],
      tag: ['kontinuitas'],
      ragu: false
    },
    {
      id: 'df-p3',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Pada fluida ideal, hasil kali luas penampang pipa dan laju aliran bernilai sama di setiap penampang ($A_1 v_1 = A_2 v_2$). Persamaan ini disebut persamaan apa? (jawab satu kata)',
      pilihan: [],
      jawaban: ['kontinuitas', 'kontinyuitas'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Persamaan ini menyatakan kekekalan massa (atau volume) fluida yang mengalir.',
        'Namanya berkaitan dengan arti aliran yang tidak terputus.'
      ],
      pembahasan: [
        'Persamaan $A_1 v_1 = A_2 v_2$ menyatakan bahwa debit sama di setiap penampang untuk fluida tak termampatkan.',
        'Persamaan ini disebut persamaan kontinuitas.'
      ],
      tag: ['kontinuitas'],
      ragu: false
    },
    {
      id: 'df-p4',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah tangki terbuka berisi air memiliki lubang kecil pada kedalaman $2{,}5\\ \\text{m}$ di bawah permukaan air. Gunakan $g = 10\\ \\text{m/s}^2$. Berapa laju air yang menyembur keluar dari lubang?',
      pilihan: [],
      jawaban: 7.0711,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Gunakan teorema Torricelli.',
        'Laju semburan sama dengan laju benda jatuh bebas dari ketinggian $h$.'
      ],
      pembahasan: [
        'Torricelli: $v = \\sqrt{2 g h}$.',
        '$v = \\sqrt{2 \\times 10 \\times 2{,}5} = \\sqrt{50} \\approx 7{,}07\\ \\text{m/s}$.'
      ],
      tag: ['Torricelli'],
      ragu: false
    },
    {
      id: 'df-p5',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Menurut penjelasan sederhana berdasarkan asas Bernoulli, mengapa sayap pesawat yang bergerak maju menghasilkan gaya angkat ke atas?',
      pilihan: [
        'Udara di atas sayap bergerak lebih lambat sehingga tekanannya lebih besar daripada tekanan di bawah sayap',
        'Udara di bawah sayap bergerak lebih cepat sehingga tekanannya lebih kecil daripada tekanan di atas sayap',
        'Tekanan udara di atas dan di bawah sayap sama besar, tetapi massa jenis udara di atas sayap lebih kecil',
        'Udara di atas sayap bergerak lebih cepat sehingga tekanannya lebih kecil daripada tekanan di bawah sayap'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ingat hubungan laju dan tekanan pada Bernoulli: aliran cepat berarti tekanan rendah.',
        'Gaya angkat muncul bila tekanan di bawah sayap lebih besar daripada di atasnya.'
      ],
      pembahasan: [
        'Bentuk dan sudut sayap membuat udara di atas sayap mengalir lebih cepat.',
        'Menurut Bernoulli, laju lebih besar berarti tekanan lebih kecil, sehingga tekanan di atas sayap lebih kecil daripada di bawahnya.',
        'Selisih tekanan ini menghasilkan gaya angkat ke atas.'
      ],
      tag: ['gaya angkat', 'Bernoulli'],
      ragu: false
    },
    /* ===================== MENENGAH ===================== */
    {
      id: 'df-m1',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Air (massa jenis $1000\\ \\text{kg/m}^3$) mengalir dalam pipa mendatar. Di bagian lebar, laju air $2\\ \\text{m/s}$ dan tekanannya $150\\ \\text{kPa}$. Di bagian sempit, laju air $6\\ \\text{m/s}$. Berapa tekanan di bagian sempit? Jawab dalam pascal (Pa).',
      pilihan: [],
      jawaban: 134000,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Pipa mendatar berarti ketinggian kedua bagian sama.',
        'Ubah $150\\ \\text{kPa}$ menjadi pascal sebelum memakai Bernoulli.'
      ],
      pembahasan: [
        'Bernoulli (ketinggian sama): $P_2 = P_1 + \\tfrac{1}{2}\\rho\\,(v_1^2 - v_2^2)$.',
        '$P_2 = 150\\,000 + 500\\,(4 - 36) = 150\\,000 - 16\\,000$.',
        '$P_2 = 134\\,000\\ \\text{Pa}$ (134 kPa).'
      ],
      tag: ['Bernoulli'],
      ragu: false
    },
    {
      id: 'df-m2',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah bola berjari-jari $0{,}005\\ \\text{m}$ bergerak lambat dengan laju $0{,}1\\ \\text{m/s}$ dalam gliserin yang koefisien viskositasnya $0{,}8\\ \\text{Pa s}$. Anggap hukum Stokes berlaku. Berapa besar gaya hambat fluida pada bola?',
      pilihan: [],
      jawaban: 0.0075398,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Gaya hambat pada bola kecil dalam fluida kental diberikan oleh hukum Stokes.',
        'Gunakan $F_s = 6\\pi\\,\\eta\\,r\\,v$ dengan semua besaran dalam satuan SI.'
      ],
      pembahasan: [
        'Diketahui $\\eta = 0{,}8\\ \\text{Pa s}$, $r = 0{,}005\\ \\text{m}$, $v = 0{,}1\\ \\text{m/s}$.',
        '$F_s = 6\\pi \\times 0{,}8 \\times 0{,}005 \\times 0{,}1 \\approx 7{,}54 \\times 10^{-3}\\ \\text{N}$.'
      ],
      tag: ['Stokes', 'viskositas'],
      ragu: false
    },
    {
      id: 'df-m3',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Dua bola baja A dan B dilepas dalam oli kental yang sama dan keduanya mencapai kecepatan terminal (hukum Stokes berlaku, gaya apung diperhitungkan). Jari-jari bola B dua kali jari-jari bola A. Berapa perbandingan kecepatan terminal $v_B / v_A$?',
      pilihan: [
        '$\\sqrt{2}$',
        '$2$',
        '$4$',
        '$8$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tulis kecepatan terminal $v_t = 2 r^2 (\\rho_b - \\rho_f) g / (9\\eta)$.',
        'Bahan dan fluidanya sama, jadi hanya $r$ yang berubah.'
      ],
      pembahasan: [
        'Karena $\\rho_b$, $\\rho_f$, $\\eta$, dan $g$ sama, $v_t \\propto r^2$.',
        '$v_B / v_A = (r_B / r_A)^2 = 2^2 = 4$.'
      ],
      tag: ['Stokes', 'kecepatan terminal'],
      ragu: false
    },
    {
      id: 'df-m4',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Alat yang dipasang pada pesawat untuk mengukur laju udara relatif terhadap pesawat, dengan membandingkan tekanan pada lubang yang menghadap aliran udara dan tekanan di samping aliran, disebut tabung apa? (sebut nama belakangnya)',
      pilihan: [],
      jawaban: ['pitot'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Alat ini dinamai menurut seorang ilmuwan Prancis dan dipakai juga pada mobil balap.',
        'Namanya sering disebut berpasangan dengan venturimeter ketika membahas pengukur laju fluida.'
      ],
      pembahasan: [
        'Lubang yang menghadap aliran mengukur tekanan titik henti (laju nol), sedangkan lubang samping mengukur tekanan statik.',
        'Selisih keduanya memberi laju lewat $v = \\sqrt{2\\Delta P / \\rho}$. Alat ini adalah tabung Pitot.'
      ],
      tag: ['tabung Pitot'],
      ragu: false
    },
    {
      id: 'df-m5',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah venturimeter mendatar dialiri air (massa jenis $1000\\ \\text{kg/m}^3$). Diameter bagian lebar $10\\ \\text{cm}$ dan diameter bagian sempit $5\\ \\text{cm}$. Selisih tekanan antara kedua bagian terukur $24\\ \\text{kPa}$. Berapa laju air di bagian lebar?',
      pilihan: [],
      jawaban: 1.7889,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Hubungkan $v_2$ dan $v_1$ dengan kontinuitas, perhatikan bahwa luas sebanding dengan kuadrat diameter.',
        'Pakai $\\Delta P = \\tfrac{1}{2}\\rho\\,(v_2^2 - v_1^2)$ lalu selesaikan untuk $v_1$.'
      ],
      pembahasan: [
        'Kontinuitas: $v_2 = v_1 \\times (10/5)^2 = 4 v_1$.',
        'Bernoulli: $\\Delta P = \\tfrac{1}{2}\\rho\\,(16 v_1^2 - v_1^2) = 7500\\,v_1^2$.',
        '$v_1^2 = 24\\,000 / 7500 = 3{,}2 \\Rightarrow v_1 \\approx 1{,}79\\ \\text{m/s}$.'
      ],
      tag: ['venturimeter', 'Bernoulli'],
      ragu: false
    },
    /* ===================== LANJUT ===================== */
    {
      id: 'df-l1',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Permukaan air dalam sebuah tangki terbuka berada $4{,}5\\ \\text{m}$ di atas tanah datar. Sebuah lubang kecil dibuat pada dinding tangki, $1{,}5\\ \\text{m}$ di bawah permukaan air, sehingga air menyembur mendatar. Gunakan $g = 10\\ \\text{m/s}^2$ dan anggap permukaan air turun sangat lambat. Berapa jarak mendatar dari dinding tangki ke titik jatuh air di tanah?',
      pilihan: [],
      jawaban: 4.2426,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Tentukan tinggi lubang dari tanah: tinggi permukaan dikurangi kedalaman lubang.',
        'Laju semburan dari Torricelli, lalu air bergerak sebagai gerak parabola mendatar.',
        'Boleh langsung dengan $x = 2\\sqrt{h\\,y}$.'
      ],
      pembahasan: [
        'Tinggi lubang dari tanah: $y = 4{,}5 - 1{,}5 = 3{,}0\\ \\text{m}$.',
        'Laju semburan: $v = \\sqrt{2gh} = \\sqrt{2 \\times 10 \\times 1{,}5} \\approx 5{,}48\\ \\text{m/s}$.',
        'Waktu jatuh: $t = \\sqrt{2y/g} = \\sqrt{0{,}6} \\approx 0{,}775\\ \\text{s}$.',
        '$x = v\\,t \\approx 5{,}48 \\times 0{,}775 \\approx 4{,}24\\ \\text{m}$ (sama dengan $2\\sqrt{1{,}5 \\times 3{,}0}$).'
      ],
      tag: ['Torricelli', 'gerak parabola'],
      ragu: false
    },
    {
      id: 'df-l2',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Air (massa jenis $1000\\ \\text{kg/m}^3$) mengalir dalam pipa. Bagian 1 berdiameter $20\\ \\text{cm}$, lajunya $1{,}5\\ \\text{m/s}$, dan tekanannya $2{,}0 \\times 10^5\\ \\text{Pa}$. Bagian 2 berdiameter $10\\ \\text{cm}$ dan letaknya $4{,}0\\ \\text{m}$ lebih tinggi daripada bagian 1. Gunakan $g = 10\\ \\text{m/s}^2$. Berapa tekanan di bagian 2 dalam pascal?',
      pilihan: [],
      jawaban: 143125,
      satuan: 'Pa',
      toleransi: 0.02,
      petunjuk: [
        'Cari laju $v_2$ dengan persamaan kontinuitas terlebih dahulu.',
        'Pada Bernoulli, bagian 2 lebih tinggi sehingga suku $\\rho g h$ mengurangi tekanan.'
      ],
      pembahasan: [
        'Kontinuitas: $v_2 = v_1 \\times (20/10)^2 = 1{,}5 \\times 4 = 6\\ \\text{m/s}$.',
        'Bernoulli: $P_2 = P_1 + \\tfrac{1}{2}\\rho\\,(v_1^2 - v_2^2) - \\rho g\\,\\Delta h$.',
        '$P_2 = 200\\,000 + 500\\,(2{,}25 - 36) - 1000 \\times 10 \\times 4$.',
        '$P_2 = 200\\,000 - 16\\,875 - 40\\,000 = 143\\,125\\ \\text{Pa}$.'
      ],
      tag: ['Bernoulli', 'kontinuitas'],
      ragu: false
    },
    {
      id: 'df-l3',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah venturimeter mendatar dialiri air (massa jenis $1000\\ \\text{kg/m}^3$). Diameter bagian lebar $8\\ \\text{cm}$ dan bagian sempit $4\\ \\text{cm}$. Beda tekanan kedua bagian dibaca oleh manometer raksa (massa jenis raksa $13\\,600\\ \\text{kg/m}^3$) yang selisih tinggi raksanya $10\\ \\text{cm}$. Gunakan $g = 10\\ \\text{m/s}^2$. Berapa laju air di bagian lebar?',
      pilihan: [],
      jawaban: 1.2961,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Manometer memberi $\\Delta P = (\\rho_{\\text{raksa}} - \\rho_{\\text{air}})\\,g\\,h$, dengan $h$ dalam meter.',
        'Hubungkan $v_2$ dengan $v_1$ lewat kontinuitas.',
        'Samakan $\\Delta P$ dari manometer dengan $\\tfrac{1}{2}\\rho\\,(v_2^2 - v_1^2)$.'
      ],
      pembahasan: [
        'Beda tekanan dari manometer: $\\Delta P = (13\\,600 - 1000) \\times 10 \\times 0{,}10 = 12\\,600\\ \\text{Pa}$.',
        'Kontinuitas: $v_2 = v_1 \\times (8/4)^2 = 4 v_1$.',
        'Bernoulli: $12\\,600 = \\tfrac{1}{2} \\times 1000 \\times (16 - 1)\\,v_1^2 = 7500\\,v_1^2$.',
        '$v_1^2 = 1{,}68 \\Rightarrow v_1 \\approx 1{,}30\\ \\text{m/s}$.'
      ],
      tag: ['venturimeter', 'manometer'],
      ragu: false
    },
    {
      id: 'df-l4',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Sebuah tangki setinggi $4\\ \\text{m}$ berdiri di atas tanah datar dan terisi air penuh sampai tepi atas (tangki terbuka). Lubang A dibuat pada kedalaman $1\\ \\text{m}$ dari permukaan air. Lubang B dibuat pada kedalaman lain di dinding yang sama sehingga air dari B jatuh di titik yang jaraknya dari dinding sama dengan jarak jatuh air dari A. Pada kedalaman berapa lubang B berada? (anggap permukaan air hampir tidak turun)',
      pilihan: [
        '$3\\ \\text{m}$',
        '$2\\ \\text{m}$',
        '$1{,}5\\ \\text{m}$',
        '$3{,}5\\ \\text{m}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Jarak jatuh: $x = 2\\sqrt{h\\,y}$ dengan $h$ kedalaman lubang dan $y$ tinggi lubang dari tanah.',
        'Tinggi lubang dari tanah adalah $4 - h$.',
        'Cari $h$ lain yang memberi hasil kali $h\\,(4 - h)$ sama dengan lubang A.'
      ],
      pembahasan: [
        'Lubang A: $h = 1\\ \\text{m}$, $y = 3\\ \\text{m}$, sehingga $h\\,y = 3$.',
        'Untuk lubang B berlaku $h\\,(4 - h) = 3$, yaitu $h^2 - 4h + 3 = 0$.',
        'Akar-akarnya $h = 1\\ \\text{m}$ (lubang A) dan $h = 3\\ \\text{m}$.',
        'Jadi lubang B berada pada kedalaman $3\\ \\text{m}$ (kedalaman $H - h$).'
      ],
      tag: ['Torricelli', 'jarak jatuh'],
      ragu: false
    },
    {
      id: 'df-l5',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pipa utama berdiameter $10\\ \\text{cm}$ dialiri air dengan laju $2\\ \\text{m/s}$. Pipa ini bercabang menjadi tiga pipa kecil yang identik, masing-masing berdiameter $5\\ \\text{cm}$, dan debit terbagi sama rata. Berapa laju air di setiap pipa cabang?',
      pilihan: [],
      jawaban: 2.6667,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Debit di pipa utama sama dengan jumlah debit ketiga cabang.',
        'Debit tiap cabang sepertiga debit utama, lalu bagi dengan luas satu cabang.'
      ],
      pembahasan: [
        'Debit utama: $Q = A_u\\,v_u$, dengan $A_u \\propto 10^2$.',
        'Tiap cabang membawa $Q/3$, dengan luas $A_c \\propto 5^2$.',
        '$v_c = \\dfrac{Q/3}{A_c} = \\dfrac{1}{3} \\times \\dfrac{10^2}{5^2} \\times 2 = \\dfrac{8}{3} \\approx 2{,}67\\ \\text{m/s}$.'
      ],
      tag: ['kontinuitas', 'debit'],
      ragu: false
    },
    /* ===================== EXPERT ===================== */
    {
      id: 'df-e1',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah tangki silinder tegak berpenampang $0{,}50\\ \\text{m}^2$ berisi air setinggi $2{,}0\\ \\text{m}$. Sebuah lubang kecil berluas $2{,}0\\ \\text{cm}^2$ dibuka di dasar tangki sehingga air mengalir keluar. Anggap tangki terbuka, aliran ideal, dan laju keluar mengikuti Torricelli pada setiap saat. Gunakan $g = 10\\ \\text{m/s}^2$. Berapa waktu (dalam sekon) sampai tangki kosong seluruhnya?',
      pilihan: [],
      jawaban: 1581.14,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Debit keluar $a\\sqrt{2gh}$ sama dengan laju berkurangnya volume tangki, $-A\\,dh/dt$.',
        'Pisahkan peubah: $dh/\\sqrt{h} = -(a/A)\\sqrt{2g}\\,dt$, lalu integralkan dari $h_0$ sampai 0.',
        'Ubah luas lubang ke m²: $2{,}0\\ \\text{cm}^2 = 2{,}0 \\times 10^{-4}\\ \\text{m}^2$.'
      ],
      pembahasan: [
        'Kekekalan volume: $A\\,\\dfrac{dh}{dt} = -a\\sqrt{2 g h}$.',
        'Pisahkan peubah: $\\dfrac{dh}{\\sqrt{h}} = -\\dfrac{a}{A}\\sqrt{2g}\\,dt$.',
        'Integral dari $h_0$ sampai 0: $2\\sqrt{h_0} = \\dfrac{a}{A}\\sqrt{2g}\\,T$, sehingga $T = \\dfrac{A}{a}\\sqrt{\\dfrac{2 h_0}{g}}$.',
        '$T = \\dfrac{0{,}50}{2{,}0 \\times 10^{-4}}\\sqrt{\\dfrac{2 \\times 2{,}0}{10}} = 2500 \\times 0{,}6325 \\approx 1581\\ \\text{s}$ (sekitar 26 menit).'
      ],
      tag: ['Torricelli', 'kalkulus', 'pengosongan tangki'],
      ragu: false
    },
    {
      id: 'df-e2',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah bola kecil berjari-jari $1{,}0\\ \\text{mm}$ dan massa jenis $2500\\ \\text{kg/m}^3$ dilepas dari keadaan diam dalam fluida kental bermassa jenis $1200\\ \\text{kg/m}^3$ dan koefisien viskositas $0{,}50\\ \\text{Pa s}$. Anggap hukum Stokes berlaku, gaya apung diperhitungkan, dan $g = 10\\ \\text{m/s}^2$. Berapa kecepatan terminal bola dalam m/s?',
      pilihan: [],
      jawaban: 0.0057778,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Pada kecepatan terminal percepatan nol, sehingga gaya-gaya vertikal seimbang.',
        'Berat ke bawah sama dengan gaya apung ditambah gaya Stokes.',
        'Volume bola $V = \\tfrac{4}{3}\\pi r^3$, gaya apung $= \\rho_f V g$.'
      ],
      pembahasan: [
        'Keseimbangan gaya: $\\rho_b V g = \\rho_f V g + 6\\pi\\eta r v_t$.',
        'Dengan $V = \\tfrac{4}{3}\\pi r^3$ diperoleh $v_t = \\dfrac{2 r^2 (\\rho_b - \\rho_f) g}{9\\eta}$.',
        '$v_t = \\dfrac{2 \\times (10^{-3})^2 \\times 1300 \\times 10}{9 \\times 0{,}50} = \\dfrac{0{,}026}{4{,}5}$.',
        '$v_t \\approx 5{,}78 \\times 10^{-3}\\ \\text{m/s}$.'
      ],
      tag: ['Stokes', 'kecepatan terminal'],
      ragu: false
    },
    {
      id: 'df-e3',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah sambungan pipa mendatar (reducer) menghubungkan pipa berdiameter $20\\ \\text{cm}$ dengan pipa berdiameter $10\\ \\text{cm}$. Air (massa jenis $1000\\ \\text{kg/m}^3$) mengalir dari pipa besar ke pipa kecil. Di pipa besar, lajunya $2{,}0\\ \\text{m/s}$ dan tekanan ukur (gauge) $1{,}5 \\times 10^5\\ \\text{Pa}$. Anggap fluida ideal. Hitung besar gaya total (searah aliran) yang dikerjakan air pada sambungan itu. Jawab dalam N. Tekanan atmosfer di luar sambungan saling meniadakan, jadi cukup pakai tekanan ukur.',
      pilihan: [],
      jawaban: 3392.92,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Cari $v_2$ dengan kontinuitas, lalu $P_2$ dengan Bernoulli (pipa mendatar).',
        'Terapkan hukum kedua Newton (momentum) pada air di dalam sambungan: gaya total pada air $= \\rho Q\\,(v_2 - v_1)$.',
        'Gaya pada air: $P_1 A_1 - P_2 A_2 - F$, dengan $F$ gaya dinding pada air. Gaya air pada sambungan sama besar dengan $F$.'
      ],
      pembahasan: [
        'Luas: $A_1 = \\pi (0{,}10)^2 = 0{,}031416\\ \\text{m}^2$, $A_2 = \\pi (0{,}05)^2 = 0{,}007854\\ \\text{m}^2$. Kontinuitas: $v_2 = 2 \\times 4 = 8\\ \\text{m/s}$.',
        'Bernoulli: $P_2 = 150\\,000 + 500\\,(4 - 64) = 120\\,000\\ \\text{Pa}$.',
        'Debit $Q = A_1 v_1 = 0{,}062832\\ \\text{m}^3\\text{/s}$, sehingga $\\rho Q\\,(v_2 - v_1) = 1000 \\times 0{,}062832 \\times 6 \\approx 377\\ \\text{N}$.',
        'Momentum: $P_1 A_1 - P_2 A_2 - F = 377$, sehingga $F = 4712{,}4 - 942{,}5 - 377{,}0 \\approx 3393\\ \\text{N}$.',
        'Gaya air pada sambungan sama besar dan searah aliran: sekitar $3{,}39 \\times 10^3\\ \\text{N}$.'
      ],
      tag: ['Bernoulli', 'momentum', 'kontinuitas'],
      ragu: false
    },
    {
      id: 'df-e4',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Air disemprotkan dari ujung selang berdiameter dalam $2{,}0\\ \\text{cm}$ dengan debit $3{,}0 \\times 10^{-3}\\ \\text{m}^3\\text{/s}$. Ujung selang berada $1{,}0\\ \\text{m}$ di atas tanah datar dan diarahkan $30^\\circ$ di atas horizontal. Abaikan hambatan udara dan gunakan $g = 10\\ \\text{m/s}^2$. Berapa jarak mendatar dari ujung selang ke titik air mengenai tanah?',
      pilihan: [],
      jawaban: 9.3588,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Laju keluar dari ujung selang: $v_0 = Q / A$ dengan $A = \\pi d^2/4$.',
        'Uraikan $v_0$ menjadi komponen mendatar dan vertikal.',
        'Waktu di udara: selesaikan $0 = 1{,}0 + v_{0y}\\,t - 5t^2$, ambil akar positif.'
      ],
      pembahasan: [
        'Luas ujung selang: $A = \\pi (0{,}01)^2 = 3{,}1416 \\times 10^{-4}\\ \\text{m}^2$, sehingga $v_0 = Q/A \\approx 9{,}549\\ \\text{m/s}$.',
        'Komponen: $v_{0x} = 9{,}549 \\cos 30^\\circ \\approx 8{,}270\\ \\text{m/s}$ dan $v_{0y} = 9{,}549 \\sin 30^\\circ \\approx 4{,}775\\ \\text{m/s}$.',
        'Waktu sampai tanah: $5t^2 - 4{,}775\\,t - 1{,}0 = 0 \\Rightarrow t = \\dfrac{4{,}775 + \\sqrt{22{,}80 + 20}}{10} \\approx 1{,}132\\ \\text{s}$.',
        '$x = v_{0x}\\,t \\approx 8{,}270 \\times 1{,}132 \\approx 9{,}36\\ \\text{m}$.'
      ],
      tag: ['debit', 'gerak parabola'],
      ragu: false
    },
    {
      id: 'df-e5',
      bab: 'dinamika-fluida',
      subbab: 'dinamika-fluida',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah tangki silinder tegak terisi air setinggi $h_0$ dan dikosongkan lewat lubang kecil di dasar (laju keluar mengikuti Torricelli, tangki terbuka). Bandingkan dua tahap: tahap I, tinggi air turun dari $h_0$ sampai $h_0/4$, dan tahap II, tinggi air turun dari $h_0/4$ sampai 0. Pernyataan manakah yang benar tentang lama kedua tahap?',
      pilihan: [
        'Kedua tahap berlangsung sama lama',
        'Tahap I berlangsung dua kali lebih lama daripada tahap II',
        'Tahap II berlangsung tiga kali lebih lama daripada tahap I',
        'Tahap II berlangsung dua kali lebih lama daripada tahap I'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Dari $A\\,dh/dt = -a\\sqrt{2gh}$, waktu pengosongan dari $h_a$ ke $h_b$ sebanding dengan $\\sqrt{h_a} - \\sqrt{h_b}$.',
        'Hitung $\\sqrt{h}$ pada $h_0$, $h_0/4$, dan 0.'
      ],
      pembahasan: [
        'Integrasi memberi waktu $t \\propto \\sqrt{h_a} - \\sqrt{h_b}$ untuk turun dari $h_a$ ke $h_b$.',
        'Tahap I: $\\sqrt{h_0} - \\sqrt{h_0/4} = \\sqrt{h_0} - \\tfrac{1}{2}\\sqrt{h_0} = \\tfrac{1}{2}\\sqrt{h_0}$.',
        'Tahap II: $\\sqrt{h_0/4} - 0 = \\tfrac{1}{2}\\sqrt{h_0}$.',
        'Keduanya sama, jadi kedua tahap berlangsung sama lama.'
      ],
      tag: ['Torricelli', 'kalkulus'],
      ragu: false
    }
  ]
};
