## Proyek E-commerce: Fase 2 - Pengembangan Backend 💻

### Tujuan 🎯

Pada fase ini, Anda akan membangun API yang akan menjadi tulang punggung untuk komunikasi antara frontend dan layanan AI. Kita akan menggunakan kombinasi Node.js dan Express.js karena keduanya sangat umum, mudah dipelajari, dan fleksibel.

##### Persiapan Awal: Instalasi & Alat Wajib 🛠️

Sebelum memulai, pastikan Anda telah menginstal dua komponen utama berikut di komputer Anda.

##### 1. Node.js 📦
Lingkungan runtime yang memungkinkan Anda menjalankan kode JavaScript di luar browser.

##### Langkah Instalasi
- Kunjungi situs resmi Node.js: https://nodejs.org/.
- Unduh versi LTS (Long-Term Support). Versi ini paling stabil dan direkomendasikan untuk proyek produksi.
- Jalankan installer dan ikuti petunjuknya hingga instalasi selesai.

##### 2. MongoDB 💾
Basis data NoSQL yang akan kita gunakan untuk menyimpan data produk secara fleksibel dan efisien.

##### Langkah Instalasi
- Kunjungi halaman unduhan MongoDB Community Server: https://www.mongodb.com/try/download/community.
- Pilih sistem operasi Anda (Windows, macOS, atau Linux) dan unduh installer-nya.
- Jalankan installer dan ikuti petunjuknya. Pastikan Anda mencentang opsi untuk menginstal MongoDB Compass; ini adalah alat visual yang akan sangat membantu Anda dalam mengelola data.

## Membuat Proyek Backend dan Menjalankan Server 🚀
Setelah semua alat yang dibutuhkan terinstal, ikuti langkah-langkah di bawah ini untuk memulai proyek backend Anda.

##### 1. Membuat Struktur Folder Proyek
Buka terminal atau Command Prompt dan jalankan perintah berikut untuk membuat struktur folder dasar proyek Anda:

    Bash
    mkdir ai-powered-ecommerce
    cd ai-powered-ecommerce
    mkdir backend
    cd backend
    
Perintah ini akan membuat folder utama ai-powered-ecommerce yang berisi folder backend untuk semua kode server Anda.

##### 2. Inisialisasi Proyek Node.js
Di dalam folder backend, inisialisasi proyek Node.js dengan menjalankan perintah ini:

    Bash
    npm init -y

Perintah di atas akan membuat file package.json secara otomatis. File ini berfungsi sebagai "manifest" yang mencatat semua detail dan dependensi proyek Anda.

##### 3. Menginstal Dependensi

Selanjutnya, instal paket-paket yang kita butuhkan, yaitu Express.js untuk membuat server web dan Mongoose untuk berinteraksi dengan database MongoDB.

    Bash
    npm install express mongoose

##### 4. Menulis Kode Server

Buat file baru di dalam folder backend dan beri nama server.js. Salin dan tempel kode berikut ke dalam file tersebut. Kode ini akan menyiapkan server dan menghubungkannya ke database MongoDB.

    JavaScript
    const express = require('express');
    const mongoose = require('mongoose');
    const app = express();
    const port = 3000;
    
    app.use(express.json());
    // Koneksi ke MongoDB. Pastikan MongoDB Anda berjalan.
    mongoose.connect('mongodb://localhost:27017/ecommerce-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('✅ Terhubung ke MongoDB!'))
    .catch(err => console.error('❌ Koneksi MongoDB gagal:', err));
    
    app.get('/', (req, res) => {
        res.send('Backend API berjalan!');
    });
    
    app.listen(port, () => {
        console.log(`Server berjalan di http://localhost:${port}`);
    });

##### 5. Menjalankan Server
- Pastikan MongoDB Community Server Anda sudah berjalan di background.
- Kembali ke terminal (masih di dalam folder backend) dan jalankan perintah ini:

        Bash
        node server.js

- Jika semuanya berhasil, Anda akan melihat pesan seperti ini di terminal: ✅ Terhubung ke MongoDB! Server berjalan di http://localhost:3000
- Buka browser Anda dan kunjungi http://localhost:3000. Anda seharusnya melihat tulisan "Backend API berjalan!". Ini menandakan bahwa server Anda sudah sukses berjalan!