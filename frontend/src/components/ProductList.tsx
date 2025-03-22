import ProductCard from "./ProductCard";
import { Product } from "@/types";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.ProductId} product={product} />
      ))}
    </div>
  );
}