export async function fetchProduct(id: string) {
    const res = await fetch(`http://localhost:8000/product/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  }
  
  export async function fetchProfile(id: string) {
    const res = await fetch(`http://localhost:8000/profile/${id}`);
    if (!res.ok) throw new Error("Failed to fetch profile");
    return res.json();
  }
  