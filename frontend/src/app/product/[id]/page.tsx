"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { fetchData } from "@/lib/fetch";
import { Product } from "@/types";
import { 
  CheckCircle2, 
  MapPin, 
  ShieldCheck, 
  Box, 
  ArrowLeft 
} from "lucide-react";
import Image from "next/image";
import VerificationBadge from "@/components/VerificationBadge";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData<Product>(`/product/${params.id}`)
      .then(setProduct)
      .catch(() => console.error("Failed to load product"));
  }, [params.id]);

  if (!product) {
    return <p className="text-center text-gray-600">Loading...</p>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4">
      <Button 
        variant="ghost" 
        size="icon" 
        className="mb-4"
        onClick={() => router.back()}
      >
        <ArrowLeft className="h-6 w-6" />
      </Button>

      <div className="max-w-md mx-auto space-y-4">
        <Card className="overflow-hidden">
          <div className="bg-green-50 p-4 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-green-800">{product.ProductName}</h1>
              <div className="flex items-center space-x-2 mt-2">
                <Badge variant="secondary">Verified</Badge><VerificationBadge/>
                <span className="text-sm text-gray-600">Seller: ABC Trader</span>
              </div>
            </div>
            <div className="bg-white rounded-full p-2">
              <Image 
                src="/images/apple.jpg" 
                alt="Product" 
                width={100}
                height={100}
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
          </div>

          <CardContent className="p-4 space-y-4">
            <div className="grid grid-cols-3 gap-4 text-center">
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

            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-2">Product Details</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price</span>
                  <span className="font-medium">${product.Price?.toFixed(2) || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Colour</span>
                  <span className="font-medium">{product.Colour}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Moisture</span>
                  <span className="font-medium">{product.Moisture}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Form & Cut</span>
                  <span className="font-medium">{product.FormAndCut}</span>
                </div>
              </div>
            </div>
            
            <Separator />

            <div>
              <h2 className="text-lg font-semibold mb-2">Certifications</h2>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Organic Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Fair Trade</span>
                </div>
              </div>
            </div>

            <Separator />

            <Button className="w-full bg-green-600 hover:bg-green-700">
              Contact Seller
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}