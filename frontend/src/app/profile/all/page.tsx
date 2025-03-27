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
import { Profile } from "@/types";
import { 
  MapPin, 
  Building, 
  ShieldCheck, 
  ChevronRight 
} from "lucide-react";
import Link from "next/link";

export default function ProfileListPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<Profile[]>("/profile/all")
      .then(setProfiles)
      .catch(() => setError("Failed to load profiles."));
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
          Business Profiles
        </h1>

        {profiles.length === 0 ? (
          <p className="text-center text-gray-600">No profiles available.</p>
        ) : (
          <div className="space-y-4">
            {profiles.map((profile) => (
              <Card key={profile._id} className="hover:shadow-md transition-shadow">
                <CardHeader className="bg-green-50 p-4">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl text-green-800">
                      {profile.BusinessName}
                    </CardTitle>
                    <Badge variant="secondary">Verified</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-4">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <div className="flex justify-center mb-2">
                        <Building className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{profile.Established}</p>
                      <p className="text-xs text-gray-500">Established</p>
                    </div>
                    <div>
                      <div className="flex justify-center mb-2">
                        <MapPin className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{profile.Location}</p>
                      <p className="text-xs text-gray-500">Location</p>
                    </div>
                    <div>
                      <div className="flex justify-center mb-2">
                        <ShieldCheck className="h-6 w-6 text-green-600" />
                      </div>
                      <p className="text-sm font-medium">{profile.BusinessType}</p>
                      <p className="text-xs text-gray-500">Business Type</p>
                    </div>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Export Percentage</p>
                      <p className="font-semibold text-green-800">
                        {profile.ExportPercentage}%
                      </p>
                    </div>
                    <Link href={`/profile/${profile._id}`}>
                      <Button variant="outline" className="flex items-center">
                        View Profile
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