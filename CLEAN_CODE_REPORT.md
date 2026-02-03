# Laporan Analisis Clean Code

Laporan ini berisi analisis mendalam mengenai kualitas kode (Clean Code) pada repositori proyek ini. Analisis mencakup struktur folder, praktik terbaik React/Next.js, penggunaan TypeScript, dan potensi masalah pemeliharaan.

## Ringkasan Eksekutif

Secara umum, proyek ini terstruktur dengan baik menggunakan Next.js 14/15 (App Router) dan Tailwind CSS. Komponen UI modular dan penggunaan hooks kustom menunjukkan pemahaman yang baik tentang React. Namun, terdapat beberapa area yang perlu diperbaiki untuk memenuhi standar *Clean Code* yang ketat, terutama terkait kode mati (dead code), keamanan tipe (type safety), dan manipulasi DOM langsung.

## Temuan Utama

### 1. Kode Mati (Dead Code) & Kode yang Tidak Digunakan
Ditemukan beberapa file dan kode yang tampaknya tidak digunakan lagi atau digantikan oleh komponen lain. Menyimpan kode mati dapat membingungkan pengembang lain dan memperbesar ukuran proyek tanpa alasan.

*   **`hooks/use-typewriter.ts`**: Hook ini didefinisikan tetapi tidak digunakan di mana pun dalam proyek (berdasarkan pencarian teks). Fungsi serupa tampaknya ditangani oleh komponen `TextType`.
*   **`components/sections/experience-section.tsx`**: Komponen ini diimpor di `app/page.tsx` tetapi tidak dirender (digantikan oleh `DynamicExperienceSection`). Sebaiknya dihapus jika versi "Dynamic" adalah versi final.
*   **`app/page.tsx`**: Terdapat komentar kode yang ditinggalkan (`{/* <SkillsSection /> */}`). Jika fitur ini tidak lagi relevan, sebaiknya dihapus dari kode sumber.

### 2. Type Safety (TypeScript)
Penggunaan TypeScript sudah diterapkan, namun ada beberapa kelonggaran yang mengurangi manfaat dari *static typing*.

*   **`lib/skills.tsx`**: Menggunakan tipe `any` pada properti `icon`.
    ```typescript
    export interface Skill {
        name: string
        icon: any // Sebaiknya gunakan React.ElementType atau tipe spesifik library icon
        color?: string
    }
    ```
    Penggunaan `any` menghilangkan validasi tipe dan dapat menyebabkan runtime error yang tidak terduga.

### 3. Praktik Terbaik React (React Best Practices)

*   **Manipulasi DOM Langsung**:
    Pada `components/sections/about-section.tsx`, ditemukan penggunaan `document.getElementById`:
    ```typescript
    onContactClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    ```
    Dalam React, sebaiknya hindari manipulasi DOM langsung. Gunakan `useRef` atau library routing/scrolling yang sesuai untuk navigasi internal yang lebih aman dan terprediksi.

*   **Penggunaan Index sebagai `key`**:
    Hampir semua list rendering (looping map) menggunakan `index` array sebagai `key`.
    Contoh di `components/sections/experience-section.tsx`:
    ```typescript
    {experienceData.map((item, index) => (
        <div key={index} ... >
    ```
    Meskipun aman untuk list statis yang tidak pernah berubah urutannya, praktik terbaik (Clean Code) menyarankan penggunaan ID unik (misalnya `item.id` atau `item.company`) untuk performa rekonsiliasi React yang lebih baik dan menghindari bug jika data menjadi dinamis di masa depan.

### 4. Hardcoding & Magic Numbers
Beberapa nilai "hardcode" ditemukan yang sebaiknya dipindahkan ke konstanta atau file konfigurasi.

*   **`components/sections/stacked-portfolio-section.tsx`**:
    Terdapat perhitungan layout yang bergantung pada "Magic Numbers":
    ```typescript
    aspect-[1901/868] // Aspect ratio spesifik
    top: `calc(8vh + ${index * 0.75}rem)`
    ```
    Angka-angka ini sebaiknya didokumentasikan atau disimpan dalam variabel dengan nama yang deskriptif untuk menjelaskan asalnya.

*   **`lib/data.ts`**:
    Properti `sloganLine1` dan `sloganLine2` memiliki nilai string yang identik dan panjang. Jika ini disengaja untuk efek visual, berikan komentar. Jika tidak, ini adalah duplikasi data (DRY violation).

## Detail Per File

### `app/page.tsx`
*   **Status**: Perlu Perbaikan.
*   **Masalah**: Import yang tidak digunakan dan baris kode yang dikomentari (`SkillsSection`).

### `lib/skills.tsx`
*   **Status**: Perlu Perbaikan.
*   **Masalah**: Tipe `any` pada interface `Skill`. Inline style pada elemen `img` (`style={{ display: "inline-block" }}`) sebaiknya dipindah ke Tailwind class.

### `components/sections/about-section.tsx`
*   **Status**: Perlu Perbaikan.
*   **Masalah**: `document.getElementById` (DOM manipulation). Hardcoded image path `/logo-poltek.webp` (sebaiknya import atau dari data).

### `components/sections/experience-section.tsx`
*   **Status**: *Deprecated* / Hapus.
*   **Masalah**: Tampaknya duplikat fungsional dari `DynamicExperienceSection`.

### `hooks/use-typewriter.ts`
*   **Status**: Tidak Digunakan.
*   **Rekomendasi**: Hapus file ini jika logika pengetikan sudah dipindahkan ke komponen UI.

## Rekomendasi Langkah Selanjutnya

1.  **Hapus Kode Mati**: Hapus `hooks/use-typewriter.ts` dan `components/sections/experience-section.tsx` jika sudah dipastikan tidak terpakai.
2.  **Perbaiki Tipe Data**: Ubah tipe `any` di `lib/skills.tsx` menjadi tipe yang lebih ketat (misal: `React.ElementType` atau `IconType` dari `react-icons`).
3.  **Refactor DOM Access**: Ganti `document.getElementById` dengan pendekatan React (refs atau link hash yang aman).
4.  **Gunakan Key yang Stabil**: Tambahkan properti `id` pada data di `lib/data.ts` dan gunakan sebagai `key` saat mapping.
5.  **Bersihkan Komentar**: Hapus blok kode yang dikomentari di `app/page.tsx`.

Laporan ini disusun untuk membantu meningkatkan kualitas, keterbacaan, dan pemeliharaan kode proyek Anda.
