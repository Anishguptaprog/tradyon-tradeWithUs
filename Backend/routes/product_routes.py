from bson import ObjectId
from db import db
from fastapi import APIRouter, Depends, HTTPException
from models.product import Product
from services.product_service import ProductService

router = APIRouter()
product_service = ProductService()

@router.get("/all")
async def get_all_products():
    products_cursor = db["products"].find()
    products = await products_cursor.to_list(None)
    for product in products:
        product["_id"] = str(product["_id"])
    return products

@router.get("/{product_id}")
async def get_product(product_id: str):
    try:
        product = await db["products"].find_one({"_id": ObjectId(product_id)})
        if product:
            product["_id"] = str(product["_id"])
            return product
        raise HTTPException(status_code=404, detail="Product not found")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))



@router.post("/")
async def create_product(product: Product):
    product_dict = product.dict()
    result = await db["products"].insert_one(product_dict)
    product_dict["_id"] = str(result.inserted_id)
    return product_dict

@router.put("/{product_id}")
async def update_product(product_id: str, product: Product):
    update_result = await db["products"].update_one(
        {"_id": ObjectId(product_id)}, {"$set": product.dict()}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Product not found or no changes made")
    return {"message": "Product updated successfully"}

@router.delete("/{product_id}")
async def delete_product(product_id: str):
    delete_result = await db["products"].delete_one({"_id": ObjectId(product_id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Product not found")
    return {"message": "Product deleted successfully"}