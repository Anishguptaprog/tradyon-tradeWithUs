"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Profile } from "@/types";
import ProfileForm from "@/components/ProfileForm";

export default function EditProfile({ params }: { params: { id: string } }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchData<Profile>(`/api/profiles/${params.id}`)
      .then(setProfile)
      .catch(() => console.error("Failed to load profile"));
  }, [params.id]);

  const handleSubmit = async (formData: Profile) => {
    await fetchData(`/api/profiles/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    router.push(`/profile/${params.id}`);
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      {profile ? (
        <ProfileForm profile={profile} onSubmit={handleSubmit} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
