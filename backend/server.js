// Import library Express.js & mongoose db
const express = require('express');
const mongoose = require('mongoose');

// menyiapkannya sebagai aplikasi web (app) 
// & port server 3000
const app = express();
const PORT = 3000;

// Menginstruksikan server untuk dapat membaca data 
// yang dikirim dalam format JSON, 
// yang umum digunakan dalam komunikasi API.
app.use(express.json());

// server.js adalah sebagai gerbang yg melakukan routing
// ke file productRoutes.js untuk semua endpoint 
// yang berhubungan dengan produk (CRUD).
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Menghubungkan ke database MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Percobaan Koneksi Berhasil ke MongoDB');
}).catch(err => {
    console.error('Percobaan Koneksi Gagal ke MongoDB', err);
});

// Menyiapkan routing dasar untuk endpoint root
// yang mengirimkan pesan selamat datang
// ketika diakses melalui browser atau alat seperti Postman.
app.get('/', (req, res) => {
    res.send('Selamat datang di API E-commerce!');
});

// Menjalankan server pada port yang telah ditentukan
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});