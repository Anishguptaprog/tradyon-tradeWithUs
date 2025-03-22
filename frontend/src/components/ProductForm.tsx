import { useState } from "react";
import { Product } from "@/types";

interface ProductFormProps {
  onSubmit: (data: Product) => void;
}

export default function ProductForm({ onSubmit }: ProductFormProps) {
  const [form, setForm] = useState<Product>({
    ProductId: "",
    ProductName: "",
    Origin: "",
    PackingDetails: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="flex flex-col space-y-4 p-4 border rounded shadow-md bg-white"
    >
      <input
        type="text"
        placeholder="Product ID"
        className="border p-2 rounded"
        value={form.ProductId}
        onChange={(e) => setForm({ ...form, ProductId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Product Name"
        className="border p-2 rounded"
        value={form.ProductName}
        onChange={(e) => setForm({ ...form, ProductName: e.target.value })}
      />
      <input
        type="text"
        placeholder="Origin"
        className="border p-2 rounded"
        value={form.Origin}
        onChange={(e) => setForm({ ...form, Origin: e.target.value })}
      />
      <input
        type="text"
        placeholder="Packing Details"
        className="border p-2 rounded"
        value={form.PackingDetails}
        onChange={(e) => setForm({ ...form, PackingDetails: e.target.value })}
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
}
