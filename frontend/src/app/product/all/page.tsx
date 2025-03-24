"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetch";
import { Product } from "@/types";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<Product[]>(`/product/all`)
      .then(setProducts)
      .catch(() => setError("Failed to load products."));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">All Products</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <li key={product._id} className="border p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold">{product.ProductName}</h2>
              <p>Origin: {product.Origin}</p>
              <p>Packing: {product.PackingDetails}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
