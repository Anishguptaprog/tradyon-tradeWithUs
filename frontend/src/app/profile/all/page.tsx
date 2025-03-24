"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/fetch";
import { Profile } from "@/types";

export default function ProfileListPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData<Profile[]>(`/profile/all`)
      .then(setProfiles)
      .catch(() => setError("Failed to load profiles."));
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">All Profiles</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {profiles.map((profile) => (
            <li key={profile.ProfileId} className="border p-4 rounded shadow-md">
              <h2 className="text-lg font-semibold">{profile.BusinessName}</h2>
              <p>Overview: {profile.BusinessOverview}</p>
              <p>Address: {profile.Address}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
