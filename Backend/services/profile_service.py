from db import db
from models.profile import Profile
from bson import ObjectId

class ProfileService:
    async def get_profile(self, profile_id: str):
        return await db["profiles"].find_one({"_id": ObjectId(profile_id)})
    
    async def get_all_profiles(self):
        return await db["profiles"].find().to_list(None)
    
    async def create_profile(self, profile: Profile):
        result = await db["profiles"].insert_one(profile.dict())
        return {"profile_id": str(result.inserted_id)}
    
    async def update_profile(self, profile_id: str, profile: Profile):
        await db["profiles"].update_one({"_id": ObjectId(profile_id)}, {"$set": profile.dict()})
        return {"message": "Profile updated successfully"}
