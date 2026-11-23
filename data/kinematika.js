window.DATA_BAB = window.DATA_BAB || {};
window.DATA_BAB['kinematika'] = {
  id: 'kinematika',
  judul: 'Kinematika Gerak',
  subbab: [
    {
      id: 'gerak-lurus',
      judul: 'Gerak Lurus',
      materi: {
        gambaranBesar: 'Bayangkan kamu naik motor di jalan lurus. Kalau speedometer menunjuk angka yang sama terus, menghitung jarak itu gampang (itu GLB). Begitu kamu menginjak gas atau rem, kecepatan berubah beraturan dan kita pakai rumus GLBB. Semua rumus di bab ini hanyalah cara rapi menjawab tiga pertanyaan: di mana bendanya, seberapa cepat, dan seberapa cepat kecepatannya berubah.',
        konsep: [
          {
            judul: 'Posisi, perpindahan, dan jarak',
            teks: 'Posisi $x$ adalah letak benda terhadap titik acuan (titik nol). Perpindahan $\\Delta x$ adalah perubahan posisi dan punya arah, jadi bisa negatif. Jarak adalah panjang seluruh lintasan yang dilalui dan selalu positif. Kalau kamu pergi 4 m ke kanan lalu kembali 4 m ke kiri, jaraknya 8 m tetapi perpindahannya 0.',
            rumus: [
              {
                latex: '\\Delta x = x_{\\text{akhir}} - x_{\\text{awal}}',
                simbol: [
                  { s: '\\Delta x', arti: 'perpindahan', satuan: 'm' },
                  { s: 'x_{\\text{akhir}}', arti: 'posisi akhir', satuan: 'm' },
                  { s: 'x_{\\text{awal}}', arti: 'posisi awal', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Kecepatan dan percepatan',
            teks: 'Kecepatan rata-rata adalah perpindahan dibagi selang waktu. Percepatan adalah seberapa cepat kecepatan berubah, yaitu perubahan kecepatan dibagi selang waktu. Percepatan negatif sering disebut perlambatan, tetapi hati-hati: benda melambat hanya jika percepatannya berlawanan arah dengan kecepatannya.',
            rumus: [
              {
                latex: '\\bar{v} = \\frac{\\Delta x}{\\Delta t}',
                simbol: [
                  { s: '\\bar{v}', arti: 'kecepatan rata-rata', satuan: 'm/s' },
                  { s: '\\Delta x', arti: 'perpindahan', satuan: 'm' },
                  { s: '\\Delta t', arti: 'selang waktu', satuan: 's' }
                ]
              },
              {
                latex: 'a = \\frac{\\Delta v}{\\Delta t}',
                simbol: [
                  { s: 'a', arti: 'percepatan', satuan: 'm/s²' },
                  { s: '\\Delta v', arti: 'perubahan kecepatan', satuan: 'm/s' },
                  { s: '\\Delta t', arti: 'selang waktu', satuan: 's' }
                ]
              }
            ]
          },
          {
            judul: 'Gerak Lurus Beraturan (GLB)',
            teks: 'GLB adalah gerak pada lintasan lurus dengan kecepatan tetap, artinya percepatannya nol. Jarak yang ditempuh sebanding dengan waktu.',
            rumus: [
              {
                latex: 'x = x_0 + v\\,t',
                simbol: [
                  { s: 'x', arti: 'posisi pada saat t', satuan: 'm' },
                  { s: 'x_0', arti: 'posisi awal', satuan: 'm' },
                  { s: 'v', arti: 'kecepatan (tetap)', satuan: 'm/s' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              }
            ]
          },
          {
            judul: 'Gerak Lurus Berubah Beraturan (GLBB)',
            teks: 'GLBB adalah gerak lurus dengan percepatan tetap. Ada tiga rumus utama. Cara memilihnya: pilih rumus yang tidak memuat besaran yang tidak diketahui dan tidak ditanyakan. Jika waktu tidak ada dalam soal, pakai rumus ketiga.',
            rumus: [
              {
                latex: 'v = v_0 + a\\,t',
                simbol: [
                  { s: 'v', arti: 'kecepatan akhir', satuan: 'm/s' },
                  { s: 'v_0', arti: 'kecepatan awal', satuan: 'm/s' },
                  { s: 'a', arti: 'percepatan (tetap)', satuan: 'm/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              },
              {
                latex: 'x = x_0 + v_0\\,t + \\tfrac{1}{2}\\,a\\,t^2',
                simbol: [
                  { s: 'x', arti: 'posisi pada saat t', satuan: 'm' },
                  { s: 'x_0', arti: 'posisi awal', satuan: 'm' },
                  { s: 'v_0', arti: 'kecepatan awal', satuan: 'm/s' },
                  { s: 'a', arti: 'percepatan (tetap)', satuan: 'm/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              },
              {
                latex: 'v^2 = v_0^2 + 2a\\,(x - x_0)',
                simbol: [
                  { s: 'v', arti: 'kecepatan akhir', satuan: 'm/s' },
                  { s: 'v_0', arti: 'kecepatan awal', satuan: 'm/s' },
                  { s: 'a', arti: 'percepatan (tetap)', satuan: 'm/s²' },
                  { s: 'x - x_0', arti: 'perpindahan', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Gerak vertikal dan jatuh bebas',
            teks: 'Gerak vertikal adalah GLBB dengan percepatan gravitasi $g$ yang selalu mengarah ke bawah. Di Bumi $g \\approx 9{,}8\\ \\text{m/s}^2$, tetapi soal di aplikasi ini memakai $g = 10\\ \\text{m/s}^2$ kecuali dikatakan lain. Jatuh bebas adalah gerak vertikal tanpa kecepatan awal dan tanpa hambatan udara. Rumus di bawah memakai arah atas sebagai arah positif.',
            rumus: [
              {
                latex: 'v = v_0 - g\\,t',
                simbol: [
                  { s: 'v', arti: 'kecepatan pada saat t (positif jika ke atas)', satuan: 'm/s' },
                  { s: 'v_0', arti: 'kecepatan awal (positif jika ke atas)', satuan: 'm/s' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              },
              {
                latex: 'y = y_0 + v_0\\,t - \\tfrac{1}{2}\\,g\\,t^2',
                simbol: [
                  { s: 'y', arti: 'ketinggian pada saat t', satuan: 'm' },
                  { s: 'y_0', arti: 'ketinggian awal', satuan: 'm' },
                  { s: 'v_0', arti: 'kecepatan awal (positif jika ke atas)', satuan: 'm/s' },
                  { s: 'g', arti: 'percepatan gravitasi', satuan: 'm/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              }
            ]
          },
          {
            judul: 'Membaca grafik gerak lurus',
            teks: 'Grafik bisa menggantikan rumus. Kemiringan (gradien) grafik posisi terhadap waktu ($x$–$t$) adalah kecepatan. Kemiringan grafik kecepatan terhadap waktu ($v$–$t$) adalah percepatan. Luas daerah di bawah grafik $v$–$t$ adalah perpindahan. Bentuk garis lurus mendatar pada grafik $v$–$t$ berarti GLB, garis lurus miring berarti GLBB.',
            rumus: [
              {
                latex: '\\Delta x = \\int_{t_1}^{t_2} v\\,dt',
                simbol: [
                  { s: '\\Delta x', arti: 'perpindahan (luas di bawah grafik v–t)', satuan: 'm' },
                  { s: 'v', arti: 'kecepatan', satuan: 'm/s' },
                  { s: 't_1,\\ t_2', arti: 'waktu awal dan waktu akhir', satuan: 's' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Sebuah mobil melaju $25\\ \\text{m/s}$ lalu direm dengan perlambatan tetap $5\\ \\text{m/s}^2$ hingga berhenti. Berapa jarak pengereman?',
            langkah: [
              'Diketahui $v_0 = 25\\ \\text{m/s}$, $v = 0$, dan $a = -5\\ \\text{m/s}^2$ (negatif karena melambat).',
              'Waktu tidak diketahui dan tidak ditanyakan, jadi pakai $v^2 = v_0^2 + 2a\\,\\Delta x$.',
              '$0 = 25^2 + 2(-5)\\,\\Delta x \\Rightarrow 10\\,\\Delta x = 625$.',
              '$\\Delta x = 62{,}5\\ \\text{m}$.'
            ],
            hasil: 'Jarak pengereman adalah 62,5 m.'
          },
          {
            soal: 'Sebuah kelapa jatuh dari pohon setinggi $20\\ \\text{m}$. Berapa lama ia sampai di tanah, dan berapa lajunya saat menyentuh tanah? (gunakan $g = 10\\ \\text{m/s}^2$)',
            langkah: [
              'Jatuh bebas: $v_0 = 0$ dan percepatannya $g$. Tinggi jatuh $h = 20\\ \\text{m}$.',
              'Waktu: $h = \\tfrac{1}{2} g t^2 \\Rightarrow 20 = 5t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2\\ \\text{s}$.',
              'Laju: $v = g\\,t = 10 \\times 2 = 20\\ \\text{m/s}$.'
            ],
            hasil: 'Kelapa sampai di tanah dalam 2 s dengan laju 20 m/s.'
          },
          {
            soal: 'Grafik $v$–$t$ sebuah sepeda: kecepatan naik beraturan dari $0$ sampai $6\\ \\text{m/s}$ dalam $3\\ \\text{s}$, lalu tetap $6\\ \\text{m/s}$ selama $4\\ \\text{s}$. Berapa perpindahan totalnya?',
            langkah: [
              'Perpindahan sama dengan luas di bawah grafik $v$–$t$.',
              'Bagian pertama berbentuk segitiga: $\\tfrac{1}{2} \\times 3 \\times 6 = 9\\ \\text{m}$.',
              'Bagian kedua berbentuk persegi panjang: $4 \\times 6 = 24\\ \\text{m}$.',
              'Total: $9 + 24 = 33\\ \\text{m}$.'
            ],
            hasil: 'Perpindahan total sepeda adalah 33 m.'
          }
        ],
        kesalahan: [
          'Lupa menyamakan satuan sebelum menghitung. Contohnya km/jam harus diubah ke m/s dulu (bagi 3,6), atau seluruh soal dikerjakan dalam km dan jam.',
          'Mengira percepatan negatif selalu berarti melambat. Benda melambat hanya jika percepatan berlawanan arah dengan kecepatan.',
          'Mencampur jarak dengan perpindahan. Jarak dijumlahkan sepanjang lintasan, perpindahan hanya selisih posisi akhir dan awal.',
          'Memakai rumus GLBB padahal percepatannya tidak tetap. Kalau percepatan berubah terhadap waktu, gunakan integral atau luas grafik.',
          'Mengira percepatan nol di titik tertinggi gerak vertikal. Kecepatannya nol sesaat, tetapi percepatannya tetap $g$ ke bawah.',
          'Tanda $g$ terbalik. Kalau arah atas dipilih positif, $g$ masuk rumus sebagai $-g$.'
        ],
        ringkasan: [
          'Perpindahan punya arah, jarak tidak. Kecepatan rata-rata $\\bar{v} = \\Delta x / \\Delta t$, percepatan $a = \\Delta v / \\Delta t$.',
          'GLB (kecepatan tetap): $x = x_0 + v\\,t$.',
          'GLBB (percepatan tetap): $v = v_0 + a\\,t$, $x = x_0 + v_0 t + \\tfrac{1}{2} a t^2$, dan $v^2 = v_0^2 + 2a\\,\\Delta x$.',
          'Gerak vertikal adalah GLBB dengan percepatan $g$ ke bawah.',
          'Pada grafik $v$–$t$: kemiringan = percepatan, luas = perpindahan.'
        ],
        simulasi: {
          id: 'glb-glbb',
          judul: 'Simulasi: balok di lintasan dan grafik v–t',
          param: [
            { kunci: 'v0', label: 'Kecepatan awal', min: 0, max: 20, nilai: 5, satuan: 'm/s', langkah: 1 },
            { kunci: 'a', label: 'Percepatan', min: -5, max: 5, nilai: 2, satuan: 'm/s²', langkah: 0.5 },
            { kunci: 't', label: 'Waktu', min: 0, max: 10, nilai: 4, satuan: 's', langkah: 0.1 }
          ]
        }
      }
    },
    {
      id: 'gerak-melingkar',
      judul: 'Gerak Melingkar',
      materi: {
        gambaranBesar: 'Bayangkan komidi putar atau roda sepeda yang berputar. Titik di tepi roda terus bergerak, tetapi arahnya terus berbelok mengikuti lingkaran. Karena arah geraknya berubah, benda itu punya percepatan walaupun lajunya tetap, dan percepatan itu selalu menunjuk ke pusat lingkaran.',
        konsep: [
          {
            judul: 'Besaran sudut, periode, dan frekuensi',
            teks: 'Posisi benda pada lingkaran dinyatakan dengan sudut $\\theta$ dalam radian (rad). Satu putaran penuh sama dengan $2\\pi$ rad, atau sekitar $6{,}28$ rad. Kecepatan sudut $\\omega$ menyatakan seberapa cepat sudut berubah. Periode $T$ adalah waktu untuk satu putaran, dan frekuensi $f$ adalah jumlah putaran tiap sekon (satuan hertz, $1\\ \\text{Hz} = 1\\ \\text{putaran/s}$). Untuk mengubah rpm (putaran per menit) ke rad/s, kalikan dengan $2\\pi/60$.',
            rumus: [
              {
                latex: '\\omega = \\frac{\\Delta\\theta}{\\Delta t}',
                simbol: [
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: '\\Delta\\theta', arti: 'perubahan sudut', satuan: 'rad' },
                  { s: '\\Delta t', arti: 'selang waktu', satuan: 's' }
                ]
              },
              {
                latex: '\\omega = \\frac{2\\pi}{T} = 2\\pi f',
                simbol: [
                  { s: 'T', arti: 'periode (waktu satu putaran)', satuan: 's' },
                  { s: 'f', arti: 'frekuensi, dengan f = 1/T', satuan: 'Hz' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' }
                ]
              }
            ]
          },
          {
            judul: 'Hubungan besaran sudut dan besaran linear',
            teks: 'Titik di tepi roda menempuh lintasan melengkung. Semakin jauh dari pusat, semakin besar lajunya, padahal kecepatan sudutnya sama. Dua roda yang sepusat (satu poros) punya $\\omega$ yang sama. Dua roda yang dihubungkan rantai atau tali punya laju linear $v$ yang sama di tepinya.',
            rumus: [
              {
                latex: 'v = \\omega\\,r',
                simbol: [
                  { s: 'v', arti: 'laju linear', satuan: 'm/s' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'r', arti: 'jari-jari lintasan', satuan: 'm' }
                ]
              },
              {
                latex: 's = \\theta\\,r',
                simbol: [
                  { s: 's', arti: 'panjang busur yang ditempuh', satuan: 'm' },
                  { s: '\\theta', arti: 'sudut yang ditempuh (harus dalam radian)', satuan: 'rad' },
                  { s: 'r', arti: 'jari-jari lintasan', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Gerak Melingkar Beraturan (GMB) dan percepatan sentripetal',
            teks: 'GMB adalah gerak melingkar dengan kecepatan sudut tetap, jadi lajunya tetap. Namun arah kecepatannya terus berubah, sehingga ada percepatan. Percepatan ini disebut percepatan sentripetal (artinya mencari pusat) dan selalu mengarah ke pusat lingkaran, tegak lurus terhadap kecepatan.',
            rumus: [
              {
                latex: 'a_s = \\frac{v^2}{r} = \\omega^2\\,r',
                simbol: [
                  { s: 'a_s', arti: 'percepatan sentripetal', satuan: 'm/s²' },
                  { s: 'v', arti: 'laju linear', satuan: 'm/s' },
                  { s: '\\omega', arti: 'kecepatan sudut', satuan: 'rad/s' },
                  { s: 'r', arti: 'jari-jari lintasan', satuan: 'm' }
                ]
              }
            ]
          },
          {
            judul: 'Gerak Melingkar Berubah Beraturan (GMBB)',
            teks: 'Pada GMBB kecepatan sudut berubah dengan percepatan sudut $\\alpha$ yang tetap. Rumusnya sama persis dengan GLBB, dengan pemetaan $x \\to \\theta$, $v \\to \\omega$, dan $a \\to \\alpha$. Luas di bawah grafik $\\omega$–$t$ adalah sudut yang ditempuh. Karena lajunya berubah, muncul juga percepatan tangensial $a_t$ yang menyinggung lintasan. Percepatan sentripetal dan tangensial saling tegak lurus.',
            rumus: [
              {
                latex: '\\omega = \\omega_0 + \\alpha\\,t',
                simbol: [
                  { s: '\\omega', arti: 'kecepatan sudut akhir', satuan: 'rad/s' },
                  { s: '\\omega_0', arti: 'kecepatan sudut awal', satuan: 'rad/s' },
                  { s: '\\alpha', arti: 'percepatan sudut (tetap)', satuan: 'rad/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              },
              {
                latex: '\\theta = \\omega_0\\,t + \\tfrac{1}{2}\\,\\alpha\\,t^2',
                simbol: [
                  { s: '\\theta', arti: 'sudut yang ditempuh', satuan: 'rad' },
                  { s: '\\omega_0', arti: 'kecepatan sudut awal', satuan: 'rad/s' },
                  { s: '\\alpha', arti: 'percepatan sudut (tetap)', satuan: 'rad/s²' },
                  { s: 't', arti: 'waktu', satuan: 's' }
                ]
              },
              {
                latex: '\\omega^2 = \\omega_0^2 + 2\\alpha\\,\\theta',
                simbol: [
                  { s: '\\omega', arti: 'kecepatan sudut akhir', satuan: 'rad/s' },
                  { s: '\\omega_0', arti: 'kecepatan sudut awal', satuan: 'rad/s' },
                  { s: '\\alpha', arti: 'percepatan sudut (tetap)', satuan: 'rad/s²' },
                  { s: '\\theta', arti: 'sudut yang ditempuh', satuan: 'rad' }
                ]
              },
              {
                latex: 'a_t = \\alpha\\,r',
                simbol: [
                  { s: 'a_t', arti: 'percepatan tangensial', satuan: 'm/s²' },
                  { s: '\\alpha', arti: 'percepatan sudut', satuan: 'rad/s²' },
                  { s: 'r', arti: 'jari-jari lintasan', satuan: 'm' }
                ]
              }
            ]
          }
        ],
        contoh: [
          {
            soal: 'Roda sepeda berputar $150$ putaran per menit. Berapa frekuensi, periode, dan kecepatan sudutnya?',
            langkah: [
              'Ubah ke putaran per sekon: $f = \\dfrac{150}{60} = 2{,}5\\ \\text{Hz}$.',
              'Periode: $T = \\dfrac{1}{f} = \\dfrac{1}{2{,}5} = 0{,}4\\ \\text{s}$.',
              'Kecepatan sudut: $\\omega = 2\\pi f = 2\\pi \\times 2{,}5 = 5\\pi \\approx 15{,}7\\ \\text{rad/s}$.'
            ],
            hasil: 'Frekuensinya 2,5 Hz, periodenya 0,4 s, dan kecepatan sudutnya sekitar 15,7 rad/s.'
          },
          {
            soal: 'Sebuah mobil melaju $20\\ \\text{m/s}$ pada tikungan berbentuk busur lingkaran berjari-jari $50\\ \\text{m}$. Berapa percepatan sentripetalnya?',
            langkah: [
              'Diketahui $v = 20\\ \\text{m/s}$ dan $r = 50\\ \\text{m}$.',
              '$a_s = \\dfrac{v^2}{r} = \\dfrac{20^2}{50} = \\dfrac{400}{50} = 8\\ \\text{m/s}^2$.',
              'Arahnya selalu menuju pusat tikungan.'
            ],
            hasil: 'Percepatan sentripetalnya 8 m/s², menuju pusat tikungan.'
          },
          {
            soal: 'Sebuah piringan mula-mula diam, lalu dipercepat dengan percepatan sudut tetap $3\\ \\text{rad/s}^2$ selama $4\\ \\text{s}$. Berapa sudut yang ditempuh, dan berapa putaran itu?',
            langkah: [
              'Diketahui $\\omega_0 = 0$, $\\alpha = 3\\ \\text{rad/s}^2$, dan $t = 4\\ \\text{s}$.',
              '$\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2 = 0 + \\tfrac{1}{2} \\times 3 \\times 16 = 24\\ \\text{rad}$.',
              'Jumlah putaran $= \\dfrac{\\theta}{2\\pi} = \\dfrac{24}{2\\pi} \\approx 3{,}82$ putaran.'
            ],
            hasil: 'Piringan menempuh 24 rad, sekitar 3,82 putaran.'
          }
        ],
        kesalahan: [
          'Memakai derajat padahal rumus $s = \\theta r$ dan $v = \\omega r$ butuh radian.',
          'Lupa mengubah rpm ke rad/s. Kalikan rpm dengan $2\\pi/60$.',
          'Mengira GMB tidak punya percepatan karena lajunya tetap. Arah kecepatan berubah, jadi ada percepatan sentripetal.',
          'Mengira percepatan sentripetal mengarah keluar. Untuk benda yang berputar, arahnya selalu ke pusat lingkaran.',
          'Menukar aturan dua roda. Roda sepusat punya $\\omega$ sama, sedangkan roda yang dihubungkan rantai atau tali punya $v$ sama.',
          'Mencampur percepatan sentripetal $a_s = \\omega^2 r$ (mengubah arah) dengan percepatan tangensial $a_t = \\alpha r$ (mengubah laju).'
        ],
        ringkasan: [
          'Satu putaran $= 2\\pi$ rad. $\\omega = 2\\pi / T = 2\\pi f$, dan $f = 1/T$.',
          'Hubungan dengan besaran linear: $v = \\omega r$ dan $s = \\theta r$.',
          'GMB: $\\omega$ tetap, percepatan sentripetal $a_s = v^2/r = \\omega^2 r$ menuju pusat.',
          'GMBB: $\\omega = \\omega_0 + \\alpha t$, $\\theta = \\omega_0 t + \\tfrac{1}{2}\\alpha t^2$, $\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$, dan $a_t = \\alpha r$.',
          'Roda sepusat: $\\omega$ sama. Roda dihubungkan rantai atau tali: $v$ sama.'
        ],
        simulasi: {
          id: 'gerak-melingkar',
          judul: 'Simulasi: titik pada lingkaran dengan vektor kecepatan dan percepatan',
          param: [
            { kunci: 'r', label: 'Jari-jari', min: 0.5, max: 5, nilai: 2, satuan: 'm', langkah: 0.1 },
            { kunci: 'w0', label: 'Kecepatan sudut awal', min: 0, max: 6, nilai: 2, satuan: 'rad/s', langkah: 0.5 },
            { kunci: 'alpha', label: 'Percepatan sudut', min: -1, max: 1, nilai: 0, satuan: 'rad/s²', langkah: 0.1 },
            { kunci: 't', label: 'Waktu', min: 0, max: 10, nilai: 3, satuan: 's', langkah: 0.1 }
          ]
        }
      }
    }
  ],
  soal: [
    /* ===================== PEMULA ===================== */
    {
      id: 'kin-gl-p1',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah sepeda motor bergerak dengan kecepatan tetap $20\\ \\text{m/s}$. Berapa jarak yang ditempuhnya dalam $15\\ \\text{s}$?',
      pilihan: [],
      jawaban: 300,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Kecepatan tetap berarti geraknya GLB.',
        'Gunakan $s = v\\,t$.'
      ],
      pembahasan: [
        'Kecepatan tetap, jadi geraknya GLB.',
        '$s = v\\,t = 20 \\times 15 = 300\\ \\text{m}$.'
      ],
      tag: ['GLB'],
      ragu: false
    },
    {
      id: 'kin-gl-p2',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah benda mula-mula diam, lalu dipercepat tetap $3\\ \\text{m/s}^2$ selama $4\\ \\text{s}$. Berapa kecepatan akhirnya?',
      pilihan: [
        '$7\\ \\text{m/s}$',
        '$12\\ \\text{m/s}$',
        '$0{,}75\\ \\text{m/s}$',
        '$48\\ \\text{m/s}$'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Benda mula-mula diam, artinya $v_0 = 0$.',
        'Gunakan $v = v_0 + a\\,t$.'
      ],
      pembahasan: [
        'Diketahui $v_0 = 0$, $a = 3\\ \\text{m/s}^2$, $t = 4\\ \\text{s}$.',
        '$v = v_0 + a\\,t = 0 + 3 \\times 4 = 12\\ \\text{m/s}$.'
      ],
      tag: ['GLBB'],
      ragu: false
    },
    {
      id: 'kin-gl-p3',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Seorang pelari menempuh lintasan lurus sejauh $400\\ \\text{m}$ dalam waktu $50\\ \\text{s}$. Berapa kecepatan rata-ratanya?',
      pilihan: [],
      jawaban: 8,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Kecepatan rata-rata adalah perpindahan dibagi selang waktu.',
        'Gunakan $\\bar{v} = \\Delta x / \\Delta t$.'
      ],
      pembahasan: [
        'Diketahui $\\Delta x = 400\\ \\text{m}$ dan $\\Delta t = 50\\ \\text{s}$.',
        '$\\bar{v} = \\dfrac{\\Delta x}{\\Delta t} = \\dfrac{400}{50} = 8\\ \\text{m/s}$.'
      ],
      tag: ['kecepatan rata-rata'],
      ragu: false
    },
    {
      id: 'kin-gl-p4',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Besaran yang menyatakan perubahan kecepatan tiap satuan waktu disebut ... (tulis satu kata)',
      pilihan: [],
      jawaban: ['percepatan', 'akselerasi'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Besaran ini satuannya $\\text{m/s}^2$.',
        'Rumusnya $a = \\Delta v / \\Delta t$.'
      ],
      pembahasan: [
        'Perubahan kecepatan tiap satuan waktu disebut percepatan.',
        'Rumusnya $a = \\Delta v / \\Delta t$ dengan satuan $\\text{m/s}^2$.'
      ],
      tag: ['percepatan', 'istilah'],
      ragu: false
    },
    {
      id: 'kin-gl-p5',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Pada gerak lurus beraturan (GLB), grafik posisi terhadap waktu ($x$–$t$) berbentuk ...',
      pilihan: [
        'garis lurus mendatar',
        'parabola',
        'garis lurus miring',
        'lingkaran'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Pada GLB, $x = x_0 + v\\,t$. Bentuk persamaan itu seperti $y = mx + c$.',
        'Kemiringan grafik $x$–$t$ sama dengan kecepatan, dan kecepatannya tetap.'
      ],
      pembahasan: [
        '$x = x_0 + v\\,t$ adalah fungsi linear terhadap $t$.',
        'Grafik fungsi linear berupa garis lurus miring dengan kemiringan $v$. Garis mendatar hanya terjadi jika benda diam ($v = 0$).'
      ],
      tag: ['GLB', 'grafik'],
      ragu: false
    },

    /* ===================== MENENGAH ===================== */
    {
      id: 'kin-gl-m1',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil melaju dengan kecepatan tetap $72\\ \\text{km/jam}$ selama $20$ menit. Berapa jarak yang ditempuhnya dalam km?',
      pilihan: [],
      jawaban: 24,
      satuan: 'km',
      toleransi: 0.02,
      petunjuk: [
        'Samakan satuan waktu dulu: 20 menit sama dengan berapa jam?',
        '$20\\ \\text{menit} = \\tfrac{1}{3}\\ \\text{jam}$, lalu pakai $s = v\\,t$.'
      ],
      pembahasan: [
        'Ubah waktu: $t = 20\\ \\text{menit} = \\dfrac{20}{60}\\ \\text{jam} = \\dfrac{1}{3}\\ \\text{jam}$.',
        '$s = v\\,t = 72 \\times \\dfrac{1}{3} = 24\\ \\text{km}$.'
      ],
      tag: ['GLB', 'konversi satuan'],
      ragu: false
    },
    {
      id: 'kin-gl-m2',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil melaju $20\\ \\text{m/s}$ lalu direm dengan perlambatan tetap $4\\ \\text{m/s}^2$ sampai berhenti. Berapa jarak yang ditempuh selama pengereman?',
      pilihan: [],
      jawaban: 50,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Perlambatan berarti $a$ bernilai negatif: $a = -4\\ \\text{m/s}^2$.',
        'Waktu tidak diketahui, jadi pakai $v^2 = v_0^2 + 2a\\,\\Delta x$ dengan $v = 0$.'
      ],
      pembahasan: [
        'Diketahui $v_0 = 20\\ \\text{m/s}$, $v = 0$, dan $a = -4\\ \\text{m/s}^2$.',
        '$0 = 20^2 + 2(-4)\\,\\Delta x \\Rightarrow 8\\,\\Delta x = 400$.',
        '$\\Delta x = 50\\ \\text{m}$.'
      ],
      tag: ['GLBB', 'perlambatan'],
      ragu: false
    },
    {
      id: 'kin-gl-m3',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Sebuah batu dijatuhkan tanpa kecepatan awal dari ketinggian $45\\ \\text{m}$. Dengan $g = 10\\ \\text{m/s}^2$ dan hambatan udara diabaikan, berapa lajunya tepat sebelum menyentuh tanah?',
      pilihan: [
        '$45\\ \\text{m/s}$',
        '$15\\ \\text{m/s}$',
        '$90\\ \\text{m/s}$',
        '$30\\ \\text{m/s}$'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Jatuh bebas: $v_0 = 0$ dan percepatannya $g$.',
        'Waktu tidak diketahui, jadi pakai $v^2 = 2g\\,h$.'
      ],
      pembahasan: [
        'Jatuh bebas: $v_0 = 0$, $a = g = 10\\ \\text{m/s}^2$, tinggi $h = 45\\ \\text{m}$.',
        '$v^2 = 2g\\,h = 2 \\times 10 \\times 45 = 900$, sehingga $v = 30\\ \\text{m/s}$.',
        'Cek lewat waktu: $h = \\tfrac{1}{2} g t^2 \\Rightarrow t = 3\\ \\text{s}$, lalu $v = g\\,t = 30\\ \\text{m/s}$.'
      ],
      tag: ['jatuh bebas'],
      ragu: false
    },
    {
      id: 'kin-gl-m4',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Motor A melaju dengan kecepatan tetap $15\\ \\text{m/s}$. Pada saat yang sama, motor B yang berada $100\\ \\text{m}$ di belakang A melaju searah dengan kecepatan tetap $20\\ \\text{m/s}$. Setelah berapa sekon B menyusul A?',
      pilihan: [],
      jawaban: 20,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Menyusul berarti posisi kedua motor sama.',
        'Ambil posisi awal B sebagai titik nol: $x_B = 20t$ dan $x_A = 100 + 15t$.'
      ],
      pembahasan: [
        'Ambil posisi awal B sebagai titik nol: $x_B = 20t$ dan $x_A = 100 + 15t$.',
        'B menyusul A saat $x_B = x_A$: $20t = 100 + 15t \\Rightarrow 5t = 100$.',
        '$t = 20\\ \\text{s}$.'
      ],
      tag: ['GLB', 'gerak relatif'],
      ragu: false
    },
    {
      id: 'kin-gl-m5',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Sebuah bola dilempar vertikal ke atas dan hambatan udara diabaikan. Saat bola berada di titik tertinggi, percepatannya mengarah ke ... (tulis satu kata arah)',
      pilihan: [],
      jawaban: ['bawah'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ingat: kecepatan nol tidak berarti percepatan nol.',
        'Gaya apa yang masih bekerja pada bola di titik tertinggi?'
      ],
      pembahasan: [
        'Di titik tertinggi kecepatan bola nol hanya sesaat, tetapi percepatannya tidak nol.',
        'Satu-satunya gaya yang bekerja adalah gravitasi, sehingga percepatannya tetap $g = 10\\ \\text{m/s}^2$ ke bawah.'
      ],
      tag: ['gerak vertikal', 'miskonsepsi'],
      ragu: false
    },

    /* ===================== LANJUT ===================== */
    {
      id: 'kin-gl-l1',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Grafik kecepatan terhadap waktu sebuah kereta mainan: dari $t = 0$ sampai $4\\ \\text{s}$ kecepatannya naik beraturan dari $0$ menjadi $8\\ \\text{m/s}$; dari $4\\ \\text{s}$ sampai $10\\ \\text{s}$ kecepatannya tetap $8\\ \\text{m/s}$; dari $10\\ \\text{s}$ sampai $14\\ \\text{s}$ kecepatannya turun beraturan sampai berhenti. Berapa jarak total yang ditempuh?',
      pilihan: [],
      jawaban: 80,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Perpindahan sama dengan luas di bawah grafik $v$–$t$.',
        'Pecah menjadi segitiga, persegi panjang, dan segitiga.'
      ],
      pembahasan: [
        'Tahap 1 (segitiga): $\\tfrac{1}{2} \\times 4 \\times 8 = 16\\ \\text{m}$.',
        'Tahap 2 (persegi panjang): $6 \\times 8 = 48\\ \\text{m}$.',
        'Tahap 3 (segitiga): $\\tfrac{1}{2} \\times 4 \\times 8 = 16\\ \\text{m}$.',
        'Total $= 16 + 48 + 16 = 80\\ \\text{m}$.'
      ],
      tag: ['grafik v-t', 'luas grafik'],
      ragu: false
    },
    {
      id: 'kin-gl-l2',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil mula-mula diam, dipercepat $2\\ \\text{m/s}^2$ selama $5\\ \\text{s}$, lalu melaju dengan kecepatan tetap selama $10\\ \\text{s}$, kemudian direm dengan perlambatan $5\\ \\text{m/s}^2$ sampai berhenti. Berapa jarak total perjalanannya?',
      pilihan: [],
      jawaban: 135,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Bagi menjadi tiga tahap dan hitung jarak tiap tahap.',
        'Kecepatan akhir tahap 1 adalah kecepatan tetap di tahap 2 dan juga kecepatan awal pengereman.'
      ],
      pembahasan: [
        'Tahap 1: $v = a\\,t = 2 \\times 5 = 10\\ \\text{m/s}$ dan $x_1 = \\tfrac{1}{2} a t^2 = \\tfrac{1}{2} \\times 2 \\times 25 = 25\\ \\text{m}$.',
        'Tahap 2 (GLB): $x_2 = v\\,t = 10 \\times 10 = 100\\ \\text{m}$.',
        'Tahap 3: $0 = 10^2 + 2(-5)\\,x_3 \\Rightarrow x_3 = 10\\ \\text{m}$.',
        'Total $= 25 + 100 + 10 = 135\\ \\text{m}$.'
      ],
      tag: ['GLB', 'GLBB', 'multi-tahap'],
      ragu: false
    },
    {
      id: 'kin-gl-l3',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Sebuah bola dilempar vertikal ke atas dari tanah dengan laju $20\\ \\text{m/s}$. Dengan $g = 10\\ \\text{m/s}^2$ dan hambatan udara diabaikan, berapa waktu total sampai bola kembali ke tanah?',
      pilihan: [
        '$4\\ \\text{s}$',
        '$2\\ \\text{s}$',
        '$8\\ \\text{s}$',
        '$40\\ \\text{s}$'
      ],
      jawaban: 0,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Cari dulu waktu sampai titik tertinggi, saat $v = 0$.',
        'Gerak naik dan gerak turun memakan waktu yang sama.'
      ],
      pembahasan: [
        'Di titik tertinggi $v = 0$: $0 = 20 - 10\\,t \\Rightarrow t = 2\\ \\text{s}$.',
        'Gerak naik dan turun simetris, sehingga waktu total $= 2 \\times 2 = 4\\ \\text{s}$.',
        'Cek: $y = 20t - 5t^2 = 0 \\Rightarrow t(20 - 5t) = 0 \\Rightarrow t = 4\\ \\text{s}$.'
      ],
      tag: ['gerak vertikal'],
      ragu: false
    },
    {
      id: 'kin-gl-l4',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah benda jatuh bebas dari diam. Pada $1\\ \\text{s}$ terakhir sebelum menyentuh tanah, benda menempuh $25\\ \\text{m}$. Berapa tinggi awal benda? (gunakan $g = 10\\ \\text{m/s}^2$)',
      pilihan: [],
      jawaban: 45,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Misalkan waktu total jatuh adalah $T$. Jarak pada detik terakhir = jarak sampai $T$ dikurangi jarak sampai $T - 1$.',
        '$\\tfrac{1}{2} g T^2 - \\tfrac{1}{2} g (T-1)^2 = 25$.'
      ],
      pembahasan: [
        'Jarak pada 1 s terakhir: $5T^2 - 5(T-1)^2 = 25$.',
        'Sederhanakan: $5(2T - 1) = 25 \\Rightarrow T = 3\\ \\text{s}$.',
        'Tinggi awal $h = 5T^2 = 5 \\times 9 = 45\\ \\text{m}$.'
      ],
      tag: ['jatuh bebas', 'aljabar'],
      ragu: false
    },
    {
      id: 'kin-gl-l5',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Mobil A melaju dengan kecepatan tetap $20\\ \\text{m/s}$. Saat melewati sebuah pos, mobil B yang mula-mula diam di pos itu mulai bergerak searah dengan percepatan tetap $2\\ \\text{m/s}^2$. Pada jarak berapa dari pos mobil B menyusul mobil A?',
      pilihan: [],
      jawaban: 400,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Saat B menyusul A, jarak keduanya dari pos sama.',
        'Samakan $20\\,t$ (GLB) dengan $\\tfrac{1}{2} \\times 2 \\times t^2$ (GLBB dari diam).'
      ],
      pembahasan: [
        '$x_A = 20t$ (GLB) dan $x_B = \\tfrac{1}{2}(2)\\,t^2 = t^2$ (GLBB dari diam).',
        'Menyusul saat $20t = t^2 \\Rightarrow t = 20\\ \\text{s}$ (selain $t = 0$).',
        'Jarak dari pos: $x = 20 \\times 20 = 400\\ \\text{m}$.'
      ],
      tag: ['GLB', 'GLBB', 'kejar-kejaran'],
      ragu: false
    },

    /* ===================== EXPERT ===================== */
    {
      id: 'kin-gl-e1',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah partikel mula-mula diam di $x = 0$. Percepatannya tidak tetap: $a(t) = 6t$, dengan $a$ dalam $\\text{m/s}^2$ dan $t$ dalam sekon. Berapa posisi partikel pada $t = 3\\ \\text{s}$?',
      pilihan: [],
      jawaban: 27,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan tidak tetap, jadi rumus GLBB tidak boleh dipakai. Gunakan integral.',
        '$v = \\int a\\,dt$ lalu $x = \\int v\\,dt$, dengan syarat awal $v(0) = 0$ dan $x(0) = 0$.'
      ],
      pembahasan: [
        '$v(t) = \\int 6t\\,dt = 3t^2 + C$. Karena $v(0) = 0$, maka $C = 0$.',
        '$x(t) = \\int 3t^2\\,dt = t^3 + D$. Karena $x(0) = 0$, maka $D = 0$.',
        '$x(3) = 3^3 = 27\\ \\text{m}$.'
      ],
      tag: ['kalkulus', 'percepatan tidak tetap'],
      ragu: false
    },
    {
      id: 'kin-gl-e2',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Batu A dijatuhkan dari diam dari puncak menara setinggi $80\\ \\text{m}$. Tepat $1\\ \\text{s}$ kemudian, batu B dilempar lurus ke bawah dari puncak yang sama dengan laju awal $v_0$ sehingga kedua batu tiba di tanah bersamaan. Berapa $v_0$? (gunakan $g = 10\\ \\text{m/s}^2$, hambatan udara diabaikan)',
      pilihan: [],
      jawaban: 11.667,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Cari waktu jatuh batu A. Batu B bergerak 1 s lebih singkat.',
        'Untuk batu B: $80 = v_0\\,t_B + \\tfrac{1}{2} g\\,t_B^2$.'
      ],
      pembahasan: [
        'Batu A: $80 = 5\\,t_A^2 \\Rightarrow t_A = 4\\ \\text{s}$.',
        'Batu B bergerak selama $t_B = 4 - 1 = 3\\ \\text{s}$.',
        '$80 = 3v_0 + 5 \\times 3^2 = 3v_0 + 45 \\Rightarrow v_0 = \\dfrac{35}{3}$.',
        '$v_0 \\approx 11{,}67\\ \\text{m/s}$.'
      ],
      tag: ['jatuh bebas', 'dua benda'],
      ragu: false
    },
    {
      id: 'kin-gl-e3',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Posisi sebuah partikel pada lintasan lurus dinyatakan $x(t) = t^3 - 6t^2 + 9t$, dengan $x$ dalam meter dan $t$ dalam sekon. Berapa jarak total (bukan perpindahan) yang ditempuh partikel dari $t = 0$ sampai $t = 4\\ \\text{s}$?',
      pilihan: [],
      jawaban: 12,
      satuan: 'm',
      toleransi: 0.02,
      petunjuk: [
        'Cari kapan kecepatan nol: $v = dx/dt = 0$. Di situ partikel berbalik arah.',
        'Hitung posisi di $t = 0$, di tiap titik balik, dan di $t = 4\\ \\text{s}$, lalu jumlahkan nilai mutlak tiap segmen.'
      ],
      pembahasan: [
        '$v = \\dfrac{dx}{dt} = 3t^2 - 12t + 9 = 3(t-1)(t-3)$, sehingga $v = 0$ pada $t = 1\\ \\text{s}$ dan $t = 3\\ \\text{s}$.',
        'Posisi: $x(0) = 0$, $x(1) = 4$, $x(3) = 0$, $x(4) = 4$ (dalam meter).',
        'Jarak total: $|4 - 0| + |0 - 4| + |4 - 0| = 12\\ \\text{m}$. Perpindahannya hanya $4\\ \\text{m}$.'
      ],
      tag: ['kalkulus', 'jarak vs perpindahan'],
      ragu: false
    },
    {
      id: 'kin-gl-e4',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Dua bola identik dilempar pada saat yang sama dari atap gedung: bola P lurus ke atas dengan laju $10\\ \\text{m/s}$ dan bola Q lurus ke bawah dengan laju $10\\ \\text{m/s}$. Hambatan udara diabaikan. Bagaimana laju kedua bola ketika tiba di tanah?',
      pilihan: [
        'Bola P lebih cepat',
        'Kedua bola tiba dengan laju yang sama',
        'Bola Q lebih cepat',
        'Tidak dapat ditentukan tanpa mengetahui massa bola'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Bandingkan laju bola P tepat saat ia kembali ke ketinggian atap.',
        '$v^2 = v_0^2 + 2g\\,h$ tidak memuat arah gerak awal.'
      ],
      pembahasan: [
        'Bola P naik, berhenti, lalu turun. Saat kembali ke ketinggian atap, lajunya kembali $10\\ \\text{m/s}$ ke bawah (gerak naik dan turun simetris).',
        'Sejak titik itu P dan Q berada dalam kondisi yang sama: laju awal $10\\ \\text{m/s}$ ke bawah dari ketinggian yang sama.',
        'Lewat $v^2 = v_0^2 + 2g\\,h$, laju akhir keduanya sama. Massa tidak ikut menentukan.'
      ],
      tag: ['gerak vertikal', 'konsep'],
      ragu: false
    },
    {
      id: 'kin-gl-e5',
      bab: 'kinematika',
      subbab: 'gerak-lurus',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah benda bergerak lurus dengan percepatan tetap. Pada $2\\ \\text{s}$ pertama ia menempuh $10\\ \\text{m}$, dan pada $2\\ \\text{s}$ berikutnya ia menempuh $18\\ \\text{m}$. Berapa percepatannya?',
      pilihan: [],
      jawaban: 2,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Tulis jarak setelah 2 s dan setelah 4 s dengan $x = v_0\\,t + \\tfrac{1}{2} a t^2$.',
        'Jarak 4 s pertama adalah $10 + 18 = 28\\ \\text{m}$. Eliminasi $v_0$.'
      ],
      pembahasan: [
        'Setelah 2 s: $10 = 2v_0 + 2a$.',
        'Setelah 4 s: $28 = 4v_0 + 8a$.',
        'Kalikan persamaan pertama dengan 2: $20 = 4v_0 + 4a$. Kurangkan dari persamaan kedua: $8 = 4a \\Rightarrow a = 2\\ \\text{m/s}^2$.',
        'Cek: $v_0 = 3\\ \\text{m/s}$, dan jarak pada 2 s kedua $= 28 - 10 = 18\\ \\text{m}$ sesuai soal.'
      ],
      tag: ['GLBB', 'sistem persamaan'],
      ragu: false
    },

    /* ============ GERAK MELINGKAR: PEMULA ============ */
    {
      id: 'kin-gm-p1',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah kipas angin berputar dengan frekuensi $25\\ \\text{Hz}$. Berapa periode putarannya?',
      pilihan: [],
      jawaban: 0.04,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Periode adalah waktu yang dibutuhkan untuk satu putaran penuh.',
        'Gunakan $T = 1/f$.'
      ],
      pembahasan: [
        'Frekuensi $25\\ \\text{Hz}$ artinya 25 putaran tiap sekon, jadi satu putaran memakan waktu sepersekian sekon.',
        '$T = \\dfrac{1}{f} = \\dfrac{1}{25} = 0{,}04\\ \\text{s}$.'
      ],
      tag: ['periode', 'frekuensi'],
      ragu: false
    },
    {
      id: 'kin-gm-p2',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Sebuah titik di tepi roda berjari-jari $0{,}5\\ \\text{m}$ berputar dengan kecepatan sudut $4\\ \\text{rad/s}$. Berapa laju linear titik itu?',
      pilihan: [
        '$0{,}125\\ \\text{m/s}$',
        '$4{,}5\\ \\text{m/s}$',
        '$2\\ \\text{m/s}$',
        '$8\\ \\text{m/s}$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Laju linear titik di tepi roda dihitung dari kecepatan sudut dan jari-jari.',
        'Gunakan $v = \\omega\\,r$.'
      ],
      pembahasan: [
        'Diketahui $\\omega = 4\\ \\text{rad/s}$ dan $r = 0{,}5\\ \\text{m}$.',
        '$v = \\omega\\,r = 4 \\times 0{,}5 = 2\\ \\text{m/s}$.'
      ],
      tag: ['laju linear'],
      ragu: false
    },
    {
      id: 'kin-gm-p3',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'pemula',
      tipe: 'angka',
      pertanyaan: 'Sebuah mobil mainan bergerak melingkar beraturan dengan laju $3\\ \\text{m/s}$ pada lintasan berjari-jari $0{,}9\\ \\text{m}$. Berapa percepatan sentripetalnya?',
      pilihan: [],
      jawaban: 10,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan sentripetal dihitung dari laju dan jari-jari lintasan.',
        'Gunakan $a_s = v^2 / r$.'
      ],
      pembahasan: [
        'Diketahui $v = 3\\ \\text{m/s}$ dan $r = 0{,}9\\ \\text{m}$.',
        '$a_s = \\dfrac{v^2}{r} = \\dfrac{3^2}{0{,}9} = \\dfrac{9}{0{,}9} = 10\\ \\text{m/s}^2$.'
      ],
      tag: ['percepatan sentripetal'],
      ragu: false
    },
    {
      id: 'kin-gm-p4',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'pemula',
      tipe: 'isian',
      pertanyaan: 'Percepatan sentripetal pada gerak melingkar beraturan selalu mengarah ke ... lingkaran. (tulis satu kata)',
      pilihan: [],
      jawaban: ['pusat'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Kata "sentripetal" berarti "mencari pusat".',
        'Arahnya tegak lurus terhadap kecepatan.'
      ],
      pembahasan: [
        'Kata sentripetal berarti mencari pusat, jadi arahnya menuju pusat lingkaran.',
        'Arah ini selalu tegak lurus terhadap kecepatan, sehingga hanya mengubah arah gerak, bukan lajunya.'
      ],
      tag: ['percepatan sentripetal', 'istilah'],
      ragu: false
    },
    {
      id: 'kin-gm-p5',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'pemula',
      tipe: 'pg',
      pertanyaan: 'Satuan SI untuk kecepatan sudut adalah ...',
      pilihan: [
        'rad',
        'm/s',
        'Hz',
        'rad/s'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Kecepatan sudut adalah sudut dibagi waktu.',
        'Sudut dalam SI diukur dalam radian.'
      ],
      pembahasan: [
        '$\\omega = \\Delta\\theta / \\Delta t$, dengan sudut dalam radian dan waktu dalam sekon.',
        'Jadi satuannya rad/s. Hz adalah satuan frekuensi, dan m/s adalah satuan laju linear.'
      ],
      tag: ['satuan', 'kecepatan sudut'],
      ragu: false
    },

    /* ============ GERAK MELINGKAR: MENENGAH ============ */
    {
      id: 'kin-gm-m1',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah roda berputar $120$ putaran per menit (rpm). Berapa kecepatan sudutnya dalam rad/s?',
      pilihan: [],
      jawaban: 12.566,
      satuan: 'rad/s',
      toleransi: 0.02,
      petunjuk: [
        'Ubah dulu: 120 putaran per menit sama dengan berapa putaran per sekon?',
        'Satu putaran sama dengan $2\\pi$ rad, jadi $\\omega = 2\\pi f$.'
      ],
      pembahasan: [
        'Frekuensi: $f = \\dfrac{120}{60} = 2\\ \\text{Hz}$.',
        '$\\omega = 2\\pi f = 2\\pi \\times 2 = 4\\pi \\approx 12{,}57\\ \\text{rad/s}$.'
      ],
      tag: ['kecepatan sudut', 'konversi satuan'],
      ragu: false
    },
    {
      id: 'kin-gm-m2',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Sebuah batu diikat pada tali sepanjang $0{,}4\\ \\text{m}$ lalu diputar mendatar dengan frekuensi $2{,}5\\ \\text{Hz}$. Berapa laju linear batu?',
      pilihan: [],
      jawaban: 6.283,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Cari kecepatan sudut dari frekuensi: $\\omega = 2\\pi f$.',
        'Lalu ubah ke laju linear dengan $v = \\omega\\,r$.'
      ],
      pembahasan: [
        '$\\omega = 2\\pi f = 2\\pi \\times 2{,}5 = 5\\pi\\ \\text{rad/s}$.',
        '$v = \\omega\\,r = 5\\pi \\times 0{,}4 = 2\\pi \\approx 6{,}28\\ \\text{m/s}$.'
      ],
      tag: ['frekuensi', 'laju linear'],
      ragu: false
    },
    {
      id: 'kin-gm-m3',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'menengah',
      tipe: 'pg',
      pertanyaan: 'Titik A dan titik B berada pada sebuah piringan yang berputar beraturan. Titik A berjarak $10\\ \\text{cm}$ dari pusat dan titik B berjarak $20\\ \\text{cm}$ dari pusat. Pernyataan yang benar adalah ...',
      pilihan: [
        '$\\omega_B = 2\\omega_A$ dan $v_A = v_B$',
        '$\\omega_A = \\omega_B$ dan $v_A = v_B$',
        '$\\omega_A = \\omega_B$ dan $v_B = 2v_A$',
        '$\\omega_B = \\tfrac{1}{2}\\omega_A$ dan $v_B = 2v_A$'
      ],
      jawaban: 2,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Titik-titik pada satu piringan menyelesaikan satu putaran dalam waktu yang sama.',
        'Gunakan $v = \\omega\\,r$ dengan $\\omega$ yang sama.'
      ],
      pembahasan: [
        'Semua titik pada piringan yang sama berputar dengan kecepatan sudut yang sama: $\\omega_A = \\omega_B$.',
        '$v = \\omega\\,r$, jadi laju sebanding dengan jarak dari pusat. Karena $r_B = 2r_A$, maka $v_B = 2v_A$.'
      ],
      tag: ['roda sepusat'],
      ragu: false
    },
    {
      id: 'kin-gm-m4',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'menengah',
      tipe: 'angka',
      pertanyaan: 'Dua roda gigi dihubungkan oleh sebuah rantai. Roda A berjari-jari $10\\ \\text{cm}$ berputar dengan kecepatan sudut $30\\ \\text{rad/s}$. Berapa kecepatan sudut roda B yang berjari-jari $25\\ \\text{cm}$?',
      pilihan: [],
      jawaban: 12,
      satuan: 'rad/s',
      toleransi: 0.02,
      petunjuk: [
        'Roda yang dihubungkan rantai punya laju linear yang sama di tepinya.',
        'Samakan $\\omega_A r_A = \\omega_B r_B$.'
      ],
      pembahasan: [
        'Laju rantai sama di kedua roda: $v = \\omega_A r_A = 30 \\times 0{,}10 = 3\\ \\text{m/s}$.',
        '$\\omega_B = \\dfrac{v}{r_B} = \\dfrac{3}{0{,}25} = 12\\ \\text{rad/s}$.'
      ],
      tag: ['roda berhubungan'],
      ragu: false
    },
    {
      id: 'kin-gm-m5',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'menengah',
      tipe: 'isian',
      pertanyaan: 'Laju yang dilengkapi dengan arah gerak disebut ... (tulis satu kata). Pada gerak melingkar beraturan besaran ini tidak tetap, walaupun lajunya tetap.',
      pilihan: [],
      jawaban: ['kecepatan'],
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Laju adalah besaran skalar. Besaran yang dicari adalah padanan vektornya.',
        'Apa yang terjadi pada arah gerak benda di lintasan melingkar?'
      ],
      pembahasan: [
        'Laju adalah besaran skalar yang hanya memuat besar, dan pada GMB nilainya tetap.',
        'Kecepatan adalah vektor yang memuat arah. Arahnya terus berubah mengikuti lingkaran, jadi kecepatan tidak tetap dan benda memiliki percepatan.'
      ],
      tag: ['laju vs kecepatan', 'miskonsepsi'],
      ragu: false
    },

    /* ============ GERAK MELINGKAR: LANJUT ============ */
    {
      id: 'kin-gm-l1',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Grafik kecepatan sudut terhadap waktu sebuah roda: dari $t = 0$ sampai $4\\ \\text{s}$ naik beraturan dari $0$ menjadi $12\\ \\text{rad/s}$; dari $4\\ \\text{s}$ sampai $9\\ \\text{s}$ tetap $12\\ \\text{rad/s}$; dari $9\\ \\text{s}$ sampai $12\\ \\text{s}$ turun beraturan sampai berhenti. Berapa sudut total yang ditempuh roda?',
      pilihan: [],
      jawaban: 102,
      satuan: 'rad',
      toleransi: 0.02,
      petunjuk: [
        'Sudut yang ditempuh sama dengan luas di bawah grafik $\\omega$–$t$.',
        'Pecah menjadi segitiga, persegi panjang, dan segitiga.'
      ],
      pembahasan: [
        'Tahap 1 (segitiga): $\\tfrac{1}{2} \\times 4 \\times 12 = 24\\ \\text{rad}$.',
        'Tahap 2 (persegi panjang): $5 \\times 12 = 60\\ \\text{rad}$.',
        'Tahap 3 (segitiga): $\\tfrac{1}{2} \\times 3 \\times 12 = 18\\ \\text{rad}$.',
        'Total $= 24 + 60 + 18 = 102\\ \\text{rad}$.'
      ],
      tag: ['grafik omega-t', 'luas grafik'],
      ragu: false
    },
    {
      id: 'kin-gm-l2',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah roda berjari-jari $0{,}5\\ \\text{m}$ mula-mula diam, lalu dipercepat dengan percepatan sudut tetap $2\\ \\text{rad/s}^2$. Berapa percepatan sentripetal sebuah titik di tepi roda pada $t = 6\\ \\text{s}$?',
      pilihan: [],
      jawaban: 72,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Cari dulu kecepatan sudut pada $t = 6\\ \\text{s}$ dengan $\\omega = \\omega_0 + \\alpha t$.',
        'Lalu pakai $a_s = \\omega^2 r$.'
      ],
      pembahasan: [
        'Roda mula-mula diam, jadi $\\omega_0 = 0$ dan $\\omega = \\alpha\\,t = 2 \\times 6 = 12\\ \\text{rad/s}$.',
        '$a_s = \\omega^2 r = 12^2 \\times 0{,}5 = 144 \\times 0{,}5 = 72\\ \\text{m/s}^2$.'
      ],
      tag: ['GMBB', 'percepatan sentripetal'],
      ragu: false
    },
    {
      id: 'kin-gm-l3',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'lanjut',
      tipe: 'pg',
      pertanyaan: 'Pada gerak melingkar beraturan dengan jari-jari tetap, grafik percepatan sentripetal $a_s$ terhadap kuadrat laju $v^2$ berbentuk ...',
      pilihan: [
        'parabola terbuka ke atas',
        'garis lurus melalui titik asal dengan kemiringan $1/r$',
        'garis lurus mendatar',
        'hiperbola'
      ],
      jawaban: 1,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Tulis $a_s$ sebagai fungsi dari $v^2$ dengan $r$ konstan.',
        'Bandingkan dengan bentuk $y = m\\,x$.'
      ],
      pembahasan: [
        '$a_s = \\dfrac{v^2}{r} = \\dfrac{1}{r}\\,v^2$, jadi $a_s$ sebanding dengan $v^2$ untuk $r$ tetap.',
        'Hubungan sebanding berbentuk $y = m\\,x$, yaitu garis lurus melalui titik asal dengan kemiringan $m = 1/r$.'
      ],
      tag: ['grafik', 'percepatan sentripetal'],
      ragu: false
    },
    {
      id: 'kin-gm-l4',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Pedal sepeda memutar gir depan berjari-jari $10\\ \\text{cm}$ dengan kecepatan $60\\ \\text{rpm}$. Rantai menghubungkannya ke gir belakang berjari-jari $4\\ \\text{cm}$, yang sepusat dengan roda belakang berjari-jari $35\\ \\text{cm}$. Berapa laju sepeda?',
      pilihan: [],
      jawaban: 5.498,
      satuan: 'm/s',
      toleransi: 0.02,
      petunjuk: [
        'Gir depan dan gir belakang dihubungkan rantai, jadi laju rantainya sama. Gir belakang dan roda belakang sepusat, jadi $\\omega$-nya sama.',
        'Urutannya: $\\omega_{\\text{depan}} \\to v_{\\text{rantai}} \\to \\omega_{\\text{belakang}} \\to v_{\\text{sepeda}}$.'
      ],
      pembahasan: [
        '$60\\ \\text{rpm} = 1\\ \\text{Hz}$, sehingga $\\omega_{\\text{depan}} = 2\\pi\\ \\text{rad/s}$ dan $v_{\\text{rantai}} = 2\\pi \\times 0{,}10 \\approx 0{,}628\\ \\text{m/s}$.',
        'Gir belakang: $\\omega_{\\text{belakang}} = \\dfrac{v_{\\text{rantai}}}{0{,}04} \\approx 15{,}71\\ \\text{rad/s}$.',
        'Roda belakang sepusat dengan gir belakang: $v_{\\text{sepeda}} = \\omega_{\\text{belakang}} \\times 0{,}35 \\approx 5{,}50\\ \\text{m/s}$.'
      ],
      tag: ['roda berhubungan', 'roda sepusat', 'multi-tahap'],
      ragu: false
    },
    {
      id: 'kin-gm-l5',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'lanjut',
      tipe: 'angka',
      pertanyaan: 'Sebuah piringan berputar dengan kecepatan sudut $4\\ \\text{rad/s}$, lalu diperlambat beraturan dengan perlambatan sudut $0{,}5\\ \\text{rad/s}^2$ sampai berhenti. Berapa banyak putaran yang dilakukan piringan selama perlambatan? (jawab dalam putaran)',
      pilihan: [],
      jawaban: 2.546,
      satuan: 'putaran',
      toleransi: 0.02,
      petunjuk: [
        'Waktu tidak diketahui, jadi pakai $\\omega^2 = \\omega_0^2 + 2\\alpha\\,\\theta$ dengan $\\omega = 0$.',
        'Hasilnya dalam radian. Bagi dengan $2\\pi$ untuk mendapatkan jumlah putaran.'
      ],
      pembahasan: [
        'Perlambatan berarti $\\alpha = -0{,}5\\ \\text{rad/s}^2$, dengan $\\omega_0 = 4\\ \\text{rad/s}$ dan $\\omega = 0$.',
        '$0 = 4^2 + 2(-0{,}5)\\,\\theta \\Rightarrow \\theta = 16\\ \\text{rad}$.',
        'Jumlah putaran $= \\dfrac{16}{2\\pi} \\approx 2{,}55$ putaran.'
      ],
      tag: ['GMBB', 'perlambatan sudut'],
      ragu: false
    },

    /* ============ GERAK MELINGKAR: EXPERT ============ */
    {
      id: 'kin-gm-e1',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah roda berjari-jari $0{,}5\\ \\text{m}$ berputar dari diam dengan kecepatan sudut $\\omega(t) = 3t^2$ ($\\omega$ dalam rad/s, $t$ dalam sekon). Berapa besar percepatan total sebuah titik di tepi roda pada $t = 2\\ \\text{s}$?',
      pilihan: [],
      jawaban: 72.25,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan total adalah jumlah vektor percepatan sentripetal dan percepatan tangensial, yang saling tegak lurus.',
        '$\\alpha = d\\omega/dt$, $a_t = \\alpha r$, $a_s = \\omega^2 r$, lalu $a = \\sqrt{a_s^2 + a_t^2}$.'
      ],
      pembahasan: [
        '$\\omega(2) = 3 \\times 4 = 12\\ \\text{rad/s}$ dan $\\alpha = \\dfrac{d\\omega}{dt} = 6t = 12\\ \\text{rad/s}^2$.',
        '$a_s = \\omega^2 r = 144 \\times 0{,}5 = 72\\ \\text{m/s}^2$ dan $a_t = \\alpha r = 12 \\times 0{,}5 = 6\\ \\text{m/s}^2$.',
        '$a = \\sqrt{72^2 + 6^2} = \\sqrt{5220} \\approx 72{,}25\\ \\text{m/s}^2$.'
      ],
      tag: ['kalkulus', 'percepatan total', 'GMBB'],
      ragu: false
    },
    {
      id: 'kin-gm-e2',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Rotasi Bumi (periode $24\\ \\text{jam}$) membuat sebuah titik di khatulistiwa bergerak melingkar dengan jari-jari $6{,}4 \\times 10^{6}\\ \\text{m}$. Berapa percepatan sentripetal titik itu? (jawab dalam $\\text{m/s}^2$)',
      pilihan: [],
      jawaban: 0.03385,
      satuan: 'm/s²',
      toleransi: 0.02,
      petunjuk: [
        'Ubah periode ke sekon: $T = 24 \\times 3600\\ \\text{s}$.',
        'Hitung $\\omega = 2\\pi / T$, lalu $a_s = \\omega^2 r$.'
      ],
      pembahasan: [
        '$T = 24 \\times 3600 = 86\\,400\\ \\text{s}$, sehingga $\\omega = \\dfrac{2\\pi}{86\\,400} \\approx 7{,}27 \\times 10^{-5}\\ \\text{rad/s}$.',
        '$a_s = \\omega^2 r \\approx (7{,}27 \\times 10^{-5})^2 \\times 6{,}4 \\times 10^{6}$.',
        '$a_s \\approx 0{,}0338\\ \\text{m/s}^2$, atau sekitar $0{,}3\\%$ dari $g$.'
      ],
      tag: ['percepatan sentripetal', 'aplikasi'],
      ragu: false
    },
    {
      id: 'kin-gm-e3',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Pada pukul 12.00 jarum menit dan jarum jam sebuah jam dinding berimpit. Setelah berapa menit keduanya berimpit lagi untuk pertama kalinya?',
      pilihan: [],
      jawaban: 65.4545,
      satuan: 'menit',
      toleransi: 0.02,
      petunjuk: [
        'Jarum menit berputar satu putaran tiap 60 menit, jarum jam satu putaran tiap 720 menit.',
        'Berimpit lagi saat jarum menit telah menempuh tepat satu putaran lebih banyak daripada jarum jam.'
      ],
      pembahasan: [
        '$\\omega_m = \\dfrac{2\\pi}{60}$ dan $\\omega_j = \\dfrac{2\\pi}{720}$ (dalam rad per menit).',
        'Berimpit lagi saat selisih sudutnya satu putaran: $(\\omega_m - \\omega_j)\\,t = 2\\pi$.',
        '$t = \\dfrac{1}{\\tfrac{1}{60} - \\tfrac{1}{720}} = \\dfrac{720}{11} \\approx 65{,}45\\ \\text{menit}$.'
      ],
      tag: ['kecepatan sudut relatif'],
      ragu: false
    },
    {
      id: 'kin-gm-e4',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'expert',
      tipe: 'pg',
      pertanyaan: 'Sebuah partikel bergerak pada lintasan lingkaran dengan laju yang bertambah beraturan. Vektor percepatan total partikel itu ...',
      pilihan: [
        'sejajar dengan kecepatan (menyinggung lintasan)',
        'menuju pusat lingkaran',
        'tegak lurus bidang lingkaran',
        'memiliki komponen menuju pusat dan komponen menyinggung lintasan'
      ],
      jawaban: 3,
      satuan: '',
      toleransi: 0,
      petunjuk: [
        'Ada dua alasan percepatan: arah kecepatan berubah dan besar kecepatan berubah.',
        'Perubahan arah menghasilkan $a_s = v^2/r$, perubahan laju menghasilkan $a_t = dv/dt$.'
      ],
      pembahasan: [
        'Karena lintasannya lingkaran, arah kecepatan berubah terus. Ini menghasilkan percepatan sentripetal $a_s = v^2/r$ menuju pusat.',
        'Karena lajunya bertambah, ada juga percepatan tangensial $a_t = dv/dt$ yang menyinggung lintasan.',
        'Percepatan total adalah jumlah vektor keduanya: miring, tidak murni menuju pusat dan tidak murni menyinggung lintasan. Kalau lajunya tetap (GMB), $a_t = 0$ dan hanya $a_s$ yang tersisa.'
      ],
      tag: ['konsep', 'percepatan total'],
      ragu: false
    },
    {
      id: 'kin-gm-e5',
      bab: 'kinematika',
      subbab: 'gerak-melingkar',
      tingkat: 'expert',
      tipe: 'angka',
      pertanyaan: 'Sebuah partikel bergerak pada lintasan lingkaran berjari-jari $2\\ \\text{m}$ dengan laju $v(t) = 3t$ ($v$ dalam m/s, $t$ dalam sekon). Pada $t$ berapa percepatan sentripetalnya sama dengan percepatan tangensialnya?',
      pilihan: [],
      jawaban: 0.8165,
      satuan: 's',
      toleransi: 0.02,
      petunjuk: [
        'Percepatan tangensial $a_t = dv/dt$ dan percepatan sentripetal $a_s = v^2/r$.',
        'Samakan keduanya, lalu selesaikan untuk $t$.'
      ],
      pembahasan: [
        '$a_t = \\dfrac{dv}{dt} = 3\\ \\text{m/s}^2$ (tetap).',
        '$a_s = \\dfrac{v^2}{r} = \\dfrac{(3t)^2}{2} = \\dfrac{9t^2}{2}$.',
        '$a_s = a_t \\Rightarrow \\dfrac{9t^2}{2} = 3 \\Rightarrow t^2 = \\dfrac{2}{3} \\Rightarrow t \\approx 0{,}816\\ \\text{s}$.'
      ],
      tag: ['kalkulus', 'percepatan tangensial'],
      ragu: false
    }
  ]
};
