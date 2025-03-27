from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

MONGO_URI = "mongodb://localhost:27017"
client = AsyncIOMotorClient(MONGO_URI)
db = client["TradeWithUs"]

# Populate database with sample data
async def populate_database():

    sample_products = [
        {
            "ProductId": "1",
            "ProductName": "Apples",
            "Origin": "USA",
            "PackingDetails": "Box of 10kg",
            "Forecast": "High Demand",
            "Colour": "Red",
            "CultivationType": "Organic",
            "Moisture": "Low",
            "FormAndCut": "Whole",
            "Image": "apple.jpg",
            "Price": 20
        },
        {
            "ProductId": "2",
            "ProductName": "Oranges",
            "Origin": "Spain",
            "PackingDetails": "Box of 5kg",
            "Forecast": "Medium Demand",
            "Colour": "Orange",
            "CultivationType": "Conventional",
            "Moisture": "Medium",
            "FormAndCut": "Whole",
            "Image": "orange.jpg",
            "Price": 15
        },
        {
            "ProductId": "3",
            "ProductName": "Bananas",
            "Origin": "Ecuador",
            "PackingDetails": "Box of 7kg",
            "Forecast": "High Demand",
            "Colour": "Yellow",
            "CultivationType": "Organic",
            "Moisture": "Medium",
            "FormAndCut": "Whole",
            "Image": "banana.jpg",
            "Price": 12
        },
        {
            "ProductId": "4",
            "ProductName": "Grapes",
            "Origin": "Italy",
            "PackingDetails": "Box of 3kg",
            "Forecast": "Low Demand",
            "Colour": "Green",
            "CultivationType": "Conventional",
            "Moisture": "High",
            "FormAndCut": "Whole",
            "Image": "grapes.jpg",
            "Price": 25
        },
        {
            "ProductId": "5",
            "ProductName": "Mangoes",
            "Origin": "India",
            "PackingDetails": "Box of 6kg",
            "Forecast": "High Demand",
            "Colour": "Yellow",
            "CultivationType": "Organic",
            "Moisture": "Low",
            "FormAndCut": "Whole",
            "Image": "mango.jpg",
            "Price": 30
        }
    ]

    sample_profiles = [
        {
            "ProfileId": "1",
            "BusinessName": "Fresh Farms",
            "BusinessOverview": "Supplier of organic fruits.",
            "BusinessType": "Supplier",
            "Established": "2005",
            "Address": "New York, USA",
            "Logo": "freshfarms.jpg",
            "Owner": "John Doe",
            "FormAndCut": "Whole",
            "Moisture": "Low",
            "Colour": "Multiple",
            "ExportPercentage": 90
        },
        {
            "ProfileId": "2",
            "BusinessName": "Tropical Exports",
            "BusinessOverview": "Exporter of exotic fruits.",
            "BusinessType": "Exporter",
            "Established": "2010",
            "Address": "Barcelona, Spain",
            "Logo": "tropicalexports.jpg",
            "Owner": "Jane Smith",
            "FormAndCut": "Sliced",
            "Moisture": "Low",
            "Colour": "Multiple",
            "ExportPercentage": 95
        },
        {
            "ProfileId": "3",
            "BusinessName": "Green Harvest",
            "BusinessOverview": "Wholesale distributor of fresh produce.",
            "BusinessType": "Distributor",
            "Established": "2015",
            "Address": "London, UK",
            "Logo": "greenharvest.jpg",
            "Owner": "Michael Brown",
            "FormAndCut": "Cubed",
            "Moisture": "Medium",
            "Colour": "Green",
            "ExportPercentage": 98
        },
        {
            "ProfileId": "4",
            "BusinessName": "Organic World",
            "BusinessOverview": "Certified organic fruit supplier.",
            "BusinessType": "Supplier",
            "Established": "2012",
            "Address": "Berlin, Germany",
            "Logo": "organicworld.jpg",
            "Owner": "Anna Schmidt",
            "FormAndCut": "Whole",
            "Moisture": "Low",
            "Colour": "Red",
            "ExportPercentage": 89
        },
        {
            "ProfileId": "5",
            "BusinessName": "Sunrise Imports",
            "BusinessOverview": "Importer of tropical fruits.",
            "BusinessType": "Importer",
            "Established": "2018",
            "Address": "Dubai, UAE",
            "Logo": "sunriseimports.jpg",
            "Owner": "Ali Hassan",
            "FormAndCut": "Whole",
            "Moisture": "Low",
            "Colour": "Multiple",
            "ExportPercentage": 91
        }
        
    ]
    await db["products"].insert_many(sample_products)
    await db["profiles"].insert_many(sample_profiles)

async def connect_to_mongo():
    """Function to connect to MongoDB and populate it at startup."""
    await populate_database()
