from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client["TradeWithUs"]

# Populate database with sample data
async def populate_database():

    sample_products = [
        {"ProductId": "1", "ProductName": "Apples", "Origin": "USA", "PackingDetails": "Box of 10kg", "Forecast": "High Demand", "Colour": "Red", "CultivationType": "Organic", "Moisture": "Low", "FormAndCut": "Whole", "Image": "apple.jpg"},
        {"ProductId": "2", "ProductName": "Oranges", "Origin": "Spain", "PackingDetails": "Box of 5kg", "Forecast": "Medium Demand", "Colour": "Orange", "CultivationType": "Conventional", "Moisture": "Medium", "FormAndCut": "Whole", "Image": "orange.jpg"}
    ]
    sample_profiles = [
        {"ProfileId": "1", "BusinessName": "Fresh Farms", "BusinessOverview": "Supplier of organic fruits.", "BusinessType": "Supplier", "Established": "2005", "Address": "New York, USA", "Logo": "freshfarms.jpg", "Owner": "John Doe"},
        {"ProfileId": "2", "BusinessName": "Tropical Exports", "BusinessOverview": "Exporter of exotic fruits.", "BusinessType": "Exporter", "Established": "2010", "Address": "Barcelona, Spain", "Logo": "tropicalexports.jpg", "Owner": "Jane Smith"}
    ]
    await db["products"].insert_many(sample_products)
    await db["profiles"].insert_many(sample_profiles)

async def connect_to_mongo():
    """Function to connect to MongoDB and populate it at startup."""
    await populate_database()
