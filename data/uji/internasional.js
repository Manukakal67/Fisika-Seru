/* Uji Pemahaman: soal tingkat Internasional (gaya IPhO/APhO).
   Soal orisinal bergaya olimpiade. Jawaban diverifikasi ulang dengan Python. */
window.DATA_UJI = window.DATA_UJI || [];
window.DATA_UJI.push(
  {
    id: 'int-01',
    tingkat: 'internasional',
    bab: ['relativitas', 'momentum'],
    konsep: ['energi dan momentum relativistik', 'massa invarian sistem'],
    tipe: 'angka',
    pertanyaan: 'Sebuah partikel bermassa diam $m$ bergerak dengan kelajuan $0{,}6c$ dan menumbuk partikel identik yang diam. Kedua partikel menyatu menjadi satu partikel baru. Berapa massa diam partikel baru tersebut, dinyatakan sebagai kelipatan $m$? (Tulis angkanya saja, misalnya $2{,}5$.)',
    pilihan: null,
    jawaban: 2.1213,
    satuan: '',
    toleransi: 0.01,
    petunjuk: [
      'Dalam relativitas, massa diam TIDAK kekal. Besaran apa yang kekal pada tumbukan?',
      'Energi total dan momentum kekal. Hitung $\\gamma$ untuk $0{,}6c$ terlebih dahulu.',
      'Massa diam sistem memenuhi $(Mc^2)^2 = E^2 - (pc)^2$.'
    ],
    pembahasan: [
      'Untuk $v = 0{,}6c$: $\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}36}} = 1{,}25$.',
      'Energi total: $E = \\gamma mc^2 + mc^2 = 2{,}25\\,mc^2$.',
      'Momentum total: $p = \\gamma m v = 1{,}25 \\times 0{,}6\\,mc = 0{,}75\\,mc$.',
      'Massa invarian: $(Mc^2)^2 = (2{,}25\\,mc^2)^2 - (0{,}75\\,mc^2)^2 = 4{,}5\\,(mc^2)^2$.',
      'Jadi $M = \\sqrt{4{,}5}\\,m = \\tfrac{3}{\\sqrt{2}}\\,m \\approx 2{,}12\\,m$, lebih besar dari $2m$ karena energi kinetik berubah menjadi massa diam.',
      'Bonus: kelajuan partikel gabungan $u = pc^2/E = c/3$.'
    ],
    referensi: null
  },
  {
    id: 'int-02',
    tingkat: 'internasional',
    bab: ['benda-tegar', 'elastisitas-shm'],
    konsep: ['bandul fisis (momen inersia dan teorema sumbu sejajar)', 'periode osilasi kecil dan optimasi'],
    tipe: 'angka',
    pertanyaan: 'Sebuah batang tipis homogen sepanjang $1{,}2\\ \\text{m}$ diberi lubang poros di suatu titik pada batang, lalu diayunkan dengan simpangan kecil sebagai bandul fisis. Posisi poros dipilih sehingga periode ayunannya sekecil mungkin. Berapa periode minimum tersebut? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 1.6706,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Misalkan poros berjarak $x$ dari pusat massa. Tulis momen inersia terhadap poros dengan teorema sumbu sejajar.',
      'Periode bandul fisis: $T = 2\\pi\\sqrt{\\dfrac{I}{Mgx}}$. Cari $x$ yang meminimalkan $\\dfrac{I}{x}$.',
      'Turunkan terhadap $x$ dan samakan dengan nol.'
    ],
    pembahasan: [
      'Dengan poros berjarak $x$ dari pusat: $I = \\tfrac{1}{12}ML^2 + Mx^2$.',
      'Periode: $T(x) = 2\\pi\\sqrt{\\dfrac{L^2/12 + x^2}{gx}}$.',
      'Minimalkan $f(x) = \\dfrac{L^2}{12x} + x$: $f\'(x) = -\\dfrac{L^2}{12x^2} + 1 = 0$, sehingga $x = \\dfrac{L}{\\sqrt{12}} \\approx 0{,}346\\ \\text{m}$.',
      'Di titik ini $I/(Mx) = 2x$, sehingga $T_{\\min} = 2\\pi\\sqrt{\\dfrac{2x}{g}} = 2\\pi\\sqrt{\\dfrac{0{,}693}{9{,}8}} \\approx 1{,}67\\ \\text{s}$.',
      'Perhatikan: poros di ujung batang ($x = 0{,}6\\ \\text{m}$) memberi $T \\approx 1{,}80\\ \\text{s}$, jadi bukan posisi terbaik.'
    ],
    referensi: null
  },
  {
    id: 'int-03',
    tingkat: 'internasional',
    bab: ['vektor', 'kinematika'],
    konsep: ['gerak parabola dari ketinggian', 'optimasi sudut lempar'],
    tipe: 'angka',
    pertanyaan: 'Sebuah batu dilempar dari tepi tebing setinggi $20\\ \\text{m}$ di atas dataran dengan kelajuan $15\\ \\text{m/s}$. Sudut lemparan dapat dipilih bebas. Berapa jarak mendatar MAKSIMUM yang dapat dicapai batu, diukur dari kaki tebing? Abaikan hambatan udara. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 38.02,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Dari ketinggian, sudut optimal TIDAK lagi $45^\\circ$. Coba tebak: lebih besar atau lebih kecil?',
      'Kelajuan saat menyentuh tanah tidak bergantung pada sudut: $v_1 = \\sqrt{v_0^2 + 2gh}$ (kekekalan energi).',
      'Lemparan optimal terjadi saat vektor kecepatan awal dan vektor kecepatan akhir saling tegak lurus. Gunakan luas segitiga vektor $\\vec{v}_0$, $\\vec{v}_1$, dan $\\vec{g}t$.'
    ],
    pembahasan: [
      'Perhatikan segitiga vektor: $\\vec{v}_1 = \\vec{v}_0 + \\vec{g}t$. Luasnya $\\tfrac{1}{2}|\\vec{v}_0 \\times \\vec{v}_1| = \\tfrac{1}{2}\\,gt\\,v_{0x} = \\tfrac{1}{2}gx$.',
      'Jadi $x = \\dfrac{v_0 v_1 \\sin\\phi}{g}$, dengan $\\phi$ sudut antara $\\vec{v}_0$ dan $\\vec{v}_1$. Nilainya maksimum saat $\\phi = 90^\\circ$.',
      'Dengan $v_1 = \\sqrt{v_0^2 + 2gh} = \\sqrt{225 + 392} \\approx 24{,}84\\ \\text{m/s}$: $x_{\\max} = \\dfrac{v_0 v_1}{g} = \\dfrac{15 \\times 24{,}84}{9{,}8} \\approx 38{,}0\\ \\text{m}$.',
      'Sudut optimalnya: $\\tan\\theta = \\dfrac{v_0}{v_1}$, sehingga $\\theta \\approx 31{,}1^\\circ$, lebih kecil dari $45^\\circ$.',
      'Diverifikasi juga dengan mencari maksimum jangkauan secara numerik untuk semua sudut.'
    ],
    referensi: null
  },
  {
    id: 'int-04',
    tingkat: 'internasional',
    bab: ['dinamika', 'kinematika'],
    konsep: ['gerak melingkar dalam kerangka berputar', 'kesetimbangan stabil dan syarat kecepatan sudut kritis'],
    tipe: 'angka',
    pertanyaan: 'Sebuah manik kecil dapat meluncur tanpa gesekan pada cincin kawat vertikal berjari-jari $10\\ \\text{cm}$. Cincin diputar dengan kecepatan sudut tetap $15\\ \\text{rad/s}$ terhadap diameter vertikalnya. Manik akhirnya diam relatif terhadap cincin pada posisi setimbang yang stabil, bukan di titik terbawah. Berapa sudut posisi manik itu, diukur dari titik terbawah cincin terhadap pusat cincin, dalam derajat? Gunakan $g = 9{,}8\\ \\text{m/s}^2$. (Tulis angkanya saja.)',
    pilihan: null,
    jawaban: 64.18,
    satuan: '',
    toleransi: 0.02,
    petunjuk: [
      'Pada posisi sudut $\\theta$, manik bergerak melingkar mendatar dengan jari-jari $r = R\\sin\\theta$.',
      'Gaya pada manik: berat dan gaya normal (mengarah ke pusat cincin). Uraikan ke arah vertikal dan mendatar.',
      'Kapan posisi selain titik terbawah ada? Periksa syarat $\\omega^2 > g/R$.'
    ],
    pembahasan: [
      'Normal $N$ mengarah ke pusat cincin. Vertikal: $N\\cos\\theta = mg$. Mendatar: $N\\sin\\theta = m\\omega^2 R\\sin\\theta$.',
      'Untuk $\\sin\\theta \\neq 0$: $N = m\\omega^2 R$, sehingga $\\cos\\theta = \\dfrac{g}{\\omega^2 R} = \\dfrac{9{,}8}{225 \\times 0{,}1} \\approx 0{,}436$.',
      '$\\theta \\approx 64{,}2^\\circ$. Solusi ini ada hanya jika $\\omega^2 R > g$, yaitu $\\omega > \\sqrt{g/R} \\approx 9{,}9\\ \\text{rad/s}$. Di atas nilai kritis ini, titik terbawah menjadi tidak stabil.',
      'Diverifikasi dengan meminimalkan energi potensial efektif $U_{\\text{eff}} = -mgR\\cos\\theta - \\tfrac{1}{2}m\\omega^2R^2\\sin^2\\theta$ secara numerik.'
    ],
    referensi: null
  },
  {
    id: 'int-05',
    tingkat: 'internasional',
    bab: ['dinamika', 'vektor', 'momentum'],
    konsep: ['hukum II Newton pada sistem dengan kendala bergerak', 'kekekalan momentum mendatar', 'percepatan relatif'],
    tipe: 'pg',
    pertanyaan: 'Sebuah baji bermassa $4\\ \\text{kg}$ dengan sudut kemiringan $30^\\circ$ diletakkan di lantai licin dan bebas bergerak. Sebuah balok $1\\ \\text{kg}$ dilepas dari diam di permukaan miring baji yang juga licin. Berapa besar percepatan baji? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: ['$0\\ \\text{m/s}^2$', '$0{,}85\\ \\text{m/s}^2$', '$1{,}00\\ \\text{m/s}^2$', '$1{,}06\\ \\text{m/s}^2$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Karena baji ikut bergerak, gaya normal pada balok BUKAN $mg\\cos\\theta$.',
      'Tulis percepatan balok sebagai percepatan baji ditambah percepatan relatif sepanjang permukaan miring.',
      'Kendalanya: balok tetap menempel pada permukaan baji. Selesaikan tiga persamaan untuk $A$, $a_{\\text{rel}}$, dan $N$.'
    ],
    pembahasan: [
      'Baji (mendatar): $N\\sin\\theta = MA$.',
      'Balok, dengan percepatan $\\vec{a} = \\vec{A} + \\vec{a}_{\\text{rel}}$: tegak lurus permukaan miring, $mg\\cos\\theta - N = mA\\sin\\theta$.',
      'Gabungkan: $N = \\dfrac{Mmg\\cos\\theta}{M + m\\sin^2\\theta}$ dan $A = \\dfrac{mg\\sin\\theta\\cos\\theta}{M + m\\sin^2\\theta}$.',
      '$A = \\dfrac{1 \\times 9{,}8 \\times 0{,}5 \\times 0{,}866}{4 + 0{,}25} \\approx 1{,}00\\ \\text{m/s}^2$.',
      'Pilihan $1{,}06\\ \\text{m/s}^2$ muncul jika memakai $N = mg\\cos\\theta$, padahal normal berkurang karena baji menjauh. Pilihan $0$ berlaku hanya jika baji dipaku.'
    ],
    referensi: null
  },
  {
    id: 'int-06',
    tingkat: 'internasional',
    bab: ['benda-tegar', 'usaha-energi', 'kinematika'],
    konsep: ['gerak pusat massa tanpa gaya mendatar', 'kendala geometris dan energi rotasi', 'kecepatan titik pada benda tegar'],
    tipe: 'angka',
    pertanyaan: 'Sebuah batang homogen sepanjang $1{,}5\\ \\text{m}$ berdiri tegak di atas lantai licin sempurna, lalu sedikit terganggu sehingga roboh. Ujung bawahnya meluncur di lantai tanpa terangkat. Berapa kelajuan ujung ATAS batang tepat sebelum batang menyentuh lantai dalam posisi mendatar? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan $I_{\\text{pusat}} = \\tfrac{1}{12}ML^2$.',
    pilihan: null,
    jawaban: 6.641,
    satuan: 'm/s',
    toleransi: 0.02,
    petunjuk: [
      'Lantai licin tidak memberi gaya mendatar. Bagaimana gerak pusat massa batang?',
      'Pusat massa turun lurus vertikal. Hubungkan ketinggiannya dengan sudut: $y = \\tfrac{L}{2}\\sin\\theta$.',
      'Tepat saat mendatar, kecepatan pusat massa adalah $\\tfrac{L}{2}\\omega$ ke bawah. Ujung atas punya kecepatan tambahan karena rotasi.'
    ],
    pembahasan: [
      'Tanpa gaya mendatar, pusat massa jatuh lurus ke bawah. Dengan $y = \\tfrac{L}{2}\\sin\\theta$, saat mendatar ($\\theta = 0$) berlaku $v_{\\text{pm}} = \\tfrac{L}{2}\\omega$.',
      'Energi: $mg\\tfrac{L}{2} = \\tfrac{1}{2}m\\left(\\tfrac{L}{2}\\omega\\right)^2 + \\tfrac{1}{2}\\cdot\\tfrac{1}{12}mL^2\\omega^2 = \\tfrac{1}{6}mL^2\\omega^2$, sehingga $\\omega^2 = \\dfrac{3g}{L}$.',
      'Ujung atas: kecepatan pusat massa ($\\tfrac{L}{2}\\omega$ ke bawah) ditambah kecepatan rotasi relatif pusat massa ($\\tfrac{L}{2}\\omega$, juga ke bawah). Totalnya $v = L\\omega = \\sqrt{3gL}$.',
      '$v = \\sqrt{3 \\times 9{,}8 \\times 1{,}5} = \\sqrt{44{,}1} \\approx 6{,}64\\ \\text{m/s}$.',
      'Menariknya, hasil ini sama dengan batang yang ujung bawahnya dipaku ke lantai. Diverifikasi dengan menyelesaikan persamaan gerak batang secara numerik.'
    ],
    referensi: null
  },
  {
    id: 'int-07',
    tingkat: 'internasional',
    bab: ['momentum', 'kinematika'],
    konsep: ['kekekalan momentum pada sistem bermassa berubah (roket)', 'integrasi persamaan roket Tsiolkovsky'],
    tipe: 'angka',
    pertanyaan: 'Sebuah roket di luar angkasa (tanpa gravitasi dan hambatan) menyemburkan gas dengan kelajuan $2{,}5\\ \\text{km/s}$ relatif terhadap roket. Roket mula-mula diam dan harus mencapai kelajuan $3\\ \\text{km/s}$. Berapa persen massa awal roket yang harus berupa bahan bakar?',
    pilihan: null,
    jawaban: 69.88,
    satuan: '%',
    toleransi: 0.01,
    petunjuk: [
      'Tinjau selang waktu singkat: roket bermassa $m$ menyemburkan massa $dm$ dengan kelajuan $u$ relatif roket. Tulis kekekalan momentum.',
      'Kamu akan mendapatkan $m\\,dv = -u\\,dm$. Integralkan dari massa awal ke massa akhir.'
    ],
    pembahasan: [
      'Kekekalan momentum dalam waktu singkat: $m\\,dv = -u\\,dm$ (massa roket berkurang).',
      'Integral: $\\Delta v = u\\ln\\dfrac{m_0}{m_f}$, sehingga $\\dfrac{m_0}{m_f} = e^{3/2{,}5} = e^{1{,}2} \\approx 3{,}32$.',
      'Fraksi bahan bakar: $1 - \\dfrac{m_f}{m_0} = 1 - e^{-1{,}2} \\approx 0{,}699 = 69{,}9\\%$.',
      'Perhatikan: roket bisa melaju lebih cepat dari kelajuan semburan gasnya sendiri, asalkan perbandingan massanya cukup besar.',
      'Diverifikasi dengan mensimulasikan pembakaran dalam ribuan langkah kecil.'
    ],
    referensi: null
  },
  {
    id: 'int-08',
    tingkat: 'internasional',
    bab: ['momentum', 'usaha-energi', 'kinematika'],
    konsep: ['tumbukan lenting sempurna berantai', 'kecepatan relatif sebelum dan sesudah tumbukan lenting'],
    tipe: 'pg',
    pertanyaan: 'Sebuah bola kecil (massa $m$) diletakkan tepat di atas bola besar (massa $3m$), dan keduanya dijatuhkan bersama dari ketinggian $h$ (diukur dari dasar bola besar). Bola besar memantul lenting sempurna dari lantai, lalu langsung bertumbukan lenting sempurna dengan bola kecil yang masih bergerak turun. Anggap ukuran bola kecil dan jarak antarbola sangat kecil. Seberapa tinggi bola kecil memantul, diukur dari titik tumbukan?',
    pilihan: ['$h$', '$2h$', '$4h$', '$9h$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Tepat sebelum tumbukan antarbola, bola besar bergerak ke atas dengan kelajuan $v = \\sqrt{2gh}$ dan bola kecil ke bawah dengan kelajuan $v$.',
      'Pada tumbukan lenting, kecepatan relatif berbalik arah dengan besar sama. Lebih mudah dihitung di kerangka pusat massa.'
    ],
    pembahasan: [
      'Kecepatan pusat massa sistem dua bola tepat sebelum tumbukan: $v_{\\text{pm}} = \\dfrac{3m(v) + m(-v)}{4m} = \\dfrac{v}{2}$ (ke atas).',
      'Dalam kerangka pusat massa, bola kecil datang dengan $-\\tfrac{3}{2}v$ dan memantul dengan $+\\tfrac{3}{2}v$. Kembali ke kerangka lantai: $\\tfrac{3}{2}v + \\tfrac{1}{2}v = 2v$.',
      'Bola besar: dari $+\\tfrac{1}{2}v$ menjadi $-\\tfrac{1}{2}v$ di kerangka pusat massa, sehingga di kerangka lantai kecepatannya $0$. Seluruh energi pindah ke bola kecil!',
      'Tinggi pantulan: $H = \\dfrac{(2v)^2}{2g} = 4h$.',
      'Pilihan $9h$ adalah batas jika bola besar jauh lebih berat ($M \\gg m$), yang memberi kecepatan $3v$.'
    ],
    referensi: null
  },
  {
    id: 'int-09',
    tingkat: 'internasional',
    bab: ['elastisitas-shm', 'momentum'],
    konsep: ['osilasi dua benda (massa tereduksi)', 'gerak pusat massa yang tidak terpengaruh gaya dalam'],
    tipe: 'angka',
    pertanyaan: 'Dua balok bermassa $1\\ \\text{kg}$ dan $3\\ \\text{kg}$ dihubungkan pegas ringan berkonstanta $300\\ \\text{N/m}$ di atas lantai licin. Pegas diregangkan sedikit, lalu kedua balok dilepas bersamaan dari keadaan diam. Berapa periode osilasi sistem ini?',
    pilihan: null,
    jawaban: 0.31416,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Tidak ada gaya luar mendatar. Pusat massa tetap diam, dan kedua balok berosilasi berlawanan arah dengan periode yang sama.',
      'Tulis persamaan gerak untuk jarak antar balok $x = x_2 - x_1$. Massa yang "dirasakan" pegas adalah massa tereduksi.'
    ],
    pembahasan: [
      'Persamaan gerak: $m_1\\ddot{x}_1 = k(x - \\ell_0)$ dan $m_2\\ddot{x}_2 = -k(x - \\ell_0)$.',
      'Kurangkan: $\\ddot{x} = -k\\left(\\dfrac{1}{m_1} + \\dfrac{1}{m_2}\\right)(x - \\ell_0) = -\\dfrac{k}{\\mu}(x - \\ell_0)$, dengan $\\mu = \\dfrac{m_1 m_2}{m_1 + m_2} = 0{,}75\\ \\text{kg}$.',
      '$T = 2\\pi\\sqrt{\\dfrac{\\mu}{k}} = 2\\pi\\sqrt{\\dfrac{0{,}75}{300}} = 2\\pi \\times 0{,}05 \\approx 0{,}314\\ \\text{s}$.',
      'Cara lain: titik pusat massa diam, jadi pegas seolah terbagi dua pegas yang dijepit di pusat massa. Bagian yang terhubung ke balok 1 kg panjangnya $3/4$ panjang total, sehingga konstantanya $400\\ \\text{N/m}$, dan $2\\pi\\sqrt{1/400}$ memberi hasil sama.',
      'Diverifikasi dengan menyimulasikan kedua balok secara numerik.'
    ],
    referensi: null
  },
  {
    id: 'int-10',
    tingkat: 'internasional',
    bab: ['statika-fluida', 'elastisitas-shm'],
    konsep: ['beda tekanan hidrostatis sebagai gaya pemulih', 'GHS kolom zat cair'],
    tipe: 'angka',
    pertanyaan: 'Sebuah tabung U berpenampang seragam berisi zat cair dengan panjang kolom total (diukur sepanjang tabung) $0{,}8\\ \\text{m}$. Satu lengan tabung tegak, sedangkan lengan lainnya miring $30^\\circ$ terhadap bidang mendatar. Zat cair diganggu sedikit sehingga berosilasi. Abaikan gesekan dan tegangan permukaan. Berapa periode osilasinya? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 1.4658,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Misalkan zat cair bergeser sejauh $x$ sepanjang tabung. Berapa kenaikan tinggi VERTIKAL permukaan di lengan tegak dan penurunannya di lengan miring?',
      'Gaya pemulih berasal dari beda tinggi vertikal kedua permukaan. Massa yang bergerak adalah seluruh kolom zat cair.'
    ],
    pembahasan: [
      'Pergeseran $x$ sepanjang tabung: permukaan lengan tegak naik $x$, permukaan lengan miring turun $x\\sin 30^\\circ = 0{,}5x$ secara vertikal.',
      'Beda tinggi: $\\Delta h = x(1 + \\sin 30^\\circ) = 1{,}5x$. Gaya pemulih: $F = -\\rho g A\\,(1{,}5x)$.',
      'Massa kolom: $m = \\rho A L$. Jadi $\\omega^2 = \\dfrac{g(1 + \\sin 30^\\circ)}{L} = \\dfrac{9{,}8 \\times 1{,}5}{0{,}8} \\approx 18{,}4\\ \\text{s}^{-2}$.',
      '$T = \\dfrac{2\\pi}{\\omega} \\approx 1{,}47\\ \\text{s}$. Untuk tabung U dengan dua lengan tegak, rumusnya menjadi $T = 2\\pi\\sqrt{L/(2g)}$.',
      'Diverifikasi dengan menyelesaikan persamaan geraknya secara numerik.'
    ],
    referensi: null
  },
  {
    id: 'int-11',
    tingkat: 'internasional',
    bab: ['benda-tegar', 'dinamika', 'kinematika'],
    konsep: ['gesekan kinetis yang mengubah translasi menjadi rotasi', 'syarat menggelinding tanpa slip', 'torsi dan percepatan sudut'],
    tipe: 'angka',
    pertanyaan: 'Sebuah bola boling (bola pejal homogen) dilepas di lantai dengan kelajuan $6\\ \\text{m/s}$ tanpa berputar sama sekali, sehingga awalnya meluncur (slip). Koefisien gesek kinetis antara bola dan lantai $0{,}2$. Berapa jarak yang ditempuh bola sejak dilepas sampai mulai menggelinding tanpa slip? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan $I = \\tfrac{2}{5}MR^2$.',
    pilihan: null,
    jawaban: 4.498,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Gaya gesek kinetis memperlambat translasi sekaligus memberi torsi yang mempercepat rotasi.',
      'Menggelinding murni dimulai saat $v = \\omega R$. Tulis $v(t)$ dan $\\omega(t)$, lalu samakan.',
      'Ada cara lebih cepat untuk kelajuan akhirnya: momentum sudut terhadap titik kontak di lantai kekal. Mengapa?'
    ],
    pembahasan: [
      'Translasi: $a = -\\mu g$, sehingga $v = v_0 - \\mu g t$.',
      'Rotasi: $\\mu M g R = \\tfrac{2}{5}MR^2\\alpha$, sehingga $\\omega R = \\tfrac{5}{2}\\mu g t$.',
      'Samakan: $v_0 - \\mu g t = \\tfrac{5}{2}\\mu g t$, sehingga $t = \\dfrac{2v_0}{7\\mu g} \\approx 0{,}875\\ \\text{s}$ dan $v_{\\text{akhir}} = \\tfrac{5}{7}v_0 \\approx 4{,}29\\ \\text{m/s}$.',
      'Jarak: $s = v_0 t - \\tfrac{1}{2}\\mu g t^2 = \\dfrac{12 v_0^2}{49\\mu g} \\approx 4{,}50\\ \\text{m}$.',
      'Cek: gesekan bekerja di titik kontak, jadi momentum sudut terhadap titik itu kekal: $Mv_0R = \\tfrac{7}{5}MRv_{\\text{akhir}}$. Hasilnya sama. Diverifikasi juga dengan simulasi numerik.'
    ],
    referensi: null
  },
  {
    id: 'int-12',
    tingkat: 'internasional',
    bab: ['benda-tegar', 'momentum', 'usaha-energi'],
    konsep: ['impuls yang mengubah momentum linear dan sudut sekaligus', 'massa efektif titik pada benda tegar', 'tumbukan lenting'],
    tipe: 'pg',
    pertanyaan: 'Sebuah batang homogen $2\\ \\text{kg}$ sepanjang $1{,}2\\ \\text{m}$ diam di atas lantai es licin. Sebuah keping $0{,}5\\ \\text{kg}$ meluncur dengan kelajuan $4\\ \\text{m/s}$ tegak lurus batang dan menumbuk salah satu UJUNG batang secara lenting sempurna. Berapa kecepatan sudut batang setelah tumbukan?',
    pilihan: ['$2{,}5\\ \\text{rad/s}$', '$4{,}0\\ \\text{rad/s}$', '$5{,}0\\ \\text{rad/s}$', '$10\\ \\text{rad/s}$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Batang tidak terpaku. Impuls $J$ dari keping membuat pusat massa batang bergerak DAN batang berputar.',
      'Kecepatan ujung batang setelah tumbukan: $\\dfrac{J}{M} + \\dfrac{J(L/2)^2}{I}$. Gunakan syarat lenting: kecepatan relatif di titik kontak berbalik.',
      'Perhatikan "massa efektif" ujung batang: $\\dfrac{1}{m_{\\text{ef}}} = \\dfrac{1}{M} + \\dfrac{(L/2)^2}{I}$.'
    ],
    pembahasan: [
      'Untuk batang, $I = \\tfrac{1}{12}ML^2 = 0{,}24\\ \\text{kg m}^2$, sehingga $\\dfrac{1}{m_{\\text{ef}}} = \\dfrac{1}{2} + \\dfrac{0{,}36}{0{,}24} = 2$, jadi $m_{\\text{ef}} = 0{,}5\\ \\text{kg}$.',
      'Massa efektif ujung batang SAMA dengan massa keping. Seperti tumbukan lenting dua massa sama, keping berhenti dan seluruh momentumnya pindah: $J = mv = 2\\ \\text{N s}$.',
      'Kecepatan sudut: $\\omega = \\dfrac{J(L/2)}{I} = \\dfrac{2 \\times 0{,}6}{0{,}24} = 5\\ \\text{rad/s}$. Pusat massa bergerak $J/M = 1\\ \\text{m/s}$.',
      'Cek energi: $\\tfrac{1}{2}(2)(1^2) + \\tfrac{1}{2}(0{,}24)(5^2) = 1 + 3 = 4\\ \\text{J}$, sama dengan energi kinetik keping mula-mula.',
      'Pilihan $10\\ \\text{rad/s}$ muncul jika keping dianggap memantul balik seperti menumbuk dinding tetap.'
    ],
    referensi: null
  },
  {
    id: 'int-13',
    tingkat: 'internasional',
    bab: ['statika-fluida', 'benda-tegar'],
    konsep: ['gaya hidrostatis yang bertambah dengan kedalaman', 'torsi dari gaya terdistribusi (integral)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah bendungan berdinding tegak dan datar selebar $10\\ \\text{m}$ menahan air sedalam $6\\ \\text{m}$. Berapa besar momen gaya (torsi) yang dikerjakan air pada dinding bendungan terhadap garis dasar dinding, dalam satuan $\\text{MN m}$? Abaikan tekanan udara (bekerja di kedua sisi). Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 3.528,
    satuan: 'MN m',
    toleransi: 0.02,
    petunjuk: [
      'Tekanan pada ketinggian $y$ dari dasar adalah $\\rho g(H - y)$. Gaya pada pita tipis setinggi $dy$ adalah $dF = \\rho g(H - y)\\,w\\,dy$.',
      'Lengan gaya pita itu terhadap dasar adalah $y$. Integralkan $y\\,dF$ dari $0$ sampai $H$.'
    ],
    pembahasan: [
      '$\\tau = \\displaystyle\\int_0^H \\rho g (H - y)\\,w\\,y\\,dy = \\rho g w\\left[\\dfrac{Hy^2}{2} - \\dfrac{y^3}{3}\\right]_0^H = \\dfrac{\\rho g w H^3}{6}$.',
      '$\\tau = \\dfrac{1000 \\times 9{,}8 \\times 10 \\times 216}{6} \\approx 3{,}53 \\times 10^6\\ \\text{N m} = 3{,}53\\ \\text{MN m}$.',
      'Gaya totalnya $F = \\tfrac{1}{2}\\rho g w H^2 \\approx 1{,}76\\ \\text{MN}$, jadi titik tangkap resultannya di $\\tau/F = H/3 = 2\\ \\text{m}$ dari dasar, bukan di tengah.',
      'Karena torsi sebanding $H^3$, menaikkan muka air dua kali membuat torsi delapan kali. Itulah sebabnya bendungan dibuat makin tebal ke bawah.'
    ],
    referensi: null
  },
  {
    id: 'int-14',
    tingkat: 'internasional',
    bab: ['dinamika-fluida', 'kinematika'],
    konsep: ['teorema Torricelli dan kontinuitas', 'persamaan diferensial laju penurunan permukaan'],
    tipe: 'angka',
    pertanyaan: 'Sebuah tangki silinder tegak, terbuka di atas, dengan luas alas $0{,}5\\ \\text{m}^2$ berisi air setinggi $2\\ \\text{m}$. Di dasar tangki dibuka lubang kecil seluas $2\\ \\text{cm}^2$. Berapa waktu yang dibutuhkan sampai tangki kosong? Abaikan kontraksi semburan dan viskositas. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 1597,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Kelajuan keluar bergantung pada tinggi air saat itu, jadi lajunya tidak tetap. Kamu perlu persamaan diferensial.',
      'Kontinuitas: $A\\dfrac{dh}{dt} = -a\\sqrt{2gh}$. Pisahkan variabel lalu integralkan.'
    ],
    pembahasan: [
      'Kontinuitas: $A\\dfrac{dh}{dt} = -a\\sqrt{2gh}$.',
      'Pisahkan variabel: $\\dfrac{dh}{\\sqrt{h}} = -\\dfrac{a}{A}\\sqrt{2g}\\,dt$. Integralkan dari $h = H$ ke $h = 0$: $2\\sqrt{H} = \\dfrac{a}{A}\\sqrt{2g}\\,t$.',
      '$t = \\dfrac{A}{a}\\sqrt{\\dfrac{2H}{g}} = 2500 \\times \\sqrt{\\dfrac{4}{9{,}8}} \\approx 1597\\ \\text{s}$, sekitar $26{,}6$ menit.',
      'Waktu ini dua kali waktu yang dibutuhkan jika air terus keluar dengan kelajuan awalnya. Paruh pertama ketinggian habis dalam sekitar $29\\%$ waktu total.',
      'Diverifikasi dengan integrasi numerik persamaan diferensialnya.'
    ],
    referensi: null
  },
  {
    id: 'int-15',
    tingkat: 'internasional',
    bab: ['dinamika-fluida', 'momentum', 'statika-fluida'],
    konsep: ['gaya reaksi semburan (laju perubahan momentum)', 'Torricelli', 'paradoks gaya: dua kali gaya hidrostatis'],
    tipe: 'angka',
    pertanyaan: 'Sebuah tangki air berdiri di atas troli beroda yang bebas bergerak. Di dinding samping tangki, $1{,}5\\ \\text{m}$ di bawah permukaan air, dibuka lubang kecil seluas $5\\ \\text{cm}^2$ sehingga air menyembur mendatar. Berapa besar gaya dorong yang dialami tangki dan troli sesaat setelah lubang dibuka? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan massa jenis air $1000\\ \\text{kg/m}^3$.',
    pilihan: null,
    jawaban: 14.7,
    satuan: 'N',
    toleransi: 0.02,
    petunjuk: [
      'Gaya dorong sama dengan laju momentum yang dibawa keluar oleh semburan: $F = \\dot{m}v$.',
      'Bandingkan hasilmu dengan "gaya hidrostatis" $\\rho g h \\cdot a$ yang dulu menekan sumbat lubang. Berapa perbandingannya?'
    ],
    pembahasan: [
      'Torricelli: $v^2 = 2gh$. Laju massa: $\\dot{m} = \\rho a v$.',
      'Gaya dorong: $F = \\dot{m}v = \\rho a v^2 = 2\\rho g h a = 2 \\times 1000 \\times 9{,}8 \\times 1{,}5 \\times 5 \\times 10^{-4} = 14{,}7\\ \\text{N}$.',
      'Ini DUA KALI gaya tekanan hidrostatis pada luas lubang ($\\rho g h a = 7{,}35\\ \\text{N}$). Kelebihannya berasal dari penurunan tekanan pada dinding di sekitar lubang, karena air di sana bergerak menuju lubang.',
      'Jebakan umum: menganggap gaya dorong sama dengan $\\rho g h a$, karena dinding seberang lubang "tidak lagi diimbangi".'
    ],
    referensi: null
  },
  {
    id: 'int-16',
    tingkat: 'internasional',
    bab: ['teori-kinetik', 'statika-fluida'],
    konsep: ['persamaan keadaan gas ideal (massa jenis bergantung tekanan)', 'kesetimbangan hidrostatis lapisan udara'],
    tipe: 'angka',
    pertanyaan: 'Anggap atmosfer sebagai gas ideal bersuhu seragam $273\\ \\text{K}$ dengan massa molar $0{,}029\\ \\text{kg/mol}$, dan $g$ tetap $9{,}8\\ \\text{m/s}^2$. Berapa perbandingan tekanan udara pada ketinggian $5\\ \\text{km}$ terhadap tekanan di permukaan laut? Gunakan $R = 8{,}314\\ \\text{J/(mol K)}$. (Tulis angkanya saja.)',
    pilihan: null,
    jawaban: 0.5347,
    satuan: '',
    toleransi: 0.02,
    petunjuk: [
      'Tidak seperti air, massa jenis udara berubah dengan tekanan: $\\rho = \\dfrac{PM}{RT}$.',
      'Kesetimbangan lapisan tipis: $dP = -\\rho g\\,dz$. Substitusikan $\\rho$, lalu pisahkan variabel.'
    ],
    pembahasan: [
      'Hidrostatis: $\\dfrac{dP}{dz} = -\\rho g = -\\dfrac{PMg}{RT}$.',
      'Integral: $P(z) = P_0\\exp\\left(-\\dfrac{Mgz}{RT}\\right)$, dengan tinggi skala $\\dfrac{RT}{Mg} \\approx 7{,}99\\ \\text{km}$.',
      '$\\dfrac{P}{P_0} = \\exp\\left(-\\dfrac{0{,}029 \\times 9{,}8 \\times 5000}{8{,}314 \\times 273}\\right) = e^{-0{,}626} \\approx 0{,}535$.',
      'Jebakan umum: memakai $P = P_0 - \\rho_0 g z$ dengan massa jenis tetap, yang memberi nilai jauh lebih kecil (sekitar $0{,}37$).',
      'Diverifikasi dengan integrasi numerik persamaan hidrostatisnya.'
    ],
    referensi: null
  },
  {
    id: 'int-17',
    tingkat: 'internasional',
    bab: ['termodinamika', 'usaha-energi'],
    konsep: ['mesin Carnot dengan reservoir berhingga', 'entropi total tetap pada proses reversibel'],
    tipe: 'angka',
    pertanyaan: 'Terdapat $1\\ \\text{kg}$ air bersuhu $80\\,^\\circ\\text{C}$ dan $1\\ \\text{kg}$ air bersuhu $20\\,^\\circ\\text{C}$. Sebuah mesin kalor reversibel bekerja di antara keduanya (menyerap kalor dari air panas dan membuang kalor ke air dingin) sampai suhu keduanya sama. Berapa usaha MAKSIMUM yang dapat dihasilkan, dalam kilojoule? Kalor jenis air $4186\\ \\text{J/(kg K)}$.',
    pilihan: null,
    jawaban: 11.68,
    satuan: 'kJ',
    toleransi: 0.02,
    petunjuk: [
      'Suhu kedua "reservoir" berubah selama proses, jadi efisiensinya tidak tetap.',
      'Untuk mesin reversibel, entropi total alam semesta tidak berubah. Gunakan itu untuk mencari suhu akhir.',
      'Usaha = kalor yang dilepas air panas − kalor yang diterima air dingin.'
    ],
    pembahasan: [
      'Entropi total tetap: $mc\\ln\\dfrac{T_f}{T_1} + mc\\ln\\dfrac{T_f}{T_2} = 0$, sehingga $T_f = \\sqrt{T_1T_2} = \\sqrt{353{,}15 \\times 293{,}15} \\approx 321{,}75\\ \\text{K}$ ($\\approx 48{,}6\\,^\\circ\\text{C}$).',
      'Usaha: $W = mc(T_1 - T_f) - mc(T_f - T_2) = mc(T_1 + T_2 - 2T_f)$.',
      '$W = 4186 \\times (646{,}30 - 643{,}50) \\approx 1{,}17 \\times 10^4\\ \\text{J} \\approx 11{,}7\\ \\text{kJ}$.',
      'Jika air dicampur langsung, suhu akhirnya $50\\,^\\circ\\text{C}$ dan tidak ada usaha. Selisih suhu akhir ($50$ vs $48{,}6\\,^\\circ\\text{C}$) adalah energi yang diubah menjadi usaha.',
      'Diverifikasi dengan menyimulasikan mesin Carnot dalam ribuan siklus kecil.'
    ],
    referensi: null
  },
  {
    id: 'int-18',
    tingkat: 'internasional',
    bab: ['teori-kinetik', 'termodinamika'],
    konsep: ['ekuipartisi energi (derajat kebebasan)', 'kapasitas kalor campuran gas dan konstanta adiabatik'],
    tipe: 'pg',
    pertanyaan: 'Sebuah wadah berisi campuran $1\\ \\text{mol}$ helium dan $1\\ \\text{mol}$ nitrogen pada suhu kamar (getaran molekul nitrogen belum aktif). Berapa konstanta adiabatik $\\gamma = C_p/C_v$ campuran ini?',
    pilihan: ['$1{,}40$', '$1{,}50$', '$1{,}53$', '$1{,}67$'],
    jawaban: 1,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Helium monoatomik punya 3 derajat kebebasan, nitrogen diatomik pada suhu kamar punya 5.',
      'Kapasitas kalor campuran dijumlahkan, BUKAN nilai $\\gamma$-nya yang dirata-rata.'
    ],
    pembahasan: [
      'Kapasitas kalor pada volume tetap: $C_v = 1 \\times \\tfrac{3}{2}R + 1 \\times \\tfrac{5}{2}R = 4R$ untuk 2 mol.',
      'Untuk gas ideal, $C_p = C_v + nR = 4R + 2R = 6R$.',
      '$\\gamma = \\dfrac{6R}{4R} = 1{,}50$.',
      'Pilihan $1{,}53$ muncul jika merata-ratakan $\\gamma$ kedua gas ($\\tfrac{1{,}67 + 1{,}40}{2}$). Itu keliru karena $\\gamma$ adalah perbandingan, bukan besaran yang bisa dijumlahkan.'
    ],
    referensi: null
  },
  {
    id: 'int-19',
    tingkat: 'internasional',
    bab: ['relativitas', 'momentum'],
    konsep: ['massa invarian (energi di kerangka pusat momentum)', 'energi ambang reaksi'],
    tipe: 'angka',
    pertanyaan: 'Sebuah proton ditembakkan ke proton lain yang diam untuk menghasilkan reaksi $p + p \\to p + p + \\pi^0$. Energi diam proton $938{,}3\\ \\text{MeV}$ dan energi diam pion netral $135{,}0\\ \\text{MeV}$. Berapa energi kinetik ambang (minimum) proton penembak, dalam MeV?',
    pilihan: null,
    jawaban: 279.7,
    satuan: 'MeV',
    toleransi: 0.01,
    petunjuk: [
      'Energi kinetik proton TIDAK seluruhnya bisa diubah menjadi massa pion, karena momentum harus kekal.',
      'Pada ambang, semua partikel hasil diam relatif satu sama lain di kerangka pusat momentum.',
      'Gunakan massa invarian: $(\\sum E)^2 - (\\sum pc)^2$ sama di semua kerangka.'
    ],
    pembahasan: [
      'Kerangka laboratorium: $E_{\\text{tot}} = E + m_pc^2$ dan $p_{\\text{tot}}c = pc$, dengan $E^2 - (pc)^2 = (m_pc^2)^2$.',
      'Massa invarian: $s = (E + m_pc^2)^2 - (pc)^2 = 2(m_pc^2)^2 + 2m_pc^2 E$.',
      'Ambang: $\\sqrt{s} = 2m_pc^2 + m_\\pi c^2$. Maka $E_k = E - m_pc^2 = \\dfrac{(2m_p + m_\\pi)^2 - (2m_p)^2}{2m_p}c^2 = m_\\pi c^2\\left(2 + \\dfrac{m_\\pi}{2m_p}\\right)$.',
      '$E_k = 135{,}0 \\times \\left(2 + \\dfrac{135{,}0}{1876{,}6}\\right) \\approx 279{,}7\\ \\text{MeV}$, lebih dari dua kali energi diam pion.',
      'Jebakan umum: menjawab $135\\ \\text{MeV}$ (lupa kekekalan momentum).'
    ],
    referensi: null
  },
  {
    id: 'int-20',
    tingkat: 'internasional',
    bab: ['relativitas', 'vektor'],
    konsep: ['kontraksi panjang hanya pada komponen searah gerak', 'penguraian vektor panjang'],
    tipe: 'angka',
    pertanyaan: 'Sebuah batang tipis panjangnya $1\\ \\text{m}$ dalam kerangka diamnya, dan dalam kerangka itu batang membentuk sudut $60^\\circ$ terhadap sumbu $x$. Batang bergerak sepanjang sumbu $x$ dengan kelajuan $0{,}8c$ relatif terhadap laboratorium. Berapa panjang batang menurut pengamat di laboratorium, dalam meter?',
    pilihan: null,
    jawaban: 0.9165,
    satuan: 'm',
    toleransi: 0.01,
    petunjuk: [
      'Kontraksi panjang hanya terjadi pada arah gerak. Komponen yang tegak lurus gerak tidak berubah.',
      'Uraikan batang menjadi komponen $x$ dan $y$, kontraksikan komponen $x$, lalu gabungkan lagi.'
    ],
    pembahasan: [
      '$\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}64}} = \\dfrac{5}{3}$.',
      'Komponen $x$: $1 \\times \\cos 60^\\circ = 0{,}5\\ \\text{m}$ menjadi $\\dfrac{0{,}5}{\\gamma} = 0{,}3\\ \\text{m}$. Komponen $y$: $\\sin 60^\\circ \\approx 0{,}866\\ \\text{m}$, tetap.',
      'Panjang di laboratorium: $\\sqrt{0{,}3^2 + 0{,}866^2} = \\sqrt{0{,}84} \\approx 0{,}917\\ \\text{m}$.',
      'Sudutnya juga berubah: $\\tan\\theta = \\dfrac{0{,}866}{0{,}3}$, sehingga $\\theta \\approx 70{,}9^\\circ$. Batang tampak lebih tegak.',
      'Jebakan umum: membagi seluruh panjang dengan $\\gamma$, yang memberi $0{,}6\\ \\text{m}$.'
    ],
    referensi: null
  }
);
