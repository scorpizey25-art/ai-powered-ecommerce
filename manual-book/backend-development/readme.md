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

Kode program tersebut server.js intinya memiliki 3 tugas :
a. Membuat Koneksi ke MongoDB 

    MongoDB
    mongoose.connect ('mongodb://localhost:27017/ecommerce-db')
    ....

b. Membuat routing untuk endpoint root

    ExpressJS
    app.get('/', (req, res)
    ....

c. Menjalankan server dengan menerima port 3000

    ExpressJS
     app.listen(port, () => {
    ....

##### 5. Menjalankan Server
- Pastikan MongoDB Community Server Anda sudah berjalan di background.
- Kembali ke terminal (masih di dalam folder backend) dan jalankan perintah ini:

        Bash
        node server.js

- Jika semuanya berhasil, Anda akan melihat pesan seperti ini di terminal: ✅ Terhubung ke MongoDB! Server berjalan di http://localhost:3000
- Buka browser Anda dan kunjungi http://localhost:3000. Anda seharusnya melihat tulisan "Backend API berjalan!". Ini menandakan bahwa server Anda sudah sukses berjalan!

### Langkah 2.3: Membuat Model Produk & API CRUD

Sekarang, kita akan membuat API yang lebih fungsional. Kita akan mendefinisikan struktur data untuk produk dan membuat endpoint untuk melakukan operasi Create, Read, Update, dan Delete (CRUD).

##### 1. Membuat Model Data Produk
a. Buat folder baru bernama models di dalam folder backend Anda.
b. Di dalam folder models, buat file baru bernama Product.js. File ini akan mendefinisikan skema produk kita.
c. Salin dan tempel kode berikut ke dalam Product.js. Ini akan membuat skema produk dengan beberapa field dasar seperti nama, deskripsi, harga, dan stok.
    

    JavaScript
    // import library mongoose
    const mongoose = require('mongoose');

    // Tetapkan rule / aturan skema untuk produk
    // atribut nama, tipe data, required, default  
    const productSchema = new mongoose.Schema({
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true, default: 0 },
        imageUrl: { type: String, required: false }
    });
    
    // Masukkan productSchema kedalam model
    // agar bisa digunakan berinteraksi dengan database (CRUD)
    const Product = mongoose.model('Product', productSchema);

    // export model Product agar bisa digunakan di file lain
    module.exports = Product;


##### 2. Menambahkan Rute API ke server.js
a. Buka kembali file server.js Anda.
b. Tambahkan require untuk model Product yang baru Anda buat di bagian atas file.
c. Tambahkan endpoint API untuk operasi CRUD. Salin dan tempel kode berikut tepat di bawah baris app.use(express.json());.

    JavaScript

    const productRoutes = require('./routes/productRoutes');
    app.use('/api/products', productRoutes);

d. Anda akan menyadari kita membutuhkan file baru. Kita akan buat itu di langkah berikutnya.

##### 3. Membuat Rute API Khusus Produk
a. Buat folder baru bernama routes di dalam folder backend.
b. Di dalam folder routes, buat file baru bernama productRoutes.js.
c. Salin dan tempel kode berikut ke dalam productRoutes.js. Kode ini berisi logika untuk semua operasi CRUD.

    JavaScript

    const express = require('express');
    const router = express.Router();
    const Product = require('../models/Product');

    // GET semua produk (READ)
    router.get('/', async (req, res) => {
        try {
            const products = await Product.find();
            res.json(products);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // GET produk berdasarkan ID (READ)
    router.get('/:id', async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) return res.status(404).json({ message: 'Produk tidak ditemukan' });
            res.json(product);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    // POST produk baru (CREATE)
    router.post('/', async (req, res) => {
        const product = new Product({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            imageUrl: req.body.imageUrl
        });
        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // PATCH/PUT untuk update produk (UPDATE)
    router.patch('/:id', async (req, res) => {
        try {
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            res.json(updatedProduct);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    });

    // DELETE produk (DELETE)
    router.delete('/:id', async (req, res) => {
        try {
            await Product.findByIdAndDelete(req.params.id);
            res.json({ message: 'Produk berhasil dihapus' });
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    });

    module.exports = router;

##### 4. Menguji API
a. Pastikan server Anda sudah berjalan. Jika tidak, jalankan lagi dengan node server.js.
b. Anda tidak bisa menguji API ini langsung di browser. Anda membutuhkan alat seperti Postman atau Insomnia untuk mengirim permintaan POST, PATCH, dan DELETE. Atau, Anda bisa menggunakan extension di VS Code seperti "Thunder Client".
c. Contoh Pengujian (menggunakan Postman/Insomnia):
- Buat Produk Baru (POST): Kirim permintaan POST ke http://localhost:3000/api/products dengan data JSON di body-nya.

        JSON
        {
          "name": "Laptop Gaming",
          "description": "Laptop canggih untuk bermain game.",
          "price": 15000000,
          "stock": 50
        }

- Ambil Semua Produk (GET): Kirim permintaan GET ke http://localhost:3000/api/products. Anda akan melihat produk yang baru Anda buat.

###### Setelah Anda menyelesaikan langkah ini dan berhasil menguji API Anda, kita akan beralih ke bagian yang tak kalah menarik: Layanan AI.