from fastapi import APIRouter, HTTPException, Depends
from models.user import User
from services.auth_service import AuthService

router = APIRouter()
auth_service = AuthService()

@router.post("/signup")
async def signup(user: User):
    return await auth_service.signup(user)

@router.post("/login")
async def login(user: User):
    return await auth_service.login(user)