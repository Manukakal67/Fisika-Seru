/* Uji Pemahaman: soal tingkat OSN (nasional).
   Soal orisinal bergaya olimpiade. Jawaban diverifikasi ulang dengan Python. */
window.DATA_UJI = window.DATA_UJI || [];
window.DATA_UJI.push(
  {
    id: 'osn-01',
    tingkat: 'osn',
    bab: ['benda-tegar', 'usaha-energi', 'kinematika'],
    konsep: ['energi kinetik rotasi pada menggelinding tanpa slip', 'gerak parabola'],
    tipe: 'angka',
    pertanyaan: 'Sebuah bola pejal homogen dilepas dari keadaan diam di puncak lintasan miring setinggi $1{,}4\\ \\text{m}$. Bola menggelinding tanpa slip sampai dasar, lalu terus menggelinding di permukaan meja datar dan akhirnya meninggalkan tepi meja yang tingginya $1{,}25\\ \\text{m}$ dari lantai. Berapa jarak mendatar dari tepi meja ke titik bola pertama kali menyentuh lantai? Abaikan hambatan udara. Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan $I_{\\text{bola pejal}} = \\tfrac{2}{5}MR^2$.',
    pilihan: null,
    jawaban: 2.236,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Bagi soal menjadi dua bagian: menggelinding di lintasan miring, lalu terbang bebas setelah meninggalkan meja.',
      'Saat menggelinding tanpa slip, energi potensial berubah menjadi energi kinetik translasi DAN rotasi, dengan $v = \\omega R$.',
      'Setelah meninggalkan meja, rotasi bola tidak memengaruhi lintasan pusat massanya.'
    ],
    pembahasan: [
      'Kekekalan energi: $Mgh = \\tfrac{1}{2}Mv^2 + \\tfrac{1}{2}\\left(\\tfrac{2}{5}MR^2\\right)\\left(\\tfrac{v}{R}\\right)^2 = \\tfrac{7}{10}Mv^2$.',
      'Jadi $v = \\sqrt{\\tfrac{10gh}{7}} = \\sqrt{\\tfrac{10 \\times 9{,}8 \\times 1{,}4}{7}} = \\sqrt{19{,}6} \\approx 4{,}43\\ \\text{m/s}$.',
      'Di meja datar tanpa slip, kelajuan tetap (gesekan statis tidak melakukan usaha).',
      'Waktu jatuh: $t = \\sqrt{\\tfrac{2H}{g}} = \\sqrt{\\tfrac{2 \\times 1{,}25}{9{,}8}} \\approx 0{,}505\\ \\text{s}$.',
      'Jarak mendatar: $x = v t \\approx 4{,}43 \\times 0{,}505 \\approx 2{,}24\\ \\text{m}$.',
      'Jebakan umum: memakai $v = \\sqrt{2gh}$ (lupa energi rotasi), yang menghasilkan jarak sekitar $2{,}65\\ \\text{m}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-02',
    tingkat: 'osn',
    bab: ['teori-kinetik', 'termodinamika'],
    konsep: ['hubungan kelajuan rms dan suhu', 'hukum I termodinamika pada proses isobarik'],
    tipe: 'pg',
    pertanyaan: 'Gas ideal monoatomik dipanaskan pada tekanan tetap sampai kelajuan rms molekulnya menjadi dua kali semula. Berapa perbandingan kalor yang diserap gas terhadap usaha yang dilakukan gas, $Q/W$?',
    pilihan: ['$1{,}5$', '$\\tfrac{5}{3}$', '$2{,}5$', '$4$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Bagaimana $v_{\\text{rms}}$ bergantung pada suhu? Informasi "dua kali" mungkin tidak sepenting yang terlihat.',
      'Pada proses isobarik, tulis $W$ dan $\\Delta U$ dalam bentuk $nR\\,\\Delta T$.'
    ],
    pembahasan: [
      'Karena $v_{\\text{rms}} = \\sqrt{3RT/M}$, kelajuan rms dua kali berarti suhu menjadi empat kali. Yang penting: suhu naik, jadi $\\Delta T > 0$.',
      'Proses isobarik: $W = P\\,\\Delta V = nR\\,\\Delta T$.',
      'Gas monoatomik: $\\Delta U = \\tfrac{3}{2}nR\\,\\Delta T$.',
      'Hukum I: $Q = \\Delta U + W = \\tfrac{5}{2}nR\\,\\Delta T$.',
      'Jadi $Q/W = \\tfrac{5}{2} = 2{,}5$, tidak bergantung pada seberapa besar kenaikan suhunya.',
      'Pilihan $4$ adalah perbandingan suhu (atau volume) akhir terhadap awal, dan $\\tfrac{5}{3}$ adalah $\\gamma = C_p/C_v$.'
    ],
    referensi: null
  },
  {
    id: 'osn-03',
    tingkat: 'osn',
    bab: ['vektor', 'kinematika'],
    konsep: ['kecepatan dan posisi relatif', 'jarak terdekat (komponen tegak lurus vektor)'],
    tipe: 'angka',
    pertanyaan: 'Pada suatu saat, kapal B berada $800\\ \\text{m}$ tepat di utara kapal A. Kapal A berlayar ke timur dengan kelajuan $6\\ \\text{m/s}$, sedangkan kapal B berlayar ke selatan dengan kelajuan $8\\ \\text{m/s}$. Keduanya bergerak lurus dengan kecepatan tetap. Berapa jarak terdekat antara kedua kapal?',
    pilihan: null,
    jawaban: 480,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Pindah ke kerangka acuan kapal A: dalam kerangka ini A diam, dan B bergerak dengan kecepatan $\\vec{v}_B - \\vec{v}_A$.',
      'Di kerangka A, B bergerak lurus. Jarak terdekat adalah jarak tegak lurus dari A ke garis lintasan itu.'
    ],
    pembahasan: [
      'Ambil timur sebagai $+x$ dan utara sebagai $+y$. Kecepatan relatif: $\\vec{v}_{BA} = (0, -8) - (6, 0) = (-6, -8)\\ \\text{m/s}$, besarnya $10\\ \\text{m/s}$.',
      'Posisi awal B relatif A: $\\vec{r} = (0, 800)\\ \\text{m}$.',
      'Jarak terdekat $= \\dfrac{|\\vec{r} \\times \\vec{v}_{BA}|}{|\\vec{v}_{BA}|} = \\dfrac{|0 \\cdot (-8) - 800 \\cdot (-6)|}{10} = \\dfrac{4800}{10} = 480\\ \\text{m}$.',
      'Secara geometri: garis lintasan relatif membentuk sudut dengan arah selatan yang $\\sin$-nya $6/10$, sehingga jaraknya $800 \\times 0{,}6 = 480\\ \\text{m}$.',
      'Saat itu terjadi pada $t = \\dfrac{\\vec{r} \\cdot (-\\vec{v}_{BA})}{v_{BA}^2} = \\dfrac{6400}{100} = 64\\ \\text{s}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-04',
    tingkat: 'osn',
    bab: ['kinematika', 'dinamika'],
    konsep: ['gaya gesek yang berganti arah', 'GLBB dua tahap (naik lalu turun)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah balok didorong sehingga meluncur naik pada bidang miring $30^\\circ$ dengan kelajuan awal $10\\ \\text{m/s}$. Koefisien gesek antara balok dan bidang $0{,}2$ (statis dan kinetis dianggap sama). Balok naik, berhenti sesaat, lalu meluncur turun kembali. Berapa kelajuan balok saat kembali ke titik awal? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 6.967,
    satuan: 'm/s',
    toleransi: 0.02,
    petunjuk: [
      'Gaya gesek selalu melawan arah gerak. Arahnya berbeda saat naik dan saat turun, jadi percepatannya juga berbeda.',
      'Cari dulu jarak maksimum yang ditempuh saat naik, lalu hitung kelajuan setelah meluncur turun sejauh jarak itu.',
      'Pastikan balok memang meluncur turun: bandingkan $\\tan 30^\\circ$ dengan koefisien gesek statis.'
    ],
    pembahasan: [
      'Saat naik, gravitasi dan gesekan sama-sama ke bawah bidang: $a_1 = g(\\sin 30^\\circ + \\mu\\cos 30^\\circ) \\approx 6{,}60\\ \\text{m/s}^2$.',
      'Jarak naik: $d = \\dfrac{v_0^2}{2a_1} = \\dfrac{100}{13{,}19} \\approx 7{,}58\\ \\text{m}$.',
      'Karena $\\tan 30^\\circ \\approx 0{,}58 > 0{,}2$, balok tidak bisa diam dan meluncur turun.',
      'Saat turun, gesekan ke atas bidang: $a_2 = g(\\sin 30^\\circ - \\mu\\cos 30^\\circ) \\approx 3{,}20\\ \\text{m/s}^2$.',
      'Kelajuan kembali: $v = \\sqrt{2 a_2 d} \\approx \\sqrt{2 \\times 3{,}20 \\times 7{,}58} \\approx 6{,}97\\ \\text{m/s}$, lebih kecil dari $10\\ \\text{m/s}$ karena energi hilang oleh gesekan di kedua arah.'
    ],
    referensi: null
  },
  {
    id: 'osn-05',
    tingkat: 'osn',
    bab: ['dinamika', 'kinematika', 'vektor'],
    konsep: ['penguraian gaya tegangan tali', 'gerak melingkar beraturan (bandul kerucut)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah bola kecil diikat pada tali ringan sepanjang $1\\ \\text{m}$. Bola diputar sehingga bergerak melingkar beraturan pada bidang mendatar, dan tali membentuk sudut $60^\\circ$ terhadap garis vertikal (bandul kerucut). Berapa periode putaran bola? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 1.4192,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Hanya ada dua gaya pada bola: berat dan tegangan tali. Uraikan tegangan tali menjadi komponen vertikal dan mendatar.',
      'Komponen vertikal menyeimbangkan berat. Komponen mendatar menjadi gaya sentripetal dengan jari-jari $r = L\\sin\\theta$.'
    ],
    pembahasan: [
      'Vertikal: $T\\cos\\theta = mg$. Mendatar: $T\\sin\\theta = m\\omega^2 r = m\\omega^2 L\\sin\\theta$.',
      'Dari persamaan mendatar: $T = m\\omega^2 L$. Substitusi ke persamaan vertikal: $\\omega^2 = \\dfrac{g}{L\\cos\\theta}$.',
      'Periode: $T_{\\text{putar}} = 2\\pi\\sqrt{\\dfrac{L\\cos\\theta}{g}} = 2\\pi\\sqrt{\\dfrac{0{,}5}{9{,}8}} \\approx 1{,}42\\ \\text{s}$.',
      'Menarik: periode ini sama dengan periode bandul sederhana sepanjang $L\\cos\\theta$, yaitu tinggi kerucut. Tegangan talinya $2mg$.'
    ],
    referensi: null
  },
  {
    id: 'osn-06',
    tingkat: 'osn',
    bab: ['usaha-energi', 'dinamika', 'kinematika'],
    konsep: ['kekekalan energi mekanik', 'syarat minimum di puncak lintasan melingkar vertikal', 'gaya normal sebagai bagian gaya sentripetal'],
    tipe: 'pg',
    pertanyaan: 'Sebuah balok kecil meluncur tanpa gesekan dari ketinggian $h$ pada lintasan yang ujungnya membentuk lingkaran vertikal (loop) berjari-jari $R$. Ketinggian $h$ dipilih sekecil mungkin agar balok tepat masih bisa melewati puncak loop tanpa lepas dari lintasan. Berapa kali berat balok besar gaya normal di titik terbawah loop?',
    pilihan: ['$2$ kali', '$5$ kali', '$6$ kali', '$7$ kali'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Syarat "tepat masih bisa melewati puncak": gaya normal di puncak nol, sehingga gravitasi saja yang menjadi gaya sentripetal.',
      'Dari syarat itu, cari $h$ minimum dengan kekekalan energi. Lalu cari $v^2$ di titik terbawah.'
    ],
    pembahasan: [
      'Di puncak, dengan $N = 0$: $mg = \\dfrac{mv_{\\text{puncak}}^2}{R}$, sehingga $v_{\\text{puncak}}^2 = gR$.',
      'Energi dari titik awal ke puncak (ketinggian $2R$): $mgh = mg(2R) + \\tfrac{1}{2}m(gR)$, sehingga $h = 2{,}5R$.',
      'Di titik terbawah: $v_{\\text{bawah}}^2 = 2g(2{,}5R) = 5gR$.',
      'Hukum II Newton di titik terbawah: $N - mg = \\dfrac{m(5gR)}{R}$, sehingga $N = 6mg$.',
      'Pilihan $5$ kali muncul jika lupa bahwa normal juga harus menahan berat ($N = mv^2/R$ saja).'
    ],
    referensi: null
  },
  {
    id: 'osn-07',
    tingkat: 'osn',
    bab: ['momentum', 'usaha-energi', 'elastisitas-shm'],
    konsep: ['kekekalan momentum', 'kecepatan bersama saat pegas tertekan maksimum', 'energi potensial pegas'],
    tipe: 'angka',
    pertanyaan: 'Balok A ($1\\ \\text{kg}$) bergerak dengan kelajuan $4\\ \\text{m/s}$ di lantai licin menuju balok B ($3\\ \\text{kg}$) yang diam. Pada sisi B yang menghadap A terpasang pegas ringan berkonstanta $300\\ \\text{N/m}$. Berapa pemendekan maksimum pegas selama tumbukan?',
    pilihan: null,
    jawaban: 0.2,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Saat pegas paling tertekan, jarak A dan B berhenti berkurang. Apa artinya bagi kecepatan keduanya?',
      'Momentum kekal sepanjang tumbukan. Energi mekanik (kinetik + pegas) juga kekal karena lantai licin dan pegas ideal.'
    ],
    pembahasan: [
      'Saat tekanan maksimum, A dan B bergerak dengan kecepatan sama: $v = \\dfrac{1 \\times 4}{1 + 3} = 1\\ \\text{m/s}$.',
      'Energi kinetik awal: $\\tfrac{1}{2}(1)(4^2) = 8\\ \\text{J}$. Energi kinetik saat itu: $\\tfrac{1}{2}(4)(1^2) = 2\\ \\text{J}$.',
      'Selisihnya tersimpan di pegas: $\\tfrac{1}{2}kx^2 = 6\\ \\text{J}$, sehingga $x = \\sqrt{\\dfrac{12}{300}} = 0{,}2\\ \\text{m}$.',
      'Jebakan umum: menganggap seluruh $8\\ \\text{J}$ masuk ke pegas, yang menghasilkan $x \\approx 0{,}23\\ \\text{m}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-08',
    tingkat: 'osn',
    bab: ['momentum', 'kinematika'],
    konsep: ['kekekalan momentum pada ledakan', 'gerak parabola dan gerak pusat massa'],
    tipe: 'angka',
    pertanyaan: 'Sebuah proyektil ditembakkan dari tanah datar dengan kelajuan $20\\ \\text{m/s}$ dan sudut elevasi $45^\\circ$. Tepat di titik tertingginya, proyektil meledak menjadi dua pecahan bermassa sama. Salah satu pecahan langsung diam sesaat setelah ledakan, lalu jatuh vertikal. Pada jarak berapa dari titik tembak pecahan kedua mendarat? Abaikan hambatan udara. Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 61.22,
    satuan: 'm',
    toleransi: 0.02,
    petunjuk: [
      'Di titik tertinggi, kecepatan proyektil hanya mendatar. Ledakan adalah gaya dalam, jadi momentum mendatar kekal.',
      'Kedua pecahan mulai dari ketinggian yang sama dengan kecepatan vertikal nol, jadi waktu jatuh keduanya sama.',
      'Cara cepat: pusat massa tetap mengikuti parabola semula.'
    ],
    pembahasan: [
      'Jangkauan semula: $R = \\dfrac{v_0^2 \\sin 90^\\circ}{g} = \\dfrac{400}{9{,}8} \\approx 40{,}8\\ \\text{m}$. Titik tertinggi berada di $x = R/2$.',
      'Momentum mendatar: $(2m)v_x = m(0) + m v_2$, sehingga $v_2 = 2v_x$.',
      'Waktu jatuh dari puncak sama dengan waktu naik, dan selama itu pecahan kedua menempuh $2v_x \\cdot t_{\\text{naik}} = R$.',
      'Posisi mendarat: $\\dfrac{R}{2} + R = 1{,}5R \\approx 61{,}2\\ \\text{m}$.',
      'Cek dengan pusat massa: pecahan 1 di $R/2$ dan pecahan 2 di $1{,}5R$, rata-ratanya $R$, sesuai jangkauan semula.'
    ],
    referensi: null
  },
  {
    id: 'osn-09',
    tingkat: 'osn',
    bab: ['elastisitas-shm', 'benda-tegar'],
    konsep: ['bandul fisis', 'teorema sumbu sejajar'],
    tipe: 'angka',
    pertanyaan: 'Sebuah piringan tipis homogen berjari-jari $20\\ \\text{cm}$ dilubangi kecil di dekat tepinya, lalu digantung pada paku melalui lubang itu sehingga dapat berayun pada bidangnya sendiri. Berapa periode ayunan kecilnya? Anggap poros tepat di tepi piringan. Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan $I_{\\text{pusat}} = \\tfrac{1}{2}MR^2$.',
    pilihan: null,
    jawaban: 1.0993,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Momen inersia terhadap poros di tepi dicari dengan teorema sumbu sejajar.',
      'Periode bandul fisis: $T = 2\\pi\\sqrt{\\dfrac{I}{Mgd}}$, dengan $d$ jarak poros ke pusat massa.'
    ],
    pembahasan: [
      'Teorema sumbu sejajar: $I = \\tfrac{1}{2}MR^2 + MR^2 = \\tfrac{3}{2}MR^2$, dengan $d = R$.',
      '$T = 2\\pi\\sqrt{\\dfrac{\\tfrac{3}{2}MR^2}{MgR}} = 2\\pi\\sqrt{\\dfrac{3R}{2g}} = 2\\pi\\sqrt{\\dfrac{0{,}3}{9{,}8}} \\approx 1{,}10\\ \\text{s}$.',
      'Piringan ini berayun seperti bandul sederhana dengan panjang $1{,}5R = 30\\ \\text{cm}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-10',
    tingkat: 'osn',
    bab: ['elastisitas-shm', 'dinamika'],
    konsep: ['konstanta pegas susunan seri', 'kecepatan maksimum gerak harmonik sederhana'],
    tipe: 'angka',
    pertanyaan: 'Dua pegas ringan berkonstanta $100\\ \\text{N/m}$ dan $300\\ \\text{N/m}$ disambung seri. Ujung bebas susunan diikat ke dinding, ujung lainnya ke balok $0{,}5\\ \\text{kg}$ di lantai licin. Balok ditarik $4\\ \\text{cm}$ dari posisi setimbang lalu dilepas. Berapa kelajuan maksimum balok?',
    pilihan: null,
    jawaban: 0.4899,
    satuan: 'm/s',
    toleransi: 0.02,
    petunjuk: [
      'Pada susunan seri, gaya di kedua pegas sama, tetapi pertambahan panjangnya dijumlahkan.',
      'Kelajuan maksimum GHS terjadi di posisi setimbang: $v_{\\max} = A\\omega$.'
    ],
    pembahasan: [
      'Seri: $\\dfrac{1}{k} = \\dfrac{1}{100} + \\dfrac{1}{300} = \\dfrac{4}{300}$, sehingga $k = 75\\ \\text{N/m}$ (lebih lemah dari pegas terlemah).',
      '$\\omega = \\sqrt{\\dfrac{k}{m}} = \\sqrt{\\dfrac{75}{0{,}5}} = \\sqrt{150} \\approx 12{,}25\\ \\text{rad/s}$.',
      '$v_{\\max} = A\\omega = 0{,}04 \\times 12{,}25 \\approx 0{,}49\\ \\text{m/s}$.',
      'Jebakan umum: menjumlahkan konstanta pegas ($400\\ \\text{N/m}$). Itu berlaku untuk susunan paralel, dan menghasilkan $v_{\\max} \\approx 1{,}13\\ \\text{m/s}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-11',
    tingkat: 'osn',
    bab: ['benda-tegar', 'dinamika'],
    konsep: ['kesetimbangan rotasi (torsi)', 'kesetimbangan translasi dan gesekan statis'],
    tipe: 'pg',
    pertanyaan: 'Sebuah tangga homogen sepanjang $5\\ \\text{m}$ bersandar pada dinding licin. Kaki tangga berada di lantai kasar, $3\\ \\text{m}$ dari dinding. Berapa koefisien gesek statis minimum antara kaki tangga dan lantai agar tangga tidak tergelincir?',
    pilihan: ['$0{,}375$', '$0{,}5$', '$0{,}667$', '$0{,}75$'],
    jawaban: 0,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Ada empat gaya: berat (di tengah tangga), normal dinding (mendatar, dinding licin), normal lantai, dan gesekan lantai.',
      'Ambil torsi terhadap kaki tangga agar dua gaya di sana tidak muncul di persamaan.'
    ],
    pembahasan: [
      'Ujung atas tangga berada $\\sqrt{5^2 - 3^2} = 4\\ \\text{m}$ di atas lantai.',
      'Kesetimbangan gaya: vertikal $N_L = mg$; mendatar $f = N_D$.',
      'Torsi terhadap kaki tangga: berat berlengan $1{,}5\\ \\text{m}$ (setengah dari $3\\ \\text{m}$), normal dinding berlengan $4\\ \\text{m}$. Jadi $mg(1{,}5) = N_D(4)$, sehingga $N_D = 0{,}375\\,mg$.',
      'Syarat tidak tergelincir: $f \\le \\mu_s N_L$, sehingga $\\mu_s \\ge \\dfrac{0{,}375\\,mg}{mg} = 0{,}375$.',
      'Pilihan $0{,}75$ ($=3/4$) muncul jika lupa bahwa berat bekerja di TENGAH tangga.'
    ],
    referensi: null
  },
  {
    id: 'osn-12',
    tingkat: 'osn',
    bab: ['benda-tegar', 'momentum', 'usaha-energi'],
    konsep: ['kekekalan momentum sudut pada tumbukan', 'momen inersia batang terhadap ujung', 'kekekalan energi pada ayunan'],
    tipe: 'angka',
    pertanyaan: 'Sebuah batang homogen $3\\ \\text{kg}$ sepanjang $1\\ \\text{m}$ tergantung diam pada poros licin di ujung atasnya. Segumpal lempung $0{,}2\\ \\text{kg}$ bergerak mendatar dengan kelajuan $10\\ \\text{m/s}$, menumbuk ujung bawah batang, dan menempel. Berapa sudut simpangan maksimum batang terhadap vertikal, dalam derajat? Gunakan $g = 9{,}8\\ \\text{m/s}^2$. (Tulis angkanya saja.)',
    pilihan: null,
    jawaban: 25.85,
    satuan: '',
    toleransi: 0.02,
    petunjuk: [
      'Saat tumbukan, poros memberi gaya pada batang, sehingga momentum LINEAR tidak kekal. Besaran apa yang kekal terhadap poros?',
      'Setelah tumbukan, gunakan kekekalan energi: energi kinetik rotasi menjadi energi potensial batang dan lempung.',
      'Pusat massa batang naik $\\tfrac{L}{2}(1 - \\cos\\theta)$, sedangkan lempung naik $L(1 - \\cos\\theta)$.'
    ],
    pembahasan: [
      'Momentum sudut terhadap poros kekal: $m v L = I\\omega$, dengan $I = \\tfrac{1}{3}ML^2 + mL^2 = 1 + 0{,}2 = 1{,}2\\ \\text{kg m}^2$.',
      '$\\omega = \\dfrac{0{,}2 \\times 10 \\times 1}{1{,}2} \\approx 1{,}667\\ \\text{rad/s}$, sehingga $E_k = \\tfrac{1}{2}I\\omega^2 \\approx 1{,}667\\ \\text{J}$.',
      'Energi potensial: $\\left(Mg\\tfrac{L}{2} + mgL\\right)(1 - \\cos\\theta) = (14{,}7 + 1{,}96)(1 - \\cos\\theta) = 16{,}66(1 - \\cos\\theta)$.',
      '$1 - \\cos\\theta = \\dfrac{1{,}667}{16{,}66} \\approx 0{,}100$, sehingga $\\cos\\theta \\approx 0{,}900$ dan $\\theta \\approx 25{,}8^\\circ$.',
      'Jebakan umum: memakai kekekalan momentum linear. Itu salah karena poros mengerjakan gaya impulsif saat tumbukan.'
    ],
    referensi: null
  },
  {
    id: 'osn-13',
    tingkat: 'osn',
    bab: ['statika-fluida', 'elastisitas-shm'],
    konsep: ['gaya apung dan syarat terapung', 'gaya pemulih sebanding simpangan (GHS)'],
    tipe: 'angka',
    pertanyaan: 'Sebuah silinder kayu tegak setinggi $40\\ \\text{cm}$ dengan massa jenis $500\\ \\text{kg/m}^3$ terapung dalam air ($1000\\ \\text{kg/m}^3$) dengan sumbunya vertikal. Silinder ditekan sedikit ke bawah lalu dilepas sehingga berosilasi naik-turun. Abaikan gesekan air dan massa air yang ikut bergerak. Berapa periode osilasinya? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 0.8976,
    satuan: 's',
    toleransi: 0.02,
    petunjuk: [
      'Cari dulu kedalaman bagian silinder yang tercelup saat setimbang.',
      'Jika silinder turun tambahan $y$, gaya apung bertambah $\\rho_{\\text{air}} g A y$. Gaya ini berperan seperti gaya pegas.'
    ],
    pembahasan: [
      'Setimbang: $\\rho_k A H g = \\rho_a A d g$, sehingga $d = \\dfrac{500}{1000} \\times 0{,}4 = 0{,}2\\ \\text{m}$.',
      'Gaya pemulih: $F = -\\rho_a g A\\,y$, jadi "konstanta pegas" $k = \\rho_a g A$.',
      'Massa silinder $m = \\rho_a A d$ (dari syarat terapung), sehingga $\\dfrac{m}{k} = \\dfrac{d}{g}$.',
      '$T = 2\\pi\\sqrt{\\dfrac{d}{g}} = 2\\pi\\sqrt{\\dfrac{0{,}2}{9{,}8}} \\approx 0{,}898\\ \\text{s}$.',
      'Periode ini tidak bergantung pada luas penampang silinder.'
    ],
    referensi: null
  },
  {
    id: 'osn-14',
    tingkat: 'osn',
    bab: ['dinamika-fluida', 'statika-fluida'],
    konsep: ['persamaan kontinuitas dan Bernoulli (venturimeter)', 'beda tekanan hidrostatis pada tabung vertikal'],
    tipe: 'angka',
    pertanyaan: 'Air mengalir mendatar dalam venturimeter yang luas penampangnya $20\\ \\text{cm}^2$ di bagian lebar dan $5\\ \\text{cm}^2$ di bagian sempit. Dua tabung vertikal terbuka dipasang di kedua bagian, dan permukaan air di tabung bagian lebar $15\\ \\text{cm}$ lebih tinggi daripada di tabung bagian sempit. Berapa debit air, dalam liter per detik? Gunakan $g = 9{,}8\\ \\text{m/s}^2$.',
    pilihan: null,
    jawaban: 0.8854,
    satuan: 'L/s',
    toleransi: 0.02,
    petunjuk: [
      'Beda tinggi air di tabung menunjukkan beda tekanan: $\\Delta P = \\rho g\\,\\Delta h$.',
      'Kontinuitas memberi hubungan $v_2 = (A_1/A_2)v_1$. Substitusikan ke persamaan Bernoulli.'
    ],
    pembahasan: [
      'Kontinuitas: $v_2 = \\dfrac{A_1}{A_2}v_1 = 4v_1$.',
      'Bernoulli (pipa mendatar): $P_1 - P_2 = \\tfrac{1}{2}\\rho(v_2^2 - v_1^2) = \\tfrac{1}{2}\\rho(15v_1^2)$.',
      'Dari tabung: $P_1 - P_2 = \\rho g\\,\\Delta h$. Jadi $v_1 = \\sqrt{\\dfrac{2g\\,\\Delta h}{15}} = \\sqrt{\\dfrac{2 \\times 9{,}8 \\times 0{,}15}{15}} \\approx 0{,}443\\ \\text{m/s}$.',
      'Debit: $Q = A_1 v_1 = 20 \\times 10^{-4} \\times 0{,}443 \\approx 8{,}85 \\times 10^{-4}\\ \\text{m}^3/\\text{s} \\approx 0{,}885\\ \\text{L/s}$.'
    ],
    referensi: null
  },
  {
    id: 'osn-15',
    tingkat: 'osn',
    bab: ['dinamika-fluida', 'usaha-energi'],
    konsep: ['debit dan energi per satuan volume fluida', 'daya dan efisiensi'],
    tipe: 'angka',
    pertanyaan: 'Sebuah pompa mengangkat air dari sebuah kolam ke ketinggian $15\\ \\text{m}$ dengan debit $0{,}02\\ \\text{m}^3/\\text{s}$. Air keluar dari ujung pipa dengan kelajuan $5\\ \\text{m/s}$, sedangkan permukaan kolam praktis diam. Efisiensi pompa $80\\%$. Berapa daya listrik yang dibutuhkan pompa, dalam kilowatt? Gunakan $g = 9{,}8\\ \\text{m/s}^2$ dan abaikan gesekan dalam pipa.',
    pilihan: null,
    jawaban: 3.9875,
    satuan: 'kW',
    toleransi: 0.02,
    petunjuk: [
      'Setiap detik, pompa memindahkan $\\rho Q$ kilogram air. Air itu mendapat energi potensial DAN energi kinetik.',
      'Daya listrik = daya berguna dibagi efisiensi.'
    ],
    pembahasan: [
      'Massa air per detik: $\\rho Q = 1000 \\times 0{,}02 = 20\\ \\text{kg/s}$.',
      'Energi per kilogram: $gh + \\tfrac{1}{2}v^2 = 147 + 12{,}5 = 159{,}5\\ \\text{J/kg}$.',
      'Daya berguna: $20 \\times 159{,}5 = 3190\\ \\text{W}$.',
      'Daya listrik: $\\dfrac{3190}{0{,}8} \\approx 3988\\ \\text{W} \\approx 3{,}99\\ \\text{kW}$.',
      'Jebakan umum: lupa energi kinetik air yang keluar ($3{,}68\\ \\text{kW}$) atau mengalikan dengan efisiensi alih-alih membagi.'
    ],
    referensi: null
  },
  {
    id: 'osn-16',
    tingkat: 'osn',
    bab: ['termodinamika', 'teori-kinetik'],
    konsep: ['proses adiabatik gas ideal', 'hubungan kelajuan rms dan suhu'],
    tipe: 'pg',
    pertanyaan: 'Gas ideal monoatomik dimampatkan secara adiabatik dan reversibel sampai kelajuan rms molekulnya menjadi dua kali semula. Tekanan gas menjadi berapa kali tekanan awal?',
    pilihan: ['$8$ kali', '$16$ kali', '$32$ kali', '$64$ kali'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Kelajuan rms dua kali berarti suhu mutlak berapa kali?',
      'Untuk adiabatik: $TV^{\\gamma - 1}$ dan $PV^{\\gamma}$ konstan, dengan $\\gamma = 5/3$ untuk gas monoatomik.'
    ],
    pembahasan: [
      '$v_{\\text{rms}} \\propto \\sqrt{T}$, jadi suhu menjadi $4$ kali.',
      'Adiabatik: $TV^{2/3}$ konstan, sehingga $\\dfrac{V_2}{V_1} = 4^{-3/2} = \\dfrac{1}{8}$.',
      'Tekanan: $\\dfrac{P_2}{P_1} = \\left(\\dfrac{V_1}{V_2}\\right)^{5/3} = 8^{5/3} = 32$.',
      'Cek dengan gas ideal: $\\dfrac{P_2}{P_1} = \\dfrac{T_2}{T_1} \\cdot \\dfrac{V_1}{V_2} = 4 \\times 8 = 32$. Cocok.',
      'Pilihan $8$ kali adalah perbandingan volume, bukan tekanan.'
    ],
    referensi: null
  },
  {
    id: 'osn-17',
    tingkat: 'osn',
    bab: ['termodinamika', 'teori-kinetik'],
    konsep: ['usaha sebagai luas siklus pada diagram P-V', 'energi dalam gas monoatomik dan kalor masuk'],
    tipe: 'angka',
    pertanyaan: 'Gas ideal monoatomik menjalani siklus berbentuk persegi panjang pada diagram $P$-$V$: dari A $(1 \\times 10^5\\ \\text{Pa},\\ 1\\ \\text{L})$ ke B $(3 \\times 10^5\\ \\text{Pa},\\ 1\\ \\text{L})$, ke C $(3 \\times 10^5\\ \\text{Pa},\\ 4\\ \\text{L})$, ke D $(1 \\times 10^5\\ \\text{Pa},\\ 4\\ \\text{L})$, lalu kembali ke A. Berapa efisiensi siklus ini, dalam persen?',
    pilihan: null,
    jawaban: 23.53,
    satuan: '%',
    toleransi: 0.02,
    petunjuk: [
      'Usaha bersih satu siklus sama dengan luas persegi panjang pada diagram $P$-$V$.',
      'Kalor MASUK hanya pada proses yang suhunya naik. Untuk gas monoatomik, $\\Delta U = \\tfrac{3}{2}\\Delta(PV)$.',
      'Efisiensi = usaha bersih / kalor yang masuk (bukan kalor bersih).'
    ],
    pembahasan: [
      'Usaha bersih: $W = \\Delta P\\,\\Delta V = (2 \\times 10^5)(3 \\times 10^{-3}) = 600\\ \\text{J}$.',
      'A→B (isokorik, tekanan naik): $Q = \\tfrac{3}{2}V\\,\\Delta P = \\tfrac{3}{2}(10^{-3})(2 \\times 10^5) = 300\\ \\text{J}$ masuk.',
      'B→C (isobarik, memuai): $Q = \\tfrac{5}{2}P\\,\\Delta V = \\tfrac{5}{2}(3 \\times 10^5)(3 \\times 10^{-3}) = 2250\\ \\text{J}$ masuk.',
      'C→D dan D→A melepas kalor. Kalor masuk total $2550\\ \\text{J}$, sehingga $\\eta = \\dfrac{600}{2550} \\approx 23{,}5\\%$.',
      'Pembanding: mesin Carnot di antara suhu tertinggi (C) dan terendah (A) siklus ini, yang perbandingannya $12:1$, akan berefisiensi sekitar $92\\%$.'
    ],
    referensi: null
  },
  {
    id: 'osn-18',
    tingkat: 'osn',
    bab: ['teori-kinetik', 'momentum'],
    konsep: ['tekanan gas sebagai akibat tumbukan molekul', 'impuls pada tumbukan lenting sempurna'],
    tipe: 'angka',
    pertanyaan: 'Seberkas molekul nitrogen (massa tiap molekul $4{,}65 \\times 10^{-26}\\ \\text{kg}$) menumbuk tegak lurus sebuah dinding seluas $2\\ \\text{cm}^2$. Setiap detik ada $10^{23}$ molekul yang menumbuk dengan kelajuan $500\\ \\text{m/s}$, dan semuanya memantul lenting sempurna. Berapa tekanan rata-rata yang dialami dinding?',
    pilihan: null,
    jawaban: 23250,
    satuan: 'Pa',
    toleransi: 0.02,
    petunjuk: [
      'Berapa perubahan momentum satu molekul yang memantul lenting sempurna?',
      'Gaya rata-rata = perubahan momentum per detik dari semua molekul. Tekanan = gaya / luas.'
    ],
    pembahasan: [
      'Satu molekul: kecepatan berubah dari $+v$ menjadi $-v$, sehingga $\\Delta p = 2mv = 2 \\times 4{,}65 \\times 10^{-26} \\times 500 = 4{,}65 \\times 10^{-23}\\ \\text{kg m/s}$.',
      'Gaya rata-rata: $F = N \\cdot 2mv = 10^{23} \\times 4{,}65 \\times 10^{-23} = 4{,}65\\ \\text{N}$.',
      'Tekanan: $P = \\dfrac{4{,}65}{2 \\times 10^{-4}} = 2{,}325 \\times 10^4\\ \\text{Pa}$.',
      'Inilah gagasan inti teori kinetik: tekanan gas adalah efek rata-rata dari tumbukan molekul yang tak terhitung jumlahnya. Jebakan umum: lupa faktor 2 dari pantulan.'
    ],
    referensi: null
  },
  {
    id: 'osn-19',
    tingkat: 'osn',
    bab: ['relativitas', 'momentum', 'usaha-energi'],
    konsep: ['kekekalan energi-momentum relativistik', 'energi kinetik relativistik pada peluruhan'],
    tipe: 'angka',
    pertanyaan: 'Sebuah pion bermuatan yang diam (energi diam $139{,}6\\ \\text{MeV}$) meluruh menjadi sebuah muon (energi diam $105{,}7\\ \\text{MeV}$) dan sebuah neutrino yang massanya dapat diabaikan. Berapa energi kinetik muon, dalam MeV?',
    pilihan: null,
    jawaban: 4.116,
    satuan: 'MeV',
    toleransi: 0.02,
    petunjuk: [
      'Pion diam, jadi momentum total nol: muon dan neutrino bergerak berlawanan dengan besar momentum sama.',
      'Untuk partikel tak bermassa, $E = pc$. Untuk muon, $E^2 = (pc)^2 + (mc^2)^2$.',
      'Energi total kekal: $E_\\mu + E_\\nu = 139{,}6\\ \\text{MeV}$.'
    ],
    pembahasan: [
      'Momentum: $p_\\mu = p_\\nu = p$. Energi: $E_\\mu + pc = m_\\pi c^2$.',
      'Dari $E_\\mu^2 - (pc)^2 = (m_\\mu c^2)^2$ dan $pc = m_\\pi c^2 - E_\\mu$: $E_\\mu = \\dfrac{(m_\\pi c^2)^2 + (m_\\mu c^2)^2}{2m_\\pi c^2}$.',
      '$E_\\mu = \\dfrac{139{,}6^2 + 105{,}7^2}{2 \\times 139{,}6} \\approx 109{,}8\\ \\text{MeV}$.',
      'Energi kinetik: $E_k = E_\\mu - m_\\mu c^2 \\approx 109{,}8 - 105{,}7 \\approx 4{,}12\\ \\text{MeV}$.',
      'Neutrino membawa sebagian besar energi yang dilepas ($\\approx 29{,}8\\ \\text{MeV}$) meskipun momentumnya sama dengan muon.'
    ],
    referensi: null
  },
  {
    id: 'osn-20',
    tingkat: 'osn',
    bab: ['relativitas', 'kinematika'],
    konsep: ['penjumlahan kecepatan relativistik', 'kecepatan relatif antar kerangka acuan'],
    tipe: 'pg',
    pertanyaan: 'Sebuah pesawat bergerak menjauhi Bumi dengan kelajuan $0{,}6c$. Pesawat itu menembakkan wahana ke depan dengan kelajuan $0{,}6c$ relatif terhadap pesawat. Berapa kelajuan wahana menurut pengamat di Bumi?',
    pilihan: ['$0{,}36c$', '$0{,}60c$', '$0{,}88c$', '$1{,}20c$'],
    jawaban: 2,
    satuan: '',
    toleransi: null,
    petunjuk: [
      'Penjumlahan kecepatan biasa memberi hasil lebih dari $c$. Apa yang salah?',
      'Gunakan rumus penjumlahan kecepatan relativistik: $u = \\dfrac{v + u\'}{1 + vu\'/c^2}$.'
    ],
    pembahasan: [
      '$u = \\dfrac{0{,}6c + 0{,}6c}{1 + 0{,}6 \\times 0{,}6} = \\dfrac{1{,}2c}{1{,}36} \\approx 0{,}882c$.',
      'Hasilnya selalu kurang dari $c$, berapa pun kelajuan yang dijumlahkan (selama masing-masing kurang dari $c$).',
      'Pilihan $1{,}20c$ adalah penjumlahan Galileo, yang tidak berlaku pada kelajuan mendekati cahaya.'
    ],
    referensi: null
  }
);
