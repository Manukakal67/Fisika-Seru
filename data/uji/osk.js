/* Uji Pemahaman: soal tingkat OSK (kabupaten/kota).
   Soal orisinal bergaya olimpiade. Jawaban diverifikasi ulang dengan Python. */
window.DATA_UJI = window.DATA_UJI || [];
window.DATA_UJI.push(
  {
    id: 'osk-01',
    tingkat: 'osk',
    bab: ['momentum', 'usaha-energi'],
    konsep: ['kekekalan momentum pada tumbukan tak lenting', 'kekekalan energi mekanik'],
    tipe: 'angka',
    pertanyaan: 'Sebuah balok kayu bermassa $1{,}98\\ \\text{kg}$ digantung diam dengan tali ringan yang panjang. Sebutir peluru bermassa $20\\ \\text{g}$ ditembakkan mendatar dengan kelajuan $300\\ \\text{m/s}$ dan bersarang di dalam balok. Berapa ketinggian maksimum yang dicapai balok (bersama peluru) diukur dari posisi awalnya? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 0.459,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Proses ini terdiri dari dua tahap yang berbeda. Besaran apa yang kekal selama tumbukan yang sangat singkat?',
      'Energi kinetik TIDAK kekal saat peluru bersarang. Tetapi setelah itu, saat balok berayun naik, energi mekanik kekal.',
      'Cari dulu kelajuan balok+peluru tepat setelah tumbukan, lalu ubah energi kinetiknya menjadi energi potensial.'
    ],
    pembahasan: [
      'Tahap 1 (tumbukan): momentum kekal. $m v = (m + M) v\'$, sehingga $v\' = \\dfrac{0{,}02 \\times 300}{0{,}02 + 1{,}98} = 3\\ \\text{m/s}$.',
      'Tahap 2 (ayunan): energi mekanik kekal. $\\tfrac{1}{2}(m+M)v\'^2 = (m+M) g h$, sehingga $h = \\dfrac{v\'^2}{2g}$.',
      '$h = \\dfrac{3^2}{2 \\times 9{,}8} \\approx 0{,}459\\ \\text{m}$.',
      'Jebakan umum: memakai kekekalan energi langsung dari peluru ke ketinggian. Itu salah, karena sebagian besar energi kinetik peluru berubah menjadi panas dan deformasi saat tumbukan.'
    ],
    referensi: null
  },
  {
    id: 'osk-02',
    tingkat: 'osk',
    bab: ['statika-fluida', 'dinamika'],
    konsep: ['gaya apung (hukum Archimedes)', 'kesetimbangan gaya (hukum I Newton)'],
    tipe: 'pg',
    pertanyaan: 'Sebuah benda logam bermassa $2\\ \\text{kg}$ dan bervolume $5 \\times 10^{-4}\\ \\text{m}^3$ digantung pada neraca pegas, lalu dicelupkan seluruhnya ke dalam air ($\\rho = 1000\\ \\text{kg/m}^3$) tanpa menyentuh dasar wadah. Berapa angka yang ditunjukkan neraca pegas? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: ['$4{,}9\\ \\text{N}$', '$14{,}7\\ \\text{N}$', '$19{,}6\\ \\text{N}$', '$24{,}5\\ \\text{N}$'],
    jawaban: 1,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Gambar diagram gaya pada benda: ada berapa gaya yang bekerja?',
      'Benda diam, jadi resultan gayanya nol. Neraca pegas membaca besar gaya tegangan pegas.'
    ],
    pembahasan: [
      'Gaya pada benda: berat $W = mg = 19{,}6\\ \\text{N}$ (ke bawah), gaya apung $F_A$ dan tegangan pegas $T$ (ke atas).',
      'Gaya apung: $F_A = \\rho g V = 1000 \\times 9{,}8 \\times 5 \\times 10^{-4} = 4{,}9\\ \\text{N}$.',
      'Benda setimbang: $T + F_A = W$, sehingga $T = 19{,}6 - 4{,}9 = 14{,}7\\ \\text{N}$.',
      'Pilihan $4{,}9\\ \\text{N}$ adalah gaya apungnya saja, dan $24{,}5\\ \\text{N}$ muncul jika gaya apung salah dijumlahkan dengan berat.'
    ],
    referensi: null
  },
  {
    id: 'osk-03',
    tingkat: 'osk',
    bab: ['vektor', 'kinematika'],
    konsep: ['penjumlahan vektor kecepatan (kecepatan relatif)', 'gerak lurus beraturan'],
    tipe: 'angka',
    pertanyaan: 'Sebuah sungai lebarnya $60\\ \\text{m}$ dan airnya mengalir dengan kelajuan $3\\ \\text{m/s}$. Sebuah perahu dapat bergerak $5\\ \\text{m/s}$ relatif terhadap air. Pengemudi ingin perahu tiba di titik yang tepat berseberangan dengan titik berangkatnya. Berapa lama waktu yang dibutuhkan untuk menyeberang?',
    pilihan: null,
    jawaban: 15,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Agar tiba tepat di seberang, kecepatan perahu relatif terhadap TANAH harus tegak lurus tepi sungai.',
      'Kecepatan relatif tanah = kecepatan relatif air + kecepatan arus. Gambar segitiga vektornya.'
    ],
    pembahasan: [
      'Perahu harus diarahkan agak ke hulu, sehingga komponen kecepatannya yang sejajar arus tepat meniadakan arus $3\\ \\text{m/s}$.',
      'Segitiga vektor: $5^2 = 3^2 + v_\\perp^2$, sehingga $v_\\perp = 4\\ \\text{m/s}$ (tegak lurus tepi).',
      'Waktu menyeberang: $t = \\dfrac{60}{4} = 15\\ \\text{s}$.',
      'Jebakan umum: $t = 60/5 = 12\\ \\text{s}$. Itu waktu jika perahu diarahkan lurus ke seberang, tetapi perahu akan hanyut ke hilir.'
    ],
    referensi: null
  },
  {
    id: 'osk-04',
    tingkat: 'osk',
    bab: ['vektor', 'dinamika'],
    konsep: ['resultan vektor tegak lurus', 'hukum II Newton'],
    tipe: 'pg',
    pertanyaan: 'Sebuah keping bermassa $2\\ \\text{kg}$ diam di atas lantai es licin (tanpa gesekan). Dua orang menariknya secara bersamaan: satu dengan gaya $30\\ \\text{N}$ ke timur, satu lagi dengan gaya $40\\ \\text{N}$ ke utara. Berapa besar percepatan keping?',
    pilihan: ['$5\\ \\text{m/s}^2$', '$25\\ \\text{m/s}^2$', '$35\\ \\text{m/s}^2$', '$50\\ \\text{m/s}^2$'],
    jawaban: 1,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Gaya adalah vektor. Dua gaya yang saling tegak lurus tidak dijumlahkan seperti angka biasa.',
      'Cari resultan gaya dulu, baru gunakan $F = ma$.'
    ],
    pembahasan: [
      'Resultan gaya: $F = \\sqrt{30^2 + 40^2} = 50\\ \\text{N}$.',
      'Percepatan: $a = \\dfrac{F}{m} = \\dfrac{50}{2} = 25\\ \\text{m/s}^2$, searah resultan (sekitar $53^\\circ$ dari timur ke utara).',
      'Pilihan $35\\ \\text{m/s}^2$ muncul jika gaya dijumlahkan sebagai skalar ($70/2$), dan $5\\ \\text{m/s}^2$ jika gayanya dikurangkan.'
    ],
    referensi: null
  },
  {
    id: 'osk-05',
    tingkat: 'osk',
    bab: ['kinematika', 'dinamika'],
    konsep: ['gaya gesek kinetis', 'gerak lurus berubah beraturan (perlambatan)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah mobil melaju $72\\ \\text{km/jam}$ di jalan datar. Pengemudi mengerem mendadak sehingga roda terkunci dan mobil tergelincir. Koefisien gesek kinetis ban dengan jalan $0{,}5$. Berapa jarak yang ditempuh mobil sejak mulai tergelincir sampai berhenti? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 40.82,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Ubah satuan kecepatan ke m/s terlebih dahulu.',
      'Satu-satunya gaya mendatar adalah gaya gesek. Perlambatannya tidak bergantung pada massa mobil.'
    ],
    pembahasan: [
      '$72\\ \\text{km/jam} = 20\\ \\text{m/s}$.',
      'Gaya gesek $f = \\mu_k m g$, sehingga perlambatan $a = \\mu_k g = 0{,}5 \\times 9{,}8 = 4{,}9\\ \\text{m/s}^2$.',
      'GLBB: $v^2 = v_0^2 - 2as$, dengan $v = 0$: $s = \\dfrac{v_0^2}{2a} = \\dfrac{400}{9{,}8} \\approx 40{,}8\\ \\text{m}$.',
      'Perhatikan: jarak pengereman sebanding dengan KUADRAT kecepatan. Kecepatan dua kali, jarak empat kali.'
    ],
    referensi: null
  },
  {
    id: 'osk-06',
    tingkat: 'osk',
    bab: ['kinematika', 'dinamika'],
    konsep: ['percepatan sentripetal pada gerak melingkar', 'gaya gesek statis sebagai gaya sentripetal'],
    tipe: 'angka',
    pertanyaan: 'Sebuah mobil melewati tikungan datar (tidak miring) berjari-jari $50\\ \\text{m}$. Koefisien gesek statis antara ban dan jalan $0{,}4$. Berapa kelajuan maksimum mobil agar tidak tergelincir keluar tikungan? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 14,
    satuan: 'm/s',
    toleransi: 0.02,
    petunjuk: [
      'Gaya apa yang membuat mobil berbelok di jalan datar? Gaya itu harus mengarah ke pusat lingkaran.',
      'Pada kelajuan maksimum, gaya gesek statis mencapai nilai maksimumnya $\\mu_s N$.'
    ],
    pembahasan: [
      'Di jalan datar, gaya sentripetal hanya berasal dari gesekan statis: $f_s = \\dfrac{mv^2}{r}$.',
      'Batas tergelincir: $\\mu_s m g = \\dfrac{m v_{\\max}^2}{r}$.',
      '$v_{\\max} = \\sqrt{\\mu_s g r} = \\sqrt{0{,}4 \\times 9{,}8 \\times 50} = \\sqrt{196} = 14\\ \\text{m/s}$ (sekitar $50\\ \\text{km/jam}$).',
      'Gesekan yang bekerja adalah gesekan STATIS, karena ban tidak tergelincir ke arah samping.'
    ],
    referensi: null
  },
  {
    id: 'osk-07',
    tingkat: 'osk',
    bab: ['usaha-energi', 'dinamika'],
    konsep: ['teorema usaha-energi dengan gaya nonkonservatif', 'gaya normal dan gesekan pada bidang miring'],
    tipe: 'angka',
    pertanyaan: 'Sebuah balok $2\\ \\text{kg}$ dilepas dari keadaan diam di puncak bidang miring kasar yang panjangnya $5\\ \\text{m}$ dan tingginya $3\\ \\text{m}$. Koefisien gesek kinetis antara balok dan bidang $0{,}25$. Berapa kelajuan balok saat tiba di dasar bidang miring? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 6.261,
    satuan: 'm/s',
    toleransi: 0.02,
    petunjuk: [
      'Tentukan $\\sin\\theta$ dan $\\cos\\theta$ dari panjang dan tinggi bidang (segitiga 3-4-5).',
      'Energi potensial yang hilang = energi kinetik yang didapat + energi yang hilang karena gesekan.'
    ],
    pembahasan: [
      'Segitiga 3-4-5: $\\sin\\theta = 0{,}6$ dan $\\cos\\theta = 0{,}8$.',
      'Gaya gesek: $f = \\mu_k m g \\cos\\theta = 0{,}25 \\times 2 \\times 9{,}8 \\times 0{,}8 = 3{,}92\\ \\text{N}$. Usahanya: $f L = 19{,}6\\ \\text{J}$.',
      'Energi potensial awal: $mgh = 2 \\times 9{,}8 \\times 3 = 58{,}8\\ \\text{J}$.',
      '$\\tfrac{1}{2}mv^2 = 58{,}8 - 19{,}6 = 39{,}2\\ \\text{J}$, sehingga $v = \\sqrt{39{,}2} \\approx 6{,}26\\ \\text{m/s}$.',
      'Tanpa gesekan, hasilnya $\\sqrt{2gh} \\approx 7{,}67\\ \\text{m/s}$.'
    ],
    referensi: null
  },
  {
    id: 'osk-08',
    tingkat: 'osk',
    bab: ['usaha-energi', 'elastisitas-shm'],
    konsep: ['energi potensial pegas', 'kekekalan energi mekanik'],
    tipe: 'angka',
    pertanyaan: 'Sebuah pegas ringan berkonstanta $200\\ \\text{N/m}$ dipasang tegak dan ditekan sejauh $10\\ \\text{cm}$. Sebuah bola $50\\ \\text{g}$ diletakkan di atasnya, lalu pegas dilepas sehingga bola terlontar lurus ke atas. Berapa ketinggian maksimum bola diukur dari posisinya saat pegas masih tertekan? Abaikan gesekan udara. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 2.041,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Energi apa yang tersimpan pada pegas yang tertekan?',
      'Di titik tertinggi, bola diam sesaat. Semua energi pegas telah menjadi energi potensial gravitasi.'
    ],
    pembahasan: [
      'Energi pegas: $E_p = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2} \\times 200 \\times 0{,}1^2 = 1\\ \\text{J}$.',
      'Di titik tertinggi: $mgh = 1\\ \\text{J}$, sehingga $h = \\dfrac{1}{0{,}05 \\times 9{,}8} \\approx 2{,}04\\ \\text{m}$.',
      'Jebakan umum: lupa mengubah $10\\ \\text{cm}$ ke meter atau $50\\ \\text{g}$ ke kilogram.'
    ],
    referensi: null
  },
  {
    id: 'osk-09',
    tingkat: 'osk',
    bab: ['elastisitas-shm', 'dinamika'],
    konsep: ['kesetimbangan gaya pegas (hukum Hooke)', 'periode gerak harmonik sederhana pegas'],
    tipe: 'angka',
    pertanyaan: 'Sebuah beban digantung pada pegas ringan yang tegak. Pada posisi setimbang, pegas bertambah panjang $4{,}9\\ \\text{cm}$. Beban kemudian ditarik sedikit ke bawah lalu dilepas. Berapa periode getarannya? Massa beban tidak diketahui. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 0.4443,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Kesetimbangan statis memberi hubungan antara $k$, $m$, dan pertambahan panjang.',
      'Periode pegas bergantung pada perbandingan $m/k$. Apakah perbandingan itu bisa dicari tanpa tahu $m$?'
    ],
    pembahasan: [
      'Saat setimbang: $k\\,\\Delta x = mg$, sehingga $\\dfrac{m}{k} = \\dfrac{\\Delta x}{g}$.',
      'Periode: $T = 2\\pi\\sqrt{\\dfrac{m}{k}} = 2\\pi\\sqrt{\\dfrac{\\Delta x}{g}} = 2\\pi\\sqrt{\\dfrac{0{,}049}{9{,}8}}$.',
      '$T = 2\\pi \\times 0{,}0707 \\approx 0{,}444\\ \\text{s}$.',
      'Perhatikan: rumusnya mirip periode bandul sederhana dengan panjang tali $\\Delta x$.'
    ],
    referensi: null
  },
  {
    id: 'osk-10',
    tingkat: 'osk',
    bab: ['elastisitas-shm', 'dinamika'],
    konsep: ['modulus Young (tegangan dan regangan)', 'berat sebagai gaya tarik'],
    tipe: 'angka',
    pertanyaan: 'Sebuah kawat baja sepanjang $2\\ \\text{m}$ dengan luas penampang $1\\ \\text{mm}^2$ digantung tegak. Ujung bawahnya diberi beban $10\\ \\text{kg}$. Modulus Young baja $2 \\times 10^{11}\\ \\text{N/m}^2$. Berapa pertambahan panjang kawat, dalam milimeter? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan abaikan massa kawat.',
    pilihan: null,
    jawaban: 0.98,
    satuan: 'mm',
    toleransi: 0.02,
    petunjuk: [
      'Ubah luas penampang ke $\\text{m}^2$: $1\\ \\text{mm}^2 = 10^{-6}\\ \\text{m}^2$.',
      'Modulus Young: $E = \\dfrac{F/A}{\\Delta L / L}$.'
    ],
    pembahasan: [
      'Gaya tarik: $F = mg = 98\\ \\text{N}$.',
      '$\\Delta L = \\dfrac{F L}{A E} = \\dfrac{98 \\times 2}{10^{-6} \\times 2 \\times 10^{11}} = 9{,}8 \\times 10^{-4}\\ \\text{m}$.',
      'Jadi $\\Delta L = 0{,}98\\ \\text{mm}$. Kawat baja sangat kaku: beban $10\\ \\text{kg}$ hanya memanjangkannya kurang dari satu milimeter.',
      'Jebakan umum: memakai $1\\ \\text{mm}^2 = 10^{-3}\\ \\text{m}^2$ (seharusnya $10^{-6}$).'
    ],
    referensi: null
  },
  {
    id: 'osk-11',
    tingkat: 'osk',
    bab: ['benda-tegar', 'dinamika'],
    konsep: ['momen inersia katrol dan torsi', 'hukum II Newton pada sistem benda terhubung'],
    tipe: 'angka',
    pertanyaan: 'Dua beban $3\\ \\text{kg}$ dan $2\\ \\text{kg}$ dihubungkan tali ringan yang melewati katrol berbentuk silinder pejal bermassa $2\\ \\text{kg}$. Tali tidak slip pada katrol dan poros katrol licin. Sistem dilepas dari keadaan diam. Berapa besar percepatan kedua beban? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan $I_{\\text{silinder}} = \\tfrac{1}{2}MR^2$.',
    pilihan: null,
    jawaban: 1.633,
    satuan: 'm/s^2',
    toleransi: 0.02,
    petunjuk: [
      'Karena katrol bermassa, tegangan tali di kedua sisi katrol TIDAK sama.',
      'Tulis hukum II Newton untuk tiap beban, dan $\\tau = I\\alpha$ untuk katrol dengan $a = \\alpha R$.'
    ],
    pembahasan: [
      'Beban 3 kg: $3g - T_1 = 3a$. Beban 2 kg: $T_2 - 2g = 2a$.',
      'Katrol: $(T_1 - T_2)R = \\tfrac{1}{2}MR^2 \\cdot \\dfrac{a}{R}$, sehingga $T_1 - T_2 = \\tfrac{1}{2}Ma = a$.',
      'Jumlahkan ketiga persamaan: $(3 - 2)g = (3 + 2 + 1)a$, sehingga $a = \\dfrac{9{,}8}{6} \\approx 1{,}63\\ \\text{m/s}^2$.',
      'Katrol bermassa berperilaku seperti "massa tambahan" sebesar $\\tfrac{1}{2}M$. Jika katrol diabaikan, hasilnya $1{,}96\\ \\text{m/s}^2$.'
    ],
    referensi: null
  },
  {
    id: 'osk-12',
    tingkat: 'osk',
    bab: ['benda-tegar', 'usaha-energi'],
    konsep: ['kekekalan momentum sudut', 'energi kinetik rotasi'],
    tipe: 'pg',
    pertanyaan: 'Seorang penari es berputar di tempat dengan lengan terentang; momen inersianya $4{,}0\\ \\text{kg m}^2$. Ia lalu menarik lengannya ke dada sehingga momen inersianya menjadi $1{,}6\\ \\text{kg m}^2$. Abaikan gesekan. Berapa perbandingan energi kinetik rotasi akhir terhadap awal?',
    pilihan: ['$0{,}4$', '$1$', '$2{,}5$', '$6{,}25$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Tidak ada torsi luar, jadi besaran rotasi apa yang kekal?',
      'Tulis energi kinetik rotasi dalam bentuk momentum sudut: $E_k = \\dfrac{L^2}{2I}$.'
    ],
    pembahasan: [
      'Momentum sudut kekal: $I_1\\omega_1 = I_2\\omega_2$, sehingga $\\omega_2 = 2{,}5\\,\\omega_1$.',
      'Energi kinetik rotasi: $E_k = \\dfrac{L^2}{2I}$. Karena $L$ tetap, $\\dfrac{E_2}{E_1} = \\dfrac{I_1}{I_2} = \\dfrac{4{,}0}{1{,}6} = 2{,}5$.',
      'Energinya bertambah! Tambahan energi ini berasal dari usaha otot penari saat menarik lengan ke dalam.',
      'Pilihan $1$ muncul jika energi dianggap kekal, dan $6{,}25$ jika $\\omega$ dikuadratkan tanpa memperhitungkan perubahan $I$.'
    ],
    referensi: null
  },
  {
    id: 'osk-13',
    tingkat: 'osk',
    bab: ['dinamika-fluida', 'kinematika'],
    konsep: ['teorema Torricelli', 'gerak parabola (lemparan mendatar)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah tangki air terbuka diletakkan di lantai. Pada dinding tangki terdapat lubang kecil setinggi $0{,}8\\ \\text{m}$ dari lantai, dan permukaan air berada $1{,}8\\ \\text{m}$ di atas lubang. Air menyembur mendatar dari lubang. Berapa jarak mendatar dari dinding tangki ke titik semburan air mengenai lantai?',
    pilihan: null,
    jawaban: 2.4,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Kelajuan air keluar dari lubang memenuhi teorema Torricelli.',
      'Setelah keluar, setiap tetes air bergerak seperti benda yang dilempar mendatar.',
      'Coba kerjakan secara simbolik dulu: hasilnya ternyata tidak bergantung pada $g$.'
    ],
    pembahasan: [
      'Torricelli: $v = \\sqrt{2gh}$ dengan $h = 1{,}8\\ \\text{m}$ (kedalaman lubang dari permukaan).',
      'Waktu jatuh dari ketinggian $H = 0{,}8\\ \\text{m}$: $t = \\sqrt{2H/g}$.',
      'Jarak mendatar: $x = vt = \\sqrt{2gh}\\sqrt{2H/g} = 2\\sqrt{hH}$.',
      '$x = 2\\sqrt{1{,}8 \\times 0{,}8} = 2\\sqrt{1{,}44} = 2{,}4\\ \\text{m}$.'
    ],
    referensi: null
  },
  {
    id: 'osk-14',
    tingkat: 'osk',
    bab: ['statika-fluida', 'usaha-energi'],
    konsep: ['hukum Pascal (dongkrak hidrolik)', 'kekekalan energi (usaha masuk = usaha keluar)'],
    tipe: 'pg',
    pertanyaan: 'Sebuah dongkrak hidrolik mempunyai piston kecil seluas $0{,}001\\ \\text{m}^2$ dan piston besar seluas $0{,}05\\ \\text{m}^2$. Dongkrak dipakai untuk mengangkat mobil $1000\\ \\text{kg}$ setinggi $20\\ \\text{cm}$. Berapa total jarak yang harus ditempuh piston kecil? Anggap fluida tidak termampatkan dan abaikan gesekan.',
    pilihan: ['$4\\ \\text{mm}$', '$20\\ \\text{cm}$', '$10\\ \\text{m}$', '$50\\ \\text{m}$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Volume fluida yang didorong piston kecil sama dengan volume yang mengangkat piston besar.',
      'Cek jawabanmu dengan energi: usaha pada piston kecil harus sama dengan $mgh$ mobil.'
    ],
    pembahasan: [
      'Kekekalan volume: $A_1 d_1 = A_2 d_2$, sehingga $d_1 = \\dfrac{A_2}{A_1} d_2 = 50 \\times 0{,}2 = 10\\ \\text{m}$.',
      'Cek energi: gaya pada piston kecil $F_1 = \\dfrac{A_1}{A_2} mg = 196\\ \\text{N}$, usahanya $196 \\times 10 = 1960\\ \\text{J}$, sama dengan $mgh = 1000 \\times 9{,}8 \\times 0{,}2$.',
      'Dongkrak hidrolik melipatgandakan GAYA, bukan energi. Gaya kecil dibayar dengan jarak tempuh yang panjang (biasanya dengan banyak kali pompa).',
      'Pilihan $4\\ \\text{mm}$ muncul jika perbandingan luas dibalik.'
    ],
    referensi: null
  },
  {
    id: 'osk-15',
    tingkat: 'osk',
    bab: ['dinamika-fluida', 'momentum'],
    konsep: ['debit aliran fluida', 'impuls dan laju perubahan momentum'],
    tipe: 'angka',
    pertanyaan: 'Semburan air dari selang dengan luas penampang $3\\ \\text{cm}^2$ dan kelajuan $10\\ \\text{m/s}$ menghantam tegak lurus sebuah dinding. Setelah menghantam, air mengalir ke samping di sepanjang dinding (tidak memantul balik). Berapa gaya yang dikerjakan semburan air pada dinding? Massa jenis air $1000\\ \\text{kg/m}^3$.',
    pilihan: null,
    jawaban: 30,
    satuan: 'N',
    toleransi: 0.02,
    petunjuk: [
      'Hitung massa air yang menghantam dinding setiap detik.',
      'Gaya = laju perubahan momentum. Berapa perubahan momentum setiap kilogram air dalam arah tegak lurus dinding?'
    ],
    pembahasan: [
      'Laju massa: $\\dfrac{\\Delta m}{\\Delta t} = \\rho A v = 1000 \\times 3 \\times 10^{-4} \\times 10 = 3\\ \\text{kg/s}$.',
      'Setiap kilogram air kehilangan seluruh kecepatannya yang tegak lurus dinding ($10\\ \\text{m/s}$ menjadi $0$).',
      'Gaya: $F = \\dfrac{\\Delta m}{\\Delta t}\\,\\Delta v = 3 \\times 10 = 30\\ \\text{N}$, atau langsung $F = \\rho A v^2$.',
      'Jika air memantul balik dengan kelajuan sama, perubahan kecepatannya $20\\ \\text{m/s}$ dan gayanya menjadi dua kali lipat.'
    ],
    referensi: null
  },
  {
    id: 'osk-16',
    tingkat: 'osk',
    bab: ['termodinamika', 'usaha-energi'],
    konsep: ['perubahan energi mekanik menjadi energi dalam (kalor)', 'kalor jenis'],
    tipe: 'angka',
    pertanyaan: 'Sebuah bola timbal dijatuhkan dari ketinggian $50\\ \\text{m}$ ke lantai keras dan berhenti tanpa memantul. Anggap seluruh energi mekaniknya berubah menjadi energi dalam bola itu sendiri. Berapa kenaikan suhu bola, dalam kelvin? Kalor jenis timbal $130\\ \\text{J/(kg K)}$. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 3.769,
    satuan: 'K',
    toleransi: 0.02,
    petunjuk: [
      'Massa bola tidak diberikan. Coba tulis persamaannya, mungkin massanya saling menghilangkan.',
      'Energi potensial awal = kalor yang menaikkan suhu bola.'
    ],
    pembahasan: [
      'Energi yang berubah: $mgh$. Kalor untuk menaikkan suhu: $Q = mc\\,\\Delta T$.',
      '$mgh = mc\\,\\Delta T$, sehingga $\\Delta T = \\dfrac{gh}{c} = \\dfrac{9{,}8 \\times 50}{130} \\approx 3{,}77\\ \\text{K}$.',
      'Massa saling menghilangkan: bola timbal besar maupun kecil mengalami kenaikan suhu yang sama.',
      'Ini adalah versi sederhana dari percobaan Joule yang menunjukkan kesetaraan usaha mekanik dan kalor.'
    ],
    referensi: null
  },
  {
    id: 'osk-17',
    tingkat: 'osk',
    bab: ['termodinamika', 'teori-kinetik'],
    konsep: ['efisiensi mesin Carnot', 'hubungan kelajuan rms dan suhu mutlak'],
    tipe: 'pg',
    pertanyaan: 'Sebuah mesin kalor bekerja di antara reservoir panas bersuhu $527\\,^\\circ\\text{C}$ dan reservoir dingin bersuhu $27\\,^\\circ\\text{C}$. Fluida kerjanya gas ideal. Pernyataan mana yang benar tentang efisiensi maksimum mesin dan perbandingan kelajuan rms molekul gas saat bersentuhan dengan reservoir panas terhadap reservoir dingin?',
    pilihan: [
      'Efisiensi maksimum $62{,}5\\%$; perbandingan $v_{\\text{rms}}$ sekitar $1{,}63$',
      'Efisiensi maksimum $62{,}5\\%$; perbandingan $v_{\\text{rms}}$ sekitar $2{,}67$',
      'Efisiensi maksimum $94{,}9\\%$; perbandingan $v_{\\text{rms}}$ sekitar $4{,}42$',
      'Efisiensi maksimum $37{,}5\\%$; perbandingan $v_{\\text{rms}}$ sekitar $1{,}63$'
    ],
    jawaban: 0,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Kedua rumus memakai suhu MUTLAK (kelvin), bukan derajat Celsius.',
      '$v_{\\text{rms}}$ sebanding dengan $\\sqrt{T}$, bukan dengan $T$.'
    ],
    pembahasan: [
      'Ubah ke kelvin: $T_P = 800\\ \\text{K}$ dan $T_D = 300\\ \\text{K}$.',
      'Efisiensi Carnot: $\\eta = 1 - \\dfrac{T_D}{T_P} = 1 - \\dfrac{300}{800} = 0{,}625 = 62{,}5\\%$.',
      'Kelajuan rms: $v_{\\text{rms}} = \\sqrt{3RT/M}$, sehingga perbandingannya $\\sqrt{800/300} \\approx 1{,}63$.',
      'Pilihan $94{,}9\\%$ muncul jika memakai Celsius ($1 - 27/527$). Pilihan $2{,}67$ muncul jika lupa akar. Pilihan $37{,}5\\%$ adalah $T_D/T_P$, bukan efisiensi.'
    ],
    referensi: null
  },
  {
    id: 'osk-18',
    tingkat: 'osk',
    bab: ['teori-kinetik', 'statika-fluida'],
    konsep: ['tekanan hidrostatis', 'hukum Boyle (gas ideal pada suhu tetap)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah gelembung udara kecil terlepas dari dasar danau sedalam $10{,}3\\ \\text{m}$ dan naik perlahan ke permukaan. Suhu air dianggap sama di semua kedalaman. Tekanan udara di permukaan $1{,}01 \\times 10^5\\ \\text{Pa}$ dan massa jenis air $1000\\ \\text{kg/m}^3$. Berapa kali volume gelembung saat tiba di permukaan dibandingkan volumenya di dasar danau? Gunakan $g = 9{,}8\\ \\text{m/s}^2$. (Tulis angkanya saja.)',
    pilihan: null,
    jawaban: 2.0,
    satuan: '',
    toleransi: 0.02,
    petunjuk: [
      'Tekanan di dasar danau = tekanan udara luar + tekanan hidrostatis air.',
      'Suhu tetap dan jumlah gas tetap, jadi $PV$ konstan.'
    ],
    pembahasan: [
      'Tekanan hidrostatis: $\\rho g h = 1000 \\times 9{,}8 \\times 10{,}3 \\approx 1{,}01 \\times 10^5\\ \\text{Pa}$.',
      'Tekanan di dasar: $P_1 = P_0 + \\rho g h \\approx 2{,}02 \\times 10^5\\ \\text{Pa}$, sekitar dua kali tekanan permukaan.',
      'Hukum Boyle: $P_1 V_1 = P_0 V_2$, sehingga $\\dfrac{V_2}{V_1} = \\dfrac{P_1}{P_0} \\approx 2{,}0$.',
      'Jebakan umum: lupa menambahkan tekanan udara luar sehingga memakai $P_1 = \\rho g h$ saja.'
    ],
    referensi: null
  },
  {
    id: 'osk-19',
    tingkat: 'osk',
    bab: ['relativitas', 'kinematika'],
    konsep: ['dilatasi waktu', 'jarak = kecepatan × waktu pada kerangka laboratorium'],
    tipe: 'angka',
    pertanyaan: 'Partikel muon mempunyai umur rata-rata $2{,}2\\ \\mu\\text{s}$ diukur dalam kerangka diamnya. Sebuah muon tercipta di atmosfer atas dan bergerak ke bawah dengan kelajuan $0{,}98c$. Menurut pengamat di Bumi, berapa jarak rata-rata yang ditempuh muon sebelum meluruh? Gunakan $c = 3 \\times 10^8\\ \\text{m/s}$.',
    pilihan: null,
    jawaban: 3250,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Umur $2{,}2\\ \\mu\\text{s}$ adalah waktu proper. Menurut pengamat di Bumi, jam muon berjalan lebih lambat.',
      'Hitung $\\gamma$ untuk $0{,}98c$, lalu kalikan umur yang sudah diperpanjang dengan kelajuan muon.'
    ],
    pembahasan: [
      '$\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}98^2}} = \\dfrac{1}{\\sqrt{0{,}0396}} \\approx 5{,}03$.',
      'Umur menurut pengamat Bumi: $\\Delta t = \\gamma\\,\\Delta t_0 \\approx 5{,}03 \\times 2{,}2\\ \\mu\\text{s} \\approx 11{,}1\\ \\mu\\text{s}$.',
      'Jarak: $d = v\\,\\Delta t = 0{,}98 \\times 3 \\times 10^8 \\times 11{,}1 \\times 10^{-6} \\approx 3250\\ \\text{m}$.',
      'Tanpa relativitas, jaraknya hanya sekitar $650\\ \\text{m}$. Inilah sebabnya muon dari atmosfer atas bisa terdeteksi di permukaan Bumi.'
    ],
    referensi: null
  },
  {
    id: 'osk-20',
    tingkat: 'osk',
    bab: ['relativitas', 'usaha-energi'],
    konsep: ['energi kinetik relativistik', 'batas berlakunya energi kinetik klasik'],
    tipe: 'pg',
    pertanyaan: 'Energi diam elektron adalah $0{,}511\\ \\text{MeV}$. Berapa energi kinetik elektron yang bergerak dengan kelajuan $0{,}8c$?',
    pilihan: ['$0{,}164\\ \\text{MeV}$', '$0{,}341\\ \\text{MeV}$', '$0{,}511\\ \\text{MeV}$', '$0{,}852\\ \\text{MeV}$'],
    jawaban: 1,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Pada kelajuan $0{,}8c$, apakah rumus $\\tfrac{1}{2}mv^2$ masih bisa dipakai?',
      'Energi kinetik relativistik = energi total dikurangi energi diam.'
    ],
    pembahasan: [
      '$\\gamma = \\dfrac{1}{\\sqrt{1 - 0{,}64}} = \\dfrac{1}{0{,}6} = \\dfrac{5}{3}$.',
      '$E_k = (\\gamma - 1)mc^2 = \\tfrac{2}{3} \\times 0{,}511 \\approx 0{,}341\\ \\text{MeV}$.',
      'Rumus klasik memberi $\\tfrac{1}{2}mv^2 = 0{,}32\\,mc^2 \\approx 0{,}164\\ \\text{MeV}$, kurang dari setengah nilai sebenarnya.',
      'Pilihan $0{,}852\\ \\text{MeV}$ adalah energi TOTAL ($\\gamma mc^2$), bukan energi kinetik.'
    ],
    referensi: null
  }
);
