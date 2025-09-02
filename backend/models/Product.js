// import library mongoose
const mongoose = require('mongoose');

// tetapkan rule / aturan skema untuk produk
// atribut nama, tipe data, required, default
const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, default: 0  },    
    stock: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    imageUrl: { type: String, required: false }
});

// Masukkan productSchema kedalam model
// agar bisa digunakan berinteraksi dengan database (CRUD)
const Product = mongoose.model('Product', productSchema);

// export model Product agar bisa digunakan di file lain
module.exports = Product;