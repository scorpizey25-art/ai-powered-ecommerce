# import 1 : membaca dan mengelola data dalam format tabel (DataFrame).
# import 2 : menghitung kemiripan antara dua objek, yang sangat umum dalam sistem rekomendasi.
# import 3 : mengubah teks menjadi representasi numerik yang dapat digunakan untuk 
# analisis lebih lanjut, seperti dalam sistem rekomendasi berbasis konten.
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.feature_extraction.text import TfidfVectorizer

def train_model():
    # mambaca data dari file CSV
    df = pd.read_csv('dataset.csv')
    
    # df.groupby('product_id'): Mengelompokkan data berdasarkan ID produk.
    # ['rating'].mean(): Menghitung rata-rata rating untuk setiap kelompok produk.
    # sort_values(ascending=False): Mengurutkan produk dari rating rata-rata tertinggi ke terendah.    
    top_products = df.groupby('product_id')['rating'].mean().sort_values(ascending=False)
    
    return top_products.index.tolist()

if __name__ == '__main__':
    top_items = train_model()
    print("Produk paling direkomendasikan:", top_items)