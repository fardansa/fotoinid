export interface PhotoItem {
  id: string;
  filename: string;
  title: string;
  category: 'wisuda' | 'aksi' | 'portrait' | 'event';
  categoryLabel: string;
  description: string;
  aspect: 'portrait' | 'landscape';
}

// 16 Unique Curated Photos (Cleaned up: Hero IMG_2235, Feature IMG_2197, and duplicate burst removed)
export const photos: PhotoItem[] = [
  // Column 1 flow (4 Portraits, 1 Landscape)
  {
    id: 'photo-1',
    filename: 'IMG_0609.jpg',
    title: 'Momen Bergerak',
    category: 'aksi',
    categoryLabel: 'Aksi Dinamis',
    description: 'Aksi pertunjukan dinamis dengan kibasan kain merah.',
    aspect: 'portrait',
  },
  {
    id: 'photo-2',
    filename: 'IMG_0707.jpg',
    title: 'Portrait Kelulusan',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Portrait wisuda dengan selempang dan toga penuh kebanggaan.',
    aspect: 'portrait',
  },
  {
    id: 'photo-3',
    filename: 'IMG_2206.jpg',
    title: 'Aksi di Malam Hari',
    category: 'aksi',
    categoryLabel: 'Bela Diri',
    description: 'Dua peserta dalam aksi seni bela diri penuh ketegangan.',
    aspect: 'landscape',
  },
  {
    id: 'photo-4',
    filename: 'IMG_0640.jpg',
    title: 'Potret Hari Kelulusan',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Portrait wisuda duduk di tangga dengan pose anggun.',
    aspect: 'portrait',
  },
  {
    id: 'photo-5',
    filename: 'IMG_0786.jpg',
    title: 'Momen Kelulusan',
    category: 'wisuda',
    categoryLabel: 'Wisuda · Luar Ruang',
    description: 'Portrait wisuda memegang ijazah di area hijau kampus.',
    aspect: 'portrait',
  },

  // Column 2 flow (4 Portraits, 1 Landscape)
  {
    id: 'photo-6',
    filename: 'IMG_0795.jpg',
    title: 'Langkah Wisudawan',
    category: 'wisuda',
    categoryLabel: 'Wisuda · Luar Ruang',
    description: 'Portrait wisuda di ruang terbuka dengan cahaya alami.',
    aspect: 'portrait',
  },
  {
    id: 'photo-7',
    filename: '20260512_082412.jpg',
    title: 'Dinamika Lapangan',
    category: 'event',
    categoryLabel: 'Event & Lapangan',
    description: 'Dokumentasi aktivitas lapangan dan kebersamaan peserta kegiatan.',
    aspect: 'landscape',
  },
  {
    id: 'photo-8',
    filename: 'IMG_0381.jpg',
    title: 'Di Balik Momen Wisuda',
    category: 'wisuda',
    categoryLabel: 'Behind the Scenes',
    description: 'Momen wisuda dilihat dari sudut pandang di balik fotografer.',
    aspect: 'portrait',
  },
  {
    id: 'photo-9',
    filename: 'IMG_2179.jpg',
    title: 'Portrait di Ruang Terbuka',
    category: 'portrait',
    categoryLabel: 'Portrait',
    description: 'Portrait seseorang di ruang luar dengan komposisi natural.',
    aspect: 'portrait',
  },
  {
    id: 'photo-10',
    filename: 'IMG_0785.jpg',
    title: 'Senyuman Hari Wisuda',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Senyum hangat dan ekspresi bahagia wisudawati.',
    aspect: 'portrait',
  },

  // Column 3 flow (4 Portraits, 2 Landscapes)
  {
    id: 'photo-11',
    filename: '20260512_082451.jpg',
    title: 'Kebersamaan Tim',
    category: 'event',
    categoryLabel: 'Organisasi & Tim',
    description: 'Interaksi tim dan dinamika kelompok dalam suasana aktif.',
    aspect: 'landscape',
  },
  {
    id: 'photo-12',
    filename: 'IMG_0794.jpg',
    title: 'Pencapaian Terbaik',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Dokumentasi momen kelulusan dengan pose formal dan elegan.',
    aspect: 'portrait',
  },
  {
    id: 'photo-13',
    filename: '20260512_095942.jpg',
    title: 'Prosesi Kegiatan Lapangan',
    category: 'event',
    categoryLabel: 'Event',
    description: 'Detail pelaksanaan agenda kegiatan dengan pencahayaan natural.',
    aspect: 'landscape',
  },
  {
    id: 'photo-14',
    filename: 'IMG_0422.jpg',
    title: 'Kehangatan Wisuda',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Momen berharga bersama toga dan buket bunga.',
    aspect: 'portrait',
  },
  {
    id: 'photo-15',
    filename: 'IMG_0435.jpg',
    title: 'Potret Sukacita',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Momen sukacita kelulusan penuh keceriaan.',
    aspect: 'portrait',
  },
  {
    id: 'photo-16',
    filename: 'IMG_0446.jpg',
    title: 'Kenangan Abadi',
    category: 'wisuda',
    categoryLabel: 'Wisuda',
    description: 'Dokumentasi detail momen kelulusan yang berkesan.',
    aspect: 'portrait',
  },
];
