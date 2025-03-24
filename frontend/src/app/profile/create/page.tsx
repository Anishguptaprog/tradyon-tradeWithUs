/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { fetchData } from "@/lib/fetch";
import ProfileForm from "@/components/ProfileForm";
import { Profile } from "@/types";

export default function CreateProfile() {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (formData: Profile) => {
    try {
      await fetchData(`/profile`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      setMessage("Profile created successfully!");
    } catch (error) {
      setMessage("Failed to create profile.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Create Profile</h1>
      <ProfileForm onSubmit={handleSubmit} />
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
}
