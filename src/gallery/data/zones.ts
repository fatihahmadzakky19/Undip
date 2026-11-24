export type ZoneId = 1 | 2 | 3 | 4 | 5

export interface ZoneConfig {
  id: ZoneId
  number: string
  title: string
  subtitle: string
  tagline: string
  era: string
  themeColor: string
  accentColor: string
  teleportPosition: [number, number, number]
  targetLookAt: [number, number, number]
  overview: string
}

export const ZONES_METADATA: Record<ZoneId, ZoneConfig> = {
  1: {
    id: 1,
    number: 'ZONA 1',
    title: 'The Origin of Undip',
    subtitle: 'Awal Berdirinya Universitas Diponegoro (1956–1961)',
    tagline: 'Prakarsa, Statuta, dan Peletakan Dasar Akademik',
    era: '1956–1961',
    themeColor: '#142e56',
    accentColor: '#d4af37',
    teleportPosition: [0, 1.65, 8.5],
    targetLookAt: [0, 1.65, -18.2],
    overview:
      'Menampilkan arsip otentik pendirian, 5 Tokoh Pancamitra Pendiri Utama, 13 Rektor kepemimpinan awal, dokumen statuta pertama, dan foto bersejarah kampus perintis di Pleburan.',
  },
  2: {
    id: 2,
    number: 'ZONA 2',
    title: 'The Growth of Knowledge',
    subtitle: 'Perkembangan Ilmu Pengetahuan dan Institusi (1962–1990-an)',
    tagline: 'Transformasi Fakultas, Riset, dan Masterplan Tembalang',
    era: '1962–1990-an',
    themeColor: '#0f382a',
    accentColor: '#d4af37',
    teleportPosition: [0, 1.65, 4.0],
    targetLookAt: [0, 1.65, -18.2],
    overview:
      'Menelusuri kelahiran dan pertumbuhan 11 fakultas perintis, transisi kampus Pleburan ke Tembalang, penerbitan jurnal keilmuan pertama, serta kontribusi pengabdian kepada masyarakat.',
  },
  3: {
    id: 3,
    number: 'ZONA 3',
    title: 'The Heritage of Undip',
    subtitle: 'Warisan Sejarah & Identitas Akademik',
    tagline: 'Tradisi Akademik, Nilai Kepahlawanan Diponegoro, dan Memorabilia',
    era: 'Warisan Sepanjang Masa',
    themeColor: '#3d1e16',
    accentColor: '#d4af37',
    teleportPosition: [0, 1.65, 0.0],
    targetLookAt: [0, 1.65, -18.2],
    overview:
      'Menyimpan artefak regalia akademik, tongkat pedel upacara emas, toga rektor era awal, manuskrip Babad Diponegoro, serta stempel timah asli pembentukan universitas tahun 1957.',
  },
  4: {
    id: 4,
    number: 'ZONA 4',
    title: 'Undip Today',
    subtitle: 'Universitas Diponegoro Masa Kini',
    tagline: 'PTN-BH, Kampus Riset Unggulan, dan Reputasi Global',
    era: 'Era Modern & PTN-BH',
    themeColor: '#102d42',
    accentColor: '#d4af37',
    teleportPosition: [0, 1.65, -4.0],
    targetLookAt: [0, 1.65, -18.2],
    overview:
      'Menampilkan kemegahan arsitektur Muladi Dome, RSND, laboratorium riset terpadu, publikasi internasional terindeks Scopus, serta pencapaian peringkat QS World University Rankings.',
  },
  5: {
    id: 5,
    number: 'ZONA 5',
    title: 'Undip Future',
    subtitle: 'Masa Depan & Inovasi Berkelanjutan',
    tagline: 'Smart Digital Campus, Artificial Intelligence, dan Green Eco-Campus 2045',
    era: 'Menuju Indonesia Emas 2045',
    themeColor: '#0d2b38',
    accentColor: '#d4af37',
    teleportPosition: [0, 1.65, -8.0],
    targetLookAt: [0, 1.65, -18.2],
    overview:
      'Memvisualisasikan transformasi Smart Digital University, AI Research Center, implementasi energi terbarukan tenaga surya, kapal riset masa depan, dan visi Undip World Class University 2045.',
  },
}
