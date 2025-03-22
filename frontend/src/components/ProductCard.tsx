import Link from "next/link";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{product.ProductName}</h2>
      <p>Origin: {product.Origin}</p>
      <Link href={`/product/${product.ProductId}`} className="text-blue-500">View Details</Link>
    </div>
  );
}