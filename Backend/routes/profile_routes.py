from bson import ObjectId
from db import db
from fastapi import APIRouter, HTTPException
from models.profile import Profile
from services.profile_service import ProfileService

router = APIRouter()
profile_service = ProfileService()

@router.get("/all")  # Move this above /{profile_id}
async def get_all_profiles():
    profiles_cursor = db["profiles"].find()
    profiles = await profiles_cursor.to_list(None)
    for profile in profiles:
        profile["_id"] = str(profile["_id"])
    return profiles

@router.get("/{profile_id}")
async def get_profile(profile_id: str):
    try:
        profile = await db["profiles"].find_one({"_id": ObjectId(profile_id)})  # ✅ Ensure collection name is "profiles"
        if profile:
            profile["_id"] = str(profile["_id"])  # Convert ObjectId to string for JSON response
            return profile
        raise HTTPException(status_code=404, detail="Profile not found")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

@router.post("/")
async def create_profile(profile: Profile):
    profile_dict = profile.dict()
    result = await db["profiles"].insert_one(profile_dict)
    profile_dict["_id"] = str(result.inserted_id)
    return profile_dict

@router.put("/{profile_id}")
async def update_profile(profile_id: str, profile: Profile):
    update_result = await db["profiles"].update_one(
        {"_id": ObjectId(profile_id)}, {"$set": profile.dict()}
    )
    if update_result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Profile not found or no changes made")
    return {"message": "Profile updated successfully"}

@router.delete("/{profile_id}")
async def delete_profile(profile_id: str):
    delete_result = await db["profiles"].delete_one({"_id": ObjectId(profile_id)})
    if delete_result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Profile not found")
    return {"message": "Profile deleted successfully"}