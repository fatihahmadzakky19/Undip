export interface Founder {
  id: string
  name: string
  title: string
  years: string
  role: string
  description: string
  quote?: string
  imagePath?: string
  category?: 'pendiri-utama' | 'direktorat-rektorat'
}

export interface HistoryExhibit {
  id: string
  title: string
  category: 'history' | 'campus-photo' | 'decree' | 'archive'
  period: string
  shortLabel: string
  description: string
  fullContent: string
  imagePath?: string
  highlights?: string[]
  orientation?: 'landscape' | 'portrait' | 'square'
  size?: 'large' | 'medium' | 'small'
}

/**
 * 5 TOKOH PENDIRI UTAMA UNIVERSITAS DIPONEGORO
 * (Pancamitra Pendiri Yayasan Universitas Semarang 1956)
 */
export const UNDIP_FOUNDERS_5: Founder[] = [
  {
    id: 'mr-soedarto',
    name: 'Mr. Soedarto',
    title: 'Ketua Presidium Yayasan & Rektor Pembangun',
    years: '1913–1986',
    role: 'Pelopor pendirian Yayasan Universitas Semarang (1956) dan peletak dasar akademik utama Undip.',
    description: 'Mr. Soedarto adalah tokoh sentral di balik pendirian Yayasan Universitas Semarang pada 1956. Sebagai Jaksa Tinggi Jawa Tengah dan kemudian Rektor Universitas Diponegoro, beliau mendedikasikan hidupnya untuk mentransformasikan perguruan tinggi swasta lokal menjadi universitas negeri bereputasi tinggi.',
    quote: 'Pendidikan tinggi adalah jembatan emas pembangun karakter bangsa yang berdaulat.',
    category: 'pendiri-utama',
  },
  {
    id: 'mr-imam-bardjo',
    name: 'Mr. Imam Bardjo',
    title: 'Presiden (Rektor) Pertama Universitas Semarang (1957–1961)',
    years: 'Periode : 1957 – 1961',
    role: 'Ketua Pengadilan Tinggi Jawa Tengah dan Rektor pertama yang meresmikan perkuliahan perdana tahun 1957.',
    description: 'Mr. Imam Bardjo memimpin universitas di masa-masa awal yang penuh keterbatasan. Dengan wibawa kepemimpinannya, beliau berhasil menyatukan para akademisi dan praktisi hukum untuk mendirikan Fakultas Hukum dan Masyarakat serta Akademi Administrasi Negara.',
    quote: 'Bermula dari cita-cita luhur di Kota Semarang untuk mencerdaskan generasi penerus bangsa.',
    imagePath: '/textures/rektors/mr-imam-bardjo.jpg',
    category: 'pendiri-utama',
  },
  {
    id: 'mr-goenawan-goetomo',
    name: 'Mr. Goenawan Goetomo',
    title: 'Dekan Pertama Akademi Administrasi Negara',
    years: '1915–1992',
    role: 'Pelopor pendidikan administrasi dan tata kelola pemerintahan di Jawa Tengah.',
    description: 'Sebagai dekan pertama, beliau meletakkan fondasi kurikulum administrasi niaga dan negara yang kemudian berkembang menjadi Fakultas Ilmu Sosial dan Ilmu Politik (FISIP).',
    category: 'pendiri-utama',
  },
  {
    id: 'mr-tan-tjing-hak',
    name: 'Mr. Tan Tjing Hak',
    title: 'Cendekiawan Hukum & Tokoh Inklusivitas',
    years: '1912–1985',
    role: 'Praktisi hukum terkemuka yang mewujudkan semangat inklusivitas dan kebhinekaan dalam pendirian Undip.',
    description: 'Kehadiran Mr. Tan Tjing Hak mencerminkan bahwa sejak awal kelahirannya, Universitas Diponegoro terbuka untuk semua etnis dan golongan masyarakat demi kemajuan ilmu pengetahuan.',
    category: 'pendiri-utama',
  },
  {
    id: 'dr-heyder-bin-heyder',
    name: 'dr. Heyder bin Heyder',
    title: 'Direktur R.S. Semarang & Perintis Kedokteran',
    years: '1909–1982',
    role: 'Memprakarsai pendirian Fakultas Kedokteran Undip bekerjasama dengan RSUP Dr. Kariadi.',
    description: 'Dedikasinya membawa dunia medis Semarang menjadi pusat pendidikan dokter yang berdedikasi tinggi bagi masyarakat Jawa Tengah.',
    category: 'pendiri-utama',
  },
]

/**
 * 13 TOKOH REKTOR UNIVERSITAS DIPONEGORO DARI MASA KE MASA
 * (Jajaran Rektor & Pimpinan Tertinggi Universitas Diponegoro)
 */
export const UNDIP_LEADERSHIP_13: Founder[] = [
  {
    id: 'rektor-imam-bardjo',
    name: 'Mr. Imam Bardjo',
    title: 'Rektor Universitas Diponegoro (1957–1961)',
    years: 'Periode : 1957 – 1961',
    role: 'Presiden (Rektor) pertama yang memimpin peletakan batu fondasi dan peresmian perkuliahan perdana.',
    description: 'Sebagai Presiden (Rektor) pertama, Mr. Imam Bardjo memimpin universitas di masa perintisan awal. Di tengah keterbatasan fasilitas dan sarana pascakemerdekaan, beliau berhasil menghimpun para tokoh hukum dan pemerintahan untuk menyelenggarakan pendidikan tinggi berkualitas di Semarang.',
    imagePath: '/textures/rektors/mr-imam-bardjo.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-mochtar',
    name: 'Mochtar',
    title: 'Rektor Universitas Diponegoro (1963)',
    years: 'Periode : 1 – 13 September 1963',
    role: 'Rektor pada masa transisi pimpinan universitas September 1963.',
    description: 'Mochtar mengemban amanah kepemimpinan sebagai Rektor Universitas Diponegoro pada awal September 1963. Pada masa peralihan kepemimpinan ini, beliau memastikan kesinambungan administrasi dan kelangsungan proses akademik universitas tetap berjalan tertib dan stabil.',
    imagePath: '/textures/rektors/mochtar.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-sunario',
    name: 'Prof. Sunario, S.H.',
    title: 'Rektor Universitas Diponegoro (1963–1966)',
    years: 'Periode : 1 – 13 September 1963',
    role: 'Tokoh nasional pergerakan kemerdekaan, mantan Menlu RI, dan Rektor Undip pembina integritas kebangsaan.',
    description: 'Prof. Sunario, S.H. adalah tokoh bangsa terkemuka yang berperan aktif dalam Kongres Pemuda II (Manifesto Sumpah Pemuda 1928) dan Konferensi Asia Afrika 1955. Selaku Rektor, beliau membawa kehormatan diplomasi dan wawasan kebangsaan mendalam ke seluruh civitas akademika Universitas Diponegoro.',
    imagePath: '/textures/rektors/prof-sunario-sh.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-jacub-rais',
    name: 'Prof. Ir. Jacub Rais',
    title: 'Rektor Universitas Diponegoro (1966)',
    years: 'Periode : 14 April – 21 September 1966',
    role: 'Rektor tahun 1966 dan perintis keilmuan geodesi, geomatika & teknik nasional di Undip.',
    description: 'Prof. Ir. Jacub Rais memimpin Undip pada masa dinamis tahun 1966. Beliau adalah ilmuwan geodesi terkemuka Indonesia yang kemudian menjadi tokoh perintis Badan Koordinasi Survei dan Pemetaan Nasional (Bakosurtanal). Dedikasinya memperkuat fondasi Fakultas Teknik dan tradisi riset eksakta di Undip.',
    imagePath: '/textures/rektors/prof-ir-jacub-rais.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-suroyo',
    name: 'Brigjen TNI Dr. A. Suroyo',
    title: 'Rektor Universitas Diponegoro (1966–1976)',
    years: 'Periode : 1966 – 1976',
    role: 'Rektor pemantap stabilitas kelembagaan dan pengembangan Fakultas Kedokteran selama satu dekade kepemimpinan.',
    description: 'Brigjen TNI Dr. A. Suroyo memimpin Undip selama satu dekade penuh (1966–1976). Di bawah kepemimpinannya, Undip mencapai stabilitas organisasi yang kokoh, penataan fakultas-fakultas baru, serta penguatan pendidikan kedokteran dan pelayanan kesehatan bagi masyarakat luas.',
    imagePath: '/textures/rektors/brigjen-tni-dr-a-suroyo.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-soedarto-sh',
    name: 'Prof. Sudarto, S.H.',
    title: 'Rektor Universitas Diponegoro (1977–1986)',
    years: 'Periode : 1977 – 1986',
    role: 'Rektor pemrakarsa rencana induk pengembangan kampus terpadu Tembalang dan penguatan riset hukum pidana.',
    description: 'Prof. Sudarto, S.H. memimpin Universitas Diponegoro selama dua periode (1977–1986). Beliau adalah pakar hukum pidana terkemuka Indonesia yang turut menyusun naskah pembaruan hukum nasional. Di bawah kepemimpinannya, Undip mulai merintis pemindahan kampus ke kawasan Tembalang serta membangun tata kelola akademik modern dan berwibawa.',
    quote: 'Pendidikan hukum dan moralitas adalah benteng keadilan bangsa.',
    imagePath: '/textures/rektors/prof-sudarto-sh.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-moeljono',
    name: 'Prof. Dr. Moeljono Soegiarto Trastotenojo',
    title: 'Rektor Universitas Diponegoro (1986–1993)',
    years: 'Periode : 1986 – 1993',
    role: 'Rektor visioner pelopor pembangunan dan relokasi kampus terpadu Tembalang 180 hektar.',
    description: 'Prof. Dr. dr. R. Moeljono Soegiarto Trastotenojo adalah dokter spesialis anak dan rektor yang merealisasikan megaproyek kampus terpadu Tembalang dengan dukungan Bank Dunia dan Pemerintah RI. Di bawah kepemimpinan beliau, Undip bertransformasi dari kampus terfragmentasi di Pleburan menjadi kawasan kampus terintegrasi modern.',
    quote: 'Membangun kampus bukan sekadar menata batu bata, tetapi membangun peradaban.',
    imagePath: '/textures/rektors/prof-moeljono-trastotenojo.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-muladi',
    name: 'Prof. Dr. Muladi, S.H.',
    title: 'Rektor Universitas Diponegoro (1994–1997)',
    years: 'Periode : 1994 – 1997',
    role: 'Guru besar hukum pidana, Hakim Agung, dan Menteri Kehakiman RI yang mengharumkan nama Undip di kancah nasional dan internasional.',
    description: 'Prof. Dr. Muladi, S.H. adalah begawan hukum pidana dan hak asasi manusia terkemuka Indonesia. Beliau pernah menjabat sebagai Menteri Kehakiman RI, Menteri Sekretaris Negara, dan Gubernur Lemhannas. Di masa kepemimpinannya sebagai Rektor Undip, beliau memperkokoh martabat akademisi Undip dan memperluas kerjasama internasional. Sosok beliau diabadikan pada Muladi Dome.',
    quote: 'Hukum harus menjadi panglima yang mengayomi kemanusiaan dan keadilan.',
    imagePath: '/textures/rektors/prof-muladi.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-eko-budihardjo',
    name: 'Prof. Ir. Eko Budiharjo',
    title: 'Rektor Universitas Diponegoro (1998–2006)',
    years: 'Periode : 1998 – 2006',
    role: 'Sang Rektor Humanis, budayawan, dan pakar tata ruang arsitektur berwawasan lingkungan.',
    description: 'Prof. Ir. Eko Budiharjo, M.Sc. memimpin Universitas Diponegoro melewati masa genting reformasi dengan pendekatan kultural, dialogis, dan penuh humor humanis. Beliau adalah arsitek dan budayawan nasional yang sangat dicintai mahasiswa dan masyarakat luas, serta mempopulerkan penataan ruang kampus hijau dan berkarakter.',
    quote: 'Ilmu tanpa nurani dan sentuhan seni akan kehilangan makna kemanusiaannya.',
    imagePath: '/textures/rektors/prof-eko-budiharjo.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-susilo-wibowo',
    name: 'Prof. Dr. dr. Susilo Wibowo, M.S. Med, Sp.And',
    title: 'Rektor Universitas Diponegoro (2006–2010)',
    years: 'Periode : 2006 – 2010',
    role: 'Pelopor universitas riset, pendiri RSND, dan pengembang program andrologi kedokteran unggulan.',
    description: 'Prof. Dr. dr. Susilo Wibowo, M.S. Med, Sp.And adalah pakar andrologi dan kedokteran reproduksi pertama di Indonesia yang memimpin Undip bertransformasi menjadi universitas riset. Beliau menggagas dan menginisiasi berdirinya Rumah Sakit Nasional Diponegoro (RSND) sebagai rumah sakit rujukan dan pendidikan modern di Jawa Tengah.',
    quote: 'Riset bermutu tinggi adalah nyawa utama kemajuan bangsa.',
    imagePath: '/textures/rektors/prof-susilo-wibowo.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-sudharto',
    name: 'Prof. Drs. Sudharto Prawata Hadi, MES, Ph.D.',
    title: 'Rektor Universitas Diponegoro (2010–2015)',
    years: 'Periode : 2010 – 2015',
    role: 'Pelopor status PTN-BH Undip dan pengembang kampus hijau lestari (Green Campus).',
    description: 'Prof. Drs. Sudharto Prawata Hadi, MES, Ph.D. adalah pakar manajemen lingkungan hidup terkemuka Indonesia. Di bawah kepemimpinannya, Undip sukses bertransformasi menjadi Perguruan Tinggi Negeri Berbadan Hukum (PTN-BH) pada 2014 dan meraih peringkat teratas universitas ramah lingkungan UI GreenMetric.',
    quote: 'Kelestarian alam dan kemajuan ilmu pengetahuan harus senantiasa berjalan beriringan.',
    imagePath: '/textures/rektors/prof-sudharto-p-hadi.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-yos-johan',
    name: 'Prof. Dr. Yos Johan Utama, S.H., M.Hum.',
    title: 'Rektor Universitas Diponegoro (2015–2024)',
    years: 'Periode : 2015 – 2024',
    role: 'Membawa Undip menembus peringkat 2 universitas paling diminati di Indonesia dan jajaran top perguruan tinggi dunia.',
    description: 'Prof. Dr. Yos Johan Utama, S.H., M.Hum. memimpin Undip selama hampir satu dekade (dua periode). Beliau berhasil mengakselerasi akreditasi internasional bagi puluhan program studi, memodernisasi fasilitas kampus megah seperti Muladi Dome, dan mengantarkan alumni Undip sebagai lulusan tercepat memperoleh pekerjaan di Indonesia (peringkat 1 QS Employability).',
    quote: 'Bekerja dengan hati, mengabdi untuk kemuliaan bangsa dan almamater.',
    imagePath: '/textures/rektors/prof-yos-johan-utama.jpg',
    category: 'direktorat-rektorat',
  },
  {
    id: 'rektor-suharnomo',
    name: 'Prof. Dr. Suharnomo, S.E., M.Si.',
    title: 'Rektor Universitas Diponegoro (2025–2030)',
    years: 'Periode : 2025 – 2030',
    role: 'Rektor Undip pembawa visi strategis "Undip Bermartabat, Undip Bermanfaat" era inovasi masa depan.',
    description: 'Prof. Dr. Suharnomo, S.E., M.Si. adalah pakar manajemen sumber daya manusia terkemuka dan mantan Dekan Fakultas Ekonomika dan Bisnis (FEB) Undip. Beliau memimpin Universitas Diponegoro menuju era transformasi digital, hilirisasi hasil riset terapan bagi industri, serta penguatan pengabdian masyarakat yang inklusif dan berdaya saing global.',
    quote: 'Undip Bermartabat, Undip Bermanfaat bagi nusa dan bangsa.',
    imagePath: '/textures/rektors/prof-suharnomo.jpg',
    category: 'direktorat-rektorat',
  },
]

/** Full combined founders list for backward compatibility */
export const UNDIP_FOUNDERS: Founder[] = [...UNDIP_FOUNDERS_5, ...UNDIP_LEADERSHIP_13]

/**
 * Historical exhibits for the History & Archives Wing:
 * Comprehensive dense collection organized for the authentic Masonry gallery wall layout
 * flanking the 3D Miniature Map of Universitas Diponegoro.
 */
export const HISTORY_EXHIBITS: HistoryExhibit[] = [
  // 1. Centerpiece Monumental Art
  {
    id: 'artwork-diponegoro-center',
    title: 'Lukisan Induk: Api Perjuangan Pangeran Diponegoro (1825–1830)',
    category: 'history',
    period: 'Karya Bersejarah',
    shortLabel: 'Lukisan Induk Diponegoro',
    description: 'Karya seni monumental yang merefleksikan keberanian Pangeran Diponegoro sebagai sumber inspirasi nama dan jiwa Universitas Diponegoro.',
    fullContent: 'Pangeran Diponegoro adalah pahlawan nasional yang memimpin Perang Jawa (1825–1830) melawan penindasan kolonialisme. Kepribadian beliau yang jujur, berani, adil, dan membela rakyat kecil menjadi teladan luhur bagi seluruh sivitas akademika Universitas Diponegoro.\n\nLukisan ini menggambarkan sang Pangeran menunggangi kuda putih perkasa di tengah kancah perjuangan, melambangkan kepemimpinan yang pantang menyerah dan berakar kuat pada nilai spiritual bangsa.',
    highlights: [
      'Simbol kepahlawanan patriotik bagi sivitas akademika',
      'Pemberian nama oleh Presiden Sukarno pada 9 Januari 1960',
      'Nilai luhur: Kejujuran, Keberanian, dan Kepedulian Sosial',
    ],
    orientation: 'landscape',
    size: 'large',
  },

  // 2. Akta Notaris No. 59 Tahun 1956
  {
    id: 'archives-notary-1956',
    title: 'Akta Pendirian Yayasan No. 59 Tahun 1956',
    category: 'archive',
    period: '4 Desember 1956',
    shortLabel: 'Akta Notaris 1956',
    description: 'Lembar otentik Notaris R.M. Soeprapto yang memuat nama para pendiri dan susunan pengurus pertama Yayasan Universitas Semarang.',
    fullContent: 'Dokumen akta otentik bertanggal 4 Desember 1956 ini membuktikan landasan hukum berdirinya "Yayasan Universitas Semarang". Dalam akta tertulis komitmen bersama para pendiri untuk mendirikan sekolah tinggi yang mencakup bidang hukum, ekonomi, ketatanegaraan, dan teknik.\n\nAkta ini merupakan titik tolak formal seluruh kiprah Universitas Diponegoro hingga masa kini.',
    highlights: [
      'Akta Notaris R.M. Soeprapto Nomor 59',
      'Pernyataan kehendak para tokoh untuk mencerdaskan rakyat Jawa Tengah',
      'Bukti sejarah hukum kepemilikan dan legalitas awal yayasan',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 3. Statuta & Kurikulum Pertama 1957
  {
    id: 'archives-statuta-1957',
    title: 'Naskah Statuta & Kurikulum Perdana (1957)',
    category: 'archive',
    period: '9 Januari 1957',
    shortLabel: 'Statuta Perdana 1957',
    description: 'Buku pedoman perkuliahan dan kurikulum Fakultas Hukum dan Masyarakat serta Akademi Administrasi Negara.',
    fullContent: 'Naskah statuta pertama yang dirumuskan oleh Mr. Dan Sulaiman dan Prof. Soediman Kartohadiprodjo menetapkan pedoman pengajaran modern berlandaskan Pancasila.\n\nDokumen ini merinci mata kuliah hukum tata negara, hukum adat, ekonomi moneter, dan pengantar ilmu politik yang diasuh para cendekiawan terkemuka.',
    highlights: [
      'Pedoman akademik pertama universitas di Semarang',
      'Integrasi hukum adat nusantara dan hukum modern',
      'Ditetapkan saat pembukaan kuliah perdana 9 Januari 1957',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 4. Foto Gedung Panti Budaya (Bodjong)
  {
    id: 'early-photo-panti-budaya',
    title: 'Foto Bersejarah: Gedung Panti Budaya di Jl. Pemuda (1957)',
    category: 'campus-photo',
    period: 'Tahun 1957',
    shortLabel: 'Gedung Kuliah Pertama',
    description: 'Dokumentasi otentik gedung tempat peresmian dan ruang kuliah angkatan pertama Universitas Semarang.',
    fullContent: 'Gedung Panti Budaya di Jalan Pemuda (dahulu Bodjong) menjadi saksi bisu hari bersejarah tanggal 9 Januari 1957 saat Presiden Universitas Mr. Imam Bardjo membuka kuliah perdana.\n\nDengan arsitektur kolonial tropis yang megah, gedung ini dipinjamkan oleh pemerintah daerah untuk memulai perkuliahan yang diikuti oleh ratusan pemuda antusias dari seantero Jawa Tengah.',
    highlights: [
      'Lokasi perkuliahan angkatan pertama tahun 1957',
      'Kerjasama erat dengan Pemerintah Kotapraja Semarang',
      'Embrio lahirnya kampus hukum dan administrasi negara',
    ],
    orientation: 'landscape',
    size: 'medium',
  },

  // 5. Foto Mahasiswa Angkatan Pertama
  {
    id: 'early-photo-students-1957',
    title: 'Foto Angkatan Pertama Mahasiswa Undip (1957)',
    category: 'campus-photo',
    period: 'Tahun 1957',
    shortLabel: 'Mahasiswa Angkatan 1957',
    description: 'Potret para mahasiswa angkatan pertama mengenakan pakaian resmi jas dan kebaya di halaman kampus.',
    fullContent: 'Koleksi foto hitam-putih bersejarah memperlihatkan antusiasme mahasiswa angkatan perdana. Berpakaian necis dengan dasi dan kebaya tradisional, para mahasiswa mencerminkan semangat tinggi menuntut ilmu di tengah keterbatasan sarana pascaperang kemerdekaan.',
    highlights: [
      'Mahasiswa angkatan 1957 dari berbagai daerah',
      'Pakaian resmi perkuliahan tradisi meester',
      'Banyak melahirkan tokoh bangsa, hakim agung, dan menteri',
    ],
    orientation: 'landscape',
    size: 'small',
  },

  // 6. SK Presiden & PP No. 7 Tahun 1961
  {
    id: 'decree-sk-1961',
    title: 'Surat Keputusan & PP No. 7 Tahun 1961 (SK Penegerian)',
    category: 'decree',
    period: 'Tahun 1961',
    shortLabel: 'SK Penegerian / PP',
    description: 'Payung hukum penegerian Universitas Diponegoro oleh Pemerintah Republik Indonesia.',
    fullContent: 'Keberhasilan penyelenggaraan Universitas Semarang menarik perhatian Pemerintah Pusat. Pada upacara Dies Natalis ke-3 tanggal 9 Januari 1960, Presiden Republik Indonesia Ir. Soekarno menyatakan penghargaan setinggi-tingginya dan mengubah nama universitas menjadi UNIVERSITAS DIPONEGORO.\n\nPenegerian secara resmi dikukuhkan melalui Peraturan Pemerintah No. 7 Tahun 1961 tertanggal 15 Oktober 1960 yang mulai berlaku 15 Oktober 1957 (ditetapkan sebagai tanggal Dies Natalis resmi Undip). Surat keputusan ini menandai babak baru Undip sebagai PTN kebanggaan Indonesia.',
    highlights: [
      'PP No. 7 Tahun 1961 tentang Penegerian Universitas Diponegoro',
      '15 Oktober 1957 ditetapkan sebagai tanggal Dies Natalis',
      'Ditandatangani oleh Presiden RI Sukarno dan Menteri PP&K Prof. Dr. Prijono',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 7. Salinan Lembaran Negara 1961
  {
    id: 'decree-lembaran-negara',
    title: 'Salinan Lembaran Berita Negara Penegerian Undip',
    category: 'decree',
    period: 'Tahun 1961',
    shortLabel: 'Lembaran Negara 1961',
    description: 'Publikasi resmi Lembaran Negara RI No. 21 Tahun 1961 tentang pendirian universitas negeri di Semarang.',
    fullContent: 'Lembaran Negara ini mengesahkan pengalihan seluruh aset, fakultas, dan tenaga pengajar Yayasan Universitas Semarang menjadi Perguruan Tinggi Negeri di bawah naungan Departemen Perguruan Tinggi dan Ilmu Pengetahuan (PTIP).',
    highlights: [
      'Lembaran Negara RI Nomor 21 Tahun 1961',
      'Kepastian status hukum sebagai Perguruan Tinggi Negeri',
      'Hak dan kewenangan penuh menyelenggarakan gelar kesarjanaan',
    ],
    orientation: 'portrait',
    size: 'small',
  },

  // 8. Naskah Pidato Presiden Soekarno 1960
  {
    id: 'archives-soekarno-1960',
    title: 'Arsip Pidato Presiden Soekarno (9 Jan 1960)',
    category: 'archive',
    period: '9 Januari 1960',
    shortLabel: 'Pidato Bung Karno',
    description: 'Naskah bersejarah penganugerahan nama agung Pangeran Diponegoro sebagai identitas abadi kampus.',
    fullContent: 'Dalam amanatnya pada 9 Januari 1960 di hadapan para sivitas akademika di Semarang, Bung Karno berpesan:\n\n"Semoga Universitas Diponegoro mendjadi benteng pelopor revolusi bangsa, meneladani api djiwa kepahlawanan Pangeran Diponegoro jang berani, djudjur, dan membela rakjat ketjil!"\n\nNaskah arsip ini tersimpan sebagai salah satu pusaka dokumenter paling berharga di Museum Undip.',
    highlights: [
      'Pemberian nama Pangeran Diponegoro sebagai simbol patriotisme',
      'Amanat karakter pejuang kebenaran dan kemandirian bangsa',
      'Tersimpan dalam lembaran arsip kepresidenan dan universitas',
    ],
    orientation: 'landscape',
    size: 'large',
  },

  // 9. Foto Kunjungan Bung Karno di Semarang
  {
    id: 'early-photo-soekarno-visit',
    title: 'Dokumentasi Kunjungan Bung Karno di Dies Natalis III',
    category: 'campus-photo',
    period: '9 Januari 1960',
    shortLabel: 'Kunjungan Presiden 1960',
    description: 'Foto Presiden Sukarno didampingi Mr. Soedarto dan pimpinan universitas saat meresmikan nama Universitas Diponegoro.',
    fullContent: 'Momen monumental ketika Bung Karno disambut ribuan mahasiswa dan warga Semarang di auditorium, memancarkan kehangatan dan kebanggaan atas lahirnya universitas negeri di jantung Jawa Tengah.',
    highlights: [
      'Dihadiri puluhan ribu sivitas akademika dan masyarakat',
      'Penyematan nama Pangeran Diponegoro secara aklamasi',
      'Titik tolak pengakuan nasional atas mutu pendidikan Semarang',
    ],
    orientation: 'landscape',
    size: 'medium',
  },

  // 10. Foto Kampus Pleburan & Gedung Rektorat Lama
  {
    id: 'early-campus-pleburan',
    title: 'Foto Kampus Pleburan & Gedung Rektorat (1960–1975)',
    category: 'campus-photo',
    period: '1960–1975',
    shortLabel: 'Kampus Pleburan Lama',
    description: 'Gedung Rektorat lama dan Auditorium di Jalan Imam Bardjo Pleburan Semarang.',
    fullContent: 'Kawasan Pleburan berkembang pesat menjadi pusat aktivitas mahasiswa pada era 1960 hingga 1980-an. Dengan deretan pohon rindang di Jalan Imam Bardjo, kompleks ini menaungi Fakultas Hukum, Ekonomi, dan Pascasarjana.',
    highlights: [
      'Gedung Rektorat Pleburan di Jl. Imam Bardjo',
      'Pusat kegiatan Dies Natalis dan wisuda era 1970-an',
      'Kini menjadi kampus program pascasarjana dan riset',
    ],
    orientation: 'landscape',
    size: 'medium',
  },

  // 11. Masterplan Kampus Tembalang
  {
    id: 'history-masterplan-tembalang',
    title: 'Masterplan & Pembangunan Kampus Tembalang (1980–1990)',
    category: 'history',
    period: '1980–1990-an',
    shortLabel: 'Masterplan Tembalang',
    description: 'Peta cetak biru pembebasan lahan 180 hektar dan perintisan Kampus Terpadu Tembalang.',
    fullContent: 'Dibawah kepemimpinan Rektor Prof. Dr. dr. R. Moeljono S. Trastotenojo dan para penerusnya, Undip memulai megaproyek pemindahan kampus ke perbukitan Tembalang. Masterplan ini mengintegrasikan fungsi akademis, riset, konservasi hutan kampus, dan danau buatan.',
    highlights: [
      'Pembebasan lahan perbukitan Tembalang seluas 180+ hektar',
      'Konsep Eco-Campus terpadu ramah lingkungan',
      'Pembangunan Gedung Widya Puraya dan danau penampung air',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 12. Peletakan Batu Pertama Tembalang 1987 (NEW)
  {
    id: 'history-groundbreaking-tembalang',
    title: 'Foto Peletakan Batu Pertama Kampus Tembalang (1987)',
    category: 'campus-photo',
    period: 'Tahun 1987',
    shortLabel: 'Batu Pertama Tembalang',
    description: 'Upacara bersejarah peletakan batu pertama pengembangan Kampus Terpadu Tembalang.',
    fullContent: 'Dokumentasi penting saat pimpinan rektorat, menteri pendidikan, dan sesepuh universitas secara simbolis meletakkan batu pertama di puncak bukit Tembalang, menandai era transisi fisik modern universitas.',
    highlights: [
      'Titik awal pembangunan kampus terpadu Tembalang',
      'Dihadiri perwakilan Bank Dunia dan pemerintah pusat',
      'Menjadi cikal bakal berdirinya kompleks fakultas modern',
    ],
    orientation: 'landscape',
    size: 'medium',
  },

  // 13. Pembangunan Widya Puraya & Rektorat (1993) (NEW)
  {
    id: 'history-widya-puraya',
    title: 'Foto Pembangunan Menara Rektorat Widya Puraya (1993)',
    category: 'campus-photo',
    period: 'Tahun 1993',
    shortLabel: 'Pembangunan Widya Puraya',
    description: 'Pembangunan gedung ikonik Widya Puraya dengan menara jam khas yang menjadi simbol kampus Tembalang.',
    fullContent: 'Gedung Widya Puraya dirancang sebagai jantung administratif dan seremonial kampus Tembalang. Foto ini merekam tahap penyelesaian atap limas emas dan menara jam yang gagah menjulang.',
    highlights: [
      'Landmark sentral kawasan Kampus Tembalang',
      'Lokasi lapangan upacara dan penerimaan mahasiswa baru',
      'Pusat layanan administrasi akademik terpadu',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 14. Gedung Muladi Dome (NEW)
  {
    id: 'history-muladi-dome',
    title: 'Gedung Muladi Dome: Mahakarya Convention & Expo Hall',
    category: 'history',
    period: '2024–Modern',
    shortLabel: 'Gedung Muladi Dome',
    description: 'Arsitektur mahakarya dome berteknologi tinggi untuk konferensi internasional, wisuda akbar, dan expo riset.',
    fullContent: 'Gedung Muladi Dome dinamai untuk menghormati jasa Prof. Dr. Muladi, S.H., mantan Rektor Undip dan Menteri Kehakiman RI. Gedung berkapasitas ribuan orang dengan kubah champagne gold megah ini merupakan salah satu convention hall universitas terbesar dan termodern di Asia Tenggara.',
    highlights: [
      'Pusat utama maket kampus dan kegiatan internasional Undip',
      'Kapasitas 4.000+ delegasi dengan teknologi akustik mutakhir',
      'Ikon kebanggaan baru arsitektur modern Jawa Tengah',
    ],
    orientation: 'landscape',
    size: 'large',
  },

  // 15. Rumah Sakit Nasional Diponegoro (RSND) (NEW)
  {
    id: 'history-rsnd',
    title: 'Rumah Sakit Nasional Diponegoro (RSND) & FK Tembalang',
    category: 'campus-photo',
    period: '2014–Modern',
    shortLabel: 'RSND & Kedokteran',
    description: 'Pusat layanan kesehatan modern, riset klinis, dan rumah sakit pendidikan utama mahasiswa kedokteran.',
    fullContent: 'RSND berdiri megah di kawasan timur Tembalang sebagai bukti komitmen Undip dalam memberikan pelayanan kesehatan terbaik kepada masyarakat serta wadah riset medis translational bertaraf internasional.',
    highlights: [
      'Rumah Sakit Pendidikan Utama Tipe B terakreditasi paripurna',
      'Pusat keunggulan riset onkologi, kardiovaskular, dan rehabilitasi',
      'Mendukung tridharma perguruan tinggi bidang kesehatan',
    ],
    orientation: 'landscape',
    size: 'medium',
  },

  // 16. Waduk Undip & Konservasi Hijau (NEW)
  {
    id: 'history-waduk-undip',
    title: 'Waduk Pendidikan Undip & Sabuk Hijau Konservasi',
    category: 'campus-photo',
    period: '2016–Sekarang',
    shortLabel: 'Waduk & Eco-Campus',
    description: 'Danau retensi air, laboratorium alam perikanan, dan kawasan konservasi biodiversitas kampus.',
    fullContent: 'Waduk Undip berfungsi ganda sebagai pengendali hidrologi perbukitan Tembalang sekaligus sarana olahraga dayung dan rekreasi edukatif. Dilengkapi jembatan ikonik dan arboretum pepohonan langka.',
    highlights: [
      'Kapasitas tampung air jutaan meter kubik pengendali banjir',
      'Pusat pengamatan burung dan keanekaragaman hayati',
      'Mendukung pemeringkatan UI GreenMetric World University',
    ],
    orientation: 'landscape',
    size: 'small',
  },

  // 17. Wisuda Perdana di Pleburan (NEW)
  {
    id: 'history-wisuda-perdana',
    title: 'Foto Wisuda Sarjana Perdana Universitas Diponegoro (1962)',
    category: 'campus-photo',
    period: 'Tahun 1962',
    shortLabel: 'Wisuda Perdana 1962',
    description: 'Prosesi khidmat pelantikan sarjana angkatan pertama berstatus universitas negeri.',
    fullContent: 'Potret langka saat Rektor pertama Undip memindahkan kuncir toga wisudawan pertama lulusan Fakultas Hukum dan Ekonomi. Kebanggaan terpancar dari para wisudawan yang kelak menjadi perintis pembangunan nasional.',
    highlights: [
      'Pelantikan sarjana negeri angkatan pertama di Semarang',
      'Tradisi toga hitam dan samir biru navy Undip',
      'Meluluskan para tokoh hukum, diplomat, dan ekonom bangsa',
    ],
    orientation: 'portrait',
    size: 'medium',
  },

  // 18. Transformasi Menuju PTN-BH
  {
    id: 'history-transformation',
    title: 'Transformasi Menuju PTN-BH & World Class University',
    category: 'history',
    period: '2015–Sekarang',
    shortLabel: 'Transformasi PTN-BH',
    description: 'Perjalanan panjang penetapan status Perguruan Tinggi Negeri Berbadan Hukum berdasarkan PP No. 52/2015.',
    fullContent: 'Pada tahun 2015, Pemerintah Republik Indonesia menetapkan Universitas Diponegoro sebagai PTN-BH. Dengan otonomi akademik dan finansial penuh, Undip kini melesat maju dalam pemeringkatan QS World University Rankings, menghasilkan riset-riset inovatif yang berdampak global.',
    highlights: [
      'PP No. 52 Tahun 2015 tentang Statuta PTN-BH Undip',
      'Peringkat teratas lulusan tercepat mendapat kerja (Employability)',
      '11 Fakultas, 2 Sekolah, dan 60.000+ mahasiswa aktif',
    ],
    orientation: 'landscape',
    size: 'large',
  },
]
