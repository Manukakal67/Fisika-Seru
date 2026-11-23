window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['momentum'] = {
  id: 'momentum',
  judul: 'Momentum dan Impuls',
  subbab: [
    {
      id: 'momentum',
      judul: 'Momentum dan Impuls',
      materi: {
        gambaranBesar: 'Bayangkan menahan bola tenis yang dilempar pelan lalu bola bowling yang menggelinding dengan kecepatan sama: yang kedua jelas jauh lebih sulit dihentikan. Ukuran seberapa sulit sebuah benda bergerak dihentikan itulah momentum, gabungan antara massa dan kecepatan. Untuk mengubah momentum, kamu perlu mendorong atau memukul benda selama selang waktu tertentu, dan dorongan itu disebut impuls. Saat dua benda bertabrakan, jumlah momentum keduanya tidak berubah, dan inilah kunci menyelesaikan hampir semua soal tumbukan, ledakan, dan tembakan.',
        konsep: [
          {
            judul: 'Momentum linear',
            teks: 'Momentum linear sebuah benda adalah hasil kali massa dan kecepatannya. Momentum adalah besaran vektor: arahnya sama dengan arah kecepatan. Pada gerak satu dimensi, arah dinyatakan dengan tanda: tentukan dulu arah positif (misalnya ke kanan), lalu kecepatan ke kiri ditulis negatif. Mengabaikan tanda adalah sumber kesalahan paling sering di bab ini.',
            rumus: [
              {
                latex: '\\vec{p} = m\\,\\vec{v}',
                simbol: [
                  { s: '\\vec{p}', arti: 'momentum', satuan: 'kg m/s' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: '\\vec{v}', arti: 'kecepatan benda', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Impuls dan teorema impuls-momentum',
            teks: 'Impuls adalah hasil kali gaya dan lamanya gaya itu bekerja. Jika gaya berubah terhadap waktu, impuls sama dengan luas daerah di bawah grafik gaya terhadap waktu ($F$-$t$). Menurut teorema impuls-momentum, impuls yang diterima benda sama dengan perubahan momentumnya. Itu sebabnya mendarat dengan lutut ditekuk (waktu kontak lebih lama) membuat gaya yang kamu terima lebih kecil.',
            rumus: [
              {
                latex: 'I = F\\,\\Delta t = \\int F\\,dt',
                simbol: [
                  { s: 'I', arti: 'impuls', satuan: 'N s' },
                  { s: 'F', arti: 'gaya rata-rata', satuan: 'N' },
                  { s: '\\Delta t', arti: 'selang waktu gaya bekerja', satuan: 's' }
                ]
              },
              {
                latex: 'I = \\Delta p = m\\,v_{\\text{akhir}} - m\\,v_{\\text{awal}}',
                simbol: [
                  { s: '\\Delta p', arti: 'perubahan momentum', satuan: 'kg m/s' },
                  { s: 'v_{\\text{awal}}', arti: 'kecepatan awal (dengan tanda)', satuan: 'm/s' },
                  { s: 'v_{\\text{akhir}}', arti: 'kecepatan akhir (dengan tanda)', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Hukum kekekalan momentum',
            teks: 'Jika tidak ada gaya luar yang bekerja pada sistem (atau gaya luar diabaikan dibanding gaya antar benda, seperti saat tumbukan singkat), jumlah momentum sistem sebelum dan sesudah peristiwa adalah sama. Gaya antar benda saling meniadakan karena sama besar dan berlawanan arah (hukum aksi-reaksi). Tanda prima menandai kecepatan sesudah tumbukan.',
            rumus: [
              {
                latex: 'm_1 v_1 + m_2 v_2 = m_1 v_1^{\\prime} + m_2 v_2^{\\prime}',
                simbol: [
                  { s: 'm_1,\\ m_2', arti: 'massa benda 1 dan 2', satuan: 'kg' },
                  { s: 'v_1,\\ v_2', arti: 'kecepatan sebelum tumbukan', satuan: 'm/s' },
                  { s: 'v_1^{\\prime},\\ v_2^{\\prime}', arti: 'kecepatan sesudah tumbukan', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Jenis tumbukan dan koefisien restitusi',
            teks: 'Momentum selalu kekal pada tumbukan, tetapi energi kinetik belum tentu. Pada tumbukan lenting sempurna energi kinetik kekal dan $e = 1$. Pada tumbukan lenting sebagian energi kinetik berkurang dan $0 < e < 1$. Pada tumbukan tidak lenting sama sekali kedua benda menyatu dan bergerak dengan kecepatan sama, sehingga $e = 0$ dan energi kinetik berkurang paling banyak. Koefisien restitusi $e$ mengukur seberapa cepat benda saling menjauh dibanding saat saling mendekat. Energi yang hilang berubah menjadi bunyi, panas, dan deformasi.',
            rumus: [
              {
                latex: 'e = \\frac{v_2^{\\prime} - v_1^{\\prime}}{v_1 - v_2}',
                simbol: [
                  { s: 'e', arti: 'koefisien restitusi', satuan: 'tanpa satuan' },
                  { s: 'v_2^{\\prime} - v_1^{\\prime}', arti: 'kecepatan relatif menjauh', satuan: 'm/s' },
                  { s: 'v_1 - v_2', arti: 'kecepatan relatif mendekat', satuan: 'm/s' }
                ]
              },
              {
                latex: '\\Delta E_k = \\tfrac{1}{2}\\,\\frac{m_1 m_2}{m_1+m_2}\\,(v_1 - v_2)^2\\,(1 - e^2)',
                simbol: [
                  { s: '\\Delta E_k', arti: 'energi kinetik yang hilang', satuan: 'J' },
                  { s: 'm_1,\\ m_2', arti: 'massa kedua benda', satuan: 'kg' }
                ]
              }
            ]
          },
          {
            judul: 'Kecepatan sesudah tumbukan satu dimensi',
            teks: 'Gabungkan kekekalan momentum dengan definisi $e$, lalu selesaikan dua persamaan untuk $v_1^{\\prime}$ dan $v_2^{\\prime}$. Hasilnya berlaku untuk semua jenis tumbukan, cukup masukkan nilai $e$. Kasus khusus: tidak lenting sama sekali ($e = 0$) memberi kecepatan bersama $v^{\\prime} = (m_1 v_1 + m_2 v_2)/(m_1 + m_2)$. Lenting sempurna dengan massa sama saling menukar kecepatan. Ingat pasang tanda kecepatan dengan benar.',
            rumus: [
              {
                latex: 'v_1^{\\prime} = \\frac{(m_1 - e\\,m_2)\\,v_1 + m_2\\,(1+e)\\,v_2}{m_1 + m_2}',
                simbol: [
                  { s: 'v_1^{\\prime}', arti: 'kecepatan benda 1 sesudah tumbukan', satuan: 'm/s' },
                  { s: 'e', arti: 'koefisien restitusi', satuan: 'tanpa satuan' }
                ]
              },
              {
                latex: 'v_2^{\\prime} = \\frac{(m_2 - e\\,m_1)\\,v_2 + m_1\\,(1+e)\\,v_1}{m_1 + m_2}',
                simbol: [
                  { s: 'v_2^{\\prime}', arti: 'kecepatan benda 2 sesudah tumbukan', satuan: 'm/s' },
                  { s: 'm_1,\\ m_2', arti: 'massa kedua benda', satuan: 'kg' }
                ]
              }
            ]
          },
          {
            judul: 'Ledakan dan gerak mundur (rekoil)',
            teks: 'Pada ledakan atau penembakan, benda yang mula-mula diam terpecah menjadi bagian-bagian yang saling terdorong. Momentum total sebelum ledakan nol, jadi jumlah momentum semua pecahan juga nol: pecahan ringan melesat cepat, pecahan berat bergerak pelan ke arah berlawanan. Gerak mundur senapan atau meriam saat menembak disebut rekoil. Berbeda dari tumbukan, energi kinetik justru bertambah karena ada energi kimia atau pegas yang dilepaskan.',
            rumus: [
              {
                latex: 'm_1 v_1 + m_2 v_2 = 0 \\quad\\Rightarrow\\quad v_2 = -\\frac{m_1}{m_2}\\,v_1',
                simbol: [
                  { s: 'm_1,\\ m_2', arti: 'massa dua pecahan', satuan: 'kg' },
                  { s: 'v_1,\\ v_2', arti: 'kecepatan pecahan sesudah ledakan', satuan: 'm/s' }
                ]
              }
            ]
          },
          {
            judul: 'Tumbukan dengan lantai atau dinding',
            teks: 'Lantai atau dinding dianggap tidak bergerak (massanya sangat besar), sehingga $e$ hanya bergantung pada kecepatan bola: laju pantul sama dengan $e$ kali laju datang. Karena tinggi sebanding dengan kuadrat laju, bola yang dijatuhkan dari tinggi $h$ memantul setinggi $e^2 h$. Setiap pantulan mengalikan tinggi dengan $e^2$, sehingga tinggi pantulan ke-$n$ adalah $e^{2n} h$. Jarak total yang ditempuh bola sampai berhenti adalah deret geometri tak hingga.',
            rumus: [
              {
                latex: 'v_{\\text{pantul}} = e\\,v_{\\text{datang}}, \\qquad h^{\\prime} = e^2\\,h',
                simbol: [
                  { s: 'h', arti: 'tinggi jatuh', satuan: 'm' },
                  { s: 'h^{\\prime}', arti: 'tinggi pantulan', satuan: 'm' },
                  { s: 'e', arti: 'koefisien restitusi', satuan: 'tanpa satuan' }
                ]
              },
              {
                latex: 's_{\\text{total}} = h\\,\\frac{1 + e^2}{1 - e^2}',
                simbol: [
                  { s: 's_{\\text{total}}', arti: 'jarak total sampai berhenti', satuan: 'm' },
                  { s: 'h', arti: 'tinggi jatuh awal', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Bandul balistik dan tumbukan dua dimensi',
            teks: 'Bandul balistik mengukur kecepatan peluru: peluru tertanam di balok yang digantung, tumbukan tidak lenting (momentum kekal, energi tidak), lalu balok dan peluru berayun naik setinggi $h$ dan di fase ayunan itu energi mekanik kekal. Pada tumbukan dua dimensi, momentum kekal pada tiap sumbu secara terpisah. Untuk dua benda bermassa sama, satu diam, lenting sempurna, kedua benda menjauh dengan lintasan saling tegak lurus.',
            rumus: [
              {
                latex: 'v = \\frac{m + M}{m}\\,\\sqrt{2\\,g\\,h}',
                simbol: [
                  { s: 'v', arti: 'kecepatan peluru sebelum menumbuk', satuan: 'm/s' },
                  { s: 'm', arti: 'massa peluru', satuan: 'kg' },
                  { s: 'M', arti: 'massa balok', satuan: 'kg' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'tinggi ayunan maksimum', satuan: 'm' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Bola $0{,}5\\ \\text{kg}$ yang mula-mula diam ditendang dengan gaya rata-rata $200\\ \\text{N}$ selama $0{,}05\\ \\text{s}$. Berapa kecepatan bola sesaat setelah ditendang?',
            langkah: [
              'Impuls: $I = F\\,\\Delta t = 200 \\times 0{,}05 = 10\\ \\text{N s}$.',
              'Teorema impuls-momentum: $I = m\\,v - m\\,v_0$ dengan $v_0 = 0$, jadi $10 = 0{,}5\\,v$.',
              '$v = 10 / 0{,}5 = 20\\ \\text{m/s}$.'
            ],
            hasil: 'Kecepatan bola setelah ditendang adalah 20 m/s.'
          },
          {
            soal: 'Troli $3\\ \\text{kg}$ bergerak $4\\ \\text{m/s}$ menabrak troli $1\\ \\text{kg}$ yang diam, lalu keduanya menyatu. Tentukan kecepatan gabungan dan energi kinetik yang hilang.',
            langkah: [
              'Tumbukan tidak lenting sama sekali, jadi kecepatan akhir sama: $(3 + 1)\\,v^{\\prime} = 3(4) + 1(0) = 12$.',
              '$v^{\\prime} = 12/4 = 3\\ \\text{m/s}$.',
              'Energi kinetik awal $= \\tfrac{1}{2}(3)(4^2) = 24\\ \\text{J}$, energi kinetik akhir $= \\tfrac{1}{2}(4)(3^2) = 18\\ \\text{J}$.',
              'Energi yang hilang $= 24 - 18 = 6\\ \\text{J}$.'
            ],
            hasil: 'Kecepatan gabungan 3 m/s dan energi kinetik yang hilang 6 J.'
          },
          {
            soal: 'Balok $2\\ \\text{kg}$ meluncur $6\\ \\text{m/s}$ menumbuk balok $1\\ \\text{kg}$ yang diam pada lantai licin dengan $e = 0{,}5$. Berapa kecepatan kedua balok sesudah tumbukan?',
            langkah: [
              'Pakai rumus umum dengan $m_1 = 2$, $v_1 = 6$, $m_2 = 1$, $v_2 = 0$, $e = 0{,}5$.',
              '$v_1^{\\prime} = \\dfrac{(2 - 0{,}5 \\times 1)(6) + 0}{3} = \\dfrac{9}{3} = 3\\ \\text{m/s}$.',
              '$v_2^{\\prime} = \\dfrac{0 + 2(1{,}5)(6)}{3} = 6\\ \\text{m/s}$.',
              'Cek: $e = (6 - 3)/(6 - 0) = 0{,}5$ dan momentum $2(3) + 1(6) = 12 = 2(6)$.'
            ],
            hasil: 'Balok 2 kg bergerak 3 m/s dan balok 1 kg bergerak 6 m/s, keduanya ke arah semula.'
          },
          {
            soal: 'Seorang anak $50\\ \\text{kg}$ melompat dari perahu $150\\ \\text{kg}$ yang semula diam dengan kecepatan $3\\ \\text{m/s}$ ke depan (terhadap air). Berapa kecepatan perahu sesudahnya? Abaikan gesekan air.',
            langkah: [
              'Momentum awal sistem nol, jadi momentum akhir juga nol.',
              '$50(3) + 150\\,V = 0$.',
              '$V = -150/150 = -1\\ \\text{m/s}$, tanda negatif berarti berlawanan arah lompatan.'
            ],
            hasil: 'Perahu bergerak mundur dengan laju 1 m/s.'
          },
          {
            soal: 'Bola dijatuhkan dari ketinggian $5\\ \\text{m}$ ke lantai dengan $e = 0{,}8$. Berapa tinggi pantulan pertama? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Kecepatan tiba: $v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\ \\text{m/s}$.',
              'Kecepatan pantul: $v^{\\prime} = e\\,v = 0{,}8 \\times 10 = 8\\ \\text{m/s}$.',
              'Tinggi pantulan: $h^{\\prime} = v^{\\prime 2}/(2g) = 64/20 = 3{,}2\\ \\text{m}$ (sama dengan $e^2 h = 0{,}64 \\times 5$).'
            ],
            hasil: 'Tinggi pantulan pertama adalah 3,2 m.'
          }
        ],
        kesalahan: [
          'Menganggap momentum selalu bertanda positif. Momentum adalah vektor: benda yang bergerak ke kiri punya momentum negatif bila arah kanan dipilih positif.',
          'Mengira energi kinetik selalu kekal pada tumbukan. Hanya tumbukan lenting sempurna yang mengekalkan energi kinetik, sedangkan momentum kekal pada semua jenis tumbukan.',
          'Menyamakan momentum dengan energi kinetik. Momentum sebanding dengan $v$ dan bisa negatif, sedangkan energi kinetik sebanding dengan $v^2$ dan tidak pernah negatif.',
          'Mengira benda yang menyatu setelah tumbukan berarti kehilangan momentum. Yang hilang adalah energi kinetik, momentumnya tetap.',
          'Memakai rumus $e = (v_1^{\\prime} - v_2^{\\prime})/(v_1 - v_2)$ dengan urutan terbalik, sehingga $e$ bisa bernilai negatif. Kecepatan menjauh selalu dihitung sebagai benda 2 dikurangi benda 1.',
          'Mengira tinggi pantulan $h^{\\prime} = e\\,h$. Karena tinggi bergantung pada kuadrat laju, yang benar adalah $h^{\\prime} = e^2 h$.',
          'Pada ledakan, mengira pecahan yang lebih berat bergerak lebih cepat. Momentum sama besar, jadi pecahan yang lebih ringan justru lebih cepat.'
        ],
        ringkasan: [
          'Momentum $p = m v$ adalah vektor dengan satuan kg m/s; perhatikan tanda arah pada gerak satu dimensi.',
          'Impuls $I = F\\,\\Delta t$ sama dengan luas grafik $F$-$t$ dan sama dengan perubahan momentum.',
          'Momentum sistem kekal bila tidak ada gaya luar: $\\sum p_{\\text{sebelum}} = \\sum p_{\\text{sesudah}}$.',
          'Koefisien restitusi $e = (v_2^{\\prime} - v_1^{\\prime})/(v_1 - v_2)$: lenting sempurna $e = 1$, lenting sebagian $0 < e < 1$, tidak lenting $e = 0$.',
          'Pada ledakan dan rekoil, momentum total nol sehingga pecahan bergerak berlawanan arah dan energi kinetik bertambah.',
          'Bola memantul: $v^{\\prime} = e\\,v$ dan $h^{\\prime} = e^2 h$; pada tumbukan dua dimensi, momentum kekal per sumbu.'
        ],
        simulasi: {
          id: 'momentum-tumbukan',
          judul: 'Simulasi: tumbukan satu dimensi dua benda (sebelum dan sesudah)',
          param: [
            { kunci: 'm1', label: 'Massa benda 1', min: 1, max: 10, nilai: 4, satuan: 'kg', langkah: 0.5 },
            { kunci: 'm2', label: 'Massa benda 2', min: 1, max: 10, nilai: 2, satuan: 'kg', langkah: 0.5 },
            { kunci: 'v1', label: 'Kecepatan awal benda 1', min: -10, max: 10, nilai: 5, satuan: 'm/s', langkah: 0.5 },
            { kunci: 'v2', label: 'Kecepatan awal benda 2', min: -10, max: 10, nilai: -2, satuan: 'm/s', langkah: 0.5 },
            { kunci: 'e', label: 'Koefisien restitusi e', min: 0, max: 1, nilai: 0.5, satuan: '', langkah: 0.05 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'mom-p1',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil bermassa $1200\\ \\text{kg}$ melaju lurus dengan kecepatan $15\\ \\text{m/s}$. Berapa besar momentum mobil tersebut?',
      pilihan: [],
      jawaban: 18000,
      satuan: 'kg m/s',
      toleransi: 0.02,
      petunjuk: [
        'Momentum bergantung pada massa dan kecepatan benda.',
        'Gunakan $p = m\\,v$.'
      ],
      pembahasan: [
        'Diketahui $m = 1200\\ \\text{kg}$ dan $v = 15\\ \\text{m/s}$.',
        '$p = m\\,v = 1200 \\times 15 = 18000\\ \\text{kg m/s}$.'
      ],
      tag: ['momentum'],
      ragu: false
    },
    {
      id: 'mom-p2',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Impuls diukur dalam newton sekon ($\\text{N s}$). Satuan manakah yang setara dengan $\\text{N s}$?',
      pilihan: [
        '$\\text{kg m/s}^2$',
        '$\\text{kg m/s}$',
        '$\\text{kg m}^2/\\text{s}^2$',
        '$\\text{kg m}^2/\\text{s}^3$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Impuls sama dengan perubahan momentum.',
        'Uraikan $1\\ \\text{N} = 1\\ \\text{kg m/s}^2$ lalu kalikan dengan sekon.'
      ],
      pembahasan: [
        'Satu newton adalah $1\\ \\text{kg m/s}^2$.',
        '$1\\ \\text{N s} = 1\\ \\text{kg m/s}^2 \\times \\text{s} = 1\\ \\text{kg m/s}$, yaitu satuan momentum.'
      ],
      tag: ['impuls', 'satuan'],
      ragu: false
    },
    {
      id: 'mom-p3',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah gaya konstan $50\\ \\text{N}$ bekerja pada sebuah benda selama $0{,}2\\ \\text{s}$. Berapa besar impuls yang diterima benda?',
      pilihan: [],
      jawaban: 10,
      satuan: 'N s',
      toleransi: 0.02,
      petunjuk: [
        'Impuls adalah gaya dikalikan lamanya gaya bekerja.',
        'Gunakan $I = F\\,\\Delta t$.'
      ],
      pembahasan: [
        'Diketahui $F = 50\\ \\text{N}$ dan $\\Delta t = 0{,}2\\ \\text{s}$.',
        '$I = F\\,\\Delta t = 50 \\times 0{,}2 = 10\\ \\text{N s}$.'
      ],
      tag: ['impuls'],
      ragu: false
    },
    {
      id: 'mom-p4',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Dua gerbong bertabrakan lalu saling terkait dan bergerak bersama dengan kecepatan yang sama. Termasuk jenis tumbukan apakah peristiwa ini? (jawab dengan nama jenis tumbukannya)',
      pilihan: [],
      jawaban: ['tidak lenting', 'tak lenting', 'tidak elastis', 'inelastis'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Perhatikan apa yang terjadi pada kedua gerbong setelah tabrakan.',
        'Saat benda menyatu, koefisien restitusi $e = 0$.'
      ],
      pembahasan: [
        'Kedua benda menyatu dan bergerak dengan kecepatan sama, jadi kecepatan relatif menjauhnya nol dan $e = 0$.',
        'Itu ciri tumbukan tidak lenting sama sekali (inelastis sempurna).'
      ],
      tag: ['jenis tumbukan'],
      ragu: false
    },
    {
      id: 'mom-p5',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Berapa nilai koefisien restitusi $e$ pada tumbukan lenting sempurna?',
      pilihan: [
        '$0$',
        '$0{,}5$',
        '$1$',
        'tak hingga'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Koefisien restitusi membandingkan kecepatan relatif menjauh dengan kecepatan relatif mendekat.',
        'Pada tumbukan lenting sempurna energi kinetik kekal, sehingga kedua kecepatan relatif itu sama besar.'
      ],
      pembahasan: [
        '$e = \\dfrac{v_2^{\\prime} - v_1^{\\prime}}{v_1 - v_2}$, dan pada tumbukan lenting sempurna kecepatan relatif menjauh sama besar dengan kecepatan relatif mendekat.',
        'Jadi $e = 1$.'
      ],
      tag: ['restitusi'],
      ragu: false
    },
    /* ===================== MENENGAH ===================== */
    {
      id: 'mom-m1',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Gerbong $2000\\ \\text{kg}$ bergerak $3\\ \\text{m/s}$ menabrak gerbong $1000\\ \\text{kg}$ yang diam pada rel lurus, lalu keduanya saling terkait. Berapa kecepatan gabungan kedua gerbong sesudah tumbukan?',
      pilihan: [],
      jawaban: 2,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Gerbong yang terkait bergerak dengan kecepatan sama.',
        'Terapkan kekekalan momentum pada sistem dua gerbong.'
      ],
      pembahasan: [
        'Kekekalan momentum: $m_1 v_1 + m_2 v_2 = (m_1 + m_2)\\,v^{\\prime}$.',
        '$2000(3) + 1000(0) = 3000\\,v^{\\prime}$.',
        '$v^{\\prime} = 6000/3000 = 2\\ \\text{m/s}$.'
      ],
      tag: ['tidak lenting', 'kekekalan momentum'],
      ragu: false
    },
    {
      id: 'mom-m2',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Bola $0{,}2\\ \\text{kg}$ menumbuk dinding tegak lurus dengan laju $10\\ \\text{m/s}$ dan memantul kembali dengan laju $6\\ \\text{m/s}$. Bila bola bersentuhan dengan dinding selama $0{,}02\\ \\text{s}$, berapa besar gaya rata-rata dinding pada bola?',
      pilihan: [],
      jawaban: 160,
      satuan: 'N',
      toleransi: 0.02,
      petunjuk: [
        'Pilih satu arah sebagai positif. Arah bola setelah memantul berlawanan dengan arah datangnya.',
        'Hitung perubahan momentum, lalu gunakan $F\\,\\Delta t = \\Delta p$.'
      ],
      pembahasan: [
        'Ambil arah datang sebagai positif: $v_{\\text{awal}} = +10$ dan $v_{\\text{akhir}} = -6\\ \\text{m/s}$.',
        '$\\Delta p = m(v_{\\text{akhir}} - v_{\\text{awal}}) = 0{,}2(-6 - 10) = -3{,}2\\ \\text{kg m/s}$.',
        '$F = |\\Delta p|/\\Delta t = 3{,}2/0{,}02 = 160\\ \\text{N}$.'
      ],
      tag: ['impuls', 'tumbukan dinding'],
      ragu: false
    },
    {
      id: 'mom-m3',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Bola A bermassa $2\\ \\text{kg}$ bergerak $4\\ \\text{m/s}$ menumbuk bola B bermassa $2\\ \\text{kg}$ yang diam secara lenting sempurna pada lintasan lurus. Bagaimana keadaan kedua bola sesudah tumbukan?',
      pilihan: [
        'A berbalik dengan $4\\ \\text{m/s}$, B tetap diam',
        'A diam, B bergerak $4\\ \\text{m/s}$',
        'A dan B bergerak bersama dengan $2\\ \\text{m/s}$',
        'A bergerak $2\\ \\text{m/s}$ ke belakang, B bergerak $6\\ \\text{m/s}$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Lenting sempurna berarti momentum dan energi kinetik sama-sama kekal.',
        'Periksa tiap pilihan: hanya satu yang menjaga kedua besaran tetap sama.'
      ],
      pembahasan: [
        'Momentum awal $= 2(4) = 8\\ \\text{kg m/s}$ dan energi kinetik awal $= \\tfrac{1}{2}(2)(16) = 16\\ \\text{J}$.',
        'Pilihan A diam dan B $4\\ \\text{m/s}$: momentum $2(4) = 8$ dan energi $\\tfrac{1}{2}(2)(16) = 16\\ \\text{J}$, keduanya terpenuhi.',
        'Dua benda bermassa sama pada tumbukan lenting sempurna saling menukar kecepatan.'
      ],
      tag: ['lenting sempurna'],
      ragu: false
    },
    {
      id: 'mom-m4',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Bola dilepas dari ketinggian $5\\ \\text{m}$ di atas lantai dan memantul dengan koefisien restitusi $e = 0{,}6$. Berapa tinggi pantulan pertama? (gunakan $g = 10\\ \\text{m/s}^2$, abaikan hambatan udara)',
      pilihan: [],
      jawaban: 1.8,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Cari dulu laju bola sesaat sebelum menyentuh lantai.',
        'Laju pantul adalah $e$ kali laju datang. Ubah laju pantul menjadi tinggi.'
      ],
      pembahasan: [
        'Laju datang: $v = \\sqrt{2gh} = \\sqrt{2(10)(5)} = 10\\ \\text{m/s}$.',
        'Laju pantul: $v^{\\prime} = e\\,v = 0{,}6 \\times 10 = 6\\ \\text{m/s}$.',
        '$h^{\\prime} = v^{\\prime 2}/(2g) = 36/20 = 1{,}8\\ \\text{m}$.'
      ],
      tag: ['bola memantul', 'restitusi'],
      ragu: false
    },
    {
      id: 'mom-m5',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Saat peluru ditembakkan ke depan, senapan terdorong ke belakang. Apa nama gejala terdorongnya senapan ke belakang ini? (jawab dengan satu istilah)',
      pilihan: [],
      jawaban: ['rekoil', 'recoil', 'hentak'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Gejala ini mengikuti kekekalan momentum dengan momentum total awal nol.',
        'Istilah ini juga dipakai untuk gerak mundur meriam.'
      ],
      pembahasan: [
        'Momentum total sebelum menembak adalah nol, jadi peluru yang melaju ke depan harus diimbangi momentum senapan ke belakang.',
        'Gejala ini disebut rekoil (recoil) atau gerak mundur.'
      ],
      tag: ['rekoil'],
      ragu: false
    },
    /* ===================== LANJUT ===================== */
    {
      id: 'mom-l1',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah balok $0{,}8\\ \\text{kg}$ yang mula-mula diam di lantai licin didorong oleh gaya searah geraknya. Grafik gaya terhadap waktu: gaya naik secara linear dari $0$ sampai $40\\ \\text{N}$ dalam $0{,}1\\ \\text{s}$ pertama, lalu turun secara linear dari $40\\ \\text{N}$ sampai $0$ dalam $0{,}3\\ \\text{s}$ berikutnya. Berapa kecepatan balok setelah gaya hilang?',
      pilihan: [],
      jawaban: 10,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Impuls sama dengan luas daerah di bawah grafik gaya terhadap waktu.',
        'Bentuk grafiknya segitiga dengan alas $0{,}4\\ \\text{s}$ dan tinggi $40\\ \\text{N}$.',
        'Samakan impuls dengan perubahan momentum balok.'
      ],
      pembahasan: [
        'Alas segitiga $= 0{,}1 + 0{,}3 = 0{,}4\\ \\text{s}$ dan tingginya $40\\ \\text{N}$.',
        'Impuls $I = \\tfrac{1}{2}(0{,}4)(40) = 8\\ \\text{N s}$.',
        'Dari $I = m\\,v - 0$: $v = 8/0{,}8 = 10\\ \\text{m/s}$.'
      ],
      tag: ['grafik F-t', 'impuls'],
      ragu: false
    },
    {
      id: 'mom-l2',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Peluru $20\\ \\text{g}$ melaju $400\\ \\text{m/s}$ menembus balok $2\\ \\text{kg}$ yang diam di atas lantai licin dan keluar dengan laju $100\\ \\text{m/s}$ searah semula. Berapa energi mekanik yang berubah menjadi panas dan deformasi selama peluru menembus balok?',
      pilihan: [],
      jawaban: 1491,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Ubah massa peluru ke kilogram. Cari dulu kecepatan balok dengan kekekalan momentum.',
        'Energi yang hilang adalah energi kinetik awal dikurangi energi kinetik akhir seluruh sistem (peluru dan balok).'
      ],
      pembahasan: [
        'Momentum: $0{,}02(400) = 0{,}02(100) + 2\\,V$, sehingga $V = 6/2 = 3\\ \\text{m/s}$.',
        'Energi kinetik awal $= \\tfrac{1}{2}(0{,}02)(400^2) = 1600\\ \\text{J}$.',
        'Energi kinetik akhir $= \\tfrac{1}{2}(0{,}02)(100^2) + \\tfrac{1}{2}(2)(3^2) = 100 + 9 = 109\\ \\text{J}$.',
        'Energi yang hilang $= 1600 - 109 = 1491\\ \\text{J}$.'
      ],
      tag: ['peluru dan balok', 'energi hilang'],
      ragu: false
    },
    {
      id: 'mom-l3',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Bola dijatuhkan dari ketinggian $20\\ \\text{m}$ ke lantai keras dengan koefisien restitusi $e = 0{,}5$. Berapa tinggi maksimum bola setelah tumbukan kedua dengan lantai (pantulan kedua)? Abaikan hambatan udara.',
      pilihan: [
        '$5\\ \\text{m}$',
        '$10\\ \\text{m}$',
        '$2{,}5\\ \\text{m}$',
        '$1{,}25\\ \\text{m}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Setiap pantulan mengalikan tinggi dengan $e^2$, bukan $e$.',
        'Pantulan kedua berarti faktor $e^2$ diterapkan dua kali.'
      ],
      pembahasan: [
        'Pantulan pertama: $h_1 = e^2 h = 0{,}25 \\times 20 = 5\\ \\text{m}$.',
        'Pantulan kedua: $h_2 = e^2 h_1 = 0{,}25 \\times 5 = 1{,}25\\ \\text{m}$, yaitu $e^4 h$.'
      ],
      tag: ['bola memantul', 'restitusi'],
      ragu: false
    },
    {
      id: 'mom-l4',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah meriam bermassa $500\\ \\text{kg}$ (tidak termasuk peluru) berdiri di atas permukaan datar licin dan dapat bergerak bebas. Meriam menembakkan peluru $5\\ \\text{kg}$ secara horizontal dengan kecepatan $202\\ \\text{m/s}$ relatif terhadap meriam. Berapa laju mundur meriam terhadap tanah?',
      pilihan: [],
      jawaban: 2,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Kecepatan peluru terhadap tanah tidak sama dengan $202\\ \\text{m/s}$, karena meriam ikut bergerak mundur.',
        'Tulis kecepatan peluru terhadap tanah sebagai $202 - V$ dengan $V$ laju mundur meriam.',
        'Momentum total sebelum menembak adalah nol.'
      ],
      pembahasan: [
        'Misal meriam mundur dengan laju $V$, maka peluru bergerak $(202 - V)$ terhadap tanah.',
        'Kekekalan momentum: $5(202 - V) - 500\\,V = 0$.',
        '$1010 = 505\\,V$, sehingga $V = 2\\ \\text{m/s}$.'
      ],
      tag: ['rekoil', 'kecepatan relatif'],
      ragu: false
    },
    {
      id: 'mom-l5',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pada lintasan lurus licin, kereta mainan $3\\ \\text{kg}$ bergerak $4\\ \\text{m/s}$ ke kanan bertumbukan frontal dengan kereta $1\\ \\text{kg}$ yang bergerak $2\\ \\text{m/s}$ ke kiri. Koefisien restitusi tumbukan adalah $0{,}5$. Berapa energi kinetik total yang hilang akibat tumbukan?',
      pilihan: [],
      jawaban: 10.125,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Ambil arah kanan sebagai positif, sehingga kecepatan kereta kedua bernilai negatif.',
        'Cari kedua kecepatan sesudah tumbukan dari kekekalan momentum dan definisi $e$.',
        'Bandingkan energi kinetik total sebelum dan sesudah.'
      ],
      pembahasan: [
        'Momentum: $3(4) + 1(-2) = 3\\,v_1^{\\prime} + v_2^{\\prime} = 10$. Restitusi: $v_2^{\\prime} - v_1^{\\prime} = 0{,}5 \\times 6 = 3$.',
        'Diperoleh $v_1^{\\prime} = 1{,}75\\ \\text{m/s}$ dan $v_2^{\\prime} = 4{,}75\\ \\text{m/s}$.',
        'Energi kinetik awal $= \\tfrac{1}{2}(3)(16) + \\tfrac{1}{2}(1)(4) = 26\\ \\text{J}$.',
        'Energi kinetik akhir $= \\tfrac{1}{2}(3)(1{,}75^2) + \\tfrac{1}{2}(1)(4{,}75^2) = 15{,}875\\ \\text{J}$, jadi yang hilang $= 10{,}125\\ \\text{J}$.'
      ],
      tag: ['lenting sebagian', 'energi hilang'],
      ragu: false
    },
    /* ===================== EXPERT ===================== */
    {
      id: 'mom-e1',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Pada bandul balistik, peluru $10\\ \\text{g}$ ditembakkan horizontal ke balok kayu $1{,}99\\ \\text{kg}$ yang tergantung pada tali ringan dan peluru tertanam di dalam balok. Balok bersama peluru berayun naik setinggi maksimum $0{,}45\\ \\text{m}$ dari posisi awalnya. Berapa kecepatan peluru sesaat sebelum mengenai balok? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 600,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Pisahkan peristiwa menjadi dua tahap: tumbukan singkat (momentum kekal) dan ayunan (energi mekanik kekal).',
        'Dari tinggi ayunan, cari kecepatan balok-peluru tepat sesudah tumbukan.',
        'Lalu terapkan kekekalan momentum pada tumbukan tidak lenting.'
      ],
      pembahasan: [
        'Ayunan: $\\tfrac{1}{2}(m+M)V^2 = (m+M)\\,g\\,h$, jadi $V = \\sqrt{2gh} = \\sqrt{2(10)(0{,}45)} = 3\\ \\text{m/s}$.',
        'Tumbukan: $m\\,v = (m+M)\\,V$, dengan $m + M = 0{,}01 + 1{,}99 = 2\\ \\text{kg}$.',
        '$v = \\dfrac{2 \\times 3}{0{,}01} = 600\\ \\text{m/s}$.'
      ],
      tag: ['bandul balistik'],
      ragu: false
    },
    {
      id: 'mom-e2',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Benda $6\\ \\text{kg}$ yang diam di ruang hampa meledak menjadi tiga pecahan pada bidang datar. Pecahan pertama $1\\ \\text{kg}$ melesat $30\\ \\text{m/s}$ ke timur, pecahan kedua $2\\ \\text{kg}$ melesat $15\\ \\text{m/s}$ ke utara, dan pecahan ketiga membawa sisa massa. Berapa laju pecahan ketiga?',
      pilihan: [],
      jawaban: 14.142,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Momentum total sebelum ledakan adalah nol, sehingga jumlah vektor momentum ketiga pecahan nol.',
        'Hitung massa pecahan ketiga, lalu jumlahkan komponen timur dan komponen utara momentum dua pecahan lainnya.',
        'Momentum pecahan ketiga adalah kebalikan dari jumlah itu.'
      ],
      pembahasan: [
        'Massa pecahan ketiga $= 6 - 1 - 2 = 3\\ \\text{kg}$.',
        'Momentum pecahan 1 dan 2: $p_x = 1(30) = 30$ dan $p_y = 2(15) = 30\\ \\text{kg m/s}$.',
        'Pecahan ketiga harus membawa $p_x = -30$ dan $p_y = -30$, besarnya $\\sqrt{30^2 + 30^2} = 42{,}43\\ \\text{kg m/s}$.',
        '$v_3 = 42{,}43/3 = 14{,}142\\ \\text{m/s}$ (ke arah barat daya).'
      ],
      tag: ['ledakan', 'momentum 2D'],
      ragu: false
    },
    {
      id: 'mom-e3',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Benda 1 bermassa $1\\ \\text{kg}$ bergerak menumbuk benda 2 bermassa $3\\ \\text{kg}$ yang diam secara lenting sempurna pada lintasan lurus. Berapa fraksi energi kinetik awal yang dipindahkan ke benda 2?',
      pilihan: [
        '$\\dfrac{3}{4}$',
        '$\\dfrac{1}{4}$',
        '$\\dfrac{1}{2}$',
        '$\\dfrac{3}{8}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Dari kekekalan momentum dan energi (atau $e = 1$), turunkan $v_2^{\\prime}$ untuk benda 2 yang mula-mula diam.',
        'Hasilnya $v_2^{\\prime} = \\dfrac{2 m_1}{m_1 + m_2}\\,v_1$. Hitung energi kinetik benda 2 dan bagi dengan energi awal.'
      ],
      pembahasan: [
        'Dengan $v_2 = 0$ dan $e = 1$: $v_2^{\\prime} = \\dfrac{2 m_1}{m_1 + m_2}\\,v_1 = \\dfrac{2}{4}\\,v_1 = 0{,}5\\,v_1$.',
        'Energi kinetik benda 2: $\\tfrac{1}{2}(3)(0{,}5\\,v_1)^2 = 0{,}375\\,m_1 v_1^2$, sedangkan energi awal $= 0{,}5\\,m_1 v_1^2$ (dengan $m_1 = 1$).',
        'Fraksi $= \\dfrac{4 m_1 m_2}{(m_1 + m_2)^2} = \\dfrac{12}{16} = \\dfrac{3}{4}$.'
      ],
      tag: ['lenting sempurna', 'penurunan rumus'],
      ragu: false
    },
    {
      id: 'mom-e4',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Bola A dan bola B bermassa sama. B mula-mula diam dan A bergerak $6\\ \\text{m/s}$. Keduanya bertumbukan lenting sempurna tetapi tidak sentral, sehingga setelah tumbukan keduanya bergerak pada bidang datar dengan arah berbeda. Jika laju A sesudah tumbukan adalah $3{,}6\\ \\text{m/s}$, berapa laju B sesudah tumbukan?',
      pilihan: [],
      jawaban: 4.8,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Pada tumbukan lenting sempurna energi kinetik kekal. Dengan massa sama, hubungan itu menyederhanakan persamaan laju.',
        'Tidak perlu mengetahui sudutnya: gunakan kekekalan energi kinetik.'
      ],
      pembahasan: [
        'Energi kinetik kekal dengan massa sama: $v_0^2 = v_A^{\\prime 2} + v_B^{\\prime 2}$.',
        '$v_B^{\\prime 2} = 6^2 - 3{,}6^2 = 36 - 12{,}96 = 23{,}04$.',
        '$v_B^{\\prime} = 4{,}8\\ \\text{m/s}$. (Kekekalan momentum vektor menunjukkan kedua kecepatan akhir saling tegak lurus, segitiga 3,6-4,8-6.)'
      ],
      tag: ['tumbukan 2D', 'lenting sempurna'],
      ragu: false
    },
    {
      id: 'mom-e5',
      bab: 'momentum',
      subbab: 'momentum',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Bola dijatuhkan dari ketinggian $8\\ \\text{m}$ di atas lantai dan memantul berulang kali dengan koefisien restitusi $e = 0{,}6$ pada setiap tumbukan sampai akhirnya berhenti. Berapa jarak total yang ditempuh bola (naik dan turun) sampai berhenti? Abaikan hambatan udara.',
      pilihan: [],
      jawaban: 17,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Tinggi pantulan ke-$n$ adalah $e^{2n} h$, dan setiap pantulan menempuh jarak naik lalu turun.',
        'Jarak total $= h + 2h(e^2 + e^4 + \\dots)$, yaitu deret geometri tak hingga.',
        'Jumlah deret $e^2 + e^4 + \\dots = \\dfrac{e^2}{1 - e^2}$.'
      ],
      pembahasan: [
        'Jarak jatuh pertama $= 8\\ \\text{m}$, lalu tiap pantulan menambah $2h\\,e^{2n}$.',
        'Jumlah deret: $2h\\,\\dfrac{e^2}{1-e^2} = 2(8)\\dfrac{0{,}36}{0{,}64} = 9\\ \\text{m}$.',
        'Jarak total $= 8 + 9 = 17\\ \\text{m}$.'
      ],
      tag: ['deret pantulan', 'restitusi'],
      ragu: false
    }
  ]
};
