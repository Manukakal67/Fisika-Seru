window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['dinamika'] = {
  id: 'dinamika',
  judul: 'Dinamika Gerak',
  subbab: [
    {
      id: 'dinamika',
      judul: 'Dinamika Gerak',
      materi: {
        gambaranBesar: 'Kinematika hanya menggambarkan bagaimana benda bergerak, sedangkan dinamika menjawab mengapa benda bergerak seperti itu. Bayangkan mendorong lemari di kamar kos: kalau dorongannya kecil lemari diam saja, kalau cukup besar lemari mulai bergeser, dan makin berat lemarinya makin sulit dipercepat. Semua kejadian itu diringkas oleh tiga hukum Newton dan beberapa jenis gaya yang sering muncul, yaitu berat, normal, tegangan tali, dan gesekan.',
        konsep: [
          {
            judul: 'Gaya dan diagram benda bebas',
            teks: 'Gaya adalah dorongan atau tarikan yang bisa mengubah gerak benda. Gaya adalah vektor, jadi punya besar dan arah, dengan satuan newton (N). Untuk menyelesaikan soal dinamika, gambar satu benda saja dalam keadaan terpisah, lalu gambar semua gaya yang bekerja PADA benda itu sebagai panah. Gambar ini disebut diagram benda bebas. Pilih sumbu yang searah dengan percepatan (misalnya sejajar bidang miring), lalu uraikan gaya yang miring menjadi komponen pada sumbu-sumbu itu.'
          },
          {
            judul: 'Hukum I dan Hukum II Newton',
            teks: 'Hukum I (kelembaman): benda yang resultan gayanya nol akan tetap diam atau tetap bergerak lurus dengan kecepatan tetap. Kecenderungan mempertahankan keadaan gerak ini disebut inersia atau kelembaman, dan ukurannya adalah massa. Hukum II: jika resultan gaya tidak nol, benda mengalami percepatan yang searah dengan resultan gaya, sebanding dengan besarnya, dan berbanding terbalik dengan massa benda.',
            rumus: [
              {
                latex: '\\sum \\vec{F} = m\\,\\vec{a}',
                simbol: [
                  { s: '\\sum \\vec{F}', arti: 'resultan (jumlah vektor) semua gaya pada benda', satuan: 'N' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: '\\vec{a}', arti: 'percepatan benda', satuan: 'm/s²' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum III Newton',
            teks: 'Jika benda A mengerjakan gaya pada benda B, maka B mengerjakan gaya pada A yang sama besar dan berlawanan arah. Pasangan aksi-reaksi ini selalu bekerja pada benda yang BERBEDA, sehingga keduanya tidak pernah saling meniadakan dalam diagram benda bebas satu benda. Contoh: berat buku di meja (tarikan Bumi pada buku) berpasangan dengan tarikan buku pada Bumi, bukan dengan gaya normal dari meja.'
          },
          {
            judul: 'Gaya berat, gaya normal, dan tegangan tali',
            teks: 'Gaya berat $w$ adalah tarikan gravitasi Bumi pada benda dan selalu mengarah ke bawah. Di aplikasi ini dipakai $g = 10\\ \\text{m/s}^2$. Gaya normal $N$ adalah gaya dorong permukaan pada benda, tegak lurus permukaan. Besarnya tidak selalu sama dengan berat; ia ditentukan oleh persamaan gerak tegak lurus permukaan. Tegangan tali $T$ adalah gaya tarik tali pada benda yang terikat. Pada tali ringan dan katrol licin tak bermassa, besar $T$ sama di seluruh tali.',
            rumus: [
              {
                latex: 'w = m\\,g',
                simbol: [
                  { s: 'w', arti: 'gaya berat', satuan: 'N' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'g', arti: 'percepatan gravitasi (10 dalam aplikasi ini)', satuan: 'm/s²' }
                ]
              }
            ]
          },
          {
            judul: 'Gaya gesek statis dan kinetis',
            teks: 'Gesekan statis bekerja saat benda belum bergeser terhadap permukaan. Besarnya menyesuaikan gaya yang mencoba menggeser benda, sampai batas maksimum. Jika batas itu terlampaui, benda mulai meluncur dan gesekannya menjadi gesekan kinetis yang besarnya tetap. Pada umumnya $\\mu_k \\le \\mu_s$. Arah gesekan selalu melawan kecenderungan gerak relatif.',
            rumus: [
              {
                latex: 'f_{s,\\text{maks}} = \\mu_s\\,N',
                simbol: [
                  { s: 'f_{s,\\text{maks}}', arti: 'gaya gesek statis maksimum', satuan: 'N' },
                  { s: '\\mu_s', arti: 'koefisien gesek statis', satuan: 'tanpa satuan' },
                  { s: 'N', arti: 'gaya normal', satuan: 'N' }
                ]
              },
              {
                latex: 'f_k = \\mu_k\\,N',
                simbol: [
                  { s: 'f_k', arti: 'gaya gesek kinetis', satuan: 'N' },
                  { s: '\\mu_k', arti: 'koefisien gesek kinetis', satuan: 'tanpa satuan' },
                  { s: 'N', arti: 'gaya normal', satuan: 'N' }
                ]
              }
            ]
          },
          {
            judul: 'Bidang miring dan sistem dua benda',
            teks: 'Pada bidang miring bersudut $\\theta$, uraikan berat menjadi komponen sejajar bidang ($mg\\sin\\theta$, menarik benda turun) dan tegak lurus bidang ($mg\\cos\\theta$, diimbangi gaya normal). Untuk sistem dua benda yang dihubungkan tali, tulis Hukum II untuk tiap benda lalu gabungkan. Tali yang tegang membuat kedua benda punya besar percepatan yang sama. Benda yang bersentuhan juga punya percepatan yang sama dan saling mendorong dengan gaya kontak yang sama besar (Hukum III).',
            rumus: [
              {
                latex: 'a = g\\,(\\sin\\theta - \\mu_k \\cos\\theta)',
                simbol: [
                  { s: 'a', arti: 'percepatan balok meluncur turun di bidang miring kasar', satuan: 'm/s²' },
                  { s: '\\theta', arti: 'sudut kemiringan bidang', satuan: 'derajat' },
                  { s: '\\mu_k', arti: 'koefisien gesek kinetis', satuan: 'tanpa satuan' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' }
                ]
              },
              {
                latex: 'a = \\frac{(m_1 - m_2)\\,g}{m_1 + m_2}',
                simbol: [
                  { s: 'a', arti: 'besar percepatan kedua beban pada katrol tetap (Atwood sederhana)', satuan: 'm/s²' },
                  { s: 'm_1,\\ m_2', arti: 'massa beban yang lebih berat dan yang lebih ringan', satuan: 'kg' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' }
                ]
              }
            ]
          },
          {
            judul: 'Berat semu dalam lift dan gerak melingkar',
            teks: 'Berat semu adalah gaya normal yang dirasakan, misalnya yang ditunjukkan timbangan di dalam lift. Jika percepatan lift $a$ ke atas, $N = m(g + a)$; jika ke bawah, $N = m(g - a)$. Pada gerak melingkar, resultan gaya yang menuju pusat lingkaran disebut gaya sentripetal. Ia bukan gaya jenis baru, melainkan nama untuk resultan gaya radial (gesekan, tegangan tali, atau komponen gaya normal) yang membuat benda berbelok.',
            rumus: [
              {
                latex: 'N = m\\,(g + a)',
                simbol: [
                  { s: 'N', arti: 'gaya normal (berat semu) pada lift dengan percepatan a ke atas', satuan: 'N' },
                  { s: 'm', arti: 'massa orang', satuan: 'kg' },
                  { s: 'a', arti: 'percepatan lift (positif ke atas, negatif ke bawah)', satuan: 'm/s²' }
                ]
              },
              {
                latex: 'F_s = \\frac{m\\,v^2}{r}',
                simbol: [
                  { s: 'F_s', arti: 'gaya sentripetal (resultan gaya radial)', satuan: 'N' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'v', arti: 'laju benda', satuan: 'm/s' },
                  { s: 'r', arti: 'jari-jari lintasan', satuan: 'm' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Balok $4\\ \\text{kg}$ dilepas dari diam di bidang miring kasar bersudut $30^\\circ$ dengan $\\mu_s = 0{,}4$ dan $\\mu_k = 0{,}1$. Apakah balok meluncur, dan berapa percepatannya? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Gaya normal $N = mg\\cos 30^\\circ = 4 \\times 10 \\times 0{,}866 = 34{,}64\\ \\text{N}$ dan gaya penarik turun $mg\\sin 30^\\circ = 20\\ \\text{N}$.',
              'Gesekan statis maksimum $= 0{,}4 \\times 34{,}64 = 13{,}86\\ \\text{N}$. Karena $20 > 13{,}86$, balok meluncur.',
              'Gesekan kinetis $f_k = 0{,}1 \\times 34{,}64 = 3{,}464\\ \\text{N}$ ke atas bidang.',
              '$a = \\dfrac{20 - 3{,}464}{4} = 4{,}13\\ \\text{m/s}^2$ ke bawah bidang.'
            ],
            hasil: 'Balok meluncur dengan percepatan sekitar 4,13 m/s² menuruni bidang.'
          },
          {
            soal: 'Seorang bermassa $50\\ \\text{kg}$ berdiri di atas timbangan dalam lift yang naik dengan percepatan $1\\ \\text{m/s}^2$. Berapa gaya yang ditunjukkan timbangan? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Gaya pada orang: normal $N$ ke atas dan berat $mg$ ke bawah. Ambil arah atas positif.',
              'Hukum II: $N - mg = ma$.',
              '$N = m(g + a) = 50 \\times (10 + 1) = 550\\ \\text{N}$.'
            ],
            hasil: 'Timbangan menunjukkan gaya 550 N, lebih besar dari berat sebenarnya 500 N.'
          },
          {
            soal: 'Dua balok $4\\ \\text{kg}$ dan $2\\ \\text{kg}$ dihubungkan tali ringan yang melewati katrol tetap licin tak bermassa. Berapa percepatan sistem dan tegangan tali? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Balok $4\\ \\text{kg}$ turun, balok $2\\ \\text{kg}$ naik, dengan besar percepatan $a$ yang sama.',
              'Balok berat: $4g - T = 4a$. Balok ringan: $T - 2g = 2a$.',
              'Jumlahkan: $2g = 6a$ sehingga $a = \\dfrac{20}{6} = 3{,}33\\ \\text{m/s}^2$.',
              '$T = 2(g + a) = 2 \\times 13{,}33 = 26{,}67\\ \\text{N}$.'
            ],
            hasil: 'Percepatan sistem 3,33 m/s² dan tegangan tali 26,67 N.'
          },
          {
            soal: 'Sebuah mobil berbelok pada tikungan datar berjari-jari $20\\ \\text{m}$ dengan koefisien gesek statis ban-jalan $0{,}5$. Berapa laju maksimum agar tidak tergelincir? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Pada tikungan datar, hanya gesekan statis yang menyediakan gaya sentripetal.',
              'Gaya normal $N = mg$, jadi gesekan maksimum $\\mu_s mg$.',
              'Syarat batas: $\\mu_s mg = \\dfrac{m v^2}{r}$, sehingga $v = \\sqrt{\\mu_s g r}$.',
              '$v = \\sqrt{0{,}5 \\times 10 \\times 20} = \\sqrt{100} = 10\\ \\text{m/s}$.'
            ],
            hasil: 'Laju maksimum 10 m/s, dan nilainya tidak bergantung pada massa mobil.'
          }
        ],
        kesalahan: [
          'Mengira gaya normal selalu sama dengan berat. Di bidang miring $N = mg\\cos\\theta$, dan di dalam lift yang dipercepat $N$ berbeda dari $mg$.',
          'Menganggap gaya normal dan gaya berat adalah pasangan aksi-reaksi. Keduanya bekerja pada benda yang sama; pasangan aksi-reaksi selalu bekerja pada benda berbeda.',
          'Mengira benda yang bergerak pasti dipengaruhi resultan gaya. Menurut Hukum I, kecepatan tetap justru berarti resultan gaya nol.',
          'Memakai $f = \\mu N$ untuk gesekan statis padahal itu hanya batas maksimumnya. Sebelum meluncur, gesekan statis sama dengan gaya yang menahannya.',
          'Menambahkan gaya sentripetal sebagai gaya ekstra di diagram benda bebas. Gambar gaya sebenarnya (tegangan, normal, gesekan, berat), lalu resultan radialnya yang sama dengan $mv^2/r$.',
          'Lupa bahwa tegangan tali di dua sisi katrol tetap sama besar hanya jika katrol licin dan tak bermassa, serta salah menentukan benda mana yang naik atau turun pada sistem Atwood.'
        ],
        ringkasan: [
          'Hukum II: $\\sum \\vec{F} = m\\vec{a}$. Gambar diagram benda bebas untuk tiap benda dan tulis persamaannya per sumbu.',
          'Pasangan aksi-reaksi sama besar, berlawanan arah, dan bekerja pada dua benda yang berbeda.',
          'Gesekan: $f_{s,\\text{maks}} = \\mu_s N$ dan $f_k = \\mu_k N$. Benda tepat akan tergelincir di bidang miring saat $\\tan\\theta = \\mu_s$.',
          'Bidang miring: $mg\\sin\\theta$ sejajar bidang dan $N = mg\\cos\\theta$ tegak lurus bidang (tanpa gaya lain).',
          'Lift: $N = m(g + a)$ dengan $a$ positif ke atas. Gerak melingkar: resultan gaya radial $= mv^2/r$.'
        ],
        simulasi: {
          id: 'dinamika-bidang-miring',
          judul: 'Simulasi: balok di bidang miring dengan gaya-gaya yang bekerja',
          param: [
            { kunci: 'sudut', label: 'Sudut kemiringan', min: 0, max: 80, nilai: 30, satuan: '°', langkah: 1 },
            { kunci: 'massa', label: 'Massa balok', min: 1, max: 20, nilai: 5, satuan: 'kg', langkah: 1 },
            { kunci: 'mus', label: 'Koefisien gesek statis', min: 0, max: 1.2, nilai: 0.5, satuan: '', langkah: 0.05 },
            { kunci: 'muk', label: 'Koefisien gesek kinetis', min: 0, max: 1.2, nilai: 0.3, satuan: '', langkah: 0.05 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'din-p1',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok bermassa $8\\ \\text{kg}$ berada di atas lantai licin dan ditarik gaya mendatar $36\\ \\text{N}$. Berapa percepatan balok?',
      pilihan: [],
      jawaban: 4.5,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Lantai licin berarti tidak ada gaya gesek.',
        'Gunakan Hukum II Newton: $a = F/m$.'
      ],
      pembahasan: [
        'Tanpa gesekan, resultan gaya mendatar hanya gaya tarik $36\\ \\text{N}$.',
        '$a = \\dfrac{F}{m} = \\dfrac{36}{8} = 4{,}5\\ \\text{m/s}^2$.'
      ],
      tag: ['Hukum II Newton'],
      ragu: false
    },
    {
      id: 'din-p2',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah buku diam di atas meja. Gaya berat buku adalah gaya tarik Bumi pada buku. Manakah pasangan aksi-reaksi dari gaya berat itu menurut Hukum III Newton?',
      pilihan: [
        'Gaya normal dari meja pada buku',
        'Gaya tekan buku pada meja',
        'Gaya tarik buku pada Bumi',
        'Gaya gesek antara buku dan meja'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pasangan aksi-reaksi bekerja pada dua benda yang berbeda dan memiliki jenis gaya yang sama.',
        'Gaya berat adalah gaya gravitasi dari Bumi pada buku. Siapa yang mengerjakan gaya sebaliknya, dan pada siapa?'
      ],
      pembahasan: [
        'Gaya berat: Bumi menarik buku. Reaksinya: buku menarik Bumi dengan gaya gravitasi yang sama besar dan berlawanan arah.',
        'Gaya normal dari meja bekerja pada buku yang sama dengan berat, jadi bukan pasangan aksi-reaksinya. Keduanya hanya kebetulan sama besar karena buku diam.'
      ],
      tag: ['Hukum III Newton'],
      ragu: false
    },
    {
      id: 'din-p3',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah peti bermassa $5\\ \\text{kg}$ meluncur di lantai datar kasar dengan koefisien gesek kinetis $0{,}3$. Berapa besar gaya gesek kinetis pada peti? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 15,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Di lantai datar tanpa gaya vertikal lain, gaya normal sama dengan berat.',
        'Gunakan $f_k = \\mu_k N$.'
      ],
      pembahasan: [
        'Gaya normal $N = mg = 5 \\times 10 = 50\\ \\text{N}$.',
        '$f_k = \\mu_k N = 0{,}3 \\times 50 = 15\\ \\text{N}$.'
      ],
      tag: ['gesekan kinetis'],
      ragu: false
    },
    {
      id: 'din-p4',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Kecenderungan benda untuk mempertahankan keadaan diam atau gerak lurus beraturannya, yang menjadi inti Hukum I Newton, disebut ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['inersia', 'kelembaman', 'inertia'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ukuran sifat ini adalah massa benda.',
        'Penumpang bus terdorong ke depan saat bus mengerem mendadak karena sifat ini.'
      ],
      pembahasan: [
        'Hukum I Newton menyatakan benda mempertahankan keadaan geraknya bila resultan gaya nol.',
        'Sifat mempertahankan keadaan gerak itu disebut inersia atau kelembaman.'
      ],
      tag: ['Hukum I Newton', 'istilah'],
      ragu: false
    },
    {
      id: 'din-p5',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Seseorang berdiri di dalam lift yang bergerak naik dengan kecepatan tetap. Bagaimana besar gaya normal dari lantai lift pada orang itu dibandingkan dengan berat orang tersebut?',
      pilihan: [
        'Lebih besar dari berat',
        'Sama dengan berat',
        'Lebih kecil dari berat',
        'Sama dengan nol'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Kecepatan tetap berarti percepatannya nol.',
        'Percepatan nol berarti resultan gaya vertikal pada orang nol.'
      ],
      pembahasan: [
        'Kecepatan tetap, jadi $a = 0$ dan menurut Hukum II $N - mg = 0$.',
        'Dengan demikian $N = mg$: gaya normal sama dengan berat, walaupun lift sedang bergerak naik.'
      ],
      tag: ['lift', 'Hukum I Newton'],
      ragu: false
    },

    /* ===================== MENENGAH ===================== */
    {
      id: 'din-m1',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Balok bermassa $10\\ \\text{kg}$ ditarik gaya mendatar $50\\ \\text{N}$ di atas lantai datar kasar dengan koefisien gesek kinetis $0{,}2$. Berapa percepatan balok? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 3,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Hitung dulu gaya gesek kinetis dari gaya normal.',
        'Resultan gaya mendatar adalah gaya tarik dikurangi gesekan.'
      ],
      pembahasan: [
        'Gaya normal $N = mg = 100\\ \\text{N}$, sehingga $f_k = 0{,}2 \\times 100 = 20\\ \\text{N}$.',
        'Hukum II: $F - f_k = ma \\Rightarrow 50 - 20 = 10a$.',
        '$a = 3\\ \\text{m/s}^2$.'
      ],
      tag: ['Hukum II Newton', 'gesekan kinetis'],
      ragu: false
    },
    {
      id: 'din-m2',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Balok A bermassa $4\\ \\text{kg}$ berada di atas meja licin dan dihubungkan dengan tali ringan yang melewati katrol licin tak bermassa di tepi meja ke balok B bermassa $1\\ \\text{kg}$ yang menggantung. Sistem dilepas dari diam. Berapa tegangan tali? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 8,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Tulis Hukum II untuk balok A (mendatar) dan balok B (vertikal). Percepatan keduanya sama besar.',
        'Hanya tegangan tali yang menggerakkan A, sedangkan B digerakkan oleh selisih beratnya dan tegangan.'
      ],
      pembahasan: [
        'Balok A: $T = 4a$. Balok B: $1 \\times g - T = 1 \\times a$.',
        'Jumlahkan: $10 = 5a \\Rightarrow a = 2\\ \\text{m/s}^2$.',
        '$T = 4a = 4 \\times 2 = 8\\ \\text{N}$.'
      ],
      tag: ['sistem dua benda', 'tegangan tali'],
      ragu: false
    },
    {
      id: 'din-m3',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Seorang bermassa $60\\ \\text{kg}$ berdiri di atas timbangan di dalam lift yang bergerak turun dengan percepatan $2\\ \\text{m/s}^2$ (lift menambah lajunya ke bawah). Berapa gaya yang ditunjukkan timbangan? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [
        '$480\\ \\text{N}$',
        '$600\\ \\text{N}$',
        '$720\\ \\text{N}$',
        '$120\\ \\text{N}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ambil arah ke bawah sebagai arah percepatan. Berat searah percepatan, normal berlawanan.',
        'Hukum II: $mg - N = ma$.'
      ],
      pembahasan: [
        'Arah turun positif: $mg - N = ma$.',
        '$N = m(g - a) = 60 \\times (10 - 2) = 480\\ \\text{N}$.',
        'Hasil ini lebih kecil dari berat sebenarnya ($600\\ \\text{N}$), sehingga orang merasa lebih ringan.'
      ],
      tag: ['lift', 'berat semu'],
      ragu: false
    },
    {
      id: 'din-m4',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Sebuah peti diam di lantai kasar. Seseorang mendorongnya dengan gaya kecil sehingga peti belum bergeser sedikit pun. Jenis gaya gesek yang bekerja pada peti saat itu adalah gaya gesek ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['statis', 'statik'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Dua jenis gesekan dibedakan oleh apakah permukaan benda sudah bergeser relatif atau belum.',
        'Peti belum bergeser, dan gesekan ini sama besar dengan dorongan yang diberikan.'
      ],
      pembahasan: [
        'Peti masih diam, jadi tidak ada gerak relatif antara peti dan lantai.',
        'Gesekan yang bekerja pada keadaan ini adalah gesekan statis. Besarnya sama dengan dorongan (resultan nol) sampai batas maksimum $\\mu_s N$.'
      ],
      tag: ['gesekan statis', 'istilah'],
      ragu: false
    },
    {
      id: 'din-m5',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil melewati tikungan datar berbentuk busur lingkaran berjari-jari $50\\ \\text{m}$. Koefisien gesek statis antara ban dan jalan adalah $0{,}4$. Berapa laju maksimum mobil agar tidak tergelincir ke luar tikungan? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 14.142,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Di tikungan datar, gaya sentripetal hanya disediakan oleh gesekan statis.',
        'Pada laju maksimum, gesekan mencapai nilai maksimum $\\mu_s N$ dengan $N = mg$.'
      ],
      pembahasan: [
        'Syarat batas: $\\mu_s m g = \\dfrac{m v^2}{r}$. Massa saling meniadakan.',
        '$v = \\sqrt{\\mu_s g r} = \\sqrt{0{,}4 \\times 10 \\times 50} = \\sqrt{200}$.',
        '$v \\approx 14{,}14\\ \\text{m/s}$.'
      ],
      tag: ['gerak melingkar', 'gaya sentripetal'],
      ragu: false
    },

    /* ===================== LANJUT ===================== */
    {
      id: 'din-l1',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Dua balok bermassa $5\\ \\text{kg}$ dan $3\\ \\text{kg}$ dihubungkan dengan tali ringan yang melewati katrol tetap licin tak bermassa, sehingga keduanya menggantung (sistem Atwood sederhana). Sistem dilepas dari diam. Berapa tegangan tali? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 37.5,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Balok $5\\ \\text{kg}$ bergerak turun dan balok $3\\ \\text{kg}$ bergerak naik dengan besar percepatan sama.',
        'Tulis Hukum II untuk tiap balok, jumlahkan untuk mendapatkan $a$, lalu masukkan ke salah satu persamaan untuk $T$.'
      ],
      pembahasan: [
        'Balok $5\\ \\text{kg}$: $50 - T = 5a$. Balok $3\\ \\text{kg}$: $T - 30 = 3a$.',
        'Jumlahkan: $20 = 8a \\Rightarrow a = 2{,}5\\ \\text{m/s}^2$.',
        '$T = 30 + 3a = 30 + 7{,}5 = 37{,}5\\ \\text{N}$.'
      ],
      tag: ['katrol tetap', 'tegangan tali'],
      ragu: false
    },
    {
      id: 'din-l2',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok bermassa $10\\ \\text{kg}$ dilepas dari diam di puncak bidang miring kasar bersudut $30^\\circ$ terhadap horizontal. Koefisien gesek statis $0{,}5$ dan koefisien gesek kinetis $0{,}3$. Berapa waktu yang dibutuhkan balok untuk meluncur sejauh $4{,}0\\ \\text{m}$ sepanjang bidang? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 1.825,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Pastikan dulu balok memang meluncur: bandingkan $mg\\sin\\theta$ dengan gesekan statis maksimum.',
        'Setelah meluncur, percepatannya $a = g(\\sin\\theta - \\mu_k\\cos\\theta)$, lalu pakai $s = \\tfrac{1}{2}at^2$.'
      ],
      pembahasan: [
        'Cek: $\\tan 30^\\circ = 0{,}577 > \\mu_s = 0{,}5$, jadi balok meluncur.',
        '$a = 10\\,(0{,}5 - 0{,}3 \\times 0{,}866) = 2{,}402\\ \\text{m/s}^2$.',
        'Dari diam: $4 = \\tfrac{1}{2} \\times 2{,}402\\,t^2 \\Rightarrow t^2 = 3{,}331$.',
        '$t \\approx 1{,}825\\ \\text{s}$.'
      ],
      tag: ['bidang miring', 'gesekan'],
      ragu: false
    },
    {
      id: 'din-l3',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Balok bermassa $5\\ \\text{kg}$ berada di lantai datar kasar dengan $\\mu_s = 0{,}5$ dan $\\mu_k = 0{,}4$. Balok ditarik gaya mendatar $F$ yang grafiknya terhadap waktu berupa garis lurus miring naik dari titik asal: $F = 0$ pada $t = 0$ dan bertambah $10\\ \\text{N}$ setiap sekon. Balok mula-mula diam. Berapa percepatan balok pada $t = 4\\ \\text{s}$? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [
        '$3\\ \\text{m/s}^2$',
        '$8\\ \\text{m/s}^2$',
        '$0\\ \\text{m/s}^2$',
        '$4\\ \\text{m/s}^2$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Cari kapan balok mulai bergerak: saat $F$ melebihi gesekan statis maksimum.',
        'Setelah bergerak, gesekannya adalah gesekan kinetis, bukan statis.'
      ],
      pembahasan: [
        'Gesekan statis maksimum $= 0{,}5 \\times 50 = 25\\ \\text{N}$, tercapai pada $t = 2{,}5\\ \\text{s}$. Setelah itu balok bergerak.',
        'Pada $t = 4\\ \\text{s}$, $F = 40\\ \\text{N}$ dan gesekan kinetis $= 0{,}4 \\times 50 = 20\\ \\text{N}$.',
        '$a = \\dfrac{40 - 20}{5} = 4\\ \\text{m/s}^2$.'
      ],
      tag: ['grafik F-t', 'gesekan'],
      ragu: false
    },
    {
      id: 'din-l4',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok P bermassa $3\\ \\text{kg}$ dan balok Q bermassa $2\\ \\text{kg}$ bersentuhan di lantai datar kasar, dengan koefisien gesek kinetis $0{,}2$ untuk keduanya. Gaya mendatar $30\\ \\text{N}$ mendorong P, dan P mendorong Q sehingga keduanya bergerak bersama. Berapa besar gaya kontak antara P dan Q? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 12,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Cari dulu percepatan bersama dengan memperlakukan P dan Q sebagai satu sistem.',
        'Lalu tinjau balok Q saja: gaya kontak dikurangi gesekan pada Q sama dengan $m_Q\\,a$.'
      ],
      pembahasan: [
        'Seluruh sistem: gesekan total $= 0{,}2 \\times 50 = 10\\ \\text{N}$, sehingga $a = \\dfrac{30 - 10}{5} = 4\\ \\text{m/s}^2$.',
        'Balok Q: $N_{PQ} - 0{,}2 \\times 20 = 2a \\Rightarrow N_{PQ} - 4 = 8$.',
        '$N_{PQ} = 12\\ \\text{N}$.'
      ],
      tag: ['benda bersentuhan', 'gesekan'],
      ragu: false
    },
    {
      id: 'din-l5',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Seseorang bermassa $50\\ \\text{kg}$ berdiri di atas timbangan pegas di lantai lift. Grafik kecepatan lift terhadap waktu (arah naik dianggap positif) berbentuk: naik beraturan dari $0$ sampai $6\\ \\text{m/s}$ selama $3\\ \\text{s}$, lalu mendatar pada $6\\ \\text{m/s}$ selama $5\\ \\text{s}$, kemudian turun beraturan sampai $0$ selama $4\\ \\text{s}$. Berapa gaya yang ditunjukkan timbangan pada tahap terakhir, saat lift melambat? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 425,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan adalah kemiringan grafik kecepatan terhadap waktu. Pada tahap terakhir kemiringannya negatif.',
        'Hukum II dengan arah naik positif: $N - mg = ma$.'
      ],
      pembahasan: [
        'Tahap terakhir: $a = \\dfrac{0 - 6}{4} = -1{,}5\\ \\text{m/s}^2$ (percepatan ke bawah).',
        '$N - mg = ma \\Rightarrow N = m(g + a) = 50 \\times (10 - 1{,}5)$.',
        '$N = 425\\ \\text{N}$.'
      ],
      tag: ['lift', 'grafik v-t'],
      ragu: false
    },

    /* ===================== EXPERT ===================== */
    {
      id: 'din-e1',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Balok A bermassa $2\\ \\text{kg}$ diletakkan di atas balok B bermassa $4\\ \\text{kg}$, dan B berada di lantai licin. Koefisien gesek statis antara A dan B adalah $0{,}5$. Balok B ditarik gaya mendatar $F$. Berapa nilai maksimum $F$ agar A tidak tergelincir terhadap B? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 30,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Satu-satunya gaya mendatar pada A adalah gesekan statis dari B. Berapa percepatan terbesar yang bisa diberikan gesekan itu?',
        'Jika A tidak tergelincir, A dan B bergerak bersama dengan percepatan sama. Pakai seluruh sistem untuk mencari $F$.'
      ],
      pembahasan: [
        'Untuk A: $f_s = m_A a \\le \\mu_s m_A g$, sehingga $a_{\\text{maks}} = \\mu_s g = 5\\ \\text{m/s}^2$ (tidak bergantung massa A).',
        'A dan B bergerak bersama, sistem digerakkan oleh $F$ saja karena lantai licin: $F = (m_A + m_B)\\,a$.',
        '$F_{\\text{maks}} = 6 \\times 5 = 30\\ \\text{N}$.'
      ],
      tag: ['dua balok bertumpuk', 'gesekan statis'],
      ragu: false
    },
    {
      id: 'din-e2',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Balok M bermassa $6\\ \\text{kg}$ berada di bidang miring kasar bersudut $30^\\circ$ dengan $\\mu_s = 0{,}25$ dan $\\mu_k = 0{,}20$. Balok M dihubungkan dengan tali ringan yang melewati katrol licin tak bermassa di puncak bidang miring ke balok N bermassa $5\\ \\text{kg}$ yang menggantung vertikal. Sistem dilepas dari diam, dan balok N bergerak turun sehingga M naik sepanjang bidang. Berapa tegangan tali? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 45.633,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Untuk balok M yang naik sepanjang bidang, gesekan kinetis dan komponen berat $mg\\sin\\theta$ sama-sama mengarah ke bawah bidang.',
        'Tulis Hukum II untuk M (sejajar bidang) dan untuk N (vertikal), lalu jumlahkan untuk menghilangkan $T$.'
      ],
      pembahasan: [
        'Balok M: $T - Mg\\sin\\theta - \\mu_k Mg\\cos\\theta = Ma$, dengan $Mg\\sin\\theta = 30\\ \\text{N}$ dan $\\mu_k Mg\\cos\\theta = 10{,}392\\ \\text{N}$. Balok N: $50 - T = 5a$.',
        'Jumlahkan: $50 - 30 - 10{,}392 = 11a \\Rightarrow a = 0{,}8734\\ \\text{m/s}^2$.',
        '$T = 50 - 5a = 50 - 4{,}367 = 45{,}63\\ \\text{N}$.'
      ],
      tag: ['katrol dan bidang miring', 'sistem dua benda'],
      ragu: false
    },
    {
      id: 'din-e3',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah tikungan jalan berbentuk busur lingkaran berjari-jari $60\\ \\text{m}$ dibuat miring ke arah pusat tikungan. Sudut kemiringannya dirancang agar mobil yang melaju $72\\ \\text{km/jam}$ dapat berbelok tanpa memerlukan gaya gesek sama sekali. Berapa sudut kemiringan jalan terhadap horizontal (dalam derajat)? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 33.690,
      satuan: '',
      toleransi: 0.02,
      petunjuk: [
        'Ubah dulu laju ke m/s. Tanpa gesekan, hanya gaya normal (tegak lurus jalan miring) dan berat yang bekerja.',
        'Komponen vertikal normal menyeimbangkan berat, dan komponen horizontalnya menjadi gaya sentripetal. Bagi kedua persamaan.'
      ],
      pembahasan: [
        '$v = 72\\ \\text{km/jam} = 20\\ \\text{m/s}$.',
        'Vertikal: $N\\cos\\theta = mg$. Horizontal: $N\\sin\\theta = \\dfrac{mv^2}{r}$. Bagi: $\\tan\\theta = \\dfrac{v^2}{rg}$.',
        '$\\tan\\theta = \\dfrac{400}{60 \\times 10} = 0{,}6667 \\Rightarrow \\theta \\approx 33{,}69$ derajat.'
      ],
      tag: ['tikungan miring', 'gaya sentripetal'],
      ragu: false
    },
    {
      id: 'din-e4',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah papan datar diangkat salah satu ujungnya secara perlahan sehingga sudut kemiringannya $\\theta$ membesar. Balok bermassa $2{,}5\\ \\text{kg}$ yang berada di papan itu mulai tergelincir tepat ketika $\\theta = \\theta_c$. Jika koefisien gesek statis antara balok dan papan $0{,}75$, berapa $\\theta_c$?',
      pilihan: [
        '$30{,}0^\\circ$',
        '$36{,}9^\\circ$',
        '$41{,}4^\\circ$',
        '$48{,}6^\\circ$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pada saat tepat akan tergelincir, gesekan statis mencapai nilai maksimum $\\mu_s N$.',
        'Tulis keseimbangan sejajar dan tegak lurus bidang, lalu bagi persamaan pertama dengan kedua. Massa balok akan hilang.'
      ],
      pembahasan: [
        'Sejajar bidang: $mg\\sin\\theta_c = \\mu_s N$. Tegak lurus bidang: $N = mg\\cos\\theta_c$.',
        'Bagi: $\\tan\\theta_c = \\mu_s$, tidak bergantung pada massa.',
        '$\\theta_c = \\arctan(0{,}75) \\approx 36{,}9^\\circ$.'
      ],
      tag: ['bidang miring', 'syarat tergelincir'],
      ragu: false
    },
    {
      id: 'din-e5',
      bab: 'dinamika',
      subbab: 'dinamika',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah bola bermassa $0{,}5\\ \\text{kg}$ diikat pada tali ringan sepanjang $2{,}5\\ \\text{m}$ dan diputar sebagai ayunan konis: bola bergerak dalam lingkaran mendatar berjari-jari $1{,}5\\ \\text{m}$ dengan laju tetap, sedangkan ujung tali yang lain tetap di titik tinggi di atas pusat lingkaran. Berapa periode satu putaran bola? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 2.810,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Hitung tinggi titik gantung di atas bidang lingkaran dengan teorema Pythagoras.',
        'Komponen vertikal tegangan menyeimbangkan berat, dan komponen horizontalnya adalah gaya sentripetal $m\\omega^2 r$.'
      ],
      pembahasan: [
        'Tinggi: $h = \\sqrt{2{,}5^2 - 1{,}5^2} = 2\\ \\text{m}$, sehingga $\\tan\\theta = \\dfrac{r}{h} = 0{,}75$ ($\\theta$ diukur dari vertikal).',
        'Vertikal: $T\\cos\\theta = mg$. Horizontal: $T\\sin\\theta = m\\omega^2 r$. Bagi: $\\omega^2 = \\dfrac{g\\tan\\theta}{r} = \\dfrac{10 \\times 0{,}75}{1{,}5} = 5\\ \\text{rad}^2/\\text{s}^2$.',
        'Periode $T_p = \\dfrac{2\\pi}{\\omega} = \\dfrac{2\\pi}{\\sqrt{5}} \\approx 2{,}810\\ \\text{s}$.'
      ],
      tag: ['ayunan konis', 'gerak melingkar'],
      ragu: false
    }
  ]
};
