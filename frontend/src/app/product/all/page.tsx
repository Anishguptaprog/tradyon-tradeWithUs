"use client";
import { useEffect, useState } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { fetchData } from "@/lib/fetch";
import { Product } from "@/types";
import { 
  MapPin, 
  Box, 
  ShieldCheck, 
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<Product[]>("/product/all")
      .then(setProducts)
      .catch(() => setError("Failed to load products."));
  }, []);

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
          Our Products
        </h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-600">No products available.</p>
        ) : (
          <div className="space-y-4">
            {products.map((product) => (
              <Card key={product._id} className="hover:shadow-md transition-shadow">
                <CardHeader className="bg-green-50 p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-green-800">
                      {product.ProductName}
                    </CardTitle>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="flex justify-center mb-2">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{product.Origin}</p>
                      <p className="text-xs text-gray-500">Origin</p>
                    </div>
                    <div>
                      <div className="flex justify-center mb-2">
                        <Box className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{product.PackingDetails}</p>
                      <p className="text-xs text-gray-500">Packing</p>
                    </div>
                    <div>
                      <div className="flex justify-center mb-2">
                        <ShieldCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{product.CultivationType}</p>
                      <p className="text-xs text-gray-500">Type</p>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Price</p>
                      <p className="font-semibold text-green-800">
                        ${product.Price?.toFixed(2) || 'N/A'}
                      </p>
                    </div>
                    <Link href={`/product/${product._id}`}>
                      <Button variant="outline" className="flex items-center">
                        View Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}