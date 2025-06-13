
# Ujian Online Demo

Sistem ujian berbasis Google Form dengan fitur keamanan tambahan:

- Login dengan NIS dan Token
- Validasi token menggunakan Google Apps Script
- Form hanya bisa dibuka jika token valid dan aktif
- Fullscreen otomatis saat ujian dimulai
- Timer mundur 60 menit
- Deteksi tab keluar maksimal 3x
- Auto logout saat waktu habis

## Setup

1. Deploy Google Apps Script sesuai dokumentasi.
2. Salin URL dan ganti di login.html pada bagian `scriptURL`.
3. Upload semua file ini ke GitHub dan aktifkan GitHub Pages.

## Penggunaan

Akses: `https://username.github.io` akan langsung mengarah ke halaman login.
