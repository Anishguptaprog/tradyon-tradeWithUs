"use client"
import { useState } from "react";
import { Product } from "@/types";

interface ProductFormProps {
  product?: Product; // Optional for Create Product, Required for Edit Product
  onSubmit: (formData: Product) => Promise<void>;
}

export default function ProductForm({ product, onSubmit }: ProductFormProps) {
  const [formData, setFormData] = useState<Product>(
    product || {
      _id: "",
      ProductName: "",
      Origin: "",
      PackingDetails: "",
      Price: undefined,
      Forecast: "",
      Colour: "",
      CultivationType: "",
      Moisture: "",
      FormAndCut: "",
      Image: "",
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800">{product ? "Edit Product" : "Add New Product"}</h2>

      {/* Product Name */}
      <div>
        <label className="block text-gray-700">Product Name</label>
        <input
          type="text"
          name="ProductName"
          value={formData.ProductName}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Origin */}
      <div>
        <label className="block text-gray-700">Origin</label>
        <input
          type="text"
          name="Origin"
          value={formData.Origin}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Packing Details */}
      <div>
        <label className="block text-gray-700">Packing Details</label>
        <input
          type="text"
          name="PackingDetails"
          value={formData.PackingDetails}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Price */}
      <div>
        <label className="block text-gray-700">Price</label>
        <input
          type="number"
          name="Price"
          value={formData.Price ?? ""}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Forecast */}
      <div>
        <label className="block text-gray-700">Forecast</label>
        <input
          type="text"
          name="Forecast"
          value={formData.Forecast}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Colour */}
      <div>
        <label className="block text-gray-700">Colour</label>
        <input
          type="text"
          name="Colour"
          value={formData.Colour}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Cultivation Type */}
      <div>
        <label className="block text-gray-700">Cultivation Type</label>
        <input
          type="text"
          name="CultivationType"
          value={formData.CultivationType}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Moisture */}
      <div>
        <label className="block text-gray-700">Moisture</label>
        <input
          type="text"
          name="Moisture"
          value={formData.Moisture}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Form and Cut */}
      <div>
        <label className="block text-gray-700">Form and Cut</label>
        <input
          type="text"
          name="FormAndCut"
          value={formData.FormAndCut}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Image */}
      <div>
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          name="Image"
          value={formData.Image}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Save Product
      </button>
    </form>
  );
}
