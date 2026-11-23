window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['benda-tegar'] = {
  id: 'benda-tegar',
  judul: 'Dinamika Benda Tegar',
  subbab: [
    {
      id: 'benda-tegar',
      judul: 'Dinamika Benda Tegar',
      materi: {
        gambaranBesar: 'Coba dorong pintu tepat di dekat engselnya, lalu dorong lagi di dekat gagangnya dengan gaya yang sama. Pintu jauh lebih mudah terbuka kalau kamu mendorong di dekat gagang, karena yang menentukan bukan hanya besar gaya tetapi juga letaknya. Bab ini membahas benda tegar, yaitu benda yang bentuknya tidak berubah ketika berputar, dan bagaimana torsi, momen inersia, serta momentum sudut mengatur gerak berputar, termasuk bola yang menggelinding turun dari bukit.',
        konsep: [
          {
            judul: 'Benda tegar, poros, dan torsi',
            teks: 'Benda tegar adalah benda yang jarak antar titik penyusunnya tidak berubah, jadi ia tidak melentur atau meregang saat berputar. Poros adalah garis tetap yang menjadi pusat putaran. Torsi (momen gaya) $\\tau$ adalah ukuran seberapa efektif sebuah gaya memutar benda terhadap poros. Besarnya sama dengan gaya dikali lengan gaya, yaitu jarak tegak lurus dari poros ke garis kerja gaya. Torsi yang memutar berlawanan arah jarum jam diberi tanda positif, yang searah jarum jam negatif.',
            rumus: [
              {
                latex: '\\tau = r\\,F\\,\\sin\\theta',
                simbol: [
                  { s: '\\tau', arti: 'torsi terhadap poros', satuan: 'N m' },
                  { s: 'r', arti: 'jarak dari poros ke titik kerja gaya', satuan: 'm' },
                  { s: 'F', arti: 'besar gaya', satuan: 'N' },
                  { s: '\\theta', arti: 'sudut antara vektor posisi r dan gaya F', satuan: 'derajat atau rad' }
                ]
              }
            ]
          },
          {
            judul: 'Momen inersia partikel dan sistem partikel',
            teks: 'Momen inersia $I$ adalah ukuran kemalasan benda untuk mengubah gerak putarnya, jadi perannya sama seperti massa pada gerak lurus. Nilainya bergantung pada massa dan juga pada sebaran massa terhadap poros: massa yang jauh dari poros menyumbang jauh lebih besar karena jaraknya dikuadratkan. Untuk satu partikel $I = m r^2$, dan untuk sistem partikel kita menjumlahkan semua sumbangan terhadap poros yang sama.',
            rumus: [
              {
                latex: 'I = \\sum_i m_i\\,r_i^2',
                simbol: [
                  { s: 'I', arti: 'momen inersia sistem terhadap poros yang dipilih', satuan: 'kg m²' },
                  { s: 'm_i', arti: 'massa partikel ke-i', satuan: 'kg' },
                  { s: 'r_i', arti: 'jarak tegak lurus partikel ke-i ke poros', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Momen inersia benda tegar yang umum',
            teks: 'Untuk benda kontinu, penjumlahan diganti integral $I = \\int r^2\\,dm$. Hasilnya untuk bentuk yang sering muncul diberikan di bawah ini. Perhatikan bahwa setiap nilai berlaku hanya untuk poros yang disebutkan. Semua massa $m$ dalam kg dan ukuran $L$, $R$ dalam m, sehingga $I$ bersatuan kg m². Cincin dan silinder berongga tipis punya sebaran massa paling jauh dari poros sehingga $I$-nya paling besar.',
            rumus: [
              {
                latex: 'I_{\\text{batang, pusat}} = \\tfrac{1}{12}\\,m\\,L^2',
                simbol: [
                  { s: 'I_{\\text{batang, pusat}}', arti: 'momen inersia batang homogen, poros melalui pusat dan tegak lurus batang', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa batang', satuan: 'kg' },
                  { s: 'L', arti: 'panjang batang', satuan: 'm' }
                ]
              },
              {
                latex: 'I_{\\text{batang, ujung}} = \\tfrac{1}{3}\\,m\\,L^2',
                simbol: [
                  { s: 'I_{\\text{batang, ujung}}', arti: 'momen inersia batang homogen, poros melalui salah satu ujung dan tegak lurus batang', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa batang', satuan: 'kg' },
                  { s: 'L', arti: 'panjang batang', satuan: 'm' }
                ]
              },
              {
                latex: 'I_{\\text{cakram}} = \\tfrac{1}{2}\\,m\\,R^2',
                simbol: [
                  { s: 'I_{\\text{cakram}}', arti: 'momen inersia cakram atau silinder pejal, poros melalui sumbu simetri', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'R', arti: 'jari-jari', satuan: 'm' }
                ]
              },
              {
                latex: 'I_{\\text{cincin}} = m\\,R^2',
                simbol: [
                  { s: 'I_{\\text{cincin}}', arti: 'momen inersia cincin atau silinder berongga tipis, poros melalui sumbu simetri', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'R', arti: 'jari-jari', satuan: 'm' }
                ]
              },
              {
                latex: 'I_{\\text{bola}} = \\tfrac{2}{5}\\,m\\,R^2',
                simbol: [
                  { s: 'I_{\\text{bola}}', arti: 'momen inersia bola pejal, poros melalui diameter', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa bola', satuan: 'kg' },
                  { s: 'R', arti: 'jari-jari bola', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Teorema sumbu sejajar',
            teks: 'Kadang poros tidak melalui pusat massa, misalnya batang yang diputar pada ujungnya. Teorema sumbu sejajar (teorema Steiner) mengatakan: momen inersia terhadap poros apa pun sama dengan momen inersia terhadap poros sejajar yang melalui pusat massa, ditambah massa dikali kuadrat jarak antar kedua poros. Cek dengan batang: $\\tfrac{1}{12}mL^2 + m(L/2)^2 = \\tfrac{1}{3}mL^2$.',
            rumus: [
              {
                latex: 'I = I_{\\text{pm}} + m\\,d^2',
                simbol: [
                  { s: 'I', arti: 'momen inersia terhadap poros yang digeser', satuan: 'kg m²' },
                  { s: 'I_{\\text{pm}}', arti: 'momen inersia terhadap poros sejajar melalui pusat massa', satuan: 'kg m²' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'd', arti: 'jarak antara kedua poros sejajar', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum II Newton untuk rotasi dan energi kinetik rotasi',
            teks: 'Padanan $F = ma$ untuk gerak putar adalah $\\tau = I\\alpha$, dengan $\\alpha$ percepatan sudut. Benda yang berputar juga menyimpan energi kinetik rotasi. Saat torsi bekerja, kerjanya sama dengan perubahan energi kinetik rotasi. Untuk soal tali yang dililitkan pada katrol bermassa, katrol dan beban ditinjau terpisah: beban memakai $F = ma$, katrol memakai $\\tau = I\\alpha$, dan keduanya dihubungkan oleh $a = \\alpha R$ bila tali tidak slip.',
            rumus: [
              {
                latex: '\\sum \\tau = I\\,\\alpha',
                simbol: [
                  { s: '\\sum \\tau', arti: 'jumlah torsi terhadap poros', satuan: 'N m' },
                  { s: 'I', arti: 'momen inersia terhadap poros yang sama', satuan: 'kg m²' },
                  { s: '\\alpha', arti: 'percepatan sudut', satuan: 'rad/s²' }
                ]
              },
              {
                latex: 'E_{k,\\text{rot}} = \\tfrac{1}{2}\\,I\\,\\omega^2',
                simbol: [
                  { s: 'E_{k,\\text{rot}}', arti: 'energi kinetik rotasi', satuan: 'J' },
                  { s: 'I', arti: 'momen inersia', satuan: 'kg m²' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' }
                ]
              }
            ]
          },
          {
            judul: 'Menggelinding tanpa slip',
            teks: 'Benda menggelinding tanpa slip bila titik kontaknya dengan permukaan sesaat diam. Akibatnya kecepatan pusat massa dan kecepatan sudut terkait. Energi kinetik totalnya adalah energi translasi pusat massa ditambah energi rotasi. Definisikan faktor bentuk $k = I/(mR^2)$: bola pejal $k = 0{,}4$, silinder pejal $k = 0{,}5$, cincin $k = 1$. Pada bidang miring dengan sudut $\\theta$ benda yang $k$-nya kecil lebih cepat sampai bawah, dan massa serta jari-jarinya tidak berpengaruh. Gaya gesek statis di titik kontak yang menjaga benda tidak slip tidak melakukan usaha, sehingga energi mekanik tetap. Soal di bab ini memakai $g = 10\\ \\text{m/s}^2$.',
            rumus: [
              {
                latex: 'v = \\omega\\,R',
                simbol: [
                  { s: 'v', arti: 'laju pusat massa', satuan: 'm/s' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'R', arti: 'jari-jari benda', satuan: 'm' }
                ]
              },
              {
                latex: 'E_k = \\tfrac{1}{2}\\,m\\,v^2 + \\tfrac{1}{2}\\,I\\,\\omega^2',
                simbol: [
                  { s: 'E_k', arti: 'energi kinetik total', satuan: 'J' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'I', arti: 'momen inersia terhadap sumbu melalui pusat massa', satuan: 'kg m²' }
                ]
              },
              {
                latex: 'a = \\frac{g\\,\\sin\\theta}{1 + \\dfrac{I}{m R^2}}',
                simbol: [
                  { s: 'a', arti: 'percepatan pusat massa sepanjang bidang miring', satuan: 'm/s²' },
                  { s: 'g', arti: 'percepatan gravitasi (10 m/s²)', satuan: 'm/s²' },
                  { s: '\\theta', arti: 'sudut bidang miring terhadap horizontal', satuan: 'derajat atau rad' },
                  { s: '\\dfrac{I}{m R^2}', arti: 'faktor bentuk k', satuan: 'tanpa satuan' }
                ]
              }
            ]
          },
          {
            judul: 'Momentum sudut dan keseimbangan benda tegar',
            teks: 'Momentum sudut $L = I\\omega$ adalah padanan momentum linear untuk rotasi. Bila torsi luar total nol, $L$ konstan: penari es memutar lebih cepat saat menarik lengan karena $I$ mengecil, dan piringan yang dijatuhi benda berputar lebih lambat karena $I$ membesar. Pada tumbukan singkat di benda berporos (misalnya peluru menancap di batang), momentum sudut terhadap poros kekal, tetapi energi mekanik tidak. Benda tegar seimbang bila jumlah gaya nol (tidak bergeser) dan jumlah torsi terhadap sembarang titik juga nol (tidak berputar). Titik berat adalah titik tempat berat benda dianggap bekerja, dan untuk g seragam letaknya sama dengan pusat massa.',
            rumus: [
              {
                latex: 'L = I\\,\\omega',
                simbol: [
                  { s: 'L', arti: 'momentum sudut', satuan: 'kg m²/s' },
                  { s: 'I', arti: 'momen inersia terhadap poros', satuan: 'kg m²' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' }
                ]
              },
              {
                latex: 'I_1\\,\\omega_1 = I_2\\,\\omega_2',
                simbol: [
                  { s: 'I_1,\\ I_2', arti: 'momen inersia sebelum dan sesudah', satuan: 'kg m²' },
                  { s: '\\omega_1,\\ \\omega_2', arti: 'kecepatan sudut sebelum dan sesudah', satuan: 'rad/s' }
                ]
              },
              {
                latex: '\\sum \\vec{F} = 0, \\qquad \\sum \\tau = 0',
                simbol: [
                  { s: '\\sum \\vec{F}', arti: 'jumlah vektor gaya luar', satuan: 'N' },
                  { s: '\\sum \\tau', arti: 'jumlah torsi terhadap titik acuan mana pun', satuan: 'N m' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebuah cakram pejal bermassa $4\\ \\text{kg}$ dan berjari-jari $0{,}50\\ \\text{m}$ berputar pada porosnya. Gaya $12\\ \\text{N}$ bekerja menyinggung tepi cakram. Berapa percepatan sudutnya?',
            langkah: [
              'Momen inersia cakram: $I = \\tfrac{1}{2} m R^2 = \\tfrac{1}{2}(4)(0{,}50)^2 = 0{,}50\\ \\text{kg m}^2$.',
              'Gaya menyinggung tepi berarti $\\theta = 90^\\circ$, jadi torsi $\\tau = R F = 0{,}50 \\times 12 = 6{,}0\\ \\text{N m}$.',
              'Hukum II Newton rotasi: $\\alpha = \\tau / I = 6{,}0 / 0{,}50$.',
              '$\\alpha = 12\\ \\text{rad/s}^2$.'
            ],
            hasil: 'Percepatan sudut cakram adalah 12 rad/s².'
          },
          {
            soal: 'Bola pejal dilepas dari diam dan menggelinding tanpa slip menuruni bidang miring kasar setinggi $1{,}4\\ \\text{m}$. Berapa laju pusat massanya di dasar? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Energi mekanik kekal karena gesekan statis tidak melakukan usaha: $m g h = \\tfrac{1}{2} m v^2 + \\tfrac{1}{2} I \\omega^2$.',
              'Untuk bola pejal $I = \\tfrac{2}{5} m R^2$ dan $\\omega = v/R$, jadi energi rotasi $= \\tfrac{1}{5} m v^2$.',
              'Maka $m g h = \\tfrac{7}{10} m v^2$, sehingga $v^2 = \\tfrac{10}{7}\\, g h = \\tfrac{10}{7}(10)(1{,}4) = 20$.',
              '$v = \\sqrt{20} \\approx 4{,}47\\ \\text{m/s}$.'
            ],
            hasil: 'Laju bola di dasar sekitar 4,47 m/s (lebih kecil daripada benda yang meluncur tanpa memutar, yaitu 5,29 m/s).'
          },
          {
            soal: 'Piringan dengan $I = 0{,}50\\ \\text{kg m}^2$ berputar bebas pada $6{,}0\\ \\text{rad/s}$. Sebuah cincin dengan $I = 0{,}30\\ \\text{kg m}^2$ dijatuhkan tepat sepusat ke piringan dan keduanya berputar bersama. Berapa kecepatan sudut akhirnya?',
            langkah: [
              'Tidak ada torsi luar terhadap poros, jadi momentum sudut kekal: $I_1 \\omega_1 = (I_1 + I_2)\\,\\omega_2$.',
              'Substitusi: $(0{,}50)(6{,}0) = (0{,}50 + 0{,}30)\\,\\omega_2$, yaitu $3{,}0 = 0{,}80\\,\\omega_2$.',
              '$\\omega_2 = 3{,}75\\ \\text{rad/s}$.'
            ],
            hasil: 'Kecepatan sudut akhir 3,75 rad/s. Energi kinetik berkurang karena ada gesekan saat kedua benda menyatu.'
          }
        ],
        kesalahan: [
          'Menganggap momen inersia hanya bergantung pada massa. Padahal sebaran massa terhadap poros ikut menentukan, dan nilainya berubah bila poros dipindah.',
          'Memakai $\\tau = rF$ tanpa memeriksa sudut. Hanya komponen gaya yang tegak lurus lengan yang memutar, jadi harus ada $\\sin\\theta$.',
          'Memakai rumus momen inersia untuk poros yang salah, misalnya $\\tfrac{1}{12}mL^2$ padahal batang diputar pada ujungnya (yang benar $\\tfrac{1}{3}mL^2$).',
          'Mengira benda yang menggelinding hanya punya energi translasi atau hanya energi rotasi. Energi kinetik totalnya adalah jumlah keduanya.',
          'Mengira benda yang lebih berat atau lebih besar selalu menggelinding lebih cepat. Percepatannya hanya ditentukan oleh sudut dan faktor bentuk $k$.',
          'Menganggap gesekan pada menggelinding tanpa slip mengurangi energi mekanik. Gesekan statis di titik kontak tidak melakukan usaha.',
          'Memakai kekekalan energi mekanik pada tumbukan peluru yang menancap. Tumbukan tersebut tidak lenting, yang kekal adalah momentum sudut terhadap poros.'
        ],
        ringkasan: [
          'Torsi $\\tau = rF\\sin\\theta$, dan hukum II Newton rotasi $\\sum\\tau = I\\alpha$.',
          'Momen inersia bergantung pada massa dan sebarannya terhadap poros, dan teorema sumbu sejajar $I = I_{\\text{pm}} + md^2$ memindahkan poros.',
          'Menggelinding tanpa slip: $v = \\omega R$, $E_k = \\tfrac{1}{2}mv^2 + \\tfrac{1}{2}I\\omega^2$, dan $a = g\\sin\\theta/(1+k)$ di bidang miring.',
          'Momentum sudut $L = I\\omega$ kekal bila torsi luar total nol.',
          'Benda tegar seimbang bila $\\sum F = 0$ dan $\\sum\\tau = 0$; pilih poros di titik yang melenyapkan gaya yang tidak diketahui.'
        ],
        simulasi: {
          id: 'benda-tegar-menggelinding',
          judul: 'Balapan menggelinding di bidang miring (panjang bidang 5 m, jari-jari kedua benda 0,25 m, mulai dari diam)',
          param: [
            { kunci: 'theta', label: 'Sudut bidang miring', min: 5, max: 60, nilai: 30, satuan: '°', langkah: 1 },
            { kunci: 'kA', label: 'Faktor bentuk benda A (k = I/mR²)', min: 0.1, max: 1, nilai: 0.4, satuan: '', langkah: 0.01 },
            { kunci: 'kB', label: 'Faktor bentuk benda B (k = I/mR²)', min: 0.1, max: 1, nilai: 1, satuan: '', langkah: 0.01 },
            { kunci: 't', label: 'Waktu', min: 0, max: 4, nilai: 1.5, satuan: 's', langkah: 0.1 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'bt-p1',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Seorang montir mendorong kunci inggris dengan gaya $36\\ \\text{N}$ yang tegak lurus terhadap gagang, pada titik $0{,}35\\ \\text{m}$ dari baut. Berapa torsi yang bekerja pada baut? (jawab dalam N m)',
      pilihan: [],
      jawaban: 12.6,
      satuan: 'N m',
      toleransi: 0.02,
      petunjuk: [
        'Torsi adalah gaya dikali lengan gaya.',
        'Gaya tegak lurus gagang berarti $\\sin\\theta = 1$.'
      ],
      pembahasan: [
        'Gaya tegak lurus gagang, jadi $\\theta = 90^\\circ$ dan $\\sin\\theta = 1$.',
        '$\\tau = r F \\sin\\theta = 0{,}35 \\times 36 \\times 1 = 12{,}6\\ \\text{N m}$.'
      ],
      tag: ['torsi'],
      ragu: false
    },
    {
      id: 'bt-p2',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Dua bola kecil bermassa $2\\ \\text{kg}$ dan $3\\ \\text{kg}$ dipasang pada kedua ujung batang ringan (massa batang diabaikan) sepanjang $2\\ \\text{m}$. Sistem berputar pada poros tegak lurus batang di titik tengahnya. Berapa momen inersia sistem?',
      pilihan: [
        '$2{,}5\\ \\text{kg m}^2$',
        '$10\\ \\text{kg m}^2$',
        '$5\\ \\text{kg m}^2$',
        '$20\\ \\text{kg m}^2$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Gunakan $I = \\sum m r^2$ dengan $r$ jarak ke poros.',
        'Poros di tengah, jadi setiap bola berjarak setengah panjang batang dari poros.'
      ],
      pembahasan: [
        'Jarak tiap bola ke poros $r = 1\\ \\text{m}$.',
        '$I = m_1 r^2 + m_2 r^2 = (2)(1)^2 + (3)(1)^2 = 5\\ \\text{kg m}^2$.'
      ],
      tag: ['momen inersia'],
      ragu: false
    },
    {
      id: 'bt-p3',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Besaran yang sama dengan hasil kali gaya dan lengan gaya, dan yang menyebabkan benda cenderung berputar terhadap suatu poros, disebut apa?',
      pilihan: [],
      jawaban: ['torsi', 'momen gaya'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pikirkan mengapa pintu lebih mudah dibuka bila didorong jauh dari engsel.',
        'Besaran ini punya dua nama, salah satunya diawali kata momen.'
      ],
      pembahasan: [
        'Hasil kali gaya dengan lengan gaya (jarak tegak lurus dari poros ke garis kerja gaya) adalah ukuran efek memutar gaya itu.',
        'Besaran tersebut disebut torsi atau momen gaya, bersatuan N m.'
      ],
      tag: ['torsi'],
      ragu: false
    },
    {
      id: 'bt-p4',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah cakram pejal homogen bermassa $4{,}0\\ \\text{kg}$ dan berjari-jari $0{,}30\\ \\text{m}$. Berapa momen inersianya terhadap poros yang melalui pusat dan tegak lurus cakram? (jawab dalam kg m²)',
      pilihan: [],
      jawaban: 0.18,
      satuan: 'kg m²',
      toleransi: 0.02,
      petunjuk: [
        'Cari rumus momen inersia cakram pejal terhadap sumbu simetrinya.',
        'Rumusnya memuat faktor $\\tfrac{1}{2}$.'
      ],
      pembahasan: [
        'Untuk cakram pejal $I = \\tfrac{1}{2} m R^2$.',
        '$I = \\tfrac{1}{2}(4{,}0)(0{,}30)^2 = 0{,}18\\ \\text{kg m}^2$.'
      ],
      tag: ['momen inersia'],
      ragu: false
    },
    {
      id: 'bt-p5',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah roda dengan momen inersia $0{,}60\\ \\text{kg m}^2$ diberi torsi total tetap $4{,}5\\ \\text{N m}$. Berapa percepatan sudutnya?',
      pilihan: [],
      jawaban: 7.5,
      satuan: 'rad/s²',
      toleransi: 0.02,
      petunjuk: [
        'Gunakan padanan hukum II Newton untuk rotasi.',
        '$\\alpha = \\tau / I$.'
      ],
      pembahasan: [
        'Hukum II Newton rotasi: $\\tau = I\\alpha$.',
        '$\\alpha = \\tau / I = 4{,}5 / 0{,}60 = 7{,}5\\ \\text{rad/s}^2$.'
      ],
      tag: ['hukum II rotasi'],
      ragu: false
    },

    /* ===================== MENENGAH ===================== */
    {
      id: 'bt-m1',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Roda gila dengan momen inersia $0{,}80\\ \\text{kg m}^2$ berputar tetap pada $120$ putaran per menit. Berapa energi kinetik rotasinya? (ingat satu putaran $= 2\\pi$ rad)',
      pilihan: [],
      jawaban: 63.165,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Ubah dulu $120$ putaran per menit menjadi rad/s.',
        'Satu putaran $= 2\\pi$ rad dan satu menit $= 60$ s.',
        'Gunakan $E_k = \\tfrac{1}{2} I \\omega^2$.'
      ],
      pembahasan: [
        '$\\omega = 120 \\times 2\\pi / 60 = 4\\pi \\approx 12{,}566\\ \\text{rad/s}$.',
        '$E_{k} = \\tfrac{1}{2} I \\omega^2 = \\tfrac{1}{2}(0{,}80)(12{,}566)^2$.',
        '$E_{k} \\approx 63{,}17\\ \\text{J}$.'
      ],
      tag: ['energi kinetik rotasi'],
      ragu: false
    },
    {
      id: 'bt-m2',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Bola pejal, silinder pejal, dan cincin tipis memiliki massa dan jari-jari yang sama. Ketiganya dilepas dari diam di puncak bidang miring yang sama dan menggelinding tanpa slip. Benda mana yang tiba paling dulu di dasar?',
      pilihan: [
        'Bola pejal',
        'Silinder pejal',
        'Cincin tipis',
        'Ketiganya tiba bersamaan'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Percepatan menggelinding $a = g\\sin\\theta / (1 + k)$ dengan $k = I/(mR^2)$.',
        'Benda dengan $k$ paling kecil punya percepatan terbesar.',
        'Bandingkan $k$: bola $0{,}4$, silinder $0{,}5$, cincin $1$.'
      ],
      pembahasan: [
        'Percepatan: $a = g\\sin\\theta / (1+k)$, tidak bergantung pada massa maupun jari-jari.',
        'Bola pejal $k = 0{,}4$ memberi $a$ terbesar, disusul silinder pejal ($k = 0{,}5$), lalu cincin ($k = 1$).',
        'Jadi bola pejal tiba paling dulu.'
      ],
      tag: ['menggelinding', 'faktor bentuk'],
      ragu: false
    },
    {
      id: 'bt-m3',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah batang homogen bermassa $3{,}0\\ \\text{kg}$ dan panjang $1{,}2\\ \\text{m}$. Berapa momen inersianya terhadap poros yang tegak lurus batang dan berjarak $0{,}20\\ \\text{m}$ dari pusat batang? (jawab dalam kg m²)',
      pilihan: [],
      jawaban: 0.48,
      satuan: 'kg m²',
      toleransi: 0.02,
      petunjuk: [
        'Mulai dari momen inersia batang terhadap pusatnya.',
        'Poros digeser sejajar, pakai teorema sumbu sejajar.'
      ],
      pembahasan: [
        '$I_{\\text{pm}} = \\tfrac{1}{12} m L^2 = \\tfrac{1}{12}(3{,}0)(1{,}2)^2 = 0{,}36\\ \\text{kg m}^2$.',
        'Sumbu sejajar: $I = I_{\\text{pm}} + m d^2 = 0{,}36 + (3{,}0)(0{,}20)^2$.',
        '$I = 0{,}36 + 0{,}12 = 0{,}48\\ \\text{kg m}^2$.'
      ],
      tag: ['sumbu sejajar', 'momen inersia'],
      ragu: false
    },
    {
      id: 'bt-m4',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Seorang penari es berputar pada $4{,}5\\ \\text{rad/s}$ dengan lengan terentang, momen inersianya $3{,}6\\ \\text{kg m}^2$. Ia lalu merapatkan lengan sehingga momen inersianya menjadi $1{,}5\\ \\text{kg m}^2$. Abaikan gesekan es. Berapa kecepatan sudutnya sekarang?',
      pilihan: [],
      jawaban: 10.8,
      satuan: 'rad/s',
      toleransi: 0.02,
      petunjuk: [
        'Tidak ada torsi luar, jadi momentum sudut kekal.',
        '$I_1\\omega_1 = I_2\\omega_2$.'
      ],
      pembahasan: [
        'Torsi luar nol sehingga $L = I\\omega$ kekal: $I_1\\omega_1 = I_2\\omega_2$.',
        '$\\omega_2 = I_1\\omega_1 / I_2 = (3{,}6)(4{,}5)/1{,}5 = 10{,}8\\ \\text{rad/s}$.'
      ],
      tag: ['momentum sudut'],
      ragu: false
    },
    {
      id: 'bt-m5',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Sebuah silinder menggelinding tanpa slip menuruni bidang miring kasar. Gaya gesek di titik kontaknya adalah gesekan jenis apa? (jawab dengan satu kata)',
      pilihan: [],
      jawaban: ['statis', 'statik'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Titik kontak silinder dengan bidang sesaat tidak bergerak terhadap bidang.',
        'Dua jenis gesekan: yang bekerja pada benda diam relatif dan yang bekerja pada benda yang meluncur.'
      ],
      pembahasan: [
        'Pada menggelinding tanpa slip titik kontak sesaat diam terhadap permukaan.',
        'Gesekan yang bekerja pada permukaan yang tidak bergeser relatif adalah gesekan statis.'
      ],
      tag: ['menggelinding', 'gesekan'],
      ragu: false
    },

    /* ===================== LANJUT ===================== */
    {
      id: 'bt-l1',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah katrol berbentuk silinder pejal bermassa $3{,}0\\ \\text{kg}$ dan berjari-jari $0{,}20\\ \\text{m}$ dapat berputar tanpa gesekan pada porosnya. Tali ringan dililitkan pada katrol (tidak slip) dan ujungnya menggantung beban $5{,}0\\ \\text{kg}$. Beban dilepas dari diam. Berapa tegangan tali? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 11.538,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Tinjau beban dan katrol secara terpisah: beban dengan $F = ma$, katrol dengan $\\tau = I\\alpha$.',
        'Tali tidak slip: $a = \\alpha R$.',
        'Torsi pada katrol hanya dari tegangan tali, $\\tau = T R$.'
      ],
      pembahasan: [
        'Beban: $m g - T = m a$.',
        'Katrol: $T R = \\tfrac{1}{2} M R^2 \\cdot (a/R)$, sehingga $T = \\tfrac{1}{2} M a$.',
        'Gabungkan: $a = m g / (m + M/2) = 50 / 6{,}5 \\approx 7{,}692\\ \\text{m/s}^2$.',
        '$T = \\tfrac{1}{2}(3{,}0)(7{,}692) \\approx 11{,}54\\ \\text{N}$.'
      ],
      tag: ['katrol bermassa', 'hukum II rotasi'],
      ragu: false
    },
    {
      id: 'bt-l2',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Bola pejal dilepas dari diam di puncak bidang miring dengan sudut $30^\\circ$ dan menggelinding tanpa slip. Setelah menempuh $7{,}0\\ \\text{m}$ sepanjang bidang, berapa laju pusat massa bola? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 7.0711,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Cari dulu percepatan pusat massa dengan faktor bentuk bola pejal, $k = 0{,}4$.',
        'Bola mulai dari diam dengan percepatan tetap: $v^2 = 2 a s$.'
      ],
      pembahasan: [
        '$a = g\\sin\\theta / (1+k) = (10)(0{,}5)/1{,}4 \\approx 3{,}571\\ \\text{m/s}^2$.',
        '$v^2 = 2 a s = 2(3{,}571)(7{,}0) = 50$.',
        '$v = \\sqrt{50} \\approx 7{,}071\\ \\text{m/s}$.'
      ],
      tag: ['menggelinding', 'bidang miring'],
      ragu: false
    },
    {
      id: 'bt-l3',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Tangga homogen bermassa $20\\ \\text{kg}$ dan panjang $5{,}0\\ \\text{m}$ bersandar pada dinding vertikal yang licin. Ujung bawahnya berada di lantai kasar, berjarak $3{,}0\\ \\text{m}$ dari dinding. Seorang tukang bermassa $60\\ \\text{kg}$ berdiri pada titik yang berjarak $2{,}0\\ \\text{m}$ dari ujung bawah tangga (diukur sepanjang tangga). Tangga masih diam. Berapa gaya gesek statis lantai pada tangga? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 255,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Dinding licin hanya memberi gaya normal (horizontal). Ketinggian ujung atas tangga $= \\sqrt{5^2 - 3^2}$.',
        'Ambil torsi terhadap ujung bawah tangga supaya gaya lantai tidak muncul.',
        'Syarat gaya horizontal: gesekan lantai sama dengan gaya normal dinding.'
      ],
      pembahasan: [
        'Tinggi ujung atas $= 4{,}0\\ \\text{m}$. Lengan horizontal berat tangga $1{,}5\\ \\text{m}$ dan berat tukang $2{,}0 \\times (3/5) = 1{,}2\\ \\text{m}$.',
        'Torsi terhadap ujung bawah nol: $N_d (4{,}0) = (200)(1{,}5) + (600)(1{,}2) = 1020\\ \\text{N m}$.',
        '$N_d = 255\\ \\text{N}$.',
        'Keseimbangan gaya horizontal: $f = N_d = 255\\ \\text{N}$.'
      ],
      tag: ['keseimbangan', 'tangga'],
      ragu: false
    },
    {
      id: 'bt-l4',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Cincin tipis dan silinder pejal bermassa dan berjari-jari sama dilepas dari diam dari ketinggian yang sama dan menggelinding tanpa slip menuruni bidang miring. Di dasar bidang, berapa perbandingan energi kinetik rotasi cincin terhadap energi kinetik rotasi silinder pejal?',
      pilihan: [
        '$\\tfrac{1}{2}$',
        '$\\tfrac{2}{3}$',
        '$1$',
        '$\\tfrac{3}{2}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Bagian energi total yang menjadi rotasi adalah $k/(1+k)$.',
        'Energi total di dasar sama untuk keduanya, yaitu $m g h$.'
      ],
      pembahasan: [
        'Dari $m g h = \\tfrac{1}{2} m v^2 (1 + k)$, bagian rotasi $= \\tfrac{1}{2} m v^2 k = m g h \\cdot k/(1+k)$.',
        'Cincin ($k=1$): $\\tfrac{1}{2} m g h$. Silinder pejal ($k = \\tfrac{1}{2}$): $\\tfrac{1}{3} m g h$.',
        'Perbandingan cincin : silinder $= \\tfrac{1/2}{1/3} = \\tfrac{3}{2}$.'
      ],
      tag: ['energi kinetik rotasi', 'menggelinding'],
      ragu: false
    },
    {
      id: 'bt-l5',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Silinder pejal bermassa $7{,}0\\ \\text{kg}$ menggelinding tanpa slip menuruni bidang miring dengan sudut $25^\\circ$ (dalam derajat). Berapa besar gaya gesek statis yang bekerja pada silinder? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 9.8611,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Gesekan statis arahnya ke atas bidang dan memberi torsi pada silinder.',
        'Tulis $m g\\sin\\theta - f = m a$ dan $f R = I\\alpha$ dengan $a = \\alpha R$.',
        'Untuk silinder pejal $I = \\tfrac{1}{2} m R^2$.'
      ],
      pembahasan: [
        'Rotasi: $f R = \\tfrac{1}{2} m R^2 (a/R)$, sehingga $f = \\tfrac{1}{2} m a$.',
        'Translasi: $m g\\sin\\theta - f = m a$, sehingga $a = \\tfrac{2}{3} g \\sin\\theta$.',
        '$f = \\tfrac{1}{3} m g \\sin\\theta = \\tfrac{1}{3}(7{,}0)(10)\\sin 25^\\circ \\approx 9{,}86\\ \\text{N}$.'
      ],
      tag: ['gesekan statis', 'menggelinding'],
      ragu: false
    },

    /* ===================== EXPERT ===================== */
    {
      id: 'bt-e1',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Batang homogen bermassa $2{,}0\\ \\text{kg}$ dan panjang $1{,}2\\ \\text{m}$ dapat berayun bebas di bidang vertikal pada poros tanpa gesekan di salah satu ujungnya. Pada ujung yang bebas dipasang benda kecil bermassa $0{,}50\\ \\text{kg}$. Sistem dilepas dari diam saat batang horizontal. Berapa kecepatan sudut sistem saat batang tepat vertikal (titik terendah)? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 4.6291,
      satuan: 'rad/s',
      toleransi: 0.02,
      petunjuk: [
        'Hitung momen inersia total terhadap poros: batang (sumbu sejajar dari pusat ke ujung) ditambah benda titik.',
        'Energi mekanik kekal. Pusat massa batang turun $L/2$ dan benda di ujung turun $L$.',
        'Samakan penurunan energi potensial dengan $\\tfrac{1}{2} I\\omega^2$.'
      ],
      pembahasan: [
        '$I = \\tfrac{1}{12} M L^2 + M (L/2)^2 + m L^2 = \\tfrac{1}{3}(2{,}0)(1{,}44) + (0{,}50)(1{,}44) = 0{,}96 + 0{,}72 = 1{,}68\\ \\text{kg m}^2$.',
        'Penurunan energi potensial: $M g (L/2) + m g L = (2{,}0)(10)(0{,}6) + (0{,}50)(10)(1{,}2) = 12 + 6 = 18\\ \\text{J}$.',
        '$\\tfrac{1}{2} I \\omega^2 = 18 \\Rightarrow \\omega^2 = 36 / 1{,}68 \\approx 21{,}43$.',
        '$\\omega \\approx 4{,}63\\ \\text{rad/s}$.'
      ],
      tag: ['sumbu sejajar', 'kekekalan energi'],
      ragu: false
    },
    {
      id: 'bt-e2',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Batang homogen bermassa $1{,}5\\ \\text{kg}$ dan panjang $1{,}0\\ \\text{m}$ menggantung diam dan dapat berputar bebas pada poros horizontal di ujung atasnya. Peluru bermassa $0{,}020\\ \\text{kg}$ bergerak horizontal dengan laju $300\\ \\text{m/s}$ menancap pada batang di titik yang berjarak $0{,}80\\ \\text{m}$ dari poros. Berapa kecepatan sudut batang sesaat setelah peluru menancap?',
      pilihan: [],
      jawaban: 9.3604,
      satuan: 'rad/s',
      toleransi: 0.02,
      petunjuk: [
        'Gaya dari poros bekerja saat tumbukan, tetapi torsinya terhadap poros nol, jadi momentum sudut terhadap poros kekal.',
        'Momentum sudut awal hanya dari peluru: $m v d$ dengan $d$ jarak ke poros.',
        'Momen inersia akhir $= \\tfrac{1}{3} M L^2 + m d^2$.'
      ],
      pembahasan: [
        'Momentum sudut awal: $L_0 = m v d = (0{,}020)(300)(0{,}80) = 4{,}8\\ \\text{kg m}^2/\\text{s}$.',
        'Momen inersia akhir: $I = \\tfrac{1}{3}(1{,}5)(1{,}0)^2 + (0{,}020)(0{,}80)^2 = 0{,}50 + 0{,}0128 = 0{,}5128\\ \\text{kg m}^2$.',
        '$\\omega = L_0 / I = 4{,}8 / 0{,}5128 \\approx 9{,}36\\ \\text{rad/s}$.'
      ],
      tag: ['momentum sudut', 'tumbukan'],
      ragu: false
    },
    {
      id: 'bt-e3',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Batang tipis tidak homogen sepanjang $L = 1{,}5\\ \\text{m}$ terletak sepanjang sumbu $x$ dari $x = 0$ sampai $x = L$. Massa per satuan panjangnya $\\lambda(x) = b\\,x$ dengan $b = 8{,}0\\ \\text{kg/m}^2$. Hitung momen inersia batang terhadap poros yang tegak lurus batang di $x = 0$. (jawab dalam kg m²)',
      pilihan: [],
      jawaban: 10.125,
      satuan: 'kg m²',
      toleransi: 0.02,
      petunjuk: [
        'Elemen massa $dm = \\lambda\\,dx = b\\,x\\,dx$.',
        'Momen inersia $I = \\int_0^L x^2\\,dm$.',
        'Integralkan $b\\,x^3$ dari $0$ sampai $L$.'
      ],
      pembahasan: [
        '$dm = b\\,x\\,dx$ dan jarak elemen ke poros adalah $x$.',
        '$I = \\int_0^L x^2\\, b\\,x\\,dx = b\\,\\dfrac{L^4}{4}$.',
        '$I = (8{,}0)(1{,}5)^4/4 = (8{,}0)(5{,}0625)/4 = 10{,}125\\ \\text{kg m}^2$.'
      ],
      tag: ['integral', 'momen inersia'],
      ragu: false
    },
    {
      id: 'bt-e4',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Peluru menancap pada batang yang menggantung dan dapat berputar pada poros tetap di ujung atasnya. Besaran manakah yang kekal sesaat sebelum dan sesudah tumbukan singkat itu?',
      pilihan: [
        'Momentum linear sistem peluru dan batang',
        'Momentum sudut sistem terhadap poros',
        'Energi kinetik sistem',
        'Energi mekanik sistem'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Poros menahan batang dan memberi gaya impuls yang besar selama tumbukan.',
        'Gaya impuls dari poros tidak punya torsi terhadap poros itu sendiri.',
        'Tumbukan di mana peluru menancap adalah tumbukan tidak lenting sempurna.'
      ],
      pembahasan: [
        'Gaya poros memberi impuls pada sistem, sehingga momentum linear tidak kekal.',
        'Torsi gaya poros terhadap poros itu sendiri nol, jadi momentum sudut terhadap poros kekal.',
        'Karena peluru menancap (tidak lenting), energi kinetik dan energi mekanik berkurang. Jawaban: momentum sudut terhadap poros.'
      ],
      tag: ['momentum sudut', 'tumbukan'],
      ragu: false
    },
    {
      id: 'bt-e5',
      bab: 'benda-tegar',
      subbab: 'benda-tegar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Bola pejal menggelinding menuruni bidang miring kasar dengan koefisien gesek statis $\\mu_s = 0{,}30$ antara bola dan bidang. Berapa sudut kemiringan terbesar (dalam derajat) agar bola masih menggelinding tanpa tergelincir?',
      pilihan: [],
      jawaban: 46.397,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Gesekan yang dibutuhkan agar tidak slip: $f = \\dfrac{k}{1+k}\\, m g \\sin\\theta$, dengan $k = 0{,}4$ untuk bola pejal.',
        'Gaya normal $N = m g \\cos\\theta$ dan syarat tidak slip: $f \\le \\mu_s N$.',
        'Sudut maksimum dicapai ketika $f = \\mu_s N$.'
      ],
      pembahasan: [
        'Rotasi dan translasi memberi $f = \\dfrac{k}{1+k}\\, m g\\sin\\theta = \\tfrac{2}{7}\\, m g\\sin\\theta$.',
        'Syarat tidak slip: $\\tfrac{2}{7}\\, m g\\sin\\theta \\le \\mu_s\\, m g\\cos\\theta$, sehingga $\\tan\\theta \\le \\tfrac{7}{2}\\mu_s = 1{,}05$.',
        '$\\theta_{\\text{maks}} = \\arctan(1{,}05) \\approx 46{,}4^\\circ$.'
      ],
      tag: ['syarat tidak slip', 'gesekan statis'],
      ragu: false
    }
  ]
};
