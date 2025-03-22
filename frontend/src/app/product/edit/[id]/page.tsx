"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Product } from "@/types";
import ProductForm from "@/components/ProductForm";

export default function EditProduct({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData<Product>(`/api/products/${params.id}`)
      .then(setProduct)
      .catch(() => console.error("Failed to load product"));
  }, [params.id]);

  const handleSubmit = async (formData: Product) => {
    await fetchData(`/api/products/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    router.push("/product/all");
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      {product ? <ProductForm onSubmit={handleSubmit} /> : <p>Loading...</p>}
    </div>
  );
}
