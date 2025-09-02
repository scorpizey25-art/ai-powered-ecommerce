from fastapi import FastAPI
from model import train_model

app = FastAPI()

# Endpoint untuk mendapatkan rekomendasi produk
@app.get("/recommend")
def get_recommendations():
    try:
        recommended_products = train_model()
        return {"recommended_products": recommended_products}
    except Exception as e:
        return {"error": str(e)}

# Endpoint dasar untuk pengujian
@app.get("/")
def read_root():
    return {"message": "Layanan AI berjalan!"}