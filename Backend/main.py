from fastapi import FastAPI, Request
from motor.motor_asyncio import AsyncIOMotorClient
from db import connect_to_mongo
from routes.product_routes import router as product_router
from routes.profile_routes import router as profile_router
from routes.auth_routes import router as auth_router
from fastapi.middleware.cors import CORSMiddleware
import logging

app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])
app.include_router(product_router, prefix="/product", tags=["Product"])
app.include_router(profile_router, prefix="/profile", tags=["Profile"])

@app.middleware("http")
async def log_requests(request: Request, call_next):
    logger.info(f"Request: {request.method} {request.url}")
    response = await call_next(request)
    return response

@app.on_event("startup")
async def startup_db():
    await connect_to_mongo()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)