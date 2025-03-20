from db import db
from models.product import Product
from bson import ObjectId

class ProductService:
    async def get_product(self, product_id: str):
        return await db["products"].find_one({"_id": ObjectId(product_id)})
    
    async def get_all_products(self):
        return await db["products"].find().to_list(None)
    
    async def create_product(self, product: Product):
        result = await db["products"].insert_one(product.dict())
        return {"product_id": str(result.inserted_id)}
    
    async def update_product(self, product_id: str, product: Product):
        await db["products"].update_one({"_id": ObjectId(product_id)}, {"$set": product.dict()})
        return {"message": "Product updated successfully"}
