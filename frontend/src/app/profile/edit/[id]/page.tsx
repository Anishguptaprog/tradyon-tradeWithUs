"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchData } from "@/lib/fetch";
import { Profile } from "@/types";
import ProfileForm from "@/components/ProfileForm";

export default function EditProfile({ params }: { params: { id: string } }) {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [id, setId] = useState<string | null>(null);
  const router = useRouter();
  useEffect(() => {
    async function resolveParams() {
      const resolvedId = await params.id;
      setId(resolvedId);
    }
    resolveParams();
  }, [params]);

  useEffect(() => {
    fetchData<Profile>(`/profile/${id}`)
      .then(setProfile)
      .catch(() => console.error("Failed to load profile"));
  }, [id]);

  const handleSubmit = async (formData: Profile) => {
    await fetchData(`/profile/${id}`, {
      method: "PUT",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });
    router.push(`/profile/${id}`);
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
