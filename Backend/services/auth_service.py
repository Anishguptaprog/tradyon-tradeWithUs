import bcrypt
from fastapi import HTTPException
import jwt
import datetime
from db import db
from models.user import User
from dotenv import load_dotenv
import os

load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")

class AuthService:
    async def signup(self, user: User):
        existing_user = await db["users"].find_one({"email": user.email})
        if existing_user:
            raise HTTPException(status_code=400, detail="User already exists")
        hashed_password = bcrypt.hashpw(user.password.encode('utf-8'), bcrypt.gensalt())
        user_dict = user.dict()
        user_dict["password"] = hashed_password.decode('utf-8')
        await db["users"].insert_one(user_dict)
        return {"message": "User registered successfully"}

    async def login(self, user: User):
        existing_user = await db["users"].find_one({"email": user.email})
        if not existing_user:
            raise HTTPException(status_code=400, detail="Invalid credentials")
        if not bcrypt.checkpw(user.password.encode('utf-8'), existing_user["password"].encode('utf-8')):
            raise HTTPException(status_code=400, detail="Invalid credentials")
        payload = {"sub": existing_user["email"], "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)}
        token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
        return {"token": token}