from pydantic import BaseModel
from typing import Optional
class Profile(BaseModel):
    profile_id: Optional[str]
    business_name: str
    business_overview: str
    business_type: str
    established: str
    address: str
    logo: str
    owner: str
    formAndCut: str
    image: str
    size: float
    exportPercentage: float
    exportCountries: str
    founded: int
    logoUrl: str
    location: str
    type: str
    Moisture: str

