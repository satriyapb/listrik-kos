# Listrik Kos

Webapp statis untuk memantau pemakaian listrik token kos. Frontend HTML + JS murni, database Supabase, hosting Vercel.

## Isi folder
- `index.html` : seluruh aplikasi (form, statistik, grafik, riwayat)
- `config.js` : URL dan publishable key Supabase
- `README.md` : panduan ini

## Database (sudah dibuat)
- Project Supabase: `listrik-kos` (ref `lsaoaajbuwkfnvyzynew`, Singapura)
- Tabel `readings` (read_at, kwh_remaining, note) dan `topups` (topup_at, amount_rp, kwh, note)
- Sudah terisi 7 catatan meteran 6-16 Oktober
- RLS aktif. Hanya akun pemilik (akun pertama yang mendaftar, tercatat di tabel `app_owner`) yang bisa baca, tulis, dan hapus data. Pengunjung tanpa login tidak bisa melihat apa pun.

## Deploy lewat GitHub + Vercel
1. Di github.com buat repo baru bernama `listrik-kos` (Private boleh, tanpa README).
2. Di terminal, dari folder ini:
   ```bash
   git init
   git add .
   git commit -m "Listrik Kos: versi awal"
   git branch -M main
   git remote add origin https://github.com/<USERNAME>/listrik-kos.git
   git push -u origin main
   ```
3. Di vercel.com pilih Add New > Project > Import repo `listrik-kos`.
4. Framework Preset: Other. Build Command dan Output Directory dikosongkan. Klik Deploy.
5. Buka URL yang diberikan Vercel. Di HP, pilih "Tambahkan ke layar utama" supaya seperti aplikasi.

## Cara pakai harian
- Catat sisa kWh dari meteran, idealnya jam yang sama (mis. pagi sebelum berangkat).
- Setelah topup, catat topup (nominal + kWh), lalu catat juga sisa kWh meteran setelah token masuk.
- Pemakaian dihitung dari: sisa sebelumnya + topup di antaranya - sisa sekarang.

## Login (lakukan setelah deploy)
1. Buka URL Vercel, isi email dan password (minimal 6 karakter), tekan **Daftar**. Lakukan ini sendiri, sebelum membagikan URL ke siapa pun, karena akun pertama otomatis menjadi pemilik data.
2. Kalau Supabase meminta konfirmasi email, buka email dari Supabase dan klik link-nya, lalu kembali ke app dan tekan **Masuk**.
3. Di dashboard Supabase buka Authentication > Sign In / Providers > Email, lalu matikan **Allow new users to sign up** supaya tidak ada akun baru yang bisa dibuat.
4. Di Authentication > URL Configuration, isi **Site URL** dengan URL Vercel-mu supaya link konfirmasi tidak mengarah ke localhost.

Opsional: matikan **Confirm email** di pengaturan yang sama kalau email konfirmasi tidak datang (batas kirim email bawaan Supabase kecil).

## Keamanan
- Key di `config.js` adalah publishable key, memang aman ada di browser. Data dilindungi oleh RLS, bukan oleh kerahasiaan key.
- Orang lain yang mendaftar akan ditolak: app menampilkan pesan "tidak punya akses" dan data tidak bisa dibaca atau diubah.
- Lupa password: reset lewat dashboard Supabase (Authentication > Users).

## Catatan
- Jam 6-16 Oktober adalah perkiraan (pagi 07.00, siang 13.00, malam 21.00). Edit dengan menghapus dan mencatat ulang kalau mau lebih akurat.
