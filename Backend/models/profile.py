from pydantic import BaseModel
from typing import Optional
class Profile(BaseModel):
    profile_id: Optional[str]
    business_name: str
    business_overview: str
    business_type: str
    established: int
    address: str
    logo: str
    owner: str