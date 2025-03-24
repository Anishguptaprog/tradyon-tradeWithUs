import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
  showPrice: boolean;
  onTogglePrice: () => void;
}

export default function ProductCard({ product, showPrice, onTogglePrice }: ProductCardProps) {
  console.log("Product Card Data:", product);
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      {/* Product Image */}
      <Image
        src={product.Image}
        alt={product.ProductName}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Product Details */}
      <h2 className="text-lg font-semibold mt-2">{product.ProductName}</h2>
      <p className="text-sm text-gray-600">{product.Origin}</p>
      <p className="text-sm text-gray-600">Packing: {product.PackingDetails}</p>
      <p className="text-sm text-gray-600">Forecast: {product.Forecast}</p>
      <p className="text-sm text-gray-600">Color: {product.Colour}</p>
      <p className="text-sm text-gray-600">Cultivation: {product.CultivationType}</p>

      {/* Show Quote Button */}
      <button
        onClick={onTogglePrice}
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {showPrice ? "Hide Quote" : "Show Quote"}
      </button>

      {/* Price (Visible Only When Show Quote is Clicked) */}
      {showPrice && product.Price !== undefined && (
        <p className="mt-2 text-lg font-semibold text-green-600">
          Price: ${product.Price.toFixed(2)}
        </p>
      )}
    </div>
  );
}
