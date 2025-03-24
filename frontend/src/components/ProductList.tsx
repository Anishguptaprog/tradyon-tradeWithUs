"use client"
import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetch";
import ProductCard from "./ProductCard";
import { Product } from "../types";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [visiblePrices, setVisiblePrices] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchData<Product[]>("/product/all");
        console.log("Fetched Products:", data);
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    loadProducts();
  }, []);

  // Toggle price visibility for a specific product
  const togglePriceVisibility = (productId: string) => {
    setVisiblePrices((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            showPrice={visiblePrices[product._id] || false}
            onTogglePrice={() => togglePriceVisibility(product._id)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
}
