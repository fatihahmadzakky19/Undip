import type { ZoneId } from './zones'

export interface HeritageBook {
  id: string
  title: string
  category: string
  period: string
  author: string
  description: string
  fullContent: string
  imagePath?: string
  source: string
  zone: ZoneId
  shelfType: 'wall' | 'island'
  shelfIndex: number
  spineColor: string
}

export const HERITAGE_BOOKS: HeritageBook[] = [
  // ==========================================
  // ZONA 1: THE ORIGIN OF UNDIP (1956–1961)
  // ==========================================
  {
    id: 'book-akta-notaris-1956',
    title: 'Akta Notaris Pendirian Yayasan Universitas Semarang (1956)',
    category: 'Arsip Hukum & Statuta Pendirian',
    period: '4 Desember 1956',
    author: 'Notaris Tan A Sioe / Dewan Pendiri Yayasan',
    description:
      'Salinan resmi akta notaris nomor 59 tertanggal 4 Desember 1956 yang mengesahkan berdirinya Yayasan Universitas Semarang.',
    fullContent:
      'Akta Notaris No. 59 yang dibuat di hadapan Notaris Tan A Sioe di Semarang merupakan landasan hukum formil pertama berdirinya Yayasan Universitas Semarang. Dokumen bersejarah ini ditandatangani oleh Mr. Soedarto, Mr. Dan Sulaiman, Mr. Imam Bardjo, Mr. Tan Tjing Hak, dan dr. Heyder bin Heyder. Akta ini menegaskan komitmen para pendiri untuk mendirikan perguruan tinggi swasta demi memenuhi aspirasi pendidikan pemuda-pemudi di Jawa Tengah.',
    source: 'Arsip Statuta Universitas Diponegoro & Lembaran Notaris 1956',
    zone: 1,
    shelfType: 'wall',
    shelfIndex: 0,
    spineColor: '#5c1d24',
  },
  {
    id: 'book-statuta-1957',
    title: 'Buku Statuta Perdana Universitas Semarang (1957)',
    category: 'Pedoman Tata Kelola & Statuta',
    period: 'Januari 1957',
    author: 'Senat Guru Besar & Pengurus Yayasan',
    description:
      'Buku pedoman tata kelola universitas pertama yang mengatur susunan fakultas, kurikulum, dan struktur pimpinan awal.',
    fullContent:
      'Statuta Perdana ini merumuskan visi universitas sebagai pusat pengembangan ilmu pengetahuan yang menjunjung tinggi kebudayaan nasional. Buku ini memuat peraturan tentang penerimaan mahasiswa angkatan pertama pada Fakultas Hukum dan Masyarakat serta Akademi Administrasi Negara, lengkap dengan tata tertib akademik dan lambang institusi.',
    source: 'Perpustakaan Pusat Undip — Seksi Koleksi Khusus & Langka',
    zone: 1,
    shelfType: 'wall',
    shelfIndex: 1,
    spineColor: '#0e2b47',
  },
  {
    id: 'book-pidato-imam-bardjo-1957',
    title: 'Naskah Pidato Pembukaan Kuliah Perdana Mr. Imam Bardjo (1957)',
    category: 'Orasi Ilmiah & Dokumen Dies',
    period: '9 Januari 1957',
    author: 'Mr. Imam Bardjo (Presiden Universitas)',
    description:
      'Transkrip orasi kebangsaan dalam peresmian pembukaan kuliah pertama di Gedung Panti Budaya Semarang.',
    fullContent:
      'Dalam pidato bersejarah di hadapan para tokoh masyarakat dan mahasiswa perdana pada 9 Januari 1957, Mr. Imam Bardjo menegaskan bahwa universitas ini didirikan bukan untuk kepentingan golongan atau kelompok tertentu, melainkan wadah ilmiah kepeloporan yang berakar pada semangat gotong royong dan kemandirian bangsa pasca-kemerdekaan.',
    source: 'Dokumentasi Arsip Sejarah Undip & Harian Kedaulatan Rakyat 1957',
    zone: 1,
    shelfType: 'wall',
    shelfIndex: 2,
    spineColor: '#1d3e26',
  },
  {
    id: 'book-risalah-sukarno-1960',
    title: 'Risalah Peresmian Nama Diponegoro oleh Presiden Sukarno (1960)',
    category: 'Dokumentasi Kenegaraan',
    period: '9 Januari 1960',
    author: 'Biro Penerangan RI & Rektorat Universitas Semarang',
    description:
      'Catatan autentik pidato Presiden Ir. Sukarno saat menganugerahkan nama Pangeran Diponegoro kepada universitas.',
    fullContent:
      'Saat menghadiri perayaan Dies Natalis ke-3 di Semarang pada 9 Januari 1960, Presiden Soekarno secara langsung menyarankan perubahan nama Universitas Semarang menjadi Universitas Diponegoro. Beliau berpesan agar segenap sivitas akademika mewarisi keberanian, kejujuran, dan tekad baja Pangeran Diponegoro dalam membela kedaulatan tanah air.',
    source: 'Biro Dokumentasi dan Arsip Sejarah Nasional Republik Indonesia',
    zone: 1,
    shelfType: 'island',
    shelfIndex: 0,
    spineColor: '#4a2d12',
  },

  // ==========================================
  // ZONA 2: THE GROWTH OF KNOWLEDGE (1962–1990s)
  // ==========================================
  {
    id: 'book-kurikulum-hukum-1962',
    title: 'Buku Kurikulum & Silabus Fakultas Hukum dan Masyarakat (1962)',
    category: 'Pengembangan Akademik Fakultas',
    period: '1962',
    author: 'Dewan Dosen Fakultas Hukum Undip',
    description:
      'Pedoman kurikulum pendidikan tinggi hukum perintis yang melahirkan Mazhab Hukum Progresif di Indonesia.',
    fullContent:
      'Buku kurikulum 1962 ini merupakan tonggak awal lahirnya tradisi keilmuan hukum di Undip. Memadukan teori hukum modern Belanda dengan hukum adat Indonesia dan sosiologi hukum, kurikulum ini menjadi fondasi bagi guru-guru besar ternama seperti Prof. Sudarto dan Prof. Satjipto Rahardjo dalam mengemukakan gagasan Hukum Progresif yang diakui secara internasional.',
    source: 'Perpustakaan Fakultas Hukum Universitas Diponegoro',
    zone: 2,
    shelfType: 'wall',
    shelfIndex: 0,
    spineColor: '#5c1d24',
  },
  {
    id: 'book-sejarah-teknik-1965',
    title: 'Buku Sejarah & Rintisan Fakultas Teknik Undip (1965)',
    category: 'Monograf Sejarah Fakultas',
    period: '1965',
    author: 'Ir. Jacob Rais & Panitia Pendiri Fakultas Teknik',
    description:
      'Catatan dokumentasi pendirian jurusan teknik sipil, mesin, arsitektur, dan kimia di Jawa Tengah.',
    fullContent:
      'Fakultas Teknik didirikan untuk menjawab kebutuhan pembangunan infrastruktur nasional. Buku ini merangkum perjuangan para insinyur muda dan dosen dalam mendirikan laboratorium pertama dengan peralatan swadaya serta kerja sama dengan berbagai badan infrastruktur pemerintah daerah.',
    source: 'Pusat Dokumentasi Fakultas Teknik Undip Tembalang',
    zone: 2,
    shelfType: 'wall',
    shelfIndex: 1,
    spineColor: '#0e2b47',
  },
  {
    id: 'book-orasi-sudarto-1967',
    title: 'Orasi Ilmiah Dies Natalis X: Wibawa Hukum & Keadilan (1967)',
    category: 'Pidato Guru Besar',
    period: '1967',
    author: 'Prof. Sudarto, S.H.',
    description:
      'Kumpulan pemikiran Prof. Sudarto mengenai hukum pidana dan pembaharuan sistem peradilan Indonesia.',
    fullContent:
      'Naskah orasi ilmiah ini disampaikan pada peringatan Dasawarsa Undip. Prof. Sudarto mengupas secara tajam arah pembaruan Kitab Undang-Undang Hukum Pidana (KUHP) nasional yang berpihak pada nilai-nilai keadilan sosial Pancasila, yang puluhan tahun kemudian menjadi rujukan utama kodifikasi hukum pidana Indonesia.',
    source: 'Arsip Senat Akademik Universitas Diponegoro',
    zone: 2,
    shelfType: 'wall',
    shelfIndex: 2,
    spineColor: '#1d3e26',
  },
  {
    id: 'book-monograf-kelautan-1978',
    title: 'Monograf Riset Oseanografi & Kelautan Tropis Pertama FPIK (1978)',
    category: 'Riset Sumber Daya Hayati & Maritim',
    period: '1978',
    author: 'Tim Ekspedisi Kelautan Undip & Stasiun Jepara',
    description:
      'Laporan ilmiah riset perikanan pantai dan biologi laut perintis di perairan Laut Jawa dan Teluk Awur.',
    fullContent:
      'Sebagai universitas yang mengemban Pola Ilmiah Pokok (PIP) Pengembangan Wilayah Pantai, monograf ini merupakan karya perintis riset kelautan tropis di Indonesia. Berisi dokumentasi keanekaragaman terumbu karang, oseanografi fisika pantai, dan budidaya perikanan air payau yang menjadi dasar pendirian Stasiun Riset Kelautan Jepara.',
    source: 'Fakultas Perikanan dan Ilmu Kelautan Undip',
    zone: 2,
    shelfType: 'island',
    shelfIndex: 0,
    spineColor: '#0a3d42',
  },
  {
    id: 'book-masterplan-tembalang-1988',
    title: 'Masterplan Kampus Tembalang: Transformasi Menuju Masa Depan (1988)',
    category: 'Perencanaan Arsitektur & Kawasan',
    period: '1988',
    author: 'Prof. Ir. Eko Budiharjo, M.Sc. & Tim Pembangunan Kampus',
    description:
      'Cetak biru arsitektur dan tata ruang perancangan kampus terpadu Tembalang seluas 180 hektar.',
    fullContent:
      'Masterplan 1988 mengintegrasikan konsep kampus hijau berwawasan lingkungan dengan tata ruang tropis modern. Disusun di bawah kepemimpinan arsitek terkemuka Prof. Eko Budiharjo, masterplan ini mengatur zonasi fakultas, hutan kampus, waduk resapan edukasi, dan poros pedestrian yang kini dinikmati puluhan ribu mahasiswa di Tembalang.',
    source: 'Badan Pengelola Kampus & Departemen Arsitektur Undip',
    zone: 2,
    shelfType: 'island',
    shelfIndex: 1,
    spineColor: '#4a2d12',
  },

  // ==========================================
  // ZONA 3: THE HERITAGE OF UNDIP
  // ==========================================
  {
    id: 'book-babad-diponegoro',
    title: 'Babad Diponegoro: Nilai Kepeloporan & Kejujuran Pangeran Diponegoro',
    category: 'Falsafah Nilai & Karakter Budaya',
    period: 'Koleksi Klasik Heritage',
    author: 'Kajian Sejarah Budaya Pusat Studi Undip',
    description:
      'Kajian komprehensif atas naskah autobiografi Pangeran Diponegoro yang diakui sebagai UNESCO Memory of the World.',
    fullContent:
      'Universitas Diponegoro mengadopsi nama sang Pangeran bukan sekadar sebagai simbol kepahlawanan militer, melainkan keteladanan moral. Buku ini membedah nilai-nilai luhur Sang Pangeran: ketaatan beragama, kejujuran tanpa pamrih, kepedulian terhadap rakyat jelata, dan keberanian membela kebenaran, yang dituangkan ke dalam moto universitas: "Jujur, Berani, Peduli".',
    source: 'Pusat Kajian Kebudayaan & Nilai-Nilai Diponegoro',
    zone: 3,
    shelfType: 'wall',
    shelfIndex: 0,
    spineColor: '#5c1d24',
  },
  {
    id: 'book-orasi-guru-besar-heritage',
    title: 'Koleksi Naskah Pidato Pengukuhan Guru Besar Undip (1970–1995)',
    category: 'Kompilasi Pemikiran Akademik',
    period: '1970–1995',
    author: 'Dewan Guru Besar Universitas Diponegoro',
    description:
      'Antologi pemikiran orasi pengukuhan para guru besar perintis dari berbagai bidang keilmuan.',
    fullContent:
      'Buku ini menghimpun naskah orasi ilmiah bersejarah dari tokoh-tokoh besar Undip, mencakup pemikiran Prof. Moeljono S. Trastotenojo di bidang kesehatan anak dan gizi masyarakat, Prof. Muladi di bidang hak asasi manusia dan pembaruan hukum pidana, serta Prof. Soedarto mengenai politik hukum nasional.',
    source: 'Sekretariat Dewan Guru Besar Undip',
    zone: 3,
    shelfType: 'wall',
    shelfIndex: 1,
    spineColor: '#0e2b47',
  },
  {
    id: 'book-skripsi-perdana-1963',
    title: 'Arsip Skripsi dan Ujian Sarjana Perdana Mahasiswa Undip (1963)',
    category: 'Dokumentasi Kelulusan Bersejarah',
    period: '1963',
    author: 'Lembaga Pengajaran & Senat Mahasiswa Undip',
    description:
      'Dokumentasi skripsi dan tesis tertua yang dipertahankan dalam sidang yudisium sarjana pertama Undip.',
    fullContent:
      'Menampilkan naskah ketik manual asli karya mahasiswa angkatan pertama Fakultas Hukum dan Fakultas Ekonomi. Memuat tanda tangan basah para penguji legendaris dan catatan penilaian dewan yudisium yang menandai lahirnya angkatan pertama lulusan sarjana bergelar dari almamater Universitas Diponegoro.',
    source: 'Ruang Arsip Khusus Gedung Widya Puraya Undip',
    zone: 3,
    shelfType: 'island',
    shelfIndex: 0,
    spineColor: '#1d3e26',
  },

  // ==========================================
  // ZONA 4: UNDIP TODAY
  // ==========================================
  {
    id: 'book-world-class-university-2024',
    title: 'Undip World Class University: Strategic Road to Global Excellence (2024)',
    category: 'Strategi Institusi & Akreditasi Global',
    period: '2024',
    author: 'Kantor Pemeringkatan & Kerja Sama Internasional Undip',
    description:
      'Buku laporan strategis transformasi Undip menuju jajaran 500 besar perguruan tinggi terbaik dunia.',
    fullContent:
      'Buku ini memaparkan lompatan reputasi internasional Universitas Diponegoro dalam QS World University Rankings, QS Asia Rankings, dan THE Impact Rankings. Menguraikan penguatan kerja sama riset internasional dengan lebih dari 150 mitra universitas dunia di Eropa, Asia, Amerika, dan Australia, serta peningkatan mobilitas mahasiswa global.',
    source: 'Kantor Reputasi & Pemeringkatan Internasional Undip',
    zone: 4,
    shelfType: 'wall',
    shelfIndex: 0,
    spineColor: '#0e2b47',
  },
  {
    id: 'book-scopus-paten-undip-2024',
    title: 'Kompilasi Riset Terindeks Scopus & Paten Hilirisasi Inovasi Undip',
    category: 'Publikasi Ilmiah & Inovasi Industri',
    period: '2024',
    author: 'Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM)',
    description:
      'Katalog tahunan ribuan publikasi bereputasi tinggi Q1/Q2 dan portofolio paten komersial dosen Undip.',
    fullContent:
      'Menyajikan rekam jejak riset terapan Undip di bidang kesehatan maritim, pangan fungsional, material maju rekayasa nanopartikel, dan teknologi kedokteran. Berisi dokumentasi paten yang telah dihilirkan ke industri nasional dan dimanfaatkan langsung oleh masyarakat luas.',
    source: 'Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM Undip)',
    zone: 4,
    shelfType: 'wall',
    shelfIndex: 1,
    spineColor: '#1d3e26',
  },
  {
    id: 'book-rsnd-medical-innovation',
    title: 'Pioneering Medical Innovations: RSND & Fakultas Kedokteran Undip',
    category: 'Riset Kesehatan & Rumah Sakit Pendidikan',
    period: '2024',
    author: 'Tim Klinisi & Peneliti Rumah Sakit Nasional Diponegoro',
    description:
      'Catatan inovasi klinis, layanan stem cell, robotika rehabilitasi medik, dan penanganan kanker di RSND.',
    fullContent:
      'Mengulas keberhasilan Rumah Sakit Nasional Diponegoro (RSND) sebagai rumah sakit perguruan tinggi negeri terdepan di Indonesia. Menggabungkan pelayanan medis prima dengan pendidikan dokter spesialis dan riset klinis translaksional yang mendapatkan pengakuan akreditasi paripurna KARS.',
    source: 'Rumah Sakit Nasional Diponegoro (RSND) Kampus Tembalang',
    zone: 4,
    shelfType: 'island',
    shelfIndex: 0,
    spineColor: '#5c1d24',
  },

  // ==========================================
  // ZONA 5: UNDIP FUTURE
  // ==========================================
  {
    id: 'book-roadmap-undip-2045',
    title: 'Roadmap Undip 2045: Menuju World Class Eco-Smart University',
    category: 'Visi Jangka Panjang & Masa Depan',
    period: 'Roadmap 2025–2045',
    author: 'Badan Perencanaan & Pengembangan Strategis Undip',
    description:
      'Dokumen arah pembangunan strategis Undip dalam menyongsong 100 Tahun Kemerdekaan Indonesia Emas 2045.',
    fullContent:
      'Membahas empat pilar transformasi masa depan: 1) Smart Digital Learning Ecosystem berbasis AI adaptif; 2) Riset berwawasan Green-Blue Economy yang berkelanjutan; 3) Tata kelola kampus otonom berkelas dunia; dan 4) Pencetakan pemimpin masa depan yang berintegritas moral tinggi. Memadukan kemajuan teknologi mutakhir dengan kearifan identitas warisan kebangsaan.',
    source: 'Badan Perencanaan & Pengembangan Strategis Rektorat Undip',
    zone: 5,
    shelfType: 'wall',
    shelfIndex: 0,
    spineColor: '#0e2b47',
  },
  {
    id: 'book-ai-smart-campus',
    title: 'Buku Putih Kecerdasan Buatan & Digital Twin Campus Undip',
    category: 'Teknologi Digital & AI',
    period: '2025–2030',
    author: 'Pusat Riset Kecerdasan Buatan & Fakultas Sains dan Matematika',
    description:
      'Pedoman implementasi kecerdasan buatan, IoT kampus terpadu, dan simulasi 3D Digital Twin Universitas Diponegoro.',
    fullContent:
      'Menguraikan perancangan infrastruktur Smart Campus terintegrasi: sistem pemantauan energi real-time, asisten riset AI pintar untuk mahasiswa, otomatisasi perpustakaan digital, serta penerapan komputasi awan berkinerja tinggi untuk riset pemodelan iklim dan dinamika maritim.',
    source: 'Pusat Studi AI dan Robotika Universitas Diponegoro',
    zone: 5,
    shelfType: 'wall',
    shelfIndex: 1,
    spineColor: '#0a3d42',
  },
  {
    id: 'book-green-campus-sustainability',
    title: 'Inovasi Transisi Energi & Eco-Campus Berkelanjutan Undip 2030',
    category: 'Keberlanjutan & Teknologi Hijau',
    period: '2025–2030',
    author: 'Pusat Riset Energi Terbarukan & Departemen Teknik Lingkungan',
    description:
      'Cetak biru kampus ramah lingkungan dengan emisi karbon netral dan pembangkit energi mandiri terbarukan.',
    fullContent:
      'Memvisualisasikan target Net-Zero Emission Campus 2030 melalui implementasi PLTS Atap berkapasitas multimegawatt, pemanfaatan waduk kampus sebagai pembangkit mikrohidro edukatif, pengolahan limbah organik terpadu menjadi pupuk dan biogas, serta pelestarian hutan kampus Tembalang sebagai paru-paru hijau Kota Semarang.',
    source: 'Satgas Green Campus & Sustainable Development Goals Center Undip',
    zone: 5,
    shelfType: 'island',
    shelfIndex: 0,
    spineColor: '#1d3e26',
  },
]
