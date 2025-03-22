"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Product } from "@/types";

export default function ProductDetails({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData<Product>(`/api/products/${params.id}`)
      .then(setProduct)
      .catch(() => console.error("Failed to load product"));
  }, [params.id]);

  if (!product) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">{product.ProductName}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700">
          <strong>Origin:</strong> {product.Origin}
        </p>
        <p className="text-gray-700">
          <strong>Packing Details:</strong> {product.PackingDetails}
        </p>
      </div>
      <button
        onClick={() => router.push(`/product/edit/${product.ProductId}`)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Edit Product
      </button>
    </div>
  );
}
