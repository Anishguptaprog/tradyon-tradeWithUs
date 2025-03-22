/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { fetchData } from "@/lib/fetch";
import ProductForm from "@/components/ProductForm";
import { Product } from "@/types";

export default function CreateProduct() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (formData: Product) => {
    try {
      await fetchData("/api/product", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      setMessage("Product created successfully!");
    } catch (error) {
      setMessage("Failed to create product.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
