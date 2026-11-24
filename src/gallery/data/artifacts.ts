import type { ZoneId } from './zones'

export interface HeritageArtifact {
  id: string
  title: string
  category: string
  period: string
  material: string
  description: string
  fullContent: string
  imagePath?: string
  source: string
  zone: ZoneId
  position: [number, number, number]
  rotationY?: number
}

export const HERITAGE_ARTIFACTS: HeritageArtifact[] = [
  // ==========================================
  // ZONA 1: THE ORIGIN OF UNDIP
  // ==========================================
  {
    id: 'artifact-segel-timah-1957',
    title: 'Segel Timah Resmi Rektorat Perdana Undip (1957)',
    category: 'Insignia & Segel Universitas',
    period: 'Tahun 1957',
    material: 'Logam Timah & Gagang Kayu Jati Terukir',
    description:
      'Stempel timah asli yang digunakan pada masa kepemimpinan Presiden Universitas Mr. Imam Bardjo untuk menerbitkan ijazah perdana.',
    fullContent:
      'Segel timah bersejarah ini merupakan lambang legalitas tertua yang dimiliki Universitas Diponegoro. Digunakan pertama kali pada penerbitan piagam kelulusan mahasiswa Fakultas Hukum dan Akademi Administrasi Negara tahun 1957. Lambang perisai dengan obor menyala di bagian tengah dipahat manual dengan presisi tinggi oleh pengrajin logam terbaik Semarang.',
    source: 'Koleksi Museum & Arsip Statuta Gedung Widya Puraya Undip',
    zone: 1,
    position: [-4.2, 0, -6.5],
  },
  {
    id: 'artifact-buku-registrasi-1957',
    title: 'Buku Induk Registrasi Mahasiswa Angkatan Pertama (1957)',
    category: 'Arsip Akademik Otentik',
    period: '9 Januari 1957',
    material: 'Kertas Arsip Daluang Kuno & Sampul Kulit Kerbau',
    description:
      'Buku daftar nama dan tanda tangan mahasiswa angkatan pertama yang mengikuti kuliah perdana di Gedung Panti Budaya.',
    fullContent:
      'Buku induk bersampul kulit ini memuat data pribadi, riwayat pendidikan, dan nomor induk mahasiswa (NIM) dari para mahasiswa perintis yang memulai perkuliahan pada tanggal 9 Januari 1957. Tulisan tangan bertinta emas di halaman judul ditandatangani langsung oleh Ketua Pengurus Yayasan Mr. Soedarto dan Presiden Universitas Mr. Imam Bardjo.',
    source: 'Biro Administrasi Akademik & Kemahasiswaan (BAAK) Undip',
    zone: 1,
    position: [4.2, 0, -6.5],
  },

  // ==========================================
  // ZONA 2: THE GROWTH OF KNOWLEDGE
  // ==========================================
  {
    id: 'artifact-piagam-pp-1961',
    title: 'Piagam Keputusan Presiden PP No. 7/1961 Pengesahan PTN',
    category: 'Dokumen Statuta Kenegaraan',
    period: 'Tahun 1961',
    material: 'Kertas Kenegaraan dengan Cap Garuda Kuningan Emas',
    description:
      'Dokumen resmi Lembaran Negara penegerian Universitas Diponegoro menjadi perguruan tinggi negeri Republik Indonesia.',
    fullContent:
      'Peraturan Pemerintah Nomor 7 Tahun 1961 yang ditandatangani oleh Perdana Menteri RI H. Djuanda dan Presiden Sukarno merupakan tonggak bersejarah pengakuan resmi Undip sebagai Perguruan Tinggi Negeri. Piagam ini memuat klausul penetapan tanggal Dies Natalis 15 Oktober 1957 dan pembiayaan operasional universitas dari APBN.',
    source: 'Arsip Nasional Republik Indonesia & Lembaran Negara 1961',
    zone: 2,
    position: [-4.2, 0, -4.5],
  },
  {
    id: 'artifact-mikroskop-riset-perdana',
    title: 'Mikroskop Monokuler Riset Laboratorium Perdana (1965)',
    category: 'Instrumen Saintifik Bersejarah',
    period: 'Tahun 1965',
    material: 'Kuningan Padat, Lensa Optik Carl Zeiss & Kotak Kayu Walnut',
    description:
      'Instrumen laboratorium tertua Fakultas Kedokteran dan Fakultas Teknik yang digunakan dalam riset dasar sains awal.',
    fullContent:
      'Mikroskop optik manual buatan Carl Zeiss ini didatangkan pada tahun 1965 untuk melengkapi laboratorium patologi perdana di Kampus Pleburan. Menjadi saksi perjuangan mahasiswa kedokteran dan biologi kelautan generasi awal dalam melakukan praktikum riset tanpa fasilitas listrik yang memadai di era 1960-an.',
    source: 'Museum Kedokteran & Laboratorium Terpadu Undip',
    zone: 2,
    position: [4.2, 0, -4.5],
  },

  // ==========================================
  // ZONA 3: THE HERITAGE OF UNDIP
  // ==========================================
  {
    id: 'artifact-toga-senat-emas',
    title: 'Toga Rektor Era Awal & Kalung Jabatan Senat Akademik Emas',
    category: 'Regalia & Busana Akademik Kehormatan',
    period: 'Tahun 1966–1980',
    material: 'Beludru Sutra Hitam, Renda Emas Murni & Medali Logam Sepuh Emas',
    description:
      'Pakaian kebesaran rektor dan kalung rantai jabatan senat akademik yang dikenakan dalam upacara Dies Natalis dan Wisuda masa lampau.',
    fullContent:
      'Busana kebesaran ini pernah dikenakan oleh rektor-rektor legendaris seperti Brigjen TNI Dr. A. Suroyo dan Prof. Sudarto, S.H. Rantai kalung emas melambangkan ikatan kesatuan para guru besar yang teguh memelihara integritas akademik dan martabat keilmuan almamater Universitas Diponegoro.',
    source: 'Sekretariat Senat Akademik Universitas Diponegoro',
    zone: 3,
    position: [-4.2, 0, -3.0],
  },
  {
    id: 'artifact-tongkat-pedel-kuningan',
    title: 'Tongkat Pedel Upacara Wisuda Kuningan Resmi (1960)',
    category: 'Regalia Upacara Akademik',
    period: 'Tahun 1960',
    material: 'Kuningan Padat Berukir Motif Diponegoro & Kayu Jati Tua',
    description:
      'Tongkat kehormatan yang dipikul oleh Pedel Upacara saat memimpin arak-arakan prosesi masuk Senat Guru Besar.',
    fullContent:
      'Tongkat Pedel ini memiliki hiasan kepala perisai Diponegoro yang dipagari ornamen ombak pantai dan kuncup melati. Melambangkan kewibawaan upacara sakral penerimaan sivitas akademika dan kelulusan sarjana di Universitas Diponegoro sejak era kampus Pleburan hingga Muladi Dome Tembalang saat ini.',
    source: 'Biro Protokol & Upacara Rektorat Undip',
    zone: 3,
    position: [4.2, 0, -3.0],
  },
  {
    id: 'artifact-keris-pusaka-diponegoro',
    title: 'Replika Keris Pusaka Warisan Pangeran Diponegoro',
    category: 'Memorabilia & Pusaka Tradisi',
    period: 'Warisan Tradisi Kepahlawanan',
    material: 'Bilah Pamor Meteorit, Warangka Kayu Cendana & Pendok Emas Ukir',
    description:
      'Replika pusaka penghormatan atas ksatria pejuang kemerdekaan Pangeran Diponegoro yang menjadi nama agung universitas.',
    fullContent:
      'Pusaka keris berluk ini melambangkan ketajaman budi pekerti, kebijaksanaan memimpin, dan ketegasan moral seorang kesatria dalam membela keadilan. Dipajang sebagai inspirasi abadi bagi mahasiswa Undip agar senantiasa berjiwa kesatria, pantang menyerah, dan berintegritas luhur di manapun berkiprah.',
    source: 'Pusat Kebudayaan & Museum Warisan Jawa Undip',
    zone: 3,
    position: [0, 0, -14.0],
  },

  // ==========================================
  // ZONA 4: UNDIP TODAY
  // ==========================================
  {
    id: 'artifact-piala-pimnas-emas',
    title: 'Piala Emas Bergilir & Juara Umum PIMNAS Kontingen Undip',
    category: 'Prestasi Mahasiswa Tingkat Nasional',
    period: 'Era Modern PTN-BH',
    material: 'Perunggu Berlapis Emas & Pualam Marmer Maros',
    description:
      'Piala penghargaan kejuaraan nasional inovasi riset mahasiswa dalam Pekan Ilmiah Mahasiswa Nasional.',
    fullContent:
      'Menjadi bukti keunggulan kreativitas dan inovasi ilmiah mahasiswa Undip di kancah nasional. Kontingen Undip secara konsisten mengukir prestasi emas dalam bidang inovasi bioteknologi, rekayasa maritim, teknologi tepat guna kemasyarakatan, serta gagasan futuristik tertulis.',
    source: 'Direktorat Kemahasiswaan & Alumni Universitas Diponegoro',
    zone: 4,
    position: [-4.2, 0, -2.5],
  },
  {
    id: 'artifact-sertifikat-abet-asiin',
    title: 'Piagam Akreditasi Internasional ABET & ASIIN Jerman',
    category: 'Sertifikasi Mutu Pendidikan Global',
    period: '2022–2024',
    material: 'Plakat Kristal Akrilik & Etsa Emas Resmi Lembaga Akreditasi Dunia',
    description:
      'Sertifikat pengakuan internasional atas kesetaraan mutu kurikulum teknik, sains, dan kedokteran Undip dengan universitas terbaik dunia.',
    fullContent:
      'Piagam akreditasi prestisius dari Accreditation Board for Engineering and Technology (ABET, Amerika Serikat) dan ASIIN (Jerman) membuktikan bahwa lulusan program studi di lingkungan Undip memiliki kompetensi berstandar global yang diakui langsung di pasar kerja industri internasional.',
    source: 'Lembaga Penjaminan Mutu Pendidikan (LPMPP) Undip',
    zone: 4,
    position: [4.2, 0, -2.5],
  },

  // ==========================================
  // ZONA 5: UNDIP FUTURE
  // ==========================================
  {
    id: 'artifact-prototype-robot-rsnd',
    title: 'Model Prototype Robot Medis Tele-Rehabilitasi RSND Undip',
    category: 'Inovasi Teknologi Masa Depan',
    period: 'Inovasi Menuju 2030',
    material: 'Aluminium Alloy Ringan, Sensor Haptic & Komponen Biomekatronik',
    description:
      'Model inovasi robotik medis karya kolaborasi Fakultas Teknik dan Kedokteran untuk pendampingan pemulihan pasien pascastroke.',
    fullContent:
      'Prototipe robot asistif medis ini mengintegrasikan kecerdasan buatan dengan bio-feedback haptic untuk membantu latihan motorik pasien secara terukur. Dilengkapi kamera visi komputer dan transmisi data tele-health berkecepatan tinggi ke sistem rumah sakit pintar RSND Tembalang.',
    source: 'Center for Biomechanics, Biomaterials, Biomechatronics, and Biosignal Processing (CBIOM3S) Undip',
    zone: 5,
    position: [-4.2, 0, -3.5],
  },
  {
    id: 'artifact-solar-boat-model',
    title: 'Miniatur Kapal Riset Bertenaga Surya FPIK Undip',
    category: 'Teknologi Maritim Hijau',
    period: 'Riset Masa Depan',
    material: 'Komposit Karbon, Panel Sel Surya Monokristalin & Propulsi Elektrik',
    description:
      'Model kapal penjelajah riset maritim nir-emisi yang ditenagai energi matahari untuk eksplorasi perairan tropis Kepulauan Karimunjawa.',
    fullContent:
      'Dikembangkan oleh tim riset teknik perkapalan dan kelautan Undip, model kapal tenaga surya ini memanfaatkan efisiensi energi fotovoltaik terintegrasi dengan lambung katamaran hemat energi. Mampu beroperasi secara hening dan ramah lingkungan tanpa mencemari ekosistem terumbu karang kepulauan.',
    source: 'Departemen Teknik Perkapalan & Stasiun Lapangan Karimunjawa FPIK Undip',
    zone: 5,
    position: [4.2, 0, -3.5],
  },
]
