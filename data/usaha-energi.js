window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['usaha-energi'] = {
  id: 'usaha-energi',
  judul: 'Usaha dan Energi',
  subbab: [
    {
      id: 'usaha-energi',
      judul: 'Usaha dan Energi',
      materi: {
        gambaranBesar: 'Bayangkan kamu mendorong gerobak bakso di jalan menanjak. Makin berat gerobaknya dan makin jauh kamu mendorong, makin capek badanmu, dan itulah gambaran kasar dari usaha. Energi adalah simpanan kemampuan untuk melakukan usaha, seperti uang di dompet yang bisa kamu belanjakan, dan usaha adalah proses memindahkan uang itu dari satu kantong ke kantong lain. Bab ini menjawab satu pertanyaan besar: ke mana perginya energi, dan berapa banyak yang tersisa?',
        konsep: [
          {
            judul: 'Usaha oleh gaya konstan',
            teks: 'Usaha adalah ukuran seberapa besar sebuah gaya memindahkan benda. Hanya komponen gaya yang searah perpindahan yang ikut menghitung. Karena itu usaha memuat $\\cos\\theta$, dengan $\\theta$ adalah sudut antara arah gaya dan arah perpindahan. Satuan usaha adalah joule (J), dan $1\\ \\text{J} = 1\\ \\text{N m}$.',
            rumus: [
              {
                latex: 'W = F\\,s\\,\\cos\\theta',
                simbol: [
                  { s: 'W', arti: 'usaha oleh gaya itu', satuan: 'J' },
                  { s: 'F', arti: 'besar gaya (tetap)', satuan: 'N' },
                  { s: 's', arti: 'besar perpindahan', satuan: 'm' },
                  { s: '\\theta', arti: 'sudut antara gaya dan perpindahan', satuan: 'derajat' }
                ]
              }
            ]
          },
          {
            judul: 'Usaha positif, negatif, dan nol',
            teks: 'Jika gaya searah perpindahan ($\\theta = 0^\\circ$), usahanya positif dan gaya itu menambah energi benda. Jika gaya berlawanan arah perpindahan ($\\theta = 180^\\circ$), usahanya negatif dan gaya itu mengurangi energi benda, misalnya gaya gesek atau gaya gravitasi saat benda naik. Jika gaya tegak lurus perpindahan ($\\theta = 90^\\circ$), usahanya nol. Contohnya gaya normal pada benda yang meluncur di lantai datar, atau gravitasi pada orang yang berjalan mendatar.'
          },
          {
            judul: 'Usaha oleh gaya yang berubah',
            teks: 'Jika gaya berubah menurut posisi, usahanya adalah luas daerah di bawah grafik $F$ terhadap $s$ (luas di bawah sumbu dihitung negatif). Untuk grafik berbentuk segitiga, persegi panjang, atau trapesium, cukup jumlahkan luas bangun-bangunnya. Jika gaya diberikan sebagai fungsi $F(x)$, luas itu menjadi integral.',
            rumus: [
              {
                latex: 'W = \\int_{x_1}^{x_2} F(x)\\,dx',
                simbol: [
                  { s: 'W', arti: 'usaha oleh gaya F(x)', satuan: 'J' },
                  { s: 'F(x)', arti: 'gaya yang bergantung posisi', satuan: 'N' },
                  { s: 'x_1,\\ x_2', arti: 'posisi awal dan posisi akhir', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Energi kinetik dan teorema usaha-energi',
            teks: 'Energi kinetik adalah energi yang dimiliki benda karena geraknya. Teorema usaha-energi menyatakan bahwa usaha TOTAL, yaitu jumlah usaha semua gaya yang bekerja, sama dengan perubahan energi kinetik. Hati-hati: usaha oleh satu gaya saja tidak sama dengan perubahan energi kinetik, kecuali gaya itu satu-satunya yang berusaha.',
            rumus: [
              {
                latex: 'K = \\tfrac{1}{2}\\,m\\,v^2',
                simbol: [
                  { s: 'K', arti: 'energi kinetik', satuan: 'J' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'v', arti: 'laju benda', satuan: 'm/s' }
                ]
              },
              {
                latex: 'W_{\\text{total}} = \\Delta K = K_{\\text{akhir}} - K_{\\text{awal}}',
                simbol: [
                  { s: 'W_{\\text{total}}', arti: 'usaha total semua gaya', satuan: 'J' },
                  { s: '\\Delta K', arti: 'perubahan energi kinetik', satuan: 'J' }
                ]
              }
            ]
          },
          {
            judul: 'Energi potensial gravitasi dan pegas',
            teks: 'Energi potensial adalah energi simpanan karena posisi atau keadaan benda. Untuk benda di dekat permukaan Bumi, energi potensial gravitasi bergantung pada ketinggian dari titik acuan yang kamu pilih. Pada pegas, energi potensial tersimpan saat pegas ditekan atau diregangkan sejauh $x$ dari panjang alaminya (pendalaman pegas ada di bab Elastisitas). Di bab ini selalu dipakai $g = 10\\ \\text{m/s}^2$.',
            rumus: [
              {
                latex: 'U_g = m\\,g\\,h',
                simbol: [
                  { s: 'U_g', arti: 'energi potensial gravitasi', satuan: 'J' },
                  { s: 'm', arti: 'massa benda', satuan: 'kg' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 'h', arti: 'ketinggian dari titik acuan', satuan: 'm' }
                ]
              },
              {
                latex: 'U_p = \\tfrac{1}{2}\\,k\\,x^2',
                simbol: [
                  { s: 'U_p', arti: 'energi potensial pegas', satuan: 'J' },
                  { s: 'k', arti: 'konstanta pegas', satuan: 'N/m' },
                  { s: 'x', arti: 'pemampatan atau peregangan pegas', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Gaya konservatif dan kekekalan energi mekanik',
            teks: 'Gaya konservatif adalah gaya yang usahanya tidak bergantung pada lintasan, hanya pada posisi awal dan akhir. Gravitasi dan gaya pegas termasuk konservatif, sedangkan gesekan tidak (gaya non-konservatif). Jika hanya gaya konservatif yang berusaha, energi mekanik $E = K + U$ tetap. Jika ada gesekan, energi mekanik berkurang, dan selisihnya berubah menjadi kalor.',
            rumus: [
              {
                latex: 'K_1 + U_1 = K_2 + U_2',
                simbol: [
                  { s: 'K_1,\\ K_2', arti: 'energi kinetik di titik 1 dan 2', satuan: 'J' },
                  { s: 'U_1,\\ U_2', arti: 'energi potensial di titik 1 dan 2', satuan: 'J' }
                ]
              },
              {
                latex: 'E_2 = E_1 - f\\,s',
                simbol: [
                  { s: 'E_1,\\ E_2', arti: 'energi mekanik awal dan akhir', satuan: 'J' },
                  { s: 'f', arti: 'besar gaya gesek kinetik', satuan: 'N' },
                  { s: 's', arti: 'panjang lintasan yang ditempuh', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Daya dan efisiensi',
            teks: 'Daya adalah seberapa cepat usaha dilakukan. Satuannya watt (W), dengan $1\\ \\text{W} = 1\\ \\text{J/s}$. Untuk benda yang bergerak dengan laju $v$ di bawah gaya $F$ searah geraknya, daya sesaat adalah $F v$. Efisiensi adalah perbandingan daya (atau energi) yang berguna terhadap daya (atau energi) yang dimasukkan, dan nilainya selalu di bawah $100\\%$.',
            rumus: [
              {
                latex: 'P = \\frac{W}{t} = F\\,v',
                simbol: [
                  { s: 'P', arti: 'daya', satuan: 'W' },
                  { s: 'W', arti: 'usaha', satuan: 'J' },
                  { s: 't', arti: 'selang waktu', satuan: 's' },
                  { s: 'F', arti: 'gaya searah gerak', satuan: 'N' },
                  { s: 'v', arti: 'laju benda', satuan: 'm/s' }
                ]
              },
              {
                latex: '\\eta = \\frac{P_{\\text{keluaran}}}{P_{\\text{masukan}}} \\times 100\\%',
                simbol: [
                  { s: '\\eta', arti: 'efisiensi', satuan: 'persen' },
                  { s: 'P_{\\text{keluaran}}', arti: 'daya yang berguna', satuan: 'W' },
                  { s: 'P_{\\text{masukan}}', arti: 'daya yang dimasukkan', satuan: 'W' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebuah koper ditarik dengan tali yang membentuk sudut $60^\\circ$ terhadap lantai mendatar. Gaya tarik $20\\ \\text{N}$ dan koper berpindah $5\\ \\text{m}$ mendatar. Berapa usaha oleh gaya tarik?',
            langkah: [
              'Diketahui $F = 20\\ \\text{N}$, $s = 5\\ \\text{m}$, dan $\\theta = 60^\\circ$.',
              'Pakai $W = F\\,s\\,\\cos\\theta$.',
              '$W = 20 \\times 5 \\times \\cos 60^\\circ = 100 \\times 0{,}5 = 50\\ \\text{J}$.'
            ],
            hasil: 'Usaha oleh gaya tarik adalah 50 J.'
          },
          {
            soal: 'Bola $0{,}2\\ \\text{kg}$ dijatuhkan tanpa kecepatan awal dari ketinggian $5\\ \\text{m}$. Dengan $g = 10\\ \\text{m/s}^2$ dan hambatan udara diabaikan, berapa laju bola tepat sebelum menyentuh tanah?',
            langkah: [
              'Hanya gravitasi (gaya konservatif) yang berusaha, jadi energi mekanik tetap.',
              'Di atas: $K_1 = 0$ dan $U_1 = m g h = 0{,}2 \\times 10 \\times 5 = 10\\ \\text{J}$. Di tanah: $U_2 = 0$.',
              '$K_2 = U_1 \\Rightarrow \\tfrac{1}{2}(0{,}2)\\,v^2 = 10 \\Rightarrow v^2 = 100$.',
              '$v = 10\\ \\text{m/s}$.'
            ],
            hasil: 'Laju bola sebelum menyentuh tanah adalah 10 m/s.'
          },
          {
            soal: 'Sebuah gaya searah gerak bekerja pada benda. Grafik $F$–$s$: gaya naik beraturan dari $0$ sampai $10\\ \\text{N}$ pada $0$ sampai $2\\ \\text{m}$, lalu tetap $10\\ \\text{N}$ dari $2\\ \\text{m}$ sampai $5\\ \\text{m}$. Berapa usaha gaya itu?',
            langkah: [
              'Usaha sama dengan luas di bawah grafik $F$–$s$.',
              'Bagian segitiga: $\\tfrac{1}{2} \\times 2 \\times 10 = 10\\ \\text{J}$.',
              'Bagian persegi panjang: $3 \\times 10 = 30\\ \\text{J}$.',
              'Total $= 10 + 30 = 40\\ \\text{J}$.'
            ],
            hasil: 'Usaha gaya itu adalah 40 J.'
          },
          {
            soal: 'Motor listrik mengangkat beban $30\\ \\text{kg}$ setinggi $10\\ \\text{m}$ dalam $20\\ \\text{s}$ dengan laju tetap. Efisiensi motor $75\\%$. Berapa daya listrik yang dimasukkan? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Usaha berguna $= m g h = 30 \\times 10 \\times 10 = 3000\\ \\text{J}$.',
              'Daya keluaran $= \\dfrac{3000}{20} = 150\\ \\text{W}$.',
              'Efisiensi $0{,}75 = \\dfrac{150}{P_{\\text{masukan}}}$, sehingga $P_{\\text{masukan}} = 200\\ \\text{W}$.'
            ],
            hasil: 'Daya listrik yang dimasukkan adalah 200 W.'
          }
        ],
        kesalahan: [
          'Mengira usaha selalu positif. Gaya yang berlawanan dengan perpindahan, seperti gesekan, melakukan usaha negatif.',
          'Memakai sudut yang salah dalam $W = F s \\cos\\theta$. Sudutnya antara gaya dan perpindahan, bukan antara gaya dan lantai atau garis vertikal.',
          'Mengira orang yang menahan beban diam di tempat melakukan usaha fisika. Karena perpindahannya nol, usahanya nol, walaupun badan terasa lelah.',
          'Mencampur usaha oleh satu gaya dengan usaha total. Teorema usaha-energi memakai usaha total semua gaya, termasuk gesekan dan gaya normal (yang sering nol).',
          'Lupa bahwa energi kinetik sebanding dengan kuadrat laju: laju dua kali berarti energi kinetik empat kali, bukan dua kali.',
          'Memakai kekekalan energi mekanik saat ada gesekan tanpa memasukkan energi yang hilang menjadi kalor.',
          'Menukar daya dengan usaha atau energi. Daya adalah laju usaha dengan satuan watt, bukan joule.'
        ],
        ringkasan: [
          'Usaha gaya konstan: $W = F s \\cos\\theta$, bernilai positif, negatif, atau nol bergantung pada sudutnya.',
          'Usaha gaya yang berubah adalah luas di bawah grafik $F$–$s$, atau integral $\\int F\\,dx$.',
          'Teorema usaha-energi: $W_{\\text{total}} = \\Delta K$ dengan $K = \\tfrac{1}{2} m v^2$.',
          'Energi potensial: $U_g = m g h$ dan $U_p = \\tfrac{1}{2} k x^2$. Tanpa gesekan, $K + U$ tetap.',
          'Dengan gesekan, energi mekanik berkurang sebesar $f s$ dan berubah menjadi kalor.',
          'Daya $P = W/t = F v$ (satuan watt), dan efisiensi $\\eta = P_{\\text{keluaran}} / P_{\\text{masukan}}$.'
        ],
        simulasi: {
          id: 'usaha-energi-lintasan',
          judul: 'Simulasi: benda meluncur pada lintasan dan batang energinya',
          param: [
            { kunci: 'h0', label: 'Tinggi awal', min: 1, max: 10, nilai: 6, satuan: 'm', langkah: 0.5 },
            { kunci: 'm', label: 'Massa benda', min: 0.5, max: 5, nilai: 2, satuan: 'kg', langkah: 0.5 },
            { kunci: 'pos', label: 'Posisi pada lintasan', min: 0, max: 100, nilai: 40, satuan: '%', langkah: 1 },
            { kunci: 'mu', label: 'Koefisien gesek', min: 0, max: 0.3, nilai: 0.05, satuan: '', langkah: 0.01 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'ue-p1',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Seorang anak menarik mainan dengan gaya tetap $40\\ \\text{N}$ yang membentuk sudut $60^\\circ$ terhadap arah perpindahan mainan. Mainan berpindah sejauh $6\\ \\text{m}$. Berapa usaha yang dilakukan anak itu?',
      pilihan: [],
      jawaban: 120,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Hanya komponen gaya yang searah perpindahan yang menghasilkan usaha.',
        'Gunakan $W = F\\,s\\,\\cos\\theta$ dengan $\\cos 60^\\circ = 0{,}5$.'
      ],
      pembahasan: [
        'Diketahui $F = 40\\ \\text{N}$, $s = 6\\ \\text{m}$, dan $\\theta = 60^\\circ$.',
        '$W = F\\,s\\,\\cos\\theta = 40 \\times 6 \\times 0{,}5 = 120\\ \\text{J}$.'
      ],
      tag: ['usaha', 'gaya konstan'],
      ragu: false
    },
    {
      id: 'ue-p2',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Seorang siswa membawa tas $5\\ \\text{kg}$ sambil berjalan mendatar sejauh $12\\ \\text{m}$ dengan kecepatan tetap. Berapa usaha yang dilakukan gaya gravitasi pada tas selama perjalanan itu?',
      pilihan: [
        'Positif, karena tas bergerak maju',
        'Negatif, karena gravitasi menarik tas ke bawah',
        'Nol, karena gaya gravitasi tegak lurus perpindahan',
        '$m\\,g\\,s = 5 \\times 10 \\times 12 = 600\\ \\text{J}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Perhatikan sudut antara arah gaya gravitasi dan arah perpindahan tas.',
        'Gravitasi mengarah vertikal ke bawah, sedangkan tas berpindah mendatar.'
      ],
      pembahasan: [
        'Gravitasi bekerja vertikal ke bawah, perpindahan tas mendatar, jadi sudut antara keduanya $\\theta = 90^\\circ$.',
        '$W = F\\,s\\,\\cos 90^\\circ = 0$. Usaha oleh gravitasi pada tas bernilai nol.'
      ],
      tag: ['usaha nol', 'konsep'],
      ragu: false
    },
    {
      id: 'ue-p3',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil bermassa $800\\ \\text{kg}$ melaju dengan laju $15\\ \\text{m/s}$. Berapa energi kinetik mobil itu?',
      pilihan: [],
      jawaban: 90000,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Energi kinetik bergantung pada massa dan kuadrat laju.',
        'Gunakan $K = \\tfrac{1}{2}\\,m\\,v^2$.'
      ],
      pembahasan: [
        'Diketahui $m = 800\\ \\text{kg}$ dan $v = 15\\ \\text{m/s}$.',
        '$K = \\tfrac{1}{2} m v^2 = \\tfrac{1}{2} \\times 800 \\times 15^2 = 400 \\times 225 = 90000\\ \\text{J}$.'
      ],
      tag: ['energi kinetik'],
      ragu: false
    },
    {
      id: 'ue-p4',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Apa nama satuan SI untuk usaha dan energi? (tulis satu kata)',
      pilihan: [],
      jawaban: ['joule'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Satuan ini dilambangkan dengan huruf J.',
        'Satu satuan ini sama dengan satu newton meter.'
      ],
      pembahasan: [
        'Usaha $W = F\\,s$ punya satuan $\\text{N m}$.',
        'Satuan $\\text{N m}$ diberi nama joule (J), dan satuan yang sama dipakai untuk semua jenis energi.'
      ],
      tag: ['satuan', 'istilah'],
      ragu: false
    },
    {
      id: 'ue-p5',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah sepeda motor menambah lajunya menjadi tiga kali lipat. Energi kinetiknya menjadi ... kali semula.',
      pilihan: [
        '$3$',
        '$9$',
        '$6$',
        '$27$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Lihat bagaimana laju muncul dalam rumus energi kinetik.',
        '$K = \\tfrac{1}{2} m v^2$, jadi laju ikut dikuadratkan.'
      ],
      pembahasan: [
        'Energi kinetik sebanding dengan $v^2$.',
        'Laju menjadi $3v$, sehingga $K_{\\text{baru}} = \\tfrac{1}{2} m (3v)^2 = 9 \\times \\tfrac{1}{2} m v^2$. Jadi energi kinetik menjadi 9 kali.'
      ],
      tag: ['energi kinetik', 'perbandingan'],
      ragu: false
    },

    /* ===================== MENENGAH ===================== */
    {
      id: 'ue-m1',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil bermassa $1000\\ \\text{kg}$ dipercepat dari laju $10\\ \\text{m/s}$ menjadi $20\\ \\text{m/s}$ di jalan lurus. Berapa usaha total yang bekerja pada mobil selama dipercepat?',
      pilihan: [],
      jawaban: 150000,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Usaha total sama dengan perubahan energi kinetik.',
        '$W_{\\text{total}} = \\tfrac{1}{2} m (v_2^2 - v_1^2)$.'
      ],
      pembahasan: [
        'Teorema usaha-energi: $W_{\\text{total}} = K_2 - K_1$.',
        '$K_1 = \\tfrac{1}{2}(1000)(10)^2 = 50000\\ \\text{J}$ dan $K_2 = \\tfrac{1}{2}(1000)(20)^2 = 200000\\ \\text{J}$.',
        '$W_{\\text{total}} = 200000 - 50000 = 150000\\ \\text{J}$.'
      ],
      tag: ['teorema usaha-energi'],
      ragu: false
    },
    {
      id: 'ue-m2',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Bola bermassa $0{,}5\\ \\text{kg}$ dilepas dari diam pada ketinggian $20\\ \\text{m}$ di atas tanah. Dengan $g = 10\\ \\text{m/s}^2$ dan hambatan udara diabaikan, berapa laju bola saat berada pada ketinggian $5\\ \\text{m}$ di atas tanah?',
      pilihan: [],
      jawaban: 17.3205,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Tanpa hambatan udara, energi mekanik bola tetap.',
        'Bola turun $20 - 5 = 15\\ \\text{m}$, jadi $\\tfrac{1}{2} v^2 = g \\times 15$ (massa saling meniadakan).'
      ],
      pembahasan: [
        'Energi mekanik kekal: $m g h_1 = m g h_2 + \\tfrac{1}{2} m v^2$.',
        'Massa saling meniadakan: $v^2 = 2g\\,(h_1 - h_2) = 2 \\times 10 \\times 15 = 300$.',
        '$v = \\sqrt{300} \\approx 17{,}32\\ \\text{m/s}$.'
      ],
      tag: ['kekekalan energi mekanik'],
      ragu: false
    },
    {
      id: 'ue-m3',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Sebuah pegas dengan konstanta $200\\ \\text{N/m}$ ditekan sejauh $0{,}15\\ \\text{m}$ dari panjang alaminya. Berapa energi potensial pegas yang tersimpan?',
      pilihan: [
        '$2{,}25\\ \\text{J}$',
        '$4{,}5\\ \\text{J}$',
        '$15\\ \\text{J}$',
        '$30\\ \\text{J}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Energi potensial pegas bergantung pada kuadrat pemampatan.',
        'Gunakan $U_p = \\tfrac{1}{2} k x^2$, jangan lupa faktor $\\tfrac{1}{2}$ dan kuadratnya.'
      ],
      pembahasan: [
        'Diketahui $k = 200\\ \\text{N/m}$ dan $x = 0{,}15\\ \\text{m}$.',
        '$U_p = \\tfrac{1}{2} k x^2 = \\tfrac{1}{2} \\times 200 \\times (0{,}15)^2 = 100 \\times 0{,}0225 = 2{,}25\\ \\text{J}$.'
      ],
      tag: ['energi pegas'],
      ragu: false
    },
    {
      id: 'ue-m4',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah mesin derek mengangkat beban $50\\ \\text{kg}$ setinggi $12\\ \\text{m}$ dengan laju tetap selama $20\\ \\text{s}$. Dengan $g = 10\\ \\text{m/s}^2$, berapa daya berguna mesin itu?',
      pilihan: [],
      jawaban: 300,
      satuan: 'W',
      toleransi: 0.02,
      petunjuk: [
        'Laju tetap berarti gaya angkat sama dengan berat beban.',
        'Hitung usaha $W = m g h$, lalu bagi dengan waktu.'
      ],
      pembahasan: [
        'Laju tetap, jadi gaya angkat $F = m g = 50 \\times 10 = 500\\ \\text{N}$.',
        'Usaha $W = F\\,h = 500 \\times 12 = 6000\\ \\text{J}$.',
        '$P = \\dfrac{W}{t} = \\dfrac{6000}{20} = 300\\ \\text{W}$.'
      ],
      tag: ['daya', 'usaha'],
      ragu: false
    },
    {
      id: 'ue-m5',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Besaran yang menyatakan seberapa cepat usaha dilakukan (usaha tiap satuan waktu) disebut ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['daya'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Satuannya adalah watt, yaitu joule per sekon.',
        'Mesin yang kuat berarti mesin yang bisa melakukan usaha dengan cepat.'
      ],
      pembahasan: [
        'Usaha tiap satuan waktu, $P = W/t$, disebut daya.',
        'Satuannya watt (W), dengan $1\\ \\text{W} = 1\\ \\text{J/s}$.'
      ],
      tag: ['daya', 'istilah'],
      ragu: false
    },

    /* ===================== LANJUT ===================== */
    {
      id: 'ue-l1',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah gaya searah gerak bekerja pada sebuah benda. Grafik gaya terhadap posisi ($F$–$s$): dari $s = 0$ sampai $4\\ \\text{m}$ gaya naik beraturan dari $0$ menjadi $20\\ \\text{N}$; dari $s = 4\\ \\text{m}$ sampai $10\\ \\text{m}$ gaya tetap $20\\ \\text{N}$; dari $s = 10\\ \\text{m}$ sampai $14\\ \\text{m}$ gaya turun beraturan dari $20\\ \\text{N}$ menjadi $8\\ \\text{N}$. Berapa usaha total gaya itu dari $s = 0$ sampai $s = 14\\ \\text{m}$?',
      pilihan: [],
      jawaban: 216,
      satuan: 'J',
      toleransi: 0.02,
      petunjuk: [
        'Usaha sama dengan luas di bawah grafik $F$–$s$.',
        'Pecah menjadi segitiga, persegi panjang, dan trapesium.',
        'Luas trapesium $= \\tfrac{1}{2}(\\text{jumlah sisi sejajar}) \\times \\text{tinggi}$, dengan sisi sejajar berupa nilai gaya.'
      ],
      pembahasan: [
        'Tahap 1 (segitiga): $\\tfrac{1}{2} \\times 4 \\times 20 = 40\\ \\text{J}$.',
        'Tahap 2 (persegi panjang): $6 \\times 20 = 120\\ \\text{J}$.',
        'Tahap 3 (trapesium): $\\tfrac{1}{2}(20 + 8) \\times 4 = 56\\ \\text{J}$.',
        'Total $= 40 + 120 + 56 = 216\\ \\text{J}$.'
      ],
      tag: ['grafik F-s', 'luas grafik'],
      ragu: false
    },
    {
      id: 'ue-l2',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok $4\\ \\text{kg}$ dilepas dari diam di puncak bidang miring kasar yang tingginya $3\\ \\text{m}$ dan sudut kemiringannya $30^\\circ$. Koefisien gesek kinetik $0{,}2$. Dengan $g = 10\\ \\text{m/s}^2$ dan $\\cos 30^\\circ \\approx 0{,}866$, berapa laju balok di dasar bidang miring?',
      pilihan: [],
      jawaban: 6.2622,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Panjang bidang miring $L = h / \\sin\\theta$.',
        'Gaya normal $N = m g \\cos\\theta$, sehingga gaya gesek $f = \\mu\\,N$.',
        'Teorema usaha-energi: $m g h - f L = \\tfrac{1}{2} m v^2$ (usaha total = usaha gravitasi + usaha gesek).'
      ],
      pembahasan: [
        'Panjang bidang: $L = \\dfrac{3}{\\sin 30^\\circ} = 6\\ \\text{m}$.',
        'Gaya gesek: $f = \\mu m g \\cos\\theta = 0{,}2 \\times 4 \\times 10 \\times 0{,}866 \\approx 6{,}93\\ \\text{N}$, jadi usaha gesek $= -f L \\approx -41{,}57\\ \\text{J}$.',
        'Usaha gravitasi $= m g h = 4 \\times 10 \\times 3 = 120\\ \\text{J}$, jadi $\\tfrac{1}{2} m v^2 = 120 - 41{,}57 = 78{,}43\\ \\text{J}$.',
        '$v^2 = \\dfrac{2 \\times 78{,}43}{4} \\approx 39{,}22$, sehingga $v \\approx 6{,}26\\ \\text{m/s}$.'
      ],
      tag: ['bidang miring kasar', 'usaha gesek'],
      ragu: false
    },
    {
      id: 'ue-l3',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok $2\\ \\text{kg}$ meluncur mendatar dengan laju $6\\ \\text{m/s}$. Mula-mula lantai licin, lalu balok melewati bagian kasar sepanjang $2\\ \\text{m}$ dengan koefisien gesek kinetik $0{,}25$, kemudian lantai kembali licin dan balok menabrak pegas ($k = 800\\ \\text{N/m}$) yang ujung lainnya terpasang pada dinding. Dengan $g = 10\\ \\text{m/s}^2$, berapa pemampatan maksimum pegas?',
      pilihan: [],
      jawaban: 0.25495,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Hitung energi kinetik yang hilang di bagian kasar: $f\\,d = \\mu m g\\,d$.',
        'Pada pemampatan maksimum balok berhenti sesaat, jadi seluruh energi kinetik yang tersisa menjadi energi pegas.',
        'Selesaikan $\\tfrac{1}{2} k x^2 = K_{\\text{sisa}}$ untuk $x$.'
      ],
      pembahasan: [
        'Energi kinetik awal: $\\tfrac{1}{2} \\times 2 \\times 6^2 = 36\\ \\text{J}$.',
        'Kalor di bagian kasar: $\\mu m g\\,d = 0{,}25 \\times 2 \\times 10 \\times 2 = 10\\ \\text{J}$, sehingga sisa energi kinetik $= 26\\ \\text{J}$.',
        'Di pemampatan maksimum: $\\tfrac{1}{2} k x^2 = 26 \\Rightarrow x^2 = \\dfrac{2 \\times 26}{800} = 0{,}065$.',
        '$x = \\sqrt{0{,}065} \\approx 0{,}255\\ \\text{m}$.'
      ],
      tag: ['pegas', 'gesekan', 'kekekalan energi'],
      ragu: false
    },
    {
      id: 'ue-l4',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Bola bermassa $0{,}4\\ \\text{kg}$ dilempar lurus ke atas dari tanah dengan laju $20\\ \\text{m/s}$. Hambatan udara diabaikan dan $g = 10\\ \\text{m/s}^2$. Pada ketinggian berapa energi kinetik bola sama dengan energi potensial gravitasinya (acuan di tanah)?',
      pilihan: [
        '$5\\ \\text{m}$',
        '$20\\ \\text{m}$',
        '$15\\ \\text{m}$',
        '$10\\ \\text{m}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Energi mekanik total tetap, sama dengan energi kinetik awal.',
        'Jika $K = U$, maka masing-masing sama dengan setengah energi mekanik total.',
        'Selesaikan $m g h = \\tfrac{1}{2} E_{\\text{total}}$ untuk $h$.'
      ],
      pembahasan: [
        'Energi mekanik total $E = \\tfrac{1}{2} \\times 0{,}4 \\times 20^2 = 80\\ \\text{J}$.',
        'Saat $K = U$, $U = \\tfrac{1}{2} E = 40\\ \\text{J}$.',
        '$m g h = 40 \\Rightarrow h = \\dfrac{40}{0{,}4 \\times 10} = 10\\ \\text{m}$.'
      ],
      tag: ['kekekalan energi mekanik', 'gerak vertikal'],
      ragu: false
    },
    {
      id: 'ue-l5',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Balok $5\\ \\text{kg}$ mula-mula diam di lantai mendatar kasar dengan koefisien gesek kinetik $0{,}2$. Balok ditarik dengan gaya $30\\ \\text{N}$ yang membentuk sudut $60^\\circ$ di atas horizontal sejauh $8\\ \\text{m}$. Dengan $g = 10\\ \\text{m/s}^2$, $\\sin 60^\\circ \\approx 0{,}866$, dan $\\cos 60^\\circ = 0{,}5$, berapa laju balok setelah berpindah $8\\ \\text{m}$?',
      pilihan: [],
      jawaban: 5.7121,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Gaya tarik yang miring mengurangi gaya normal: $N = m g - F\\sin\\theta$.',
        'Hitung usaha tiap gaya: gaya tarik positif, gesekan negatif, normal dan berat nol.',
        'Usaha total sama dengan $\\tfrac{1}{2} m v^2$ karena balok mula-mula diam.'
      ],
      pembahasan: [
        'Usaha gaya tarik: $W_F = F\\,s\\cos 60^\\circ = 30 \\times 8 \\times 0{,}5 = 120\\ \\text{J}$.',
        'Gaya normal: $N = 50 - 30 \\times 0{,}866 \\approx 24{,}02\\ \\text{N}$, gaya gesek $f = 0{,}2 N \\approx 4{,}80\\ \\text{N}$, usaha gesek $= -f s \\approx -38{,}43\\ \\text{J}$. Usaha normal dan berat nol.',
        'Usaha total $\\approx 120 - 38{,}43 = 81{,}57\\ \\text{J} = \\tfrac{1}{2} m v^2$.',
        '$v = \\sqrt{\\dfrac{2 \\times 81{,}57}{5}} \\approx 5{,}71\\ \\text{m/s}$.'
      ],
      tag: ['usaha total', 'gesekan', 'gaya normal'],
      ragu: false
    },

    /* ===================== EXPERT ===================== */
    {
      id: 'ue-e1',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Partikel bermassa $2\\ \\text{kg}$ bergerak sepanjang sumbu $x$ di atas bidang licin. Di $x = 1\\ \\text{m}$ lajunya $1\\ \\text{m/s}$. Satu-satunya gaya mendatar yang bekerja adalah $F(x) = 4x + 3x^2$, dengan $F$ dalam newton dan $x$ dalam meter, searah sumbu $x$. Berapa laju partikel di $x = 3\\ \\text{m}$?',
      pilihan: [],
      jawaban: 6.5574,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Gaya bergantung posisi, jadi usaha dihitung dengan integral $\\int F\\,dx$.',
        'Integralkan dari $x = 1$ sampai $x = 3$.',
        'Pakai $W = K_{\\text{akhir}} - K_{\\text{awal}}$ untuk mencari laju akhir.'
      ],
      pembahasan: [
        '$W = \\int_{1}^{3} (4x + 3x^2)\\,dx = \\left[ 2x^2 + x^3 \\right]_{1}^{3} = (18 + 27) - (2 + 1) = 42\\ \\text{J}$.',
        'Energi kinetik awal: $K_1 = \\tfrac{1}{2} \\times 2 \\times 1^2 = 1\\ \\text{J}$.',
        'Teorema usaha-energi: $K_2 = K_1 + W = 43\\ \\text{J}$, jadi $\\tfrac{1}{2}(2)\\,v^2 = 43$.',
        '$v = \\sqrt{43} \\approx 6{,}56\\ \\text{m/s}$.'
      ],
      tag: ['integral', 'gaya berubah', 'teorema usaha-energi'],
      ragu: false
    },
    {
      id: 'ue-e2',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah kereta mainan dilepas dari diam pada ketinggian $h$ di atas dasar lintasan licin, lalu meluncur ke dalam lintasan lingkaran vertikal berjari-jari $0{,}85\\ \\text{m}$ yang titik terendahnya adalah dasar lintasan. Agar kereta tepat tidak lepas dari lintasan di titik puncak lingkaran (gaya normal di puncak nol), berapa nilai minimum $h$? Gunakan $g = 10\\ \\text{m/s}^2$ dan ukur $h$ dari dasar lintasan.',
      pilihan: [],
      jawaban: 2.125,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Syarat minimum di puncak: hanya berat yang menyediakan gaya sentripetal, $m g = m v^2 / R$.',
        'Titik puncak berada pada ketinggian $2R$ dari dasar.',
        'Gunakan kekekalan energi mekanik antara titik lepas dan puncak.'
      ],
      pembahasan: [
        'Di puncak, $N = 0$: $m g = \\dfrac{m v^2}{R} \\Rightarrow v^2 = g R$.',
        'Kekekalan energi dari titik lepas ke puncak: $m g h = m g (2R) + \\tfrac{1}{2} m v^2 = m g (2R) + \\tfrac{1}{2} m g R$.',
        '$h = 2R + \\tfrac{1}{2} R = 2{,}5\\,R = 2{,}5 \\times 0{,}85 = 2{,}125\\ \\text{m}$.'
      ],
      tag: ['lintasan melingkar', 'syarat di puncak'],
      ragu: false
    },
    {
      id: 'ue-e3',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Mobil bermassa $1500\\ \\text{kg}$ mendaki jalan lurus yang kemiringannya $\\sin\\theta = 0{,}1$ dengan laju tetap $20\\ \\text{m/s}$. Total gaya hambat (gesekan dan udara) yang menahan mobil adalah $600\\ \\text{N}$ sejajar jalan. Dengan $g = 10\\ \\text{m/s}^2$, berapa daya yang harus dihasilkan mesin pada roda?',
      pilihan: [],
      jawaban: 42000,
      satuan: 'W',
      toleransi: 0.02,
      petunjuk: [
        'Laju tetap berarti gaya total sejajar jalan nol.',
        'Gaya dorong mesin harus mengimbangi komponen berat sejajar jalan dan gaya hambat.',
        'Daya $P = F\\,v$ dengan $F$ adalah gaya dorong mesin.'
      ],
      pembahasan: [
        'Komponen berat sejajar jalan: $m g \\sin\\theta = 1500 \\times 10 \\times 0{,}1 = 1500\\ \\text{N}$.',
        'Laju tetap, jadi gaya dorong $F = 1500 + 600 = 2100\\ \\text{N}$.',
        '$P = F\\,v = 2100 \\times 20 = 42000\\ \\text{W}$.'
      ],
      tag: ['daya', 'gaya hambat', 'bidang miring'],
      ragu: false
    },
    {
      id: 'ue-e4',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah pompa menaikkan $600\\ \\text{kg}$ air tiap menit dari sumur ke tangki yang $20\\ \\text{m}$ lebih tinggi, dengan air keluar berlaju tetap dan kecil sehingga energi kinetiknya diabaikan. Efisiensi pompa $80\\%$ dan $g = 10\\ \\text{m/s}^2$. Berapa daya listrik yang dimasukkan ke pompa?',
      pilihan: [
        '$2500\\ \\text{W}$',
        '$2000\\ \\text{W}$',
        '$1600\\ \\text{W}$',
        '$3125\\ \\text{W}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Hitung dulu daya berguna: usaha menaikkan air tiap sekon.',
        'Efisiensi $= P_{\\text{keluaran}} / P_{\\text{masukan}}$, jadi daya masukan lebih besar dari daya berguna.'
      ],
      pembahasan: [
        'Usaha tiap menit: $m g h = 600 \\times 10 \\times 20 = 120000\\ \\text{J}$, sehingga $P_{\\text{keluaran}} = \\dfrac{120000}{60} = 2000\\ \\text{W}$.',
        '$\\eta = \\dfrac{P_{\\text{keluaran}}}{P_{\\text{masukan}}} \\Rightarrow P_{\\text{masukan}} = \\dfrac{2000}{0{,}8} = 2500\\ \\text{W}$.'
      ],
      tag: ['daya', 'efisiensi'],
      ragu: false
    },
    {
      id: 'ue-e5',
      bab: 'usaha-energi',
      subbab: 'usaha-energi',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Balok $3\\ \\text{kg}$ dilepas dari diam di puncak bidang miring setinggi $2\\ \\text{m}$ dengan $\\sin\\theta = 0{,}6$ dan $\\cos\\theta = 0{,}8$. Koefisien gesek kinetik antara balok dan bidang miring, serta antara balok dan lantai mendatar di dasarnya, sama besar yaitu $0{,}25$. Peralihan dari bidang miring ke lantai mulus tanpa kehilangan energi. Dengan $g = 10\\ \\text{m/s}^2$, berapa jarak yang ditempuh balok di lantai mendatar sampai berhenti?',
      pilihan: [],
      jawaban: 5.3333,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Semua energi potensial awal akhirnya berubah menjadi kalor oleh gesekan di bidang miring dan di lantai.',
        'Panjang bidang miring $L = h / \\sin\\theta$ dan gaya gesek di bidang miring memakai $N = m g \\cos\\theta$.',
        'Tulis $m g h = \\mu m g \\cos\\theta\\,L + \\mu m g\\,d$; massa dapat dicoret.'
      ],
      pembahasan: [
        'Panjang bidang miring: $L = \\dfrac{2}{0{,}6} = \\dfrac{10}{3}\\ \\text{m}$.',
        'Kalor di bidang miring: $\\mu m g \\cos\\theta\\,L = 0{,}25 \\times 3 \\times 10 \\times 0{,}8 \\times \\dfrac{10}{3} = 20\\ \\text{J}$, sedangkan energi potensial awal $m g h = 60\\ \\text{J}$.',
        'Sisa $40\\ \\text{J}$ habis oleh gesekan di lantai: $\\mu m g\\,d = 0{,}25 \\times 3 \\times 10\\,d = 7{,}5\\,d = 40$.',
        '$d = \\dfrac{40}{7{,}5} \\approx 5{,}33\\ \\text{m}$.'
      ],
      tag: ['gesekan', 'kekekalan energi', 'bidang miring'],
      ragu: false
    }
  ]
};
