"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Profile } from "@/types";

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData<Profile>(`/profile/${params.id}`)
      .then(setProfile)
      .catch(() => setError("Failed to load profile."));
  }, [params.id]);

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!profile) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">{profile.BusinessName}</h1>
      <p className="text-gray-700">{profile.BusinessOverview}</p>
      <p className="mt-2"><strong>Address:</strong> {profile.Address}</p>

      <button 
        onClick={() => router.push(`/profile/edit/${profile._id}`)}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Edit Profile
      </button>
    </div>
  );
}
