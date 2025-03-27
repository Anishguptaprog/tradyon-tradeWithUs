/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Profile } from "@/types";
import { 
  MapPin, 
  Building, 
  ShieldCheck, 
  TrendingUp, 
  Download, 
  Package, 
  ShoppingCart 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function ProfileDetailPage() {
  const params = useParams();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!params?.id) return;

    fetchData<Profile>(`/profile/${params.id}`)
      .then(setProfile)
      .catch(() => setError("Failed to load profile."));
  }, [params?.id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Product Image and Name */}
      <div className="text-center mb-6">
        <Image
          src={`/images/${profile.Image}`} // Ensure image path is correct
          alt={profile.BusinessName}
          width={150}
          height={150}
          className="mx-auto rounded-lg"
        />
        <h1 className="text-3xl font-bold text-green-800 mt-2">
          {profile.BusinessName}
        </h1>
      </div>

      {/* Key Attributes */}
      <div className="grid grid-cols-4 gap-4 text-center mb-6">
        <div>
          <p className="text-gray-500 text-sm">Origin</p>
          <p className="font-semibold">{profile.Address}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Form & Cut</p>
          <p className="font-semibold">{profile.FormAndCut}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Moisture</p>
          <p className="font-semibold">{profile.Moisture}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Color</p>
          <p className="font-semibold">{profile.Colour}</p>
        </div>
      </div>

      {/* Seller Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800">Seller</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold">{profile.Owner}</p>
              <p className="text-gray-500">{profile.BusinessType}</p>
            </div>
            <Badge variant="secondary">Verified</Badge>
          </div>
          <p className="mt-2 text-gray-600">{profile.Address}</p>
        </CardContent>
      </Card>

      {/* Market Price Trend */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Market Price Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Prices are higher in the market. Tap below to see detailed price trends.
          </p>
          <Button variant="outline" className="mt-3 w-full">
            View Price History
          </Button>
        </CardContent>
      </Card>

      {/* Product Details */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800 flex justify-between">
            Product Details
            <Button variant="ghost" size="sm" className="flex items-center">
              <Download className="h-4 w-4 mr-1" /> Download
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500 text-sm">Product Type</p>
              <p className="font-semibold">{profile.BusinessType}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Processing</p>
              <p className="font-semibold">Whole / Ground</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Capacity</p>
              <p className="font-semibold">50,000 kg / Annually</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Cultivation</p>
              <p className="font-semibold">{profile.CultivationType}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Color</p>
              <p className="font-semibold">{profile.Colour}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800">Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary">ISO 9001:2015</Badge>
          <Badge variant="secondary" className="ml-2">Organic</Badge>
        </CardContent>
      </Card>

      {/* Shipping Details */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center">
            <Package className="h-5 w-5 mr-2" />
            Shipping Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Port of Loading: India</p>
          <p className="text-gray-500">Payment Terms: L/C, T/T</p>
          <p className="text-gray-500">Minimum Order: 5 Tons</p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4">
        <Button variant="outline" className="w-1/2 mr-2">
          View More Info
        </Button>
        <Button className="w-1/2 bg-green-600 text-white hover:bg-green-700 flex items-center">
          <ShoppingCart className="h-5 w-5 mr-2" /> Request Quote
        </Button>
      </div>
    </div>
  );
}
