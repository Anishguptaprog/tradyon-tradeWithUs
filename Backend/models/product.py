from pydantic import BaseModel
from typing import Optional

class Product(BaseModel):
    product_id: Optional[str]
    name: str
    origin: str
    packing_details: str
    forecast: str
    colour: str
    cultivation_type: str
    moisture: str
    form_and_cut: str
    image: str
    price: float
