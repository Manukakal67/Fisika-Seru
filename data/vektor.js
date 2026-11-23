window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['vektor'] = {
  id: 'vektor',
  judul: 'Vektor',
  subbab: [
    {
      id: 'vektor',
      judul: 'Vektor',
      materi: {
        gambaranBesar: 'Bayangkan kamu bertanya arah ke warung: jawaban "dua kilometer" saja belum cukup, kamu juga perlu tahu ke mana. Besaran yang butuh angka sekaligus arah seperti itulah yang disebut vektor, dan bab ini mengajarkan cara menghitungnya. Kalau dua orang menarik gerobak dengan arah berbeda, hasil tarikan keduanya tidak sekadar dijumlahkan angkanya, tetapi digabung lewat aturan khusus penjumlahan vektor.',
        konsep: [
          {
            judul: 'Skalar dan vektor',
            teks: 'Besaran skalar hanya punya nilai (besar), misalnya massa, waktu, suhu, jarak, dan kelajuan. Besaran vektor punya besar sekaligus arah, misalnya perpindahan, kecepatan, percepatan, dan gaya. Vektor digambar sebagai anak panah: panjang anak panah menyatakan besarnya, dan arah panah menyatakan arahnya. Ujung yang runcing disebut kepala, pangkalnya disebut ekor. Pada tulisan, vektor diberi tanda panah di atas hurufnya, misalnya $\\vec{A}$, sedangkan besarnya ditulis $A$ atau $|\\vec{A}|$.'
          },
          {
            judul: 'Komponen vektor',
            teks: 'Sebuah vektor di bidang dapat diuraikan menjadi dua komponen yang saling tegak lurus, yaitu searah sumbu x dan searah sumbu y. Sudut $\\theta$ diukur dari sumbu x positif berlawanan arah jarum jam. Sebaliknya, kalau komponennya sudah diketahui, besar dan arah vektor dapat dicari dengan teorema Pythagoras dan fungsi tangen. Hati-hati dengan kuadran: kalkulator hanya memberi sudut di antara $-90^\\circ$ dan $90^\\circ$, jadi periksa tanda $A_x$ dan $A_y$.',
            rumus: [
              {
                latex: 'A_x = A\\cos\\theta, \\qquad A_y = A\\sin\\theta',
                simbol: [
                  { s: 'A_x', arti: 'komponen vektor searah sumbu x', satuan: 'sesuai besaran vektornya' },
                  { s: 'A_y', arti: 'komponen vektor searah sumbu y', satuan: 'sesuai besaran vektornya' },
                  { s: 'A', arti: 'besar vektor', satuan: 'sesuai besaran vektornya' },
                  { s: '\\theta', arti: 'sudut terhadap sumbu x positif', satuan: 'derajat' }
                ]
              },
              {
                latex: 'A = \\sqrt{A_x^2 + A_y^2}, \\qquad \\tan\\theta = \\frac{A_y}{A_x}',
                simbol: [
                  { s: 'A', arti: 'besar vektor', satuan: 'sesuai besaran vektornya' },
                  { s: 'A_x, A_y', arti: 'komponen vektor', satuan: 'sesuai besaran vektornya' },
                  { s: '\\theta', arti: 'arah vektor terhadap sumbu x positif', satuan: 'derajat' }
                ]
              }
            ]
          },
          {
            judul: 'Vektor satuan dan notasi i, j, k',
            teks: 'Vektor satuan adalah vektor yang besarnya tepat 1 dan hanya berfungsi menunjukkan arah. Pada sumbu x, y, dan z, vektor satuannya ditulis $\\hat{i}$, $\\hat{j}$, dan $\\hat{k}$. Dengan notasi ini sebuah vektor ditulis sebagai jumlah komponen-komponennya. Besar vektor di ruang tiga dimensi diperoleh dari akar jumlah kuadrat ketiga komponennya.',
            rumus: [
              {
                latex: '\\vec{A} = A_x\\,\\hat{i} + A_y\\,\\hat{j} + A_z\\,\\hat{k}, \\qquad |\\vec{A}| = \\sqrt{A_x^2 + A_y^2 + A_z^2}',
                simbol: [
                  { s: '\\hat{i}, \\hat{j}, \\hat{k}', arti: 'vektor satuan searah sumbu x, y, z', satuan: 'tanpa satuan' },
                  { s: 'A_x, A_y, A_z', arti: 'komponen vektor', satuan: 'sesuai besaran vektornya' },
                  { s: '|\\vec{A}|', arti: 'besar vektor', satuan: 'sesuai besaran vektornya' }
                ]
              }
            ]
          },
          {
            judul: 'Penjumlahan dan pengurangan secara grafis',
            teks: 'Ada tiga cara menggambar penjumlahan vektor. Metode segitiga: ekor vektor kedua disambung ke kepala vektor pertama, resultan ditarik dari ekor pertama ke kepala kedua. Metode jajargenjang: kedua vektor digambar dari titik pangkal yang sama, resultan adalah diagonal jajargenjang. Metode poligon: untuk banyak vektor, semuanya disambung ekor ke kepala, resultan menutup poligon. Pengurangan $\\vec{A} - \\vec{B}$ sama dengan menjumlahkan $\\vec{A}$ dengan $-\\vec{B}$, yaitu vektor yang besarnya sama dengan $\\vec{B}$ tetapi arahnya berlawanan.'
          },
          {
            judul: 'Penjumlahan secara analitis',
            teks: 'Cara paling andal adalah menjumlahkan komponennya satu per satu. Uraikan setiap vektor, jumlahkan semua komponen x, jumlahkan semua komponen y, lalu cari besar dan arah resultan dari kedua jumlah itu. Untuk dua vektor yang mengapit sudut $\\alpha$ ketika ekornya berimpit, besar resultan juga bisa dicari dengan aturan cosinus. Kasus khusus: searah ($\\alpha = 0^\\circ$) memberi $R = A + B$, berlawanan arah ($\\alpha = 180^\\circ$) memberi $R = |A - B|$, dan saling tegak lurus ($\\alpha = 90^\\circ$) memberi $R = \\sqrt{A^2 + B^2}$.',
            rumus: [
              {
                latex: 'R_x = \\sum A_x, \\qquad R_y = \\sum A_y, \\qquad R = \\sqrt{R_x^2 + R_y^2}',
                simbol: [
                  { s: 'R_x, R_y', arti: 'komponen resultan', satuan: 'sesuai besaran vektornya' },
                  { s: 'R', arti: 'besar resultan', satuan: 'sesuai besaran vektornya' }
                ]
              },
              {
                latex: 'R = \\sqrt{A^2 + B^2 + 2AB\\cos\\alpha}',
                simbol: [
                  { s: 'R', arti: 'besar resultan dua vektor', satuan: 'sesuai besaran vektornya' },
                  { s: 'A, B', arti: 'besar kedua vektor', satuan: 'sesuai besaran vektornya' },
                  { s: '\\alpha', arti: 'sudut apit kedua vektor (ekor berimpit)', satuan: 'derajat' }
                ]
              }
            ]
          },
          {
            judul: 'Perkalian titik (dot product)',
            teks: 'Perkalian titik dua vektor menghasilkan skalar. Nilainya besar bila kedua vektor searah, nol bila tegak lurus, dan negatif bila membentuk sudut tumpul. Contoh dalam fisika adalah usaha $W = \\vec{F}\\cdot\\vec{d}$. Dari rumus ini sudut apit dua vektor dapat dicari, dan proyeksi skalar $\\vec{A}$ pada arah $\\vec{B}$ adalah $\\vec{A}\\cdot\\vec{B}/|\\vec{B}|$. Syarat dua vektor saling tegak lurus adalah hasil kali titiknya nol.',
            rumus: [
              {
                latex: '\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta = A_xB_x + A_yB_y + A_zB_z',
                simbol: [
                  { s: '\\vec{A}\\cdot\\vec{B}', arti: 'hasil kali titik (skalar)', satuan: 'perkalian satuan kedua vektor' },
                  { s: '\\theta', arti: 'sudut antara kedua vektor', satuan: 'derajat' },
                  { s: 'A, B', arti: 'besar kedua vektor', satuan: 'sesuai besaran vektornya' }
                ]
              }
            ]
          },
          {
            judul: 'Perkalian silang (cross product)',
            teks: 'Perkalian silang dua vektor menghasilkan vektor baru yang tegak lurus bidang yang dibentuk kedua vektor itu. Arahnya ditentukan aturan tangan kanan: putar keempat jari dari $\\vec{A}$ ke $\\vec{B}$ lewat sudut terkecil, maka ibu jari menunjuk arah $\\vec{A}\\times\\vec{B}$. Urutan penting: $\\vec{A}\\times\\vec{B} = -\\vec{B}\\times\\vec{A}$. Hasilnya nol bila kedua vektor sejajar atau berlawanan arah, dan besarnya sama dengan luas jajargenjang yang dibentuk kedua vektor. Contoh dalam fisika adalah torsi dan gaya magnet.',
            rumus: [
              {
                latex: '|\\vec{A}\\times\\vec{B}| = AB\\sin\\theta',
                simbol: [
                  { s: '|\\vec{A}\\times\\vec{B}|', arti: 'besar hasil kali silang', satuan: 'perkalian satuan kedua vektor' },
                  { s: '\\theta', arti: 'sudut antara kedua vektor', satuan: 'derajat' }
                ]
              },
              {
                latex: '\\vec{A}\\times\\vec{B} = (A_yB_z - A_zB_y)\\,\\hat{i} + (A_zB_x - A_xB_z)\\,\\hat{j} + (A_xB_y - A_yB_x)\\,\\hat{k}',
                simbol: [
                  { s: 'A_x, A_y, A_z', arti: 'komponen vektor pertama', satuan: 'sesuai besaran vektornya' },
                  { s: 'B_x, B_y, B_z', arti: 'komponen vektor kedua', satuan: 'sesuai besaran vektornya' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebuah gaya $F = 20\\ \\text{N}$ bekerja pada sudut $30^\\circ$ terhadap sumbu x positif. Tentukan komponen $F_x$ dan $F_y$.',
            langkah: [
              'Gunakan $F_x = F\\cos\\theta$ dan $F_y = F\\sin\\theta$.',
              '$F_x = 20 \\cos 30^\\circ = 20 \\times 0{,}866 = 17{,}32\\ \\text{N}$.',
              '$F_y = 20 \\sin 30^\\circ = 20 \\times 0{,}5 = 10\\ \\text{N}$.'
            ],
            hasil: '$F_x \\approx 17{,}3\\ \\text{N}$ dan $F_y = 10\\ \\text{N}$.'
          },
          {
            soal: 'Dua vektor $\\vec{A} = 3\\hat{i} + 2\\hat{j}$ dan $\\vec{B} = -1\\hat{i} + 6\\hat{j}$ (dalam meter). Tentukan besar $\\vec{A} + \\vec{B}$ dan arahnya terhadap sumbu x positif.',
            langkah: [
              'Jumlahkan komponen x: $R_x = 3 + (-1) = 2\\ \\text{m}$.',
              'Jumlahkan komponen y: $R_y = 2 + 6 = 8\\ \\text{m}$.',
              'Besar: $R = \\sqrt{2^2 + 8^2} = \\sqrt{68} = 8{,}246\\ \\text{m}$.',
              'Arah: $\\tan\\theta = 8/2 = 4$, sehingga $\\theta = 75{,}96^\\circ$ (kuadran I karena $R_x$ dan $R_y$ positif).'
            ],
            hasil: '$R \\approx 8{,}25\\ \\text{m}$ dengan arah $\\approx 76^\\circ$ dari sumbu x positif.'
          },
          {
            soal: 'Tentukan sudut antara $\\vec{A} = 2\\hat{i} + 2\\hat{j} + \\hat{k}$ dan $\\vec{B} = 3\\hat{i} - 4\\hat{k}$ (tanpa satuan).',
            langkah: [
              'Hasil kali titik: $\\vec{A}\\cdot\\vec{B} = 2\\cdot 3 + 2\\cdot 0 + 1\\cdot(-4) = 2$.',
              'Besar: $|\\vec{A}| = \\sqrt{4 + 4 + 1} = 3$ dan $|\\vec{B}| = \\sqrt{9 + 16} = 5$.',
              'Dari $\\cos\\theta = \\vec{A}\\cdot\\vec{B}/(AB) = 2/15 = 0{,}1333$, diperoleh $\\theta = 82{,}3^\\circ$.'
            ],
            hasil: '$\\theta \\approx 82^\\circ$ (hampir tegak lurus).'
          },
          {
            soal: 'Hitung $\\vec{A}\\times\\vec{B}$ untuk $\\vec{A} = 2\\hat{i}$ dan $\\vec{B} = 3\\hat{j}$ serta tentukan arahnya.',
            langkah: [
              'Gunakan $\\hat{i}\\times\\hat{j} = \\hat{k}$, sehingga $\\vec{A}\\times\\vec{B} = 2\\cdot 3\\,(\\hat{i}\\times\\hat{j}) = 6\\hat{k}$.',
              'Cek dengan aturan tangan kanan: putar jari dari sumbu x ke sumbu y, ibu jari menunjuk sumbu z positif.',
              'Cek besar: $AB\\sin 90^\\circ = 2\\cdot 3 \\cdot 1 = 6$.'
            ],
            hasil: '$\\vec{A}\\times\\vec{B} = 6\\hat{k}$, besarnya 6 dan arahnya sumbu z positif.'
          }
        ],
        kesalahan: [
          'Menjumlahkan besar vektor begitu saja ($5 + 3 = 8$) padahal arahnya berbeda. Besar resultan hanya sama dengan jumlah besar bila kedua vektor searah.',
          'Tertukar antara cos dan sin: komponen x memakai cos hanya bila sudut diukur dari sumbu x. Jika sudut diukur dari sumbu y, perannya terbalik.',
          'Mengira arah hasil $\\arctan(R_y/R_x)$ dari kalkulator selalu benar. Untuk $R_x$ negatif, tambahkan $180^\\circ$ agar sesuai kuadran.',
          'Menganggap hasil kali titik adalah vektor dan hasil kali silang adalah skalar. Yang benar sebaliknya: titik menghasilkan skalar, silang menghasilkan vektor.',
          'Mengira $\\vec{A}\\times\\vec{B} = \\vec{B}\\times\\vec{A}$. Padahal urutan menentukan arah, dan keduanya berlawanan tanda.',
          'Menyamakan jarak dengan perpindahan. Jarak adalah skalar, perpindahan adalah vektor yang hanya bergantung posisi awal dan akhir.',
          'Lupa bahwa vektor sejajar punya perkalian silang nol, sedangkan vektor tegak lurus punya perkalian titik nol. Dua syarat ini sering tertukar.'
        ],
        ringkasan: [
          'Skalar hanya punya besar, vektor punya besar dan arah.',
          'Komponen: $A_x = A\\cos\\theta$ dan $A_y = A\\sin\\theta$; besar $A = \\sqrt{A_x^2 + A_y^2}$.',
          'Penjumlahan vektor paling aman lewat komponen: jumlahkan semua komponen x dan semua komponen y.',
          'Dua vektor dengan sudut apit $\\alpha$: $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\alpha}$.',
          'Dot product menghasilkan skalar ($AB\\cos\\theta$); nol berarti tegak lurus.',
          'Cross product menghasilkan vektor ($AB\\sin\\theta$) dengan arah aturan tangan kanan; nol berarti sejajar.'
        ],
        simulasi: {
          id: 'vektor-resultan',
          judul: 'Resultan dua vektor (ekor ke kepala)',
          param: [
            { kunci: 'A', label: 'Besar vektor A', min: 1, max: 10, nilai: 5, satuan: 'satuan', langkah: 0.5 },
            { kunci: 'thA', label: 'Sudut vektor A', min: 0, max: 360, nilai: 30, satuan: '°', langkah: 5 },
            { kunci: 'B', label: 'Besar vektor B', min: 1, max: 10, nilai: 4, satuan: 'satuan', langkah: 0.5 },
            { kunci: 'thB', label: 'Sudut vektor B', min: 0, max: 360, nilai: 110, satuan: '°', langkah: 5 }
          ]
        }
      }
    }
  ],
  soal: [
    // ---------------- PEMULA ----------------
    {
      id: 'vek-p1', bab: 'vektor', subbab: 'vektor', tingkat: 'pemula', tipe: 'pg',
      pertanyaan: 'Manakah di antara besaran berikut yang merupakan besaran vektor?',
      pilihan: ['Massa', 'Kelajuan', 'Perpindahan', 'Suhu'],
      jawaban: 2, satuan: '', toleransi: 0,
      petunjuk: [
        'Besaran vektor harus dijelaskan dengan besar dan arah.',
        'Tanyakan pada tiap pilihan: apakah masuk akal menyebut arahnya?'
      ],
      pembahasan: [
        'Massa, kelajuan, dan suhu cukup dinyatakan dengan angka dan satuan, jadi semuanya skalar.',
        'Perpindahan harus menyebut arah (misalnya 5 m ke utara), sehingga ia vektor.',
        'Jawaban: perpindahan.'
      ],
      tag: ['skalar dan vektor'], ragu: false
    },
    {
      id: 'vek-p2', bab: 'vektor', subbab: 'vektor', tingkat: 'pemula', tipe: 'isian',
      pertanyaan: 'Besaran yang memiliki besar sekaligus arah disebut besaran apa? (jawab satu kata)',
      pilihan: [],
      jawaban: ['vektor'], satuan: '', toleransi: 0,
      petunjuk: [
        'Besaran ini digambarkan dengan anak panah.',
        'Lawan katanya adalah skalar.'
      ],
      pembahasan: [
        'Besaran yang hanya punya besar disebut skalar.',
        'Besaran yang punya besar dan arah disebut vektor, contohnya gaya dan kecepatan.'
      ],
      tag: ['skalar dan vektor'], ragu: false
    },
    {
      id: 'vek-p3', bab: 'vektor', subbab: 'vektor', tingkat: 'pemula', tipe: 'angka',
      pertanyaan: 'Seorang anak menendang bola dengan kecepatan awal $12\\ \\text{m/s}$ pada sudut $40^\\circ$ di atas garis horizontal. Berapa komponen horizontal kecepatan awal bola (dalam m/s)?',
      pilihan: [],
      jawaban: 9.1925, satuan: 'm/s', toleransi: 0.02,
      petunjuk: [
        'Uraikan vektor kecepatan menjadi komponen horizontal dan vertikal.',
        'Komponen yang berada di sisi sudut (searah sumbu x) memakai cosinus.'
      ],
      pembahasan: [
        'Komponen horizontal: $v_x = v\\cos\\theta$.',
        'Substitusi: $v_x = 12 \\cos 40^\\circ = 12 \\times 0{,}7660$.',
        'Hasil: $v_x \\approx 9{,}19\\ \\text{m/s}$.'
      ],
      tag: ['komponen vektor'], ragu: false
    },
    {
      id: 'vek-p4', bab: 'vektor', subbab: 'vektor', tingkat: 'pemula', tipe: 'pg',
      pertanyaan: 'Dua gaya, $6\\ \\text{N}$ ke timur dan $8\\ \\text{N}$ ke utara, bekerja pada satu benda. Berapa besar resultan kedua gaya tersebut?',
      pilihan: ['14 N', '10 N', '7 N', '2 N'],
      jawaban: 1, satuan: '', toleransi: 0,
      petunjuk: [
        'Timur dan utara saling tegak lurus.',
        'Pakai teorema Pythagoras, bukan penjumlahan biasa.'
      ],
      pembahasan: [
        'Karena tegak lurus: $R = \\sqrt{6^2 + 8^2}$.',
        '$R = \\sqrt{36 + 64} = \\sqrt{100}$.',
        'Hasil: $R = 10\\ \\text{N}$.'
      ],
      tag: ['penjumlahan vektor'], ragu: false
    },
    {
      id: 'vek-p5', bab: 'vektor', subbab: 'vektor', tingkat: 'pemula', tipe: 'angka',
      pertanyaan: 'Vektor perpindahan sebuah drone dinyatakan $\\vec{d} = 3\\hat{i} - 4\\hat{j} + 12\\hat{k}$ (dalam meter). Berapa besar perpindahan drone tersebut (dalam m)?',
      pilihan: [],
      jawaban: 13, satuan: 'm', toleransi: 0.02,
      petunjuk: [
        'Besar vektor tiga dimensi adalah akar dari jumlah kuadrat komponen.',
        'Tanda negatif pada komponen hilang saat dikuadratkan.'
      ],
      pembahasan: [
        'Gunakan $|\\vec{d}| = \\sqrt{d_x^2 + d_y^2 + d_z^2}$.',
        'Substitusi: $\\sqrt{9 + 16 + 144} = \\sqrt{169}$.',
        'Hasil: $|\\vec{d}| = 13\\ \\text{m}$.'
      ],
      tag: ['vektor satuan', 'besar vektor'], ragu: false
    },
    // ---------------- MENENGAH ----------------
    {
      id: 'vek-m1', bab: 'vektor', subbab: 'vektor', tingkat: 'menengah', tipe: 'pg',
      pertanyaan: 'Dua gaya masing-masing $7\\ \\text{N}$ dan $4\\ \\text{N}$ bekerja pada satu titik dengan sudut apit yang bisa diubah-ubah. Manakah nilai besar resultan berikut yang TIDAK mungkin terjadi?',
      pilihan: ['3 N', '8 N', '11 N', '12 N'],
      jawaban: 3, satuan: '', toleransi: 0,
      petunjuk: [
        'Resultan terbesar terjadi saat kedua gaya searah, terkecil saat berlawanan arah.',
        'Semua nilai di antara keduanya bisa dicapai dengan memilih sudut yang sesuai.'
      ],
      pembahasan: [
        'Resultan maksimum (searah): $7 + 4 = 11\\ \\text{N}$.',
        'Resultan minimum (berlawanan): $7 - 4 = 3\\ \\text{N}$.',
        'Jadi $3\\ \\text{N} \\le R \\le 11\\ \\text{N}$, dan nilai $12\\ \\text{N}$ tidak mungkin.'
      ],
      tag: ['penjumlahan vektor', 'resultan'], ragu: false
    },
    {
      id: 'vek-m2', bab: 'vektor', subbab: 'vektor', tingkat: 'menengah', tipe: 'angka',
      pertanyaan: 'Dua orang menarik sebuah peti dengan gaya $10\\ \\text{N}$ dan $14\\ \\text{N}$. Sudut apit kedua tali (diukur saat ekor kedua gaya berimpit di peti) adalah $60^\\circ$. Berapa besar resultan gaya pada peti (dalam N)?',
      pilihan: [],
      jawaban: 20.881, satuan: 'N', toleransi: 0.02,
      petunjuk: [
        'Gunakan aturan cosinus untuk dua vektor dengan sudut apit tertentu.',
        'Perhatikan tanda: pada rumus resultan, suku $2AB\\cos\\alpha$ bertanda positif.'
      ],
      pembahasan: [
        'Rumus: $R = \\sqrt{A^2 + B^2 + 2AB\\cos\\alpha}$.',
        'Substitusi: $R = \\sqrt{100 + 196 + 2(10)(14)(0{,}5)} = \\sqrt{436}$.',
        'Hasil: $R \\approx 20{,}88\\ \\text{N}$.'
      ],
      tag: ['aturan cosinus', 'resultan'], ragu: false
    },
    {
      id: 'vek-m3', bab: 'vektor', subbab: 'vektor', tingkat: 'menengah', tipe: 'angka',
      pertanyaan: 'Kecepatan sebuah perahu terhadap air adalah $\\vec{v}_1 = 5\\hat{i} + 2\\hat{j}$ dan kecepatan perahu lain adalah $\\vec{v}_2 = 2\\hat{i} - 4\\hat{j}$ (keduanya dalam m/s). Berapa besar kecepatan perahu pertama relatif terhadap perahu kedua, yaitu $|\\vec{v}_1 - \\vec{v}_2|$ (dalam m/s)?',
      pilihan: [],
      jawaban: 6.7082, satuan: 'm/s', toleransi: 0.02,
      petunjuk: [
        'Kurangkan komponen yang sejenis: x dengan x, y dengan y.',
        'Setelah itu cari besar vektor selisihnya.'
      ],
      pembahasan: [
        'Selisih: $\\vec{v}_1 - \\vec{v}_2 = (5-2)\\hat{i} + (2-(-4))\\hat{j} = 3\\hat{i} + 6\\hat{j}$.',
        'Besar: $\\sqrt{3^2 + 6^2} = \\sqrt{45}$.',
        'Hasil: $\\approx 6{,}71\\ \\text{m/s}$.'
      ],
      tag: ['pengurangan vektor', 'vektor satuan'], ragu: false
    },
    {
      id: 'vek-m4', bab: 'vektor', subbab: 'vektor', tingkat: 'menengah', tipe: 'isian',
      pertanyaan: 'Pada penjumlahan dua vektor secara grafis, ekor vektor kedua diletakkan pada kepala vektor pertama, lalu resultan ditarik dari ekor pertama ke kepala kedua. Metode ini disebut metode apa? (jawab satu kata)',
      pilihan: [],
      jawaban: ['segitiga', 'poligon'], satuan: '', toleransi: 0,
      petunjuk: [
        'Tiga garis yang terbentuk (vektor pertama, kedua, dan resultan) membentuk sebuah bangun.',
        'Untuk lebih dari dua vektor, metode ini diperluas menjadi poligon.'
      ],
      pembahasan: [
        'Menyambung ekor ke kepala membentuk segitiga dengan resultan sebagai sisi penutup.',
        'Metode ini disebut metode segitiga (atau poligon bila vektornya lebih dari dua).'
      ],
      tag: ['metode grafis'], ragu: false
    },
    {
      id: 'vek-m5', bab: 'vektor', subbab: 'vektor', tingkat: 'menengah', tipe: 'angka',
      pertanyaan: 'Sebuah gaya $\\vec{F} = 3\\hat{i} - 2\\hat{j} + 4\\hat{k}$ (dalam N) menggerakkan benda dengan perpindahan $\\vec{d} = 5\\hat{i} + \\hat{j} + 2\\hat{k}$ (dalam m). Berapa usaha $W = \\vec{F}\\cdot\\vec{d}$ yang dilakukan gaya (dalam J)?',
      pilihan: [],
      jawaban: 21, satuan: 'J', toleransi: 0.02,
      petunjuk: [
        'Perkalian titik dihitung dengan menjumlahkan hasil kali komponen sejenis.',
        'Hasilnya skalar, bukan vektor.'
      ],
      pembahasan: [
        'Rumus: $\\vec{F}\\cdot\\vec{d} = F_xd_x + F_yd_y + F_zd_z$.',
        'Substitusi: $3(5) + (-2)(1) + 4(2) = 15 - 2 + 8$.',
        'Hasil: $W = 21\\ \\text{J}$.'
      ],
      tag: ['dot product', 'usaha'], ragu: false
    },
    // ---------------- LANJUT ----------------
    {
      id: 'vek-l1', bab: 'vektor', subbab: 'vektor', tingkat: 'lanjut', tipe: 'pg',
      pertanyaan: 'Vektor $\\vec{A} = m\\hat{i} + 2\\hat{j} + \\hat{k}$ tegak lurus terhadap $\\vec{B} = 3\\hat{i} - 4\\hat{j} + 2\\hat{k}$. Berapa nilai $m$?',
      pilihan: ['2', '8/3', '-2', '10/3'],
      jawaban: 0, satuan: '', toleransi: 0,
      petunjuk: [
        'Dua vektor tegak lurus bila hasil kali titiknya nol.',
        'Tuliskan $\\vec{A}\\cdot\\vec{B}$ sebagai persamaan dalam $m$, lalu selesaikan.'
      ],
      pembahasan: [
        'Syarat: $\\vec{A}\\cdot\\vec{B} = 0$.',
        '$3m + (2)(-4) + (1)(2) = 3m - 8 + 2 = 0$.',
        '$3m = 6$, jadi $m = 2$.'
      ],
      tag: ['dot product', 'tegak lurus'], ragu: false
    },
    {
      id: 'vek-l2', bab: 'vektor', subbab: 'vektor', tingkat: 'lanjut', tipe: 'angka',
      pertanyaan: 'Dua vektor perpindahan $\\vec{A} = 3\\hat{i} + 4\\hat{j}$ dan $\\vec{B} = 4\\hat{i} + 3\\hat{k}$ (dalam meter). Berapa sudut antara kedua vektor tersebut (dalam derajat)?',
      pilihan: [],
      jawaban: 61.315, satuan: '', toleransi: 0.02,
      petunjuk: [
        'Gunakan $\\vec{A}\\cdot\\vec{B} = AB\\cos\\theta$.',
        'Hitung dulu hasil kali titik dan kedua besar vektor, baru cari $\\theta$ dengan arc cos.'
      ],
      pembahasan: [
        'Hasil kali titik: $3(4) + 4(0) + 0(3) = 12$.',
        'Besar: $A = \\sqrt{9 + 16} = 5$ dan $B = \\sqrt{16 + 9} = 5$.',
        '$\\cos\\theta = 12/25 = 0{,}48$, sehingga $\\theta = 61{,}3^\\circ$.'
      ],
      tag: ['dot product', 'sudut antara vektor'], ragu: false
    },
    {
      id: 'vek-l3', bab: 'vektor', subbab: 'vektor', tingkat: 'lanjut', tipe: 'angka',
      pertanyaan: 'Tiga gaya bekerja pada satu titik di bidang xy: $20\\ \\text{N}$ searah sumbu x positif ($0^\\circ$), $15\\ \\text{N}$ pada sudut $120^\\circ$, dan $10\\ \\text{N}$ pada sudut $240^\\circ$ (semua sudut diukur dari sumbu x positif berlawanan arah jarum jam). Berapa besar resultan ketiga gaya (dalam N)?',
      pilihan: [],
      jawaban: 8.6603, satuan: 'N', toleransi: 0.02,
      petunjuk: [
        'Uraikan tiap gaya menjadi komponen x dan y, lalu jumlahkan masing-masing.',
        'Perhatikan tanda: $\\cos 120^\\circ$ dan $\\cos 240^\\circ$ bernilai negatif, $\\sin 240^\\circ$ juga negatif.'
      ],
      pembahasan: [
        '$R_x = 20 + 15\\cos 120^\\circ + 10\\cos 240^\\circ = 20 - 7{,}5 - 5 = 7{,}5\\ \\text{N}$.',
        '$R_y = 0 + 15\\sin 120^\\circ + 10\\sin 240^\\circ = 12{,}99 - 8{,}66 = 4{,}33\\ \\text{N}$.',
        '$R = \\sqrt{7{,}5^2 + 4{,}33^2} = \\sqrt{75} \\approx 8{,}66\\ \\text{N}$.'
      ],
      tag: ['metode analitis', 'resultan'], ragu: false
    },
    {
      id: 'vek-l4', bab: 'vektor', subbab: 'vektor', tingkat: 'lanjut', tipe: 'angka',
      pertanyaan: 'Gaya $\\vec{A}$ besarnya $6\\ \\text{N}$ pada sudut $20^\\circ$ dan gaya $\\vec{B}$ besarnya $9\\ \\text{N}$ pada sudut $110^\\circ$, keduanya diukur dari sumbu x positif berlawanan arah jarum jam. Berapa arah resultan $\\vec{A} + \\vec{B}$ terhadap sumbu x positif (dalam derajat)?',
      pilihan: [],
      jawaban: 76.310, satuan: '', toleransi: 0.02,
      petunjuk: [
        'Hitung $R_x$ dan $R_y$ lebih dulu, lalu gunakan $\\tan\\theta = R_y/R_x$.',
        'Kedua gaya saling tegak lurus ($110^\\circ - 20^\\circ = 90^\\circ$), jadi ada cara pintas lewat sudut bantu.'
      ],
      pembahasan: [
        '$R_x = 6\\cos 20^\\circ + 9\\cos 110^\\circ = 5{,}638 - 3{,}078 = 2{,}560\\ \\text{N}$.',
        '$R_y = 6\\sin 20^\\circ + 9\\sin 110^\\circ = 2{,}052 + 8{,}457 = 10{,}509\\ \\text{N}$.',
        '$\\theta = \\arctan(10{,}509/2{,}560) = 76{,}3^\\circ$ (kuadran I).'
      ],
      tag: ['metode analitis', 'arah resultan'], ragu: false
    },
    {
      id: 'vek-l5', bab: 'vektor', subbab: 'vektor', tingkat: 'lanjut', tipe: 'pg',
      pertanyaan: 'Vektor $\\vec{A} = 4\\hat{i} + p\\hat{j}$ sejajar dengan vektor $\\vec{B} = 6\\hat{i} - 9\\hat{j}$. Berapa nilai $p$?',
      pilihan: ['6', '-13,5', '-6', '13,5'],
      jawaban: 2, satuan: '',  toleransi: 0,
      petunjuk: [
        'Dua vektor sejajar bila komponen-komponennya sebanding.',
        'Tulis $A_x/B_x = A_y/B_y$ lalu selesaikan untuk $p$.'
      ],
      pembahasan: [
        'Syarat sejajar: $\\dfrac{4}{6} = \\dfrac{p}{-9}$.',
        '$p = -9 \\times \\dfrac{4}{6}$.',
        'Hasil: $p = -6$ (arah $y$ berlawanan dengan $x$ pada $\\vec{B}$, jadi $\\vec{A}$ harus begitu juga).'
      ],
      tag: ['vektor sejajar', 'komponen'], ragu: false
    },
    // ---------------- EXPERT ----------------
    {
      id: 'vek-e1', bab: 'vektor', subbab: 'vektor', tingkat: 'expert', tipe: 'pg',
      pertanyaan: 'Vektor $\\vec{B} = -2\\vec{A}$ dengan $\\vec{A}$ bukan vektor nol. Manakah pernyataan yang benar tentang $\\vec{A}\\cdot\\vec{B}$ dan $\\vec{A}\\times\\vec{B}$?',
      pilihan: [
        '$\\vec{A}\\cdot\\vec{B} = 0$ dan $|\\vec{A}\\times\\vec{B}| = 2A^2$',
        '$\\vec{A}\\cdot\\vec{B} = -2A^2$ dan $\\vec{A}\\times\\vec{B} = \\vec{0}$',
        '$\\vec{A}\\cdot\\vec{B} = 2A^2$ dan $\\vec{A}\\times\\vec{B} = \\vec{0}$',
        '$\\vec{A}\\cdot\\vec{B} = -2A^2$ dan $|\\vec{A}\\times\\vec{B}| = 2A^2$'
      ],
      jawaban: 1, satuan: '', toleransi: 0,
      petunjuk: [
        'Vektor $\\vec{B}$ berlawanan arah dengan $\\vec{A}$, jadi sudut antara keduanya $180^\\circ$.',
        'Evaluasi $\\cos 180^\\circ$ dan $\\sin 180^\\circ$ pada rumus dot dan cross product.'
      ],
      pembahasan: [
        'Sudut antara $\\vec{A}$ dan $\\vec{B}$ adalah $180^\\circ$ dan $B = 2A$.',
        '$\\vec{A}\\cdot\\vec{B} = AB\\cos 180^\\circ = (A)(2A)(-1) = -2A^2$.',
        '$|\\vec{A}\\times\\vec{B}| = AB\\sin 180^\\circ = 0$, sehingga hasilnya vektor nol.'
      ],
      tag: ['dot product', 'cross product'], ragu: false
    },
    {
      id: 'vek-e2', bab: 'vektor', subbab: 'vektor', tingkat: 'expert', tipe: 'angka',
      pertanyaan: 'Diketahui $\\vec{A} = 2\\hat{i} - \\hat{j} + 3\\hat{k}$ dan $\\vec{B} = \\hat{i} + 4\\hat{j} - 2\\hat{k}$ (tanpa satuan). Hitung besar hasil kali silang $|\\vec{A}\\times\\vec{B}|$ (tanpa satuan).',
      pilihan: [],
      jawaban: 15.166, satuan: '', toleransi: 0.02,
      petunjuk: [
        'Hitung ketiga komponen $\\vec{A}\\times\\vec{B}$ dengan rumus determinan.',
        'Setelah itu cari besar vektor hasilnya dengan akar jumlah kuadrat.'
      ],
      pembahasan: [
        'Komponen $\\hat{i}$: $A_yB_z - A_zB_y = (-1)(-2) - (3)(4) = -10$.',
        'Komponen $\\hat{j}$: $A_zB_x - A_xB_z = (3)(1) - (2)(-2) = 7$; komponen $\\hat{k}$: $A_xB_y - A_yB_x = (2)(4) - (-1)(1) = 9$.',
        'Besar: $\\sqrt{100 + 49 + 81} = \\sqrt{230} \\approx 15{,}17$.'
      ],
      tag: ['cross product', '3D'], ragu: false
    },
    {
      id: 'vek-e3', bab: 'vektor', subbab: 'vektor', tingkat: 'expert', tipe: 'angka',
      pertanyaan: 'Sebuah perpindahan $\\vec{A} = 4\\hat{i} - 3\\hat{j} + 5\\hat{k}$ (dalam meter) diproyeksikan pada arah vektor $\\vec{B} = 2\\hat{i} + 3\\hat{j} + 6\\hat{k}$. Berapa besar proyeksi skalar $\\vec{A}$ pada arah $\\vec{B}$ (dalam m)?',
      pilihan: [],
      jawaban: 4.1429, satuan: 'm', toleransi: 0.02,
      petunjuk: [
        'Proyeksi skalar $\\vec{A}$ pada $\\vec{B}$ adalah $\\vec{A}\\cdot\\hat{b}$, dengan $\\hat{b}$ vektor satuan searah $\\vec{B}$.',
        'Jadi bagi hasil kali titik dengan besar $\\vec{B}$.'
      ],
      pembahasan: [
        'Hasil kali titik: $\\vec{A}\\cdot\\vec{B} = 8 - 9 + 30 = 29$.',
        'Besar $\\vec{B}$: $\\sqrt{4 + 9 + 36} = 7$.',
        'Proyeksi: $29/7 \\approx 4{,}143\\ \\text{m}$.'
      ],
      tag: ['proyeksi vektor', 'dot product'], ragu: false
    },
    {
      id: 'vek-e4', bab: 'vektor', subbab: 'vektor', tingkat: 'expert', tipe: 'angka',
      pertanyaan: 'Tiga titik sudut sebuah pelat segitiga di ruang berada di $P(1, 2, 3)$, $Q(3, 5, 4)$, dan $R(2, 6, 6)$ dengan koordinat dalam meter. Berapa luas segitiga $PQR$ (dalam m²)?',
      pilihan: [],
      jawaban: 4.3301, satuan: 'm²', toleransi: 0.02,
      petunjuk: [
        'Bentuk dua vektor sisi dari titik yang sama, misalnya $\\overrightarrow{PQ}$ dan $\\overrightarrow{PR}$.',
        'Besar hasil kali silang dua vektor sama dengan luas jajargenjang; segitiga adalah setengahnya.'
      ],
      pembahasan: [
        '$\\overrightarrow{PQ} = (2, 3, 1)$ dan $\\overrightarrow{PR} = (1, 4, 3)$.',
        '$\\overrightarrow{PQ}\\times\\overrightarrow{PR} = (9 - 4,\\ 1 - 6,\\ 8 - 3) = (5, -5, 5)$, besarnya $5\\sqrt{3} = 8{,}660$.',
        'Luas segitiga $= \\tfrac{1}{2}(8{,}660) \\approx 4{,}33\\ \\text{m}^2$.'
      ],
      tag: ['cross product', 'luas segitiga'], ragu: false
    },
    {
      id: 'vek-e5', bab: 'vektor', subbab: 'vektor', tingkat: 'expert', tipe: 'angka',
      pertanyaan: 'Diketahui $\\vec{A} = 5\\hat{i} + 2\\hat{j} - \\hat{k}$ dan $\\vec{B} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$ (tanpa satuan). Vektor $\\vec{C} = \\vec{A} + p\\vec{B}$ dengan $p$ konstanta. Tentukan nilai $p$ (tanpa satuan) agar $\\vec{C}$ tegak lurus terhadap $\\vec{B}$.',
      pilihan: [],
      jawaban: -0.7778, satuan: '', toleransi: 0.02,
      petunjuk: [
        'Syarat tegak lurus: $\\vec{C}\\cdot\\vec{B} = 0$.',
        'Jabarkan $(\\vec{A} + p\\vec{B})\\cdot\\vec{B} = \\vec{A}\\cdot\\vec{B} + p\\,|\\vec{B}|^2$.',
        'Hasilnya berarti $p\\vec{B}$ meniadakan proyeksi $\\vec{A}$ pada arah $\\vec{B}$.'
      ],
      pembahasan: [
        '$\\vec{A}\\cdot\\vec{B} = 5 + 4 - 2 = 7$ dan $|\\vec{B}|^2 = 1 + 4 + 4 = 9$.',
        'Syarat: $7 + 9p = 0$.',
        'Hasil: $p = -7/9 \\approx -0{,}7778$.'
      ],
      tag: ['dot product', 'proyeksi vektor'], ragu: false
    }
  ]
};
